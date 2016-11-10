var noteTests = [
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
