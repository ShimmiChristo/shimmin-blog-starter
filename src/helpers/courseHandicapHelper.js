// * https://www.usga.org/content/usga/home-page/handicapping/roh/Content/rules/5%201b%20Calculation%20of%20a%20Score%20Differential%209%20Hole.htm
const calc18HoleHCDiff = (playerScore, courseSlope, courseRating) => {
  /*
   *** FORMULA ****
   * score diff = (course slope / 113) * (adjusted gross score – Course Rating – PCC adjustment))
   * round to nearest whole number (based on USGA handicap)
   */
  const formula18Holes = (113 / courseSlope) * (playerScore - courseRating)
  return parseFloat(formula18Holes.toFixed(1))
}

// * https://www.usga.org/handicapping/roh/Content/rules/5%201b%20Calculation%20of%20a%20Score%20Differential9Hole.htm
const calc9HoleHCDiff = (playerScore, courseSlope, courseRating) => {
  /*
   * ** FORMULA ****
   * score diff = (113 / 9 hole course slope) * (9 hole adjusted gross score – 9 hole Course Rating – (0.5 * PCC adjustment)))
   * round to nearest whole number (based on USGA handicap)
   *
   * The 9-hole Score Differential remains unrounded until after it has been combined with the player’s expected score.
   * The 18-hole Score Differential is then rounded to the nearest tenth, with .5 rounded upwards.
   */
  const formula9Holes = (113 / courseSlope) * (playerScore - courseRating)
  return parseFloat((formula9Holes * 2).toFixed(1))
}

// * https://www.usga.org/handicapping/roh/Content/rules/5%202%20Calculation%20of%20a%20Handicap%20Index.htm
const calcHandicapDiffAvg = roundsArr => {
  const roundsPlayed = roundsArr.length
  let arrCopy = [...roundsArr]
  let sortedArr = arrCopy.sort(function (a, b) {
    return parseFloat(a) - parseFloat(b)
  })
  let scoreOne = parseFloat(sortedArr[0])
  let scoreTwo = parseFloat(sortedArr[1])
  let scoreThree = parseFloat(sortedArr[2])
  let scoreFour = parseFloat(sortedArr[3])
  let scoreFive = parseFloat(sortedArr[4])
  let scoreSix = parseFloat(sortedArr[5])
  let scoreSeven = parseFloat(sortedArr[6])
  let scoreEight = parseFloat(sortedArr[7])
  switch (roundsPlayed) {
    case 3:
      // * return lowest 1 - 2.0
      return scoreOne - 2.0
    case 4:
      // * return lowest 1 - 2.0
      return scoreOne - 1.0
    case 5:
      // * return lowest 1 - 0
      return scoreOne
    case 6:
      return (scoreOne + scoreTwo) / 2 - 1.0
    case 7 || 8:
      return (scoreOne + scoreTwo) / 2
    case 9 || 10 || 11:
      return (scoreOne + scoreTwo + scoreThree) / 3
    case 12 || 13 || 14:
      return (scoreOne + scoreTwo + scoreThree + scoreFour) / 4
    case 15 || 16:
      return (scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive) / 5
    case 17 || 18:
      return (
        (scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive + scoreSix) /
        6
      )
    case 19:
      return (
        (scoreOne +
          scoreTwo +
          scoreThree +
          scoreFour +
          scoreFive +
          scoreSix +
          scoreSeven) /
        7
      )
    case 20:
      return (
        (scoreOne +
          scoreTwo +
          scoreThree +
          scoreFour +
          scoreFive +
          scoreSix +
          scoreSeven +
          scoreEight) /
        8
      )
    default:
      return 0
  }
}

export { calc18HoleHCDiff, calc9HoleHCDiff, calcHandicapDiffAvg }
