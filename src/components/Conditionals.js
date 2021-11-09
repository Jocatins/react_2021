import React, { Component } from "react";

class Conditionals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //   if else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Guest</div>;
    // } else {
    //   return <div>Welcome Titan</div>;
    // }

    //  Elements variables
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Guest</div>;
    // } else {
    //   message = <div>Welcome titan</div>;
    // }
    // return <h2>{message}</h2>;

    //ternary operator
    // return this.state.isLoggedIn ? (
    //   <h3>Welcome titans</h3>
    // ) : (
    //   <h2>Welcome gypsies</h2>
    // );

    //short circuits approach
    return this.state.isLoggedIn && <h3>Welcome minions</h3>;
  }
}

export default Conditionals;
