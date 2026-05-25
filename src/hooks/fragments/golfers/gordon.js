import { graphql } from "gatsby"

export const gordonFragment = graphql`
  fragment GordonPlayerData on PlayersUpdateJsonGordon {
    name
    appearances
    cupRecord {
      wins
      losses
    }
    handicap
    year {
     _2026 {
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
          crookedTree {
            course
            frontHandicap
            front
            back
            backHandicap
          }
          bayHarborPreserveLinks {
            course
            frontHandicap
            front
            back
            backHandicap
          }
          boyneHighlandsArthurHills {
            course
            front
            frontHandicap
            back
            backHandicap
          }
          boyneHighlandsDonaldRoss {
            course
            frontHandicap
            front
            back
            backHandicap
          }
        }
      }
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
            front
            frontHandicap
            frontGross
            frontTees
            back
            backHandicap
            backGross
            backTees
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
            front
            frontHandicap
            frontGross
            frontTees
            back
            backHandicap
            backGross
            backTees
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
            front
            frontGross
            frontTees
            frontHandicap
            back
            backHandicap
            backGross
            backTees
            useForHandicapIndex
            use18Holes
          }
          bayHarborGolfClub {
            course
            front
            frontGross
            frontTees
            frontHandicap
            back
            backHandicap
            backGross
            backTees
            useForHandicapIndex
            use18Holes
          }
          boyneHighlandsArthurHills {
            course
            front
            frontHandicap
            back
            backHandicap
          }
          boyneHighlandsMoor {
            course
            front
            frontHandicap
            back
            backHandicap
          }
          boyneHighlandsHeather {
            course
            front
            frontHandicap
            frontGross
            frontTees
            back
            backHandicap
            backGross
            backTees
            useForHandicapIndex
            useBack
          }
        }
      }
      _2022 {
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
          stoatinBrae {
            back
            backHandicap
            course
            frontHandicap
            front
          }
          stonehedgeSouth {
            course
          }
          gullLakeEast {
            back
            backHandicap
            frontHandicap
            front
            course
          }
          gullLakeWest {
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
