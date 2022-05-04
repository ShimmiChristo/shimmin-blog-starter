import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfoMatt = year => {
  const { playersUpdateJson } = useStaticQuery(graphql`
    query PlayerInfoMatt {
      playersUpdateJson(
        player: { matt: { years: { elemMatch: { year: { eq: 2021 } } } } }
      ) {
        player {
          matt {
            name
            years {
              captain
              handicap
              year
              team
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
                  course
                  total
                }
                gaylordGolfClub {
                  frontHandicap
                  front
                  total
                  course
                  backHandicap
                  back
                }
                classic {
                  total
                  frontHandicap
                  front
                  course
                  backHandicap
                  back
                }
              }
              points {
                wins
                ties
                losses
                id
                game
              }
            }
          }
        }
      }
    }
  `)
  return playersUpdateJson
}
