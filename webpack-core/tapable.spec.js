//1.SyncHook 同步的串行 不关心监听函数的返回值
//2.SyncBailHook 同步的串行  只要监听函数有一个函数的返回值不为null 跳过剩下所有的
//3.SyncWaterfallHook 同步串行的 上一个监听函数的返回值可以传给下一个
//4.SyncLoopHook 同步循环 监听函数返回true返回的执行

//5+ 跟上面的意思都一样的 异步的
const {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
} = require("tapable");
//接受一个可选的参数 这个参数是一个字符串的数组
//相当于compiler.hooks
let queue = new SyncHook(["name"]);

//订阅
//标识我们的订阅函数
queue.tap("1", function (name) {
    console.log(name, 1);
})

//执行钩子
queue.call("webpack🍎");

//webpack-internal-plugin-relation  webpack钩子关系
//https://github.com/alienzhou/webpack-internal-plugin-relation