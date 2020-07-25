import React, { Component } from "react";
//import test from "./test.json";
import Members from "./components/Members";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }
  componentDidMount() {
    axios
      .get("https://my-json-server.typicode.com/divyahk73/server/members")
      .then(response => {
        console.log(response);
        this.setState({ members: response.data });
        console.log(this.state.members);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Members members={this.state.members} />
      </div>
    );
  }
}
