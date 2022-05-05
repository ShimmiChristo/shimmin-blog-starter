import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfoMatt = (player, year) => {
  console.log("player from component - ", player)
  console.log("year from component - ", year)
  const { playersUpdateJson } = useStaticQuery(graphql`
    query PlayerInfoMatt {
      playersUpdateJson {
        matt {
          name
          year {
            _2021 {
              year
              points {
                game
                id
                losses
                ties
                wins
              }
              captain
              handicap
              scores {
                tribute {
                  total
                  frontHandicap
                  front
                  course
                  backHandicap
                  back
                }
                jonesMasterPiece {
                  total
                  course
                }
                gaylordGolfClub {
                  total
                  frontHandicap
                  front
                  course
                  backHandicap
                  back
                }
                classic {
                  total
                  frontHandicap
                  front
                  course
                  back
                  backHandicap
                }
              }
              team
            }
          }
        }
      }
    }
  `)
  return playersUpdateJson
}
