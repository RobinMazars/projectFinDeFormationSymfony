(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tapisJs"],{

/***/ "./assets/js/tapis/jsClass/AbstractObject.class.js":
/*!*********************************************************!*\
  !*** ./assets/js/tapis/jsClass/AbstractObject.class.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractObject; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// console.log('class AbstractObject load');
var AbstractObject =
/*#__PURE__*/
function () {
  // class mère pour les figures avec les propriété de base
  function AbstractObject(pos) {
    _classCallCheck(this, AbstractObject);

    this.pos = pos;
    this.idMyself();
  }

  _createClass(AbstractObject, [{
    key: "idMyself",
    value: function idMyself() {
      if (this.constructor.id == undefined) {
        this.constructor.id = 1;
      } else {
        this.constructor.id++;
      } //console.log(this.constructor.id);


      this.id = this.constructor.id;
    }
  }, {
    key: "getClassNameFromObject",
    value: function getClassNameFromObject() {
      return this.constructor.name;
    }
  }, {
    key: "getClass",
    value: function getClass() {
      return this.constructor;
    }
  }, {
    key: "setSvg",
    value: function setSvg(idDef) {
      var width = 50;
      var height = 50;
      var origin = {};
      origin = this.getCenter(width, height); //console.log(origin.string);

      var angle = 90 * this.pos.direction;
      var originRotation = this.getBottomLeft(width, height);
      this.originX = parseInt(this.pos.x) + width / 2;
      this.originY = parseInt(this.pos.y) + height / 2;
      this.svg = '<rect id="object-' + this.getId() + '" width=' + width + ' height=' + height + ' x=' + this.pos.x + '  y=' + this.pos.y + ' fill="url(#' + idDef + ')" transform="rotate(' + angle + " " + this.originX + " " + this.originY + ')"/>';
    }
  }, {
    key: "getCenter",
    value: function getCenter(width, height) {
      var center = {}; //console.log(this.pos);

      center.x = parseInt(this.pos.x) + width / 2;
      center.y = parseInt(this.pos.y) + height / 2; //console.log("center");

      center.string = center.x + ' ' + center.y;
      return center;
    }
  }, {
    key: "getBottomLeft",
    value: function getBottomLeft(width, height) {
      var coteBottomLeft = {};
      coteBottomLeft.x = parseInt(this.pos.x);
      coteBottomLeft.y = parseInt(this.pos.y) + height;
      coteBottomLeft.string = coteBottomLeft.x + ' ' + coteBottomLeft.y;
      return coteBottomLeft;
    }
  }, {
    key: "getBottomRight",
    value: function getBottomRight(width, height) {
      var coteBottomRight = {};
      coteBottomRight.x = parseInt(this.pos.x) + width;
      coteBottomRight.y = parseInt(this.pos.y) + height;
      coteBottomRight.string = coteBottomRight.x + ' ' + coteBottomRight.y;
      return coteBottomRight;
    }
  }, {
    key: "getSvg",
    value: function getSvg() {
      return this.svg;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.getClassNameFromObject() + this.id;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return rhs.pos;
    }
  }], [{
    key: "def",
    value: function def() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'red';
      var idName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Default';
      var pattern = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'M0 0 L0 10 L10 10 L10 0';
      var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '100%';
      var height = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '100%';
      var def = $("<defs></defs>");
      var patern = $('<pattern id=' + idName + ' viewBox="0,0,10,10" width=' + width + ' height=' + height + ' >');
      var image = '<path id=path-' + idName + ' fill=' + color + ' d="' + pattern + '"/>';
      patern = patern.html(image);
      def = def.append(patern);
      return def;
    }
  }, {
    key: "haveMultipleDef",
    value: function haveMultipleDef() {
      return false;
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      return this.name;
    }
  }]);

  return AbstractObject;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/tapis/jsClass/DomController.class.js":
/*!********************************************************!*\
  !*** ./assets/js/tapis/jsClass/DomController.class.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DomController; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// console.log('class DomController load');
var DomController =
/*#__PURE__*/
function () {
  // controlle la plupart des création,detection,supression d'element HTML
  function DomController() {
    _classCallCheck(this, DomController);

    this.nbrSaveButton = 9;
    var div = this.creationSaveLoadButton();
    $("#sousSection").prepend(div); //this.creatAll()
    // console.log('endDomController');
  }

  _createClass(DomController, [{
    key: "creationAnimationButton",
    value: function creationAnimationButton() {
      var div = this.creationDomElement('div', 'animationButton');
      var start = this.creationDomElement('button', 'start', 'Start');
      var stop = this.creationDomElement('button', 'stop', 'Stop');
      var oneStep = this.creationDomElement('button', 'oneStep', 'One Step');
      start.attr('type', 'button');
      stop.attr('type', 'button');
      oneStep.attr('type', 'button');
      div.append(start);
      div.append(stop);
      div.append(oneStep);
      return div;
    }
  }, {
    key: "creationSaveLoadButton",
    value: function creationSaveLoadButton() {
      var loadSave = this.creationDomElement('div', 'loadSave');

      for (var i = 0; i < this.nbrSaveButton; i++) {
        var div = this.creationDomElement('div', null, null, 'saveLoad-Buttons');
        var buttonSave = this.creationDomElement('button', null, 'Save n°' + parseInt(i + 1), 'save');
        buttonSave.attr('type', 'button');
        buttonSave.attr('data-id', i + 1);
        var buttonLoad = this.creationDomElement('button', null, 'Load n°' + parseInt(i + 1), 'load');
        buttonLoad.attr('type', 'button');
        buttonLoad.attr('data-id', i + 1);
        var buttonSupre = this.creationDomElement('button', null, '<i class="fas fa-trash-alt"></i>', 'supre');
        buttonSupre.attr('type', 'button');
        buttonSupre.attr('data-id', i + 1);
        div.append(buttonSave);
        div.append(buttonLoad);
        div.append(buttonSupre);
        loadSave.append(div);
      }

      return loadSave;
    }
  }, {
    key: "creationDomElement",
    value: function creationDomElement(type) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var html = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var classe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      // fontion générale pour créer un element
      var element = $("<" + type + "></" + type + ">");

      if (html != null) {
        element.html(html);
      }

      if (id != null) {
        element.attr('id', id);
      }

      if (classe != null) {
        element.addClass(classe);
      }

      return element;
    }
  }]);

  return DomController;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/tapis/jsClass/EventController.class.js":
/*!**********************************************************!*\
  !*** ./assets/js/tapis/jsClass/EventController.class.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventController; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// console.log('class EventController load');
var EventController =
/*#__PURE__*/
function () {
  // controlle les cliques souris et clavier
  function EventController(manipulator, saver) {
    _classCallCheck(this, EventController);

    // console.log('eventController constructor');
    this.manipulator = manipulator;
    this.saver = saver;
    this.actualPosMouse = null;
    this.init();
    this.initSelector();
    this.bindOnCLick();
    this.bindHover();
    this.checkSave();
  }

  _createClass(EventController, [{
    key: "init",
    value: function init() {
      var self = this; // HACK:

      $("#oneStep").click(self.animOneStep);
      $("#start").click(self.animRepeat);
      $("#BtnDemo").click(self.demo);
      this.bindClearAll();
      this.checkSave();
      this.bindAllSaveLoadButtons();
    }
  }, {
    key: "clearSvg",
    value: function clearSvg() {
      self.manipulator.removeAllObject();
    }
  }, {
    key: "checkSave",
    value: function checkSave() {
      var listeSave = this.saver.checkSave(); // console.log(listeSave);

      $(".save").addClass('empty');
      $(".load").addClass('notSave');
      $(".supre").addClass('notSave');

      for (var i = 0; i < listeSave.length; i++) {
        $(".save[data-id=" + listeSave[i] + "]").removeClass('empty');
        $(".load[data-id=" + listeSave[i] + "]").removeClass('notSave');
        $(".supre[data-id=" + listeSave[i] + "]").removeClass('notSave');
      }
    }
  }, {
    key: "bindAllSaveLoadButtons",
    value: function bindAllSaveLoadButtons() {
      self = this;
      $(function () {
        // console.log('bind All');
        self.bindSaveButton();
        self.bindLoadButton();
        self.bindSupreButton();
        self.bindClearAll();
      });
    }
  }, {
    key: "changeButton",
    value: function changeButton(id) {
      // console.log('toogle');
      $(".save[data-id=" + id + "]").toggleClass('empty');
      $(".load[data-id=" + id + "]").toggleClass('notSave');
      $(".supre[data-id=" + id + "]").toggleClass('notSave');
    }
  }, {
    key: "unbindAllSaveLoadButton",
    value: function unbindAllSaveLoadButton() {
      this.unbindLoadButton();
      this.unbindSaveButton();
      this.unbindSupreButton();
      this.unbindClearAll();
    }
  }, {
    key: "bindClearAll",
    value: function bindClearAll() {
      $("#clearSvg").click(self.clearSvg);
    }
  }, {
    key: "unbindClearAll",
    value: function unbindClearAll() {
      $("#clearSvg").unbind('click');
    }
  }, {
    key: "unbindLoadButton",
    value: function unbindLoadButton() {
      $(".load").unbind('click');
    }
  }, {
    key: "unbindSaveButton",
    value: function unbindSaveButton() {
      $(".save").unbind('click');
    }
  }, {
    key: "unbindSupreButton",
    value: function unbindSupreButton() {
      $(".supre").unbind('click');
    }
  }, {
    key: "bindSaveButton",
    value: function bindSaveButton() {
      this.unbindSaveButton();
      $(".save.empty").click(function () {
        self.save($(this).attr('data-id'));
      });
    }
  }, {
    key: "bindLoadButton",
    value: function bindLoadButton() {
      this.unbindLoadButton();
      $(".load:not(.notSave)").click(function () {
        self.load($(this).attr('data-id'));
      });
    }
  }, {
    key: "bindSupreButton",
    value: function bindSupreButton() {
      this.unbindSupreButton();
      $(".supre:not(.notSave)").click(function () {
        self.supre($(this).attr('data-id'));
      });
    }
  }, {
    key: "save",
    value: function save(saveName) {
      this.saver.save(saveName);
      this.changeButton(saveName);
      this.bindAllSaveLoadButtons();
    }
  }, {
    key: "load",
    value: function load(saveName) {
      this.saver.load(saveName);
    }
  }, {
    key: "supre",
    value: function supre(saveName) {
      this.saver.clearSave(saveName);
      this.changeButton(saveName);
      this.bindAllSaveLoadButtons();
    }
  }, {
    key: "bindOnCLick",
    value: function bindOnCLick() {
      // console.log("bindOnCLick");
      var self = this; // HACK:

      $("#frame").mousedown(function (event) {
        //console.log("bind");
        self.onClick(event);
      });
    }
  }, {
    key: "unbindOnCLick",
    value: function unbindOnCLick() {
      // console.log("unbindOnCLick");
      var self = this;
      $("#frame").off("mousedown");
    }
  }, {
    key: "getPosMouse",
    value: function getPosMouse(e) {
      var container = document.getElementById('frame');
      var offset = container.getBoundingClientRect();
      var styles = window.getComputedStyle(container);
      var cursorX = e.clientX - offset.left - parseInt(styles.borderLeftWidth);
      var cursorY = e.clientY - offset.top - parseInt(styles.borderTopWidth); //console.log(cursorX, cursorY);

      return {
        x: cursorX,
        y: cursorY
      };
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      var posMouse = this.getPosMouse(event); // console.log(posMouse);

      var pos = this.manipulator.calcPos(posMouse);
      this.manipulator.placeObject(this.manipulator.selected, pos);
    }
  }, {
    key: "animRepeat",
    value: function animRepeat() {
      self.unbindOnCLick();
      $("#start").unbind('click');
      $("#oneStep").unbind('click');
      self.unbindAllSaveLoadButton();
      $("#stop").click(self.stopAnim);
      self.anim();
      self.loop = setInterval(self.anim, 550);
    }
  }, {
    key: "animOneStep",
    value: function animOneStep() {
      $("#oneStep").unbind('click');
      self.unbindAllSaveLoadButton();
      self.anim();
      setTimeout(function () {
        $("#oneStep").click(self.animOneStep);
        self.bindAllSaveLoadButtons();
      }, 500);
    }
  }, {
    key: "stopAnim",
    value: function stopAnim() {
      $("#BtnDemo").unbind('click');
      $("#BtnDemo").click(self.demo);
      self.bindOnCLick();
      $("#stop").unbind('click');
      clearInterval(self.loop);
      $("#start").click(self.animRepeat);
      $("#oneStep").click(self.animOneStep);
      self.bindAllSaveLoadButtons();
    }
  }, {
    key: "anim",
    value: function anim() {
      self.manipulator.run();
    }
  }, {
    key: "initSelector",
    value: function initSelector() {
      $('.selectorItem:first').addClass('selected');
      this.manipulator.selected = this.manipulator.listeClass[0];
      var manipulator = this.manipulator; // HACK:

      $('.selectorItem').click(function (event) {
        manipulator.changeSelector(this);
      });
    }
  }, {
    key: "bindHover",
    value: function bindHover(e) {
      self = this;
      $('#frame').hover(function (e) {
        $(this).mousemove(function (event2) {
          var posMouse = self.getPosMouse(event2);
          var pos = self.manipulator.calcPos(posMouse);

          if (self.actualPosMouse == null || !pos.isEqual(self.actualPosMouse)) {
            self.actualPosMouse = pos;
            self.manipulator.clearGhost(); // console.log("changement case");

            self.manipulator.placeObject(self.manipulator.selected, self.actualPosMouse, null, true);
          }

          $(document).unbind('keypress');
          $(document).keypress(function (e) {
            var touche = String.fromCharCode(e.which); // console.log(touche);

            var posMouse = self.getPosMouse(event2);
            var pos = self.manipulator.calcPos(posMouse); // console.log(pos);

            if (touche == 't') {
              self.manipulator.changeUrlDef(pos);
            } else if (touche == 'r') {
              self.manipulator.rotateObject(pos);
            } else if (touche == 'x') {
              self.manipulator.removeObjectOnClick(pos);
            }
          });
        });
      }, function () {
        self.manipulator.clearGhost();
        self.actualPosMouse = null;
        $(document).unbind('mousemove');
        $(document).unbind('keypress');
        $('h1').css('background', '');
      });
    }
  }, {
    key: "demo",
    value: function demo() {
      $("#BtnDemo").unbind('click'); // console.log("demo start");

      self.manipulator.demo();
      setTimeout(function () {
        self.animRepeat();
      }, 1000);
      setTimeout(function () {
        self.stopAnim();
        $("#BtnDemo").click(self.demo);
      }, 10000);
    }
  }]);

  return EventController;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/tapis/jsClass/Grille.class.js":
/*!*************************************************!*\
  !*** ./assets/js/tapis/jsClass/Grille.class.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grille; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// console.log('class Grille load');
var Grille =
/*#__PURE__*/
function () {
  // créer la grille de jeu
  function Grille() {
    var nbrCaseWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '10';
    var nbrCaseHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "10";

    _classCallCheck(this, Grille);

    this.width = $("#svg").width();
    this.height = $("#svg").height();
    var height = $("svg").height();
    var group = $("<g id='grille'></g>");
    this.nbrCaseWidth = nbrCaseWidth;
    this.nbrCaseHeight = nbrCaseHeight;
    var caseWidth = this.width / nbrCaseWidth;
    this.caseWidth = caseWidth;
    var caseHeight = this.height / nbrCaseHeight;
    this.caseHeight = caseHeight;

    for (var i = 0; i <= this.nbrCaseHeight; i++) {
      var posStart = {};
      posStart.x = 0;
      posStart.y = i * this.caseHeight;
      var posEnd = {};
      posEnd.x = this.width;
      posEnd.y = i * this.caseHeight;
      var svg = this.svgLine(posStart, posEnd);
      group.append(svg);
    }

    for (var i = 0; i <= this.nbrCaseWidth; i++) {
      var posStart = {};
      posStart.x = i * this.caseWidth;
      posStart.y = 0;
      var posEnd = {};
      posEnd.x = i * this.caseWidth;
      posEnd.y = this.height;
      var svg = this.svgLine(posStart, posEnd);
      group.append(svg);
    }

    $("svg").append(group);
  }

  _createClass(Grille, [{
    key: "svgLine",
    value: function svgLine(posStart, posEnd) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'black';
      var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '2';
      return '<line x1=' + posStart.x + ' y1=' + posStart.y + ' x2=' + posEnd.x + ' y2=' + posEnd.y + ' style="stroke:' + color + ';stroke-width:' + width + '" />';
    }
  }]);

  return Grille;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/tapis/jsClass/Manipulator.class.js":
/*!******************************************************!*\
  !*** ./assets/js/tapis/jsClass/Manipulator.class.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Manipulator; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Grille_class_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Grille.class.js */ "./assets/js/tapis/jsClass/Grille.class.js");
/* harmony import */ var _EventController_class_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./EventController.class.js */ "./assets/js/tapis/jsClass/EventController.class.js");
/* harmony import */ var _SaveManipulator_class_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SaveManipulator.class.js */ "./assets/js/tapis/jsClass/SaveManipulator.class.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./util.js */ "./assets/js/tapis/jsClass/util.js");
/* harmony import */ var _Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Tapis.class.js */ "./assets/js/tapis/jsClass/Tapis.class.js");
/* harmony import */ var _Ore_class_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Ore.class.js */ "./assets/js/tapis/jsClass/Ore.class.js");
/* harmony import */ var _Position_class_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Position.class.js */ "./assets/js/tapis/jsClass/Position.class.js");














function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// console.log('class manipulator load');








