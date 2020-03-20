import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Divider from '@material-ui/core/Divider'
import MuiLink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const MeetingNotesPage = () => {
  return (
    <Layout>
      <SEO title="Meeting Notes" />
      <Typography variant="h3">Meeting Notes</Typography>
      <Divider />
      <br />

      <Typography variant="body1">
        <p>
          Insight Software Consortium (ISC) meeting notes can be found below.
          These notes are redacted to remove content such as financial
          information, for security purposes, or controversial comments, to
          enable unfettered expression by board members during the meeting.
        </p>
        <ul>
          <li>
            <MuiLink href="/notes/ISC_NOTES_20180307_REDACTED.pdf">
              ISC Meeting Notes, March 7th, 2018
            </MuiLink>
          </li>
          <li>
            <MuiLink href="/notes/ISC_NOTES_20190920_REDACTED.pdf">
              ISC Meeting Notes, September 9th, 2019
            </MuiLink>
          </li>
        </ul>
      </Typography>
    </Layout>
  )
}

export default MeetingNotesPage
