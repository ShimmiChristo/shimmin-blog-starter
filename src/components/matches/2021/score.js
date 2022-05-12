import React from "react"
import { ScoreInfo } from "../../../hooks/get-team-score"
import styled from "styled-components"
// import Image from "gatsby-image"
import "../../../styles/match.css"

const Section = styled.section`
  border: 1px solid gray;
  padding: 2rem;
  border-radius: 0.7rem;
  overflow: hidden;
  overflow-x: hidden;
  max-width: 1000px;
  margin: 2rem auto 0;
  transition: all 0.5s ease-in-out;
  max-height: 100px;
  display: flex;
  justify-content: center;

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

function MatchScore({year}) {
  const { teams } = ScoreInfo()

  function changeBackgroundColor() {
    if (teams.team1.score > teams.team2.score) {
      return `team-one-color`
    } else if (teams.team1.score < teams.team2.score) {
      return `team-two-color`
    } else {
      return `bk-gray`
    }
  }

  return (
    <Section className={`${changeBackgroundColor()} mb-3`}>
      <div>
        <span>{teams.team1.name}</span>
        <div className="h1">{teams.team1.score}</div>
      </div>
      <div>
        <div className="h1">{teams.team2.score}</div>
        <span>{teams.team2.name}</span>
      </div>
    </Section>
  )
}

export default MatchScore