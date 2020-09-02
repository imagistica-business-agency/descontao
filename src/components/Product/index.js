import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as S from './styled'

const Product = ({ image, title, code, link }) => (
  <S.ProductWrapper>
    {image && (
      <AniLink paintDrip hex="#DE3B4A" to={link} alt={title}>
        <S.ProductImage fluid={image.childImageSharp.fluid} />
      </AniLink>
    )}
    <S.ProductDesc>
      <AniLink paintDrip hex="#DE3B4A" to={link} alt={title}>
        <S.ProductTitle>{title}</S.ProductTitle>
        <S.ProductRef>Ref.: {code}</S.ProductRef>
      </AniLink>
      {/* <S.HeartIcon /> */}
    </S.ProductDesc>
  </S.ProductWrapper>
)

export default Product
