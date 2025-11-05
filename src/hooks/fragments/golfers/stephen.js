import { graphql } from "gatsby"

export const stephenFragment = graphql`
  fragment StephenPlayerData on PlayersUpdateJsonStephen {
    name
    appearances
    cupRecord {
      wins
      losses
    }
    handicap
    year {
      _2025 {
        handicap
        id
        team
        points {
          game
          id
          wins
          ties
          losses
        }
        scores {
          bayHarborPreserveLinks {
            course
            frontHandicap
            front
            back
            backHandicap
          }
          crookedTree {
            course
            frontHandicap
            front
            back
            backHandicap
          }
          boyneHighlandsHeather {
            course
            frontHandicap
            front
            back
            backHandicap
          }
          boyneHighlandsArthurHills {
            course
            frontHandicap
            front
            back
            backHandicap
          }
        }
      }
    }
  }
`
