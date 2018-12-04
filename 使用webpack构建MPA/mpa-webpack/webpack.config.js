const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlAfterWebpackPlugin = require('./htmlAfterWebpackPlugin.js');
module.exports = {
  entry: {
    "index-index": "./project/src/views/index.entry.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./project/src/views/index.html",
      inject: false
    }),
    new htmlAfterWebpackPlugin()
  ]
}