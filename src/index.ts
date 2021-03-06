
import ReactDOM from "react-dom";

import App from "./ReactApp/index";

ReactDOM.render(App, document.getElementById("root"));

if (module.hot) {
  module.hot.accept(); // 当入口文件变化后重新执行当前入口文件
}
