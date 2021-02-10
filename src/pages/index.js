import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Homepage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const canonicalUrl = data.site.siteMetadata.siteURL + location.pathname

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />
      <Bio />
        <div>
          <ul style={{ listStyle: `none` }}>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

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
