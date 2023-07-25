import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { usePublishedPosts } from "../hooks/use-published-posts"
import { Link } from "gatsby"

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
            <h2 className="mb-3">Game Formats</h2>

            <h3 className="h4 mt-4 pt-1">1 Best Ball/Four-Ball</h3>
            <p>
              In 1 best ball/four-ball, each member of a two-man team plays his
              own ball, so four balls are in play on every hole. Each team
              counts the lowest of its two scores on each hole, and the team
              whose player has the lowest score wins the hole. If the low scores
              are tied, the hole is halved.
            </p>
            <p>Handicap allowance is 90%</p>

            <h3 className="h4 mt-4 pt-1">2 Best Ball/Four-Ball Total</h3>
            <p>
              In 2 best ball/four-ball, each member of a two-man team plays his
              own ball, so four balls are in play on every hole. Each team
              counts the total of its two scores on each hole, and the team
              whose player has the lowest total score wins the hole. If the low
              scores are tied, the hole is halved.
            </p>
            <p>Handicap allowance is 90%</p>

            <h3 className="h4 mt-4 pt-1">Scramble</h3>
            <p>
              A scramble is played with two, three or four-person teams. Each
              player plays from the teeing area on each hole, one of the tee
              shots is selected and all the players play their second shots from
              that spot. One of the second shots is then selected, and all
              players play their third shots from that spot, and so on until the
              ball is holed.
            </p>
            <p>Handicap allowance is 35% low handicap + 15% high handicap</p>

            <h3 className="h4 mt-4 pt-1">Alternate/Foursomes</h3>
            <p>
              In alternate/foursomes, each two-man team plays one ball per hole
              with the players taking turns until each hole is complete. Players
              alternate hitting tee shots, with one leading off on odd-numbered
              holes, and the other hitting first on even-numbered holes. The
              team with the low score on each hole wins that hole. If their
              scores are tied, the hole is halved.
            </p>
            <p>Handicap allowance is 50% of combined team handicap</p>

            <h3 className="h4 mt-4 pt-1">Bramble/Shamble/1 Ball Bramble</h3>
            <p>
              Each player plays from the teeing area on each hole, one of the
              tee shots is selected and all the players play their second shots
              from that spot. Each member of the team plays his own ball from
              there until each ball is holed. Each team counts the lowest of its
              two scores on each hole, and the team whose player has the lowest
              score wins the hole. If the low scores are tied, the hole is
              halved.
            </p>
            <p>Handicap allowance is 85% of combined team handicap</p>

            <h3 className="h4 mt-4 pt-1">2 Ball Bramble/2 Ball Shamble</h3>
            <p>
              Each player plays from the teeing area on each hole, one of the
              tee shots is selected and all the players play their second shots
              from that spot. Each member of the team plays his own ball from
              there until each ball is holed. Each team counts the total of the
              two scores on each hole, and the team with the lowest score wins
              the hole. If the low scores are tied, the hole is halved.
            </p>
            <p>Handicap allowance is 85% of combined team handicap</p>

            <h3 className="h4 mt-4 pt-1">Bramble Alternate/Greensomes</h3>
            <p>
              Bramble alternate/greensomes is a variation of Foursomes where
              both partners play from the teeing area and one of the two tee
              shots is selected. The partner whose tee shot was not selected
              then plays the next stroke and each subsequent stroke is made in
              alternating order until the ball is holed. For example, if the tee
              shot of player A is selected at the first hole, Player B will play
              the next stroke, then Player A plays and so on until the ball is
              holed. Both players then play from the teeing area of the second
              hole and the process is repeated.
            </p>
            <p>Handicap allowance is 60% low handicap + 40% high handicap</p>

            <h3 className="h4 mt-4 pt-1">Pinehurst/Chapman</h3>
            <p>
              Pinehurst Foursomes where both players tee off, then they switch
              their play of golf balls, meaning Player A plays Player B’s ball,
              and Player B plays Player A’s ball. After the second shots, they
              then select which ball they will continue to play, and that ball
              is then played by alternate-shot until holed.
            </p>
            <p>Handicap allowance is 60% low handicap + 40% high handicap</p>

            <h3 className="h4 mt-4 pt-1">Singles</h3>
            <p>
              The player with the lower score on each hole wins that hole. If
              their scores are tied, the hole is halved.
            </p>
            <p>Handicap allowance is 100%</p>
          </div>
        </div>
        <p>
          All handicap allowances are found at the{" "}
          <Link to="https://www.usga.org/content/usga/home-page/handicapping/roh/Content/rules/Appendix%20C%20Handicap%20Allowances.htm">
            USGA Handicap Allowances website
          </Link>
          .
        </p>
      </div>
    </Layout>
  )
}

export default TopicPage
