import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import l from 'ember-literal/macros/literal';

moduleForAcceptance('Acceptance: EmberLiteralInstaller');

test('Verifying installation onto Ember.literal', function(assert) {
  visit('/');
  assert.equal(l, window.Ember.literal, 'literal has been installed onto the Ember namespace');
});
