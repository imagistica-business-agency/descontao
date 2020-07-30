import React from 'react'

import Feminino from './Feminino'
import Masculino from './Masculino'
import Infantil from './Infantil'

import * as S from './styled'

const CategoryLists = () => (
  <S.CategoryWrapper>
    <S.CategoryTabs>
      <S.CategoryTabList>
        <S.CategoryTab>Feminino</S.CategoryTab>
        <S.CategoryTab>Masculino</S.CategoryTab>
        <S.CategoryTab>Infantil</S.CategoryTab>
      </S.CategoryTabList>

      <S.CategoryTabPanel>
        <Feminino />
      </S.CategoryTabPanel>

      <S.CategoryTabPanel>
        <Masculino />
      </S.CategoryTabPanel>

      <S.CategoryTabPanel>
        <Infantil />
      </S.CategoryTabPanel>
    </S.CategoryTabs>
  </S.CategoryWrapper>
)

export default CategoryLists
