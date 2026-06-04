// import React from "react"
import { graphql } from "gatsby"

export const Stephen = graphql`
  fragment StephenFragment on PlayersUpdateJsonStephen {
    name
    appearances
    handicap
    cupRecord {
      wins
      losses
    }
    year {
      _2025 {
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
          bayHarborPreserveLinks {
            frontHandicap
            front
            course
            backHandicap
            back
          }
          crookedTree {
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
          boyneHighlandsArthurHills {
            course
            frontHandicap
            backHandicap
            back
            front
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
