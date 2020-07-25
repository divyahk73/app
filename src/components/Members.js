import React, { Component } from "react";
import Member from "./Member";

export default class Members extends Component {
  render() {
    const members = this.props.members;
    return (
      <div className="mx-auto py-5" style={{ width: "300px" }}>
        <h3>List of Users</h3>
        <ul className="list-group">
          {members.map(member => (
            <li className="list-group-item" key={member.id}>
              <Member key={member.id} members={member} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
