import React from 'react'

import Product from '../Product'
import * as S from './styled'

const Products = ({ featuredProduct, otherProducts }) => (
  <S.GridWrapper>
    {featuredProduct.map(({ node: featuredProduct }) => (
      <Product
        key={featuredProduct.frontmatter.title}
        title={featuredProduct.frontmatter.title}
        link={
          '/' +
          featuredProduct.frontmatter.category +
          '/' +
          featuredProduct.frontmatter.code
        }
        code={featuredProduct.frontmatter.code}
        image={featuredProduct.frontmatter.image.childImageSharp.fluid}
      />
    ))}

    {otherProducts.map(({ node: product }) => (
      <Product
        key={product.frontmatter.title}
        title={product.frontmatter.title}
        link={
          '/' + product.frontmatter.category + '/' + product.frontmatter.code
        }
        code={product.frontmatter.code}
        image={product.frontmatter.image.childImageSharp.fluid}
      />
    ))}
  </S.GridWrapper>
)

export default Products
