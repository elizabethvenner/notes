mynotes = new Notes();
mynotes.items = [];
notes = mynotes.items;

createNote();
makeURLRenderFullNote();

function createNote() {
  document.getElementById("add-note").addEventListener("click", function() {
    var note = new Note(document.getElementById("note-content").value);
    mynotes.addNote(note);
    if(document.getElementById("note-content").value !== "") {
      addNoteToList(note);
      document.getElementById("note-content").value = "";
      document.getElementById("errors").innerHTML = "";

    } else {
      document.getElementById("errors").innerHTML = "Please enter some text";
    }
  });
}

var addNoteToList = function(note) {
  var a = document.createElement('a');
  var ul = document.getElementById("notes");
  var li = document.createElement("li");
  var text = document.createTextNode(note.truncator(note.getNoteText()));
  a.id = notes.length -1;
  a.title = text;
  a.href = "#" + a.id;
  a.appendChild(text);
  li.appendChild(a);
  ul.appendChild(li);
};


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
  .innerHTML = mynotes.getFullNoteText(index);
}
