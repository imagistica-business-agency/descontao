import styled from 'styled-components'
import media from 'styled-media-query'

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-bottom: 80px;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
`
