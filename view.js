window.onload = function() {
  // heading("NOTES");
  // div('errors');
  // textArea();
  // createButton();
  // notes();
  // heading("My note");
  // div('full');
  // scriptBody('ui.js');
  // scriptBody('test/notesFeatureSpec.js');
  var myElements = [
    {element: "H1", attributes:[], location: "body", innerElement: dog},
    {element: "SCRIPT", attributes: [["src", "notes.js"]], location: "head" },
    {element: "DIV", attributes: [["id","errors"]], location: "body" },
    {element: "TEXTAREA", attributes: [["id", "note-content"],["placeholder", "enter text..."],["cols", "40"],["rows", "10"]], location: "body" },
    {element: "INPUT", attributes: [["id", "add-note"],["type", "submit"],["value", "create"]], location: "body" },
    {element: "UL", attributes: [["id", "notes"]], location: "body" },
    // {element: "H1", attributes: [[]], location: "body" }
    {element: "SCRIPT", attributes: [["src", 'ui.js']], location: "body" },
    {element: "SCRIPT", attributes: [["src", 'test/notesFeatureSpec.js']], location: "body" }
  ];

  for (var i=0; i < myElements.length; i++) {
    var element = document.createElement(myElements[i].element);
    for (var x=0; x < myElements[i].attributes.length; x++) {
      var currentArray = myElements[i].attributes[x];
      element.setAttribute(currentArray[0], currentArray[1]);
    }
    var notes = "DOG"
    var dog = document.createTextNode(notes);

    console.log(myElements[i].innerElement)
    element.appendChild(dog);
    document[myElements[i].location].appendChild(element);
  }
};
//
// function heading("NOTES") {
//   var h1 = document.createElement("H1");
//   var t = document.createTextNode(text);
//   h1.appendChild(t);
//   document.body.appendChild(h1);
// }

// function div(idValue) {
//   var div = document.createElement('DIV');
//   div.setAttribute("id", idValue);
//   document.body.appendChild(div);
// }
//
// function textArea() {
//   var textArea = document.createElement('TEXTAREA');
//   textArea.setAttribute("id", "note-content");
//   textArea.setAttribute("placeholder", "enter text...");
//   textArea.setAttribute("cols", "40");
//   textArea.setAttribute("rows", "10");
//   document.body.appendChild(textArea);
// }

// function createButton() {
//   var button = document.createElement('INPUT');
//   button.setAttribute("id", "add-note");
//   button.setAttribute("type", "submit");
//   button.setAttribute("value", "create");
//   document.body.appendChild(button);
// }

// function notes() {
//   var ul = document.createElement('UL');
//   ul.setAttribute("id", "notes");
//   document.body.appendChild(ul);
// }

// function scriptBody(srcValue) {
//   var script = document.createElement('SCRIPT');
//   script.setAttribute("src", srcValue);
//   document.body.appendChild(script);
// }
