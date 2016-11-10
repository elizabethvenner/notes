var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isEqual: function(assertionToCheck, assertion) {
    if (assertionToCheck !== assertion) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not equal to: " + assertion);
    }
  },

  isInstanceOf: function(assertionToCheck, assertion) {
    if (typeof(assertionToCheck) !== assertion) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not type of: " + assertion);
    }
  }

};

// module.exports = assert;
