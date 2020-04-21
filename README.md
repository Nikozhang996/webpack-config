## webpack 是什么

> webpack 的官方定义是个模块打包机

## webpack 能做什么

- 编译和压缩文件
- 使用不同的 loader 处理对应的文件

## 常见 loader 和 plugin

- copy-webpack-plugin，拷贝静态文件
- HtmlWebpackPlugin
  - https://github.com/jantimon/html-webpack-plugin
- WebpackMerge
  > 合并 webpack 配置
- HardSourcePlugin
- babel
  - "@babel/runtime"
  - "@babel/preset-typescript"
  - "@babel/preset-react"
  - "@babel/preset-env"
  - "@babel/plugin-transform-runtime"
  - "@babel/plugin-proposal-decorators"
  - @babel/plugin-proposal-class-properties
  - @babel/core
- postcss-loader
  - https://segmentfault.com/a/1190000014782560
  - https://github.com/postcss/postcss-loader
  - https://github.com/michael-ciniawsky/postcss-load-config
  - https://www.npmjs.com/package/browserslist
  - https://github.com/ianva/dart-sass-loader

## 学习笔记

- webpack 默认以生产模式，src/index.js 作为入口，编译至 dist/main.js
- 默认 mode 为开发 `development` 模式和生产 `production` 模式。
- 通常 webpack 需要自定义配置，在项目根目录下建 `webpakc.config.js` ，webpack 会自动识别和读取。
- module 可以接收 `String,Array,Object` 三种类型写法

## 优化策略

https://segmentfault.com/a/1190000021952886

### 删除无用 CSS 样式

> purgecss-webpack-plugin

### 引用图片压缩

> 使用`image-webpack-loader`插件压缩图片大小

- https://www.npmjs.com/package/image-webpack-loader

### CDN 加载文件

> add-asset-html-cdn-webpack-plugin

#### 参考资料

- https://segmentfault.com/a/1190000015709430
- https://www.jianshu.com/p/9248db0349fb

### Tree-shaking && Scope-Hoisting

> webpack4 中已自带`Tree-shaking`，在生产模式中将自动开启

#### 参考资料

- https://zhuanlan.zhihu.com/p/41997654

### DllPlugin

### DllReferencePlugin

### 动态加载

### SplitChunks

### 打包文件分析工具

> webpack-bundle-analyzer

### IgnorePlugin

### 费时分析

> speed-measure-webpack-plugin

### noParse

### include/exclude

- DLLPlugin 动态链接库
- 生产环境分享静态库
- hot module replacement
  - https://www.jianshu.com/p/45c150c4aece
  - https://www.webpackjs.com/configuration/dev-server/
  - https://www.webpackjs.com/api/hot-module-replacement/#status
  - https://www.webpackjs.com/guides/hot-module-replacement/#%E5%90%AF%E7%94%A8-hmr
- 利用 happypack 调用多进程打包

  - https://www.jianshu.com/p/b9bf995f3712

- 使用 purgecss-webpack-plugin 去除未引用的 CSS 样式
  - purgecss-webpack-plugin

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
- `.browserslist` 文件 babel 与 postcss 通用

## 问题收集

- [Error: EINVAL: invalid argument, read](https://stackoverflow.com/questions/47087759/getting-error-einval-invalid-argument-read-for-npm-install-save-dev-esli)
- [core-js 版本号问题](https://stackoverflow.com/questions/55308769/module-not-found-error-cant-resolve-core-js-es6)
- preset-typescript 与 ts-loader 之间是何关系？
- [webpack-typescript-module-hot-does-not-exist](https://stackoverflow.com/questions/40568176/webpack-typescript-module-hot-does-not-exist)
- Vue 项目中引入 purgecss-webpack-plugin 无效

## 参考资料

- [从 0 搭建自己的 webpack 开发环境（一）](https://segmentfault.com/a/1190000020450206?utm_source=tag-newest)
- https://www.jianshu.com/p/42e11515c10f
- https://gitee.com/zhufengpeixun/webpack-train
- [使用@babel/preset-typescript 取代 awesome-typescript-loader 和 ts-loader](https://www.cnblogs.com/vvjiang/archive/2019/12/18/12057811.html)
- [【webpack 学习随笔】2.webpack 优化配置策略](https://www.shifeng1993.com/2019/06/09/webpack_2/)
- [Webpack 学习笔记](https://www.jianshu.com/p/d550930afbec)
- [「吐血整理」再来一打Webpack面试题](https://mp.weixin.qq.com/s/UdsP3u_LR64dzffNPCx-2g)
