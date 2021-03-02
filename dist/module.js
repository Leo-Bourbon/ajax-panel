define(["@grafana/runtime","app/core/app_events","app/plugins/sdk","jquery","lodash","moment"], function(__WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE_grafana_app_core_app_events__, __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_moment__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./style.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./style.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".small-link a {\n  text-decoration: none;\n  color: #33b5e5; }\n\n.small-link a:hover {\n  text-decoration: underline; }\n\n.small-link .label-tag {\n  background-color: #757575;\n  border-color: #9b9b9b;\n  margin-right: 5px;\n  cursor: context-menu; }\n\n.imgwrap img {\n  width: 100%;\n  height: 100%; }\n\n.imgwrap img:hover {\n  border: 3px solid #33b5e5;\n  cursor: pointer; }\n\n.center-popup {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1050;\n  cursor: pointer; }\n\n.ngtemplate {\n  height: 100%; }\n", "",{"version":3,"sources":["style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,cAAc,EAAE;;AAElB;EACE,0BAA0B,EAAE;;AAE9B;EACE,yBAAyB;EACzB,qBAAqB;EACrB,iBAAiB;EACjB,oBAAoB,EAAE;;AAExB;EACE,WAAW;EACX,YAAY,EAAE;;AAEhB;EACE,yBAAyB;EACzB,eAAe,EAAE;;AAEnB;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,eAAe,EAAE;;AAEnB;EACE,YAAY,EAAE","file":"style.css","sourcesContent":[".small-link a {\n  text-decoration: none;\n  color: #33b5e5; }\n\n.small-link a:hover {\n  text-decoration: underline; }\n\n.small-link .label-tag {\n  background-color: #757575;\n  border-color: #9b9b9b;\n  margin-right: 5px;\n  cursor: context-menu; }\n\n.imgwrap img {\n  width: 100%;\n  height: 100%; }\n\n.imgwrap img:hover {\n  border: 3px solid #33b5e5;\n  cursor: pointer; }\n\n.center-popup {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1050;\n  cursor: pointer; }\n\n.ngtemplate {\n  height: 100%; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./examples.ts":
/*!*********************!*\
  !*** ./examples.ts ***!
  \*********************/
/*! exports provided: examples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "examples", function() { return examples; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./types.ts");

var examples = [{
  // The first example should set all possible fields!
  name: 'Simple',
  text: 'loads static content from github',
  config: {
    request: 'http',
    method: 'GET',
    mode: _types__WEBPACK_IMPORTED_MODULE_0__["RenderMode"].html,
    template: '',
    url: 'https://raw.githubusercontent.com/ryantxu/ajax-panel/master/static/example.txt',
    params_js: '{\n' + " from:ctrl.range.from.format('x'),  // x is unix ms timestamp\n" + " to:ctrl.range.to.format('x'), \n" + ' height:ctrl.height,\n' + ' now:Date.now(),\n' + " interval: ctrl.template('$__interval'),\n" + " sample: 'Not escaped: $__interval',\n" + ' since:ctrl.lastRequestTime\n' + '}',
    header_js: '{}',
    responseType: 'text',
    withCredentials: false,
    skipSameURL: true,
    showErrors: true,
    showTime: false,
    showTimePrefix: null,
    showTimeFormat: 'LTS',
    showTimeValue: 'request',
    templateResponse: true
  }
}, {
  name: 'Echo Service',
  text: 'Responds with the request attributes',
  config: {
    method: 'GET',
    mode: _types__WEBPACK_IMPORTED_MODULE_0__["RenderMode"].json,
    responseType: 'json',
    url: 'https://httpbin.org/anything?templateInURL=$__interval',
    header_js: "{\n  Accept: 'text/plain'\n}",
    showTime: true
  }
}, {
  name: 'Echo Service with Template',
  text: 'Format the response with an angular template',
  editorTabIndex: 2,
  config: {
    method: 'GET',
    mode: _types__WEBPACK_IMPORTED_MODULE_0__["RenderMode"].template,
    responseType: 'json',
    template: '<h5>Origin: {{ response.origin }}</h5>\n\n<pre>{{ response | json }}</pre>',
    url: 'https://httpbin.org/anything?templateInURL=$__interval',
    header_js: "{\n  Accept: 'text/plain'\n}",
    showTime: true
  }
}, {
  name: 'Webcamera in Thailand',
  text: 'Load an image dynamically',
  config: {
    method: 'GET',
    url: 'http://tat.touch-ics.com/CCTV/cam.php?cam=31&datatype=image&langISO=EN&t=current&reloadtime=1',
    params_js: '{\n' + ' __now:Date.now(),\n' + '}',
    responseType: 'arraybuffer',
    showTime: true
  }
}, {
  name: 'Image',
  text: 'Sending "Accept" header',
  config: {
    method: 'GET',
    url: 'https://httpbin.org/image',
    params_js: '{}',
    header_js: "{\n  Accept: 'image/jpeg'\n}",
    responseType: 'blob',
    showTime: true,
    showTimeValue: 'recieve'
  }
}, {
  name: 'Image in IFrame',
  text: 'load an image in an iframe',
  config: {
    method: 'iframe',
    url: 'https://dummyimage.com/600x300/4286f4/000&text=GRAFANA',
    params_js: '{}'
  }
}, {
  name: 'Results from Grafana API',
  text: 'grafana settings api w/ template',
  config: {
    mode: _types__WEBPACK_IMPORTED_MODULE_0__["RenderMode"].template,
    responseType: 'json',
    template: '<h2>Instance: {{ response.DEFAULT.instance_name }}</h2>\n\n' + '<div ng-repeat="(key, value) in response">\n\n        ' + '<h5>{{key}}</h5>\n\n        ' + '<pre>{{ value | json }}</pre>\n\n      ' + '</div>',
    url: '/api/admin/settings',
    params_js: '{}'
  }
}, {
  name: 'Results from Grafana API',
  text: 'formatted as JSON',
  config: {
    mode: _types__WEBPACK_IMPORTED_MODULE_0__["RenderMode"].json,
    url: '/api/admin/stats',
    responseType: 'json',
    params_js: '{}'
  }
}, {
  name: 'Basic Auth (success)',
  text: 'send correct basic auth',
  config: {
    url: 'https://httpbin.org/basic-auth/user/pass',
    withCredentials: true,
    responseType: 'json',
    params_js: '{}',
    header_js: '{\n' + "   Authorization: 'Basic ' + btoa('user' + ':' + 'pass')\n" + "// Authorization: 'Basic dXNlcjpwYXNz'\n" + '}'
  }
}, {
  name: 'Basic Auth (fail)',
  text: 'send correct basic auth',
  config: {
    url: 'https://httpbin.org/basic-auth/userx/passx',
    withCredentials: true,
    responseType: 'json',
    params_js: '{}',
    header_js: '{\n' + " Authorization: 'Basic ...bad..'\n" + '}'
  }
}];

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: AjaxCtrl, PanelCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxCtrl", function() { return AjaxCtrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelCtrl", function() { return AjaxCtrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grafana/app/core/app_events */ "grafana/app/core/app_events");
/* harmony import */ var grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./types.ts");
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples */ "./examples.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);








 // eslint-disable-next-line



var AjaxCtrl =
/** @class */
function (_super) {
  AjaxCtrl.$inject = ["$scope", "$injector", "$rootScope", "$q", "$timeout", "$sce", "$compile"];

  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AjaxCtrl, _super);
  /** @ngInject */


  function AjaxCtrl($scope, $injector, $rootScope, $q, $timeout, $sce, $compile) {
    var _this = _super.call(this, $scope, $injector) || this;

    _this.$rootScope = $rootScope;
    _this.$q = $q;
    _this.$timeout = $timeout;
    _this.$sce = $sce;
    _this.$compile = $compile;
    _this.isIframe = false;
    _this.objectURL = null; // Used for images

    _this.scopedVars = null; // updated each request

    _this.requestCount = 0;
    _this.lastRequestTime = -1; // Migrate old settings

    if (_this.panel.useDatasource) {
      _this.panel.request = 'datasource';
      delete _this.panel.useDatasource;
    }

    lodash__WEBPACK_IMPORTED_MODULE_3___default.a.defaults(_this.panel, _examples__WEBPACK_IMPORTED_MODULE_7__["examples"][0].config);

    $scope.$on('$destroy', function () {
      if (_this.objectURL) {
        URL.revokeObjectURL(_this.objectURL);
      }
    });

    _this.events.on('data-received', _this.onDataReceived.bind(_this));

    _this.events.on('data-snapshot-load', _this.onDataSnapshotLoad.bind(_this));

    _this.events.on('data-error', _this.onDataError.bind(_this));

    _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));

    _this.events.on('panel-initialized', _this.onPanelInitalized.bind(_this));

    _this.events.on('render', _this.notifyWhenRenderingCompleted.bind(_this));

    return _this;
  }

  AjaxCtrl.prototype.onDataSnapshotLoad = function (snapshotData) {
    this.onDataReceived(snapshotData);
  };

  AjaxCtrl.prototype.onDataError = function (err) {
    console.log('onDataError', err);
  }; // Having this function pust ths query sidebar on


  AjaxCtrl.prototype.onDataReceived = function (dataList) {
    this.process(dataList);
    this.loading = false;
  }; // This checks that all requests have completed before saying


  AjaxCtrl.prototype.notifyWhenRenderingCompleted = function () {
    var _this = this;

    if (this.timer) {
      this.$timeout.cancel(this.timer);
    }

    if (this.requestCount > 0) {
      var requestID_1 = this.requestCount;
      this.timer = this.$timeout(function () {
        _this.timer = undefined;

        if (_this.requestCount !== requestID_1) {
          return;
        } // If it is still loading... try again


        if (_this.loading) {
          _this.notifyWhenRenderingCompleted();
        } else {
          _this.renderingCompleted();
        }
      }, 100);
    }
  }; // Expose the examples to Angular


  AjaxCtrl.prototype.getStaticExamples = function () {
    return _examples__WEBPACK_IMPORTED_MODULE_7__["examples"];
  };

  AjaxCtrl.prototype.isUsingMetricQuery = function () {
    return this.panel.request.startsWith('query');
  };

  AjaxCtrl.prototype.loadExample = function (example, evt) {
    var _this = this;

    if (evt) {
      evt.stopPropagation();
      evt.preventDefault();
    }

    console.log('Loading example', example);
    var first = _examples__WEBPACK_IMPORTED_MODULE_7__["examples"][0].config;

    lodash__WEBPACK_IMPORTED_MODULE_3___default.a.forEach(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.keys(first), function (k) {
      delete _this.panel[k];
    });

    lodash__WEBPACK_IMPORTED_MODULE_3___default.a.defaults(this.panel, example.config);

    lodash__WEBPACK_IMPORTED_MODULE_3___default.a.defaults(this.panel, first);

    jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).scrollTop(0);
    grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_4___default.a.emit('dash-scroll', {
      animate: false,
      evt: 0
    });
    this.$rootScope.appEvent('alert-success', ['Loaded Example Configuraiton', example.name]);

    if (example.editorTabIndex) {
      this.editorTabIndex = example.editorTabIndex;
    } else {
      this.editorTabIndex = 1;
    }

    this.$scope.response = undefined;
    this.updateFN();
    this.updateTemplate();
    this.refresh();
  };

  AjaxCtrl.prototype.getCurrentParams = function (scopedVars) {
    var params = {};

    if (this.paramsFn) {
      params = this.paramsFn(this);
    } // if(false) {
    //   this.templateSrv.fillVariableValuesForUrl(params, scopedVars);
    // }


    return params;
  }; // This is called from Javascript


  AjaxCtrl.prototype.template = function (v) {
    if (v) {
      return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__["getTemplateSrv"])().replace(v, this.scopedVars);
    }

    return null;
  };

  AjaxCtrl.prototype.getHeaders = function (scopedVars) {
    if (this.headerFn) {
      return this.headerFn(this);
    }

    return undefined;
  };

  AjaxCtrl.prototype._getURL = function (scopedVars) {
    var url = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__["getTemplateSrv"])().replace(this.panel.url, scopedVars);
    var params = this.getCurrentParams();

    if (params) {
      var p = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.param(params);

      if (p) {
        var hasArgs = url.indexOf('?') > 0;
        url = url + (hasArgs ? '&' : '?') + p;
      }
    }

    if (this.panel.request === 'datasource' && this.dsInfo) {
      return this.dsInfo.baseURL + url;
    }

    return url;
  };
  /**
   * @override
   */


  AjaxCtrl.prototype.updateTimeRange = function (datasource) {
    var before = this.timeInfo;

    var v = _super.prototype.updateTimeRange.call(this);

    if (this.panel.showTime && before) {
      this.timeInfo = before;
    }

    return v;
  };
  /**
   * Rather than issue a datasource query, we will call our ajax request
   * @override
   */


  AjaxCtrl.prototype.issueQueries = function (datasource) {
    var _this = this;

    if (this.isUsingMetricQuery()) {
      return _super.prototype.issueQueries.call(this, datasource);
    }

    var templateSrv = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__["getTemplateSrv"])();
    this.datasource = datasource;

    if (this.fnError) {
      this.loading = false;
      this.error = this.fnError;
      return null;
    } // make shallow copy of scoped vars,
    // and add built in variables interval and interval_ms


    var scopedVars = this.scopedVars = Object.assign({}, this.panel.scopedVars, {
      __interval: {
        text: this.interval,
        value: this.interval
      },
      __interval_ms: {
        text: this.intervalMs,
        value: this.intervalMs
      }
    }); // This lets us see the parameters in the editor

    if (this.debugParams) {
      this.debugParams = {};

      lodash__WEBPACK_IMPORTED_MODULE_3___default.a.each(scopedVars, function (v, k) {
        _this.debugParams[k] = v.text;
      });

      lodash__WEBPACK_IMPORTED_MODULE_3___default.a.each(templateSrv.getVariables(), function (v) {
        _this.debugParams[v.name] = v.getValueForUrl();
      });
    }

    var src = this._getURL(scopedVars);

    if (this.panel.skipSameURL && src === this.lastURL) {
      this.loading = false;
      return null;
    }

    this.lastURL = src;
    this.error = null; // remove the error

    var sent = Date.now();

    if (this.isIframe) {
      this.$scope.url = this.$sce.trustAsResourceUrl(src); // Its not an image, so remove it

      if (this.objectURL) {
        this.img.css('display', 'none');
        URL.revokeObjectURL(this.objectURL);
        this.objectURL = null;
      } // Force re-render


      this.$scope.$apply();
      return;
    } else {
      var url_1 = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__["getTemplateSrv"])().replace(this.panel.url, scopedVars);
      var params = this.getCurrentParams();
      var options_1 = {
        method: this.panel.method,
        url: url_1,
        params: params,
        headers: this.getHeaders(),
        withCredentials: this.panel.withCredentials
      };
      options_1.headers = options_1.headers || {}; // For images and response buffers!

      if (this.panel.responseType) {
        options_1.responseType = this.panel.responseType;
      }

      var helper = Promise.resolve({});

      if (this.panel.request === 'datasource') {
        helper = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__["getDataSourceSrv"])().get(this.panel.datasource).then(function (ds) {
          console.log('DDDD', ds, _this);

          if (ds) {
            _this.dsInfo = new _types__WEBPACK_IMPORTED_MODULE_6__["DSInfo"](ds); // Change the URL

            if (_this.dsInfo.basicAuth || _this.dsInfo.withCredentials) {
              options_1.withCredentials = true;
            }

            if (_this.dsInfo.basicAuth) {
              options_1.headers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options_1.headers), {
                Authorization: _this.dsInfo.basicAuth
              });
            }

            options_1.url = _this.dsInfo.baseURL + url_1;
          } else {
            // @ts-ignore
            _this.dsInfo = null;
          }
        });
      } else if (!options_1.url) {
        this.error = 'Missing URL';
        this.showError(this.error, null);
        return;
      } else if (options_1.url.indexOf('://') < 0 && options_1.url.indexOf('api/') < 0) {
        this.error = 'Invalid URL: ' + options_1.url;
        this.showError(this.error, params);
        return;
      } // Now make the call


      this.requestCount++;
      this.loading = true;
      helper.then(function () {
        Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__["getBackendSrv"])().fetch(options_1).subscribe({
          next: function next(rsp) {
            _this.lastRequestTime = sent;

            _this.process(rsp);

            _this.loading = false;
          },
          error: function error(err) {
            console.log('ERR', err);
            _this.lastRequestTime = sent;
            _this.loading = false;
            _this.error = err; //.data.error + " ["+err.status+"]";

            _this.inspector = {
              error: err
            };

            _this.showError('Request Error', err);
          }
        });
      });
    } // Return empty results


    return null; //this.$q.when( [] );
  }; // Overrides the default handling (error for null result)


  AjaxCtrl.prototype.handleQueryResult = function (result) {
    this.loading = false;

    if (result) {
      if (this.isUsingMetricQuery()) {
        return _super.prototype.handleQueryResult.call(this, result);
      }
    }

    this.render();
  };

  AjaxCtrl.prototype.onPanelInitalized = function () {
    var _this = this;

    this.updateFN();
    this.updateTemplate();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).on('resize', lodash__WEBPACK_IMPORTED_MODULE_3___default.a.debounce(function (fn) {
      _this.refresh();
    }, 250));
  };

  AjaxCtrl.prototype.onConfigChanged = function () {
    this.lastURL = undefined;
    this.refresh();
  };

  AjaxCtrl.prototype.onInitEditMode = function () {
    this.debugParams = {};
    this.addEditorTab('Request', 'public/plugins/' + this.pluginId + '/partials/editor.request.html', 2);
    this.addEditorTab('Display', 'public/plugins/' + this.pluginId + '/partials/editor.display.html', 3);
    this.addEditorTab('Examples', 'public/plugins/' + this.pluginId + '/partials/editor.examples.html', 5);
    this.editorTabIndex = 2;
    this.updateFN();
  };

  AjaxCtrl.prototype.updateFN = function () {
    this.fnError = null;
    this.paramsFn = undefined;

    if (this.panel.params_js) {
      try {
        this.paramsFn = new Function('ctrl', 'return ' + this.panel.params_js);
      } catch (ex) {
        console.warn('error parsing params_js', this.panel.params_js, ex);
        this.paramsFn = undefined;
        this.fnError = ex;
      }
    }

    if (this.panel.header_js) {
      try {
        this.headerFn = new Function('ctrl', 'return ' + this.panel.header_js);
      } catch (ex) {
        console.warn('error parsing header_js', this.panel.header_js, ex);
        this.headerFn = undefined;
        this.fnError = ex;
      }
    }

    this.onConfigChanged();
  };

  AjaxCtrl.prototype.updateTemplate = function () {
    var txt = '';
    this.isIframe = this.panel.method === 'iframe';

    if (this.panel.mode === _types__WEBPACK_IMPORTED_MODULE_6__["RenderMode"].template) {
      if (!this.panel.template) {
        this.panel.template = '<pre>{{ response }}</pre>';
      }

      txt = this.panel.template;
    } else {
      delete this.panel.template;

      if (this.isIframe) {
        txt = '<iframe \
          frameborder="0" \
          width="100%"  \
          height="100%" \
          ng-src="{{ url }}" \
          ng-if="ctrl.panel.method === \'iframe\'"></iframe>';
      } else {
        if (!this.panel.mode) {
          this.panel.mode = _types__WEBPACK_IMPORTED_MODULE_6__["RenderMode"].html;
        }

        var mode = this.panel.mode;

        if (mode === _types__WEBPACK_IMPORTED_MODULE_6__["RenderMode"].html && this.isUsingMetricQuery()) {
          mode = _types__WEBPACK_IMPORTED_MODULE_6__["RenderMode"].pre; // don't show [object object]!
        }

        switch (mode) {
          case _types__WEBPACK_IMPORTED_MODULE_6__["RenderMode"].html:
            txt = '<div ng-bind-html="response"></div>';
            break;

          case _types__WEBPACK_IMPORTED_MODULE_6__["RenderMode"].text:
            txt = '{{ response }}';
            break;

          case _types__WEBPACK_IMPORTED_MODULE_6__["RenderMode"].pre:
            txt = '<pre>{{ response }}</pre>';
            break;

          case _types__WEBPACK_IMPORTED_MODULE_6__["RenderMode"].json:
            txt = '<json-tree root-name="sub" object="response" start-expanded="true"></json-tree>';
            break;

          case _types__WEBPACK_IMPORTED_MODULE_6__["RenderMode"].image:
            txt = '';
            break;

          default:
            console.warn('Unsupported render mode:', this.panel.mode);
        }
      }
    } //console.log('UPDATE template', this.panel, txt);


    if (txt) {
      /*console.log("Txt : ");
      console.log(txt);*/
      this.ngtemplate.html(txt);
      this.ngtemplate.css('display', 'block');
      /*console.log("Html content : ");
      console.log(this.ngtemplate.html());*/

      /*console.log("ngtemplate :");
      console.log(this.ngtemplate);*/

      this.$compile(this.ngtemplate.contents())(this.$scope);
    } else {
      this.ngtemplate.css('display', 'none');
    }

    if (this.$scope.response) {
      this.render();
    }
  };

  AjaxCtrl.prototype.showError = function (msg, err) {
    this.timeInfo = null;

    if (this.objectURL) {
      this.img.css('display', 'none');
      URL.revokeObjectURL(this.objectURL);
      this.objectURL = null;
    }

    var txt = "<h1>" + msg + "</h1>";

    if (err && this.panel.showErrors) {
      txt += '<pre>' + JSON.stringify(err) + '</pre>';
    } else {
      txt += '<pre>Something went wrong while executing your request.</pre>';
    }

    this.ngtemplate.html(txt);
    this.$compile(this.ngtemplate.contents())(this.$scope);

    if (this.$scope.response) {
      this.render();
    }
  };

  AjaxCtrl.prototype.process = function (rsp) {
    if (this.panel.showTime) {
      var txt = this.panel.showTimePrefix ? this.panel.showTimePrefix : '';

      if (this.panel.showTimeValue) {
        var when = undefined;

        if ('request' === this.panel.showTimeValue) {
          when = this.lastRequestTime;
        } else if ('recieve' === this.panel.showTimeValue) {
          when = Date.now(); // } else if (this.panel.showTimeValue.startsWith('header-')) {
          //   const h = this.panel.showTimeValue.substring('header-'.length);
          //   const v = rsp.headers[h];
          //   if (v) {
          //     console.log('TODO, parse header', v, h);
          //   } else {
          //     const vals: any = {};
          //     for (const key in rsp.headers()) {
          //       vals[key] = rsp.headers[key];
          //     }
          //     console.log('Header:', h, 'not found in:', vals, rsp);
          //   }
        }

        if (when) {
          txt += moment__WEBPACK_IMPORTED_MODULE_9___default()(when).format(this.panel.showTimeFormat);
        } else {
          txt += 'missing: ' + this.panel.showTimeValue;
        }
      }

      this.timeInfo = txt;
    } else {
      this.timeInfo = null;
    }

    if (!rsp) {
      return;
    }

    var contentType = rsp.headers.get('Content-Type');

    if (contentType) {
      if (contentType.startsWith('image/')) {
        var blob = new Blob([rsp.data], {
          type: contentType
        });
        var old = this.objectURL;
        this.objectURL = URL.createObjectURL(blob);
        this.img.attr('src', this.objectURL);

        if (old) {
          URL.revokeObjectURL(old);
        }

        this.img.css('display', 'block'); // If we get an image, change the display to image type

        if (this.panel.mode !== _types__WEBPACK_IMPORTED_MODULE_6__["RenderMode"].image) {
          this.panel.mode = _types__WEBPACK_IMPORTED_MODULE_6__["RenderMode"].image;
          this.updateTemplate();
        }

        return;
      }
    }
    /*****************************************************/


    this.$scope.response = this.$sce.trustAsHtml(rsp.data);
    /*****************************************************/

    console.log('GOT', rsp); // Its not an image, so remove it

    if (this.objectURL) {
      this.img.css('display', 'none');
      URL.revokeObjectURL(this.objectURL);
      this.objectURL = null;
    } // JSON Node needs to force refresh


    if (this.panel.mode === _types__WEBPACK_IMPORTED_MODULE_6__["RenderMode"].json) {
      this.updateTemplate();
    } // Force re-render


    this.$scope.$apply();
  };

  AjaxCtrl.prototype.openFullscreen = function () {
    var _this = this; // Update the image


    this.overlay.find('img').attr('src', this.objectURL);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.grafana-app').append(this.overlay);
    this.overlay.on('click', function () {
      _this.overlay.remove();
    });
  };

  AjaxCtrl.prototype.link = function (scope, elem, attrs, ctrl) {
    this.img = jquery__WEBPACK_IMPORTED_MODULE_2___default()(elem.find('img')[0]);
    this.ngtemplate = jquery__WEBPACK_IMPORTED_MODULE_2___default()(elem.find('.ngtemplate')[0]);
    this.overlay = jquery__WEBPACK_IMPORTED_MODULE_2___default()(elem.find('.ajaxmodal')[0]);
    this.overlay.remove();
    this.overlay.css('display', 'block');
    this.img.css('display', 'none');
  };

  AjaxCtrl.templateUrl = 'partials/module.html';
  AjaxCtrl.scrollable = true;
  return AjaxCtrl;
}(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__["MetricsPanelCtrl"]);



