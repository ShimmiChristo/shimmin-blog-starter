/**
 * @param {int} s - player score
 * @param {int} pHand - player handicap
 * @param {int} hHand - hole handicap
 */
function calcPlayerScore(s, pHand, hHand) {
  let score = s
  let playerHandicap = pHand
  const holeHandicap = hHand

  if (score > "20") {
    return "-"
  } else {
    if (holeHandicap <= playerHandicap && score > -10) {
      playerHandicap = playerHandicap - 18
      score--
      return calcPlayerScore(score, playerHandicap, holeHandicap)
    } else {
      return score
    }
  }
}

/**
 * @param {string} gameplay - gameplay
 * @param {string} player1Param - player name
 * @param {int} player1Handicap - player HC
 * @param {string} player2Param - player name
 * @param {int} player2Handicap - player HC
 */
function getMatchHandicap(
  gameplay,
  player1Param,
  player1Handicap,
  player2Param,
  player2Handicap
) {
  const player1Name = player1Param
  if (gameplay === "scramble" || gameplay === "pinehurst") {
    let lowHC = Math.min(player1Handicap, player2Handicap)
    let highHC = Math.max(player1Handicap, player2Handicap)
    return Math.round(0.6 * lowHC + 0.4 * highHC)
  } else {
    player1Name
  }

  // if (player1Param)
  // if (matchHandicap === "average") {
  //   if (player === playerOne.name || player === playerThree.name) {
  //     return (playerOneHand + playerThreeHand) / 2
  //   } else if (player === playerTwo.name || player === playerFour.name) {
  //     return (playerTwoHand + playerFourHand) / 2
  //   }
  // } else if (matchHandicap === "full") {
  //   if (player === playerOne.name) {
  //     return playerOneHand
  //   } else if (player === playerTwo.name) {
  //     return playerTwoHand
  //   } else if (playerThree !== undefined && player === playerThree.name) {
  //     return playerThreeHand
  //   } else if (playerFour !== undefined && player === playerFour.name) {
  //     return playerFourHand
  //   }
  // } else {
  // if (player === playerOne.name) {
  //   return playerOneHand
  // } else if (player === playerTwo.name) {
  //   return playerTwoHand
  // } else if (playerThree !== undefined && player === playerThree.name) {
  //   return playerThreeHand
  // } else if (playerFour !== undefined && player === playerFour.name) {
  //   return playerFourHand
  // }
  // }
}

export { calcPlayerScore, getMatchHandicap }
