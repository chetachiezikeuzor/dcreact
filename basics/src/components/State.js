import React, { Component } from "react";

export default class State extends Component {
  constructor() {
    super();
    this.state = { color: "black" };
  }
  render() {
    const colortest = this.state.color ? (
      <div>
        <h2>Test my color</h2>
      </div>
    ) : null;
    console.log(colortest);

    return (
      <div>
        <h2 style={{ color: this.state.color }}>Green Color</h2>
        {colortest}

        <button
          onClick={(e) => {
            this.setState({ color: "green" });
          }}
        >
          change
        </button>
      </div>
    );
  }
}
