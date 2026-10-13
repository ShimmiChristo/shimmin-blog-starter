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
import MostPlayerMatches from "../components/records/most-player-matches"

const TEAMS = [
  { id: "green", label: "Green Team", colorClass: "team-one-color-bg" },
  { id: "blue", label: "Blue Team", colorClass: "team-two-color-bg" },
]

const TeamRecordsPage = ({ location }) => {
  const { title } = useSiteMetadata()
  const siteTitle = title || `BFBH Cup Player Scores`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Team Scores" />
      <LandingPageHeader title="Team Scores" />

      <TeamPoints />
      {/* <LargestVictoryMargin /> */}
      {TEAMS.map(({ id, label, colorClass }) => (
        <React.Fragment key={id}>
          <div
            className={`container col-12 col-md-6 mt-5 text-center text-white py-2 h4 ${colorClass}`}
          >
            {label}
          </div>
          <MostPlayerPoints team={id} />
          <MostPlayerMatches team={id} />
        </React.Fragment>
      ))}
    </Layout>
  )
}

TeamRecordsPage.propTypes = {
  data: PropTypes.string,
  location: PropTypes.string,
}

export default TeamRecordsPage
