import React from 'react'
import { Link } from 'gatsby'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link to="/">
          <h1>Dead Simple Auth</h1>
        </Link>
      </header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </div>
      <footer>@_luisFilipePT</footer>
    </>
  )
}

export default Layout
