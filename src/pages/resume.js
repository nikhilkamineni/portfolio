import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const columnStyles = {
  flexBasis: 'content',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-evenly',
  maxWidth: '320px'
}

const sectionStyles = {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  marginTop: '30px'
}

const Education = () => (
  <div style={sectionStyles}>
    <h3>education</h3>
    <ul>
      <li>
        <h4>Lambda School</h4>
        <div style={{ fontStyle: 'italic' }}>Jan 2018 - Dec 2018</div>
        <div>Full Stack Web, Computer Science</div>
      </li>
      <li>
        <h4>The New School</h4>
        <div style={{ fontStyle: 'italic' }}>Sep 2009 - Jun 2011</div>
        <div>MA in Media Studies</div>
      </li>
      <li>
        <h4>Berklee College of Music</h4>
        <div style={{ fontStyle: 'italic' }}>Sep 2004 - Jun 2008</div>
        <div>BM in Music</div>
      </li>
    </ul>
  </div>
)

const Experience = () => (
  <div style={sectionStyles}>
    <h3>experience</h3>
    <ul>
      <li>
        <h4>Lambda School</h4>
        <div style={{ fontStyle: 'italic' }}>Jul 2018 - Nov 2018</div>
        <div>Teaching Assistant, Project Manager</div>
      </li>
      <li>
        <h4>Freelance</h4>
        <div style={{ fontStyle: 'italic' }}>Aug 2012 - Dec 2014</div>
        <div>Web Developer</div>
      </li>
      <li>
        <h4>Archaic Audio</h4>
        <div style={{ fontStyle: 'italic' }}>Aug 2011 - Dec 2017</div>
        <div>Audio Engineer, Producer</div>
      </li>
    </ul>
  </div>
)

const Skills = () => (
  <div style={sectionStyles}>
    <h3>skills</h3>
    <ul>
      <li>Modern JavaScript environments and tooling</li>
      <li>
        Frontend and Backend frameworks like React, Redux, Express, Mongoose,
        etc.
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
)

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
      style={{ display: 'flex', flexFlow: 'row wrap', marginBottom: '40px', justifyContent: 'space-evenly' }}
    >
      <div className="Resume__column" style={columnStyles}>
        <Education />
        <Experience />
      </div>

      <div className="Resume__column" style={columnStyles}>
        <Skills />
      </div>
    </div>

    <Link to="/" style={{ fontSize: '28px', margin: '10px' }}>
      back
    </Link>
  </Layout>
)

export default Resume
