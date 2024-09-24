import React from "react"
import { v1 as uuidv1 } from "uuid"

// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"
// import { PlayerInfoUpdate } from "../../hooks/get-player-info-UPDATE"

function Highlight2024() {
  const greenTeam = ["matt", "chris", "gordon", "derek", "jake", "curtis"]
  const blueTeam = ["dylan", "rj", "blake", "craig", "evan", "dan"]

  return (
    <>
      <div className="container my-3 mb-lg-5">
        <div className="row col-12 text-center justify-content-center">
          <p className="h2 m-4">
            Sept 27th-28th, 2024
            <br /> Bay Harbor & Boyne Highlands Golf Courses
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <h3 className="h4">2024 Cup Foreword</h3>
          <p>
            What will 2024 bring? We're going back to Boyne for the second
            straight year. Same place, yet slightly different. We're playing a
            week later in the season, we're adding Bay Harbor Golf Club, adding
            a familiar face and a new face. Gordon is back for his second BFBH
            Cup, Jake is staying on Green (his alternate status on Green is
            becoming very permanent), Cam and Travis are OOO, and cousin Blake
            (HC 16) is filling in on Blue.
          </p>
          <h3 className="h4">Handicaps</h3>
          <p>
            There's some early Cup rumblings about the handicaps. Some people
            are too high, some people are too low, blah, blah. We use an honor
            system when it comes to handicapping the BFBH Cup. Since we have an
            array of talent (to put it nicely), all of scores are net scores.
            Last year was the first year we asked everyone to maintain a HC and
            I think it was a great success, considering it came down to the last
            hole. Our total team handicaps in 2024 are Green, 102.6 and Blue,
            102.2. It doesn't get closer than that.
          </p>

          <h3 className="h4">Predictions</h3>
          <p>
            I'm predicting that the Cup will come down to the last day, singles
            matches. It went to the end last year and I don't see a reason why it
            won't do the same this year. Each of the last two years, we've had
            multiple people with 6 points scored. I don't anticipate anyone
            getting 6 points this year. I also don't predict any scoreless days.
            Last year Chris was winless on day 1.
          </p>

          <h3 className="h4">Scoring</h3>
          <p>
            Blue only needs 13.5 points to retain and cup and Green needs 14
            points to take it. Which begs the question, how is Green going
            to get an extra 1/2 point? Who will step up this year?
          </p>
        </div>
        <div className="col-12 col-md-6">
          <h2 className="h1 text-center mb-3">2024 Teams</h2>
          <div className="container mb-3 pb-3 col-lg-10">
            <div className="row">
              <div className="col-12 mb-1">
                <div className="card shadow-none border">
                  <div className="card-header team-two-color-bg text-white text-center">
                    Blue Team
                  </div>
                  <ul className="list-group list-group-flush">
                    {blueTeam.map((player, i) => {
                      if (i === 0) {
                        return (
                          <li
                            key={uuidv1()}
                            className="list-group-item m-0 py-2"
                          >
                            <span className="capitalize">{player}</span>
                            <em>*</em>
                          </li>
                        )
                      } else {
                        return (
                          <li
                            key={uuidv1()}
                            className="list-group-item m-0 py-2"
                          >
                            <span className="capitalize">{player}</span>
                          </li>
                        )
                      }
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-12 mb-1">
                <div className="card shadow-none border">
                  <div className="card-header team-one-color-bg text-white text-center">
                    Green Team
                  </div>
                  <ul className="list-group list-group-flush">
                    {greenTeam.map((player, i) => {
                      if (i === 0) {
                        return (
                          <li
                            key={uuidv1()}
                            className="list-group-item m-0 py-2"
                          >
                            <span className="capitalize">{player}</span>
                            <em>*</em>
                          </li>
                        )
                      } else {
                        return (
                          <li
                            key={uuidv1()}
                            className="list-group-item m-0 py-2"
                          >
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
        </div>
      </div>
    </>
  )
}

export default Highlight2024
