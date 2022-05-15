import React from "react"
import { v1 as uuidv1 } from "uuid"

// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"
import { PlayerInfoUpdate } from "../../hooks/get-player-info-UPDATE"

function HighlightsScoring({ yearProp }) {
  const players = PlayerInfoUpdate()
  // const newProp = players.chris.year[`_${yearProp}`].handicap
  const greenTeam = []
  const blueTeam = []

  for (const property in players) {
    if (players[property].year[`_${yearProp}`]?.team === "green") {
      players[property]?.name
        ? greenTeam.push(players[property].name)
        : greenTeam.push(property)
    } else if (players[property].year[`_${yearProp}`]?.team === "blue") {
      players[property]?.name
        ? blueTeam.push(players[property].name)
        : blueTeam.push(property)
    }
  }

  return (
    <>
      <div className="container my-3 mb-lg-5">
        <div className="row text-center justify-content-center">
          <p className="h2 mb-4">
            The Boys From Back Home Cup is returning in 2022!
          </p>
          <div className="col-lg-8">
            <p>
              In 2021, with only 8 players, there were 14 points for the taking.
              The story was all Blue team. They started with a dominant 4-0 lead
              on day one and never looked back. The blue team was able to win
              comfortably, 9-5.
            </p>
            <p>
              In 2022, the teams are expanding. With <b>12 players</b> and{" "}
              <b>27 points</b> available, the Blue team only needs 13.5 points
              to retain the cup. In a new year with new faces, the biggest
              question is, will the Green team keep it competitive? Come back in
              October to find out.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="flex flex-column text-center">
          <div className="h1">27 Points</div>
          <div className="h2">2 Teams</div>
          <div className="h3">
            <b>1 Winner</b>
          </div>
        </div>
      </div>
      <div className="container mb-3 col-lg-10">
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <div className="card shadow-none border">
              <div className="card-header team-one-color-bg text-white text-center">
                Green Team
              </div>
              <ul className="list-group list-group-flush">
                {greenTeam.map((player, i) => {
                  if (i === 0) {
                    return (
                      <li key={uuidv1()} className="list-group-item m-0 py-2">
                        <span className="capitalize">{player}</span>
                        <em> *team captain</em>
                      </li>
                    )
                  } else {
                    return (
                      <li key={uuidv1()} className="list-group-item m-0 py-2">
                        <span className="capitalize">{player}</span>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="card shadow-none border">
              <div className="card-header team-two-color-bg text-white text-center">
                Blue Team
              </div>
              <ul className="list-group list-group-flush">
                {blueTeam.map((player, i) => {
                  if (i === 0) {
                    return (
                      <li key={uuidv1()} className="list-group-item m-0 py-2">
                        <span className="capitalize">{player}</span>
                        <em> *team captain</em>
                      </li>
                    )
                  } else {
                    return (
                      <li key={uuidv1()} className="list-group-item m-0 py-2">
                        <span className="capitalize">{player}</span>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HighlightsScoring
