import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfoUpdate = () => {
  const { playersUpdateJson } = useStaticQuery(graphql`
    query PlayerInfoUpdate {
      playersUpdateJson {
        matt {
          name
          year {
            _2021 {
              handicap
              id
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                classic {
                  back
                  backHandicap
                  course
                  frontHandicap
                  front
                  total
                }
                jonesMasterPiece {
                  course
                  total
                }
                gaylordGolfClub {
                  back
                  backHandicap
                  total
                  frontHandicap
                  front
                  course
                }
                tribute {
                  back
                  backHandicap
                  front
                  course
                  total
                  frontHandicap
                }
              }
              team
            }
          }
        }
        chris {
          name
          year {
            _2021 {
              handicap
              id
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                classic {
                  back
                  backHandicap
                  course
                  frontHandicap
                  front
                  total
                }
                jonesMasterPiece {
                  course
                  total
                }
                gaylordGolfClub {
                  back
                  backHandicap
                  total
                  frontHandicap
                  front
                  course
                }
                tribute {
                  back
                  backHandicap
                  front
                  course
                  total
                  frontHandicap
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
