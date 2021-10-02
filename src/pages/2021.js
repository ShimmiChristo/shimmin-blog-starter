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
import MatchNav from "../components/match-nav"
// import BlogPostThumbnailImg from "../components/blog-post-thumbnail-img"

const TopicPage = ({ data, location }) => {
  const { title, description, headline } = useSiteMetadata()
  const { nodes } = usePublishedPosts()
  const siteTitle = title || `Title`
  // const posts = nodes
  const pageHash = location.hash

  const MatchNavSection = styled.div`
    &[data-visible="false"] {
      display: none;
      a {
        color: var(--light-gray);
      }
    }
    &[data-visible="true"] {
      a {
        color: var(--black);
      }
    }
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="2021 BFBH Cup" />
      <LandingPageHeader title="2021" />
      <MatchNav
        location={location}
        titles={[
          {
            name: `Best Ball`,
            round: `Round 1.1`,
            link: "r1-best-ball",
          },
          {
            name: "Ball Bramble",
            round: "Round 1.2",
            link: "r1-two-ball-bramble",
          },
          {
            name: "Bramble Alternate",
            round: "Round 2.1",
            link: "r2-bramble-alternate",
          },
          {
            name: "Scramble",
            round: "Round 2.2",
            link: "r2-scramble",
          },
          {
            name: "Best Ball",
            round: "Round 3.1",
            link: "r3-best-ball",
          },
          {
            name: "Singles",
            round: "Round 3.2",
            link: "r3-singles",
          },
        ]}
      />
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
      <MatchNavSection
        data-visible={pageHash === "#r1-best-ball" ? "true" : "false"}
        data-link-id="r1-best-ball"
      >
        <Match
          matchId="1.1 - Best Ball. Full handicap"
          courseMatch="tribute1"
          player1="matt"
          player2="dylan"
          player3="chris"
          player4="rj"
        />
        <Match
          matchId="1.1 - Best Ball Bramble. Full handicap"
          courseMatch="tribute1"
          player1="derek"
          player2="dan"
          player3="travis"
          player4="craig"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r1-two-ball-bramble" ? "true" : "false"}
        data-link-id="r1-two-ball-bramble"
      >
        <Match
          matchId="1.2 - Best Bramble. Full handicap"
          courseMatch="tribute2"
          player1="matt"
          player2="rj"
          player3="derek"
          player4="craig"
        />
        <Match
          matchId="1.2 - Best Bramble. Full handicap"
          courseMatch="tribute2"
          player1="chris"
          player2="dylan"
          player3="travis"
          player4="dan"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r2-bramble-alternate" ? "true" : "false"}
        data-link-id="r2-bramble-alternate"
      >
        <Match
          matchId="2.1 - Bramble Alternate. Average handicap"
          courseMatch="classic1"
          player1="chris"
          player2="rj"
          player3="derek"
          player4="dan"
        />
        <Match
          matchId="2.1 - Bramble Alternate. Average handicap"
          courseMatch="classic1"
          player1="matt"
          player2="dylan"
          player3="travis"
          player4="craig"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r2-scramble" ? "true" : "false"}
        data-link-id="r2-scramble"
      >
        <Match
          matchId="2.2 - Scramble. Average handicap"
          courseMatch="classic2"
          player1="matt"
          player2="craig"
          player3="chris"
          player4="dan"
        />
        <Match
          matchId="2.2 - Scramble. Average handicap"
          courseMatch="classic2"
          player1="derek"
          player2="dylan"
          player3="travis"
          player4="rj"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r3-best-ball" ? "true" : "false"}
        data-link-id="r3-best-ball"
      >
        <Match
          matchId="3.1 - Best Ball. Full handicap"
          courseMatch="gaylordGolfClub1"
          player1="matt"
          player2="dylan"
          player3="derek"
          player4="dan"
        />
        <Match
          matchId="3.1 - Best Ball. Full handicap"
          courseMatch="gaylordGolfClub1"
          player1="chris"
          player2="craig"
          player3="travis"
          player4="rj"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r3-singles" ? "true" : "false"}
        data-link-id="r3-singles"
      >
        <Match
          matchId="3.2 - Singles Matches. Full handicap"
          courseMatch="gaylordGolfClub2"
          player1="matt"
          player2="dylan"
        />
        <Match
          matchId="3.2 - Singles Matches. Full handicap"
          courseMatch="gaylordGolfClub2"
          player1="travis"
          player2="craig"
        />
        <Match
          matchId="3.2 - Singles Matches. Full handicap"
          courseMatch="gaylordGolfClub2"
          player1="chris"
          player2="rj"
        />
        <Match
          matchId="3.2 - Singles Matches. Full handicap"
          courseMatch="gaylordGolfClub2"
          player1="derek"
          player2="dan"
        />
      </MatchNavSection>
      {/* <AuthorBio /> */}
    </Layout>
  )
}

export default TopicPage
