// import React from "react"
import { graphql } from "gatsby"

export const Cam = graphql`
  fragment CamFragment on PlayersUpdateJsonCam {
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
