import { graphql } from "gatsby"

export const CrookedTreeFragment = graphql`
  fragment CrookedTreeFragment on CoursesJsonCourse {
    crookedTree {
      name
      link
      holes {
        number
        tees {
          brown
          purple
          orange
        }
        handicap
        par
      }
      totals {
        tees {
          brown {
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
          purple {
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
          orange {
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
            purple
            orange
          }
          handicap
          par
        }
        totals {
          tees {
            purple {
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
            orange {
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
