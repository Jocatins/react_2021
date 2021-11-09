import React, { PureComponent } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jocatins",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Jocatins",
      });
    }, 2000);
  }

  render() {
    console.log("Parent Component");
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
