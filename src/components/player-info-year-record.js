/* eslint-disable react/prop-types */

import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBRow,
  MDBCol,
  // MDBContainer,
} from "mdb-react-ui-kit"

// import { PlayerInfoMatt } from "../hooks/get-player-info--matt"

const StyledSection = styled.section``

function PlayerInfoThisYearRecord({ year, teamColor, post, playerData }) {
  const getOverallRecord = playerData => {
    if (year === "All Time") {
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
    } else if (year !== undefined && playerData.year[`_${year}`] !== undefined) {
      const years = playerData.year
      const yearProp = years[`_${year}`]
      let totalWins = 0
      let totalLosses = 0
      let totalTies = 0
      const pointsArr = yearProp.points

      pointsArr.map(elem => {
        totalWins += elem.wins
        totalLosses += elem.losses
        totalTies += elem.ties
      })

      return {
        totalWins: totalWins,
        totalLosses: totalLosses,
        totalTies: totalTies,
      }
    } else {
      return {
        totalWins: 0,
        totalLosses: 0,
        totalTies: 0,
      }
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
      totalTies: totalTies,
      totalLosses: totalLosses,
    }
  }

  const record = getOverallRecord(playerData)
  // const bestBallRecord = getGameRecord(playerData, "bestBall")
  // const brambleRecord = getGameRecord(playerData, "bramble")
  // const brambleAltRecord = getGameRecord(playerData, "brambleAlternate")
  // const scrambleRecord = getGameRecord(playerData, "scramble")

  return (
    <StyledSection>
      <MDBRow className="row-cols-1 text-center mt-3">
        <h2 className="h3">
          <MDBCol>{year} BFBH Cup Record</MDBCol>
        </h2>
      </MDBRow>
      <MDBRow>
        <MDBCard className="shadow-0 border border-gray offset-md-1 col-md-10 offset-1 col-10 my-2">
          <MDBRow className="g-10">
            <MDBCol center>
              <MDBCardBody>
                <MDBCardText className="text-dark text-center h1">
                  {record.totalWins} - {record.totalTies} - {record.totalLosses}
                </MDBCardText>
                <MDBCardTitle className="text-center">Record</MDBCardTitle>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBRow>

      {/* <MDBRow className="text-center mt-3">
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
                  {bestBallRecord.totalWins} - {bestBallRecord.totalLosses} -{" "}
                  {bestBallRecord.totalTies}
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
                  {bestBallRecord.totalWins} - {bestBallRecord.totalLosses} -{" "}
                  {bestBallRecord.totalTies}
                </MDBCardText>
                <MDBCardTitle className="text-center">
                  Best Ball Record
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBRow> */}
    </StyledSection>
  )
}

export default PlayerInfoThisYearRecord

export const pageQuery = graphql`
  query PlayerInfoYearRecord($id: String!) {
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
