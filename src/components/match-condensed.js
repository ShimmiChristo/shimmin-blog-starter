import React, { useState } from "react"
import PropTypes from "prop-types"
import { v1 as uuidv1 } from "uuid"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { calcTeamScore } from "../helpers/calcTeamScore"
import { calcPops } from "../helpers/matchHelper"
import { CourseInfo } from "../hooks/get-course-info"
import { PlayerInfoUpdate } from "../hooks/get-player-info-UPDATE"
import { usePlayersPosts } from "../hooks/use-player-posts"
import {
  calcPlayerScore,
  getPlayerHandicap,
  getCourseHandicap,
} from "../helpers/handicapHelper"

const Wrapper = styled.section`
  border: 1px solid var(--gray, #a0a0a0);
  border-radius: 0.7rem;
  max-width: 700px;
  margin: 1rem auto 2rem;
  padding: 1rem;
  width: 98%;

  @media (max-width: 480px) {
    padding: 0.75rem 0.5rem;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
`

const TeamLabel = styled.span`
  text-transform: capitalize;
  font-weight: var(--fontWeight-semibold, 600);
  color: ${({ $team }) =>
    $team === "one" ? "var(--green, #18453b)" : "var(--blue, #003c82)"};
`

const TeamLabelContent = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
`

const TeamPlayer = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  line-height: 1.2;
`

const TeamPlayerImage = styled.span`
  display: none;

  @media (min-width: 992px) {
    display: inline-flex;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    overflow: hidden;

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
  }
`

const MatchStatus = styled.span`
  font-weight: var(--fontWeight-semibold, 600);
  color: ${({ $color }) =>
    $color === "green"
      ? "var(--green, #18453b)"
      : $color === "blue"
      ? "var(--blue, #003c82)"
      : "var(--gray, #a0a0a0)"};
`

const ToggleRow = styled.label`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  margin: 0;
  cursor: pointer;

  input {
    margin: 0;
  }
`

