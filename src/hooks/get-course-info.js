import { useStaticQuery, graphql } from "gatsby"

export const CourseInfo = () => {
  const { coursesJson } = useStaticQuery(graphql`
    query CourseInfo {
      coursesJson {
        course {
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
      }
    }
  `)
  return coursesJson
}
