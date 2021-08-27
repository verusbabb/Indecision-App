"use strict";

console.log("app.js is running");

// JSX - JavaScript XML

var app = {
  title: "My Indecision Apps",
  subTitle: "Since you can't decide, let a machine decide!",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

var removeAllOptions = function removeAllOptions() {
  app.options = [];
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subTitle && React.createElement(
      "h3",
      null,
      app.subTitle
    ),
    app.options && app.options.length > 0 ? React.createElement(
      "h4",
      null,
      "Here are your options:",
      React.createElement(
        "ol",
        null,
        app.options.map(function (item, index) {
          return React.createElement(
            "li",
            { key: index },
            item
          );
        })
      )
    ) : "No options",
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      ),
      app.options.length > 0 && React.createElement(
        "button",
        { onClick: removeAllOptions },
        "Remove All Options"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");
render();
