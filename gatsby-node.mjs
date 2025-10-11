import { createRequire } from "module"
const require = createRequire(import.meta.url)
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

/**
 * Returns the current date in YYYY-MM-DD format
 */
function getCurrentDate() {
  const d = new Date()
  let month = (d.getMonth() + 1).toString()
  if (month.length < 2) {
    month = `0${month}`
  }
  let day = d.getDate().toString()
  if (day.length < 2) {
    day = `0${day}`
  }
  return `${d.getFullYear()}-${month}-${day}`
}

export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define templates for different post types
  const playerPost = path.resolve(`./src/templates/player-post.js`)
  const mediaPost = path.resolve(`./src/templates/news-media-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      query GetPublishedPosts {
        allMdx(sort: { frontmatter: { date: ASC } }, limit: 1000) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              category
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
      const template = post.frontmatter.category === 'media' ? mediaPost : playerPost

      createPage({
        path: post.fields.slug,
        component: `${template}?__contentFilePath=${post.internal.contentFilePath}`,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          currentDate: getCurrentDate(),
          name: post.frontmatter.name,
        },
      })
    })
  }
}

export const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    let value
    if (node.frontmatter.category === 'players') {
      value = `/players${createFilePath({
        node,
        getNode,
        basePath: `players/`,
      })}`
    } else if (node.frontmatter.category === 'media') {
      value = `/news-media${createFilePath({
        node,
        getNode,
        basePath: `media/`,
      })}`
    }

    if (value) {
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }
}

// foreign-key relationship for featured image
export const createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
      fields: Fields
    }
    type MdxFrontmatter {
      title: String
      description: String
      date: Date @dateformat
      published: Boolean
      featuredImg: File @fileByRelativePath
      thumbnail: File @fileByRelativePath
      index: String
      captain: Boolean
      active: Boolean
      category: String
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      published: Boolean
      featuredImg: File @fileByRelativePath
      thumbnail: File @fileByRelativePath
      index: String
      captain: Boolean
      active: Boolean
      category: String
    }

    type Fields {
      slug: String
    }
  `)
}
