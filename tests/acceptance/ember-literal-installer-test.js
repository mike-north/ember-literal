import Ember from 'ember';
import literal from 'ember-literal/macros/literal';
import startApp from '../helpers/start-app';
import { module, test } from 'qunit';

var App;

module('Acceptance: EmberLiteralInstaller', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Verifying installation onto Ember.literal', function(assert) {
  visit('/');
  assert.deepEqual(Ember.literal, literal, 'literal has been installed onto the Ember namespace');
});
