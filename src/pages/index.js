import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import CategoryLists from '../components/CategoryLists'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <CategoryLists />
  </Layout>
)

export default IndexPage
