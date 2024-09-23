import React from "react"
import { v1 as uuidv1 } from "uuid"

// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"
// import { PlayerInfoUpdate } from "../../hooks/get-player-info-UPDATE"

function Highlight2024() {
  const greenTeam = ["matt", "gordon", "chris", "derek", "jake", "curtis"]
  const blueTeam = ["dylan", "rj", "blake", "craig", "evan", "dan"]

  return (
    <>
      <div className="container my-3 mb-lg-5">
        <div className="row text-center justify-content-center">
          <p className="h2 m-4">
            Sept 27th-28th, 2024
            <br /> Bay Harbor & Boyne Highlands Golf Courses
          </p>
          {/* <div className="col-lg-8">
            <p>
              With the 2023 cup is nearly two weeks away, a lot has changed for
              the scoring. We’ve implemented the official USGA scoring for match
              play, we’ve added a new game called Pinehurst, the handicap system
              is simplified, and the player handicaps are the most accurate
              they’ve ever been. All these improvements will help for more
              competitive mathches. Stay tuned for an exciting 2023 cup!
            </p>
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
              back. Jake is filling in for the second straight year, this time
              for Gordon. Blue team needs 14 points to steal the cup. Blue is
              lead by captain Dylan Wells for the third straight year. Blue
              needs to come out hot to get the ball rolling early.
            </p>
          </div> */}
        </div>
      </div>
      {/* <div className="mb-3">
        <div className="flex flex-column text-center">
          <div className="h1">27 Points</div>
          <div className="h2">2 Teams</div>
          <div className="h3">
            <b>1 Winner</b>
          </div>
        </div>
      </div> */}
      <h2 className="h1 text-center mb-3">2024 Teams</h2>
      <div className="container mb-3 pb-3 col-lg-10">
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

export default Highlight2024
