import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Category from '../../Category'

const CategoryList = () => {
  const data = useStaticQuery(graphql`
    query {
      featuredProduct: allMarkdownRemark(
        limit: 1
        filter: {
          frontmatter: { featured: { eq: true }, category: { eq: "infantil" } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              code
              category
              image {
                childImageSharp {
                  fluid(maxWidth: 580, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
      otherProducts: allMarkdownRemark(
        limit: 4
        filter: {
          frontmatter: { featured: { eq: false }, category: { eq: "infantil" } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              code
              category
              image {
                childImageSharp {
                  fluid(maxWidth: 580, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const featuredProduct = data.featuredProduct.edges
  const otherProducts = data.otherProducts.edges

  return (
    <Category featuredProduct={featuredProduct} otherProducts={otherProducts} />
  )
}

export default CategoryList
