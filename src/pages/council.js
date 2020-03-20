import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Divider from '@material-ui/core/Divider'
import MuiLink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const CouncilPage = () => {
  return (
    <Layout>
      <SEO title="Council" />
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
            <MuiLink href="mailto:matt.mccormick@kitware.com">
              Matthew McCormick
            </MuiLink>{' '}
            - Kitware (President)
          </li>
          <li>
            <MuiLink href="mailto:brad@lowekamp.net">Bradley Lowekamp</MuiLink>{' '}
            - (Vice President)
          </li>
          <li>
            <MuiLink href="mailto:ntustison@virginia.edu">
              Nick Tustison
            </MuiLink>{' '}
            - University of Virginia (Secretary)
          </li>
          <li>
            <MuiLink href="mailto:hans-johnson@uiowa.edu">Hans Johnson</MuiLink>{' '}
            - The University of Iowa (Treasurer)
          </li>
          <li>
            <MuiLink href="mailto:pauly2@mail.med.upenn.edu">
              Paul Yushkevich
            </MuiLink>{' '}
            - University of Pennsylvania (Chief Technology Officer)
          </li>
        </ul>

        <p>The Board of Directors is:</p>
        <ul>
          <li>Andras Lasso - Queen's University</li>
          <li>
            Jon Haitz Legarreta Gorroño - PhD Student, Université de Sherbrooke
          </li>
          <li>
            Lauren O'Donnell - Brigham and Women's Hospital - Harvard Medical
            School
          </li>
          <li>Ipek Oguz - University of Pennsylvania </li>
          <li>Beatriz Paniagua - Kitware</li>
        </ul>
        <p>Founding Members include:</p>
        <ul>
          <li> Elsa Angelini - Columbia</li>
          <li>Brian Avants - UPenn</li>
          <li>Stephen Aylward - UNC (now with Kitware)</li>
          <li>Dan Blezek - GE CRD</li>
          <li>Josh Cates - Utah (now with OrthoGrid Systems)</li>

          <li>Vikram Chalana - Insightful</li>
          <li>Ting Chen - UPenn</li>
          <li>Jeffrey Duda - UPenn</li>
          <li>James Gee - UPenn</li>
          <li>Bill Hoffman - Kitware</li>
          <li>Paul Hughett - UPenn</li>
          <li>Luis Ibanez - Kitware (now with Google)</li>
          <li>Celina Imielinska - Columbia</li>
          <li>Yinpeng Jin - Columbia</li>

          <li>Julien Jomier - UNC (now with Kitware)</li>
          <li>Jisung Kim - UNC</li>
          <li>Brad King - Kitware</li>
          <li>Bill Lorensen - GE CRD</li>
          <li>Ken Martin - Kitware</li>
          <li>Dimitris Metaxas - Reutgers</li>
          <li>Jim Miller - GE CRD</li>
          <li>Lydia Ng - Insightful</li>
          <li>Aljaz Noe - UPenn</li>

          <li>Sayan Pathak – Insightful</li>
          <li>Peter Ratiu - BWH</li>
          <li>Will Schroeder - Kitware</li>
          <li>Marcelo Siqueira - UPenn</li>
          <li>George Stetten - Pittsburgh</li>
          <li>Tessa Sundaram - UPenn</li>
          <li>Jayaram Udupa - Upenn</li>
          <li>Ross Whitaker - Utah</li>
          <li>Terry Yoo - NLM</li>

          <li>Ying Zhuge - UPenn</li>
        </ul>
        <p> For more information, you may contact any of the ISC's Officers.</p>
      </Typography>
    </Layout>
  )
}

export default CouncilPage
