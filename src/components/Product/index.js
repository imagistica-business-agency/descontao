import React from 'react'
import { Link } from 'gatsby'

import * as S from './styled'

const Product = ({ image, title, ref, link }) => (
  <S.ProductWrapper>
    <S.ProductImage fluid={image} />
    <S.ProductDesc>
      <div>
        <Link to={link} alt={title}>
          <S.ProductTitle>{title}</S.ProductTitle>
        </Link>
        <S.ProductRef>Ref.: {ref}</S.ProductRef>
      </div>
      <S.HeartIcon />
    </S.ProductDesc>
  </S.ProductWrapper>
)

export default Product
