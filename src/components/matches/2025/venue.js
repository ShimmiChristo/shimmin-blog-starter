import React from "react"
import MatchVenue from "../venue"
import { getMatchVenues } from "../venues"

// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"

function MatchVenue2025() {
  return <MatchVenue year="2025" venues={getMatchVenues("2025")} />
}

export default MatchVenue2025
