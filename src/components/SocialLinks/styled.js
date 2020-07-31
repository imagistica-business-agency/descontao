import styled from 'styled-components'

export const SocialLinksList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #ff9ea7;
  }
`

export const IconWrapper = styled.div`
  width: 30px;
`
