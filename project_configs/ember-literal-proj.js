/*jshint node:true*/

module.exports = function(revision, tag) {
  return {
    'globals/ember-literal.js':
      { contentType: 'text/javascript',
        destinations: {
          wildcard: [
            'ember-literal-latest.js',
            'ember-literal-' + tag + '.js',
            'ember-literal-' + revision + '.js'
          ]
        }
      },
    'named-amd/ember-literal.js':
      { contentType: 'text/javascript',
        destinations: {
          wildcard: [
            'ember-literal-latest.amd.js',
            'ember-literal-' + tag + '.amd.js',
            'ember-literal-' + revision + '.amd.js'
          ]
        }
      }
  };
};
