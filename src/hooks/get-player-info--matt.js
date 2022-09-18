import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfoMatt = (player, year) => {
  // console.log("player from component - ", player)
  // console.log("year from component - ", year)
  const { playersUpdateJson } = useStaticQuery(graphql`
    query PlayerInfoMatt {
      playersUpdateJson {
        matt {
          name
          year {
            _2021 {
              id
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
                  frontHandicap
                  front
                  course
                  backHandicap
                  back
                }
                jonesMasterPiece {
                  course
                }
                gaylordGolfClub {
                  frontHandicap
                  front
                  course
                  backHandicap
                  back
                }
                classic {
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
