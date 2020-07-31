import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const image = data.file.childImageSharp.fluid

  return <S.HeroWrapper fluid={image} />
}

export default Hero
