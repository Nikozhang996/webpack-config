// import Vue from "vue";
// import App from "./App.vue";

/* const vm = new Vue({
  el: "#root",
  render: (h: any) => h(App),
}); */
import add from "./utils";

console.log(add(2, 10));

if (module.hot) {
  // 如果支持热更新
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
