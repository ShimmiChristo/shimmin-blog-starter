import { useStaticQuery, graphql } from "gatsby"

export const CourseInfo = () => {
  const { coursesJson } = useStaticQuery(graphql`
    query CourseInfo {
      coursesJson {
        course {
          tribute1 {
            holes {
              handicap
              number
              par
              tees {
                blue
              }
            }
            totals {
              yardage
              par
            }
          }
          tribute2 {
            holes {
              handicap
              number
              par
              tees {
                blue
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
