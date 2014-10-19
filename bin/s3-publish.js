#!/usr/bin/env node

var S3Publisher = require('ember-publisher');
var configPath = require('path').join(__dirname, './s3-config.js');

var publisher = new S3Publisher({projectConfigPath: configPath});
publisher.currentBranch = function() {
  return (process.env.TRAVIS_BRANCH === 'master') ?
    'wildcard' :
    /v(?:[0-9]\.){2}[0-9](?:[A-Za-z\-]*[\.0-9]*)/.test(process.env.TRAVIS_BRANCH) ?
      'release' :
      'no-op';
};
publisher.publish();
