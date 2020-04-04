const DEVELOPMENT_CONFIG = require("./webpack.dev");
const PROD_CONFIG = require("./webpack.prod");
const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css0extract-plugin");
// const VueLoaderPlugin = require("vue-loader/lib/plugin");

const BASE_CONFIG = {
  mode: 'development',
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
    }]
  }
}

module.exports = function (env) {
  const isDevelopment = env.development;
  const isProduction = env.production;

  return isDevelopment ?
    merge(BASE_CONFIG, DEVELOPMENT_CONFIG) :
    merge(BASE_CONFIG, PROD_CONFIG)
};