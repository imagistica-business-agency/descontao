import React from 'react'

import * as S from './styled'

const ProductPageItem = ({ title, image, code, html }) => (
  <S.ProductItemWrapper>
    <S.ProductItemImage fluid={image} />
    <S.ProductItemDesc>
      <S.ProductItemTitle>{title}</S.ProductItemTitle>
      <S.ProductItemCode>Ref.: {code}</S.ProductItemCode>
      <S.ProductItemHTML
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
    </S.ProductItemDesc>
  </S.ProductItemWrapper>
)

export default ProductPageItem
