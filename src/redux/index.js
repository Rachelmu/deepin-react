/*
 * @Author: your name
 * @Date: 2020-12-14 18:46:30
 * @LastEditTime: 2020-12-14 19:04:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /deepin-react/src/redux/index.js
 */
import { createStore } from "redux";

const reducer = (
  defaultStore = {
    cash: 200,
  },
  action
) => {
  const type = action.type;

  switch (type) {
    case "INCREMENT":
      defaultStore.cash = defaultStore.cash + action.value;
      return defaultStore;
    case "decrement":
      defaultStore.cash = defaultStore.cash - action.value;
      return defaultStore;
    default:
      return defaultStore;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
