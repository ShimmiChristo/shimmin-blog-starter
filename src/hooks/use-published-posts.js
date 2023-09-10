import { useStaticQuery, graphql } from "gatsby"
export const usePublishedPosts = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { frontmatter: { published: { eq: true } } }
          sort: { frontmatter: { date: DESC } }
        ) {
          nodes {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
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
