import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { usePublishedPosts } from "../hooks/use-published-posts"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"

const TopicPage = ({ data, location }) => {
  const { title } = useSiteMetadata()
  const siteTitle = title || `Title`

  const LandingPageBody = styled.div`
    max-width: var(--maxWidth-5xl);
    margin: 0 2rem;

    @media screen and (max-width: 767px) {
      margin: 0;
    }
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Rules" />
      <LandingPageHeader title="Rules" />
      {/* player1 and player3 are on the same team */}
      <LandingPageBody>
        <ul>
          <li>There are 14 matches for 14 points. </li>
          <li>A team needs 7.5 points to win</li>
          <li>Each match is 1 point. If it's halved, both teams get ½ point</li>
          <li>
            Each nine holes has two 2v2 matches, except for the last 9 holes.
            (Four 1v1 matches)
          </li>
          <li>We will rotate the carts at the turn</li>
          <li>Side bets encouraged</li>
        </ul>

        <h2>Formats</h2>
        <ul>
          <li>
            <b>Bramble. Full handicap</b>: both players tee off, choose the
            better tee shot and then finish the hole with their own
            ball/score.Both players' scores will be used for the match play.
          </li>
          <li>
            <b>Scramble</b>: normal scramble with the 2 players, the average of
            the 2 players' handicaps will be used. Ex. an 18 with a 10 would be
            a 14.
          </li>
          <li>
            <b>1 best ball</b>: each player plays their own ball, whoever has
            the better handicapped score of the 2 will be score used for that
            hole
          </li>
          <li>
            <b>Bramble alternate. Average handicap</b>: both players tee off.
            Whoever's tee shot is not being used will hit the second shot.
            Alternate until the ball is holed.
          </li>
        </ul>
      </LandingPageBody>
    </Layout>
  )
}

export default TopicPage
