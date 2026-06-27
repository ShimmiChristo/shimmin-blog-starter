import { readFileSync, writeFileSync } from "fs"
import process from "process"

const DEFAULT_YEAR = "2026"
const PLAYERS_PATH = "src/data/playersUpdate.json"

function parseCliArgs(argv) {
  let year = DEFAULT_YEAR
  let roundsPath

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]

    if (arg === "--help" || arg === "-h") {
      console.log("Usage: node scripts/updatePlayers.mjs [--year 2026] [--rounds src/data/rounds-2026.json]")
      process.exit(0)
    }

    if (arg.startsWith("--year=")) {
      year = arg.slice("--year=".length)
      continue
    }

    if (arg === "--year" || arg === "-y") {
      const value = argv[i + 1]
      if (!value) throw new Error("Missing value for --year.")
      year = value
      i += 1
      continue
    }

    if (arg.startsWith("--rounds=")) {
      roundsPath = arg.slice("--rounds=".length)
      continue
    }

    if (arg === "--rounds") {
      const value = argv[i + 1]
      if (!value) throw new Error("Missing value for --rounds.")
      roundsPath = value
      i += 1
      continue
    }

    throw new Error(`Unknown argument '${arg}'. Use --help for usage.`)
  }

  if (!/^\d{4}$/.test(year)) {
    throw new Error(`Invalid --year '${year}'. Use a 4-digit year like 2026.`)
  }

  const yearKey = `_${year}`
  return {
    year,
    yearKey,
    roundsPath: roundsPath || `src/data/rounds-${year}.json`,
  }
}

const GAME_NAME_MAP = {
  scramble: "Scramble",
  bestBallStrokeplay: "Best Ball Strokeplay",
  twoBestBall: "Best Ball",
  alternate: "Alternate",
  bestBall: "Best Ball",
  bramble: "Bramble",
  pinehurst: "Pinehurst",
  singles: "Singles",
}

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"))
}

function buildKnownPlayersByTeam(playersObj, yearKey) {
  const known = {
    green: new Set(),
    blue: new Set(),
  }

  for (const [name, player] of Object.entries(playersObj)) {
    const team = player?.year?.[yearKey]?.team
    if (team === "green" || team === "blue") {
      known[team].add(name)
    }
  }

  return known
}

function assertValidWinner(winner) {
  const valid = winner === "green" || winner === "blue" || winner === "tie"
  if (!valid) {
    throw new Error(
      `Invalid match winner '${winner}'. Use 'green', 'blue', or 'tie'.`
    )
  }
}

function assertPlayerKnown(player, team, knownPlayersByTeam, yearKey) {
  if (!knownPlayersByTeam[team].has(player)) {
    throw new Error(
      `Player '${player}' is not a known ${team} player for ${yearKey}.`
    )
  }
}

function normalizeTeamPlayers(teamPlayers, teamName, knownPlayersByTeam, yearKey) {
  if (!Array.isArray(teamPlayers) || teamPlayers.length === 0) {
    throw new Error(`${teamName} players must be a non-empty array.`)
  }

  const seen = new Set()
  for (const player of teamPlayers) {
    if (typeof player !== "string" || !player.trim()) {
      throw new Error(`${teamName} player names must be non-empty strings.`)
    }
    if (seen.has(player)) {
      throw new Error(`Duplicate player '${player}' in ${teamName} array.`)
    }
    seen.add(player)
    assertPlayerKnown(player, teamName, knownPlayersByTeam, yearKey)
  }

  return teamPlayers
}

function assertValidNineHoleScores(scores, label) {
  if (!Array.isArray(scores) || scores.length !== 9) {
    throw new Error(`${label} must be an array of 9 numbers.`)
  }

  scores.forEach((value, idx) => {
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new Error(`${label}[${idx}] must be a valid number.`)
    }
  })
}

function normalizePlayerScoreEntry(scoreEntry, label) {
  if (Array.isArray(scoreEntry)) {
    assertValidNineHoleScores(scoreEntry, label)
    return { holes: scoreEntry }
  }

  if (typeof scoreEntry !== "object" || scoreEntry === null) {
    throw new Error(
      `${label} must be either an array of 9 numbers or an object with a 'holes' array.`
    )
  }

  const holes = scoreEntry.holes
  assertValidNineHoleScores(holes, `${label}.holes`)

  if (
    scoreEntry.frontGross !== undefined &&
    (typeof scoreEntry.frontGross !== "number" || Number.isNaN(scoreEntry.frontGross))
  ) {
    throw new Error(`${label}.frontGross must be a valid number when provided.`)
  }

  if (
    scoreEntry.backGross !== undefined &&
    (typeof scoreEntry.backGross !== "number" || Number.isNaN(scoreEntry.backGross))
  ) {
    throw new Error(`${label}.backGross must be a valid number when provided.`)
  }

  if (
    scoreEntry.useForHandicapIndex !== undefined &&
    typeof scoreEntry.useForHandicapIndex !== "boolean"
  ) {
    throw new Error(`${label}.useForHandicapIndex must be a boolean when provided.`)
  }

  if (scoreEntry.use18Holes !== undefined && typeof scoreEntry.use18Holes !== "boolean") {
    throw new Error(`${label}.use18Holes must be a boolean when provided.`)
  }

  if (scoreEntry.useFront !== undefined && typeof scoreEntry.useFront !== "boolean") {
    throw new Error(`${label}.useFront must be a boolean when provided.`)
  }

  if (scoreEntry.useBack !== undefined && typeof scoreEntry.useBack !== "boolean") {
    throw new Error(`${label}.useBack must be a boolean when provided.`)
  }

  return {
    holes,
    frontGross: scoreEntry.frontGross,
    backGross: scoreEntry.backGross,
    useForHandicapIndex: scoreEntry.useForHandicapIndex,
    use18Holes: scoreEntry.use18Holes,
    useFront: scoreEntry.useFront,
    useBack: scoreEntry.useBack,
  }
}

