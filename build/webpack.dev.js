const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devServer: {
    port: 4000,
    compress: true,
    hot: true,
    contentBase: path.resolve(__dirname, "../dist"),
    after(app) {
      // app is a EventEmitter
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
