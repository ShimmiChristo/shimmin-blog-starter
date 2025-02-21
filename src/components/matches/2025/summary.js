import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"
import {
  blake,
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
        <h2>2025 Match</h2>

        <p>
          <div className="block mb-1">
            <span className="bold">MVP: </span>
            <Link to="/players/{chris}">{chris}</Link>
          </div>
          <div className="block mb-1">
            <span className="bold">Biggest Surprise: </span>
            <Link to="/players/{dan}">{dan}</Link> (Score: 1-1-6),{" "}
          </div>
          <div className="block mb-1">
            <span className="bold">Most Points Scored: </span>
            <Link to="/players/{chris}">{chris}</Link> 6 (5-2-1)
          </div>
        </p>
      </div>
      <div className="container col-lg-8">
        <StaticImage
          src="../../../images/group/2025-group.jpg"
          alt="2025 bfbh cup players"
          loading="eager"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>
    </>
  )
}

export default MatchSummary2025
