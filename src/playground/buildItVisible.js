class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        {!this.state.visibility && (
          <button onClick={this.handleToggleVisibility}>Show Details</button>
        )}
        {this.state.visibility && (
          <button onClick={this.handleToggleVisibility}>Hide Details</button>
        )}
        {this.state.visibility && <p>Hi, I am the details</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// const content = {
//   title: "Visibility Toggle",
//   details: "Hi, I am the details",
// };

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;

//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>{content.title}</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide Details" : "Show Details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>{content.details}</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById("app");

// render();
