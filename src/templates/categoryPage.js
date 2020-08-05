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
  const featuredProduct = data.featuredProduct.edges
  const otherProducts = data.otherProducts.edges
  return (
    <>
      <Wrapper>
        {featuredProduct.map(({ node: featuredProduct }) => (
          <>
            <SEO title={featuredProduct.frontmatter.category} />
            <h2 style={{ textTransform: 'capitalize' }}>
              {featuredProduct.frontmatter.category}
            </h2>
          </>
        ))}
        <Category
          featuredProduct={featuredProduct}
          otherProducts={otherProducts}
        />
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query($category: String!) {
    featuredProduct: allMarkdownRemark(
      limit: 50
      filter: {
        frontmatter: { featured: { eq: true }, category: { eq: $category } }
      }
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
      limit: 50
      filter: {
        frontmatter: { featured: { eq: false }, category: { eq: $category } }
      }
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
