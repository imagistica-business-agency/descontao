import React from 'react'

import Product from '../Product'
import * as S from './styled'

const Category = ({ Products }) => (
  <S.GridWrapper>
    {Products.map(({ node: product }) => (
      <Product
        key={product.frontmatter.title}
        title={product.frontmatter.title}
        link={
          '/' + product.frontmatter.category + '/' + product.frontmatter.code
        }
        code={product.frontmatter.code}
        image={product.frontmatter.image}
      />
    ))}
  </S.GridWrapper>
)

export default Category
