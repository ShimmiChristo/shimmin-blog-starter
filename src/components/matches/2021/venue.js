import React from "react"
import MatchVenue from "../venue"
import { getMatchVenues } from "../venues"

// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"

function MatchVenue2021() {
  return <MatchVenue year="2021" venues={getMatchVenues("2021")} />
}

export default MatchVenue2021
