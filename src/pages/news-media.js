import React from "react"
// import styled from "styled-components"

import { useSiteMetadata } from "../hooks/use-site-metadata"
import { graphql } from "gatsby"
import { v1 as uuidv1 } from "uuid"
const uuid = uuidv1()

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageHeader from "../components/landing-page-header"
import NewsThumbnail from "../components/news-media/thumbnail"

const LatestPage = ({ data, location }) => {
  console.log('data - ', data);
  const { title } = useSiteMetadata()
  // const { nodes } = usePublishedPosts()
  const siteTitle = title || `Title`
  // const posts = nodes
  // const LandingPageBody = styled.div`
  //   max-width: var(--maxWidth-5xl);
  //   margin: 0 auto;
  // `

  const activePosts = data.allMdx.nodes
    .filter(post => post.frontmatter?.active !== false)
    .sort((a, b) => a.frontmatter.index - b.frontmatter.index)

  console.log("activePosts - ", activePosts)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Sponsors" />
      <LandingPageHeader title="Latest News" />
      <div className="container mb-5"></div>

      <div className="container">
        <div className="row col-12">
          {activePosts.map((post, i) => (
            <NewsThumbnail
              key={uuid + i}
              slug={post.fields.slug}
              title={post?.frontmatter?.name || post?.fields?.slug}
              name={post?.frontmatter?.nickname}
              team={post.frontmatter.team}
              featuredImg={post.frontmatter.featuredImg}
              captain={post.frontmatter.captain}
              description={post.frontmatter.description}
              excerpt={post.excerpt}
            />
          ))}
          {/* <NewsThumbnail
            title="test"
            date="2024"
            // key={uuid + i}
            // slug={post.fields.slug}
            // title={post?.frontmatter?.name || post?.fields?.slug}
            // name={post?.frontmatter?.nickname}
            // team={post.frontmatter.team}
            // featuredImg={post.frontmatter.featuredImg}
            // captain={post.frontmatter.captain}
            // description={post.frontmatter.description}
            // excerpt={post.excerpt}
          /> */}
        </div>
      </div>
    </Layout>
  )
}

export default LatestPage

export const pageQuery = graphql`
  query {
    allMdx(filter: { frontmatter: { category: { eq: "media" } } }) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          active
          index
          name
          nickname
          description
          category
          team
          captain
          featuredImg {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 100)
            }
          }
        }
      }
    }
  }
`
