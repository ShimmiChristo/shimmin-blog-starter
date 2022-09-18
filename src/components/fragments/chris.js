// import React from "react"
import { graphql } from "gatsby"

export const Chris = graphql`
  fragment ChrisFragment on PlayersUpdateJsonChris {
    name
    year {
      _2021 {
        id
        captain
        handicap
        team
        points {
          game
          id
          losses
          ties
          wins
        }
        scores {
          tribute {
            frontHandicap
            front
            course
            backHandicap
            back
          }
          jonesMasterPiece {
            course
          }
          gaylordGolfClub {
            frontHandicap
            front
            course
            backHandicap
            back
          }
          classic {
            frontHandicap
            front
            course
            back
            backHandicap
          }
        }
      }
    }
  }
`
