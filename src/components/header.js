import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, siteDescription }) => (
  <div
    style={{
      margin: `40px`,
      marginLeft: 'auto',
      marginRight: 'auto',
      minWidth: '375px'
    }}
  >
    <h1 style={{ textAlign: 'center' }}>
      <Link
        to="/"
        id="Header__title"
        style={{
          fontSize: '3rem',
          fontFamily: '"Sirin Stencil", cursive',
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <h2 id="Header__description" style={{ fontFamily: 'Lato, sans-serif', textAlign: 'center', fontWeight: '100' }}>
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
