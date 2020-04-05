const DEVELOPMENT_CONFIG = require("./webpack.dev");
const PROD_CONFIG = require("./webpack.prod");
const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
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
          test: /\.js$/,
          use: 'babel-loader'
        },
        {
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
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass")
              }
            }
          ]
        },
        {
          // 匹配到scss结尾的使用sass-loader，指定dart-sass来处理
          test: /\.scss$/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
            },
            'postcss-loader',
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass")
              }
            }
          ]
        },
        { // 图标的转化
          test: /\.(woff|ttf|eot)$/,
          use: 'file-loader'
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              name: "image/[contentHash].[ext]",
              limit: 1024
            }
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
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