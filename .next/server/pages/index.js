(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");

var _jsxFileName = "D:\\New-Portfolio-Website\\src\\components\\Acomplishments\\Acomplishments.js";



const data = [{
  number: 20,
  text: 'Open Source Projects'
}, {
  number: 1000,
  text: 'Students'
}, {
  number: 1900,
  text: 'Github Followers'
}, {
  number: 5000,
  text: 'Github Stars'
}];

const Acomplishments = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: "Acomplishments"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

/***/ }),

/***/ "./src/components/Acomplishments/AcomplishmentsStyles.js":
/*!***************************************************************!*\
  !*** ./src/components/Acomplishments/AcomplishmentsStyles.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boxes": function() { return /* binding */ Boxes; },
/* harmony export */   "Box": function() { return /* binding */ Box; },
/* harmony export */   "BoxNum": function() { return /* binding */ BoxNum; },
/* harmony export */   "BoxText": function() { return /* binding */ BoxText; },
/* harmony export */   "Join": function() { return /* binding */ Join; },
/* harmony export */   "JoinText": function() { return /* binding */ JoinText; },
/* harmony export */   "IconContainer": function() { return /* binding */ IconContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Boxes = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Boxes",
  componentId: "vuq5bz-0"
})(["width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin:24px 0 40px;@media ", "{gap:16px;margin:20px 0 32px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));}@media ", "{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:500px;margin:24px auto;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Box",
  componentId: "vuq5bz-1"
})(["background:#212D45;border-radius:12px;height:144px;padding:24px;@media ", "{height:210px;}@media ", "{height:135px;padding:16px;}@media ", "{height:110px;padding:12px;&:nth-child(2n){grid-row:2;}}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const BoxNum = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5.withConfig({
  displayName: "AcomplishmentsStyles__BoxNum",
  componentId: "vuq5bz-2"
})(["font-style:normal;font-weight:600;font-size:36px;line-height:40px;letter-spacing:0.01em;color:#FFFFFF;margin-bottom:8px;@media ", "{font-size:28px;line-height:32px;}@media ", "{font-size:24px;line-height:26px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const BoxText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "AcomplishmentsStyles__BoxText",
  componentId: "vuq5bz-3"
})(["font-style:normal;font-weight:normal;font-size:18px;line-height:24px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:20px;};@media ", "{font-size:10px;line-height:14px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Join = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Join",
  componentId: "vuq5bz-4"
})(["display:flex;max-width:1040px;justify-content:center;align-items:center;padding-bottom:80px;@media ", "{display:flex;justify-content:center;padding-bottom:64px;}@media ", "{display:flex;flex-direction:column;align-items:center;padding-bottom:32px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const JoinText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5.withConfig({
  displayName: "AcomplishmentsStyles__JoinText",
  componentId: "vuq5bz-5"
})(["display:flex;font-size:24px;line-height:40px;letter-spacing:0.02em;color:rgba(255,255,255,0.5);@media ", "{line-height:32px;font-size:20px;};@media ", "{font-size:16px;line-height:24px;margin:0 0 16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__IconContainer",
  componentId: "vuq5bz-6"
})(["display:flex;@media ", "{width:160px;justify-content:space-between;}"], props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/BackgrooundAnimation/BackgroundAnimation.js":
/*!********************************************************************!*\
  !*** ./src/components/BackgrooundAnimation/BackgroundAnimation.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\New-Portfolio-Website\\src\\components\\BackgrooundAnimation\\BackgroundAnimation.js";


const BackgroundAnimation = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    className: "BgAnimation__svg",
    viewBox: "0 0 602 602",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      opacity: "0.15",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",
        stroke: "url(#paint0_radial)",
        id: "path_0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",
        stroke: "url(#paint1_radial)",
        id: "path_1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",
        stroke: "url(#paint2_radial)",
        id: "path_2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#945DD6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint3_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#945DD6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint4_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "382.164",
      cy: "155.029",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M381.81 154.669L356.057 128.885",
      transform: "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
      stroke: "url(#paint5_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "333.324",
      cy: "382.691",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M333.667 382.335L359.42 356.551",
      transform: "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
      stroke: "url(#paint6_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "165.524",
      cy: "93.9596",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-165.524 -93.9596)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M165.182 94.3159L139.429 120.1",
      transform: "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#13ADC7",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint11_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint0_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint1_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint2_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint3_linear",
        x1: "295.043",
        y1: "193.116",
        x2: "269.975",
        y2: "218.154",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint4_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint5_linear",
        x1: "382.168",
        y1: "155.027",
        x2: "357.1",
        y2: "129.989",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint6_linear",
        x1: "333.309",
        y1: "382.693",
        x2: "358.376",
        y2: "357.655",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint7_linear",
        x1: "165.54",
        y1: "93.9578",
        x2: "140.472",
        y2: "118.996",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint8_linear",
        x1: "414.367",
        y1: "301.156",
        x2: "439.435",
        y2: "276.118",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint9_linear",
        x1: "515.943",
        y1: "288.238",
        x2: "541.339",
        y2: "291.454",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint10_linear",
        x1: "117.001",
        y1: "230.619",
        x2: "117.36",
        y2: "258.193",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint11_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (BackgroundAnimation);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/HeaderStyles */ "./src/components/Header/HeaderStyles.js");
/* harmony import */ var _FooterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterStyles */ "./src/components/Footer/FooterStyles.js");

var _jsxFileName = "D:\\New-Portfolio-Website\\src\\components\\Footer\\Footer.js";





const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Footer"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/FooterStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Footer/FooterStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterWrapper": function() { return /* binding */ FooterWrapper; },
/* harmony export */   "LinkItem": function() { return /* binding */ LinkItem; },
/* harmony export */   "SocialIconsContainer": function() { return /* binding */ SocialIconsContainer; },
/* harmony export */   "CompanyContainer": function() { return /* binding */ CompanyContainer; },
/* harmony export */   "Slogan": function() { return /* binding */ Slogan; },
/* harmony export */   "SocialContainer": function() { return /* binding */ SocialContainer; },
/* harmony export */   "LinkList": function() { return /* binding */ LinkList; },
/* harmony export */   "LinkColumn": function() { return /* binding */ LinkColumn; },
/* harmony export */   "LinkTitle": function() { return /* binding */ LinkTitle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "FooterStyles__FooterWrapper",
  componentId: "sc-1ifsifd-0"
})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ", "{padding:0 16px 48px;width:calc(100vw - 32px);}"], props => props.theme.breakpoints.sm);
const LinkItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "FooterStyles__LinkItem",
  componentId: "sc-1ifsifd-1"
})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ", "{font-size:16px;line-height:28px;display:flex;}@media ", "{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialIconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__SocialIconsContainer",
  componentId: "sc-1ifsifd-2"
})(["max-width:1040px;display:flex;justify-content:space-between;@media ", "{display:flex;justify-content:space-between;}@media ", "{display:flex;width:100%;flex-direction:column;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__CompanyContainer",
  componentId: "sc-1ifsifd-3"
})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ", "{flex-direction:column;align-items:baseline;}@media ", "{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Slogan = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "FooterStyles__Slogan",
  componentId: "sc-1ifsifd-4"
})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ", "{font-size:16px;line-height:28px;}@media ", "{line-height:22px;font-size:14px;min-width:100px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__SocialContainer",
  componentId: "sc-1ifsifd-5"
})(["display:flex;align-items:center;@media ", "{justify-content:center;padding-right:16px;flex-wrap:wrap;}"], props => props.theme.breakpoints.md);
const LinkList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "FooterStyles__LinkList",
  componentId: "sc-1ifsifd-6"
})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ", "{padding:32px 0 16px;}@media ", "{width:100%;padding:32px 0 16px;gap:16px;}@media ", "{width:100%;padding:32px 4px 16px;gap:5px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const LinkColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__LinkColumn",
  componentId: "sc-1ifsifd-7"
})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]);
const LinkTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "FooterStyles__LinkTitle",
  componentId: "sc-1ifsifd-8"
})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ", "{font-size:10px;line-height:12px;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HeaderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderStyles */ "./src/components/Header/HeaderStyles.js");

var _jsxFileName = "D:\\New-Portfolio-Website\\src\\components\\Header\\Header.js";






