module.exports = {
  siteMetadata: {
    title: `BFBH Cup`,
    description: `Boys From Back Home Cup`,
    siteUrl: `https://bfbhcup.gatsbyjs.io/`,
    headline: `This is the site headline.`,
    logo: `logo-black.png`,
    author: {
      name: `Chris Shimmin`,
      summary: `who lives in NYC and makes things`,
      website: `https://www.chrisshimmin.com`,
      email: `hello@chrisshimmin.com`,
      phone: ``,
    },
    social: {
      twitter: "shimmiChristo",
      instagram: "shimmiChristo",
      youtube: `shimdoggy`,
      facebook: ``,
      github: `shimmiChristo`,
      google: ``,
    },
    nav: [
      {
        name: "Scores",
        link: "/scores",
      },
      {
        name: "Players",
        link: "/players",
      },
      {
        name: "Rules",
        link: "/rules",
      },
      {
        name: "About",
        link: "/about",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/players`,
        name: `players`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
              withWebp: true,
              showCaptions: true,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BFBH Cup`,
        short_name: `BFBH Cup`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-black.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        root: __dirname,
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              quality: 70,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        // datalayer to be set before GTM is loaded
        // should be a stringified object or object
        //
        // Defaults to null
        defaultDataLayer: function () {
          return {
            pageType: window.pageType,
          }
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-fontawesome-css`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
}
