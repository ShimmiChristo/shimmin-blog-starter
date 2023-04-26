import React, { useState } from "react"
import styled from "styled-components"
import { v1 as uuidv1 } from "uuid"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { usePlayersPosts } from "../hooks/use-player-posts"

import AuthorBio from "../components/author-bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PlayerCard from "../components/player-card"
import LandingPageHeader from "../components/landing-page-header"

const uuid = uuidv1()

const PlayersIndex = ({ data, location }) => {
  const { title } = useSiteMetadata()
  const { nodes } = usePlayersPosts()
  const siteTitle = title || `Title`
  const posts = nodes
  const activePlayers = posts.filter(
    player => player.frontmatter?.active !== false
  )

  const TeamFilterContainer = styled.div`
    .team-filter-all {
      font-weight: bold;
      border-bottom: 2px solid;
    }
    .team-filter {
      color: var(--black);
    }
    &.blue {
      .team-filter-all {
        font-weight: normal;
        border-bottom: none;
      }
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
      .team-filter-all {
        font-weight: normal;
        border-bottom: none;
      }
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
    padding: 0;
    list-style: none;
    margin-top: 1rem;
  `
  const TeamFilter = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    &:hover {
      cursor: pointer;
      cursor: hand;
    }

    .team-filter {
      margin-right: 1rem;
    }
  `

  const [teamFilter, setTeamFilter] = useState(null)

  if (activePlayers.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Players" />
        <AuthorBio />
        <p>No blog yet, but stay tuned!</p>
      </Layout>
    )
  } else {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Players" />
        <LandingPageHeader title="Players" />
        <TeamFilterContainer className={`${teamFilter} container `}>
          <TeamFilter className="mb-2">
            <div
              className="team-filter team-filter-all"
              onClick={() => setTeamFilter("all")}
            >
              All
            </div>
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
          <OlContainer>
            {activePlayers.map((post, i) => {
              return (
                <PlayerCard
                  key={uuid + i}
                  slug={post.fields.slug}
                  title={post?.frontmatter?.name || post?.fields?.slug}
                  team={post.frontmatter.team}
                  featuredImg={post.frontmatter.featuredImg}
                  captain={post.frontmatter.captain}
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
