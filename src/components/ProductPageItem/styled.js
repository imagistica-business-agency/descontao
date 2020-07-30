import styled from 'styled-components'
import Img from 'gatsby-image'

export const ProductItemWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  padding: 80px 0 100px;
`

export const ProductItemImage = styled(Img)``

export const ProductItemDesc = styled.div``

export const ProductItemTitle = styled.h2`
  color: #de3b4a;
  font-weight: 300;
  font-style: normal;
  margin: 0;
`

export const ProductItemCode = styled.div``

export const ProductItemHTML = styled.div``
