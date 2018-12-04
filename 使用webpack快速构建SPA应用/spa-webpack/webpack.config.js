const {
    join
} = require('path');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default; //深度 tree-shaking
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css tree-shaking
const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require('webpack-merge'); //区分dev 和prod webpack-merge: 可以把分开配置的config合并，分开生产环境和调试环境
const _mode = argv.mode || "development";
const _modeflag = (_mode == "production" ? true : false);
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin"); //时间监控
const smp = new SpeedMeasurePlugin();
const WebpackBuildNotifierPlugin = require('webpack-build-notifier'); //面板通知
const ProgressBarPlugin = require('progress-bar-webpack-plugin'); //打包进度
const DashboardPlugin = require('webpack-dashboard/plugin'); //打包面板  不好用

const ManifestPlugin = require('webpack-manifest-plugin'); //性能优化
const loading = {
    html: "加载中..."
}
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
    devServer: {
        // port: 3000,
        // hot: true,
        before(app) {
            app.get("/api/test", (req, res) => {
                res.json({
                    code: 200,
                    message: "Hello World"
                })
            })
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "initial",
                    name: "common",
                    minChunks: 1,
                    maxInitialRequests: 5,
                    minSize: 0
                }
            }
        },
        runtimeChunk: {
            name: "runtime"
        }
    },
    plugins: [
        new ManifestPlugin(),
        //new DashboardPlugin(),
        new ProgressBarPlugin(),
        new WebpackBuildNotifierPlugin({
            title: "My Project Webpack Build",
            //logo: path.resolve("./img/favicon.png"),
            suppressSuccess: true
        }),
        new WebpackDeepScopeAnalysisPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: _modeflag ? "styles/[name].[hash:5].css" : "styles/[name].css",
            chunkFilename: _modeflag ? "styles/[id].[hash:5]css" : "styels/[id].css"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
            loading
        }),
        new CleanWebpackPlugin(['dist']),
        // new PurifyCSSPlugin({
        //     // Give paths to parse for rules. These should be absolute!
        //     paths: glob.sync(join(__dirname, './dist/*.html')),
        // })
    ],
};

module.exports = smp.wrap(merge(_mergeConfig, webpackConfig));
//module.exports = merge(_mergeConfig, webpackConfig);
//dist scripts 4个文件至关重要