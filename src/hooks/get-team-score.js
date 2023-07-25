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
            }
            team2 {
              name
              players
              score
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
            }
            team2 {
              name
              players
              score
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
            }
            team2 {
              name
              players
              score
            }
          }
        }
      }
    }
  `)
  return scoreJson
}
