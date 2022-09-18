// import React from "react"
import { graphql } from "gatsby"

export const Jake = graphql`
  fragment JakeFragment on PlayersUpdateJsonJake {
    name
    year {
      _2022 {
        id
        handicap
        captain
        team
        points {
          wins
          ties
          losses
          id
          game
        }
        scores {
          stonehedgeSouth {
            course
            frontHandicap
            backHandicap
            back
            front
          }
          stoatinBrae {
            frontHandicap
            front
            course
            backHandicap
            back
          }
          gullLakeWest {
            frontHandicap
            front
            course
            backHandicap
            back
          }
          gullLakeEast {
            back
            backHandicap
            course
            front
            frontHandicap
          }
        }
      }
    }
  }
`
