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
            frontGross
            backGross
          }
          bayHarborGolfClub {
            course
            frontHandicap
            front
            back
            backHandicap
            frontGross
            backGross
            useForHandicapIndex
            use18Holes
          }
          boyneHighlandsMoor {
            course
            frontHandicap
            front
            back
            backHandicap
            frontGross
            backGross
          }
          boyneHighlandsHeather {
            course
            frontHandicap
            front
            back
            backHandicap
            frontGross
            backGross
            useForHandicapIndex
            useBack
          }
        }
        captain
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
