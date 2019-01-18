import React from 'react'

import GithubLink from './github-repo-link'

const Project = props => (
  <li
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      margin: '0',
    }}
  >
    <h4
      style={{
        padding: '0px 10px',
        height: '20px',
        fontWeight: 'normal',
      }}
    >
      {props.name}
    </h4>
    <GithubLink repo={props.githubRepo} />
  </li>
)

export default Project
