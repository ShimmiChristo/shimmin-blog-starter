import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const TableWrap = styled.section`
  margin: 2rem 0;
  overflow-x: auto;

  h2 {
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 520px;
  }

  th,
  td {
    padding: 0.7rem 0.85rem;
    border: 1px solid #d8d8d8;
    text-align: center;
  }

  th {
    background-color: #f4f4f4;
    font-weight: var(--fontWeight-semibold);
  }

`

const getYearRows = playerData => {
  const yearData = playerData?.year || {}

  const getMatchPoints = games =>
    games.reduce((total, game) => total + (game?.wins || 0) + (game?.ties || 0) * 0.5, 0)

  return Object.values(yearData)
    .map(year => {
      const points = year?.points || []
      const firstDayGames = points.slice(0, 4)
      const secondDayGames = points.slice(4)

      const totals = points.reduce(
        (acc, game) => {
          acc.wins += game?.wins || 0
          acc.ties += game?.ties || 0
          acc.losses += game?.losses || 0
          return acc
        },
        { wins: 0, ties: 0, losses: 0 }
      )

      return {
        year: year?.id,
        handicap: year?.handicap ?? "-",
        wins: totals.wins,
        ties: totals.ties,
        losses: totals.losses,
        firstDayPoints: getMatchPoints(firstDayGames),
        secondDayPoints: getMatchPoints(secondDayGames),
      }
    })
    .filter(row => row.year)
    .sort((a, b) => b.year - a.year)
}

      const formatPoints = points => (Number.isInteger(points) ? points : points.toFixed(1))

function PlayerYearByYearTable({ playerData }) {
  const rows = getYearRows(playerData)

  if (!rows.length) {
    return null
  }

  return (
    <TableWrap>
      <h2 className="h3">Year-by-Year Record</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Wins</th>
            <th>Ties</th>
            <th>Losses</th>
            <th>Day 1 Points</th>
            <th>Day 2 Points</th>
            <th>Handicap</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{row.wins}</td>
              <td>{row.ties}</td>
              <td>{row.losses}</td>
              <td>{formatPoints(row.firstDayPoints)}</td>
              <td>{formatPoints(row.secondDayPoints)}</td>
              <td>{row.handicap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrap>
  )
}

PlayerYearByYearTable.propTypes = {
  playerData: PropTypes.object,
}

export default PlayerYearByYearTable