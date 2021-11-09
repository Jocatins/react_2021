import React, { Component } from "react";
import LifeCycle1 from "./LifeCycle1";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jocatins",
    };
    console.log("LifeCycle A constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle componentDidMount ");
  }
  shouldComponentUpdate() {
    console.log("LifeCycle A shouldComponentUpdate ");
  }
  getSnapshotBeforeUpdate(prevProps, nextProps) {
    console.log("Lifecycle A getSnapshotBeforeUpdate");
  }
  componentDidUpdate() {
    console.log("Lifecycle A componentDidUpdate");
  }

  render() {
    console.log("lifecycle A render");
    return (
      <div>
        <h4>Lifecycle A</h4>
        <LifeCycle1 />
      </div>
    );
  }
}

export default LifeCycle;
