import { graphql } from "gatsby"

export const TravisPlayerPoints = graphql`
  fragment TravisPlayerPoints on PlayersUpdateJson {
    travis {
      name
      cupRecord {
        wins
        losses
      }
      handicap
      year {
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
