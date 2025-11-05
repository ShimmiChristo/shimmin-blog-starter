import { graphql } from "gatsby"

export const BoyneHighlandsMoorFragment = graphql`
  fragment BoyneHighlandsMoorFragment on CoursesJsonCourse {
    boyneHighlandsMoor {
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
        }
      }
    }
  }
`
