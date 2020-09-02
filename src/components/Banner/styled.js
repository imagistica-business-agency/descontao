import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const Wrapper = styled(Img)`
  ${media.lessThan('medium')`
    min-height: 170px;
  `}
`
