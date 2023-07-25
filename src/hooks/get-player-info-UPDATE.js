import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfoUpdate = () => {
  const { playersUpdateJson } = useStaticQuery(graphql`
    query PlayerInfoUpdate {
      playersUpdateJson {
        cam {
          name
          year {
            _2023 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsDonaldRoss {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsMoor {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsHeather {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2022 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                stoatinBrae {
                  back
                  backHandicap
                  course
                  frontHandicap
                  front
                }
                stonehedgeSouth {
                  course
                }
                gullLakeEast {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                gullLakeWest {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
          }
        }
        chris {
          name
          year {
            _2023 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsDonaldRoss {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsMoor {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsHeather {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2021 {
              handicap
              id
              team
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
                }
                jonesMasterPiece {
                  course
                }
                gaylordGolfClub {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                tribute {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
          }
        }
        craig {
          name
          year {
            _2023 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsDonaldRoss {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsMoor {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsHeather {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2022 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                stoatinBrae {
                  back
                  backHandicap
                  course
                  frontHandicap
                  front
                }
                stonehedgeSouth {
                  course
                }
                gullLakeEast {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                gullLakeWest {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
            _2021 {
              handicap
              team
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
                }
                jonesMasterPiece {
                  course
                }
                gaylordGolfClub {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                tribute {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
          }
        }
        curtis {
          name
          year {
            _2023 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsDonaldRoss {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsMoor {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsHeather {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2022 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                stoatinBrae {
                  back
                  backHandicap
                  course
                  frontHandicap
                  front
                }
                stonehedgeSouth {
                  course
                }
                gullLakeEast {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                gullLakeWest {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
          }
        }
        dan {
          name
          year {
            _2023 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsDonaldRoss {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsMoor {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsHeather {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2022 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                stoatinBrae {
                  back
                  backHandicap
                  course
                  frontHandicap
                  front
                }
                stonehedgeSouth {
                  course
                }
                gullLakeEast {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                gullLakeWest {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
            _2021 {
              handicap
              team
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
                }
                jonesMasterPiece {
                  course
                }
                gaylordGolfClub {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                tribute {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
          }
        }
        derek {
          name
          year {
            _2023 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsDonaldRoss {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsMoor {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsHeather {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2022 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                stoatinBrae {
                  back
                  backHandicap
                  course
                  frontHandicap
                  front
                }
                stonehedgeSouth {
                  course
                }
                gullLakeEast {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                gullLakeWest {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
            _2021 {
              handicap
              team
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
                }
                jonesMasterPiece {
                  course
                }
                gaylordGolfClub {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                tribute {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
          }
        }
        dylan {
          name
          year {
            _2023 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsDonaldRoss {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsMoor {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsHeather {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2022 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                stoatinBrae {
                  back
                  backHandicap
                  course
                  frontHandicap
                  front
                }
                stonehedgeSouth {
                  course
                }
                gullLakeEast {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                gullLakeWest {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
            _2021 {
              handicap
              id
              team
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
                }
                jonesMasterPiece {
                  course
                }
                gaylordGolfClub {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                tribute {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
          }
        }
        evan {
          name
          year {
            _2023 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsDonaldRoss {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsMoor {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsHeather {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2022 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                stoatinBrae {
                  back
                  backHandicap
                  course
                  frontHandicap
                  front
                }
                stonehedgeSouth {
                  course
                }
                gullLakeEast {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                gullLakeWest {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
          }
        }
        gordon {
          name
          year {
            _2023 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsDonaldRoss {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsMoor {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsHeather {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2022 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                stoatinBrae {
                  back
                  backHandicap
                  course
                  frontHandicap
                  front
                }
                stonehedgeSouth {
                  course
                }
                gullLakeEast {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                gullLakeWest {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
          }
        }
        jake {
          name
          year {
            _2022 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                stoatinBrae {
                  back
                  backHandicap
                  course
                  frontHandicap
                  front
                }
                stonehedgeSouth {
                  course
                }
                gullLakeEast {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                gullLakeWest {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
          }
        }
        matt {
          name
          year {
            _2023 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsDonaldRoss {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsMoor {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsHeather {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2022 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                stoatinBrae {
                  back
                  backHandicap
                  course
                  frontHandicap
                  front
                }
                stonehedgeSouth {
                  course
                }
                gullLakeEast {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                gullLakeWest {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
            _2021 {
              handicap
              id
              team
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
                }
                jonesMasterPiece {
                  course
                }
                gaylordGolfClub {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                tribute {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
          }
        }
        rj {
          name
          year {
            _2023 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsDonaldRoss {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsMoor {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsHeather {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2022 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                stoatinBrae {
                  back
                  backHandicap
                  course
                  frontHandicap
                  front
                }
                stonehedgeSouth {
                  course
                }
                gullLakeEast {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                gullLakeWest {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
            _2021 {
              handicap
              id
              team
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
                }
                jonesMasterPiece {
                  course
                }
                gaylordGolfClub {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                tribute {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
          }
        }
        travis {
          name
          year {
            _2023 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsDonaldRoss {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsMoor {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                boyneHighlandsHeather {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2022 {
              handicap
              id
              team
              points {
                game
                id
                wins
                ties
                losses
              }
              scores {
                stoatinBrae {
                  back
                  backHandicap
                  course
                  frontHandicap
                  front
                }
                stonehedgeSouth {
                  course
                }
                gullLakeEast {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                gullLakeWest {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
            _2021 {
              handicap
              team
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
                }
                jonesMasterPiece {
                  course
                }
                gaylordGolfClub {
                  back
                  backHandicap
                  frontHandicap
                  front
                  course
                }
                tribute {
                  back
                  backHandicap
                  front
                  course
                  frontHandicap
                }
              }
            }
          }
        }
      }
    }
  `)
  return playersUpdateJson
}
