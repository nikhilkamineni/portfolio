import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, siteDescription }) => (
  <div
    style={{
      padding: `150px`,
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
      <h2 style={{ fontFamily: 'Lato, sans-serif' }}>{siteDescription}</h2>
    </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
