import Ember from 'ember';
import l from 'ember-literal/macros/literal';
import { module, test } from 'qunit';

const { Object: EObj, computed } = Ember;

let MyType = EObj.extend({
  literalProp: l('val'),
  noArg: l(),
  nullArg: l(null)
});

let myObj;

module('literal', {
  beforeEach() {
    myObj = MyType.create({
      val: '6'
    });
  }
});

test('Property key (should return the key its self)', function(assert) {
  assert.strictEqual(myObj.get('literalProp'), 'val');
});

test('No argument case', function(assert) {
  assert.strictEqual(myObj.get('noArg'), undefined);
});

test('Null argument case', function(assert) {
  assert.strictEqual(myObj.get('nullArg'), null);
});

test('Numeric argument case', function(assert) {
  assert.throws(function() {
    EObj.extend({
      val: l(6)
    });
  }, 'Illegal Argument');
});

test('Nested computed property argument case', function(assert) {
  assert.throws(function() {
    EObj.extend({
      val: l(computed.alias('abc'))
    });
  }, 'Illegal Argument');
});
