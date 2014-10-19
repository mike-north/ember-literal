/*jshint node:true*/

module.exports = function(revision, tag) {
  return {
    'ember-literal.js':
      { contentType: 'text/javascript',
        destinations: {
          wildcard: [
            'ember-literal-latest.js',
            'ember-literal-' + tag + '.js',
            'ember-literal-' + revision + '.js'
          ]
        }
      },
    'ember-literal.min.js':
      { contentType: 'text/javascript',
        destinations: {
          wildcard: [
            'ember-literal-latest.min.js',
            'ember-literal-' + tag + '.js',
            'ember-literal-' + revision + '.min.js'
          ]
        }
      }
  };
};
