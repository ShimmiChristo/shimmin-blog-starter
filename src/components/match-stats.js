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
  text-align: center;
  border: 1px solid #d9d9d9;

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

  return (
    <Details open={open}>
      <summary>{title}</summary>
      <Scroll>
        <Table>
          <thead>
            <tr>
              <th rowSpan={2}></th>
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
    })
  ).isRequired,
}

export default MatchStats
