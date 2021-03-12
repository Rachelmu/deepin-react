/*
 * @Author: your name
 * @Date: 2020-12-03 10:51:51
 * @LastEditTime: 2020-12-03 10:58:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /deepin-react/src/component/Child.js
 */
import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate() {
    console.log("i am updated");
    return false;
  }

  componentDidMount() {
    console.log("");
  }
  componentDidUpdate() {
    console.log("updated");
  }

  render() {
    return <div>i am children</div>;
  }
}

export default Child;
