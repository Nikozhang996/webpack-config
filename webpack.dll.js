const path = require("path");
const DllPlugin = require("webpack/lib/DllPlugin");

module.exports = {
  mode: "production",
  entry: ["react", "react-dom"],
  output: {
    library: "react",
    libraryTarget: "commonjs",
    filename: "dll.js", //打包后接收的名字
    path: path.resolve(__dirname, "dll"), //打包后地址
  },
  plugins: [
    new DllPlugin({
      name: "react",
      path: path.resolve(__dirname, "dll/manifest.json"),
    }),
  ],
};
