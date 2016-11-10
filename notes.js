function Notes() {
  this.items = [];
}

Notes.prototype.addNote = function (note) {
  this.items.push(note);
};

Notes.prototype.getFullNoteText = function (index) {
 return this.items[index].text;
};
