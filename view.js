window.onload = function() {
  heading("NOTES");
  div('errors');
  textArea();
  createButton();
  notes();
  heading("My note");
  div('full');
  scriptBody('ui.js');
  scriptBody('test/notesFeatureSpec.js');

  var myElements = [
    {element: "SCRIPT", attributes: [["src", "notes.js"]], location: "head" },
  ];

  // <script id="note.js" placeholder="test"></script>

  for (var i=0; i < myElements.length; i++) {
    var element = document.createElement(myElements[i].element);
    for (var x=0; x < myElements[i].attributes.length; x++) {
      var currentArray = myElements[i].attributes[x];
      element.setAttribute(currentArray[0], currentArray[1]);
    }
    if (myElements[i].location == "head") {
      document.head.appendChild(element);
    } else {
      document.body.appendChild(element);
    }
  }

};

function heading(text) {
  var h1 = document.createElement("H1");
  var t = document.createTextNode(text);
  h1.appendChild(t);
  document.body.appendChild(h1);
}

function div(idValue) {
  var div = document.createElement('DIV');
  div.setAttribute("id", idValue);
  document.body.appendChild(div);
}

function textArea() {
  var textArea = document.createElement('TEXTAREA');
  textArea.setAttribute("id", "note-content");
  textArea.setAttribute("placeholder", "enter text...");
  textArea.setAttribute("cols", "40");
  textArea.setAttribute("rows", "10");
  document.body.appendChild(textArea);
}

function createButton() {
  var button = document.createElement('INPUT');
  button.setAttribute("id", "add-note");
  button.setAttribute("type", "submit");
  button.setAttribute("value", "create");
  document.body.appendChild(button);
}

function notes() {
  var ul = document.createElement('UL');
  ul.setAttribute("id", "notes");
  document.body.appendChild(ul);
}

function scriptBody(srcValue) {
  var script = document.createElement('SCRIPT');
  script.setAttribute("src", srcValue);
  document.body.appendChild(script);
}
