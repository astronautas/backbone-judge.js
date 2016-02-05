# Backbone-judge.js - a Backbone.js model validation tool
Backbone-judge is a lightweight (~1kb minified) Backbone model attributes validation tool. It provides means to structure validations in a pretty similar fashion as Ruby on Rails. I have originaly made the tool for a personal project. As it was convenient enough, I decided to share it with others.

### Usage
Add a hash 'validations' to your Backbone model, containing attributes as keys which need to tested and values as arrays of objects, containing validation function names and expected values.

var EmailModel = Backbone.Model.extend({
  validations = {
    'name'         : [{ fn: 'isUppercase', val: no }, {fn: 'presence', val: true}],
    'emailAddress' : [...
  },
  
  initialize: function() {
    ...
  },
  
  isUppercase: function() {
    ... // should return either true or error message (string)
  }
});

Presence and min/max length validating functions get shipped with plugins. Custom validating functions have to be declared as method of the model (pass only names, not functions themselves).

