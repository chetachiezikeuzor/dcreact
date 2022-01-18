import React, { Component } from "react";

export default class CompUnmount extends Component {
  componentWillUnmount() {
    console.log("Component is going to be unmounted");
  }
  render() {
    return (
      <div>
        <h1>Component to be unmounted</h1>
      </div>
    );
  }
}
