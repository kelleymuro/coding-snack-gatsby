module.exports = {
  siteMetadata: {
    title: `Coding Snacks`,
    description: `Coding snacks are small short tutorials that you can easily consume and start using in your own project.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
     {
       resolve: 'gatsby-source-contentful',
       options: {
         spaceId: 'zsywi1fz4jc0',
         accessToken: 'JlN-Ie8jLooISyKisxk3bD8sebGlsRWqYNLc2asT1GU'
       }
     },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/_logo-react.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
