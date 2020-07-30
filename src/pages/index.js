import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CategoryLists from '../components/CategoryLists'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Olá mundo</h1>
    <CategoryLists />
  </Layout>
)

export default IndexPage
