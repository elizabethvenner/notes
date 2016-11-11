window.onload = function() {
  var myElements = [
    {element: "H1", attributes:[], location: "body", innerElement: document.createTextNode("NOTES")},
    {element: "SCRIPT", attributes: [["src", "notes.js"]], location: "head" },
    {element: "SCRIPT", attributes: [["src", "note.js"]], location: "head" },
    {element: "DIV", attributes: [["id","errors"]], location: "body" },
    {element: "TEXTAREA", attributes: [["id", "note-content"],["placeholder", "enter text..."],["cols", "40"],["rows", "10"]], location: "body" },
    {element: "INPUT", attributes: [["id", "add-note"],["type", "submit"],["value", "create"]], location: "body" },
    {element: "UL", attributes: [["id", "notes"]], location: "body" },
    {element: "H1", attributes:[], location: "body", innerElement: document.createTextNode("My Note")},
    {element: "DIV", attributes: [["id","full"]], location: "body" },
    {element: "SCRIPT", attributes: [["src", 'controller.js']], location: "body" },
  ];

  for (var i=0; i < myElements.length; i++) {
    var element = document.createElement(myElements[i].element);
    for (var x=0; x < myElements[i].attributes.length; x++) {
      var currentArray = myElements[i].attributes[x];
      element.setAttribute(currentArray[0], currentArray[1]);
    }
    if ("innerElement" in myElements[i]) {
      element.appendChild(myElements[i].innerElement);
    }
    document[myElements[i].location].appendChild(element);
  }

  if (findTestFile(window.location) === "testIndex.html") {
     scriptBody('test/notesFeatureSpec.js');
  }
};

function findTestFile (location){
  var filePath = location.pathname.split('/');
  var fileName = filePath[filePath.length -1];
  return fileName;
}

function scriptBody(srcValue) {
  var script = document.createElement('SCRIPT');
  script.setAttribute("src", srcValue);
  document.body.appendChild(script);
}

function addNoteToList(note) {
  var a = document.createElement('a');
  var ul = document.getElementById("notes");
  var li = document.createElement("li");
  var text = document.createTextNode(note.truncator(note.getNoteText()));
  a.id = myNotes.getNoteIndex();
  a.title = text;
  a.href = "#" + a.id;
  a.appendChild(text);
  li.appendChild(a);
  ul.appendChild(li);
}

function textAreaClear () {
  document.getElementById("note-content").value = "";
  document.getElementById("errors").innerHTML = "";
}

function showEnterTextMessage (){
  document.getElementById("errors").innerHTML = "Please enter some text";
}
