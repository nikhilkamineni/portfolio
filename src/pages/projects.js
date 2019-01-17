import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Projects = () => (
  <Layout>
    <SEO title="projects" />
    <h1>projects</h1>
    <p>A list of my projects would go here</p>
    <Link to="/">back</Link>
  </Layout>
)

export default Projects
