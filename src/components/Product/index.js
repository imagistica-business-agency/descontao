import React from 'react'
import { Link } from 'gatsby'

import * as S from './styled'

const Product = ({ image, title, code, link }) => (
  <S.ProductWrapper>
    {/* {image.map((item, i) => (
      <S.ProductImage fluid={item.childImageSharp.fluid} key={i} />
    ))} */}

    <S.ProductImage fluid={image.childImageSharp.fluid} />

    <S.ProductDesc>
      <div>
        <Link to={link} alt={title}>
          <S.ProductTitle>{title}</S.ProductTitle>
        </Link>
        <S.ProductRef>Ref.: {code}</S.ProductRef>
      </div>
      <S.HeartIcon />
    </S.ProductDesc>
  </S.ProductWrapper>
)

export default Product
