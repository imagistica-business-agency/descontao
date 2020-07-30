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
  background: transparent;
  border: 1px solid black;
  padding: 10px 50px;
  margin-right: 20px;
  font-family: inherit;
  font-size: 14px;

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: black;
    color: white;
  }

  &.white {
    color: white;
    border-color: white;

    &:hover {
      background: white;
      color: black;
    }
  }

  &.react-tabs__tab--selected {
    background: black;
    color: white;
  }
`

export const CategoryTabPanel = styled(TabPanel)``
