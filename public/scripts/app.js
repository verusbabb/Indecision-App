"use strict";

console.log("app.js is running");

// JSX - JavaScript XML

var app = {
  title: "My Indecision Apps",
  subTitle: "I'll decide for you!",
  options: ["Item One", "Item Two"]
};

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
  ) : "No options"
);

var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

console.log(count);

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "Reset"
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
