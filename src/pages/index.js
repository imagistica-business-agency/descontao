import React from 'react'

import SEO from '../components/SEO'
import Hero from '../components/Hero'
import CategoryLists from '../components/CategoryLists'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <CategoryLists />
  </>
)

export default IndexPage
