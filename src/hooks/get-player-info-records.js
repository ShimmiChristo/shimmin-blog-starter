import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfoRecords = () => {
  const { playersUpdateJson } = useStaticQuery(graphql`
    query PlayerInfoRecords {
      playersUpdateJson {
        matt {
          name
          year {
            _2021 {
              handicap
              id
              team
              records {
                partners {
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
                opponents {
                  singles {
                    losses
                    ties
                    wins
                  }
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
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
              records {
                partners {
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
                opponents {
                  singles {
                    losses
                    ties
                    wins
                  }
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
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
              records {
                partners {
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
                opponents {
                  singles {
                    losses
                    ties
                    wins
                  }
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
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
              records {
                partners {
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
                opponents {
                  singles {
                    losses
                    ties
                    wins
                  }
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
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
              records {
                partners {
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
                opponents {
                  singles {
                    losses
                    ties
                    wins
                  }
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
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
              records {
                partners {
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
                opponents {
                  singles {
                    losses
                    ties
                    wins
                  }
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
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
              records {
                partners {
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
                opponents {
                  singles {
                    losses
                    ties
                    wins
                  }
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
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
              records {
                partners {
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
                }
                opponents {
                  singles {
                    losses
                    ties
                    wins
                  }
                  scramble {
                    wins
                    ties
                    losses
                  }
                  name
                  brambleAlternate {
                    wins
                    ties
                    losses
                  }
                  bramble {
                    wins
                    ties
                    losses
                  }
                  bestBall {
                    wins
                    ties
                    losses
                  }
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
