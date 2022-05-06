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

  const getOverallRecord = playerData => {
    const years = playerData.year
    let totalWins = 0
    let totalLosses = 0
    let totalTies = 0

    Object.keys(years).forEach(key => {
      const year = years[key]
      const pointsArr = year.points
      pointsArr.map(elem => {
        totalWins += elem.wins
        totalLosses += elem.losses
        totalTies += elem.ties
      })
    })
    return {
      totalWins: totalWins,
      totalLosses: totalLosses,
      totalTies: totalTies,
    }
  }

  const getGameRecord = (playerData, gameId) => {
    const years = playerData.year
    let totalWins = 0
    let totalLosses = 0
    let totalTies = 0

    Object.keys(years).forEach(key => {
      const year = years[key]
      const pointsArr = year.points
      pointsArr.map(elem => {
        if (elem.id === gameId) {
          totalWins += elem.wins
          totalLosses += elem.losses
          totalTies += elem.ties
        }
      })
    })
    return {
      totalWins: totalWins,
      totalLosses: totalLosses,
      totalTies: totalTies,
    }


  }

  const record = getOverallRecord(playerData)
  const bestBallRecord = getGameRecord(playerData, 'bestBall')

  return (
    <StyledSection>
      <MDBRow className="row-cols-1 text-center mt-3">
        <h2 className="h3">
          <MDBCol>{year} BFBH Cup Record</MDBCol>
        </h2>
      </MDBRow>
      <MDBRow>
        {/* <MDBCol className=''> */}
        <MDBCard className="shadow-0 border border-gray offset-md-4 col-md-4 offset- my-2">
          <MDBRow className="g-10">
            <MDBCol center>
              <MDBCardBody>
                <MDBCardText className="text-dark text-center h1">
                  {record.totalWins} - {record.totalLosses} - {record.totalTies}
                </MDBCardText>
                <MDBCardTitle className="text-center">
                  Record
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
        {/* </MDBCol> */}
      </MDBRow>

      <MDBRow className="text-center mt-3">
        <h2 className="h3">
          <MDBCol>{year} Game Records</MDBCol>
        </h2>
      </MDBRow>
      <MDBRow>
        <MDBCard className="shadow-0 border border-gray offset-md-4 col-md-4 my-2">
          <MDBRow className="g-10">
            <MDBCol center>
              <MDBCardBody>
                <MDBCardText className="text-dark text-center h1">
                  {bestBallRecord.totalWins} - {bestBallRecord.totalLosses} - {bestBallRecord.totalTies}
                </MDBCardText>
                <MDBCardTitle className="text-center">
                  Best Ball Record
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
        <MDBCard className="shadow-0 border border-gray offset-md-4 col-md-4 my-2">
          <MDBRow className="g-10">
            <MDBCol center>
              <MDBCardBody>
                <MDBCardText className="text-dark text-center h1">
                  {bestBallRecord.totalWins} - {bestBallRecord.totalLosses} - {bestBallRecord.totalTies}
                </MDBCardText>
                <MDBCardTitle className="text-center">
                  Best Ball Record
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBRow>
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
