import "./style/scss.scss";

import img from "./images/2017-06-14.png";

const obj = new Image();
obj.src = img;
obj.width = 600;
document.body.appendChild(obj);

/* import Vue from "vue";
import App from "./App.vue";

export default new Vue({
  el: "#root",
  render: (h: any) => h(App),
}); */
/* import React from "react";
import ReactDOM from "react-dom";

import App from "./ReactApp/index";
ReactDOM.render(Reac.createElement(App), root);
 */

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