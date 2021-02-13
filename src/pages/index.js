import React from "react"
import { Link, graphql } from "gatsby"

import AuthorBio from "../components/author-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Aboutme from "../components/aboutme"

const Homepage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const canonicalUrl = data.site.siteMetadata.siteURL + location.pathname

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />
      <AuthorBio />
        <div>
          <ul style={{ listStyle: `none` }}>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
      <Aboutme />

    </Layout>
  )
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`
