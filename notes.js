function Notes() {
  this.items = [];
}

Notes.prototype.addNote = function (note) {
  this.items.push(note);
};

Notes.prototype.getFullNoteText = function (index) {
 return this.items[index].text;
};

function Note (text) {
  this.text = text;
}

Note.prototype.getNoteText = function () {
  return this.text;
};

Note.prototype.truncator = function(note) {
  if (note.length < 20) {
    return note;
  } else {
    return note.slice(0, 20) + "...";
  }
};
