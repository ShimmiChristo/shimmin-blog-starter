import React, { useState } from "react"
// import { Link } from "gatsby"
import { CourseInfo } from "../hooks/get-course-info"
import { PlayerInfo } from "../hooks/get-player-info"
import styled from "styled-components"
import "../styles/match.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons"

const CloseBtn = styled.span`
  display: block;
  padding: 1rem 1rem 2rem 2rem;
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    cursor: pointer;
    cursor: hand;
  }

  @media (max-width: 768px) {
    font-size: 0.5em;
  }
`
const OpenBtn = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translatex(-50%);

  &:hover {
    cursor: pointer;
    cursor: hand;
  }
`
const Section = styled.section`
  border: 1px solid gray;
  padding: 2rem 2rem 3rem;
  border-radius: 0.7rem;
  overflow: hidden;
  max-width: 1000px;
  margin: 2rem auto 2rem;
  transition: max-height 0.3s ease-in-out;
  max-height: 200px;
  position: relative;
  width: 98%;
  ${CloseBtn} {
    display: none;
  }
  ${OpenBtn} {
    display: block;
    padding: 0 100px;
  }
  .match__header {
    padding-bottom: 4rem;
  }

  &.open {
    max-height: 1000px;
    box-shadow: 2px 2px 9px #CCCCCC;
    
    .match__header {
      padding-bottom: 0.5rem;
    }
    ${CloseBtn} {
      display: block;
    }
    ${OpenBtn} {
      display: none;
    }
  }
  .match__card-container {
    overflow-y: scroll;
  }

  @media (max-width: 768px) {
    &.closed {
      &[data-handicap="average"] {
        max-height: 400px;
      }
    }
    max-height: 350px;
    padding: 2rem 1rem;
  }
  &:hover {
    cursor: pointer;
  }
