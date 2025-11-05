import { graphql } from "gatsby"

export const rjFragment = graphql`
  fragment RjPlayerData on PlayersUpdateJsonRj {
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
            front
            frontGross
            frontTees
            frontHandicap
            back
            backGross
            backTees
            backHandicap
            useForHandicapIndex
            use18Holes
          }
          bayHarborPreserveLinks {
            course
            front
            frontGross
            frontTees
            frontHandicap
            back
            backGross
            backTees
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
            front
            frontGross
            frontTees
            frontHandicap
            back
            backGross
            backTees
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
            front
            frontGross
            frontTees
            frontHandicap
            back
            backGross
            backTees
            backHandicap
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
            backGross
            backTees
            backHandicap
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
            frontGross
            frontTees
            frontHandicap
            back
            backGross
            backTees
            backHandicap
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
            front
            frontGross
            frontTees
            frontHandicap
            back
            backGross
            backTees
            backHandicap
            useForHandicapIndex
            use18Holes
          }
          boyneHighlandsArthurHills {
            course
            front
            frontGross
            frontTees
            frontHandicap
            back
            backGross
            backTees
            backHandicap
            useForHandicapIndex
            useBack
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
            front
            frontGross
            frontTees
            frontHandicap
            back
            backGross
            backTees
            backHandicap
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
