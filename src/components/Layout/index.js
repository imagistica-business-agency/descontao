import React from 'react'

import GlobalStyles from './global'
import Nav from '../Nav'

import Footer from '../Footer'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
