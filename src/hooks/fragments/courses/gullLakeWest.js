import { graphql } from "gatsby"

export const GullLakeWestFragment = graphql`
  fragment GullLakeWestFragment on CoursesJsonCourse {
    gullLakeWest1 {
      name
      link
      holes {
        handicap
        number
        par
        tees {
          green
        }
      }
      totals {
        yardage
        par
      }
    }
    gullLakeWest2 {
      name
      link
      holes {
        handicap
        number
        par
        tees {
          green
        }
      }
      totals {
        yardage
        par
      }
    }
  }
`
