/*
 * @ use 开发环境webpack构建
 */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonConfig = require('./webpack.base.js');

const targetPath = path.join(__dirname, '../');
const targetFolder = 'dist';

module.exports = function (env) {
  return merge(commonConfig, {
    mode: env,
    entry: {
      bundle: './src/index.tsx',
    },
    output: {
      path: path.join(__dirname, '/../dist/'),
      filename: 'assets/js/[name].js',
    },
    plugins: [
      new CleanWebpackPlugin([targetFolder], {
        root: `${targetPath}`,
      }),
      new CopyWebpackPlugin([
        {
          from: 'src/assets/svg',
          to: 'assets/svg/',
        },
      ]),
    ],
  });
};
