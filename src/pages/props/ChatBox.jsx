import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <p> <b>{this.props.sender}: </b>{this.props.message}</p>
        <hr />
      </div>
    )
  }
}

class ChatBox extends React.Component {
  render() {
    return (
      <div>
        <Message sender="Alice" message="Hi Bob!" />
        <Message sender="Bob" message="Hello Alice!" />
        <Message sender="Alice" message="How are you?" />
        <Message sender="Bob" message="I'm fine thank you! And you?" />
        <Message sender="Alice" message="I'm fine too!" />
      </div>
    )
  }
}

export default ChatBox;