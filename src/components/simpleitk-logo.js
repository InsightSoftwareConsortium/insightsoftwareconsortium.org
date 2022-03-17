import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const SimpleITKLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "simpleitk_logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 150)
          }
        }
      }
    `}
    render={data => <GatsbyImage image={data.placeholderImage.childImageSharp.gatsbyImageData} />}
  />
)
export default SimpleITKLogo
