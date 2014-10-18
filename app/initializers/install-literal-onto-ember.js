import Ember from 'ember';
import literal from 'ember-literal/macros/literal';

export var initialize = function(/* container, application */) {
  if (!Ember.literal) {
    Ember.literal = literal;
  }
};

export default {
  name: 'install-literal-onto-ember',

  initialize: initialize
};
