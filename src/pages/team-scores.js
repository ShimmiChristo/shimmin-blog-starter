import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"

import "../styles/player-records.css"
import TeamPoints from "../components/records/team-points"
import LargestVictoryMargin from "../components/records/largest-victory-margin"
import MostPlayerPoints from "../components/records/most-player-points"

const TeamRecordsPage = ({ location }) => {
  const { title } = useSiteMetadata()
  const siteTitle = title || `BFBH Cup Player Scores`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Team Scores" />
      <LandingPageHeader title="Team Scores" />

      <TeamPoints />
      {/* <LargestVictoryMargin /> */}
      <MostPlayerPoints />
    </Layout>
  )
}

TeamRecordsPage.propTypes = {
  data: PropTypes.string,
  location: PropTypes.string,
}

export default TeamRecordsPage
