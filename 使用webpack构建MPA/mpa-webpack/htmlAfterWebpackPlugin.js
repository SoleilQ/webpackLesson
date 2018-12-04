const pluginName = 'HtmlAfterWebpackPlugin';

class HtmlAfterWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
      console.log("🍎🍌🍎🍌🍎🍌🍎🍌🍎🍌🍎🍌🍎🍌");
      compilation.hooks.htmlPluginBeforeHtmlProcessing.tap(pluginName, htmlPluginData => {
        const result = htmlPluginData.asstes.js;
        let _html = htmlPluginData.html;
        console.log("结果", result);
        _html = _html.replace("<!--injectjs-->", `<script src="/${result}"></script>`);
        htmlPluginData.html = _html;
      })
    });
  }
}

module.exports = HtmlAfterWebpackPlugin;