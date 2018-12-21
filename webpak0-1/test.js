//闭包
//Template
(function (modules) {
    function __webpack_require__(moduleId) {
        //1.modules先找缓存过查找的结果
        //2.moduleId注册到缓存里去
        //3.moduleId 函数表达式执行掉
        //4.(function (module, __webpack_exports__, __webpack_require__) {});
        const module = {
            exports: {}
        }
        moduleId.call(this, module, module.exports, __webpack_require__);
        return module.exports;
    };
    //0.注册 __webpack_require__函数
    //1.执行modules的入口key
    return __webpack_require__(modules["./src/index.js"]);
    //
})({
    "./src/index.js": 123,
    "./src/test.js": 456
})

//("src/test.js");

(function moduleId(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    const test = () => {
        console.log("webpack🍎🍌");
    };
    __webpack_exports__["default"] = (test);
})