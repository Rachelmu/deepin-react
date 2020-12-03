/*
 * @Description:
 * @Author: zhangzhenyang
 * @Date: 2020-09-14 20:24:41
 * @LastEditTime: 2020-12-03 10:59:00
 * @LastEditors: Please set LastEditors
 */
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Father from "./component/Father";

const App = () => {
  return (
    <Fragment>
      Hello World
      <Father />
      <Father />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
