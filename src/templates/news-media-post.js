import * as React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CATEGORY_LABELS = {
  media: "News & Media",
}

const PageShell = styled.article`
  width: 100%;
  /* max-width: 1120px; */
  margin: 0 auto;
  padding: 2rem 0 4rem;
`

const StoryCard = styled.div`
  /* background: linear-gradient(180deg, #fcfaf6 0%, #f7f2e9 100%);
  border: 1px solid #e4dac9;
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(26, 32, 44, 0.08);
  overflow: hidden; */
`

const StoryLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 4rem;
  padding: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 1.25rem;
    gap: 1.5rem;
  }
`

const MainColumn = styled.div`
  min-width: 0;
`

const StoryHeader = styled.header`
  padding-bottom: 1.25rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(26, 32, 44, 0.12);

  h1 {
    margin-bottom: 0.5rem;
    font-size: clamp(2.25rem, 4vw, 4rem) !important;
    line-height: 1.05;
  }
`

const StoryMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  color: var(--color-text-light);
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
`

const MetaPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(24, 69, 59, 0.08);
  color: var(--black);
  font-size: 0.84rem;
  font-weight: var(--fontWeight-semibold);
  letter-spacing: 0.01em;
`

const ArticleBody = styled.section`
  max-width: 70ch;
  font-size: 1.03rem;
  line-height: 1.75;

  p:last-child {
    margin-bottom: 0;
  }
`

const Sidebar = styled.aside`
  display: grid;
  gap: 1.25rem;
  align-self: start;
  position: sticky;
  top: 7rem;

  @media (max-width: 900px) {
    position: static;
    top: auto;
  }
`

const SidebarCard = styled.section`
  padding: 1.25rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(26, 32, 44, 0.08);

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
  }


`

const SidebarCardLink = styled(Link)`
  display: block;
  padding: 1rem 1.1rem;
  border-radius: 14px;
  color: var(--black);
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  /* gap: 0.75rem; */
  /* background: rgba(24, 69, 59, 0.06); */
  /* transition: transform 0.2s ease, background 0.2s ease; */

  &:hover {
    /* background: rgba(24, 69, 59, 0.12); */
    /* transform: translateY(-1px); */
  }

  strong {
    display: block;
    margin-bottom: 0.35rem;
    font-weight: var(--fontWeight-semibold);
  }

  span {
    /* color: var(--black); */
    font-size: 0.92rem;
  }
`

const SidebarTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.1rem !important;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`

const LatestSection = styled.section`
  padding-top: 2rem;
`

const LatestTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 2vw, 2rem) !important;
`

const LatestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const LatestCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  min-height: 100%;
  padding: 1.1rem;
  border-radius: 18px;
  text-decoration: none;
  color: var(--color-text);
  background: #fff;
  border: 1px solid rgba(26, 32, 44, 0.08);
  box-shadow: 0 10px 22px rgba(26, 32, 44, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(24, 69, 59, 0.24);
    box-shadow: 0 16px 30px rgba(26, 32, 44, 0.1);
  }

  h3 {
    margin-bottom: 0;
    font-size: 1.1rem !important;
  }

  p {
    margin-bottom: 0;
    color: var(--color-text-light);
  }
`

const LatestCardMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: var(--color-text-light);
  font-size: 0.85rem;
`

const SocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0.75rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem;
    /* border-radius: 12px; */
    /* background: rgba(24, 69, 59, 0.06); */
    color: var(--black);
    text-decoration: none;
    font-weight: var(--fontWeight-semibold);
    transition: all 0.2s ease;

    &:hover {
      /* background: rgba(24, 69, 59, 0.12); */
      /* transform: translateX(2px); */
    }
  }
`

const SidebarPostList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;

  li {
    margin: 0;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    padding: 0.85rem 0.95rem;
    border-radius: 12px;
    color: var(--color-text);
    text-decoration: none;
    /* background: rgba(24, 69, 59, 0.06); */
    /* transition: transform 0.2s ease, background 0.2s ease; */

    &:hover {
      /* background: rgba(24, 69, 59, 0.12); */
      /* transform: translateX(2px); */
    }
  }
`

const SidebarPostTitle = styled.span`
  font-weight: var(--fontWeight-semibold);
  display: block;
`

const SidebarPostMeta = styled.span`
  color: var(--color-text-light);
  font-size: 0.86rem;
`

const SidebarEmpty = styled.p`
  margin-bottom: 0;
  color: var(--color-text-light);
  font-size: 0.92rem;
