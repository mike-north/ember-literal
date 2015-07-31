# ember-literal 

[![Build Status](https://travis-ci.org/mike-north/ember-literal.svg?branch=master)](https://travis-ci.org/mike-north/ember-literal)
[![Dependency Status](https://david-dm.org/mike-north/ember-literal.svg)](https://david-dm.org/mike-north/ember-literal)
[![devDependency Status](https://david-dm.org/mike-north/ember-literal/dev-status.svg)](https://david-dm.org/mike-north/ember-literal#info=devDependencies)
[![Ember Observer Score](http://emberobserver.com/badges/ember-literal.svg)](http://emberobserver.com/addons/ember-literal)

This README outlines the details of collaborating on this Ember addon.

## Use
`literal` is a way of disambiguating between literals and property keys when using computed properties.

````javascript
import l from 'ember-literal/macros/literal';
import among from 'ember-cpm/macros/among'; // from the wonderful ember-cpm library

var and = Ember.computed.and;

var MyOtherType = Ember.Object.extend({
  isServerReady: false,
  userInput: 'ready',
  ready: and('isUserReady', 'isServerReady'),
  isUserReady: among(    // NOTE: among doesn't have composed macro support, but it soon will!
    'userInput'          // property key
    l('ready'),          // literal (this would otherwise be ambiguious without using "literal")
    l('good'),           // literal
    l('fine'),           // literal
    l('satisfactory'),   // literal
    l('rad')             // literal
  )
});
````
You can use `literal` in your project two ways

1. Use it via the `Ember` namespace
````javascript
Ember.literal
````
2. Import the macro directly
````javascript
import literal from 'ember-literal/macros/literal';
````

## CDN
Tagged releases are automatically uploaded to a CDN for light development use. Do not rely on these for production

Examples:

* Globals: https://ember-ui.s3.amazonaws.com/ember-literal/globals/ember-literal-v0.0.1-beta.1.js
* AMD: https://ember-ui.s3.amazonaws.com/ember-literal/named-amd/ember-literal-v0.0.1-beta.1.amd.js

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`


## Thanks!
* @hjdavid for documenting [his thoughts on the subject of Ember.literal](https://gist.github.com/hjdivad/8308522)
* @stefanpenner for his tremendous work on [ember-cli](http://www.ember-cli.com/)
* @jamesarosen and @cibernox for supporting my work on [composable computed property macros](https://github.com/jamesarosen/ember-cpm#composable-computed-property-macros)
