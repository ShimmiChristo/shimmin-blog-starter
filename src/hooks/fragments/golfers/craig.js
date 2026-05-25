import { graphql } from "gatsby"

export const craigFragment = graphql`
  fragment CraigPlayerData on PlayersUpdateJsonCraig {
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
            frontHandicap
            frontGross
            frontTees
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
            frontHandicap
            frontGross
            frontTees
            back
            backHandicap
            backGross
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
            backHandicap
            useForHandicapIndex
            useFront
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
            frontHandicap
            back
            backHandicap
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
        team
        id
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
