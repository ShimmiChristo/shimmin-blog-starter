import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import PastScoresComponent from "../components/past-scores-component"

import MatchSummary2021 from "../components/matches/2021/summary"
import MatchScore2021 from "../components/matches/2021/score"
import MatchPlayers2021 from "../components/matches/2021/players"
import MatchVenue2021 from "../components/matches/2021/venue"

import MatchSummary2022 from "../components/matches/2022/summary"
import MatchScore2022 from "../components/matches/2022/score"
import MatchPlayers2022 from "../components/matches/2022/players"
import MatchVenue2022 from "../components/matches/2022/venue"

import MatchScore from "../components/matches/match/score"

import {
  MatchSummary2023,
  MatchScore2023,
  MatchVenue2023,
  MatchPlayers2023,
} from "../components/matches/2023"
import {
  MatchSummary2024,
  MatchVenue2024,
  MatchPlayers2024,
} from "../components/matches/2024"

import {
  MatchSummary2025,
  MatchVenue2025,
  MatchPlayers2025,
} from "../components/matches/2025"

import "../styles/match.css"

const PastScoresPage = ({ location }) => {
  const { title } = useSiteMetadata()
  const siteTitle = title || `Title`
  const summary2021 = MatchSummary2021()
  const summary2022 = MatchSummary2022()
  const summary2023 = MatchSummary2023()
  const score2021 = MatchScore2021({ year: "_2021" })
  const score2022 = MatchScore2022({ year: "_2022" })
  const score2023 = MatchScore2023({ year: "_2023" })
  const venue2021 = MatchVenue2021()
  const venue2022 = MatchVenue2022()
  const venue2023 = MatchVenue2023()
  const players2021 = MatchPlayers2021()
  const players2022 = MatchPlayers2022()
  const players2023 = MatchPlayers2023()

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
          year="2026"
          date="Sep, 25 - Sep, 26"
          winner="green"
          location="Bay Harbor GC, Crooked Tree GC, Boyne Highlands"
          // score={MatchScore({ year: "_2026" })}
          // summary={MatchSummary2026()}
          // venue={MatchVenue2026()}
          // players={MatchPlayers2026()}
        />
        <PastScoresComponent
          year="2025"
          date="Sep, 26 - Sep, 27"
          winner="green"
          location="Bay Harbor GC, Crooked Tree GC, Boyne Highlands"
          summary={MatchSummary2025()}
          score={MatchScore({ year: "_2025" })}
          venue={MatchVenue2025()}
          players={MatchPlayers2025()}
        />

        <PastScoresComponent
          year="2024"
          date="Sep, 27 - Sep, 28"
          winner="green"
          location="Bay Harbor GC, Boyne Highlands"
          summary={MatchSummary2024()}
          score={MatchScore({ year: "_2024" })}
          venue={MatchVenue2024()}
          players={MatchPlayers2024()}
        />

        <PastScoresComponent
          year="2023"
          date="Sep, 22 - Sep, 23"
          winner="blue"
          location="Boyne Highlands"
          summary={summary2023}
          score={score2023}
          venue={venue2023}
          players={players2023}
        />
        <PastScoresComponent
          year="2022"
          date="Oct, 14 - Oct, 15"
          winner="green"
          location="Gull Lake View"
          summary={summary2022}
          score={score2022}
          venue={venue2022}
          players={players2022}
        />
        <PastScoresComponent
          year="2021"
          date="Oct, 16 - Oct, 17"
          winner="blue"
          location="Otsego, Galyord GC"
          summary={summary2021}
          score={score2021}
          venue={venue2021}
          players={players2021}
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
