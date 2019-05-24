webpackHotUpdate("commons",{

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.module.scss */ "./src/components/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/merhawighebreselassie/Documents/projects/personal-website/src/components/header.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();






var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      checked = _useState[0],
      setChecked = _useState[1];

  var onHandleChecked = function onHandleChecked(e) {
    setChecked(e.target.checked);
  };

  console.log(checked);
  var style = {
    headerHeight: {
      height: "calc(100vh - 65vh)"
    },
    navList: {
      opacity: "1"
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    style: checked ? style.headerHeight : {
      height: "8vh"
    },
    id: "foo",
    onScroll: function onScroll() {
      console.log("onscroll");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.flex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navList,
    style: checked ? style.navList : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navItem,
    to: "/#home",
    activeClassName: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.activeNavItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navItem,
    to: "#about",
    activeClassName: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.activeNavItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navItem,
    to: "/#portfolio",
    activeClassName: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.activeNavItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navItem,
    to: "/#contact",
    activeClassName: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.activeNavItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    name: "burger",
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.burger,
    type: "checkbox",
    onChange: onHandleChecked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }))));
};

var _default = Header;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "/Users/merhawighebreselassie/Documents/projects/personal-website/src/components/header.js");
  reactHotLoader.register(_default, "default", "/Users/merhawighebreselassie/Documents/projects/personal-website/src/components/header.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=commons.116fba4c9e74b1202c91.hot-update.js.map