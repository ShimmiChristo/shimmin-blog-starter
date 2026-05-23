import { graphql } from "gatsby"

export const ScoreWithoutRoundsFragment = graphql`
  fragment ScoreWithoutRoundsFragment on ScoreJson {
    _2021 {
      teams {
        team1 {
          name
          players
          score
          scores {
            dayone
            daytwo
            total
          }
          points {
            id
            game
            wins
            ties
            losses
          }
        }
        team2 {
          name
          players
          score
          scores {
            dayone
            daytwo
            total
          }
          points {
            id
            game
            wins
            ties
            losses
          }
        }
      }
    }
  }
`
