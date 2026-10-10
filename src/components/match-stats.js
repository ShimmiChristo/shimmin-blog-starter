import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { STAT_CATEGORIES } from "../helpers/matchStats"

const Details = styled.details`
  margin: 0.75rem 0.5rem;
  font-size: 0.75rem;

  summary {
    cursor: pointer;
    font-weight: var(--fontWeight-semibold, 600);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    /* color: var(--gray, #a0a0a0); */
  }
`

const Scroll = styled.div`
  overflow-x: auto;
  margin-top: 0.5rem;
`

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0;
  text-align: center;
  border: 1px solid #d9d9d9;

  caption {
    caption-side: top;
    padding: 0.25rem 0;
    text-align: left;
  }

  th,
  td {
    padding: 0.25rem 0.4rem;
    border: 1px solid #d9d9d9;
    white-space: nowrap;
  }

  th {
    font-weight: var(--fontWeight-semibold, 600);
  }

  .sub {
    font-weight: normal;
    font-weight: var(--fontWeight-semibold, 600);
    font-size: 0.65rem;
  }

  .net {
    /* font-weight: var(--fontWeight-semibold, 600); */
  }
`

const PlayerCell = styled.td`
  text-align: left !important;
  text-transform: capitalize;
  font-weight: var(--fontWeight-semibold, 600);
  color: ${({ $team }) =>
    ({ one: "var(--green, #18453b)", two: "var(--blue, #003c82)" }[$team] ??
    "inherit")};
`

function MatchStats({ rows, title = "Match stats", open = false }) {
  if (!rows.length) return null
  const teamRows = rows.filter(
    (row, index) =>
      row.teamResults && rows.findIndex(other => other.team === row.team) === index
  )

  return (
    <Details open={open}>
      <summary>{title}</summary>
      {teamRows.length > 0 && (
        <Scroll>
          <Table>
            <caption>Team hole results (net)</caption>
            <thead>
              <tr>
                <th scope="col">Team</th>
                <th scope="col">Won</th>
                <th scope="col">Halved</th>
                <th scope="col">Lost</th>
              </tr>
            </thead>
            <tbody>
              {teamRows.map(row => (
                <tr key={row.team}>
                  <PlayerCell $team={row.team}>
                    {row.team === "one" ? "Green" : "Blue"}
                  </PlayerCell>
                  <td>{row.teamResults.holesWon}</td>
                  <td>{row.teamResults.holesHalved}</td>
                  <td>{row.teamResults.holesLost}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Scroll>
      )}
      <Scroll>
        <Table>
          <thead>
            <tr>
              <th rowSpan={2} scope="col">Player / Team</th>
              <th rowSpan={2} scope="col">Played</th>
              <th
                rowSpan={2}
                scope="col"
                title="Winning team holes using this player's net score. Tied best balls credit both partners; combined scores credit both. Shared-ball formats credit the team."
              >
                Win contributions
              </th>
              {STAT_CATEGORIES.map(({ key, label }) => (
                <th key={key} colSpan={2}>
                  {label}
                </th>
              ))}
            </tr>
            <tr>
              {STAT_CATEGORIES.map(({ key }) => (
                <React.Fragment key={key}>
                  <th className="sub">G</th>
                  <th className="sub">N</th>
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={`${row.team}-${row.label}`}>
                <PlayerCell $team={row.team}>{row.label}</PlayerCell>
                <td>{row.holesPlayed}</td>
                <td>{row.holesWon}</td>
                {STAT_CATEGORIES.map(({ key }) => (
                  <React.Fragment key={key}>
                    <td>{row.gross[key]}</td>
                    <td className="net">{row.net[key]}</td>
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Scroll>
    </Details>
  )
}

const countsShape = PropTypes.shape({
  aces: PropTypes.number,
  eagles: PropTypes.number,
  birdies: PropTypes.number,
  pars: PropTypes.number,
  bogeys: PropTypes.number,
  doubles: PropTypes.number,
})

MatchStats.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      team: PropTypes.oneOf(["one", "two"]),
      gross: countsShape.isRequired,
      net: countsShape.isRequired,
      holesPlayed: PropTypes.number,
      holesWon: PropTypes.number,
      teamResults: PropTypes.shape({
        holesWon: PropTypes.number.isRequired,
        holesHalved: PropTypes.number.isRequired,
        holesLost: PropTypes.number.isRequired,
      }),
    })
  ).isRequired,
}

export default MatchStats
