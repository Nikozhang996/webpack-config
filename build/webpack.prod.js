const path = require("path");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");
const PurgecssPlugin = require("purgecss-webpack-plugin");

module.exports = function(env) {
  return {
    mode: "production",
    optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin(), new TerserWebpackPlugin()],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "style/[name].css",
      }),
      new PurgecssPlugin({
        paths: glob.sync(`${path.join(__dirname, "../src")}/**/*`, {
          nodir: true,
        }),
      }),
    ],
  };
};
