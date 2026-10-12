import { graphql } from "gatsby"

export const camFragment = graphql`
  fragment CamPlayerData on PlayersUpdateJsonCam {
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
            useForHandicapIndex
            useBack
            backGross
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
          }
          boyneHighlandsArthurHills {
            course
            frontHandicap
            front
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
        stats {
          gamesPlayed
          winPercentage
          pointsPerGame
          points
          wins
          ties
          losses
          grossPars
          netPars
          grossBirdies
          netBirdies
          grossEagles
          netEagles
          grossHolesInOne
          netHolesInOne
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
            backHandicap
            useForHandicapIndex
            useFront
            backGross
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
            use18Holes
          }
          boyneHighlandsDonaldRoss {
            course
            frontHandicap
            front
            back
            backHandicap
            frontGross
            backGross
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
            front
            frontHandicap
            frontGross
            back
            backHandicap
            backGross
            backTees
            useForHandicapIndex
            useBack
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
            frontGross
            backGross
          }
          stonehedgeSouth {
            course
            front
            frontGross
            frontHandicap
            back
            backGross
            backHandicap
          }
          gullLakeEast {
            back
            backHandicap
            frontHandicap
            front
            course
            frontGross
            backGross
          }
          gullLakeWest {
            back
            backHandicap
            front
            course
            frontHandicap
            frontGross
            backGross
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
