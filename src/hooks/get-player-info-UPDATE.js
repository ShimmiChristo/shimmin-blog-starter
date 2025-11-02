import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfoUpdate = () => {
  const { playersUpdateJson } = useStaticQuery(graphql`
    query PlayerInfoUpdate {
      playersUpdateJson {
        blake {
          name
          appearances
          cupRecord {
            wins
            losses
          }
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
          cupRecord {
            wins
            losses
          }
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
          cupRecord {
            wins
            losses
          }
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
                hiddenRiverGolfClub {
                  course
                  frontHandicap
                  front
                  frontTees
                  frontGross
                  back
                  backTees
                  backGross
                  backHandicap
                  useForHandicapIndex
                  use18Holes
                }
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  frontTees
                  frontGross
                  back
                  backTees
                  backGross
                  backHandicap
                  useForHandicapIndex
                  useFront
                  useBack
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
                  frontTees
                  frontGross
                  back
                  backTees
                  backGross
                  backHandicap
                  useForHandicapIndex
                  useBack
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
                hiddenRiverGolfClub {
                  course
                  frontHandicap
                  front
                  frontTees
                  frontGross
                  back
                  backGross
                  backHandicap
                  backTees
                  useForHandicapIndex
                  use18Holes
                }
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
                  frontTees
                  frontGross
                  backGross
                  useForHandicapIndex
                  use18Holes
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
                  front
                  frontHandicap
                  back
                  backGross
                  backHandicap
                  backTees
                  useForHandicapIndex
                  useBack
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
                bayHarborLinksQuarry {
                  course
                  frontHandicap
                  front
                  back
                  backHandicap
                  frontTees
                  frontGross
                  backGross
                  backTees
                  useForHandicapIndex
                  use18Holes
                }
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  frontTees
                  frontGross
                  back
                  backHandicap
                  backGross
                  backTees
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
          cupRecord {
            wins
            losses
          }
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
          cupRecord {
            wins
            losses
          }
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
          cupRecord {
            wins
            losses
          }
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
                hiddenRiverGolfClub {
                  course
                  frontHandicap
                  front
                  frontTees
                  frontGross
                  back
                  backTees
                  backGross
                  backHandicap
                  useForHandicapIndex
                  use18Holes
                }
                bayHarborPreserveLinks {
                  course
                  frontHandicap
                  front
                  frontTees
                  frontGross
                  back
                  backTees
                  backGross
                  backHandicap
                  useForHandicapIndex
                  useFront
                  useBack
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
                  frontTees
                  frontGross
                  back
                  backTees
                  backGross
                  backHandicap
                  useForHandicapIndex
                  useBack
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
                hiddenRiverGolfClub {
                  course
                  frontHandicap
                  front
                  frontTees
                  frontGross
                  back
                  backTees
                  backGross
                  backHandicap
                  useForHandicapIndex
                  use18Holes
                }
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
                  frontGross
                  frontTees
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  use18Holes
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
                  frontGross
                  frontTees
                  back
                  backGross
                  backTees
                  backHandicap
                  useForHandicapIndex
                  useBack
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
                bayHarborLinksQuarry {
                  course
                  frontHandicap
                  front
                  frontGross
                  frontTees
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  use18Holes
                }
                boyneHighlandsArthurHills {
                  course
                  frontHandicap
                  front
                  frontGross
                  frontTees
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  use18Holes
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
          cupRecord {
            wins
            losses
          }
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
          cupRecord {
            wins
            losses
          }
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
                hiddenRiverGolfClub {
                  course
                  front
                  frontHandicap
                  frontGross
                  frontTees
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  use18Holes
                }
                bayHarborPreserveLinks {
                  course
                  front
                  frontHandicap
                  frontGross
                  frontTees
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  useFront
                  useBack
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
                  frontTees
                  frontGross
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  useBack
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
                hiddenRiverGolfClub {
                  course
                  front
                  frontHandicap
                  frontGross
                  frontTees
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  use18Holes
                }
                bayHarborGolfClub {
                  course
                  front
                  frontHandicap
                  frontGross
                  frontTees
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  use18Holes
                }
                boyneHighlandsArthurHills {
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
                  front
                  frontHandicap
                  frontGross
                  frontTees
                  back
                  backGross
                  backTees
                  backHandicap
                  useForHandicapIndex
                  useBack
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
                  front
                  frontHandicap
                  frontGross
                  frontTees
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  use18Holes
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
                  front
                  frontHandicap
                  frontGross
                  frontTees
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  useBack
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
          cupRecord {
            wins
            losses
          }
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
                  front
                  frontHandicap
                  frontGross
                  frontTees
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  useFront
                  useBack
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
                  front
                  frontHandicap
                  frontGross
                  frontTees
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  useBack
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
                hiddenRiverGolfClub {
                  course
                  front
                  frontHandicap
                  frontGross
                  frontTees
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  use18Holes
                }
                boyneHighlandsArthurHills {
                  course
                  front
                  frontHandicap
                  back
                  backHandicap
                }
                bayHarborGolfClub {
                  course
                  frontHandicap
                  front
                  frontGross
                  frontTees
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  use18Holes
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
                  backGross
                  backTees
                  useForHandicapIndex
                  useBack
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
                  front
                  frontHandicap
                  frontGross
                  frontTees
                  back
                  backHandicap
                  backGross
                  backTees
                  useForHandicapIndex
                  use18Holes
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
                  backGross
                  backTees
                  useForHandicapIndex
                  useBack
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
          cupRecord {
            wins
            losses
          }
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
          cupRecord {
            wins
            losses
          }
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
          cupRecord {
            wins
            losses
          }
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
          cupRecord {
            wins
            losses
          }
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
          cupRecord {
            wins
            losses
          }
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
          cupRecord {
            wins
            losses
          }
          handicap
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
