import React from 'react'

import GithubLink from './github-repo-link'

const Project = props => (
  <div
    className="project-card"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignContent: 'center',
      padding: '20px',
      margin: '20px',
      borderRadius: '5px',
      minWidth: '200px',
      width: '300px',
    }}
  >
    <div
      className="project-card__header"
      style={{ display: 'flex', flexFlow: 'row nowrap' }}
    >
      <a
        className="project-link"
        href={props.deploymentLink}
        style={{ padding: '0', margin: '0' }}
      >
        <h4
          style={{
            padding: '10px 10px',
            fontWeight: 'normal',
            textDecoration: 'underline',
          }}
        >
          {props.name}
        </h4>
      </a>

      <GithubLink repo={props.githubRepo} />
    </div>
    <p>{props.description}</p>
  </div>
)

export default Project
