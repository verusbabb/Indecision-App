const content = {
  title: "Visibility Toggle",
  details: "Hi, I am the details",
};

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;

  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{content.title}</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide Details" : "Show Details"}
      </button>
      {visibility && (
        <div>
          <p>{content.details}</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");

render();
