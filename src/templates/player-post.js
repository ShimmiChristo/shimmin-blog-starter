import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Image from "gatsby-image"
import { PlayerInfo } from "../hooks/get-player-info"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { usePublishedPosts } from "../hooks/use-published-posts"

const PlayerPostTemplate = ({ data, location }) => {
  const { player } = PlayerInfo()
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.name || `Name`
  const playerHandicap = (player[post.frontmatter.name] || {}).handicap || 0
  // const { nodes } = usePublishedPosts()

  const FeaturedImg = styled(Image)`
    width: 200px;
    height: auto;
    margin-bottom: 2rem;

    @media screen and (max-width: 767px) {
      width: 90%;
    }
  `
  const Header = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    background-color: var(--color-brand-dark);
    background-color: ${props =>
      props.team === "Blue Team" ? `var(--blue)` : `var(--green)`};
    margin-bottom: 2rem;
    padding: 1rem;
    color: #fff;
  `
  const HeaderContainer = styled.div`
    height: auto;
    max-height: 250px;
    min-height: 100px;
    overflow: hidden;
    margin: 1rem 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      color: #fff;
      text-align: center;
      margin: 0 !important;
      text-transform: capitalize;
    }
    > * {
      color: #fff;
    }
    @media (max-width: 767px) {
      width: 100%;
      height: auto;
      min-height: 100px;
      max-height: 200px;
    }
  `
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    .h4 {
      margin-top: 0;
    }
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  `
  const MdxContent = styled.div`
    max-width: 55%;
    @media screen and (max-width: 767px) {
      max-width: 90%;
    }
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.name}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Header team={post.frontmatter.team}>
          <HeaderContainer>
            <h1 className="h1" itemProp="headline">
              {post.frontmatter.name}
            </h1>

            <div>{post.frontmatter.team}</div>
          </HeaderContainer>
          <div className="info">
            <b>AKA:</b> {post.frontmatter.nickname} <br />
            <b>Handicap:</b> {playerHandicap}
          </div>
        </Header>
        <section>
          <Wrapper>
            <FeaturedImg
              className="profile-img"
              fluid={post.frontmatter.featuredImg.childImageSharp.fluid}
            />
            <MdxContent>
              <div className="h4">Biography</div>
              <MDXRenderer itemProp="articleBody">{post.body}</MDXRenderer>
            </MdxContent>
          </Wrapper>
        </section>
        <hr />
      </article>
    </Layout>
  )
}

export default PlayerPostTemplate

export const pageQuery = graphql`
  query PlayerPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        index
        name
        nickname
        description
        category
        team
        featuredImg {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
