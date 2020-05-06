import "./style/scss.scss";

setTimeout(() => {
  import(
    /* webpackMode: "lazy" */
    /* webpackChunkName: "my-chunk-name" */
    "./utils/calc"
  ).then(({ add }) => {
    console.log(add(1, 1));
  });
}, 1000);

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(<h1>adf</h1>, root);

if (module.hot) {
  module.hot.accept(); // 当入口文件变化后重新执行当前入口文件
}
