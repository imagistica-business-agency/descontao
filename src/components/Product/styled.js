import styled from 'styled-components'
import Img from 'gatsby-image'
import { Heart } from '@styled-icons/fa-regular/Heart'
import { Heart as HeartSolid } from '@styled-icons/fa-solid/Heart'

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 50px;
  align-content: stretch;

  :nth-child(1) {
    grid-row: span 2;
    grid-column: span 2;
    justify-content: stretch;
  }

  :nth-child(5n + 1) {
    background: #e5e5e5;
  }
  :nth-child(5n + 2) {
    background: #ffe8c5;
  }
  :nth-child(5n + 3) {
    background: #ffc6cb;
  }
  :nth-child(5n + 4) {
    background: #e0ffd8;
  }
  :nth-child(5n + 5) {
    background: #d7ecff;
  }
`

export const ProductImage = styled(Img)`
  width: 100%;
  min-height: 300px;
  margin-bottom: 10px;
`

export const ProductDesc = styled.div`
  display: grid;
  grid-template-columns: 1fr 20px;
  align-items: center;
  background: white;
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
