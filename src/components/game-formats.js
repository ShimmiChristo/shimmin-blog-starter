import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"

const Container = styled.div`
  padding: 0 0 2rem 0;
  border-color: var(--color-brand-med);
  & h2 {
    flex: 0 0 100%;
    border-bottom: 4px solid var(--color-brand-light);
    position: relative;
  }
  & h2::after {
    border-bottom: 4px solid var(--color-brand-dark);
    content: " ";
    width: 70%;
    position: absolute;
    bottom: -6px;
    display: block;
    transform: rotate(-0.5deg);
  }
  @media (max-width: 767px) {
  }
`
const Headline = styled.div``
const Info = styled.div``

function GameFormats() {
  return (
    <section>
      <Container>
        <h2>Game Formats</h2>
        <h3>Pinehurst</h3>
        <div>
          <p>
            Here's how Pinehurst works. It's a two-person team format, and every
            hole begins with both players on a side playing drives. The two
            partners walk forward to the golf balls, then they switch golf
            balls. Golfer A hits Golfer B's ball, from where B's drive came to
            rest. And Golfer B plays Golfer A's ball, from A's drive came to
            rest.
          </p>
          <p>
            After their second shots, the partners compare the results. Which
            golf ball is in the best position? They select that ball and pick up
            the other.
          </p>
          <p>
            From the third stroke on, they play alternate shot until the ball is
            holed.
          </p>
          <p>
            And that's Pinehurst: Hit drives, switch balls for the second
            strokes, pick up the worse of the balls after the second stroke,
            play alternate shot into the hole from there.
          </p>
        </div>
        <div>
          <h4>Handicaps In Pinehurst System</h4>
          <p>
            Handicap allowances for Pinehurst competitions can be found in the
            USGA Handicap Manual, Section 9-4 (www.usga.com). But to summarize,
            on a team where Golfer A is the lower-handicapped partner and Golfer
            B the higher-handicapped:
          </p>
          <ul>
            <li>
              Stroke play: Take 60-percent of Golfer A's course handicap and add
              it to 40-percent of Golfer B's course handicap for the team's
              Pinehurst handicap.
            </li>
            <li>
              Match play: Do the same thing in match play — 60-percent of Golfer
              A's plus 40-percent of Golfer B's — but then the team with the
              lower resulting Pinehurst handicap plays off scratch and the other
              team plays off the difference.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default GameFormats
