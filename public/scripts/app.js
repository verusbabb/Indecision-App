"use strict";

console.log("app.js is running");

// JSX - JavaScript XML

var app = {
  title: "My Indecision Apps",
  subTitle: "I'll decide for you!",
  options: ["One", "Two"]
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
    "p",
    null,
    app.subTitle
  ),
  app.options && app.options.length > 0 ? React.createElement(
    "p",
    null,
    "Here are your options:",
    React.createElement(
      "ol",
      null,
      React.createElement(
        "li",
        null,
        app.options[0]
      ),
      React.createElement(
        "li",
        null,
        app.options[1]
      )
    )
  ) : "No options"
);

var user = {
  name: "Steve Babb",
  age: 18,
  location: "Lawrence"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "location: ",
      location
    );
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonomous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
