import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { PlayerInfoUpdate } from "../hooks/get-player-info-UPDATE"
import { CourseInfo } from "../hooks/get-course-info"
import {
  calc18HoleHCDiff,
  calc9HoleHCDiff,
  calcHandicapDiffAvg,
} from "../helpers/courseHandicapHelper"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #f5f5f5;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Content = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`

const PlayerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }

  th {
    background: #f8f9fa;
    padding: 1rem;
    text-align: left;
    color: #666;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    border-bottom: 1px solid #e0e0e0;
  }

  td {
    padding: 1rem;
    border-bottom: 1px solid #f0f0f0;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover {
    background: #f8f9fa;
  }
`

const PlayerCards = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

const PlayerCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-left: 4px solid
    ${props => (props.team === "green" ? "#28a745" : "#007bff")};
`

const PlayerName = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  color: #333;
  text-transform: capitalize;
`

const PlayerStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 600;
`

const StatValue = styled.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
`

const TeamBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  background: ${props => (props.team === "green" ? "#28a745" : "#007bff")};
  color: white;
`

const SortButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
  padding: 0;
  margin-left: 0.5rem;

  &:hover {
    color: #2c5aa0;
  }
`

const ExpandButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #2c5aa0;
  font-size: 1.2rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    background: #f0f0f0;
    border-radius: 4px;
  }

  ${props =>
    props.expanded &&
    `
    transform: rotate(180deg);
  `}
`

const ExpandableRow = styled.tr`
  td {
    padding: 0 !important;
    border-bottom: none !important;
  }
`

const RoundsContainer = styled.div`
  padding: 1.5rem;
  background: #f8f9fa;
  border-top: 1px solid #e0e0e0;
`

const HandicapSummary = styled.div`
  background: #e8f4f8;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const SummaryLabel = styled.span`
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 600;
`

const SummaryValue = styled.span`
  font-size: 1.25rem;
  color: #2c5aa0;
  font-weight: 700;
`

const YearSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const YearTitle = styled.h4`
  color: #2c5aa0;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
`

const RoundCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-left: 4px solid #2c5aa0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:last-child {
    margin-bottom: 0;
  }
`

const CourseName = styled.h5`
  color: #2c5aa0;
  margin: 0 0 1rem 0;
  font-size: 1rem;
  font-weight: 600;
`

const CourseDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
`

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const DetailLabel = styled.span`
  font-size: 0.7rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 600;
`

const DetailValue = styled.span`
  font-size: 0.9rem;
  color: #333;
  font-weight: 600;
`

const ScoreInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
`

const NoRoundsMessage = styled.p`
  color: #666;
  font-style: italic;
  text-align: center;
  padding: 2rem;
  margin: 0;
`

const MobileExpandButton = styled.button`
  width: 100%;
  background: #2c5aa0;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #234a85;
  }
`

