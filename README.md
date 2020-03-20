# insightsoftwareconsortium.org

This ``insightsoftwareconsortium-org`` branch of this repository store the static content served at the root of http://insightsoftwareconsortium.org.

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

3.  **Start developing.**

    ```sh
    npm run develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `<project-name>` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!
