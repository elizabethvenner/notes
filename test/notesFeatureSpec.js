function testLink () {
  document.getElementById(0).click();
  function test() {
    if (document.getElementById("full").innerHTML !== 'hellohellohellohello!!!') {
      throw new Error("This is not the full note");
    }
  }
  setTimeout(test, 10);
}

function testTruncator (notes) {
  renderNoteList(notes);
  if (document.getElementById(0).text.length < 23) {
    throw new Error("Note not abbreviated");
  }
}

function testCreateNote () {
  document.getElementById("note-content").value = "GET UP EARLIER!";
  document.getElementById("add-note").click();
  if (mynotes.items.length !== 2) {
    throw new Error("Note array length has not increased");
  }
  if (mynotes.items[1] != "GET UP EARLIER!") {
    throw new Error("Text was not found in array");
  }
}
