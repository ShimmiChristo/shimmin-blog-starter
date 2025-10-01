import { graphql } from "gatsby"

export const DerekPlayerPoints = graphql`
  fragment DerekPlayerPoints on PlayersUpdateJson {
    derek {
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
          team
          id
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
