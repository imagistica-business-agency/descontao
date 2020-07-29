import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Products from '../components/Products'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Olá mundo</h1>
    <Products />
  </Layout>
)

export default IndexPage
