/* eslint-disable */

module.exports = {
  siteMetadata: {
    title: `Will Golledge`,
    description: `Will Golledge's Homepage`,
    author: `@wgolledge`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `willg.dev`,
        short_name: `willg`,
        start_url: `/`,
        background_color: `#332E3C`,
        theme_color: `#332E3C`,
        display: `minimal-ui`,
        icon: `src/images/initials.png`,
      },
    },
    // `gatsby-plugin-offline`,
  ],
};
