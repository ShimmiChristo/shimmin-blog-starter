import {
  calcPlayerScore,
  getCourseHandicap,
  getPlayerHandicap,
} from "./handicapHelper"

const ONE_BALL_GAMEPLAY = ["scramble", "alternate", "pinehurst"]

const STAT_CATEGORIES = [
  { key: "aces", label: "HIO" },
  { key: "eagles", label: "Eagle-" },
  { key: "birdies", label: "Birdie" },
  { key: "pars", label: "Par" },
  { key: "bogeys", label: "Bogey" },
  { key: "doubles", label: "Dbl+" },
]

function emptyCounts() {
  return { aces: 0, eagles: 0, birdies: 0, pars: 0, bogeys: 0, doubles: 0 }
}

// Aces are exclusive so each hole lands in exactly one category.
function categorize(score, par) {
  if (score === 1) return "aces"
  const toPar = score - par
  if (toPar <= -2) return "eagles"
  if (toPar === -1) return "birdies"
  if (toPar === 0) return "pars"
  if (toPar === 1) return "bogeys"
  return "doubles"
}

// playingHandicap must be the match-relative playing handicap (p1HCglobal etc.),
// since net scores depend on course, tees, format allowance and the lowest HC in the group.
function calcHoleStats(scores, courseHoles, playingHandicap, holes) {
  const gross = emptyCounts()
  const net = emptyCounts()
  let holesPlayed = 0

  courseHoles.forEach((hole, i) => {
    const score = Number(scores?.[i])
    // scores > 20 are the "unplayed" sentinel used throughout the score data
    if (!Number.isFinite(score) || score <= 0 || score > 20) return

    const netScore = calcPlayerScore(
      score,
      playingHandicap,
      hole.handicap,
      holes
    )
    holesPlayed++
    gross[categorize(score, hole.par)]++
    net[categorize(netScore, hole.par)]++
  })

  return { gross, net, holesPlayed }
}

/**
 * teams: [{ team: "one" | "two", players: [{ name, playerObj, playingHandicap }] }]
 * One-ball formats share a single score per team, so they produce one row per team.
 */
function buildMatchStats({
  year,
  courseMatch,
  holes,
  gameplay,
  courseHoles,
  teams,
}) {
  const isOneBall = ONE_BALL_GAMEPLAY.includes(gameplay)
  const isCombined = ["two-ball", "two-ball-bramble"].includes(gameplay)

  const teamData = teams.map(({ team, players }) => {
    const activePlayers = players.filter(p => p.name && p.playerObj)
    const entries = isOneBall
      ? activePlayers.slice(0, 1).map(p => ({
          ...p,
          label: activePlayers.map(a => a.name).join(" & "),
        }))
      : activePlayers.map(p => ({ ...p, label: p.name }))

    return {
      team,
      holesWon: 0,
      holesHalved: 0,
      holesLost: 0,
      entries: entries.map(({ label, playerObj, playingHandicap }) => {
        const scores = playerObj?.year?.[year]?.scores?.[courseMatch]?.[holes]
        return {
          label,
          team,
          holesWon: 0,
          scores,
          playingHandicap,
          netScores: courseHoles.map((hole, index) => {
            const score = Number(scores?.[index])
            return Number.isFinite(score) && score > 0 && score <= 20
              ? calcPlayerScore(score, playingHandicap, hole.handicap, holes)
              : null
          }),
        }
      }),
    }
  })

  let matchEnd = courseHoles.length
  courseHoles.forEach((hole, index) => {
    if (index >= matchEnd) return
    const scores = teamData.map(({ entries }) => {
      const validScores = entries
        .map(entry => entry.netScores[index])
        .filter(score => score !== null)
      if (!validScores.length) return null
      if (isCombined && validScores.length !== entries.length) return null
      return isCombined
        ? validScores.reduce((total, score) => total + score, 0)
        : Math.min(...validScores)
    })
    if (scores.length !== 2 || scores.some(score => score === null)) return

    teamData.forEach((team, teamIndex) => {
      const score = scores[teamIndex]
      const opponentScore = scores[1 - teamIndex]
      if (score === opponentScore) {
        team.holesHalved++
      } else if (score > opponentScore) {
        team.holesLost++
      } else {
        team.holesWon++
        team.entries.forEach(entry => {
          if (isCombined || entry.netScores[index] === score) entry.holesWon++
        })
      }
    })
    const lead = Math.abs(teamData[0].holesWon - teamData[1].holesWon)
    const remaining = courseHoles.length - index - 1
    if (!gameplay.includes("strokeplay") && lead > remaining) {
      matchEnd = index + 1
    }
  })

  return teamData.flatMap(team =>
    team.entries
      .map(({ netScores, scores, playingHandicap, ...entry }) => ({
        ...entry,
        ...calcHoleStats(
          scores,
          courseHoles.slice(0, matchEnd),
          playingHandicap,
          holes
        ),
        teamResults: {
          holesWon: team.holesWon,
          holesHalved: team.holesHalved,
          holesLost: team.holesLost,
        },
      }))
      .filter(entry => entry.holesPlayed > 0)
  )
}

