(function(){

  function testCreateNote () {
    document.getElementById("note-content").value = "GET UP VERY VERY VERY VERY VERY EARLY!";
    document.getElementById("add-note").click();
    if (myNotes.items.length !== 1) {
      throw new Error("Note array length has not increased");
    }
    if (myNotes.getFullNoteText(0) != "GET UP VERY VERY VERY VERY VERY EARLY!") {
      throw new Error("Text was not found in array");
    }
  }
  function testLink () {
    document.getElementById(0).click();
    function test() {
      if (document.getElementById("full").innerHTML !== 'GET UP VERY VERY VERY VERY VERY EARLY!') {
        throw new Error("This is not the full note");
      }
    }
    setTimeout(test, 10);
  }

  function testTruncator (notes) {
    if (document.getElementById(0).text.length < 23) {
      throw new Error("Note not abbreviated");
    }
  }

  testCreateNote();
  testLink();
  testTruncator(notes);
})();
