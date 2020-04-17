import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ITKLogo from '../components/itk-logo'

import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'

const SoftwarePage = () => {
  return (
    <Layout>
      <SEO title="Software" />
      <Typography variant="h3">Software</Typography>
      <Divider />
      <br />
      <Typography variant="body1" gutterBottom>
        <p>
          {' '}
          Additional information on the software tools can be found on their
          respective websites, including details on the specific open-source
          license for each toolkit.
        </p>
      </Typography>
      <Typography variant="h4">Insight Toolkit</Typography>
      <Divider />
      <br />
      <Typography variant="body1">
        <p>
          <MuiLink href="https://itk.org">
            <div style={{ maxWidth: `150px`, marginBottom: `0.15rem` }}>
              <ITKLogo />
            </div>
            <strong> The Insight Toolkit (ITK)</strong>{' '}
          </MuiLink>
          was developed by six principal organizations, three commercial
          (Kitware, GE Corporate R&D, and Insightful) and three academic (UNC
          Chapel Hill, University of Utah, and University of Pennsylvania).
          Additional team members include Harvard Brigham & Women's Hospital,
          the University of Pittsburgh, and Columbia University. Program
          management and funding for the project was provided, in part, by the
          National Library of Medicine at the National Institutes of Health.
          NLM's funding was complemented by other NIH institutes.{' '}
        </p>

        <p>The goals for the project include the following:</p>

        <ul>
          <li>Establish a foundation for future, reproducible research.</li>
          <li>Create a repository of fundamental algorithms.</li>
          <li>Develop a platform for advanced product development.</li>
          <li>Support commercial application of the technology.</li>
          <li>Create conventions for future work.</li>
          <li>Support education in scientific image analysis.</li>
          <li>
            Grow a self-sustaining community of software users and developers.
          </li>
        </ul>
        <br />
      </Typography>
    </Layout>
  )
}

export default SoftwarePage
