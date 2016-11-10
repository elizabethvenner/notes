window.onload = function() {
  scriptHead('notes.js');
  heading("NOTES");
  div('errors');
  textArea();
  createButton();
  notes();
  heading("My note");
  div('full');
  scriptBody('ui.js');
  scriptBody('test/notesFeatureSpec.js');
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

function scriptHead(srcValue) {
  var script = document.createElement('SCRIPT');
  script.setAttribute("src", srcValue);
  document.head.appendChild(script);
}

function scriptBody(srcValue) {
  var script = document.createElement('SCRIPT');
  script.setAttribute("src", srcValue);
  document.body.appendChild(script);
}
