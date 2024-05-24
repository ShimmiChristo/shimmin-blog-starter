import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
// import { PlayerInfoPoints } from "../../hooks/get-player-info-points"
import { ScoreInfo } from "../../hooks/get-team-score"

const TeamPoints = () => {
  const teamScores = ScoreInfo()

  const getTeamPoints = team => {
    let points = {
      matches: 0,
      totalpoints: 0,
      bestBall: 0,
      twoBestBall: 0,
      bramble: 0,
      twoBallBramble: 0,
      alternate: 0,
      brambleAlternate: 0,
      pinehurst: 0,
      scramble: 0,
      singles: 0,
      total: {
        wins: 0,
        ties: 0,
        losses: 0,
      },
    }

    for (const [year, yearObj] of Object.entries(teamScores)) {
      for (const [teams, teamsObj] of Object.entries(yearObj)) {
        if (
          teamsObj != null &&
          typeof teamsObj == "object" &&
          !Array.isArray(teamsObj)
        ) {
          teamsObj[`${team}`].points.map(elem => {
            if (elem.id in points) {
              if (elem.ties) points[elem.id] += elem.ties / 2
              points[elem.id] += elem.wins
              if (elem.ties) points.matches += elem.ties / 2
              points.matches += elem.wins
            }
          })
        }
      }
    }

    return points
  }

  const team1 = getTeamPoints("team1")
  const team2 = getTeamPoints("team2")

  return (
    <>
      <div className="row border-bottom py-2">
        <div className="col-4 text-center fontSize-0">
          Total Points
        </div>
        <div className="col-4 text-center fontSize-0">
          {team1.matches}
        </div>
        <div className="col-4 text-center fontSize-0">
          {team2.matches}
        </div>
      </div>
      <div className="row border-bottom py-2">
        <div className="col-4 text-center fontSize-0">Best Ball</div>
        <div className="col-4 text-center fontSize-0">
          {team1.bestBall}
        </div>
        <div className="col-4 text-center fontSize-0">
          {team2.bestBall}
        </div>
      </div>
      <div className="row border-bottom py-2">
        <div className="col-4 text-center fontSize-0">
          2 Best Ball
        </div>
        <div className="col-4 text-center fontSize-0">
          {team1.twoBestBall}
        </div>
        <div className="col-4 text-center fontSize-0">
          {team2.twoBestBall}
        </div>
      </div>
      <div className="row border-bottom py-2">
        <div className="col-4 text-center fontSize-0">Bramble</div>
        <div className="col-4 text-center fontSize-0">
          {team1.bramble}
        </div>
        <div className="col-4 text-center fontSize-0">
          {team2.bramble}
        </div>
      </div>
      <div className="row border-bottom py-2">
        <div className="col-4 text-center fontSize-0">
          2 Ball Bramble
        </div>
        <div className="col-4 text-center fontSize-0">
          {team1.twoBallBramble}
        </div>
        <div className="col-4 text-center fontSize-0">
          {team2.twoBallBramble}
        </div>
      </div>
      <div className="row border-bottom py-2">
        <div className="col-4 text-center fontSize-0">Alternate</div>
        <div className="col-4 text-center fontSize-0">
          {team1.alternate}
        </div>
        <div className="col-4 text-center fontSize-0">
          {team2.alternate}
        </div>
      </div>
      <div className="row border-bottom py-2">
        <div className="col-4 text-center fontSize-0">Scramble</div>
        <div className="col-4 text-center fontSize-0">
          {team1.scramble}
        </div>
        <div className="col-4 text-center fontSize-0">
          {team2.scramble}
        </div>
      </div>
      <div className="row border-bottom py-2">
        <div className="col-4 text-center fontSize-0">Pinehurst</div>
        <div className="col-4 text-center fontSize-0">
          {team1.pinehurst}
        </div>
        <div className="col-4 text-center fontSize-0">
          {team2.pinehurst}
        </div>
      </div>
      <div className="row border-bottom py-2">
        <div className="col-4 text-center fontSize-0">Singles</div>
        <div className="col-4 text-center fontSize-0">
          {team1.singles}
        </div>
        <div className="col-4 text-center fontSize-0">
          {team2.singles}
        </div>
      </div>
    </>
  )
}

TeamPoints.propTypes = {
  name: PropTypes.string,
}

export default TeamPoints
