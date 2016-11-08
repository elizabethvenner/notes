'use strict';

function testLink () {
  document.getElementById("abbr").click();
  if (document.getElementById("full") !== "banana") {
    throw new Error("That's not a banana!");
  }
}
