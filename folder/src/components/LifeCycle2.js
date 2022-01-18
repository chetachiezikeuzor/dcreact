import React, { Component } from "react";
export default class LifeCyce2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Krishna",
    };
    console.log("Lifecyc2 constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Lifecyc2 getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('Lifecyc2 componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('Lifecycle2 shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Lifecyc2 getSnapshotBeforeUpdate')
    return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Lifecyc2 componentDidUpdate')
    }

  render() {
    console.log('Lifecyc2 render')
    return (
      <div>
        Lifecyc2  
      </div>
    )
  }
}

export default LifeCyc2


