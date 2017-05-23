import Ember from 'ember';

const { assert, computed, typeOf } = Ember;

/**
 * Returns a literal value. Useful for disambiguating
 * between string literals and property keys
 *
 * Example:
 *
 * ```javascript
 * var MyType = Ember.Object.extend({
 *   firstName: 'Mike',
 *   firstNameLiteral: literal('firstName') // 'firstName'
 * });
 * ```
 *
 * This is particularly useful in the context of composable computed property macros
 *
 * ```javascript
 * var l = EmberCPM.Macros.literal;
 *
 * var MyOtherType = Ember.Object.extend({
 *   isServerReady: false,
 *   userInput: 'ready',
 *   ready: and('isUserReady', 'isServerReady'),
 *   isUserReady: among(
 *     'userInput'          //property key
 *     l('ready'),          // literal (this would otherwise be ambiguious without using "literal")
 *     l('good'),           // literal
 *     l('fine'),           // literal
 *     l('satisfactory'),   // literal
 *     l('rad')             // literal
 *   )
 *
 * })
 * ```
 * @public
 */

export default function literal(val) {
  let valType = typeOf(val);
  assert(
    `Illegal Argument: ${val} (${valType}) is a non-literal value`,
    ['string', 'null', 'undefined'].indexOf(valType) !== -1
  );
  return computed(function() {
    return val;
  }).readOnly();

}
