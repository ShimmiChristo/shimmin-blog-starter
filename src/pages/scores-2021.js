import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { CourseInfo } from "../hooks/get-course-info"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import Match from "../components/match"
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
      <SEO title="2021 Scores" />
      <LandingPageHeader title="Scores" />
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

      <MatchScore />
      {/* player1 and player3 are on the same team */}
      <MatchNavSection
        data-visible={pageHash === "#r1-best-ball" ? "true" : "false"}
        data-link-id="r1-best-ball"
      >
        <div className="course__info">
          <a href={course["tribute1"].link}>{course[`tribute1`].name}</a>
        </div>
        <Match
          matchId="1.1 - Best Ball. Full handicap"
          courseMatch="tribute1"
          matchHandicap="full"
          gameplay=""
          player1="matt"
          player1Handicap="10"
          player2="dylan"
          player2Handicap="2"
          player3="chris"
          player3Handicap="16"
          player4="rj"
          player4Handicap="16"
        />
        <Match
          matchId="1.1 - Best Ball Bramble. Full handicap"
          courseMatch="tribute1"
          matchHandicap="full"
          gameplay=""
          player1="derek"
          player1Handicap="28"
          player2="dan"
          player2Handicap="36"
          player3="travis"
          player3Handicap="22"
          player4="craig"
          player4Handicap="22"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r1-two-ball-bramble" ? "true" : "false"}
        data-link-id="r1-two-ball-bramble"
      >
        <div className="course__info">
          <a href={course["tribute2"].link}>{course[`tribute2`].name}</a>
        </div>
        <Match
          matchId="1.2 - 2 Ball Bramble. Full handicap"
          courseMatch="tribute2"
          matchHandicap="full"
          gameplay="two-ball"
          player1="matt"
          player1Handicap="10"
          player2="rj"
          player2Handicap="16"
          player3="derek"
          player3Handicap="28"
          player4="craig"
          player4Handicap="22"
        />
        <Match
          matchId="1.2 - 2 Ball Bramble. Full handicap"
          courseMatch="tribute2"
          matchHandicap="full"
          gameplay="two-ball"
          player1="chris"
          player1Handicap="16"
          player2="dylan"
          player2Handicap="2"
          player3="travis"
          player3Handicap="22"
          player4="dan"
          player4Handicap="36"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r2-bramble-alternate" ? "true" : "false"}
        data-link-id="r2-bramble-alternate"
      >
        <div className="course__info">
          <a href={course["classic1"].link}>{course[`classic1`].name}</a>
        </div>
        <Match
          matchId="2.1 - Bramble Alternate. Average handicap"
          courseMatch="classic1"
          matchHandicap="average"
          gameplay=""
          player1="chris"
          player1Handicap="16"
          player2="rj"
          player2Handicap="16"
          player3="derek"
          player3Handicap="32"
          player4="dan"
          player4Handicap="24"
        />
        <Match
          matchId="2.1 - Bramble Alternate. Average handicap"
          courseMatch="classic1"
          matchHandicap="average"
          gameplay=""
          player1="matt"
          player1Handicap="10"
          player2="dylan"
          player2Handicap="2"
          player3="travis"
          player3Handicap="10"
          player4="craig"
          player4Handicap="22"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r2-scramble" ? "true" : "false"}
        data-link-id="r2-scramble"
      >
        <div className="course__info">
          <a href={course["classic2"].link}>{course[`classic2`].name}</a>
        </div>
        <Match
          matchId="2.2 - Scramble. Average handicap"
          courseMatch="classic2"
          matchHandicap="average"
          gameplay=""
          player1="matt"
          player1Handicap="10"
          player2="dylan"
          player2Handicap="2"
          player3="chris"
          player3Handicap="16"
          player4="rj"
          player4Handicap="16"
        />
        <Match
          matchId="2.2 - Scramble. Average handicap"
          courseMatch="classic2"
          matchHandicap="average"
          gameplay=""
          player1="derek"
          player1Handicap="28"
          player2="dan"
          player2Handicap="20"
          player3="travis"
          player3Handicap="28"
          player4="craig"
          player4Handicap="20"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r3-best-ball" ? "true" : "false"}
        data-link-id="r3-best-ball"
      >
        <div className="course__info">
          <a href={course["gaylordGolfClub1"].link}>
            {course[`gaylordGolfClub1`].name}
          </a>
        </div>
        <Match
          matchId="3.1 - Best Ball. Full handicap"
          courseMatch="gaylordGolfClub1"
          matchHandicap="full"
          gameplay=""
          player1="matt"
          player1Handicap="10"
          player2="dylan"
          player2Handicap="2"
          player3="derek"
          player3Handicap="28"
          player4="dan"
          player4Handicap="22"
        />
        <Match
          matchId="3.1 - Best Ball. Full handicap"
          courseMatch="gaylordGolfClub1"
          matchHandicap="full"
          gameplay=""
          player1="chris"
          player1Handicap="16"
          player2="craig"
          player2Handicap="22"
          player3="travis"
          player3Handicap="22"
          player4="rj"
          player4Handicap="16"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r3-singles" ? "true" : "false"}
        data-link-id="r3-singles"
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
      </MatchNavSection>
    </Layout>
  )
}

export default TopicPage
