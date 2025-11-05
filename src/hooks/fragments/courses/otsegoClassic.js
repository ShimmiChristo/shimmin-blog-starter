import { graphql } from "gatsby"

export const OtsegoClassicFragment = graphql`
  fragment OtsegoClassicFragment on CoursesJsonCourse {
    classic1 {
      name
      link
      holes {
        handicap
        number
        par
        tees {
          middle
        }
      }
      totals {
        yardage
        par
      }
    }
    classic2 {
      name
      link
      holes {
        handicap
        number
        par
        tees {
          middle
        }
      }
      totals {
        yardage
        par
      }
    }
  }
`
