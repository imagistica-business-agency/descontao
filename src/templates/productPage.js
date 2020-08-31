import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/SEO'
import ProductPageItem from '../components/ProductPageItem'
import Category from '../components/Category'

const Wrapper = styled.section`
  max-width: 1320px;
  margin: auto;
  padding: 0 20px;
`

const productPage = ({ data }) => {
  const product = data.Product
  const Products = data.Products.edges

  return (
    <>
      <SEO title={product.frontmatter.title} />
      <Wrapper>
        <ProductPageItem
          title={product.frontmatter.title}
          image={product.frontmatter.image}
          images={product.frontmatter.images}
          code={product.frontmatter.code}
          html={product.html}
        />
        <h2>Talvez você se interesse</h2>
        <Category Products={Products} />
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query($id: String!, $category: String!) {
    Product: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        code
        image {
          childImageSharp {
            fluid(maxWidth: 580, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        # images {
        #   childImageSharp {
        #     fluid(maxWidth: 580, quality: 90) {
        #       ...GatsbyImageSharpFluid_withWebp_tracedSVG
        #     }
        #   }
        # }
      }
      id
      html
    }
    Products: allMarkdownRemark(
      limit: 7
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
        }
      }
    }
  }
`

export default productPage
