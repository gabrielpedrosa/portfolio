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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; },\n/* harmony export */   \"Separator\": function() { return /* binding */ Separator; },\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Card\": function() { return /* binding */ Card; },\n/* harmony export */   \"Legend\": function() { return /* binding */ Legend; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"SectionComponents__Container\",\n  componentId: \"sc-hscb50-0\"\n})([\"margin:0;padding:0.5rem calc((100vw - 1000px) / 2);background-color:\", \";color:\", \";box-sizing:border-box;\"], function (props) {\n  return props.bgColor;\n}, function (props) {\n  return props.fontColor;\n});\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2.withConfig({\n  displayName: \"SectionComponents__Title\",\n  componentId: \"sc-hscb50-1\"\n})([\"margin:0;padding:20px 30px;font-size:\", \"px;color:\", \";\"], function (props) {\n  return props.fontSize;\n}, function (props) {\n  return props.fontColor;\n});\nvar Separator = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hr.withConfig({\n  displayName: \"SectionComponents__Separator\",\n  componentId: \"sc-hscb50-2\"\n})([\"width:100%;border:1px solid #fff;background:#fff;\"]);\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"SectionComponents__Content\",\n  componentId: \"sc-hscb50-3\"\n})([\"display:flex;width:80%;background-color:white;margin:0 auto;padding:30px;justify-content:space-between;flex-wrap:wrap;position:relative;@media(max-width:768px){flex-direction:column;}\"]);\nvar Card = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"SectionComponents__Card\",\n  componentId: \"sc-hscb50-4\"\n})([\"display:flex;background-color:#000;margin:10px 0;width:30%;min-width:30%;min-height:250px;border-radius:15px;@media(max-width:768px){width:100%;}\"]);\nvar Legend = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h3.withConfig({\n  displayName: \"SectionComponents__Legend\",\n  componentId: \"sc-hscb50-5\"\n})([\"position:absolute;text-align:center;bottom:10px;\"]);\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbkNvbXBvbmVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUdPLElBQU1DLFNBQVMsR0FBR0Qsd0VBQUg7QUFBQTtBQUFBO0FBQUEsbUhBR0UsVUFBQUcsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsT0FBVjtBQUFBLENBSFAsRUFJVCxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxTQUFWO0FBQUEsQ0FKSSxDQUFmO0FBVUEsSUFBTUMsS0FBSyxHQUFHTix1RUFBSDtBQUFBO0FBQUE7QUFBQSxnRUFHRCxVQUFBRyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDSyxRQUFWO0FBQUEsQ0FISixFQUlMLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLFNBQVY7QUFBQSxDQUpBLENBQVg7QUFPQSxJQUFNSSxTQUFTLEdBQUdULHVFQUFIO0FBQUE7QUFBQTtBQUFBLHlEQUFmO0FBTUEsSUFBTVcsT0FBTyxHQUFHWCx3RUFBSDtBQUFBO0FBQUE7QUFBQSwrTEFBYjtBQWVBLElBQU1ZLElBQUksR0FBR1osd0VBQUg7QUFBQTtBQUFBO0FBQUEseUpBQVY7QUFlQSxJQUFNYSxNQUFNLEdBQUdiLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHdEQUFaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VjdGlvbi9TZWN0aW9uQ29tcG9uZW50cy5qcz9mNGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gY2FsYygoMTAwdncgLSAxMDAwcHgpIC8gMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmJnQ29sb3J9O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuZm9udENvbG9yfTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMuZm9udFNpemV9cHg7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5mb250Q29sb3J9O1xyXG4gICAgYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXBhcmF0b3IgPSBzdHlsZWQuaHJgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgXHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMZWdlbmQgPSBzdHlsZWQuaDNgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbmA7Il0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsInByb3BzIiwiYmdDb2xvciIsImZvbnRDb2xvciIsIlRpdGxlIiwiaDIiLCJmb250U2l6ZSIsIlNlcGFyYXRvciIsImhyIiwiQ29udGVudCIsIkNhcmQiLCJMZWdlbmQiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Section/SectionComponents.js\n");

/***/ })

});