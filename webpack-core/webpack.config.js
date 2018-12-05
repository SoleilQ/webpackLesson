const path = require("path");
const ConsoleLogOnBuildWebpackPlugin = require('./plugin/FirstPlugin.js');
module.exports = {
    module: {
        // rules: [{
        //     test: /\.m?js$/,
        //     exclude: /(node_modules|bower_components)/,
        //     use: {
        //         loader: 'babel-loader',
        //         options: {
        //             presets: ['@babel/preset-env']
        //         }
        //     }
        // }]
        rules: [{
            test: /\.js$/,
            use: {
                loader: path.resolve("./loader/index.js")
            }
        }]
    },
    plugins: [
        new ConsoleLogOnBuildWebpackPlugin()
    ]
}