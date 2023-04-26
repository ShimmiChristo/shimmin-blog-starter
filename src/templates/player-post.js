import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Image from "gatsby-image"
// import { PlayerInfoMatt } from "../hooks/get-player-info--matt"
import PlayerInfoThisYearRecord from "../components/player-info-year-record"
import RecordPartners from "../components/records-partners"
// import { Chris } from "../components/fragments/scores-2021"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { usePublishedPosts } from "../hooks/use-published-posts"

const PlayerPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.name || `Name`
  const playerHandicap = data.mdx.frontmatter.handicap
  const playerName = data.mdx.frontmatter.name
  const playerNickname = data.mdx.frontmatter.nickname
  const playerData = data.playersUpdateJson[`${playerName}`]
  // const { player } = PlayerInfoMatt(2021)
  // const playerHandicap = (player[`${playerName}`].year[2021][post.frontmatter.name] || {}).handicap || 0
  // const { nodes } = usePublishedPosts()

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
    flex-wrap: wrap;
    @media (max-width: 767px) {
      margin-bottom: 1rem;
    }
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

    h1,
    .h1 {
      color: #fff;
      text-align: center;
      margin: 0 !important;
      text-transform: capitalize;
      font-weight: var(--fontWeight-semibold);
      font-family: var(--font-heading);
      border: 0;
      padding: 0;
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
  const FeaturedImg = styled(Image)`
    width: 100%;
    max-width: 500px;
    height: auto;
    margin: 0 2rem 2rem 0;

    @media screen and (max-width: 767px) {
      width: 100%;
      margin-right: 0;
    }
  `
  const BioWrapper = styled.div`
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
    width: 100%;
    @media screen and (max-width: 767px) {
      max-width: 100%;
    }
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={playerName}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="player-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Header team={post.frontmatter.team}>
          <HeaderContainer>
            <h1 className="h1" itemProp="headline">
              {playerName}
            </h1>

            <div>{post.frontmatter.team}</div>
          </HeaderContainer>
          <div className="info">
            <b>AKA:</b> {playerNickname} <br />
            <b>Handicap:</b> {playerHandicap}
          </div>
        </Header>
        <section>
          <BioWrapper>
            <FeaturedImg
              className="profile-img"
              fluid={post.frontmatter.featuredImg.childImageSharp.fluid}
            />
            <MdxContent>
              <h2 className="h3">Biography</h2>
              <MDXRenderer itemProp="articleBody">{post.body}</MDXRenderer>
            </MdxContent>
          </BioWrapper>
        </section>
        <hr />
        <div className="row">
          <div className="col-12 col-lg-6">
            <PlayerInfoThisYearRecord
              year="2022"
              teamColor="green"
              post={post}
              playerData={playerData}
            />
          </div>
          <div className="col-12 col-lg-6">
            <PlayerInfoThisYearRecord
              year="All Time"
              teamColor="green"
              post={post}
              playerData={playerData}
            />
          </div>
        </div>
        <section>
          <div className="row">
            <div className="col-12 text-center h3 pt-5 pb-2">
              Partner Scores
            </div>
          </div>
          <div className="d-flex justify-content-between py-2 border-bottom">
            <div className="w-100 bold text-center">Name</div>
            <div className="w-100 bold text-center">Best Ball</div>
            <div className="w-100 bold text-center">2 Best Ball</div>
            <div className="w-100 bold text-center">Bramble</div>
            <div className="w-100 bold text-center">2 Ball Bramble</div>
            <div className="w-100 bold text-center">Alternate</div>
            <div className="w-100 bold text-center">Bramble Alt</div>
            <div className="w-100 bold text-center">Scramble</div>
          </div>
          <div className="d-flex justify-content-between">
            <RecordPartners playerData={playerData} />
          </div>
        </section>
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
        handicap
        featuredImg {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    playersUpdateJson {
      matt {
        ...MattFragment
      }
      chris {
        ...ChrisFragment
      }
      rj {
        ...RjFragment
      }
      dylan {
        ...DylanFragment
      }
      travis {
        ...TravisFragment
      }
      craig {
        ...CraigFragment
      }
      dan {
        ...DanFragment
      }
      derek {
        ...DerekFragment
      }
      cam {
        ...CamFragment
      }
      curtis {
        ...CurtisFragment
      }
      evan {
        ...EvanFragment
      }
      gordon {
        ...GordonFragment
      }
      jake {
        ...JakeFragment
      }
    }
  }
`
