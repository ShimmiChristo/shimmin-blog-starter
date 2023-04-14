module.exports = {
  siteMetadata: {
    title: `BFBH Cup`,
    description: `Boys From Back Home Cup`,
    siteUrl: `https://bfbhcup.com/`,
    headline: `The BFBH Cup is a annual golf competition played at different courses throughout the United States, but mainly in the Great Lake State, the High-Five of the country, Michigan.`,
    logo: `./logo-black.jpg`,
    author: {
      name: `Chris Shimmin`,
      summary: `who lives in NYC and makes things`,
      website: `https://www.chrisshimmin.com`,
      email: `hello@chrisshimmin.com`,
      phone: ``,
    },
    social: {
      twitter: "shimmiChristo",
      instagram: "bfbhcup",
      youtube: `shimdoggy`,
      facebook: ``,
      github: `shimmiChristo`,
      google: ``,
    },
    nav: [
      {
        name: "Scores",
        link: "/scores#r1-best-ball",
      },
      {
        name: "Players",
        link: "/players",
      },
      {
        name: "About",
        link: "/about",
        subnav: [
          {
            name: "BFBH Cup",
            link: "/about",
          },
          {
            name: "Rules",
            link: "/rules",
          },
        ],
      },
      {
        name: "History",
        link: "/matches",
        subnav: [
          {
            name: "2022 Scores",
            link: "/scores-2022#r1-best-ball",
          },
          {
            name: "Matches",
            link: "/matches",
          },
          // {
          //   name: "Records",
          //   link: "/records",
          // },
          // {
          //   name: "Venues",
          //   link: "/venues",
          // },
        ],
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BFBH Cup`,
        short_name: `BFBH Cup`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/logo-black.jpg`,
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
              quality: 100,
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
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-sharp`,
      defaults: {
        backgroundColor: `white`,
      },
      options: {
        placeholder: `none`,
      },
    },
  ],
}
