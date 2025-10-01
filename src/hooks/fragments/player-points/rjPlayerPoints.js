import { graphql } from "gatsby"

export const RJPlayerPoints = graphql`
  fragment RJPlayerPoints on PlayersUpdateJson {
    rj {
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
