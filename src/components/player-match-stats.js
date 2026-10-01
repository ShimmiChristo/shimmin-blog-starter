import React from "react"
import PropTypes from "prop-types"
import { CourseInfo } from "../hooks/get-course-info"
import { PlayerInfoUpdate } from "../hooks/get-player-info-UPDATE"
import { calcPlayerStatsByYear } from "../helpers/matchStats"
import matchesByYear from "../data/matches.json"
import MatchStats from "./match-stats"

function PlayerMatchStats({ playerName }) {
  const { course } = CourseInfo()
  const players = PlayerInfoUpdate()
  const rows = calcPlayerStatsByYear(playerName, matchesByYear, course, players)

  return (
    <>
      <MatchStats rows={rows} title="Scoring stats (2023+)" open />
      {rows.length ? (
        <p className="fontSize-xs">
          G = gross, N = net using each match&apos;s playing handicap.
          Scramble, alternate and pinehurst are excluded (team ball).
        </p>
      ) : null}
    </>
  )
}

PlayerMatchStats.propTypes = {
  playerName: PropTypes.string.isRequired,
}

export default PlayerMatchStats
