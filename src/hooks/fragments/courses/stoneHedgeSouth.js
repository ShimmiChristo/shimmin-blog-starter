import { graphql } from "gatsby"

export const StoneHedgeSouthFragment = graphql`
  fragment StoneHedgeSouthFragment on CoursesJsonCourse {
    stoneHedgeSouth1 {
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
    stoneHedgeSouth2 {
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
