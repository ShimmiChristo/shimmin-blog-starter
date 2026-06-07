import React from "react"
import MatchVenue from "../venue"
import { getMatchVenues } from "../venues"

// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"

function MatchVenue2022() {
  return <MatchVenue year="2022" venues={getMatchVenues("2022")} />
}

export default MatchVenue2022
