import { useStaticQuery, graphql } from "gatsby"

export const CourseInfo = () => {
  const { coursesJson } = useStaticQuery(graphql`
    query CourseInfo {
      coursesJson {
        course {
          tribute {
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
