import React, { useState } from "react"
import PropTypes from "prop-types"
import { v1 as uuidv1 } from "uuid"
import { CourseInfo } from "../hooks/get-course-info"
import { PlayerInfoUpdate } from "../hooks/get-player-info-UPDATE"
import styled from "styled-components"
import "../styles/match.css"
import { FaChevronDown, FaTimes } from "react-icons/fa"
import { calcTeamScore } from "../helpers/calcTeamScore"
import { calcPlayerScore, getMatchHandicap } from "../helpers/handicapHelper"

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
    width: 100%;
    text-align: center;
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
        max-height: 380px;
      }
    }
    max-height: 320px;
    padding: 2rem 1rem;
  }
  &:hover {
    cursor: pointer;
  }
`

function MatchUpdate({
  matchId,
  year,
  courseMatch,
  holes,
  matchHandicap,
  gameplay,
  player1,
  player2,
  player3,
  player4,
  player1MatchHandicap,
  player2MatchHandicap,
  player3MatchHandicap,
  player4MatchHandicap,
}) {
  const { course } = CourseInfo()
  const playersUpdateJson = PlayerInfoUpdate()
  const courseHoles =
    holes === "front"
      ? course[`${courseMatch}`].holes.slice(0, 9)
      : course[`${courseMatch}`].holes.slice(9)
  // const courseName = course[`${courseMatch}`].name
  // const courseLink = course[`${courseMatch}`].link

  const playerOne = playersUpdateJson[`${player1}`]
  const playerOneHand = player1MatchHandicap
    ? parseInt(player1MatchHandicap)
    : playerOne.year[`${year}`].handicap
  const playerTwo = playersUpdateJson[`${player2}`]
  const playerTwoHand = player2MatchHandicap
    ? parseInt(player2MatchHandicap)
    : playerTwo.year[`${year}`].handicap
  const playerThree = playersUpdateJson[`${player3}`] || undefined
  const playerThreeHand = player3MatchHandicap
    ? parseInt(player3MatchHandicap)
    : playerThree.year[`${year}`].handicap
  const playerFour = playersUpdateJson[`${player4}`] || undefined
  const playerFourHand = player4MatchHandicap
    ? parseInt(player4MatchHandicap)
    : playerFour.year[`${year}`].handicap
  const matchNumber = matchId

  const [sectionHeight, setSectionHeight] = useState("closed")
  // const parTotal = course[`${courseMatch}`].totals.par

  // function calcTeamScore(
  // player1Param,
  // player1HandicapParam,
  // player2Param,
  // player2HandicapParam
  // ) {
  //   const scoresArr = []
  //   const playerOne = player1Param
  //   let playerOneScore =
  //     playersUpdateJson[`${playerOne}`]?.year[`${year}`].scores[
  //       `${courseMatch}`
  //     ][`${holes}`] // [scores]
  //   let playerOneHandicap = parseInt(player1HandicapParam)
  //   const playerTwo = player2Param !== undefined ? player2Param : undefined
  //   let playerTwoScore =
  //     playersUpdateJson[`${playerTwo}`]?.year[`${year}`].scores[
  //       `${courseMatch}`
  //     ][`${holes}`] // [scores]
  //   // let playerTwoScore =
  //   //   player2Param !== undefined
  //   //     ? playerTwo.course[`${courseMatch}`]
  //   //     : undefined // [scores]
  //   let playerTwoHandicap = player2HandicapParam
  //     ? parseInt(player2HandicapParam)
  //     : undefined
  //   // let playerThreeScore = playerThree ? playerThree.course[`${courseMatch}`] : undefined // [scores]
  //   // let playerThreeHandicap = parseInt(player3MatchHandicap)
  //   // let playerFourScore = playerFour ? playerFour.course[`${courseMatch}`] : undefined // [scores]
  //   // let playerFourHandicap = parseInt(player4MatchHandicap)
  //   // let getHandicap = function (playerHandicapParam) {
  //   //   if (matchHandicap === "average" && playerTwo !== undefined) {
  //   //     return (playerOneHandicap + playerTwoHandicap) / 2
  //   //   } else {
  //   //     return playerHandicapParam
  //   //   }
  //   // }
  //   let gameplayParam = gameplay
  //   let matchHandicapParam = matchHandicap

  //   for (let i = 0; i < playerOneScore.length; i++) {
  //     let hHand = courseHoles[i].handicap
  //     let sPlayerOne = playerOneScore[i]
  //     let sPlayerTwo =
  //       playerTwoScore !== undefined ? playerTwoScore[i] : undefined
  //     // let sPlayerThree = playerThreeScore !== undefined ? playerThreeScore[i] : undefined
  //     // let sPlayerFour = playerFourScore !== undefined ? playerFourScore[i] : undefined

  //     let playerOneHandicapScore = calcPlayerScore(
  //       sPlayerOne,
  //       getHandicap(playerOne.name),
  //       hHand
  //     )

  //     if (playerTwo !== undefined) {
  //       var playerTwoHandicapScore = calcPlayerScore(
  //         sPlayerTwo,
  //         getHandicap(playerTwo.name),
  //         hHand
  //       )
  //     }

  //     if (
  //       isNaN(playerTwoHandicapScore) !== true &&
  //       player2Param !== undefined &&
  //       gameplay !== "two-ball"
  //     ) {
  //       scoresArr.push(Math.min(playerOneHandicapScore, playerTwoHandicapScore))
  //     } else if (
  //       isNaN(playerTwoHandicapScore) !== true &&
  //       gameplay === "two-ball"
  //     ) {
  //       scoresArr.push(
  //         Number(playerOneHandicapScore) + Number(playerTwoHandicapScore)
  //       )
  //     } else if (isNaN(playerOneHandicapScore) !== true) {
  //       scoresArr.push(playerOneHandicapScore)
  //     } else {
  //       scoresArr.push("-")
  //     }

  //     // let playerThreeHandiScore = calcPlayerScore(
  //     //   sPlayerThree,
  //     //   teamHandicap,
  //     //   hHand
  //     // )
  //     // let playerFourHandiScore = calcPlayerScore(
  //     //   sPlayerFour,
  //     //   teamHandicap,
  //     //   hHand
  //     // )
  //     // if (isNaN(playerOneHandiScore) !== true && isNaN(playerTwoHandiScore) && isNaN(playerThreeHandiScore) && isNaN(playerFourHandiScore) !== true) {
  //     //   teamOneScoreArr.push(Math.min(playerOneHandiScore, playerThreeHandiScore))
  //     //   teamTwoScoreArr.push(Math.min(playerTwoHandiScore, playerFourHandiScore))
  //     // } else {
  //     //   teamOneScoreArr.push("-")
  //     //   teamTwoScoreArr.push("-")
  //     // }

  //     // } else if (matchHandicapParam === "full") {
  //     //   let playerOneHandiScore = calcPlayerScore(
  //     //     sPlayerOne,
  //     //     playerOneHandicap,
  //     //     hHand
  //     //   )
  //     //   let playerTwoHandiScore = calcPlayerScore(
  //     //     sPlayerTwo,
  //     //     playerTwoHandicap,
  //     //     hHand
  //     //   )
  //     //   let playerThreeHandiScore = calcPlayerScore(
  //     //     sPlayerThree,
  //     //     playerThreeHandicap,
  //     //     hHand
  //     //   )
  //     //   let playerFourHandiScore = calcPlayerScore(
  //     //     sPlayerFour,
  //     //     playerFourHandicap,
  //     //     hHand
  //     //   )
  //     //   if (isNaN(playerOneHandiScore) !== true && isNaN(playerThreeHandiScore) !== true) {
  //     //     teamOneScoreArr.push(Math.min(playerOneHandiScore, playerThreeHandiScore))
  //     //   } else {
  //     //     teamOneScoreArr.push("-")
  //     //   }
  //   }

  //   // var scores = {
  //   //   teamOne: teamOneScoreArr,
  //   //   teamTwo: teamTwoScoreArr,
  //   // }

  //   return scoresArr
  // }

  const teamOneScoreArray = calcTeamScore(
    year,
    courseMatch,
    holes,
    matchHandicap,
    gameplay,
    player1,
    playerOneHand,
    player3,
    playerThreeHand
  )
  const teamTwoScoreArray = calcTeamScore(
    year,
    courseMatch,
    holes,
    matchHandicap,
    gameplay,
    player2,
    playerTwoHand,
    player4,
    playerFourHand
  )

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

  // function calcPlayerScore(s, pHand, hHand) {
  //   let score = s
  //   let playerHandicap = pHand
  //   const holeHandicap = hHand

  //   if (score > "20") {
  //     return "-"
  //   } else {
  //     if (holeHandicap <= playerHandicap && score > -10) {
  //       playerHandicap = playerHandicap - 18
  //       score--
  //       return calcPlayerScore(score, playerHandicap, holeHandicap)
  //     } else {
  //       return score
  //     }
  //   }
  // }

  function calcHoleWinner(hole) {
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
      year,
      courseMatch,
      holes,
      matchHandicap,
      gameplay,
      player1,
      playerOneHand,
      player3,
      playerThreeHand
    )
    const teamTwoScoreArray = calcTeamScore(
      year,
      courseMatch,
      holes,
      matchHandicap,
      gameplay,
      player2,
      playerTwoHand,
      player4,
      playerFourHand
    )
    let holeIndex
    const teamWins = {
      teamOne: 0,
      teamTwo: 0,
      winningTeam: "AS",
      score: 0,
      holesRemaining: courseHoles.length,
    }

    for (var i = 0; i < courseHoles.length; i++) {
      holeIndex = i
      teamWins.holesRemaining--
      if (teamOneScoreArray[holeIndex] > teamTwoScoreArray[holeIndex]) {
        teamWins.teamTwo++
        if (teamWins.teamTwo - teamWins.teamOne > teamWins.holesRemaining) {
          teamWins.winningTeam = "teamTwo"
          teamWins.score = teamWins.teamTwo - teamWins.teamOne
          return teamWins
        } else if (
          teamWins.teamTwo - teamWins.teamOne === 0 &&
          teamWins.holesRemaining === 0
        ) {
          return teamWins
        }
      } else if (teamOneScoreArray[holeIndex] < teamTwoScoreArray[holeIndex]) {
        teamWins.teamOne++
        if (teamWins.teamOne - teamWins.teamTwo > teamWins.holesRemaining) {
          teamWins.winningTeam = "teamOne"
          teamWins.score = teamWins.teamOne - teamWins.teamTwo
          return teamWins
        } else if (
          teamWins.teamOne - teamWins.teamTwo === 0 &&
          teamWins.holesRemaining === 0
        ) {
          return teamWins
        }
      } else {
        // checks for ties
        if (teamWins.teamTwo - teamWins.teamOne > teamWins.holesRemaining) {
          teamWins.winningTeam = "teamTwo"
          teamWins.score = teamWins.teamTwo - teamWins.teamOne
          return teamWins
        } else if (
          teamWins.teamOne - teamWins.teamTwo >
          teamWins.holesRemaining
        ) {
          teamWins.winningTeam = "teamOne"
          teamWins.score = teamWins.teamOne - teamWins.teamTwo
          return teamWins
        } else if (
          teamWins.teamOne - teamWins.teamTwo === 0 &&
          teamWins.teamTwo - teamWins.teamOne === 0 &&
          teamWins.holesRemaining === 0
        ) {
          return teamWins
        }
      }
    }
  }
  const teamFinalScores = calcTeamScores()

  function matchCardClick() {
    sectionHeight === "closed"
      ? setSectionHeight("open")
      : setSectionHeight("closed")
  }

  function getWinningColor() {
    if (teamFinalScores?.winningTeam === "teamOne") {
      return `team-one-color text-white`
    } else if (teamFinalScores?.winningTeam === "teamTwo") {
      return `team-two-color text-white`
    }
  }

  function displayWinningTeam() {
    if (teamFinalScores?.winningTeam === "AS") {
      return teamFinalScores?.winningTeam
    } else if (
      teamFinalScores?.holesRemaining === 0 &&
      teamFinalScores?.winningTeam !== "AS"
    ) {
      return teamFinalScores?.score + "UP"
    } else {
      return teamFinalScores?.score + "&" + teamFinalScores?.holesRemaining
    }
  }

  function isMatchOver(hole) {
    // gray out holes once the score is irrelevant
    const winningHole = 9 - teamFinalScores?.holesRemaining
    if (hole > winningHole) {
      return true
    } else {
      return false
    }
  }

  function calcMatchPlayerScore(playerNum, playerNumInt, matchHandicap) {
    if (playerNum) {
      const holeScores = playerNum?.year[`${year}`].scores?.[`${courseMatch}`]
      const totalScore = [...holeScores[`${holes}`]]
      return (
        <div className={`match__playerScore match__${playerNumInt}`}>
          <div className="match__column--info align-left row-cell">
            <span>
              {playerNumInt} ({matchHandicap})
            </span>
          </div>
          {totalScore.map((score, i) => (
            <div className="match__column" key={uuidv1()}>
              <div
                className="match__score row-cell"
                data-score={`${calcPlayerScore(
                  score,
                  getMatchHandicap(playerNumInt),
                  courseHoles[i].handicap
                )}`}
                data-matchover={`${isMatchOver(i + 1)}`}
              >
                <div className="match__line"></div>
                {calcPlayerScore(
                  score,
                  getMatchHandicap(playerNumInt),
                  courseHoles[i].handicap
                )}
                <sup>{score > 20 ? "" : score}</sup>
              </div>
            </div>
          ))}
        </div>
      )
    }
  }

  function displayTeamHandicap(gameplay, p1, p1HC, p2, p2HC) {
    if (gameplay === "scramble") {
      return (
        <div className="flex-basis-100">
          {" "}
          ({getMatchHandicap(gameplay, p1, p1HC, p2, p2HC)})
        </div>
      )
    } else {
      return ""
    }
    // player4 && matchHandicap === "average" ? (
    //   <div className="flex-basis-100">
    //     {" "}
    //     ({(playerTwoHand + playerFourHand) / 2})
    //   </div>
    // ) : (
    //   ""
    // )
  }

  return (
    <Section
      data-match={`${courseMatch}`}
      data-handicap={`${matchHandicap}`}
      className={`match__container ${sectionHeight}`}
    >
      <CloseBtn onClick={matchCardClick}>
        <FaTimes size={"1.5em"} />
      </CloseBtn>
      <OpenBtn onClick={matchCardClick}>
        <FaChevronDown size={"1.5em"} />
      </OpenBtn>
      {/* <div className="course__info">
        <Link to={courseLink}>
          {courseName}
        </Link>
      </div> */}
      <i className="match__number">match {matchNumber}</i>
      <div className="match__header">
        <div className="match__team color-green">
          <div className="match__team--playerOne capitalize">{player1}</div>
          {player3 ? (
            <div className="match__team--playerThree capitalize">{player3}</div>
          ) : (
            ""
          )}
          {displayTeamHandicap(
            gameplay,
            player1,
            playerOneHand,
            player3,
            playerThreeHand
          )}
        </div>

        <div className="team__scores">
          <div className={"bk-gray font-weight-bold " + getWinningColor()}>
            {displayWinningTeam()}
          </div>
        </div>

        <div className="match__team color-blue">
          <div className="match__team--playerTwo capitalize">{player2}</div>
          {player4 ? (
            <div className="match__team--playerFour capitalize">{player4}</div>
          ) : (
            ""
          )}
          {displayTeamHandicap(
            gameplay,
            player2,
            playerTwoHand,
            player4,
            playerFourHand
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
          {courseHoles.map((hole, i) => (
            <div className="match__column" key={uuidv1()}>
              <div
                className="match__hole row-cell"
                data-winner={`${calcHoleWinner(hole.number).team}`}
                data-matchover={`${isMatchOver(i + 1)}`}
                id={hole.number}
              >
                <div className="match__line"></div>
                {hole.number}
              </div>
              <div className="match__yardage row-cell">
                {hole.tees[Object.keys(hole.tees)[0]]}
              </div>
              <div className="match__handicap row-cell">{hole.handicap}</div>
              <div className="match__par row-cell">{hole.par}</div>
            </div>
          ))}
        </div>

        <div className="match__teamScores">
          <div className="match__teamScores--team1">
            {playerOne
              ? calcMatchPlayerScore(playerOne, player1, playerOneHand)
              : ""}
            {playerThree
              ? calcMatchPlayerScore(playerThree, player3, playerThreeHand)
              : ""}

            <div className="match__teamScore">
              <div className="match__column--info column-left">
                <div className="match__score row-cell">score</div>
              </div>
              {teamOneScoreArray.map(hole => (
                <div className="match__column" key={uuidv1()}>
                  <div className="match__score row-cell">{hole}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="match__teamScores--team2">
            {playerTwo
              ? calcMatchPlayerScore(playerTwo, player2, playerTwoHand)
              : ""}
            {playerFour
              ? calcMatchPlayerScore(playerFour, player4, playerFourHand)
              : ""}
            <div className="match__teamScore">
              <div className="match__column--info column-left">
                <div className="match__score row-cell">score</div>
              </div>
              {teamTwoScoreArray.map(hole => (
                <div className="match__column" key={uuidv1()}>
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

MatchUpdate.propTypes = {
  matchId: PropTypes.string,
  year: PropTypes.string,
  holes: PropTypes.string,
  courseMatch: PropTypes.string,
  matchHandicap: PropTypes.string,
  gameplay: PropTypes.string,
  player1: PropTypes.string,
  player1MatchHandicap: PropTypes.string,
  player2: PropTypes.string,
  player2MatchHandicap: PropTypes.string,
  player3: PropTypes.string,
  player3MatchHandicap: PropTypes.string,
  player4: PropTypes.string,
  player4MatchHandicap: PropTypes.string,
}

export default MatchUpdate
