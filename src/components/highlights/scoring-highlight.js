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
      players[property]?.name ? greenTeam.push(players[property].name) : greenTeam.push(property)
      
    } else if (players[property].year[`_${yearProp}`]?.team === "blue") {
      players[property]?.name ? blueTeam.push(players[property].name) : blueTeam.push(property)
    }
  }

  return (
    <>
      <div class="mb-3">
        <div class="flex flex-column text-center">
          <div class="h1">27 Points</div>
          <div class="h2">2 Teams</div>
        </div>
      </div>
      <div class="container mb-3 col-lg-10">
        <div class="row">
          <div class="col">
            <div class="card shadow-none border">
              <div class="card-header team-one-color-bg text-white">
                Green Team
              </div>
              <ul class="list-group list-group-flush">
                {greenTeam.map((player, i) => {
                  if (i === 0) {
                    return (
                      <li key={uuidv1()} class="list-group-item m-0 py-2">
                        <span class="capitalize">{player}</span>
                        <em> *team captain</em>
                      </li>
                    )
                  } else {
                    return (
                      <li key={uuidv1()} class="list-group-item m-0 py-2">
                        <span class="capitalize">{player}</span>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-none border">
              <div class="card-header team-two-color-bg text-white">
                Blue Team
              </div>
              <ul class="list-group list-group-flush">
                {blueTeam.map((player, i) => {
                  if (i === 0) {
                    return (
                      <li key={uuidv1()} class="list-group-item m-0 py-2">
                        <span class="capitalize">{player}</span>
                        <em> *team captain</em>
                      </li>
                    )
                  } else {
                    return (
                      <li key={uuidv1()} class="list-group-item m-0 py-2">
                        <span class="capitalize">{player}</span>
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
