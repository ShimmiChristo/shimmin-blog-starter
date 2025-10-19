import { graphql } from "gatsby"

export const StephenPlayerPoints = graphql`
  fragment StephenPlayerPoints on PlayersUpdateJson {
    stephen {
      name
      cupRecord {
        wins
        losses
      }
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
      }
    }
  }
`
