function view () {
  document.createElement('body');
  var title = document.createElement('title');
  var titletext = document.createTextNode('Spec Runner');
  document.head.appendChild(title);
  var header = document.createElement('h3');
  var headertext = document.createTextNode('Test results');
  header.appendChild(headertext);
  document.body.appendChild(header);
}


function loadscripts () {
  var scripts = ["test/test_helpers/assert.js", "notes.js", "note.js", "test/noteSpec.js",
  "test/notesSpec.js"];
  scripts.forEach(function(script_path){
    var script = document.createElement('script');
    script.setAttribute("src", script_path);
    document.head.appendChild(script);
  });
}
window.onload = function () {
  view();
  loadscripts();
  setTimeout(runTests, 100);
};

function runTests() {
  tests = noteTests.concat(notesTests);
  tests.forEach(function(test){
    var div = document.createElement("div");
    var li = document.createElement("li");
    var text = document.createTextNode(test);
    li.appendChild(text);
    div.appendChild(li);
    document.body.appendChild(div);
  });
  var total = "Total number of tests: " + tests.length;
  var length = document.createTextNode(total);
  var div = document.createElement("div").appendChild(length);
  document.body.appendChild(div);
}
