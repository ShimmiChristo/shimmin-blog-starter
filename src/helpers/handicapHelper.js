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
 * @param {string} player1Name - player name
 * @param {int} player1Handicap - player HC
 * @param {string} player2Name - player name
 * @param {int} player2Handicap - player HC
 */
function getMatchHandicap(
  gameplay,
  player1Name,
  playerOneHandicap,
  player2Name,
  playerTwoHandicap
) {
  if (gameplay === "scramble" || gameplay === "pinehurst") {
    let lowHC = Math.min(playerOneHandicap, playerTwoHandicap)
    let highHC = Math.max(playerOneHandicap, playerTwoHandicap)
    return Math.round(0.6 * lowHC + 0.4 * highHC)
  } else if (gameplay === "alternate") {
    return Math.round((playerOneHandicap + playerTwoHandicap) / 2)
  } else if (player2Name && playerTwoHandicap) {
    return playerTwoHandicap
  } else {
    return playerOneHandicap
  }
}

export { calcPlayerScore, getMatchHandicap }
