/*
  A Score Differential is calculated using the following formula:
  (113 / Slope Rating) x (Adjusted Gross Score - Course Rating - PCC adjustment)

  playing conditions calculation (PCC)

  An “adjusted gross score” is a player’s gross score adjusted under the World Handicap System procedures for unfinished holes, 
  conceded strokes, holes not played or not played under the Rules of Golf, or Maximum Hole Score/Net Double Bogey.
*/
// const golfScore = [4, 4, 4, 4, 4, 4, 4, 4, 4]
// let slopeRating = 135
// let courseRating = 70.1
// let pcc = 0

function CalculateRoundHandicap(roundScore, slopeRating, courseRating, pcc) {
  // calculate differential
  if (roundScore.length === 9) {
    slopeRating = slopeRating / 2
    courseRating = courseRating / 2

    // scores param - array of scores
    function calcAdjustedGrossScore(scores) {
      const score = scores.reduce((sum, current) => sum + current, 0)
      return score
    }

    function calcScoreDifferential(
      slopeRating,
      adjustedGrossScore,
      courseRating,
      pcc
    ) {
      const AGS = adjustedGrossScore(roundScore)

      return (113 / slopeRating) * (AGS - courseRating - pcc)
    }
  }
  return (
    Math.round(
      calcScoreDifferential(
        slopeRating,
        calcAdjustedGrossScore,
        courseRating,
        0
      )
    ) / 10
  )
}

export default CalculateRoundHandicap;