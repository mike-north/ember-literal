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
        wildcard: names.map(function(name) { return 'named-amd/' + name; })
      }
    },

    'globals/ember-literal.js': {
      contentType: 'text/javascript',
      destinations: {
        wildcard: names.map(function(name) { return 'globals/' + name; })
      }
    }
  };
};
