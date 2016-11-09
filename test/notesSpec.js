// var assert = require("./test_helpers/assert");

var checkDefaultIs0 = function(){
  var notes = new Notes();
  try {
    // ACTUAL TEST
    assert.isTrue(notes.items.length === 0);
    return "Passed - array is 0 by default";
  }
  catch(error){
    return error;
  }
};

var checkNoteHasBeenAdded = function(){
  var notes = new Notes();
  try {
    assert.isTrue(truncator(notes.items[0]).length < 21);
    return "Passed - note has fewer than 20 characters";
  }
  catch(error){
    return error;
  }
};

// ---Update this array to run tests!! ---
var tests = [ checkDefaultIs0(), checkNoteHasBeenAdded(), checkNoteHasOnly20Characters() ];

// --- UPDATES THE HTML ---

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
