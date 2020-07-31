import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export const CategoryWrapper = styled.section`
  max-width: 1320px;
  margin: auto;
  padding: 0 20px;
`

export const CategoryTabs = styled(Tabs)``

export const CategoryTabList = styled(TabList)`
  display: flex;
  list-style-type: none;
  margin-bottom: 40px;
`

export const CategoryTab = styled(Tab)`
  color: #de3b4a;
  border: 1px solid #de3b4a;
  padding: 10px 30px;
  margin-right: 20px;

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: #de3b4a;
    color: white;
  }

  &.react-tabs__tab--selected {
    background: #de3b4a;
    color: white;
  }
`

export const CategoryTabPanel = styled(TabPanel)``