`

const RECENTLY_VIEWED_KEY = "recentNewsMediaPosts"

const NewsMediaPostTemplate = ({
  data: { site, mdx: post, allMdx },
  location,
  children,
}) => {
  const [recentlyViewedSlugs, setRecentlyViewedSlugs] = React.useState([])
  const siteTitle = site.siteMetadata?.title || `Title`

  const latestPosts = allMdx.nodes
    .filter(node => node.fields.slug !== post.fields.slug)
    .slice(0, 4)

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const stored = window.localStorage.getItem(RECENTLY_VIEWED_KEY)
    const parsed = stored ? JSON.parse(stored) : []
    const nextSlugs = [
      post.fields.slug,
      ...parsed.filter(slug => slug !== post.fields.slug),
    ].slice(0, 4)

    window.localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(nextSlugs))
    setRecentlyViewedSlugs(nextSlugs)
  }, [post.fields.slug])

  const recentlyViewedPosts = recentlyViewedSlugs
    .filter(slug => slug !== post.fields.slug)
    .map(slug => allMdx.nodes.find(node => node.fields.slug === slug))
    .filter(Boolean)
    .slice(0, 3)

  const currentCategory = post.frontmatter.category || "media"
  const currentCategoryLabel =
    CATEGORY_LABELS[currentCategory] || currentCategory

  return (
    <Layout location={location} title={siteTitle} sidebar={true}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <PageShell
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <StoryCard className="story-card">
          <StoryLayout className="story-layout">
            <MainColumn className="main-column">
              <StoryHeader className="story-header">
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
                <StoryMeta className="story-meta">
                  <span>{post.frontmatter.date}</span>
                </StoryMeta>
                <MetaPill className="meta-pill">
                  {currentCategoryLabel}
                </MetaPill>
              </StoryHeader>

              <ArticleBody itemProp="articleBody" className="article-body">
                {children}
              </ArticleBody>
            </MainColumn>

            <Sidebar className="sidebar">
              <SidebarCard className="sidebar-card">
                <SidebarTitle className="sidebar-title">All Posts</SidebarTitle>
                <SidebarCardLink
                  className="sidebar-card-link"
                  to="/news-media/"
                >
                  <strong>All news & media posts</strong>
                </SidebarCardLink>
              </SidebarCard>

              <SidebarCard className="sidebar-card">
                <SidebarTitle className="sidebar-title">
                  Recently Viewed
                </SidebarTitle>
                {recentlyViewedPosts.length > 0 ? (
                  <ul>
                    {recentlyViewedPosts.map(recentPost => (
                      <li className="recent-post-item" key={recentPost.fields.slug}>
                        <SidebarCardLink
                          className="sidebar-post-list"
                          to={recentPost.fields.slug}
                        >
                          <SidebarPostTitle>
                            {recentPost.frontmatter.title}
                          </SidebarPostTitle>
                          <SidebarPostMeta>
                            {recentPost.frontmatter.date}
                          </SidebarPostMeta>
                        </SidebarCardLink>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <SidebarEmpty>
                    Recently viewed posts will appear here.
                  </SidebarEmpty>
                )}
              </SidebarCard>

              <SidebarCard className="sidebar-card">
                <SidebarTitle className="sidebar-title">Follow Us</SidebarTitle>
                <SocialLinks>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube size={20} />
                    </a>
                  </li>
                </SocialLinks>
              </SidebarCard>
            </Sidebar>
          </StoryLayout>
        </StoryCard>

        <LatestSection className="latest-section">
          <LatestTitle>Latest Posts</LatestTitle>
          {latestPosts.length > 0 ? (
            <LatestGrid>
              {latestPosts.map(latestPost => (
                <LatestCard
                  key={latestPost.fields.slug}
                  to={latestPost.fields.slug}
                >
                  <LatestCardMeta>
                    <span>{latestPost.frontmatter.date}</span>
                    <span>•</span>
                    <span>
                      {CATEGORY_LABELS[latestPost.frontmatter.category] ||
                        latestPost.frontmatter.category}
                    </span>
                  </LatestCardMeta>
                  <h3>{latestPost.frontmatter.title}</h3>
                  <p>
                    {latestPost.frontmatter.description || latestPost.excerpt}
                  </p>
                </LatestCard>
              ))}
            </LatestGrid>
          ) : (
            <p>No recent posts yet.</p>
          )}
        </LatestSection>
      </PageShell>
    </Layout>
  )
}

NewsMediaPostTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
    mdx: PropTypes.shape({
      excerpt: PropTypes.string,
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
      frontmatter: PropTypes.shape({
        category: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
    allMdx: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          excerpt: PropTypes.string,
          fields: PropTypes.shape({
            slug: PropTypes.string,
          }),
          frontmatter: PropTypes.shape({
            category: PropTypes.string,
            date: PropTypes.string,
            description: PropTypes.string,
            title: PropTypes.string,
          }),
        })
      ),
    }),
  }),
  location: PropTypes.object,
  children: PropTypes.node,
}

export default NewsMediaPostTemplate

export const pageQuery = graphql`
  query NewsMediaPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {
        frontmatter: { category: { eq: "media" }, active: { eq: true } }
      }
      sort: { frontmatter: { date: DESC } }
      limit: 12
    ) {
      nodes {
        excerpt(pruneLength: 140)
        fields {
          slug
        }
        frontmatter {
          category
          date(formatString: "MMMM DD, YYYY")
          description
          title
        }
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        category
        title
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
