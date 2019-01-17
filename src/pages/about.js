import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title="about" />
    <h1 style={{ fontFamily: 'Lato, sans-serif', textDecoration: 'underline' }}>
      about
    </h1>

    <p style={{ marginBottom: '200px' }}>Some stuff about me would go here</p>

    <Link to="/" style={{ fontSize: '28px', margin: '20px' }}>
      back
    </Link>
  </Layout>
)

export default About
