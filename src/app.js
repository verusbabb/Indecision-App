console.log("app.js is running");

// JSX - JavaScript XML

const app = {
  title: "My Indecision Apps",
  subTitle: "Since you can't decide, let a machine decide!",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const removeAllOptions = () => {
  app.options = [];
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <h3>{app.subTitle}</h3>}
      {app.options && app.options.length > 0 ? (
        <h4>
          Here are your options:
          <ol>
            {app.options.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </h4>
      ) : (
        "No options"
      )}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
        {app.options.length > 0 && (
          <button onClick={removeAllOptions}>Remove All Options</button>
        )}
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
render();
