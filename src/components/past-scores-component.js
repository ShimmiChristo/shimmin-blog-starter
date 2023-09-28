import React, { useState } from "react"
import PropTypes from "prop-types"
import { ScoreInfo } from "../hooks/get-team-score"
import "../styles/match.css"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const PastScoresComponent = ({ year, date, winner, location, summary }) => {
  const scoreInfo = ScoreInfo()
  const eventYear = year
  const eventDate = date
  const teamLocation = location ? location : scoreInfo[`_${year}`].location
  const eventWinner = winner ? winner : scoreInfo[`_${year}`].winner
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
        <div className="col-6 col-sm-2">{eventYear}</div>
        <div className="col-6 col-sm-3 text-capitalize">{eventDate}</div>
        <div className="col-3 col-sm-2 text-capitalize">{eventWinner}</div>
        <div className="col-5 col-sm-3 text-capitalize">{teamLocation}</div>
        <div
          className="col-4 col-sm-2 link-primary pointer"
          onClick={openMoreInfoClick}
        >
          MORE{" "}
          <span>
            <FaChevronDown className={"collapse show" + open} size={"1em"} />
          </span>
          <span>
            <FaChevronUp className={"collapse " + open} size={"1em"} />
          </span>
        </div>
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
        <div className="row col-10 col-lg-7 offset-lg-1">{summary}</div>
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
