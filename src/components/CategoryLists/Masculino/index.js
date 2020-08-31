import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Category from '../../Category'

const CategoryList = () => {
  const data = useStaticQuery(graphql`
    query {
      Products: allMarkdownRemark(
        limit: 5
        filter: { frontmatter: { category: { eq: "masculino" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              code
              category
              date
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

  const Products = data.Products.edges

  return <Category Products={Products} />
}

export default CategoryList
