## webpack是什么

> webpack的官方定义是个模块打包机

## webpack能做什么

* 编译和压缩文件
* 使用不同的loader处理对应的文件

## 常见loader和plugin

* HtmlWebpackPlugin
* WebpackMerge
* HardSourcePlugin
* babel

## 学习笔记

* webpack默认以生产模式，src/index.js作为入口，编译至dist/main.js
* 默认mode为开发 `development` 模式和生产 `production` 模式。
* 通常webpack需要自定义配置，在项目根目录下建 `webpakc.config.js` ，webpack会自动识别和读取。
* module可以接收 `String,Array,Object` 三种类型写法

## 细节知识

* `webpack output is served from /` ，默认webpack-dev-server执行后会在项目根目录下建立文件。
* 需要同时安装webpack, webpack-cli， `npm i webpack webpack-cli -D` 与 `npm i webpack webpack-cli -g` 
* webpack配置文件默认叫 `webpack.config.js或webpack.file.js` ，但常用前者。
* 依赖前面带@符表示为作用域，比如 `@babel` 

## 注意坑点

* loader顺序，是从右到左
* css文件中引scss，需要设置css-loader参数options
* compiler
* optimization优化项
* 默认生产模式会压缩js文件，但配置optimization使用css相关压缩插件后，JS也需引入对应插件
* babel包与typescript
* webpack.config配置报错不会指出具体项，只能提供基本提示。

## 问题收集

* [Error: EINVAL: invalid argument, read](https://stackoverflow.com/questions/47087759/getting-error-einval-invalid-argument-read-for-npm-install-save-dev-esli)
* [core-js版本号问题](https://stackoverflow.com/questions/55308769/module-not-found-error-cant-resolve-core-js-es6)

## 参考资料 

* https://gitee.com/zhufengpeixun/projects

