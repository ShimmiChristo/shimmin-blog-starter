import { useStaticQuery, graphql } from "gatsby"

export const CourseInfo = () => {
  const { coursesJson } = useStaticQuery(graphql`
    query CourseInfo {
      coursesJson {
        tribute {
          holes {
            handicap
            par
            number
            tees {
              blue
            }
          }
        }
      }
    }
  `)
  return coursesJson
}
