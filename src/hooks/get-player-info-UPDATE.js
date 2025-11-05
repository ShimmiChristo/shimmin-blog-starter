import { useStaticQuery, graphql } from "gatsby"
// import { chrisFragment } from "../fragments/golfers/chris"
import "./fragments/golfers/chris"
import "./fragments/golfers/blake"
import "./fragments/golfers/cam"
import "./fragments/golfers/craig"
import "./fragments/golfers/curtis"
import "./fragments/golfers/dan"
import "./fragments/golfers/derek"
import "./fragments/golfers/dylan"
import "./fragments/golfers/evan"

export const PlayerInfoUpdate = () => {
  const { playersUpdateJson } = useStaticQuery(graphql`
    query PlayerInfoUpdate {
      playersUpdateJson {
        blake {
          ...BlakePlayerData
        }
        cam {
          ...CamPlayerData
        }
        chris {
          ...ChrisPlayerData
        }
        craig {
          ...CraigPlayerData
        }
        curtis {
          ...CurtisPlayerData
        }
        dan {
          ...DanPlayerData
        }
        derek {
          ...DerekPlayerData
        }
        dylan {
          ...DylanPlayerData
        }
        evan {
          ...EvanPlayerData
        }
        gordon {
          ...GordonPlayerData
        }
        jake {
          ...JakePlayerData
        }
        matt {
          ...MattPlayerData
        }
        rj {
          ...RjPlayerData
        }
        stephen {
          ...StephenPlayerData
        }
        travis {
          ...TravisPlayerData
        }
      }
    }
  `)
  return playersUpdateJson
}
