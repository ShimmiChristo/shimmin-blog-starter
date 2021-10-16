import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { usePublishedPosts } from "../hooks/use-published-posts"
import { CourseInfo } from "../hooks/get-course-info"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import Match from "../components/match"
import MatchScore from "../components/match-score"
import AboutSite from "../components/about-site"
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
  const LandingPageBody = styled.div`
    max-width: var(--maxWidth-5xl);
    margin: 0 auto;
    display: flex;
    margin-bottom: var(--spacing-6);
  `
  const SectionAd = styled.div`
    min-width: 300px;
    margin: var(--spacing-6) 0 0 var(--spacing-6);
    border: 1px solid;
    border-radius: 5px;
    display: ${props => props.Ad ? 'flex' : 'none'};
  `


  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="BFBH Cup" />
      <LandingPageHeader title="BFBH Cup" />

      <LandingPageBody>
        <div>
          <h2 class="h4">What is the BFBH Cup?</h2>
          <p>
            The BFBH Cup is a annual golf competition played at different
            courses throughout the United States, but mainly in the Great Lake
            State, the High-Five of the country, Michigan.
          </p>
          <h2 class="h4">What does the BFBH Cup stand for?</h2>
          <p>
            Great question. The BFBH Cup stands for The "Boys From Back Home
            Cup".
          </p>
          <h2 class="h4">Who are the boys from back home?</h2>
          <p>
            A group of brothers and friends who were all born and raised in the
            great state of Michigan.
          </p>
        </div>
        
        <SectionAd>
          
        </SectionAd>

      </LandingPageBody>
      <hr />
      <h2>Current Score</h2>

      <MatchScore />
      {/* player1 and player3 are on the same team */}
      <MatchNavSection
        data-visible={pageHash === "#r1-best-ball" ? "true" : "false"}
        data-link-id="r1-best-ball"
      >
        <div class="course__info">
          <Link to={course["tribute1"].link}>{course[`tribute1`].name}</Link>
        </div>
        <Match
          matchId="1.1 - Best Ball. Full handicap"
          courseMatch="tribute1"
          matchHandicap="full"
          player1="matt"
          player2="dylan"
          player3="chris"
          player4="rj"
        />
        <Match
          matchId="1.1 - Best Ball Bramble. Full handicap"
          courseMatch="tribute1"
          matchHandicap="full"
          player1="derek"
          player2="dan"
          player3="travis"
          player4="craig"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r1-two-ball-bramble" ? "true" : "false"}
        data-link-id="r1-two-ball-bramble"
      >
        <div class="course__info">
          <Link to={course["tribute2"].link}>{course[`tribute2`].name}</Link>
        </div>
        <Match
          matchId="1.2 - 2 Ball Bramble. Full handicap"
          courseMatch="tribute2"
          matchHandicap="full"
          gamePlay="two-ball"
          player1="matt"
          player2="rj"
          player3="derek"
          player4="craig"
        />
        <Match
          matchId="1.2 - 2 Ball Bramble. Full handicap"
          courseMatch="tribute2"
          matchHandicap="full"
          gamePlay="two-ball"
          player1="chris"
          player2="dylan"
          player3="travis"
          player4="dan"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r2-bramble-alternate" ? "true" : "false"}
        data-link-id="r2-bramble-alternate"
      >
        <div class="course__info">
          <Link to={course["classic1"].link}>{course[`classic1`].name}</Link>
        </div>
        <Match
          matchId="2.1 - Bramble Alternate. Average handicap"
          courseMatch="classic1"
          matchHandicap="average"
          player1="chris"
          player2="rj"
          player3="derek"
          player4="dan"
        />
        <Match
          matchId="2.1 - Bramble Alternate. Average handicap"
          courseMatch="classic1"
          matchHandicap="average"
          player1="matt"
          player2="dylan"
          player3="travis"
          player4="craig"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r2-scramble" ? "true" : "false"}
        data-link-id="r2-scramble"
      >
        <div class="course__info">
          <Link to={course["classic2"].link}>{course[`classic2`].name}</Link>
        </div>
        <Match
          matchId="2.2 - Scramble. Average handicap"
          courseMatch="classic2"
          matchHandicap="average"
          player1="matt"
          player2="craig"
          player3="chris"
          player4="dan"
        />
        <Match
          matchId="2.2 - Scramble. Average handicap"
          courseMatch="classic2"
          matchHandicap="average"
          player1="derek"
          player2="dylan"
          player3="travis"
          player4="rj"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r3-best-ball" ? "true" : "false"}
        data-link-id="r3-best-ball"
      >
        <div class="course__info">
          <Link to={course["gaylordGolfClub1"].link}>
            {course[`gaylordGolfClub1`].name}
          </Link>
        </div>
        <Match
          matchId="3.1 - Best Ball. Full handicap"
          courseMatch="gaylordGolfClub1"
          matchHandicap="full"
          player1="matt"
          player2="dylan"
          player3="derek"
          player4="dan"
        />
        <Match
          matchId="3.1 - Best Ball. Full handicap"
          courseMatch="gaylordGolfClub1"
          matchHandicap="full"
          player1="chris"
          player2="craig"
          player3="travis"
          player4="rj"
        />
      </MatchNavSection>
      <MatchNavSection
        data-visible={pageHash === "#r3-singles" ? "true" : "false"}
        data-link-id="r3-singles"
      >
        <div class="course__info">
          <Link to={course["gaylordGolfClub2"].link}>
            {course[`gaylordGolfClub2`].name}
          </Link>
        </div>
        <Match
          matchId="3.2 - Singles Matches. Full handicap"
          courseMatch="gaylordGolfClub2"
          matchHandicap="full"
          player1="matt"
          player2="dylan"
        />
        <Match
          matchId="3.2 - Singles Matches. Full handicap"
          courseMatch="gaylordGolfClub2"
          matchHandicap="full"
          player1="travis"
          player2="craig"
        />
        <Match
          matchId="3.2 - Singles Matches. Full handicap"
          courseMatch="gaylordGolfClub2"
          matchHandicap="full"
          player1="chris"
          player2="rj"
        />
        <Match
          matchId="3.2 - Singles Matches. Full handicap"
          courseMatch="gaylordGolfClub2"
          matchHandicap="full"
          player1="derek"
          player2="dan"
        />
      </MatchNavSection>
    </Layout>
  )
}

export default TopicPage
