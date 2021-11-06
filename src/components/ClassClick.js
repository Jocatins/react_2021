import React, { Component } from "react";

class ClassClick extends Component {
  render() {
    function clickClass() {
      console.log("class button");
    }
    return (
      <div>
        <button onClick={clickClass}>Click class</button>
      </div>
    );
  }
}

export default ClassClick;
