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

