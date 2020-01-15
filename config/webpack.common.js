var webpack = require("webpack");
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./main.js",
  output: { filename: "bundle.js" },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins:[
    new HTMLWebpackPlugin({
      template:path.join(__dirname,'../') + '/index.html'
    })
  ]
};
