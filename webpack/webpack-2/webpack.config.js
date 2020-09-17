const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context : path.resolve(__dirname, "src"),

  entry : {
    app : [
      "@babel/polyfill",
      "./app.js",
      "./css/style.scss"
    ]
  },

  output : {
    filename : "[name].bundle.js",
    path : path.resolve(__dirname, "dist")
  },

  plugins : [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new HtmlWebpackPlugin({
      filename : "header.html",
      template : "tavi.html"
    }),
    new HtmlWebpackPlugin({
      filename : "footer.html",
      template : "fexi.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],

  module : {
    rules : [
      {
        test : /\.scss$/,
        use : [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test : /\.css$/,
        use : [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
      
    ]
  }

}