import React, { Component } from "react";
import axios from "axios";

class PostRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      email: "",
    };
  }
  //the same handler for each input because of ===> name="username"
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //post request in the submitHandler
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/users", this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { name, username, email } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.changeHandler}
          />

          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.changeHandler}
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.changeHandler}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostRequest;