const PlayerHandicaps = ({ location }) => {
  const { title } = useSiteMetadata()
  const playersUpdateJson = PlayerInfoUpdate()
  const { course } = CourseInfo()
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")
  const [expandedPlayers, setExpandedPlayers] = useState({})

  const getCourseInfo = (courseKey, tees, side) => {
    const courseInfo = course[courseKey]
    if (!courseInfo) return null

    const teeColor = tees || "purple"
    const slopeSide =
      side === "front" ? "out" : side === "back" ? "in" : "total"

    return {
      name: courseInfo.name,
      slope: courseInfo.totals?.tees?.[teeColor]?.[slopeSide]?.slope || "N/A",
      rating: courseInfo.totals?.tees?.[teeColor]?.[slopeSide]?.index || "N/A",
      par: courseInfo.totals?.tees?.[teeColor]?.[slopeSide]?.par || "N/A",
    }
  }

  const togglePlayerExpansion = playerName => {
    setExpandedPlayers(prev => ({
      ...prev,
      [playerName]: !prev[playerName],
    }))
  }

  // Helper function to determine how many scores are used based on total rounds
  const getScoresUsedCount = (totalRounds) => {
    if (totalRounds >= 20) return 8
    if (totalRounds === 19) return 7
    if (totalRounds >= 17) return 6
    if (totalRounds >= 15) return 5
    if (totalRounds >= 12) return 4
    if (totalRounds >= 9) return 3
    if (totalRounds >= 7) return 2
    if (totalRounds >= 6) return 2
    if (totalRounds >= 5) return 1
    if (totalRounds >= 4) return 1
    if (totalRounds >= 3) return 1
    return 0
  }

  const renderPlayerRounds = playerName => {
    const playerData = playersUpdateJson[playerName.toLowerCase()]
    if (!playerData) return <NoRoundsMessage>No rounds found</NoRoundsMessage>

    const years = Object.keys(playerData.year).filter(y => y.startsWith("_"))
    const hasRounds = years.some(year => {
      const yearData = playerData.year[year]
      return (
        yearData.scores &&
        Object.values(yearData.scores).some(score => score.useForHandicapIndex)
      )
    })

    if (!hasRounds) {
      return <NoRoundsMessage>No handicap index rounds found</NoRoundsMessage>
    }

    const calculateSummary = () => {
      let allDifferentials = []

      years.forEach(year => {
        const yearData = playerData.year[year]
        const rounds = Object.entries(yearData.scores || {}).filter(
          ([, score]) => score.useForHandicapIndex
        )

        rounds.forEach(([courseKey, scoreData]) => {
          const tees = scoreData.frontTees || scoreData.backTees
          const use18Holes = scoreData.use18Holes
          const useFront = scoreData.useFront
          const useBack = scoreData.useBack

          let handicapDiff = null
          let frontDiff = null
          let backDiff = null

          const matchCourse = course[courseKey]

          if (use18Holes) {
            if (matchCourse && matchCourse[year]) {
              const totalScore =
                (scoreData.frontGross || 0) + (scoreData.backGross || 0)
              const courseSlope =
                matchCourse[year].totals.tees[tees || "purple"].total.slope
              const courseRating =
                matchCourse[year].totals.tees[tees || "purple"].total.index
              handicapDiff = calc18HoleHCDiff(
                totalScore,
                courseSlope,
                courseRating
              )
            }
          } else if (useFront && useBack) {
            if (matchCourse && matchCourse[year]) {
              const frontTees = scoreData.frontTees || tees || "purple"
              const backTees = scoreData.backTees || tees || "purple"

              const frontSlope =
                matchCourse[year].totals.tees[frontTees].out.slope
              const frontRating =
                matchCourse[year].totals.tees[frontTees].out.index
              const backSlope =
                matchCourse[year].totals.tees[backTees].in.slope
              const backRating =
                matchCourse[year].totals.tees[backTees].in.index

              frontDiff = calc9HoleHCDiff(
                scoreData.frontGross || 0,
                frontSlope,
                frontRating
              )
              backDiff = calc9HoleHCDiff(
                scoreData.backGross || 0,
                backSlope,
                backRating
              )
            }
          } else if (useFront) {
            if (matchCourse && matchCourse[year]) {
              const frontSlope =
                matchCourse[year].totals.tees[tees || "purple"].out.slope
              const frontRating =
                matchCourse[year].totals.tees[tees || "purple"].out.index
              handicapDiff = calc9HoleHCDiff(
                scoreData.frontGross || 0,
                frontSlope,
                frontRating
              )
            }
          } else if (useBack) {
            if (matchCourse && matchCourse[year]) {
              const backSlope =
                matchCourse[year].totals.tees[tees || "purple"].in.slope
              const backRating =
                matchCourse[year].totals.tees[tees || "purple"].in.index
              handicapDiff = calc9HoleHCDiff(
                scoreData.backGross || 0,
                backSlope,
                backRating
              )
            }
          }

          if (handicapDiff !== null) {
            allDifferentials.push(handicapDiff)
          }
          if (frontDiff !== null) {
            allDifferentials.push(frontDiff)
          }
          if (backDiff !== null) {
            allDifferentials.push(backDiff)
          }
        })
      })

      allDifferentials.sort((a, b) => a - b)
      
      const totalDifferentials = allDifferentials.length
      const scoresUsedCount = getScoresUsedCount(totalDifferentials)
      
      return { 
        totalDifferentials, 
        allScores: allDifferentials,
        scoresUsedCount
      }
    }

    const summary = calculateSummary()

    return (
      <>
        <HandicapSummary>
          <SummaryItem>
            <SummaryLabel>Total Differentials</SummaryLabel>
            <SummaryValue>{summary.totalDifferentials}</SummaryValue>
          </SummaryItem>
          <SummaryItem>
            <SummaryLabel>Best Differentials (Used in Calculation)</SummaryLabel>
            <SummaryValue style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              {summary.allScores.map((score, index) => {
                const isUsed = index < summary.scoresUsedCount
                return (
                  <span
                    key={index}
                    style={{
                      color: isUsed ? '#dc3545' : '#999',
                      fontWeight: isUsed ? '700' : '400',
                      textDecoration: isUsed ? 'underline' : 'none',
                      marginRight: '0.5rem'
                    }}
                  >
                    {score.toFixed(1)}
                    {index < summary.allScores.length - 1 ? ',' : ''}
                  </span>
                )
              })}
            </SummaryValue>
          </SummaryItem>
          <SummaryItem>
            <SummaryLabel>Scores Used</SummaryLabel>
            <SummaryValue>{summary.scoresUsedCount} of {summary.allScores.length}</SummaryValue>
          </SummaryItem>
        </HandicapSummary>
        {years
          .map(year => {
            const yearData = playerData.year[year]
            const yearLabel = year.replace("_", "")
            const rounds = Object.entries(yearData.scores || {}).filter(
              ([, score]) => score.useForHandicapIndex
            )

            if (rounds.length === 0) return null

            return (
              <YearSection key={year}>
                <YearTitle>{yearLabel} Season</YearTitle>

                {rounds.map(([courseKey, scoreData]) => {
                  const tees = scoreData.frontTees || scoreData.backTees
                  const use18Holes = scoreData.use18Holes
                  const useFront = scoreData.useFront
                  const useBack = scoreData.useBack

                  let courseInfo
                  let holesUsed = ""
                  let handicapDiff = null
                  let frontDiff = null
                  let backDiff = null

                  const matchCourse = course[courseKey]

                  if (use18Holes) {
                    courseInfo = getCourseInfo(courseKey, tees, "total")
                    holesUsed = "18 Holes"

                    if (matchCourse && matchCourse[year]) {
                      const totalScore =
                        (scoreData.frontGross || 0) + (scoreData.backGross || 0)
                      const courseSlope =
                        matchCourse[year].totals.tees[tees || "purple"].total
                          .slope
                      const courseRating =
                        matchCourse[year].totals.tees[tees || "purple"].total
                          .index
                      handicapDiff = calc18HoleHCDiff(
                        totalScore,
                        courseSlope,
                        courseRating
                      )
                    }
                  } else if (useFront && useBack) {
                    holesUsed = "Front & Back 9s"
                    courseInfo = {
                      name:
                        getCourseInfo(courseKey, tees, "front")?.name ||
                        scoreData.course,
                      frontSlope: getCourseInfo(courseKey, tees, "front")?.slope,
                      frontRating: getCourseInfo(courseKey, tees, "front")
                        ?.rating,
                      frontPar: getCourseInfo(courseKey, tees, "front")?.par,
                      backSlope: getCourseInfo(courseKey, tees, "back")?.slope,
                      backRating: getCourseInfo(courseKey, tees, "back")?.rating,
                      backPar: getCourseInfo(courseKey, tees, "back")?.par,
                    }

                    if (matchCourse && matchCourse[year]) {
                      const frontTees = scoreData.frontTees || tees || "purple"
                      const backTees = scoreData.backTees || tees || "purple"

                      const frontSlope =
                        matchCourse[year].totals.tees[frontTees].out.slope
                      const frontRating =
                        matchCourse[year].totals.tees[frontTees].out.index
                      const backSlope =
                        matchCourse[year].totals.tees[backTees].in.slope
                      const backRating =
                        matchCourse[year].totals.tees[backTees].in.index

                      frontDiff = calc9HoleHCDiff(
                        scoreData.frontGross || 0,
                        frontSlope,
                        frontRating
                      )
                      backDiff = calc9HoleHCDiff(
                        scoreData.backGross || 0,
                        backSlope,
                        backRating
                      )
                    }
                  } else if (useFront) {
                    courseInfo = getCourseInfo(courseKey, tees, "front")
                    holesUsed = "Front 9"

                    if (matchCourse && matchCourse[year]) {
                      const frontSlope =
                        matchCourse[year].totals.tees[tees || "purple"].out.slope
                      const frontRating =
                        matchCourse[year].totals.tees[tees || "purple"].out.index
                      handicapDiff = calc9HoleHCDiff(
                        scoreData.frontGross || 0,
                        frontSlope,
                        frontRating
                      )
                    }
                  } else if (useBack) {
                    courseInfo = getCourseInfo(courseKey, tees, "back")
                    holesUsed = "Back 9"

                    if (matchCourse && matchCourse[year]) {
                      const backSlope =
                        matchCourse[year].totals.tees[tees || "purple"].in.slope
                      const backRating =
                        matchCourse[year].totals.tees[tees || "purple"].in.index
                      handicapDiff = calc9HoleHCDiff(
                        scoreData.backGross || 0,
                        backSlope,
                        backRating
                      )
                    }
                  }

                  if (!courseInfo) {
                    courseInfo = {
                      name: scoreData.course,
                      slope: "N/A",
                      rating: "N/A",
                      par: "N/A",
                    }
                  }

                  return (
                    <RoundCard key={courseKey}>
                      <CourseName>
                        {courseInfo.name || scoreData.course}
                      </CourseName>

                      <CourseDetails>
                        <DetailItem>
                          <DetailLabel>Holes Used</DetailLabel>
                          <DetailValue>{holesUsed}</DetailValue>
                        </DetailItem>

                        {useFront && useBack ? (
                          <>
                            <DetailItem>
                              <DetailLabel>Front Slope/Rating</DetailLabel>
                              <DetailValue>
                                {courseInfo.frontSlope} /{" "}
                                {courseInfo.frontRating}
                              </DetailValue>
                            </DetailItem>
                            <DetailItem>
                              <DetailLabel>Back Slope/Rating</DetailLabel>
                              <DetailValue>
                                {courseInfo.backSlope} / {courseInfo.backRating}
                              </DetailValue>
                            </DetailItem>
                            <DetailItem>
                              <DetailLabel>Front Par</DetailLabel>
                              <DetailValue>{courseInfo.frontPar}</DetailValue>
                            </DetailItem>
                            <DetailItem>
                              <DetailLabel>Back Par</DetailLabel>
                              <DetailValue>{courseInfo.backPar}</DetailValue>
                            </DetailItem>
                          </>
                        ) : (
                          <>
                            <DetailItem>
                              <DetailLabel>Slope</DetailLabel>
                              <DetailValue>{courseInfo.slope}</DetailValue>
                            </DetailItem>
                            <DetailItem>
                              <DetailLabel>Rating</DetailLabel>
                              <DetailValue>{courseInfo.rating}</DetailValue>
                            </DetailItem>
                            <DetailItem>
                              <DetailLabel>Par</DetailLabel>
                              <DetailValue>{courseInfo.par}</DetailValue>
                            </DetailItem>
                          </>
                        )}

                        {tees && (
                          <DetailItem>
                            <DetailLabel>Tees</DetailLabel>
                            <DetailValue
                              style={{ textTransform: "capitalize" }}
                            >
                              {tees}
                            </DetailValue>
                          </DetailItem>
                        )}
                      </CourseDetails>

                      <ScoreInfo>
                        {(use18Holes || useFront) && (
                          <DetailItem>
                            <DetailLabel>Front Score</DetailLabel>
                            <DetailValue>
                              {scoreData.frontGross || "N/A"}
                            </DetailValue>
                          </DetailItem>
                        )}
                        {(use18Holes || useBack) && (
                          <DetailItem>
                            <DetailLabel>Back Score</DetailLabel>
                            <DetailValue>
                              {scoreData.backGross || "N/A"}
                            </DetailValue>
                          </DetailItem>
                        )}
                        {use18Holes && (
                          <DetailItem>
                            <DetailLabel>Total Score</DetailLabel>
                            <DetailValue>
                              {(scoreData.frontGross || 0) +
                                (scoreData.backGross || 0)}
                            </DetailValue>
                          </DetailItem>
                        )}
                        {handicapDiff !== null && (
                          <DetailItem>
                            <DetailLabel>
                              {use18Holes ? "18-Hole" : "9-Hole"} Differential
                            </DetailLabel>
                            <DetailValue style={{ color: "#dc3545" }}>
                              {handicapDiff.toFixed(1)}
                            </DetailValue>
                          </DetailItem>
                        )}
                        {frontDiff !== null && (
                          <DetailItem>
                            <DetailLabel>Front 9 Differential</DetailLabel>
                            <DetailValue style={{ color: "#dc3545" }}>
                              {frontDiff.toFixed(1)}
                            </DetailValue>
                          </DetailItem>
                        )}
                        {backDiff !== null && (
                          <DetailItem>
                            <DetailLabel>Back 9 Differential</DetailLabel>
                            <DetailValue style={{ color: "#dc3545" }}>
                              {backDiff.toFixed(1)}
                            </DetailValue>
                          </DetailItem>
                        )}
                      </ScoreInfo>
                    </RoundCard>
                  )
                })}
              </YearSection>
            )
          })
          .filter(Boolean)}
      </>
    )
  }

  // Extract player data from JSON
  const players = Object.entries(playersUpdateJson)
    .filter(([key]) => !key.includes("example") && key !== "sample")
    .map(([key, player]) => {
      const years = Object.keys(player.year).filter(y => y.startsWith("_"))
      const latestYear = years.sort().reverse()[0]
      const latestYearData = player.year[latestYear]

      return {
        name: player.name,
        handicap: player.handicap,
        appearances: player.appearances,
        cupRecord: player.cupRecord,
        latestTeam: latestYearData?.team || "N/A",
        latestHandicap: latestYearData?.handicap || player.handicap,
      }
    })

  // * turn into function to calculate cup cap
  // * calculate cup cap for each player using useEffect()
  const calcCupCaps = () => {
    players.forEach(player => {
      const playerData = playersUpdateJson[player.name.toLowerCase()]
      const years = Object.keys(playerData.year).filter(
        y =>
          y.startsWith("_2025") ||
          y.startsWith("_2024") ||
          y.startsWith("_2023")
      )
      let courseDiffs = []

      years.forEach(yearKey => {
        const yearData = playerData.year[yearKey]
        const scores = yearData.scores

        Object.entries(scores).forEach(scoreEntry => {
          let matchCourse = course[`${scoreEntry[0]}`]
          const roundData = scoreEntry[1]
          if (roundData.useForHandicapIndex && matchCourse) {
            let frontTees = roundData?.frontTees ?? roundData?.backTees
            let backTees = roundData?.backTees ?? roundData?.frontTees
            if (roundData.use18Holes) {
              let scoreToUse = roundData.frontGross + roundData.backGross || 0
              const courseSlope =
                matchCourse[yearKey]?.totals?.tees[`${frontTees}`].total.slope
              const courseRating =
                matchCourse[yearKey]?.totals?.tees[`${frontTees}`].total.index
              const courseDiff = calc18HoleHCDiff(
                scoreToUse,
                courseSlope,
                courseRating
              )
              courseDiffs.push(courseDiff)
            } else if (roundData.useFront && roundData.useBack) {
              let frontSlope =
                matchCourse[yearKey]?.totals?.tees[`${frontTees}`].out.slope
              let frontRating =
                matchCourse[yearKey]?.totals?.tees[`${frontTees}`].out.index
              let backSlope =
                matchCourse[yearKey]?.totals?.tees[`${backTees}`].in.slope
              let backRating =
                matchCourse[yearKey]?.totals?.tees[`${backTees}`].in.index
              let frontScore = roundData.frontGross || 0
              let backScore = roundData.backGross || 0
              let frontDiff = calc9HoleHCDiff(
                frontScore,
                frontSlope,
                frontRating
              )
              let backDiff = calc9HoleHCDiff(backScore, backSlope, backRating)
              courseDiffs.push(frontDiff, backDiff)
              // courseDiffs.push(backDiff)
            } else if (roundData.useFront && !roundData.useBack) {
              let frontSlope =
                matchCourse[yearKey]?.totals?.tees[`${frontTees}`].out.slope
              let frontRating =
                matchCourse[yearKey]?.totals?.tees[`${frontTees}`].out.index
              let frontScore = roundData.frontGross || 0
              let frontDiff = calc9HoleHCDiff(
                frontScore,
                frontSlope,
                frontRating
              )
              courseDiffs.push(frontDiff)
            } else if (roundData.useBack && !roundData.useFront) {
              let backSlope =
                matchCourse[yearKey]?.totals?.tees[`${backTees}`].in.slope
              let backRating =
                matchCourse[yearKey]?.totals?.tees[`${backTees}`].in.index
              let backScore = roundData.backGross || 0
              let backDiff = calc9HoleHCDiff(backScore, backSlope, backRating)
              courseDiffs.push(backDiff)
            }
          }
        })
      })

      const cupCap = calcHandicapDiffAvg(courseDiffs).toFixed(1)
      if (player.name === "chris") {
        console.log("player - ", player)
        console.log("courseDiffs - ", courseDiffs)
        console.log("cupCap - ", cupCap)
      }
      player.cupCap = cupCap
    })
  }
  calcCupCaps()

  // Sort players
  const sortedPlayers = [...players].sort((a, b) => {
    if (sortBy === "name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    } else if (sortBy === "handicap") {
      return sortOrder === "asc"
        ? a.handicap - b.handicap
        : b.handicap - a.handicap
    } else if (sortBy === "cupCap") {
      return sortOrder === "asc" ? a.cupCap - b.cupCap : b.cupCap - a.cupCap
    }
    return 0
  })

  const toggleSort = column => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("asc")
    }
  }

  // useEffect(() => {
  //   calcCupCaps()
  // }, [])

  return (
    <Layout location={location} title={title}>
      <SEO title="Player Handicaps" />
      <Container>
        <Content>
          <LandingPageHeader title="Player Handicaps" />

          <Header>
            <h2 style={{ margin: 0, color: "#2c5aa0" }}>
              {players.length} Players
            </h2>
          </Header>

          {/* Desktop Table View */}
          <PlayerTable>
            <thead>
              <tr>
                <th style={{ width: "40px" }}></th>
                <th>
                  Player
                  <SortButton onClick={() => toggleSort("name")}>
                    {sortBy === "name"
                      ? sortOrder === "asc"
                        ? "↑"
                        : "↓"
                      : "⇅"}
                  </SortButton>
                </th>
                <th>
                  Handicap
                  <SortButton onClick={() => toggleSort("handicap")}>
                    {sortBy === "handicap"
                      ? sortOrder === "asc"
                        ? "↑"
                        : "↓"
                      : "⇅"}
                  </SortButton>
                </th>
                <th>
                  Cup Handicap
                  <SortButton onClick={() => toggleSort("cupCap")}>
                    {sortBy === "cupCap"
                      ? sortOrder === "asc"
                        ? "↑"
                        : "↓"
                      : "⇅"}
                  </SortButton>
                </th>
                <th>Latest Team</th>
                <th>Appearances</th>
                <th>Cup Record</th>
              </tr>
            </thead>
            <tbody>
              {sortedPlayers.map(player => (
                <React.Fragment key={player.name}>
                  <tr>
                    <td>
                      <ExpandButton
                        expanded={expandedPlayers[player.name]}
                        onClick={() => togglePlayerExpansion(player.name)}
                        title={
                          expandedPlayers[player.name]
                            ? "Hide rounds"
                            : "Show rounds"
                        }
                      >
                        ▼
                      </ExpandButton>
                    </td>
                    <td>
                      <strong style={{ textTransform: "capitalize" }}>
                        {player.name}
                      </strong>
                    </td>
                    <td>
                      <strong style={{ fontSize: "1.1rem", color: "#2c5aa0" }}>
                        {player.handicap}
                      </strong>
                    </td>
                    <td>
                      <strong style={{ fontSize: "1.1rem", color: "#2c5aa0" }}>
                        {player.cupCap}
                      </strong>
                    </td>
                    <td>
                      <TeamBadge team={player.latestTeam}>
                        {player.latestTeam}
                      </TeamBadge>
                    </td>
                    <td>
                      {player.appearances.length} year
                      {player.appearances.length !== 1 ? "s" : ""}
                      <br />
                      <span style={{ fontSize: "0.85rem", color: "#666" }}>
                        ({player.appearances.join(", ")})
                      </span>
                    </td>
                    <td>
                      <span style={{ color: "#28a745", fontWeight: 600 }}>
                        {player.cupRecord?.wins}W
                      </span>
                      {" - "}
                      <span style={{ color: "#dc3545", fontWeight: 600 }}>
                        {player.cupRecord?.losses}L
                      </span>
                    </td>
                  </tr>
                  {expandedPlayers[player.name] && (
                    <ExpandableRow>
                      <td colSpan="7">
                        <RoundsContainer>
                          {renderPlayerRounds(player.name)}
                        </RoundsContainer>
                      </td>
                    </ExpandableRow>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </PlayerTable>

          {/* Mobile Card View */}
          <PlayerCards>
            {sortedPlayers.map(player => (
              <PlayerCard key={player.name} team={player.latestTeam}>
                <PlayerName>{player.name}</PlayerName>
                <PlayerStats>
                  <StatItem>
                    <StatLabel>Handicap</StatLabel>
                    <StatValue style={{ color: "#2c5aa0" }}>
                      {player.handicap}
                    </StatValue>
                  </StatItem>
                  <StatItem>
                    <StatLabel>Cup Handicap</StatLabel>
                    <StatValue style={{ color: "#2c5aa0" }}>
                      {player.cupCap}
                    </StatValue>
                  </StatItem>
                  <StatItem>
                    <StatLabel>Latest Team</StatLabel>
                    <StatValue>
                      <TeamBadge team={player.latestTeam}>
                        {player.latestTeam}
                      </TeamBadge>
                    </StatValue>
                  </StatItem>
                  <StatItem>
                    <StatLabel>Appearances</StatLabel>
                    <StatValue>
                      {player.appearances.length} year
                      {player.appearances.length !== 1 ? "s" : ""}
                    </StatValue>
                  </StatItem>
                  <StatItem>
                    <StatLabel>Cup Record</StatLabel>
                    <StatValue>
                      <span style={{ color: "#28a745" }}>
                        {player.cupRecord?.wins}W
                      </span>
                      {" - "}
                      <span style={{ color: "#dc3545" }}>
                        {player.cupRecord?.losses}L
                      </span>
                    </StatValue>
                  </StatItem>
                </PlayerStats>
                <MobileExpandButton
                  onClick={() => togglePlayerExpansion(player.name)}
                >
                  {expandedPlayers[player.name]
                    ? "▲ Hide Rounds"
                    : "▼ View Rounds"}
                </MobileExpandButton>
                {expandedPlayers[player.name] && (
                  <RoundsContainer style={{ marginTop: "1rem" }}>
                    {renderPlayerRounds(player.name)}
                  </RoundsContainer>
                )}
              </PlayerCard>
            ))}
          </PlayerCards>
        </Content>
      </Container>
    </Layout>
  )
}

export default PlayerHandicaps
