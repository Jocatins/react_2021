import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Changing the message",
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }
  //   clickHandler() {
  //     this.setState({
  //       message: "To Good day",
  //     });
  //     console.log(this);
  //   }
  clickHandler = () => {
    this.setState({
      message: "Message changed",
    });
  };
  render() {
    return (
      <div>
        <h4>{this.state.message}</h4>
        {/* <button onClick={this.clickHandler.bind(this)}>Event Bind</button> */}
        {/* <button onClick={() => this.clickHandler()}>Event Bind</button> */}
        <button onClick={this.clickHandler}>Event Bind</button>
      </div>
    );
  }
}

export default EventBind;
