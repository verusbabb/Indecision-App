const app = {
  title: "Can't Decide?",
  subTitle: "Put your life in the hands of a computer.",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";

    console.log(app.options);
  }
  render();
};

const removeAllOptions = () => {
  app.options = [];
  render();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
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
      </form>
      <div>
        <button disabled={app.options.length === 0} onClick={removeAllOptions}>
          Remove All Options
        </button>
      </div>
      <div>
        <button disabled={app.options.length === 0} onClick={makeDecision}>
          What should I do?
        </button>
      </div>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
render();
