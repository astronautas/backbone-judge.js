# Backbone-judge.js - a Backbone.js model validation tool
Backbone-judge is a lightweight (~1kb minified) Backbone model attributes validation tool. It provides means to structure validations in a pretty similar fashion as Ruby on Rails. I have originaly made the tool for a personal project. As it was convenient enough, I decided to share it with others.

### Usage
### Via <script>
Add this line to your footer (after Backbone.js!)
```html
<script src="path/to/backbone-judge.js"></script>
```
### Via Require.js
Add the script as a path to your config file.
```javascript
requirejs.config({
  paths: {
    'jquery'         : 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min',
    'backbone'       : 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min',
    'underscore'     : 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
    'braintree'      : 'libs/braintree',
    'text'           : 'libs/text',
    'chart'          : 'libs/chart.min',
    'backbone-judge' : 'libs/backbone-judge'
  }
});
```

Add a hash 'validations' to your Backbone model, containing attributes as keys which need to tested and values as arrays of objects, containing validation function names and expected values.

```javascript
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
```

Presence and min/max length validating functions get shipped with plugins. Custom validating functions have to be declared as method of the model (pass only names, not functions themselves).

