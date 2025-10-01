import { graphql } from "gatsby"

export const GordonPlayerPoints = graphql`
  fragment GordonPlayerPoints on PlayersUpdateJson {
    gordon {
      name
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
        }
      }
    }
  }
`
