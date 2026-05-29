// import MatchNav from "../components/match-nav"
/*
 *    - Shamble (Bramble) - 80% of handicap (or 75% of combined team HC)
 *    - Foursomes (alternate shot) - 50% of combined team handicap
 *    - Greensomes (alternate shot and best drive) - 60% low handicap + 40% high handicap
 *    - Pinehurst - 60% low handicap + 40% high handicap
 *    - Scramble (2 players) - 35% low/15% high
 *    - Match play individual - 100% of handicap
 *    - Match play Four-Ball - 90% of handicap
 */

/*
 * ** Handicap calculation for 9 holes **
 * - get 18 hole course handicap
 * - take the perctange for the handicap allowance
 * - divide by 2 for 9 holes
 * - round to nearest whole number
 * - compare with the lowest handicap
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
  } else if (score <= "0") {
    return 0;
  }
   else if (holes !== undefined && holes !== "total") {
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
  const parsedScore = parseFloat(score.toFixed(1))

  // * if 0.5, round up for hardest hole
  if (parsedScore % 1 === 0.5) {
    // * round up
    if (hardestHoleNine) {
      return Math.round(parsedScore)
    } else {
      // * round down
      return Math.floor(parsedScore)
    }
  } else {
    return Math.round(parsedScore)
  }
}

// * added with handicap-calculator.js refactor
// * params: unrounded course handicap, handicap allowance percentage, gameplay (optional)
function getPlayingHandicap(unroundedCourseHC, handicapAllowance, gameplay) {
  const courseHC = unroundedCourseHC * (handicapAllowance / 100)
  const playerHC = Math.round(courseHC)
  return playerHC
}

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
   *
   * 07/07/25 - update
   * To Match USGA match handicap
   * WE need to get the 18 hole handicap and divide by 2
   */
  const p1 = handicaps[0]
  const p2 = handicaps[1]
  const p3 = handicaps[2] ? handicaps[2] : 99
  const p4 = handicaps[3] ? handicaps[3] : 99
  const lowHC = Math.min(p1, p2, p3, p4)
  // const lowHCTeam1 = Math.min(p1, p3)
  // const highHCTeam1 = Math.max(p1, p3)
  // const lowHCTeam2 = Math.min(p2, p4)
  // const highHCTeam2 = Math.max(p2, p4)

  // if (gameplay === "pinehurst" || gameplay === "scramble") {
  if (gameplay === "pinehurst" || gameplay === "greensomes") {
    // * get 9 hole HC
    let p1NineHoleHC = p1 / 2
    let p2NineHoleHC = p2 / 2
    let p3NineHoleHC = p3 / 2
    let p4NineHoleHC = p4 / 2
    // * take percentage of the HC
    let lowHCTeam1 = Math.min(p1NineHoleHC, p3NineHoleHC)
    let highHCTeam1 = Math.max(p1NineHoleHC, p3NineHoleHC)
    let lowHCTeam2 = Math.min(p2NineHoleHC, p4NineHoleHC)
    let highHCTeam2 = Math.max(p2NineHoleHC, p4NineHoleHC)
    let lowPlayingHCTeam1 = lowHCTeam1 < 0 ? lowHCTeam1 / 0.6 : lowHCTeam1 * 0.6
    let highPlayingHCTeam1 =
      highHCTeam1 < 0 ? highHCTeam1 / 0.4 : highHCTeam1 * 0.4
    let lowPlayingHCTeam2 = lowHCTeam2 < 0 ? lowHCTeam2 / 0.6 : lowHCTeam2 * 0.6
    let highPlayingHCTeam2 =
      highHCTeam2 < 0 ? highHCTeam2 / 0.4 : highHCTeam2 * 0.4
    // * round the team total HC
    let team1PlayingHC = Math.round(lowPlayingHCTeam1 + highPlayingHCTeam1)
    let team2PlayingHC = Math.round(lowPlayingHCTeam2 + highPlayingHCTeam2)
    // console.log('lowPlayingHCTeam1 - ', lowPlayingHCTeam1);
    // console.log('highPlayingHCTeam21- ', highPlayingHCTeam1);
    // console.log('team1PlayingHC - ', team1PlayingHC);
    // console.log('team2PlayingHC - ', team2PlayingHC);

    // * zero out the lowest HC
    let lowHCTeam = Math.min(team1PlayingHC, team2PlayingHC)
    let relTeam1HC = Math.round(team1PlayingHC - lowHCTeam)
    let relTeam2HC = Math.round(team2PlayingHC - lowHCTeam)
    newHC.player1 = relTeam1HC
    newHC.player2 = relTeam2HC
    newHC.player3 = relTeam1HC
    newHC.player4 = relTeam2HC
  } else if (gameplay === "scramble") {
    // * get 9 hole HC
    let p1NineHoleHC = p1 / 2
    let p2NineHoleHC = p2 / 2
    let p3NineHoleHC = p3 / 2
    let p4NineHoleHC = p4 / 2
    // * take percentage of the HC
    let lowHCTeam1 = Math.min(p1NineHoleHC, p3NineHoleHC)
    let highHCTeam1 = Math.max(p1NineHoleHC, p3NineHoleHC)
    let lowHCTeam2 = Math.min(p2NineHoleHC, p4NineHoleHC)
    let highHCTeam2 = Math.max(p2NineHoleHC, p4NineHoleHC)
    let lowPlayingHCTeam1 =
      lowHCTeam1 < 0 ? lowHCTeam1 / 0.35 : lowHCTeam1 * 0.35
    let highPlayingHCTeam1 =
      highHCTeam1 < 0 ? highHCTeam1 / 0.15 : highHCTeam1 * 0.15
    let lowPlayingHCTeam2 =
      lowHCTeam2 < 0 ? lowHCTeam2 / 0.35 : lowHCTeam2 * 0.35
    let highPlayingHCTeam2 =
      highHCTeam2 < 0 ? highHCTeam2 / 0.15 : highHCTeam2 * 0.15

    // * round the team total HC
    let team1PlayingHC = Math.round(lowPlayingHCTeam1 + highPlayingHCTeam1)
    let team2PlayingHC = Math.round(lowPlayingHCTeam2 + highPlayingHCTeam2)
    // * zero out the lowest HC
    let lowHCTeam = Math.min(team1PlayingHC, team2PlayingHC)
    let relTeam1HC = Math.round(team1PlayingHC - lowHCTeam)
    let relTeam2HC = Math.round(team2PlayingHC - lowHCTeam)

    newHC.player1 = relTeam1HC
    newHC.player2 = relTeam2HC
    newHC.player3 = relTeam1HC
    newHC.player4 = relTeam2HC
    // * bramble and two-ball-bramble
  } else if (gameplay === "bramble" || gameplay === "two-ball-bramble") {
    // * get 9 hole HC
    let p1PlayingHC = p1 < 0 ? p1 / 0.75 : p1 * 0.75
    let p2PlayingHC = p2 < 0 ? p2 / 0.75 : p2 * 0.75
    let p3PlayingHC = p3 < 0 ? p3 / 0.75 : p3 * 0.75
    let p4PlayingHC = p4 < 0 ? p4 / 0.75 : p4 * 0.75

    // * divide by 2 for 9 hole matches
    let p1NineHoleHC = Math.round(p1PlayingHC / 2)
    let p2NineHoleHC = Math.round(p2PlayingHC / 2)
    let p3NineHoleHC = Math.round(p3PlayingHC / 2)
    let p4NineHoleHC = Math.round(p4PlayingHC / 2)

    // * get the lowest 9 hole HC
    let lowPlayer = Math.min(
      p1NineHoleHC,
      p2NineHoleHC,
      p3NineHoleHC,
      p4NineHoleHC
    )

    let relP1HC = p1NineHoleHC - lowPlayer
    let relP2HC = p2NineHoleHC - lowPlayer
    let relP3HC = p3NineHoleHC - lowPlayer
    let relP4HC = p4NineHoleHC - lowPlayer

    newHC.player1 = relP1HC
    newHC.player2 = relP2HC
    newHC.player3 = relP3HC
    newHC.player4 = relP4HC
    // *alternate shot and greensomes
  } else if (gameplay === "alternate") {
    // * get 9 hole HC
    let p1NineHoleHC = p1 / 2
    let p2NineHoleHC = p2 / 2
    let p3NineHoleHC = p3 / 2
    let p4NineHoleHC = p4 / 2

    // * get 50% for alternate shot
    let team1PlayingHCSum = (p1NineHoleHC + p3NineHoleHC) * 0.5
    let team2PlayingHCSum = (p2NineHoleHC + p4NineHoleHC) * 0.5
    // * round the team total HC
    let team1PlayingHC = Math.round(team1PlayingHCSum)
    let team2PlayingHC = Math.round(team2PlayingHCSum)
    let lowHCTeam = Math.min(team1PlayingHC, team2PlayingHC)
    // * zero out the lowest HC
    let relTeam1HC = team1PlayingHC - lowHCTeam
    let relTeam2HC = team2PlayingHC - lowHCTeam

    newHC.player1 = relTeam1HC
    newHC.player2 = relTeam2HC
    newHC.player3 = relTeam1HC
    newHC.player4 = relTeam2HC
  } else if (gameplay === "singles") {
    // * divide by 2 for 9 holes
    let p1NineHoleHC = Math.round(p1 / 2)
    let p2NineHoleHC = Math.round(p2 / 2)
    let p3NineHoleHC = Math.round(p3 / 2)
    let p4NineHoleHC = Math.round(p4 / 2)
    let lowHC = Math.min(p1NineHoleHC, p2NineHoleHC, p3NineHoleHC, p4NineHoleHC)

    newHC.player1 = p1NineHoleHC - lowHC
    newHC.player2 = p2NineHoleHC - lowHC
    newHC.player3 = p3NineHoleHC - lowHC
    newHC.player4 = p4NineHoleHC - lowHC
  } else {
    // * best ball games
    let p1PlayingHC
    let p2PlayingHC
    let p3PlayingHC
    let p4PlayingHC
    let handicapPercentage
    if (gameplay === "one-ball-strokeplay") {
      handicapPercentage = .85
      p1PlayingHC = p1 < 0 ? p1 / handicapPercentage : p1 * handicapPercentage
      p2PlayingHC = p2 < 0 ? p2 / handicapPercentage : p2 * handicapPercentage
      p3PlayingHC = p3 < 0 ? p3 / handicapPercentage : p3 * handicapPercentage
      p4PlayingHC = p4 < 0 ? p4 / handicapPercentage : p4 * handicapPercentage
    } else {
      handicapPercentage = .90
      p1PlayingHC = p1 < 0 ? p1 / handicapPercentage : p1 * handicapPercentage
      p2PlayingHC = p2 < 0 ? p2 / handicapPercentage : p2 * handicapPercentage
      p3PlayingHC = p3 < 0 ? p3 / handicapPercentage : p3 * handicapPercentage
      p4PlayingHC = p4 < 0 ? p4 / handicapPercentage : p4 * handicapPercentage
    }

    // * divide by 2 for 9 holes
    // let p1NineHoleHC = getHardestNineHandicap(p1PlayingHC / 2, hardestHoleNine)
    // let p2NineHoleHC = getHardestNineHandicap(p2PlayingHC / 2, hardestHoleNine)
    // let p3NineHoleHC = getHardestNineHandicap(p3PlayingHC / 2, hardestHoleNine)
    // let p4NineHoleHC = getHardestNineHandicap(p4PlayingHC / 2, hardestHoleNine)
    let p1NineHoleHC = (p1PlayingHC / 2).toFixed(1)
    let p2NineHoleHC = (p2PlayingHC / 2).toFixed(1)
    let p3NineHoleHC = (p3PlayingHC / 2).toFixed(1)
    let p4NineHoleHC = (p4PlayingHC / 2).toFixed(1)

    // * get the lowest 9 hole HC
    let lowPlayer = Math.min(
      p1NineHoleHC,
      p2NineHoleHC,
      p3NineHoleHC,
      p4NineHoleHC
    )
    // * set lowest HC to zero
    let relP1HC = p1NineHoleHC - lowPlayer
    let relP2HC = p2NineHoleHC - lowPlayer
    let relP3HC = p3NineHoleHC - lowPlayer
    let relP4HC = p4NineHoleHC - lowPlayer

    newHC.player1 = relP1HC
    newHC.player2 = relP2HC
    newHC.player3 = relP3HC
    newHC.player4 = relP4HC
  }
  // // * if 1 handicap is on the front then, Math.round, if not then Math.floor
  // if (hardestHoleNine && newHC[`${player}`] === 1) {
  //   newHC.player1 = Math.round(newHC.player1)
  //   newHC.player2 = Math.round(newHC.player2)
  //   newHC.player3 = Math.round(newHC.player3)
  //   newHC.player4 = Math.round(newHC.player4)
  // } else if (!hardestHoleNine) {
  //   newHC.player1 = Math.floor(newHC.player1)
  //   newHC.player2 = Math.floor(newHC.player2)
  //   newHC.player3 = Math.floor(newHC.player3)
  //   newHC.player4 = Math.floor(newHC.player4)
  // }
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

  if (gameplay === "greensomes" || gameplay === "pinehurst") {
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

  // * USGA site says for 9 hole HC, divide player HC in half to nearest tenth
  // * USGA is getting the full 18 HC (by doubling the 9 hole calculation)
  // * then calculating divide by 2 for the 9 hole course HC
  // * then times the handicap allowance to get playing handicap
  // const playerNineHoleHC = Math.round((playerHandicap / 2) * 10) / 10
  const eighteenholeRating = courseRating * 2
  const eighteenPar = coursePar * 2
  const courseHandicap =
    playerHandicap * (courseSlope / 113) + (eighteenholeRating - eighteenPar)
  // * do not round before getting playing handicap
  return courseHandicap
}
export {
  calcPlayerScore,
  getMatchHandicap,
  calcToLowestHandicap,
  getPlayerHandicap,
  getCourseHandicap,
  getPlayingHandicap,
}
