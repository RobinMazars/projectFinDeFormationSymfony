(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["canvasJs"],{

/***/ "./assets/js/canvas/canvasMain.js":
/*!****************************************!*\
  !*** ./assets/js/canvas/canvasMain.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _jsClass_canvas_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsClass/canvas.class.js */ "./assets/js/canvas/jsClass/canvas.class.js");
//init

var canvas = new _jsClass_canvas_class_js__WEBPACK_IMPORTED_MODULE_0__["default"](); //initBind

$("#canvas").css('background', 'steelblue');
$("#canvas").mousedown(function (event) {
  mouseDown(event);
});
$("#color").change(function (event) {
  console.log($(this).val());
  canvas.pen.setColor($(this).val());
});
$("#gomme").click(eraserOn);

function eraserOn() {
  $("#gomme").unbind('click');
  $("#gomme").click(eraserOff);
  $('#gomme').addClass('selected');
  canvas.eraserOn();
}

function eraserOff() {
  $("#gomme").unbind('click');
  $("#gomme").click(eraserOn);
  $('#gomme').removeClass('selected');
  canvas.eraserOff();
}

$("#btnErase").click(function (event) {
  canvas.clearAll();
});

function mouseDown(e) {
  console.log('mousedown');
  canvas.startDrawLine(e);
  $("#canvas").mousemove(function (event) {
    canvas.continueDrawLine(event);
    $("#canvas").unbind('mousedown');
  });
  $("#canvas").mouseup(function (event) {
    mouseUp(event);
  });
  $("#canvas").mouseout(function (event) {
    mouseUp(event);
  });
}

function mouseUp(e) {
  console.log('mouseup');
  canvas.endDrawLine();
  $("#canvas").unbind('mousemove');
  $("#canvas").unbind();
  $("#canvas").mousedown(function (event) {
    $("#canvas").unbind();
    mouseDown(event);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/canvas/jsClass/canvas.class.js":
/*!**************************************************!*\
  !*** ./assets/js/canvas/jsClass/canvas.class.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pen_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pen.class.js */ "./assets/js/canvas/jsClass/pen.class.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Canvas =
/*#__PURE__*/
function () {
  function Canvas() {
    _classCallCheck(this, Canvas);

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.pen = new _pen_class_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

  _createClass(Canvas, [{
    key: "drawLine",
    value: function drawLine(event) {}
  }, {
    key: "eraserOn",
    value: function eraserOn() {
      // TODO: change lineWidth
      this.ctx.globalCompositedOperation = 'destination-out';
      this.ctx.lineWidth = 200;
    }
  }, {
    key: "eraserOff",
    value: function eraserOff() {
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.lineWidth = this.pen.getWidth();
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "startDrawLine",
    value: function startDrawLine(event) {
      this.ctx.beginPath();
      this.ctx.lineWidth = this.pen.getWidth();
      this.ctx.strokeStyle = this.pen.getColor();
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      var pos = this.pen.getPos(event, this.canvas);
      console.log(pos);
      this.ctx.lineTo(pos.x, pos.y);
      this.ctx.stroke();
    }
  }, {
    key: "continueDrawLine",
    value: function continueDrawLine(event) {
      var pos = this.pen.getPos(event, this.canvas);
      this.ctx.lineTo(pos.x, pos.y);
      this.ctx.stroke();
    }
  }, {
    key: "endDrawLine",
    value: function endDrawLine() {
      this.ctx.closePath();
    }
  }]);

  return Canvas;
}();



/***/ }),

/***/ "./assets/js/canvas/jsClass/pen.class.js":
/*!***********************************************!*\
  !*** ./assets/js/canvas/jsClass/pen.class.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pen; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pen =
/*#__PURE__*/
function () {
  function Pen() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'black';
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '5';

    _classCallCheck(this, Pen);

    this.color = color;
    this.width = width;
  }

  _createClass(Pen, [{
    key: "setColor",
    value: function setColor(newColor) {
      this.color = newColor;
    }
  }, {
    key: "setWidth",
    value: function setWidth(newWidth) {
      this.width = newWidth;
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return this.color;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: "getPos",
    value: function getPos(e, canvas) {
      var offset = canvas.getBoundingClientRect();
      var styles = window.getComputedStyle(canvas);
      var cursorX = e.clientX - offset.left - parseInt(styles.borderLeftWidth);
      var cursorY = e.clientY - offset.top - parseInt(styles.borderTopWidth);
      return {
        x: cursorX,
        y: cursorY
      };
    }
  }]);

  return Pen;
}();



/***/ }),

/***/ "./node_modules/core-js/internals/parse-int.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/parse-int.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var nativeParseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : nativeParseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/parse-int */ "./node_modules/core-js/internals/parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ })

},[["./assets/js/canvas/canvasMain.js","runtime","vendors~barJs~canvasJs~navJs~tapisJs"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FudmFzL2NhbnZhc01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NhbnZhcy9qc0NsYXNzL2NhbnZhcy5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FudmFzL2pzQ2xhc3MvcGVuLmNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93aGl0ZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiQ2FudmFzIiwiJCIsImNzcyIsIm1vdXNlZG93biIsImV2ZW50IiwibW91c2VEb3duIiwiY2hhbmdlIiwiY29uc29sZSIsImxvZyIsInZhbCIsInBlbiIsInNldENvbG9yIiwiY2xpY2siLCJlcmFzZXJPbiIsInVuYmluZCIsImVyYXNlck9mZiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjbGVhckFsbCIsImUiLCJzdGFydERyYXdMaW5lIiwibW91c2Vtb3ZlIiwiY29udGludWVEcmF3TGluZSIsIm1vdXNldXAiLCJtb3VzZVVwIiwibW91c2VvdXQiLCJlbmREcmF3TGluZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiUGVuIiwiZ2xvYmFsQ29tcG9zaXRlZE9wZXJhdGlvbiIsImxpbmVXaWR0aCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdldFdpZHRoIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJzdHJva2VTdHlsZSIsImdldENvbG9yIiwibGluZUNhcCIsImxpbmVKb2luIiwicG9zIiwiZ2V0UG9zIiwibGluZVRvIiwieCIsInkiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJjb2xvciIsIm5ld0NvbG9yIiwibmV3V2lkdGgiLCJvZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzdHlsZXMiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiY3Vyc29yWCIsImNsaWVudFgiLCJsZWZ0IiwicGFyc2VJbnQiLCJib3JkZXJMZWZ0V2lkdGgiLCJjdXJzb3JZIiwiY2xpZW50WSIsInRvcCIsImJvcmRlclRvcFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxJQUFJQSxNQUFNLEdBQUcsSUFBSUMsZ0VBQUosRUFBYixDLENBQ0E7O0FBQ0FDLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsR0FBYixDQUFpQixZQUFqQixFQUErQixXQUEvQjtBQUNBRCxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFFLFNBQWIsQ0FBdUIsVUFBU0MsS0FBVCxFQUFnQjtBQUNyQ0MsV0FBUyxDQUFDRCxLQUFELENBQVQ7QUFDRCxDQUZEO0FBR0FILENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWUssTUFBWixDQUFtQixVQUFTRixLQUFULEVBQWdCO0FBQ2pDRyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxHQUFSLEVBQVo7QUFDQVYsUUFBTSxDQUFDVyxHQUFQLENBQVdDLFFBQVgsQ0FBb0JWLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsR0FBUixFQUFwQjtBQUNELENBSEQ7QUFJQVIsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZVyxLQUFaLENBQWtCQyxRQUFsQjs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCWixHQUFDLENB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QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQSxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxpQ0FBaUMsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRTlFO0FBQ0E7QUFDQSxHQUFHLHlFQUF5RTtBQUM1RTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1JELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsNkJBQTZCLG1CQUFPLENBQUMsNkVBQXdCOztBQUU3RDtBQUNBO0FBQ0EsR0FBRywyREFBMkQ7QUFDOUQ7QUFDQSxDQUFDIiwiZmlsZSI6ImNhbnZhc0pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbml0XHJcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vanNDbGFzcy9jYW52YXMuY2xhc3MuanNcIlxyXG52YXIgY2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4vL2luaXRCaW5kXHJcbiQoXCIjY2FudmFzXCIpLmNzcygnYmFja2dyb3VuZCcsICdzdGVlbGJsdWUnKTtcclxuJChcIiNjYW52YXNcIikubW91c2Vkb3duKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgbW91c2VEb3duKGV2ZW50KTtcclxufSk7XHJcbiQoXCIjY29sb3JcIikuY2hhbmdlKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgY29uc29sZS5sb2coJCh0aGlzKS52YWwoKSlcclxuICBjYW52YXMucGVuLnNldENvbG9yKCQodGhpcykudmFsKCkpXHJcbn0pO1xyXG4kKFwiI2dvbW1lXCIpLmNsaWNrKGVyYXNlck9uKTtcclxuXHJcbmZ1bmN0aW9uIGVyYXNlck9uKCkge1xyXG4gICQoXCIjZ29tbWVcIikudW5iaW5kKCdjbGljaycpXHJcbiAgJChcIiNnb21tZVwiKS5jbGljayhlcmFzZXJPZmYpO1xyXG4gICQoJyNnb21tZScpLmFkZENsYXNzKCdzZWxlY3RlZCcpXHJcbiAgY2FudmFzLmVyYXNlck9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVyYXNlck9mZigpIHtcclxuICAkKFwiI2dvbW1lXCIpLnVuYmluZCgnY2xpY2snKVxyXG4gICQoXCIjZ29tbWVcIikuY2xpY2soZXJhc2VyT24pO1xyXG4gICQoJyNnb21tZScpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpXHJcbiAgY2FudmFzLmVyYXNlck9mZigpO1xyXG59XHJcbiQoXCIjYnRuRXJhc2VcIikuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuICBjYW52YXMuY2xlYXJBbGwoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBtb3VzZURvd24oZSkge1xyXG4gIGNvbnNvbGUubG9nKCdtb3VzZWRvd24nKTtcclxuICBjYW52YXMuc3RhcnREcmF3TGluZShlKVxyXG4gICQoXCIjY2FudmFzXCIpLm1vdXNlbW92ZShmdW5jdGlvbihldmVudCkge1xyXG4gICAgY2FudmFzLmNvbnRpbnVlRHJhd0xpbmUoZXZlbnQpXHJcbiAgICAkKFwiI2NhbnZhc1wiKS51bmJpbmQoJ21vdXNlZG93bicpO1xyXG4gIH0pO1xyXG4gICQoXCIjY2FudmFzXCIpLm1vdXNldXAoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIG1vdXNlVXAoZXZlbnQpO1xyXG4gIH0pO1xyXG4gICQoXCIjY2FudmFzXCIpLm1vdXNlb3V0KGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBtb3VzZVVwKGV2ZW50KTtcclxuICB9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNlVXAoZSkge1xyXG4gIGNvbnNvbGUubG9nKCdtb3VzZXVwJyk7XHJcbiAgY2FudmFzLmVuZERyYXdMaW5lKClcclxuICAkKFwiI2NhbnZhc1wiKS51bmJpbmQoJ21vdXNlbW92ZScpO1xyXG4gICQoXCIjY2FudmFzXCIpLnVuYmluZCgpXHJcbiAgJChcIiNjYW52YXNcIikubW91c2Vkb3duKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAkKFwiI2NhbnZhc1wiKS51bmJpbmQoKVxyXG4gICAgbW91c2VEb3duKGV2ZW50KTtcclxuICB9KTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IFBlbiBmcm9tIFwiLi9wZW4uY2xhc3MuanNcIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLnBlbiA9IG5ldyBQZW4oKVxyXG4gIH1cclxuICBkcmF3TGluZShldmVudCkge1xyXG5cclxuICB9XHJcbiAgZXJhc2VyT24oKXtcclxuICAgIC8vIFRPRE86IGNoYW5nZSBsaW5lV2lkdGhcclxuICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZWRPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcclxuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDIwMDtcclxuICB9XHJcbiAgZXJhc2VyT2ZmKCl7XHJcbiAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xyXG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5wZW4uZ2V0V2lkdGgoKTtcclxuICB9XHJcbiAgY2xlYXJBbGwoKXtcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICB9XHJcbiAgc3RhcnREcmF3TGluZShldmVudCkge1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnBlbi5nZXRXaWR0aCgpO1xyXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnBlbi5nZXRDb2xvcigpO1xyXG4gICAgdGhpcy5jdHgubGluZUNhcCA9ICdyb3VuZCc7XHJcbiAgICB0aGlzLmN0eC5saW5lSm9pbiA9ICdyb3VuZCc7XHJcbiAgICB2YXIgcG9zID0gdGhpcy5wZW4uZ2V0UG9zKGV2ZW50LCB0aGlzLmNhbnZhcyk7XHJcbiAgICBjb25zb2xlLmxvZyhwb3MpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvcy54LCBwb3MueSk7XHJcbiAgICB0aGlzLmN0eC5zdHJva2UoKVxyXG4gIH1cclxuICBjb250aW51ZURyYXdMaW5lKGV2ZW50KSB7XHJcbiAgICB2YXIgcG9zID0gdGhpcy5wZW4uZ2V0UG9zKGV2ZW50LHRoaXMuY2FudmFzKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3MueCwgcG9zLnkpO1xyXG4gICAgdGhpcy5jdHguc3Ryb2tlKClcclxuXHJcbiAgfVxyXG4gIGVuZERyYXdMaW5lKCkge1xyXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKClcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVuIHtcclxuICBjb25zdHJ1Y3Rvcihjb2xvcj0nYmxhY2snLHdpZHRoPSc1Jykge1xyXG4gICAgdGhpcy5jb2xvcj1jb2xvcjtcclxuICAgIHRoaXMud2lkdGg9d2lkdGg7XHJcbiAgfVxyXG4gIHNldENvbG9yKG5ld0NvbG9yKXtcclxuICAgIHRoaXMuY29sb3I9bmV3Q29sb3JcclxuICB9XHJcbiAgc2V0V2lkdGgobmV3V2lkdGgpe1xyXG4gICAgdGhpcy53aWR0aD1uZXdXaWR0aFxyXG4gIH1cclxuICBnZXRDb2xvcigpe1xyXG4gICAgcmV0dXJuIHRoaXMuY29sb3JcclxuICB9XHJcbiAgZ2V0V2lkdGgoKXtcclxuICAgIHJldHVybiB0aGlzLndpZHRoXHJcbiAgfVxyXG4gIGdldFBvcyhlLGNhbnZhcykge1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNhbnZhcyk7XHJcbiAgICAgICAgdmFyIGN1cnNvclggPSBlLmNsaWVudFggLSBvZmZzZXQubGVmdCAtIHBhcnNlSW50KHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgpO1xyXG4gICAgICAgIHZhciBjdXJzb3JZID0gZS5jbGllbnRZIC0gb2Zmc2V0LnRvcCAtIHBhcnNlSW50KHN0eWxlcy5ib3JkZXJUb3BXaWR0aCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHg6IGN1cnNvclgsXHJcbiAgICAgICAgICB5OiBjdXJzb3JZXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG59XHJcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIG5hdGl2ZVBhcnNlSW50ID0gZ2xvYmFsLnBhcnNlSW50O1xudmFyIGhleCA9IC9eWystXT8wW1h4XS87XG52YXIgRk9SQ0VEID0gbmF0aXZlUGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCBuYXRpdmVQYXJzZUludCh3aGl0ZXNwYWNlcyArICcweDE2JykgIT09IDIyO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgcmV0dXJuIG5hdGl2ZVBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KFMpID8gMTYgOiAxMCkpO1xufSA6IG5hdGl2ZVBhcnNlSW50O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIURFU0NSSVBUT1JTLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBkZWZpbmVQcm9wZXJ0eTogb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUuZlxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9IHBhcnNlSW50SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRJbXBsZW1lbnRhdGlvblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9