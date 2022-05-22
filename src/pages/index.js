import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import styled from "styled-components"


import { useSiteMetadata } from "../hooks/use-site-metadata"
import { CourseInfo } from "../hooks/get-course-info"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import Match from "../components/match"
import MatchScore from "../components/match-score"
import HighlightsScoring from "../components/highlights/scoring-highlight"
import HighlightCountdown from "../components/highlights/coutdown-hightlight"
import Venue2022 from "../components/venues/venue-2022"

// import AboutSite from "../components/about-site"
// import MatchNav from "../components/match-nav"

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
    display: ${props => (props.Ad ? "flex" : "none")};
  `
  const startDate = "october, 14, 2022"
  const locationName = "Gull Lake View Golf Resort"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home | BFBH Cup" />
      <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="/app/login">log in</Link> to see restricted
            content
          </>
        )}
      </p>

      <HighlightCountdown startTime={startDate} location={locationName} />
      <HighlightsScoring yearProp="2022" />
      <Venue2022 />
    </Layout>
  )
}

export default TopicPage
