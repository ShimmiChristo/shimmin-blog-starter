import React from "react"
// import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { usePublishedPosts } from "../hooks/use-published-posts"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import MatchSummary2021 from "../components/matches/2021/summary"
import Match from "../components/matches/2021/score"
import MatchPlayers2021 from "../components/matches/2021/players"
import MatchVenue2021 from "../components/matches/2021/venue"
// import LandingPageBodySidebar from "../components/landing-page-body-sidebar"

const TopicPage = ({ data, location }) => {
  const { title } = useSiteMetadata()
  const siteTitle = title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="BFBH Cup Previous Matches" />
      <LandingPageHeader title="Matches" />
      <div class="container">
        <div class="row mb-3">
          <div class="col-8">
            <MatchSummary2021 />
            <Match year="2021" />
            <MatchPlayers2021 />
            <MatchVenue2021 />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TopicPage
