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
                  fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                  }
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