import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      className="Nav"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '400px',
        height: '200px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Link to="/projects/" className="Nav__link">projects</Link>
      <Link to="/about/" className="Nav__link">about</Link>
    </div>
  </Layout>
)

export default IndexPage
