import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Divider from '@material-ui/core/Divider'
import MuiLink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const Citations = () => {
  return (
    <Layout>
      <SEO title="Citations" />
      <Typography variant="h3">Citations</Typography>
      <Divider />
      <br />
      <Typography variant="h4">Insight Toolkit (ITK)</Typography>
      <iframe
        title="citations"
        src={'/citations-visualization/index.html'}
        height="1200px"
        width="800px"
      />

      <Typography variant="body2">
        <p>
          The{' '}
          <MuiLink href="https://raw.githubusercontent.com/InsightSoftwareConsortium/insightsoftwareconsortium.org/master/static/citations-visualization/ITKBibliography.bib">
            source BibTeX list
          </MuiLink>{' '}
          is rendered using vkaravir's{' '}
          <MuiLink href="https://github.com/vkaravir/bib-publication-list">
            bib-publication-list
          </MuiLink>
          .
        </p>
      </Typography>
    </Layout>
  )
}

export default Citations
