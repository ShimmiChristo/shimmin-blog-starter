import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfoUpdate = () => {
  const { playersUpdateJson } = useStaticQuery(graphql`
    query PlayerInfoUpdate {
      playersUpdateJson {
        blake {
          name
          appearances
          handicap
          year {
            _2024 {
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
                bayHarborGolfClub {
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
          }
        }
        cam {
          name
          appearances
          handicap
          year {
            _2025 {
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
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                crookedTree {
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
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
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
          appearances
          handicap
          year {
            _2025 {
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
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                crookedTree {
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
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2024 {
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
                bayHarborGolfClub {
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
          appearances
          handicap
          year {
            _2025 {
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
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                crookedTree {
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
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2024 {
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
                bayHarborGolfClub {
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
          appearances
          handicap
          year {
            _2025 {
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
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                crookedTree {
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
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2024 {
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
                bayHarborGolfClub {
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
          appearances
          handicap
          year {
            _2025 {
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
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                crookedTree {
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
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2024 {
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
                bayHarborGolfClub {
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
          appearances
          handicap
          year {
            _2025 {
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
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                crookedTree {
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
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2024 {
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
                bayHarborGolfClub {
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
          appearances
          handicap
          year {
            _2025 {
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
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                crookedTree {
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
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2024 {
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
                bayHarborGolfClub {
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
          appearances
          handicap
          year {
            _2025 {
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
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                crookedTree {
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
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2024 {
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
                bayHarborGolfClub {
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
          appearances
          handicap
          year {
            _2025 {
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
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                crookedTree {
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
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2024 {
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
                bayHarborGolfClub {
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
          appearances
          handicap
          year {
            _2024 {
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
                bayHarborGolfClub {
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
        matt {
          name
          appearances
          handicap
          year {
            _2025 {
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
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                crookedTree {
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
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2024 {
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
                bayHarborGolfClub {
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
          appearances
          handicap
          year {
            _2025 {
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
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                crookedTree {
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
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
            _2024 {
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
                bayHarborGolfClub {
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
        stephen {
          name
          appearances
          handicap
          year {
            _2025 {
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
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                crookedTree {
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
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
          }
        }
        stephen {
          name
          appearances
          handicap
          year {
            _2025 {
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
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                crookedTree {
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
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
          }
        }
        travis {
          name
          appearances
          handicap
          year {
            _2025 {
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
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
                crookedTree {
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
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                }
              }
            }
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
