import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <Navigation/>
      <main style={{minHeight:"80vh"}}>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout
