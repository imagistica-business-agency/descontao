import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Feminino from './Feminino'
import Banner from '../Banner'
import Masculino from './Masculino'
import Infantil from './Infantil'
import Esportivo from './Esportivo'

import * as S from './styled'

const CategoryLists = () => (
  <>
    <S.CategoryWrapper>
      <h2>Setor Feminino</h2>
      <Feminino />
      <AniLink paintDrip hex="#DE3B4A" to="/feminino/" alt="Feminino">
        <S.Button>
          <S.PlusIcon />
          Veja mais
        </S.Button>
      </AniLink>
    </S.CategoryWrapper>

    <Banner />

    <S.CategoryWrapper>
      <h2>Setor Masculino</h2>
      <Masculino />
      <AniLink paintDrip hex="#DE3B4A" to="/masculino/" alt="Masculino">
        <S.Button>
          <S.PlusIcon />
          Veja mais
        </S.Button>
      </AniLink>
      <h2>Setor Infantil</h2>
      <Infantil />
      <AniLink paintDrip hex="#DE3B4A" to="/infantil/" alt="Infantil">
        <S.Button>
          <S.PlusIcon />
          Veja mais
        </S.Button>
      </AniLink>
      <h2>Setor Esportivo</h2>
      <Esportivo />
      <AniLink paintDrip hex="#DE3B4A" to="/esportivo/" alt="Esportivo">
        <S.Button>
          <S.PlusIcon />
          Veja mais
        </S.Button>
      </AniLink>
    </S.CategoryWrapper>
  </>
)

export default CategoryLists
