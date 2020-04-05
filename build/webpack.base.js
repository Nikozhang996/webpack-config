const DEVELOPMENT_CONFIG = require("./webpack.dev");
const PROD_CONFIG = require("./webpack.prod");
const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const VueLoaderPlugin = require("vue-loader/lib/plugin");



module.exports = function (env) {
  const isDevelopment = env.development;
  const isProduction = env.production;

  const BASE_CONFIG = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, "../dist")
    },
    module: {
      rules: [{
          test: /\.css$/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          // 匹配到scss结尾的使用sass-loader 来调用node-sass处理sass文件
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html"),
        filename: "index.html",
        minify: isProduction && {
          removeAttributeQuotes: true,
          collapseWhitespace: true
        }
      })
    ].filter(Boolean)
  }

  return isDevelopment ?
    merge(BASE_CONFIG, DEVELOPMENT_CONFIG) :
    merge(BASE_CONFIG, PROD_CONFIG)
};