function getMatchCourse(course, match) {
  return course[match.courseMatch]?.[match.year] ?? course[match.courseMatch]
}

function getCourseHoles(courseData, holes) {
  return holes === "front"
    ? courseData.holes.slice(0, 9)
    : courseData.holes.slice(9)
}

// Mirrors the handicap pipeline in match.js / match-condensed.js; keep in sync.
function getMatchPlayingHandicaps(match, course, players) {
  const courseData = getMatchCourse(course, match)
  const holesPlayed = match.holes === "front" ? "out" : "in"

  const courseHandicaps = [1, 2, 3, 4].map(n => {
    const player = players[match[`player${n}`]]
    const matchHandicap = match[`player${n}MatchHandicap`]
    const handicap = matchHandicap
      ? parseInt(matchHandicap)
      : player?.year?.[match.year]?.handicap ?? player?.handicap
    const tees = match[`player${n}Tees`] ?? (n > 2 ? "orange" : undefined)
    const totals = courseData.totals.tees[tees]?.[holesPlayed]
    return getCourseHandicap(
      handicap,
      totals?.slope,
      totals?.index,
      totals?.par
    )
  })

  const hardestHole = courseData.holes.find(h => h.handicap === 1).number
  const hardestHoleNine = holesPlayed === "out" && hardestHole < 10

  return [1, 2, 3, 4].map(n =>
    getPlayerHandicap(
      `player${n}`,
      match.gameplay,
      courseHandicaps,
      hardestHoleNine
    )
  )
}

function addCounts(target, source) {
  Object.keys(target).forEach(key => {
    target[key] += source[key]
  })
}

// One-ball formats are excluded: their scores belong to the team, not the player.
function calcPlayerStatsByYear(playerName, matchesByYear, course, players) {
  const years = {}
  const career = { gross: emptyCounts(), net: emptyCounts(), holesPlayed: 0 }

  Object.entries(matchesByYear).forEach(([year, matches]) => {
    matches.forEach(match => {
      if (ONE_BALL_GAMEPLAY.includes(match.gameplay)) return
      const slot = [1, 2, 3, 4].find(n => match[`player${n}`] === playerName)
      const courseData = getMatchCourse(course, match)
      if (!slot || !courseData) return

      const playingHandicap = getMatchPlayingHandicaps(match, course, players)[
        slot - 1
      ]
      const stats = calcHoleStats(
        players[playerName]?.year?.[year]?.scores?.[match.courseMatch]?.[
          match.holes
        ],
        getCourseHoles(courseData, match.holes),
        playingHandicap,
        match.holes
      )
      if (!stats.holesPlayed) return

      years[year] ??= {
        gross: emptyCounts(),
        net: emptyCounts(),
        holesPlayed: 0,
      }
      for (const bucket of [years[year], career]) {
        addCounts(bucket.gross, stats.gross)
        addCounts(bucket.net, stats.net)
        bucket.holesPlayed += stats.holesPlayed
      }
    })
  })

  const rows = Object.keys(years)
    .sort()
    .reverse()
    .map(year => ({ label: year.replace("_", ""), ...years[year] }))
  return rows.length > 1 ? [...rows, { label: "Career", ...career }] : rows
}

export {
  STAT_CATEGORIES,
  calcHoleStats,
  buildMatchStats,
  getMatchPlayingHandicaps,
  calcPlayerStatsByYear,
}
