console.log("app.js is running");

const content = {
  title: "Visibility Toggle",
  details: "Hi, I am the details",
};

let changeBtn = "Show Details";

const showDetails = (e) => {
  e.preventDefault();
  changeBtn = e.target.innerText;
  if (changeBtn === "Show Details") {
    changeBtn = "Hide Details";
  } else {
    changeBtn = "Show Details";
  }
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{content.title}</h1>
      <button name="option" onClick={showDetails}>
        {changeBtn}
      </button>
      {changeBtn === "Hide Details" && <p>{content.details}</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");

render();
