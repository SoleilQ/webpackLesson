(function (modules) { // webpack启动文件
  // 模块缓存
  var installedModules = {};

  //require函数
  function __webpack_require__(moduleId) {

    // 检测了模块是否被安装过
    if (installedModules[moduleId]) {
      //把模块导出的资源注入到缓存里去
      return installedModules[moduleId].exports;
    }
    //如果没有模块的缓存
    var module = installedModules[moduleId] = {
      i: moduleId, //模块的名字
      l: false,
      exports: {} //模块的值
    };


    //特别核心的一段话
    //
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // Flag the module as loaded
    module.l = true;

    // Return the exports of the module
    return module.exports;
  }


  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules;

  // expose the module cache
  __webpack_require__.c = installedModules;

  // define getter function for harmony exports
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
    }
  };

  // define __esModule on exports
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
    }
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
  };

  // create a fake namespace object
  // mode & 1: value is a module id, require it
  // mode & 2: merge all properties of value into the ns
  // mode & 4: return value when already ns object
  // mode & 8|1: behave like require
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    if (mode & 2 && typeof value != 'string')
      for (var key in value) __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    return ns;
  };

  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ?
      function getDefault() {
        return module['default'];
      } :
      function getModuleExports() {
        return module;
      };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };

  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  // __webpack_public_path__
  __webpack_require__.p = "";


  //加载主入口模块
  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})
/************************************************************************/
({

  /***/
  "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /*! no exports provided */
    /***/
    (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.js */ \"./src/test.js\");\n\r\nObject(_test_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

      /***/
    }),

  /***/
  "./src/test.js":
    /*!*********************!*\
      !*** ./src/test.js ***!
      \*********************/
    /*! exports provided: default */
    /***/
    (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\nconst test = () => {\r\n    console.log(\"webpack🍎🍌\");\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (test);\n\n//# sourceURL=webpack:///./src/test.js?");

      /***/
    })

});

