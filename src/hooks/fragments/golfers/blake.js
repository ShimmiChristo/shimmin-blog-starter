import { graphql } from "gatsby"

export const blakeFragment = graphql`
  fragment BlakePlayerData on PlayersUpdateJsonBlake {
    name
    appearances
    cupRecord {
      wins
      losses
    }
    handicap
    year {
      _2024 {
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
          boyneHighlandsArthurHills {
            course
            frontHandicap
            front
            back
            backHandicap
          }
          bayHarborGolfClub {
            course
            frontHandicap
            front
            back
            backHandicap
          }
          boyneHighlandsMoor {
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
        }
      }
    }
  }
`
