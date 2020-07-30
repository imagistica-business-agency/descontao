import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Category from '../components/Category'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Olá mundo</h1>
    <Category />
  </Layout>
)

export default IndexPage
