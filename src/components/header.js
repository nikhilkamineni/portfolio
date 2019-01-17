import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, siteDescription }) => (
  <div
    style={{
      margin: `80px`,
      width: '400px',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#1a1010',
      borderRadius: '5px',
      padding: '20px',
    }}
  >
    <h1 style={{ textAlign: 'center' }}>
      <Link
        to="/"
        style={{
          fontSize: '50px',
          color: '#bb9900',
          textDecoration: `none`,
          fontFamily: '"Sirin Stencil", cursive',
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <h2 style={{ fontFamily: 'Lato, sans-serif', textAlign: 'center' }}>
      {siteDescription}
    </h2>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
