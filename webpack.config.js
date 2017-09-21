/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: [
    "webpack-hot-middleware/client",
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.jsx?$/,
      exclude: [
        /node_modules/,
        /assets/,
      ],
      loader: "babel-loader",
      query: {
        plugins: [
          [
            "react-transform", {
              transforms: [{
                transform: "react-transform-hmr",
                imports: ["react"],
                locals: ["module"]
              }, {
                transform: "react-transform-catch-errors",
                imports: ["react", "redbox-react"]
              }]
            }
          ]
        ]
      },
    }, {
      test: /\.css$/,
      loaders: ["style-loader", "raw-loader"],
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml",
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png",
    }, {
      test: /\.gif$/,
      loader: "url-loader?mimetype=image/gif",
    }, {
      test: /\.jpg$/,
      loader: "url-loader?mimetype=image/jpg",
    }]
  }
};
