/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use development
 */
const webpack = require("webpack");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = {
  output: {
    filename: "assets/js/[name].js"
  },
  devServer: {
    compress: true,
    contentBase: "./src/",
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    overlay: {
      errors: true,
      warnings: true
    },
    port: 8003,
    proxy: {
      "/api/*": {
        changeOrigin: true,
        secure: false,
        target: "http://localhost:9090"
      }
    },
    stats: "normal"
  },
  plugins: [
    new webpack.ProgressPlugin(),
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
