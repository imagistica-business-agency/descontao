const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              category
              code
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const products = result.data.allMarkdownRemark.edges

    products.forEach(edge => {
      const category = edge.node.frontmatter.category
      const id = edge.node.id
      createPage({
        path: edge.node.frontmatter.category,
        component: path.resolve(`src/templates/categoryPage.js`),
        context: {
          category
        }
      })
      createPage({
        path: edge.node.frontmatter.category + '/' + edge.node.frontmatter.code,
        component: path.resolve(`src/templates/productPage.js`),
        context: {
          id,
          category
        }
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
