module.exports = {
  siteMetadata: {
    title: `gatsby-clean-starter`,
    description: `Lorem ipsum.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'images'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,
              showCaptions: true,
              quality: 80,
              withWebp: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`400`, `400i`, `700`, `700i`, `900`, `900i`]
          }
        ]
      }
    },
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
