import React, { Component, Fragment } from "react";

class Child2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
    };
  }

  componentDidMount() {
    this.setState(
      preState => {
        console.log(preState);
        return { i: preState + 1 };
      },
      () => {
        console.log(this.state.i);
      }
    );
    console.log(this.state.i);
  }

  render() {
    return <Fragment></Fragment>;
  }
}

export default Child2;
