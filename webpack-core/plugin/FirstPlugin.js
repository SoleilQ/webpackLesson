//1.插件一定要有apply
//2.插件里面compiler
//3.compiler ->留钩子 -> 给外界留下可以注册的接口
//4.该执行的时候定位的插件的时机给执行了
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log('🐴🐶构建过程开始!!!');
            console.log("========================");
        });
    }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;

//[创建] --- webpack在其内部对象上创建各种钩子
//[注册] --- 插件将自己的方法注册到对应钩子上,交给webpack
//[调用] --- webpack编译过程中,会适时地触发相应钩子,因此也就触发了插件的方法

//webpack利用了tapable这个库(https://github.com/webpack/tapable)来协助实现对于整个构建流程各个步骤的控制.
//tapable定义了主要构建流程后,使用tapable这个库添加了各种各样的钩子方法来将webpack扩展至功能十分丰富,这就是plugin的机制

//1.什么是tapable
// webpack核心是使用tapable来实现插件的binding和applying. tapable是一个用于事件发布订阅执行的可插拔的插件架构.
// tabable就是webpack用来创建钩子的库

//2.打开webapck ---> package.json ---> main --->webpack.js

//3.创建Compiler
// 调用compiler.run 开始构建 -->
// 创建compilation -->
// 基于配置开始创建chunk -->
// 使用parser从chunk开始解析依赖 -->
// 使用module和dependency管理代码模块相互关系 --> 
// 使用template基于compilation的数据生成结果代码

// 初始化
// 启动构建 读取与合并参数
// 加载plugin,实例化complier
//编译
//从entry出发,针对每一个module调用loader翻译文件内容并找到module依赖 进行编译处理
//输出
//将编译后的module组合成chunk将chunk转换成文件 输出到文件系统中