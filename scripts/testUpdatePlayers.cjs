const assert = require("node:assert/strict")
const fs = require("node:fs")
const os = require("node:os")
const path = require("node:path")
const { execFileSync } = require("node:child_process")

const directory = fs.mkdtempSync(path.join(os.tmpdir(), "update-players-test-"))
const dataDirectory = path.join(directory, "src/data")
const script = path.join(__dirname, "updatePlayers.mjs")
const complete = [4, 5, 3, 4, 5, 4, 3, 5, 4]
const incomplete = [4, 5, 3, 4, 99, 4, 3, 5, 4]
const cases = [
  {
    entry: { holes: complete, useBack: true, backGross: 999 },
    expected: { frontGross: 70, backGross: 37 },
  },
  {
    entry: { holes: complete, useFront: true },
    expected: { frontGross: 37, backGross: 80 },
  },
  {
    entry: { holes: incomplete, useBack: true, backGross: 999 },
    expected: { frontGross: 70, backGross: 80 },
  },
  {
    entry: { holes: incomplete, useFront: true, frontGross: 999 },
    expected: { frontGross: 70, backGross: 80 },
  },
  {
    entry: { holes: complete, useFront: false, useBack: false, frontGross: 42, backGross: 43 },
    expected: { frontGross: 42, backGross: 43 },
  },
  {
    entry: complete,
    expected: { frontGross: 70, backGross: 80 },
  },
  {
    entry: { holes: complete, useFront: true, useBack: true },
    expected: { frontGross: 37, backGross: 37 },
  },
  {
    entry: { holes: complete, useBack: true, frontGross: 42 },
    expected: { frontGross: 42, backGross: 37 },
  },
]

