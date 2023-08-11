import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { usePlayersPosts } from "../hooks/use-player-posts"
import PropTypes from "prop-types"
import { v1 as uuidv1 } from "uuid"
import { CourseInfo } from "../hooks/get-course-info"
import { PlayerInfoUpdate } from "../hooks/get-player-info-UPDATE"
import styled from "styled-components"
import "../styles/match.css"
import { FaChevronDown, FaTimes } from "react-icons/fa"
import { calcTeamScore } from "../helpers/calcTeamScore"
import {
  calcPlayerScore,
  getPlayerHandicap,
  getCourseHandicap,
} from "../helpers/handicapHelper"

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
  z-index: 1;

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
  margin: 1rem auto 2rem;
  transition: max-height 0.3s ease-in-out;
  max-height: 200px;
  position: relative;
  width: 98%;
  ${CloseBtn} {
    display: none;
  }
  ${OpenBtn} {
    /* display: block; */
    /* width: 90%; */
    /* text-align: center; */
    height: 100%;
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: center;
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
    padding-bottom: 1rem;
  }

  @media (max-width: 768px) {
    &.closed {
      &[data-handicap="average"] {
        max-height: 400px;
      }
      .match__header {
        padding-bottom: 0;
      }
      .match__card-container {
        padding: 0;
        height: 0;
      }
    }
    max-height: 500px;
    padding: 2rem 1rem;
  }
  &:hover {
    /* cursor: pointer; */
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
  const { nodes } = usePlayersPosts()
  const posts = nodes
  const player1Post = posts.filter(
    player => player.frontmatter?.name === player1.toLowerCase()
  )
  const player1Pic = getImage(player1Post[0].frontmatter.thumbnail)
  const player2Post = posts.filter(
    player => player.frontmatter?.name === player2.toLowerCase()
  )
  const player2Pic = getImage(player2Post[0].frontmatter.thumbnail)
  const player3Post = posts.filter(
    player => player.frontmatter?.name === player3?.toLowerCase()
  )
  const player3Pic = getImage(player3Post[0]?.frontmatter.thumbnail)
  const player4Post = posts.filter(
    player => player.frontmatter?.name === player4?.toLowerCase()
  )
  const player4Pic = getImage(player4Post[0]?.frontmatter.thumbnail)

  const courseHoles =
    holes === "front"
      ? course[`${courseMatch}`].holes.slice(0, 9)
      : course[`${courseMatch}`].holes.slice(9)
  // const courseName = course[`${courseMatch}`].name
  // const courseLink = course[`${courseMatch}`].link

  const playerOne = playersUpdateJson[`${player1}`]
  const p1Name = playerOne.name
  const playerOneHand = player1MatchHandicap
    ? parseInt(player1MatchHandicap)
    : playerOne.year[`${year}`].handicap
  const playerTwo = playersUpdateJson[`${player2}`]
  const p2Name = playerTwo.name
  const playerTwoHand = player2MatchHandicap
    ? parseInt(player2MatchHandicap)
    : playerTwo.year[`${year}`].handicap
  const playerThree = playersUpdateJson[`${player3}`] || undefined
  const p3Name = playerThree?.name
  const playerThreeHand = (() => {
    if (player3MatchHandicap) return parseInt(player3MatchHandicap)
    else if (playerThree !== undefined && playerThree.year[`${year}`].handicap)
      return playerThree?.year[`${year}`].handicap
    else return 99
  })()
  const playerFour = playersUpdateJson[`${player4}`] || undefined
  const p4Name = playerFour?.name
  const playerFourHand = (() => {
    if (player4MatchHandicap) return parseInt(player4MatchHandicap)
    else if (playerFour !== undefined && playerFour.year[`${year}`].handicap)
      return playerFour.year[`${year}`].handicap
    else return 99
  })()

  const matchNumber = matchId
  let playerOneTees = "orange"
  let playerTwoTees = "orange"
  let playerThreeTees = "orange"
  let playerFourTees = "orange"
  if (["chris", "matt", "gordon", "rj", "dylan"].indexOf(p1Name) > -1) {
    playerOneTees = "purple"
  }
  if (["chris", "matt", "gordon", "rj", "dylan"].indexOf(p2Name) > -1) {
    playerTwoTees = "purple"
  }
  if (["chris", "matt", "gordon", "rj", "dylan"].indexOf(p3Name) > -1) {
    playerThreeTees = "purple"
  }
  if (["chris", "matt", "gordon", "rj", "dylan"].indexOf(p4Name) > -1) {
    playerFourTees = "purple"
  }
  const courseSlopeP1 =
    course[`${courseMatch}`].totals.tees[`${playerOneTees}`].total.slope
  const courseIndexP1 =
    course[`${courseMatch}`].totals.tees[`${playerOneTees}`].total.index
  const courseParP1 =
    course[`${courseMatch}`].totals.tees[`${playerOneTees}`].total.par
  const playerOneCourseHC = getCourseHandicap(
    playerOneHand,
    courseSlopeP1,
    courseIndexP1,
    courseParP1
  )
  const courseSlopeP2 =
    course[`${courseMatch}`].totals.tees[`${playerTwoTees}`].total.slope
  const courseIndexP2 =
    course[`${courseMatch}`].totals.tees[`${playerTwoTees}`].total.index
  const courseParP2 =
    course[`${courseMatch}`].totals.tees[`${playerTwoTees}`].total.par
  const playerTwoCourseHC = getCourseHandicap(
    playerTwoHand,
    courseSlopeP2,
    courseIndexP2,
    courseParP2
  )
  const courseSlopeP3 =
    course[`${courseMatch}`].totals.tees[`${playerThreeTees}`].total.slope
  const courseIndexP3 =
    course[`${courseMatch}`].totals.tees[`${playerThreeTees}`].total.index
  const courseParP3 =
    course[`${courseMatch}`].totals.tees[`${playerThreeTees}`].total.par
  const playerThreeCourseHC = getCourseHandicap(
    playerThreeHand,
    courseSlopeP3,
    courseIndexP3,
    courseParP3
  )
  const courseSlopeP4 =
    course[`${courseMatch}`].totals.tees[`${playerFourTees}`].total.slope
  const courseIndexP4 =
    course[`${courseMatch}`].totals.tees[`${playerFourTees}`].total.index
  const courseParP4 =
    course[`${courseMatch}`].totals.tees[`${playerFourTees}`].total.par
  const playerFourCourseHC = getCourseHandicap(
    playerFourHand,
    courseSlopeP4,
    courseIndexP4,
    courseParP4
  )

  const handicaps = [
    playerOneCourseHC,
    playerTwoCourseHC,
    playerThreeCourseHC,
    playerFourCourseHC,
  ]

  const p1HCglobal = getPlayerHandicap("player1", gameplay, handicaps)
  const p2HCglobal = getPlayerHandicap("player2", gameplay, handicaps)
  const p3HCglobal = getPlayerHandicap("player3", gameplay, handicaps)
  const p4HCglobal = getPlayerHandicap("player4", gameplay, handicaps)

  const [sectionHeight, setSectionHeight] = useState("closed")

  const teamOneScoreArray = calcTeamScore(
    year,
    courseMatch,
    holes,
    matchHandicap,
    gameplay,
    player1,
    p1HCglobal,
    player3,
    p3HCglobal
  )
  const teamTwoScoreArray = calcTeamScore(
    year,
    courseMatch,
    holes,
    matchHandicap,
    gameplay,
    player2,
    p2HCglobal,
    player4,
    p4HCglobal
  )

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
      p1HCglobal,
      player3,
      p3HCglobal
    )
    const teamTwoScoreArray = calcTeamScore(
      year,
      courseMatch,
      holes,
      matchHandicap,
      gameplay,
      player2,
      p2HCglobal,
      player4,
      p4HCglobal
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

  function calcPops(score, p1HC, handicap, holePar) {
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

  function calcMatchPlayerScore(gameplay, playerObj, p1, p1HC, p2, p2HC) {
    if (playerObj) {
      const holeScores = playerObj?.year[`${year}`].scores?.[`${courseMatch}`]
      const totalScore = [...holeScores[`${holes}`]]
      return (
        <div className={`match__playerScore match__${p1}`}>
          <div className="match__column--info align-left row-cell capitalize">
            <span>
              {p1} ({p1HC})
            </span>
          </div>
          {totalScore.map((score, i) => (
            <div className="match__column" key={uuidv1()}>
              <>
                {calcPops(
                  score,
                  p1HC,
                  courseHoles[i].handicap,
                  courseHoles[i].par
                )}
              </>
              <div
                className="match__score row-cell"
                data-score={`${calcPlayerScore(
                  score,
                  p1HC,
                  courseHoles[i].handicap,
                  holes
                )}`}
                data-matchover={`${isMatchOver(i + 1)}`}
              >
                <div className="match__line"></div>
                {calcPlayerScore(score, p1HC, courseHoles[i].handicap, holes)}
                <sup>{score > 20 ? "" : score}</sup>
              </div>
            </div>
          ))}
        </div>
      )
      // }
    }
  }

  // function displayTeamHandicap(gameplay, p1, p1HC, p2, p2HC) {
  //   if (
  //     gameplay === "scramble" ||
  //     gameplay === "alternate" ||
  //     gameplay === "pinehurst"
  //   ) {
  //     return (
  //       <div className="flex-basis-100">
  //         {" "}
  //         ({getMatchHandicap(gameplay, p1, p1HC, p2, p2HC)})
  //       </div>
  //     )
  //   } else {
  //     return ""
  //   }
  // }

  return (
    <Section
      data-match={`${courseMatch}`}
      data-handicap={`${matchHandicap}`}
      className={`match__container ${sectionHeight}`}
    >
      <CloseBtn onClick={matchCardClick} tabIndex="0">
        <FaTimes size={"1.5em"} />
      </CloseBtn>
      <OpenBtn onClick={matchCardClick} tabIndex="0">
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
          <div className="flex-column text-center">
            <div className="match__team--playerOne capitalize">{player1}</div>
            <div>
              <GatsbyImage image={player1Pic} alt={player1} loading="lazy" />
            </div>
          </div>
          {player3 ? (
            <div className="flex-column text-center">
              <div className="match__team--playerThree capitalize">
                {player3}
              </div>
              <div>
                <GatsbyImage image={player3Pic} alt={player4} loading="lazy" />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="team__scores py-2">
          <div className={"bk-gray font-weight-bold " + getWinningColor()}>
            {displayWinningTeam()}
          </div>
        </div>

        <div className="match__team color-blue">
          <div className="flex-column text-center ">
            <div className="match__team--playerTwo capitalize">{player2}</div>
            <div>
              <GatsbyImage image={player2Pic} alt={player2} loading="lazy" />
            </div>
          </div>
          {player4 ? (
            <div className="flex-column text-center">
              <div className="match__team--playerFour capitalize">
                {player4}
              </div>
              <div>
                <GatsbyImage image={player4Pic} alt={player4} loading="lazy" />
              </div>
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
            <div className="match__yardage row-cell">purple</div>
            <div className="match__yardage row-cell">orange</div>
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
              <div className="match__yardage row-cell">
                {hole.tees[Object.keys(hole.tees)[1]]}
              </div>
              <div className="match__handicap row-cell">{hole.handicap}</div>
              <div className="match__par row-cell">{hole.par}</div>
            </div>
          ))}
        </div>

        <div className="match__teamScores">
          <div className="match__teamScores--team1">
            {playerOne && playerThree
              ? calcMatchPlayerScore(
                  gameplay,
                  playerOne,
                  player1,
                  p1HCglobal,
                  player3,
                  p3HCglobal
                )
              : calcMatchPlayerScore(gameplay, playerOne, player1, p1HCglobal)}
            {playerThree
              ? calcMatchPlayerScore(
                  gameplay,
                  playerThree,
                  player3,
                  p3HCglobal,
                  player1,
                  p1HCglobal
                )
              : ""}

            <div className="match__teamScore">
              <div className="match__column--info column-left">
                <div className="match__score row-cell">score</div>
              </div>
              {teamOneScoreArray.map(hole => (
                <div className="match__column" key={uuidv1()}>
                  <div className="match__score row-cell final__score--teamOne">
                    {hole}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="match__teamScores--team2">
            {playerTwo && playerFour
              ? calcMatchPlayerScore(
                  gameplay,
                  playerTwo,
                  player2,
                  p2HCglobal,
                  player4,
                  p4HCglobal
                )
              : calcMatchPlayerScore(gameplay, playerTwo, player2, p2HCglobal)}
            {playerFour
              ? calcMatchPlayerScore(
                  gameplay,
                  playerFour,
                  player4,
                  p4HCglobal,
                  player2,
                  p2HCglobal
                )
              : ""}
            <div className="match__teamScore">
              <div className="match__column--info column-left">
                <div className="match__score row-cell">score</div>
              </div>
              {teamTwoScoreArray.map(hole => (
                <div className="match__column" key={uuidv1()}>
                  <div className="match__score row-cell final__score--teamTwo">
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
