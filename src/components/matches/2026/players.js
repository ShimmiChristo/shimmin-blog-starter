import React from "react"
import { v1 as uuidv1 } from "uuid"
// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"

const greenTeam = ["matt", "gordon", "chris", "derek", "stephen", "curtis"]
const blueTeam = ["dylan", "rj", "craig", "cam", "evan", "dan"]

function MatchPlayers2025() {
  return (
    <>
      <h2 className="h1 text-center mb-3">2025 Teams</h2>
      <div className="container mb-3 pb-3 col-lg-10">
        <div className="row">
          <div className="col-12 mb-1">
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
          <div className="col-12 mb-1">
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

export default MatchPlayers2025
