import React from 'react'

import GithubLink from './github-link.js'
import LinkedinLink from './linkedin-link.js'

const Footer = ({ data }) => {
  return (
    <div
      style={{
        margin: `50px auto`,
        textAlign: 'center',
      }}
    >
      <div>
        <GithubLink />
        <LinkedinLink />
      </div>
    </div>
  )
}

export default Footer
