const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode : "development",
  module : {
    rules : [
      {
        test : /\.(js|jsx)$/,
        exclude : /node_modules/,
        use : [
          {loader : "babel-loader"}
        ]
      },
      {
        test : /\.css$/,
        use : [
          {loader : "style-loader"},
          {loader : "css-loader"}
        ]
      },
      {
        test : /\.s[ac]ss$/,
        use : [
          {loader : "style-loader"},
          {loader : "css-loader"},
          {loader : "sass-loader"}
        ]
      }
    ]
  },

  resolve : {
    extensions : ["*", ".js", ".jsx"]
  },

  plugins : [
    new HtmlWebpackPlugin({
      template : "./public/index.html"
    })
  ]
}