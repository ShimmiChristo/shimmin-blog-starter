import React from "react"
import PropTypes from "prop-types"
import { PlayerInfoPoints } from "../../hooks/get-player-info-points"
import { FORMATS } from "./points-by-format"
import { getAllPlayerStats, topBy } from "./player-record-stats"
import Leaderboard from "./leaderboard"

const MostPlayerMatches = ({ team }) => {
  const stats = getAllPlayerStats(PlayerInfoPoints(), team)

  const winsBoard = (id, title) => (
    <Leaderboard
      key={id}
      title={title}
      rows={topBy(stats, p => p[id].wins).map(p => ({
        name: p.name,
        value: p[id].wins,
      }))}
    />
  )

  return (
    <>
      <Leaderboard
        title="Most Matches Played"
        rows={topBy(stats, p => p.matches, 8).map(p => ({
          name: p.name,
          value: p.matches,
        }))}
      />
      {winsBoard("total", "Most Matches Won")}
      {FORMATS.map(({ id, label }) =>
        winsBoard(id, `Most ${label} Matches Won`)
      )}
    </>
  )
}

MostPlayerMatches.propTypes = {
  team: PropTypes.oneOf(["green", "blue"]),
}

export default MostPlayerMatches
