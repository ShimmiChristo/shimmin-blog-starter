import React from "react"
import MatchVenue from "../venue"
import { getMatchVenues } from "../venues"

// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"

function MatchVenue2026() {
  return <MatchVenue year="2026" venues={getMatchVenues("2026")} />
}

export default MatchVenue2026
