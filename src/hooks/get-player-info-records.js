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
                  name
                  wins
                  ties
                  losses
                }
                opponents {
                  name
                  wins
                  ties
                  losses
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
                  name
                  wins
                  ties
                  losses
                }
                opponents {
                  name
                  wins
                  ties
                  losses
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
                  name
                  wins
                  ties
                  losses
                }
                opponents {
                  name
                  wins
                  ties
                  losses
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
                  name
                  wins
                  ties
                  losses
                }
                opponents {
                  name
                  wins
                  ties
                  losses
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
                  name
                  wins
                  ties
                  losses
                }
                opponents {
                  name
                  wins
                  ties
                  losses
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
                  name
                  wins
                  ties
                  losses
                }
                opponents {
                  name
                  wins
                  ties
                  losses
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
                  name
                  wins
                  ties
                  losses
                }
                opponents {
                  name
                  wins
                  ties
                  losses
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
                  name
                  wins
                  ties
                  losses
                }
                opponents {
                  name
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
  `)
  return playersUpdateJson
}
