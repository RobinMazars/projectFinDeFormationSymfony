(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pieceJs"],{

/***/ "./assets/js/piece/pieceMain.js":
/*!**************************************!*\
  !*** ./assets/js/piece/pieceMain.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

$("#playBtn").mousedown(function (event) {
  console.log("clic");
  $("#piece").toggleClass('move');
  setTimeout(function () {
    $("#piece").removeClass('move');
    console.log("remove");
  }, 1500);
});
$("#playBtn2").mousedown(function (event) {
  console.log("clic2");
  $("#pieceFace2").toggleClass('move2');
  $("#piecePile2").toggleClass('move2b');
  setTimeout(function () {
    $("#pieceFace2").removeClass('move2');
    $("#piecePile2").removeClass('move2b');
    console.log("remove2");
  }, 3000);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/user-agent.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/user-agent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},[["./assets/js/piece/pieceMain.js","runtime","vendors~barJs~canvasJs~navJs~pieceJs~tapisJs"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGllY2UvcGllY2VNYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2VyLWFnZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyIkIiwibW91c2Vkb3duIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlQ2xhc3MiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY0MsU0FBZCxDQUF3QixVQUFTQyxLQUFULEVBQWdCO0FBQ3RDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FKLEdBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWUssV0FBWixDQUF3QixNQUF4QjtBQUNBQyxZQUFVLENBQUMsWUFBVztBQUNwQk4sS0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZTyxXQUFaLENBQXdCLE1BQXhCO0FBQ0FKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDSCxHQUhXLEVBR1QsSUFIUyxDQUFWO0FBSUQsQ0FQRDtBQVFBSixDQUFDLENBQUMsV0FBRCxDQUFELENBQWVDLFNBQWYsQ0FBeUIsVUFBU0MsS0FBVCxFQUFnQjtBQUN2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBSixHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCSyxXQUFqQixDQUE2QixPQUE3QjtBQUNBTCxHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCSyxXQUFqQixDQUE2QixRQUE3QjtBQUNBQyxZQUFVLENBQUMsWUFBVztBQUNwQk4sS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQk8sV0FBakIsQ0FBNkIsT0FBN0I7QUFDQVAsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQk8sV0FBakIsQ0FBNkIsUUFBN0I7QUFDQUosV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNILEdBSlcsRUFJVCxJQUpTLENBQVY7QUFLRCxDQVRELEU7Ozs7Ozs7Ozs7OztBQ1JBLGlCQUFpQixtQkFBTyxDQUFDLG1GQUEyQjs7QUFFcEQ7Ozs7Ozs7Ozs7OztBQ0ZBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7O0FBRWpEO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6InBpZWNlSnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKFwiI3BsYXlCdG5cIikubW91c2Vkb3duKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgY29uc29sZS5sb2coXCJjbGljXCIpO1xyXG4gICQoXCIjcGllY2VcIikudG9nZ2xlQ2xhc3MoJ21vdmUnKVxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCl7XHJcbiAgICAkKFwiI3BpZWNlXCIpLnJlbW92ZUNsYXNzKCdtb3ZlJylcclxuICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlXCIpO1xyXG59LCAxNTAwKTtcclxufSk7XHJcbiQoXCIjcGxheUJ0bjJcIikubW91c2Vkb3duKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgY29uc29sZS5sb2coXCJjbGljMlwiKTtcclxuICAkKFwiI3BpZWNlRmFjZTJcIikudG9nZ2xlQ2xhc3MoJ21vdmUyJylcclxuICAkKFwiI3BpZWNlUGlsZTJcIikudG9nZ2xlQ2xhc3MoJ21vdmUyYicpXHJcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKXtcclxuICAgICQoXCIjcGllY2VGYWNlMlwiKS5yZW1vdmVDbGFzcygnbW92ZTInKVxyXG4gICAgJChcIiNwaWVjZVBpbGUyXCIpLnJlbW92ZUNsYXNzKCdtb3ZlMmInKVxyXG4gICAgY29uc29sZS5sb2coXCJyZW1vdmUyXCIpO1xyXG59LCAzMDAwKTtcclxufSk7XHJcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ25hdmlnYXRvcicsICd1c2VyQWdlbnQnKSB8fCAnJztcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=