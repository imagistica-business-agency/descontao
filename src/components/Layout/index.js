import React from 'react'

import GlobalStyles from './global'

import Footer from '../Footer'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
