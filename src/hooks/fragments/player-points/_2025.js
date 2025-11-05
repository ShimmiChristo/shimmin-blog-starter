import { graphql } from "gatsby"

export const _2025Fragment = graphql`
  fragment _2025Fragment on PlayersUpdateJsonCamYear_2025 {
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
`
