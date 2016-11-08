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
    // ACTUAL TEST
    notes.items.push("this is my note")
    assert.isEqual(notes.items.length, 1);
    return "Passed - note has been added";
  }
  catch(error){
    return error;
  }
};

// ---Update this array to run tests!! ---

var tests = [ checkDefaultIs0(), checkNoteHasBeenAdded() ];

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
