/*
 * @Author: your name
 * @Date: 2020-12-23 16:03:55
 * @LastEditTime: 2021-02-25 17:25:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /deepin-react/src/App.js
 */
import React, { Component, Fragment, lazy, Suspense, useState } from "react";

import Loading from "./component/Loading";
import Step from "../module/Step";

import { CheckedBox } from "antd";

const Father = lazy(() => import("./component/Father.js"));

const App = () => {
  const [state, setState] = useState(0);
  return (
    <Fragment>
      Hello
      {/* <Step /> */}
      <Suspense fallback={<span>loading</span>}>
        <Father />
      </Suspense>
    </Fragment>
  );
};

export default App;
