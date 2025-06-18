import React from "react"
// import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { CourseInfo } from "../hooks/get-course-info"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import LandingPageHeader from "../components/landing-page-header"
import MatchScore from "../components/match-score"
import Highlight2025 from "../components/highlights/highlight-2025"
import Venue2025 from "../components/venues/venue-2025"
import HighlightCountdown from "../components/highlights/coutdown-hightlight"
// import HighlightDay from "../components/highlights/day-hightlights-2023"
import MatchSummary2024 from "../components/matches/2024/summary"
import Foreword2025 from "../components/matches/2025/foreword"

// import AboutSite from "../components/about-site"
// import MatchNav from "../components/match-nav"

const TopicPage = ({ data, location }) => {
  const { title } = useSiteMetadata()
  // const { course } = CourseInfo()

  const siteTitle = title || `BFBH Cup Home Page`
  // const pageHash = location.hash

  const startDate = "september, 26, 2025 8:30:00 EST"
  const locationName = "Bay Harbor Golf Club"
  const courseUrl = "https://www.bayharborgolf.com/courses/preserve-links"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Boys From Back Home Cup" />
      <h1 className="invisible">BFBH Cup | Boys From Back Home Cup</h1>
      <HighlightCountdown
        startTime={startDate}
        location={locationName}
        courseUrl={courseUrl}
      />

      {/* <h2 className="text-center bold my-5">BFBH Cup 2024 Score</h2>
      <MatchScore year="_2024" lastYearWinner="blue" /> */}
      {/* <div className="col-lg-6 offset-lg-3">
        <MatchSummary2024 />
      </div> */}
      <h2 className="text-center bold mt-5">BFBH Cup 2025</h2>
      <Highlight2025 />
      {/* <Highlight2024 /> */}
      {/* <hr /> */}
      {/* <br /> */}
      <Venue2025 />
    </Layout>
  )
}

export default TopicPage

// export const Head = () => (
//   <>
//     <title>Hello World</title>
//     <meta name="description" content="Hello World" />
//   </>
// )