`

function Match({
  matchId,
  matchHandicap,
  courseMatch,
  player1,
  player2,
  player3,
  player4,
}) {
  const { course } = CourseInfo()
  const { player } = PlayerInfo()
  const courseHoles = course[`${courseMatch}`].holes
  // const courseName = course[`${courseMatch}`].name
  // const courseLink = course[`${courseMatch}`].link
  const playerOne = player[`${player1}`]
  const playerOneHand = playerOne.handicap
  const playerTwo = player[`${player2}`]
  const playerTwoHand = playerTwo.handicap
  const playerThree = player[`${player3}`] || undefined
  const playerThreeHand = playerThree ? playerThree.handicap : ""
  const playerFour = player[`${player4}`] || undefined
  const playerFourHand = playerFour ? playerFour.handicap : ""
  const matchNumber = matchId

  const [sectionHeight, setSectionHeight] = useState("closed")
  // const parTotal = course[`${courseMatch}`].totals.par

  function calcTeamOneScore() {
    const teamOneScoreArr = []
    var playerOneScore = playerOne.course[`${courseMatch}`] // [scores]
    var pHandiPlayerOne = playerOne.handicap

    if (playerThree !== undefined) {
      var playerThreeScore = playerThree.course[`${courseMatch}`] || undefined // [scores]
      var pHandiPlayerThree = playerThree.handicap || ""
      var teamHandicap
      if (matchHandicap === "average") {
        teamHandicap = (pHandiPlayerOne + pHandiPlayerThree) / 2

        for (var i = 0; i < playerOneScore.length; i++) {
          var sPlayerOne = playerOneScore[i]
          var sPlayerThree = playerThreeScore[i]
          var hHand = courseHoles[i].handicap
          var playerOneHandiScore = calcPlayerScore(
            sPlayerOne,
            teamHandicap,
            hHand
          )
          var playerThreeHandiScore = calcPlayerScore(
            sPlayerThree,
            teamHandicap,
            hHand
          )

          if (
            isNaN(playerOneHandiScore) !== true &&
            isNaN(playerThreeHandiScore) !== true
          ) {
            teamOneScoreArr.push(
              Math.min(playerOneHandiScore, playerThreeHandiScore)
            )
          } else {
            teamOneScoreArr.push("-")
          }
        }
      } else {
        for (var i = 0; i < playerOneScore.length; i++) {
          var sPlayerOne = playerOneScore[i]
          var sPlayerThree = playerThreeScore[i]
          var hHand = courseHoles[i].handicap
          var playerOneHandiScore = calcPlayerScore(
            sPlayerOne,
            pHandiPlayerOne,
            hHand
          )
          var playerThreeHandiScore = calcPlayerScore(
            sPlayerThree,
            pHandiPlayerThree,
            hHand
          )

          if (
            isNaN(playerOneHandiScore) !== true &&
            isNaN(playerThreeHandiScore) !== true
          ) {
            teamOneScoreArr.push(
              Math.min(playerOneHandiScore, playerThreeHandiScore)
            )
          } else {
            teamOneScoreArr.push("-")
          }
          
        }
      }
    } else {
      for (var i = 0; i < playerOneScore.length; i++) {
        var sPlayerOne = playerOneScore[i]
        var hHand = courseHoles[i].handicap
        var playerOneHandiScore = calcPlayerScore(
          sPlayerOne,
          pHandiPlayerOne,
          hHand
        )

        teamOneScoreArr.push(playerOneHandiScore)
      }
    }
    return teamOneScoreArr
  }
  const teamOneScore = calcTeamOneScore()

  function calcTeamTwoScore() {
    const teamTwoScoreArr = []
    var playerTwoScore = playerTwo.course[`${courseMatch}`] // [scores]
    var pHandiPlayerTwo = playerTwo.handicap

    if (playerFour !== undefined) {
      var playerFourScore = playerFour.course[`${courseMatch}`] || undefined // [scores]
      var pHandiPlayerFour = playerFour.handicap || ""
      var teamHandicap
      if (matchHandicap === "average") {
        teamHandicap = (pHandiPlayerTwo + pHandiPlayerFour) / 2
        for (var i = 0; i < playerTwoScore.length; i++) {
          var sPlayerTwo = playerTwoScore[i]
          var sPlayerFour = playerFourScore[i]
          var hHand = courseHoles[i].handicap
          var playerTwoHandiScore = calcPlayerScore(
            sPlayerTwo,
            teamHandicap,
            hHand
          )
          var playerFourHandiScore = calcPlayerScore(
            sPlayerFour,
            teamHandicap,
            hHand
          )

         
          if (
            isNaN(playerTwoHandiScore) !== true &&
            isNaN(playerFourHandiScore) !== true
          ) {
            teamTwoScoreArr.push(
              Math.min(playerTwoHandiScore, playerFourHandiScore)
            )
          } else {
            teamTwoScoreArr.push("-")
          }
        }
      } else {
        for (var i = 0; i < playerTwoScore.length; i++) {
          var sPlayerTwo = playerTwoScore[i]
          var sPlayerFour = playerFourScore[i]
          var hHand = courseHoles[i].handicap
          var playerTwoHandiScore = calcPlayerScore(
            sPlayerTwo,
            pHandiPlayerTwo,
            hHand
          )
          var playerFourHandiScore = calcPlayerScore(
            sPlayerFour,
            pHandiPlayerFour,
            hHand
          )

          if (
            isNaN(playerTwoHandiScore) !== true &&
            isNaN(playerFourHandiScore) !== true
          ) {
            teamTwoScoreArr.push(
              Math.min(playerTwoHandiScore, playerFourHandiScore)
            )
          } else {
            teamTwoScoreArr.push("-")
          }
        }
      }
    } else {
      for (var i = 0; i < playerTwoScore.length; i++) {
        var sPlayerTwo = playerTwoScore[i]
        var hHand = courseHoles[i].handicap
        var playerTwoHandiScore = calcPlayerScore(
          sPlayerTwo,
          pHandiPlayerTwo,
          hHand
        )

        teamTwoScoreArr.push(playerTwoHandiScore)
      }
    }
    return teamTwoScoreArr
  }
  const teamTwoScore = calcTeamTwoScore()

  function calcPlayerScore(s, pHand, hHand) {
    var score = s
    var playerHandicap = pHand
    var holeHandicap = hHand
    if (score > "20") {
      return "-"
    } else {
      if (holeHandicap <= playerHandicap && score > -10) {
        // playerHandicap = Math.min(playerHandicap - 18, 0)
        playerHandicap = playerHandicap - 18
        score--
        return calcPlayerScore(score, playerHandicap, holeHandicap)
      } else {
        return score
      }
    }
  }

  function calcHoleWinner(hole) {
    var teamOneScoreArray = calcTeamOneScore()
    var teamTwoScoreArray = calcTeamTwoScore()
    var holeIndex
    if (hole > 9) {
      holeIndex = hole - 10
    } else {
      holeIndex = hole - 1
    }
    var teamWins = {
      team: "",
      teamOne: 0,
      teamTwo: 0,
    }

    if (teamOneScoreArray[holeIndex] > teamTwoScoreArray[holeIndex]) {
      teamWins.teamTwo++
      teamWins.team = "teamTwo"
      return teamWins
    } else if (teamOneScoreArray[holeIndex] < teamTwoScoreArray[holeIndex]) {
      teamWins.teamOne++
      teamWins.team = "teamOne"
      return teamWins
    } else {
      teamWins.teamOne = 0
      teamWins.team = "tie"
      return teamWins
    }
  }

  function calcTeamScores() {
    var teamOneScoreArray = calcTeamOneScore()
    var teamTwoScoreArray = calcTeamTwoScore()
    var holeIndex
    const teamWins = {
      teamOne: 0,
      teamTwo: 0,
    }
    courseHoles.map((hole, i) => {
      holeIndex = i
      if (teamOneScoreArray[holeIndex] > teamTwoScoreArray[holeIndex]) {
        teamWins.teamTwo++
      } else if (teamOneScoreArray[holeIndex] < teamTwoScoreArray[holeIndex]) {
        teamWins.teamOne++
      }
    })

    return teamWins
  }
  const teamFinalScores = calcTeamScores()

  function matchCardClick() {
    sectionHeight === "closed"
      ? setSectionHeight("open")
      : setSectionHeight("closed")
  }

  return (
    <Section
      data-match={`${courseMatch}`}
      data-handicap={`${matchHandicap}`}
      className={`"match__container " ${sectionHeight}`}
    >
      <CloseBtn onClick={matchCardClick}>
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </CloseBtn>
      <OpenBtn onClick={matchCardClick}>
        <FontAwesomeIcon icon={faChevronDown} size="2x" />
      </OpenBtn>
      {/* <div class="course__info">
        <Link to={courseLink}>
          {courseName}
        </Link>
      </div> */}
      <i class="match__number">match {matchNumber}</i>
      <div class="match__header">
        <div className="match__team color-green">
          <div className="match__team--playerOne capitalize">
            {player1} <span>({playerOneHand})</span>
          </div>
          {player3 ? (
            <div className="match__team--playerThree capitalize">
              {player3} <span>({playerThreeHand})</span>
            </div>
          ) : (
            ""
          )}
          {player3 && matchHandicap === "average" ? (
            <div class="flex-basis-100">
              {" "}
              ({(playerOneHand + playerThreeHand) / 2})
            </div>
          ) : (
            ""
          )}
        </div>

        <div class="team__scores">
          <div
            id="team__one"
            class={
              "bk-gray " +
              (teamFinalScores.teamOne > teamFinalScores.teamTwo
                ? `team-one-color text-white`
                : "")
            }
          >
            {teamFinalScores.teamOne || 0}
          </div>

          <div
            id="team__two"
            class={
              "bk-gray " +
              (teamFinalScores.teamOne < teamFinalScores.teamTwo
                ? `team-two-color text-white`
                : "")
            }
          >
            {teamFinalScores.teamTwo || 0}
          </div>
        </div>

        <div className="match__team color-blue">
          <div className="match__team--playerTwo capitalize">
            {player2}
            <span> ({playerTwoHand})</span>
          </div>
          {player4 ? (
            <div className="match__team--playerFour capitalize">
              {player4}
              <span> ({playerFourHand})</span>
            </div>
          ) : (
            ""
          )}
          {player4 && matchHandicap === "average" ? (
            <div class="flex-basis-100">
              {" "}
              ({(playerTwoHand + playerFourHand) / 2})
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="match__card-container">
        <div className="match__course">
          <div className="match__column--info align-right">
            <div className="match__hole row-cell">hole</div>
            <div className="match__yardage row-cell">yardage</div>
            <div className="match__handicap row-cell">handicap</div>
            <div className="match__par row-cell">par</div>
          </div>
          {courseHoles.map(hole => (
            <div className="match__column">
              <div
                className="match__hole row-cell"
                data-winner={`${calcHoleWinner(hole.number).team}`}
                id={hole.number}
              >
                {hole.number}
              </div>
              <div className="match__yardage row-cell">{hole.tees.middle}</div>
              <div className="match__handicap row-cell">{hole.handicap}</div>
              <div className="match__par row-cell">{hole.par}</div>
            </div>
          ))}
        </div>

        <div className="match__teamScores">
          <div className="match__teamScores--team1">
            <div className={"match__playerScore match__player1"}>
              <div className="match__column--info align-left row-cell">
                {player1}
              </div>
              {playerOne
                ? playerOne.course[`${courseMatch}`].map((score, i) => (
                    <div className="match__column">
                      <div
                        className="match__score row-cell"
                        data-score={`${calcPlayerScore(
                          score,
                          playerOne.handicap,
                          courseHoles[i].handicap
                        )}`}
                      >
                        {calcPlayerScore(
                          score,
                          playerOne.handicap,
                          courseHoles[i].handicap
                        )}
                        <sup>{score > 20 ? "" : score}</sup>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
            {playerThree ? (
              <div className={"match__playerScore match__player3"}>
                <div className="match__column--info align-left row-cell">
                  {player3}
                </div>
                {playerThree
                  ? playerThree.course[`${courseMatch}`].map((score, i) => (
                      <div className="match__column">
                        <div
                          className="match__score row-cell"
                          data-score={`${calcPlayerScore(
                            score,
                            playerThree.handicap,
                            courseHoles[i].handicap
                          )}`}
                        >
                          {calcPlayerScore(
                            score,
                            playerThree.handicap,
                            courseHoles[i].handicap
                          )}
                          <sup>{score > 20 ? "" : score}</sup>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            ) : (
              ""
            )}
            <div className="match__teamScore">
              <div className="match__column--info column-left">
                <div className="match__score row-cell">score</div>
              </div>
              {teamOneScore.map(hole => (
                <div className="match__column">
                  <div className="match__score row-cell">{hole}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="match__teamScores--team2">
            <div className={"match__playerScore match__player2"}>
              <div className="match__column--info align-left row-cell">
                {player2}
              </div>
              {playerTwo
                ? playerTwo.course[`${courseMatch}`].map((score, i) => (
                    <div className="match__column">
                      <div
                        className="match__score row-cell"
                        data-score={`${calcPlayerScore(
                          score,
                          playerTwo.handicap,
                          courseHoles[i].handicap
                        )}`}
                      >
                        {calcPlayerScore(
                          score,
                          playerTwo.handicap,
                          courseHoles[i].handicap
                        )}
                        <sup>{score > 20 ? "" : score}</sup>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
            {playerFour ? (
              <div className={"match__playerScore match__player4"}>
                <div className="match__column--info align-left row-cell">
                  {player4}
                </div>
                {playerFour
                  ? playerFour.course[`${courseMatch}`].map((score, i) => (
                      <div className="match__column">
                        <div
                          className="match__score row-cell"
                          data-score={`${calcPlayerScore(
                            score,
                            playerFour.handicap,
                            courseHoles[i].handicap
                          )}`}
                        >
                          {calcPlayerScore(
                            score,
                            playerFour.handicap,
                            courseHoles[i].handicap
                          )}
                          <sup>{score > 20 ? "" : score}</sup>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            ) : (
              ""
            )}
            <div className="match__teamScore">
              <div className="match__column--info column-left">
                <div className="match__score row-cell">score</div>
              </div>
              {teamTwoScore.map(hole => (
                <div className="match__column">
                  <div className="match__score row-cell">{hole}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Match
