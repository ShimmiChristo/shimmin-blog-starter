import { graphql } from "gatsby"

export const DanPlayerPoints = graphql`
  fragment DanPlayerPoints on PlayersUpdateJson {
    dan {
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
      }
    }
  }
`
