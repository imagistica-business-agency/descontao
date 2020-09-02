module.exports = {
  siteMetadata: {
    title: `Descontão`,
    description: `Lojas Descontão, menor preço garantido.`
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
        name: `Descontão`,
        short_name: `Descontão`,
        start_url: `/`,
        background_color: `#de3b4a`,
        theme_color: `#DE3B4A`,
        display: `fullscreen`,
        icon: `static/assets/icon.png`
      }
    },
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/components/Layout`)
      }
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`
  ]
}
