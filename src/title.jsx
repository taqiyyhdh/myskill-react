import React from "react";

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Hello World",
      subTitle: "Welcome to React",
    };
  }
  changeTitle = () => {
    this.setState({
      title: "Hello Taqi",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h3>{this.state.subTitle}</h3>
        <button onClick={this.changeTitle}>Change Title</button>
      </div>
    );
  }
}

export default Title;