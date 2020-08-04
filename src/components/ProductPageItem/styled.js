import styled from 'styled-components'
import Img from 'gatsby-image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Whatsapp } from '@styled-icons/remix-fill/Whatsapp'

export const ProductItemWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  padding: 80px 0 100px;
`

export const ProductImage = styled(Img)`
  width: 100%;
  min-height: 400px;
  max-height: 400px;
`

export const ProductThumb = styled(Img)`
  width: 50px;
  height: 50px;
`

export const CategoryTabs = styled(Tabs)``

export const CategoryTabList = styled(TabList)`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 30px auto 40px;
`

export const CategoryTab = styled(Tab)`
  margin: 0 10px;
  border: 1px solid white;

  cursor: pointer;
  transition: 0.2s;

  &.react-tabs__tab--selected {
    border-color: #de3b4a;
  }
`

export const CategoryTabPanel = styled(TabPanel)``

export const ProductItemDesc = styled.div``

export const ProductItemTitle = styled.h2`
  color: #de3b4a;
  font-weight: 300;
  font-style: normal;
  margin: 0;
`

export const ProductItemCode = styled.div``

export const ProductItemHTML = styled.div`
  margin: 40px 0;
`

export const WhatsappIcon = styled(Whatsapp)`
  width: 20px;
  margin: -4px 10px 0 0;
`
