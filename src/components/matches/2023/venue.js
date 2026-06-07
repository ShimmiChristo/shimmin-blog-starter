import React from "react"
import MatchVenue from "../venue"
import { getMatchVenues } from "../venues"

// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"

function MatchVenue2023() {
  return <MatchVenue year="2023" venues={getMatchVenues("2023")} />
}

export default MatchVenue2023
