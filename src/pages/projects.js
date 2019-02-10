import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Project from '../components/project'
import projects from '../../projects'

const Projects = () => {
  return (
    <Layout>
      <SEO title="projects" />
      <h1
        style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: '100',
          color: '#bb9900',
          marginBottom: '30px',
        }}
      >
        projects
      </h1>

      <div
        className="projects-container"
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          marginBottom: '30px',
        }}
      >
        {projects.map(project => (
          <Project {...project} key={project.name} />
        ))}
      </div>
      <Link
        to="/"
        style={{ fontSize: '28px', margin: '10px', padding: '10px' }}
      >
        back
      </Link>
    </Layout>
  )
}

export default Projects
