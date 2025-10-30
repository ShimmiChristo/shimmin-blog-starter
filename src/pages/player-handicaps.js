import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { PlayerInfoUpdate } from "../hooks/get-player-info-UPDATE"
import {
  calc18HoleHCDiff,
  calc9HoleHCDiff,
  calcHandicapDiffAvg,
} from "../helpers/courseHandicapHelper"
import { CourseInfo } from "../hooks/get-course-info"

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

const PlayerHandicaps = ({ location }) => {
  const { title } = useSiteMetadata()
  const playersUpdateJson = PlayerInfoUpdate()
  const { course } = CourseInfo()
  const [sortBy, setSortBy] = useState("name") // 'name' or 'handicap'
  const [sortOrder, setSortOrder] = useState("asc") // 'asc' or 'desc'

  // Extract player data from JSON
  const players = Object.entries(playersUpdateJson)
    .filter(([key]) => !key.includes("example") && key !== "sample")
    .map(([key, player]) => {
      // Get the most recent year data
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

  /*
   * ex: chris.year._2025.scores.hiddenRiverGolfClub
   * get all matches we want for the cup index. Look for useForHandicapIndex = true
   * then calculate the cup handicap from those scores
   * some scores use 18 holes, some use 9 holes. Use 18 hole index during calculation
   * use calcCourseDiff to each course differential
   * then send array of course differentials to calcHandicapDiff to get cupCap
   * get courseRating and courseSlope from the course data
   * todo: need to update playersUpdateJson to include frontGross and backGross scores
   */
  players.forEach(player => {
    const playerData = playersUpdateJson[player.name.toLowerCase()]
    const years = Object.keys(playerData.year).filter(
      y =>
        y.startsWith("_2025") || y.startsWith("_2024") || y.startsWith("_2023")
    )
    let courseDiffs = []

    years.forEach(yearKey => {
      const yearData = playerData.year[yearKey]
      const scores = yearData.scores
      // get course info for match from courses.json
      // const courseMatchQuery = course[`${courseMatch}`][`${year}`]
      //   ? course[`${courseMatch}`][`${year}`]
      //   : course[`${courseMatch}`]

      Object.entries(scores).forEach(scoreEntry => {
        let matchCourse = course[`${scoreEntry[0]}`]
        const roundData = scoreEntry[1]
        if (roundData.useForHandicapIndex && matchCourse) {
          let frontTees = roundData?.frontTees ?? 0
          let backTees = roundData?.backTees ?? frontTees
          if (roundData.use18Holes) {
            let scoreToUse = roundData.frontGross + roundData.backGross || 0
            const courseSlope =
              matchCourse[yearKey].totals.tees[`${frontTees}`].total.slope
            const courseRating =
              matchCourse[yearKey].totals.tees[`${frontTees}`].total.index
            const courseDiff = calc18HoleHCDiff(
              scoreToUse,
              courseSlope,
              courseRating
            )
            courseDiffs.push(courseDiff)
          } else if (roundData.useFront && roundData.useBack) {
            let frontSlope =
              matchCourse[yearKey].totals.tees[`${frontTees}`].out.slope
            let frontRating =
              matchCourse[yearKey].totals.tees[`${frontTees}`].out.index
            let backSlope =
              matchCourse[yearKey].totals.tees[`${backTees}`].in.slope
            let backRating =
              matchCourse[yearKey].totals.tees[`${backTees}`].in.index
            let frontScore = roundData.frontGross || 0
            let backScore = roundData.backGross || 0
            let frontDiff = calc9HoleHCDiff(frontScore, frontSlope, frontRating)
            let backDiff = calc9HoleHCDiff(backScore, backSlope, backRating)
            courseDiffs.push(frontDiff)
            courseDiffs.push(backDiff)
          } else if (roundData.useFront) {
            let frontSlope =
              matchCourse[yearKey].totals.tees[`${frontTees}`].out.slope
            let frontRating =
              matchCourse[yearKey].totals.tees[`${frontTees}`].out.index
            let frontScore = roundData.frontGross || 0
            let frontDiff = calc9HoleHCDiff(frontScore, frontSlope, frontRating)
            courseDiffs.push(frontDiff)
          } else if (roundData.useBack) {
            let backSlope =
              matchCourse[yearKey].totals.tees[`${backTees}`].in.slope
            let backRating =
              matchCourse[yearKey].totals.tees[`${backTees}`].in.index
            let backScore = roundData.backGross || 0
            let backDiff = calc9HoleHCDiff(backScore, backSlope, backRating)
            courseDiffs.push(backDiff)
          }
        }
      })
    })

    const cupCap = calcHandicapDiffAvg(courseDiffs).toFixed(1)
    console.log("cupCap - ", cupCap)
    player.cupCap = cupCap
  })

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
                <tr key={player.name}>
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
              </PlayerCard>
            ))}
          </PlayerCards>
        </Content>
      </Container>
    </Layout>
  )
}

export default PlayerHandicaps
