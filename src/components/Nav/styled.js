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
  margin: 0 20px;

  a {
    font-weight: 900;
    font-style: italic;
  }
`

export const SubNav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0;
  background: #ffb646;
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
