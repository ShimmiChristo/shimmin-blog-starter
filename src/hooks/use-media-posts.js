import { useStaticQuery, graphql } from "gatsby"

export const useMediaPosts = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { frontmatter: { index: ASC } }) {
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
              thumbnail {
                childImageSharp {
                  gatsbyImageData(
                    width: 100
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
