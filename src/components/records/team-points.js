import React from "react"
import PropTypes from "prop-types"
// import { PlayerInfoPoints } from "../../hooks/get-player-info-points"
import { ScoreInfo } from "../../hooks/get-team-score"

const TeamPoints = () => {
  const teamScores = ScoreInfo()

  const createEmptyRecord = () => ({
    wins: 0,
    ties: 0,
    losses: 0,
  })

  const formatRecord = record =>
    `${record.wins}-${record.ties}-${record.losses}`

  const getTeamPoints = team => {
    let points = {
      matches: 0,
      totalpoints: 0,
      bestBall: 0,
      twoBestBall: 0,
      bramble: 0,
      twoBallBramble: 0,
      alternate: 0,
      greensomes: 0,
      pinehurst: 0,
      scramble: 0,
      singles: 0,
      total: {
        wins: 0,
        ties: 0,
        losses: 0,
      },
    }

    for (const [, yearObj] of Object.entries(teamScores)) {
      for (const [, teamsObj] of Object.entries(yearObj)) {
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

  const getTeamRecord = team => {
    let record = {
      total: createEmptyRecord(),
      bestBall: createEmptyRecord(),
      twoBestBall: createEmptyRecord(),
      bramble: createEmptyRecord(),
      twoBallBramble: createEmptyRecord(),
      alternate: createEmptyRecord(),
      greensomes: createEmptyRecord(),
      pinehurst: createEmptyRecord(),
      scramble: createEmptyRecord(),
      singles: createEmptyRecord(),
    }

    for (const [, yearObj] of Object.entries(teamScores)) {
      for (const [, teamsObj] of Object.entries(yearObj)) {
        if (
          teamsObj != null &&
          typeof teamsObj == "object" &&
          !Array.isArray(teamsObj)
        ) {
          teamsObj[`${team}`].points.forEach(elem => {
            if (elem.id in record) {
              record[elem.id].wins += elem.wins
              record[elem.id].ties += elem.ties
              record[elem.id].losses += elem.losses
              record.total.wins += elem.wins
              record.total.ties += elem.ties
              record.total.losses += elem.losses
            }
          })
        }
      }
    }

    return record
  }

  const team1 = getTeamPoints("team1")
  const team2 = getTeamPoints("team2")
  const team1Record = getTeamRecord("team1")
  const team2Record = getTeamRecord("team2")

  return (
    <>
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
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Total Points</div>
          <div className="col-4 text-center fontSize-0">{team1.matches}</div>
          <div className="col-4 text-center fontSize-0">{team2.matches}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Best Ball</div>
          <div className="col-4 text-center fontSize-0">{team1.bestBall}</div>
          <div className="col-4 text-center fontSize-0">{team2.bestBall}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">2 Best Ball</div>
          <div className="col-4 text-center fontSize-0">
            {team1.twoBestBall}
          </div>
          <div className="col-4 text-center fontSize-0">
            {team2.twoBestBall}
          </div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Bramble</div>
          <div className="col-4 text-center fontSize-0">{team1.bramble}</div>
          <div className="col-4 text-center fontSize-0">{team2.bramble}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">2 Ball Bramble</div>
          <div className="col-4 text-center fontSize-0">
            {team1.twoBallBramble}
          </div>
          <div className="col-4 text-center fontSize-0">
            {team2.twoBallBramble}
          </div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Greensomes</div>
          <div className="col-4 text-center fontSize-0">{team1.greensomes}</div>
          <div className="col-4 text-center fontSize-0">{team2.greensomes}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Alternate</div>
          <div className="col-4 text-center fontSize-0">{team1.alternate}</div>
          <div className="col-4 text-center fontSize-0">{team2.alternate}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Scramble</div>
          <div className="col-4 text-center fontSize-0">{team1.scramble}</div>
          <div className="col-4 text-center fontSize-0">{team2.scramble}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Pinehurst</div>
          <div className="col-4 text-center fontSize-0">{team1.pinehurst}</div>
          <div className="col-4 text-center fontSize-0">{team2.pinehurst}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Singles</div>
          <div className="col-4 text-center fontSize-0">{team1.singles}</div>
          <div className="col-4 text-center fontSize-0">{team2.singles}</div>
        </div>
      </div>

      <div className="container col-12 col-md-6 mt-5">
        <div className="h4 text-center">Total Record</div>
        <div className="row border-bottom bold">
          <div className="col-4 text-center fontSize-0"></div>
          <div className="col-4 text-center fontSize-0 team-one-color-bg text-white py-2">
            Green Team
          </div>
          <div className="col-4 text-center fontSize-0 team-two-color-bg text-white py-2">
            Blue Team
          </div>
        </div>
         <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Total Wins</div>
          <div className="col-4 text-center fontSize-0">{team1Record.total.wins}</div>
          <div className="col-4 text-center fontSize-0">{team2Record.total.wins}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Total Ties</div>
          <div className="col-4 text-center fontSize-0">{team1Record.total.ties}</div>
          <div className="col-4 text-center fontSize-0">{team2Record.total.ties}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Total Losses</div>
          <div className="col-4 text-center fontSize-0">{team1Record.total.losses}</div>
          <div className="col-4 text-center fontSize-0">{team2Record.total.losses}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Best Ball Record</div>
          <div className="col-4 text-center fontSize-0">{formatRecord(team1Record.bestBall)}</div>
          <div className="col-4 text-center fontSize-0">{formatRecord(team2Record.bestBall)}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">2 Best Ball Record</div>
          <div className="col-4 text-center fontSize-0">
            {formatRecord(team1Record.twoBestBall)}
          </div>
          <div className="col-4 text-center fontSize-0">
            {formatRecord(team2Record.twoBestBall)}
          </div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Bramble Record</div>
          <div className="col-4 text-center fontSize-0">{formatRecord(team1Record.bramble)}</div>
          <div className="col-4 text-center fontSize-0">{formatRecord(team2Record.bramble)}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">2 Ball Bramble Record</div>
          <div className="col-4 text-center fontSize-0">
            {formatRecord(team1Record.twoBallBramble)}
          </div>
          <div className="col-4 text-center fontSize-0">
            {formatRecord(team2Record.twoBallBramble)}
          </div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Greensomes Record</div>
          <div className="col-4 text-center fontSize-0">{formatRecord(team1Record.greensomes)}</div>
          <div className="col-4 text-center fontSize-0">{formatRecord(team2Record.greensomes)}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Alternate Record</div>
          <div className="col-4 text-center fontSize-0">{formatRecord(team1Record.alternate)}</div>
          <div className="col-4 text-center fontSize-0">{formatRecord(team2Record.alternate)}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Scramble Record</div>
          <div className="col-4 text-center fontSize-0">{formatRecord(team1Record.scramble)}</div>
          <div className="col-4 text-center fontSize-0">{formatRecord(team2Record.scramble)}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Pinehurst Record</div>
          <div className="col-4 text-center fontSize-0">{formatRecord(team1Record.pinehurst)}</div>
          <div className="col-4 text-center fontSize-0">{formatRecord(team2Record.pinehurst)}</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-center fontSize-0">Singles Record</div>
          <div className="col-4 text-center fontSize-0">{formatRecord(team1Record.singles)}</div>
          <div className="col-4 text-center fontSize-0">{formatRecord(team2Record.singles)}</div>
        </div>
      </div>
    </>
  )
}

TeamPoints.propTypes = {
  name: PropTypes.string,
}

export default TeamPoints
