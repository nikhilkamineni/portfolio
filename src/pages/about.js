import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title="about" />
    <h1
      style={{
        fontFamily: 'Lato, sans-serif',
        fontWeight: '100',
        color: '#bb9900',
        marginBottom: '30px',
      }}
    >
      about
    </h1>

    <p
      className="About"
      style={{ marginBottom: '70px', fontFamily: 'Palanquin, sans-serif', padding: '0 40px' }}
    >
      I'm a software developer currently based in Portland, OR. Before getting
      into software development I studied music at Berklee College of Music,
      Media Studies at The New School and worked as and audio engineer an
      producer in Brooklyn, NY. <br />
      <br />
      Programming and software development is my focus nowadays, but when i'm
      not doing that i'm making strange noises with modular synthesizers,
      building DIY audio equipment or enjoying all the wonderful things the
      Pacific NW has to offer.
    </p>
    <Link to="/" style={{ fontSize: '28px', margin: '10px' }}>
      back
    </Link>
  </Layout>
)

export default About
