import "./style/scss.scss";
import { add, min } from "./utils/tree-shakring.ts";
import { a, b, c, d } from "./utils/scope-hoisting";

console.log(add(2, 1));

console.log(min(3, 1));

console.log(a + b + c + d);

console.log("hello");

if (module.hot) {
  module.hot.accept(); // 当入口文件变化后重新执行当前入口文件
}
