import Ember from 'ember';
import literal from 'ember-literal/macros/literal';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: EmberLiteralInstaller', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Verifying installation onto Ember.literal', function() {
  visit('/');
  deepEqual(Ember.literal, literal, 'literal has been installed onto the Ember namespace');
});
