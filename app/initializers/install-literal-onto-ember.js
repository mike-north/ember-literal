import Ember from 'ember';
import literal from 'ember-literal/macros/literal';

export function initialize(/* container, application */) {
  // eslint-disable-next-line
  if (!Ember.hasOwnProperty('literal')) {
    Ember.literal = literal;
  }
}

export default {
  name: 'install-literal-onto-ember',

  initialize
};
