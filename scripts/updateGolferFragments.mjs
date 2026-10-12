import { readFileSync, readdirSync } from "fs"
import path from "path"
import graphql from "gatsby/graphql.js"

const { parse } = graphql
const FRAGMENTS_PATH = "src/hooks/fragments/golfers"

function selectionShape(values) {
  const present = values
    .flatMap(value => (Array.isArray(value) ? value : [value]))
    .filter(value => value !== null && value !== undefined)
  if (!present.length) return undefined
  if (present.every(value => typeof value !== "object")) return null
  const fields = new Map()
  for (const value of present) {
    if (typeof value !== "object") {
      throw new Error(
        "Cannot generate a fragment for mixed scalar and object values."
      )
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
  return `${indent}${name} {\n${[...shape]
    .map(([key, value]) => renderField(key, value, `${indent}  `))
    .join("\n")}\n${indent}}`
}

function updateFragment(source, shape, filePath, removeMissing = false) {
  const template = source.match(
    /^[ \t]*export\s+const\s+\w+\s*=\s*graphql`([\s\S]*?)`/m
  )
  if (!template)
    throw new Error(
      `${filePath} does not contain an exported GraphQL fragment.`
    )
  const query = template[1]
  const offset = template.index + template[0].indexOf("`") + 1
  const document = parse(query)
  const fragment = document.definitions.find(
    definition => definition.kind === "FragmentDefinition"
  )
  if (!fragment)
    throw new Error(`${filePath} does not contain a fragment definition.`)
  const edits = []

  function getLineRange(node) {
    const start = query.lastIndexOf("\n", node.loc.start - 1) + 1
    const endOfLine = query.indexOf("\n", node.loc.end)
    const end = endOfLine === -1 ? query.length : endOfLine + 1
    const indent = query.slice(start, node.loc.start)
    if (
      !/^[ \t]*$/.test(indent) ||
      !/^[ \t]*$/.test(
        query.slice(node.loc.end, endOfLine === -1 ? query.length : endOfLine)
      )
    ) {
      throw new Error(
        `${filePath}: GraphQL selections must be on their own lines.`
      )
    }
    return { start, end, indent }
  }

  function reconcileSelectionSet(selectionSet, fields) {
    const present = new Set()
    for (const selection of selectionSet.selections) {
      const name =
        selection.kind === "Field" && !selection.alias
          ? selection.name.value
          : undefined
      const fieldShape = name === undefined ? undefined : fields.get(name)
      if (fieldShape === undefined) {
        if (!removeMissing) continue
        const { start, end } = getLineRange(selection)
        edits.push({ start: offset + start, end: offset + end, text: "" })
        continue
      }

      present.add(name)
      if (fieldShape === null && selection.selectionSet && removeMissing) {
        const { start, end, indent } = getLineRange(selection)
        edits.push({
          start: offset + start,
          end: offset + end,
          text: `${renderField(name, fieldShape, indent)}\n`,
        })
      } else if (fieldShape !== null && !selection.selectionSet) {
        if (!removeMissing) {
          throw new Error(
            `${filePath}: '${name}' requires an object selection.`
          )
        }
        const { start, end, indent } = getLineRange(selection)
        edits.push({
          start: offset + start,
          end: offset + end,
          text: `${renderField(name, fieldShape, indent)}\n`,
        })
      } else if (fieldShape !== null) {
        reconcileSelectionSet(selection.selectionSet, fieldShape)
      }
    }

    const missing = [...fields].filter(([name]) => !present.has(name))
    if (missing.length) {
      const close = selectionSet.loc.end - 1
      const lineStart = query.lastIndexOf("\n", close) + 1
      const closeIndent = query.slice(lineStart, close)
      if (!/^[ \t]*$/.test(closeIndent)) {
        throw new Error(
          `${filePath}: fragment closing braces must be on separate lines.`
        )
      }
      const text =
        missing
          .map(([name, value]) => renderField(name, value, `${closeIndent}  `))
          .join("\n") + "\n"
      edits.push({
        start: offset + lineStart,
        end: offset + lineStart,
        text,
      })
    }
  }

  reconcileSelectionSet(fragment.selectionSet, shape)
  for (const { start, end, text } of edits.sort((a, b) => b.start - a.start)) {
    source = source.slice(0, start) + text + source.slice(end)
  }
  return source
}

export function prepareGolferFragmentUpdates(playersObj, rounds, yearKey) {
  const files = new Map(
    readdirSync(FRAGMENTS_PATH)
      .filter(file => file.endsWith(".js"))
      .map(file => [file.slice(0, -3), file])
  )
  const participants = new Set(
    rounds.flatMap(round =>
      round.matches.flatMap(match => [...match.green, ...match.blue])
    )
  )
  for (const name of participants) {
    if (!files.has(name))
      throw new Error(`No golfer fragment found for '${name}'.`)
  }

  const updates = []
  for (const [name, file] of files) {
    const player = playersObj[name]
    if (!player?.year?.[yearKey]) continue
    const shape = selectionShape([
      {
        name: player.name,
        appearances: player.appearances,
        cupRecord: player.cupRecord,
        handicap: player.handicap,
        year: { [yearKey]: player.year[yearKey] },
      },
    ])
    const filePath = path.join(FRAGMENTS_PATH, file)
    const source = readFileSync(filePath, "utf8")
    const updated = updateFragment(source, shape, filePath)
    if (updated !== source) updates.push({ filePath, source: updated })
  }
  return updates
}

export function prepareAllGolferFragmentUpdates(playersObj) {
  const files = new Map(
    readdirSync(FRAGMENTS_PATH)
      .filter(file => file.endsWith(".js") && file !== "example.js")
      .map(file => [file.slice(0, -3), file])
  )
  const playerNames = Object.keys(playersObj).filter(
    name => !name.endsWith("_example")
  )

  for (const name of playerNames) {
    if (!files.has(name))
      throw new Error(`No golfer fragment found for '${name}'.`)
  }

  const updates = []
  for (const [name, file] of files) {
    const player = playersObj[name]
    if (!player) {
      throw new Error(`No player data found for golfer fragment '${name}'.`)
    }

    const shape = selectionShape([player])
    if (!shape)
      throw new Error(`No selectable player data found for '${name}'.`)

    const filePath = path.join(FRAGMENTS_PATH, file)
    const source = readFileSync(filePath, "utf8")
    const updated = updateFragment(source, shape, filePath, true)
    if (updated !== source) updates.push({ filePath, source: updated })
  }
  return updates
}
