/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 100,
            }}
          >
            <main>{children}</main>
            <footer style={{ paddingTop: 30 }}>
              © {new Date().getFullYear()}{' '}
              <a href="https://numfocus.org/">NumFOCUS</a>. This work is
              licensed under a{' '}
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nd/3.0/"
              >
                Creative Commons Attribution-NoDerivs 3.0 Unported License
              </a>
              .
              <br />
              <a href="https://www.kitware.com/privacy/#privacy-policy">
                Privacy Notice
              </a>
            </footer>
          </div>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