function validateMatchScores(match, expectedRound, matchIdx) {
  if (match.scores === undefined) return

  if (typeof match.scores !== "object" || match.scores === null) {
    throw new Error(
      `Round ${expectedRound}, match ${matchIdx + 1} scores must be an object keyed by player name.`
    )
  }

  const allPlayers = [...match.green, ...match.blue]
  const scorePlayers = Object.keys(match.scores)

  scorePlayers.forEach(player => {
    if (!allPlayers.includes(player)) {
      throw new Error(
        `Round ${expectedRound}, match ${matchIdx + 1} has score for non-participant '${player}'.`
      )
    }

    normalizePlayerScoreEntry(
      match.scores[player],
      `Round ${expectedRound}, match ${matchIdx + 1}, ${player} scores`
    )
  })
}

function validateRounds(rounds, knownPlayersByTeam, yearKey, roundsPath) {
  if (!Array.isArray(rounds) || rounds.length !== 8) {
    throw new Error(`${roundsPath} must contain exactly 8 rounds for ${yearKey}.`)
  }

  rounds.forEach((round, idx) => {
    const expectedRound = idx + 1
    if (round?.round !== expectedRound) {
      throw new Error(
        `Round index ${expectedRound} must have round=${expectedRound}.`
      )
    }
    if (!Array.isArray(round.matches) || round.matches.length === 0) {
      throw new Error(`Round ${expectedRound} must include at least one match.`)
    }

    round.matches.forEach((match, matchIdx) => {
      const winner = match?.winner
      assertValidWinner(winner)
      normalizeTeamPlayers(match?.green, "green", knownPlayersByTeam, yearKey)
      normalizeTeamPlayers(match?.blue, "blue", knownPlayersByTeam, yearKey)
      validateMatchScores(match, expectedRound, matchIdx)

      const overlap = match.green.filter(player => match.blue.includes(player))
      if (overlap.length) {
        throw new Error(
          `Round ${expectedRound}, match ${matchIdx + 1} has players on both teams: ${overlap.join(", ")}`
        )
      }
    })
  })
}

function applyRoundScoresToPlayers(playersObj, rounds, yearKey) {
  rounds.forEach(round => {
    const holeKey = round.holes
    const courseKey = round.course

    if (holeKey !== "front" && holeKey !== "back") {
      throw new Error(
        `Round ${round.round} holes must be 'front' or 'back'. Received '${holeKey}'.`
      )
    }

    round.matches.forEach((match, matchIdx) => {
      const scoreMap = match.scores
      if (!scoreMap) return

      for (const [playerName, scoreEntry] of Object.entries(scoreMap)) {
        const yearData = playersObj[playerName]?.year?.[yearKey]
        if (!yearData) {
          throw new Error(
            `Round ${round.round}, match ${matchIdx + 1}: player '${playerName}' does not exist in ${yearKey}.`
          )
        }

        const courseData = yearData?.scores?.[courseKey]
        if (!courseData) {
          throw new Error(
            `Round ${round.round}, match ${matchIdx + 1}: '${playerName}' is missing course '${courseKey}' in ${yearKey} scores.`
          )
        }

        const normalizedEntry = normalizePlayerScoreEntry(
          scoreEntry,
          `Round ${round.round}, match ${matchIdx + 1}, ${playerName} scores`
        )

        courseData[holeKey] = [...normalizedEntry.holes]

        if (normalizedEntry.frontGross !== undefined) {
          courseData.frontGross = normalizedEntry.frontGross
        }

        if (normalizedEntry.backGross !== undefined) {
          courseData.backGross = normalizedEntry.backGross
        }

        if (normalizedEntry.useForHandicapIndex !== undefined) {
          courseData.useForHandicapIndex = normalizedEntry.useForHandicapIndex
        }

        if (normalizedEntry.use18Holes !== undefined) {
          courseData.use18Holes = normalizedEntry.use18Holes
        }

        if (normalizedEntry.useFront !== undefined) {
          courseData.useFront = normalizedEntry.useFront
        }

        if (normalizedEntry.useBack !== undefined) {
          courseData.useBack = normalizedEntry.useBack
        }
      }
    })
  })
}

