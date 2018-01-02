var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const chalk = require("chalk");
const log = console.log;

/** Plugins
 *
 *
 */
let myPlugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    inject: true
  }),
  new ExtractTextPlugin("styles.css"),
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

let myModules = [
  {
    test: /\.js$/,
    loader: "babel-loader",
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: [{ loader: "css-loader", options: { minimize: true } }]
    })
  }
];

// setup webpack for env variables
module.exports = env => {
  if (env.production) {
    myPlugins = (myPlugins || []).concat(prodPlugins);
    log(chalk.blue("==> Bundling for Production"));
  } else {
    log(chalk.yellow("==> Bundling for development"));
  }

  return {
    entry: {
      main: "./index.js",
      vendor: ["lodash", "react", "react-dom"]
    },
    devServer: {
      contentBase: path.join(__dirname, "build"),
      compress: true,
      port: 8080,
      historyApiFallback: true
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[chunkhash].js",
      publicPath: "/"
    },
    module: {
      rules: myModules
    },
    plugins: myPlugins
  };
};
