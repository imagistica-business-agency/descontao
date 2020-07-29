import React from 'react'

import addresses from './addresses'
import * as S from './styled'

const Footer = () => (
  <S.FooterWrapper>
    <S.FooterContainer>
      <h2>7 lojas, para melhor te atender</h2>
      <S.FooterMain>
        {addresses.map((address, i) => (
          <div key={i}>
            <h3>{address.place}</h3>
            <S.AddressDesc>
              <S.MarkerIcon />
              {address.address}

              <S.WhatsappIcon />
              <a
                href={address.whatsapp}
                alt="WhatsApp"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>{address.ddd}</span> {address.whatsapp}
              </a>
            </S.AddressDesc>
          </div>
        ))}
        <div>
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
        </div>
      </S.FooterMain>
    </S.FooterContainer>
  </S.FooterWrapper>
)

export default Footer
