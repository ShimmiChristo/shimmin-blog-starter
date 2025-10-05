import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"
import {
  cam,
  chris,
  craig,
  curtis,
  dan,
  derek,
  dylan,
  evan,
  gordon,
  jake,
  matt,
  rj,
} from "../../../helpers/playerLinks"

function MatchSummary2025() {
  return (
    <>
      <div className="mb-3">
        <div className="container">
          <h2>2025 Match</h2>
          <p>
            The 2025 Boys From Back Home Cup was the 5th year of the annual
            tradition. It was held again at Boyne Highlands in Harbor Springs,
            MI. The cup is a 2-day event, 8 9-hole matches, Ryder Cup style. To
            contiue the tradition, we played our practice round the day before
            at Hidden River Golf and Casting Club.
          </p>
          <div className="mt-3 mb-4">
            <h3>Day 1</h3>
            <h4 className="h5">
              Bay Harbor Golf Club - Friday, September 26, 2025
            </h4>
          </div>
          <h5 className="font-weight-bold">
            Round 1 - Best Ball & 2 Best Ball
          </h5>
          <p></p>
          <p>
            The first day of the 2025 match was held at Bay Harbor Golf Club.
            The weather was perfect, with mostly clear skies and a light breeze.
            The Green Team took an early lead, thanks to strong performances
            from {matt} and {chris}, who both won their matches convincingly.
            The Blue Team fought back in the afternoon, with {dylan} and {rj}{" "}
            securing important wins. However, the Green Team maintained their
            lead, finishing the day at 4-2.
          </p>
        </div>

        <div className="container">
          <p>
            <div className="block mb-1">
              <span className="bold">MVP: </span>
              <Link to="/players/{cam}">{cam}</Link> (for Green)
            </div>
            <div className="block mb-1">
              <span className="bold">Biggest Surprise: </span>
              <Link to="/players/{cam}">{cam}</Link> (Score: 2-1-6),{" "}
            </div>
            <div className="block mb-1">
              <span className="bold">Most Points Scored: </span>
              <Link to="/players/{chris}">{chris}</Link> 6 (6-0-2)
            </div>
          </p>
        </div>
        <div className="container col-lg-8 my-3">
          <StaticImage
            src="../../../images/group/2025-group.jpg"
            alt="2025 bfbh cup players"
            loading="eager"
            placeholder="blurred"
            layout="fullWidth"
          />
        </div>
      </div>
    </>
  )
}

export default MatchSummary2025
