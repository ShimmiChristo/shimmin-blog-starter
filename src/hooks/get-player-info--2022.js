import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfo2022 = () => {
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
              classic1
              classic2
              gaylordGolfClub1
              gaylordGolfClub2
            }
          }
          dylan {
            name
            handicap
            team
            course {
              tribute1
              tribute2
              classic1
              classic2
              gaylordGolfClub1
              gaylordGolfClub2
            }
          }
          chris {
            name
            handicap
            team
            course {
              tribute1
              tribute2
              classic1
              classic2
              gaylordGolfClub1
              gaylordGolfClub2
            }
          }
          rj {
            name
            handicap
            team
            course {
              tribute1
              tribute2
              classic1
              classic2
              gaylordGolfClub1
              gaylordGolfClub2
            }
          }
          derek {
            name
            handicap
            team
            course {
              tribute1
              tribute2
              classic1
              classic2
              gaylordGolfClub1
              gaylordGolfClub2
            }
          }
          dan {
            name
            handicap
            team
            course {
              tribute1
              tribute2
              classic1
              classic2
              gaylordGolfClub1
              gaylordGolfClub2
            }
          }
          travis {
            name
            handicap
            team
            course {
              tribute1
              tribute2
              classic1
              classic2
              gaylordGolfClub1
              gaylordGolfClub2
            }
          }
          craig {
            name
            handicap
            team
            course {
              tribute1
              tribute2
              classic1
              classic2
              gaylordGolfClub1
              gaylordGolfClub2
            }
          }
        }
      }
    }
  `)
  return playersJson
}
