const path = require("path");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin(),
            new TerserWebpackPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ // 如果是开发模式就不要使用抽离样式的插件
            filename: 'style/main.css'
        }),
    ]
};