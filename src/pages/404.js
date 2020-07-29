import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Não encontrado" />
    <h1>Não encontrado</h1>
    <p>A página que você está buscando não existe.</p>
  </Layout>
)

export default NotFoundPage
