import React from "react"
import PropTypes from "prop-types"
import { PlayerInfoPoints } from "../../hooks/get-player-info-points"
import { FORMATS } from "./points-by-format"
import {
  getAllPlayerStats,
  getPlayerTeamStats,
  topBy,
} from "./player-record-stats"
import Leaderboard from "./leaderboard"

const MostPlayerMatches = ({ team, byTeam = false }) => {
  const players = PlayerInfoPoints()
  const stats = getAllPlayerStats(players, team)
  const teams = byTeam ? getPlayerTeamStats(players) : null
  const rows = (playerStats, value, count = 5) =>
    topBy(playerStats, value, count).map(p => ({
      name: p.name,
      value: value(p),
    }))
  const teamRows = value =>
    teams?.map(({ stats: teamStats, ...teamInfo }) => ({
      ...teamInfo,
      rows: rows(teamStats, value),
    }))

  const winsBoard = (id, title) => (
    <Leaderboard
      key={id}
      title={title}
      rows={rows(stats, p => p[id].wins)}
      teams={teamRows(p => p[id].wins)}
    />
  )

  return (
    <>
      <Leaderboard
        title="Most Matches Played"
        rows={rows(stats, p => p.matches, 8)}
        teams={teamRows(p => p.matches)}
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
  byTeam: PropTypes.bool,
}

export default MostPlayerMatches
