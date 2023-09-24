// import React from "react"
import { graphql } from "gatsby"

export const Derek = graphql`
  fragment DerekFragment on PlayersUpdateJsonDerek {
    name
    appearances
    handicap
    year {
      _2023 {
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
          boyneHighlandsArthurHills {
            course
            frontHandicap
            backHandicap
            back
            front
          }
          boyneHighlandsDonaldRoss {
            frontHandicap
            front
            course
            backHandicap
            back
          }
          boyneHighlandsMoor {
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
      _2021 {
        id
        captain
        handicap
        team
        points {
          game
          id
          losses
          ties
          wins
        }
        scores {
          tribute {
            frontHandicap
            front
            course
            backHandicap
            back
          }
          jonesMasterPiece {
            course
          }
          gaylordGolfClub {
            frontHandicap
            front
            course
            backHandicap
            back
          }
          classic {
            frontHandicap
            front
            course
            back
            backHandicap
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
      _2022 {
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
          stonehedgeSouth {
            course
            frontHandicap
            backHandicap
            back
            front
          }
          stoatinBrae {
            frontHandicap
            front
            course
            backHandicap
            back
          }
          gullLakeWest {
            frontHandicap
            front
            course
            backHandicap
            back
          }
          gullLakeEast {
            back
            backHandicap
            course
            front
            frontHandicap
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
