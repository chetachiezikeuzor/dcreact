import React, { Component } from "react";
import CompUnmount from "./CompUnmount";

export default class InvokeCompUnMount extends Component {
  state = { display: true };

  deleteUnMount = () => {
    this.setState({ display: false });
  };

  render() {
    let x;
    if (this.state.display) {
      x = <CompUnmount />;
    } else {
      console.log("component deleted");
    }
    return (
      <div>
        {x}
        <button onClick={this.deleteUnMount}>Delete the component</button>
      </div>
    );
  }
}
