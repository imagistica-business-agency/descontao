module.exports = {
  siteMetadata: {
    title: `gatsby-clean-starter`,
    description: `Lorem ipsum.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby clean starter`,
        short_name: `gatsby`,
        start_url: `/`,
        background_color: `#de3b4a`,
        theme_color: `#de3b4a`,
        display: `minimal-ui`
        // icon: `src/images/gatsby-icon.png`,
      }
    },
    `gatsby-plugin-offline`
  ]
}
