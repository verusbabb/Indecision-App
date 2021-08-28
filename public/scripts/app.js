"use strict";

console.log("app.js is running");

var content = {
  title: "Visibility Toggle",
  details: "Hi, I am the details"
};

var changeBtn = "Show Details";

var showDetails = function showDetails(e) {
  e.preventDefault();
  changeBtn = e.target.innerText;
  if (changeBtn === "Show Details") {
    changeBtn = "Hide Details";
  } else {
    changeBtn = "Show Details";
  }
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
      { name: "option", onClick: showDetails },
      changeBtn
    ),
    changeBtn === "Hide Details" && React.createElement(
      "p",
      null,
      content.details
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

render();
