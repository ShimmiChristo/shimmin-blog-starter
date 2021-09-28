import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfo = () => {
  const { playersJson } = useStaticQuery(graphql`
    query PlayerInfo {
      playersJson {
        player {
          chris {
            name
            handicap
            team
            course {
              tribute
            }
          }
          two {
            name
            handicap
            team
            course {
              tribute
            }
          }
          three {
            name
            handicap
            team
            course {
              tribute
            }
          }
          four {
            name
            handicap
            team
            course {
              tribute
            }
          }
        }
      }
    }
  `)
  return playersJson
}
