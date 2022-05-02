import { useStaticQuery, graphql } from "gatsby"

export const usePlayersPosts = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          nodes {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              index
              name
              nickname
              description
              category
              team
              featuredImg {
                childImageSharp {
                  gatsbyImageData(
                    width: 250
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
  )
  return allMdx
}