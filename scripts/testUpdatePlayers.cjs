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
  fs.writeFileSync(path.join(dataDirectory, "playersOverview.json"), "{}")
  fs.writeFileSync(path.join(dataDirectory, "rounds-2026.json"), JSON.stringify(rounds))

  execFileSync(process.execPath, [script], { cwd: directory })
  const updated = JSON.parse(fs.readFileSync(playersPath, "utf8"))[0]
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
  console.log("Verified gross totals, incomplete scores, eligibility merging, and recalculation.")
} finally {
  fs.rmSync(directory, { recursive: true, force: true })
}
