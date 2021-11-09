import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "java",
    };
  }
  formHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  commentsHandler = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  topicHandler = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  submitHandler = (e) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    e.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={this.formHandler} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={this.commentsHandler}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.topicHandler}>
            <option value="react">React</option>
            <option value="java">Java</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
