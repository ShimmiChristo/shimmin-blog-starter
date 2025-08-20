import { graphql } from "gatsby"

export const BoyneHighlandsDonaldRossFragment = graphql`
  fragment BoyneHighlandsDonaldRossFragment on CoursesJsonCourse {
    boyneHighlandsDonaldRoss {
      name
      link
      holes {
        number
        tees {
          purple
          orange
          blue
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
`
