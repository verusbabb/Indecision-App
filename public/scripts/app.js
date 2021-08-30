"use strict";

var content = {
  title: "Visibility Toggle",
  details: "Hi, I am the details"
};

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;

  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      content.title
    ),
    React.createElement(
      "button",
      { onClick: toggleVisibility },
      visibility ? "Hide Details" : "Show Details"
    ),
    visibility && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        content.details
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

render();
