// var assert = require("./test_helpers/assert");
console.log("hello1");
var tests = [
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
})(),

(function checkNoteHasOnly20Characters () {
  var note = new Note('hellohellohellohello!!!');
  try {
    assert.isTrue(note.truncator(note.getNoteText()).length < 24);
    return "Passed - note has fewer than 20 characters";
  }
  catch(error){
    return error;
  }
})(),

(function checkNoteText () {
  var note = new Note('hellohellohellohello!!!');
  try {
    assert.isEqual(note.getNoteText(), 'hellohellohellohello!!!');
    return "Passed - checkNoteText";
  }
  catch(error){
    return error;
  }
})(),

(function checkNote() {
  var note = new Note('hellohellohellohello!!!');
  try {
    assert.belongsToPrototype(note, 'Note');
    return "Passed - checkNoteText is prototype of Note";
  }
  catch(error){
    return error;
  }
})()];


// --- UPDATES THE SpecRunner HTML ---

var runTests = function() {
  tests.forEach(function(test){
    div = document.getElementById("tests");
    var li = document.createElement("li");
    var text = document.createTextNode(test);
    li.appendChild(text);
    div.appendChild(li);
  });
  var total = "Total number of tests: " + tests.length;
  var length = document.createTextNode(total);
  document.getElementById("total").appendChild(length);
};
