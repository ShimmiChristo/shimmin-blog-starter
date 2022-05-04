import React from "react"
import styled from "styled-components"
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit"

import { PlayerInfoMatt } from "../hooks/get-player-info--matt"

const StyledSection = styled.section``

function PlayerInfoThisYearRecord({ year, teamColor, post }) {
  const playerName = post.frontmatter.name;
  const { [`${playerName}`]: name } = PlayerInfoMatt(2021);
  console.log('name - ', name);
  console.log('post - ', post);
  console.log(name['_2021'].team);
  // const years = matt.years;
  // console.log('years - ', years);
  // console.log('matt - ', matt);
  
  return (
    <StyledSection>
      <MDBRow className="row-cols-1 text-center">
        <h2 className="h3">
        {/* years.map(year => {
        <div>year</div>
      }) */}
          <MDBCol>{year} BFBH Cup Record</MDBCol>
        </h2>
      </MDBRow>
      {/* <MDBRow className="row-cols-1 row-cols-md-2 g-4 align-self-center"> */}
        {/* <MDBCol className=''> */}
          <MDBCard className="shadow-0 border border-gray offset-md-4 col-md-4 offset-" >
            <MDBRow className="g-10">
              <MDBCol center>
                <MDBCardBody>
                  <MDBCardText className="text-dark text-center h1">
                  5 {teamColor}
                  </MDBCardText>
                  <MDBCardTitle className="text-center">Total Points Made</MDBCardTitle>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        {/* </MDBCol> */}
      {/* </MDBRow> */}
    </StyledSection>
  )
}

export default PlayerInfoThisYearRecord
