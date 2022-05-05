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

// import { PlayerInfoMatt } from "../hooks/get-player-info--matt"

const StyledSection = styled.section``

function PlayerInfoThisYearRecord({ year, teamColor, post, playerData }) {
  // const playerName = post.frontmatter.name;
  // const { [`${playerName}`]: name } = PlayerInfoMatt(playerName, 2021);
  console.log("post - ", post)
  // console.log('playerData - ', playerData);
  // console.log(name['_2021'].team);
  // const years = matt.years;
  // console.log('years - ', years);
  // console.log('matt - ', matt);

  const getOverallRecord = playerData => {
    const years = playerData.year
    console.log('years - ', years);
    const totalWins = 0
    const totalLosses = 0
    const totalTies = 0
    for (const year in years) {
      console.log(`year: ${year}`)
      
    }
  }

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
      <MDBCard className="shadow-0 border border-gray offset-md-4 col-md-4 offset-">
        <MDBRow className="g-10">
          <MDBCol center>
            <MDBCardBody>
              <MDBCardText className="text-dark text-center h1">
                {getOverallRecord(playerData)} - {teamColor}
              </MDBCardText>
              <MDBCardTitle className="text-center">
                Total Points Made
              </MDBCardTitle>
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

export const pageQuery = graphql`
  query PlayerPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        index
        name
        nickname
        description
        category
        team
        handicap
        featuredImg {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
