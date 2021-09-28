import React from "react"
import { CourseInfo } from "../hooks/get-course-info"
import { PlayerInfo } from "../hooks/get-player-info"
// import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
import "../styles/match.css"

// const Container = styled.div`
//   padding: 0 2rem 2rem 2rem;
//   border-bottom: 2px solid;
//   border-color: var(--color-brand-med);
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   & h2 {
//     flex: 0 0 100%;
//   }
//   @media (max-width: 767px) {
//     padding: 0rem 1rem 1rem 1rem;
//     justify-content: center;
//   }
// `

function Match({ player1, player2, player3, player4 }) {
  const { tribute } = CourseInfo()
  const { player } = PlayerInfo()
  const holes = tribute.holes
  const playerOne = player[`${player1}`]
  const playerTwo = player[`${player2}`]
  const playerThree = player[`${player3}`]
  const playerFour = player[`${player4}`]

  function calcTeamScore(p1, h1, p2, h2, p3, h3, p4, h4) {
    const playerOneScore = p1
    const playerOneHandicap = h1
  }

  function calcPlayerScore(s, pHand, hHand) {
    var score = s
    var playerHandicap = pHand
    var holeHandicap = hHand
    if (holeHandicap <= playerHandicap) {
      playerHandicap = Math.min(playerHandicap - 18, 0)
      score--
      return calcPlayerScore(score, playerHandicap, holeHandicap)
    } else {
      return score
    }
  }

  return (
    <div>
      <section class="match__container">
        <div class="match__course">
          <div className="match__column--info column-left">
            <div className="match__hole row-cell">hole</div>
            <div className="match__yardage row-cell">yardage</div>
            <div className="match__handicap row-cell">handicap</div>
            <div className="match__par row-cell">par</div>
          </div>
          {holes.map(hole => (
            <div className="match__column">
              <div className="match__hole row-cell">{hole.number}</div>
              <div className="match__yardage row-cell">{hole.tees.blue}</div>
              <div className="match__handicap row-cell">{hole.handicap}</div>
              <div className="match__par row-cell">{hole.par}</div>
            </div>
          ))}
        </div>

        <div class="match__teamScores">
          <div class="match__teamScores--team1">
            <div class={"match__playerScore match__player--" + `${player1}`}>
              <div className="match__column--info column-left">{player1} -- {playerOne.handicap}</div>
              {playerOne
                ? playerOne.course.tribute.map((score, i) => (
                    <div className="match__column">
                      <div className="match__score row-cell">
                        {calcPlayerScore(
                          score,
                          playerOne.handicap,
                          holes[i].handicap
                        )}
                        <sup>{score}</sup>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
            {playerThree ? (
              <div class={"match__playerScore match__player--" + `${player3}`}>
                <div className="match__column--info column-left">{player3}</div>
                {playerThree
                  ? playerThree.course.tribute.map(score => (
                      <div className="match__column">
                        <div className="match__score row-cell">{score}</div>
                      </div>
                    ))
                  : ""}
              </div>
            ) : (
              ""
            )}
            <div>Score</div>
          </div>

          <div class="match__teamScores--team2">
            <div class={"match__playerScore match__player--" + `${player2}`}>
              <div className="match__column--info column-left">{player2}</div>
              {playerTwo
                ? playerTwo.course.tribute.map(score => (
                    <div className="match__column">
                      <div className="match__score row-cell">{score}</div>
                    </div>
                  ))
                : ""}
            </div>
            {playerFour ? (
              <div class={"match__playerScore match__player--" + `${player4}`}>
                <div className="match__column--info column-left">{player4}</div>
                {playerFour
                  ? playerFour.course.tribute.map(score => (
                      <div className="match__column">
                        <div className="match__score row-cell">{score}</div>
                      </div>
                    ))
                  : ""}
              </div>
            ) : (
              ""
            )}
            <div>Score</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Match
