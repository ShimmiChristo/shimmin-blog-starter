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
    box-shadow: 2px 2px 9px #cccccc;

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
  gameplay,
  courseMatch,
  player1,
  player1Handicap,
  player2,
  player2Handicap,
  player3,
  player3Handicap,
  player4,
  player4Handicap,
}) {
  const { course } = CourseInfo()
  const { player } = PlayerInfo()
  const courseHoles = course[`${courseMatch}`].holes
  // const courseName = course[`${courseMatch}`].name
  // const courseLink = course[`${courseMatch}`].link
  const playerOne = player[`${player1}`]
  const playerOneHand = parseInt(player1Handicap)
  const playerTwo = player[`${player2}`]
  const playerTwoHand = parseInt(player2Handicap)
  const playerThree = player[`${player3}`] || undefined
  const playerThreeHand = playerThree ? parseInt(player3Handicap) : ""
  const playerFour = player[`${player4}`] || undefined
  const playerFourHand = playerFour ? parseInt(player4Handicap) : ""
  const matchNumber = matchId

  const [sectionHeight, setSectionHeight] = useState("closed")
  // const parTotal = course[`${courseMatch}`].totals.par

  function calcTeamOneScore() {
    const teamOneScoreArr = []
    let playerOneScore = playerOne.course[`${courseMatch}`] // [scores]
    let pHandiPlayerOne = parseInt(player1Handicap)

    if (playerThree !== undefined) {
      let playerThreeScore = playerThree.course[`${courseMatch}`] || undefined // [scores]
      let pHandiPlayerThree = parseInt(player3Handicap)
      if (matchHandicap === "average") {
        let teamHandicap = (pHandiPlayerOne + pHandiPlayerThree) / 2

        for (let i = 0; i < playerOneScore.length; i++) {
          let sPlayerOne = playerOneScore[i]
          let sPlayerThree = playerThreeScore[i]
          let hHand = courseHoles[i].handicap
          let playerOneHandiScore = calcPlayerScore(
            sPlayerOne,
            teamHandicap,
            hHand
          )
          let playerThreeHandiScore = calcPlayerScore(
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
        for (let i = 0; i < playerOneScore.length; i++) {
          let sPlayerOne = playerOneScore[i]
          let sPlayerThree = playerThreeScore[i]
          let hHand = courseHoles[i].handicap
          let playerOneHandiScore = calcPlayerScore(
            sPlayerOne,
            pHandiPlayerOne,
            hHand
          )
          let playerThreeHandiScore = calcPlayerScore(
            sPlayerThree,
            pHandiPlayerThree,
            hHand
          )

          if (
            isNaN(playerOneHandiScore) !== true &&
            isNaN(playerThreeHandiScore) !== true &&
            gameplay !== "two-ball"
          ) {
            teamOneScoreArr.push(
              Math.min(playerOneHandiScore, playerThreeHandiScore)
            )
          } else if (gameplay === "two-ball") {
            teamOneScoreArr.push(
              Number(playerOneHandiScore) + Number(playerThreeHandiScore)
            )
          } else {
            teamOneScoreArr.push("-")
          }
        }
      }
    } else {
      for (let i = 0; i < playerOneScore.length; i++) {
        let sPlayerOne = playerOneScore[i]
        let hHand = courseHoles[i].handicap
        let playerOneHandiScore = calcPlayerScore(
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
    let playerTwoScore = playerTwo.course[`${courseMatch}`] // [scores]
    let pHandiPlayerTwo = parseInt(player2Handicap)

    if (playerFour !== undefined) {
      let playerFourScore = playerFour.course[`${courseMatch}`] || undefined // [scores]
      let pHandiPlayerFour = parseInt(player4Handicap) || ""
      if (matchHandicap === "average") {
        let teamHandicap = (pHandiPlayerTwo + pHandiPlayerFour) / 2
        for (let i = 0; i < playerTwoScore.length; i++) {
          let sPlayerTwo = playerTwoScore[i]
          let sPlayerFour = playerFourScore[i]
          let hHand = courseHoles[i].handicap
          let playerTwoHandiScoreAv = calcPlayerScore(
            sPlayerTwo,
            teamHandicap,
            hHand
          )
          let playerFourHandiScoreAv = calcPlayerScore(
            sPlayerFour,
            teamHandicap,
            hHand
          )

          if (
            isNaN(playerTwoHandiScoreAv) !== true &&
            isNaN(playerFourHandiScoreAv) !== true
          ) {
            teamTwoScoreArr.push(
              Math.min(playerTwoHandiScoreAv, playerFourHandiScoreAv)
            )
          } else {
            teamTwoScoreArr.push("-")
          }
        }
      } else {
        for (let i = 0; i < playerTwoScore.length; i++) {
          let sPlayerTwo = playerTwoScore[i]
          let sPlayerFour = playerFourScore[i]
          let hHand = courseHoles[i].handicap
          let playerTwoHandiScore = calcPlayerScore(
            sPlayerTwo,
            pHandiPlayerTwo,
            hHand
          )
          let playerFourHandiScore = calcPlayerScore(
            sPlayerFour,
            pHandiPlayerFour,
            hHand
          )

          if (
            isNaN(playerTwoHandiScore) !== true &&
            isNaN(playerFourHandiScore) !== true &&
            gameplay !== "two-ball"
          ) {
            teamTwoScoreArr.push(
              Math.min(playerTwoHandiScore, playerFourHandiScore)
            )
          } else if (gameplay === "two-ball") {
            teamTwoScoreArr.push(
              Number(playerTwoHandiScore) + Number(playerFourHandiScore)
            )
          } else {
            teamTwoScoreArr.push("-")
          }
        }
      }
    } else {
      for (let i = 0; i < playerTwoScore.length; i++) {
        let sPlayerTwo = playerTwoScore[i]
        let hHand = courseHoles[i].handicap
        let playerTwoHandiScore = calcPlayerScore(
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

  function calcTeamScore(
    player1Param,
    player1HandicapParam,
    player2Param,
    player2HandicapParam
  ) {
    // const teamOneScoreArr = []
    // const teamTwoScoreArr = []
    const scoresArr = []
    const playerOne = player[`${player1Param}`]
    let playerOneScore = playerOne.course[`${courseMatch}`] // [scores]
    let playerOneHandicap = parseInt(player1HandicapParam)
    const playerTwo =
      player2Param !== undefined ? player[`${player2Param}`] : undefined
    let playerTwoScore =
      player2Param !== undefined
        ? playerTwo.course[`${courseMatch}`]
        : undefined // [scores]
    let playerTwoHandicap = player2HandicapParam
      ? parseInt(player2HandicapParam)
      : undefined
    // let playerThreeScore = playerThree ? playerThree.course[`${courseMatch}`] : undefined // [scores]
    // let playerThreeHandicap = parseInt(player3Handicap)
    // let playerFourScore = playerFour ? playerFour.course[`${courseMatch}`] : undefined // [scores]
    // let playerFourHandicap = parseInt(player4Handicap)
    // let getHandicap = function (playerHandicapParam) {
    //   if (matchHandicap === "average" && playerTwo !== undefined) {
    //     return (playerOneHandicap + playerTwoHandicap) / 2
    //   } else {
    //     return playerHandicapParam
    //   }
    // }
    let gameplayParam = gameplay
    let matchHandicapParam = matchHandicap

    for (let i = 0; i < playerOneScore.length; i++) {
      let hHand = courseHoles[i].handicap
      let sPlayerOne = playerOneScore[i]
      let sPlayerTwo =
        playerTwoScore !== undefined ? playerTwoScore[i] : undefined
      // let sPlayerThree = playerThreeScore !== undefined ? playerThreeScore[i] : undefined
      // let sPlayerFour = playerFourScore !== undefined ? playerFourScore[i] : undefined

      let playerOneHandicapScore = calcPlayerScore(
        sPlayerOne,
        getHandicap(playerOne.name),
        hHand
      )

      if (playerTwo !== undefined) {
        var playerTwoHandicapScore = calcPlayerScore(
          sPlayerTwo,
          getHandicap(playerTwo.name),
          hHand
        )
      }

      if (
        isNaN(playerTwoHandicapScore) !== true &&
        player2Param !== undefined &&
        gameplay !== "two-ball"
      ) {
        scoresArr.push(Math.min(playerOneHandicapScore, playerTwoHandicapScore))
      } else if (
        isNaN(playerTwoHandicapScore) !== true &&
        gameplay === "two-ball"
      ) {
        scoresArr.push(
          Number(playerOneHandicapScore) + Number(playerTwoHandicapScore)
        )
      } else if (isNaN(playerOneHandicapScore) !== true) {
        scoresArr.push(playerOneHandicapScore)
      } else {
        scoresArr.push("-")
      }

      // let playerThreeHandiScore = calcPlayerScore(
      //   sPlayerThree,
      //   teamHandicap,
      //   hHand
      // )
      // let playerFourHandiScore = calcPlayerScore(
      //   sPlayerFour,
      //   teamHandicap,
      //   hHand
      // )
      // if (isNaN(playerOneHandiScore) !== true && isNaN(playerTwoHandiScore) && isNaN(playerThreeHandiScore) && isNaN(playerFourHandiScore) !== true) {
      //   teamOneScoreArr.push(Math.min(playerOneHandiScore, playerThreeHandiScore))
      //   teamTwoScoreArr.push(Math.min(playerTwoHandiScore, playerFourHandiScore))
      // } else {
      //   teamOneScoreArr.push("-")
      //   teamTwoScoreArr.push("-")
      // }

      // } else if (matchHandicapParam === "full") {
      //   let playerOneHandiScore = calcPlayerScore(
      //     sPlayerOne,
      //     playerOneHandicap,
      //     hHand
      //   )
      //   let playerTwoHandiScore = calcPlayerScore(
      //     sPlayerTwo,
      //     playerTwoHandicap,
      //     hHand
      //   )
      //   let playerThreeHandiScore = calcPlayerScore(
      //     sPlayerThree,
      //     playerThreeHandicap,
      //     hHand
      //   )
      //   let playerFourHandiScore = calcPlayerScore(
      //     sPlayerFour,
      //     playerFourHandicap,
      //     hHand
      //   )
      //   if (isNaN(playerOneHandiScore) !== true && isNaN(playerThreeHandiScore) !== true) {
      //     teamOneScoreArr.push(Math.min(playerOneHandiScore, playerThreeHandiScore))
      //   } else {
      //     teamOneScoreArr.push("-")
      //   }
    }

    // var scores = {
    //   teamOne: teamOneScoreArr,
    //   teamTwo: teamTwoScoreArr,
    // }

    return scoresArr
  }

  const teamOneScoreArray = calcTeamScore(
    player1,
    player1Handicap,
    player3,
    player3Handicap
  )
  const teamTwoScoreArray = calcTeamScore(
    player2,
    player2Handicap,
    player4,
    player4Handicap
  )

  // const calcTeamScoreObj = calcTeamScore();

  function getHandicap(player) {
    if (matchHandicap === "average") {
      if (player === playerOne.name || player === playerThree.name) {
        return (playerOneHand + playerThreeHand) / 2
      } else if (player === playerTwo.name || player === playerFour.name) {
        return (playerTwoHand + playerFourHand) / 2
      }
    } else if (matchHandicap === "full") {
      if (player === playerOne.name) {
        return playerOneHand
      } else if (player === playerTwo.name) {
        return playerTwoHand
      } else if (playerThree !== undefined && player === playerThree.name) {
        return playerThreeHand
      } else if (playerFour !== undefined && player === playerFour.name) {
        return playerFourHand
      }
    } else {
      if (player === playerOne.name) {
        return playerOneHand
      } else if (player === playerTwo.name) {
        return playerTwoHand
      } else if (playerThree !== undefined && player === playerThree.name) {
        return playerThreeHand
      } else if (playerFour !== undefined && player === playerFour.name) {
        return playerFourHand
      }
    }
  }

  function calcPlayerScore(s, pHand, hHand) {
    let score = s
    let playerHandicap = pHand
    const holeHandicap = hHand

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
    // const teamOneScoreArray = calcTeamScore(player1,player1Handicap, player3, player3Handicap)
    // const teamTwoScoreArray = calcTeamScore(player2,player2Handicap, player4, player4Handicap)
    // const teamOneScoreArray = calcTeamOneScore()
    // const teamTwoScoreArray = calcTeamTwoScore()
    var holeIndex
    if (hole > 9) {
      holeIndex = hole - 10
    } else {
      holeIndex = hole - 1
    }
    const teamWins = {
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
    const teamOneScoreArray = calcTeamScore(
      player1,
      player1Handicap,
      player3,
      player3Handicap
    )
    const teamTwoScoreArray = calcTeamScore(
      player2,
      player2Handicap,
      player4,
      player4Handicap
    )
    // const teamTwoScoreArray = calcTeamTwoScore()
    // const teamTwoScoreArray = calcTeamTwoScore()
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
      {/* <div className="course__info">
        <Link to={courseLink}>
          {courseName}
        </Link>
      </div> */}
      <i className="match__number">match {matchNumber}</i>
      <div className="match__header">
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
            <div className="flex-basis-100">
              {" "}
              ({(playerOneHand + playerThreeHand) / 2})
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="team__scores">
          <div
            id="team__one"
            className={
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
            className={
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
            <div className="flex-basis-100">
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
            <div className="match__column" key={hole.number}>
              <div
                className="match__hole row-cell"
                data-winner={`${calcHoleWinner(hole.number).team}`}
                id={hole.number}
                key={hole.number}
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
                    <div className="match__column" key={i+score}>
                      <div
                        key={i+score}
                        className="match__score row-cell"
                        data-score={`${calcPlayerScore(
                          score,
                          getHandicap(player1),
                          courseHoles[i].handicap
                        )}`}
                      >
                        {calcPlayerScore(
                          score,
                          getHandicap(player1),
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
                      <div className="match__column" key={i+score}>
                        <div
                          key={'row-cell' + i+score}
                          className="match__score row-cell"
                          data-score={`${calcPlayerScore(
                            score,
                            getHandicap(player3),
                            courseHoles[i].handicap
                          )}`}
                        >
                          {calcPlayerScore(
                            score,
                            getHandicap(player3),
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
              {teamOneScoreArray.map(hole => (
                <div className="match__column" key={hole}>
                  <div className="match__score row-cell" key={'score' + hole}>
                    {hole}
                  </div>
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
                    <div className="match__column" key={i+score}>
                      <div
                        key={i+score}
                        className="match__score row-cell"
                        data-score={`${calcPlayerScore(
                          score,
                          getHandicap(player2),
                          courseHoles[i].handicap
                        )}`}
                      >
                        {calcPlayerScore(
                          score,
                          getHandicap(player2),
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
                      <div className="match__column" key={i+score}>
                        <div
                          key={'row-cell' + i+score}
                          className="match__score row-cell"
                          data-score={`${calcPlayerScore(
                            score,
                            getHandicap(player4),
                            courseHoles[i].handicap
                          )}`}
                        >
                          {calcPlayerScore(
                            score,
                            getHandicap(player4),
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
              {teamTwoScoreArray.map(hole => (
                <div className="match__column" key={hole}>
                  <div className="match__score row-cell" key={'score' + hole}>
                    {hole}
                  </div>
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
