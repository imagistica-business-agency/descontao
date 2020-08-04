import styled from 'styled-components'
import { Megaphone } from '@styled-icons/ionicons-outline/Megaphone'
import { ShoppingBag as Bag } from '@styled-icons/boxicons-regular/ShoppingBag'

export const NavWrapper = styled.header`
  background: #de3b4a;
`

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  align-items: center;
  color: #fff;
  max-width: 1320px;
  margin: auto;
  padding: 20px 20px 15px;
`

export const Logo = styled.div``

export const Links = styled.ul`
  display: flex;
  list-style-type: none;
  margin: auto;
`

export const Link = styled.li`
  margin: 0 5px;

  a {
    font-weight: 900;
    font-style: italic;
    transition: 0.3s;
    padding: 10px 15px;
    border-radius: 3px;

    :hover {
      background: #992c36;
      text-decoration: none;
    }

    &.active {
      background: #992c36;
    }
  }
`

export const SubNav = styled.div`
  background: #ffb646;
`

export const SubNavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1320px;
  margin: auto;
  padding: 8px 20px;
`

export const Title = styled.div`
  color: #de3b4a;
  text-align: center;
  font-weight: 900;
  font-style: italic;
`

export const MegaphoneIcon = styled(Megaphone)`
  width: 20px;
  margin: -4px 5px 0 0;
  color: #de3b4a;
`

export const BagIcon = styled(Bag)`
  width: 20px;
  margin: -6px 5px 0 0;
  color: #de3b4a;
`
