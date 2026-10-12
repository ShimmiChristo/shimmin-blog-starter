import { readFileSync, readdirSync } from "fs"
import path from "path"
import graphql from "gatsby/graphql.js"

const { parse } = graphql
const FRAGMENTS_PATH = "src/hooks/fragments/golfers"

function selectionShape(values) {
  const present = values.flatMap(value => Array.isArray(value) ? value : [value])
    .filter(value => value !== null && value !== undefined)
  if (!present.length) return undefined
  if (present.every(value => typeof value !== "object")) return null
  const fields = new Map()
  for (const value of present) {
    if (typeof value !== "object") {
      throw new Error("Cannot generate a fragment for mixed scalar and object values.")
    }
    for (const key of Object.keys(value)) {
      if (!/^[_A-Za-z][_0-9A-Za-z]*$/.test(key)) {
        throw new Error(`Invalid GraphQL field name '${key}' in player data.`)
      }
      if (!fields.has(key)) fields.set(key, [])
      fields.get(key).push(value[key])
    }
  }
  const shape = new Map()
  for (const [key, fieldValues] of fields) {
    const fieldShape = selectionShape(fieldValues)
    if (fieldShape !== undefined) shape.set(key, fieldShape)
  }
  return shape.size ? shape : undefined
}

function renderField(name, shape, indent) {
  if (shape === null) return `${indent}${name}`
  return `${indent}${name} {\n${[...shape].map(([key, value]) =>
    renderField(key, value, `${indent}  `)).join("\n")}\n${indent}}`
}

function updateFragment(source, shape, filePath) {
  const template = source.match(/^[ \t]*export\s+const\s+\w+\s*=\s*graphql`([\s\S]*?)`/m)
  if (!template) throw new Error(`${filePath} does not contain an exported GraphQL fragment.`)
  const query = template[1]
  const offset = template.index + template[0].indexOf("`") + 1
  const document = parse(query)
  const fragment = document.definitions.find(definition => definition.kind === "FragmentDefinition")
  if (!fragment) throw new Error(`${filePath} does not contain a fragment definition.`)
  const edits = []

  function addMissing(selectionSet, fields) {
    const missing = []
    for (const [name, fieldShape] of fields) {
      const field = selectionSet.selections.find(selection =>
        selection.kind === "Field" && !selection.alias && selection.name.value === name)
      if (!field) {
        missing.push([name, fieldShape])
      } else if (fieldShape !== null) {
        if (!field.selectionSet) {
          throw new Error(`${filePath}: '${name}' requires an object selection.`)
        }
        addMissing(field.selectionSet, fieldShape)
      }
    }
    if (!missing.length) return
    const close = selectionSet.loc.end - 1
    const lineStart = query.lastIndexOf("\n", close) + 1
    const closeIndent = query.slice(lineStart, close)
    if (!/^[ \t]*$/.test(closeIndent)) {
      throw new Error(`${filePath}: fragment closing braces must be on separate lines.`)
    }
    const text = missing.map(([name, value]) =>
      renderField(name, value, `${closeIndent}  `)).join("\n") + "\n"
    edits.push({ position: offset + lineStart, text })
  }

  addMissing(fragment.selectionSet, shape)
  for (const { position, text } of edits.sort((a, b) => b.position - a.position)) {
    source = source.slice(0, position) + text + source.slice(position)
  }
  return source
}

export function prepareGolferFragmentUpdates(playersObj, rounds, yearKey) {
  const files = new Map(readdirSync(FRAGMENTS_PATH)
    .filter(file => file.endsWith(".js"))
    .map(file => [file.slice(0, -3), file]))
  const participants = new Set(rounds.flatMap(round =>
    round.matches.flatMap(match => [...match.green, ...match.blue])))
  for (const name of participants) {
    if (!files.has(name)) throw new Error(`No golfer fragment found for '${name}'.`)
  }

  const updates = []
  for (const [name, file] of files) {
    const player = playersObj[name]
    if (!player?.year?.[yearKey]) continue
    const shape = selectionShape([{
      name: player.name,
      appearances: player.appearances,
      cupRecord: player.cupRecord,
      handicap: player.handicap,
      year: { [yearKey]: player.year[yearKey] },
    }])
    const filePath = path.join(FRAGMENTS_PATH, file)
    const source = readFileSync(filePath, "utf8")
    const updated = updateFragment(source, shape, filePath)
    if (updated !== source) updates.push({ filePath, source: updated })
  }
  return updates
}
