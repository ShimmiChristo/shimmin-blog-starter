import { graphql } from "gatsby"

export const BayHarborGolfClubFragment = graphql`
  fragment BayHarborGolfClubFragment on CoursesJsonCourse {
    bayHarborGolfClub {
      name
      link
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
`
