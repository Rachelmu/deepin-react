/*
 * @Author: your name
 * @Date: 2020-12-23 16:03:55
 * @LastEditTime: 2021-02-25 17:25:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /deepin-react/src/App.js
 */
import React, { Component, createContext, Fragment, lazy, Suspense, useState, useEffect } from "react";

import Loading from "./component/Loading";
import Step from "../module/Step";

import { CheckedBox } from "antd";

const Father = lazy(() => import("./component/Father.js"));
const ThemeContext = createContext({ theme: 'red' })
const ThemeProvider = ThemeContext.Provider
const ThemeConsumer = ThemeContext.Consumer

const App = () => {
  const [state, setState] = useState(0);
  return (
    <Fragment>
      <ThemeProvider value="">

      </ThemeProvider>
    </Fragment>
  );
};

export default App;
