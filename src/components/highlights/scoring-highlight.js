import React from "react"
import { v1 as uuidv1 } from "uuid"

// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"
import { PlayerInfoUpdate } from "../../hooks/get-player-info-UPDATE"

function HighlightsScoring({ yearProp }) {
  const players = PlayerInfoUpdate()
  // const newProp = players.chris.year[`_${yearProp}`].handicap
  const greenTeam = ["matt", "travis", "derek", "curtis", "gordon", "chris"]
  const blueTeam = ["dylan", "rj", "craig", "dan", "cam", "evan"]

  // for (const property in players) {
  //   if (players[property].year[`_${yearProp}`]?.team === "green") {
  //     players[property]?.name
  //       ? greenTeam.push(players[property].name)
  //       : greenTeam.push(property)
  //   } else if (players[property].year[`_${yearProp}`]?.team === "blue") {
  //     players[property]?.name
  //       ? blueTeam.push(players[property].name)
  //       : blueTeam.push(property)
  //   }
  // }

  return (
    <>
      <div className="container my-3 mb-lg-5">
        <div className="row text-center justify-content-center">
          <p className="h2 mb-4">
            Sept 22nd-23rd, 2023 Boyne Highlands Golf Courses
          </p>
          <div className="col-lg-8">
            <p>
              In 2022, the teams expanded to 12 players. Green Team was able to
              win comfortably, with the singles matches being a non-factor.
              Since the thumping at Gull Lake, a lot of words were said whether
              the handicaps and teams were fair.
            </p>
            <p>
              In 2023, Green is lead by Goose for a third straight year. He’s
              looking to continue his success from his 6 win performance in
              2022. Green’s roster is being shaken up again with Shimmin coming
              back in replace of Jake. Blue team needs 14 points to steal the
              cup. Blue is lead by captain Dylan Wells for the third straight
              year. Blue needs to come out hot to get the ball rolling early.
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
          <div className="col-12 col-md-6 mb-1">
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
                        <em>*</em>
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
          <div className="col-12 col-md-6 mb-1">
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
                        <em>*</em>
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
          <div className="col-12 mb-3">
            <div className="row">
              <em>*team captain</em>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HighlightsScoring
