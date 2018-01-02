var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");

/** Plugins
 *
 *
 */
let myPlugins = [
  new HtmlWebpackPlugin({
    template: "./index.html",
    inject: true
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    minChunks: Infinity
  })
];

let prodPlugins = [new CleanWebpackPlugin(["build"]), new MinifyPlugin({})];

/** Loaders
 *
 *
 */

let myLoaders = [
  {
    test: /\.js$/,
    loader: "babel-loader",
    exclude: /node_modules/
  }
];

// setup webpack for env variables
module.exports = env => {
  if (env.production) {
    myPlugins = (myPlugins || []).concat(prodPlugins);
    console.log("Adding prod plugins");
  }
  return {
    entry: {
      main: "./index.js",
      vendor: ["lodash"]
    },
    devServer: {
      contentBase: path.join(__dirname, "build"),
      compress: true,
      port: 8080
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[chunkhash].js",
      publicPath: "/"
    },
    module: {
      loaders: myLoaders
    },
    plugins: myPlugins
  };
};
