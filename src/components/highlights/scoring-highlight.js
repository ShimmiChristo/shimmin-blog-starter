import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"
import { PlayerInfoUpdate } from "../../hooks/get-player-info-UPDATE"


function HighlightsScoring(year) {

  const players = PlayerInfoUpdate();

  for (const property in players) {
    console.log(`property - ${property}: ${players[property]}`);
  }

  function getGreenTeam () {

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
                <li class="list-group-item m-0 py-2">
                  Matt <span className="fst-italic">*team captain</span>
                </li>
                <li class="list-group-item m-0 py-2">Evan L</li>
                <li class="list-group-item m-0 py-2">Curtis</li>
                <li class="list-group-item m-0 py-2">Travis</li>
                <li class="list-group-item m-0 py-2">Gordon</li>
                <li class="list-group-item m-0 py-2">Derek</li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-none border">
              <div class="card-header team-two-color-bg text-white">
                Blue Team
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item m-0 py-2 ">
                  Dylan <span className="fst-italic ">*team captain</span>
                </li>
                <li class="list-group-item m-0 py-2">RJ</li>
                <li class="list-group-item m-0 py-2">Craig</li>
                <li class="list-group-item m-0 py-2">Dan</li>
                <li class="list-group-item m-0 py-2">Cam</li>
                <li class="list-group-item m-0 py-2">Evan M</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HighlightsScoring
