import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bannerInterno.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const image = data.file.childImageSharp.fluid

  return <S.Wrapper fluid={image} />
}

export default Banner