const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-left: auto;
`

const TooltipButton = styled.button`
  border: 1px solid var(--gray, #a0a0a0);
  background: var(--white, #fff);
  color: var(--gray, #a0a0a0);
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 0.7rem;
  line-height: 1;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

const TooltipContent = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  min-width: 14rem;
  max-width: 18rem;
  background: var(--white, #fff);
  border: 1px solid var(--light-gray, #f5f5f5);
  border-radius: 0.5rem;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
  padding: 0.5rem 0.7rem;
  z-index: 10;
  font-size: 0.7rem;
  color: var(--black, #202020);
`

const TooltipTitle = styled.div`
  font-weight: var(--fontWeight-semibold, 600);
  margin-bottom: 0.35rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 0.68rem;
  color: var(--gray, #a0a0a0);
`

const TooltipSection = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.45rem;
  }
`

const TooltipTeam = styled.div`
  font-weight: var(--fontWeight-semibold, 600);
  margin-bottom: 0.2rem;
  color: ${({ $team }) =>
    $team === "one" ? "var(--green, #18453b)" : "var(--blue, #003c82)"};
`

const TooltipPlayerRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  font-size: 0.68rem;

  & + & {
    margin-top: 0.15rem;
  }
`

const TooltipPlayerName = styled.span`
  font-weight: var(--fontWeight-semibold, 600);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--black, #202020);
`

const TooltipPlayerMeta = styled.span`
  white-space: nowrap;
`

const ScrollArea = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`

const Table = styled.div`
  display: flex;
  min-width: min-content;
  justify-content: center;
  @media (max-width: 480px) {
    justify-content: flex-start;
  }
`

const InfoColumn = styled.div`
  position: sticky;
  left: 0;
  z-index: 2;
  background: var(--white, #fff);
  width: 5.5rem;
  min-width: 5.5rem;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 4.4rem;
    min-width: 4.4rem;
  }
`

const HoleColumn = styled.div`
  width: 2.6rem;
  min-width: 2.6rem;
  flex-shrink: 0;
  border-left: 1px solid var(--light-gray, #f5f5f5);

  &:last-child {
    border-right: 1px solid var(--light-gray, #f5f5f5);
  }

  @media (max-width: 480px) {
    width: 2.2rem;
    min-width: 2.2rem;
  }
`

const Cell = styled.div`
  height: 1.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  border-bottom: 1px solid var(--light-gray, #f5f5f5);
  padding: 0 0.25rem;
  text-align: center;

  @media (max-width: 480px) {
    height: 1.6rem;
    font-size: 0.7rem;
  }
`

const InfoCell = styled(Cell)`
  justify-content: flex-start;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  font-size: 0.65rem;
  color: var(--gray, #a0a0a0);

  @media (max-width: 480px) {
    font-size: 0.58rem;
  }
`

const TeamInfoCell = styled(InfoCell)`
  text-transform: capitalize;
  color: ${({ $team }) =>
    $team === "one" ? "var(--green, #18453b)" : "var(--blue, #003c82)"};
`

const StatusCell = styled(Cell)`
  font-weight: var(--fontWeight-semibold, 600);
  color: #fff;
  background: ${({ $color }) =>
    $color === "green"
      ? "var(--green, #18453b)"
      : $color === "blue"
      ? "var(--blue, #003c82)"
      : "var(--gray, #a0a0a0)"};
`

const TeamScoreCell = styled(Cell)`
  font-weight: var(--fontWeight-semibold, 600);
  color: var(--black, #202020);
  background: var(--white, #fff);
`

const PlayerScoreCell = styled(Cell)`
  position: relative;
  font-size: 0.7rem;
  color: var(--gray, #a0a0a0);

  & .pops {
    display: inline-block;
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    border: 1px solid var(--blue, #003c82);
    background-color: var(--blue, #003c82);
  }

  & .pops--1 {
    top: 4px;
    right: 4px;
  }

  & .pops--2 {
    top: 4px;
    right: 9px;
  }

  & .pops--3 {
    top: 4px;
    right: 14px;
  }
`

function getRawScore(playerObj, year, courseMatch, holes, index) {
  const scores = playerObj?.year?.[`${year}`]?.scores?.[`${courseMatch}`]?.[
    `${holes}`
  ]
  const score = scores?.[index]
  return score === undefined || score > 20 ? "-" : score
}

function getPlayerTotalScore(playerObj, year, courseMatch, holes, courseHoles) {
  return courseHoles.reduce((total, _hole, index) => {
    const score = getRawScore(playerObj, year, courseMatch, holes, index)
    return score === "-" || score === undefined || Number.isNaN(Number(score))
      ? total
      : total + Number(score)
  }, 0)
}

function getPlayerPopCount(playerObj, year, courseMatch, holes, courseHoles, playerHC) {
  return courseHoles.reduce((total, hole, index) => {
    const score = getRawScore(playerObj, year, courseMatch, holes, index)
    if (score === "-" || score === undefined || Number.isNaN(Number(score))) {
      return total
    }

    const playerHCScore =
      score < 50
        ? parseInt(calcPlayerScore(score, playerHC, hole.handicap, holes))
        : parseInt(calcPlayerScore(hole.par, playerHC, hole.handicap, holes))

    const actualScore = score < 20 ? score : hole.par
    const popTotal = actualScore - playerHCScore

    if (popTotal >= 3) return total + 3
    if (popTotal >= 2) return total + 2
    if (popTotal === 1) return total + 1
    return total
  }, 0)
}

function formatHandicap(value) {
  if (value === undefined || value === null || Number.isNaN(Number(value))) {
    return "-"
  }
  return Number(value).toFixed(1)
}

/**
 * Condensed, mobile-first match view. Shows hole / handicap / par / running
 * match status / team scores by default, with an optional toggle to reveal
 * each player's individual gross score. This is a standalone alternative to
 * the full desktop scorecard in match.js.
 */
function MatchCondensed({
  year,
  courseMatch,
  holes,
  gameplay,
  player1,
  player2,
  player3,
  player4,
  player1Tees,
  player2Tees,
  player3Tees,
  player4Tees,
  player1MatchHandicap,
  player2MatchHandicap,
  player3MatchHandicap,
  player4MatchHandicap,
}) {
  const { course } = CourseInfo()
  const playersUpdateJson = PlayerInfoUpdate()
  const { nodes } = usePlayersPosts()
  const posts = nodes
  const [showIndividual, setShowIndividual] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  function getPlayerPicture(playerName) {
    if (!playerName) return null
    const post = posts.find(
      player => player.frontmatter?.name === playerName.toLowerCase()
    )
    return getImage(post?.frontmatter?.thumbnail)
  }

  const courseMatchQuery = course[`${courseMatch}`][`${year}`]
    ? course[`${courseMatch}`][`${year}`]
    : course[`${courseMatch}`]

  const courseHoles =
    holes === "front"
      ? courseMatchQuery.holes.slice(0, 9)
      : courseMatchQuery.holes.slice(9)

  const hardestHole = courseMatchQuery.holes.filter(h => h.handicap === 1)[0]
    .number
  const hardestHoleNine = holes === "front" && hardestHole < 10
  const holesPlayedKey = holes === "front" ? "out" : "in"

  const playerOne = playersUpdateJson[`${player1}`]
  const playerTwo = playersUpdateJson[`${player2}`]
  const playerThree = playersUpdateJson[`${player3}`] || undefined
  const playerFour = playersUpdateJson[`${player4}`] || undefined
  const playerOnePic = getPlayerPicture(player1)
  const playerTwoPic = getPlayerPicture(player2)
  const playerThreePic = getPlayerPicture(player3)
  const playerFourPic = getPlayerPicture(player4)
  const playerOneTotal = getPlayerTotalScore(
    playerOne,
    year,
    courseMatch,
    holes,
    courseHoles
  )
  const playerTwoTotal = getPlayerTotalScore(
    playerTwo,
    year,
    courseMatch,
    holes,
    courseHoles
  )
  const playerThreeTotal = getPlayerTotalScore(
    playerThree,
    year,
    courseMatch,
    holes,
    courseHoles
  )
  const playerFourTotal = getPlayerTotalScore(
    playerFour,
    year,
    courseMatch,
    holes,
    courseHoles
  )

  function resolveHandicap(playerObj, matchHandicap) {
    const yearHandicap = playerObj?.year?.[`${year}`]?.handicap
    return matchHandicap
      ? parseInt(matchHandicap)
      : yearHandicap ?? playerObj?.handicap
  }

  const playerOneHand = resolveHandicap(playerOne, player1MatchHandicap)
  const playerTwoHand = resolveHandicap(playerTwo, player2MatchHandicap)
  const playerThreeHand = resolveHandicap(playerThree, player3MatchHandicap)
  const playerFourHand = resolveHandicap(playerFour, player4MatchHandicap)

  function resolveCourseHC(tees, playerHand) {
    const totals = courseMatchQuery?.totals?.tees?.[`${tees}`]?.[
      `${holesPlayedKey}`
    ]
    return getCourseHandicap(
      playerHand,
      totals?.slope,
      totals?.index,
      totals?.par
    )
  }

  const playerOneCourseHC = resolveCourseHC(player1Tees, playerOneHand)
  const playerTwoCourseHC = resolveCourseHC(player2Tees, playerTwoHand)
  const playerThreeCourseHC = resolveCourseHC(
    player3Tees ?? "orange",
    playerThreeHand
  )
  const playerFourCourseHC = resolveCourseHC(
    player4Tees ?? "orange",
    playerFourHand
  )

  const handicaps = [
    playerOneCourseHC,
    playerTwoCourseHC,
    playerThreeCourseHC,
    playerFourCourseHC,
  ]

  const p1HCglobal = getPlayerHandicap(
    "player1",
    gameplay,
    handicaps,
    hardestHoleNine
  )
  const p2HCglobal = getPlayerHandicap(
    "player2",
    gameplay,
    handicaps,
    hardestHoleNine
  )
  const p3HCglobal = getPlayerHandicap(
    "player3",
    gameplay,
    handicaps,
    hardestHoleNine
  )
  const p4HCglobal = getPlayerHandicap(
    "player4",
    gameplay,
    handicaps,
    hardestHoleNine
  )

  const teamOneScoreArray = calcTeamScore(
    year,
    courseMatch,
    holes,
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
    gameplay,
    player2,
    p2HCglobal,
    player4,
    p4HCglobal
  )

  const playerHandicapInfo = [
    {
      team: "one",
      label: "Green",
      players: [
        {
          name: player1,
          actual: formatHandicap(playerOneHand),
          course: formatHandicap(playerOneCourseHC),
          playing: formatHandicap(p1HCglobal),
          pops: getPlayerPopCount(
            playerOne,
            year,
            courseMatch,
            holes,
            courseHoles,
            p1HCglobal
          ),
        },
        {
          name: player3,
          actual: formatHandicap(playerThreeHand),
          course: formatHandicap(playerThreeCourseHC),
          playing: formatHandicap(p3HCglobal),
          pops: getPlayerPopCount(
            playerThree,
            year,
            courseMatch,
            holes,
            courseHoles,
            p3HCglobal
          ),
        },
      ].filter(player => player.name),
    },
    {
      team: "two",
      label: "Blue",
      players: [
        {
          name: player2,
          actual: formatHandicap(playerTwoHand),
          course: formatHandicap(playerTwoCourseHC),
          playing: formatHandicap(p2HCglobal),
          pops: getPlayerPopCount(
            playerTwo,
            year,
            courseMatch,
            holes,
            courseHoles,
            p2HCglobal
          ),
        },
        {
          name: player4,
          actual: formatHandicap(playerFourHand),
          course: formatHandicap(playerFourCourseHC),
          playing: formatHandicap(p4HCglobal),
          pops: getPlayerPopCount(
            playerFour,
            year,
            courseMatch,
            holes,
            courseHoles,
            p4HCglobal
          ),
        },
      ].filter(player => player.name),
    },
  ]

  const isOneBallGameplay = ["scramble", "alternate", "pinehurst"].includes(
    gameplay
  )
  const isStrokeplay = gameplay.includes("strokeplay")

  const showTeamOneIndividual = Boolean(player3) && !isOneBallGameplay
  const showTeamTwoIndividual = Boolean(player4) && !isOneBallGameplay

  // Running match status through each hole: "X UP"/"AS" for match play,
  // cumulative net-stroke differential for strokeplay. Colored green when
  // team one is ahead, blue when team two is ahead.
  let teamOneWins = 0
  let teamTwoWins = 0
  let teamOneTotal = 0
  let teamTwoTotal = 0
  const holeStatuses = courseHoles.map((hole, i) => {
    const s1 = teamOneScoreArray[i]
    const s2 = teamTwoScoreArray[i]
    const played =
      s1 !== "-" && s2 !== "-" && s1 !== undefined && s2 !== undefined
    if (!played) {
      return { label: "-", color: "neutral" }
    }
    if (isStrokeplay) {
      teamOneTotal += s1
      teamTwoTotal += s2
      const diff = teamOneTotal - teamTwoTotal
      if (diff === 0) return { label: "E", color: "neutral" }
      return diff < 0
        ? { label: `${Math.abs(diff)}`, color: "green" }
        : { label: `${diff}`, color: "blue" }
    }
    if (s1 < s2) teamOneWins++
    else if (s2 < s1) teamTwoWins++
    const diff = teamOneWins - teamTwoWins
    if (diff === 0) return { label: "AS", color: "neutral" }
    return diff > 0
      ? { label: `${diff} UP`, color: "green" }
      : { label: `${Math.abs(diff)} UP`, color: "blue" }
  })

  function getFinalStatus() {
    const totalHoles = courseHoles.length

    if (isStrokeplay) {
      const playedScores = teamOneScoreArray
        .map((s1, i) => ({ s1, s2: teamTwoScoreArray[i] }))
        .filter(
          ({ s1, s2 }) =>
            s1 !== "-" && s2 !== "-" && s1 !== undefined && s2 !== undefined
        )

      if (playedScores.length === 0) {
        return { label: "-", color: "neutral" }
      }

      const teamOneTotal = playedScores.reduce((sum, { s1 }) => sum + s1, 0)
      const teamTwoTotal = playedScores.reduce((sum, { s2 }) => sum + s2, 0)
      const diff = teamOneTotal - teamTwoTotal

      if (diff === 0) return { label: "E", color: "neutral" }
      return diff < 0
        ? { label: `${Math.abs(diff)}`, color: "green" }
        : { label: `${diff}`, color: "blue" }
    }

    let teamOneWins = 0
    let teamTwoWins = 0
    let playedHoles = 0

    for (let i = 0; i < totalHoles; i++) {
      const s1 = teamOneScoreArray[i]
      const s2 = teamTwoScoreArray[i]
      const played =
        s1 !== "-" && s2 !== "-" && s1 !== undefined && s2 !== undefined

      if (!played) continue

      playedHoles++
      if (s1 < s2) teamOneWins++
      else if (s2 < s1) teamTwoWins++

      const holesRemaining = totalHoles - playedHoles
      const diff = Math.abs(teamOneWins - teamTwoWins)

      if (diff > holesRemaining) {
        if (holesRemaining === 0) {
          return teamOneWins > teamTwoWins
            ? { label: `${diff}UP`, color: "green" }
            : { label: `${diff}UP`, color: "blue" }
        }
        if (teamOneWins > teamTwoWins) {
          return { label: `${diff}&${holesRemaining}`, color: "green" }
        }
        return { label: `${diff}&${holesRemaining}`, color: "blue" }
      }
    }

    if (playedHoles === 0) {
      return { label: "-", color: "neutral" }
    }

    const holesRemaining = totalHoles - playedHoles
    const diff = Math.abs(teamOneWins - teamTwoWins)

    if (teamOneWins === teamTwoWins) {
      return holesRemaining === 0
        ? { label: "AS", color: "neutral" }
        : { label: "AS", color: "neutral" }
    }

    if (holesRemaining === 0) {
      return teamOneWins > teamTwoWins
        ? { label: `${diff}UP`, color: "green" }
        : { label: `${diff}UP`, color: "blue" }
    }

    return teamOneWins > teamTwoWins
      ? { label: `${diff}&${holesRemaining}`, color: "green" }
      : { label: `${diff}&${holesRemaining}`, color: "blue" }
  }

  const finalStatus = getFinalStatus()

  function renderPlayerScoreWithPops(
    playerObj,
    score,
    playerHandicap,
    handicap,
    par,
    index
  ) {
    const rawScore = score === undefined || score > 20 ? "-" : score
    const popMarkers =
      rawScore !== "-" && rawScore !== undefined
        ? calcPops(holes, rawScore, playerHandicap, handicap, par)
        : null

    return (
      <PlayerScoreCell key={`${playerObj?.name ?? "player"}-${index}`}>
        <span>{rawScore}</span>
        {popMarkers}
      </PlayerScoreCell>
    )
  }

  return (
    <Wrapper>
      <Header>
        <TeamLabel $team="one" className="team-one-label">
          <TeamLabelContent>
            <TeamPlayer>
              <TeamPlayerImage>
                {playerOnePic ? (
                  <GatsbyImage image={playerOnePic} alt={player1} loading="lazy" />
                ) : null}
              </TeamPlayerImage>
              <span>{player1}</span>
            </TeamPlayer>
            {player3 ? (
              <TeamPlayer>
                <TeamPlayerImage>
                  {playerThreePic ? (
                    <GatsbyImage
                      image={playerThreePic}
                      alt={player3}
                      loading="lazy"
                    />
                  ) : null}
                </TeamPlayerImage>
                <span>{player3}</span>
              </TeamPlayer>
            ) : null}
          </TeamLabelContent>
        </TeamLabel>
        <MatchStatus $color={finalStatus?.color}>
          {finalStatus?.label}
        </MatchStatus>
        <TeamLabel $team="two">
          <TeamLabelContent>
            <TeamPlayer>
              <TeamPlayerImage>
                {playerTwoPic ? (
                  <GatsbyImage image={playerTwoPic} alt={player2} loading="lazy" />
                ) : null}
              </TeamPlayerImage>
              <span>{player2}</span>
            </TeamPlayer>
            {player4 ? (
              <TeamPlayer>
                <TeamPlayerImage>
                  {playerFourPic ? (
                    <GatsbyImage image={playerFourPic} alt={player4} loading="lazy" />
                  ) : null}
                </TeamPlayerImage>
                <span>{player4}</span>
              </TeamPlayer>
            ) : null}
          </TeamLabelContent>
        </TeamLabel>
      </Header>

      {(showTeamOneIndividual || showTeamTwoIndividual) && (
        <ControlsRow>
          <ToggleRow>
            <input
              type="checkbox"
              checked={showIndividual}
              onChange={() => setShowIndividual(value => !value)}
            />
            Show individual scores
          </ToggleRow>
          <TooltipWrapper>
            <TooltipButton
              type="button"
              aria-label="Match handicap information"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
              onClick={() => setShowTooltip(value => !value)}
            >
              i
            </TooltipButton>
            {showTooltip ? (
              <TooltipContent role="tooltip">
                <TooltipTitle>Handicap info</TooltipTitle>
                {playerHandicapInfo.map(team => (
                  <TooltipSection key={team.label}>
                    <TooltipTeam $team={team.team}>{team.label}</TooltipTeam>
                    {team.players.map(player => (
                      <TooltipPlayerRow key={`${team.label}-${player.name}`}>
                        <TooltipPlayerName>{player.name}</TooltipPlayerName>
                        <TooltipPlayerMeta>
                          HC {player.actual} / CH {player.course} / PH {player.playing} / Pops {player.pops}
                        </TooltipPlayerMeta>
                      </TooltipPlayerRow>
                    ))}
                  </TooltipSection>
                ))}
              </TooltipContent>
            ) : null}
          </TooltipWrapper>
        </ControlsRow>
      )}

      <ScrollArea data-name="match-condensed-scrollarea">
        <Table data-name="match-condensed-table">
          <InfoColumn>
            <InfoCell>Hole</InfoCell>
            <InfoCell>Hcp</InfoCell>
            <InfoCell>Par</InfoCell>
            <InfoCell>Status</InfoCell>
            <TeamInfoCell $team="one">Green</TeamInfoCell>
            {showIndividual && showTeamOneIndividual ? (
              <>
                <InfoCell>
                  {player1} ({playerOneTotal})
                </InfoCell>
                <InfoCell>
                  {player3} ({playerThreeTotal})
                </InfoCell>
              </>
            ) : null}
            <TeamInfoCell $team="two">Blue</TeamInfoCell>
            {showIndividual && showTeamTwoIndividual ? (
              <>
                <InfoCell>
                  {player2} ({playerTwoTotal})
                </InfoCell>
                <InfoCell>
                  {player4} ({playerFourTotal})
                </InfoCell>
              </>
            ) : null}
          </InfoColumn>

          {courseHoles.map((hole, i) => (
            <HoleColumn key={uuidv1()}>
              <Cell>{hole.number}</Cell>
              <Cell>{hole.handicap}</Cell>
              <Cell>{hole.par}</Cell>
              <StatusCell $color={holeStatuses[i].color}>
                {holeStatuses[i].label}
              </StatusCell>
              <TeamScoreCell $team="one">{teamOneScoreArray[i]}</TeamScoreCell>
              {showIndividual && showTeamOneIndividual ? (
                <>
                  {renderPlayerScoreWithPops(
                    playerOne,
                    getRawScore(playerOne, year, courseMatch, holes, i),
                    p1HCglobal,
                    courseHoles[i].handicap,
                    courseHoles[i].par,
                    i
                  )}
                  {renderPlayerScoreWithPops(
                    playerThree,
                    getRawScore(playerThree, year, courseMatch, holes, i),
                    p3HCglobal,
                    courseHoles[i].handicap,
                    courseHoles[i].par,
                    i + 100
                  )}
                </>
              ) : null}
              <TeamScoreCell $team="two">{teamTwoScoreArray[i]}</TeamScoreCell>
              {showIndividual && showTeamTwoIndividual ? (
                <>
                  {renderPlayerScoreWithPops(
                    playerTwo,
                    getRawScore(playerTwo, year, courseMatch, holes, i),
                    p2HCglobal,
                    courseHoles[i].handicap,
                    courseHoles[i].par,
                    i + 200
                  )}
                  {renderPlayerScoreWithPops(
                    playerFour,
                    getRawScore(playerFour, year, courseMatch, holes, i),
                    p4HCglobal,
                    courseHoles[i].handicap,
                    courseHoles[i].par,
                    i + 300
                  )}
                </>
              ) : null}
            </HoleColumn>
          ))}
        </Table>
      </ScrollArea>
    </Wrapper>
  )
}

MatchCondensed.propTypes = {
  year: PropTypes.string,
  holes: PropTypes.string,
  courseMatch: PropTypes.string,
  gameplay: PropTypes.string,
  player1: PropTypes.string,
  player1Tees: PropTypes.string,
  player1MatchHandicap: PropTypes.string,
  player2: PropTypes.string,
  player2Tees: PropTypes.string,
  player2MatchHandicap: PropTypes.string,
  player3: PropTypes.string,
  player3Tees: PropTypes.string,
  player3MatchHandicap: PropTypes.string,
  player4: PropTypes.string,
  player4Tees: PropTypes.string,
  player4MatchHandicap: PropTypes.string,
}

export default MatchCondensed
