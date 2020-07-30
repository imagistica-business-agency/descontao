import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Product from '../Product'
import * as S from './styled'

const Products = ({ category }) => {
  const data = useStaticQuery(graphql`
    query {
      featuredProduct: allMarkdownRemark(
        limit: 1
        filter: { frontmatter: { featured: { eq: true } } }
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
        filter: { frontmatter: { featured: { eq: false } } }
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
  `)
  const featuredProduct = data.featuredProduct.edges
  const otherProducts = data.otherProducts.edges

  return (
    <S.ProductsWrapper>
      <S.ProductsCategory>{category}</S.ProductsCategory>

      <S.GridWrapper>
        <S.ProductList>
          {featuredProduct.map(({ node: featuredProduct }) => (
            <Product
              key={featuredProduct.frontmatter.title}
              title={featuredProduct.frontmatter.title}
              link={featuredProduct.fields.slug}
              code={featuredProduct.frontmatter.code}
              image={featuredProduct.frontmatter.image.childImageSharp.fluid}
            />
          ))}
          {otherProducts.map(({ node: product }) => (
            <Product
              key={product.frontmatter.title}
              title={product.frontmatter.title}
              link={product.fields.slug}
              code={product.frontmatter.code}
              image={product.frontmatter.image.childImageSharp.fluid}
            />
          ))}
        </S.ProductList>
      </S.GridWrapper>
    </S.ProductsWrapper>
  )
}

export default Products
