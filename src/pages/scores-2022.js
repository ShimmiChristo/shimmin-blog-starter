import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { CourseInfo } from "../hooks/get-course-info"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import MatchOld from "../components/match-OLD"
import MatchScore from "../components/match-score"
import MatchNav from "../components/match-nav"
import "../styles/match.css"

const TopicPage = ({ data, location }) => {
  const { title } = useSiteMetadata()
  const { course } = CourseInfo()

  const siteTitle = title || `Title`
  const pageHash = location.hash

  const MatchNavSection = styled.div`
    overflow-y: scroll;
    &[data-visible="false"] {
      display: none;
      a {
        color: var(--light-gray);
      }
    }
    &[data-visible="true"] {
      a {
        color: var(--black);
        text-decoration: underline;
        text-underline-offset: 0.2rem;
      }
    }
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="2022 Scores" />
      <LandingPageHeader title="2022 Scores" />
      <MatchNav
        location={location}
        titles={[
          {
            name: `1 Best Ball`,
            round: `Round 1.1`,
            link: "r1-best-ball",
          },
          {
            name: "2 Best Ball",
            round: "Round 1.2",
            link: "r1-two-best-ball",
          },
          {
            name: "2 Ball Bramble",
            round: "Round 2.1",
            link: "r2-bramble",
          },
          {
            name: "Scramble",
            round: "Round 2.2",
            link: "r2-scramble",
          },
          {
            name: "1 Ball Bramble",
            round: "Round 3.1",
            link: "r3-bramble",
          },
          {
            name: "Alternate",
            round: "Round 3.2",
            link: "r3-alternate",
          },
          {
            name: "Scramble",
            round: "Round 4.1",
            link: "r4-scramble",
          },
          {
            name: "Singles",
            round: "Round 4.2",
            link: "r4-singles",
          },
        ]}
      />

      <MatchScore year="_2022" lastYearWinner="blue" />
      <MatchNavSection
        data-visible={pageHash === "#r1-best-ball" ? "true" : "false"}
        data-link-id="r1-best-ball"
      >
        <div className="course__info">
          <span>Friday Oct 14, 8:30 AM at </span>
          <a href={course["stoatinBrae1"].link}>
            {course[`stoatinBrae1`].name}
          </a>
        </div>
       <MatchOld
          matchId="1.1 - Best Ball. Full handicap"
          courseMatch="stoatinBrae1"
          matchHandicap="full"
          gameplay=""
          year="_2021"
          player1="matt"
          player1Handicap="6"
          player2="dylan"
          player2Handicap="0"
          player3="gordon"
          player3Handicap="12"
          player4="rj"
          player4Handicap="12"
        />
       <MatchOld
          matchId="1.1 - Best Ball. Full handicap"
          courseMatch="stoatinBrae1"
          matchHandicap="full"
          gameplay=""
          player1="curtis"
          player1Handicap="23"
          player2="craig"
          player2Handicap="21"
          player3="jake"
          player3Handicap="21"
          player4="dan"
          player4Handicap="23"
        />
       <MatchOld
          matchId="1.1 - Best Ball. Full handicap"
          courseMatch="stoatinBrae1"
          matchHandicap="full"
          gameplay=""
          player1="travis"
          player1Handicap="21"
          player2="cam"
          player2Handicap="21"
          player3="derek"
          player3Handicap="27"
          player4="evan"
          player4Handicap="27"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r1-two-best-ball" ? "true" : "false"}
        data-link-id="r1-two-best-ball"
      >
        <div className="course__info">
          <span>Friday Oct 14, 8:30 AM at </span>
          <a href={course["stoatinBrae2"].link}>
            {course[`stoatinBrae2`].name}
          </a>
        </div>
       <MatchOld
          matchId="1.2 - 2 Best Ball. Full handicap"
          courseMatch="stoatinBrae2"
          matchHandicap="full"
          gameplay="two-ball"
          player1="matt"
          player1Handicap="6"
          player2="dylan"
          player2Handicap="0"
          player3="curtis"
          player3Handicap="23"
          player4="dan"
          player4Handicap="23"
        />
       <MatchOld
          matchId="1.2 - 2 Best Ball. Full handicap"
          courseMatch="stoatinBrae2"
          matchHandicap="full"
          gameplay="two-ball"
          player1="gordon"
          player1Handicap="12"
          player2="rj"
          player2Handicap="12"
          player3="derek"
          player3Handicap="27"
          player4="evan"
          player4Handicap="27"
        />
       <MatchOld
          matchId="1.2 - 2 Best Ball. Full handicap"
          courseMatch="stoatinBrae2"
          matchHandicap="full"
          gameplay="two-ball"
          player1="travis"
          player1Handicap="21"
          player2="cam"
          player2Handicap="21"
          player3="jake"
          player3Handicap="21"
          player4="craig"
          player4Handicap="21"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r2-bramble" ? "true" : "false"}
        data-link-id="r2-bramble"
      >
        <div className="course__info">
          <span>Friday Oct 14, 1:57 PM at </span>
          <a href={course["stoneHedgeSouth1"].link}>
            {course[`stoneHedgeSouth1`].name}
          </a>
        </div>
       <MatchOld
          matchId="2.1 - Bramble. Full handicap"
          courseMatch="stoneHedgeSouth1"
          matchHandicap="full"
          gameplay="two-ball"
          player1="gordon"
          player1Handicap="12"
          player2="rj"
          player2Handicap="12"
          player3="travis"
          player3Handicap="21"
          player4="craig"
          player4Handicap="21"
        />
       <MatchOld
          matchId="2.1 - Bramble. Full handicap"
          courseMatch="stoneHedgeSouth1"
          matchHandicap="full"
          gameplay="two-ball"
          player1="jake"
          player1Handicap="21"
          player2="dylan"
          player2Handicap="0"
          player3="derek"
          player3Handicap="27"
          player4="cam"
          player4Handicap="21"
        />
       <MatchOld
          matchId="2.1 - Bramble. Full handicap"
          courseMatch="stoneHedgeSouth1"
          matchHandicap="full"
          gameplay="two-ball"
          player1="matt"
          player1Handicap="6"
          player2="evan"
          player2Handicap="27"
          player3="curtis"
          player3Handicap="23"
          player4="dan"
          player4Handicap="23"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r2-scramble" ? "true" : "false"}
        data-link-id="r2-scramble"
      >
        <div className="course__info">
          <span>Friday Oct 14, 1:57 PM at </span>
          <a href={course["stoneHedgeSouth2"].link}>
            {course[`stoneHedgeSouth2`].name}
          </a>
        </div>
       <MatchOld
          matchId="2.2 - Scramble. Average handicap"
          courseMatch="stoneHedgeSouth2"
          matchHandicap="average"
          gameplay=""
          player1="gordon"
          player1Handicap="12"
          player2="cam"
          player2Handicap="21"
          player3="jake"
          player3Handicap="21"
          player4="craig"
          player4Handicap="21"
        />
       <MatchOld
          matchId="2.2 - Scramble. Average handicap"
          courseMatch="stoneHedgeSouth2"
          matchHandicap="average"
          gameplay=""
          player1="travis"
          player1Handicap="21"
          player2="dan"
          player2Handicap="23"
          player3="matt"
          player3Handicap="6"
          player4="rj"
          player4Handicap="12"
        />
       <MatchOld
          matchId="2.2 - Scramble. Average handicap"
          courseMatch="stoneHedgeSouth2"
          matchHandicap="average"
          gameplay=""
          player1="derek"
          player1Handicap="27"
          player2="evan"
          player2Handicap="27"
          player3="curtis"
          player3Handicap="23"
          player4="dylan"
          player4Handicap="0"
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={pageHash === "#r3-bramble" ? "true" : "false"}
        data-link-id="r3-bramble"
      >
        <div className="course__info">
          <span>Saturday Oct 15, 8:42 AM at </span>
          <a href={course["gullLakeEast1"].link}>
            {course[`gullLakeEast1`].name}
          </a>
        </div>
       <MatchOld
          matchId="3.1 - Bramble. Full handicap"
          courseMatch="gullLakeEast1"
          matchHandicap="full"
          gameplay=""
          player1="travis"
          player1Handicap="21"
          player2="dylan"
          player2Handicap="0"
          player3="jake"
          player3Handicap="21"
          player4="dan"
          player4Handicap="23"
        />
       <MatchOld
          matchId="3.1 - Bramble. Full handicap"
          courseMatch="gullLakeEast1"
          matchHandicap="full"
          gameplay=""
          player1="matt"
          player1Handicap="6"
          player2="rj"
          player2Handicap="12"
          player3="derek"
          player3Handicap="27"
          player4="evan"
          player4Handicap="27"
        />
       <MatchOld
          matchId="3.1 - Bramble. Full handicap"
          courseMatch="gullLakeEast1"
          matchHandicap="full"
          gameplay=""
          player1="curtis"
          player1Handicap="23"
          player2="cam"
          player2Handicap="21"
          player3="gordon"
          player3Handicap="12"
          player4="craig"
          player4Handicap="21"
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={pageHash === "#r3-alternate" ? "true" : "false"}
        data-link-id="r3-alternate"
      >
        <div className="course__info">
          <span>Saturday Oct 15, 8:42 AM at </span>
          <a href={course["gullLakeEast2"].link}>
            {course[`gullLakeEast2`].name}
          </a>
        </div>
       <MatchOld
          matchId="3.2 - Alternate. Average handicap"
          courseMatch="gullLakeEast2"
          matchHandicap="average"
          gameplay=""
          player1="travis"
          player1Handicap="21"
          player2="evan"
          player2Handicap="27"
          player3="derek"
          player3Handicap="27"
          player4="dan"
          player4Handicap="27"
        />
       <MatchOld
          matchId="3.2 - Alternate. Average handicap"
          courseMatch="gullLakeEast2"
          matchHandicap="average"
          gameplay=""
          player1="jake"
          player1Handicap="21"
          player2="craig"
          player2Handicap="21"
          player3="curtis"
          player3Handicap="23"
          player4="dylan"
          player4Handicap="0"
        />
       <MatchOld
          matchId="3.2 - Alternate. Average handicap"
          courseMatch="gullLakeEast2"
          matchHandicap="average"
          gameplay=""
          player1="matt"
          player1Handicap="6"
          player2="cam"
          player2Handicap="21"
          player3="gordon"
          player3Handicap="12"
          player4="rj"
          player4Handicap="12"
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={pageHash === "#r4-scramble" ? "true" : "false"}
        data-link-id="r4-scramble"
      >
        <div className="course__info">
          <span>Saturday Oct 15, 2:33 PM at </span>
          <a href={course["gullLakeWest1"].link}>
            {course[`gullLakeWest1`].name}
          </a>
        </div>
       <MatchOld
          matchId="4.1 - Scramble. Average handicap"
          courseMatch="gullLakeWest1"
          matchHandicap="average"
          gameplay="one-ball"
          player1="matt"
          player1Handicap="6"
          player2="dylan"
          player2Handicap="0"
          player3="jake"
          player3Handicap="21"
          player4="evan"
          player4Handicap="27"
        />
       <MatchOld
          matchId="4.1 - Scramble. Average handicap"
          courseMatch="gullLakeWest1"
          matchHandicap="average"
          gameplay="one-ball"
          player1="travis"
          player1Handicap="21"
          player2="rj"
          player2Handicap="12"
          player3="derek"
          player3Handicap="27"
          player4="craig"
          player4Handicap="21"
        />
       <MatchOld
          matchId="4.1 - Scramble. Average handicap"
          courseMatch="gullLakeWest1"
          matchHandicap="average"
          gameplay="one-ball"
          player1="gordon"
          player1Handicap="12"
          player2="cam"
          player2Handicap="21"
          player3="curtis"
          player3Handicap="23"
          player4="dan"
          player4Handicap="23"
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={pageHash === "#r4-singles" ? "true" : "false"}
        data-link-id="r4-singles"
      >
        <div className="course__info">
          <span>Saturday Oct 15, 2:33 PM at </span>
          <a href={course["gullLakeWest2"].link}>
            {course[`gullLakeWest2`].name}
          </a>
        </div>
       <MatchOld
          matchId="4.2 - Singles Matches. Full handicap"
          courseMatch="gullLakeWest2"
          matchHandicap="full"
          gameplay=""
          player1="matt"
          player1Handicap="6"
          player2="dylan"
          player2Handicap="0"
        />
       <MatchOld
          matchId="4.2 - Singles Matches. Full handicap"
          courseMatch="gullLakeWest2"
          matchHandicap="full"
          gameplay=""
          player1="gordon"
          player1Handicap="12"
          player2="rj"
          player2Handicap="12"
        />
       <MatchOld
          matchId="4.2 - Singles Matches. Full handicap"
          courseMatch="gullLakeWest2"
          matchHandicap="full"
          gameplay=""
          player1="curtis"
          player1Handicap="21"
          player2="craig"
          player2Handicap="23"
        />
       <MatchOld
          matchId="4.2 - Singles Matches. Full handicap"
          courseMatch="gullLakeWest2"
          matchHandicap="full"
          gameplay=""
          player1="jake"
          player1Handicap="21"
          player2="cam"
          player2Handicap="30"
        />
       <MatchOld
          matchId="4.2 - Singles Matches. Full handicap"
          courseMatch="gullLakeWest2"
          matchHandicap="full"
          gameplay=""
          player1="travis"
          player1Handicap="21"
          player2="dan"
          player2Handicap="30"
        />
       <MatchOld
          matchId="4.2 - Singles Matches. Full handicap"
          courseMatch="gullLakeWest2"
          matchHandicap="full"
          gameplay=""
          player1="derek"
          player1Handicap="27"
          player2="evan"
          player2Handicap="27"
        />
      </MatchNavSection>
    </Layout>
  )
}

export default TopicPage
