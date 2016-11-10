window.onload = function() {
  heading();
  errors();
  textArea();
  notes();
};

function heading() {
  var h1 = document.createElement("H1");
  var t = document.createTextNode("My note");
  h1.appendChild(t);
  document.body.appendChild(h1);
}

function errors() {
  var div = document.createElement('DIV');
  div.setAttribute("id", "errors");
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

function notes() {
  var ul = document.createElement('UL');
  ul.setAttribute("id", "notes");
  document.body.appendChild(ul);
}
