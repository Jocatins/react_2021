import React, { Component } from "react";
import GypsyChild from "./GypsyChild";

class GypsyParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Gypsy Parent Component",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(gypsyChild) {
    alert(`call from ${this.state.parentName} to the ${gypsyChild}`);
  }

  render() {
    return (
      <div>
        <GypsyChild greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default GypsyParent;
