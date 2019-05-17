/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use development
 */
const webpack = require("webpack");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  output: {
    filename: "assets/js/[name].js",
    sourceMapFilename: "[name].map"
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    hot: true,
    stats: "normal",
    contentBase: "./src/",
    compress: true,
    port: 8003,
    disableHostCheck: true,
    proxy: {
      "/api/*": {
        target: "http://localhost:9090",
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [
    new HardSourceWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 3000,
        proxy: "http://localhost:8003/"
      },
      {
        reload: false
      }
    )
  ]
};
