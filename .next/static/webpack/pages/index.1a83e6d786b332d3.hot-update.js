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

/***/ "./components/Section/SectionComponents.js":
/*!*************************************************!*\
  !*** ./components/Section/SectionComponents.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; },\n/* harmony export */   \"Separator\": function() { return /* binding */ Separator; },\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin: 0;\\n    padding: 0.5rem calc((100vw - 1000px) / 2);\\n    background-color: \",\n        \";\\n    color: \",\n        \"\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin: 0;\\n    padding: 20px 30px;\\n    font-size: \",\n        \"px;\\n    color: \",\n        \";\\n    \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 100%;\\n    border: 1px solid #fff;\\n    background: #fff;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: grid;\\n    grid-template-columns: repeat(4, 1fr);\\n    grid-gap: 10px;\\n    justify-items: center;\\n    padding: 0 2rem;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject(), function(props) {\n    return props.bgColor;\n}, function(props) {\n    return props.fontColor;\n});\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2(_templateObject1(), function(props) {\n    return props.fontSize;\n}, function(props) {\n    return props.fontColor;\n});\nvar Separator = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hr(_templateObject2());\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3());\nvar Card = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4());\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbkNvbXBvbmVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQzs7Ozs7Ozs7Ozs7OztRQUVGLENBR2Q7UUFBeUIsQ0FDcEM7UUFBMkIsQ0FDdEM7Ozs7Ozs7OztRQUUrQixDQUdoQjtRQUEwQixDQUM5QjtRQUEyQixDQUNsQzs7Ozs7Ozs7O1FBRStCLENBSW5DOzs7Ozs7Ozs7UUFFa0MsQ0FNbEM7Ozs7Ozs7OztRQUUrQixDQUUvQjs7Ozs7OztBQTlCTyxHQUFLLENBQUNDLFNBQVMsR0FBR0QsNkRBQVUsb0JBR1hHLFFBQVEsQ0FBUkEsS0FBSztJQUFJQSxNQUFNQyxDQUFORCxLQUFLLENBQUNDLE9BQU87R0FDakNELFFBQVEsQ0FBUkEsS0FBSztJQUFJQSxNQUFNRSxDQUFORixLQUFLLENBQUNFLFNBQVM7O0FBRzlCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHTiw0REFBUyxxQkFHYkcsUUFBUSxDQUFSQSxLQUFLO0lBQUlBLE1BQU1LLENBQU5MLEtBQUssQ0FBQ0ssUUFBUTtHQUMzQkwsUUFBUSxDQUFSQSxLQUFLO0lBQUlBLE1BQU1FLENBQU5GLEtBQUssQ0FBQ0UsU0FBUzs7QUFHOUIsR0FBSyxDQUFDSSxTQUFTLEdBQUdULDREQUFTO0FBTTNCLEdBQUssQ0FBQ1csT0FBTyxHQUFHWCw2REFBVTtBQVExQixHQUFLLENBQUNZLElBQUksR0FBR1osNkRBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9uL1NlY3Rpb25Db21wb25lbnRzLmpzP2Y0YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMC41cmVtIGNhbGMoKDEwMHZ3IC0gMTAwMHB4KSAvIDIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5iZ0NvbG9yfTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmZvbnRDb2xvcn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMmBcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy5mb250U2l6ZX1weDtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmZvbnRDb2xvcn07XHJcbiAgICBgO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlcGFyYXRvciA9IHN0eWxlZC5ocmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG5cclxuYDsiXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJiZ0NvbG9yIiwiZm9udENvbG9yIiwiVGl0bGUiLCJoMiIsImZvbnRTaXplIiwiU2VwYXJhdG9yIiwiaHIiLCJDb250ZW50IiwiQ2FyZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Section/SectionComponents.js\n");

/***/ })

});