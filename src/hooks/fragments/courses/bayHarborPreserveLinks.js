import { graphql } from "gatsby"

export const BayHarborPreserveLinksFragment = graphql`
  fragment BayHarborPreserveLinksFragment on CoursesJsonCourse {
    bayHarborPreserveLinks {
      name
      link
      holes {
        number
        tees {
          purple
          orange
          brown
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
            brown
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
      }
    }
  }
`
