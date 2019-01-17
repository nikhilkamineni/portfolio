import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import GithubImage from './github-image.js'
import LinkedinLink from './linkedin-image.js'

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
      <div class="Links">
        <GithubImage />
        <LinkedinLink />
      </div>
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
