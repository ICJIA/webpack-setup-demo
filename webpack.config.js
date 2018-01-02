var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");

// setup webpack for env variables
module.exports = env => {
  console.log("Production: ", env.production);
  return {
    entry: {
      main: "./index.js",
      vendor: ["lodash"]
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[chunkhash].js",
      publicPath: "/"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(["build"]),
      new HtmlWebpackPlugin({
        template: "./index.html",
        inject: true
      }),
      new MinifyPlugin({}),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        // filename: "vendor.js"
        // (Give the chunk a different name)

        minChunks: Infinity
        // (with more entries, this ensures that no other module
        //  goes into the vendor chunk)
      })
    ]
  };
};
