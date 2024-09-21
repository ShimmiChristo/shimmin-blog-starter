// import React from "react"
import { graphql } from "gatsby"

export const Blake = graphql`
  fragment BlakeFragment on PlayersUpdateJsonBlake {
    name
    appearances
    handicap
    year {
      _2024 {
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
          boyneHighlandsArthurHills {
            course
            frontHandicap
            backHandicap
            back
            front
          }
          bayHarborGolfClub {
            frontHandicap
            front
            course
            backHandicap
            back
          }
          boyneHighlandsMoor {
            frontHandicap
            front
            course
            backHandicap
            back
          }
          boyneHighlandsHeather {
            back
            backHandicap
            course
            front
            frontHandicap
          }
        }
        records {
          partners {
            name
            wins
            ties
            losses
          }
          opponents {
            name
            wins
            ties
            losses
          }
        }
      }
    }
  }
`
