// * https://www.usga.org/content/usga/home-page/handicapping/roh/Content/rules/5%201b%20Calculation%20of%20a%20Score%20Differential%209%20Hole.htm
const calcCourseDiff = (playerScore, courseSlope, courseRating) => {
  /*
   *** FORMULA ****
   * score diff = (course slope / 113) * (adjusted gross score – Course Rating – PCC adjustment))
   * round to nearest whole number (based on USGA handicap)
   */
  const formula = (113 / courseSlope) * (playerScore - courseRating)
  return formula.toFixed(1)
}

// * https://www.usga.org/handicapping/roh/Content/rules/5%202%20Calculation%20of%20a%20Handicap%20Index.htm
const calcHandicapDiff = roundsArr => {
  const roundsPlayed = roundsArr.length
  let arrCopy = [...roundsArr]
  let sortedArr = arrCopy.sort(function (a, b) {
    return parseFloat(a.coursehandicap) - parseFloat(b.coursehandicap)
  })
  let scoreOne = parseFloat(sortedArr[0]?.coursehandicap)
  let scoreTwo = parseFloat(sortedArr[1]?.coursehandicap)
  let scoreThree = parseFloat(sortedArr[2]?.coursehandicap)
  let scoreFour = parseFloat(sortedArr[3]?.coursehandicap)
  let scoreFive = parseFloat(sortedArr[4]?.coursehandicap)
  let scoreSix = parseFloat(sortedArr[5]?.coursehandicap)
  let scoreSeven = parseFloat(sortedArr[6]?.coursehandicap)
  let scoreEight = parseFloat(sortedArr[7]?.coursehandicap)
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

export { calcCourseDiff, calcHandicapDiff }
