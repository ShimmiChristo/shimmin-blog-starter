import React from "react"
import { ScoreInfo } from "../../hooks/get-team-score"

export const FORMATS = [
  { id: "bestBall", label: "Best Ball" },
  { id: "twoBestBall", label: "2 Best Ball" },
  { id: "bramble", label: "Bramble" },
  { id: "twoBallBramble", label: "2 Ball Bramble" },
  { id: "greensomes", label: "Greensomes" },
  { id: "alternate", label: "Alternate" },
  { id: "scramble", label: "Scramble" },
  { id: "pinehurst", label: "Pinehurst" },
  { id: "singles", label: "Singles" },
]

const getPointsByFormat = (teamScores, team) => {
  const points = { total: 0 }
  FORMATS.forEach(({ id }) => {
    points[id] = 0
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
        if (elem.id in points) {
          const won = elem.wins + (elem.ties ? elem.ties / 2 : 0)
          points[elem.id] += won
          points.total += won
        }
      })
    })
  })

  return points
}

const PointsByFormat = () => {
  const teamScores = ScoreInfo()
  const green = getPointsByFormat(teamScores, "team1")
  const blue = getPointsByFormat(teamScores, "team2")

  const rows = [{ id: "total", label: "Total Points" }, ...FORMATS]

  return (
    <div className="container col-12 col-md-6">
      <div className="h4 text-center">Total Points</div>
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
          <div className="col-4 text-center fontSize-0">{green[id]}</div>
          <div className="col-4 text-center fontSize-0">{blue[id]}</div>
        </div>
      ))}
    </div>
  )
}

export default PointsByFormat
