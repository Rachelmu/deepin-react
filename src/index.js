/*
 * @Description:
 * @Author: zhangzhenyang
 * @Date: 2020-09-14 20:24:41
 * @LastEditTime: 2021-01-12 21:02:10
 * @LastEditors: Please set LastEditors
 */
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
// import store from "./redux";

import App from "./App";

// ReactDOM.createRoot(<App />, document.getElementById("app"));
import { createStore, combineReducers } from "redux";
const defaultState = {
    count: 0,
  },
  INCREASE = "INCREASE",
  DECREASE = "DECREASE";

const increaseCount = (state = defaultState, action) => {
  const { type, count = 1 } = action;
  if (type === INCREASE) {
    return {
      count: state.count + count,
    };
  }
  return state;
};
const decreaseCount = (state = defaultState, action) => {
  const { type, count = 1 } = action;
  if (type === DECREASE) {
    return {
      count: state.count - count,
    };
  }
  return state;
};

const reducers = combineReducers({ increaseCount, decreaseCount }); // 合并 reducers

const store = createStore(reducers);

store.dispatch({ type: INCREASE, count: 1 });
store.dispatch({ type: DECREASE, count: 2 });
console.log(store.getState());
const Root = () => (
  <div onClick={() => store.dispatch({ type: INCREASE })}>
    {store.getState().increaseCount.count}
    <App />
  </div>
);

const render = () => ReactDOM.createRoot(document.getElementById("app")).render(<Root />);
store.subscribe(render);
render();
