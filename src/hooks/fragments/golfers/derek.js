import { graphql } from "gatsby"

export const derekFragment = graphql`
  fragment DerekPlayerData on PlayersUpdateJsonDerek {
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
            front
            frontTees
            frontGross
            back
            backTees
            backGross
            useForHandicapIndex
            use18Holes
          }
          crookedTree {
            course
            frontHandicap
            front
            back
            backHandicap
            backGross
            useForHandicapIndex
            useBack
            backTees
          }
          bayHarborPreserveLinks {
            course
            frontHandicap
            front
            back
            backHandicap
            frontGross
            backGross
            useForHandicapIndex
            useFront
            frontTees
          }
          boyneHighlandsArthurHills {
            course
            front
            frontHandicap
            back
            backHandicap
            backGross
            useForHandicapIndex
            useBack
            backTees
          }
          boyneHighlandsDonaldRoss {
            course
            frontHandicap
            front
            back
            backHandicap
            backGross
            useForHandicapIndex
            useBack
            backTees
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
            back
            backHandicap
            backGross
            backTees
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
            front
            frontHandicap
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
            backGross
            backTees
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
            backGross
            backTees
            useForHandicapIndex
            useBack
            frontGross
            frontTees
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
            front
            frontHandicap
            back
            backHandicap
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
            id
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
            front
            frontHandicap
            back
            backHandicap
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
