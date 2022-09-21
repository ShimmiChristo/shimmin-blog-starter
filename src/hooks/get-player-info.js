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
              stoneHedgeSouth2
              gullLakeEast1
              gullLakeEast2
              gullLakeWest1
              gullLakeWest2
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
              stoneHedgeSouth2
              gullLakeEast1
              gullLakeEast2
              gullLakeWest1
              gullLakeWest2
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
              stoneHedgeSouth2
              gullLakeEast1
              gullLakeEast2
              gullLakeWest1
              gullLakeWest2
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
              stoneHedgeSouth2
              gullLakeEast1
              gullLakeEast2
              gullLakeWest1
              gullLakeWest2
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
              stoneHedgeSouth2
              gullLakeEast1
              gullLakeEast2
              gullLakeWest1
              gullLakeWest2
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
              stoneHedgeSouth2
              gullLakeEast1
              gullLakeEast2
              gullLakeWest1
              gullLakeWest2
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
              stoneHedgeSouth2
              gullLakeEast1
              gullLakeEast2
              gullLakeWest1
              gullLakeWest2
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
              stoneHedgeSouth2
              gullLakeEast1
              gullLakeEast2
              gullLakeWest1
              gullLakeWest2
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
              stoneHedgeSouth2
              gullLakeEast1
              gullLakeEast2
              gullLakeWest1
              gullLakeWest2
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
              stoneHedgeSouth2
              gullLakeEast1
              gullLakeEast2
              gullLakeWest1
              gullLakeWest2
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
              stoneHedgeSouth2
              gullLakeEast1
              gullLakeEast2
              gullLakeWest1
              gullLakeWest2
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
              stoneHedgeSouth2
              gullLakeEast1
              gullLakeEast2
              gullLakeWest1
              gullLakeWest2
            }
          }
        }
      }
    }
  `)
  return playersJson
}
