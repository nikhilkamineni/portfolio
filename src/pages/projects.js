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
          textDecoration: 'underline',
          color: '#bb9900',
          marginBottom: '30px',
        }}
      >
        projects
      </h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
        }}
      >
        <ul
          style={{
            marginBottom: '100px',
            fontFamily: 'Palanquin, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 auto',
          }}
        >
          {projects.map(project => (
            <Project {...project} key={project.name} />
          ))}
        </ul>
      </div>
      <Link to="/" style={{ fontSize: '28px', margin: '20px' }}>
        back
      </Link>
    </Layout>
  )
}

export default Projects