try {
  fs.mkdirSync(dataDirectory, { recursive: true })
  const scores = Object.fromEntries(cases.map((_, index) => [
    `course${index}`,
    { frontGross: 70, backGross: 80 },
  ]))
  const players = Object.fromEntries(["green", "blue"].map(team => [
    team,
    { year: { _2026: { team, scores } } },
  ]))
  players.absent = {
    appearances: [2024],
    cupRecord: { wins: 0, losses: 1 },
    year: { _2026: { team: "green", scores: {} } },
  }
  const rounds = cases.map(({ entry }, index) => ({
    round: index + 1,
    gameplay: "bestBall",
    course: `course${index}`,
    holes: index % 2 === 0 ? "back" : "front",
    matches: [{
      green: ["green"],
      blue: ["blue"],
      winner: null,
      scores: { green: entry },
    }],
  }))
  const playersPath = path.join(dataDirectory, "playersUpdate.json")
  fs.writeFileSync(playersPath, JSON.stringify([players]))
  const overview = Object.fromEntries(["green", "blue"].map(team => [
    team,
    { appearances: [2024, 2025], cupRecord: { wins: 1, losses: 1 } },
  ]))
  const overviewPath = path.join(dataDirectory, "playersOverview.json")
  fs.writeFileSync(overviewPath, JSON.stringify(overview))
  fs.writeFileSync(path.join(dataDirectory, "rounds-2026.json"), JSON.stringify(rounds))

  execFileSync(process.execPath, [script], { cwd: directory })
  const updated = JSON.parse(fs.readFileSync(playersPath, "utf8"))[0]
  for (const team of ["green", "blue"]) {
    assert.deepEqual(updated[team].appearances, [2024, 2025, 2026])
    assert.deepEqual(updated[team].cupRecord, { wins: 1, losses: 1 })
  }
  assert.deepEqual(updated.absent.appearances, [2024])
  assert.deepEqual(updated.absent.cupRecord, { wins: 0, losses: 1 })
  cases.forEach(({ entry, expected }, index) => {
    const course = updated.green.year._2026.scores[`course${index}`]
    assert.equal(course.frontGross, expected.frontGross, `Case ${index + 1}: frontGross`)
    assert.equal(course.backGross, expected.backGross, `Case ${index + 1}: backGross`)
    const side = rounds[index].holes
    assert.deepEqual(course[side], Array.isArray(entry) ? entry : entry.holes)
    assert.deepEqual(updated.blue.year._2026.scores[`course${index}`], {
      frontGross: 70,
      backGross: 80,
    })
  })
  const firstRun = fs.readFileSync(playersPath, "utf8")
  execFileSync(process.execPath, [script], { cwd: directory })
  assert.equal(fs.readFileSync(playersPath, "utf8"), firstRun)

  const flagPairs = [[true, false], [false, true], [false, false], [undefined, undefined]]
  const eligibilityRounds = rounds.map((round, index) => {
    const flag = flagPairs[Math.floor(index / 2)][index % 2]
    return {
      ...round,
      course: `course${Math.floor(index / 2)}`,
      holes: index % 2 === 0 ? "front" : "back",
      matches: [{
        ...round.matches[0],
        scores: { green: { holes: complete, useForHandicapIndex: flag } },
      }],
    }
  })
  for (const score of Object.values(updated.green.year._2026.scores)) {
    score.useForHandicapIndex = true
  }
  fs.writeFileSync(playersPath, JSON.stringify([updated]))
  const roundsPath = path.join(dataDirectory, "rounds-2026.json")
  fs.writeFileSync(roundsPath, JSON.stringify(eligibilityRounds))
  execFileSync(process.execPath, [script], { cwd: directory })
  const merged = JSON.parse(fs.readFileSync(playersPath, "utf8"))[0]
  ;[true, true, false, true].forEach((expected, index) => {
    assert.equal(merged.green.year._2026.scores[`course${index}`].useForHandicapIndex, expected)
  })
  eligibilityRounds[0].matches[0].scores.green.useForHandicapIndex = false
  fs.writeFileSync(roundsPath, JSON.stringify(eligibilityRounds))
  execFileSync(process.execPath, [script], { cwd: directory })
  const recalculated = JSON.parse(fs.readFileSync(playersPath, "utf8"))[0]
  assert.equal(recalculated.green.year._2026.scores.course0.useForHandicapIndex, false)
  const runCup = winners => {
    rounds.forEach((round, index) => {
      round.matches[0].winner = winners[index]
    })
    fs.writeFileSync(roundsPath, JSON.stringify(rounds))
    execFileSync(process.execPath, [script], { cwd: directory, stdio: "pipe" })
    return JSON.parse(fs.readFileSync(playersPath, "utf8"))[0]
  }
  const greenWin = runCup(Array(8).fill("green"))
  assert.deepEqual(greenWin.green.cupRecord, { wins: 2, losses: 1 })
  assert.deepEqual(greenWin.blue.cupRecord, { wins: 1, losses: 2 })
  const completedRun = fs.readFileSync(playersPath, "utf8")
  runCup(Array(8).fill("green"))
  assert.equal(fs.readFileSync(playersPath, "utf8"), completedRun)
  const blueWin = runCup(Array(8).fill("blue"))
  assert.deepEqual(blueWin.green.cupRecord, { wins: 1, losses: 2 })
  assert.deepEqual(blueWin.blue.cupRecord, { wins: 2, losses: 1 })
  const unplayed = runCup(["green", "green", "green", "green", "green", "green", "green", null])
  assert.deepEqual(unplayed.green.cupRecord, { wins: 1, losses: 1 })

  const scorePath = path.join(dataDirectory, "score.json")
  fs.writeFileSync(scorePath, JSON.stringify([{
    _2025: { teams: { team1: { score: "13.5" }, team2: { score: "13.5" } } },
    _2024: { winner: "blue" },
  }]))
  const tied = runCup(Array(8).fill("tie"))
  assert.deepEqual(tied.blue.cupRecord, { wins: 2, losses: 1 })
  assert.deepEqual(tied.green.cupRecord, { wins: 1, losses: 2 })
  fs.writeFileSync(scorePath, JSON.stringify([{
    _2025: { teams: { team1: { score: "14.5" }, team2: { score: "12.5" } } },
  }]))
  assert.deepEqual(runCup(Array(8).fill("tie")).green.cupRecord, { wins: 2, losses: 1 })

  overview.green.appearances.push(2026)
  overview.green.cupRecord = { wins: 2, losses: 1 }
  fs.writeFileSync(overviewPath, JSON.stringify(overview))
  const alreadyCounted = runCup(Array(8).fill("green"))
  assert.deepEqual(alreadyCounted.green.appearances, [2024, 2025, 2026])
  assert.deepEqual(alreadyCounted.green.cupRecord, { wins: 2, losses: 1 })
  assert.equal(fs.readFileSync(overviewPath, "utf8"), JSON.stringify(overview))
  fs.writeFileSync(scorePath, JSON.stringify([{}]))
  const beforeFailure = fs.readFileSync(playersPath, "utf8")
  assert.throws(
    () => runCup(Array(8).fill("tie")),
    error => error.stderr.toString().includes("Missing 2025 Cup results")
  )
  assert.equal(fs.readFileSync(playersPath, "utf8"), beforeFailure)
  console.log("Verified scores, eligibility, appearances, Cup results, ties, and stable reruns.")
} finally {
  fs.rmSync(directory, { recursive: true, force: true })
}
