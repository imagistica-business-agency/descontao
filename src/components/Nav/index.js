import React from 'react'
import { Link } from 'gatsby'

import logo from '../../../static/assets/logo.svg'
import SocialLinks from '../SocialLinks'
import * as S from './styled'

const Nav = () => (
  <S.NavWrapper>
    <S.Nav>
      <S.Logo>
        <Link to="/" alt="Início">
          <img src={logo} alt="Descontão" />
        </Link>
      </S.Logo>
      <S.Links>
        <S.Link>
          <Link to="/" alt="Início">
            Início
          </Link>
        </S.Link>
        <S.Link>
          <Link to="/feminino/" alt="Feminino">
            Feminino
          </Link>
        </S.Link>
        <S.Link>
          <Link to="/masculino/" alt="Masculino">
            Masculino
          </Link>
        </S.Link>
        <S.Link>
          <Link to="/infantil/" alt="Infantil">
            Infantil
          </Link>
        </S.Link>
        <S.Link>
          <Link to="/esportivo/" alt="Esportivo">
            Esportivo
          </Link>
        </S.Link>
        <S.Link>
          <Link to="/moda-intima/" alt="Moda Íntima">
            Moda Íntima
          </Link>
        </S.Link>
        <S.Link>
          <Link to="/plus-size/" alt="Plus Size">
            Plus Size
          </Link>
        </S.Link>
      </S.Links>
      <SocialLinks />
    </S.Nav>
    <S.SubNav>
      <S.SubNavContainer>
        <S.Title>
          <S.MegaphoneIcon /> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit
        </S.Title>
        <S.Title>
          <S.BagIcon /> Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </S.Title>
      </S.SubNavContainer>
    </S.SubNav>
  </S.NavWrapper>
)

export default Nav
