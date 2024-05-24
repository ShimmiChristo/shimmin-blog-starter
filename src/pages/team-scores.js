import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"

import "../styles/player-records.css"
import TeamPoints from "../components/records/team-points"

const TeamRecordsPage = ({ location }) => {
  const { title } = useSiteMetadata()
  const siteTitle = title || `BFBH Cup Player Scores`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Team Scores" />
      <LandingPageHeader title="Team Scores" />
      <div className="container col-12 col-md-6">
        <div className="h4 text-center">Total Points</div>
        <div className="row border-bottom bold sticky-top position-sticky-header">
          <div className="col-4 text-center fontSize-0"></div>
          <div className="col-4 text-center fontSize-0 team-one-color-bg text-white py-2">
            Green Team
          </div>
          <div className="col-4 text-center fontSize-0 team-two-color-bg text-white py-2">
            Blue Team
          </div>
        </div>
        <TeamPoints />
      </div>
    </Layout>
  )
}

TeamRecordsPage.propTypes = {
  data: PropTypes.string,
  location: PropTypes.string,
}

export default TeamRecordsPage
