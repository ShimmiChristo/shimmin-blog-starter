import { useStaticQuery, graphql } from "gatsby"

export const CourseInfo2023 = () => {
  const { coursesJson } = useStaticQuery(graphql`
    query CourseInfo2023 {
      coursesJson {
        course {
          boyneHighlandsArthurHills {
            name
            link
            holes {
              number
              tees {
                purple
              }
              handicap
              par
            }
            totals {
              tees {
                purple {
                  out {
                    yardage
                    par
                    index
                    slope
                  }
                  in {
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
          }
        }
      }
    }
  `)
  return coursesJson
}
