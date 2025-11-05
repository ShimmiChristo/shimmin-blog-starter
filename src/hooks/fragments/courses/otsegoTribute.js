import { graphql } from "gatsby"

export const OtsegoTributeFragment = graphql`
  fragment OtsegoTributeFragment on CoursesJsonCourse {
    tribute1 {
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
    tribute2 {
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
