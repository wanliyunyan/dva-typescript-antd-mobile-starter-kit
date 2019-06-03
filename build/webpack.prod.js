/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use production
 */
const os = require("os");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, "/../dist/"),
    filename: "assets/js/[name].js"
  },
  plugins: [
    new CompressionPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: "src/assets/svg",
        to: "assets/svg/"
      }
    ]),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: os.cpus().length,
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }
};
