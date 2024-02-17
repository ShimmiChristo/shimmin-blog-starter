import React, { useState, useEffect } from "react"
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
  // const [activetab, setActivetab] = useState(false)

  const siteTitle = title || `Scores`

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

  const p1 = "dylan"
  const p2 = "rj"
  const p3 = "craig"
  const p4 = "cam"
  const p5 = "dan"
  const p6 = "evan"
  const p7 = "matt"
  const p8 = "chris"
  const p9 = "jake"
  const p10 = "travis"
  const p11 = "derek"
  const p12 = "curtis"

  const matchesArr = [
    {
      matchId: "1.1 - Best Ball. Full handicap",
      year: "_2023",
      courseMatch: "boyneHighlandsArthurHills",
      holes: "front",
      matchHandicap: "full",
      gameplay: "one-ball",
      player1MatchHandicap: "",
      player2MatchHandicap: "",
      player3MatchHandicap: "",
      player4MatchHandicap: "",
    },
    {
      matchId: "1.2 - 2 Best Ball. Full handicap",
      year: "_2023",
      courseMatch: "boyneHighlandsArthurHills",
      holes: "back",
      matchHandicap: "full",
      gameplay: "two-ball",
      player1MatchHandicap: "",
      player2MatchHandicap: "",
      player3MatchHandicap: "",
      player4MatchHandicap: "",
    },
    {
      matchId: "2.1 - Alternate. 50% HC",
      year: "_2023",
      courseMatch: "boyneHighlandsDonaldRoss",
      holes: "front",
      matchHandicap: "full",
      gameplay: "alternate",
      player1MatchHandicap: "",
      player2MatchHandicap: "",
      player3MatchHandicap: "",
      player4MatchHandicap: "",
    },
    {
      matchId: "2.2 - Scramble. 35% low HC + 15% high HC",
      year: "_2023",
      courseMatch: "boyneHighlandsDonaldRoss",
      holes: "back",
      matchHandicap: "average",
      gameplay: "scramble",
      player1MatchHandicap: "",
      player2MatchHandicap: "",
      player3MatchHandicap: "",
      player4MatchHandicap: "",
    },
    {
      matchId: "3.1 - Bramble. Full HC",
      year: "_2023",
      courseMatch: "boyneHighlandsMoor",
      holes: "front",
      matchHandicap: "full",
      gameplay: "bramble",
      player1MatchHandicap: "",
      player2MatchHandicap: "",
      player3MatchHandicap: "",
      player4MatchHandicap: "",
    },
    {
      matchId: "3.2 - 2 Ball Bramble. Full HC",
      year: "_2023",
      courseMatch: "boyneHighlandsMoor",
      holes: "back",
      matchHandicap: "full",
      gameplay: "two-ball",
      player1MatchHandicap: "",
      player2MatchHandicap: "",
      player3MatchHandicap: "",
      player4MatchHandicap: "",
    },
    {
      matchId: "4.1 - Pinehurst. 60% low HC + 40% high HC",
      year: "_2023",
      courseMatch: "boyneHighlandsHeather",
      holes: "front",
      matchHandicap: "average",
      gameplay: "pinehurst",
      player1MatchHandicap: "",
      player2MatchHandicap: "",
      player3MatchHandicap: "",
      player4MatchHandicap: "",
    },
    {
      matchId: "4.2 - Singles Match. Full HC",
      year: "_2023",
      courseMatch: "boyneHighlandsHeather",
      holes: "back",
      matchHandicap: "full",
      gameplay: "singles",
      player1MatchHandicap: "",
      player2MatchHandicap: "",
      player3MatchHandicap: "",
      player4MatchHandicap: "",
    },
  ]

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
            name: "Alternate",
            round: "Round 2.1",
            link: "r2-alternate",
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
            name: "2 Ball Bramble",
            round: "Round 3.2",
            link: "r3-2-ball-bramble",
          },
          {
            name: "Pinehurst",
            round: "Round 4.1",
            link: "r4-pinehurst",
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
        data-visible={
          (location.pathname === "/scores/" &&
            location.hash === "#r1-best-ball") ||
          (location.pathname === "/scores" && location.hash === "#r1-best-ball")
            ? "true"
            : "false"
        }
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
          player1={p8}
          player2={p1}
          player3={p12}
          player4={p4}
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
          player1={p10}
          player2={p2}
          player3={p11}
          player4={p3}
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
          player1={p7}
          player2={p5}
          player3={p9}
          player4={p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={location.hash === "#r1-two-best-ball" ? "true" : "false"}
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
          player1={p8}
          player2={p1}
          player3={p11}
          player4={p3}
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
          player1={p7}
          player2={p4}
          player3={p10}
          player4={p5}
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
          player1={p9}
          player2={p2}
          player3={p12}
          player4={p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={location.hash === "#r2-alternate" ? "true" : "false"}
        data-link-id="r2-alternate"
      >
        <div className="course__info">
          <span>Friday Sept 22, 2:30 PM at </span>
          <a href={course["boyneHighlandsDonaldRoss"].link}>
            {course[`boyneHighlandsDonaldRoss`].name}
          </a>
        </div>
        <Match
          matchId="2.1 - Alternate. 50% HC"
          year="_2023"
          courseMatch="boyneHighlandsDonaldRoss"
          holes="front"
          matchHandicap="full"
          gameplay="alternate"
          player1={p7}
          player2={p1}
          player3={p9}
          player4={p5}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="2.1 - Alternate. 50% HC"
          year="_2023"
          courseMatch="boyneHighlandsDonaldRoss"
          holes="front"
          matchHandicap="full"
          gameplay="alternate"
          player1={p8}
          player2={p2}
          player3={p10}
          player4={p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="2.1 - Alternate. 50% HC"
          year="_2023"
          courseMatch="boyneHighlandsDonaldRoss"
          holes="front"
          matchHandicap="full"
          gameplay="alternate"
          player1={p11}
          player2={p3}
          player3={p12}
          player4={p4}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={location.hash === "#r2-scramble" ? "true" : "false"}
        data-link-id="r2-scramble"
      >
        <div className="course__info">
          <span>Friday Sept 22, 5:00 PM at </span>
          <a href={course["boyneHighlandsDonaldRoss"].link}>
            {course[`boyneHighlandsDonaldRoss`].name}
          </a>
        </div>
        <Match
          matchId="2.2 - Scramble. 35% low HC + 15% high HC"
          year="_2023"
          courseMatch="boyneHighlandsDonaldRoss"
          holes="back"
          matchHandicap="average"
          gameplay="scramble"
          player1={p8}
          player2={p1}
          player3={p9}
          player4={p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="2.2 - Scramble. 35% low HC + 15% high HC"
          year="_2023"
          courseMatch="boyneHighlandsDonaldRoss"
          holes="back"
          matchHandicap="average"
          gameplay="scramble"
          player1={p10}
          player2={p3}
          player3={p12}
          player4={p5}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="2.2 - Scramble. 35% low HC + 15% high HC"
          year="_2023"
          courseMatch="boyneHighlandsDonaldRoss"
          holes="back"
          matchHandicap="average"
          gameplay="scramble"
          player1={p7}
          player2={p2}
          player3={p11}
          player4={p4}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={location.hash === "#r3-bramble" ? "true" : "false"}
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
          gameplay="bramble"
          player1={p7}
          player2={p3}
          player3={p12}
          player4={p6}
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
          gameplay="bramble"
          player1={p8}
          player2={p4}
          player3={p11}
          player4={p5}
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
          gameplay="bramble"
          player1={p9}
          player2={p1}
          player3={p10}
          player4={p2}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={location.hash === "#r3-2-ball-bramble" ? "true" : "false"}
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
          player1={p8}
          player2={p4}
          player3={p12}
          player4={p6}
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
          player1={p7}
          player2={p1}
          player3={p10}
          player4={p3}
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
          player1={p9}
          player2={p2}
          player3={p11}
          player4={p5}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={location.hash === "#r4-pinehurst" ? "true" : "false"}
        data-link-id="r4-pinehurst"
      >
        <div className="course__info">
          <span>Saturday Sept 23, 2:50 PM at </span>
          <a href={course["boyneHighlandsHeather"].link}>
            {course[`boyneHighlandsHeather`].name}
          </a>
        </div>

        <Match
          matchId="4.1 - Pinehurst. 60% low HC + 40% high HC"
          year="_2023"
          courseMatch="boyneHighlandsHeather"
          holes="front"
          matchHandicap="average"
          gameplay="pinehurst"
          player1={p12}
          player2={p5}
          player3={p11}
          player4={p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="4.1 - Pinehurst. 60% low HC + 40% high HC"
          year="_2023"
          courseMatch="boyneHighlandsHeather"
          holes="front"
          matchHandicap="average"
          gameplay="pinehurst"
          player1={p9}
          player2={p3}
          player3={p10}
          player4={p4}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId="4.1 - Pinehurst. 60% low HC + 40% high HC"
          year="_2023"
          courseMatch="boyneHighlandsHeather"
          holes="front"
          matchHandicap="average"
          gameplay="pinehurst"
          player1={p7}
          player2={p1}
          player3={p8}
          player4={p2}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={location.hash === "#r4-singles" ? "true" : "false"}
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
          player1={p11}
          player2={p5}
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
          player1={p12}
          player2={p6}
          player1MatchHandicap="27"
          player2MatchHandicap=""
        />
        <Match
          matchId="4.2 - Singles Match. Full HC"
          year="_2023"
          courseMatch="boyneHighlandsHeather"
          holes="back"
          matchHandicap="full"
          gameplay="singles"
          player1={p10}
          player2={p4}
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
          player1={p9}
          player2={p3}
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
          player1={p8}
          player2={p2}
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
          player1={p7}
          player2={p1}
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
