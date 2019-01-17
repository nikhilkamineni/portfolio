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

    <ul style={{ marginBottom: '100px', fontFamily: 'Palanquin, sans-serif' }}>
      <li>
        <h4>MapScratcher</h4>
        <p>Repo:</p>
        <p>Live link: </p>
      </li>

      <li>
        <h4>{'{ codex }'}</h4>
        <p>Repo:</p>
        <p>Live link: </p>
      </li>

      <li>
        <h4>nebulous_groove</h4>
        <p>Repo:</p>
        <p>Live link: </p>
      </li>

    </ul>

    <Link to="/" style={{ fontSize: '28px', margin: '20px' }}>
      back
    </Link>
  </Layout>
)

export default Projects
