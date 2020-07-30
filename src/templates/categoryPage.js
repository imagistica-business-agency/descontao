import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
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
    <Layout>
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
    </Layout>
  )
}

export const query = graphql`
  query($category: String!) {
    featuredProduct: allMarkdownRemark(
      limit: 1
      filter: {
        frontmatter: { featured: { eq: true }, category: { eq: $category } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            code
            desc
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
    otherProducts: allMarkdownRemark(
      limit: 4
      filter: {
        frontmatter: { featured: { eq: false }, category: { eq: $category } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            code
            desc
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
`

export default categoryPage
