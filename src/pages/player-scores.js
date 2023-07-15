import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"

import "../styles/player-records.css"
import PlayerPoints from "../components/records/player-points"

const PlayerRecordsPage = ({ location }) => {
  const { title } = useSiteMetadata()
  const siteTitle = title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Player Scores" />
      <LandingPageHeader title="Player Scores" />
      <div className="container">
        <div className="row border-bottom py-3 bold sticky-top position-sticky-header">
          <div className="col-12 col-lg-1 text-center fontSize-0">Name</div>
          <div className="col-12 col-lg-1 text-center fontSize-0">Total Matches</div>
          <div className="col-12 col-lg-1 text-center fontSize-0">Record</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">Best Ball</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">2 Best Ball</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">Bramble</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">2 Ball Bramble</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">Alternate</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">Bramble Alternate</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">Scramble</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">Pinehurst</div>
          <div className="col-6 col-lg-1 text-center fontSize-0">Singles</div>
        </div>
        <PlayerPoints name="Cam" />
        <PlayerPoints name="Chris" />
        <PlayerPoints name="Craig" />
        <PlayerPoints name="Curtis" />
        <PlayerPoints name="Dan" />
        <PlayerPoints name="Derek" />
        <PlayerPoints name="Dylan" />
        <PlayerPoints name="Evan" />
        <PlayerPoints name="Gordon" />
        <PlayerPoints name="Jake" />
        <PlayerPoints name="Matt" />
        <PlayerPoints name="RJ" />
        <PlayerPoints name="Travis" />
      </div>
    </Layout>
  )
}

PlayerRecordsPage.propTypes = {
  data: PropTypes.string,
  location: PropTypes.string,
}

export default PlayerRecordsPage
