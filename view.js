window.onload = function() {
  heading();
  errors();
};

function heading () {
  var h1 = document.createElement("H1");
  var t = document.createTextNode("My note");
  h1.appendChild(t);
  document.body.appendChild(h1);
};

function errors () {
  var div = document.createElement('DIV');
  div.setAttribute("id", "errors");
  document.body.appendChild(div);
};
