import React from 'react'

import GithubLink from './github-link.js'
import LinkedinLink from './linkedin-link.js'

const Footer = ({ data }) => {
  return (
    <div
      style={{
        margin: `50px auto`,
        padding: '20px 0',
        textAlign: 'center',
        backgroundColor: '#1a1010',
        borderRadius: '5px',
        width: '190px',
      }}
    >
      <div className="Links">
        <GithubLink />
        <LinkedinLink />
      </div>
    </div>
  )
}

export default Footer
