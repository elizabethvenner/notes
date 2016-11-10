function Notes() {
  this.items = [];
}

Notes.prototype.addNote = function (note) {
  this.items.push(note);
};

Notes.prototype.getFullNoteText = function (index) {
 return this.items[index].text;
};

Notes.prototype.getNoteIndex = function () {
  return (this.items.length - 1);
};

myNotes = new Notes();
