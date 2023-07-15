import React from "react"
import PropTypes from "prop-types"
import { PlayerInfoPoints } from "../../hooks/get-player-info-points"

const PlayerPoints = ({ name }) => {
  const playerName = name.toLowerCase()
  const players = PlayerInfoPoints()
  const player = players[`${playerName}`]

  if (!player)
    return (
      <>
        <div className="row border-bottom py-3">
          <div className="col-12 col-lg-1 text-center fontSize-0">{name}</div>
          <div className="col-12 col-lg-1 text-center fontSize-0">0</div>
          <div className="col-12 col-lg-1 text-center fontSize-0">0-0-0</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">0-0-0</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">0-0-0</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">0-0-0</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">0-0-0</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">0-0-0</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">0-0-0</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">0-0-0</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">0-0-0</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">0-0-0</div>
        </div>
      </>
    )

  const getGamePoints = player => {
    let points = {
      matches: 0,
      total: {
        wins: 0,
        ties: 0,
        losses: 0,
      },
    }
    Object.keys(player.year).forEach(key => {
      const year = player.year[key]
      const pointsArr = year.points
      pointsArr.map(elem => {
        if (points[elem.id] !== undefined) {
          points[elem.id].wins += elem.wins
          points[elem.id].ties += elem.ties
          points[elem.id].losses += elem.losses
          points.total.wins += elem.wins
          points.total.ties += elem.ties
          points.total.losses += elem.losses
          if (elem.wins) points.matches++
          if (elem.ties) points.matches++
          if (elem.losses) points.matches++
        } else {
          points[elem.id] = {}
          points[elem.id].wins = elem.wins
          points[elem.id].ties = elem.ties
          points[elem.id].losses = elem.losses
          points.total.wins += elem.wins
          points.total.ties += elem.ties
          points.total.losses += elem.losses
          if (elem.wins) points.matches++
          if (elem.ties) points.matches++
          if (elem.losses) points.matches++
        }
      })
    })
    return points
  }

  const record = getGamePoints(player)
  console.log("record - ", record)

  return (
    <>
      <div className="row border-bottom py-3">
        <div className="col-12 col-lg-1 text-center fontSize-0">{name}</div>
        <div className="col-12 col-lg-1 text-center fontSize-0">
          {record.matches}
        </div>
        <div className="col-12 col-lg-1 text-center fontSize-0">
          {record.total.wins}-{record.total.ties}-{record.total.losses}
        </div>
        <div className="col-6 col-lg-1 text-center fontSize-0">
          {record?.bestBall?.wins ? record?.bestBall?.wins : 0}-
          {record?.bestBall?.ties ? record?.bestBall?.ties : 0}-
          {record?.bestBall?.losses ? record?.bestBall?.losses : 0}
        </div>
        <div className="col-6 col-lg-1 text-center fontSize-0">
          {record?.twoBestBall?.wins ? record?.twoBestBall?.wins : 0}-
          {record?.twoBestBall?.ties ? record?.twoBestBall?.ties : 0}-
          {record?.twoBestBall?.losses ? record?.twoBestBall?.losses : 0}
        </div>
        <div className="col-6 col-lg-1 text-center fontSize-0">
          {record?.bramble?.wins ? record?.bramble?.wins : 0}-
          {record?.bramble?.ties ? record?.bramble?.ties : 0}-
          {record?.bramble?.losses ? record?.bramble?.losses : 0}
        </div>
        <div className="col-6 col-lg-1 text-center fontSize-0">
          {record?.twoBallBramble?.wins ? record?.twoBallBramble?.wins : 0}-
          {record?.twoBallBramble?.ties ? record?.twoBallBramble?.ties : 0}-
          {record?.twoBallBramble?.losses ? record?.twoBallBramble?.losses : 0}
        </div>
        <div className="col-6 col-lg-1 text-center fontSize-0">
          {record?.alternate?.wins ? record?.alternate?.wins : 0}-
          {record?.alternate?.ties ? record?.alternate?.ties : 0}-
          {record?.alternate?.losses ? record?.alternate?.losses : 0}
        </div>
        <div className="col-6 col-lg-1 text-center fontSize-0">
          {record?.brambleAlternate?.wins ? record?.brambleAlternate?.wins : 0}-
          {record?.brambleAlternate?.ties ? record?.brambleAlternate?.ties : 0}-
          {record?.brambleAlternate?.losses
            ? record?.brambleAlternate?.losses
            : 0}
        </div>
        <div className="col-6 col-lg-1 text-center fontSize-0">
          {record?.scramble?.wins ? record?.scramble?.wins : 0}-
          {record?.scramble?.ties ? record?.scramble?.ties : 0}-
          {record?.scramble?.losses ? record?.scramble?.losses : 0}
        </div>
        <div className="col-6 col-lg-1 text-center fontSize-0">
          {record?.pinehurst?.wins ? record?.pinehurst?.wins : 0}-
          {record?.pinehurst?.ties ? record?.pinehurst?.ties : 0}-
          {record?.pinehurst?.losses ? record?.pinehurst?.losses : 0}
        </div>
        <div className="col-6 col-lg-1 text-center fontSize-0">
          {record?.singles?.wins ? record?.singles?.wins : 0}-
          {record?.singles?.ties ? record?.singles?.ties : 0}-
          {record?.singles?.losses ? record?.singles?.losses : 0}
        </div>
      </div>
    </>
  )
}

PlayerPoints.propTypes = {
  name: PropTypes.string,
}

export default PlayerPoints
