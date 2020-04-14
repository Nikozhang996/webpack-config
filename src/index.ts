import "./style/scss.scss";
/* import Vue from "vue";
import App from "./App.vue";

export default new Vue({
  el: "#root",
  render: (h: any) => h(App),
}); */
// import * as React from "react";
// import * as ReactDOM from "react-dom";
import React from "react";
import ReactDOM from "react-dom";

import App from "./ReactApp/index.tsx";
ReactDOM.render(React.createElement(App), root);
// const div = document.getElementById("root");
// div.className = "c1";
// div.innerHTML = "Hello";

/*

import image from './images/img.png'


const img = new Image();
img.src = image
const div = document.getElementById('key')

document.body.appendChild(img); 
*/

// @func

if (module.hot) {
  module.hot.accept(); // 当入口文件变化后重新执行当前入口文件
}
