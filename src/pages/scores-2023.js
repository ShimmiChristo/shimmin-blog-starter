import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { CourseInfo } from "../hooks/get-course-info"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import Match from "../components/match-UPDATE"
import MatchScore from "../components/match-score"
import MatchNav from "../components/match-nav"
import "../styles/match.css"

const TopicPage = ({ location }) => {
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
      <SEO title="2023 Scores" />
      <LandingPageHeader title="2023 Scores" />
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
            name: "Pinehurst",
            round: "Round 2.1",
            link: "r2-pinehurst",
          },
          {
            name: "Alternate",
            round: "Round 2.2",
            link: "r2-alternate",
          },
          {
            name: "1 Ball Bramble",
            round: "Round 3.1",
            link: "r3-bramble",
          },
          {
            name: "2 Ball Bramble",
            round: "Round 3.2",
            link: "r3-2-ball-bramble",
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

      <MatchScore year="_2023" lastYearWinner="green" />
      <MatchNavSection
        data-visible={pageHash === "#r1-best-ball" ? "true" : "false"}
        data-link-id="r1-best-ball"
      >
        <div className="course__info">
          <span>Friday Sept 22, 8:30 AM at </span>
          <a href={course["boyneHighlandsArthurHills"].link}>
            {course[`boyneHighlandsArthurHills`].name}
          </a>
        </div>
        <Match
          matchId="1.1 - Best Ball. Full handicap"
          year="_2023"
          courseMatch="boyneHighlandsArthurHills"
          holes="front"
          matchHandicap="full"
          gameplay="one-ball"
          player1="gordon"
          player2="dylan"
          player3="derek"
          player4="dan"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="1.1 - Best Ball. Full handicap"
          year="_2023"
          courseMatch="boyneHighlandsArthurHills"
          holes="front"
          matchHandicap="full"
          gameplay="one-ball"
          player1="curtis"
          player2="rj"
          player3="travis"
          player4="craig"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="1.1 - Best Ball. Full handicap"
          year="_2023"
          courseMatch="boyneHighlandsArthurHills"
          holes="front"
          matchHandicap="full"
          gameplay="one-ball"
          player1="matt"
          player2="cam"
          player3="chris"
          player4="evan"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r1-two-best-ball" ? "true" : "false"}
        data-link-id="r1-two-best-ball"
      >
        <div className="course__info">
          <span>Friday Sept 22, 11:00 AM at </span>
          <a href={course["boyneHighlandsArthurHills"].link}>
            {course[`boyneHighlandsArthurHills`].name}
          </a>
        </div>
        <Match
          matchId="1.2 - 2 Best Ball. Full handicap"
          year="_2023"
          courseMatch="boyneHighlandsArthurHills"
          holes="back"
          matchHandicap="full"
          gameplay="two-ball"
          player1="gordon"
          player2="dylan"
          player3="travis"
          player4="craig"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="1.2 - 2 Best Ball. Full handicap"
          year="_2023"
          courseMatch="boyneHighlandsArthurHills"
          holes="back"
          matchHandicap="full"
          gameplay="two-ball"
          player1="matt"
          player2="dan"
          player3="curtis"
          player4="cam"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="1.2 - 2 Best Ball. Full handicap"
          year="_2023"
          courseMatch="boyneHighlandsArthurHills"
          holes="back"
          matchHandicap="full"
          gameplay="two-ball"
          player1="chris"
          player2="rj"
          player3="derek"
          player4="evan"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r2-pinehurst" ? "true" : "false"}
        data-link-id="r2-pinehurst"
      >
        <div className="course__info">
          <span>Friday Sept 22, 2:30 PM at </span>
          <a href={course["boyneHighlandsDonaldRoss"].link}>
            {course[`boyneHighlandsDonaldRoss`].name}
          </a>
        </div>
        <Match
          matchId="2.1 - Pinehurst. 60% low HC + 40% high HC"
          year="_2023"
          courseMatch="boyneHighlandsDonaldRoss"
          holes="front"
          matchHandicap="full"
          gameplay="pinehurst"
          player1="matt"
          player2="dylan"
          player3="chris"
          player4="cam"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="2.1 - Pinehurst. 60% low HC + 40% high HC"
          year="_2023"
          courseMatch="boyneHighlandsDonaldRoss"
          holes="front"
          matchHandicap="full"
          gameplay="pinehurst"
          player1="gordon"
          player2="rj"
          player3="curtis"
          player4="evan"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="2.1 - Pinehurst. 60% low HC + 40% high HC"
          year="_2023"
          courseMatch="boyneHighlandsDonaldRoss"
          holes="front"
          matchHandicap="full"
          gameplay="pinehurst"
          player1="travis"
          player2="craig"
          player3="derek"
          player4="dan"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={pageHash === "#r2-alternate" ? "true" : "false"}
        data-link-id="r2-alternate"
      >
        <div className="course__info">
          <span>Friday Sept 22, 5:00 PM at </span>
          <a href={course["boyneHighlandsDonaldRoss"].link}>
            {course[`boyneHighlandsDonaldRoss`].name}
          </a>
        </div>
        <Match
          matchId="2.2 - Alternate. 50% HC"
          year="_2023"
          courseMatch="boyneHighlandsDonaldRoss"
          holes="back"
          matchHandicap="average"
          gameplay="alternate"
          player1="gordon"
          player2="dylan"
          player3="chris"
          player4="evan"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="2.2 - Alternate. 50% HC"
          year="_2023"
          courseMatch="boyneHighlandsDonaldRoss"
          holes="back"
          matchHandicap="average"
          gameplay="alternate"
          player1="curtis"
          player2="craig"
          player3="derek"
          player4="cam"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="2.2 - Alternate. 50% HC"
          year="_2023"
          courseMatch="boyneHighlandsDonaldRoss"
          holes="back"
          matchHandicap="average"
          gameplay="alternate"
          player1="matt"
          player2="rj"
          player3="travis"
          player4="dan"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={pageHash === "#r3-bramble" ? "true" : "false"}
        data-link-id="r3-bramble"
      >
        <div className="course__info">
          <span>Saturday Sept 23, 8:50 AM at </span>
          <a href={course["boyneHighlandsMoor"].link}>
            {course[`boyneHighlandsMoor`].name}
          </a>
        </div>
        <Match
          matchId="3.1 - Bramble. Full HC"
          year="_2023"
          courseMatch="boyneHighlandsMoor"
          holes="front"
          matchHandicap="full"
          gameplay="one-ball"
          player1="matt"
          player2="craig"
          player3="derek"
          player4="evan"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="3.1 - Bramble. Full HC"
          year="_2023"
          courseMatch="boyneHighlandsMoor"
          holes="front"
          matchHandicap="full"
          gameplay="one-ball"
          player1="gordon"
          player2="dan"
          player3="travis"
          player4="cam"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="3.1 - Bramble. Full HC"
          year="_2023"
          courseMatch="boyneHighlandsMoor"
          holes="front"
          matchHandicap="full"
          gameplay="one-ball"
          player1="chris"
          player2="dylan"
          player3="curtis"
          player4="rj"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={pageHash === "#r3-2-ball-bramble" ? "true" : "false"}
        data-link-id="r3-2-ball-bramble"
      >
        <div className="course__info">
          <span>Saturday Sept 23, 11:30 AM at </span>
          <a href={course["boyneHighlandsMoor"].link}>
            {course[`boyneHighlandsMoor`].name}
          </a>
        </div>
        <Match
          matchId="3.2 - 2 Ball Bramble. Full HC"
          year="_2023"
          courseMatch="boyneHighlandsMoor"
          holes="back"
          matchHandicap="full"
          gameplay="two-ball"
          player1="gordon"
          player2="dan"
          player3="derek"
          player4="evan"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="3.2 - 2 Ball Bramble. Full HC"
          year="_2023"
          courseMatch="boyneHighlandsMoor"
          holes="back"
          matchHandicap="full"
          gameplay="two-ball"
          player1="matt"
          player2="dylan"
          player3="curtis"
          player4="craig"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="3.2 - 2 Ball Bramble. Full HC"
          year="_2023"
          courseMatch="boyneHighlandsMoor"
          holes="back"
          matchHandicap="full"
          gameplay="two-ball"
          player1="chris"
          player2="rj"
          player3="travis"
          player4="cam"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={pageHash === "#r4-scramble" ? "true" : "false"}
        data-link-id="r4-scramble"
      >
        <div className="course__info">
          <span>Saturday Sept 23, 2:50 PM at </span>
          <a href={course["boyneHighlandsHeather"].link}>
            {course[`boyneHighlandsHeather`].name}
          </a>
        </div>
        <Match
          matchId="4.1 - Scramble. 35% low HC + 15% high HC"
          year="_2023"
          courseMatch="boyneHighlandsHeather"
          holes="front"
          matchHandicap="average"
          gameplay="scramble"
          player1="matt"
          player2="dylan"
          player3="gordon"
          player4="rj"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="4.1 - Scramble. 35% low HC + 15% high HC"
          year="_2023"
          courseMatch="boyneHighlandsHeather"
          holes="front"
          matchHandicap="average"
          gameplay="scramble"
          player1="chris"
          player2="craig"
          player3="curtis"
          player4="dan"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="4.1 - Scramble. 35% low HC + 15% high HC"
          year="_2023"
          courseMatch="boyneHighlandsHeather"
          holes="front"
          matchHandicap="average"
          gameplay="scramble"
          player1="travis"
          player2="cam"
          player3="derek"
          player4="evan"
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={pageHash === "#r4-singles" ? "true" : "false"}
        data-link-id="r4-singles"
      >
        <div className="course__info">
          <span>Saturday Sept 23, 5:30 PM at </span>
          <a href={course["boyneHighlandsHeather"].link}>
            {course[`boyneHighlandsHeather`].name}
          </a>
        </div>
        <Match
          matchId="4.2 - Singles Match. Full HC"
          year="_2023"
          courseMatch="boyneHighlandsHeather"
          holes="back"
          matchHandicap="full"
          gameplay="singles"
          player1="matt"
          player2="dylan"
          player1MatchHandicap=""
          player2MatchHandicap=""
        />
        <Match
          matchId="4.2 - Singles Match. Full HC"
          year="_2023"
          courseMatch="boyneHighlandsHeather"
          holes="back"
          matchHandicap="full"
          gameplay="singles"
          player1="gordon"
          player2="rj"
          player1MatchHandicap=""
          player2MatchHandicap=""
        />
        <Match
          matchId="4.2 - Singles Match. Full HC"
          year="_2023"
          courseMatch="boyneHighlandsHeather"
          holes="back"
          matchHandicap="full"
          gameplay="singles"
          player1="chris"
          player2="craig"
          player1MatchHandicap=""
          player2MatchHandicap=""
        />
        <Match
          matchId="4.2 - Singles Match. Full HC"
          year="_2023"
          courseMatch="boyneHighlandsHeather"
          holes="back"
          matchHandicap="full"
          gameplay="singles"
          player1="curtis"
          player2="dan"
          player1MatchHandicap=""
          player2MatchHandicap=""
        />
        <Match
          matchId="4.2 - Singles Match. Full HC"
          year="_2023"
          courseMatch="boyneHighlandsHeather"
          holes="back"
          matchHandicap="full"
          gameplay="singles"
          player1="derek"
          player2="cam"
          player1MatchHandicap=""
          player2MatchHandicap=""
        />
        <Match
          matchId="4.2 - Singles Match. Full HC"
          year="_2023"
          courseMatch="boyneHighlandsHeather"
          holes="back"
          matchHandicap="full"
          gameplay="singles"
          player1="travis"
          player2="evan"
          player1MatchHandicap=""
          player2MatchHandicap=""
        />
      </MatchNavSection>
    </Layout>
  )
}

TopicPage.propTypes = {
  location: PropTypes.string,
}

export default TopicPage
