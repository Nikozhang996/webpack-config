import "./style/scss.scss";
import { add, min } from "./utils/index.ts";

console.log(add(2, 1));
console.log(min(3, 1));

console.log("hello");

if (module.hot) {
  module.hot.accept(); // 当入口文件变化后重新执行当前入口文件
}
