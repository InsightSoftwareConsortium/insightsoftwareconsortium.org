import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import ITKLogo from '../components/itk-logo'
import NumFOCUSFiscallySponsoredProjectLogo from '../components/numfocus-fiscally-sponsored-project-logo'
import SEO from '../components/seo'

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import MuiLink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={3} justify="center">
        <Grid item xs={2}>
          <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3" component="h1">
            About the Insight Software Consortium
          </Typography>
          <Typography variant="subtitle2">
            The Insight Software Consortium (ISC) is a non-profit, educational
            consortium dedicated to promoting and maintaining open-source,
            freely available software for medical image analysis.
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <div style={{ maxWidth: `300px`, marginBottom: `0.15rem` }}>
            <ITKLogo />
          </div>
        </Grid>
      </Grid>
      <Divider />
      <br />
      <Typography variant="body1" gutterBottom>
        <p>
          The Insight Software Consortium (ISC) promotes open source, scientific
          image analysis software in teaching, research, and commercial
          applications, and maintains webpages and user and developer
          communities. The flagship project the ISC supports is the{' '}
          <MuiLink href="https://itk.org/">Insight Toolkit (ITK)</MuiLink>.
        </p>

        <p>
          <MuiLink href="https://numfocus.org">NumFOCUS</MuiLink> holds the
          copyright of this software for the ISC. NumFOCUS is a non-profit
          entity that promotes the use of open source scientific software for
          educational and research purposes. NumFOCUS delegates project
          governance to the Insight Software Consortium Council. By holding the
          copyright of these open-source software tools, NumFOCUS and the ISC
          cultivate an intellectual commons where knowledge and technology are
          efficiently shared across academia, industry and government, therefore
          promoting the progress of science and technology.
        </p>
      </Typography>

      <Typography variant="h4" gutterBottom>
        History of the ISC
      </Typography>
      <Typography variant="body1">
        <p>
          In 1999, the United States National Library of Medicine of the
          National Institutes of Health awarded a three-year contract to develop
          an open-source registration and segmentation toolkit, which came to be
          known as the Insight Toolkit (ITK). ITK's NLM Project Manager was Dr.
          Terry Yoo, who coordinated the six prime contractors who developed the
          toolkit. In 2004, the individual ITK developers incorporated the
          Insight Software Consortium (ISC), and the ITK toolkit copyrights were
          transferred to the ISC.
        </p>

        <p>
          The original ITK developer contractors included three commercial
          partners: GE Corporate R&D, Kitware Inc., and MathSoft (now known as
          Insightful); and three academic partners: University of North Carolina
          (UNC), University of Tennessee (UT), and University of Pennsylvania
          (UPenn).{' '}
        </p>

        <p>
          The Principal Investigators for these partners were, respectively,
          Bill Lorensen at GE CRD, Will Schroeder at Kitware, Vikram Chalana at
          Insightful, Stephen Aylward with Luis Ibáñez at UNC (Stephen is now at
          Kitware, Luis at Google), Ross Whitaker with Josh Cates at UT (both
          now at Utah), and Dimitri Metaxas at UPenn. Additionally, several
          subcontractors rounded out the consortium including Peter Raitu at
          Brigham & Women's Hospital; Celina Imielinska and Pat Molholt at
          Columbia University; Jim Gee at UPenn's Grasp Lab; and George Stetten
          at University of Pittsburgh.
        </p>
      </Typography>

      <Typography variant="h4" gutterBottom>
        Supporting the ISC
      </Typography>
      <Typography variant="body1">
        <p>
          The ISC software projects are fiscally sponsored projects of <MuiLink href="https://numfocus.org">NumFOCUS</MuiLink>,
          a non-profit dedicated to supporting the open source scientific
          computing community. If you want to support ISC's mission to promote
          and maintain open-source, freely available software for medical
          image analysis in teaching, research, and commercial applications,
          please consider making a <MuiLink href="https://numfocus.org/membership">donation</MuiLink> to
          support our efforts.
        </p>

        <center>
          <MuiLink href="https://numfocus.org">
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <NumFOCUSFiscallySponsoredProjectLogo />
            </div>
          </MuiLink>
        </center>

        <p>
          NumFOCUS is 501(c)(3) non-profit charity in the United States; as such,
          donations to NumFOCUS are tax-deductible as allowed by law. As with any
          donation, you should consult with your personal tax adviser or the IRS about
          your particular tax situation.
        </p>
      </Typography>

    </Layout>
  )
}

export default IndexPage
