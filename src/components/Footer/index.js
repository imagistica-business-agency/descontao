import React from 'react'

import addresses from './addresses'
import * as S from './styled'

const Footer = () => (
  <S.FooterWrapper>
    <S.FooterContainer>
      <S.FooterTitle>7 lojas, para melhor te atender</S.FooterTitle>
      <S.FooterMain>
        {addresses.map((address, i) => (
          <S.AddressItem key={i}>
            <S.AddressTitle>{address.place}</S.AddressTitle>
            <S.AddressDesc>
              <S.MarkerIcon />
              {address.address}

              <S.WhatsappIcon />
              <a
                href="#"
                alt="WhatsApp"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>{address.ddd}</span> {address.whatsapp}
              </a>
            </S.AddressDesc>
          </S.AddressItem>
        ))}
        <S.CopyrightWrapper>
          {new Date().getFullYear()} © Lojas Descontão
          <br />
          Desenvolvido por{' '}
          <a
            href="https://www.imagistica.com.br/"
            alt="Imagística Business Agency"
            rel="noopener noreferrer"
            target="_blank"
          >
            Imagística Business Agency
          </a>
        </S.CopyrightWrapper>
      </S.FooterMain>
    </S.FooterContainer>
  </S.FooterWrapper>
)

export default Footer
