import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import PastScoresComponent from "../components/past-scores-component"
import MatchSummary2021 from "../components/matches/2021/summary"
import MatchSummary2022 from "../components/matches/2022/summary"

import "../styles/match.css"

const PastScoresPage = ({ location }) => {
  const { title } = useSiteMetadata()
  const siteTitle = title || `Title`
  const summary2021 = MatchSummary2021()
  const summary2022 = MatchSummary2022()

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
