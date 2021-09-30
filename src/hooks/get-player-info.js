import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfo = () => {
  const { playersJson } = useStaticQuery(graphql`
    query PlayerInfo {
      playersJson {
        player {
          matt {
            name
            handicap
            team
            course {
              tribute1
              tribute2
            }
          }
          dylan {
            name
            handicap
            team
            course {
              tribute1
              tribute2
            }
          }
          chris {
            name
            handicap
            team
            course {
              tribute1
              tribute2
            }
          }
          rj {
            name
            handicap
            team
            course {
              tribute1
              tribute2
            }
          }
          derek {
            name
            handicap
            team
            course {
              tribute1
              tribute2
            }
          }
          dan {
            name
            handicap
            team
            course {
              tribute1
              tribute2
            }
          }
          travis {
            name
            handicap
            team
            course {
              tribute1
              tribute2
            }
          }
          craig {
            name
            handicap
            team
            course {
              tribute1
              tribute2
            }
          }
        }
      }
    }
  `)
  return playersJson
}
