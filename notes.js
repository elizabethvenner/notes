function Notes() {
  this.items = [];
}

function truncator(note) {
  if (note.length < 20) {
    return note;
  } else {
    return note.slice(0, 20) + "...";
  }
}
