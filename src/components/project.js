import React from 'react'

import GithubLink from './github-repo-link'

const Project = props => (
  <li
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      padding: '20px',
      margin: '20px',
      borderRadius: '5px',
      width: '300px'
    }}
  >
    <div style={{ display: 'flex' }}>
      <h4
        style={{
          padding: '10px 10px',
          fontWeight: 'normal',
          textDecoration: 'underline'
        }}
      >
        {props.name}
      </h4>
      <GithubLink repo={props.githubRepo} />
    </div>
    <p>{props.description}</p>
  </li>
)

export default Project
