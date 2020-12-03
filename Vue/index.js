/*
 * @Description:
 * @Author: zhangzhenyang
 * @Date: 2020-09-14 20:24:41
 * @LastEditTime: 2020-10-15 14:38:39
 * @LastEditors: zhangzhenyang
 */
import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import router from "./route/index.js";
import store from "./store/store.js";

console.log("app", App);

// Vue.use(VueRouter); // 告诉Vue使用了VueRouter
// Vue.use(ElementUI);
debugger;
new Vue({
  el: "#app",
  render: h => {
    debugger;
    return h(App);
  },
  // router,
  // store, // 注入到全局组件中, 保证所有子组件都可以使用store
});
