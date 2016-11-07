// var assert = require("./test_helpers/assert");

function checkNoteHasBeenAdded() {
    var notes = new Notes();
    assert.isTrue(notes.items.length === 1);
    assert.isEqual(2, 2);
}
