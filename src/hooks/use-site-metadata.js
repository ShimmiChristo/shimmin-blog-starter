import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          id
          siteMetadata {
            title
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
