/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection{\n    constructor(array){\n        this.array = array;\n\n    }\n\n    forEach(callback){\n        for(let i = 0; i < this.length; i++){\n            callback(this[i])\n        }\n    }\n\n    html(args) {\n        if (typeof args === 'string') {\n            this.forEach((el) => {\n                el.innerHTML = args;\n            });\n        } else if (this.array.length > 0) {\n            return this.array[0].innerHTML;\n        }\n    }\n\n    empty() {\n        this.html('');\n    }\n\n    append(args){\n        if (typeof args === 'string'){\n            debugger\n            this.array.forEach(el => {\n                el.innerHTML += args;\n            })\n        }\n\n        \n    }\n\n}\nmodule.exports = DOMNodeCollection\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const DomNode = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\")\n\nwindow.$l = $l; \nfunction $l(selector){\n    array = []\n    if (selector instanceof HTMLElement){\n        array.push(selector)\n        return new DomNode(array);\n    }\n    else {\n    const matches = document.querySelectorAll(selector);\n     matches.forEach(el => array.push(el));\n    \n     return new DomNode(array);\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;