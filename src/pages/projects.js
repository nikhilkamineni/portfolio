import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Projects = () => (
  <Layout>
    <SEO title="projects" />
    <h1 style={{ fontFamily: 'Lato, sans-serif', textDecoration: 'underline' }}>
      projects
    </h1>

    <p style={{ marginBottom: '200px' }}>My projects would go here</p>

    <Link to="/" style={{ fontSize: '28px', margin: '20px' }}>
      back
    </Link>
  </Layout>
)

export default Projects
