import styled from 'styled-components'
import Img from 'gatsby-image'
import { Heart } from '@styled-icons/fa-regular/Heart'
import { Heart as HeartSolid } from '@styled-icons/fa-solid/Heart'

export const ProductWrapper = styled.div``

export const ProductImage = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
  background: pink;
`

export const ProductDesc = styled.div`
  display: grid;
  grid-template-columns: 1fr 20px;
  align-items: center;
`

export const ProductTitle = styled.h3`
  color: #de3b4a;
  margin-bottom: 0;
`

export const ProductRef = styled.span``

export const HeartIcon = styled(Heart)`
  height: 20px;
  color: #de3b4a;
  cursor: pointer;
`

export const HeartSolidHeart = styled(HeartSolid)``
