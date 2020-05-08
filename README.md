# insightsoftwareconsortium.org

[![Powered by NumFOCUS](https://img.shields.io/badge/powered%20by-NumFOCUS-orange.svg?style=flat&colorA=E1523D&colorB=007D8A)](http://numfocus.org)

This ``insightsoftwareconsortium-org`` branch of this repository store the static content served at the root of http://insightsoftwareconsortium.org.

[![Netlify Status](https://api.netlify.com/api/v1/badges/eb97a4fa-5a24-41f7-995c-affeb811763c/deploy-status)](https://app.netlify.com/sites/insightsoftwareconsortium/deploys)

Kitware hosted:

  https://insightsoftwareconsortium.org

Netlify hosted:

  https://insightsoftwareconsortium.netlify.com


[//]: # (numfocus-fiscal-sponsor-attribution)

The Insight Software Consortium (ISC) uses an [open governance model](./GOVERNANCE.md)
and is fiscally sponsored by [NumFOCUS](https://numfocus.org/). Consider making a [tax-deductible donation](<!--https://numfocus.org/donate-to-isc-->)
to help the project pay for developer time, professional services, travel,
workshops, and a variety of other needs.

<div align="center">
  <a href="<https://numfocus.org/project/isc>">
    <img height="60px"
         src="https://raw.githubusercontent.com/numfocus/templates/master/images/numfocus-logo.png"
         align="center">
  </a>
</div>
<br>

# Synchronization

Every 5 minutes, the branch [insightsoftwareconsortium-org](https://github.com/InsightSoftwareConsortium/insightsoftwareconsortium.org/tree/insightsoftwareconsortium-org) is automatically pulled into the live site hosted by [Kitware, Inc.](https://www.kitware.com). There is no need to connect to the server in order to make changes.

A script like this one is used:

```
#!/bin/bash

SITE_DIR=/var/www/ISC
SITE_REPO=git://github.com/InsightSoftwareConsortium/insightsoftwareconsortium.org.git
SITE_BRANCH=insightsoftwareconsortium-org
if [[ ! -d $SITE_DIR ]]; then
  git clone $SITE_REPO $SITE_DIR -b $SITE_BRANCH
fi
cd $SITE_DIR
git fetch origin
git reset --hard origin/$SITE_BRANCH
```

# License

It is covered by the Apache License, Version 2.0:

http://www.apache.org/licenses/LICENSE-2.0

# Supporting The ISC

The ISC software projects are fiscally sponsored projects of [NumFOCUS](https://numfocus.org/),
a non-profit dedicated to supporting the open source scientific computing
community. If you want to support ISC's mission to promote open-source,
reproducible scientific image analysis software for education and research,
please consider making a [donation](<!--https://numfocus.org/donate-to-isc-->) to support our efforts.

NumFOCUS is 501(c)(3) non-profit charity in the United States; as such,
donations to NumFOCUS are tax-deductible as allowed by law. As with any
donation, you should consult with your personal tax adviser or the IRS about
your particular tax situation.

## Website Features

- Material UI Framework
- Roboto Typeface (self hosted)
- SEO
- Offline Support
- Based on Gatsby Default Starter

## Development

1. **Install [Node.js](https://nodejs.org/).**

2. **Clone and install dependencies.**

    ```sh
    git clone https://github.com/InsightSoftwareConsortium/insightsoftwareconsortium.org
    cd insightsoftwareconsortium.org
    npm ci
    ```

If you encounter the error:

```
Error: ENOSPC: System limit for number of file watchers reached,
```

[Run](https://github.com/gatsbyjs/gatsby/issues/11406):

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

3.  **Start developing.**

    ```sh
    npm run develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `<project-name>` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!
