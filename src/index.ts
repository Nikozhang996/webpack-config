import "./style/scss.scss";

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>adf</h1>, root);

if (module.hot) {
  module.hot.accept(); // 当入口文件变化后重新执行当前入口文件
}
