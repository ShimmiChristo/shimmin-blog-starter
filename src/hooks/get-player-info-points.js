import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfoPoints = () => {
  const { playersUpdateJson } = useStaticQuery(graphql`
    query PlayerInfoPoints {
      playersUpdateJson {
        cam {
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
            }
          }
        }
        chris {
          name
          year {
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
            }
          }
        }
        craig {
          name
          year {
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
            }
          }
        }
        curtis {
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
            }
          }
        }
        dan {
          name
          year {
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
            }
          }
        }
        derek {
          name
          year {
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
            }
          }
        }
        dylan {
          name
          year {
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
            }
          }
        }
        evan {
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
            }
          }
        } 
        gordon {
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
            }
          }
        }
        matt {
          name
          year {
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
            }
          }
        }
        rj {
          name
          year {
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
            }
          }
        }
        travis {
          name
          year {
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
            }
          }
        }
      }
    }
  `)
  return playersUpdateJson
}
