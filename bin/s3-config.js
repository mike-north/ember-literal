/*jshint node: true*/

module.exports = function (revision, tag) {
  var names = ['ember-literal-latest.js', 'ember-literal-' + revision + '.js'];
  if (tag) {
    names.push('ember-literal-' + tag + '.js');
  }
  return {
    'named-amd/ember-literal.js': {
      contentType: 'text/javascript',
      destinations: {
        wildcard: names.map(function(name) { return 'ember-literal/named-amd/' + name; }),
        release: [
          'ember-literal/named-amd/ember-literal-' + tag + '.amd.js'
        ]
      }
    },

    'globals/ember-literal.js': {
      contentType: 'text/javascript',
      destinations: {
        wildcard: names.map(function(name) { return 'ember-literal/globals/' + name; }),
        release: [
          'ember-literal/globals/ember-literal-' + tag + '.js'
        ]
      }
    }
  };
};
