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
              classic1
              classic2
              gaylordGolfClub1
              gaylordGolfClub2
              stoatinBrae1
              stoatinBrae2
              stoneHedgeSouth1
              gullLakeEast1
              gullLakeWest1
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
              stoatinBrae1
              stoatinBrae2
              stoneHedgeSouth1
              gullLakeEast1
              gullLakeWest1
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
              stoatinBrae1
              stoatinBrae2
              stoneHedgeSouth1
              gullLakeEast1
              gullLakeWest1
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
              stoatinBrae1
              stoatinBrae2
              stoneHedgeSouth1
              gullLakeEast1
              gullLakeWest1
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
              stoatinBrae1
              stoatinBrae2
              stoneHedgeSouth1
              gullLakeEast1
              gullLakeWest1
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
              stoatinBrae1
              stoatinBrae2
              stoneHedgeSouth1
              gullLakeEast1
              gullLakeWest1
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
              stoatinBrae1
              stoatinBrae2
              stoneHedgeSouth1
              gullLakeEast1
              gullLakeWest1
            }
          }

          curtis {
            name
            handicap
            team
            course {
              stoatinBrae1
              stoatinBrae2
              stoneHedgeSouth1
              gullLakeEast1
              gullLakeWest1
            }
          }
          jake {
            name
            handicap
            team
            course {
              stoatinBrae1
              stoatinBrae2
              stoneHedgeSouth1
              gullLakeEast1
              gullLakeWest1
            }
          }
          gordon {
            name
            handicap
            team
            course {
              stoatinBrae1
              stoatinBrae2
              stoneHedgeSouth1
              gullLakeEast1
              gullLakeWest1
            }
          }
          cam {
            name
            handicap
            team
            course {
              stoatinBrae1
              stoatinBrae2
              stoneHedgeSouth1
              gullLakeEast1
              gullLakeWest1
            }
          }
          evan {
            name
            handicap
            team
            course {
              stoatinBrae1
              stoatinBrae2
              stoneHedgeSouth1
              gullLakeEast1
              gullLakeWest1
            }
          }

        }
      }
    }
  `)
  return playersJson
}
