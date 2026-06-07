import React from "react"
import MatchVenue from "../venue"
import { getMatchVenues } from "../venues"

// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"

function MatchVenue2024() {
  return <MatchVenue year="2024" venues={getMatchVenues("2024")} />
}

export default MatchVenue2024
