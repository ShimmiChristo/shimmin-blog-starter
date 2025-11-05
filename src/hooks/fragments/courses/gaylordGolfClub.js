import { graphql } from "gatsby"

export const GaylordGolfClubFragment = graphql`
  fragment GaylordGolfClubFragment on CoursesJsonCourse {
    gaylordGolfClub1 {
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
    gaylordGolfClub2 {
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
