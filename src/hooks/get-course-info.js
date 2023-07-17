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
          gullLakeEast1 {
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
          gullLakeEast2 {
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
          gullLakeWest1 {
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
          gullLakeWest2 {
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
      }
    }
  `)
  return coursesJson
}
