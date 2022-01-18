import React, { Component } from "react";

export default class StateChange extends Component {
  constructor() {
    super();
    this.state = {
      value: "Welcome to ReactJS",
    };
    this.updateSetState = this.updateSetState.bind(this);
  }
  updateSetState() {
    this.setState({ value: "Hello to React" });
  }
  render() {
    return (
      <div>
        <h3>{this.state.value}</h3>
        <button onClick={this.updateSetState}>Setting the state</button>
      </div>
    );
  }
}