const Header = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: "Header"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/HeaderStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Div1": function() { return /* binding */ Div1; },
/* harmony export */   "Div2": function() { return /* binding */ Div2; },
/* harmony export */   "Div3": function() { return /* binding */ Div3; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavProductsIcon": function() { return /* binding */ NavProductsIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-9w0vkp-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"], props => props.theme.breakpoints.sm);
const Div1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div1",
  componentId: "sc-9w0vkp-1"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ", "{grid-area:1 / 1 / 2 / 3;}"], props => props.theme.breakpoints.sm);
const Div2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div2",
  componentId: "sc-9w0vkp-2"
})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ", "{grid-area:2 / 2 / 3 / 5;}"], props => props.theme.breakpoints.sm);
const Div3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div3",
  componentId: "sc-9w0vkp-3"
})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ", "{align-items:center;grid-area:1 / 4 / 2 / 6;}"], props => props.theme.breakpoints.sm); // Navigation Links

const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "HeaderStyles__NavLink",
  componentId: "sc-9w0vkp-4"
})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;}"], props => props.theme.breakpoints.sm); /// DropDown Contact

const ContactDropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "HeaderStyles__ContactDropDown",
  componentId: "sc-9w0vkp-5"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);
const NavProductsIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown).withConfig({
  displayName: "HeaderStyles__NavProductsIcon",
  componentId: "sc-9w0vkp-6"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], ({
  isOpen
}) => isOpen ? '1' : '.75', ({
  isOpen
}) => isOpen ? 'scaleY(-1)' : 'scaleY(1)', props => props.theme.breakpoints.sm); // Social Icons 

const SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "HeaderStyles__SocialIcons",
  componentId: "sc-9w0vkp-7"
})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"]);

/***/ }),

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");

var _jsxFileName = "D:\\New-Portfolio-Website\\src\\components\\Hero\\Hero.js";





const Hero = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: "Hero"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Hero/HeroStyles.js":
/*!*******************************************!*\
  !*** ./src/components/Hero/HeroStyles.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftSection": function() { return /* binding */ LeftSection; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LeftSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroStyles__LeftSection",
  componentId: "pbjia3-0"
})(["width:100%;@media ", "{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ", "{width:100%;display:flex;flex-direction:column;margin:0 auto;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");

var _jsxFileName = "D:\\New-Portfolio-Website\\src\\components\\Projects\\Projects.js";





const Projects = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: "Projects"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "l76idc-0"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]);
const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "l76idc-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], props => props.theme.breakpoints.sm);
const BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "l76idc-2"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media ", "{width:100%;}"], props => props.theme.breakpoints.sm);
const TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "l76idc-3"
})(["text-align:center;z-index:20;width:100%;"]);
const HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "l76idc-4"
})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;font-size:", ";"], props => props.title ? '3rem' : '2rem');
const Hr = styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "l76idc-5"
})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]);
const Intro = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "l76idc-6"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]);
const CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "l76idc-7"
})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media ", "{padding:.3rem}"], props => props.theme.breakpoints.sm);
const UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "l76idc-8"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
const ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "l76idc-9"
})(["color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"]);
const TagList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "l76idc-10"
})(["display:flex;justify-content:space-around;padding:2rem;"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "l76idc-11"
})(["color:#d8bfbf;font-size:1.5rem;"]);

/***/ }),

/***/ "./src/components/Technologies/Technologies.js":
/*!*****************************************************!*\
  !*** ./src/components/Technologies/Technologies.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TechnologiesStyles */ "./src/components/Technologies/TechnologiesStyles.js");

var _jsxFileName = "D:\\New-Portfolio-Website\\src\\components\\Technologies\\Technologies.js";





const Technologies = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: "Technologies"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Technologies);

/***/ }),

/***/ "./src/components/Technologies/TechnologiesStyles.js":
/*!***********************************************************!*\
  !*** ./src/components/Technologies/TechnologiesStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageContainer": function() { return /* binding */ ImageContainer; },
/* harmony export */   "MainImage": function() { return /* binding */ MainImage; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "ListTitle": function() { return /* binding */ ListTitle; },
/* harmony export */   "ListParagraph": function() { return /* binding */ ListParagraph; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "ListIcon": function() { return /* binding */ ListIcon; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TechnologiesStyles__ImageContainer",
  componentId: "sc-1ehw0pq-0"
})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ", "{background-image:none;padding:0;margin-top:40px;}@media ", "{background-image:none;padding:0;margin-top:16px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md);
const MainImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TechnologiesStyles__MainImage",
  componentId: "sc-1ehw0pq-1"
})(["width:100%;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "TechnologiesStyles__List",
  componentId: "sc-1ehw0pq-2"
})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin:3rem 0;@media ", "{margin:64px 0;}@media ", "{margin:64px 0;gap:24px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TechnologiesStyles__ListContainer",
  componentId: "sc-1ehw0pq-3"
})(["display:flex;flex-direction:column;@media ", "{display:flex;margin-left:18px;}"], props => props.theme.breakpoints.sm);
const ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "TechnologiesStyles__ListTitle",
  componentId: "sc-1ehw0pq-4"
})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#FFFFFF;margin-bottom:8px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TechnologiesStyles__ListParagraph",
  componentId: "sc-1ehw0pq-5"
})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:28px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "TechnologiesStyles__ListItem",
  componentId: "sc-1ehw0pq-6"
})(["max-width:320px;display:flex;flex-direction:column;@media ", "{max-width:203px;}@media ", "{margin-bottom:14px;max-width:320px;flex-direction:row;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TechnologiesStyles__ListIcon",
  componentId: "sc-1ehw0pq-7"
})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ", "{width:40px;height:40px;margin-bottom:8px;}@media ", "{width:32px;height:32px;margin-bottom:0px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");

var _jsxFileName = "D:\\New-Portfolio-Website\\src\\components\\TimeLine\\TimeLine.js";




const TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();
  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }
  // const handleClick = (e, i) => {
  //   e.preventDefault();
  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }
  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);
  //     setActiveItem(index);
  //   }
  // }
  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }
  //   window.addEventListener('resize', handleResize);
  // }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Timeline"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./src/components/TimeLine/TimeLineStyles.js":
/*!***************************************************!*\
  !*** ./src/components/TimeLine/TimeLineStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselMobileScrollNode": function() { return /* binding */ CarouselMobileScrollNode; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "TimeLineStyles__CarouselContainer",
  componentId: "vs8qb6-0"
})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);
const CarouselMobileScrollNode = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselMobileScrollNode",
  componentId: "vs8qb6-1"
})(["@media ", "{display:flex;min-width:", "}"], props => props.theme.breakpoints.sm, ({
  final
}) => final ? `120%;` : `min-content`);
const CarouselItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselItem",
  componentId: "vs8qb6-2"
})(["background:#0F1624;border-radius:3px;max-width:196px;@media ", "{max-width:124px;}@media ", "{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;", ";}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.active === props.index ? `opacity: 1` : `opacity: 0.5`);
const CarouselItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "TimeLineStyles__CarouselItemTitle",
  componentId: "vs8qb6-3"
})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;}@media ", "{font-size:16px;line-height:24px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselItemImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "TimeLineStyles__CarouselItemImg",
  componentId: "vs8qb6-4"
})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ", "{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"], props => props.theme.breakpoints.sm);
const CarouselItemText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TimeLineStyles__CarouselItemText",
  componentId: "vs8qb6-5"
})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ", "{font-size:12px;line-height:18px;padding-right:32px;}@media ", "{font-size:10px;line-height:16px;padding-right:0;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselButtons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselButtons",
  componentId: "vs8qb6-6"
})(["width:288px;display:none;visibility:hidden;@media ", "{display:flex;visibility:visible;margin-bottom:48px;}"], props => props.theme.breakpoints.sm);
const CarouselButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "TimeLineStyles__CarouselButton",
  componentId: "vs8qb6-7"
})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:", ";transform:", ";&:focus{outline:none;}"], props => props.active === props.index ? `1` : `.33`, props => props.active === props.index ? `scale(1.6)` : `scale(1)`);
const CarouselButtonDot = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselButtonDot",
  componentId: "vs8qb6-8"
})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]);

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
const projects = [{
  title: 'MERN Memories',
  description: "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
  image: '/images/1.png',
  tags: ['Mongo', 'Express', 'React', 'Node'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 0
}, {
  title: 'E-Commerce',
  description: "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
  image: '/images/2.png',
  tags: ['React', 'JavaScript'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 1
}, {
  title: 'WebRTC App',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/3.jpg',
  tags: ['React', 'WebRTC'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 2
}, {
  title: 'Unichat',
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: '/images/4.jpg',
  tags: ['React', 'ChatEngine', 'Firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 3
}];
const TimeLineData = [{
  year: 2017,
  text: 'Started my journey'
}, {
  year: 2018,
  text: 'Worked as a freelance developer'
}, {
  year: 2019,
  text: 'Founded JavaScript Mastery'
}, {
  year: 2020,
  text: 'Shared my projects with the world'
}, {
  year: 2021,
  text: 'Started my own platform'
}];

/***/ }),

/***/ "./src/layout/Layout.js":
/*!******************************!*\
  !*** ./src/layout/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _LayoutStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayoutStyles */ "./src/layout/LayoutStyles.js");

var _jsxFileName = "D:\\New-Portfolio-Website\\src\\layout\\Layout.js";




const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LayoutStyles__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/layout/LayoutStyles.js":
/*!************************************!*\
  !*** ./src/layout/LayoutStyles.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LayoutStyles__Container",
  componentId: "mzu455-0"
})(["max-width:1280px;width:100%;margin:auto;"]);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Acomplishments/Acomplishments */ "./src/components/Acomplishments/Acomplishments.js");
/* harmony import */ var _components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BackgrooundAnimation/BackgroundAnimation */ "./src/components/BackgrooundAnimation/BackgroundAnimation.js");
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero/Hero */ "./src/components/Hero/Hero.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var _components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Technologies/Technologies */ "./src/components/Technologies/Technologies.js");
/* harmony import */ var _components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TimeLine/TimeLine */ "./src/components/TimeLine/TimeLine.js");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Layout */ "./src/layout/Layout.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "D:\\New-Portfolio-Website\\src\\pages\\index.js";









