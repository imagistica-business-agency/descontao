import styled from 'styled-components'
import media from 'styled-media-query'
import { MapMarkerAlt as Marker } from '@styled-icons/fa-solid/MapMarkerAlt'
import { Whatsapp } from '@styled-icons/remix-fill/Whatsapp'

export const FooterWrapper = styled.footer`
  background: #de3b4a;
  color: #fff;
  border-bottom: 20px solid #77242c;
  padding: 100px 0;
`

export const FooterContainer = styled.div`
  max-width: 1320px;
  margin: auto;
  padding: 0 20px;
`

export const FooterMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 2rem;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
  `}
`

export const AddressDesc = styled.div`
  display: grid;
  grid-template-columns: 15px 1fr;
  align-items: center;
  column-gap: 10px;
  row-gap: 5px;

  span {
    font-size: 0.75em;
  }

  a {
    font-weight: inherit;
  }
`

export const MarkerIcon = styled(Marker)`
  width: 20px;
  height: 20px;
`

export const WhatsappIcon = styled(Whatsapp)`
  width: 20px;
  height: 20px;
`
