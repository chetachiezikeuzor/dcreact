import React, { Component } from "react";
import LifeCyc2 from "./LifeCyc2";

class LifeCyc1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Saran",
    };
    console.log("Lifecyc1 constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecyc1 getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecyc1 componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("Lifecyc1 shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecyc1 getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Lifecyc1 componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "Sam",
    });
  };
  render() {
    console.log("Lifecyc1 render");
    return (
      <div>
        <button onClick={this.changeState}>Change state</button>
        Lifecyc1
        <LifeCyc2 />
      </div>
    );
  }
}

export default LifeCyc1;
