## webpack 是什么

> webpack 的官方定义是个模块打包机

## webpack 能做什么

- 编译和压缩文件
- 使用不同的 loader 处理对应的文件

## 常见 loader 和 plugin

- HtmlWebpackPlugin
- WebpackMerge
- HardSourcePlugin
- babel
- postcss-loader
  - https://github.com/postcss/postcss-loader
  - https://github.com/michael-ciniawsky/postcss-load-config
  - https://www.npmjs.com/package/browserslist

## 学习笔记

- webpack 默认以生产模式，src/index.js 作为入口，编译至 dist/main.js
- 默认 mode 为开发 `development` 模式和生产 `production` 模式。
- 通常 webpack 需要自定义配置，在项目根目录下建 `webpakc.config.js` ，webpack 会自动识别和读取。
- module 可以接收 `String,Array,Object` 三种类型写法

## 细节知识

- `webpack output is served from /` ，默认 webpack-dev-server 执行后会在项目根目录下建立文件。
- 需要同时安装 webpack, webpack-cli， `npm i webpack webpack-cli -D` 与 `npm i webpack webpack-cli -g`
- webpack 配置文件默认叫 `webpack.config.js或webpack.file.js` ，但常用前者。
- 依赖前面带@符表示为作用域，比如 `@babel`

## 注意坑点

- loader 顺序，是从右到左
- css 文件中引 scss，需要设置 css-loader 参数 options
- compiler
- optimization 优化项
- 默认生产模式会压缩 js 文件，但配置 optimization 使用 css 相关压缩插件后，JS 也需引入对应插件
- babel 包与 typescript
- webpack.config 配置报错不会指出具体项，只能提供基本提示。
- `.browserslist`文件 babel 与 postcss 通用

## 问题收集

- [Error: EINVAL: invalid argument, read](https://stackoverflow.com/questions/47087759/getting-error-einval-invalid-argument-read-for-npm-install-save-dev-esli)
- [core-js 版本号问题](https://stackoverflow.com/questions/55308769/module-not-found-error-cant-resolve-core-js-es6)

## 参考资料

- https://www.jianshu.com/p/42e11515c10f
- https://github.com/ianva/dart-sass-loader
- https://gitee.com/zhufengpeixun/projects
