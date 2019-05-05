/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use production
 */
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CSSSplitWebpackPlugin = require("css-split-webpack-plugin").default;

module.exports = {
  output: {
    path: path.join(__dirname, "/../dist/"),
    filename: "assets/js/[name].js"
  },
  plugins: [
    new CSSSplitWebpackPlugin({ size: 2000 }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: "src/assets/svg",
        to: "assets/svg/"
      }
    ])
  ]
};
