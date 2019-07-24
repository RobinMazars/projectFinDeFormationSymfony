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
  // action quand on entre en mode effacement
  $("#gomme").unbind('click');
  $("#gomme").click(eraserOff);
  $('#gomme').addClass('selected');
  canvas.eraserOn();
}

function eraserOff() {
  // action quand on sort du mode effacement
  $("#gomme").unbind('click');
  $("#gomme").click(eraserOn);
  $('#gomme').removeClass('selected');
  canvas.eraserOff();
}

$("#btnErase").click(function (event) {
  canvas.clearAll();
});

function mouseDown(e) {
  // action quand on entre en mode ecriture
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
  // action quand on sort du mode ecriture
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
  // class qui controlle dans quelle mode on se trouve et trace les traits
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
  // objet pour representer le stylo avec sa couleur,taille,position
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FudmFzL2NhbnZhc01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NhbnZhcy9qc0NsYXNzL2NhbnZhcy5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FudmFzL2pzQ2xhc3MvcGVuLmNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93aGl0ZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiQ2FudmFzIiwiJCIsImNzcyIsIm1vdXNlZG93biIsImV2ZW50IiwibW91c2VEb3duIiwiY2hhbmdlIiwiY29uc29sZSIsImxvZyIsInZhbCIsInBlbiIsInNldENvbG9yIiwiY2xpY2siLCJlcmFzZXJPbiIsInVuYmluZCIsImVyYXNlck9mZiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjbGVhckFsbCIsImUiLCJzdGFydERyYXdMaW5lIiwibW91c2Vtb3ZlIiwiY29udGludWVEcmF3TGluZSIsIm1vdXNldXAiLCJtb3VzZVVwIiwibW91c2VvdXQiLCJlbmREcmF3TGluZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiUGVuIiwiZ2xvYmFsQ29tcG9zaXRlZE9wZXJhdGlvbiIsImxpbmVXaWR0aCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdldFdpZHRoIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJzdHJva2VTdHlsZSIsImdldENvbG9yIiwibGluZUNhcCIsImxpbmVKb2luIiwicG9zIiwiZ2V0UG9zIiwibGluZVRvIiwieCIsInkiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJjb2xvciIsIm5ld0NvbG9yIiwibmV3V2lkdGgiLCJvZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzdHlsZXMiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiY3Vyc29yWCIsImNsaWVudFgiLCJsZWZ0IiwicGFyc2VJbnQiLCJib3JkZXJMZWZ0V2lkdGgiLCJjdXJzb3JZIiwiY2xpZW50WSIsInRvcCIsImJvcmRlclRvcFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxJQUFJQSxNQUFNLEdBQUcsSUFBSUMsZ0VBQUosRUFBYixDLENBQ0E7O0FBQ0FDLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsR0FBYixDQUFpQixZQUFqQixFQUErQixXQUEvQjtBQUNBRCxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFFLFNBQWIsQ0FBdUIsVUFBU0MsS0FBVCxFQUFnQjtBQUNyQ0MsV0FBUyxDQUFDRCxLQUFELENBQVQ7QUFDRCxDQUZEO0FBR0FILENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWUssTUFBWixDQUFtQixVQUFTRixLQUFULEVBQWdCO0FBQ2pDRyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxHQUFSLEVBQVo7QUFDQVYsUUFBTSxDQUFDVyxHQUFQLENBQVdDLFFBQVgsQ0FBb0JWLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsR0FBUixFQUFwQjtBQUNELENBSEQ7QUFJQVIsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZVyxLQUFaLENBQWtCQyxRQUFsQjs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCO0FBQ0FaLEdB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QUFDQTtBQUNBOztBQUVBLHNCQUFzQixnREFBZ0Q7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQSxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxpQ0FBaUMsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRTlFO0FBQ0E7QUFDQSxHQUFHLHlFQUF5RTtBQUM1RTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1JELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsNkJBQTZCLG1CQUFPLENBQUMsNkVBQXdCOztBQUU3RDtBQUNBO0FBQ0EsR0FBRywyREFBMkQ7QUFDOUQ7QUFDQSxDQUFDIiwiZmlsZSI6ImNhbnZhc0pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbml0XHJcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vanNDbGFzcy9jYW52YXMuY2xhc3MuanNcIlxyXG52YXIgY2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4vL2luaXRCaW5kXHJcbiQoXCIjY2FudmFzXCIpLmNzcygnYmFja2dyb3VuZCcsICdzdGVlbGJsdWUnKTtcclxuJChcIiNjYW52YXNcIikubW91c2Vkb3duKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgbW91c2VEb3duKGV2ZW50KTtcclxufSk7XHJcbiQoXCIjY29sb3JcIikuY2hhbmdlKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgY29uc29sZS5sb2coJCh0aGlzKS52YWwoKSlcclxuICBjYW52YXMucGVuLnNldENvbG9yKCQodGhpcykudmFsKCkpXHJcbn0pO1xyXG4kKFwiI2dvbW1lXCIpLmNsaWNrKGVyYXNlck9uKTtcclxuXHJcbmZ1bmN0aW9uIGVyYXNlck9uKCkge1xyXG4gIC8vIGFjdGlvbiBxdWFuZCBvbiBlbnRyZSBlbiBtb2RlIGVmZmFjZW1lbnRcclxuICAkKFwiI2dvbW1lXCIpLnVuYmluZCgnY2xpY2snKVxyXG4gICQoXCIjZ29tbWVcIikuY2xpY2soZXJhc2VyT2ZmKTtcclxuICAkKCcjZ29tbWUnKS5hZGRDbGFzcygnc2VsZWN0ZWQnKVxyXG4gIGNhbnZhcy5lcmFzZXJPbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlcmFzZXJPZmYoKSB7XHJcbiAgLy8gYWN0aW9uIHF1YW5kIG9uIHNvcnQgZHUgbW9kZSBlZmZhY2VtZW50XHJcbiAgJChcIiNnb21tZVwiKS51bmJpbmQoJ2NsaWNrJylcclxuICAkKFwiI2dvbW1lXCIpLmNsaWNrKGVyYXNlck9uKTtcclxuICAkKCcjZ29tbWUnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKVxyXG4gIGNhbnZhcy5lcmFzZXJPZmYoKTtcclxufVxyXG4kKFwiI2J0bkVyYXNlXCIpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgY2FudmFzLmNsZWFyQWxsKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbW91c2VEb3duKGUpIHtcclxuICAvLyBhY3Rpb24gcXVhbmQgb24gZW50cmUgZW4gbW9kZSBlY3JpdHVyZVxyXG4gIGNvbnNvbGUubG9nKCdtb3VzZWRvd24nKTtcclxuICBjYW52YXMuc3RhcnREcmF3TGluZShlKVxyXG4gICQoXCIjY2FudmFzXCIpLm1vdXNlbW92ZShmdW5jdGlvbihldmVudCkge1xyXG4gICAgY2FudmFzLmNvbnRpbnVlRHJhd0xpbmUoZXZlbnQpXHJcbiAgICAkKFwiI2NhbnZhc1wiKS51bmJpbmQoJ21vdXNlZG93bicpO1xyXG4gIH0pO1xyXG4gICQoXCIjY2FudmFzXCIpLm1vdXNldXAoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIG1vdXNlVXAoZXZlbnQpO1xyXG4gIH0pO1xyXG4gICQoXCIjY2FudmFzXCIpLm1vdXNlb3V0KGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBtb3VzZVVwKGV2ZW50KTtcclxuICB9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNlVXAoZSkge1xyXG4gIC8vIGFjdGlvbiBxdWFuZCBvbiBzb3J0IGR1IG1vZGUgZWNyaXR1cmVcclxuICBjb25zb2xlLmxvZygnbW91c2V1cCcpO1xyXG4gIGNhbnZhcy5lbmREcmF3TGluZSgpXHJcbiAgJChcIiNjYW52YXNcIikudW5iaW5kKCdtb3VzZW1vdmUnKTtcclxuICAkKFwiI2NhbnZhc1wiKS51bmJpbmQoKVxyXG4gICQoXCIjY2FudmFzXCIpLm1vdXNlZG93bihmdW5jdGlvbihldmVudCkge1xyXG4gICAgJChcIiNjYW52YXNcIikudW5iaW5kKClcclxuICAgIG1vdXNlRG93bihldmVudCk7XHJcbiAgfSk7XHJcblxyXG59XHJcbiIsImltcG9ydCBQZW4gZnJvbSBcIi4vcGVuLmNsYXNzLmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcclxuICAvLyBjbGFzcyBxdWkgY29udHJvbGxlIGRhbnMgcXVlbGxlIG1vZGUgb24gc2UgdHJvdXZlIGV0IHRyYWNlIGxlcyB0cmFpdHNcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5wZW4gPSBuZXcgUGVuKClcclxuICB9XHJcbiAgZHJhd0xpbmUoZXZlbnQpIHtcclxuXHJcbiAgfVxyXG4gIGVyYXNlck9uKCl7XHJcbiAgICAvLyBUT0RPOiBjaGFuZ2UgbGluZVdpZHRoXHJcbiAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVkT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XHJcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAyMDA7XHJcbiAgfVxyXG4gIGVyYXNlck9mZigpe1xyXG4gICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcclxuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMucGVuLmdldFdpZHRoKCk7XHJcbiAgfVxyXG4gIGNsZWFyQWxsKCl7XHJcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgfVxyXG4gIHN0YXJ0RHJhd0xpbmUoZXZlbnQpIHtcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5wZW4uZ2V0V2lkdGgoKTtcclxuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5wZW4uZ2V0Q29sb3IoKTtcclxuICAgIHRoaXMuY3R4LmxpbmVDYXAgPSAncm91bmQnO1xyXG4gICAgdGhpcy5jdHgubGluZUpvaW4gPSAncm91bmQnO1xyXG4gICAgdmFyIHBvcyA9IHRoaXMucGVuLmdldFBvcyhldmVudCwgdGhpcy5jYW52YXMpO1xyXG4gICAgY29uc29sZS5sb2cocG9zKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3MueCwgcG9zLnkpO1xyXG4gICAgdGhpcy5jdHguc3Ryb2tlKClcclxuICB9XHJcbiAgY29udGludWVEcmF3TGluZShldmVudCkge1xyXG4gICAgdmFyIHBvcyA9IHRoaXMucGVuLmdldFBvcyhldmVudCx0aGlzLmNhbnZhcyk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zLngsIHBvcy55KTtcclxuICAgIHRoaXMuY3R4LnN0cm9rZSgpXHJcblxyXG4gIH1cclxuICBlbmREcmF3TGluZSgpIHtcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlbiB7XHJcbiAgLy8gb2JqZXQgcG91ciByZXByZXNlbnRlciBsZSBzdHlsbyBhdmVjIHNhIGNvdWxldXIsdGFpbGxlLHBvc2l0aW9uXHJcbiAgY29uc3RydWN0b3IoY29sb3I9J2JsYWNrJyx3aWR0aD0nNScpIHtcclxuICAgIHRoaXMuY29sb3I9Y29sb3I7XHJcbiAgICB0aGlzLndpZHRoPXdpZHRoO1xyXG4gIH1cclxuICBzZXRDb2xvcihuZXdDb2xvcil7XHJcbiAgICB0aGlzLmNvbG9yPW5ld0NvbG9yXHJcbiAgfVxyXG4gIHNldFdpZHRoKG5ld1dpZHRoKXtcclxuICAgIHRoaXMud2lkdGg9bmV3V2lkdGhcclxuICB9XHJcbiAgZ2V0Q29sb3IoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbG9yXHJcbiAgfVxyXG4gIGdldFdpZHRoKCl7XHJcbiAgICByZXR1cm4gdGhpcy53aWR0aFxyXG4gIH1cclxuICBnZXRQb3MoZSxjYW52YXMpIHtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpO1xyXG4gICAgICAgIHZhciBjdXJzb3JYID0gZS5jbGllbnRYIC0gb2Zmc2V0LmxlZnQgLSBwYXJzZUludChzdHlsZXMuYm9yZGVyTGVmdFdpZHRoKTtcclxuICAgICAgICB2YXIgY3Vyc29yWSA9IGUuY2xpZW50WSAtIG9mZnNldC50b3AgLSBwYXJzZUludChzdHlsZXMuYm9yZGVyVG9wV2lkdGgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB4OiBjdXJzb3JYLFxyXG4gICAgICAgICAgeTogY3Vyc29yWVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxufVxyXG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBuYXRpdmVQYXJzZUludCA9IGdsb2JhbC5wYXJzZUludDtcbnZhciBoZXggPSAvXlsrLV0/MFtYeF0vO1xudmFyIEZPUkNFRCA9IG5hdGl2ZVBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzA4JykgIT09IDggfHwgbmF0aXZlUGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiBuYXRpdmVQYXJzZUludChTLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChTKSA/IDE2IDogMTApKTtcbn0gOiBuYXRpdmVQYXJzZUludDtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFERVNDUklQVE9SUywgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZGVmaW5lUHJvcGVydHk6IG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlLmZcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==