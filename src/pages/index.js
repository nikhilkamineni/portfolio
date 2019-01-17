import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/projects/">projects</Link>
    <Link to="/about/">about</Link>
  </Layout>
)

export default IndexPage
