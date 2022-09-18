// import React from "react"
import { graphql } from "gatsby"

export const Dylan = graphql`
  fragment DylanFragment on PlayersUpdateJsonDylan {
    name
    year {
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
      }
    }
  }
`
