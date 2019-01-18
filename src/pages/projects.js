import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import GithubLink from '../components/github-repo-link'

const Projects = () => (
  <Layout>
    <SEO title="projects" />
    <h1 style={{ fontFamily: 'Lato, sans-serif', textDecoration: 'underline' }}>
      projects
    </h1>

    <ul style={{ marginBottom: '100px', fontFamily: 'Palanquin, sans-serif' }}>
      <li
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0',
          margin: '0',
          height: '60px',
        }}
      >
        <h4 style={{ height: '40px', alignSelf: 'center', paddingTop: '30px', paddingRight: '10px' }}>
          MapScratcher
        </h4>
        <GithubLink repo="MapScratcher" />
      </li>

      <li
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0',
          margin: '0',
          height: '60px',
        }}
      >
        <h4 style={{ height: '40px', alignSelf: 'center', paddingTop: '30px', paddingRight: '10px'  }}>
          {'{ codex }'}
        </h4>
        <GithubLink repo="codex" />
      </li>

      <li
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0',
          margin: '0',
          height: '60px',
        }}
      >
        <h4 style={{ height: '40px', alignSelf: 'center', paddingTop: '30px', paddingRight: '10px'  }}>
          nebulous_groove
        </h4>
        <GithubLink repo="nebulous-groove" />
      </li>
    </ul>

    <Link to="/" style={{ fontSize: '28px', margin: '20px' }}>
      back
    </Link>
  </Layout>
)

export default Projects
