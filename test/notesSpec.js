// var assert = require("./test_helpers/assert");

var checkNoteHasBeenAdded = function(){

  var notes = new Notes();
  try {
    assert.isTrue(notes.items.length === 1);
    return "Passed - checkNoteHasBeenAdded";
  }
  catch(error){
    return error;
  }
};

var checkNoteHasOnly20Characters = function () {
  var notes = new Notes();
  notes.items = ['1234567891011121314151617'];
  try {
    assert.isTrue(truncator(notes.items[0]).length < 21);
    return "Passed - note has fewer than 20 characters";
  }
  catch(error){
    return error;
  }
};

// ---Update this array to run tests!! ---
var tests = [ checkNoteHasBeenAdded(), checkNoteHasOnly20Characters() ];

// ---


var runTests = function() {
  tests.forEach(function(test){
    div = document.getElementById("tests");
    var li = document.createElement("li");
    var text = document.createTextNode(test);
    li.appendChild(text);
    div.appendChild(li);
  });
  var total = "Total number of tests: " + tests.length;
  var length = document.createTextNode(total);
  document.getElementById("total").appendChild(length);
};
