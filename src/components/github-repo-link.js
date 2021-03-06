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

const GithubLink = props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "GitHub-Mark-Light-120px-plus.png" }
        ) {
          childImageSharp {
            fixed(width: 20, height: 20) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <a
        href={`https://github.com/nikhilkamineni/${props.repo}`}
        style={{ margin: '0', padding: '0 10px 10px 10px' }}
      >
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      </a>
    )}
  />
)
export default GithubLink
