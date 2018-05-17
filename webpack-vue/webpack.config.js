const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PurifycssWebpack = require('purifycss-webpack');
const glob = require('glob');

// 区分开发环境&&生产环境
const isDev = process.env.NODE_ENV === 'development';

const config = {
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
        use: [
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
  plugins: [
    // 说明：每次打包的时候清除build中的文件
    new CleanWebpackPlugin(['./build']),

    // 说明：用于区分开发环境还是生产环境，Vue或React框架会自动根据环境输出不同的文件类型
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),

    // 说明：用于新建html文件
    new HTMLPlugin({
      title: 'webpack-vue'
    }),

    // 没用的css会被消除掉，一定放在htmlwebpackPlugin后面
    new PurifycssWebpack({
      paths: glob.sync(path.resolve('src/*.html'))
    })
  ]
}

if (isDev) {
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    overlay: {
      errors: true
    }
  }
  config.module.rules.push({
    test: /\.styl$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ]
  })
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue']
  }

  config.output.filename = '[name].[chunkhash:4].js';

  config.module.rules.push({
    test: /\.styl$/,
    use: ExtractPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    })
  });

  config.plugins.push(
    new ExtractPlugin('styles.[contentHash:4].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
  )
}

module.exports = config;