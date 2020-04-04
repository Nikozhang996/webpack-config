## webpack是什么？

## webpack能做什么？

## 常见loader和plugin

* HtmlWebpackPlugin
* WebpackMerge
* HardSourcePlugin

## 学习笔记

* webpack默认以生产模式，src/index.js作为入口，编译至dist/main.js
* 默认mode为开发 `development` 模式和生产 `production` 模式。
* 通常webpack需要自定义配置，在项目根目录下建 `webpakc.config.js` ，webpack会自动识别和读取。

## 细节知识

* 需要同时安装webpack, webpack-cli， `npm i webpack webpack-cli -D` 与 `npm i webpack webpack-cli -g` 
* webpack配置文件默认叫 `webpack.config.js或webpack.file.js` ，但常用前者。

## 注意坑点

* loader顺序，是从右到左
* css文件中引scss，需要设置css-loader参数options
* compiler
* optimization优化项
* 默认生产模式会压缩js文件，但配置optimization使用css相关压缩插件后，JS也需引入对应插件

## 参考资料 

* https://gitee.com/zhufengpeixun/projects

