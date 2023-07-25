import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfoPoints = () => {
  const { playersUpdateJson } = useStaticQuery(graphql`
    query PlayerInfoPoints {
      playersUpdateJson {
        cam {
          name
          handicap
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
          handicap
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
          handicap
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
          handicap
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
          handicap
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
          handicap
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
          handicap
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
          handicap
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
          handicap
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
          handicap
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
          handicap
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
          handicap
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
          handicap
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
