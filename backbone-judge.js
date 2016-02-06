(function() {
  // Attaching a method to the function's prototype allows
  // its instances use the method
  Backbone.Model.prototype.validate = function(attributes) {
    // Errors array will get returned by this method
    var errors = [];

    // Programmer should specify validations in a hash as a property of a model
    var validations = this.validations;

    // Iterate validations (keys are attributes, values are validating methods)
    for (var attrName in validations) {

      // Object might contain keys that are from base object (tldr; irrelevant info)
      if (validations.hasOwnProperty(attrName)) {
        var validatingFunctions = validations[attrName];

        // As one property might have multiple validations, iterate them all
        for (var i = 0; i < validatingFunctions.length; i++) {
          var fnName         = validatingFunctions[i].fn;
          var validatingFn   = this[fnName];
          var expectedValue  = validatingFunctions[i].val;
          var attributeValue = attributes[attrName];
          var errorMessage   = validatingFunctions[i].msg;
          var error          = validatingFn(attrName, attributeValue, expectedValue, errorMessage);

          if (error !== true) {
            errors.push(error);
          }
        }
      }
    }

    // Attaches errors array to the model (which can be accessed later by the view)
    this.errors = errors;

    // If there are no errors, invalid event will not fire (as errors would be empty)
    if (errors.length) {
      return errors;
    } else {
      return 0;
    }
  };

  // Validates presence of an attribute
  Backbone.Model.prototype.presence = function(attrName, attrValue, condition, msg) {
    // Convert all falsey values to empty string
    attrValue = attrValue || '';

    var error = msg;

    if ((attrValue.length !== 0 && condition) || (attrValue.length === 0 && !condition)) {
      return true;
    } else {
      return error;
    }
  };
})();