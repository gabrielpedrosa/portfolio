"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navbar/index.js":
/*!************************************!*\
  !*** ./components/Navbar/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavComponents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavComponents.js */ \"./components/Navbar/NavComponents.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Navbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), click = ref[0], setClick = ref[1];\n    var handleClick = function() {\n        return setClick(!click);\n    };\n    var handleClickMobile = function() {\n        return setClickMobile(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Gabriel Pedrosa\\\\portfolio\\\\components\\\\Navbar\\\\index.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_NavComponents_js__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n            __source: {\n                fileName: \"C:\\\\Users\\\\Gabriel Pedrosa\\\\portfolio\\\\components\\\\Navbar\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavComponents_js__WEBPACK_IMPORTED_MODULE_2__.Logo, {\n                    route: \"/\",\n                    name: \"Gabriel Pedrosa\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Gabriel Pedrosa\\\\portfolio\\\\components\\\\Navbar\\\\index.js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Logo\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavComponents_js__WEBPACK_IMPORTED_MODULE_2__.Bar, {\n                    onClick: handleClick,\n                    click: click,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Gabriel Pedrosa\\\\portfolio\\\\components\\\\Navbar\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_NavComponents_js__WEBPACK_IMPORTED_MODULE_2__.MobileNav, {\n                    onClick: handleClickMobile,\n                    click: click,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Gabriel Pedrosa\\\\portfolio\\\\components\\\\Navbar\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavComponents_js__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                            route: \"/\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Gabriel Pedrosa\\\\portfolio\\\\components\\\\Navbar\\\\index.js\",\n                                lineNumber: 17,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"Projetos\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavComponents_js__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                            route: \"/page\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Gabriel Pedrosa\\\\portfolio\\\\components\\\\Navbar\\\\index.js\",\n                                lineNumber: 18,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"Contato\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavComponents_js__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                            route: \"/sobre\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Gabriel Pedrosa\\\\portfolio\\\\components\\\\Navbar\\\\index.js\",\n                                lineNumber: 19,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"Sobre\"\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_NavComponents_js__WEBPACK_IMPORTED_MODULE_2__.NavMenu, {\n                    onClick: handleClickMobile,\n                    click: click,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Gabriel Pedrosa\\\\portfolio\\\\components\\\\Navbar\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavComponents_js__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                            route: \"/\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Gabriel Pedrosa\\\\portfolio\\\\components\\\\Navbar\\\\index.js\",\n                                lineNumber: 22,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"Projetos\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavComponents_js__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                            route: \"/page\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Gabriel Pedrosa\\\\portfolio\\\\components\\\\Navbar\\\\index.js\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"Contato\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavComponents_js__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                            route: \"/sobre\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Gabriel Pedrosa\\\\portfolio\\\\components\\\\Navbar\\\\index.js\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"Sobre\"\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(Navbar, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUM4Qzs7O0FBRTlFLEdBQUssQ0FBQ08sTUFBTSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNsQixHQUFLLENBQXFCUCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFqQ1EsS0FBSyxHQUFjUixHQUFlLEtBQTNCUyxRQUFRLEdBQUlULEdBQWU7SUFFekMsR0FBSyxDQUFDVSxXQUFXLEdBQUcsUUFBUTtRQUFGRCxNQUFNLENBQU5BLFFBQVEsRUFBRUQsS0FBSzs7SUFDekMsR0FBSyxDQUFDRyxpQkFBaUIsR0FBRyxRQUFRO1FBQUZDLE1BQU0sQ0FBTkEsY0FBYyxDQUFDLEtBQUs7O0lBQ3BELE1BQU0sc0VBQ0RDLENBQUc7Ozs7Ozs7d0ZBQ0NaLGtEQUFHOzs7Ozs7OztxRkFDQ0ksbURBQUk7b0JBQUNTLEtBQUssRUFBQyxDQUFHO29CQUFDQyxJQUFJLEVBQUMsQ0FBaUI7Ozs7Ozs7OEJBQUMsQ0FFdkM7O3FGQUNDWixrREFBRztvQkFBQ2EsT0FBTyxFQUFFTixXQUFXO29CQUFFRixLQUFLLEVBQUVBLEtBQUs7Ozs7Ozs7O3NGQUN0Q0Ysd0RBQVM7b0JBQUNVLE9BQU8sRUFBRUwsaUJBQWlCO29CQUFFSCxLQUFLLEVBQUVBLEtBQUs7Ozs7Ozs7OzZGQUM5Q04sc0RBQU87NEJBQUNZLEtBQUssRUFBQyxDQUFHOzs7Ozs7O3NDQUFDLENBQVE7OzZGQUMxQlosc0RBQU87NEJBQUNZLEtBQUssRUFBQyxDQUFPOzs7Ozs7O3NDQUFDLENBQU87OzZGQUM3Qlosc0RBQU87NEJBQUNZLEtBQUssRUFBQyxDQUFROzs7Ozs7O3NDQUFDLENBQUs7Ozs7c0ZBRWhDVixzREFBTztvQkFBQ1ksT0FBTyxFQUFFTCxpQkFBaUI7b0JBQUVILEtBQUssRUFBRUEsS0FBSzs7Ozs7Ozs7NkZBQzVDTixzREFBTzs0QkFBQ1ksS0FBSyxFQUFDLENBQUc7Ozs7Ozs7c0NBQUMsQ0FBUTs7NkZBQzFCWixzREFBTzs0QkFBQ1ksS0FBSyxFQUFDLENBQU87Ozs7Ozs7c0NBQUMsQ0FBTzs7NkZBQzdCWixzREFBTzs0QkFBQ1ksS0FBSyxFQUFDLENBQVE7Ozs7Ozs7c0NBQUMsQ0FBSzs7Ozs7OztBQU1qRCxDQUFDO0dBMUJLUCxNQUFNO0tBQU5BLE1BQU07QUE0QlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcz9hOGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7TmF2LCBOYXZJdGVtLCBCYXIsIE5hdk1lbnUsIExvZ28sIE1vYmlsZU5hdn0gZnJvbSAnLi9OYXZDb21wb25lbnRzLmpzJ1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NsaWNrLCBzZXRDbGlja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiBzZXRDbGljayghY2xpY2spO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tNb2JpbGUgPSAoKSA9PiBzZXRDbGlja01vYmlsZShmYWxzZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgICAgICA8TG9nbyByb3V0ZT1cIi9cIiBuYW1lPVwiR2FicmllbCBQZWRyb3NhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nb1xyXG4gICAgICAgICAgICAgICAgPC9Mb2dvPlxyXG4gICAgICAgICAgICAgICAgPEJhciBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xpY2s9e2NsaWNrfS8+XHJcbiAgICAgICAgICAgICAgICA8TW9iaWxlTmF2IG9uQ2xpY2s9e2hhbmRsZUNsaWNrTW9iaWxlfSBjbGljaz17Y2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIHJvdXRlPVwiL1wiPlByb2pldG9zPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIHJvdXRlPVwiL3BhZ2VcIj5Db250YXRvPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIHJvdXRlPVwiL3NvYnJlXCI+U29icmU8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L01vYmlsZU5hdj5cclxuICAgICAgICAgICAgICAgIDxOYXZNZW51IG9uQ2xpY2s9e2hhbmRsZUNsaWNrTW9iaWxlfSBjbGljaz17Y2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIHJvdXRlPVwiL1wiPlByb2pldG9zPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIHJvdXRlPVwiL3BhZ2VcIj5Db250YXRvPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIHJvdXRlPVwiL3NvYnJlXCI+U29icmU8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L05hdk1lbnU+XHJcblxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk5hdiIsIk5hdkl0ZW0iLCJCYXIiLCJOYXZNZW51IiwiTG9nbyIsIk1vYmlsZU5hdiIsIk5hdmJhciIsImNsaWNrIiwic2V0Q2xpY2siLCJoYW5kbGVDbGljayIsImhhbmRsZUNsaWNrTW9iaWxlIiwic2V0Q2xpY2tNb2JpbGUiLCJkaXYiLCJyb3V0ZSIsIm5hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar/index.js\n");

/***/ })

});