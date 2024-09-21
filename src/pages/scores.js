import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { CourseInfo } from "../hooks/get-course-info"

import HighlightCountdown from "../components/highlights/coutdown-hightlight"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import Match from "../components/match"
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
  const startDate = "september, 27, 2024 8:30:00 EST"
  const locationName = "Bay Harbor Golf Club"
  const courseUrl = "https://bayharborgolf.com/linksquarry"

  const p1 = "dylan"
  const p2 = "rj"
  const p3 = "craig"
  const p4 = "jake"
  const p5 = "evan"
  const p6 = "dan"
  const p7 = "matt"
  const p8 = "chris"
  const p9 = "gordon"
  const p10 = "derek"
  const p11 = "travis"
  const p12 = "curtis"

  const playerTees = {
    p1: "purple",
    p2: "purple",
    p3: "orange",
    p4: "purple",
    p5: "orange",
    p6: "orange",
    p7: "purple",
    p8: "purple",
    p9: "purple",
    p10: "orange",
    p11: "orange",
    p12: "orange",
  }

  const matchesArr = [
    {
      matchId: " - Best Ball. Full handicap",
      year: "_2024",
      courseMatch: "bayHarborGolfClub",
      holes: "front",
      matchHandicap: "full",
      gameplay: "one-ball",
      player1MatchHandicap: "",
      player2MatchHandicap: "",
      player3MatchHandicap: "",
      player4MatchHandicap: "",
    },
    {
      matchId: " - 2 Best Ball. Full handicap",
      year: "_2024",
      courseMatch: "bayHarborGolfClub",
      holes: "back",
      matchHandicap: "full",
      gameplay: "two-ball",
      player1MatchHandicap: "",
      player2MatchHandicap: "",
      player3MatchHandicap: "",
      player4MatchHandicap: "",
    },
    {
      matchId: " - Alternate. 50% HC",
      year: "_2024",
      courseMatch: "boyneHighlandsMoor",
      holes: "front",
      matchHandicap: "full",
      gameplay: "alternate",
      player1MatchHandicap: "",
      player2MatchHandicap: "",
      player3MatchHandicap: "",
      player4MatchHandicap: "",
    },
    {
      matchId: " - Scramble. 35% low HC + 15% high HC",
      year: "_2024",
      courseMatch: "boyneHighlandsMoor",
      holes: "back",
      matchHandicap: "average",
      gameplay: "scramble",
      player1MatchHandicap: "",
      player2MatchHandicap: "",
      player3MatchHandicap: "",
      player4MatchHandicap: "",
    },
    {
      matchId: " - Bramble. 80% HC",
      year: "_2024",
      courseMatch: "boyneHighlandsArthurHills",
      holes: "front",
      matchHandicap: "full",
      gameplay: "bramble",
      player1MatchHandicap: "",
      player2MatchHandicap: "",
      player3MatchHandicap: "",
      player4MatchHandicap: "",
    },
    {
      matchId: " - 2 Ball Bramble. 80% HC",
      year: "_2024",
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
      matchId: " - Pinehurst. 60% low HC + 40% high HC",
      year: "_2024",
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
      matchId: " - Singles Match. Full HC",
      year: "_2024",
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

  const day1 = {
    round1: {
      times: ["8:30 AM", "11:00 AM"],
      date: "Friday Sept 27",
      courseLink: course["bayHarborGolfClub"].link,
      courseName: course["bayHarborGolfClub"].name,
    },
    round2: {
      times: ["2:30 PM", "5:00 PM"],
      date: "Friday Sept 27",
      courseLink: course["boyneHighlandsMoor"].link,
      courseName: course["boyneHighlandsMoor"].name,
    },
  }
  const day2 = {
    round1: {
      times: ["8:00 AM", "10:30 AM"],
      date: "Saturday Sept 28",
      courseLink: course["boyneHighlandsArthurHills"].link,
      courseName: course["boyneHighlandsArthurHills"].name,
    },
    round2: {
      times: ["2:00 PM", "4:30 PM"],
      date: "Saturday Sept 28",
      courseLink: course["boyneHighlandsHeather"].link,
      courseName: course["boyneHighlandsHeather"].name,
    },
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Scores" />
      <LandingPageHeader title="Scores" />

      <HighlightCountdown
        startTime={startDate}
        location={locationName}
        courseUrl={courseUrl}
      />

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

      <MatchScore year="_2024" lastYearWinner="blue" />
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
          <span>Friday Sept 27, 8:30 AM at </span>
          <a href={course["bayHarborGolfClub"].link}>
            {course[`bayHarborGolfClub`].name}
          </a>
        </div>
        <Match
          matchId={`1 ${matchesArr[0].matchId}`}
          year={matchesArr[0].year}
          courseMatch={matchesArr[0].courseMatch}
          holes={matchesArr[0].holes}
          matchHandicap={matchesArr[0].matchHandicap}
          gameplay={matchesArr[0].gameplay}
          player1={p10}
          player2={p2}
          player3={p11}
          player4={p3}
          player1Tees={playerTees.p7}
          player2Tees={playerTees.p1}
          player3Tees={playerTees.p8}
          player4Tees={playerTees.p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`2 ${matchesArr[0].matchId}`}
          year={matchesArr[0].year}
          courseMatch={matchesArr[0].courseMatch}
          holes={matchesArr[0].holes}
          matchHandicap={matchesArr[0].matchHandicap}
          gameplay={matchesArr[0].gameplay}
          player1={p9}
          player2={p4}
          player3={p12}
          player4={p5}
          player1Tees={playerTees.p9}
          player2Tees={playerTees.p4}
          player3Tees={playerTees.p12}
          player4Tees={playerTees.p5}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`3 ${matchesArr[0].matchId}`}
          year={matchesArr[0].year}
          courseMatch={matchesArr[0].courseMatch}
          holes={matchesArr[0].holes}
          matchHandicap={matchesArr[0].matchHandicap}
          gameplay={matchesArr[0].gameplay}
          player1={p7}
          player2={p1}
          player3={p8}
          player4={p6}
          player1Tees={playerTees.p10}
          player2Tees={playerTees.p2}
          player3Tees={playerTees.p11}
          player4Tees={playerTees.p3}
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
          <span>Friday Sept 27, 11:00 AM at </span>
          <a href={course["bayHarborGolfClub"].link}>
            {course[`bayHarborGolfClub`].name}
          </a>
        </div>
        <Match
          matchId={`4 ${matchesArr[1].matchId}`}
          year={matchesArr[1].year}
          courseMatch={matchesArr[1].courseMatch}
          holes={matchesArr[1].holes}
          matchHandicap={matchesArr[1].matchHandicap}
          gameplay={matchesArr[1].gameplay}
          player1={p10}
          player2={p2}
          player3={p12}
          player4={p4}
          player1Tees={playerTees.p7}
          player2Tees={playerTees.p5}
          player3Tees={playerTees.p9}
          player4Tees={playerTees.p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`5 ${matchesArr[1].matchId}`}
          year={matchesArr[1].year}
          courseMatch={matchesArr[1].courseMatch}
          holes={matchesArr[1].holes}
          matchHandicap={matchesArr[1].matchHandicap}
          gameplay={matchesArr[1].gameplay}
          player1={p7}
          player2={p5}
          player3={p9}
          player4={p6}
          player1Tees={playerTees.p10}
          player2Tees={playerTees.p2}
          player3Tees={playerTees.p12}
          player4Tees={playerTees.p4}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`6 ${matchesArr[1].matchId}`}
          year={matchesArr[1].year}
          courseMatch={matchesArr[1].courseMatch}
          holes={matchesArr[1].holes}
          matchHandicap={matchesArr[1].matchHandicap}
          gameplay={matchesArr[1].gameplay}
          player1={p8}
          player2={p1}
          player3={p11}
          player4={p3}
          player1Tees={playerTees.p8}
          player2Tees={playerTees.p1}
          player3Tees={playerTees.p11}
          player4Tees={playerTees.p3}
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
          <span>Friday Sept 27, 2:30 PM at </span>
          <a href={course["boyneHighlandsMoor"].link}>
            {course[`boyneHighlandsMoor`].name}
          </a>
        </div>
        <Match
          matchId={`7 ${matchesArr[2].matchId}`}
          year={matchesArr[2].year}
          courseMatch={matchesArr[2].courseMatch}
          holes={matchesArr[2].holes}
          matchHandicap={matchesArr[2].matchHandicap}
          gameplay={matchesArr[2].gameplay}
          player1={p7}
          player2={p3}
          player3={p12}
          player4={p5}
          player1Tees={playerTees.p7}
          player2Tees={playerTees.p3}
          player3Tees={playerTees.p12}
          player4Tees={playerTees.p5}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`8 ${matchesArr[2].matchId}`}
          year={matchesArr[2].year}
          courseMatch={matchesArr[2].courseMatch}
          holes={matchesArr[2].holes}
          matchHandicap={matchesArr[2].matchHandicap}
          gameplay={matchesArr[2].gameplay}
          player1={p8}
          player2={p4}
          player3={p10}
          player4={p6}
          player1Tees={playerTees.p8}
          player2Tees={playerTees.p4}
          player3Tees={playerTees.p10}
          player4Tees={playerTees.p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`9 ${matchesArr[2].matchId}`}
          year={matchesArr[2].year}
          courseMatch={matchesArr[2].courseMatch}
          holes={matchesArr[2].holes}
          matchHandicap={matchesArr[2].matchHandicap}
          gameplay={matchesArr[2].gameplay}
          player1={p9}
          player2={p1}
          player3={p11}
          player4={p2}
          player1Tees={playerTees.p9}
          player2Tees={playerTees.p1}
          player3Tees={playerTees.p11}
          player4Tees={playerTees.p2}
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
          <span>Friday Sept 27, 5:00 PM at </span>
          <a href={course["boyneHighlandsMoor"].link}>
            {course[`boyneHighlandsMoor`].name}
          </a>
        </div>
        <Match
          matchId={`10 ${matchesArr[3].matchId}`}
          year={matchesArr[3].year}
          courseMatch={matchesArr[3].courseMatch}
          holes={matchesArr[3].holes}
          matchHandicap={matchesArr[3].matchHandicap}
          gameplay={matchesArr[3].gameplay}
          player1={p7}
          player2={p3}
          player3={p11}
          player4={p4}
          player1Tees={playerTees.p7}
          player2Tees={playerTees.p3}
          player3Tees={playerTees.p11}
          player4Tees={playerTees.p4}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`11 ${matchesArr[3].matchId}`}
          year={matchesArr[3].year}
          courseMatch={matchesArr[3].courseMatch}
          holes={matchesArr[3].holes}
          matchHandicap={matchesArr[3].matchHandicap}
          gameplay={matchesArr[3].gameplay}
          player1={p8}
          player2={p2}
          player3={p12}
          player4={p6}
          player1Tees={playerTees.p8}
          player2Tees={playerTees.p2}
          player3Tees={playerTees.p12}
          player4Tees={playerTees.p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`12 ${matchesArr[3].matchId}`}
          year={matchesArr[3].year}
          courseMatch={matchesArr[3].courseMatch}
          holes={matchesArr[3].holes}
          matchHandicap={matchesArr[3].matchHandicap}
          gameplay={matchesArr[3].gameplay}
          player1={p9}
          player2={p1}
          player3={p10}
          player4={p5}
          player1Tees={playerTees.p9}
          player2Tees={playerTees.p1}
          player3Tees={playerTees.p10}
          player4Tees={playerTees.p5}
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
          <span>Saturday Sept 28, 8:00 AM at </span>
          <a href={course["boyneHighlandsArthurHills"].link}>
            {course[`boyneHighlandsArthurHills`].name}
          </a>
        </div>
        <Match
          matchId={`13 ${matchesArr[4].matchId}`}
          year={matchesArr[4].year}
          courseMatch={matchesArr[4].courseMatch}
          holes={matchesArr[4].holes}
          matchHandicap={matchesArr[4].matchHandicap}
          gameplay={matchesArr[4].gameplay}
          player1={p9}
          player2={p1}
          player3={p12}
          player4={p4}
          player1Tees={playerTees.p9}
          player2Tees={playerTees.p1}
          player3Tees={playerTees.p12}
          player4Tees={playerTees.p4}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`14 ${matchesArr[4].matchId}`}
          year={matchesArr[4].year}
          courseMatch={matchesArr[4].courseMatch}
          holes={matchesArr[4].holes}
          matchHandicap={matchesArr[4].matchHandicap}
          gameplay={matchesArr[4].gameplay}
          player1={p8}
          player2={p2}
          player3={p11}
          player4={p5}
          player1Tees={playerTees.p8}
          player2Tees={playerTees.p2}
          player3Tees={playerTees.p11}
          player4Tees={playerTees.p5}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`15 ${matchesArr[4].matchId}`}
          year={matchesArr[4].year}
          courseMatch={matchesArr[4].courseMatch}
          holes={matchesArr[4].holes}
          matchHandicap={matchesArr[4].matchHandicap}
          gameplay={matchesArr[4].gameplay}
          player1={p7}
          player2={p3}
          player3={p10}
          player4={p6}
          player1Tees={playerTees.p7}
          player2Tees={playerTees.p3}
          player3Tees={playerTees.p10}
          player4Tees={playerTees.p6}
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
          <span>Saturday Sept 28, 11:00 AM at </span>
          <a href={course["boyneHighlandsArthurHills"].link}>
            {course[`boyneHighlandsArthurHills`].name}
          </a>
        </div>
        <Match
          matchId={`16 ${matchesArr[5].matchId}`}
          year={matchesArr[5].year}
          courseMatch={matchesArr[5].courseMatch}
          holes={matchesArr[5].holes}
          matchHandicap={matchesArr[5].matchHandicap}
          gameplay={matchesArr[5].gameplay}
          player1={p11}
          player2={p2}
          player3={p12}
          player4={p4}
          player1Tees={playerTees.p11}
          player2Tees={playerTees.p2}
          player3Tees={playerTees.p12}
          player4Tees={playerTees.p4}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`17 ${matchesArr[5].matchId}`}
          year={matchesArr[5].year}
          courseMatch={matchesArr[5].courseMatch}
          holes={matchesArr[5].holes}
          matchHandicap={matchesArr[5].matchHandicap}
          gameplay={matchesArr[5].gameplay}
          player1={p8}
          player2={p3}
          player3={p9}
          player4={p6}
          player1Tees={playerTees.p8}
          player2Tees={playerTees.p3}
          player3Tees={playerTees.p9}
          player4Tees={playerTees.p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`18 ${matchesArr[5].matchId}`}
          year={matchesArr[5].year}
          courseMatch={matchesArr[5].courseMatch}
          holes={matchesArr[5].holes}
          matchHandicap={matchesArr[5].matchHandicap}
          gameplay={matchesArr[5].gameplay}
          player1={p7}
          player2={p1}
          player3={p10}
          player4={p5}
          player1Tees={playerTees.p7}
          player2Tees={playerTees.p1}
          player3Tees={playerTees.p10}
          player4Tees={playerTees.p5}
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
          <span>Saturday Sept 28, 2:00 PM at </span>
          <a href={course["boyneHighlandsHeather"].link}>
            {course[`boyneHighlandsHeather`].name}
          </a>
        </div>

        <Match
          matchId={`19 ${matchesArr[6].matchId}`}
          year={matchesArr[6].year}
          courseMatch={matchesArr[6].courseMatch}
          holes={matchesArr[6].holes}
          matchHandicap={matchesArr[6].matchHandicap}
          gameplay={matchesArr[6].gameplay}
          player1={p12}
          player2={p5}
          player3={p11}
          player4={p6}
          player1Tees={playerTees.p12}
          player2Tees={playerTees.p5}
          player3Tees={playerTees.p11}
          player4Tees={playerTees.p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`20 ${matchesArr[6].matchId}`}
          year={matchesArr[6].year}
          courseMatch={matchesArr[6].courseMatch}
          holes={matchesArr[6].holes}
          matchHandicap={matchesArr[6].matchHandicap}
          gameplay={matchesArr[6].gameplay}
          player1={p9}
          player2={p3}
          player3={p10}
          player4={p4}
          player1Tees="orange"
          player2Tees={playerTees.p3}
          player3Tees={playerTees.p10}
          player4Tees={playerTees.p4}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`21 ${matchesArr[6].matchId}`}
          year={matchesArr[6].year}
          courseMatch={matchesArr[6].courseMatch}
          holes={matchesArr[6].holes}
          matchHandicap={matchesArr[6].matchHandicap}
          gameplay={matchesArr[6].gameplay}
          player1={p7}
          player2={p1}
          player3={p8}
          player4={p2}
          player1Tees={playerTees.p7}
          player2Tees={playerTees.p1}
          player3Tees={playerTees.p8}
          player4Tees={playerTees.p2}
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
          <span>Saturday Sept 28, 5:00 PM at </span>
          <a href={course["boyneHighlandsHeather"].link}>
            {course[`boyneHighlandsHeather`].name}
          </a>
        </div>
        <Match
          matchId={`22 ${matchesArr[7].matchId}`}
          year={matchesArr[7].year}
          courseMatch={matchesArr[7].courseMatch}
          holes={matchesArr[7].holes}
          matchHandicap={matchesArr[7].matchHandicap}
          gameplay={matchesArr[7].gameplay}
          player1={p12}
          player2={p6}
          player1Tees={playerTees.p12}
          player2Tees={playerTees.p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
        />
        <Match
          matchId={`23 ${matchesArr[7].matchId}`}
          year={matchesArr[7].year}
          courseMatch={matchesArr[7].courseMatch}
          holes={matchesArr[7].holes}
          matchHandicap={matchesArr[7].matchHandicap}
          gameplay={matchesArr[7].gameplay}
          player1={p11}
          player2={p5}
          player1Tees={playerTees.p11}
          player2Tees={playerTees.p5}
          player1MatchHandicap=""
          player2MatchHandicap=""
        />
        <Match
          matchId={`24 ${matchesArr[7].matchId}`}
          year={matchesArr[7].year}
          courseMatch={matchesArr[7].courseMatch}
          holes={matchesArr[7].holes}
          matchHandicap={matchesArr[7].matchHandicap}
          gameplay={matchesArr[7].gameplay}
          player1={p10}
          player2={p4}
          player1Tees={playerTees.p10}
          player2Tees={playerTees.p4}
          player1MatchHandicap=""
          player2MatchHandicap=""
        />
        <Match
          matchId={`25 ${matchesArr[7].matchId}`}
          year={matchesArr[7].year}
          courseMatch={matchesArr[7].courseMatch}
          holes={matchesArr[7].holes}
          matchHandicap={matchesArr[7].matchHandicap}
          gameplay={matchesArr[7].gameplay}
          player1={p9}
          player2={p3}
          player1Tees="orange"
          player2Tees={playerTees.p3}
          player1MatchHandicap=""
          player2MatchHandicap=""
        />

        <Match
          matchId={`26 ${matchesArr[7].matchId}`}
          year={matchesArr[7].year}
          courseMatch={matchesArr[7].courseMatch}
          holes={matchesArr[7].holes}
          matchHandicap={matchesArr[7].matchHandicap}
          gameplay={matchesArr[7].gameplay}
          player1={p8}
          player2={p2}
          player1Tees={playerTees.p8}
          player2Tees={playerTees.p2}
          player1MatchHandicap=""
          player2MatchHandicap=""
        />
        <Match
          matchId={`27 ${matchesArr[7].matchId}`}
          year={matchesArr[7].year}
          courseMatch={matchesArr[7].courseMatch}
          holes={matchesArr[7].holes}
          matchHandicap={matchesArr[7].matchHandicap}
          gameplay={matchesArr[7].gameplay}
          player1={p7}
          player2={p1}
          player1Tees={playerTees.p7}
          player2Tees={playerTees.p1}
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
