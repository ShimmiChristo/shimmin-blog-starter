import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          id
          siteMetadata {
            title
            author {
              name
              website
            }
            social {
              twitter
              instagram
              youtube
              facebook
              github
            }
            nav {
              name
              link
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
