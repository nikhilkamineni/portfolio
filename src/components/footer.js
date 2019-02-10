import React from 'react'

import GithubProfileLink from './github-profile-link.js'
import LinkedinLink from './linkedin-link.js'
import EmailLink from './email-link.js'

const Footer = ({ data }) => {
  return (
    <div
      style={{
        margin: `50px auto`,
        textAlign: 'center',
      }}
    >
      <div>
        <LinkedinLink />
        <GithubProfileLink />
        <EmailLink />
      </div>
    </div>
  )
}

export default Footer
