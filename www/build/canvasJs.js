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
      console.log("eraserOn");
      this.ctx.globalCompositeOperation = 'destination-out';
      this.pen.width = 20;
    }
  }, {
    key: "eraserOff",
    value: function eraserOff() {
      console.log("eraseroff");
      this.ctx.globalCompositeOperation = 'source-over';
      this.pen.width = 5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FudmFzL2NhbnZhc01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NhbnZhcy9qc0NsYXNzL2NhbnZhcy5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FudmFzL2pzQ2xhc3MvcGVuLmNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93aGl0ZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiQ2FudmFzIiwiJCIsImNzcyIsIm1vdXNlZG93biIsImV2ZW50IiwibW91c2VEb3duIiwiY2hhbmdlIiwiY29uc29sZSIsImxvZyIsInZhbCIsInBlbiIsInNldENvbG9yIiwiY2xpY2siLCJlcmFzZXJPbiIsInVuYmluZCIsImVyYXNlck9mZiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjbGVhckFsbCIsImUiLCJzdGFydERyYXdMaW5lIiwibW91c2Vtb3ZlIiwiY29udGludWVEcmF3TGluZSIsIm1vdXNldXAiLCJtb3VzZVVwIiwibW91c2VvdXQiLCJlbmREcmF3TGluZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiUGVuIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwid2lkdGgiLCJjbGVhclJlY3QiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJsaW5lV2lkdGgiLCJnZXRXaWR0aCIsInN0cm9rZVN0eWxlIiwiZ2V0Q29sb3IiLCJsaW5lQ2FwIiwibGluZUpvaW4iLCJwb3MiLCJnZXRQb3MiLCJsaW5lVG8iLCJ4IiwieSIsInN0cm9rZSIsImNsb3NlUGF0aCIsImNvbG9yIiwibmV3Q29sb3IiLCJuZXdXaWR0aCIsIm9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0eWxlcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJjdXJzb3JYIiwiY2xpZW50WCIsImxlZnQiLCJwYXJzZUludCIsImJvcmRlckxlZnRXaWR0aCIsImN1cnNvclkiLCJjbGllbnRZIiwidG9wIiwiYm9yZGVyVG9wV2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLElBQUlBLE1BQU0sR0FBRyxJQUFJQyxnRUFBSixFQUFiLEMsQ0FDQTs7QUFDQUMsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxHQUFiLENBQWlCLFlBQWpCLEVBQStCLFdBQS9CO0FBQ0FELENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUUsU0FBYixDQUF1QixVQUFTQyxLQUFULEVBQWdCO0FBQ3JDQyxXQUFTLENBQUNELEtBQUQsQ0FBVDtBQUNELENBRkQ7QUFHQUgsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZSyxNQUFaLENBQW1CLFVBQVNGLEtBQVQsRUFBZ0I7QUFDakNHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLEdBQVIsRUFBWjtBQUNBVixRQUFNLENBQUNXLEdBQVAsQ0FBV0MsUUFBWCxDQUFvQlYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxHQUFSLEVBQXBCO0FBQ0QsQ0FIRDtBQUlBUixDQUFDLENBQUMsUUFBRCxDQUFELENBQVlXLEtBQVosQ0FBa0JDLFFBQWxCOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEI7QUFDQVosR0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZYSxNQUFa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QU8sQ0FBQyxpRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsZ0RBQWdEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQsaUNBQWlDLG1CQUFPLENBQUMsdUdBQXFDOztBQUU5RTtBQUNBO0FBQ0EsR0FBRyx5RUFBeUU7QUFDNUU7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNSRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLDZCQUE2QixtQkFBTyxDQUFDLDZFQUF3Qjs7QUFFN0Q7QUFDQTtBQUNBLEdBQUcsMkRBQTJEO0FBQzlEO0FBQ0EsQ0FBQyIsImZpbGUiOiJjYW52YXNKcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5pdFxyXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL2pzQ2xhc3MvY2FudmFzLmNsYXNzLmpzXCJcclxudmFyIGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuLy9pbml0QmluZFxyXG4kKFwiI2NhbnZhc1wiKS5jc3MoJ2JhY2tncm91bmQnLCAnc3RlZWxibHVlJyk7XHJcbiQoXCIjY2FudmFzXCIpLm1vdXNlZG93bihmdW5jdGlvbihldmVudCkge1xyXG4gIG1vdXNlRG93bihldmVudCk7XHJcbn0pO1xyXG4kKFwiI2NvbG9yXCIpLmNoYW5nZShmdW5jdGlvbihldmVudCkge1xyXG4gIGNvbnNvbGUubG9nKCQodGhpcykudmFsKCkpXHJcbiAgY2FudmFzLnBlbi5zZXRDb2xvcigkKHRoaXMpLnZhbCgpKVxyXG59KTtcclxuJChcIiNnb21tZVwiKS5jbGljayhlcmFzZXJPbik7XHJcblxyXG5mdW5jdGlvbiBlcmFzZXJPbigpIHtcclxuICAvLyBhY3Rpb24gcXVhbmQgb24gZW50cmUgZW4gbW9kZSBlZmZhY2VtZW50XHJcbiAgJChcIiNnb21tZVwiKS51bmJpbmQoJ2NsaWNrJylcclxuICAkKFwiI2dvbW1lXCIpLmNsaWNrKGVyYXNlck9mZik7XHJcbiAgJCgnI2dvbW1lJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJylcclxuICBjYW52YXMuZXJhc2VyT24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXJhc2VyT2ZmKCkge1xyXG4gIC8vIGFjdGlvbiBxdWFuZCBvbiBzb3J0IGR1IG1vZGUgZWZmYWNlbWVudFxyXG4gICQoXCIjZ29tbWVcIikudW5iaW5kKCdjbGljaycpXHJcbiAgJChcIiNnb21tZVwiKS5jbGljayhlcmFzZXJPbik7XHJcbiAgJCgnI2dvbW1lJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJylcclxuICBjYW52YXMuZXJhc2VyT2ZmKCk7XHJcbn1cclxuJChcIiNidG5FcmFzZVwiKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gIGNhbnZhcy5jbGVhckFsbCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG1vdXNlRG93bihlKSB7XHJcbiAgLy8gYWN0aW9uIHF1YW5kIG9uIGVudHJlIGVuIG1vZGUgZWNyaXR1cmVcclxuICBjb25zb2xlLmxvZygnbW91c2Vkb3duJyk7XHJcbiAgY2FudmFzLnN0YXJ0RHJhd0xpbmUoZSlcclxuICAkKFwiI2NhbnZhc1wiKS5tb3VzZW1vdmUoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGNhbnZhcy5jb250aW51ZURyYXdMaW5lKGV2ZW50KVxyXG4gICAgJChcIiNjYW52YXNcIikudW5iaW5kKCdtb3VzZWRvd24nKTtcclxuICB9KTtcclxuICAkKFwiI2NhbnZhc1wiKS5tb3VzZXVwKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBtb3VzZVVwKGV2ZW50KTtcclxuICB9KTtcclxuICAkKFwiI2NhbnZhc1wiKS5tb3VzZW91dChmdW5jdGlvbihldmVudCkge1xyXG4gICAgbW91c2VVcChldmVudCk7XHJcbiAgfSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VzZVVwKGUpIHtcclxuICAvLyBhY3Rpb24gcXVhbmQgb24gc29ydCBkdSBtb2RlIGVjcml0dXJlXHJcbiAgY29uc29sZS5sb2coJ21vdXNldXAnKTtcclxuICBjYW52YXMuZW5kRHJhd0xpbmUoKVxyXG4gICQoXCIjY2FudmFzXCIpLnVuYmluZCgnbW91c2Vtb3ZlJyk7XHJcbiAgJChcIiNjYW52YXNcIikudW5iaW5kKClcclxuICAkKFwiI2NhbnZhc1wiKS5tb3VzZWRvd24oZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICQoXCIjY2FudmFzXCIpLnVuYmluZCgpXHJcbiAgICBtb3VzZURvd24oZXZlbnQpO1xyXG4gIH0pO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgUGVuIGZyb20gXCIuL3Blbi5jbGFzcy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XHJcbiAgLy8gY2xhc3MgcXVpIGNvbnRyb2xsZSBkYW5zIHF1ZWxsZSBtb2RlIG9uIHNlIHRyb3V2ZSBldCB0cmFjZSBsZXMgdHJhaXRzXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMucGVuID0gbmV3IFBlbigpXHJcbiAgfVxyXG4gIGRyYXdMaW5lKGV2ZW50KSB7XHJcblxyXG4gIH1cclxuICBlcmFzZXJPbigpe1xyXG4gICAgLy8gVE9ETzogY2hhbmdlIGxpbmVXaWR0aFxyXG4gICAgY29uc29sZS5sb2coXCJlcmFzZXJPblwiKTtcclxuICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnO1xyXG4gICAgdGhpcy5wZW4ud2lkdGggPSAyMFxyXG5cclxuICB9XHJcbiAgZXJhc2VyT2ZmKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcImVyYXNlcm9mZlwiKTtcclxuICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XHJcbiAgICB0aGlzLnBlbi53aWR0aCA9IDVcclxuICB9XHJcbiAgY2xlYXJBbGwoKXtcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICB9XHJcbiAgc3RhcnREcmF3TGluZShldmVudCkge1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnBlbi5nZXRXaWR0aCgpO1xyXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnBlbi5nZXRDb2xvcigpO1xyXG4gICAgdGhpcy5jdHgubGluZUNhcCA9ICdyb3VuZCc7XHJcbiAgICB0aGlzLmN0eC5saW5lSm9pbiA9ICdyb3VuZCc7XHJcbiAgICB2YXIgcG9zID0gdGhpcy5wZW4uZ2V0UG9zKGV2ZW50LCB0aGlzLmNhbnZhcyk7XHJcbiAgICBjb25zb2xlLmxvZyhwb3MpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvcy54LCBwb3MueSk7XHJcbiAgICB0aGlzLmN0eC5zdHJva2UoKVxyXG4gIH1cclxuICBjb250aW51ZURyYXdMaW5lKGV2ZW50KSB7XHJcbiAgICB2YXIgcG9zID0gdGhpcy5wZW4uZ2V0UG9zKGV2ZW50LHRoaXMuY2FudmFzKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhwb3MueCwgcG9zLnkpO1xyXG4gICAgdGhpcy5jdHguc3Ryb2tlKClcclxuXHJcbiAgfVxyXG4gIGVuZERyYXdMaW5lKCkge1xyXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKClcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVuIHtcclxuICAvLyBvYmpldCBwb3VyIHJlcHJlc2VudGVyIGxlIHN0eWxvIGF2ZWMgc2EgY291bGV1cix0YWlsbGUscG9zaXRpb25cclxuICBjb25zdHJ1Y3Rvcihjb2xvcj0nYmxhY2snLHdpZHRoPSc1Jykge1xyXG4gICAgdGhpcy5jb2xvcj1jb2xvcjtcclxuICAgIHRoaXMud2lkdGg9d2lkdGg7XHJcbiAgfVxyXG4gIHNldENvbG9yKG5ld0NvbG9yKXtcclxuICAgIHRoaXMuY29sb3I9bmV3Q29sb3JcclxuICB9XHJcbiAgc2V0V2lkdGgobmV3V2lkdGgpe1xyXG4gICAgdGhpcy53aWR0aD1uZXdXaWR0aFxyXG4gIH1cclxuICBnZXRDb2xvcigpe1xyXG4gICAgcmV0dXJuIHRoaXMuY29sb3JcclxuICB9XHJcbiAgZ2V0V2lkdGgoKXtcclxuICAgIHJldHVybiB0aGlzLndpZHRoXHJcbiAgfVxyXG4gIGdldFBvcyhlLGNhbnZhcykge1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNhbnZhcyk7XHJcbiAgICAgICAgdmFyIGN1cnNvclggPSBlLmNsaWVudFggLSBvZmZzZXQubGVmdCAtIHBhcnNlSW50KHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgpO1xyXG4gICAgICAgIHZhciBjdXJzb3JZID0gZS5jbGllbnRZIC0gb2Zmc2V0LnRvcCAtIHBhcnNlSW50KHN0eWxlcy5ib3JkZXJUb3BXaWR0aCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHg6IGN1cnNvclgsXHJcbiAgICAgICAgICB5OiBjdXJzb3JZXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG59XHJcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIG5hdGl2ZVBhcnNlSW50ID0gZ2xvYmFsLnBhcnNlSW50O1xudmFyIGhleCA9IC9eWystXT8wW1h4XS87XG52YXIgRk9SQ0VEID0gbmF0aXZlUGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCBuYXRpdmVQYXJzZUludCh3aGl0ZXNwYWNlcyArICcweDE2JykgIT09IDIyO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgcmV0dXJuIG5hdGl2ZVBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KFMpID8gMTYgOiAxMCkpO1xufSA6IG5hdGl2ZVBhcnNlSW50O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIURFU0NSSVBUT1JTLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBkZWZpbmVQcm9wZXJ0eTogb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUuZlxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9IHBhcnNlSW50SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRJbXBsZW1lbnRhdGlvblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9