var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isEqual: function(assertionToCheck, assertion) {
    if (assertionToCheck != assertion) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not equal to: " + assertion);
    }
  }
};

// module.exports = assert;
