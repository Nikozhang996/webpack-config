import "./style/scss.scss";
import { add, min } from "./utils/index.ts";

console.log(add(2, 1));
console.log(min(3, 1));

console.log("hello");

/* import Vue from "vue";
import App from "./App.vue";

export default new Vue({
  el: "#root",
  render: (h: any) => h(App),
}); 

import React from "react";
import ReactDOM from "react-dom";

import App from "./ReactApp/index";
ReactDOM.render(Reac.createElement(App), root);

*/

if (module.hot) {
  module.hot.accept(); // 当入口文件变化后重新执行当前入口文件
}
1;
