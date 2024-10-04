import React from "react"
// import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { usePublishedPosts } from "../hooks/use-published-posts"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import MatchSummary2021 from "../components/matches/2021/summary"
import MatchScore2021 from "../components/matches/2021/score"
import MatchPlayers2021 from "../components/matches/2021/players"
import MatchVenue2021 from "../components/matches/2021/venue"

import MatchSummary2022 from "../components/matches/2022/summary"
import MatchScore2022 from "../components/matches/2022/score"
import MatchPlayers2022 from "../components/matches/2022/players"
import MatchVenue2022 from "../components/matches/2022/venue"

import {
  MatchSummary2023,
  MatchScore2023,
  MatchVenue2023,
  MatchPlayers2023,
} from "../components/matches/2023"
import {
  MatchSummary2024,
  MatchScore2024,
  MatchVenue2024,
  MatchPlayers2024,
} from "../components/matches/2024"
// import LandingPageBodySidebar from "../components/landing-page-body-sidebar"

const TopicPage = ({ data, location }) => {
  const { title } = useSiteMetadata()
  const siteTitle = title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Previous Matches" />
      <LandingPageHeader title="Matches" />

      {/* {2024} */}
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-8">
            <MatchSummary2024 />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <MatchScore2024 year="_2024" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <MatchPlayers2024 />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-8">
            <MatchVenue2024 />
          </div>
        </div>
      </div>
      <hr />

      {/* 2023 */}
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-8">
            <MatchSummary2023 />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <MatchScore2023 year="_2023" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <MatchPlayers2023 />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-8">
            <MatchVenue2023 />
          </div>
        </div>
      </div>
      <hr />
      {/* 2022 */}
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-8">
            <MatchSummary2022 />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <MatchScore2022 year="_2022" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <MatchPlayers2022 />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-8">
            <MatchVenue2022 />
          </div>
        </div>
      </div>
      <hr />
      {/* 2021 */}
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-8">
            <MatchSummary2021 />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <MatchScore2021 year="_2021" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <MatchPlayers2021 />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-8">
            <MatchVenue2021 />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TopicPage
