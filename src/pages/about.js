import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title="about" />

    <div id="AboutContainer">
      <h1 id="AboutContainer__header">about</h1>

      <ul id="AboutContainer__content">
        <li>Full stack software developer based in Portland, OR</li>
        <li>
          Current focus on web technologies, but loves learning new things
        </li>
        <li>Music/Audio engineering background</li>
        <li>Full Stack Web and Computer Science from Lambda School</li>
        <li>BM from Berklee College of Music</li>
        <li>MA from The New School </li>
        <li>Addicted to modular synthesizers and guitar pedals</li>
        <li>
          Enjoys building synth modules and audio equipment in his free time
        </li>
        <li>Loves being harrassed by his cats</li>
      </ul>

      <Link to="/" style={{ fontSize: '28px', margin: '10px', padding: '10px' }}>
        back
      </Link>
    </div>
  </Layout>
)

export default About