const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_7__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/styles/GlobalComponents/Button.js":
/*!***********************************************!*\
  !*** ./src/styles/GlobalComponents/Button.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "D:\\New-Portfolio-Website\\src\\styles\\GlobalComponents\\Button.js";



const Button = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonBack, {
  alt: props.alt,
  form: props.form,
  disabled: props.disabled,
  children: [props.children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonFront, {
    alt: props.alt,
    onClick: props.onClick,
    disabled: props.disabled,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], props => props.grid ? "grid" : "flex", props => props.row ? "row" : "column", props => props.nopadding ? "0" : "32px 48px 0", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.nopadding ? "0" : "16px 16px 0");
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], props => props.main ? '65px' : '56px', props => props.main ? '72px' : '56px', props => props.main ? '58px 0 16px' : '0', props => props.theme.breakpoints.md, props => props.main ? '56px' : '48px', props => props.main ? '56px' : '48px', props => props.main ? '40px 0 12px' : '0', props => props.theme.breakpoints.sm, props => props.main ? '28px' : '32px', props => props.main ? '32px' : '40px', props => props.main ? '16px 0 8px' : '0');
const SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-2"
})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-3"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], props => props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', props => props.divider ? "4rem 0" : "", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-4"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-5"
})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-6qzy6y-6"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], ({
  alt
}) => alt ? '150px' : '262px', ({
  alt
}) => alt ? '52px' : '64px', ({
  alt
}) => alt ? '20px' : '24px', ({
  alt,
  form
}) => alt || form ? '0' : '0 0 80px', ({
  alt
}) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)', ({
  disabled
}) => disabled ? '.5' : '1', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '150px' : '184px', ({
  alt
}) => alt ? '52px' : '48px', ({
  alt
}) => alt ? '20px' : '16px', ({
  alt
}) => alt ? '0' : '64px', props => props.theme.breakpoints.sm, ({
  alt
}) => alt ? '0' : '32px');
const ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-6qzy6y-7"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], ({
  alt
}) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', ({
  disabled
}) => disabled ? '.5' : '1', ({
  alt
}) => alt ? '20px' : '24px', ({
  disabled
}) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '20px' : '16px', props => props.theme.breakpoints.sm);
const LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-8"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], ({
  large
}) => large ? '24px' : '16px', props => props.theme.breakpoints.md, ({
  large
}) => large ? '16px' : '8px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '0' : '8px');
const LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-9"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], ({
  large
}) => large ? '32px' : '24px', props => props.theme.breakpoints.md, ({
  nav
}) => nav ? '16px' : '24px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '32px' : '16px');

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js-node_modules_react-icons_io_index_esm_js"], function() { return __webpack_exec__("./src/pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0Fjb21wbGlzaG1lbnRzL0Fjb21wbGlzaG1lbnRzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9CYWNrZ3Jvb3VuZEFuaW1hdGlvbi9CYWNrZ3JvdW5kQW5pbWF0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0hlcm8vSGVyb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2xheW91dC9MYXlvdXRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9pZ25vcmVkfEQ6XFxOZXctUG9ydGZvbGlvLVdlYnNpdGVcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJkYXRhIiwibnVtYmVyIiwidGV4dCIsIkFjb21wbGlzaG1lbnRzIiwiQm94ZXMiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJtZCIsInNtIiwiQm94IiwibGciLCJCb3hOdW0iLCJCb3hUZXh0IiwiSm9pbiIsIkpvaW5UZXh0IiwiSWNvbkNvbnRhaW5lciIsIkJhY2tncm91bmRBbmltYXRpb24iLCJGb290ZXIiLCJGb290ZXJXcmFwcGVyIiwiTGlua0l0ZW0iLCJTb2NpYWxJY29uc0NvbnRhaW5lciIsIkNvbXBhbnlDb250YWluZXIiLCJTbG9nYW4iLCJTb2NpYWxDb250YWluZXIiLCJMaW5rTGlzdCIsIkxpbmtDb2x1bW4iLCJMaW5rVGl0bGUiLCJIZWFkZXIiLCJDb250YWluZXIiLCJEaXYxIiwiRGl2MiIsIkRpdjMiLCJOYXZMaW5rIiwiQ29udGFjdERyb3BEb3duIiwiTmF2UHJvZHVjdHNJY29uIiwiSW9Jb3NBcnJvd0Ryb3Bkb3duIiwiaXNPcGVuIiwiU29jaWFsSWNvbnMiLCJIZXJvIiwiTGVmdFNlY3Rpb24iLCJQcm9qZWN0cyIsIkltZyIsIkdyaWRDb250YWluZXIiLCJCbG9nQ2FyZCIsIlRpdGxlQ29udGVudCIsIkhlYWRlclRocmVlIiwidGl0bGUiLCJIciIsIkludHJvIiwiQ2FyZEluZm8iLCJVdGlsaXR5TGlzdCIsIkV4dGVybmFsTGlua3MiLCJUYWdMaXN0IiwiVGFnIiwiVGVjaG5vbG9naWVzIiwiSW1hZ2VDb250YWluZXIiLCJNYWluSW1hZ2UiLCJMaXN0IiwiTGlzdENvbnRhaW5lciIsIkxpc3RUaXRsZSIsIkxpc3RQYXJhZ3JhcGgiLCJMaXN0SXRlbSIsIkxpc3RJY29uIiwiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJUaW1lTGluZURhdGEiLCJUaW1lbGluZSIsIkNhcm91c2VsQ29udGFpbmVyIiwiQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIiwiZmluYWwiLCJDYXJvdXNlbEl0ZW0iLCJhY3RpdmUiLCJpbmRleCIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiLCJwcm9qZWN0cyIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsInllYXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIkhvbWUiLCJCdXR0b24iLCJhbHQiLCJmb3JtIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiU2VjdGlvbiIsImdyaWQiLCJyb3ciLCJub3BhZGRpbmciLCJTZWN0aW9uVGl0bGUiLCJtYWluIiwiU2VjdGlvblRleHQiLCJTZWN0aW9uRGl2aWRlciIsImNvbG9yQWx0IiwiZGl2aWRlciIsIlNlY3Rpb25TdWJUZXh0IiwiU2Vjb25kYXJ5QnRuIiwiQnV0dG9uQmFjayIsIkJ1dHRvbkZyb250IiwiTGlua0NvbnRhaW5lciIsImxhcmdlIiwiTGlua0ljb25JbWciLCJuYXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUFFQyxRQUFNLEVBQUUsRUFBVjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEVyxFQUVYO0FBQUVELFFBQU0sRUFBRSxJQUFWO0FBQWdCQyxNQUFJLEVBQUU7QUFBdEIsQ0FGVyxFQUdYO0FBQUVELFFBQU0sRUFBRSxJQUFWO0FBQWdCQyxNQUFJLEVBQUU7QUFBdEIsQ0FI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Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IHsgQm94LCBCb3hlcywgQm94TnVtLCBCb3hUZXh0IH0gZnJvbSAnLi9BY29tcGxpc2htZW50c1N0eWxlcyc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHsgbnVtYmVyOiAyMCwgdGV4dDogJ09wZW4gU291cmNlIFByb2plY3RzJ30sXG4gIHsgbnVtYmVyOiAxMDAwLCB0ZXh0OiAnU3R1ZGVudHMnLCB9LFxuICB7IG51bWJlcjogMTkwMCwgdGV4dDogJ0dpdGh1YiBGb2xsb3dlcnMnLCB9LFxuICB7IG51bWJlcjogNTAwMCwgdGV4dDogJ0dpdGh1YiBTdGFycycsIH1cbl07XG5cbmNvbnN0IEFjb21wbGlzaG1lbnRzID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIEFjb21wbGlzaG1lbnRzXG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWNvbXBsaXNobWVudHM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5cbmV4cG9ydCBjb25zdCBCb3hlcyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDI0cHg7XG4gIG1hcmdpbjogMjRweCAwIDQwcHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGdhcDogMTZweDtcbiAgICBtYXJnaW46IDIwcHggMCAzMnB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDI0cHggYXV0bztcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzIxMkQ0NTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgaGVpZ2h0OiAxNDRweDtcbiAgcGFkZGluZzogMjRweDtcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9IHtcbiAgICBoZWlnaHQ6IDIxMHB4O1xuXG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGhlaWdodDogMTM1cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIFxuICAgICY6bnRoLWNoaWxkKDJuKXtcbiAgICAgIGdyaWQtcm93OjI7XG4gICAgfVxuICB9XG5gXG5leHBvcnQgY29uc3QgQm94TnVtID0gc3R5bGVkLmg1YFxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIH1cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5gXG5cbmV4cG9ydCBjb25zdCBCb3hUZXh0ID0gc3R5bGVkLnBgXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfTtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSm9pbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDY0cHg7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEpvaW5UZXh0ID0gc3R5bGVkLmg1YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG59O1xuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG59XG5gXG5cbmV4cG9ydCBjb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQmFja2dyb3VuZEFuaW1hdGlvbiA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9XCJCZ0FuaW1hdGlvbl9fc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjAyIDYwMlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8ZyBvcGFjaXR5PVwiMC4xNVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTIwMS4zMzcgODcuNDM3QzE5My40NzQgNzkuNTczOCAxODAuNzI1IDc5LjU3MzggMTcyLjg2MiA4Ny40MzdMODcuNDM3IDE3Mi44NjJDNzkuNTczOSAxODAuNzI1IDc5LjU3MzkgMTkzLjQ3NCA4Ny40MzcgMjAxLjMzN0w0MDAuNjYzIDUxNC41NjNDNDA4LjUyNiA1MjIuNDI2IDQyMS4yNzUgNTIyLjQyNiA0MjkuMTM4IDUxNC41NjNMNTE0LjU2MyA0MjkuMTM4QzUyMi40MjYgNDIxLjI3NSA1MjIuNDI2IDQwOC41MjYgNTE0LjU2MyA0MDAuNjYzTDIwMS4zMzcgODcuNDM3Wk0zMC40ODY5IDExNS45MTJDLTguODI4OTcgMTU1LjIyOCAtOC44Mjg5NyAyMTguOTcyIDMwLjQ4NjkgMjU4LjI4N0wzNDMuNzEzIDU3MS41MTNDMzgzLjAyOCA2MTAuODI5IDQ0Ni43NzIgNjEwLjgyOSA0ODYuMDg4IDU3MS41MTNMNTcxLjUxMyA0ODYuMDg4QzYxMC44MjkgNDQ2Ljc3MiA2MTAuODI5IDM4My4wMjggNTcxLjUxMyAzNDMuNzEzTDI1OC4yODcgMzAuNDg2OUMyMTguOTcyIC04LjgyODk2IDE1NS4yMjggLTguODI4OTYgMTE1LjkxMiAzMC40ODY5TDMwLjQ4NjkgMTE1LjkxMlpcIlxuICAgICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQwX3JhZGlhbClcIlxuICAgICAgICAgIGlkPVwicGF0aF8wXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTUxNC41NjMgMjAxLjMzN0M1MjIuNDI2IDE5My40NzQgNTIyLjQyNiAxODAuNzI1IDUxNC41NjMgMTcyLjg2Mkw0MjkuMTM4IDg3LjQzN0M0MjEuMjc1IDc5LjU3MzggNDA4LjUyNiA3OS41NzM5IDQwMC42NjMgODcuNDM3TDM1OC4wOTggMTMwLjAwMkwzMDEuMTQ4IDczLjA1MTZMMzQzLjcxMyAzMC40ODY5QzM4My4wMjggLTguODI4OTYgNDQ2Ljc3MiAtOC44Mjg5NiA0ODYuMDg4IDMwLjQ4NjlMNTcxLjUxMyAxMTUuOTEyQzYxMC44MjkgMTU1LjIyOCA2MTAuODI5IDIxOC45NzIgNTcxLjUxMyAyNTguMjg3TDM1Ny44MDIgNDcxLjk5OUwzMDAuODUyIDQxNS4wNDlMNTE0LjU2MyAyMDEuMzM3WlwiXG4gICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDFfcmFkaWFsKVwiXG4gICAgICAgICAgaWQ9XCJwYXRoXzFcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMjQzLjkwMSA0NzEuOTk5TDIwMS4zMzcgNTE0LjU2M0MxOTMuNDc0IDUyMi40MjYgMTgwLjcyNSA1MjIuNDI2IDE3Mi44NjIgNTE0LjU2M0w4Ny40MzcgNDI5LjEzOEM3OS41NzM5IDQyMS4yNzUgNzkuNTczOSA0MDguNTI2IDg3LjQzNyA0MDAuNjYzTDMwMS4xNDggMTg2Ljk1MkwyNDQuMTk4IDEzMC4wMDJMMzAuNDg2OSAzNDMuNzEzQy04LjgyODk3IDM4My4wMjggLTguODI4OTcgNDQ2Ljc3MiAzMC40ODY5IDQ4Ni4wODhMMTE1LjkxMiA1NzEuNTEzQzE1NS4yMjggNjEwLjgyOSAyMTguOTcyIDYxMC44MjkgMjU4LjI4NyA1NzEuNTEzTDMwMC44NTIgNTI4Ljk0OUwyNDMuOTAxIDQ3MS45OTlaXCJcbiAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50Ml9yYWRpYWwpXCJcbiAgICAgICAgICBpZD1cInBhdGhfMlwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZWxsaXBzZVxuICAgICAgICBjeD1cIjI5NS4wMjdcIlxuICAgICAgICBjeT1cIjE5My4xMThcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NS4wMjcgLTE5My4xMTgpXCJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcbiAgICAgICAgZmlsbD1cIiM5NDVERDZcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzJcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L2VsbGlwc2U+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI5NC42ODUgMTkzLjQ3NEwyNjguOTMyIDIxOS4yNThcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NC42ODUgLTE5My40NzQpIHJvdGF0ZSg0NSAyOTQuNjg1IDE5My40NzQpXCJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDNfbGluZWFyKVwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjEwc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIHJvdGF0ZT1cImF1dG9cIj5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMlwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvcGF0aD5cbiAgICAgIDxlbGxpcHNlXG4gICAgICAgIGN4PVwiMjk1LjAyN1wiXG4gICAgICAgIGN5PVwiMTkzLjExOFwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjk1LjAyNyAtMTkzLjExOClcIlxuICAgICAgICByeD1cIjEuMDczMDZcIlxuICAgICAgICByeT1cIjEuMDc0MzNcIlxuICAgICAgICBmaWxsPVwiIzQ2NzM3XCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cbiAgICAgICAgICBkdXI9XCI1c1wiXG4gICAgICAgICAgYmVnaW49XCIxXCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzJcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L2VsbGlwc2U+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI5NC42ODUgMTkzLjQ3NEwyNjguOTMyIDIxOS4yNThcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NC42ODUgLTE5My40NzQpIHJvdGF0ZSg0NSAyOTQuNjg1IDE5My40NzQpXCJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDdfbGluZWFyKVwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiNXNcIlxuICAgICAgICAgIGJlZ2luPVwiMVwiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8yXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9wYXRoPlxuICAgICAgPGVsbGlwc2VcbiAgICAgICAgY3g9XCI0NzYuNTI1XCJcbiAgICAgICAgY3k9XCIzNjMuMzEzXCJcbiAgICAgICAgcng9XCIxLjA3NDMzXCJcbiAgICAgICAgcnk9XCIxLjA3MzA2XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NzYuNTI1IC0zNjMuMzEzKSByb3RhdGUoOTAgNDc2LjUyNSAzNjMuMzEzKVwiXG4gICAgICAgIGZpbGw9XCIjOTQ1REQ2XCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMTBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgcm90YXRlPVwiYXV0b1wiPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9lbGxpcHNlPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00NzYuMTcxIDM2Mi45NTJMNDUwLjQxNyAzMzcuMTY4XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NzYuNTI1IC0zNjMuMzEzKSByb3RhdGUoLTQ1IDQ3Ni4xNzEgMzYyLjk1MilcIlxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50NF9saW5lYXIpXCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMTBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgcm90YXRlPVwiYXV0b1wiPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9wYXRoPlxuICAgICAgPGVsbGlwc2VcbiAgICAgICAgY3g9XCIzODIuMTY0XCJcbiAgICAgICAgY3k9XCIxNTUuMDI5XCJcbiAgICAgICAgcng9XCIxLjA3NDMzXCJcbiAgICAgICAgcnk9XCIxLjA3MzA2XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zODIuMTY0IC0xNTUuMDI5KSByb3RhdGUoOTAgMzgyLjE2NCAxNTUuMDI5KVwiXG4gICAgICAgIGZpbGw9XCIjRjQ2NzM3XCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cbiAgICAgICAgICBkdXI9XCIxMHNcIlxuICAgICAgICAgIGJlZ2luPVwiMVwiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9lbGxpcHNlPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zODEuODEgMTU0LjY2OUwzNTYuMDU3IDEyOC44ODVcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM4MS44MSAtMTU0LjY2OSkgcm90YXRlKC00NSAzODEuODEgMTU0LjY2OSlcIlxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50NV9saW5lYXIpXCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cbiAgICAgICAgICBkdXI9XCIxMHNcIlxuICAgICAgICAgIGJlZ2luPVwiMVwiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9wYXRoPlxuICAgICAgPGVsbGlwc2VcbiAgICAgICAgY3g9XCIzMzMuMzI0XCJcbiAgICAgICAgY3k9XCIzODIuNjkxXCJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zMzMuMzI0IC0zODIuNjkxKSByb3RhdGUoLTE4MCAzMzMuMzI0IDM4Mi42OTEpXCJcbiAgICAgICAgZmlsbD1cIiNGNDY3MzdcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxuICAgICAgICAgIGR1cj1cIjVzXCJcbiAgICAgICAgICBiZWdpbj1cIjBcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMVwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvZWxsaXBzZT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMzMzLjY2NyAzODIuMzM1TDM1OS40MiAzNTYuNTUxXCJcbiAgICAgICAgdHJhbnNmb3JtPVwic2NhbGUoLTEgMSkgdHJhbnNsYXRlKC0zMzMuNjY3IC0zODIuMzM1KSByb3RhdGUoNDUgMzMzLjY2NyAzODIuMzM1KVwiXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQ2X2xpbmVhcilcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxuICAgICAgICAgIGR1cj1cIjVzXCJcbiAgICAgICAgICBiZWdpbj1cIjBcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMVwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvcGF0aD5cbiAgICAgIDxlbGxpcHNlXG4gICAgICAgIGN4PVwiMTY1LjUyNFwiXG4gICAgICAgIGN5PVwiOTMuOTU5NlwiXG4gICAgICAgIHJ4PVwiMS4wNzMwNlwiXG4gICAgICAgIHJ5PVwiMS4wNzQzM1wiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTY1LjUyNCAtOTMuOTU5NilcIlxuICAgICAgICBmaWxsPVwiI0Y0NjczN1wiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiMTBzXCJcbiAgICAgICAgICBiZWdpbj1cIjNcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvZWxsaXBzZT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTY1LjE4MiA5NC4zMTU5TDEzOS40MjkgMTIwLjFcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE2NS4xODIgLTk0LjMxNTkpIHJvdGF0ZSg0NSAxNjUuMTgyIDk0LjMxNTkpXCJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDdfbGluZWFyKVwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiMTBzXCJcbiAgICAgICAgICBiZWdpbj1cIjNcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvcGF0aD5cbiAgICAgIDxlbGxpcHNlXG4gICAgICAgIGN4PVwiNDc2LjUyNVwiXG4gICAgICAgIGN5PVwiMzYzLjMxM1wiXG4gICAgICAgIHJ4PVwiMS4wNzQzM1wiXG4gICAgICAgIHJ5PVwiMS4wNzMwNlwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDc2LjUyNSAtMzYzLjMxMykgcm90YXRlKDkwIDQ3Ni41MjUgMzYzLjMxMylcIlxuICAgICAgICBmaWxsPVwiIzEzQURDN1wiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiMTJzXCJcbiAgICAgICAgICBiZWdpbj1cIjRcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvZWxsaXBzZT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNDc2LjE3MSAzNjIuOTUyTDQ1MC40MTcgMzM3LjE2OFwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDc2LjUyNSAtMzYzLjMxMykgcm90YXRlKC00NSA0NzYuMTcxIDM2Mi45NTIpXCJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDExX2xpbmVhcilcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxuICAgICAgICAgIGR1cj1cIjEyc1wiXG4gICAgICAgICAgYmVnaW49XCI0XCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L3BhdGg+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDBfcmFkaWFsXCJcbiAgICAgICAgICBjeD1cIjBcIlxuICAgICAgICAgIGN5PVwiMFwiXG4gICAgICAgICAgcj1cIjFcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxIDMwMSkgcm90YXRlKDkwKSBzY2FsZSgzMDApXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzMzMzMzXCIgc3RvcENvbG9yPVwiI0ZCRkJGQlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDFfcmFkaWFsXCJcbiAgICAgICAgICBjeD1cIjBcIlxuICAgICAgICAgIGN5PVwiMFwiXG4gICAgICAgICAgcj1cIjFcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxIDMwMSkgcm90YXRlKDkwKSBzY2FsZSgzMDApXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzMzMzMzXCIgc3RvcENvbG9yPVwiI0ZCRkJGQlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDJfcmFkaWFsXCJcbiAgICAgICAgICBjeD1cIjBcIlxuICAgICAgICAgIGN5PVwiMFwiXG4gICAgICAgICAgcj1cIjFcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxIDMwMSkgcm90YXRlKDkwKSBzY2FsZSgzMDApXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzMzMzMzXCIgc3RvcENvbG9yPVwiI0ZCRkJGQlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDNfbGluZWFyXCJcbiAgICAgICAgICB4MT1cIjI5NS4wNDNcIlxuICAgICAgICAgIHkxPVwiMTkzLjExNlwiXG4gICAgICAgICAgeDI9XCIyNjkuOTc1XCJcbiAgICAgICAgICB5Mj1cIjIxOC4xNTRcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQ0X2xpbmVhclwiXG4gICAgICAgICAgeDE9XCI0NzYuNTI5XCJcbiAgICAgICAgICB5MT1cIjM2My4zMVwiXG4gICAgICAgICAgeDI9XCI0NTEuNDYxXCJcbiAgICAgICAgICB5Mj1cIjMzOC4yNzJcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQ1X2xpbmVhclwiXG4gICAgICAgICAgeDE9XCIzODIuMTY4XCJcbiAgICAgICAgICB5MT1cIjE1NS4wMjdcIlxuICAgICAgICAgIHgyPVwiMzU3LjFcIlxuICAgICAgICAgIHkyPVwiMTI5Ljk4OVwiXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNGNDY3MzdcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDZfbGluZWFyXCJcbiAgICAgICAgICB4MT1cIjMzMy4zMDlcIlxuICAgICAgICAgIHkxPVwiMzgyLjY5M1wiXG4gICAgICAgICAgeDI9XCIzNTguMzc2XCJcbiAgICAgICAgICB5Mj1cIjM1Ny42NTVcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQ3X2xpbmVhclwiXG4gICAgICAgICAgeDE9XCIxNjUuNTRcIlxuICAgICAgICAgIHkxPVwiOTMuOTU3OFwiXG4gICAgICAgICAgeDI9XCIxNDAuNDcyXCJcbiAgICAgICAgICB5Mj1cIjExOC45OTZcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQ4X2xpbmVhclwiXG4gICAgICAgICAgeDE9XCI0MTQuMzY3XCJcbiAgICAgICAgICB5MT1cIjMwMS4xNTZcIlxuICAgICAgICAgIHgyPVwiNDM5LjQzNVwiXG4gICAgICAgICAgeTI9XCIyNzYuMTE4XCJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzEzQURDN1wiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cInBhaW50OV9saW5lYXJcIlxuICAgICAgICAgIHgxPVwiNTE1Ljk0M1wiXG4gICAgICAgICAgeTE9XCIyODguMjM4XCJcbiAgICAgICAgICB4Mj1cIjU0MS4zMzlcIlxuICAgICAgICAgIHkyPVwiMjkxLjQ1NFwiXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMTNBREM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDEwX2xpbmVhclwiXG4gICAgICAgICAgeDE9XCIxMTcuMDAxXCJcbiAgICAgICAgICB5MT1cIjIzMC42MTlcIlxuICAgICAgICAgIHgyPVwiMTE3LjM2XCJcbiAgICAgICAgICB5Mj1cIjI1OC4xOTNcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQxMV9saW5lYXJcIlxuICAgICAgICAgIHgxPVwiNDc2LjUyOVwiXG4gICAgICAgICAgeTE9XCIzNjMuMzFcIlxuICAgICAgICAgIHgyPVwiNDUxLjQ2MVwiXG4gICAgICAgICAgeTI9XCIzMzguMjcyXCJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzEzQURDN1wiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmRBbmltYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiwgQWlGaWxsSW5zdGFncmFtLCBBaUZpbGxMaW5rZWRpbiB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcblxuaW1wb3J0IHsgU29jaWFsSWNvbnMgfSBmcm9tICcuLi9IZWFkZXIvSGVhZGVyU3R5bGVzJztcbmltcG9ydCB7IENvbXBhbnlDb250YWluZXIsIEZvb3RlcldyYXBwZXIsIExpbmtDb2x1bW4sIExpbmtJdGVtLCBMaW5rTGlzdCwgTGlua1RpdGxlLCBTbG9nYW4sIFNvY2lhbENvbnRhaW5lciwgU29jaWFsSWNvbnNDb250YWluZXIgfSBmcm9tICcuL0Zvb3RlclN0eWxlcyc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgRm9vdGVyXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5cbmV4cG9ydCBjb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG5cdHdpZHRoOiBjYWxjKDEwMHZ3IC0gOTZweCk7XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBwYWRkaW5nOiAycmVtIDQ4cHggNDBweDtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuXG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOiAwIDE2cHggNDhweDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMaW5rSXRlbSA9IHN0eWxlZC5hYFxuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0dHJhbnNpdGlvbjogLjNzIGVhc2U7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bGVmdDogMDtcblxuXHQmOmhvdmVyIHtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRsZWZ0OiA2cHg7XG5cdH1cblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRsaW5lLWhlaWdodDogMjhweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcblx0XHRmb250LXNpemU6IDhweDtcblx0XHRsaW5lLWhlaWdodDogMTRweDtcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5gXG5cbmV4cG9ydCBjb25zdCBTb2NpYWxJY29uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5tYXgtd2lkdGg6IDEwNDBweDtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gIGRpc3BsYXk6IGZsZXg7XG5cdHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuYFxuXG5leHBvcnQgY29uc3QgQ29tcGFueUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdG1hcmdpbi1yaWdodDogYXV0bztcblx0XG5cblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuXHR9XG5cblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRtYXJnaW46IDAgMCAzMnB4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cbmBcblxuXG5leHBvcnQgY29uc3QgU2xvZ2FuID0gc3R5bGVkLnBgXG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cdG1pbi13aWR0aDogMjgwcHg7XG5cdGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdHBhZGRpbmc6IDFyZW07XG5cblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRsaW5lLWhlaWdodDogMjhweDtcblx0fVxuXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcblx0XHRsaW5lLWhlaWdodDogMjJweDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0bWluLXdpZHRoOiAxMDBweDtcblx0fVxuYFxuXG5leHBvcnQgY29uc3QgU29jaWFsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZy1yaWdodDogMTZweDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdH1cbmBcblxuXG5leHBvcnQgY29uc3QgTGlua0xpc3QgPSBzdHlsZWQudWxgXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg4NXB4LCAyMjBweCkpO1xuXHRnYXA6IDQwcHg7XG4gIHBhZGRpbmc6IDQwcHggMCAyOHB4O1xuXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfSB7XG5cdFx0cGFkZGluZzogMzJweCAwIDE2cHg7XG5cdH1cblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmc6IDMycHggMCAxNnB4O1xuXHRcdGdhcDogMTZweDtcblx0fVxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmc6IDMycHggNHB4IDE2cHg7XG5cdFx0Z2FwOiA1cHg7XG5cdH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtDb2x1bW4gPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXgtd2lkdGg6IDIyMHB4O1xuXHR3aWR0aDogMTAwJTtcbmBcbmV4cG9ydCBjb25zdCBMaW5rVGl0bGUgPSBzdHlsZWQuaDRgXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuXHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRsaW5lLWhlaWdodDogMTJweDtcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdH1cbmBcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxJbnN0YWdyYW0sIEFpRmlsbExpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IHsgRGlDc3NkZWNrIH0gZnJvbSAncmVhY3QtaWNvbnMvZGknO1xuXG5pbXBvcnQgeyBDb250YWluZXIsIERpdjEsIERpdjIsIERpdjMsIE5hdkxpbmssIFNvY2lhbEljb25zIH0gZnJvbSAnLi9IZWFkZXJTdHlsZXMnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAgKFxuICA8ZGl2PlxuICAgIEhlYWRlclxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCB7IElvSW9zQXJyb3dEcm9wZG93biB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA2MHB4KTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgICBncmlkLXJvdy1nYXA6IDAuNXJlbTtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBEaXYxID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgRGl2MiA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgRGl2MyA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNjtcbiAgfVxuYDtcblxuLy8gTmF2aWdhdGlvbiBMaW5rc1xuZXhwb3J0IGNvbnN0IE5hdkxpbmsgPSBzdHlsZWQuYWBcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxuYDtcblxuLy8vIERyb3BEb3duIENvbnRhY3RcbmV4cG9ydCBjb25zdCBDb250YWN0RHJvcERvd24gPSBzdHlsZWQuYnV0dG9uYFxuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG5cbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2UHJvZHVjdHNJY29uID0gc3R5bGVkKElvSW9zQXJyb3dEcm9wZG93bilgXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBvcGFjaXR5OiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gJzEnIDogJy43NScpfTtcbiAgdHJhbnNmb3JtOiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gJ3NjYWxlWSgtMSknIDogJ3NjYWxlWSgxKScpfTtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIG1hcmdpbjogMnB4IDAgMCAycHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gIH1cbmA7XG5cblxuLy8gU29jaWFsIEljb25zIFxuXG5leHBvcnQgY29uc3QgU29jaWFsSWNvbnMgPSBzdHlsZWQuYWBcbnRyYW5zaXRpb246IDAuM3MgZWFzZTtcbmNvbG9yOiB3aGl0ZTtcbmJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNDU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbiAgfVxuYCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBMZWZ0U2VjdGlvbiB9IGZyb20gJy4vSGVyb1N0eWxlcyc7XG5cbmNvbnN0IEhlcm8gPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICBIZXJvXG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybzsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IExlZnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJsb2dDYXJkLCBDYXJkSW5mbywgRXh0ZXJuYWxMaW5rcywgR3JpZENvbnRhaW5lciwgSGVhZGVyVGhyZWUsIEhyLCBUYWcsIFRhZ0xpc3QsIFRpdGxlQ29udGVudCwgVXRpbGl0eUxpc3QsIEltZyB9IGZyb20gJy4vUHJvamVjdHNTdHlsZXMnO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIFByb2plY3RzXG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gXG5cbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xucGFkZGluZzogM3JlbTtcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5jb2x1bW4tZ2FwOiAycmVtO1xucm93LWdhcDogM3JlbTtcbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmBcbmV4cG9ydCBjb25zdCBCbG9nQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDQwMHB4O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgVGl0bGVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAyMDtcbiAgd2lkdGg6IDEwMCU7XG5cbmA7XG5cblxuZXhwb3J0IGNvbnN0IEhlYWRlclRocmVlID0gc3R5bGVkLmgzYFxuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzljYzllMztcbiAgcGFkZGluZzogLjVyZW0gMDtcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGl0bGUgPyAnM3JlbScgOiAnMnJlbSd9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhyID0gc3R5bGVkLmhyYFxuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNkMGJiNTc7XG5gO1xuXG5leHBvcnQgY29uc3QgSW50cm8gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI2RjZTNlNztcbiAgZm9udC1mYW1pbHk6ICdEcm9pZCBTZXJpZicsIHNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5wYFxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBjb2xvcjogI2U0ZTZlNztcbiAgZm9udC1zdHlsZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOi4zcmVtXG4gIFxufVxuYDtcblxuXG5leHBvcnQgY29uc3QgVXRpbGl0eUxpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogMi41cmVtIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRXh0ZXJuYWxMaW5rcyA9IHN0eWxlZC5hYFxuY29sb3I6I2Q0YzBjMDtcbmZvbnQtc2l6ZTogMS42cmVtO1xucGFkZGluZzoxcmVtIDEuNXJlbTtcbmJhY2tncm91bmQ6ICM2YjMwMzA7XG5ib3JkZXItcmFkaXVzOiAxNXB4O1xudHJhbnNpdGlvbjogMC41cztcbiY6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICM4MDE0MTQ7XG5cbn1cbmA7XG5cbmV4cG9ydCBjb25zdCBUYWdMaXN0ID0gc3R5bGVkLnVsYFxuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xucGFkZGluZzogMnJlbTtcbmBcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXG5jb2xvcjogI2Q4YmZiZjtcbmZvbnQtc2l6ZTogMS41cmVtO1xuYCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEaUZpcmViYXNlLCBEaVJlYWN0LCBEaVplbmQgfSBmcm9tICdyZWFjdC1pY29ucy9kaSc7XG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7IExpc3QsIExpc3RDb250YWluZXIsIExpc3RJdGVtLCBMaXN0UGFyYWdyYXBoLCBMaXN0VGl0bGUgfSBmcm9tICcuL1RlY2hub2xvZ2llc1N0eWxlcyc7XG5cbmNvbnN0IFRlY2hub2xvZ2llcyA9ICgpID0+ICAoXG4gIDxkaXY+XG4gICAgVGVjaG5vbG9naWVzXG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGVjaG5vbG9naWVzO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoNTAlIDUwJSBhdCA1MCUgNTAlLCByZ2JhKDc5LCAxMDgsIDE3NiwgMC4yNSkgNTMuOCUsIHJnYmEoNzksIDEwOCwgMTc2LCAwKSAxMDAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDYwcHg7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTWFpbkltYWdlID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdhcDogNDBweDtcbiAgbWFyZ2luOiAzcmVtIDA7XG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ317XG4gICAgbWFyZ2luOiA2NHB4IDA7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgbWFyZ2luOiA2NHB4IDA7XG4gICAgZ2FwOiAyNHB4XG4gIH1cbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAzMnB4IDA7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMaXN0VGl0bGUgPSBzdHlsZWQuaDRgXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5gXG5cbmV4cG9ydCBjb25zdCBMaXN0UGFyYWdyYXBoID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICBtYXgtd2lkdGg6IDIwM3B4O1xufVxuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5gXG5cbmV4cG9ydCBjb25zdCBMaXN0SWNvbiA9IHN0eWxlZC5pbWdgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2Fyb3VzZWxCdXR0b24sIENhcm91c2VsQnV0dG9uRG90LCBDYXJvdXNlbEJ1dHRvbnMsIENhcm91c2VsQ29udGFpbmVyLCBDYXJvdXNlbEl0ZW0sIENhcm91c2VsSXRlbUltZywgQ2Fyb3VzZWxJdGVtVGV4dCwgQ2Fyb3VzZWxJdGVtVGl0bGUsIENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSB9IGZyb20gJy4vVGltZUxpbmVTdHlsZXMnO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xuXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcbiAgLy8gY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XG4gIC8vIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XG5cbiAgLy8gY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcbiAgLy8gICByZXR1cm4gbm9kZS5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgLy8gfVxuXG4gIC8vIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8gICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuICAvLyAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IE1hdGguZmxvb3IoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNyAqIChpIC8gVGltZUxpbmVEYXRhLmxlbmd0aCkpO1xuICAgICAgXG4gIC8vICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAvLyAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gIC8vICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKiBUaW1lTGluZURhdGEubGVuZ3RoKTtcblxuICAvLyAgICAgc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuICAvLyAvLyBhdm9pZHMgYSBidWcgd2hlcmUgY29udGVudCBpcyBjb3ZlcmVkIHVwIGlmIGNvbWluZyBmcm9tIHNtYWxsZXIgc2NyZWVuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAvLyAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIDApO1xuICAvLyAgIH1cblxuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAvLyB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgVGltZWxpbmVcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xuIiwiXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxDb250YWluZXIgPSBzdHlsZWQudWxgXG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xuICBwYWRkaW5nOiAwcmVtO1xuICBsaXN0LXN0eWxlOm5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXG4gIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cblxuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgJjpmaXJzdC1vZi10eXBle1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cblxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuXG4gIC8vcmVtb3ZlIHNjcm9sbGJhclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICBcbiAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgZGlzcGxheTogbm9uZTtcbiAgIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlID0gc3R5bGVkLmRpdmBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogJHsoeyBmaW5hbCB9KSA9PiBmaW5hbCA/IGAxMjAlO2AgOiBgbWluLWNvbnRlbnRgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1heC13aWR0aDogMTk2cHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBtYXgtd2lkdGg6IDEyNHB4O1xuICB9XG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgYmFja2dyb3VuZDogIzBFMTMxRjtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGBvcGFjaXR5OiAxYCA6IGBvcGFjaXR5OiAwLjVgfTsgXG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbVRpdGxlID0gc3R5bGVkLmg0YFxuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogVGhpcyBncmFkaWVudCBpcyBkaWZmZXJlbnQgZHVlIHRvIHRoZSBzaXplIG9mIHRoZSBUaXRsZSBjb250YWluZXIsIGl0IG11c3QgdHJhbnNpdGlvbiBzb29uZXIgdG8gYmUgdmlzaWJsZSBvbiB0aGUgdGV4dCAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIxLjU3ZGVnLCAjRkZGRkZGIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSAzMC4xNSUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbUltZyA9IHN0eWxlZC5zdmdgXG4gIG1hcmdpbi1sZWZ0OiAyMXB4O1xuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwxKSwgcmdiYSgwLDAsMCwwKSk7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UZXh0ID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XG4gIH1cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9ucyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAyODhweDtcblxuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgb3BhY2l0eTogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgMWAgOiBgLjMzYH07XG4gIHRyYW5zZm9ybTogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgc2NhbGUoMS42KWAgOiBgc2NhbGUoMSlgfTtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbkRvdCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogM3B4O1xuYFxuIiwiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdNRVJOIE1lbW9yaWVzJyxcbiAgICBkZXNjcmlwdGlvbjogXCJVc2luZyBSZWFjdCwgTm9kZS5qcywgRXhwcmVzcyAmIE1vbmdvREIgeW91J2xsIGxlYXJuIGhvdyB0byBidWlsZCBhIEZ1bGwgU3RhY2sgTUVSTiBBcHBsaWNhdGlvbiAtIGZyb20gc3RhcnQgdG8gZmluaXNoLiBUaGUgQXBwIGlzIGNhbGxlZCBNZW1vcmllcyBhbmQgaXQgaXMgYSBzaW1wbGUgc29jaWFsIG1lZGlhIGFwcCB0aGF0IGFsbG93cyB1c2VycyB0byBwb3N0IGludGVyZXN0aW5nIGV2ZW50cyB0aGF0IGhhcHBlbmVkIGluIHRoZWlyIGxpdmVzLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzEucG5nJyxcbiAgICAgIHRhZ3M6IFsnTW9uZ28nLCAnRXhwcmVzcycsICdSZWFjdCcsICdOb2RlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0UtQ29tbWVyY2UnLFxuICAgIGRlc2NyaXB0aW9uOlwiV2hpbGUgYnVpbGRpbmcgaXQgeW91J3JlIGdvaW5nIHRvIGxlYXJuIG1hbnkgYWR2YW5jZWQgUmVhY3QgJiBKYXZhU2NyaXB0IHRvcGljcywgYXMgd2VsbCBhcyBob3cgdG8gdXNlIFN0cmlwZSBmb3IgY2FyZCB0cmFuc2FjdGlvbnMuIE9uIHRvcCBvZiB0aGF0LCBhdCB0aGUgZW5kIG9mIHRoZSB2aWRlbywgeW91IHdpbGwgaGF2ZSB0aGlzIHVuaXF1ZSBhbmQgY29tcGxleCB3ZWJzaG9wIGFwcCB0aGF0IHlvdSB3aWxsIGJlIGFibGUgdG8gYWRkIHRvIHlvdXIgcG9ydGZvbGlvLiBBbmQgdHJ1c3QgbWUsIGUtY29tbWVyY2UgYXBwbGljYXRpb25zIGFyZSBpbXByZXNzaXZlLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy8yLnBuZycsXG4gICAgdGFnczogWydSZWFjdCcsICdKYXZhU2NyaXB0J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1dlYlJUQyBBcHAnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy8zLmpwZycsXG4gICAgICB0YWdzOiBbJ1JlYWN0JywgJ1dlYlJUQyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdVbmljaGF0JyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyB2aWRlbyB0dXRvcmlhbC4gSW4gdGhpcyB2aWRlbywgd2Ugd2lsbCBjcmVhdGUgYSBmdWxsIFJlYWx0aW1lIENoYXQgQXBwbGljYXRpb25cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvNC5qcGcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnQ2hhdEVuZ2luZScsICdGaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAzLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5JywgfSxcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnV29ya2VkIGFzIGEgZnJlZWxhbmNlIGRldmVsb3BlcicsIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0ZvdW5kZWQgSmF2YVNjcmlwdCBNYXN0ZXJ5JywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU2hhcmVkIG15IHByb2plY3RzIHdpdGggdGhlIHdvcmxkJywgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnU3RhcnRlZCBteSBvd24gcGxhdGZvcm0nLCB9LFxuXTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL0xheW91dFN0eWxlcydcblxuZXhwb3J0IGNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgPEhlYWRlci8+XG4gICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+IFxuICAgICA8Rm9vdGVyLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxubWF4LXdpZHRoOiAxMjgwcHg7XG53aWR0aDogMTAwJTtcbm1hcmdpbjogYXV0bztcbmA7XG4iLCJpbXBvcnQgQWNvbXBsaXNobWVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9BY29tcGxpc2htZW50cy9BY29tcGxpc2htZW50cyc7XG5pbXBvcnQgQmdBbmltYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9CYWNrZ3Jvb3VuZEFuaW1hdGlvbi9CYWNrZ3JvdW5kQW5pbWF0aW9uJztcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvSGVyby9IZXJvJztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzJztcbmltcG9ydCBUZWNobm9sb2dpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzJztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9jb21wb25lbnRzL1RpbWVMaW5lL1RpbWVMaW5lJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2xheW91dC9MYXlvdXQnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgey8qIDxTZWN0aW9uIGdyaWQ+ICovfVxuICAgICAgICA8SGVybyAvPlxuICAgICAgICB7LyogPEJnQW5pbWF0aW9uIC8+ICovfVxuICAgICAgey8qIDwvU2VjdGlvbj4gKi99XG4gICAgICA8UHJvamVjdHMgLz5cbiAgICAgIDxUZWNobm9sb2dpZXMgLz5cbiAgICAgIDxUaW1lbGluZSAvPlxuICAgICAgPEFjb21wbGlzaG1lbnRzIC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBCdXR0b25CYWNrLCBCdXR0b25Gcm9udCB9IGZyb20gJy4vaW5kZXgnXG5cbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4gKFxuICA8QnV0dG9uQmFjayBhbHQ9e3Byb3BzLmFsdH0gZm9ybT17cHJvcHMuZm9ybX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT57cHJvcHMuY2hpbGRyZW59XG4gICAgPEJ1dHRvbkZyb250IGFsdD17cHJvcHMuYWx0fSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9Pntwcm9wcy5jaGlsZHJlbn08L0J1dHRvbkZyb250PlxuICA8L0J1dHRvbkJhY2s+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiBwcm9wcy5ncmlkID8gXCJncmlkXCIgOiBcImZsZXhcIiB9O1xuICBmbGV4LWRpcmVjdGlvbjogJHsocHJvcHMpID0+IHByb3BzLnJvdyA/IFwicm93XCIgOiBcImNvbHVtblwiIH07XG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMzJweCA0OHB4IDBcIiB9IDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHBhZGRpbmc6IDI0cHggNDhweCAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm5vcGFkZGluZyA/IFwiMFwiIDogXCIxNnB4IDE2cHggMFwiIH0gO1xuXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNjVweCcgOiAnNTZweCd9O1xuICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNzJweCcgOiAnNTZweCd9O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxOC43NyUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgNjAuMTUlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNThweCAwIDE2cHgnIDogJzAnfTtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1NnB4JyA6ICc0OHB4J307XG4gICAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzU2cHgnIDogJzQ4cHgnfTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzQwcHggMCAxMnB4JyA6ICcwJ307XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMjhweCcgOiAnMzJweCd9O1xuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICczMnB4JyA6ICc0MHB4J307XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzE2cHggMCA4cHgnIDogJzAnfTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UZXh0ID0gc3R5bGVkLnBgXG4gIG1heC13aWR0aDogODAwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctYm90dG9tOiAzLjZyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIG1heC13aWR0aDogNjcwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU2VjdGlvbkRpdmlkZXIgPSBzdHlsZWQuZGl2YFxuXG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yQWx0ID8gXG4gICAgJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGNDY3MzcgMCUsICM5NDVERDYgMTAwJSknIDpcbiAgICAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzEzQURDNyAwJSwgIzk0NURENiAxMDAlKSd9O1xuXG4gICAgbWFyZ2luOiAkeyhwcm9wcykgPT4gcHJvcHMuZGl2aWRlciA/IFwiNHJlbSAwXCIgOiBcIlwiIH07XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNHB4O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMnB4O1xuICB9XG5gXG5leHBvcnQgY29uc3QgU2VjdGlvblN1YlRleHQgPSBzdHlsZWQucGBcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG5cbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBtYXgtd2lkdGg6IDY3MnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBTZWNvbmRhcnlCdG4gPSBzdHlsZWQuYnV0dG9uYFxuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMzKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjMGYxNjI0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlNGViO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMDQxNjk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgbWFyZ2luLXRvcDogMjRweDsgXG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25CYWNrID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxNTBweCcgOiAnMjYycHgnfTtcbiAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnNTJweCcgOiAnNjRweCd9O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcyNHB4J307XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46ICR7KHsgYWx0LCBmb3JtIH0pID0+IChhbHQgfHwgZm9ybSkgPyAnMCcgOiAnMCAwIDgwcHgnfTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmY2MjJlIDAlLCAjQjEzM0ZGIDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBEQkQ4IDAlLCAjQjEzM0ZGIDEwMCUpJ307XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnLjUnIDogJzEnfTtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxNTBweCcgOiAnMTg0cHgnfTtcbiAgICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICc1MnB4JyA6ICc0OHB4J307XG4gICAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMTZweCd9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcwJyA6ICc2NHB4J307XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMCcgOiAnMzJweCd9O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25Gcm9udCA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzEzQURDNyAwJSwgIzk0NURENiAxMDAlKSd9O1xuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IGRpc2FibGVkID8gJy41JyA6ICcxJ307XG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xuICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcyNHB4J307XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpJyA6ICdub25lJ307XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcbiAgfVxuXG4gICY6ZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzE2cHgnfTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcyNHB4JyA6ICcxNnB4J307XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDhweDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMTZweCcgOiAnOHB4J307XG5cbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMCcgOiAnOHB4J307XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtJY29uSW1nID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDsgIFxuICBoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMzJweCcgOiAnMjRweCd9O1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBoZWlnaHQ6ICR7KHsgbmF2IH0pID0+IG5hdiA/ICcxNnB4JyA6ICcyNHB4J307XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgaGVpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzMycHgnIDogJzE2cHgnfTtcbiAgfVxuYFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9