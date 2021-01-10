const HtmlWebpackPlugin = require("html-webpack-plugin"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  OpenBrowserPlugin = require("open-browser-webpack-plugin");
require("babel-polyfill");
module.exports = {
  entry: ["babel-polyfill", __dirname + "/src/app/index.js"],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{ loader: "css-loader" }, { loader: "sass-loader" }],
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      inject: "body",
    }),
    new ExtractTextPlugin("main.css"),
    new OpenBrowserPlugin({ url: "http://localhost:8000" }),
  ],
  devServer: {
    contentBase: "./src/public",
    port: 8000,
  },
};
