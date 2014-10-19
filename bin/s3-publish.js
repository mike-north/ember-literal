#!/usr/bin/env node

var S3Publisher = require('ember-publisher');
var configPath = require('path').join(__dirname, './s3-config.js');

var publisher = new S3Publisher({projectConfigPath: configPath});
publisher.currentBranch = function() {
  return (process.env.TRAVIS_BRANCH === 'master') ? 'wildcard' : 'release';
};
publisher.publish();
