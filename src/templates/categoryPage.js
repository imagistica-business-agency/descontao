import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/SEO'
import Category from '../components/Category'

const Wrapper = styled.section`
  max-width: 1320px;
  margin: auto;
  padding: 0 20px;
`

const categoryPage = ({ data }) => {
  const Products = data.Products.edges

  return (
    <Wrapper>
      <SEO title={data.Products.edges[0].node.frontmatter.category} />
      <h2 style={{ textTransform: 'capitalize' }}>
        {data.Products.edges[0].node.frontmatter.category}
      </h2>

      <Category Products={Products} />
    </Wrapper>
  )
}

export const query = graphql`
  query($category: String!) {
    Products: allMarkdownRemark(
      limit: 50
      filter: { frontmatter: { category: { eq: $category } } }
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
`

export default categoryPage
