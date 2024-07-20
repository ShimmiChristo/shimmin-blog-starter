// import MatchNav from "../components/match-nav"
/*
 *    - Shamble (Bramble) - 80% of handicap (or 85% of combined team HC)
 *    - Foursomes (alternate shot) - 50% of combined team handicap
 *    - Greensomes (alternate shot and best drive) - 60% low handicap + 40% high handicap
 *    - Pinehurst - 60% low handicap + 40% high handicap
 *    - Scramble (2 players) - 35% low/15% high
 *    - Match play individual - 100% of handicap
 *    - Match play Four-Ball - 90% of handicap
 */

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
  const newHC = {
    player1: 99,
    player2: 99,
    player3: 99,
    player4: 99,
  }
  //* handicap is half of what it is bc of 9 hole matches.
  const p1 = handicaps[0] // half bc of 9 hole matches
  const p2 = handicaps[1]
  const p3 = handicaps[2] ? handicaps[2] : 99
  const p4 = handicaps[3] ? handicaps[3] : 99
  const lowHC = Math.min(p1, p2, p3, p4)
  const lowHCTeam1 = Math.min(p1, p3)
  const highHCTeam1 = Math.max(p1, p3)
  const lowHCTeam2 = Math.min(p2, p4)
  const highHCTeam2 = Math.max(p2, p4)

  // if (gameplay === "pinehurst" || gameplay === "scramble") {
  if (gameplay === "pinehurst") {
    let team1Adj = (0.6 * lowHCTeam1 + 0.4 * highHCTeam1).toFixed(1)
    // console.log("team1Adj - ", team1Adj)
    let team2Adj = (0.6 * lowHCTeam2 + 0.4 * highHCTeam2).toFixed(1)
    // console.log('team2Adj - ', team2Adj);
    let lowHCTeam = Math.min(team1Adj, team2Adj)
    newHC.player1 = team1Adj - lowHCTeam
    newHC.player2 = team2Adj - lowHCTeam
    newHC.player3 = team1Adj - lowHCTeam
    newHC.player4 = team2Adj - lowHCTeam
  } else if (gameplay === "scramble") {
    // TODO: need to look at this math again.
    // ! I think I need to add the high HC + low HC
    // let player1Adj = Math.round(0.35 * lowHCTeam1)
    // let player2Adj = Math.round(0.35 * lowHCTeam2)
    // let player3Adj = Math.round(0.15 * highHCTeam1)
    // let player4Adj = Math.round(0.15 * highHCTeam2)
    // let lowHCTeam = Math.min(player1Adj, player2Adj, player3Adj, player4Adj)
    // newHC.player1 = player1Adj - lowHCTeam
    // newHC.player2 = player2Adj - lowHCTeam
    // newHC.player3 = player3Adj - lowHCTeam
    // newHC.player4 = player4Adj - lowHCTeam
    let team1Adj = (0.35 * lowHCTeam1 + 0.15 * highHCTeam1).toFixed(1)
    let team2Adj = (0.35 * lowHCTeam2 + 0.15 * highHCTeam2).toFixed(1)
    let lowHCTeam = Math.min(team1Adj, team2Adj)
    newHC.player1 = team1Adj - lowHCTeam
    newHC.player2 = team2Adj - lowHCTeam
    newHC.player3 = team1Adj - lowHCTeam
    newHC.player4 = team2Adj - lowHCTeam
  } else if (gameplay === "bramble" || gameplay === "two-ball-bramble") {
    let p1round = p1 * 0.8
    let p2round = p2 * 0.8
    let p3round = p3 * 0.8
    let p4round = p4 * 0.8
    let lowPlayer = Math.min(p1round, p2round, p3round, p4round)

    newHC.player1 = (p1round - lowPlayer).toFixed(1)
    newHC.player2 = (p2round - lowPlayer).toFixed(1)
    newHC.player3 = (p3round - lowPlayer).toFixed(1)
    newHC.player4 = (p4round - lowPlayer).toFixed(1)
  } else if (gameplay === "alternate") {
    let team1Adj = Math.round((p1 + p3) / 2)
    let team2Adj = Math.round((p2 + p4) / 2)
    let lowHCTeam = Math.min(team1Adj, team2Adj)
    newHC.player1 = team1Adj - lowHCTeam
    newHC.player2 = team2Adj - lowHCTeam
    newHC.player3 = team1Adj - lowHCTeam
    newHC.player4 = team2Adj - lowHCTeam
  } else if (gameplay === "singles") {
    newHC.player1 = p1 - lowHC
    newHC.player2 = p2 - lowHC
    newHC.player3 = p3 - lowHC
    newHC.player4 = p4 - lowHC
  } else {
    let p1round = p1 * 0.9
    let p2round = p2 * 0.9
    let p3round = p3 * 0.9
    let p4round = p4 * 0.9
    let lowPlayer = Math.min(p1round, p2round, p3round, p4round)

    // * set lowest HC to zero
    newHC.player1 = (p1round - lowPlayer).toFixed(1)
    newHC.player2 = (p2round - lowPlayer).toFixed(1)
    newHC.player3 = (p3round - lowPlayer).toFixed(1)
    newHC.player4 = (p4round - lowPlayer).toFixed(1)
  }
  let playingHandicap = Math.round(newHC[`${player}`])
  return playingHandicap
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
  } else if (
    gameplay === "one-ball" ||
    gameplay === "two-ball" ||
    gameplay === "two-ball-bramble"
  ) {
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
    round to nearest whole number (based on USGA handicap)

    **** playing handicap ****
    https://www.usga.org/content/usga/home-page/handicapping/roh/Content/rules/6%202%20Playing%20Handicap%20Calculation.htm

    **** course handicap ****
    https://www.usga.org/content/usga/home-page/handicapping/roh/Content/rules/6%201%20Course%20Handicap%20Calculation.htm
  */

  // const courseHandicap =
  //   playerHandicap * (courseSlope / 113) + (courseRating - coursePar)
  // // * divide in 2 for 9 hole matches. (the hc is not exactly the same as the usga but close enough)
  // // * do not round before getting playing handicap
  // return courseHandicap
  //  * USGA site says for 9 hole HC, divide player HC in half to nearest tenth
  const playerNineHoleHC = Math.round((playerHandicap / 2) * 10) / 10
  const courseHandicap =
    playerNineHoleHC * (courseSlope / 113) + (courseRating - coursePar)
  // * divide in 2 for 9 hole matches. (the hc is not exactly the same as the usga but close enough)
  // * do not round before getting playing handicap
  return courseHandicap
}
export {
  calcPlayerScore,
  getMatchHandicap,
  calcToLowestHandicap,
  getPlayerHandicap,
  getCourseHandicap,
}
