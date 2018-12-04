const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //多核编译
//webpack-parallel-uglify-plugin
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const os = require('os');

module.exports = {
  output: {
    filename: "scripts/[name].[hash:5].bundles.js",
    publicPath: "/"
  },
  // optimization: {
  //   minimizer: [new UglifyJsPlugin({
  //     //parallel: true
  //     parallel: os.cpus().length
  //   })]
  // }
  plugins: [
    new ParallelUglifyPlugin({
      // Optional regex, or array of regex to match file against. Only matching files get minified.
      // Defaults to /.js$/, any file ending in .js.
      exclude: /\.min\.js$/,
      workerCount: os.cpus().length,
      // uglifyJS: {

      // },
      uglifyES: {
        output: {
          beautify: false,
          comments: false
        },
        compress: {
          warnings: false,
          drop_console: true,
          collapse_vars: true
        }
      }
    }),
  ]
}