var Manipulator =
/*#__PURE__*/
function () {
  // va manipuler les objects comme les tapis est les minerais
  function Manipulator(listeClass, grille) {
    _classCallCheck(this, Manipulator);

    this.listeObject = [];
    this.listeClass = listeClass;
    this.writeDef();
    this.grille = new _Grille_class_js__WEBPACK_IMPORTED_MODULE_13__["default"]();
    this.regroup();
    this.addSelector();
    this.saver = new _SaveManipulator_class_js__WEBPACK_IMPORTED_MODULE_15__["default"](this);
    this.eventController = new _EventController_class_js__WEBPACK_IMPORTED_MODULE_14__["default"](this, this.saver);
    this.listeObjectChange = []; //this.affListeObject()
  }

  _createClass(Manipulator, [{
    key: "addSelector",
    value: function addSelector() {
      // ajoute les bouton à droite pour selectionner le type de figure à poser
      $("<div id='selector'> </div>").insertAfter("#containerFrameControl");

      for (var i = 0; i < this.listeClass.length; i++) {
        var className = this.listeClass[i].getClassName(); // console.log(className);

        $("#selector").append("<button  class='selectorItem' type='button' >" + className + "</button>");
      }
    }
  }, {
    key: "changeSelector",
    value: function changeSelector(selected) {
      // change le bouton à droite qui est selectioner
      $('.selectorItem').removeClass('selected');
      $(selected).addClass('selected');

      for (var i = 0; i < this.listeClass.length; i++) {
        if (this.listeClass[i].getClassName() == $(selected).html()) {
          this.selected = this.listeClass[i];
          break;
        }
      }
    }
  }, {
    key: "regroup",
    value: function regroup() {
      // créer les diferent group de figure au dessus/en dessous/fantome
      var group = $("<g id='figureGrp'></g>");
      $("#svg").append(group);
      var subGroup1 = $("<g id='figureGrpDown'></g>");
      var subGroup2 = $("<g id='figureGrpUp'></g>");
      var subGroup3 = $("<g id='figureGrpGhost'></g>");
      group.append(subGroup1);
      group.append(subGroup2);
      group.append(subGroup3);
      $("#svg").append(group);
      var group = $("<g id='animationGrp'></g>");
      $("#svg").append(group);
    }
  }, {
    key: "reset",
    value: function reset(listeObjectLoad) {
      // enleve toute les figures
      $("#figureGrpUp").empty();
      $("#figureGrpDown").empty();
      this.listeObject = [];

      for (var i = 0; i < listeObjectLoad.length; i++) {
        //console.log(listeObjectLoad[i].classe)
        var classe;

        if (listeObjectLoad[i].classe == 'Tapis') {
          classe = _Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"];
          this.placeObject(classe, listeObjectLoad[i].pos); //console.log(listeObjectLoad[i].type);

          this.changeUrlDef(listeObjectLoad[i].pos, listeObjectLoad[i].type);
        } else if (listeObjectLoad[i].classe == 'Ore') {
          classe = _Ore_class_js__WEBPACK_IMPORTED_MODULE_18__["default"];
          this.placeObject(classe, listeObjectLoad[i].pos);
        }
      }
    }
  }, {
    key: "calcPos",
    value: function calcPos(posMouse) {
      var x = Math.floor(posMouse.x / this.grille.caseWidth);
      var y = Math.floor(posMouse.y / this.grille.caseHeight);
      x = Math.floor(x * this.grille.caseWidth);
      y = Math.floor(y * this.grille.caseHeight);
      var direction = '0';
      var pos = new _Position_class_js__WEBPACK_IMPORTED_MODULE_19__["default"](x.toString(), y.toString(), direction);
      return pos;
    }
  }, {
    key: "placeGhost",
    value: function placeGhost(object) {
      $("#figureGrpGhost").empty();
      var svg = object.getSvg();
      var id = object.getId();
      $("#figureGrpGhost").append(svg);
      $("#object-" + id).attr('fill-opacity', '0.5');
    }
  }, {
    key: "clearGhost",
    value: function clearGhost() {
      // console.log("clear GHOST");
      $("#figureGrpGhost").empty();
      _util_js__WEBPACK_IMPORTED_MODULE_16__["refresh"]("#figureGrpGhost");
    }
  }, {
    key: "placeObject",
    value: function placeObject(classes, pos) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var ghost = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var objectOnPlace = this.findAllObject(pos);

      if (objectOnPlace.length == 0) {
        if (type != null && classes.getClassName() == 'Tapis') {
          var object = new classes(pos, type);
        } else {
          var object = new classes(pos);
        } //console.log(object);


        if (ghost == true) {
          // console.log("object :"+object.getId());
          this.placeGhost(object);
        } else {
          this.addObject(object);
          this.writeObject(object);
        }
      } else {
        var already = false;

        for (var i = 0; i < objectOnPlace.length; i++) {
          var object = this.listeObject[objectOnPlace[i]];

          if (object.getClass().getClassName() == classes.getClassName()) {
            //console.log(object.getClass().getClassName(),classes.getClassName());
            already = true;
          }
        }

        if (!already && ghost == false) {
          if (type != null && classes.getClassName() == 'Tapis') {
            var object = new classes(pos, type);
          } else {
            var object = new classes(pos);
          } //console.log(object);


          this.addObject(object);
          this.writeObject(object);
        } else if (ghost == true) {
          if (type != null && classes.getClassName() == 'Tapis') {
            var object = new classes(pos, type);
          } else {
            var object = new classes(pos);
          }

          this.placeGhost(object);
        }
      }

      _util_js__WEBPACK_IMPORTED_MODULE_16__["refresh"]("#figureGrp");
    }
  }, {
    key: "writeObject",
    value: function writeObject(object) {
      // ajoute la figure dans le DOM
      var classe = object.getClass().getClassName();
      var svg = object.getSvg();

      if (classe == 'Tapis') {
        $("#figureGrpDown").append(svg);
      } else {
        $("#figureGrpUp").append(svg);
      }
    }
  }, {
    key: "writeAll",
    value: function writeAll() {
      for (var i = 0; i < this.listeObject.length; i++) {
        this.writeObject(this.listeObject[i]);
      }

      _util_js__WEBPACK_IMPORTED_MODULE_16__["refresh"]();
    }
  }, {
    key: "animAll",
    value: function animAll() {
      for (var i = 0; i < this.listeClass.length; i++) {
        if (typeof this.listeClass[i].getAnimation === 'function') {
          var animation = this.listeClass[i].getAnimation();

          if (_typeof(animation) == 'object') {
            for (var i = 0; i < animation.length; i++) {
              $("#animationGrp").append(animation[i]);
            }
          } else {
            $("#animationGrp").append(animation);
          }
        }
      }
    }
  }, {
    key: "calcDirection",
    value: function calcDirection(type, direction) {
      if (type == 'forward') {
        return direction;
      }

      if (type == 'left') {
        if (direction == 0) {
          return 3;
        } else {
          return direction - 1;
        }
      }

      if (type == 'right') {
        return (direction + 1) % 4;
      }
    }
  }, {
    key: "calcMove",
    value: function calcMove(direction) {
      if (direction == 0) {
        return {
          axe: 'y',
          signe: '-'
        };
      } else if (direction == 1) {
        return {
          axe: 'x',
          signe: '+'
        };
      } else if (direction == 2) {
        return {
          axe: 'y',
          signe: '+'
        };
      } else {
        return {
          axe: 'x',
          signe: '-'
        };
      }
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(pos, direction) {
      var destination = {};
      var caseHeight = parseInt(this.grille.caseHeight);
      var caseWidth = parseInt(this.grille.caseWidth);
      var collision = false; // console.log(pos.x);
      // console.log(pos.y);
      // console.log('dir:' + direction);

      if (direction == 0) {
        // console.log('direction prévu:' + 0);
        destination.x = pos.x;
        destination.y = parseInt(pos.y) - caseHeight;
      } else if (direction == 1) {
        // console.log('direction prévu:' + 1);
        destination.x = parseInt(pos.x) + caseWidth;
        destination.y = pos.y;
      } else if (direction == 2) {
        // console.log('direction prévu:' + 2);
        destination.x = pos.x;
        destination.y = parseInt(pos.y) + caseHeight;
      } else {
        // console.log('direction prévu:' + 3);
        destination.x = parseInt(pos.x) - caseWidth;
        destination.y = pos.y;
      } // console.log(destination);


      var listeObjectFind = this.findAllObject(destination); // console.log(listeObjectFind);

      for (var i = 0; i < listeObjectFind.length; i++) {
        var classes = this.listeObject[listeObjectFind[i]].getClassNameFromObject();

        if (classes == 'Ore') {
          collision = true;
          break;
        }
      }

      return collision;
    }
  }, {
    key: "moveAll",
    value: function moveAll() {
      for (var i = 0; i < this.listeObject.length; i++) {
        if (typeof this.listeObject[i].getMove === 'function') {
          var tapisUnder = this.findObject(this.listeObject[i].pos, _Ore_class_js__WEBPACK_IMPORTED_MODULE_18__["default"]);

          if (tapisUnder != null) {
            // console.log('tapisUnder ' + tapisUnder.getId());
            // console.log(tapisUnder.type);
            // console.log('tapisUnder direction ' + tapisUnder.pos.direction);
            var moveDirection = this.calcDirection(tapisUnder.type, tapisUnder.pos.direction);
            var collision = this.checkCollision(this.listeObject[i].pos, moveDirection); //console.log(collision);

            if (!collision) {
              // console.log("direction move " + moveDirection);
              var direction = this.calcMove(moveDirection); //console.log(direction);

              var move = this.getMove(this.listeObject[i], direction, this.grille.caseWidth, this.grille.caseHeight); //console.log(move);
              //console.log(this.listeObjectChange);
              // console.log(move.posFinal);

              var alreadyPlannedPosition = false;

              for (var j = 0; j < this.listeObjectChange.length; j++) {
                // console.log(this.listeObjectChange[j].posFinal);
                if (this.listeObjectChange[j].posFinal.x == move.posFinal.x && this.listeObjectChange[j].posFinal.y == move.posFinal.y) {
                  alreadyPlannedPosition = true;
                  break;
                }
              }

              if (!alreadyPlannedPosition) {
                $("#animationGrp").append(move.svg);
                this.listeObjectChange.push({
                  object: this.listeObject[i],
                  posFinal: move.posFinal,
                  axe: direction.axe,
                  index: i
                });
              }
            }
          }
        }
      }
    }
  }, {
    key: "getMove",
    value: function getMove(object, direction, distanceX, distanceY) {
      var position = {};

      if (direction.axe == 'x') {
        var posInit = object.pos.x;
        var axe = 'x';
        position.y = object.pos.y;

        if (direction.signe == '+') {
          var posFinal = (parseInt(posInit) + distanceX).toString();
        } else {
          var posFinal = (parseInt(posInit) - distanceX).toString();
        }

        position.x = posFinal;
      } else {
        var posInit = object.pos.y;
        var axe = 'y';
        position.x = object.pos.x;

        if (direction.signe == '+') {
          var posFinal = (parseInt(posInit) + distanceY).toString();
        } else {
          var posFinal = (parseInt(posInit) - distanceY).toString();
        }

        position.y = posFinal;
      }

      var svg = object.getMove(axe, posInit, posFinal);
      return {
        svg: svg,
        posFinal: position
      };
    }
  }, {
    key: "rewriteAll",
    value: function rewriteAll() {
      // console.log('rewrite time');
      var liste = this.listeObjectChange; //console.log(this.listeObjectChange.length);

      for (var i = 0; i < liste.length; i++) {
        this.rewriteObject(liste[i].object, liste[i].posFinal, liste[i].axe, liste[i].index);
      }

      this.listeObjectChange = [];
      _util_js__WEBPACK_IMPORTED_MODULE_16__["refresh"]("#figureGrp");
    }
  }, {
    key: "rewriteObject",
    value: function rewriteObject(object, posFinal, axe, index) {
      var id = object.getId(); // console.log('rewriteObject with id ' + id);

      $("#object-" + id).remove();

      if (axe == 'x') {
        object.pos.x = parseInt(posFinal.x);
      } else {
        object.pos.y = parseInt(posFinal.y);
      } //this.affListeObject()


      object.setSvg();
      this.writeObject(object);
    }
  }, {
    key: "run",
    value: function run() {
      $(".animation").remove();
      this.animAll();
      this.moveAll(); //console.log(this.listeObjectChange);

      _util_js__WEBPACK_IMPORTED_MODULE_16__["refresh"]();

      var _this = this;

      setTimeout(function () {
        _this.rewriteAll();
      }, 500);
    }
  }, {
    key: "addObject",
    value: function addObject(object) {
      this.listeObject.push(object);
    }
  }, {
    key: "affListeObject",
    value: function affListeObject() {
      console.log("liste------");

      for (var i = 0; i < this.listeObject.length; i++) {
        console.log("object--");
        console.log("x:" + this.listeObject[i].pos.x);
        console.log("y:" + this.listeObject[i].pos.y);
        console.log("--");
      }

      console.log("------");
    }
  }, {
    key: "removeObjectOnClick",
    value: function removeObjectOnClick(pos) {
      var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
      var find = this.findAllObject(pos);

      if (find.length > 1) {// console.log('en attente de code'); //// TODO: implemente ui to choose
      } else if (find.length == 1) {
        // console.log('==1');
        this.removeObject(find[0]);
      }

      _util_js__WEBPACK_IMPORTED_MODULE_16__["refresh"]("#figureGrp");
    }
  }, {
    key: "removeObject",
    value: function removeObject(index) {
      var object = this.listeObject[index];
      var id = object.getId();
      $("#object-" + id).remove();
      this.listeObject.splice(index, 1);
    }
  }, {
    key: "removeAllObject",
    value: function removeAllObject() {
      while (this.listeObject.length != 0) {
        this.removeObject(0);
      }

      _util_js__WEBPACK_IMPORTED_MODULE_16__["refresh"]("#figureGrp");
    }
  }, {
    key: "writeDef",
    value: function writeDef() {
      var classes = this.listeClass;

      for (var i = 0; i < classes.length; i++) {
        if (classes[i].haveMultipleDef()) {
          //console.log(classes[i].def());
          for (var j = 0; j < classes[i].def().length; j++) {
            var def = classes[i].def()[j];
            $("#svg").prepend(def);
          }
        } else {
          var def = classes[i].def();
          $("#svg").prepend(def);
        }
      }
    }
  }, {
    key: "findAllObject",
    value: function findAllObject(position) {
      var find = [];

      for (var i = 0; i < this.listeObject.length; i++) {
        var x = this.listeObject[i].pos.x;
        var y = this.listeObject[i].pos.y;

        if (x == position.x && y == position.y) {
          //console.log(i);
          find.push(i);
        }
      }

      return find;
    }
  }, {
    key: "findObject",
    value: function findObject(position) {
      var excludeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Default';
      var find = null; //console.log('position rechercher x'+position.x);
      //console.log('position rechercher y'+position.y);

      for (var i = 0; i < this.listeObject.length; i++) {
        // console.log('------object-----');
        var x = this.listeObject[i].pos.x;
        var y = this.listeObject[i].pos.y; //console.log('id '+this.listeObject[i].getId());
        //console.log('x '+x);
        //console.log('y '+y);
        //console.log('-----------');

        if (x == position.x && y == position.y && excludeType != this.listeObject[i].getClass()) {
          var find = this.listeObject[i]; //console.log('match');
          //console.log('id find ' + find.getId());

          break;
        }
      }

      return find;
    }
  }, {
    key: "rotateObject",
    value: function rotateObject(pos) {
      var object = this.findObject(pos, _Ore_class_js__WEBPACK_IMPORTED_MODULE_18__["default"]);

      if (object != null) {
        var queryObject = $("#object-" + object.getId()); // console.log(queryObject.attr('transform'));

        var actualDegree = object.pos.direction * 90; // console.log("actualDegree :"+actualDegree);

        var newDegree = (parseInt(actualDegree) + 90) % 360;
        queryObject.attr('transform', 'rotate(' + newDegree + " " + object.originX + " " + object.originY + ')');
        object.pos.direction = (object.pos.direction + 1) % 4;
        _util_js__WEBPACK_IMPORTED_MODULE_16__["refresh"]('#figureGrp');
      }
    }
  }, {
    key: "changeUrlDef",
    value: function changeUrlDef(pos) {
      var typeGive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'None';
      var object = this.findObject(pos, _Ore_class_js__WEBPACK_IMPORTED_MODULE_18__["default"]); //console.log(object);

      if (object != null) {
        var classObject = object.getClass();

        if (classObject.haveMultipleDef()) {
          if (typeGive != 'None') {
            nextType = typeGive;
          } else {
            var nextType = classObject.nextType(object.type);
          }

          object.type = nextType; //console.log(nextType);

          $("#object-" + object.getId()).attr('fill', 'url(#Tapis-' + nextType + ')');
          _util_js__WEBPACK_IMPORTED_MODULE_16__["refresh"]("#figureGrp");
        } else {// console.log('object à un seul type');
        }
      } else {// console.log("pas d'object trouvé");
        }
    }
  }, {
    key: "demo",
    value: function demo() {
      self.manipulator.removeAllObject();
      var caseHeight = parseInt(this.grille.caseHeight);
      var caseWidth = parseInt(this.grille.caseWidth); // class,type,x,y,direction

      var liste = [[_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "right", 0, 0, 0], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "right", 0, 1, 3], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "forward", 1, 1, 3], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "forward", 2, 1, 3], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "forward", 3, 1, 3], [_Ore_class_js__WEBPACK_IMPORTED_MODULE_18__["default"], "forward", 5, 5, 0], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "forward", 6, 2, 1], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "forward", 7, 2, 3], [_Ore_class_js__WEBPACK_IMPORTED_MODULE_18__["default"], null, 7, 2, 0], [_Ore_class_js__WEBPACK_IMPORTED_MODULE_18__["default"], null, 3, 1, 0], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "left", 4, 5, 3], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "left", 5, 5, 0], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "left", 4, 6, 2], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "left", 5, 6, 1], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "left", 2, 6, 0], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "forward", 2, 7, 0], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "left", 3, 7, 0], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "forward", 3, 8, 0], [_Ore_class_js__WEBPACK_IMPORTED_MODULE_18__["default"], null, 3, 9, 0], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "forward", 3, 9, 0], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "right", 1, 6, 1], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "right", 1, 7, 2], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "right", 0, 7, 3], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "forward", 0, 6, 0], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "forward", 0, 5, 0], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "forward", 0, 4, 0], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "forward", 2, 4, 2], [_Ore_class_js__WEBPACK_IMPORTED_MODULE_18__["default"], null, 2, 4, 0], [_Tapis_class_js__WEBPACK_IMPORTED_MODULE_17__["default"], "forward", 2, 5, 2]];

      for (var i = 0; i < liste.length; i++) {
        var pos = new _Position_class_js__WEBPACK_IMPORTED_MODULE_19__["default"](liste[i][2] * caseWidth, liste[i][3] * caseWidth, liste[i][4]);
        this.placeObject(liste[i][0], pos, liste[i][1]);
      } // this.affListeObject()
      // util.refresh("#figureGrp")
      // this.changeUrlDef(listeObjectLoad[i].pos, listeObjectLoad[i].type)

    }
  }]);

  return Manipulator;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/tapis/jsClass/Ore.class.js":
/*!**********************************************!*\
  !*** ./assets/js/tapis/jsClass/Ore.class.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ore; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_get__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.get */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _AbstractObject_class_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AbstractObject.class.js */ "./assets/js/tapis/jsClass/AbstractObject.class.js");














function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// console.log('class ore load');


var Ore =
/*#__PURE__*/
function (_AbstractObject) {
  _inherits(Ore, _AbstractObject);

  // class pour les minerais
  function Ore(pos) {
    var _this;

    _classCallCheck(this, Ore);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ore).call(this, pos));

    _this.setSvg();

    return _this;
  }

  _createClass(Ore, [{
    key: "setSvg",
    value: function setSvg() {
      _get(_getPrototypeOf(Ore.prototype), "setSvg", this).call(this, 'ore');
    }
  }, {
    key: "getMove",
    value: function getMove(axe, from, to) {
      var move = '<animate xlink:href=#object-' + this.getId() + ' attributeName=' + axe + '  from =' + from + ' to=' + to + ' fill="freeze" dur="0.5s" class="animation tapis" /> ';
      return move;
    }
  }], [{
    key: "aff",
    value: function aff() {// console.log('ore aff');
    }
  }, {
    key: "def",
    value: function def() {
      return _get(_getPrototypeOf(Ore), "def", this).call(this, 'rgba(0,0,0,0.5)', 'ore', 'M3 0 L7 0 L 10 3 L 10 7 L 7 10 L 3 10 L 0 7 L 0 3');
    }
  }]);

  return Ore;
}(_AbstractObject_class_js__WEBPACK_IMPORTED_MODULE_13__["default"]);



