import { graphql } from "gatsby"

export const HiddenRiverGolfFragment = graphql`
  fragment HiddenRiverGolfFragment on CoursesJsonCourse {
    hiddenRiverGolfClub {
      name
      link
      holes {
        number
        tees {
          blue
          blueWhite
          white
        }
        handicap
        par
      }
      totals {
        tees {
          blue {
            out {
              yardage
              par
              index
              slope
            }
            in {
              yardage
              par
              index
              slope
            }
            total {
              yardage
              par
              index
              slope
            }
          }
          blueWhite {
            out {
              yardage
              par
              index
              slope
            }
            in {
              yardage
              par
              index
              slope
            }
            total {
              yardage
              par
              index
              slope
            }
          }
          white {
            out {
              yardage
              par
              index
              slope
            }
            in {
              yardage
              par
              index
              slope
            }
            total {
              yardage
              par
              index
              slope
            }
          }
        }
      }
      _2025 {
        holes {
          number
          tees {
            blue
            blueWhite
            white
          }
          handicap
          par
        }
        totals {
          tees {
            blue {
              out {
                yardage
                par
                index
                slope
              }
              in {
                yardage
                par
                index
                slope
              }
              total {
                yardage
                par
                index
                slope
              }
            }
            blueWhite {
              out {
                yardage
                par
                index
                slope
              }
              in {
                yardage
                par
                index
                slope
              }
              total {
                yardage
                par
                index
                slope
              }
            }
            white {
              out {
                yardage
                par
                index
                slope
              }
              in {
                yardage
                par
                index
                slope
              }
              total {
                yardage
                par
                index
                slope
              }
            }
          }
        }
      }
      _2024 {
        holes {
          number
          tees {
            blue
            blueWhite
            white
          }
          handicap
          par
        }
        totals {
          tees {
            blue {
              out {
                yardage
                par
                index
                slope
              }
              in {
                yardage
                par
                index
                slope
              }
              total {
                yardage
                par
                index
                slope
              }
            }
            blueWhite {
              out {
                yardage
                par
                index
                slope
              }
              in {
                yardage
                par
                index
                slope
              }
              total {
                yardage
                par
                index
                slope
              }
            }
            white {
              out {
                yardage
                par
                index
                slope
              }
              in {
                yardage
                par
                index
                slope
              }
              total {
                yardage
                par
                index
                slope
              }
            }
          }
        }
      }
    }
  }
`
