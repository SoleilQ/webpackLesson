const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log("🍎🍌🍎🍌🍎🍌🍎🍌🍎🍌🍎🍌🍎🍌");
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;