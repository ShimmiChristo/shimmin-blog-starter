const assert = require("node:assert/strict")
const fs = require("node:fs")
const path = require("node:path")
const vm = require("node:vm")
const babel = require("@babel/core")

function load(relativePath, dependencies = {}) {
  const module = { exports: {} }
  const code = babel.transformSync(
    fs.readFileSync(path.join(__dirname, "..", relativePath), "utf8"),
    {
      babelrc: false,
      configFile: false,
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    }
  ).code
  vm.runInNewContext(code, {
    module,
    exports: module.exports,
    require: name => dependencies[name],
  })
  return module.exports
}

const handicap = load("src/helpers/handicapHelper.js")
const { buildMatchStats } = load("src/helpers/matchStats.js", {
  "./handicapHelper": handicap,
})

function player(name, scores, playingHandicap = 0) {
  return {
    name,
    playingHandicap,
    playerObj: {
      year: { _2026: { scores: { course: { front: scores } } } },
    },
  }
}

const options = {
  year: "_2026",
  courseMatch: "course",
  holes: "front",
  gameplay: "best-ball",
  courseHoles: Array.from({ length: 5 }, (_, index) => ({
    par: 4,
    handicap: index * 2 + 1,
  })),
  teams: [
    {
      team: "one",
      players: [player("A", [4, 4, 5, 99, 4]), player("B", [4, 5, 4, 99, 5])],
    },
    {
      team: "two",
      players: [player("C", [5, 4, 3, 4, 99]), player("D", [6, 5, 4, 4, 99])],
    },
  ],
}

let rows = buildMatchStats(options)
assert.equal(rows[0].teamResults.holesWon, 1)
assert.equal(rows[0].teamResults.holesHalved, 1)
assert.equal(rows[0].teamResults.holesLost, 1)
assert.equal(rows[0].holesWon, 1)
assert.equal(rows[1].holesWon, 1)
assert.equal(rows[2].holesWon, 1)
assert.equal(rows[3].holesWon, 0)

for (const gameplay of ["scramble", "alternate", "pinehurst"]) {
  rows = buildMatchStats({ ...options, gameplay })
  assert.equal(rows.length, 2)
  assert.equal(rows[0].holesWon, 1)
}

for (const gameplay of ["two-ball", "two-ball-bramble"]) {
  rows = buildMatchStats({ ...options, gameplay })
  assert.equal(rows[0].holesWon, 1)
  assert.equal(rows[1].holesWon, 1)
}

rows = buildMatchStats({
  ...options,
  gameplay: "singles",
  teams: [
    { team: "one", players: [player("A", ["5"], 1)] },
    { team: "two", players: [player("C", [5])] },
  ],
})
assert.equal(rows[0].holesWon, 1)
assert.equal(rows[1].teamResults.holesLost, 1)

rows = buildMatchStats({
  ...options,
  teams: [
    { team: "one", players: [player("A", [0, null, undefined, 99, "-"])] },
    options.teams[1],
  ],
})
assert.equal(rows.length, 2)
assert.equal(rows[0].teamResults.holesWon, 0)
assert.equal(rows[0].teamResults.holesHalved, 0)
assert.equal(rows[0].teamResults.holesLost, 0)

const clinchedMatch = {
  ...options,
  courseHoles: Array.from({ length: 9 }, (_, index) => ({
    par: 4,
    handicap: index * 2 + 1,
  })),
  teams: [
    {
      team: "one",
      players: [player("A", [3, 4, 3, 4, 3, 4, 4, 3, 3])],
    },
    {
      team: "two",
      players: [player("C", [4, 4, 4, 4, 4, 4, 4, 4, 4])],
    },
  ],
}
for (const gameplay of ["singles", "best-ball", "scramble"]) {
  rows = buildMatchStats({ ...clinchedMatch, gameplay })
  assert.equal(rows[0].holesPlayed, 7)
  assert.equal(rows[1].holesPlayed, 7)
  assert.equal(rows[0].holesWon, 3)
  assert.equal(rows[0].teamResults.holesWon, 3)
  assert.equal(rows[0].teamResults.holesHalved, 4)
  assert.equal(rows[0].gross.birdies, 3)
}
rows = buildMatchStats({ ...clinchedMatch, gameplay: "one-ball-strokeplay" })
assert.equal(rows[0].holesPlayed, 9)
assert.equal(rows[0].holesWon, 5)
assert.equal(rows[0].gross.birdies, 5)

console.log("Match stats checks passed")