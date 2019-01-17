import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title="about" />
    <h1>about</h1>
    <p>Some stuff about me would go here</p>
    <Link to="/">back</Link>
  </Layout>
)

export default About
