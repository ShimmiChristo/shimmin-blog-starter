import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { usePublishedPosts } from "../hooks/use-published-posts"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
// import LandingPageBodySidebar from "../components/landing-page-body-sidebar"

const TopicPage = ({ data, location }) => {
  const { title } = useSiteMetadata()
  const siteTitle = title || `Title`

  // const LandingPageBody = styled.div`
  //   max-width: var(--maxWidth-5xl);
  //   margin: 0 2rem;

  //   @media screen and (max-width: 767px) {
  //     margin: 0;
  //   }
  // `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Rules" />
      <LandingPageHeader title="Rules" />
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-8">
            <h2>Scoring</h2>
            <p>
              Each match is worth one point, with matches ending in a tie worth
              ½ point to each side. The first team to reach 14 points wins the
              BFBH Cup. If the matches end in a 13.5-13.5 tie, the team holding
              the BFBH Cup retains it.
            </p>
            <p>We will rotate the carts at the turn</p>
            <p>Side bets encouraged</p>
            <br />

            <h3>Points</h3>
            <p>
              The two days of the matches consist of{" "}
              <strong>27 total matches</strong>, each of which is worth one
              point. There are no extra holes in the BFBH Cup matches. Should
              the two sides be tied after 9 holes, each side earns a half point.
            </p>
            <p>
              Each nine holes has two 2v2 matches, except for the last 9 holes.
              (Four 1v1 matches)
            </p>
            <br />

            <h3>Concession</h3>
            <p>
              Unlike stroke play, players don't have to complete each hole in
              match play. If a player concedes a stroke – almost always a putt –
              to his opponent, the opponent picks up his ball, takes the score
              he would have made on the next stroke and moves on to the next
              hole.
            </p>
            <br />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-8">
            <h2 className="mb-3">Formats</h2>

            <h3 className="h4">1 Best Ball</h3>
            <p>
              Each player plays their own ball, whoever has the better
              handicapped score of the 2 will be score used for that hole.
            </p>

            <h3 className="h4">2 Best Ball</h3>
            <p>
              Each player plays their own ball and combine both players net
              score.
            </p>

            <h3 className="h4">Scramble</h3>
            <p>
              Normal scramble with the 2 players, the average of the 2 players'
              handicaps will be used. Ex. an 18 with a 10 would be a 14.
            </p>

            <h3 className="h4">Alternate</h3>
            <p>
              One ball is used. Players alternate between shots. Ex - Whoever's
              tee shot is not being used will hit the second shot. Alternate
              until the ball is holed. The average of the 2 players' handicaps
              will be used.
            </p>

            <h3 className="h4">Bramble</h3>
            <p>
              Both players tee off. Players choose the better tee shot then
              continue the hole with their own ball/score. Both players' scores
              will be used for the match play.
            </p>

            <h3 className="h4">Bramble Alternate</h3>
            <p>
              Both players tee off. Whoever's tee shot is not being used will
              hit the second shot. Alternate until the ball is holed. The
              average of the 2 players' handicaps will be used.
            </p>

            <h3 className="h4">Singles</h3>
            <p>
              The player with the lower score on each hole wins that hole. If
              their scores are tied, the hole is halved.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TopicPage
