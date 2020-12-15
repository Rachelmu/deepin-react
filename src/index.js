/*
 * @Description:
 * @Author: zhangzhenyang
 * @Date: 2020-09-14 20:24:41
 * @LastEditTime: 2020-12-14 19:12:09
 * @LastEditors: Please set LastEditors
 */
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import store from "./redux";

import Father from "./component/Father";

const App = () => {
  return (
    <Fragment>
      {store.getState().cash}
      <button
        onClick={() => {
          store.dispatch({
            type: "INCREMENT",
            value: 10,
          });
        }}
      >
        add
      </button>
    </Fragment>
  );
};

const render = () => ReactDOM.render(<App />, document.getElementById("app"));

store.subscribe(render);

render();
