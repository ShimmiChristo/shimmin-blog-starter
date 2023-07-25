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

// function a(gameplay, p1Param, p2Param )

function getMatchHandicap(matchHandicap, gameplay, player1Param, player2Param) {
  if (matchHandicap === "average") {
    if (player1Param && player2Param) {
      return (player1Param + player2Param) / 2
    }
  } else {
    player1Param
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
