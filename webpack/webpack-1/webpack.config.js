const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  context : path.resolve(__dirname, "src"),
  mode : "development",
  entry : "./index.js",

  output : {
    filename : "[name].[hash].bundle.js",
    path : path.resolve(__dirname, "dist")
  },

  plugins : [
    new HtmlWebpackPlugin({
      template : "index.html",
      minify : {
        collapseWhitespace : true
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename : "[name].[hash].css"
    })
  ],

  optimization: {
    splitChunks : {
      chunks : "all"
    },
    minimizer : [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  },

  devServer : {
    port : 4200
  },

  resolve : {
    extensions : ["js", "json", "css", "scss", "png", "ttf"],
    alias : {
      "@assets" : path.resolve(__dirname, "src/assets"),
      "@src" : path.resolve(__dirname, "src")
    }
  },

  module : {
    rules : [
      {
        test : /\.css$/,
        use : [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test : /\.(png|jpg|svg|gif|jpeg)$/,
        use : "file-loader"
      },
      {
        test : /\.(ttf|woff|woff2|eot)$/,
        use : "file-loader"
      },
      {
        test : /\.s[ac]ss$/,
        use : [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
}