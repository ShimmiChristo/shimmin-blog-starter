import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { usePublishedPosts } from "../hooks/use-published-posts"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import Match from "../components/match"
import MatchScore from "../components/match-score"

const TopicPage = ({ data, location }) => {
  const { title, description, headline } = useSiteMetadata()
  const { nodes } = usePublishedPosts()
  const siteTitle = title || `Title`
  const posts = nodes

  const LandingPageBody = styled.div`
    max-width: var(--maxWidth-5xl);
    margin: 0 auto;
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <LandingPageHeader title="About BFBH Cup" />
      <LandingPageBody>
        
      </LandingPageBody>
    </Layout>
  )
}

export default TopicPage
