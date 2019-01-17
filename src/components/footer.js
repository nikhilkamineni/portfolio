import React from 'react'

import GithubProfileLink from './github-profile-link.js'
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
        <GithubProfileLink url="https://github.com/nikhilkamineni"/>
        <LinkedinLink />
      </div>
    </div>
  )
}

export default Footer
