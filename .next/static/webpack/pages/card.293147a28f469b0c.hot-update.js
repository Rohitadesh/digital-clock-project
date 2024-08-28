"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/card",{

/***/ "./src/pages/card.js":
/*!***************************!*\
  !*** ./src/pages/card.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_data_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/data.jpeg */ \"./public/data.jpeg\");\n/* harmony import */ var _public_pindata_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/pindata.jpeg */ \"./public/pindata.jpeg\");\n/* harmony import */ var _public_processed_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/processed.jpeg */ \"./public/processed.jpeg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction card() {\n    const cardsData = [\n        {\n            img: _public_data_jpeg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n            text: \"India\"\n        },\n        {\n            img: _public_pindata_jpeg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            text: \"London\"\n        },\n        {\n            img: _public_processed_jpeg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            text: \"Paris\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen border border-black flex flex-col justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-[23rem] w-[50rem] flex flex-row flex-wrap gap-4 justify-center items-center border border-green-600 rounded-md\",\n            children: cardsData.map((e, i)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative rounded-md h-[15rem] w-[10rem] border  rounded-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: e.img,\n                                className: \"object-fill h-full w-full group-hover:opacity-50   ease-in-out \"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/git2/digital-clock-project/src/pages/card.js\",\n                                lineNumber: 20,\n                                columnNumber: 37\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"absolute top-24 text-transparent left-16 groupgroup-hover:text-black flex justify-center items-center\",\n                                children: e.text\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/git2/digital-clock-project/src/pages/card.js\",\n                                lineNumber: 22,\n                                columnNumber: 33\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lenovo/Desktop/git2/digital-clock-project/src/pages/card.js\",\n                        lineNumber: 19,\n                        columnNumber: 33\n                    }, this)\n                }, i, false, {\n                    fileName: \"/home/lenovo/Desktop/git2/digital-clock-project/src/pages/card.js\",\n                    lineNumber: 18,\n                    columnNumber: 29\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/home/lenovo/Desktop/git2/digital-clock-project/src/pages/card.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/lenovo/Desktop/git2/digital-clock-project/src/pages/card.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (card);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDRztBQUNHO0FBRW5CO0FBQzlCLFNBQVNJO0lBR0wsTUFBTUMsWUFBVTtRQUFDO1lBQUNDLEtBQUlOLHlEQUFNQTtZQUFDTyxNQUFLO1FBQU87UUFBRTtZQUFDRCxLQUFJTCw0REFBTUE7WUFBQ00sTUFBSztRQUFRO1FBQUU7WUFBQ0QsS0FBSUosOERBQU1BO1lBQUNLLE1BQUs7UUFBTztLQUFFO0lBQ2hHLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUVQSixVQUFVSyxHQUFHLENBQUMsQ0FBQ0MsR0FBRUM7Z0JBR2IscUJBQ0ksOERBQUNKO29CQUFZQyxXQUFVOzhCQUNuQiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDTixtREFBS0E7Z0NBQUVVLEtBQUtGLEVBQUVMLEdBQUc7Z0NBQUVHLFdBQVU7Ozs7OzswQ0FFbEMsOERBQUNLO2dDQUFHTCxXQUFVOzBDQUF5R0UsRUFBRUosSUFBSTs7Ozs7Ozs7Ozs7O21CQUp2SEs7Ozs7O1lBUWxCOzs7Ozs7Ozs7OztBQU1wQjtBQUdBLCtEQUFlUixJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jYXJkLmpzPzJkZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltYWdlMSBmcm9tIFwiLi4vLi4vcHVibGljL2RhdGEuanBlZ1wiXG5pbXBvcnQgaW1hZ2UyIGZyb20gXCIuLi8uLi9wdWJsaWMvcGluZGF0YS5qcGVnXCJcbmltcG9ydCBpbWFnZTMgIGZyb20gXCIuLi8uLi9wdWJsaWMvcHJvY2Vzc2VkLmpwZWdcIlxuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuZnVuY3Rpb24gY2FyZCgpe1xuXG5cbiAgICBjb25zdCBjYXJkc0RhdGE9W3tpbWc6aW1hZ2UxLHRleHQ6XCJJbmRpYVwifSx7aW1nOmltYWdlMix0ZXh0OlwiTG9uZG9uXCJ9LHtpbWc6aW1hZ2UzLHRleHQ6XCJQYXJpc1wifV1cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gYm9yZGVyIGJvcmRlci1ibGFjayBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsyM3JlbV0gdy1bNTByZW1dIGZsZXggZmxleC1yb3cgZmxleC13cmFwIGdhcC00IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXIgYm9yZGVyLWdyZWVuLTYwMCByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXJkc0RhdGEubWFwKChlLGkpPT57XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtbWQgaC1bMTVyZW1dIHctWzEwcmVtXSBib3JkZXIgIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSAgc3JjPXtlLmltZ30gY2xhc3NOYW1lPVwib2JqZWN0LWZpbGwgaC1mdWxsIHctZnVsbCBncm91cC1ob3ZlcjpvcGFjaXR5LTUwICAgZWFzZS1pbi1vdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjQgdGV4dC10cmFuc3BhcmVudCBsZWZ0LTE2IGdyb3VwZ3JvdXAtaG92ZXI6dGV4dC1ibGFjayBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPntlLnRleHR9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNhcmQiXSwibmFtZXMiOlsiaW1hZ2UxIiwiaW1hZ2UyIiwiaW1hZ2UzIiwiSW1hZ2UiLCJjYXJkIiwiY2FyZHNEYXRhIiwiaW1nIiwidGV4dCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImUiLCJpIiwic3JjIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/card.js\n"));

/***/ })

});