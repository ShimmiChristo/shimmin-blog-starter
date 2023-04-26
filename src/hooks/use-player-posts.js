import { useStaticQuery, graphql } from "gatsby"

export const usePlayersPosts = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___index], order: ASC }
        ) {
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
                  gatsbyImageData(
                    width: 300
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