function emptyPointsTemplateFromExisting(points) {
  return (Array.isArray(points) ? points : []).map(point => ({
    id: point.id,
    game: point.game || GAME_NAME_MAP[point.id] || point.id,
    wins: 0,
    ties: 0,
    losses: 0,
  }))
}

function ensurePointEntry(points, gameplay) {
  let entry = points.find(point => point.id === gameplay)
  if (!entry) {
    entry = {
      id: gameplay,
      game: GAME_NAME_MAP[gameplay] || gameplay,
      wins: 0,
      ties: 0,
      losses: 0,
    }
    points.push(entry)
  }
  return entry
}

function ensureRecordBucket(records, key) {
  let bucket = records.find(record => Array.isArray(record?.[key]))
  if (!bucket) {
    bucket = { [key]: [] }
    records.push(bucket)
  }
  return bucket[key]
}

function ensureRecordEntry(entries, name) {
  let entry = entries.find(item => item.name === name)
  if (!entry) {
    entry = { name, wins: 0, ties: 0, losses: 0 }
    entries.push(entry)
  }
  return entry
}

function applyResultToCounter(counter, winner, team) {
  if (winner === "tie") {
    counter.ties += 1
  } else if (winner === team) {
    counter.wins += 1
  } else {
    counter.losses += 1
  }
}

function resetYearData(playersObj, yearKey) {
  for (const player of Object.values(playersObj)) {
    const yearData = player?.year?.[yearKey]
    if (!yearData) continue

    yearData.points = emptyPointsTemplateFromExisting(yearData.points)
    yearData.records = [{ partners: [] }, { opponents: [] }]
  }
}

function updateYearFromRounds(playersObj, rounds, yearKey) {
  rounds.forEach(round => {
    const gameplay = round.gameplay

    round.matches.forEach(match => {
      const winner = match.winner
      const teams = {
        green: match.green,
        blue: match.blue,
      }

      for (const [teamName, teamPlayers] of Object.entries(teams)) {
        const opponentTeam = teamName === "green" ? "blue" : "green"
        const opponentPlayers = teams[opponentTeam]

        teamPlayers.forEach(playerName => {
          const yearData = playersObj[playerName]?.year?.[yearKey]
          if (!yearData) return

          const pointsEntry = ensurePointEntry(yearData.points, gameplay)
          applyResultToCounter(pointsEntry, winner, teamName)

          const partners = ensureRecordBucket(yearData.records, "partners")
          const opponents = ensureRecordBucket(yearData.records, "opponents")

          teamPlayers
            .filter(player => player !== playerName)
            .forEach(partnerName => {
              const partnerEntry = ensureRecordEntry(partners, partnerName)
              applyResultToCounter(partnerEntry, winner, teamName)
            })

          opponentPlayers.forEach(opponentName => {
            const opponentEntry = ensureRecordEntry(opponents, opponentName)
            applyResultToCounter(opponentEntry, winner, teamName)
          })
        })
      }
    })
  })
}

function sortRecordEntries(playersObj, yearKey) {
  for (const player of Object.values(playersObj)) {
    const yearData = player?.year?.[yearKey]
    if (!yearData || !Array.isArray(yearData.records)) continue

    const partners = yearData.records.find(record => Array.isArray(record.partners))
    const opponents = yearData.records.find(record => Array.isArray(record.opponents))

    if (partners) {
      partners.partners.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (opponents) {
      opponents.opponents.sort((a, b) => a.name.localeCompare(b.name))
    }
  }
}

function main() {
  const { yearKey, roundsPath } = parseCliArgs(process.argv.slice(2))
  const playersRoot = readJson(PLAYERS_PATH)
  if (!Array.isArray(playersRoot) || !playersRoot[0]) {
    throw new Error("playersUpdate.json must be an array with object at index 0.")
  }

  const playersObj = playersRoot[0]
  const rounds = readJson(roundsPath)
  const knownPlayersByTeam = buildKnownPlayersByTeam(playersObj, yearKey)

  validateRounds(rounds, knownPlayersByTeam, yearKey, roundsPath)
  applyRoundScoresToPlayers(playersObj, rounds, yearKey)
  resetYearData(playersObj, yearKey)
  updateYearFromRounds(playersObj, rounds, yearKey)
  sortRecordEntries(playersObj, yearKey)

  const prettyJson = JSON.stringify(playersRoot, null, 2)
  const inlineScoreArrays = prettyJson.replace(
    /("(?:front|back|appearances)":\s*)\[\n\s*([^\]]*?)\n\s*\]/g,
    (_match, prefix, body) => {
      const values = body
        .split(",")
        .map(item => item.trim())
        .filter(Boolean)
        .join(", ")
      return `${prefix}[${values}]`
    }
  )

  writeFileSync(PLAYERS_PATH, inlineScoreArrays + "\n")
  console.log(`Updated ${PLAYERS_PATH} using ${roundsPath} for ${yearKey}.`)
}

main()
