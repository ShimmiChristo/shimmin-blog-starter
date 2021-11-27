import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfoMatt = () => {
  const { playersUpdateJson } = useStaticQuery(graphql`
    query PlayerInfoMatt {
      playersUpdateJson(player: { elemMatch: { name: { eq: "matt" } } }) {
        player {
          name
          years {
            handicap
            team
            year
            scores {
              total
              id
              front
              course
              back
            }
            points {
              wins
              losses
              id
              game
              ties
            }
          }
        }
      }
    }
  `)
  return playersUpdateJson
}
