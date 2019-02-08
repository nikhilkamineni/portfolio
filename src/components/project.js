import React from 'react'

import GithubLink from './github-repo-link'

const Project = ({ deploymentLink, name, githubRepo, description }) => (
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
        href={deploymentLink}
        style={{ padding: '0', margin: '0' }}
      >
        <h4
          style={{
            padding: '10px 10px',
            fontWeight: 'normal',
            fontSize: '20px',
            textDecoration: 'underline',
          }}
        >
          {name}
        </h4>
      </a>

      <GithubLink repo={githubRepo} />
    </div>
    <p style={{ fontFamily: 'Palanquin, sans-serif' }}>{description}</p>
  </div>
)

export default Project
