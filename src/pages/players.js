import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { usePlayersPosts } from "../hooks/use-player-posts"

import AuthorBio from "../components/author-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PlayerThumbnailImg from "../components/player-post-thumbnail-img"

const PlayersIndex = ({ data, location }) => {
  const { title, description, headline } = useSiteMetadata()
  const { nodes } = usePlayersPosts()
  const siteTitle = title || `Title`
  const posts = nodes

  const OlContainer = styled.ol`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  `

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <AuthorBio />
        <p>No blog yet, but stay tuned!</p>
      </Layout>
    )
  } else {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <OlContainer style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.name || post.fields.slug

            return (
              <PlayerThumbnailImg
                key={post.id}
                slug={post.fields.slug}
                title={title}
                team={post.frontmatter.team}
                featuredImg={post.frontmatter.featuredImg}
                description={post.frontmatter.description}
                excerpt={post.excerpt}
              />
            )
          })}
        </OlContainer>
      </Layout>
    )
  }
}

export default PlayersIndex
