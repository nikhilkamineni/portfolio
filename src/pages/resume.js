import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const columnStyles = { width: '50%', display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-evenly'}

const sectionStyles = {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center'
}

const Resume = () => (
  <Layout>
    <SEO title="resume" />
    <h1
      style={{
        fontFamily: 'Lato, sans-serif',
        fontWeight: '100',
        color: '#bb9900',
        marginBottom: '30px',
      }}
    >
      resume
    </h1>

    <div
      className="Resume__container"
      style={{ display: 'flex', flexFlow: 'row wrap', marginBottom: '40px' }}
    >
      <div className="Resume__column" style={columnStyles}>
        <div style={sectionStyles}>
          <h2>education</h2>
          <ul>
            <li>Lambda School - Full Stack Web, Computer Science</li>
            <li>The New School - MA in Media Studies</li>
            <li>Berklee College of Music - BM in Music</li>
          </ul>
        </div>

        <div style={sectionStyles}>
          <h2>experience</h2>
          <ul>
            <li>Lambda School - Teaching Assistant, Project Manager</li>
            <li>Freelance  - Web Developer</li>
            <li>Archaic Audio - Audio Engineer, Producer</li>
          </ul>
        </div>
      </div>

      <div className="Resume__column" style={columnStyles}>
        <div style={sectionStyles}>
          <h2>skills</h2>
          <ul>
            <li>Modern JavaScript environments and tooling</li>
            <li>
              Frontend and Backend frameworks like React, Redux, Express,
              Mongoose, etc.
            </li>
            <li>Responsive web design with HTML5 and CSS3</li>
            <li>REST and GraphQL backend APIs</li>
            <li>Test Driven Development</li>
            <li>Authentication strategies</li>
            <li>NoSQL and relational databases</li>
            <li>Git and GitHub workflows</li>
            <li>Deployment with Continuous Integration services</li>
            <li>
              Python programming and workflows, package management, virtual
              environments
            </li>
            <li>Python web development with Django</li>
            <li>C programming</li>
            <li>Managing *nix-based development environments</li>
            <li>Command line workflows and shell scripting</li>
          </ul>
        </div>
      </div>
    </div>

    <Link to="/" style={{ fontSize: '28px', margin: '10px' }}>
      back
    </Link>
  </Layout>
)

export default Resume
