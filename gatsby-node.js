/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
   resolve: {
      fallback: {
        zlib: false,
        path: false,
        fs: false,
        util: false,
        url: false,
        stream: false,
        http: false,
        crypto: false,
        assert: false,
        pg: false,
        net: false,
      },
    },
  })
}
