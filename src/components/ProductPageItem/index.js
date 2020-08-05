import React from 'react'

import * as S from './styled'

const ProductPageItem = ({ title, image, images, code, html }) => {
  const message = 'Produto ' + title + ', código ' + code

  return (
    <S.ProductItemWrapper>
      <S.CategoryTabs>
        <S.CategoryTabPanel>
          <S.ProductImage fluid={image.childImageSharp.fluid} />
        </S.CategoryTabPanel>
        {images.map((item, i) => (
          <S.CategoryTabPanel key={i}>
            <S.ProductImage fluid={item.childImageSharp.fluid} />
          </S.CategoryTabPanel>
        ))}

        <S.CategoryTabList>
          <S.CategoryTab>
            <S.ProductThumb fluid={image.childImageSharp.fluid} />
          </S.CategoryTab>
          {images.map((thumb, ii) => (
            <S.CategoryTab key={ii}>
              <S.ProductThumb fluid={thumb.childImageSharp.fluid} />
            </S.CategoryTab>
          ))}
        </S.CategoryTabList>
      </S.CategoryTabs>
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
