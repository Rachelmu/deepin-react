/*
 * @Description:
 * @Author: zhangzhenyang
 * @Date: 2020-09-14 20:24:41
 * @LastEditTime: 2020-10-21 11:39:44
 * @LastEditors: zhangzhenyang
 */
const path = require("path"),
  webpack = require("webpack"),
  PnpWebpackPlugin = require("pnp-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  VueLoaderPlugin = require("vue-loader/lib/plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  UnusedModulesPlugin = require("../plugin/unUsedPlugin");

const isDevelopment = process.env.NODE_ENV === "development";

console.log(isDevelopment);

const config = {
  mode: isDevelopment ? "development" : "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: "babel-loader",
      },
      {
        test: /\.styl$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.(jpg|jpeg|webp|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /.(eot|svg|ttf|woff|woff2)$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".styl", ".vue"],
    plugins: [PnpWebpackPlugin],
    alias: {
      "@": path.join(__dirname, "../src"),
    },
  },

  optimization: {
    splitChunks: {
      chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
    },
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // css plugin
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new UnusedModulesPlugin({
      sourceDir: path.resolve(__dirname, "../src"),
      compilationExclude: compilation => /html-webpack-plugin/.test(compilation.name),
      output: path.join(__dirname, "../tmp/unusedModules.json"),
      exclude: [/\.spec\.js$/],
    }),
  ],
};

module.exports = config;
