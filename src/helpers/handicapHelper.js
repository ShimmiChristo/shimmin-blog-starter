// import MatchNav from "../components/match-nav"

/**
 * @param {int} s - player score
 * @param {int} pHand - player handicap
 * @param {int} hHand - hole handicap
 * @param {string} courseHoles - front, back, or total
 */
function calcPlayerScore(s, pHand, hHand, holes) {
  let score = s
  let playerHandicap = pHand
  const holeHandicap = hHand
  const matchHoles = holes

  if (score > "20") {
    return "-"
  } else if (holes !== undefined && holes !== "total") {
    if (Math.round(holeHandicap / 2) <= playerHandicap && score > -10) {
      playerHandicap = playerHandicap - 9
      score--
      return calcPlayerScore(score, playerHandicap, holeHandicap, matchHoles)
    } else {
      return score
    }
  } else {
    if (holeHandicap <= playerHandicap && score > -10) {
      playerHandicap = playerHandicap - 18
      score--
      return calcPlayerScore(score, playerHandicap, holeHandicap, matchHoles)
    } else {
      return score
    }
  }
}

function calcToLowestHandicap(p1HC, p2HC, p3HC, p4HC) {
  const lowest = Math.min(p1HC, p2HC, p3HC, p4HC)

  return {
    player1: p1HC - lowest,
    player2: p2HC - lowest,
    player3: p3HC - lowest,
    player4: p4HC - lowest,
  }
}

function getPlayerHandicap(player, gameplay, handicaps) {
  const score = {
    player1: 99,
    player2: 99,
    player3: 99,
    player4: 99,
  }
  //* handicap is half of what it is bc of 9 hole matches.
  const p1 = Math.round(handicaps[0] / 2) // half bc of 9 hole matches
  const p2 = Math.round(handicaps[1] / 2)
  const p3 = handicaps[2] ? Math.round(handicaps[2] / 2) : 99
  const p4 = handicaps[3] ? Math.round(handicaps[3] / 2) : 99
  const lowHC = Math.min(p1, p2, p3, p4)
  const lowHCTeam1 = Math.min(p1, p3)
  const highHCTeam1 = Math.max(p1, p3)
  const lowHCTeam2 = Math.min(p2, p4)
  const highHCTeam2 = Math.max(p2, p4)

  if (gameplay === "scramble" || gameplay === "pinehurst") {
    let team1Adj = Math.round(0.6 * lowHCTeam1 + 0.4 * highHCTeam1)
    let team2Adj = Math.round(0.6 * lowHCTeam2 + 0.4 * highHCTeam2)
    let lowHCTeam = Math.min(team1Adj, team2Adj)
    score.player1 = team1Adj - lowHCTeam
    score.player2 = team2Adj - lowHCTeam
    score.player3 = team1Adj - lowHCTeam
    score.player4 = team2Adj - lowHCTeam
  } else if (gameplay === "alternate") {
    let team1Adj = Math.round((p1 + p3) / 2)
    let team2Adj = Math.round((p2 + p4) / 2)
    let lowHCTeam = Math.min(team1Adj, team2Adj)
    score.player1 = team1Adj - lowHCTeam
    score.player2 = team2Adj - lowHCTeam
    score.player3 = team1Adj - lowHCTeam
    score.player4 = team2Adj - lowHCTeam
  } else {
    score.player1 = p1 - lowHC
    score.player2 = p2 - lowHC
    score.player3 = p3 - lowHC
    score.player4 = p4 - lowHC
  }
  return score[`${player}`]
}

/**
 * @param {string} gameplay - gameplay
 * @param {string} player1Name - player name
 * @param {int} player1HC - player HC
 * @param {string} player2Name - player name
 * @param {int} player2Handicap - player HC
 */
function getMatchHandicap(
  gameplay,
  player1Name,
  player1HC,
  player2Name,
  player2HC,
  player3Name,
  player3HC,
  player4Name,
  player4HC
) {
  const p1HC = player1HC !== undefined ? player1HC : 99
  const p2HC = player2HC !== undefined ? player2HC : 99
  const p3HC = player3HC !== undefined ? player3HC : 99
  const p4HC = player4HC !== undefined ? player4HC : 99

  if (gameplay === "scramble" || gameplay === "pinehurst") {
    let lowHCTeam1 = Math.min(p1HC, p2HC)
    let highHCTeam1 = Math.max(p1HC, p2HC)
    let lowHCTeam2 = Math.min(p3HC, p4HC)
    let highHCTeam2 = Math.max(p3HC, p4HC)
    let team1Adj = Math.round(0.6 * lowHCTeam1 + 0.4 * highHCTeam1)
    let team2Adj = Math.round(0.6 * lowHCTeam2 + 0.4 * highHCTeam2)
    return calcToLowestHandicap(team1Adj, team2Adj, 99, 99).player1
  } else if (gameplay === "alternate") {
    let team1Adj = Math.round((player1HC + player2HC) / 2)
    let team2Adj = Math.round((player3HC + player4HC) / 2)
    return calcToLowestHandicap(team1Adj, team2Adj, 99, 99).player1
  } else if (gameplay === "one-ball" || gameplay === "two-ball") {
    return calcToLowestHandicap(p1HC, p2HC, p3HC, p4HC).player1
  } else if (player2Name && player2HC) {
    return p2HC
  } else {
    return p1HC
  }
}

function getCourseHandicap(
  playerHandicap,
  courseSlope,
  courseRating,
  coursePar
) {
  /* 
    *** FORMULA ****
    handicap * (course slope / 113) + (course rating - course par)
  */
  const form = playerHandicap * (courseSlope / 113) + (courseRating - coursePar)
  return Math.round(form * 10) / 10
}

export {
  calcPlayerScore,
  getMatchHandicap,
  calcToLowestHandicap,
  getPlayerHandicap,
  getCourseHandicap,
}
