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
  if (total === 2) {
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

export { calcPops }
