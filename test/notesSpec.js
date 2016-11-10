// var assert = require("./test_helpers/assert");
console.log("hello1");
var notesTests = [
  (function checkDefaultIs0 (){
    var notes = new Notes();
    try {
      // ACTUAL TEST
      assert.isTrue(notes.items.length === 0);
      return "Passed - array is 0 by default";
    }
    catch(error){
      return error;
    }
})(),

(function checkNoteHasBeenAdded () {
    var notes = new Notes();
    notes.addNote("new note");
    try {
      assert.isEqual(notes.items.length, 1);
      return "Passed - note has been added";
    }
    catch(error){
      return error;
    }
})(),

(function checkGetFullNoteText () {
  var notes = new Notes();
  var note = new Note ("some text");
  notes.addNote(note);
  try {
    assert.isEqual(notes.getFullNoteText(0), "some text");
    return "Passed - getFullNoteText";
  }
  catch(error){
    return error;
  }
})(),

(function checkGetNoteIndex () {
  var notes = new Notes();
  var note = new Note ("some text");
  notes.addNote(note);
  try {
    assert.isEqual(notes.getNoteIndex(), 0);
    return "Passed - getNoteIndex";
  }
  catch(error){
    return error;
  }
})()
];
