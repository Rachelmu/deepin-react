/*
 * @Author: your name
 * @Date: 2020-12-03 10:47:45
 * @LastEditTime: 2020-12-03 10:59:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /deepin-react/src/component/Father.js
 */
import React, { PureComponent } from "react";

import Child from "./Child";

class Father extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
    };
  }
  handleClick = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };
  render() {
    return (
      <div>
        {this.state.num}
        <button onClick={this.handleClick}>click me</button>
        <Child />
      </div>
    );
  }
}

export default Father;
