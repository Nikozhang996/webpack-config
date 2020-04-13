const DEVELOPMENT_CONFIG = require("./webpack.dev");
const PROD_CONFIG = require("./webpack.prod");
const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HappyPack = require("happypack");
const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = function(env) {
  const isDevelopment = env.development;
  const isProduction = env.production;

  const BASE_CONFIG = {
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "../dist"),
    },
    resolve: {
      extensions: [".js", ".json", "ts"],
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: "vue-loader",
          exclude: /node_modules/,
        },
        {
          // 解析js文件 默认会调用@babel/core
          test: /\.tsx?$/,
          use: "happypack/loader?id=handleBabelPack",
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          use: "happypack/loader?id=handleBabelPack",
          //把对.js 的文件处理交给id为happyBabel 的HappyPack 的实例执行
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
              },
            },
            "postcss-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
              },
            },
          ],
        },
        {
          // 匹配到scss结尾的使用sass-loader，指定dart-sass来处理
          test: /\.scss$/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
              },
            },
            "postcss-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
              },
            },
          ],
        },
        {
          // 图标的转化
          test: /\.(woff|ttf|eot)$/,
          use: "file-loader",
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: {
            loader: "url-loader",
            options: {
              name: "image/[contentHash].[ext]",
              limit: 1024,
            },
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html"),
        title: "hello webpack",
        filename: "index.html",
        minify: isProduction && {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
        },
      }),
      new HappyPack({
        id: "handleBabelPack",
        //共享进程池
        threadPool: happyThreadPool,
        //允许 HappyPack 输出日志
        verbose: true,
        loaders: ["babel-loader"],
      }),
    ].filter(Boolean),
  };

  return isDevelopment
    ? merge(BASE_CONFIG, DEVELOPMENT_CONFIG)
    : merge(BASE_CONFIG, PROD_CONFIG(env));
};
