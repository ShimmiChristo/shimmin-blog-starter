import { graphql } from "gatsby"

export const chrisFragment = graphql`
  fragment ChrisPlayerData on PlayersUpdateJsonChris {
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
          hiddenRiverGolfClub {
            course
            frontHandicap
            front
            frontTees
            frontGross
            back
            backTees
            backGross
            backHandicap
            useForHandicapIndex
            use18Holes
          }
          bayHarborPreserveLinks {
            course
            frontHandicap
            front
            frontTees
            frontGross
            back
            backTees
            backGross
            backHandicap
            useForHandicapIndex
            useFront
            useBack
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
            frontTees
            frontGross
            back
            backTees
            backGross
            backHandicap
            useForHandicapIndex
            useBack
          }
        }
      }
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
          hiddenRiverGolfClub {
            course
            frontHandicap
            front
            frontTees
            frontGross
            back
            backGross
            backHandicap
            backTees
            useForHandicapIndex
            use18Holes
          }
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
            frontTees
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
          }
          boyneHighlandsHeather {
            course
            front
            frontHandicap
            back
            backGross
            backHandicap
            backTees
            useForHandicapIndex
            useBack
          }
        }
      }
      _2023 {
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
          bayHarborLinksQuarry {
            course
            frontHandicap
            front
            back
            backHandicap
            frontTees
            frontGross
            backGross
            backTees
            useForHandicapIndex
            use18Holes
          }
          boyneHighlandsArthurHills {
            course
            frontHandicap
            front
            frontTees
            frontGross
            back
            backHandicap
            backGross
            backTees
          }
          boyneHighlandsDonaldRoss {
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
      _2021 {
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
          classic {
            back
            backHandicap
            course
            frontHandicap
            front
          }
          jonesMasterPiece {
            course
          }
          gaylordGolfClub {
            back
            backHandicap
            frontHandicap
            front
            course
          }
          tribute {
            back
            backHandicap
            front
            course
            frontHandicap
          }
        }
      }
    }
  }
`
