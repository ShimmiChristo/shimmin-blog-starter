import React from "react"
import PropTypes from "prop-types"
import { PlayerInfoPoints } from "../../hooks/get-player-info-points"
import { FORMATS } from "./points-by-format"
import { getAllPlayerStats, topBy } from "./player-record-stats"
import Leaderboard from "./leaderboard"

const points = record => record.wins + record.ties / 2

const MostPlayerPoints = ({ team }) => {
  const stats = getAllPlayerStats(PlayerInfoPoints(), team)

  const pointsBoard = (id, title) => (
    <Leaderboard
      key={id}
      title={title}
      rows={topBy(stats, p => points(p[id])).map(p => ({
        name: p.name,
        value: points(p[id]),
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
}

export default MostPlayerPoints
