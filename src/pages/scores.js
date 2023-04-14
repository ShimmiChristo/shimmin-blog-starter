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
        text-decoration: underline;
        text-underline-offset: 0.2rem;
      }
    }
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Scores" />
      <LandingPageHeader title="Scores" />
      <span>2023 BFBH Cup coming soon!</span>
    </Layout>
  )
}

export default TopicPage
