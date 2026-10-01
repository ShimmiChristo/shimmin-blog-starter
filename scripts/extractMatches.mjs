// Extracts <Match>/<MatchCondensed> props from the scores pages into src/data/matches.json.
import { readFileSync, writeFileSync } from "node:fs"
import { parse } from "@babel/parser"
import traverseModule from "@babel/traverse"
import generateModule from "@babel/generator"

const traverse = traverseModule.default ?? traverseModule
const generate = generateModule.default ?? generateModule

// scores.js is the live 2026 page; scores-2026.js is an older copy with a stale roster.
const PAGES = [
  "src/pages/scores-2023.js",
  "src/pages/scores-2024.js",
  "src/pages/scores-2025.js",
  "src/pages/scores.js",
]
const OUTPUT = "src/data/matches.json"
const MATCH_TAGS = ["Match", "MatchCondensed"]
const KEEP_FIELDS = [
  "section",
  "matchId",
  "year",
  "courseMatch",
  "holes",
  "gameplay",
  ...[1, 2, 3, 4].flatMap(n => [
    `player${n}`,
    `player${n}Tees`,
    `player${n}MatchHandicap`,
  ]),
]

function extract(file) {
  const src = readFileSync(file, "utf8")
  const ast = parse(src, { sourceType: "module", plugins: ["jsx"] })
  const scope = {}
  const matches = []

  traverse(ast, {
    VariableDeclarator(path) {
      if (path.node.id.type !== "Identifier" || !path.node.init) return
      const code = generate(path.node.init).code
      try {
        scope[path.node.id.name] = new Function(
          ...Object.keys(scope),
          `return (${code})`
        )(...Object.values(scope))
      } catch {
        // hooks, styled-components, and anything needing runtime data are skipped
      }
    },
    JSXElement(path) {
      const name = path.node.openingElement.name.name
      if (!MATCH_TAGS.includes(name)) return
      const section = path
        .findParent(
          p =>
            p.isJSXElement() &&
            p.node.openingElement.attributes.some(
              a => a.name?.name === "data-link-id"
            )
        )
        ?.node.openingElement.attributes.find(
          a => a.name?.name === "data-link-id"
        ).value.value
      const props = { section }
      for (const attr of path.node.openingElement.attributes) {
        const key = attr.name.name
        if (attr.value === null) props[key] = true
        else if (attr.value.type === "StringLiteral") props[key] = attr.value.value
        else {
          const code = generate(attr.value.expression).code
          try {
            props[key] = new Function(
              ...Object.keys(scope),
              `return (${code})`
            )(...Object.values(scope))
          } catch {
            // matchTime etc. reference hook data; none of it affects scoring
            if (KEEP_FIELDS.includes(key)) {
              throw new Error(`${file}: cannot evaluate ${key}={${code}}`)
            }
          }
        }
      }
      matches.push(props)
    },
  })
  return matches
}

const out = {}
for (const file of PAGES) {
  for (const match of extract(file)) {
    const kept = Object.fromEntries(
      KEEP_FIELDS.filter(key => match[key] !== undefined).map(key => [
        key,
        match[key],
      ])
    )
    ;(out[match.year] ??= []).push(kept)
  }
}
writeFileSync(OUTPUT, `${JSON.stringify(out, null, 2)}\n`)
for (const [year, matches] of Object.entries(out)) {
  console.log(`${year}: ${matches.length} matches`)
}
console.log(`Wrote ${OUTPUT}`)
