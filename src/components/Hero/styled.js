import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const HeroWrapper = styled(Img)`
  ${media.lessThan('medium')`
    min-height: 260px;
  `}
`
