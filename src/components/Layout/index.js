import React from 'react'

import GlobalStyles from './global'
import React from "react"

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <main>{children}</main>
  </>
)

export default Layout
