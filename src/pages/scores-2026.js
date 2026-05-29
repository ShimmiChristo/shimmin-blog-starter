import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { CourseInfo } from "../hooks/get-course-info"

// import HighlightCountdown from "../components/highlights/coutdown-hightlight"
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
  // const startDate = "september, 26, 2025 8:30:00 EST"
  // const locationName = "Bay Harbor Golf Club"
  // const courseUrl = "https://www.boynegolf.com/eleven-courses/links-quarry"

  const cupYear = "_2026"

  const p1 = "dylan"
  const p2 = "rj"
  const p3 = "craig"
  const p4 = "dan"
  const p5 = "cam"
  const p6 = "evan"
  const p7 = "matt"
  const p8 = "gordon"
  const p9 = "chris"
  const p10 = "derek"
  const p11 = "travis"
  const p12 = "curtis"

  const playerTees = {
    p1: "purple",
    p2: "purple",
    p3: "purple",
    p4: "orange",
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
      matchId: " - Scramble. 35% low HC + 15% high HC",
      matchName: "Scramble",
      courseMatch: "crookedTree",
      gameplay: "scramble",
      matchTees: ["purple", "orange"],
    },
    {
      matchId: " - Alternate. 50% HC",
      matchName: "Alternate",
      courseMatch: "crookedTree",
      gameplay: "alternate",
      matchTees: ["purple", "orange"],
    },
    {
      matchId: " - Bramble. 75% HC",
      matchName: "Bramble",
      courseMatch: "bayHarborPreserveLinks",
      gameplay: "bramble",
      matchTees: ["brown", "purple"],
    },
    {
      matchId: " - Best Ball Strokeplay. 85% HC",
      matchName: "Best Ball Strokeplay",
      courseMatch: "bayHarborPreserveLinks",
      gameplay: "one-ball-strokeplay",
      matchTees: ["purple", "orange"],
    },
    {
      matchId: " - Best Ball. 90% HC",
      matchName: "Best Ball",
      courseMatch: "boyneHighlandsArthurHills",
      gameplay: "one-ball",
      matchTees: ["purple", "orange"],
    },
    {
      matchId: " - 2 Best Ball. 90% HC",
      matchName: "2 Best Ball",
      courseMatch: "boyneHighlandsArthurHills",
      gameplay: "two-ball",
      matchTees: ["purple", "orange"],
    },

    {
      matchId: " - Pinehurst. 60% low HC + 40% high HC",
      matchName: "Pinehurst",
      courseMatch: "boyneHighlandsDonaldRoss",
      gameplay: "pinehurst",
      matchTees: ["purple", "orange"],
    },
    {
      matchId: " - Singles Match. 100% HC",
      matchName: "Singles",
      courseMatch: "boyneHighlandsDonaldRoss",
      gameplay: "singles",
      matchTees: ["purple", "orange"],
    },
  ]

  const day1 = {
    round1: {
      times: ["8:00 AM", "8:10 AM", "8:20 AM"],
      date: "Friday Sept 25",
      courseLink: course["crookedTree"].link,
      courseName: course["crookedTree"].name,
    },
    round2: {
      times: ["10:30 AM", "10:40 AM", "10:50 AM"],
      date: "Friday Sept 25",
      courseLink: course["crookedTree"].link,
      courseName: course["crookedTree"].name,
    },
    round3: {
      times: ["2:00 PM", "2:10 PM", "2:20 PM"],
      date: "Friday Sept 25",
      courseLink: course["bayHarborPreserveLinks"].link,
      courseName: course["bayHarborPreserveLinks"].name,
    },
    round4: {
      times: ["4:30 PM", "4:40 PM", "4:50 PM"],
      date: "Friday Sept 25",
      courseLink: course["bayHarborPreserveLinks"].link,
      courseName: course["bayHarborPreserveLinks"].name,
    },
  }
  const day2 = {
    round1: {
      times: ["8:00 AM", "8:10 AM", "8:20 AM"],
      date: "Saturday Sept 26",
      courseLink: course["boyneHighlandsArthurHills"].link,
      courseName: course["boyneHighlandsArthurHills"].name,
    },
    round2: {
      times: ["10:30 AM", "10:40 AM", "10:50 AM"],
      date: "Saturday Sept 26",
      courseLink: course["boyneHighlandsArthurHills"].link,
      courseName: course["boyneHighlandsArthurHills"].name,
    },
    round3: {
      times: ["2:00 PM", "2:10 PM", "2:20 PM"],
      date: "Saturday Sept 26",
      courseLink: course["boyneHighlandsDonaldRoss"].link,
      courseName: course["boyneHighlandsDonaldRoss"].name,
    },
    round4: {
      times: ["4:30 PM", "4:40 PM", "4:50 PM"],
      date: "Saturday Sept 26",
      courseLink: course["boyneHighlandsDonaldRoss"].link,
      courseName: course["boyneHighlandsDonaldRoss"].name,
    },
  }

  const matchNavData = [
    {
      name: `${matchesArr[0].matchName}`,
      round: `Round 1`,
      link: "round-1",
    },
    {
      name: `${matchesArr[1].matchName}`,
      round: "Round 2",
      link: "round-2",
    },
    {
      name: `${matchesArr[2].matchName}`,
      round: "Round 3",
      link: "round-3",
    },
    {
      name: `${matchesArr[3].matchName}`,
      round: "Round 4",
      link: "round-4",
    },
    {
      name: `${matchesArr[4].matchName}`,
      round: "Round 5",
      link: "round-5",
    },
    {
      name: `${matchesArr[5].matchName}`,
      round: "Round 6",
      link: "round-6",
    },
    {
      name: `${matchesArr[6].matchName}`,
      round: "Round 7",
      link: "round-7",
    },
    {
      name: `${matchesArr[7].matchName}`,
      round: "Round 8",
      link: "round-8",
    },
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="2026 Scores" />
      <LandingPageHeader title="2026 Scores" />
      <MatchNav location={location} titles={matchNavData} />

      <MatchScore year="_2026" lastYearWinner="green" location={location} />
      <MatchNavSection
        data-visible={location.hash === "#round-1" ? "true" : "false"}
        data-link-id="round-1"
      >
        <div className="course__info">
          <span>
            {day1.round1.date}, {day1.round1.times[0]} at{" "}
          </span>
          <a href={day1.round1.courseLink}>{day1.round1.courseName}</a>
        </div>
        <Match
          matchId={`1 ${matchesArr[0].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[0].courseMatch}
          matchHandicap={matchesArr[0].matchHandicap}
          gameplay={matchesArr[0].gameplay}
          matchTees={matchesArr[0].matchTees}
          holes="front"
          player1={p7}
          player2={p1}
          player3={p9}
          player4={p6}
          player1Tees={playerTees.p7}
          player2Tees={playerTees.p1}
          player3Tees={playerTees.p9}
          player4Tees={playerTees.p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
          matchPreview={true}
          matchTime={day1.round1.times[0]}
        />
        <Match
          matchId={`2 ${matchesArr[0].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[0].courseMatch}
          matchHandicap={matchesArr[0].matchHandicap}
          gameplay={matchesArr[0].gameplay}
          matchTees={matchesArr[0].matchTees}
          holes="front"
          player1={p10}
          player2={p2}
          player3={p12}
          player4={p3}
          player1Tees={playerTees.p10}
          player2Tees={playerTees.p2}
          player3Tees={playerTees.p12}
          player4Tees={playerTees.p3}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
          matchPreview={true}
          matchTime={day1.round1.times[1]}
        />
        <Match
          matchId={`3 ${matchesArr[0].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[0].courseMatch}
          holes="front"
          matchHandicap={matchesArr[0].matchHandicap}
          gameplay={matchesArr[0].gameplay}
          matchTees={matchesArr[0].matchTees}
          player1={p8}
          player2={p4}
          player3={p11}
          player4={p5}
          player1Tees={playerTees.p8}
          player2Tees={playerTees.p4}
          player3Tees={playerTees.p11}
          player4Tees={playerTees.p5}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
          matchPreview={true}
          matchTime={day1.round1.times[2]}
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={location.hash === "#round-2" ? "true" : "false"}
        data-link-id="round-2"
      >
        <div className="course__info">
          <span>
            {day1.round2.date}, {day1.round2.times[0]} at{" "}
          </span>
          <a href={day1.round2.courseLink}>{day1.round2.courseName}</a>
        </div>
        <Match
          matchId={`4 ${matchesArr[1].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[1].courseMatch}
          holes="back"
          matchHandicap={matchesArr[1].matchHandicap}
          gameplay={matchesArr[1].gameplay}
          matchTees={matchesArr[1].matchTees}
          player1={p7}
          player2={p1}
          player3={p9}
          player4={p6}
          player1Tees={playerTees.p7}
          player2Tees={playerTees.p1}
          player3Tees={playerTees.p9}
          player4Tees={playerTees.p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
          matchPreview={true}
          matchTime={day1.round2.times[0]}
        />
        <Match
          matchId={`5 ${matchesArr[1].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[1].courseMatch}
          holes="back"
          matchHandicap={matchesArr[1].matchHandicap}
          gameplay={matchesArr[1].gameplay}
          matchTees={matchesArr[1].matchTees}
          player1={p10}
          player2={p2}
          player3={p12}
          player4={p3}
          player1Tees={playerTees.p10}
          player2Tees={playerTees.p2}
          player3Tees={playerTees.p12}
          player4Tees={playerTees.p3}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
          matchPreview={true}
          matchTime={day1.round2.times[1]}
        />
        <Match
          matchId={`6 ${matchesArr[1].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[1].courseMatch}
          holes="back"
          matchHandicap={matchesArr[1].matchHandicap}
          gameplay={matchesArr[1].gameplay}
          matchTees={matchesArr[1].matchTees}
          player1={p8}
          player2={p4}
          player3={p11}
          player4={p5}
          player1Tees={playerTees.p8}
          player2Tees={playerTees.p4}
          player3Tees={playerTees.p11}
          player4Tees={playerTees.p5}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
          matchPreview={true}
          matchTime={day1.round2.times[2]}
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={location.hash === "#round-3" ? "true" : "false"}
        data-link-id="round-3"
      >
        <div className="course__info">
          <span>
            {day1.round3.date}, {day1.round3.times[0]} at{" "}
          </span>
          <a href={day1.round3.courseLink}>{day1.round3.courseName}</a>
        </div>
        <Match
          matchId={`7 ${matchesArr[2].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[2].courseMatch}
          holes="front"
          matchHandicap={matchesArr[2].matchHandicap}
          gameplay={matchesArr[2].gameplay}
          matchTees={matchesArr[2].matchTees}
          player1={p7}
          player2={p3}
          player3={p11}
          player4={p6}
          player1Tees={playerTees.p7}
          player2Tees={playerTees.p3}
          player3Tees={playerTees.p11}
          player4Tees={playerTees.p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`8 ${matchesArr[2].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[2].courseMatch}
          holes="front"
          matchHandicap={matchesArr[2].matchHandicap}
          gameplay={matchesArr[2].gameplay}
          matchTees={matchesArr[2].matchTees}
          player1={p8}
          player2={p1}
          player3={p10}
          player4={p5}
          player1Tees={playerTees.p8}
          player2Tees={playerTees.p1}
          player3Tees={playerTees.p10}
          player4Tees={playerTees.p5}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`9 ${matchesArr[2].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[2].courseMatch}
          holes="front"
          matchHandicap={matchesArr[2].matchHandicap}
          gameplay={matchesArr[2].gameplay}
          matchTees={matchesArr[2].matchTees}
          player1={p9}
          player2={p2}
          player3={p12}
          player4={p4}
          player1Tees={playerTees.p9}
          player2Tees={playerTees.p2}
          player3Tees={playerTees.p12}
          player4Tees={playerTees.p4}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={location.hash === "#round-4" ? "true" : "false"}
        data-link-id="round-4"
      >
        <div className="course__info">
          <span>
            {day1.round4.date}, {day1.round4.times[0]} at{" "}
          </span>
          <a href={day1.round4.courseLink}>{day1.round4.courseName}</a>
        </div>
        <Match
          matchId={`10 ${matchesArr[3].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[3].courseMatch}
          holes="back"
          matchHandicap={matchesArr[3].matchHandicap}
          gameplay={matchesArr[3].gameplay}
          matchTees={matchesArr[3].matchTees}
          player1={p7}
          player2={p3}
          player3={p10}
          player4={p5}
          player1Tees={playerTees.p7}
          player2Tees={playerTees.p3}
          player3Tees={playerTees.p10}
          player4Tees={playerTees.p5}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`11 ${matchesArr[3].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[3].courseMatch}
          holes="back"
          matchHandicap={matchesArr[3].matchHandicap}
          gameplay={matchesArr[3].gameplay}
          matchTees={matchesArr[3].matchTees}
          player1={p9}
          player2={p1}
          player3={p11}
          player4={p4}
          player1Tees={playerTees.p9}
          player2Tees={playerTees.p1}
          player3Tees={playerTees.p11}
          player4Tees={playerTees.p4}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`12 ${matchesArr[3].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[3].courseMatch}
          holes="back"
          matchHandicap={matchesArr[3].matchHandicap}
          gameplay={matchesArr[3].gameplay}
          matchTees={matchesArr[3].matchTees}
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
      </MatchNavSection>

      <MatchNavSection
        data-visible={location.hash === "#round-5" ? "true" : "false"}
        data-link-id="round-5"
      >
        <div className="course__info">
          <span>
            {day2.round1.date}, {day2.round1.times[0]} at{" "}
          </span>

          <a href={day2.round1.courseLink}>{day2.round1.courseName}</a>
        </div>
        <Match
          matchId={`13 ${matchesArr[4].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[4].courseMatch}
          holes="front"
          matchHandicap={matchesArr[4].matchHandicap}
          gameplay={matchesArr[4].gameplay}
          matchTees={matchesArr[4].matchTees}
          player1={p7}
          player2={p1}
          player3={p12}
          player4={p4}
          player1Tees={playerTees.p7}
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
          year={cupYear}
          courseMatch={matchesArr[4].courseMatch}
          holes="front"
          matchHandicap={matchesArr[4].matchHandicap}
          gameplay={matchesArr[4].gameplay}
          matchTees={matchesArr[4].matchTees}
          player1={p8}
          player2={p3}
          player3={p9}
          player4={p5}
          player1Tees={playerTees.p8}
          player2Tees={playerTees.p3}
          player3Tees={playerTees.p9}
          player4Tees={playerTees.p5}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`15 ${matchesArr[4].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[4].courseMatch}
          holes="front"
          matchHandicap={matchesArr[4].matchHandicap}
          gameplay={matchesArr[4].gameplay}
          matchTees={matchesArr[4].matchTees}
          player1={p10}
          player2={p2}
          player3={p11}
          player4={p6}
          player1Tees={playerTees.p10}
          player2Tees={playerTees.p2}
          player3Tees={playerTees.p11}
          player4Tees={playerTees.p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={location.hash === "#round-6" ? "true" : "false"}
        data-link-id="round-6"
      >
        <div className="course__info">
          <span>
            {day2.round1.date}, {day2.round1.times[1]} at{" "}
          </span>
          <a href={day2.round1.courseLink}>{day2.round1.courseName}</a>
        </div>
        <Match
          matchId={`16 ${matchesArr[5].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[5].courseMatch}
          holes="back"
          matchHandicap={matchesArr[5].matchHandicap}
          gameplay={matchesArr[5].gameplay}
          matchTees={matchesArr[5].matchTees}
          player1={p8}
          player2={p1}
          player3={p12}
          player4={p3}
          player1Tees={playerTees.p8}
          player2Tees={playerTees.p1}
          player3Tees={playerTees.p12}
          player4Tees={playerTees.p3}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`17 ${matchesArr[5].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[5].courseMatch}
          holes="back"
          matchHandicap={matchesArr[5].matchHandicap}
          gameplay={matchesArr[5].gameplay}
          matchTees={matchesArr[5].matchTees}
          player1={p7}
          player2={p2}
          player3={p10}
          player4={p5}
          player1Tees={playerTees.p7}
          player2Tees={playerTees.p2}
          player3Tees={playerTees.p10}
          player4Tees={playerTees.p5}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`18 ${matchesArr[5].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[5].courseMatch}
          holes="back"
          matchHandicap={matchesArr[5].matchHandicap}
          gameplay={matchesArr[5].gameplay}
          matchTees={matchesArr[5].matchTees}
          player1={p9}
          player2={p4}
          player3={p11}
          player4={p6}
          player1Tees={playerTees.p9}
          player2Tees={playerTees.p4}
          player3Tees={playerTees.p11}
          player4Tees={playerTees.p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
      </MatchNavSection>

      <MatchNavSection
        data-visible={location.hash === "#round-7" ? "true" : "false"}
        data-link-id="round-7"
      >
        <div className="course__info">
          <span>
            {day2.round2.date}, {day2.round2.times[0]} at{" "}
          </span>
          <a href={day2.round2.courseLink}>{day2.round2.courseName}</a>
        </div>

        <Match
          matchId={`19 ${matchesArr[6].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[6].courseMatch}
          holes="front"
          matchHandicap={matchesArr[6].matchHandicap}
          gameplay={matchesArr[6].gameplay}
          matchTees={matchesArr[6].matchTees}
          player1={p11}
          player2={p5}
          player3={p12}
          player4={p6}
          player1Tees={playerTees.p11}
          player2Tees={playerTees.p5}
          player3Tees={playerTees.p12}
          player4Tees={playerTees.p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
          player3MatchHandicap=""
          player4MatchHandicap=""
        />
        <Match
          matchId={`20 ${matchesArr[6].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[6].courseMatch}
          holes="front"
          matchHandicap={matchesArr[6].matchHandicap}
          gameplay={matchesArr[6].gameplay}
          matchTees={matchesArr[6].matchTees}
          player1={p9}
          player2={p3}
          player3={p10}
          player4={p4}
          player1Tees={playerTees.p9}
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
          year={cupYear}
          courseMatch={matchesArr[6].courseMatch}
          holes="front"
          matchHandicap={matchesArr[6].matchHandicap}
          gameplay={matchesArr[6].gameplay}
          matchTees={matchesArr[6].matchTees}
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
        data-visible={location.hash === "#round-8" ? "true" : "false"}
        data-link-id="round-8"
      >
        <div className="course__info">
          <span>
            {day2.round2.date}, {day2.round2.times[1]} at{" "}
          </span>
          <a href={day2.round2.courseLink}>{day2.round2.courseName}</a>
        </div>
        <Match
          matchId={`22 ${matchesArr[7].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[7].courseMatch}
          holes="back"
          matchHandicap={matchesArr[7].matchHandicap}
          gameplay={matchesArr[7].gameplay}
          matchTees={matchesArr[7].matchTees}
          player1={p12}
          player2={p6}
          player1Tees={playerTees.p12}
          player2Tees={playerTees.p6}
          player1MatchHandicap=""
          player2MatchHandicap=""
        />
        <Match
          matchId={`23 ${matchesArr[7].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[7].courseMatch}
          holes="back"
          matchHandicap={matchesArr[7].matchHandicap}
          gameplay={matchesArr[7].gameplay}
          matchTees={matchesArr[7].matchTees}
          player1={p11}
          player2={p5}
          player1Tees={playerTees.p11}
          player2Tees={playerTees.p5}
          player1MatchHandicap=""
          player2MatchHandicap=""
        />
        <Match
          matchId={`24 ${matchesArr[7].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[7].courseMatch}
          holes="back"
          matchHandicap={matchesArr[7].matchHandicap}
          gameplay={matchesArr[7].gameplay}
          matchTees={matchesArr[7].matchTees}
          player1={p10}
          player2={p4}
          player1Tees={playerTees.p10}
          player2Tees={playerTees.p4}
          player1MatchHandicap=""
          player2MatchHandicap=""
        />
        <Match
          matchId={`25 ${matchesArr[7].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[7].courseMatch}
          holes="back"
          matchHandicap={matchesArr[7].matchHandicap}
          gameplay={matchesArr[7].gameplay}
          matchTees={matchesArr[7].matchTees}
          player1={p9}
          player2={p3}
          player1Tees={playerTees.p9}
          player2Tees={playerTees.p3}
          player1MatchHandicap=""
          player2MatchHandicap=""
        />

        <Match
          matchId={`26 ${matchesArr[7].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[7].courseMatch}
          holes="back"
          matchHandicap={matchesArr[7].matchHandicap}
          gameplay={matchesArr[7].gameplay}
          matchTees={matchesArr[7].matchTees}
          player1={p8}
          player2={p2}
          player1Tees={playerTees.p8}
          player2Tees={playerTees.p2}
          player1MatchHandicap=""
          player2MatchHandicap=""
        />
        <Match
          matchId={`27 ${matchesArr[7].matchId}`}
          year={cupYear}
          courseMatch={matchesArr[7].courseMatch}
          holes="back"
          matchHandicap={matchesArr[7].matchHandicap}
          gameplay={matchesArr[7].gameplay}
          matchTees={matchesArr[7].matchTees}
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
