import React from "react"
import { calcPlayerScore } from "./handicapHelper"

function calcPops(holes, score, p1HC, handicap, holePar) {
  let playerHCScore = ""
  if (score < 50) {
    playerHCScore = parseInt(calcPlayerScore(score, p1HC, handicap, holes))
  } else {
    playerHCScore = parseInt(calcPlayerScore(holePar, p1HC, handicap, holes))
  }

  // 20 is a random high number
  const actualScore = score < 20 ? score : holePar
  const total = actualScore - playerHCScore
  if (total >= 2) {
    return (
      <>
        <div className="pops pops--1"></div>
        <div className="pops pops--2"></div>
      </>
    )
  } else if (total === 1) {
    return (
      <>
        <div className="pops pops--1"></div>
      </>
    )
  }
}

function calcScorecardMarks(score, holePar) {
  // birdie
  if (holePar - score > 0 && holePar - score === 1) {
    return (
      <>
        <div className="scorecard-circle circle--1"></div>
      </>
    )
  } else if (holePar - score > 0 && holePar - score === 2) {
    return (
      <>
        <div className="scorecard-circle circle--1"></div>
        <div className="scorecard-circle circle--2"></div>
      </>
    )
  } else if (holePar - score > 0 && holePar - score === 3) {
    return (
      <>
        <div className="scorecard-circle circle--1"></div>
        <div className="scorecard-circle circle--2"></div>
        <div className="scorecard-circle circle--3"></div>
      </>
    )
  }
}

export { calcPops, calcScorecardMarks }
