const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const cssExtract = new ExtractTextWebpackPlugin({
  filename: 'css/css.css',
});
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PurifycssWebpack = require('purifycss-webpack');
const glob = require('glob');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve('./build')
  },
  devServer: {
    contentBase: './build',
    port: 3000,
    compress: true,
    open: true,
    hot: true
  },
  plugins: [
    cssExtract,
    // 拷贝插件
    new CopyWebpackPlugin([{
      from: './src/doc',
      to: 'public'
    }]),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['./build']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: '珠峰架构',
      hash: true,
    }),
    // 没用的css会被消除掉，一定放在htmlwebpackPlugin后面
    new PurifycssWebpack({
      paths: glob.sync(path.resolve('src/*.html'))
    })
  ],
  mode: 'development',
  resolve: {},
  module: {
    rules: [ // 从右往左写
      {
        test: /\.css$/,
        use: cssExtract.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      }
    ]
  }
}