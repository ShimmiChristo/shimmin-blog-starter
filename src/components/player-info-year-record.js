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

const StyledSection = styled.section``

function PlayerInfoThisYearRecord({ year, teamColor }) {
  return (
    <StyledSection>
      <MDBRow className="row-cols-1 text-center">
        <h2 className="h3">
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
                  5
                  </MDBCardText>
                  <MDBCardTitle className="text-center">Points Made</MDBCardTitle>
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
