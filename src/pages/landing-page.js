import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { usePublishedPosts } from "../hooks/use-published-posts"

import AuthorBio from "../components/author-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import Match from "../components/match"
// import BlogPostThumbnailImg from "../components/blog-post-thumbnail-img"

const TopicPage = ({ data, location }) => {
  const { title, description, headline } = useSiteMetadata()
  const { nodes } = usePublishedPosts()
  const siteTitle = title || `Title`
  const posts = nodes

  const LandingPageHeaderContainer = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Topic Page" />
      <LandingPageHeader title="landing page title" />
      <Match player1="chris" player2="two" player3="three" player4="four" />
      {/* <AuthorBio /> */}
    </Layout>
  )
}

export default TopicPage
