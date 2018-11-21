const {
    join
} = require('path');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default; //深度 tree-shaking
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css tree-shaking
const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require('webpack-merge'); //区分dev 和prod
const _mode = argv.mode || "development";
const _modeflag = (_mode == "production" ? true : false);
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

webpackConfig = {
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                //'style-loader',
                {
                    //loader: 'css-loader?modules&localIdentName=[name]_[local]-[hash:base64:5]'
                    loader: 'css-loader'
                }
            ]
        }]
    },
    plugins: [
        new WebpackDeepScopeAnalysisPlugin(),

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: _modeflag ? "styles/[name].[hash:5].css" : "styles/[name].css",
            chunkFilename: _modeflag ? "styles/[id].[hash:5]css" : "styels/[id].css"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        }),
        new CleanWebpackPlugin(['dist']),
        // new PurifyCSSPlugin({
        //     // Give paths to parse for rules. These should be absolute!
        //     paths: glob.sync(join(__dirname, './dist/*.html')),
        // })
    ],
};

module.exports = merge(_mergeConfig, webpackConfig);