/* import Vue from "vue";
import App from "./App.vue";

export default new Vue({
  el: "#root",
  render: (h: any) => h(App),
}); */
import * as React from "react";
import * as ReactDOM from "react-dom";

// import App from "./ReactApp/index.tsx";
// ReactDOM.render(<App></App>, document.getElementById("root"));
const div = document.getElementById（'#root')
div.innerHTML = 'adf'

if (module.hot) {
  module.hot.accept(); // 当入口文件变化后重新执行当前入口文件
}

/*
import './style/scss.scss'

import image from './images/img.png'


const img = new Image();
img.src = image
const div = document.getElementById('key')

document.body.appendChild(img);


function timer(value) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(value ** 2)
        }, 500);
    })
}

async function func() {
    const reuslt = await timer(8)
    console.log(reuslt);
}

func() 
*/

// @func
