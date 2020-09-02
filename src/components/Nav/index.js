import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import logo from '../../../static/assets/logo.svg'
import SocialLinks from '../SocialLinks'
import * as S from './styled'

const Nav = () => (
  <S.NavWrapper>
    <S.Nav>
      <S.Logo>
        <AniLink
          paintDrip
          hex="#DE3B4A"
          to="/"
          alt="Início"
          activeClassName="active"
        >
          <img src={logo} alt="Descontão" />
        </AniLink>
      </S.Logo>
      <S.Links>
        <S.Link>
          <AniLink
            paintDrip
            hex="#DE3B4A"
            to="/"
            alt="Início"
            activeClassName="active"
          >
            Início
          </AniLink>
        </S.Link>
        <S.Link>
          <AniLink
            paintDrip
            hex="#DE3B4A"
            to="/feminino/"
            alt="Feminino"
            activeClassName="active"
          >
            Feminino
          </AniLink>
        </S.Link>
        <S.Link>
          <AniLink
            paintDrip
            hex="#DE3B4A"
            to="/masculino/"
            alt="Masculino"
            activeClassName="active"
          >
            Masculino
          </AniLink>
        </S.Link>
        <S.Link>
          <AniLink
            paintDrip
            hex="#DE3B4A"
            to="/infantil/"
            alt="Infantil"
            activeClassName="active"
          >
            Infantil
          </AniLink>
        </S.Link>
        <S.Link>
          <AniLink
            paintDrip
            hex="#DE3B4A"
            to="/esportivo/"
            alt="Esportivo"
            activeClassName="active"
          >
            Esportivo
          </AniLink>
        </S.Link>
        <S.Link>
          <AniLink
            paintDrip
            hex="#DE3B4A"
            to="/"
            alt="Moda Íntima"
            // activeClassName="active"
          >
            Moda Íntima
          </AniLink>
        </S.Link>
        <S.Link>
          <AniLink
            paintDrip
            hex="#DE3B4A"
            to="/"
            alt="Plus Size"
            // activeClassName="active"
          >
            Plus Size
          </AniLink>
        </S.Link>
      </S.Links>
      <SocialLinks />
    </S.Nav>
    <S.SubNav>
      <S.SubNavContainer>
        <S.Title>
          <S.MegaphoneIcon /> Preços baixos de verdade
        </S.Title>
        <S.Title>
          <S.BagIcon /> As melhores roupas para toda família
        </S.Title>
      </S.SubNavContainer>
    </S.SubNav>
  </S.NavWrapper>
)

export default Nav
