// insert text, click button, check array length

function checkNoteHasBeenAdded() {
    var notes = new Notes();
    assert.isTrue(notes.items.length == 1);
}

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

function Notes() {
  this.items = [];
}
