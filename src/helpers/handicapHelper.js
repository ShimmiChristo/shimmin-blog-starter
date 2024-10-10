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

function getHardestNineHandicap(score, hardestHoleNine) {
  // * round up
  if (hardestHoleNine) {
    return Math.round(score)
  } else {
    // * round down
    return Math.floor(score)
  }
}

// function getPlayingHandicap(gameplay, p1, p2, p3, p4) {
//   let gameplayHandicap
//   if (gameplay === "pinehurst") {
//     gameplayHandicap = Math.round(0.6 * lowHCTeam1 + 0.4 * highHCTeam1)
//   }
//   // * account for negative handicaps
//   if (playerHC < 0) {
//   }
// }

// * handicaps param is the unrounded calculated course handicaps for 9 holes
function getPlayerHandicap(player, gameplay, handicaps, hardestHoleNine) {
  const newHC = {
    player1: 99,
    player2: 99,
    player3: 99,
    player4: 99,
  }
  /*
   * multiple handicaps by 2 to double the 9 hole handicap,
   * then evaluate full handicaps against other players,
   * then divide in half for 9 holes
   *
   * REASON FOR NOT GETTING PARAMETER IN AS FULL HC.
   * Some courses are 9 holes so it's better to get the 9 hole course HC and multiply by 2
   * THIS LOGIC WAS ONLY TO MATCH SQUABBIT APP.
   * The reason logic is to get the 9 hole handicap and use that.
   * No need to multiple by 2. 
   */
  const p1 = handicaps[0] * 2
  const p2 = handicaps[1] * 2
  const p3 = handicaps[2] ? handicaps[2] * 2 : 99
  const p4 = handicaps[3] ? handicaps[3] * 2 : 99
  const lowHC = Math.min(p1, p2, p3, p4)
  const lowHCTeam1 = Math.min(p1, p3)
  const highHCTeam1 = Math.max(p1, p3)
  const lowHCTeam2 = Math.min(p2, p4)
  const highHCTeam2 = Math.max(p2, p4)

  // if (gameplay === "pinehurst" || gameplay === "scramble") {
  if (gameplay === "pinehurst") {
    let team1Adj = Math.round(0.6 * lowHCTeam1 + 0.4 * highHCTeam1) / 2
    let team2Adj = Math.round(0.6 * lowHCTeam2 + 0.4 * highHCTeam2) / 2
    let lowHCTeam = Math.min(team1Adj, team2Adj)
    newHC.player1 = team1Adj - lowHCTeam
    newHC.player2 = team2Adj - lowHCTeam
    newHC.player3 = team1Adj - lowHCTeam
    newHC.player4 = team2Adj - lowHCTeam
  } else if (gameplay === "scramble") {
    let lowPlayingHCTeam1 =
      lowHCTeam1 < 0 ? lowHCTeam1 / 0.35 : lowHCTeam1 * 0.35
    let highPlayingHCTeam1 =
      highHCTeam1 < 0 ? highHCTeam1 / 0.15 : highHCTeam1 * 0.15
    let lowPlayingHCTeam2 =
      lowHCTeam2 < 0 ? lowHCTeam2 / 0.35 : lowHCTeam2 * 0.35
    let highPlayingHCTeam2 =
      highHCTeam2 < 0 ? highHCTeam2 / 0.15 : highHCTeam2 * 0.15

    let team1PlayingHC = (lowPlayingHCTeam1 + highPlayingHCTeam1).toFixed(1)
    let team2PlayingHC = (lowPlayingHCTeam2 + highPlayingHCTeam2).toFixed(1)
    let lowHCTeam = Math.min(team1PlayingHC, team2PlayingHC)
    let relTeam1HC = Math.round(team1PlayingHC - lowHCTeam)
    let relTeam2HC = Math.round(team2PlayingHC - lowHCTeam)
    newHC.player1 = getHardestNineHandicap(relTeam1HC / 2, hardestHoleNine)
    newHC.player2 = getHardestNineHandicap(relTeam2HC / 2, hardestHoleNine)
    newHC.player3 = getHardestNineHandicap(relTeam1HC / 2, hardestHoleNine)
    newHC.player4 = getHardestNineHandicap(relTeam2HC / 2, hardestHoleNine)
  } else if (gameplay === "bramble" || gameplay === "two-ball-bramble") {
    let p1PlayingHC = p1 < 0 ? Math.round(p1 / 0.8) : Math.round(p1 * 0.8)
    let p2PlayingHC = p2 < 0 ? Math.round(p2 / 0.8) : Math.round(p2 * 0.8)
    let p3PlayingHC = p3 < 0 ? Math.round(p3 / 0.8) : Math.round(p3 * 0.8)
    let p4PlayingHC = p4 < 0 ? Math.round(p4 / 0.8) : Math.round(p4 * 0.8)
    let lowPlayer = Math.min(p1PlayingHC, p2PlayingHC, p3PlayingHC, p4PlayingHC)
    let relP1HC = p1PlayingHC - lowPlayer
    let relP2HC = p2PlayingHC - lowPlayer
    let relP3HC = p3PlayingHC - lowPlayer
    let relP4HC = p4PlayingHC - lowPlayer

    // * divide by 2 for 9 holes
    newHC.player1 = getHardestNineHandicap(relP1HC / 2, hardestHoleNine)
    newHC.player2 = getHardestNineHandicap(relP2HC / 2, hardestHoleNine)
    newHC.player3 = getHardestNineHandicap(relP3HC / 2, hardestHoleNine)
    newHC.player4 = getHardestNineHandicap(relP4HC / 2, hardestHoleNine)
  } else if (gameplay === "alternate") {
    let p1PlayingHC = p1 < 0 ? p1 / 0.5 : p1 * 0.5
    let p2PlayingHC = p2 < 0 ? p2 / 0.5 : p2 * 0.5
    let p3PlayingHC = p3 < 0 ? p3 / 0.5 : p3 * 0.5
    let p4PlayingHC = p4 < 0 ? p4 / 0.5 : p4 * 0.5
    let team1PlayingHC = Math.round(p1PlayingHC + p3PlayingHC)
    let team2PlayingHC = Math.round(p2PlayingHC + p4PlayingHC)
    let lowHCTeam = Math.min(team1PlayingHC, team2PlayingHC)
    let relTeam1HC = team1PlayingHC - lowHCTeam
    let relTeam2HC = team2PlayingHC - lowHCTeam
    // * get and return 9 hole HC
    newHC.player1 = getHardestNineHandicap(relTeam1HC / 2, hardestHoleNine)
    newHC.player2 = getHardestNineHandicap(relTeam2HC / 2, hardestHoleNine)
    newHC.player3 = getHardestNineHandicap(relTeam1HC / 2, hardestHoleNine)
    newHC.player4 = getHardestNineHandicap(relTeam2HC / 2, hardestHoleNine)
  } else if (gameplay === "singles") {
    // * divide by 2 for 9 holes
    newHC.player1 = getHardestNineHandicap((p1 - lowHC) / 2, hardestHoleNine)
    newHC.player2 = getHardestNineHandicap((p2 - lowHC) / 2, hardestHoleNine)
    newHC.player3 = getHardestNineHandicap((p3 - lowHC) / 2, hardestHoleNine)
    newHC.player4 = getHardestNineHandicap((p4 - lowHC) / 2, hardestHoleNine)
  } else {
    // * best ball games
    let p1PlayingHC = p1 < 0 ? Math.round(p1 / 0.9) : Math.round(p1 * 0.9)
    let p2PlayingHC = p2 < 0 ? Math.round(p2 / 0.9) : Math.round(p2 * 0.9)
    let p3PlayingHC = p3 < 0 ? Math.round(p3 / 0.9) : Math.round(p3 * 0.9)
    let p4PlayingHC = p4 < 0 ? Math.round(p4 / 0.9) : Math.round(p4 * 0.9)
    let lowPlayer = Math.min(p1PlayingHC, p2PlayingHC, p3PlayingHC, p4PlayingHC)
    // * set lowest HC to zero
    let relP1HC = p1PlayingHC - lowPlayer
    let relP2HC = p2PlayingHC - lowPlayer
    let relP3HC = p3PlayingHC - lowPlayer
    let relP4HC = p4PlayingHC - lowPlayer

    // * divide by 2 for 9 holes
    newHC.player1 = getHardestNineHandicap(relP1HC / 2, hardestHoleNine)
    newHC.player2 = getHardestNineHandicap(relP2HC / 2, hardestHoleNine)
    newHC.player3 = getHardestNineHandicap(relP3HC / 2, hardestHoleNine)
    newHC.player4 = getHardestNineHandicap(relP4HC / 2, hardestHoleNine)
  }
  // * if 1 handicap is on the front then, Math.round, if not then Math.floor
  return Math.round(newHC[`${player}`])
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

  //  * USGA site says for 9 hole HC, divide player HC in half to nearest tenth
  const playerNineHoleHC = Math.round((playerHandicap / 2) * 10) / 10
  const courseHandicap =
    playerNineHoleHC * (courseSlope / 113) + (courseRating - coursePar)
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
