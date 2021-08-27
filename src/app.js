console.log("app.js is running");

// JSX - JavaScript XML

const app = {
  title: "My Indecision Apps",
  subTitle: "I'll decide for you!",
  options: ["Item One", "Item Two"],
};

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
  </div>
);

let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  count--;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

console.log(count);

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
