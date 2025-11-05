import { useStaticQuery, graphql } from "gatsby"
// import "./fragments/courses/bayHarborGolfClub"
// import "./fragments/courses/bayHarborLinksQuarry"
// import "./fragments/courses/bayHarborPreserveLinks"
// import "./fragments/courses/boyneHighlandsArthurHills"
// import "./fragments/courses/boyneHighlandsDonaldRoss"
// import "./fragments/courses/boyneHighlandsHeather"
// import "./fragments/courses/boyneHighlandsMoor"
// import "./fragments/courses/crookedTree"
// import "./fragments/courses/hiddenRiverGolf"

export const CourseInfo = () => {
  const { coursesJson } = useStaticQuery(graphql`
    query CourseInfo {
      coursesJson {
        course {
          ...BayHarborGolfClubFragment
          ...BayHarborLinksQuarryFragment
          ...BayHarborPreserveLinksFragment
          ...BoyneHighlandsArthurHillsFragment
          ...BoyneHighlandsDonaldRossFragment
          ...BoyneHighlandsHeatherFragment
          ...BoyneHighlandsMoorFragment
          ...CrookedTreeFragment
          ...HiddenRiverGolfFragment
          ...GaylordGolfClubFragment
          ...GullLakeEastFragment
          ...GullLakeWestFragment
          ...OtsegoClassicFragment
          ...OtsegoTributeFragment
          ...StoatinBraeFragment
          ...StoneHedgeSouthFragment
        }
      }
    }
  `)
  return coursesJson
}
