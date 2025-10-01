import { graphql } from "gatsby"

export const CamPlayerPoints = graphql`
  fragment CamPlayerPoints on PlayersUpdateJson {
    cam {
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
      }
    }
  }
`