/***/ }),

/***/ "./assets/js/tapis/jsClass/Position.class.js":
/*!***************************************************!*\
  !*** ./assets/js/tapis/jsClass/Position.class.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Position; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Position =
/*#__PURE__*/
function () {
  // class global pour les position de toute les figures
  function Position(x, y) {
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

    _classCallCheck(this, Position);

    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  _createClass(Position, [{
    key: "isEqual",
    value: function isEqual(pos) {
      if (this.x == pos.x && this.y == pos.y) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Position;
}();



/***/ }),

/***/ "./assets/js/tapis/jsClass/SaveManipulator.class.js":
/*!**********************************************************!*\
  !*** ./assets/js/tapis/jsClass/SaveManipulator.class.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SaveManipulator; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);









function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// console.log('class SaveManipulator load');
var SaveManipulator =
/*#__PURE__*/
function () {
  //  controlle les sauvegardes/chargements
  function SaveManipulator(manipulator) {
    _classCallCheck(this, SaveManipulator);

    this.manipulator = manipulator; // console.log(manipulator);
    //this.clearAllSave()
  }

  _createClass(SaveManipulator, [{
    key: "checkSave",
    value: function checkSave() {
      var listeSave = [];

      for (var i = 0; i < 10; i++) {
        if (_typeof(localStorage.getItem('Save-' + i)) != 'object') {
          listeSave.push(i);
        }
      }

      return listeSave;
    }
  }, {
    key: "clearAllSave",
    value: function clearAllSave() {
      for (var i = 0; i < 10; i++) {
        localStorage.removeItem('Save-' + i);
      }
    }
  }, {
    key: "clearSave",
    value: function clearSave(id) {
      // console.log("clearSave "+id );
      localStorage.removeItem('Save-' + id);
    }
  }, {
    key: "save",
    value: function save() {
      var nameSave = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      // console.log('save');
      var liste = [];

      for (var i = 0; i < this.manipulator.listeObject.length; i++) {
        var classe = this.manipulator.listeObject[i].getClassNameFromObject();
        var pos = this.manipulator.listeObject[i].pos;

        if (typeof this.manipulator.listeObject[i].type != 'undefined') {
          //console.log(this.manipulator.listeObject[i].type);
          var type = this.manipulator.listeObject[i].type;
          liste.push({
            classe: classe,
            pos: pos,
            type: type
          });
        } else {
          liste.push({
            classe: classe,
            pos: pos
          });
        }
      }

      localStorage.setItem('Save-' + nameSave, JSON.stringify(liste));
    }
  }, {
    key: "load",
    value: function load() {
      var nameSave = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      // console.log('load');
      var data = JSON.parse(localStorage.getItem('Save-' + nameSave)); //console.log(data);

      this.manipulator.reset(data);
    }
  }]);

  return SaveManipulator;
}();



/***/ }),

/***/ "./assets/js/tapis/jsClass/Tapis.class.js":
/*!************************************************!*\
  !*** ./assets/js/tapis/jsClass/Tapis.class.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tapis; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_get__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.get */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _AbstractObject_class_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AbstractObject.class.js */ "./assets/js/tapis/jsClass/AbstractObject.class.js");















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// console.log('class tapis load');


var Tapis =
/*#__PURE__*/
function (_AbstractObject) {
  _inherits(Tapis, _AbstractObject);

  // class pour les tapis
  function Tapis(pos) {
    var _this;

    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'forward';

    _classCallCheck(this, Tapis);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tapis).call(this, pos));
    _this.type = type;

    _this.setSvg();

    return _this;
  }
  /**
   * creation of the image definition.One by class
   * @return {[type]} [description]
   */


  _createClass(Tapis, [{
    key: "setSvg",
    value: function setSvg() {
      //console.log(this.type);
      _get(_getPrototypeOf(Tapis.prototype), "setSvg", this).call(this, 'Tapis-' + this.type);
    }
  }], [{
    key: "def",
    value: function def() {
      var listeDef = [];
      self = this;

      var def1 = _get(_getPrototypeOf(Tapis), "def", this).call(this, 'blue', 'Tapis-forward', 'M5 0 L10 3 L7 3 L7 10 L3 10 L3 3 L 0 3', '100%', '100%');

      var def2 = _get(_getPrototypeOf(Tapis), "def", this).call(this, 'red', 'Tapis-left', 'M2 3 Q 7 3 7 10 L3 10 Q 3 7 2 7 L 2 9 L 0 5 L 2 1 M 5 10 L9 12 L7 12 Q7 17 0 17 L0 13 Q3 13 3 12 L1 12', '100%', '100%');

      var def3 = _get(_getPrototypeOf(Tapis), "def", this).call(this, 'green', 'Tapis-right', 'M7 10 Q 7 7 8 7 L8 9 L 10 5 L8 1 L8 3 Q 3 3 3 10 M 5 10 L9 12 L7 12 Q7 13 10 13 L10 17 Q3 17 3 12 L1 12', '100%', '100%');

      listeDef.push(def1);
      listeDef.push(def2);
      listeDef.push(def3); //console.log(listeDef);

      return listeDef;
    }
  }, {
    key: "haveMultipleDef",
    value: function haveMultipleDef() {
      return true;
    }
  }, {
    key: "listeNameDef",
    value: function listeNameDef() {
      return ['forward', 'left', 'right'];
    }
  }, {
    key: "nextType",
    value: function nextType(type) {
      var liste = this.listeNameDef(); //console.log(liste);
      //console.log(type);

      var index = liste.indexOf(type); //console.log(index)

      var nextType = liste[(index + 1) % liste.length];
      return nextType;
    }
  }, {
    key: "getAnimation",
    value: function getAnimation() {
      var animationListe = [];
      var animation = '<animateTransform href="#path-Tapis-forward"  attributeName="transform"  type="translate"  from="0 0" to="0 -10"  dur="0.5s"  class="animation tapis" /> ';
      var animation1 = '<animateTransform href="#path-Tapis-left" attributeName="transform"  type="rotate" from="0 0 10" to="-90 0 10" dur="0.5s"  class="animation tapis" />';
      var animation2 = '<animateTransform href="#path-Tapis-right" attributeName="transform"  type="rotate" from="0 10 10" to="90 10 10" dur="0.5s" class="animation tapis" />';
      animationListe.push(animation);
      animationListe.push(animation1);
      animationListe.push(animation2);
      return animationListe;
    }
  }, {
    key: "aff",
    value: function aff() {// console.log('tapis aff');
    }
  }]);

  return Tapis;
}(_AbstractObject_class_js__WEBPACK_IMPORTED_MODULE_14__["default"]);



/***/ }),

/***/ "./assets/js/tapis/jsClass/util.js":
/*!*****************************************!*\
  !*** ./assets/js/tapis/jsClass/util.js ***!
  \*****************************************/
/*! exports provided: refresh, rand, findDigit, sleep, affTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refresh", function() { return refresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rand", function() { return rand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDigit", function() { return findDigit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "affTest", function() { return affTest; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);




// fichier pour les fonctions utilitaires
// console.log("util.js");
function refresh() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#frame";
  $(element).html($(element).html());
}
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function findDigit(string) {
  var regex = /\d+/gm;
  ;
  var str = string;
  var m;
  var find;

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    m.forEach(function (match, groupIndex) {
      find = match;
    });
  }

  return find;
}
function sleep(milliseconds) {
  var start = new Date().getTime();

  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
function affTest() {// console.log('hello there');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/tapis/tapisMain.js":
/*!**************************************!*\
  !*** ./assets/js/tapis/tapisMain.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _jsClass_DomController_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsClass/DomController.class.js */ "./assets/js/tapis/jsClass/DomController.class.js");
/* harmony import */ var _jsClass_Tapis_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsClass/Tapis.class.js */ "./assets/js/tapis/jsClass/Tapis.class.js");
/* harmony import */ var _jsClass_Ore_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsClass/Ore.class.js */ "./assets/js/tapis/jsClass/Ore.class.js");
/* harmony import */ var _jsClass_Manipulator_class_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsClass/Manipulator.class.js */ "./assets/js/tapis/jsClass/Manipulator.class.js");
/* harmony import */ var _jsClass_Position_class_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jsClass/Position.class.js */ "./assets/js/tapis/jsClass/Position.class.js");




 // initialise les principals objects

