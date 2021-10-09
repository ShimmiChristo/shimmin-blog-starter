import React, { useState } from "react"
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

  const TeamFilterContainer = styled.div`
    &.blue {
      [data-team="Green Team"] {
        display: none;
      }
      .team-filter-blue {
        font-weight: bold;
        color: var(--blue);
        border-bottom: 2px solid;
      }
    }
    &.green {
      [data-team="Blue Team"] {
        display: none;
      }
      .team-filter-green {
        font-weight: bold;
        color: var(--green);
        border-bottom: 2px solid;
      }
    }
  `
  const OlContainer = styled.ol`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  `
  const TeamFilter = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 2rem 0;

    &:hover {
      cursor: pointer;
      cursor: hand;
    }

    .team-filter {
      margin-right: 1rem;
    }
  `

  const [teamFilter, setTeamFilter] = useState(null)

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
        <TeamFilterContainer className={teamFilter}>
          <TeamFilter>
            <div
              className="team-filter team-filter-green"
              onClick={() => setTeamFilter("green")}
            >
              Green Team
            </div>
            <div
              className="team-filter team-filter-blue"
              onClick={() => setTeamFilter("blue")}
            >
              Blue Team
            </div>
          </TeamFilter>
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
        </TeamFilterContainer>
      </Layout>
    )
  }
}

export default PlayersIndex
