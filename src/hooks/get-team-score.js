import { useStaticQuery, graphql } from "gatsby"

export const ScoreInfo = () => {
  const { scoreJson } = useStaticQuery(graphql`
    query ScoreInfo {
      scoreJson {
        _2023 {
          teams {
            team1 {
              name
              players
              score
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
              points {
                id
                game
                wins
                ties
                losses
              }
            }
          }
          year
          date
          winner
          location
        }
        _2022 {
          teams {
            team1 {
              name
              players
              score
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
              points {
                id
                game
                wins
                ties
                losses
              }
            }
          }
          year
          date
          winner
          location
        }
        _2021 {
          teams {
            team1 {
              name
              players
              score
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
    }
  `)
  return scoreJson
}
