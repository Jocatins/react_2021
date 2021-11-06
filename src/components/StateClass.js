import React, { Component } from "react";

class StateClass extends Component {
  constructor() {
    super();
    this.state = {
      message: "You are a gypsy",
    };
  }
  changeMessage() {
    this.setState({
      message: "You are now a titan",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Convert</button>
      </div>
    );
  }
}

export default StateClass;
