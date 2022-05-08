import React from "react"
import { Link } from "gatsby"

// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"

function MatchVenue2021() {
  return (
    <div className="mb-3">
      <h2>2021 Venue</h2>
      <div>
        <Link to="https://www.otsegoclub.com/golf/the-tribute/">
          The Tribute at Otsego Resort
        </Link>
      </div>
      <div>
        <Link to="https://www.otsegoclub.com/golf/the-classic/">
          The Classic at Otsego Resort
        </Link>
      </div>
      <div>
        <Link to="https://www.gaylordcountryclub.com/">Gaylord Golf Club</Link>
      </div>
    </div>
  )
}

export default MatchVenue2021
