class IndecisonApp extends React.Component {
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer.";
    const options = ["Thing 1", "Thing 2", "Thing 4"];

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map((option, index) => (
          <Option key={index} optionText={option} />
        ))}
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return <div>AddOption component placeholder</div>;
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.optionText}</li>
      </div>
    );
  }
}

ReactDOM.render(<IndecisonApp />, document.getElementById("app"));
