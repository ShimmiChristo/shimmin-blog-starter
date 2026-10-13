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

const points = record => record.wins + record.ties / 2

const MostPlayerPoints = ({ team, byTeam = false }) => {
  const players = PlayerInfoPoints()
  const stats = getAllPlayerStats(players, team)
  const teams = byTeam ? getPlayerTeamStats(players) : null
  const rows = (playerStats, id) =>
    topBy(playerStats, p => points(p[id])).map(p => ({
      name: p.name,
      value: points(p[id]),
    }))

  const pointsBoard = (id, title) => (
    <Leaderboard
      key={id}
      title={title}
      rows={rows(stats, id)}
      teams={teams?.map(({ stats: teamStats, ...teamInfo }) => ({
        ...teamInfo,
        rows: rows(teamStats, id),
      }))}
    />
  )

  return (
    <>
      {pointsBoard("total", "Most Points Won")}
      {FORMATS.map(({ id, label }) =>
        pointsBoard(id, `Most ${label} Points Won`)
      )}
    </>
  )
}

MostPlayerPoints.propTypes = {
  team: PropTypes.oneOf(["green", "blue"]),
  byTeam: PropTypes.bool,
}

export default MostPlayerPoints
