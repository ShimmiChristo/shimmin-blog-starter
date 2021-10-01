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
import MatchInfo from "../components/match-info"
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
      <SEO title="2021 BFBH Cup" />
      <LandingPageHeader title="2021" />
      {/* <MatchNav
        titles={[
          "Round 1.1: Best Ball",
          "Round 1.2: Ball Bramble",
          "Round 2.1: Bramble Alternate",
          "Round 2.2: Scramble", 
        ]}
      /> */}
      {/* <MatchInfo
        courses={[
          "The Tribute Golf Course at Otsego Resort",
          "The Tribute Golf Course at Otsego Resort",
          "Gaylord Golf Club",
        ]}
        dates="Oct. 15-16, 2021"
      /> */}
      <MatchScore />
      {/* player1 and player3 are on the same team */}
      <Match
        matchId="1.1"
        courseMatch="tribute1"
        player1="matt"
        player2="dylan"
        player3="chris"
        player4="rj"
      />
      <Match
        matchId="1.1"
        courseMatch="tribute1"
        player1="derek"
        player2="dan"
        player3="travis"
        player4="craig"
      />
      <Match
        matchId="1.2"
        courseMatch="tribute2"
        player1="matt"
        player2="rj"
        player3="derek"
        player4="craig"
      />
      <Match
        matchId="1.2"
        courseMatch="tribute2"
        player1="chris"
        player2="dylan"
        player3="travis"
        player4="dan"
      />
      {/* <Match
        id="match-two"
        courseMatch="tribute"
        player1="derek"
        player2="dan"
        player3="travis"
        player4="craig"
      /> */}
      {/* <AuthorBio /> */}
    </Layout>
  )
}

export default TopicPage