/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./style.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/*! exports provided: DSInfo, RenderMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DSInfo", function() { return DSInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderMode", function() { return RenderMode; });
var DSInfo =
/** @class */
function () {
  function DSInfo(ds) {
    this.isProxy = false;
    this.withCredentials = false;
    this.name = ds.name;

    if (ds.url) {
      this.baseURL = ds.url;
    } else if (ds.urls) {
      this.baseURL = ds.urls[0];
    } // @ts-ignore


    if (!this.baseURL) {
      this.baseURL = '';
    }

    this.isProxy = this.baseURL.startsWith('/api/');
    this.withCredentials = ds.withCredentials;
    this.basicAuth = ds.basicAuth;
  }

  return DSInfo;
}();

 // <option value="html">Direct HTML</option>
// <option value="text">Escaped Text</option>
// <option value="image">Image</option>
// <option value="json">JSON Tree</option>
// <option value="template">Angular Template</option>

var RenderMode;

(function (RenderMode) {
  RenderMode["html"] = "html";
  RenderMode["text"] = "text";
  RenderMode["pre"] = "pre";
  RenderMode["image"] = "image";
  RenderMode["json"] = "json";
  RenderMode["template"] = "template";
})(RenderMode || (RenderMode = {}));

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "grafana/app/core/app_events":
/*!**************************************!*\
  !*** external "app/core/app_events" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_app_events__;

/***/ }),

/***/ "grafana/app/plugins/sdk":
/*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map