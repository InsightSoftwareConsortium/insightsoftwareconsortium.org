module.exports = {
  siteMetadata: {
    title: `Insight Software Consortium`,
    description: `The Insight Software Consortium (ISC) is a non-profit, educational consortium dedicated to promoting and maintaining open-source, freely available software for medical image analysis. This includes promoting such software in teaching, research, and commercial applications, and maintaining webpages and user and developer communities.`,
    author: `@thewtex`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-top-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
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
        background_color: `#6b90eb`,
        theme_color: `#23408f`,
        display: `minimal-ui`,
        icon: `src/images/isc_logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
      // 'gatsby-plugin-styled-components',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
