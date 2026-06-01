import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { ScoreInfo } from "../hooks/get-team-score"
import "../styles/match.css"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const PastScoresComponent = ({
  year,
  date,
  winner,
  location,
  summary,
  score,
  venue,
  players,
}) => {
  const scoreInfo = ScoreInfo()
  const eventYear = year
  const eventDate = date
  const teamLocation = location ? location : scoreInfo[`_${year}`].location
  const eventWinner = winner && score ? winner : scoreInfo[`_${year}`].winner
  const teamOneScore = scoreInfo[`_${year}`].teams.team1.score
  const teamOneName = scoreInfo[`_${year}`].teams.team1.name
  const teamTwoScore = scoreInfo[`_${year}`].teams.team2.score
  const teamTwoName = scoreInfo[`_${year}`].teams.team2.name

  const [open, setOpen] = useState("")

  function openMoreInfoClick() {
    open ? setOpen("") : setOpen("show")
  }

  return (
    <>
      <div className="row py-3 border-bottom">
        <div className="col-3 col-sm-2">
          <Link to={`/scores-${eventYear}`}>{eventYear}</Link>
        </div>
        <div className="col-9 col-sm-3 text-capitalize">{eventDate}</div>
        <div className="col-3 col-sm-2 text-capitalize">{eventWinner ? eventWinner : 'TBD'}</div>
        <div className="col-7 col-sm-3 text-capitalize">{teamLocation}</div>
        {summary && score ? (
          <div
            className="col-2 col-sm-2 link-primary pointer d-flex justify-content-center align-items-center"
            onClick={openMoreInfoClick}
          >
            <span className="d-none d-md-inline me-1">MORE{" "}</span>
            <span>
              <FaChevronDown className={"collapse show" + open} size={"1em"} />
            </span>
            <span>
              <FaChevronUp className={"collapse " + open} size={"1em"} />
            </span>
          </div>
        ) : null}
      </div>
      <div className={"container collapse " + open}>
        <div className="row py-5">
          <div className="col-5 col-lg-3 offset-lg-1 h2">Final Score</div>
          <div
            className={
              "col-7 col-lg-7 h3 bold text-uppercase align-right " + eventWinner
            }
          >
            {teamOneName} {teamOneScore} - {teamTwoName} {teamTwoScore}
          </div>
        </div>
        <div className="row pb-4">
          <div className="row col-12 col-lg-8 offset-lg-1">{summary}</div>
          <div className="row col-12 col-lg-8 offset-lg-1">{score}</div>
          <div className="row col-12 col-lg-8 offset-lg-1">{venue}</div>
          <div className="row col-12 col-lg-8 offset-lg-1">{players}</div>
        </div>
      </div>
    </>
  )
}

PastScoresComponent.propTypes = {
  year: PropTypes.string,
  date: PropTypes.string,
  winner: PropTypes.string,
  location: PropTypes.string,
  summary: PropTypes.object,
}

export default PastScoresComponent
