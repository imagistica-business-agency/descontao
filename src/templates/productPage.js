import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ProductPageItem from '../components/ProductPageItem'
import Category from '../components/Category'

const Wrapper = styled.section`
  max-width: 1320px;
  margin: auto;
  padding: 0 20px;
`

const productPage = ({ data }) => {
  const product = data.product
  const featuredProduct = data.featuredProduct.edges
  const otherProducts = data.otherProducts.edges

  return (
    <Layout>
      <SEO title={product.frontmatter.title} />
      <Wrapper>
        {product.frontmatter.image.map(({ fluid }) => (
          <Img fluid={fluid} />
        ))}

        {/* <ProductPageItem
          title={product.frontmatter.title}
          // image={product.frontmatter.image.childImageSharp.fluid}
          code={product.frontmatter.code}
          html={product.html}
        /> */}
        <h2>Talvez você se interesse</h2>
        <Category
          featuredProduct={featuredProduct}
          otherProducts={otherProducts}
        />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $category: String!) {
    product: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        code
        image {
          childImageSharp {
            fluid(maxWidth: 580, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      id
      html
    }
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
            category
            image {
              childImageSharp {
                fluid(maxWidth: 580, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    otherProducts: allMarkdownRemark(
      limit: 7
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
            category
            image {
              childImageSharp {
                fluid(maxWidth: 580, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default productPage
