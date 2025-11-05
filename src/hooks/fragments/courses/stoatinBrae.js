import { graphql } from "gatsby"

export const StoatinBraeFragment = graphql`
  fragment StoatinBraeFragment on CoursesJsonCourse {
    stoatinBrae1 {
      name
      link
      holes {
        handicap
        number
        par
        tees {
          black
        }
      }
      totals {
        yardage
        par
      }
    }
    stoatinBrae2 {
      name
      link
      holes {
        handicap
        number
        par
        tees {
          black
        }
      }
      totals {
        yardage
        par
      }
    }
    stoatinBrae {
      name
      link
      holes {
        number
        tees {
          black
        }
        handicap
        par
      }
      totals {
        front {
          yardage
          par
          index
          slope
        }
        back {
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
`
