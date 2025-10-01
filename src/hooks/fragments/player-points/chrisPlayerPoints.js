import { graphql } from "gatsby"

export const ChrisPlayerPoints = graphql`
  fragment ChrisPlayerPoints on PlayersUpdateJson {
    chris {
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
        }
      }
    }
  }
`
