import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import MatchupGuesser from "../components/matchup-guesser"

const MatchupGuesserPage = ({ location }) => {
  const { title } = useSiteMetadata()
  const siteTitle = title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Matchup Guesser" />
      <LandingPageHeader title="Matchup Guesser" />
      <MatchupGuesser />
    </Layout>
  )
}

export default MatchupGuesserPage
