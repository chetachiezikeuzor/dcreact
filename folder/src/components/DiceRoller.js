import React, { Component } from "react";

const dice = {
  height: "auto",
  width: "min-content",
  borderRadius: "10%",
  fontWeight: "600",
  backgroundColor: "#fafafa",
  alignItems: "center",
  padding: "1.5rem 1.85rem",
  display: "inline-block",
  margin: "0 0.3em 0.3em 0",
  boxSizing: "border-box",
  color: "#0f0e0c",
  boxShadow:
    "0px 1px 8px rgb(10 15 73 / 1%), inset 0 -1px 1px rgb(10 15 73 / 5%)",
  textAlign: "center",
  position: "relative",
};

const button = {
  cursor: "pointer",
  fontWeight: "600",
  padding: "4px 14px",
  display: "inline-block",
  margin: "0 0.3em 0.3em 0",
  borderRadius: "0.2em",
  boxSizing: "border-box",
  color: "#0f0e0c",
  boxShadow:
    "0px 1px 8px rgb(10 15 73 / 1%), inset 0 -1px 1px rgb(10 15 73 / 5%)",
  textAlign: "center",
  position: "relative",
};

export default class DiceRoller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 1,
    };
  }
  number() {
    return this.state.result;
  }
  randomNum() {
    this.setState({ result: Math.floor(Math.random() * 12) + 1 });
  }
  render() {
    return (
      <>
        <div style={dice}>{this.number()}</div>
        <br />
        <button style={button} onClick={() => this.randomNum()}>
          Roll!
        </button>
      </>
    );
  }
}
