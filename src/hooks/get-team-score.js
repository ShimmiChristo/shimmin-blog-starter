import { useStaticQuery, graphql } from "gatsby"

export const ScoreInfo = () => {
  const { scoreJson } = useStaticQuery(graphql`
    query ScoreInfo {
      scoreJson {
        _2024 {
          teams {
            team1 {
              name
              players
              score
              scores {
                dayone
                daytwo
                total
                round1
                round2
                round3
                round4
                round5
                round6
                round7
                round8
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
                round1
                round2
                round3
                round4
                round5
                round6
                round7
                round8
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
          year
          date
          winner
          location
        }
        _2023 {
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
    }
  `)
  return scoreJson
}
