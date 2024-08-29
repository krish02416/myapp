import React, { Component } from "react";

export class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello everyone",
    };
    this.changeContent = this.changeContent.bind(this);
  }

  changeContent() {
    this.setState({
      message: "Good Morning",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeContent.bind(this)}>
          Click here to bind()
        </button>
        <button onClick={() => this.changeContent()}>
          Click here to arrow func
        </button>
        <button onClick={this.changeContent}>
          Click here to bind() in constructor
        </button>
      </div>
    );
  }
}

export default Welcome;
