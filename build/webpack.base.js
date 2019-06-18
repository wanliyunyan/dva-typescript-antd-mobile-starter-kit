const fs = require("fs");
const os = require("os");
const path = require("path");
const HappyPack = require("happypack");
const lessToJs = require("less-vars-to-js");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");

// Override the default theme of antd
const themeVariables = lessToJs(
  fs.readFileSync(
    path.join(__dirname, "../src/assets/style/theme.less"),
    "utf8"
  )
);

module.exports = function() {
  const env = process.argv.slice(-1)[0];
  const dev = env === "development";
  const prod = env === "production";

  const postcssOption = {
    config: {
      ctx: {
        "postcss-preset-env": {
          stage: 0, // experimental
          autoprefixer: prod
        },
        cssnano: prod
          ? {
              preset: "default"
            }
          : false
      }
    }
  };

  return merge(dev ? devConfig : prodConfig, {
    mode: env,
    entry: {
      bundle: "./src/index.tsx"
    },
    module: {
      rules: [
        {
          test: /\.([tj])sx?$/,
          use: [
            {
              loader: 'happypack/loader?id=babel',
            }
          ],
          include: [path.join(__dirname, "../src")]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: dev
              }
            },
            "css-loader",
            // https://github.com/michael-ciniawsky/postcss-load-config/issues/154
            'postcss-loader', // todo need postcss-load-config@2.0.1
            "sass-loader"
          ]
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: dev
              }
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
                localsConvention: "camelCase",
                modules: {
                  localIdentName: "[path][name]__[local]--[hash:base64:5]"
                }
              }
            },
            {
              loader: "postcss-loader",
              options: postcssOption
            },
            {
              loader: "less-loader",
              options: {
                javascriptEnabled: true,
                modifyVars: themeVariables
              }
            }
          ]
        },
        {
          test: /\.less$/,
          exclude: /src/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 2
              }
            },
            {
              loader: "postcss-loader",
              options: postcssOption
            },
            {
              loader: "less-loader",
              options: {
                javascriptEnabled: true,
                modifyVars: themeVariables
              }
            }
          ]
        },
        {
          test: /\.(ico|pdf|eot|otf|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name:"[hash:8].[name].[ext]",
                outputPath:"assets/images/",
                publicPath:"assets/images"
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name:"[hash:8].[name].[ext]",
                outputPath:"assets/images/",
                publicPath:"assets/images"
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: true,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75
                }
              },
            },
          ]
        },
        {
          test: /\.svg$/,
          loader: "svg-sprite-loader"
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            priority: 10,
            enforce: true
          },
          antd: {
            name: "antd",
            test: module => {
              return /ant|rc-/.test(module.context);
            },
            chunks: "all",
            priority: 11,
            enforce: true
          },
          util: {
            name: "util",
            test: module => {
              return /lodash|moment/.test(module.context);
            },
            chunks: "all",
            priority: 12,
            enforce: true
          },
          react: {
            name: "react",
            test: module => {
              return /react|redux/.test(module.context);
            },
            chunks: "all",
            priority: 13,
            enforce: true
          }
        }
      },
      runtimeChunk: {
        name: "manifest"
      },
    },
    plugins: [
      new HappyPack({
        id: 'babel',
        threads: os.cpus().length,
        loaders: [ 'babel-loader' ]
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[name].css"
      }),
      new HtmlWebpackPlugin({
        title: "wanliyunyan",
        favicon: "src/favicon.ico",
        template: "src/index.ejs",
        filename: "index.html",
        chunksSortMode: "none", // Error: Cyclic dependency
        hash: true,
        minify:true
      })
    ],
    resolve: {
      alias: {
        src: path.resolve(__dirname, "../src/")
      },
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      modules: [path.resolve(__dirname), "node_modules"]
    }
  });
};
