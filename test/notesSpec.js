// var assert = require("./test_helpers/assert");

var checkDefaultIs0 = function(){
  var notes = new Notes();
  try {
    // ACTUAL TEST
    assert.isTrue(notes.items.length === 0);
    return "Passed - array is 0 by default";
  }
  catch(error){
    return error;
  }
};

var checkNoteHasBeenAdded = function(){
  var notes = new Notes();
  notes.addNote("new note");
  try {
    assert.isEqual(notes.items.length, 1);
    return "Passed - note has been added";
  }
  catch(error){
    return error;
  }
};
var checkGetFullNoteText = function(){
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
};

var checkNoteHasOnly20Characters = function(){
  var note = new Note('hellohellohellohello!!!');
  try {
    assert.isTrue(note.truncator(note.getNoteText()).length < 24);
    return "Passed - note has fewer than 20 characters";
  }
  catch(error){
    return error;
  }
};

var checkNoteText = function(){
  var note = new Note('hellohellohellohello!!!');
  try {
    assert.isEqual(note.getNoteText(), 'hellohellohellohello!!!');
    return "Passed - checkNoteText";
  }
  catch(error){
    return error;
  }
};


// ---Update this array to run tests!! ---
var tests = [ checkDefaultIs0(), checkNoteHasBeenAdded(),
  checkNoteHasOnly20Characters(), checkNoteText(), checkGetFullNoteText() ];

// --- UPDATES THE HTML ---

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
