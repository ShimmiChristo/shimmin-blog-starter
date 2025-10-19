import { useStaticQuery, graphql } from "gatsby"

export const PlayerInfoPoints = () => {
  const { playersUpdateJson } = useStaticQuery(graphql`
    query PlayerInfoPoints {
      playersUpdateJson {
        ...BlakePlayerPoints
        ...CamPlayerPoints
        ...ChrisPlayerPoints
        ...CraigPlayerPoints
        ...CurtisPlayerPoints
        ...DanPlayerPoints
        ...DerekPlayerPoints
        ...DylanPlayerPoints
        ...EvanPlayerPoints
        ...GordonPlayerPoints
        ...JakePlayerPoints
        ...MattPlayerPoints
        ...RJPlayerPoints
        ...StephenPlayerPoints
        ...TravisPlayerPoints
      }
    }
  `)
  return playersUpdateJson
}
