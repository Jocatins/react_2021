import React, { Component } from "react";

class TitanClass extends Component {
  render() {
    const { name, titanName } = this.props;
    return (
      <div>
        <h1>Class Component {name}</h1>
        <h2>Class Component call {titanName}</h2>
      </div>
    );
  }
}

export default TitanClass;
