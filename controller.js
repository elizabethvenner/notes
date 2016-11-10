createNote();
makeURLRenderFullNote();

function createNote() {
  document.getElementById("add-note").addEventListener("click", function() {
    var textAreaValue = document.getElementById("note-content").value;
    var note = new Note(textAreaValue);
    myNotes.addNote(note);
    if(textAreaValue !== "") {
      addNoteToList(note);
      textAreaClear();
    } else {
      showEnterTextMessage();
    }
  });
}

function makeURLRenderFullNote() {
  window.addEventListener("hashchange", getNoteIdForCurrentPage);
}

function getNoteIdForCurrentPage () {
  showNote(getNoteFromUrl(window.location));
}

function getNoteFromUrl (location) {
  return location.hash.split("#")[1];
}

function showNote(index) {
  document
  .getElementById("full")
  .innerHTML = myNotes.getFullNoteText(index);
}
