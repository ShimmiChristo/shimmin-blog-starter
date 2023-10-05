import React from "react"
import { ScoreInfo } from "../hooks/get-team-score"
import styled from "styled-components"
import PropTypes from "prop-types"
import "../styles/match.css"

const Section = styled.section`
  border: 1px solid gray;
  padding: 2rem;
  border-radius: 0.7rem;
  overflow: hidden;
  overflow-x: hidden;
  max-width: 1000px;
  margin: 1rem auto 3rem;
  transition: all 0.5s ease-in-out;
  max-height: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: var(--gray);

  > * {
    padding: 0 2rem;
    margin: 0;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    margin: 0 1rem;
    text-transform: uppercase;
  }
  &.team-one-color,
  &.team-two-color {
    color: #fff;
    .h1 {
      color: #fff;
    }
  }
`
const ScoreTracker = styled.div`
  max-width: 1000px;
  margin: 1rem auto 2rem;
  transition: all 0.5s ease-in-out;
  max-height: 100px;
  height: 90px;
  position: relative;

  &:after,
  &:before {
    background: #000;
    border-radius: 50%;
    content: "";
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
  }

  &:before {
    height: 10px;
    top: -15px;
    width: 10px;
  }
  &:after {
    height: 105px;
    bottom: 0;
    width: 1px;
  }
`

const ScoreTrackerBar = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: var(--color-brand-gray-5);
  border: 1px solid gray;
  border-radius: 0.7rem;
  overflow: hidden;

  > * {
    padding: 0 2rem;
    margin: 0;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    margin: 0 1rem;
    text-transform: uppercase;
  }
  &.team-one-color,
  &.team-two-color {
    color: #fff;
    .h1 {
      color: #fff;
    }
  }
`

const ScoreTrackerLines = styled.div`
  background: linear-gradient(
    90deg,
    transparent calc(100% - 1px),
    hsla(0, 0%, 100%, 0.5) 0
  );
  background-size: calc(3.7037037% + 0.03571px) 100%;
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  overflow: hidden;
`
const ScoreTrackerTeamOne = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
`
const ScoreTeamOne = styled.div`
  position: absolute;
  left: 50px;
  z-index: 1;
  color: #fff;
  font-size: 3rem !important;
`
const ScoreTrackerTeamTwo = styled.div`
  position: absolute;
  height: 100%;
  right: 0;
`
const ScoreTeamTwo = styled.div`
  position: absolute;
  right: 50px;
  z-index: 1;
  color: #fff;
  font-size: 3rem !important;
`
const TeamPointsNum = styled.div`
  line-height: 1;
  font-size: 2rem;
`
const TeamPointsText = styled.div`
  font-size: 0.7rem;
  letter-spacing: 0px;
  font-style: italic;
`
const TeamFlag = styled.div`
  font-size: 2rem;
  letter-spacing: 0;
`

function MatchScore({ year, lastYearWinner }) {
  const scoreInfo = ScoreInfo()
  const currentYear = year ? scoreInfo[year].teams : undefined
  const team1BarWidth = (currentYear.team1.score / 27) * 100
  const team2BarWidth = (currentYear.team2.score / 27) * 100

  // function changeBackgroundColor() {
  //   if (parseInt(currentYear.team1.score) > parseInt(currentYear.team2.score)) {
  //     return `team-one-color`
  //   } else if (
  //     parseInt(currentYear.team1.score) < parseInt(currentYear.team2.score)
  //   ) {
  //     return `team-two-color`
  //   } else {
  //     return `bk-gray`
  //   }
  // }

  return (
    <>
      <div className="d-flex justify-content-around align-items-center">
        <div
          className="d-flex team align-items-center justify-content-center flex-basis-0 flex-grow-1"
          data-team="green"
          data-guest="false"
        >
          <TeamFlag className="team-flag mx-3 team-one-color--text bold">
            GREEN
          </TeamFlag>
          {(() => {
            if (lastYearWinner === "green") {
              return (
                <div className="team-points">
                  <TeamPointsNum className="team-points-num">
                    13<sup>1/2</sup>
                  </TeamPointsNum>
                  <TeamPointsText className="team-points-text">
                    to retain
                  </TeamPointsText>
                </div>
              )
            } else if (lastYearWinner === "blue") {
              return (
                <div className="team-points">
                  <TeamPointsNum className="team-points-num">14</TeamPointsNum>
                  <TeamPointsText className="team-points-text">
                    to win
                  </TeamPointsText>
                </div>
              )
            } else {
              return <div></div>
            }
          })()}
        </div>
        <h3 className="h5">Points Needed</h3>
        <div
          className="d-flex team align-items-center justify-content-center flex-basis-0 flex-grow-1"
          data-team="blue"
          data-guest="false"
        >
          {/* <div className="d-flex flex-column team-points">
            <TeamPointsNum className="team-points-num">14</TeamPointsNum>
            <TeamPointsText className="team-points-text">to win</TeamPointsText>
          </div> */}
          {(() => {
            if (lastYearWinner === "blue") {
              return (
                <div className="team-points">
                  <TeamPointsNum className="team-points-num">
                    13<sup>1/2</sup>
                  </TeamPointsNum>
                  <TeamPointsText className="team-points-text">
                    to retain
                  </TeamPointsText>
                </div>
              )
            } else if (lastYearWinner === "green") {
              return (
                <div className="team-points">
                  <TeamPointsNum className="team-points-num">14</TeamPointsNum>
                  <TeamPointsText className="team-points-text">
                    to win
                  </TeamPointsText>
                </div>
              )
            } else {
              return <div></div>
            }
          })()}
          <TeamFlag className="team-flag mx-3 team-two-color--text bold">
            BLUE
          </TeamFlag>
        </div>
      </div>
      <ScoreTracker>
        <ScoreTrackerBar>
          <div>
            <ScoreTeamOne className="h1">
              {currentYear.team1.score}
            </ScoreTeamOne>
            <ScoreTrackerTeamOne
              className="ScoreTrackerTeam team-one-color"
              data-team={currentYear.team1.name.split(" ")[0]}
              style={{ width: team1BarWidth + `%` }}
            ></ScoreTrackerTeamOne>
          </div>
          <div>
            <ScoreTeamTwo className="h1">
              {currentYear.team2.score}
            </ScoreTeamTwo>
            <ScoreTrackerTeamTwo
              className="ScoreTrackerTeam team-two-color"
              data-team={currentYear.team2.name.split(" ")[0]}
              style={{ width: team2BarWidth + `%` }}
            ></ScoreTrackerTeamTwo>
          </div>
          <ScoreTrackerLines></ScoreTrackerLines>
        </ScoreTrackerBar>
      </ScoreTracker>
    </>
  )
}

MatchScore.propTypes = {
  year: PropTypes.string,
}

export default MatchScore
