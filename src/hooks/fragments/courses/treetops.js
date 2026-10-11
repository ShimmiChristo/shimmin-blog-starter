import { graphql } from "gatsby"

export const TreetopsCoursesFragment = graphql`
  fragment TreetopsCoursesFragment on CoursesJsonCourse {
    treetopsSignature {
      name
      link
      holes {
        number
        tees {
          black
          blue
          white
          gold
          blackBlue
          blueWhite
          whiteGold
        }
        handicap
        par
      }
      totals {
        tees {
          black {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          blue {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          white {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          gold {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          blackBlue {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          blueWhite {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          whiteGold {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
        }
      }
    }
    treetopsTradition {
      name
      link
      holes {
        number
        tees {
          blackBlue
          blueWhite
          black
          blue
          white
          red
        }
        handicap
        par
      }
      totals {
        tees {
          blackBlue {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          blueWhite {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          black {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          blue {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          white {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          red {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
        }
      }
    }
    treetopsMasterpiece {
      name
      link
      holes {
        number
        tees {
          black
          blue
          white
          gold
          red
          blackBlue
          blueWhite
          whiteGold
        }
        handicap
        par
      }
      totals {
        tees {
          black {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          blue {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          white {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          gold {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          red {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          blackBlue {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          blueWhite {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          whiteGold {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
        }
      }
    }
    treetopsPremier {
      name
      link
      holes {
        number
        tees {
          black
          blue
          white
          gold
          red
          blackBlue
          whiteGold
          blueWhite
        }
        handicap
        par
      }
      totals {
        tees {
          black {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          blue {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          white {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          gold {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          red {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          blackBlue {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          whiteGold {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
          blueWhite {
            out { yardage par index slope }
            in { yardage par index slope }
            total { yardage par index slope }
          }
        }
      }
    }
  }
`
