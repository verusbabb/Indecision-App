console.log("app.js is running");

// JSX - JavaScript XML

const app = {
  title: "My Indecision Apps",
  subTitle: "I'll decide for you!",
  options: ["One", "Two"],
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    {app.options && app.options.length > 0 ? (
      <p>
        Here are your options:
        <ol>
          <li>{app.options[0]}</li>
          <li>{app.options[1]}</li>
        </ol>
      </p>
    ) : (
      "No options"
    )}
  </div>
);

const user = {
  name: "Steve Babb",
  age: 18,
  location: "Lawrence",
};

function getLocation(location) {
  if (location) {
    return <p>location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonomous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
