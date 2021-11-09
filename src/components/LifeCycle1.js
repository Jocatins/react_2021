import React, { Component } from "react";

class LifeCycle1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jocatins",
    };
    console.log("LifeCycle B constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle B getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB componentDidMount ");
  }
  shouldComponentUpdate() {
    console.log("LifeCycle A shouldComponentUpdate ");
  }
  getSnapshotBeforeUpdate(prevProps, nextProps) {
    console.log("Lifecycle A getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("Lifecycle A componentDidUpdate");
  }
  render() {
    console.log("lifecycle B render");
    return <div>lLifecycle A</div>;
  }
}

export default LifeCycle1;
