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

const ITKLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "itk_logo_medium_res.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 250)
          }
        }
      }
    `}
    render={data => <GatsbyImage image={data.placeholderImage.childImageSharp.gatsbyImageData} />}
  />
)
export default ITKLogo
