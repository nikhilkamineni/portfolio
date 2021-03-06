import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const LinkedinLink = props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "In-White-128px.png" }
        ) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <a
        href="https://www.linkedin.com/in/nikhilkamineni"
        style={{ padding: '10px 30px' }}
        className="Footer__Link"
      >
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      </a>
    )}
  />
)
export default LinkedinLink
