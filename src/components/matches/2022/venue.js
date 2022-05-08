import React from "react"
import { Link } from "gatsby"

// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"

function MatchVenue2022() {
  return (
    <div className="mb-3">
      <h2>2022 Venue</h2>
      <div>
        <span>Round 1.1 &amp; 1.2</span>
        <Link to="https://www.gulllakeview.com/golf/stoatin-brae/">
          Stoatin Brae
        </Link>
      </div>
      <div>
        <span>Round 2.1 &amp; 2.2</span>
        <Link to="https://www.gulllakeview.com/golf/golf-courses/stonehedge-south/">
          Stonehedge South
        </Link>
      </div>
      <div>
        <span>Round 3.1 &amp; 3.2</span>
        <Link to="https://www.gulllakeview.com/golf/golf-courses/gull-lake-view-east/">Gull Lake East</Link>
      </div>
      <div>
        <span>Round 4.1 &amp; 4.2</span>
        <Link to="https://www.gulllakeview.com/golf/golf-courses/gull-lake-view-west/">Gull Lake West</Link>
      </div>
    </div>
  )
}

export default MatchVenue2022
