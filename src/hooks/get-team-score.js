import { useStaticQuery, graphql } from "gatsby"

export const ScoreInfo = () => {
  const { scoreJson } = useStaticQuery(graphql`
    query ScoreInfo {
      scoreJson {
        ...ScoreWithRoundsFragment
        ...ScoreWithoutRoundsFragment
      }
    }
  `)
  return scoreJson
}
