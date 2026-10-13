import React from "react"
import { ScoreInfo } from "../../hooks/get-team-score"
import { FORMATS } from "./points-by-format"

const getMatchesWonByFormat = (teamScores, team) => {
  const wins = { total: 0 }
  const played = { total: 0 }
  FORMATS.forEach(({ id }) => {
    wins[id] = 0
    played[id] = 0
  })

  Object.values(teamScores).forEach(yearObj => {
    Object.values(yearObj).forEach(teamsObj => {
      if (
        teamsObj == null ||
        typeof teamsObj !== "object" ||
        Array.isArray(teamsObj)
      ) {
        return
      }
      teamsObj[team].points.forEach(elem => {
        if (elem.id in wins) {
          wins[elem.id] += elem.wins
          wins.total += elem.wins
          const matches = elem.wins + elem.ties + elem.losses
          played[elem.id] += matches
          played.total += matches
        }
      })
    })
  })

  return { wins, played }
}

const MatchesWonByFormat = () => {
  const teamScores = ScoreInfo()
  const green = getMatchesWonByFormat(teamScores, "team1")
  const blue = getMatchesWonByFormat(teamScores, "team2")

  const rows = [{ id: "total", label: "All Matches" }, ...FORMATS]

  return (
    <div className="container col-12 col-md-6 mt-5">
      <div className="h4 text-center">Matches Won</div>
      <div className="row border-bottom bold">
        <div className="col-4 text-center fontSize-0"></div>
        <div className="col-4 text-center fontSize-0 team-one-color-bg text-white py-2">
          Green Team
        </div>
        <div className="col-4 text-center fontSize-0 team-two-color-bg text-white py-2">
          Blue Team
        </div>
      </div>
      {rows.map(({ id, label }) => (
        <div className="row border-bottom py-2" key={id}>
          <div className="col-4 text-center fontSize-0">{label}</div>
          <div className="col-4 text-center fontSize-0">{green.wins[id]} / {green.played[id]}</div>
          <div className="col-4 text-center fontSize-0">{blue.wins[id]} / {blue.played[id]}</div>
        </div>
      ))}
    </div>
  )
}

export default MatchesWonByFormat
