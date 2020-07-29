import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const productPage = ({ data }) => {
  const product = data.markdownRemark

  return (
    <Layout>
      <SEO title={product.frontmatter.title} />

      <h2>{product.frontmatter.title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: product.html
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
      id
      html
    }
  }
`

export default productPage
