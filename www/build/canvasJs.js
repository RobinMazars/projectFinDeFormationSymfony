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

var canvas = new _jsClass_canvas_class_js__WEBPACK_IMPORTED_MODULE_0__["default"](); //initialisation Bind

$("#canvas").css('background', 'steelblue');
$("#canvas").mousedown(function (event) {
  mouseDown(event);
});
$("#color").change(function (event) {
  // console.log($(this).val())
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
  // console.log('mousedown');
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
  // console.log('mouseup');
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
      // mode effacement
      this.ctx.globalCompositeOperation = 'destination-out';
      this.pen.width = 20;
    }
  }, {
    key: "eraserOff",
    value: function eraserOff() {
      // mode ecriture
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
      var pos = this.pen.getPos(event, this.canvas); // console.log(pos);

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

},[["./assets/js/canvas/canvasMain.js","runtime","vendors~barJs~canvasJs~navJs~pieceJs~tapisJs"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FudmFzL2NhbnZhc01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NhbnZhcy9qc0NsYXNzL2NhbnZhcy5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FudmFzL2pzQ2xhc3MvcGVuLmNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93aGl0ZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiQ2FudmFzIiwiJCIsImNzcyIsIm1vdXNlZG93biIsImV2ZW50IiwibW91c2VEb3duIiwiY2hhbmdlIiwicGVuIiwic2V0Q29sb3IiLCJ2YWwiLCJjbGljayIsImVyYXNlck9uIiwidW5iaW5kIiwiZXJhc2VyT2ZmIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNsZWFyQWxsIiwiZSIsInN0YXJ0RHJhd0xpbmUiLCJtb3VzZW1vdmUiLCJjb250aW51ZURyYXdMaW5lIiwibW91c2V1cCIsIm1vdXNlVXAiLCJtb3VzZW91dCIsImVuZERyYXdMaW5lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJQZW4iLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJ3aWR0aCIsImNsZWFyUmVjdCIsImhlaWdodCIsImJlZ2luUGF0aCIsImxpbmVXaWR0aCIsImdldFdpZHRoIiwic3Ryb2tlU3R5bGUiLCJnZXRDb2xvciIsImxpbmVDYXAiLCJsaW5lSm9pbiIsInBvcyIsImdldFBvcyIsImxpbmVUbyIsIngiLCJ5Iiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiY29sb3IiLCJuZXdDb2xvciIsIm5ld1dpZHRoIiwib2Zmc2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic3R5bGVzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImN1cnNvclgiLCJjbGllbnRYIiwibGVmdCIsInBhcnNlSW50IiwiYm9yZGVyTGVmdFdpZHRoIiwiY3Vyc29yWSIsImNsaWVudFkiLCJ0b3AiLCJib3JkZXJUb3BXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsSUFBSUEsTUFBTSxHQUFHLElBQUlDLGdFQUFKLEVBQWIsQyxDQUNBOztBQUNBQyxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEdBQWIsQ0FBaUIsWUFBakIsRUFBK0IsV0FBL0I7QUFDQUQsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhRSxTQUFiLENBQXVCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDckNDLFdBQVMsQ0FBQ0QsS0FBRCxDQUFUO0FBQ0QsQ0FGRDtBQUdBSCxDQUFDLENBQUMsUUFBRCxDQUFELENBQVlLLE1BQVosQ0FBbUIsVUFBU0YsS0FBVCxFQUFnQjtBQUNqQztBQUNBTCxRQUFNLENBQUNRLEdBQVAsQ0FBV0MsUUFBWCxDQUFvQlAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxHQUFSLEVBQXBCO0FBQ0QsQ0FIRDtBQUlBUixDQUFDLENBQUMsUUFBRCxDQUFELENBQVlTLEtBQVosQ0FBa0JDLFFBQWxCOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEI7QUFDQVYsR0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZVyxNQUFaLENBQW1CLE9BQW5CO0FBQ0FYLEdBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWVMsS0FBWixDQUFrQkcsU0FBbEI7QUFDQVosR0FBQyxD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Ozs7OztBQ0ZBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELGlDQUFpQyxtQkFBTyxDQUFDLHVHQUFxQzs7QUFFOUU7QUFDQTtBQUNBLEdBQUcseUVBQXlFO0FBQzVFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUkQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyw2QkFBNkIsbUJBQU8sQ0FBQyw2RUFBd0I7O0FBRTdEO0FBQ0E7QUFDQSxHQUFHLDJEQUEyRDtBQUM5RDtBQUNBLENBQUMiLCJmaWxlIjoiY2FudmFzSnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luaXRcclxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9qc0NsYXNzL2NhbnZhcy5jbGFzcy5qc1wiXHJcbnZhciBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XHJcbi8vaW5pdGlhbGlzYXRpb24gQmluZFxyXG4kKFwiI2NhbnZhc1wiKS5jc3MoJ2JhY2tncm91bmQnLCAnc3RlZWxibHVlJyk7XHJcbiQoXCIjY2FudmFzXCIpLm1vdXNlZG93bihmdW5jdGlvbihldmVudCkge1xyXG4gIG1vdXNlRG93bihldmVudCk7XHJcbn0pO1xyXG4kKFwiI2NvbG9yXCIpLmNoYW5nZShmdW5jdGlvbihldmVudCkge1xyXG4gIC8vIGNvbnNvbGUubG9nKCQodGhpcykudmFsKCkpXHJcbiAgY2FudmFzLnBlbi5zZXRDb2xvcigkKHRoaXMpLnZhbCgpKVxyXG59KTtcclxuJChcIiNnb21tZVwiKS5jbGljayhlcmFzZXJPbik7XHJcblxyXG5mdW5jdGlvbiBlcmFzZXJPbigpIHtcclxuICAvLyBhY3Rpb24gcXVhbmQgb24gZW50cmUgZW4gbW9kZSBlZmZhY2VtZW50XHJcbiAgJChcIiNnb21tZVwiKS51bmJpbmQoJ2NsaWNrJylcclxuICAkKFwiI2dvbW1lXCIpLmNsaWNrKGVyYXNlck9mZik7XHJcbiAgJCgnI2dvbW1lJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJylcclxuICBjYW52YXMuZXJhc2VyT24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXJhc2VyT2ZmKCkge1xyXG4gIC8vIGFjdGlvbiBxdWFuZCBvbiBzb3J0IGR1IG1vZGUgZWZmYWNlbWVudFxyXG4gICQoXCIjZ29tbWVcIikudW5iaW5kKCdjbGljaycpXHJcbiAgJChcIiNnb21tZVwiKS5jbGljayhlcmFzZXJPbik7XHJcbiAgJCgnI2dvbW1lJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJylcclxuICBjYW52YXMuZXJhc2VyT2ZmKCk7XHJcbn1cclxuJChcIiNidG5FcmFzZVwiKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gIGNhbnZhcy5jbGVhckFsbCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG1vdXNlRG93bihlKSB7XHJcbiAgLy8gYWN0aW9uIHF1YW5kIG9uIGVudHJlIGVuIG1vZGUgZWNyaXR1cmVcclxuICAvLyBjb25zb2xlLmxvZygnbW91c2Vkb3duJyk7XHJcbiAgY2FudmFzLnN0YXJ0RHJhd0xpbmUoZSlcclxuICAkKFwiI2NhbnZhc1wiKS5tb3VzZW1vdmUoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGNhbnZhcy5jb250aW51ZURyYXdMaW5lKGV2ZW50KVxyXG4gICAgJChcIiNjYW52YXNcIikudW5iaW5kKCdtb3VzZWRvd24nKTtcclxuICB9KTtcclxuICAkKFwiI2NhbnZhc1wiKS5tb3VzZXVwKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBtb3VzZVVwKGV2ZW50KTtcclxuICB9KTtcclxuICAkKFwiI2NhbnZhc1wiKS5tb3VzZW91dChmdW5jdGlvbihldmVudCkge1xyXG4gICAgbW91c2VVcChldmVudCk7XHJcbiAgfSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VzZVVwKGUpIHtcclxuICAvLyBhY3Rpb24gcXVhbmQgb24gc29ydCBkdSBtb2RlIGVjcml0dXJlXHJcbiAgLy8gY29uc29sZS5sb2coJ21vdXNldXAnKTtcclxuICBjYW52YXMuZW5kRHJhd0xpbmUoKVxyXG4gICQoXCIjY2FudmFzXCIpLnVuYmluZCgnbW91c2Vtb3ZlJyk7XHJcbiAgJChcIiNjYW52YXNcIikudW5iaW5kKClcclxuICAkKFwiI2NhbnZhc1wiKS5tb3VzZWRvd24oZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICQoXCIjY2FudmFzXCIpLnVuYmluZCgpXHJcbiAgICBtb3VzZURvd24oZXZlbnQpO1xyXG4gIH0pO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgUGVuIGZyb20gXCIuL3Blbi5jbGFzcy5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XHJcbiAgLy8gY2xhc3MgcXVpIGNvbnRyb2xsZSBkYW5zIHF1ZWxsZSBtb2RlIG9uIHNlIHRyb3V2ZSBldCB0cmFjZSBsZXMgdHJhaXRzXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMucGVuID0gbmV3IFBlbigpXHJcbiAgfVxyXG4gIGRyYXdMaW5lKGV2ZW50KSB7XHJcblxyXG4gIH1cclxuICBlcmFzZXJPbigpe1xyXG4gICAgLy8gbW9kZSBlZmZhY2VtZW50XHJcbiAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcclxuICAgIHRoaXMucGVuLndpZHRoID0gMjBcclxuXHJcbiAgfVxyXG4gIGVyYXNlck9mZigpe1xyXG4gICAgLy8gbW9kZSBlY3JpdHVyZVxyXG4gICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcclxuICAgIHRoaXMucGVuLndpZHRoID0gNVxyXG4gIH1cclxuICBjbGVhckFsbCgpe1xyXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gIH1cclxuICBzdGFydERyYXdMaW5lKGV2ZW50KSB7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMucGVuLmdldFdpZHRoKCk7XHJcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMucGVuLmdldENvbG9yKCk7XHJcbiAgICB0aGlzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJztcclxuICAgIHRoaXMuY3R4LmxpbmVKb2luID0gJ3JvdW5kJztcclxuICAgIHZhciBwb3MgPSB0aGlzLnBlbi5nZXRQb3MoZXZlbnQsIHRoaXMuY2FudmFzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBvcyk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8ocG9zLngsIHBvcy55KTtcclxuICAgIHRoaXMuY3R4LnN0cm9rZSgpXHJcbiAgfVxyXG4gIGNvbnRpbnVlRHJhd0xpbmUoZXZlbnQpIHtcclxuICAgIHZhciBwb3MgPSB0aGlzLnBlbi5nZXRQb3MoZXZlbnQsdGhpcy5jYW52YXMpO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKHBvcy54LCBwb3MueSk7XHJcbiAgICB0aGlzLmN0eC5zdHJva2UoKVxyXG5cclxuICB9XHJcbiAgZW5kRHJhd0xpbmUoKSB7XHJcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQZW4ge1xyXG4gIC8vIG9iamV0IHBvdXIgcmVwcmVzZW50ZXIgbGUgc3R5bG8gYXZlYyBzYSBjb3VsZXVyLHRhaWxsZSxwb3NpdGlvblxyXG4gIGNvbnN0cnVjdG9yKGNvbG9yPSdibGFjaycsd2lkdGg9JzUnKSB7XHJcbiAgICB0aGlzLmNvbG9yPWNvbG9yO1xyXG4gICAgdGhpcy53aWR0aD13aWR0aDtcclxuICB9XHJcbiAgc2V0Q29sb3IobmV3Q29sb3Ipe1xyXG4gICAgdGhpcy5jb2xvcj1uZXdDb2xvclxyXG4gIH1cclxuICBzZXRXaWR0aChuZXdXaWR0aCl7XHJcbiAgICB0aGlzLndpZHRoPW5ld1dpZHRoXHJcbiAgfVxyXG4gIGdldENvbG9yKCl7XHJcbiAgICByZXR1cm4gdGhpcy5jb2xvclxyXG4gIH1cclxuICBnZXRXaWR0aCgpe1xyXG4gICAgcmV0dXJuIHRoaXMud2lkdGhcclxuICB9XHJcbiAgZ2V0UG9zKGUsY2FudmFzKSB7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB2YXIgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FudmFzKTtcclxuICAgICAgICB2YXIgY3Vyc29yWCA9IGUuY2xpZW50WCAtIG9mZnNldC5sZWZ0IC0gcGFyc2VJbnQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCk7XHJcbiAgICAgICAgdmFyIGN1cnNvclkgPSBlLmNsaWVudFkgLSBvZmZzZXQudG9wIC0gcGFyc2VJbnQoc3R5bGVzLmJvcmRlclRvcFdpZHRoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgeDogY3Vyc29yWCxcclxuICAgICAgICAgIHk6IGN1cnNvcllcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbn1cclxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgbmF0aXZlUGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSBuYXRpdmVQYXJzZUludCh3aGl0ZXNwYWNlcyArICcwOCcpICE9PSA4IHx8IG5hdGl2ZVBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzB4MTYnKSAhPT0gMjI7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyaW5nLCByYWRpeCkge1xuICB2YXIgUyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gbmF0aXZlUGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogbmF0aXZlUGFyc2VJbnQ7XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbWVuZFxuICBlbmQ6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvYmplY3REZWZpbmVQcm9wZXJ0eU1vZGlsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhREVTQ1JJUFRPUlMsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGRlZmluZVByb3BlcnR5OiBvYmplY3REZWZpbmVQcm9wZXJ0eU1vZGlsZS5mXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlSW50SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGFyc2UtaW50Jyk7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlSW50OiBwYXJzZUludEltcGxlbWVudGF0aW9uXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=