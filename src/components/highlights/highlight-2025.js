import React from "react"
import { v1 as uuidv1 } from "uuid"

import Foreword2025 from "../../components/matches/2025/foreword"
import MatchPlayers2025 from "../../components/matches/2025/players"

// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"
// import { PlayerInfoUpdate } from "../../hooks/get-player-info-UPDATE"

function Highlight2025() {
  const greenTeam = ["matt", "chris", "gordon", "derek", "jake", "curtis"]
  const blueTeam = ["dylan", "rj", "blake", "craig", "evan", "dan"]

  return (
    <>
      {/* <div className="container my-3 mb-lg-5">
         <div className="row col-12 text-center justify-content-center">
          <p className="h2 m-4">
            Sept 27th-28th, 2024
            <br /> Bay Harbor & Boyne Highlands Golf Courses
          </p>
        </div> 
      </div> */}
      <div className="row pt-5">
        <div className="col-12 col-md-6">
          <Foreword2025 />
        </div>
        <div className="col-12 col-md-6">
          <MatchPlayers2025 />
        </div>
      </div>
    </>
  )
}

export default Highlight2025
