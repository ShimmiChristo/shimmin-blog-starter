import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { CourseInfo } from "../hooks/get-course-info"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import Match from "../components/match"
// import MatchUpdate from "../components/match-UPDATE"
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
      }
    }
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Scores" />
      <LandingPageHeader title="Scores" />
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
            name: "Bramble",
            round: "Round 2.1",
            link: "r2-bramble",
          },
          {
            name: "Scramble",
            round: "Round 2.2",
            link: "r2-scramble",
          },
          {
            name: "Bramble",
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

      <MatchScore year="_2022" />

      <MatchNavSection
        data-visible={pageHash === "#r1-best-ball" ? "true" : "false"}
        data-link-id="r1-best-ball"
      >
        <div className="course__info">
          <a href={course["stoatinBrae1"].link}>
            {course[`stoatinBrae1`].name}
          </a>
        </div>
        <Match
          matchId="1.1 - Best Ball. Full handicap"
          courseMatch="stoatinBrae1"
          matchHandicap="full"
          gameplay=""
          year="_2021"
          player1="matt"
          player1Handicap="7"
          player2="dylan"
          player2Handicap="0"
          player3="gordon"
          player3Handicap="12"
          player4="rj"
          player4Handicap="12"
        />
        <Match
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
        <Match
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
          <a href={course["stoatinBrae2"].link}>
            {course[`stoatinBrae2`].name}
          </a>
        </div>
        <Match
          matchId="1.2 - 2 Best Ball. Full handicap"
          courseMatch="stoatinBrae2"
          matchHandicap="full"
          gameplay="two-ball"
          player1="matt"
          player1Handicap="7"
          player2="dylan"
          player2Handicap="0"
          player3="curtis"
          player3Handicap="23"
          player4="dan"
          player4Handicap="23"
        />
        <Match
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
        <Match
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
          <a href={course["stoneHedgeSouth1"].link}>
            {course[`stoneHedgeSouth1`].name}
          </a>
        </div>
        <Match
          matchId="2.1 - Bramble. Full handicap"
          courseMatch="stoneHedgeSouth1"
          matchHandicap="full"
          gameplay=""
          player1="gordon"
          player1Handicap="12"
          player2="rj"
          player2Handicap="12"
          player3="travis"
          player3Handicap="21"
          player4="craig"
          player4Handicap="21"
        />
        <Match
          matchId="2.1 - Bramble. Full handicap"
          courseMatch="stoneHedgeSouth1"
          matchHandicap="full"
          gameplay=""
          player1="jake"
          player1Handicap="21"
          player2="dylan"
          player2Handicap="0"
          player3="derek"
          player3Handicap="27"
          player4="cam"
          player4Handicap="21"
        />
        <Match
          matchId="2.1 - Bramble. Full handicap"
          courseMatch="stoneHedgeSouth1"
          matchHandicap="full"
          gameplay=""
          player1="matt"
          player1Handicap="7"
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
          <a href={course["stoneHedgeSouth2"].link}>
            {course[`stoneHedgeSouth2`].name}
          </a>
        </div>
        <Match
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
        <Match
          matchId="2.2 - Scramble. Average handicap"
          courseMatch="stoneHedgeSouth2"
          matchHandicap="average"
          gameplay=""
          player1="travis"
          player1Handicap="21"
          player2="dan"
          player2Handicap="23"
          player3="matt"
          player3Handicap="7"
          player4="rj"
          player4Handicap="12"
        />
        <Match
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
          <a href={course["gullLakeEast1"].link}>
            {course[`gullLakeEast1`].name}
          </a>
        </div>
        <Match
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
        <Match
          matchId="3.1 - Bramble. Full handicap"
          courseMatch="gullLakeEast1"
          matchHandicap="full"
          gameplay=""
          player1="matt"
          player1Handicap="7"
          player2="rj"
          player2Handicap="12"
          player3="derek"
          player3Handicap="27"
          player4="evan"
          player4Handicap="27"
        />
        <Match
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
          <a href={course["gullLakeEast2"].link}>
            {course[`gullLakeEast2`].name}
          </a>
        </div>
        <Match
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
        <Match
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
        <Match
          matchId="3.2 - Alternate. Average handicap"
          courseMatch="gullLakeEast2"
          matchHandicap="average"
          gameplay=""
          player1="matt"
          player1Handicap="7"
          player2="cam"
          player2Handicap="21"
          player3="gordon"
          player3Handicap="12"
          player4="rj"
          player4Handicap="12"
        />
      </MatchNavSection>

      {/* <MatchNavSection
        data-visible={pageHash === "#r3-alternate" ? "true" : "false"}
        data-link-id="r3-alternate"
      >
        <div className="course__info">
          <a href={course["gaylordGolfClub2"].link}>
            {course[`gaylordGolfClub2`].name}
          </a>
        </div>
        <Match
          matchId="3.2 - Singles Matches. Full handicap"
          courseMatch="gaylordGolfClub2"
          matchHandicap="full"
          gameplay=""
          player1="matt"
          player1Handicap="10"
          player2="dylan"
          player2Handicap="2"
        />
        <Match
          matchId="3.2 - Singles Matches. Full handicap"
          courseMatch="gaylordGolfClub2"
          matchHandicap="full"
          gameplay=""
          player1="travis"
          player1Handicap="22"
          player2="craig"
          player2Handicap="22"
        />
        <Match
          matchId="3.2 - Singles Matches. Full handicap"
          courseMatch="gaylordGolfClub2"
          matchHandicap="full"
          gameplay=""
          player1="chris"
          player1Handicap="16"
          player2="rj"
          player2Handicap="16"
        />
        <Match
          matchId="3.2 - Singles Matches. Full handicap"
          courseMatch="gaylordGolfClub2"
          matchHandicap="full"
          gameplay=""
          player1="derek"
          player1Handicap="28"
          player2="dan"
          player2Handicap="36"
        />
      </MatchNavSection> */}
    </Layout>
  )
}

export default TopicPage
