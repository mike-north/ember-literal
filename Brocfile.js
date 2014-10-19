/* global require, module */

var emberLiteral;

if (process.argv[2] === 'build') {
  var dist    = require('broccoli-dist-es6-module');
  var Funnel  = require('broccoli-funnel');

  var transpiled = dist('addon', {
    global: 'EmberLiteral',
    packageName: 'ember-literal',
    main: 'ember-literal',
    shim: { 'ember': 'Ember' }
  });

  emberLiteral = new Funnel(transpiled, {
    getDestinationPath: function(relativePath) {
      if (relativePath === 'globals/main.js') {
        return 'globals/ember-literal.js';
      } else if (relativePath === 'named-amd/main.js') {
        return 'named-amd/ember-literal.js';
      }
      return relativePath;
    }
  });

  if (process.env.EMBER_ENV === 'production') {
    var mergeTrees = require('broccoli-merge-trees');
    var defeatureify = require('broccoli-defeatureify');
    var uglify = require('broccoli-uglify-js');
    var defeatureifyOpts = {
      enableStripDebug: true,
      debugStatements: [
        "Ember.warn",
        "emberWarn",
        "Ember.assert",
        "emberAssert",
        "Ember.deprecate",
        "emberDeprecate",
        "Ember.debug",
        "emberDebug",
        "Ember.Logger.info",
        "Ember.runInDebug",
        "runInDebug"
      ]
    };

    var devBuild  = defeatureify(emberLiteral, defeatureifyOpts);
    var prodBuild = defeatureify(emberLiteral, defeatureifyOpts);
    var minBuild  = uglify(prodBuild);

    prodBuild = new Funnel(prodBuild, {
      getDestinationPath: function(relativePath) {
        if (/(globals|named-amd)/.test(relativePath)) {
          return relativePath.replace('ember-literal.js', 'ember-literal.prod.js');
        }
        return relativePath;
      }
    });

    minBuild = new Funnel(minBuild, {
      getDestinationPath: function(relativePath) {
        if (/(globals|named-amd)/.test(relativePath)) {
          return relativePath.replace('ember-literal.js', 'ember-literal.min.js');
        }
        return relativePath;
      }
    });


    emberLiteral = mergeTrees([devBuild, minBuild, prodBuild], { overwrite: true });
  }
} else {
  var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
  var app = new EmberAddon();
  emberLiteral = app.toTree();
}

module.exports = emberLiteral;
