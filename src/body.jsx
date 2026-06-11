import React from "react";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.body}</p>
      </div>
    );
  }
}

export default Body;