// var assert = require("./test_helpers/assert");

var checkNoteHasBeenAdded = function(){

  var notes = new Notes();
  try {
    assert.isTrue(notes.items.length === 1);
    return "Passed - checkNoteHasBeenAdded "
  }
  catch(error){
    return error;
  }
};

// ---Update this array to run tests!! ---
var tests = [ checkNoteHasBeenAdded() ];

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
