import { graphql } from "gatsby"

export const BlakePlayerPoints = graphql`
  fragment BlakePlayerPoints on PlayersUpdateJson {
    blake {
      name
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
        }
      }
    }
  }
`
