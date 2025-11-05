import { graphql } from "gatsby"

export const GullLakeEastFragment = graphql`
  fragment GullLakeEastFragment on CoursesJsonCourse {
    gullLakeEast1 {
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
    gullLakeEast2 {
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
