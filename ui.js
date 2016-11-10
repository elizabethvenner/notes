mynotes = new Notes();
mynotes.items = [];
notes = mynotes.items;

createNote();
makeURLRenderFullNote();

var addNoteToList = function(note) {
  var a = document.createElement('a');
  var ul = document.getElementById("notes");
  var li = document.createElement("li");
  var text = document.createTextNode(truncator(note));
  a.id = notes.length -1;
  a.title = text;
  a.href = "#" + a.id;
  a.appendChild(text);
  li.appendChild(a);
  ul.appendChild(li);
};

function createNote() {
  document.getElementById("add-note").addEventListener("click", function() {
    mynotes.items.push(document.getElementById("note-content").value);
    if(document.getElementById("note-content").value !== "") {
      addNoteToList(notes[notes.length - 1]);
      document.getElementById("note-content").value = "";
      document.getElementById("errors").innerHTML = "";

    } else {
      document.getElementById("errors").innerHTML = "Please enter some text";
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
  .innerHTML = mynotes.items[index];
}