import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Divider from '@material-ui/core/Divider'
import MuiLink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import wordCloud from '../../images/survey/2019/word-cloud.png'
import interfaces from '../../images/survey/2019/interfaces.png'

const Survey2019Page = () => {
  return (
    <Layout>
      <SEO title="ITK Community Survey 2019 Summary" />
      <Typography variant="h3">2019 ITK Community Survey</Typography>
      <Divider />
      <br />

      <Typography variant="body1">
        <h1>Summary</h1>
        <p>
          Since 1999, the Insight Toolkit (ITK) has been revolutionizing the way
          medical images are explored and analyzed. In addition to providing a
          robust infrastructure for the dissemination of complex algorithms
          across different fields, ITK has organically created a vibrant and
          active community in scientific image analysis.
        </p>
        <p>
          In an attempt to objectively measure the impact of this open-source
          tool and the number of its active users, last year we launched a
          community survey to hear first hand about the ITK community. We
          received a total of 82 responses. Below we summarize a few of the
          findings.
        </p>
        <h3 id="About-the-ITK-Users">About the ITK Users</h3>
        <p>
          The majority of users of ITK work in academic research (66%) followed
          closely by those working in commercial software development (32%). The
          overwhelming majority of ITK users work in the field of medical
          imaging (74.4%). We find ITK is also used in other fields such as
          biological imaging (12%), material science (3.7%) or biomechanics
          (1.2%).
        </p>
        <p>
          Our survey revealed the fact ITK’s C++ programming interface is most
          often used, followed closely by ITK Python programming interface.
        </p>
        <p>
          <img src={interfaces} alt="ITK programming interfaces" />
        </p>
        <p>
          When asked about how ITK is used, we obtained responses in three main
          categories: a) Direct use, b) use as part of derived products that
          heavily rely in ITK such as{' '}
          <MuiLink
            href="http://stnava.github.io/ANTs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ANTS
          </MuiLink>
          ,{' '}
          <MuiLink
            href="http://openrtk.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RTK
          </MuiLink>
          ,{' '}
          <MuiLink
            href="https://www.slicer.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            3D Slicer
          </MuiLink>{' '}
          or{' '}
          <MuiLink
            href="https://www.mevislab.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MeVisLab
          </MuiLink>{' '}
          and c) as a resource in their own image analysis codebases, examples
          of this are{' '}
          <MuiLink
            href="https://github.com/spinicist/QUIT"
            target="_blank"
            rel="noopener noreferrer"
          >
            QUIT
          </MuiLink>
          ,{' '}
          <MuiLink
            href="https://github.com/qMRLab/qMRLab"
            target="_blank"
            rel="noopener noreferrer"
          >
            qMRLab
          </MuiLink>
          , or Allen Institute’s{' '}
          <MuiLink
            href="https://github.com/AllenInstitute/aics-segmentation"
            target="_blank"
            rel="noopener noreferrer"
          >
            aics-segmentation
          </MuiLink>
          . The amount of possible scientific research enabled by ITK is
          illustrated by the{' '}
          <MuiLink
            href="https://insightsoftwareconsortium.netlify.com/citations"
            target="_blank"
            rel="noopener noreferrer"
          >
            hundreds of publications that were referenced in the survey
          </MuiLink>
          .
        </p>
        <h3 id="ITK-into-the-Future-and-Beyond">
          ITK into the Future and Beyond
        </h3>
        <p>
          Our users also pointed out areas of improvement they would like to see
          in our toolbox including GPU acceleration, needed for the processing
          of larger datasets, as well as the improved interfaces with deep
          learning libraries. These consistent with are the standard trends in
          the image processing field.
        </p>
        <p>
          <img src={wordCloud} alt="ITK Survey word cloud" />
        </p>
        <p>
          <em>
            Figure generated using{' '}
            <MuiLink
              href="http://wordclouds.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              wordclouds.com
            </MuiLink>{' '}
            from the words found in the “What areas of improvement or features
            would you like to see in future versions?” and “How could ITK better
            serve your research and product development needs?” questions of the
            survey. 56% of the users that responded to the survey provided this
            feedback.
          </em>
        </p>
        <p>
          It is clear that ITK ought to follow current trends in technology; GPU
          accelerated processing for large data and machine learning. It is also
          clear that despite having plenty of processing filters for
          segmentation and registration, ITK also should continue making ensure
          adoption of new method to make the state of the art in those domains
          available for general adoption.
        </p>
        <p>
          When asked about how to strengthen the community, the opinion was
          expressed to increase the amount of examples and improve the style of
          the existing examples to adhere to modern style guidelines. Also
          improve the quantity of tutorials on how to perform basic image
          operations with ITK classes, e.g. webinars and video tutorials or
          improve and update the ITK Guide. Finally, more hackathons in which
          the community can exchange ideas in person are desired.
        </p>
      </Typography>
    </Layout>
  )
}

export default Survey2019Page
