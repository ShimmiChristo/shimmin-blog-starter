import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { usePublishedPosts } from "../hooks/use-published-posts"

import AuthorBio from "../components/author-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import Match from "../components/match"
import MatchScore from "../components/match-score"
// import BlogPostThumbnailImg from "../components/blog-post-thumbnail-img"

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
        <h2 className="h4">What is the BFBH Cup?</h2>
        <p>
          The BFBH Cup is a annual golf competition played at different courses
          throughout the United States, but mainly in the Great Lake State, the
          High-Five of the country, Michigan.
        </p>
        <h2 className="h4">What does the BFBH Cup stand for?</h2>
        <p>
          Great question. The BFBH Cup stands for The "Boys From Back Home Cup".
        </p>
        <h2 className="h4">Who are the boys from back home?</h2>
        <p>
          A group of brothers and friends who were all born and raised in the great state of Michigan.
        </p>
      </LandingPageBody>
      
    </Layout>
  )
}

export default TopicPage
