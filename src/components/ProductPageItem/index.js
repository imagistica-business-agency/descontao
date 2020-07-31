import React from 'react'

import * as S from './styled'

const ProductPageItem = ({ title, image, code, html }) => {
  const message = 'Produto ' + title + ', código ' + code

  return (
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

        <a
          href={'https://wa.me/5545988031679?text=' + message}
          alt="Fazer pedido via WhatsApp"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button>
            <S.WhatsappIcon />
            Fazer pedido
          </button>
        </a>
      </S.ProductItemDesc>
    </S.ProductItemWrapper>
  )
}

export default ProductPageItem