$(function () {
  var dom = new _jsClass_DomController_class_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var listeClass = [_jsClass_Tapis_class_js__WEBPACK_IMPORTED_MODULE_1__["default"], _jsClass_Ore_class_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
  var manipulator = new _jsClass_Manipulator_class_js__WEBPACK_IMPORTED_MODULE_3__["default"](listeClass);
  manipulator.writeAll();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/tapis/tapisMain.js","runtime","vendors~barJs~canvasJs~navJs~pieceJs~tapisJs","vendors~navJs~tapisJs","vendors~tapisJs"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy9BYnN0cmFjdE9iamVjdC5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy9Eb21Db250cm9sbGVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YXBpcy9qc0NsYXNzL0V2ZW50Q29udHJvbGxlci5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy9HcmlsbGUuY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RhcGlzL2pzQ2xhc3MvTWFuaXB1bGF0b3IuY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RhcGlzL2pzQ2xhc3MvT3JlLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YXBpcy9qc0NsYXNzL1Bvc2l0aW9uLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YXBpcy9qc0NsYXNzL1NhdmVNYW5pcHVsYXRvci5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy9UYXBpcy5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy91dGlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YXBpcy90YXBpc01haW4uanMiXSwibmFtZXMiOlsiQWJzdHJhY3RPYmplY3QiLCJwb3MiLCJpZE15c2VsZiIsImNvbnN0cnVjdG9yIiwiaWQiLCJ1bmRlZmluZWQiLCJuYW1lIiwiaWREZWYiLCJ3aWR0aCIsImhlaWdodCIsIm9yaWdpbiIsImdldENlbnRlciIsImFuZ2xlIiwiZGlyZWN0aW9uIiwib3JpZ2luUm90YXRpb24iLCJnZXRCb3R0b21MZWZ0Iiwib3JpZ2luWCIsInBhcnNlSW50IiwieCIsIm9yaWdpblkiLCJ5Iiwic3ZnIiwiZ2V0SWQiLCJjZW50ZXIiLCJzdHJpbmciLCJjb3RlQm90dG9tTGVmdCIsImNvdGVCb3R0b21SaWdodCIsImdldENsYXNzTmFtZUZyb21PYmplY3QiLCJyaHMiLCJjb2xvciIsImlkTmFtZSIsInBhdHRlcm4iLCJkZWYiLCIkIiwicGF0ZXJuIiwiaW1hZ2UiLCJodG1sIiwiYXBwZW5kIiwiRG9tQ29udHJvbGxlciIsIm5iclNhdmVCdXR0b24iLCJkaXYiLCJjcmVhdGlvblNhdmVMb2FkQnV0dG9uIiwicHJlcGVuZCIsImNyZWF0aW9uRG9tRWxlbWVudCIsInN0YXJ0Iiwic3RvcCIsIm9uZVN0ZXAiLCJhdHRyIiwibG9hZFNhdmUiLCJpIiwiYnV0dG9uU2F2ZSIsImJ1dHRvbkxvYWQiLCJidXR0b25TdXByZSIsInR5cGUiLCJjbGFzc2UiLCJlbGVtZW50IiwiYWRkQ2xhc3MiLCJFdmVudENvbnRyb2xsZXIiLCJtYW5pcHVsYXRvciIsInNhdmVyIiwiYWN0dWFsUG9zTW91c2UiLCJpbml0IiwiaW5pdFNlbGVjdG9yIiwiYmluZE9uQ0xpY2siLCJiaW5kSG92ZXIiLCJjaGVja1NhdmUiLCJzZWxmIiwiY2xpY2siLCJhbmltT25lU3RlcCIsImFuaW1SZXBlYXQiLCJkZW1vIiwiYmluZENsZWFyQWxsIiwiYmluZEFsbFNhdmVMb2FkQnV0dG9ucyIsInJlbW92ZUFsbE9iamVjdCIsImxpc3RlU2F2ZSIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiYmluZFNhdmVCdXR0b24iLCJiaW5kTG9hZEJ1dHRvbiIsImJpbmRTdXByZUJ1dHRvbiIsInRvZ2dsZUNsYXNzIiwidW5iaW5kTG9hZEJ1dHRvbiIsInVuYmluZFNhdmVCdXR0b24iLCJ1bmJpbmRTdXByZUJ1dHRvbiIsInVuYmluZENsZWFyQWxsIiwiY2xlYXJTdmciLCJ1bmJpbmQiLCJzYXZlIiwibG9hZCIsInN1cHJlIiwic2F2ZU5hbWUiLCJjaGFuZ2VCdXR0b24iLCJjbGVhclNhdmUiLCJtb3VzZWRvd24iLCJldmVudCIsIm9uQ2xpY2siLCJvZmYiLCJlIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0eWxlcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJjdXJzb3JYIiwiY2xpZW50WCIsImxlZnQiLCJib3JkZXJMZWZ0V2lkdGgiLCJjdXJzb3JZIiwiY2xpZW50WSIsInRvcCIsImJvcmRlclRvcFdpZHRoIiwicG9zTW91c2UiLCJnZXRQb3NNb3VzZSIsImNhbGNQb3MiLCJwbGFjZU9iamVjdCIsInNlbGVjdGVkIiwidW5iaW5kT25DTGljayIsInVuYmluZEFsbFNhdmVMb2FkQnV0dG9uIiwic3RvcEFuaW0iLCJhbmltIiwibG9vcCIsInNldEludGVydmFsIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJydW4iLCJsaXN0ZUNsYXNzIiwiY2hhbmdlU2VsZWN0b3IiLCJob3ZlciIsIm1vdXNlbW92ZSIsImV2ZW50MiIsImlzRXF1YWwiLCJjbGVhckdob3N0Iiwia2V5cHJlc3MiLCJ0b3VjaGUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ3aGljaCIsImNoYW5nZVVybERlZiIsInJvdGF0ZU9iamVjdCIsInJlbW92ZU9iamVjdE9uQ2xpY2siLCJjc3MiLCJHcmlsbGUiLCJuYnJDYXNlV2lkdGgiLCJuYnJDYXNlSGVpZ2h0IiwiZ3JvdXAiLCJjYXNlV2lkdGgiLCJjYXNlSGVpZ2h0IiwicG9zU3RhcnQiLCJwb3NFbmQiLCJzdmdMaW5lIiwiTWFuaXB1bGF0b3IiLCJncmlsbGUiLCJsaXN0ZU9iamVjdCIsIndyaXRlRGVmIiwicmVncm91cCIsImFkZFNlbGVjdG9yIiwiU2F2ZU1hbmlwdWxhdG9yIiwiZXZlbnRDb250cm9sbGVyIiwibGlzdGVPYmplY3RDaGFuZ2UiLCJpbnNlcnRBZnRlciIsImNsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsInN1Ykdyb3VwMSIsInN1Ykdyb3VwMiIsInN1Ykdyb3VwMyIsImxpc3RlT2JqZWN0TG9hZCIsImVtcHR5IiwiVGFwaXMiLCJPcmUiLCJNYXRoIiwiZmxvb3IiLCJQb3NpdGlvbiIsInRvU3RyaW5nIiwib2JqZWN0IiwiZ2V0U3ZnIiwidXRpbCIsImNsYXNzZXMiLCJnaG9zdCIsIm9iamVjdE9uUGxhY2UiLCJmaW5kQWxsT2JqZWN0IiwicGxhY2VHaG9zdCIsImFkZE9iamVjdCIsIndyaXRlT2JqZWN0IiwiYWxyZWFkeSIsImdldENsYXNzIiwiZ2V0QW5pbWF0aW9uIiwiYW5pbWF0aW9uIiwiYXhlIiwic2lnbmUiLCJkZXN0aW5hdGlvbiIsImNvbGxpc2lvbiIsImxpc3RlT2JqZWN0RmluZCIsImdldE1vdmUiLCJ0YXBpc1VuZGVyIiwiZmluZE9iamVjdCIsIm1vdmVEaXJlY3Rpb24iLCJjYWxjRGlyZWN0aW9uIiwiY2hlY2tDb2xsaXNpb24iLCJjYWxjTW92ZSIsIm1vdmUiLCJhbHJlYWR5UGxhbm5lZFBvc2l0aW9uIiwiaiIsInBvc0ZpbmFsIiwicHVzaCIsImluZGV4IiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwicG9zaXRpb24iLCJwb3NJbml0IiwibGlzdGUiLCJyZXdyaXRlT2JqZWN0IiwicmVtb3ZlIiwic2V0U3ZnIiwiYW5pbUFsbCIsIm1vdmVBbGwiLCJfdGhpcyIsInJld3JpdGVBbGwiLCJjb25zb2xlIiwibG9nIiwiZmluZCIsInJlbW92ZU9iamVjdCIsInNwbGljZSIsImhhdmVNdWx0aXBsZURlZiIsImV4Y2x1ZGVUeXBlIiwicXVlcnlPYmplY3QiLCJhY3R1YWxEZWdyZWUiLCJuZXdEZWdyZWUiLCJ0eXBlR2l2ZSIsImNsYXNzT2JqZWN0IiwibmV4dFR5cGUiLCJmcm9tIiwidG8iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm5hbWVTYXZlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwicGFyc2UiLCJyZXNldCIsImxpc3RlRGVmIiwiZGVmMSIsImRlZjIiLCJkZWYzIiwibGlzdGVOYW1lRGVmIiwiaW5kZXhPZiIsImFuaW1hdGlvbkxpc3RlIiwiYW5pbWF0aW9uMSIsImFuaW1hdGlvbjIiLCJyZWZyZXNoIiwicmFuZCIsIm1pbiIsIm1heCIsInJhbmRvbSIsImZpbmREaWdpdCIsInJlZ2V4Iiwic3RyIiwibSIsImV4ZWMiLCJsYXN0SW5kZXgiLCJmb3JFYWNoIiwibWF0Y2giLCJncm91cEluZGV4Iiwic2xlZXAiLCJtaWxsaXNlY29uZHMiLCJEYXRlIiwiZ2V0VGltZSIsImFmZlRlc3QiLCJkb20iLCJ3cml0ZUFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQ3FCQSxjOzs7QUFDbkI7QUFDQSwwQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFFBQUw7QUFDRDs7OzsrQkFZVTtBQUNULFVBQUksS0FBS0MsV0FBTCxDQUFpQkMsRUFBakIsSUFBdUJDLFNBQTNCLEVBQXNDO0FBQ3BDLGFBQUtGLFdBQUwsQ0FBaUJDLEVBQWpCLEdBQXNCLENBQXRCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0QsV0FBTCxDQUFpQkMsRUFBakI7QUFDRCxPQUxRLENBTVQ7OztBQUNBLFdBQUtBLEVBQUwsR0FBVSxLQUFLRCxXQUFMLENBQWlCQyxFQUEzQjtBQUNEOzs7NkNBSXVCO0FBQ3RCLGFBQU8sS0FBS0QsV0FBTCxDQUFpQkcsSUFBeEI7QUFDRDs7OytCQUNTO0FBQ1IsYUFBTyxLQUFLSCxXQUFaO0FBQ0Q7OzsyQkFDTUksSyxFQUFPO0FBQ1osVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxVQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLFVBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0FBLFlBQU0sR0FBRyxLQUFLQyxTQUFMLENBQWVILEtBQWYsRUFBc0JDLE1BQXRCLENBQVQsQ0FKWSxDQU1aOztBQUNBLFVBQUlHLEtBQUssR0FBRyxLQUFLLEtBQUtYLEdBQUwsQ0FBU1ksU0FBMUI7QUFDQSxVQUFJQyxjQUFjLEdBQUcsS0FBS0MsYUFBTCxDQUFtQlAsS0FBbkIsRUFBeUJDLE1BQXpCLENBQXJCO0FBQ0Es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Q0csSUFBTixDQUFXRixHQUFYLENBQUwsTUFBMEIsSUFBakMsRUFBdUM7QUFDbkM7QUFDQSxRQUFJQyxDQUFDLENBQUN2RCxLQUFGLEtBQVlxRCxLQUFLLENBQUNJLFNBQXRCLEVBQWlDO0FBQzdCSixXQUFLLENBQUNJLFNBQU47QUFDSDs7QUFDREYsS0FBQyxDQUFDRyxPQUFGLENBQVUsVUFBQ0MsS0FBRCxFQUFRQyxVQUFSLEVBQXVCO0FBQy9CN0MsVUFBSSxHQUFFNEMsS0FBTjtBQUNILEtBRkM7QUFHSDs7QUFDRCxTQUFPNUMsSUFBUDtBQUNEO0FBQ00sU0FBUzhDLEtBQVQsQ0FBZUMsWUFBZixFQUE2QjtBQUNsQyxNQUFJak8sS0FBSyxHQUFHLElBQUlrTyxJQUFKLEdBQVdDLE9BQVgsRUFBWjs7QUFDQSxPQUFLLElBQUk5TixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEdBQXBCLEVBQXlCQSxDQUFDLEVBQTFCLEVBQThCO0FBQzVCLFFBQUssSUFBSTZOLElBQUosR0FBV0MsT0FBWCxLQUF1Qm5PLEtBQXhCLEdBQWlDaU8sWUFBckMsRUFBa0Q7QUFDaEQ7QUFDRDtBQUNGO0FBQ0Y7QUFDTSxTQUFTRyxPQUFULEdBQW1CLENBQ3hCO0FBRUQsQzs7Ozs7Ozs7Ozs7OztBQ3JDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUtBOztBQUNBL08sQ0FBQyxDQUFDLFlBQVU7QUFDVixNQUFJZ1AsR0FBRyxHQUFHLElBQUkzTyx1RUFBSixFQUFWO0FBQ0EsTUFBSTBGLFVBQVUsR0FBRyxDQUFDMEMsK0RBQUQsRUFBUUMsNkRBQVIsQ0FBakI7QUFDQSxNQUFJakgsV0FBVyxHQUFHLElBQUkrRixxRUFBSixDQUFnQnpCLFVBQWhCLENBQWxCO0FBQ0F0RSxhQUFXLENBQUN3TixRQUFaO0FBQ0QsQ0FMQSxDQUFELEMiLCJmaWxlIjoidGFwaXNKcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnNvbGUubG9nKCdjbGFzcyBBYnN0cmFjdE9iamVjdCBsb2FkJyk7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0T2JqZWN0IHtcclxuICAvLyBjbGFzcyBtw6hyZSBwb3VyIGxlcyBmaWd1cmVzIGF2ZWMgbGVzIHByb3ByacOpdMOpIGRlIGJhc2VcclxuICBjb25zdHJ1Y3Rvcihwb3MpIHtcclxuICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgdGhpcy5pZE15c2VsZigpO1xyXG4gIH1cclxuICBzdGF0aWMgZGVmKGNvbG9yID0gJ3JlZCcsIGlkTmFtZSA9ICdEZWZhdWx0JywgcGF0dGVybiA9ICdNMCAwIEwwIDEwIEwxMCAxMCBMMTAgMCcsIHdpZHRoID0gJzEwMCUnLCBoZWlnaHQgPSAnMTAwJScpIHtcclxuICAgIHZhciBkZWYgPSAkKFwiPGRlZnM+PC9kZWZzPlwiKTtcclxuICAgIHZhciBwYXRlcm4gPSAkKCc8cGF0dGVybiBpZD0nICsgaWROYW1lICsgJyB2aWV3Qm94PVwiMCwwLDEwLDEwXCIgd2lkdGg9JyArIHdpZHRoICsgJyBoZWlnaHQ9JyArIGhlaWdodCArICcgPicpO1xyXG4gICAgdmFyIGltYWdlID0gKCc8cGF0aCBpZD1wYXRoLScraWROYW1lKycgZmlsbD0nICsgY29sb3IgKyAnIGQ9XCInICsgcGF0dGVybiArICdcIi8+Jyk7XHJcbiAgICBwYXRlcm4gPSBwYXRlcm4uaHRtbChpbWFnZSk7XHJcbiAgICBkZWYgPSBkZWYuYXBwZW5kKHBhdGVybik7XHJcbiAgICByZXR1cm4gZGVmO1xyXG4gIH1cclxuICBzdGF0aWMgaGF2ZU11bHRpcGxlRGVmKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIGlkTXlzZWxmKCkge1xyXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IuaWQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuaWQgPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5pZCsrO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmNvbnN0cnVjdG9yLmlkKTtcclxuICAgIHRoaXMuaWQgPSB0aGlzLmNvbnN0cnVjdG9yLmlkO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0Q2xhc3NOYW1lKCl7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lXHJcbiAgfVxyXG4gIGdldENsYXNzTmFtZUZyb21PYmplY3QoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcclxuICB9XHJcbiAgZ2V0Q2xhc3MoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yXHJcbiAgfVxyXG4gIHNldFN2ZyhpZERlZikge1xyXG4gICAgdmFyIHdpZHRoID0gNTA7XHJcbiAgICB2YXIgaGVpZ2h0ID0gNTA7XHJcbiAgICB2YXIgb3JpZ2luID0ge31cclxuICAgIG9yaWdpbiA9IHRoaXMuZ2V0Q2VudGVyKHdpZHRoLCBoZWlnaHQpXHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhvcmlnaW4uc3RyaW5nKTtcclxuICAgIHZhciBhbmdsZSA9IDkwICogdGhpcy5wb3MuZGlyZWN0aW9uO1xyXG4gICAgdmFyIG9yaWdpblJvdGF0aW9uID0gdGhpcy5nZXRCb3R0b21MZWZ0KHdpZHRoLGhlaWdodCk7XHJcbiAgICB0aGlzLm9yaWdpblg9IHBhcnNlSW50KHRoaXMucG9zLngpKyh3aWR0aC8yKTtcclxuICAgIHRoaXMub3JpZ2luWT0gcGFyc2VJbnQodGhpcy5wb3MueSkrKGhlaWdodC8yKTtcclxuICAgIHRoaXMuc3ZnID0gJzxyZWN0IGlkPVwib2JqZWN0LScgKyB0aGlzLmdldElkKCkgKyAnXCIgd2lkdGg9JyArIHdpZHRoICsgJyBoZWlnaHQ9JyArIGhlaWdodCArICcgeD0nICsgdGhpcy5wb3MueCArICcgIHk9JyArIHRoaXMucG9zLnkgKyAnIGZpbGw9XCJ1cmwoIycgKyBpZERlZiArICcpXCIgdHJhbnNmb3JtPVwicm90YXRlKCcgKyBhbmdsZSArXCIgXCIrIHRoaXMub3JpZ2luWCArXCIgXCIgKyB0aGlzLm9yaWdpblkgKyAnKVwiLz4nXHJcbiAgfVxyXG4gIGdldENlbnRlcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgY2VudGVyID0ge31cclxuICAgIC8vY29uc29sZS5sb2codGhpcy5wb3MpO1xyXG4gICAgY2VudGVyLnggPSBwYXJzZUludCh0aGlzLnBvcy54KSArIHdpZHRoIC8gMjtcclxuICAgIGNlbnRlci55ID0gcGFyc2VJbnQodGhpcy5wb3MueSkgKyBoZWlnaHQgLyAyO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImNlbnRlclwiKTtcclxuICAgIGNlbnRlci5zdHJpbmcgPSBjZW50ZXIueCArICcgJyArIGNlbnRlci55O1xyXG4gICAgcmV0dXJuIGNlbnRlcjtcclxuICB9XHJcbiAgZ2V0Qm90dG9tTGVmdCh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgY290ZUJvdHRvbUxlZnQgPSB7fVxyXG4gICAgY290ZUJvdHRvbUxlZnQueCA9IHBhcnNlSW50KHRoaXMucG9zLngpO1xyXG4gICAgY290ZUJvdHRvbUxlZnQueSA9IHBhcnNlSW50KHRoaXMucG9zLnkpICsgaGVpZ2h0O1xyXG4gICAgY290ZUJvdHRvbUxlZnQuc3RyaW5nID0gY290ZUJvdHRvbUxlZnQueCArICcgJyArIGNvdGVCb3R0b21MZWZ0Lnk7XHJcbiAgICByZXR1cm4gY290ZUJvdHRvbUxlZnQ7XHJcbiAgfVxyXG4gIGdldEJvdHRvbVJpZ2h0KHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBjb3RlQm90dG9tUmlnaHQgPSB7fVxyXG4gICAgY290ZUJvdHRvbVJpZ2h0LnggPSBwYXJzZUludCh0aGlzLnBvcy54KSArIHdpZHRoO1xyXG4gICAgY290ZUJvdHRvbVJpZ2h0LnkgPSBwYXJzZUludCh0aGlzLnBvcy55KSArIGhlaWdodDtcclxuICAgIGNvdGVCb3R0b21SaWdodC5zdHJpbmcgPSBjb3RlQm90dG9tUmlnaHQueCArICcgJyArIGNvdGVCb3R0b21SaWdodC55O1xyXG4gICAgcmV0dXJuIGNvdGVCb3R0b21SaWdodDtcclxuICB9XHJcbiAgZ2V0U3ZnKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ZnXHJcbiAgfVxyXG4gIGdldElkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2xhc3NOYW1lRnJvbU9iamVjdCgpK3RoaXMuaWQ7XHJcbiAgfVxyXG4gIGdldFBvc2l0aW9uKCl7XHJcbiAgICByZXR1cm4gcmhzLnBvcztcclxuICB9XHJcblxyXG59XHJcbiIsIi8vIGNvbnNvbGUubG9nKCdjbGFzcyBEb21Db250cm9sbGVyIGxvYWQnKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tQ29udHJvbGxlciB7XHJcbiAgLy8gY29udHJvbGxlIGxhIHBsdXBhcnQgZGVzIGNyw6lhdGlvbixkZXRlY3Rpb24sc3VwcmVzc2lvbiBkJ2VsZW1lbnQgSFRNTFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5uYnJTYXZlQnV0dG9uPTlcclxuICAgIHZhciBkaXYgPXRoaXMuY3JlYXRpb25TYXZlTG9hZEJ1dHRvbigpXHJcbiAgICAkKFwiI3NvdXNTZWN0aW9uXCIpLnByZXBlbmQoZGl2KVxyXG4gICAgLy90aGlzLmNyZWF0QWxsKClcclxuICAgIC8vIGNvbnNvbGUubG9nKCdlbmREb21Db250cm9sbGVyJyk7XHJcbiAgfVxyXG4gIGNyZWF0aW9uQW5pbWF0aW9uQnV0dG9uKCl7XHJcbiAgICB2YXIgZGl2ID10aGlzLmNyZWF0aW9uRG9tRWxlbWVudCgnZGl2JywnYW5pbWF0aW9uQnV0dG9uJylcclxuICAgIHZhciBzdGFydD10aGlzLmNyZWF0aW9uRG9tRWxlbWVudCgnYnV0dG9uJywnc3RhcnQnLCdTdGFydCcpXHJcbiAgICB2YXIgc3RvcD10aGlzLmNyZWF0aW9uRG9tRWxlbWVudCgnYnV0dG9uJywnc3RvcCcsJ1N0b3AnKVxyXG4gICAgdmFyIG9uZVN0ZXA9dGhpcy5jcmVhdGlvbkRvbUVsZW1lbnQoJ2J1dHRvbicsJ29uZVN0ZXAnLCdPbmUgU3RlcCcpXHJcbiAgICBzdGFydC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgc3RvcC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgb25lU3RlcC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgZGl2LmFwcGVuZChzdGFydClcclxuICAgIGRpdi5hcHBlbmQoc3RvcClcclxuICAgIGRpdi5hcHBlbmQob25lU3RlcClcclxuICAgIHJldHVybiBkaXZcclxuICB9XHJcbiAgY3JlYXRpb25TYXZlTG9hZEJ1dHRvbigpe1xyXG4gICAgdmFyIGxvYWRTYXZlPXRoaXMuY3JlYXRpb25Eb21FbGVtZW50KCdkaXYnLCdsb2FkU2F2ZScpXHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5iclNhdmVCdXR0b247IGkrKykge1xyXG4gICAgICB2YXIgZGl2PXRoaXMuY3JlYXRpb25Eb21FbGVtZW50KCdkaXYnLG51bGwsbnVsbCwnc2F2ZUxvYWQtQnV0dG9ucycpXHJcbiAgICAgIHZhciBidXR0b25TYXZlID0gdGhpcy5jcmVhdGlvbkRvbUVsZW1lbnQoJ2J1dHRvbicsbnVsbCwnU2F2ZSBuwrAnK3BhcnNlSW50KGkrMSksJ3NhdmUnKVxyXG4gICAgICBidXR0b25TYXZlLmF0dHIoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgIGJ1dHRvblNhdmUuYXR0cignZGF0YS1pZCcsIGkrMSk7XHJcbiAgICAgIHZhciBidXR0b25Mb2FkID0gdGhpcy5jcmVhdGlvbkRvbUVsZW1lbnQoJ2J1dHRvbicsbnVsbCwnTG9hZCBuwrAnK3BhcnNlSW50KGkrMSksJ2xvYWQnKVxyXG4gICAgICBidXR0b25Mb2FkLmF0dHIoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgIGJ1dHRvbkxvYWQuYXR0cignZGF0YS1pZCcsIGkrMSk7XHJcbiAgICAgIHZhciBidXR0b25TdXByZSA9IHRoaXMuY3JlYXRpb25Eb21FbGVtZW50KCdidXR0b24nLG51bGwsJzxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT4nLCdzdXByZScpXHJcbiAgICAgIGJ1dHRvblN1cHJlLmF0dHIoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgIGJ1dHRvblN1cHJlLmF0dHIoJ2RhdGEtaWQnLCBpKzEpO1xyXG4gICAgICBkaXYuYXBwZW5kKGJ1dHRvblNhdmUpXHJcbiAgICAgIGRpdi5hcHBlbmQoYnV0dG9uTG9hZClcclxuICAgICAgZGl2LmFwcGVuZChidXR0b25TdXByZSlcclxuICAgICAgbG9hZFNhdmUuYXBwZW5kKGRpdilcclxuICAgIH1cclxuICAgIHJldHVybiBsb2FkU2F2ZVxyXG4gIH1cclxuICBjcmVhdGlvbkRvbUVsZW1lbnQodHlwZSxpZD1udWxsLGh0bWw9bnVsbCxjbGFzc2U9bnVsbCl7XHJcbiAgICAvLyBmb250aW9uIGfDqW7DqXJhbGUgcG91ciBjcsOpZXIgdW4gZWxlbWVudFxyXG4gICAgdmFyIGVsZW1lbnQgPSQoXCI8XCIrdHlwZStcIj48L1wiK3R5cGUrXCI+XCIpXHJcbiAgICBpZiAoaHRtbCE9bnVsbCkge1xyXG4gICAgICBlbGVtZW50Lmh0bWwoaHRtbClcclxuICAgIH1cclxuICAgIGlmIChpZCAhPSBudWxsKSB7XHJcbiAgICAgIGVsZW1lbnQuYXR0cignaWQnLCBpZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2xhc3NlICE9bnVsbCkge1xyXG4gICAgICBlbGVtZW50LmFkZENsYXNzKGNsYXNzZSlcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50XHJcbiAgfVxyXG59XHJcbiIsIi8vIGNvbnNvbGUubG9nKCdjbGFzcyBFdmVudENvbnRyb2xsZXIgbG9hZCcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRDb250cm9sbGVyIHtcclxuICAvLyBjb250cm9sbGUgbGVzIGNsaXF1ZXMgc291cmlzIGV0IGNsYXZpZXJcclxuICBjb25zdHJ1Y3RvcihtYW5pcHVsYXRvciwgc2F2ZXIpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdldmVudENvbnRyb2xsZXIgY29uc3RydWN0b3InKTtcclxuICAgIHRoaXMubWFuaXB1bGF0b3IgPSBtYW5pcHVsYXRvclxyXG4gICAgdGhpcy5zYXZlciA9IHNhdmVyXHJcbiAgICB0aGlzLmFjdHVhbFBvc01vdXNlID0gbnVsbFxyXG4gICAgdGhpcy5pbml0KClcclxuICAgIHRoaXMuaW5pdFNlbGVjdG9yKClcclxuICAgIHRoaXMuYmluZE9uQ0xpY2soKVxyXG4gICAgdGhpcy5iaW5kSG92ZXIoKVxyXG4gICAgdGhpcy5jaGVja1NhdmUoKVxyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzIC8vIEhBQ0s6XHJcbiAgICAkKFwiI29uZVN0ZXBcIikuY2xpY2soc2VsZi5hbmltT25lU3RlcCk7XHJcbiAgICAkKFwiI3N0YXJ0XCIpLmNsaWNrKHNlbGYuYW5pbVJlcGVhdCk7XHJcbiAgICAkKFwiI0J0bkRlbW9cIikuY2xpY2soc2VsZi5kZW1vKTtcclxuICAgIHRoaXMuYmluZENsZWFyQWxsKClcclxuICAgIHRoaXMuY2hlY2tTYXZlKClcclxuICAgIHRoaXMuYmluZEFsbFNhdmVMb2FkQnV0dG9ucygpXHJcbiAgfVxyXG4gIGNsZWFyU3ZnKCkge1xyXG4gICAgc2VsZi5tYW5pcHVsYXRvci5yZW1vdmVBbGxPYmplY3QoKVxyXG4gIH1cclxuICBjaGVja1NhdmUoKSB7XHJcbiAgICB2YXIgbGlzdGVTYXZlID0gdGhpcy5zYXZlci5jaGVja1NhdmUoKVxyXG4gICAgLy8gY29uc29sZS5sb2cobGlzdGVTYXZlKTtcclxuICAgICQoXCIuc2F2ZVwiKS5hZGRDbGFzcygnZW1wdHknKVxyXG4gICAgJChcIi5sb2FkXCIpLmFkZENsYXNzKCdub3RTYXZlJylcclxuICAgICQoXCIuc3VwcmVcIikuYWRkQ2xhc3MoJ25vdFNhdmUnKVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZVNhdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChcIi5zYXZlW2RhdGEtaWQ9XCIgKyBsaXN0ZVNhdmVbaV0gKyBcIl1cIikucmVtb3ZlQ2xhc3MoJ2VtcHR5JylcclxuICAgICAgJChcIi5sb2FkW2RhdGEtaWQ9XCIgKyBsaXN0ZVNhdmVbaV0gKyBcIl1cIikucmVtb3ZlQ2xhc3MoJ25vdFNhdmUnKVxyXG4gICAgICAkKFwiLnN1cHJlW2RhdGEtaWQ9XCIgKyBsaXN0ZVNhdmVbaV0gKyBcIl1cIikucmVtb3ZlQ2xhc3MoJ25vdFNhdmUnKVxyXG4gICAgfVxyXG4gIH1cclxuICBiaW5kQWxsU2F2ZUxvYWRCdXR0b25zKCkge1xyXG4gICAgc2VsZiA9IHRoaXNcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdiaW5kIEFsbCcpO1xyXG4gICAgICBzZWxmLmJpbmRTYXZlQnV0dG9uKClcclxuICAgICAgc2VsZi5iaW5kTG9hZEJ1dHRvbigpXHJcbiAgICAgIHNlbGYuYmluZFN1cHJlQnV0dG9uKClcclxuICAgICAgc2VsZi5iaW5kQ2xlYXJBbGwoKVxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG4gIGNoYW5nZUJ1dHRvbihpZCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3Rvb2dsZScpO1xyXG4gICAgJChcIi5zYXZlW2RhdGEtaWQ9XCIgKyBpZCArIFwiXVwiKS50b2dnbGVDbGFzcygnZW1wdHknKVxyXG4gICAgJChcIi5sb2FkW2RhdGEtaWQ9XCIgKyBpZCArIFwiXVwiKS50b2dnbGVDbGFzcygnbm90U2F2ZScpXHJcbiAgICAkKFwiLnN1cHJlW2RhdGEtaWQ9XCIgKyBpZCArIFwiXVwiKS50b2dnbGVDbGFzcygnbm90U2F2ZScpXHJcbiAgfVxyXG4gIHVuYmluZEFsbFNhdmVMb2FkQnV0dG9uKCkge1xyXG4gICAgdGhpcy51bmJpbmRMb2FkQnV0dG9uKClcclxuICAgIHRoaXMudW5iaW5kU2F2ZUJ1dHRvbigpXHJcbiAgICB0aGlzLnVuYmluZFN1cHJlQnV0dG9uKClcclxuICAgIHRoaXMudW5iaW5kQ2xlYXJBbGwoKVxyXG4gIH1cclxuICBiaW5kQ2xlYXJBbGwoKSB7XHJcbiAgICAkKFwiI2NsZWFyU3ZnXCIpLmNsaWNrKHNlbGYuY2xlYXJTdmcpO1xyXG4gIH1cclxuICB1bmJpbmRDbGVhckFsbCgpIHtcclxuICAgICQoXCIjY2xlYXJTdmdcIikudW5iaW5kKCdjbGljaycpXHJcbiAgfVxyXG4gIHVuYmluZExvYWRCdXR0b24oKSB7XHJcbiAgICAkKFwiLmxvYWRcIikudW5iaW5kKCdjbGljaycpXHJcbiAgfVxyXG4gIHVuYmluZFNhdmVCdXR0b24oKSB7XHJcbiAgICAkKFwiLnNhdmVcIikudW5iaW5kKCdjbGljaycpXHJcbiAgfVxyXG4gIHVuYmluZFN1cHJlQnV0dG9uKCkge1xyXG4gICAgJChcIi5zdXByZVwiKS51bmJpbmQoJ2NsaWNrJylcclxuICB9XHJcbiAgYmluZFNhdmVCdXR0b24oKSB7XHJcbiAgICB0aGlzLnVuYmluZFNhdmVCdXR0b24oKVxyXG4gICAgJChcIi5zYXZlLmVtcHR5XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZWxmLnNhdmUoJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgYmluZExvYWRCdXR0b24oKSB7XHJcbiAgICB0aGlzLnVuYmluZExvYWRCdXR0b24oKVxyXG4gICAgJChcIi5sb2FkOm5vdCgubm90U2F2ZSlcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNlbGYubG9hZCgkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSlcclxuICAgIH0pO1xyXG4gIH1cclxuICBiaW5kU3VwcmVCdXR0b24oKSB7XHJcbiAgICB0aGlzLnVuYmluZFN1cHJlQnV0dG9uKClcclxuICAgICQoXCIuc3VwcmU6bm90KC5ub3RTYXZlKVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgc2VsZi5zdXByZSgkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZShzYXZlTmFtZSkge1xyXG4gICAgdGhpcy5zYXZlci5zYXZlKHNhdmVOYW1lKVxyXG4gICAgdGhpcy5jaGFuZ2VCdXR0b24oc2F2ZU5hbWUpXHJcbiAgICB0aGlzLmJpbmRBbGxTYXZlTG9hZEJ1dHRvbnMoKVxyXG4gIH1cclxuICBsb2FkKHNhdmVOYW1lKSB7XHJcbiAgICB0aGlzLnNhdmVyLmxvYWQoc2F2ZU5hbWUpXHJcbiAgfVxyXG4gIHN1cHJlKHNhdmVOYW1lKSB7XHJcbiAgICB0aGlzLnNhdmVyLmNsZWFyU2F2ZShzYXZlTmFtZSlcclxuICAgIHRoaXMuY2hhbmdlQnV0dG9uKHNhdmVOYW1lKVxyXG4gICAgdGhpcy5iaW5kQWxsU2F2ZUxvYWRCdXR0b25zKClcclxuICB9XHJcbiAgYmluZE9uQ0xpY2soKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImJpbmRPbkNMaWNrXCIpO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzIC8vIEhBQ0s6XHJcbiAgICAkKFwiI2ZyYW1lXCIpLm1vdXNlZG93bihmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiYmluZFwiKTtcclxuICAgICAgc2VsZi5vbkNsaWNrKGV2ZW50KVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHVuYmluZE9uQ0xpY2soKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInVuYmluZE9uQ0xpY2tcIik7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICQoXCIjZnJhbWVcIikub2ZmKFwibW91c2Vkb3duXCIpO1xyXG5cclxuICB9XHJcbiAgZ2V0UG9zTW91c2UoZSkge1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZScpXHJcbiAgICB2YXIgb2Zmc2V0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcik7XHJcbiAgICB2YXIgY3Vyc29yWCA9IGUuY2xpZW50WCAtIG9mZnNldC5sZWZ0IC0gcGFyc2VJbnQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCk7XHJcbiAgICB2YXIgY3Vyc29yWSA9IGUuY2xpZW50WSAtIG9mZnNldC50b3AgLSBwYXJzZUludChzdHlsZXMuYm9yZGVyVG9wV2lkdGgpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhjdXJzb3JYLCBjdXJzb3JZKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IGN1cnNvclgsXHJcbiAgICAgIHk6IGN1cnNvcllcclxuICAgIH1cclxuICB9XHJcbiAgb25DbGljayhldmVudCkge1xyXG4gICAgdmFyIHBvc01vdXNlID0gdGhpcy5nZXRQb3NNb3VzZShldmVudCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwb3NNb3VzZSk7XHJcbiAgICB2YXIgcG9zID0gdGhpcy5tYW5pcHVsYXRvci5jYWxjUG9zKHBvc01vdXNlKVxyXG4gICAgdGhpcy5tYW5pcHVsYXRvci5wbGFjZU9iamVjdCh0aGlzLm1hbmlwdWxhdG9yLnNlbGVjdGVkLCBwb3MpXHJcbiAgfVxyXG4gIGFuaW1SZXBlYXQoKSB7XHJcbiAgICBzZWxmLnVuYmluZE9uQ0xpY2soKVxyXG4gICAgJChcIiNzdGFydFwiKS51bmJpbmQoJ2NsaWNrJylcclxuICAgICQoXCIjb25lU3RlcFwiKS51bmJpbmQoJ2NsaWNrJylcclxuICAgIHNlbGYudW5iaW5kQWxsU2F2ZUxvYWRCdXR0b24oKVxyXG4gICAgJChcIiNzdG9wXCIpLmNsaWNrKHNlbGYuc3RvcEFuaW0pO1xyXG4gICAgc2VsZi5hbmltKClcclxuICAgIHNlbGYubG9vcCA9IHNldEludGVydmFsKHNlbGYuYW5pbSwgNTUwKVxyXG4gIH1cclxuICBhbmltT25lU3RlcCgpIHtcclxuICAgICQoXCIjb25lU3RlcFwiKS51bmJpbmQoJ2NsaWNrJylcclxuICAgIHNlbGYudW5iaW5kQWxsU2F2ZUxvYWRCdXR0b24oKVxyXG4gICAgc2VsZi5hbmltKClcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoXCIjb25lU3RlcFwiKS5jbGljayhzZWxmLmFuaW1PbmVTdGVwKTtcclxuICAgICAgc2VsZi5iaW5kQWxsU2F2ZUxvYWRCdXR0b25zKClcclxuICAgIH0sIDUwMClcclxuXHJcbiAgfVxyXG4gIHN0b3BBbmltKCkge1xyXG4gICAgJChcIiNCdG5EZW1vXCIpLnVuYmluZCgnY2xpY2snKVxyXG4gICAgJChcIiNCdG5EZW1vXCIpLmNsaWNrKHNlbGYuZGVtbyk7XHJcbiAgICBzZWxmLmJpbmRPbkNMaWNrKClcclxuICAgICQoXCIjc3RvcFwiKS51bmJpbmQoJ2NsaWNrJylcclxuICAgIGNsZWFySW50ZXJ2YWwoc2VsZi5sb29wKVxyXG4gICAgJChcIiNzdGFydFwiKS5jbGljayhzZWxmLmFuaW1SZXBlYXQpO1xyXG4gICAgJChcIiNvbmVTdGVwXCIpLmNsaWNrKHNlbGYuYW5pbU9uZVN0ZXApXHJcbiAgICBzZWxmLmJpbmRBbGxTYXZlTG9hZEJ1dHRvbnMoKVxyXG4gIH1cclxuICBhbmltKCkge1xyXG4gICAgc2VsZi5tYW5pcHVsYXRvci5ydW4oKVxyXG4gIH1cclxuICBpbml0U2VsZWN0b3IoKSB7XHJcbiAgICAkKCcuc2VsZWN0b3JJdGVtOmZpcnN0JykuYWRkQ2xhc3MoJ3NlbGVjdGVkJylcclxuICAgIHRoaXMubWFuaXB1bGF0b3Iuc2VsZWN0ZWQgPSB0aGlzLm1hbmlwdWxhdG9yLmxpc3RlQ2xhc3NbMF1cclxuICAgIHZhciBtYW5pcHVsYXRvciA9IHRoaXMubWFuaXB1bGF0b3IgLy8gSEFDSzpcclxuICAgICQoJy5zZWxlY3Rvckl0ZW0nKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gICAgICBtYW5pcHVsYXRvci5jaGFuZ2VTZWxlY3Rvcih0aGlzKVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGJpbmRIb3ZlcihlKSB7XHJcbiAgICBzZWxmID0gdGhpc1xyXG4gICAgJCgnI2ZyYW1lJykuaG92ZXIoZnVuY3Rpb24oZSkge1xyXG4gICAgICAkKHRoaXMpLm1vdXNlbW92ZShmdW5jdGlvbihldmVudDIpIHtcclxuICAgICAgICB2YXIgcG9zTW91c2UgPSBzZWxmLmdldFBvc01vdXNlKGV2ZW50Mik7XHJcbiAgICAgICAgdmFyIHBvcyA9IHNlbGYubWFuaXB1bGF0b3IuY2FsY1Bvcyhwb3NNb3VzZSlcclxuICAgICAgICBpZiAoc2VsZi5hY3R1YWxQb3NNb3VzZSA9PSBudWxsIHx8ICFwb3MuaXNFcXVhbChzZWxmLmFjdHVhbFBvc01vdXNlKSkge1xyXG4gICAgICAgICAgc2VsZi5hY3R1YWxQb3NNb3VzZSA9IHBvcztcclxuICAgICAgICAgIHNlbGYubWFuaXB1bGF0b3IuY2xlYXJHaG9zdCgpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZW1lbnQgY2FzZVwiKTtcclxuICAgICAgICAgIHNlbGYubWFuaXB1bGF0b3IucGxhY2VPYmplY3Qoc2VsZi5tYW5pcHVsYXRvci5zZWxlY3RlZCwgc2VsZi5hY3R1YWxQb3NNb3VzZSwgbnVsbCwgdHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgJChkb2N1bWVudCkudW5iaW5kKCdrZXlwcmVzcycpXHJcbiAgICAgICAgJChkb2N1bWVudCkua2V5cHJlc3MoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgdmFyIHRvdWNoZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b3VjaGUpO1xyXG4gICAgICAgICAgdmFyIHBvc01vdXNlID0gc2VsZi5nZXRQb3NNb3VzZShldmVudDIpO1xyXG4gICAgICAgICAgdmFyIHBvcyA9IHNlbGYubWFuaXB1bGF0b3IuY2FsY1Bvcyhwb3NNb3VzZSlcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBvcyk7XHJcbiAgICAgICAgICBpZiAodG91Y2hlID09ICd0Jykge1xyXG4gICAgICAgICAgICBzZWxmLm1hbmlwdWxhdG9yLmNoYW5nZVVybERlZihwb3MpXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRvdWNoZSA9PSAncicpIHtcclxuICAgICAgICAgICAgc2VsZi5tYW5pcHVsYXRvci5yb3RhdGVPYmplY3QocG9zKVxyXG4gICAgICAgICAgfSBlbHNlIGlmICh0b3VjaGUgPT0gJ3gnKSB7XHJcbiAgICAgICAgICAgIHNlbGYubWFuaXB1bGF0b3IucmVtb3ZlT2JqZWN0T25DbGljayhwb3MpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNlbGYubWFuaXB1bGF0b3IuY2xlYXJHaG9zdCgpXHJcbiAgICAgIHNlbGYuYWN0dWFsUG9zTW91c2UgPSBudWxsXHJcbiAgICAgICQoZG9jdW1lbnQpLnVuYmluZCgnbW91c2Vtb3ZlJylcclxuICAgICAgJChkb2N1bWVudCkudW5iaW5kKCdrZXlwcmVzcycpXHJcbiAgICAgICQoJ2gxJykuY3NzKCdiYWNrZ3JvdW5kJywgJycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGRlbW8oKSB7XHJcbiAgICAkKFwiI0J0bkRlbW9cIikudW5iaW5kKCdjbGljaycpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImRlbW8gc3RhcnRcIik7XHJcbiAgICBzZWxmLm1hbmlwdWxhdG9yLmRlbW8oKVxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgc2VsZi5hbmltUmVwZWF0KClcclxuICAgIH0sIDEwMDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgc2VsZi5zdG9wQW5pbSgpXHJcbiAgICAgICQoXCIjQnRuRGVtb1wiKS5jbGljayhzZWxmLmRlbW8pO1xyXG5cclxuICAgIH0sIDEwMDAwKTtcclxuICB9XHJcbn1cclxuIiwiLy8gY29uc29sZS5sb2coJ2NsYXNzIEdyaWxsZSBsb2FkJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlsbGUge1xyXG4gIC8vIGNyw6llciBsYSBncmlsbGUgZGUgamV1XHJcbiAgY29uc3RydWN0b3IobmJyQ2FzZVdpZHRoPScxMCcsbmJyQ2FzZUhlaWdodD1cIjEwXCIpIHtcclxuICAgIHRoaXMud2lkdGg9JChcIiNzdmdcIikud2lkdGgoKVxyXG4gICAgdGhpcy5oZWlnaHQ9JChcIiNzdmdcIikuaGVpZ2h0KClcclxuICAgIHZhciBoZWlnaHQgPSQoXCJzdmdcIikuaGVpZ2h0KClcclxuICAgIHZhciBncm91cD0kKFwiPGcgaWQ9J2dyaWxsZSc+PC9nPlwiKVxyXG4gICAgdGhpcy5uYnJDYXNlV2lkdGg9bmJyQ2FzZVdpZHRoXHJcbiAgICB0aGlzLm5ickNhc2VIZWlnaHQ9bmJyQ2FzZUhlaWdodFxyXG4gICAgdmFyIGNhc2VXaWR0aD10aGlzLndpZHRoL25ickNhc2VXaWR0aDtcclxuICAgIHRoaXMuY2FzZVdpZHRoPWNhc2VXaWR0aFxyXG4gICAgdmFyIGNhc2VIZWlnaHQ9dGhpcy5oZWlnaHQvbmJyQ2FzZUhlaWdodDtcclxuICAgIHRoaXMuY2FzZUhlaWdodD1jYXNlSGVpZ2h0XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PXRoaXMubmJyQ2FzZUhlaWdodDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHBvc1N0YXJ0PXt9O1xyXG4gICAgICAgIHBvc1N0YXJ0Lng9MFxyXG4gICAgICAgIHBvc1N0YXJ0Lnk9aSp0aGlzLmNhc2VIZWlnaHRcclxuICAgICAgICB2YXIgcG9zRW5kPXt9O1xyXG4gICAgICAgIHBvc0VuZC54PXRoaXMud2lkdGhcclxuICAgICAgICBwb3NFbmQueT1pKnRoaXMuY2FzZUhlaWdodFxyXG4gICAgICAgIHZhciBzdmcgPXRoaXMuc3ZnTGluZShwb3NTdGFydCxwb3NFbmQpXHJcbiAgICAgICAgZ3JvdXAuYXBwZW5kKHN2ZylcclxuXHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PXRoaXMubmJyQ2FzZVdpZHRoOyBpKyspIHtcclxuICAgICAgICB2YXIgcG9zU3RhcnQ9e307XHJcbiAgICAgICAgcG9zU3RhcnQueD1pKnRoaXMuY2FzZVdpZHRoXHJcbiAgICAgICAgcG9zU3RhcnQueT0wXHJcbiAgICAgICAgdmFyIHBvc0VuZD17fTtcclxuICAgICAgICBwb3NFbmQueD1pKnRoaXMuY2FzZVdpZHRoXHJcbiAgICAgICAgcG9zRW5kLnk9dGhpcy5oZWlnaHRcclxuICAgICAgICB2YXIgc3ZnID10aGlzLnN2Z0xpbmUocG9zU3RhcnQscG9zRW5kKVxyXG4gICAgICAgIGdyb3VwLmFwcGVuZChzdmcpXHJcbiAgICB9XHJcbiAgICAkKFwic3ZnXCIpLmFwcGVuZChncm91cClcclxuICB9XHJcbiAgc3ZnTGluZShwb3NTdGFydCxwb3NFbmQsY29sb3I9J2JsYWNrJyx3aWR0aD0nMicpe1xyXG4gICAgcmV0dXJuICc8bGluZSB4MT0nK3Bvc1N0YXJ0LngrJyB5MT0nK3Bvc1N0YXJ0LnkrJyB4Mj0nK3Bvc0VuZC54KycgeTI9Jytwb3NFbmQueSsnIHN0eWxlPVwic3Ryb2tlOicrY29sb3IrJztzdHJva2Utd2lkdGg6Jyt3aWR0aCsnXCIgLz4nXHJcbiAgfVxyXG59XHJcbiIsIi8vIGNvbnNvbGUubG9nKCdjbGFzcyBtYW5pcHVsYXRvciBsb2FkJyk7XHJcbmltcG9ydCBHcmlsbGUgZnJvbSAnLi9HcmlsbGUuY2xhc3MuanMnO1xyXG5pbXBvcnQgRXZlbnRDb250cm9sbGVyIGZyb20gJy4vRXZlbnRDb250cm9sbGVyLmNsYXNzLmpzJztcclxuaW1wb3J0IFNhdmVNYW5pcHVsYXRvciBmcm9tICcuL1NhdmVNYW5pcHVsYXRvci5jbGFzcy5qcyc7XHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSBcIi4vdXRpbC5qc1wiO1xyXG5pbXBvcnQgVGFwaXMgZnJvbSAnLi9UYXBpcy5jbGFzcy5qcyc7XHJcbmltcG9ydCBPcmUgZnJvbSAnLi9PcmUuY2xhc3MuanMnO1xyXG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9Qb3NpdGlvbi5jbGFzcy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5pcHVsYXRvciB7XHJcbiAgLy8gdmEgbWFuaXB1bGVyIGxlcyBvYmplY3RzIGNvbW1lIGxlcyB0YXBpcyBlc3QgbGVzIG1pbmVyYWlzXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBsaXN0ZUNsYXNzLCBncmlsbGUpIHtcclxuICAgIHRoaXMubGlzdGVPYmplY3QgPSBbXTtcclxuICAgIHRoaXMubGlzdGVDbGFzcyA9IGxpc3RlQ2xhc3M7XHJcbiAgICB0aGlzLndyaXRlRGVmKClcclxuICAgIHRoaXMuZ3JpbGxlID0gbmV3IEdyaWxsZSgpO1xyXG4gICAgdGhpcy5yZWdyb3VwKClcclxuICAgIHRoaXMuYWRkU2VsZWN0b3IoKVxyXG4gICAgdGhpcy5zYXZlciA9IG5ldyBTYXZlTWFuaXB1bGF0b3IodGhpcylcclxuICAgIHRoaXMuZXZlbnRDb250cm9sbGVyID0gbmV3IEV2ZW50Q29udHJvbGxlcih0aGlzLCB0aGlzLnNhdmVyKVxyXG4gICAgdGhpcy5saXN0ZU9iamVjdENoYW5nZSA9IFtdXHJcbiAgICAvL3RoaXMuYWZmTGlzdGVPYmplY3QoKVxyXG4gIH1cclxuICBhZGRTZWxlY3RvcigpIHtcclxuICAgIC8vIGFqb3V0ZSBsZXMgYm91dG9uIMOgIGRyb2l0ZSBwb3VyIHNlbGVjdGlvbm5lciBsZSB0eXBlIGRlIGZpZ3VyZSDDoCBwb3NlclxyXG4gICAgJChcIjxkaXYgaWQ9J3NlbGVjdG9yJz4gPC9kaXY+XCIpLmluc2VydEFmdGVyKFwiI2NvbnRhaW5lckZyYW1lQ29udHJvbFwiKVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlQ2xhc3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMubGlzdGVDbGFzc1tpXS5nZXRDbGFzc05hbWUoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coY2xhc3NOYW1lKTtcclxuICAgICAgJChcIiNzZWxlY3RvclwiKS5hcHBlbmQoKFwiPGJ1dHRvbiAgY2xhc3M9J3NlbGVjdG9ySXRlbScgdHlwZT0nYnV0dG9uJyA+XCIgKyBjbGFzc05hbWUgKyBcIjwvYnV0dG9uPlwiKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoYW5nZVNlbGVjdG9yKHNlbGVjdGVkKSB7XHJcbiAgICAvLyBjaGFuZ2UgbGUgYm91dG9uIMOgIGRyb2l0ZSBxdWkgZXN0IHNlbGVjdGlvbmVyXHJcbiAgICAkKCcuc2VsZWN0b3JJdGVtJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJylcclxuICAgICQoc2VsZWN0ZWQpLmFkZENsYXNzKCdzZWxlY3RlZCcpXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVDbGFzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5saXN0ZUNsYXNzW2ldLmdldENsYXNzTmFtZSgpID09ICQoc2VsZWN0ZWQpLmh0bWwoKSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmxpc3RlQ2xhc3NbaV1cclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlZ3JvdXAoKSB7XHJcbiAgICAvLyBjcsOpZXIgbGVzIGRpZmVyZW50IGdyb3VwIGRlIGZpZ3VyZSBhdSBkZXNzdXMvZW4gZGVzc291cy9mYW50b21lXHJcbiAgICB2YXIgZ3JvdXAgPSAkKFwiPGcgaWQ9J2ZpZ3VyZUdycCc+PC9nPlwiKVxyXG4gICAgJChcIiNzdmdcIikuYXBwZW5kKGdyb3VwKTtcclxuICAgIHZhciBzdWJHcm91cDEgPSAkKFwiPGcgaWQ9J2ZpZ3VyZUdycERvd24nPjwvZz5cIilcclxuICAgIHZhciBzdWJHcm91cDIgPSAkKFwiPGcgaWQ9J2ZpZ3VyZUdycFVwJz48L2c+XCIpXHJcbiAgICB2YXIgc3ViR3JvdXAzID0gJChcIjxnIGlkPSdmaWd1cmVHcnBHaG9zdCc+PC9nPlwiKVxyXG4gICAgZ3JvdXAuYXBwZW5kKHN1Ykdyb3VwMSlcclxuICAgIGdyb3VwLmFwcGVuZChzdWJHcm91cDIpXHJcbiAgICBncm91cC5hcHBlbmQoc3ViR3JvdXAzKVxyXG4gICAgJChcIiNzdmdcIikuYXBwZW5kKGdyb3VwKTtcclxuICAgIHZhciBncm91cCA9ICQoXCI8ZyBpZD0nYW5pbWF0aW9uR3JwJz48L2c+XCIpXHJcbiAgICAkKFwiI3N2Z1wiKS5hcHBlbmQoZ3JvdXApO1xyXG4gIH1cclxuICByZXNldChsaXN0ZU9iamVjdExvYWQpIHtcclxuICAgIC8vIGVubGV2ZSB0b3V0ZSBsZXMgZmlndXJlc1xyXG4gICAgJChcIiNmaWd1cmVHcnBVcFwiKS5lbXB0eSgpXHJcbiAgICAkKFwiI2ZpZ3VyZUdycERvd25cIikuZW1wdHkoKVxyXG4gICAgdGhpcy5saXN0ZU9iamVjdCA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZU9iamVjdExvYWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhsaXN0ZU9iamVjdExvYWRbaV0uY2xhc3NlKVxyXG4gICAgICB2YXIgY2xhc3NlO1xyXG4gICAgICBpZiAobGlzdGVPYmplY3RMb2FkW2ldLmNsYXNzZSA9PSAnVGFwaXMnKSB7XHJcbiAgICAgICAgY2xhc3NlID0gVGFwaXNcclxuICAgICAgICB0aGlzLnBsYWNlT2JqZWN0KGNsYXNzZSwgbGlzdGVPYmplY3RMb2FkW2ldLnBvcylcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGxpc3RlT2JqZWN0TG9hZFtpXS50eXBlKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVVybERlZihsaXN0ZU9iamVjdExvYWRbaV0ucG9zLCBsaXN0ZU9iamVjdExvYWRbaV0udHlwZSlcclxuXHJcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVPYmplY3RMb2FkW2ldLmNsYXNzZSA9PSAnT3JlJykge1xyXG4gICAgICAgIGNsYXNzZSA9IE9yZVxyXG4gICAgICAgIHRoaXMucGxhY2VPYmplY3QoY2xhc3NlLCBsaXN0ZU9iamVjdExvYWRbaV0ucG9zKVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBjYWxjUG9zKHBvc01vdXNlKSB7XHJcbiAgICB2YXIgeCA9IE1hdGguZmxvb3IocG9zTW91c2UueCAvIHRoaXMuZ3JpbGxlLmNhc2VXaWR0aCk7XHJcbiAgICB2YXIgeSA9IE1hdGguZmxvb3IocG9zTW91c2UueSAvIHRoaXMuZ3JpbGxlLmNhc2VIZWlnaHQpO1xyXG4gICAgeCA9IE1hdGguZmxvb3IoeCAqIHRoaXMuZ3JpbGxlLmNhc2VXaWR0aClcclxuICAgIHkgPSBNYXRoLmZsb29yKHkgKiB0aGlzLmdyaWxsZS5jYXNlSGVpZ2h0KVxyXG4gICAgdmFyIGRpcmVjdGlvbiA9ICcwJ1xyXG4gICAgdmFyIHBvcyA9IG5ldyBQb3NpdGlvbih4LnRvU3RyaW5nKCksIHkudG9TdHJpbmcoKSwgZGlyZWN0aW9uKTtcclxuICAgIHJldHVybiBwb3M7XHJcbiAgfVxyXG4gIHBsYWNlR2hvc3Qob2JqZWN0KSB7XHJcbiAgICAkKFwiI2ZpZ3VyZUdycEdob3N0XCIpLmVtcHR5KClcclxuICAgIHZhciBzdmcgPSBvYmplY3QuZ2V0U3ZnKCk7XHJcbiAgICB2YXIgaWQgPSBvYmplY3QuZ2V0SWQoKTtcclxuICAgICQoXCIjZmlndXJlR3JwR2hvc3RcIikuYXBwZW5kKHN2Zyk7XHJcbiAgICAkKFwiI29iamVjdC1cIiArIGlkKS5hdHRyKCdmaWxsLW9wYWNpdHknLCAnMC41Jyk7XHJcbiAgfVxyXG4gIGNsZWFyR2hvc3QoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImNsZWFyIEdIT1NUXCIpO1xyXG4gICAgJChcIiNmaWd1cmVHcnBHaG9zdFwiKS5lbXB0eSgpXHJcbiAgICB1dGlsLnJlZnJlc2goXCIjZmlndXJlR3JwR2hvc3RcIilcclxuICB9XHJcbiAgcGxhY2VPYmplY3QoY2xhc3NlcywgcG9zLCB0eXBlID0gbnVsbCwgZ2hvc3QgPSBmYWxzZSkge1xyXG4gICAgdmFyIG9iamVjdE9uUGxhY2UgPSB0aGlzLmZpbmRBbGxPYmplY3QocG9zKVxyXG4gICAgaWYgKG9iamVjdE9uUGxhY2UubGVuZ3RoID09IDApIHtcclxuICAgICAgaWYgKHR5cGUgIT0gbnVsbCAmJiBjbGFzc2VzLmdldENsYXNzTmFtZSgpID09ICdUYXBpcycpIHtcclxuICAgICAgICB2YXIgb2JqZWN0ID0gbmV3IGNsYXNzZXMocG9zLCB0eXBlKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBvYmplY3QgPSBuZXcgY2xhc3Nlcyhwb3MpXHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhvYmplY3QpO1xyXG4gICAgICBpZiAoZ2hvc3QgPT0gdHJ1ZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib2JqZWN0IDpcIitvYmplY3QuZ2V0SWQoKSk7XHJcbiAgICAgICAgdGhpcy5wbGFjZUdob3N0KG9iamVjdCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hZGRPYmplY3Qob2JqZWN0KTtcclxuICAgICAgICB0aGlzLndyaXRlT2JqZWN0KG9iamVjdCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBhbHJlYWR5ID0gZmFsc2U7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0T25QbGFjZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBvYmplY3QgPSB0aGlzLmxpc3RlT2JqZWN0W29iamVjdE9uUGxhY2VbaV1dXHJcbiAgICAgICAgaWYgKG9iamVjdC5nZXRDbGFzcygpLmdldENsYXNzTmFtZSgpID09IGNsYXNzZXMuZ2V0Q2xhc3NOYW1lKCkpIHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2cob2JqZWN0LmdldENsYXNzKCkuZ2V0Q2xhc3NOYW1lKCksY2xhc3Nlcy5nZXRDbGFzc05hbWUoKSk7XHJcbiAgICAgICAgICBhbHJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFhbHJlYWR5ICYmIGdob3N0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgIT0gbnVsbCAmJiBjbGFzc2VzLmdldENsYXNzTmFtZSgpID09ICdUYXBpcycpIHtcclxuICAgICAgICAgIHZhciBvYmplY3QgPSBuZXcgY2xhc3Nlcyhwb3MsIHR5cGUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZhciBvYmplY3QgPSBuZXcgY2xhc3Nlcyhwb3MpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cob2JqZWN0KTtcclxuICAgICAgICB0aGlzLmFkZE9iamVjdChvYmplY3QpXHJcbiAgICAgICAgdGhpcy53cml0ZU9iamVjdChvYmplY3QpXHJcbiAgICAgIH0gZWxzZSBpZiAoZ2hvc3QgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICh0eXBlICE9IG51bGwgJiYgY2xhc3Nlcy5nZXRDbGFzc05hbWUoKSA9PSAnVGFwaXMnKSB7XHJcbiAgICAgICAgICB2YXIgb2JqZWN0ID0gbmV3IGNsYXNzZXMocG9zLCB0eXBlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIgb2JqZWN0ID0gbmV3IGNsYXNzZXMocG9zKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYWNlR2hvc3Qob2JqZWN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXRpbC5yZWZyZXNoKFwiI2ZpZ3VyZUdycFwiKVxyXG4gIH1cclxuICB3cml0ZU9iamVjdChvYmplY3QpIHtcclxuICAgIC8vIGFqb3V0ZSBsYSBmaWd1cmUgZGFucyBsZSBET01cclxuICAgIHZhciBjbGFzc2UgPSBvYmplY3QuZ2V0Q2xhc3MoKS5nZXRDbGFzc05hbWUoKVxyXG4gICAgdmFyIHN2ZyA9IG9iamVjdC5nZXRTdmcoKTtcclxuICAgIGlmIChjbGFzc2UgPT0gJ1RhcGlzJykge1xyXG4gICAgICAkKFwiI2ZpZ3VyZUdycERvd25cIikuYXBwZW5kKHN2Zyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiI2ZpZ3VyZUdycFVwXCIpLmFwcGVuZChzdmcpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgd3JpdGVBbGwoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy53cml0ZU9iamVjdCh0aGlzLmxpc3RlT2JqZWN0W2ldKTtcclxuICAgIH1cclxuICAgIHV0aWwucmVmcmVzaCgpXHJcbiAgfVxyXG4gIGFuaW1BbGwoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVDbGFzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMubGlzdGVDbGFzc1tpXS5nZXRBbmltYXRpb24gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5saXN0ZUNsYXNzW2ldLmdldEFuaW1hdGlvbigpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgYW5pbWF0aW9uID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuaW1hdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAkKFwiI2FuaW1hdGlvbkdycFwiKS5hcHBlbmQoYW5pbWF0aW9uW2ldKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKFwiI2FuaW1hdGlvbkdycFwiKS5hcHBlbmQoYW5pbWF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY2FsY0RpcmVjdGlvbih0eXBlLCBkaXJlY3Rpb24pIHtcclxuICAgIGlmICh0eXBlID09ICdmb3J3YXJkJykge1xyXG4gICAgICByZXR1cm4gZGlyZWN0aW9uXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PSAnbGVmdCcpIHtcclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDNcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uIC0gMVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PSAncmlnaHQnKSB7XHJcbiAgICAgIHJldHVybiAoZGlyZWN0aW9uICsgMSkgJSA0XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhbGNNb3ZlKGRpcmVjdGlvbikge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PSAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXhlOiAneScsXHJcbiAgICAgICAgc2lnbmU6ICctJ1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXhlOiAneCcsXHJcbiAgICAgICAgc2lnbmU6ICcrJ1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAyKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXhlOiAneScsXHJcbiAgICAgICAgc2lnbmU6ICcrJ1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF4ZTogJ3gnLFxyXG4gICAgICAgIHNpZ25lOiAnLSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjaGVja0NvbGxpc2lvbihwb3MsIGRpcmVjdGlvbikge1xyXG4gICAgdmFyIGRlc3RpbmF0aW9uID0ge31cclxuICAgIHZhciBjYXNlSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5ncmlsbGUuY2FzZUhlaWdodClcclxuICAgIHZhciBjYXNlV2lkdGggPSBwYXJzZUludCh0aGlzLmdyaWxsZS5jYXNlV2lkdGgpXHJcbiAgICB2YXIgY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwb3MueCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwb3MueSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZGlyOicgKyBkaXJlY3Rpb24pO1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PSAwKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdkaXJlY3Rpb24gcHLDqXZ1OicgKyAwKTtcclxuICAgICAgZGVzdGluYXRpb24ueCA9IHBvcy54O1xyXG4gICAgICBkZXN0aW5hdGlvbi55ID0gcGFyc2VJbnQocG9zLnkpIC0gY2FzZUhlaWdodFxyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnZGlyZWN0aW9uIHByw6l2dTonICsgMSk7XHJcbiAgICAgIGRlc3RpbmF0aW9uLnggPSBwYXJzZUludChwb3MueCkgKyBjYXNlV2lkdGg7XHJcbiAgICAgIGRlc3RpbmF0aW9uLnkgPSBwb3MueVxyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMikge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnZGlyZWN0aW9uIHByw6l2dTonICsgMik7XHJcbiAgICAgIGRlc3RpbmF0aW9uLnggPSBwb3MueDtcclxuICAgICAgZGVzdGluYXRpb24ueSA9IHBhcnNlSW50KHBvcy55KSArIGNhc2VIZWlnaHRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdkaXJlY3Rpb24gcHLDqXZ1OicgKyAzKTtcclxuICAgICAgZGVzdGluYXRpb24ueCA9IHBhcnNlSW50KHBvcy54KSAtIGNhc2VXaWR0aDtcclxuICAgICAgZGVzdGluYXRpb24ueSA9IHBvcy55XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkZXN0aW5hdGlvbik7XHJcbiAgICB2YXIgbGlzdGVPYmplY3RGaW5kID0gdGhpcy5maW5kQWxsT2JqZWN0KGRlc3RpbmF0aW9uKVxyXG4gICAgLy8gY29uc29sZS5sb2cobGlzdGVPYmplY3RGaW5kKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVPYmplY3RGaW5kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBjbGFzc2VzID0gdGhpcy5saXN0ZU9iamVjdFtsaXN0ZU9iamVjdEZpbmRbaV1dLmdldENsYXNzTmFtZUZyb21PYmplY3QoKVxyXG4gICAgICBpZiAoY2xhc3NlcyA9PSAnT3JlJykge1xyXG4gICAgICAgIGNvbGxpc2lvbiA9IHRydWVcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sbGlzaW9uXHJcbiAgfVxyXG4gIG1vdmVBbGwoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmxpc3RlT2JqZWN0W2ldLmdldE1vdmUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB2YXIgdGFwaXNVbmRlciA9IHRoaXMuZmluZE9iamVjdCh0aGlzLmxpc3RlT2JqZWN0W2ldLnBvcywgT3JlKVxyXG5cclxuICAgICAgICBpZiAodGFwaXNVbmRlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGFwaXNVbmRlciAnICsgdGFwaXNVbmRlci5nZXRJZCgpKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcGlzVW5kZXIudHlwZSk7XHJcblxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RhcGlzVW5kZXIgZGlyZWN0aW9uICcgKyB0YXBpc1VuZGVyLnBvcy5kaXJlY3Rpb24pO1xyXG4gICAgICAgICAgdmFyIG1vdmVEaXJlY3Rpb24gPSB0aGlzLmNhbGNEaXJlY3Rpb24odGFwaXNVbmRlci50eXBlLFxyXG4gICAgICAgICAgICB0YXBpc1VuZGVyLnBvcy5kaXJlY3Rpb24pXHJcbiAgICAgICAgICB2YXIgY29sbGlzaW9uID0gdGhpcy5jaGVja0NvbGxpc2lvbih0aGlzLmxpc3RlT2JqZWN0W2ldLnBvcywgbW92ZURpcmVjdGlvbilcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coY29sbGlzaW9uKTtcclxuICAgICAgICAgIGlmICghY29sbGlzaW9uKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uIG1vdmUgXCIgKyBtb3ZlRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHRoaXMuY2FsY01vdmUobW92ZURpcmVjdGlvbilcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1vdmUgPSB0aGlzLmdldE1vdmUodGhpcy5saXN0ZU9iamVjdFtpXSwgZGlyZWN0aW9uLCB0aGlzLmdyaWxsZS5jYXNlV2lkdGgsIHRoaXMuZ3JpbGxlLmNhc2VIZWlnaHQpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobW92ZSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5saXN0ZU9iamVjdENoYW5nZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1vdmUucG9zRmluYWwpO1xyXG4gICAgICAgICAgICB2YXIgYWxyZWFkeVBsYW5uZWRQb3NpdGlvbiA9IGZhbHNlXHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5saXN0ZU9iamVjdENoYW5nZS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlzdGVPYmplY3RDaGFuZ2Vbal0ucG9zRmluYWwpO1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLmxpc3RlT2JqZWN0Q2hhbmdlW2pdLnBvc0ZpbmFsLnggPT0gbW92ZS5wb3NGaW5hbC54ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlT2JqZWN0Q2hhbmdlW2pdLnBvc0ZpbmFsLnkgPT0gbW92ZS5wb3NGaW5hbC55XHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBhbHJlYWR5UGxhbm5lZFBvc2l0aW9uID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFhbHJlYWR5UGxhbm5lZFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgJChcIiNhbmltYXRpb25HcnBcIikuYXBwZW5kKG1vdmUuc3ZnKTtcclxuICAgICAgICAgICAgICB0aGlzLmxpc3RlT2JqZWN0Q2hhbmdlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLmxpc3RlT2JqZWN0W2ldLFxyXG4gICAgICAgICAgICAgICAgcG9zRmluYWw6IG1vdmUucG9zRmluYWwsXHJcbiAgICAgICAgICAgICAgICBheGU6IGRpcmVjdGlvbi5heGUsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogaVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZ2V0TW92ZShvYmplY3QsIGRpcmVjdGlvbiwgZGlzdGFuY2VYLCBkaXN0YW5jZVkpIHtcclxuICAgIHZhciBwb3NpdGlvbiA9IHt9XHJcbiAgICBpZiAoZGlyZWN0aW9uLmF4ZSA9PSAneCcpIHtcclxuICAgICAgdmFyIHBvc0luaXQgPSBvYmplY3QucG9zLng7XHJcbiAgICAgIHZhciBheGUgPSAneCdcclxuICAgICAgcG9zaXRpb24ueSA9IG9iamVjdC5wb3MueVxyXG4gICAgICBpZiAoZGlyZWN0aW9uLnNpZ25lID09ICcrJykge1xyXG4gICAgICAgIHZhciBwb3NGaW5hbCA9IChwYXJzZUludChwb3NJbml0KSArIGRpc3RhbmNlWCkudG9TdHJpbmcoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBwb3NGaW5hbCA9IChwYXJzZUludChwb3NJbml0KSAtIGRpc3RhbmNlWCkudG9TdHJpbmcoKVxyXG4gICAgICB9XHJcbiAgICAgIHBvc2l0aW9uLnggPSBwb3NGaW5hbFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHBvc0luaXQgPSBvYmplY3QucG9zLnk7XHJcbiAgICAgIHZhciBheGUgPSAneSdcclxuICAgICAgcG9zaXRpb24ueCA9IG9iamVjdC5wb3MueFxyXG4gICAgICBpZiAoZGlyZWN0aW9uLnNpZ25lID09ICcrJykge1xyXG4gICAgICAgIHZhciBwb3NGaW5hbCA9IChwYXJzZUludChwb3NJbml0KSArIGRpc3RhbmNlWSkudG9TdHJpbmcoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBwb3NGaW5hbCA9IChwYXJzZUludChwb3NJbml0KSAtIGRpc3RhbmNlWSkudG9TdHJpbmcoKVxyXG4gICAgICB9XHJcbiAgICAgIHBvc2l0aW9uLnkgPSBwb3NGaW5hbFxyXG4gICAgfVxyXG4gICAgdmFyIHN2ZyA9IG9iamVjdC5nZXRNb3ZlKGF4ZSwgcG9zSW5pdCwgcG9zRmluYWwpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdmc6IHN2ZyxcclxuICAgICAgcG9zRmluYWw6IHBvc2l0aW9uXHJcbiAgICB9O1xyXG5cclxuICB9XHJcbiAgcmV3cml0ZUFsbCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZXdyaXRlIHRpbWUnKTtcclxuICAgIHZhciBsaXN0ZSA9IHRoaXMubGlzdGVPYmplY3RDaGFuZ2VcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5saXN0ZU9iamVjdENoYW5nZS5sZW5ndGgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLnJld3JpdGVPYmplY3QobGlzdGVbaV0ub2JqZWN0LCBsaXN0ZVtpXS5wb3NGaW5hbCwgbGlzdGVbaV0uYXhlLCBsaXN0ZVtpXS5pbmRleClcclxuICAgIH1cclxuICAgIHRoaXMubGlzdGVPYmplY3RDaGFuZ2UgPSBbXVxyXG4gICAgdXRpbC5yZWZyZXNoKFwiI2ZpZ3VyZUdycFwiKVxyXG4gIH1cclxuICByZXdyaXRlT2JqZWN0KG9iamVjdCwgcG9zRmluYWwsIGF4ZSwgaW5kZXgpIHtcclxuICAgIHZhciBpZCA9IG9iamVjdC5nZXRJZCgpXHJcbiAgICAvLyBjb25zb2xlLmxvZygncmV3cml0ZU9iamVjdCB3aXRoIGlkICcgKyBpZCk7XHJcbiAgICAkKFwiI29iamVjdC1cIiArIGlkKS5yZW1vdmUoKVxyXG4gICAgaWYgKGF4ZSA9PSAneCcpIHtcclxuICAgICAgb2JqZWN0LnBvcy54ID0gcGFyc2VJbnQocG9zRmluYWwueClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9iamVjdC5wb3MueSA9IHBhcnNlSW50KHBvc0ZpbmFsLnkpXHJcbiAgICB9XHJcbiAgICAvL3RoaXMuYWZmTGlzdGVPYmplY3QoKVxyXG4gICAgb2JqZWN0LnNldFN2ZygpXHJcbiAgICB0aGlzLndyaXRlT2JqZWN0KG9iamVjdClcclxuICB9XHJcbiAgcnVuKCkge1xyXG4gICAgJChcIi5hbmltYXRpb25cIikucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmFuaW1BbGwoKVxyXG4gICAgdGhpcy5tb3ZlQWxsKClcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5saXN0ZU9iamVjdENoYW5nZSk7XHJcbiAgICB1dGlsLnJlZnJlc2goKVxyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgX3RoaXMucmV3cml0ZUFsbCgpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcbiAgYWRkT2JqZWN0KG9iamVjdCkge1xyXG4gICAgdGhpcy5saXN0ZU9iamVjdC5wdXNoKG9iamVjdCk7XHJcbiAgfVxyXG4gIGFmZkxpc3RlT2JqZWN0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJsaXN0ZS0tLS0tLVwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZU9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9iamVjdC0tXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIng6XCIgKyB0aGlzLmxpc3RlT2JqZWN0W2ldLnBvcy54KVxyXG4gICAgICBjb25zb2xlLmxvZyhcInk6XCIgKyB0aGlzLmxpc3RlT2JqZWN0W2ldLnBvcy55KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCItLS0tLS1cIik7XHJcbiAgfVxyXG4gIHJlbW92ZU9iamVjdE9uQ2xpY2socG9zLCBjbGFzc2VzID0gJ2RlZmF1bHQnKSB7XHJcbiAgICB2YXIgZmluZCA9IHRoaXMuZmluZEFsbE9iamVjdChwb3MpXHJcbiAgICBpZiAoZmluZC5sZW5ndGggPiAxKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdlbiBhdHRlbnRlIGRlIGNvZGUnKTsgLy8vLyBUT0RPOiBpbXBsZW1lbnRlIHVpIHRvIGNob29zZVxyXG4gICAgfSBlbHNlIGlmIChmaW5kLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCc9PTEnKTtcclxuICAgICAgdGhpcy5yZW1vdmVPYmplY3QoZmluZFswXSlcclxuICAgIH1cclxuICAgIHV0aWwucmVmcmVzaChcIiNmaWd1cmVHcnBcIilcclxuICB9XHJcbiAgcmVtb3ZlT2JqZWN0KGluZGV4KSB7XHJcbiAgICB2YXIgb2JqZWN0ID0gdGhpcy5saXN0ZU9iamVjdFtpbmRleF1cclxuICAgIHZhciBpZCA9IG9iamVjdC5nZXRJZCgpXHJcbiAgICAkKFwiI29iamVjdC1cIiArIGlkKS5yZW1vdmUoKVxyXG4gICAgdGhpcy5saXN0ZU9iamVjdC5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgfVxyXG4gIHJlbW92ZUFsbE9iamVjdCgpIHtcclxuICAgIHdoaWxlICh0aGlzLmxpc3RlT2JqZWN0Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlT2JqZWN0KDApXHJcbiAgICB9XHJcbiAgICB1dGlsLnJlZnJlc2goXCIjZmlndXJlR3JwXCIpXHJcbiAgfVxyXG4gIHdyaXRlRGVmKCkge1xyXG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmxpc3RlQ2xhc3M7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGNsYXNzZXNbaV0uaGF2ZU11bHRpcGxlRGVmKCkpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNsYXNzZXNbaV0uZGVmKCkpO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2xhc3Nlc1tpXS5kZWYoKS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgdmFyIGRlZiA9IGNsYXNzZXNbaV0uZGVmKClbal1cclxuICAgICAgICAgICQoXCIjc3ZnXCIpLnByZXBlbmQoZGVmKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgZGVmID0gY2xhc3Nlc1tpXS5kZWYoKVxyXG4gICAgICAgICQoXCIjc3ZnXCIpLnByZXBlbmQoZGVmKVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBmaW5kQWxsT2JqZWN0KHBvc2l0aW9uKSB7XHJcbiAgICB2YXIgZmluZCA9IFtdXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHggPSB0aGlzLmxpc3RlT2JqZWN0W2ldLnBvcy54XHJcbiAgICAgIHZhciB5ID0gdGhpcy5saXN0ZU9iamVjdFtpXS5wb3MueVxyXG4gICAgICBpZiAoeCA9PSBwb3NpdGlvbi54ICYmIHkgPT0gcG9zaXRpb24ueSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coaSk7XHJcbiAgICAgICAgZmluZC5wdXNoKGkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmaW5kXHJcbiAgfVxyXG5cclxuICBmaW5kT2JqZWN0KHBvc2l0aW9uLCBleGNsdWRlVHlwZSA9ICdEZWZhdWx0Jykge1xyXG4gICAgdmFyIGZpbmQgPSBudWxsXHJcbiAgICAvL2NvbnNvbGUubG9nKCdwb3NpdGlvbiByZWNoZXJjaGVyIHgnK3Bvc2l0aW9uLngpO1xyXG4gICAgLy9jb25zb2xlLmxvZygncG9zaXRpb24gcmVjaGVyY2hlciB5Jytwb3NpdGlvbi55KTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZU9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnLS0tLS0tb2JqZWN0LS0tLS0nKTtcclxuICAgICAgdmFyIHggPSB0aGlzLmxpc3RlT2JqZWN0W2ldLnBvcy54XHJcbiAgICAgIHZhciB5ID0gdGhpcy5saXN0ZU9iamVjdFtpXS5wb3MueVxyXG5cclxuICAgICAgLy9jb25zb2xlLmxvZygnaWQgJyt0aGlzLmxpc3RlT2JqZWN0W2ldLmdldElkKCkpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCd4ICcreCk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ3kgJyt5KTtcclxuICAgICAgLy9jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0nKTtcclxuICAgICAgaWYgKHggPT0gcG9zaXRpb24ueCAmJiB5ID09IHBvc2l0aW9uLnkgJiYgZXhjbHVkZVR5cGUgIT0gdGhpcy5saXN0ZU9iamVjdFtpXS5nZXRDbGFzcygpKSB7XHJcbiAgICAgICAgdmFyIGZpbmQgPSB0aGlzLmxpc3RlT2JqZWN0W2ldXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbWF0Y2gnKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdpZCBmaW5kICcgKyBmaW5kLmdldElkKCkpO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmaW5kXHJcbiAgfVxyXG4gIHJvdGF0ZU9iamVjdChwb3MpIHtcclxuICAgIHZhciBvYmplY3QgPSB0aGlzLmZpbmRPYmplY3QocG9zLCBPcmUpXHJcbiAgICBpZiAob2JqZWN0ICE9IG51bGwpIHtcclxuICAgICAgdmFyIHF1ZXJ5T2JqZWN0ID0gJChcIiNvYmplY3QtXCIgKyBvYmplY3QuZ2V0SWQoKSlcclxuICAgICAgLy8gY29uc29sZS5sb2cocXVlcnlPYmplY3QuYXR0cigndHJhbnNmb3JtJykpO1xyXG4gICAgICB2YXIgYWN0dWFsRGVncmVlID0gb2JqZWN0LnBvcy5kaXJlY3Rpb24gKiA5MFxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImFjdHVhbERlZ3JlZSA6XCIrYWN0dWFsRGVncmVlKTtcclxuICAgICAgdmFyIG5ld0RlZ3JlZSA9IChwYXJzZUludChhY3R1YWxEZWdyZWUpICsgOTApICUgMzYwO1xyXG4gICAgICBxdWVyeU9iamVjdC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKCcgKyBuZXdEZWdyZWUgKyBcIiBcIiArIG9iamVjdC5vcmlnaW5YICsgXCIgXCIgKyBvYmplY3Qub3JpZ2luWSArICcpJyk7XHJcbiAgICAgIG9iamVjdC5wb3MuZGlyZWN0aW9uID0gKG9iamVjdC5wb3MuZGlyZWN0aW9uICsgMSkgJSA0XHJcbiAgICAgIHV0aWwucmVmcmVzaCgnI2ZpZ3VyZUdycCcpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBjaGFuZ2VVcmxEZWYocG9zLCB0eXBlR2l2ZSA9ICdOb25lJykge1xyXG4gICAgdmFyIG9iamVjdCA9IHRoaXMuZmluZE9iamVjdChwb3MsIE9yZSlcclxuICAgIC8vY29uc29sZS5sb2cob2JqZWN0KTtcclxuICAgIGlmIChvYmplY3QgIT0gbnVsbCkge1xyXG4gICAgICB2YXIgY2xhc3NPYmplY3QgPSBvYmplY3QuZ2V0Q2xhc3MoKVxyXG4gICAgICBpZiAoY2xhc3NPYmplY3QuaGF2ZU11bHRpcGxlRGVmKCkpIHtcclxuICAgICAgICBpZiAodHlwZUdpdmUgIT0gJ05vbmUnKSB7XHJcbiAgICAgICAgICBuZXh0VHlwZSA9IHR5cGVHaXZlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZhciBuZXh0VHlwZSA9IGNsYXNzT2JqZWN0Lm5leHRUeXBlKG9iamVjdC50eXBlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBvYmplY3QudHlwZSA9IG5leHRUeXBlXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhuZXh0VHlwZSk7XHJcbiAgICAgICAgJChcIiNvYmplY3QtXCIgKyBvYmplY3QuZ2V0SWQoKSkuYXR0cignZmlsbCcsICd1cmwoI1RhcGlzLScgKyBuZXh0VHlwZSArICcpJyk7XHJcbiAgICAgICAgdXRpbC5yZWZyZXNoKFwiI2ZpZ3VyZUdycFwiKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvYmplY3Qgw6AgdW4gc2V1bCB0eXBlJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicGFzIGQnb2JqZWN0IHRyb3V2w6lcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRlbW8oKSB7XHJcbiAgICBzZWxmLm1hbmlwdWxhdG9yLnJlbW92ZUFsbE9iamVjdCgpXHJcbiAgICB2YXIgY2FzZUhlaWdodCA9IHBhcnNlSW50KHRoaXMuZ3JpbGxlLmNhc2VIZWlnaHQpXHJcbiAgICB2YXIgY2FzZVdpZHRoID0gcGFyc2VJbnQodGhpcy5ncmlsbGUuY2FzZVdpZHRoKVxyXG4gICAgLy8gY2xhc3MsdHlwZSx4LHksZGlyZWN0aW9uXHJcbiAgICB2YXIgbGlzdGUgPSBbXHJcbiAgICAgIFtUYXBpcywgXCJyaWdodFwiLCAwLCAwLCAwXSxcclxuICAgICAgW1RhcGlzLCBcInJpZ2h0XCIsIDAsIDEsIDNdLFxyXG4gICAgICBbVGFwaXMsIFwiZm9yd2FyZFwiLCAxLCAxLCAzXSxcclxuICAgICAgW1RhcGlzLCBcImZvcndhcmRcIiwgMiwgMSwgM10sXHJcbiAgICAgIFtUYXBpcywgXCJmb3J3YXJkXCIsIDMsIDEsIDNdLFxyXG4gICAgICBbT3JlLCBcImZvcndhcmRcIiwgNSwgNSwgMF0sXHJcbiAgICAgIFtUYXBpcywgXCJmb3J3YXJkXCIsIDYsIDIsIDFdLFxyXG4gICAgICBbVGFwaXMsIFwiZm9yd2FyZFwiLCA3LCAyLCAzXSxcclxuICAgICAgW09yZSwgbnVsbCwgNywgMiwgMF0sXHJcbiAgICAgIFtPcmUsIG51bGwsIDMsIDEsIDBdLFxyXG4gICAgICBbVGFwaXMsIFwibGVmdFwiLCA0LCA1LCAzXSxcclxuICAgICAgW1RhcGlzLCBcImxlZnRcIiwgNSwgNSwgMF0sXHJcbiAgICAgIFtUYXBpcywgXCJsZWZ0XCIsIDQsIDYsIDJdLFxyXG4gICAgICBbVGFwaXMsIFwibGVmdFwiLCA1LCA2LCAxXSxcclxuICAgICAgW1RhcGlzLCBcImxlZnRcIiwgMiwgNiwgMF0sXHJcbiAgICAgIFtUYXBpcywgXCJmb3J3YXJkXCIsIDIsIDcsIDBdLFxyXG4gICAgICBbVGFwaXMsIFwibGVmdFwiLCAzLCA3LCAwXSxcclxuICAgICAgW1RhcGlzLCBcImZvcndhcmRcIiwgMywgOCwgMF0sXHJcbiAgICAgIFtPcmUsIG51bGwsIDMsIDksIDBdLFxyXG4gICAgICBbVGFwaXMsIFwiZm9yd2FyZFwiLCAzLCA5LCAwXSxcclxuICAgICAgW1RhcGlzLCBcInJpZ2h0XCIsIDEsIDYsIDFdLFxyXG4gICAgICBbVGFwaXMsIFwicmlnaHRcIiwgMSwgNywgMl0sXHJcbiAgICAgIFtUYXBpcywgXCJyaWdodFwiLCAwLCA3LCAzXSxcclxuICAgICAgW1RhcGlzLCBcImZvcndhcmRcIiwgMCwgNiwgMF0sXHJcbiAgICAgIFtUYXBpcywgXCJmb3J3YXJkXCIsIDAsIDUsIDBdLFxyXG4gICAgICBbVGFwaXMsIFwiZm9yd2FyZFwiLCAwLCA0LCAwXSxcclxuICAgICAgW1RhcGlzLCBcImZvcndhcmRcIiwgMiwgNCwgMl0sXHJcbiAgICAgIFtPcmUsIG51bGwsIDIsIDQsIDBdLFxyXG4gICAgICBbVGFwaXMsIFwiZm9yd2FyZFwiLCAyLCA1LCAyXVxyXG5cclxuICAgIF1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHBvcyA9IG5ldyBQb3NpdGlvbihsaXN0ZVtpXVsyXSAqIGNhc2VXaWR0aCwgbGlzdGVbaV1bM10gKiBjYXNlV2lkdGgsIGxpc3RlW2ldWzRdKTtcclxuICAgICAgdGhpcy5wbGFjZU9iamVjdChsaXN0ZVtpXVswXSwgcG9zLCBsaXN0ZVtpXVsxXSlcclxuICAgIH1cclxuICAgIC8vIHRoaXMuYWZmTGlzdGVPYmplY3QoKVxyXG4gICAgLy8gdXRpbC5yZWZyZXNoKFwiI2ZpZ3VyZUdycFwiKVxyXG4gICAgLy8gdGhpcy5jaGFuZ2VVcmxEZWYobGlzdGVPYmplY3RMb2FkW2ldLnBvcywgbGlzdGVPYmplY3RMb2FkW2ldLnR5cGUpXHJcbiAgfVxyXG59XHJcbiIsIi8vIGNvbnNvbGUubG9nKCdjbGFzcyBvcmUgbG9hZCcpO1xyXG5pbXBvcnQgQWJzdHJhY3RPYmplY3QgZnJvbScuL0Fic3RyYWN0T2JqZWN0LmNsYXNzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZSBleHRlbmRzIEFic3RyYWN0T2JqZWN0IHtcclxuICAvLyBjbGFzcyBwb3VyIGxlcyBtaW5lcmFpc1xyXG4gIGNvbnN0cnVjdG9yKHBvcykge1xyXG4gICAgc3VwZXIocG9zKVxyXG4gICAgdGhpcy5zZXRTdmcoKVxyXG4gIH1cclxuICBzdGF0aWMgYWZmKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ29yZSBhZmYnKTtcclxuICB9XHJcbiAgc3RhdGljIGRlZigpIHtcclxuICAgIHJldHVybiBzdXBlci5kZWYoJ3JnYmEoMCwwLDAsMC41KScsICdvcmUnLCAnTTMgMCBMNyAwIEwgMTAgMyBMIDEwIDcgTCA3IDEwIEwgMyAxMCBMIDAgNyBMIDAgMycpXHJcbiAgfVxyXG4gIHNldFN2ZygpIHtcclxuICAgIHN1cGVyLnNldFN2Zygnb3JlJylcclxuICB9XHJcbiAgZ2V0TW92ZShheGUsZnJvbSx0byl7XHJcbiAgICB2YXIgbW92ZSA9ICc8YW5pbWF0ZSB4bGluazpocmVmPSNvYmplY3QtJyArIHRoaXMuZ2V0SWQoKSArICcgYXR0cmlidXRlTmFtZT0nICsgYXhlICsgJyAgZnJvbSA9JyArIGZyb20gKyAnIHRvPScgKyB0byArICcgZmlsbD1cImZyZWV6ZVwiIGR1cj1cIjAuNXNcIiBjbGFzcz1cImFuaW1hdGlvbiB0YXBpc1wiIC8+ICc7XHJcbiAgICByZXR1cm4gbW92ZVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XHJcbiAgLy8gY2xhc3MgZ2xvYmFsIHBvdXIgbGVzIHBvc2l0aW9uIGRlIHRvdXRlIGxlcyBmaWd1cmVzXHJcbiAgY29uc3RydWN0b3IoeCwgeSwgZGlyZWN0aW9uID0gJzAnKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gIH1cclxuICBpc0VxdWFsKHBvcykge1xyXG4gICAgaWYgKHRoaXMueCA9PSBwb3MueCAmJiB0aGlzLnkgPT0gcG9zLnkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIiwiLy8gY29uc29sZS5sb2coJ2NsYXNzIFNhdmVNYW5pcHVsYXRvciBsb2FkJyk7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmVNYW5pcHVsYXRvciB7XHJcbiAgLy8gIGNvbnRyb2xsZSBsZXMgc2F1dmVnYXJkZXMvY2hhcmdlbWVudHNcclxuICBjb25zdHJ1Y3RvcihtYW5pcHVsYXRvcikge1xyXG4gICAgdGhpcy5tYW5pcHVsYXRvciA9IG1hbmlwdWxhdG9yO1xyXG4gICAgLy8gY29uc29sZS5sb2cobWFuaXB1bGF0b3IpO1xyXG4gICAgLy90aGlzLmNsZWFyQWxsU2F2ZSgpXHJcbiAgfVxyXG4gIGNoZWNrU2F2ZSgpIHtcclxuICAgIHZhciBsaXN0ZVNhdmUgPSBbXVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1NhdmUtJyArIGkpICE9ICdvYmplY3QnKSB7XHJcbiAgICAgICAgbGlzdGVTYXZlLnB1c2goaSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxpc3RlU2F2ZVxyXG4gIH1cclxuICBjbGVhckFsbFNhdmUoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1NhdmUtJyArIGkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNsZWFyU2F2ZShpZCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJjbGVhclNhdmUgXCIraWQgKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdTYXZlLScgKyBpZClcclxuICB9XHJcbiAgc2F2ZShuYW1lU2F2ZSA9ICdkZWZhdWx0Jykge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3NhdmUnKTtcclxuICAgIHZhciBsaXN0ZSA9IFtdXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWFuaXB1bGF0b3IubGlzdGVPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGNsYXNzZSA9IHRoaXMubWFuaXB1bGF0b3IubGlzdGVPYmplY3RbaV0uZ2V0Q2xhc3NOYW1lRnJvbU9iamVjdCgpXHJcbiAgICAgIHZhciBwb3MgPSB0aGlzLm1hbmlwdWxhdG9yLmxpc3RlT2JqZWN0W2ldLnBvc1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMubWFuaXB1bGF0b3IubGlzdGVPYmplY3RbaV0udHlwZSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5tYW5pcHVsYXRvci5saXN0ZU9iamVjdFtpXS50eXBlKTtcclxuICAgICAgICB2YXIgdHlwZSA9IHRoaXMubWFuaXB1bGF0b3IubGlzdGVPYmplY3RbaV0udHlwZVxyXG4gICAgICAgIGxpc3RlLnB1c2goe1xyXG4gICAgICAgICAgY2xhc3NlOiBjbGFzc2UsXHJcbiAgICAgICAgICBwb3M6IHBvcyxcclxuICAgICAgICAgIHR5cGU6IHR5cGVcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3RlLnB1c2goe1xyXG4gICAgICAgICAgY2xhc3NlOiBjbGFzc2UsXHJcbiAgICAgICAgICBwb3M6IHBvc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTYXZlLScgKyBuYW1lU2F2ZSwgSlNPTi5zdHJpbmdpZnkobGlzdGUpKTtcclxuICB9XHJcbiAgbG9hZChuYW1lU2F2ZSA9ICdkZWZhdWx0Jykge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2xvYWQnKTtcclxuICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU2F2ZS0nICsgbmFtZVNhdmUpKTtcclxuICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB0aGlzLm1hbmlwdWxhdG9yLnJlc2V0KGRhdGEpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBjb25zb2xlLmxvZygnY2xhc3MgdGFwaXMgbG9hZCcpO1xyXG5pbXBvcnQgQWJzdHJhY3RPYmplY3QgZnJvbScuL0Fic3RyYWN0T2JqZWN0LmNsYXNzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcGlzIGV4dGVuZHMgQWJzdHJhY3RPYmplY3Qge1xyXG4gIC8vIGNsYXNzIHBvdXIgbGVzIHRhcGlzXHJcbiAgY29uc3RydWN0b3IocG9zLHR5cGU9J2ZvcndhcmQnKSB7XHJcbiAgICBzdXBlcihwb3MpXHJcbiAgICB0aGlzLnR5cGU9dHlwZTtcclxuICAgIHRoaXMuc2V0U3ZnKClcclxuICB9XHJcbiAgLyoqXHJcbiAgICogY3JlYXRpb24gb2YgdGhlIGltYWdlIGRlZmluaXRpb24uT25lIGJ5IGNsYXNzXHJcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgc3RhdGljIGRlZigpIHtcclxuICAgIHZhciBsaXN0ZURlZj1bXVxyXG4gICAgc2VsZj10aGlzO1xyXG4gICAgdmFyIGRlZjEgPSBzdXBlci5kZWYoJ2JsdWUnLCdUYXBpcy1mb3J3YXJkJywnTTUgMCBMMTAgMyBMNyAzIEw3IDEwIEwzIDEwIEwzIDMgTCAwIDMnLCcxMDAlJywnMTAwJScpO1xyXG4gICAgdmFyIGRlZjIgPSBzdXBlci5kZWYoJ3JlZCcsJ1RhcGlzLWxlZnQnLCdNMiAzIFEgNyAzIDcgMTAgTDMgMTAgUSAzIDcgMiA3IEwgMiA5IEwgMCA1IEwgMiAxIE0gNSAxMCBMOSAxMiBMNyAxMiBRNyAxNyAwIDE3IEwwIDEzIFEzIDEzIDMgMTIgTDEgMTInLCcxMDAlJywnMTAwJScpO1xyXG4gICAgdmFyIGRlZjM9IHN1cGVyLmRlZignZ3JlZW4nLCdUYXBpcy1yaWdodCcsJ003IDEwIFEgNyA3IDggNyBMOCA5IEwgMTAgNSBMOCAxIEw4IDMgUSAzIDMgMyAxMCBNIDUgMTAgTDkgMTIgTDcgMTIgUTcgMTMgMTAgMTMgTDEwIDE3IFEzIDE3IDMgMTIgTDEgMTInLCcxMDAlJywnMTAwJScpO1xyXG4gICAgbGlzdGVEZWYucHVzaChkZWYxKTtcclxuICAgIGxpc3RlRGVmLnB1c2goZGVmMik7XHJcbiAgICBsaXN0ZURlZi5wdXNoKGRlZjMpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhsaXN0ZURlZik7XHJcbiAgICByZXR1cm4gbGlzdGVEZWY7XHJcbiAgfVxyXG4gIHN0YXRpYyBoYXZlTXVsdGlwbGVEZWYoKXtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHN0YXRpYyBsaXN0ZU5hbWVEZWYoKXtcclxuICAgIHJldHVybiBbJ2ZvcndhcmQnLCdsZWZ0JywncmlnaHQnXVxyXG4gIH1cclxuICBzdGF0aWMgbmV4dFR5cGUodHlwZSl7XHJcbiAgICB2YXIgbGlzdGUgPSB0aGlzLmxpc3RlTmFtZURlZigpXHJcbiAgICAvL2NvbnNvbGUubG9nKGxpc3RlKTtcclxuICAgIC8vY29uc29sZS5sb2codHlwZSk7XHJcbiAgICB2YXIgaW5kZXggPSBsaXN0ZS5pbmRleE9mKHR5cGUpXHJcbiAgICAvL2NvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgdmFyIG5leHRUeXBlID1saXN0ZVsoaW5kZXgrMSklbGlzdGUubGVuZ3RoIF07XHJcbiAgICByZXR1cm4gbmV4dFR5cGVcclxuXHJcbiAgfVxyXG4gIHNldFN2Zygpe1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnR5cGUpO1xyXG4gICAgICAgIHN1cGVyLnNldFN2ZygnVGFwaXMtJyt0aGlzLnR5cGUpXHJcbiAgfVxyXG4gIHN0YXRpYyBnZXRBbmltYXRpb24oKXtcclxuICAgIHZhciBhbmltYXRpb25MaXN0ZT1bXTtcclxuICAgIHZhciBhbmltYXRpb249JzxhbmltYXRlVHJhbnNmb3JtIGhyZWY9XCIjcGF0aC1UYXBpcy1mb3J3YXJkXCIgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiAgdHlwZT1cInRyYW5zbGF0ZVwiICBmcm9tPVwiMCAwXCIgdG89XCIwIC0xMFwiICBkdXI9XCIwLjVzXCIgIGNsYXNzPVwiYW5pbWF0aW9uIHRhcGlzXCIgLz4gJztcclxuICAgIHZhciBhbmltYXRpb24xPSc8YW5pbWF0ZVRyYW5zZm9ybSBocmVmPVwiI3BhdGgtVGFwaXMtbGVmdFwiIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiAgdHlwZT1cInJvdGF0ZVwiIGZyb209XCIwIDAgMTBcIiB0bz1cIi05MCAwIDEwXCIgZHVyPVwiMC41c1wiICBjbGFzcz1cImFuaW1hdGlvbiB0YXBpc1wiIC8+JztcclxuICAgIHZhciBhbmltYXRpb24yPSc8YW5pbWF0ZVRyYW5zZm9ybSBocmVmPVwiI3BhdGgtVGFwaXMtcmlnaHRcIiBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgIHR5cGU9XCJyb3RhdGVcIiBmcm9tPVwiMCAxMCAxMFwiIHRvPVwiOTAgMTAgMTBcIiBkdXI9XCIwLjVzXCIgY2xhc3M9XCJhbmltYXRpb24gdGFwaXNcIiAvPic7XHJcbiAgICBhbmltYXRpb25MaXN0ZS5wdXNoKGFuaW1hdGlvbilcclxuICAgIGFuaW1hdGlvbkxpc3RlLnB1c2goYW5pbWF0aW9uMSlcclxuICAgIGFuaW1hdGlvbkxpc3RlLnB1c2goYW5pbWF0aW9uMilcclxuICAgIHJldHVybiBhbmltYXRpb25MaXN0ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZmYoKXtcclxuICAgIC8vIGNvbnNvbGUubG9nKCd0YXBpcyBhZmYnKTtcclxuICB9XHJcblxyXG59XHJcbiIsIi8vIGZpY2hpZXIgcG91ciBsZXMgZm9uY3Rpb25zIHV0aWxpdGFpcmVzXHJcbi8vIGNvbnNvbGUubG9nKFwidXRpbC5qc1wiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoKGVsZW1lbnQgPSBcIiNmcmFtZVwiKSB7XHJcbiAgJChlbGVtZW50KS5odG1sKCQoZWxlbWVudCkuaHRtbCgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmQobWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZERpZ2l0KHN0cmluZykge1xyXG4gIGNvbnN0IHJlZ2V4ID0gL1xcZCsvZ207O1xyXG4gIGNvbnN0IHN0ciA9IHN0cmluZ1xyXG4gIGxldCBtO1xyXG4gIHZhciBmaW5kO1xyXG4gIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcclxuICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcclxuICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xyXG4gICAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XHJcbiAgICAgIH1cclxuICAgICAgbS5mb3JFYWNoKChtYXRjaCwgZ3JvdXBJbmRleCkgPT4ge1xyXG4gICAgICAgIGZpbmQ9IG1hdGNoO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBmaW5kXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNsZWVwKG1pbGxpc2Vjb25kcykge1xyXG4gIHZhciBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMWU3OyBpKyspIHtcclxuICAgIGlmICgobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydCkgPiBtaWxsaXNlY29uZHMpe1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFmZlRlc3QoKSB7XHJcbiAgLy8gY29uc29sZS5sb2coJ2hlbGxvIHRoZXJlJyk7XHJcblxyXG59XHJcbiIsImltcG9ydCBEb21Db250cm9sbGVyIGZyb20gJy4vanNDbGFzcy9Eb21Db250cm9sbGVyLmNsYXNzLmpzJztcclxuaW1wb3J0IFRhcGlzIGZyb20gJy4vanNDbGFzcy9UYXBpcy5jbGFzcy5qcyc7XHJcbmltcG9ydCBPcmUgZnJvbSAnLi9qc0NsYXNzL09yZS5jbGFzcy5qcyc7XHJcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2pzQ2xhc3MvTWFuaXB1bGF0b3IuY2xhc3MuanMnO1xyXG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9qc0NsYXNzL1Bvc2l0aW9uLmNsYXNzLmpzJztcclxuXHJcblxyXG5cclxuLy8gaW5pdGlhbGlzZSBsZXMgcHJpbmNpcGFscyBvYmplY3RzXHJcbiQoZnVuY3Rpb24oKXtcclxuICB2YXIgZG9tID0gbmV3IERvbUNvbnRyb2xsZXIoKVxyXG4gIHZhciBsaXN0ZUNsYXNzID0gW1RhcGlzLCBPcmVdO1xyXG4gIHZhciBtYW5pcHVsYXRvciA9IG5ldyBNYW5pcHVsYXRvcihsaXN0ZUNsYXNzKTtcclxuICBtYW5pcHVsYXRvci53cml0ZUFsbCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==