import React from "react"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import { PlayerInfoPoints } from "../../hooks/get-player-info-points"

const MostPlayerPoints = () => {
  const players = PlayerInfoPoints()
  const mostWins = []
  const getGamePoints = player => {
    let points = {
      name: player?.name,
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
        if (points[elem.id]) {
          points[elem.id].wins += elem.wins
          points[elem.id].ties += elem.ties
          points[elem.id].losses += elem.losses
          points.total.wins += elem.wins
          points.total.ties += elem.ties
          points.total.losses += elem.losses
          points.matches += elem.wins + elem.ties + elem.losses
        } else {
          points[elem.id] = {}
          points[elem.id].wins = elem.wins
          points[elem.id].ties = elem.ties
          points[elem.id].losses = elem.losses
          points.total.wins += elem.wins
          points.total.ties += elem.ties
          points.total.losses += elem.losses
          points.matches += elem.wins + elem.ties + elem.losses
        }
      })
    })
    return points
  }

  for (const [key, value] of Object.entries(players)) {
    let t = getGamePoints(value)
    mostWins.push(t)
  }

  const top5GameWins = game => {
    return mostWins.sort((a, b) => b[game]?.wins - a[game]?.wins).slice(0, 5)
  }

  return (
    <>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Points Won</div>
        {top5GameWins("total").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.total.wins}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Best Ball Points Won</div>
        {top5GameWins("bestBall").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.bestBall.wins}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most 2 Best Ball Points Won</div>
        {top5GameWins("twoBestBall").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.twoBestBall.wins}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Bramble Points Won</div>
        {top5GameWins("bramble").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.bramble.wins}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most 2 Ball Bramble Points Won</div>
        {top5GameWins("twoBallBramble").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.twoBallBramble.wins}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Alternate Points Won</div>
        {top5GameWins("alternate").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.alternate.wins}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Scramble Points Won</div>
        {top5GameWins("scramble").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.scramble.wins}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Pinehurst Points Won</div>
        {top5GameWins("pinehurst").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.pinehurst.wins}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Singles Points Won</div>
        {top5GameWins("singles").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.singles.wins}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

MostPlayerPoints.propTypes = {}

export default MostPlayerPoints
