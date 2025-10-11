import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NewsMediaGrid = ({ data, location }) => {
  const posts = data.allMdx.nodes

  console.log("News media posts:", posts) // Add this for debugging

  return (
    <Layout location={location}>
      <h1>News & Media</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2rem",
          padding: "2rem 0",
        }}
      >
        {posts.length === 0 ? (
          <p>No news posts found.</p>
        ) : (
          posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const image = post.frontmatter.featuredImg ? getImage(post.frontmatter.featuredImg) : null

            return (
              <article
                key={post.fields.slug}
                className="post-card"
                itemScope
                itemType="http://schema.org/Article"
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseOver={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <Link to={post.fields.slug} itemProp="url" style={{ textDecoration: "none", color: "inherit" }}>
                  {image && (
                    <GatsbyImage
                      image={image}
                      alt={title}
                      style={{ height: "200px" }}
                    />
                  )}
                  <div style={{ padding: "1.5rem" }}>
                    <header>
                      <h2 style={{ marginBottom: "0.5rem" }}>
                        <span itemProp="headline">{title}</span>
                      </h2>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </div>
                </Link>
              </article>
            )
          })
        )}
      </div>
    </Layout>
  )
}

export default NewsMediaGrid

export const Head = () => <Seo title="News & Media" />

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { category: { eq: "media" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImg {
            childImageSharp {
              gatsbyImageData(
                width: 300
                height: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`