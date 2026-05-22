import React from "react"
import PropTypes from "prop-types"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { CourseInfo } from "../hooks/get-course-info"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MatchScore from "../components/match-score"
import Highlight2025 from "../components/highlights/highlight-2025"
import Venue2025 from "../components/venues/venue-2025"
import HighlightCountdown from "../components/highlights/coutdown-hightlight"
// import HighlightDay from "../components/highlights/day-hightlights-2023"
import MatchSummary2025 from "../components/matches/2025/summary"
import Foreword2026 from "../components/matches/2026/foreword"

// import AboutSite from "../components/about-site"
// import MatchNav from "../components/match-nav"

const TopicPage = ({ data, location }) => {
  const { title } = useSiteMetadata()
  // const { course } = CourseInfo()

  const siteTitle = title || `BFBH Cup Home Page`
  // const pageHash = location.hash

  const startDate = "september, 25, 2026 8:00:00 EST"
  const locationName = "Crooked Tree Golf Club"
  const courseUrl =
    "https://www.boynegolf.com/eleven-courses/crooked-tree-golf-club"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Boys From Back Home Cup"
        description="The BFBH Cup is an annual golf competition played at different courses throughout Michigan."
        pathname={location.pathname}
        image="/logo-black-circle.png"
      />
      <h1 className="invisible">BFBH Cup | Boys From Back Home Cup</h1>
      <HighlightCountdown
        startTime={startDate}
        location={locationName}
        courseUrl={courseUrl}
      />

      <div className="container col-lg-8 mt-5">
        <Foreword2026 />
      </div>

      {/* <h2 className="text-center bold my-5">BFBH Cup 2025 Score</h2>
      <MatchScore year="_2025" lastYearWinner="green" />
      <div className="col-lg-6 offset-lg-3">
        <MatchSummary2025 />
      </div> */}
      {/* <h2 className="text-center bold mt-5">BFBH Cup 2025</h2> */}
      {/* <Highlight2025 /> */}
      {/* <Highlight2024 /> */}
      {/* <hr /> */}
      {/* <br /> */}
      {/* <div className="py-3">
        <Venue2025 />
      </div> */}
    </Layout>
  )
}

TopicPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    hash: PropTypes.string,
  }).isRequired,
}

export default TopicPage

// export const Head = () => (
//   <>
//     <title>Hello World</title>
//     <meta name="description" content="Hello World" />
//   </>
// )
