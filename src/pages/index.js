import React from "react"
// import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { CourseInfo } from "../hooks/get-course-info"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import LandingPageHeader from "../components/landing-page-header"
// import Match from "../components/match"
import MatchScore from "../components/match-score"
import HighlightsScoring from "../components/highlights/scoring-highlight"
import Venue2023 from "../components/venues/venue-2023"
import HighlightCountdown from "../components/highlights/coutdown-hightlight"
// import HighlightDay from "../components/highlights/day-hightlights"

// import AboutSite from "../components/about-site"
// import MatchNav from "../components/match-nav"

const TopicPage = ({ data, location }) => {
  const { title } = useSiteMetadata()
  // const { course } = CourseInfo()

  const siteTitle = title || `Title`
  // const pageHash = location.hash

  // const MatchNavSection = styled.div`
  //   overflow-y: scroll;
  //   &[data-visible="false"] {
  //     display: none;
  //     a {
  //       color: var(--light-gray);
  //     }
  //   }
  //   &[data-visible="true"] {
  //     a {
  //       color: var(--black);
  //     }
  //   }
  // `
  // const LandingPageBody = styled.div`
  //   max-width: var(--maxWidth-5xl);
  //   margin: 0 auto;
  //   display: flex;
  //   margin-bottom: var(--spacing-6);
  // `
  // const SectionAd = styled.div`
  //   min-width: 300px;
  //   margin: var(--spacing-6) 0 0 var(--spacing-6);
  //   border: 1px solid;
  //   border-radius: 5px;
  //   display: ${props => (props.Ad ? "flex" : "none")};
  // `
  const startDate = "september, 22, 2023 8:30:00 EST"
  const locationName = "Authur Hills Golf Course"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Boys From Back Home Cup" />
      <h1 className="invisible">BFBH Cup | Boys From Back Home</h1>
      <HighlightCountdown startTime={startDate} location={locationName} />
      <HighlightsScoring yearProp="2022" />
      <h2 className="text-center bold mt-4">BFBH Cup 2022 Score</h2>
      <MatchScore year="_2022" />
      {/* <HighlightDay /> */}
      <hr />
      <br />
      <Venue2023 />
    </Layout>
  )
}

export default TopicPage
