const path = require('path');
// const HTMLPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
    target: 'web',    
    entry: path.join(__dirname, 'src/index.js'), // 输入：项目主文件（入口文件）
    output: { // 输出
        filename: 'build.[hash:8].js', // 输出的文件名
        path: path.join(__dirname, 'dist') // 输出路径
    },
    module: { // 配置加载资源
        rules: [ // 规则
            {
                test: /\.vue$/,
                use:[
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024, // 文件小于1024字节，转换成base64编码，写入文件里面
                        name: '[name]-output.[ext]'
                    }
                }]
            }
        ]
    },
}