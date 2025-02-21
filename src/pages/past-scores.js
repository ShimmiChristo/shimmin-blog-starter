import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import PastScoresComponent from "../components/past-scores-component"
import MatchSummary2021 from "../components/matches/2021/summary"
import MatchSummary2022 from "../components/matches/2022/summary"
import MatchSummary2023 from "../components/matches/2023/summary"
import MatchSummary2024 from "../components/matches/2024/summary"
import MatchSummary2025 from "../components/matches/2025/summary"

import "../styles/match.css"

const PastScoresPage = ({ location }) => {
  const { title } = useSiteMetadata()
  const siteTitle = title || `Title`
  const summary2021 = MatchSummary2021()
  const summary2022 = MatchSummary2022()
  const summary2023 = MatchSummary2023()
  const summary2024 = MatchSummary2024()
  const summary2025 = MatchSummary2025()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Past Scores" />
      <LandingPageHeader title="Past Scores" />
      <div className="container">
        <div className="row border-bottom py-3 bold">
          <div className="col-6 col-sm-2">Year</div>
          <div className="col-6 col-sm-3">Date</div>
          <div className="col-6 col-sm-2">Winner</div>
          <div className="col-6 col-sm-5">Location</div>
        </div>

        {/* <PastScoresComponent
          year="2025"
          date="Sep, 26 - Sep, 27"
          winner="green"
          location="Bay Harbor GC, Crooked Tree GC, Boyne Highlands"
          summary={summary2025}
        /> */}
        
         <PastScoresComponent
          year="2024"
          date="Sep, 27 - Sep, 28"
          winner="green"
          location="Bay Harbor GC, Boyne Highlands"
          summary={summary2024}
        />
       
        <PastScoresComponent
          year="2023"
          date="Sep, 22 - Sep, 23"
          winner="blue"
          location="Boyne Highlands"
          summary={summary2023}
        />
        <PastScoresComponent
          year="2022"
          date="Oct, 14 - Oct, 15"
          winner="green"
          location="Gull Lake View"
          summary={summary2022}
        />
        <PastScoresComponent
          year="2021"
          date="Oct, 16 - Oct, 17"
          winner="blue"
          location="Otsego, Galyord GC"
          summary={summary2021}
        />
      </div>
    </Layout>
  )
}

PastScoresPage.propTypes = {
  data: PropTypes.string,
  location: PropTypes.string,
}

export default PastScoresPage
