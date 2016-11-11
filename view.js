window.onload = function() {
  var myElements = [
    {element: "H1", attributes:[], location: "body", innerElement: document.createTextNode("NOTES")},
    {element: "SCRIPT", attributes: [["src", "notes.js"]], location: "head" },
    {element: "DIV", attributes: [["id","errors"]], location: "body" },
    {element: "TEXTAREA", attributes: [["id", "note-content"],["placeholder", "enter text..."],["cols", "40"],["rows", "10"]], location: "body" },
    {element: "INPUT", attributes: [["id", "add-note"],["type", "submit"],["value", "create"]], location: "body" },
    {element: "UL", attributes: [["id", "notes"]], location: "body" },
    {element: "H1", attributes:[], location: "body", innerElement: document.createTextNode("My Note")},
    {element: "DIV", attributes: [["id","full"]], location: "body" },
    {element: "SCRIPT", attributes: [["src", 'ui.js']], location: "body" },
    {element: "SCRIPT", attributes: [["src", 'test/notesFeatureSpec.js']], location: "body" }
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
};
