import React, { Component } from "react";
import axios from "axios";

class GetRequest extends Component {
  constructor(props) {
    super(props);
    //A state property to store the lists of posts
    this.state = {
      posts: [],
      errorMsg: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({ posts: response.data });
        console.log(response);
      })
      .catch((error) => {
        this.setState({ errorMsg: "Oops something went wrong" });
        console.log(error);
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h5>List of Posts</h5>
        {posts.length
          ? posts.map((post) => (
              <h3 key={post.id}>
                {post.name} ----- {post.username}
                -------{post.email}
              </h3>
            ))
          : errorMsg}
      </div>
    );
  }
}

export default GetRequest;
