import { readFileSync, readdirSync, writeFileSync } from "fs"
import path from "path"
import process from "process"

const DEFAULT_YEAR = "2026"
const FRAGMENTS_PATH = "src/hooks/fragments/player-points"

function parseCliArgs(argv) {
  let year = DEFAULT_YEAR
  let roundsPath
  let check = false

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]

    if (arg === "--help" || arg === "-h") {
      console.log(
        "Usage: node scripts/updatePlayerPoints.mjs [--year 2026] [--rounds src/data/rounds-2026.json] [--check]"
      )
      process.exit(0)
    }

    if (arg === "--check") {
      check = true
      continue
    }

    if (arg.startsWith("--year=")) {
      year = arg.slice("--year=".length)
      continue
    }

    if (arg === "--year" || arg === "-y") {
      const value = argv[index + 1]
      if (!value) throw new Error("Missing value for --year.")
      year = value
      index += 1
      continue
    }

    if (arg.startsWith("--rounds=")) {
      roundsPath = arg.slice("--rounds=".length)
      continue
    }

    if (arg === "--rounds") {
      const value = argv[index + 1]
      if (!value) throw new Error("Missing value for --rounds.")
      roundsPath = value
      index += 1
      continue
    }

    throw new Error(`Unknown argument '${arg}'. Use --help for usage.`)
  }

  if (!/^\d{4}$/.test(year)) {
    throw new Error(`Invalid --year '${year}'. Use a 4-digit year like 2026.`)
  }

  return {
    check,
    yearKey: `_${year}`,
    roundsPath: roundsPath || `src/data/rounds-${year}.json`,
  }
}

function readRounds(roundsPath) {
  const rounds = JSON.parse(readFileSync(roundsPath, "utf8"))
  if (!Array.isArray(rounds)) {
    throw new Error(`${roundsPath} must contain an array of rounds.`)
  }
  return rounds
}

function getParticipants(rounds) {
  const participants = new Set()

  rounds.forEach((round, roundIndex) => {
    if (!Array.isArray(round?.matches)) {
      throw new Error(`Round ${round?.round ?? roundIndex + 1} must contain matches.`)
    }

    round.matches.forEach((match, matchIndex) => {
      for (const team of ["green", "blue"]) {
        if (!Array.isArray(match?.[team])) {
          throw new Error(
            `Round ${round?.round ?? roundIndex + 1}, match ${matchIndex + 1} must contain a ${team} array.`
          )
        }

        match[team].forEach(player => {
          if (typeof player !== "string" || !player.trim()) {
            throw new Error(
              `Round ${round?.round ?? roundIndex + 1}, match ${matchIndex + 1} contains an invalid player name.`
            )
          }
          participants.add(player)
        })
      }
    })
  })

  return participants
}

function buildFragmentFileMap() {
  const files = readdirSync(FRAGMENTS_PATH).filter(file =>
    file.endsWith("PlayerPoints.js")
  )

  return new Map(
    files.map(file => [file.slice(0, -"PlayerPoints.js".length).toLowerCase(), file])
  )
}

function yearSelection(yearKey) {
  return `${yearKey} {
  handicap
  id
  team
  points {
    game
    id
    wins
    ties
    losses
  }
}`
}

function addYearSelection(source, yearKey, filePath) {
  const existingYearPattern = new RegExp(`^\\s*${yearKey}\\s*\\{`, "m")
  if (existingYearPattern.test(source)) return source

  const yearStart = source.match(/^(\s*)year\s*\{\s*$/m)
  if (!yearStart || yearStart.index === undefined) {
    throw new Error(`${filePath} does not contain a year selection.`)
  }

  const insertionPoint = yearStart.index + yearStart[0].length
  const indentation = `${yearStart[1]}  `
  const selection = yearSelection(yearKey)
    .split("\n")
    .map(line => `${indentation}${line}`)
    .join("\n")

  return `${source.slice(0, insertionPoint)}\n${selection}${source.slice(insertionPoint)}`
}

function main() {
  const { check, yearKey, roundsPath } = parseCliArgs(process.argv.slice(2))
  const participants = getParticipants(readRounds(roundsPath))
  const fragmentFiles = buildFragmentFileMap()
  const changedFiles = []

  for (const player of [...participants].sort()) {
    const fragmentFile = fragmentFiles.get(player.toLowerCase())
    if (!fragmentFile) {
      throw new Error(`No player-points fragment found for '${player}'.`)
    }

    const filePath = path.join(FRAGMENTS_PATH, fragmentFile)
    const source = readFileSync(filePath, "utf8")
    const updatedSource = addYearSelection(source, yearKey, filePath)

    if (updatedSource !== source) {
      changedFiles.push(filePath)
      if (!check) writeFileSync(filePath, updatedSource)
    }
  }

  if (check && changedFiles.length > 0) {
    console.error(
      `${changedFiles.length} player-points fragment(s) need ${yearKey}:\n${changedFiles.join("\n")}`
    )
    process.exitCode = 1
    return
  }

  const action = check ? "Checked" : "Updated"
  console.log(
    `${action} ${participants.size} player-points fragments from ${roundsPath}; ${changedFiles.length} changed.`
  )
}

main()