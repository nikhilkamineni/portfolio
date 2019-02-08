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
        flexFlow: 'row wrap',
        alignItems: 'center',
        height: '200px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Link to="/projects/" className="Nav__link">
        projects
      </Link>

      <Link to="/about/" className="Nav__link">
        about
      </Link>

      <Link to="/resume/" className="Nav__link">
        resume
      </Link>
    </div>
  </Layout>
)

export default IndexPage
