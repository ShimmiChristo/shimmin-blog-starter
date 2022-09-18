import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"

function MatchPlayers2021() {
  return (
    <div className="mb-3">
      <h2>2021 Players</h2>
      <div className="mb-3">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card shadow-none border">
              <div className="card-header team-one-color-bg text-white">
                Green Team
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item m-0 py-2">
                  Matt<span className="fst-italic">*</span>
                </li>
                <li className="list-group-item m-0 py-2">Chris</li>
                <li className="list-group-item m-0 py-2">Travis</li>
                <li className="list-group-item m-0 py-2">Derek</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card shadow-none border">
              <div className="card-header team-two-color-bg text-white">
                Blue Team
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item m-0 py-2 ">
                  Dylan<span className="fst-italic ">*</span>
                </li>
                <li className="list-group-item m-0 py-2">RJ</li>
                <li className="list-group-item m-0 py-2">Craig</li>
                <li className="list-group-item m-0 py-2">Dan</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <em>*team captain</em>
        </div>
      </div>
    </div>
  )
}

export default MatchPlayers2021
