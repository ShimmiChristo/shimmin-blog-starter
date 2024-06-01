import React from "react"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import { PlayerInfoPoints } from "../../hooks/get-player-info-points"

const MostPlayerPoints = () => {
  const players = PlayerInfoPoints()
  const mostPoints = []
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
    mostPoints.push(t)
  }

  const top5GamePoints = game => {
    return mostPoints
      .sort((a, b) => {
        let totalAPoints = a[game]?.wins + a[game]?.ties / 2
        let totalBPoints = b[game]?.wins + b[game]?.ties / 2
        return totalBPoints - totalAPoints
      })
      .slice(0, 5)
  }

  const top5GameMatches = game => {
    return mostPoints.sort((a, b) => b[game] - a[game]).slice(0, 8)
  }

  return (
    <>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Points Won</div>
        {top5GamePoints("total").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.total.wins + player.total.ties / 2}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Best Ball Points Won</div>
        {top5GamePoints("bestBall").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.bestBall.wins + player.bestBall.ties / 2}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most 2 Best Ball Points Won</div>
        {top5GamePoints("twoBestBall").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.twoBestBall.wins + player.twoBestBall.ties / 2}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Bramble Points Won</div>
        {top5GamePoints("bramble").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.bramble.wins + player.bramble.ties / 2}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most 2 Ball Bramble Points Won</div>
        {top5GamePoints("twoBallBramble").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.twoBallBramble.wins + player.twoBallBramble.ties / 2}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Alternate Points Won</div>
        {top5GamePoints("alternate").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.alternate.wins + player.alternate.ties / 2}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Scramble Points Won</div>
        {top5GamePoints("scramble").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.scramble.wins + player.scramble.ties / 2}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Pinehurst Points Won</div>
        {top5GamePoints("pinehurst").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.pinehurst.wins + player.pinehurst.ties / 2}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Singles Points Won</div>
        {top5GamePoints("singles").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.singles.wins + player.singles.ties / 2}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-5 container col-12 col-md-6">
        <div className="h4 text-center">Most Matches Played</div>
        {top5GameMatches("matches").map((player, i) => {
          return (
            <div className="row border-bottom py-2" key={`top5MostWins` + i}>
              <div className="col-6 text-center fontSize-0 capitalize">
                {player.name}
              </div>
              <div className="col-6 text-center fontSize-0">
                {player.matches}
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
