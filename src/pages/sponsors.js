import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { usePublishedPosts } from "../hooks/use-published-posts"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import SponsorCraig from "../components/sponsor--craig"
// import BlogPostThumbnailImg from "../components/blog-post-thumbnail-img"

const TopicPage = ({ data, location }) => {
  const { title } = useSiteMetadata()
  // const { nodes } = usePublishedPosts()
  const siteTitle = title || `Title`
  // const posts = nodes
  // const LandingPageBody = styled.div`
  //   max-width: var(--maxWidth-5xl);
  //   margin: 0 auto;
  // `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Sponsors" />
      <LandingPageHeader title="BFBH Cup Supporters" />
      <div className="container mb-5">
        <h2 className="h4">A huge thank you to our supporters</h2>
        <p>
          The BFBH Cup was built on the love of family, friends, and the game of
          golf. Here are those who support everything about the BFBH Cup.
        </p>
      </div>

      <SponsorCraig />
    </Layout>
  )
}

export default TopicPage
