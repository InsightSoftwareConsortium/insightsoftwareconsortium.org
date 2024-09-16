import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

import Divider from '@material-ui/core/Divider'
import MuiLink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const CouncilPage = () => {
  return (
    <Layout>
      <Seo title="Council" />
      <Typography variant="h3">Council</Typography>
      <Divider />
      <br />

      <Typography variant="body1">
        <p>
          The Insight Software Consortium consists of a Council and Members.
        </p>
        <p>The Officers for 2018 are:</p>
        <ul>
          <li>
            <MuiLink href="mailto:matt.mccormick@kitware.com">Matthew McCormick</MuiLink>
            {' '} - Kitware (President)
          </li>
          <li>
            <MuiLink href="mailto:brad@lowekamp.net">Bradley Lowekamp</MuiLink>
            {' '} - National Institutes of Health (Vice President)
          </li>
          <li>
            <MuiLink>Julien Jomier</MuiLink>
            {' '} - NVIDIA (Secretary)
          </li>
          <li>
            <MuiLink>Jon Haitz Legarreta Gorroño</MuiLink>
            {' '} - Brigham and Women&#39;s Hospital, Harvard Medical School (Treasurer)
          </li>
        </ul>

        <p>Addition Council Members are:</p>
        <ul>
          <li>Andras Lasso - Queen's University</li>
          <li>Jon Haitz Legarreta Gorroño - Brigham and Women&#39;s Hospital, Harvard Medical School</li>
          <li>Dženan Zukić - Kitware</li>
          <li>Nick Tustison - The University of Virginia</li>
          <li>Serena Bonaretti - Balgrist Campus</li>
        </ul>
        <p>Past Council Members include:</p>
        <ul>
          <li>Ipek Oguz - University of Pennsylvania</li>
          <li>Paul Yushkevich - University of Pennsylvania</li>
          <li>Lauren O'Donnell - Brigham and Women&#39;s Hospital - Harvard Medical School</li>
          <li>Beatriz Paniagua - Kitware</li>

          <li>Elsa Angelini - Columbia University</li>
          <li>Brian Avants - University of Pennsylvania</li>
          <li>Stephen Aylward - University of North Carolina at Chapel Hill</li>
          <li>Dan Blezek - General Electric Corporate R&D</li>
          <li>Josh Cates - University of Utah</li>

          <li>Vikram Chalana - Insightful</li>
          <li>Ting Chen - University of Pennsylvania</li>
          <li>Jeffrey Duda - University of Pennsylvania</li>
          <li>James Gee - University of Pennsylvania</li>
          <li>Bill Hoffman - Kitware</li>
          <li>Paul Hughett - University of Pennsylvania</li>
          <li>Luis Ibanez - Kitware</li>
          <li>Celina Imielinska - Columbia University</li>
          <li>Yinpeng Jin - Columbia University</li>

          <li>Julien Jomier - University of North Carolina at Chapel Hill</li>
          <li>Jisung Kim - University of North Carolina at Chapel Hill</li>
          <li>Brad King - Kitware</li>
          <li>Bill Lorensen - General Electric Corporate R&D</li>
          <li>Ken Martin - Kitware</li>
          <li>Dimitris Metaxas - Rutgers University</li>
          <li>Jim Miller - General Electric Corporate R&D</li>
          <li>Lydia Ng - Insightful</li>
          <li>Aljaz Noe - University of Pennsylvania</li>

          <li>Sayan Pathak – Insightful</li>
          <li>Peter Ratiu - Brigham and Women&#39;s Hospital - Harvard Medical School</li>
          <li>Will Schroeder - Kitware</li>
          <li>Marcelo Siqueira - University of Pennsylvania</li>
          <li>George Stetten - University of Pittsburgh</li>
          <li>Tessa Sundaram - University of Pennsylvania</li>
          <li>Jayaram Udupa - University of Pennsylvania</li>
          <li>Ross Whitaker - University of Utah</li>
          <li>Terry Yoo - National Library of Medicine</li>

          <li>Ying Zhuge - University of Pennsylvania</li>
        </ul>
        <p>Institutions correspond to members' affiliations at the time members were elected/in office.</p>
        <p> For more information, you may contact any of the ISC's Officers.</p>
      </Typography>
    </Layout>
  )
}

export default CouncilPage
