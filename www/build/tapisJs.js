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

console.log('class AbstractObject load');

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

console.log('class DomController load');

var DomController =
/*#__PURE__*/
function () {
  // controlle la plupart des création,detection,supression d'element HTML
  function DomController() {
    _classCallCheck(this, DomController);

    this.nbrSaveButton = 9;
    var div = this.creationSaveLoadButton();
    $("#sousSection").prepend(div); //this.creatAll()

    console.log('endDomController');
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

console.log('class EventController load');

var EventController =
/*#__PURE__*/
function () {
  // controlle les cliques souris et clavier
  function EventController(manipulator, saver) {
    _classCallCheck(this, EventController);

    console.log('eventController constructor');
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
      var listeSave = this.saver.checkSave();
      console.log(listeSave);
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
        console.log('bind All');
        self.bindSaveButton();
        self.bindLoadButton();
        self.bindSupreButton();
        self.bindClearAll();
      });
    }
  }, {
    key: "changeButton",
    value: function changeButton(id) {
      console.log('toogle');
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
      console.log("bindOnCLick");
      var self = this; // HACK:

      $("#frame").mousedown(function (event) {
        //console.log("bind");
        self.onClick(event);
      });
    }
  }, {
    key: "unbindOnCLick",
    value: function unbindOnCLick() {
      console.log("unbindOnCLick");
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
      var posMouse = this.getPosMouse(event);
      console.log(posMouse);
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
            var touche = String.fromCharCode(e.which);
            console.log(touche);
            var posMouse = self.getPosMouse(event2);
            var pos = self.manipulator.calcPos(posMouse);
            console.log(pos);

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

console.log('class Grille load');

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

console.log('class manipulator load');








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
        var className = this.listeClass[i].getClassName();
        console.log(className);
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
      console.log("clear GHOST");
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
          console.log("object :" + object.getId());
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
      var collision = false;
      console.log(pos.x);
      console.log(pos.y);
      console.log('dir:' + direction);

      if (direction == 0) {
        console.log('direction prévu:' + 0);
        destination.x = pos.x;
        destination.y = parseInt(pos.y) - caseHeight;
      } else if (direction == 1) {
        console.log('direction prévu:' + 1);
        destination.x = parseInt(pos.x) + caseWidth;
        destination.y = pos.y;
      } else if (direction == 2) {
        console.log('direction prévu:' + 2);
        destination.x = pos.x;
        destination.y = parseInt(pos.y) + caseHeight;
      } else {
        console.log('direction prévu:' + 3);
        destination.x = parseInt(pos.x) - caseWidth;
        destination.y = pos.y;
      }

      console.log(destination);
      var listeObjectFind = this.findAllObject(destination);
      console.log(listeObjectFind);

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
            console.log('tapisUnder ' + tapisUnder.getId());
            console.log(tapisUnder.type);
            console.log('tapisUnder direction ' + tapisUnder.pos.direction);
            var moveDirection = this.calcDirection(tapisUnder.type, tapisUnder.pos.direction);
            var collision = this.checkCollision(this.listeObject[i].pos, moveDirection); //console.log(collision);

            if (!collision) {
              console.log("direction move " + moveDirection);
              var direction = this.calcMove(moveDirection); //console.log(direction);

              var move = this.getMove(this.listeObject[i], direction, this.grille.caseWidth, this.grille.caseHeight); //console.log(move);
              //console.log(this.listeObjectChange);

              console.log(move.posFinal);
              var alreadyPlannedPosition = false;

              for (var j = 0; j < this.listeObjectChange.length; j++) {
                console.log(this.listeObjectChange[j].posFinal);

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
      console.log('rewrite time');
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
      var id = object.getId();
      console.log('rewriteObject with id ' + id);
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

      if (find.length > 1) {
        console.log('en attente de code'); //// TODO: implemente ui to choose
      } else if (find.length == 1) {
        console.log('==1');
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
        var queryObject = $("#object-" + object.getId());
        console.log(queryObject.attr('transform'));
        var actualDegree = object.pos.direction * 90;
        console.log("actualDegree :" + actualDegree);
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
        } else {
          console.log('object à un seul type');
        }
      } else {
        console.log("pas d'object trouvé");
      }
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

console.log('class ore load');


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
    value: function aff() {
      console.log('ore aff');
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

console.log('class SaveManipulator load');

var SaveManipulator =
/*#__PURE__*/
function () {
  //  controlle les sauvegardes/chargements
  function SaveManipulator(manipulator) {
    _classCallCheck(this, SaveManipulator);

    this.manipulator = manipulator;
    console.log(manipulator); //this.clearAllSave()
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
      console.log("clearSave " + id);
      localStorage.removeItem('Save-' + id);
    }
  }, {
    key: "save",
    value: function save() {
      var nameSave = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      console.log('save');
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
      console.log('load');
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

console.log('class tapis load');


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
    value: function aff() {
      console.log('tapis aff');
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
console.log("util.js");
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
function affTest() {
  console.log('hello there');
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

},[["./assets/js/tapis/tapisMain.js","runtime","vendors~barJs~canvasJs~navJs~tapisJs","vendors~navJs~tapisJs","vendors~tapisJs"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy9BYnN0cmFjdE9iamVjdC5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy9Eb21Db250cm9sbGVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YXBpcy9qc0NsYXNzL0V2ZW50Q29udHJvbGxlci5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy9HcmlsbGUuY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RhcGlzL2pzQ2xhc3MvTWFuaXB1bGF0b3IuY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RhcGlzL2pzQ2xhc3MvT3JlLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YXBpcy9qc0NsYXNzL1Bvc2l0aW9uLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YXBpcy9qc0NsYXNzL1NhdmVNYW5pcHVsYXRvci5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy9UYXBpcy5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy91dGlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YXBpcy90YXBpc01haW4uanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkFic3RyYWN0T2JqZWN0IiwicG9zIiwiaWRNeXNlbGYiLCJjb25zdHJ1Y3RvciIsImlkIiwidW5kZWZpbmVkIiwibmFtZSIsImlkRGVmIiwid2lkdGgiLCJoZWlnaHQiLCJvcmlnaW4iLCJnZXRDZW50ZXIiLCJhbmdsZSIsImRpcmVjdGlvbiIsIm9yaWdpblJvdGF0aW9uIiwiZ2V0Qm90dG9tTGVmdCIsIm9yaWdpblgiLCJwYXJzZUludCIsIngiLCJvcmlnaW5ZIiwieSIsInN2ZyIsImdldElkIiwiY2VudGVyIiwic3RyaW5nIiwiY290ZUJvdHRvbUxlZnQiLCJjb3RlQm90dG9tUmlnaHQiLCJnZXRDbGFzc05hbWVGcm9tT2JqZWN0IiwicmhzIiwiY29sb3IiLCJpZE5hbWUiLCJwYXR0ZXJuIiwiZGVmIiwiJCIsInBhdGVybiIsImltYWdlIiwiaHRtbCIsImFwcGVuZCIsIkRvbUNvbnRyb2xsZXIiLCJuYnJTYXZlQnV0dG9uIiwiZGl2IiwiY3JlYXRpb25TYXZlTG9hZEJ1dHRvbiIsInByZXBlbmQiLCJjcmVhdGlvbkRvbUVsZW1lbnQiLCJzdGFydCIsInN0b3AiLCJvbmVTdGVwIiwiYXR0ciIsImxvYWRTYXZlIiwiaSIsImJ1dHRvblNhdmUiLCJidXR0b25Mb2FkIiwiYnV0dG9uU3VwcmUiLCJ0eXBlIiwiY2xhc3NlIiwiZWxlbWVudCIsImFkZENsYXNzIiwiRXZlbnRDb250cm9sbGVyIiwibWFuaXB1bGF0b3IiLCJzYXZlciIsImFjdHVhbFBvc01vdXNlIiwiaW5pdCIsImluaXRTZWxlY3RvciIsImJpbmRPbkNMaWNrIiwiYmluZEhvdmVyIiwiY2hlY2tTYXZlIiwic2VsZiIsImNsaWNrIiwiYW5pbU9uZVN0ZXAiLCJhbmltUmVwZWF0IiwiYmluZENsZWFyQWxsIiwiYmluZEFsbFNhdmVMb2FkQnV0dG9ucyIsInJlbW92ZUFsbE9iamVjdCIsImxpc3RlU2F2ZSIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiYmluZFNhdmVCdXR0b24iLCJiaW5kTG9hZEJ1dHRvbiIsImJpbmRTdXByZUJ1dHRvbiIsInRvZ2dsZUNsYXNzIiwidW5iaW5kTG9hZEJ1dHRvbiIsInVuYmluZFNhdmVCdXR0b24iLCJ1bmJpbmRTdXByZUJ1dHRvbiIsInVuYmluZENsZWFyQWxsIiwiY2xlYXJTdmciLCJ1bmJpbmQiLCJzYXZlIiwibG9hZCIsInN1cHJlIiwic2F2ZU5hbWUiLCJjaGFuZ2VCdXR0b24iLCJjbGVhclNhdmUiLCJtb3VzZWRvd24iLCJldmVudCIsIm9uQ2xpY2siLCJvZmYiLCJlIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0eWxlcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJjdXJzb3JYIiwiY2xpZW50WCIsImxlZnQiLCJib3JkZXJMZWZ0V2lkdGgiLCJjdXJzb3JZIiwiY2xpZW50WSIsInRvcCIsImJvcmRlclRvcFdpZHRoIiwicG9zTW91c2UiLCJnZXRQb3NNb3VzZSIsImNhbGNQb3MiLCJwbGFjZU9iamVjdCIsInNlbGVjdGVkIiwidW5iaW5kT25DTGljayIsInVuYmluZEFsbFNhdmVMb2FkQnV0dG9uIiwic3RvcEFuaW0iLCJhbmltIiwibG9vcCIsInNldEludGVydmFsIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJydW4iLCJsaXN0ZUNsYXNzIiwiY2hhbmdlU2VsZWN0b3IiLCJob3ZlciIsIm1vdXNlbW92ZSIsImV2ZW50MiIsImlzRXF1YWwiLCJjbGVhckdob3N0Iiwia2V5cHJlc3MiLCJ0b3VjaGUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ3aGljaCIsImNoYW5nZVVybERlZiIsInJvdGF0ZU9iamVjdCIsInJlbW92ZU9iamVjdE9uQ2xpY2siLCJjc3MiLCJHcmlsbGUiLCJuYnJDYXNlV2lkdGgiLCJuYnJDYXNlSGVpZ2h0IiwiZ3JvdXAiLCJjYXNlV2lkdGgiLCJjYXNlSGVpZ2h0IiwicG9zU3RhcnQiLCJwb3NFbmQiLCJzdmdMaW5lIiwiTWFuaXB1bGF0b3IiLCJncmlsbGUiLCJsaXN0ZU9iamVjdCIsIndyaXRlRGVmIiwicmVncm91cCIsImFkZFNlbGVjdG9yIiwiU2F2ZU1hbmlwdWxhdG9yIiwiZXZlbnRDb250cm9sbGVyIiwibGlzdGVPYmplY3RDaGFuZ2UiLCJpbnNlcnRBZnRlciIsImNsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsInN1Ykdyb3VwMSIsInN1Ykdyb3VwMiIsInN1Ykdyb3VwMyIsImxpc3RlT2JqZWN0TG9hZCIsImVtcHR5IiwiVGFwaXMiLCJPcmUiLCJNYXRoIiwiZmxvb3IiLCJQb3NpdGlvbiIsInRvU3RyaW5nIiwib2JqZWN0IiwiZ2V0U3ZnIiwidXRpbCIsImNsYXNzZXMiLCJnaG9zdCIsIm9iamVjdE9uUGxhY2UiLCJmaW5kQWxsT2JqZWN0IiwicGxhY2VHaG9zdCIsImFkZE9iamVjdCIsIndyaXRlT2JqZWN0IiwiYWxyZWFkeSIsImdldENsYXNzIiwiZ2V0QW5pbWF0aW9uIiwiYW5pbWF0aW9uIiwiYXhlIiwic2lnbmUiLCJkZXN0aW5hdGlvbiIsImNvbGxpc2lvbiIsImxpc3RlT2JqZWN0RmluZCIsImdldE1vdmUiLCJ0YXBpc1VuZGVyIiwiZmluZE9iamVjdCIsIm1vdmVEaXJlY3Rpb24iLCJjYWxjRGlyZWN0aW9uIiwiY2hlY2tDb2xsaXNpb24iLCJjYWxjTW92ZSIsIm1vdmUiLCJwb3NGaW5hbCIsImFscmVhZHlQbGFubmVkUG9zaXRpb24iLCJqIiwicHVzaCIsImluZGV4IiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwicG9zaXRpb24iLCJwb3NJbml0IiwibGlzdGUiLCJyZXdyaXRlT2JqZWN0IiwicmVtb3ZlIiwic2V0U3ZnIiwiYW5pbUFsbCIsIm1vdmVBbGwiLCJfdGhpcyIsInJld3JpdGVBbGwiLCJmaW5kIiwicmVtb3ZlT2JqZWN0Iiwic3BsaWNlIiwiaGF2ZU11bHRpcGxlRGVmIiwiZXhjbHVkZVR5cGUiLCJxdWVyeU9iamVjdCIsImFjdHVhbERlZ3JlZSIsIm5ld0RlZ3JlZSIsInR5cGVHaXZlIiwiY2xhc3NPYmplY3QiLCJuZXh0VHlwZSIsImZyb20iLCJ0byIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwibmFtZVNhdmUiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJwYXJzZSIsInJlc2V0IiwibGlzdGVEZWYiLCJkZWYxIiwiZGVmMiIsImRlZjMiLCJsaXN0ZU5hbWVEZWYiLCJpbmRleE9mIiwiYW5pbWF0aW9uTGlzdGUiLCJhbmltYXRpb24xIiwiYW5pbWF0aW9uMiIsInJlZnJlc2giLCJyYW5kIiwibWluIiwibWF4IiwicmFuZG9tIiwiZmluZERpZ2l0IiwicmVnZXgiLCJzdHIiLCJtIiwiZXhlYyIsImxhc3RJbmRleCIsImZvckVhY2giLCJtYXRjaCIsImdyb3VwSW5kZXgiLCJzbGVlcCIsIm1pbGxpc2Vjb25kcyIsIkRhdGUiLCJnZXRUaW1lIiwiYWZmVGVzdCIsImRvbSIsIndyaXRlQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaOztJQUNxQkMsYzs7O0FBQ25CO0FBQ0EsMEJBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDZixTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxRQUFMO0FBQ0Q7Ozs7K0JBWVU7QUFDVCxVQUFJLEtBQUtDLFdBQUwsQ0FBaUJDLEVBQWpCLElBQXVCQyxTQUEzQixFQUFzQztBQUNwQyxhQUFLRixXQUFMLENBQWlCQyxFQUFqQixHQUFzQixDQUF0QjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtELFdBQUwsQ0FBaUJDLEVBQWpCO0FBQ0QsT0FMUSxDQU1UOzs7QUFDQSxXQUFLQSxFQUFMLEdBQVUsS0FBS0QsV0FBTCxDQUFpQkMsRUFBM0I7QUFDRDs7OzZDQUl1QjtBQUN0QixhQUFPLEtBQUtELFdBQUwsQ0FBaUJHLElBQXhCO0FBQ0Q7OzsrQkFDUztBQUNSLGFBQU8sS0FBS0gsV0FBWjtBQUNEOzs7MkJBQ01JLEssRUFBTztBQUNaLFVBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsVUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxVQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBQSxZQUFNLEdBQUcsS0FBS0MsU0FBTCxDQUFlSCxLQUFmLEVBQXNCQyxNQUF0QixDQUFULENBSlksQ0FNWjs7QUFDQSxVQUFJRyxLQUFLLEdBQUcsS0FBSyxLQUFLWCxHQUFMLENBQVNZLFNBQTFCO0FBQ0EsVUFBSUMsY0FBYyxHQUFHLEtBQUtDLGFBQUwsQ0FBbUJQLEtBQW5CLEVB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Ozs7O0FDckNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBS0E7O0FBQ0FrQyxDQUFDLENBQUMsWUFBVTtBQUNWLE1BQUk2TyxHQUFHLEdBQUcsSUFBSXhPLHVFQUFKLEVBQVY7QUFDQSxNQUFJeUYsVUFBVSxHQUFHLENBQUMwQywrREFBRCxFQUFRQyw2REFBUixDQUFqQjtBQUNBLE1BQUloSCxXQUFXLEdBQUcsSUFBSThGLHFFQUFKLENBQWdCekIsVUFBaEIsQ0FBbEI7QUFDQXJFLGFBQVcsQ0FBQ3FOLFFBQVo7QUFDRCxDQUxBLENBQUQsQyIsImZpbGUiOiJ0YXBpc0pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2NsYXNzIEFic3RyYWN0T2JqZWN0IGxvYWQnKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RPYmplY3Qge1xyXG4gIC8vIGNsYXNzIG3DqHJlIHBvdXIgbGVzIGZpZ3VyZXMgYXZlYyBsZXMgcHJvcHJpw6l0w6kgZGUgYmFzZVxyXG4gIGNvbnN0cnVjdG9yKHBvcykge1xyXG4gICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICB0aGlzLmlkTXlzZWxmKCk7XHJcbiAgfVxyXG4gIHN0YXRpYyBkZWYoY29sb3IgPSAncmVkJywgaWROYW1lID0gJ0RlZmF1bHQnLCBwYXR0ZXJuID0gJ00wIDAgTDAgMTAgTDEwIDEwIEwxMCAwJywgd2lkdGggPSAnMTAwJScsIGhlaWdodCA9ICcxMDAlJykge1xyXG4gICAgdmFyIGRlZiA9ICQoXCI8ZGVmcz48L2RlZnM+XCIpO1xyXG4gICAgdmFyIHBhdGVybiA9ICQoJzxwYXR0ZXJuIGlkPScgKyBpZE5hbWUgKyAnIHZpZXdCb3g9XCIwLDAsMTAsMTBcIiB3aWR0aD0nICsgd2lkdGggKyAnIGhlaWdodD0nICsgaGVpZ2h0ICsgJyA+Jyk7XHJcbiAgICB2YXIgaW1hZ2UgPSAoJzxwYXRoIGlkPXBhdGgtJytpZE5hbWUrJyBmaWxsPScgKyBjb2xvciArICcgZD1cIicgKyBwYXR0ZXJuICsgJ1wiLz4nKTtcclxuICAgIHBhdGVybiA9IHBhdGVybi5odG1sKGltYWdlKTtcclxuICAgIGRlZiA9IGRlZi5hcHBlbmQocGF0ZXJuKTtcclxuICAgIHJldHVybiBkZWY7XHJcbiAgfVxyXG4gIHN0YXRpYyBoYXZlTXVsdGlwbGVEZWYoKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgaWRNeXNlbGYoKSB7XHJcbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5pZCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5pZCA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLmlkKys7XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuY29uc3RydWN0b3IuaWQpO1xyXG4gICAgdGhpcy5pZCA9IHRoaXMuY29uc3RydWN0b3IuaWQ7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXRDbGFzc05hbWUoKXtcclxuICAgIHJldHVybiB0aGlzLm5hbWVcclxuICB9XHJcbiAgZ2V0Q2xhc3NOYW1lRnJvbU9iamVjdCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZVxyXG4gIH1cclxuICBnZXRDbGFzcygpe1xyXG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3JcclxuICB9XHJcbiAgc2V0U3ZnKGlkRGVmKSB7XHJcbiAgICB2YXIgd2lkdGggPSA1MDtcclxuICAgIHZhciBoZWlnaHQgPSA1MDtcclxuICAgIHZhciBvcmlnaW4gPSB7fVxyXG4gICAgb3JpZ2luID0gdGhpcy5nZXRDZW50ZXIod2lkdGgsIGhlaWdodClcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKG9yaWdpbi5zdHJpbmcpO1xyXG4gICAgdmFyIGFuZ2xlID0gOTAgKiB0aGlzLnBvcy5kaXJlY3Rpb247XHJcbiAgICB2YXIgb3JpZ2luUm90YXRpb24gPSB0aGlzLmdldEJvdHRvbUxlZnQod2lkdGgsaGVpZ2h0KTtcclxuICAgIHRoaXMub3JpZ2luWD0gcGFyc2VJbnQodGhpcy5wb3MueCkrKHdpZHRoLzIpO1xyXG4gICAgdGhpcy5vcmlnaW5ZPSBwYXJzZUludCh0aGlzLnBvcy55KSsoaGVpZ2h0LzIpO1xyXG4gICAgdGhpcy5zdmcgPSAnPHJlY3QgaWQ9XCJvYmplY3QtJyArIHRoaXMuZ2V0SWQoKSArICdcIiB3aWR0aD0nICsgd2lkdGggKyAnIGhlaWdodD0nICsgaGVpZ2h0ICsgJyB4PScgKyB0aGlzLnBvcy54ICsgJyAgeT0nICsgdGhpcy5wb3MueSArICcgZmlsbD1cInVybCgjJyArIGlkRGVmICsgJylcIiB0cmFuc2Zvcm09XCJyb3RhdGUoJyArIGFuZ2xlICtcIiBcIisgdGhpcy5vcmlnaW5YICtcIiBcIiArIHRoaXMub3JpZ2luWSArICcpXCIvPidcclxuICB9XHJcbiAgZ2V0Q2VudGVyKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBjZW50ZXIgPSB7fVxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnBvcyk7XHJcbiAgICBjZW50ZXIueCA9IHBhcnNlSW50KHRoaXMucG9zLngpICsgd2lkdGggLyAyO1xyXG4gICAgY2VudGVyLnkgPSBwYXJzZUludCh0aGlzLnBvcy55KSArIGhlaWdodCAvIDI7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiY2VudGVyXCIpO1xyXG4gICAgY2VudGVyLnN0cmluZyA9IGNlbnRlci54ICsgJyAnICsgY2VudGVyLnk7XHJcbiAgICByZXR1cm4gY2VudGVyO1xyXG4gIH1cclxuICBnZXRCb3R0b21MZWZ0KHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBjb3RlQm90dG9tTGVmdCA9IHt9XHJcbiAgICBjb3RlQm90dG9tTGVmdC54ID0gcGFyc2VJbnQodGhpcy5wb3MueCk7XHJcbiAgICBjb3RlQm90dG9tTGVmdC55ID0gcGFyc2VJbnQodGhpcy5wb3MueSkgKyBoZWlnaHQ7XHJcbiAgICBjb3RlQm90dG9tTGVmdC5zdHJpbmcgPSBjb3RlQm90dG9tTGVmdC54ICsgJyAnICsgY290ZUJvdHRvbUxlZnQueTtcclxuICAgIHJldHVybiBjb3RlQm90dG9tTGVmdDtcclxuICB9XHJcbiAgZ2V0Qm90dG9tUmlnaHQod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIGNvdGVCb3R0b21SaWdodCA9IHt9XHJcbiAgICBjb3RlQm90dG9tUmlnaHQueCA9IHBhcnNlSW50KHRoaXMucG9zLngpICsgd2lkdGg7XHJcbiAgICBjb3RlQm90dG9tUmlnaHQueSA9IHBhcnNlSW50KHRoaXMucG9zLnkpICsgaGVpZ2h0O1xyXG4gICAgY290ZUJvdHRvbVJpZ2h0LnN0cmluZyA9IGNvdGVCb3R0b21SaWdodC54ICsgJyAnICsgY290ZUJvdHRvbVJpZ2h0Lnk7XHJcbiAgICByZXR1cm4gY290ZUJvdHRvbVJpZ2h0O1xyXG4gIH1cclxuICBnZXRTdmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdmdcclxuICB9XHJcbiAgZ2V0SWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDbGFzc05hbWVGcm9tT2JqZWN0KCkrdGhpcy5pZDtcclxuICB9XHJcbiAgZ2V0UG9zaXRpb24oKXtcclxuICAgIHJldHVybiByaHMucG9zO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiY29uc29sZS5sb2coJ2NsYXNzIERvbUNvbnRyb2xsZXIgbG9hZCcpO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb21Db250cm9sbGVyIHtcclxuICAvLyBjb250cm9sbGUgbGEgcGx1cGFydCBkZXMgY3LDqWF0aW9uLGRldGVjdGlvbixzdXByZXNzaW9uIGQnZWxlbWVudCBIVE1MXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm5iclNhdmVCdXR0b249OVxyXG4gICAgdmFyIGRpdiA9dGhpcy5jcmVhdGlvblNhdmVMb2FkQnV0dG9uKClcclxuICAgICQoXCIjc291c1NlY3Rpb25cIikucHJlcGVuZChkaXYpXHJcbiAgICAvL3RoaXMuY3JlYXRBbGwoKVxyXG4gICAgY29uc29sZS5sb2coJ2VuZERvbUNvbnRyb2xsZXInKTtcclxuICB9XHJcbiAgY3JlYXRpb25BbmltYXRpb25CdXR0b24oKXtcclxuICAgIHZhciBkaXYgPXRoaXMuY3JlYXRpb25Eb21FbGVtZW50KCdkaXYnLCdhbmltYXRpb25CdXR0b24nKVxyXG4gICAgdmFyIHN0YXJ0PXRoaXMuY3JlYXRpb25Eb21FbGVtZW50KCdidXR0b24nLCdzdGFydCcsJ1N0YXJ0JylcclxuICAgIHZhciBzdG9wPXRoaXMuY3JlYXRpb25Eb21FbGVtZW50KCdidXR0b24nLCdzdG9wJywnU3RvcCcpXHJcbiAgICB2YXIgb25lU3RlcD10aGlzLmNyZWF0aW9uRG9tRWxlbWVudCgnYnV0dG9uJywnb25lU3RlcCcsJ09uZSBTdGVwJylcclxuICAgIHN0YXJ0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICBzdG9wLmF0dHIoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICBvbmVTdGVwLmF0dHIoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICBkaXYuYXBwZW5kKHN0YXJ0KVxyXG4gICAgZGl2LmFwcGVuZChzdG9wKVxyXG4gICAgZGl2LmFwcGVuZChvbmVTdGVwKVxyXG4gICAgcmV0dXJuIGRpdlxyXG4gIH1cclxuICBjcmVhdGlvblNhdmVMb2FkQnV0dG9uKCl7XHJcbiAgICB2YXIgbG9hZFNhdmU9dGhpcy5jcmVhdGlvbkRvbUVsZW1lbnQoJ2RpdicsJ2xvYWRTYXZlJylcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubmJyU2F2ZUJ1dHRvbjsgaSsrKSB7XHJcbiAgICAgIHZhciBkaXY9dGhpcy5jcmVhdGlvbkRvbUVsZW1lbnQoJ2RpdicsbnVsbCxudWxsLCdzYXZlTG9hZC1CdXR0b25zJylcclxuICAgICAgdmFyIGJ1dHRvblNhdmUgPSB0aGlzLmNyZWF0aW9uRG9tRWxlbWVudCgnYnV0dG9uJyxudWxsLCdTYXZlIG7CsCcrcGFyc2VJbnQoaSsxKSwnc2F2ZScpXHJcbiAgICAgIGJ1dHRvblNhdmUuYXR0cigndHlwZScsICdidXR0b24nKTtcclxuICAgICAgYnV0dG9uU2F2ZS5hdHRyKCdkYXRhLWlkJywgaSsxKTtcclxuICAgICAgdmFyIGJ1dHRvbkxvYWQgPSB0aGlzLmNyZWF0aW9uRG9tRWxlbWVudCgnYnV0dG9uJyxudWxsLCdMb2FkIG7CsCcrcGFyc2VJbnQoaSsxKSwnbG9hZCcpXHJcbiAgICAgIGJ1dHRvbkxvYWQuYXR0cigndHlwZScsICdidXR0b24nKTtcclxuICAgICAgYnV0dG9uTG9hZC5hdHRyKCdkYXRhLWlkJywgaSsxKTtcclxuICAgICAgdmFyIGJ1dHRvblN1cHJlID0gdGhpcy5jcmVhdGlvbkRvbUVsZW1lbnQoJ2J1dHRvbicsbnVsbCwnPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPicsJ3N1cHJlJylcclxuICAgICAgYnV0dG9uU3VwcmUuYXR0cigndHlwZScsICdidXR0b24nKTtcclxuICAgICAgYnV0dG9uU3VwcmUuYXR0cignZGF0YS1pZCcsIGkrMSk7XHJcbiAgICAgIGRpdi5hcHBlbmQoYnV0dG9uU2F2ZSlcclxuICAgICAgZGl2LmFwcGVuZChidXR0b25Mb2FkKVxyXG4gICAgICBkaXYuYXBwZW5kKGJ1dHRvblN1cHJlKVxyXG4gICAgICBsb2FkU2F2ZS5hcHBlbmQoZGl2KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxvYWRTYXZlXHJcbiAgfVxyXG4gIGNyZWF0aW9uRG9tRWxlbWVudCh0eXBlLGlkPW51bGwsaHRtbD1udWxsLGNsYXNzZT1udWxsKXtcclxuICAgIC8vIGZvbnRpb24gZ8OpbsOpcmFsZSBwb3VyIGNyw6llciB1biBlbGVtZW50XHJcbiAgICB2YXIgZWxlbWVudCA9JChcIjxcIit0eXBlK1wiPjwvXCIrdHlwZStcIj5cIilcclxuICAgIGlmIChodG1sIT1udWxsKSB7XHJcbiAgICAgIGVsZW1lbnQuaHRtbChodG1sKVxyXG4gICAgfVxyXG4gICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgZWxlbWVudC5hdHRyKCdpZCcsIGlkKTtcclxuICAgIH1cclxuICAgIGlmIChjbGFzc2UgIT1udWxsKSB7XHJcbiAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxuICB9XHJcbn1cclxuIiwiY29uc29sZS5sb2coJ2NsYXNzIEV2ZW50Q29udHJvbGxlciBsb2FkJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudENvbnRyb2xsZXIge1xyXG4gIC8vIGNvbnRyb2xsZSBsZXMgY2xpcXVlcyBzb3VyaXMgZXQgY2xhdmllclxyXG4gIGNvbnN0cnVjdG9yKG1hbmlwdWxhdG9yLHNhdmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZXZlbnRDb250cm9sbGVyIGNvbnN0cnVjdG9yJyk7XHJcbiAgICB0aGlzLm1hbmlwdWxhdG9yID0gbWFuaXB1bGF0b3JcclxuICAgIHRoaXMuc2F2ZXIgPSBzYXZlclxyXG4gICAgdGhpcy5hY3R1YWxQb3NNb3VzZSA9IG51bGxcclxuICAgIHRoaXMuaW5pdCgpXHJcbiAgICB0aGlzLmluaXRTZWxlY3RvcigpXHJcbiAgICB0aGlzLmJpbmRPbkNMaWNrKClcclxuICAgIHRoaXMuYmluZEhvdmVyKClcclxuICAgIHRoaXMuY2hlY2tTYXZlKClcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcyAvLyBIQUNLOlxyXG4gICAgJChcIiNvbmVTdGVwXCIpLmNsaWNrKHNlbGYuYW5pbU9uZVN0ZXApO1xyXG4gICAgJChcIiNzdGFydFwiKS5jbGljayhzZWxmLmFuaW1SZXBlYXQpO1xyXG4gICAgdGhpcy5iaW5kQ2xlYXJBbGwoKVxyXG4gICAgdGhpcy5jaGVja1NhdmUoKVxyXG4gICAgdGhpcy5iaW5kQWxsU2F2ZUxvYWRCdXR0b25zKClcclxuICB9XHJcbiAgY2xlYXJTdmcoKXtcclxuICAgIHNlbGYubWFuaXB1bGF0b3IucmVtb3ZlQWxsT2JqZWN0KClcclxuICB9XHJcbiAgY2hlY2tTYXZlKCl7XHJcbiAgICB2YXIgbGlzdGVTYXZlPXRoaXMuc2F2ZXIuY2hlY2tTYXZlKClcclxuICAgIGNvbnNvbGUubG9nKGxpc3RlU2F2ZSk7XHJcbiAgICAkKFwiLnNhdmVcIikuYWRkQ2xhc3MoJ2VtcHR5JylcclxuICAgICQoXCIubG9hZFwiKS5hZGRDbGFzcygnbm90U2F2ZScpXHJcbiAgICAkKFwiLnN1cHJlXCIpLmFkZENsYXNzKCdub3RTYXZlJylcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVTYXZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoXCIuc2F2ZVtkYXRhLWlkPVwiK2xpc3RlU2F2ZVtpXStcIl1cIikucmVtb3ZlQ2xhc3MoJ2VtcHR5JylcclxuICAgICAgJChcIi5sb2FkW2RhdGEtaWQ9XCIrbGlzdGVTYXZlW2ldK1wiXVwiKS5yZW1vdmVDbGFzcygnbm90U2F2ZScpXHJcbiAgICAgICQoXCIuc3VwcmVbZGF0YS1pZD1cIitsaXN0ZVNhdmVbaV0rXCJdXCIpLnJlbW92ZUNsYXNzKCdub3RTYXZlJylcclxuICAgIH1cclxuICB9XHJcbiAgYmluZEFsbFNhdmVMb2FkQnV0dG9ucygpe1xyXG4gICAgc2VsZj10aGlzXHJcbiAgICAkKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdiaW5kIEFsbCcpO1xyXG4gICAgICBzZWxmLmJpbmRTYXZlQnV0dG9uKClcclxuICAgICAgc2VsZi5iaW5kTG9hZEJ1dHRvbigpXHJcbiAgICAgIHNlbGYuYmluZFN1cHJlQnV0dG9uKClcclxuICAgICAgc2VsZi5iaW5kQ2xlYXJBbGwoKVxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG4gIGNoYW5nZUJ1dHRvbihpZCl7XHJcbiAgICBjb25zb2xlLmxvZygndG9vZ2xlJyk7XHJcbiAgICAkKFwiLnNhdmVbZGF0YS1pZD1cIitpZCtcIl1cIikudG9nZ2xlQ2xhc3MoJ2VtcHR5JylcclxuICAgICQoXCIubG9hZFtkYXRhLWlkPVwiK2lkK1wiXVwiKS50b2dnbGVDbGFzcygnbm90U2F2ZScpXHJcbiAgICAkKFwiLnN1cHJlW2RhdGEtaWQ9XCIraWQrXCJdXCIpLnRvZ2dsZUNsYXNzKCdub3RTYXZlJylcclxuICB9XHJcbiAgdW5iaW5kQWxsU2F2ZUxvYWRCdXR0b24oKXtcclxuICAgIHRoaXMudW5iaW5kTG9hZEJ1dHRvbigpXHJcbiAgICB0aGlzLnVuYmluZFNhdmVCdXR0b24oKVxyXG4gICAgdGhpcy51bmJpbmRTdXByZUJ1dHRvbigpXHJcbiAgICB0aGlzLnVuYmluZENsZWFyQWxsKClcclxuICB9XHJcbiAgYmluZENsZWFyQWxsKCl7XHJcbiAgICAkKFwiI2NsZWFyU3ZnXCIpLmNsaWNrKHNlbGYuY2xlYXJTdmcpO1xyXG4gIH1cclxuICB1bmJpbmRDbGVhckFsbCgpe1xyXG4gICAgJChcIiNjbGVhclN2Z1wiKS51bmJpbmQoJ2NsaWNrJylcclxuICB9XHJcbiAgdW5iaW5kTG9hZEJ1dHRvbigpe1xyXG4gICAgJChcIi5sb2FkXCIpLnVuYmluZCgnY2xpY2snKVxyXG4gIH1cclxuICB1bmJpbmRTYXZlQnV0dG9uKCl7XHJcbiAgICAkKFwiLnNhdmVcIikudW5iaW5kKCdjbGljaycpXHJcbiAgfVxyXG4gIHVuYmluZFN1cHJlQnV0dG9uKCl7XHJcbiAgICAkKFwiLnN1cHJlXCIpLnVuYmluZCgnY2xpY2snKVxyXG4gIH1cclxuICBiaW5kU2F2ZUJ1dHRvbigpe1xyXG4gICAgdGhpcy51bmJpbmRTYXZlQnV0dG9uKClcclxuICAgICQoXCIuc2F2ZS5lbXB0eVwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHNlbGYuc2F2ZSgkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSlcclxuICAgIH0pO1xyXG4gIH1cclxuICBiaW5kTG9hZEJ1dHRvbigpe1xyXG4gICAgdGhpcy51bmJpbmRMb2FkQnV0dG9uKClcclxuICAgICQoXCIubG9hZDpub3QoLm5vdFNhdmUpXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2VsZi5sb2FkKCQodGhpcykuYXR0cignZGF0YS1pZCcpKVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGJpbmRTdXByZUJ1dHRvbigpe1xyXG4gICAgdGhpcy51bmJpbmRTdXByZUJ1dHRvbigpXHJcbiAgICAkKFwiLnN1cHJlOm5vdCgubm90U2F2ZSlcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBzZWxmLnN1cHJlKCQodGhpcykuYXR0cignZGF0YS1pZCcpKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlKHNhdmVOYW1lKXtcclxuICAgIHRoaXMuc2F2ZXIuc2F2ZShzYXZlTmFtZSlcclxuICAgIHRoaXMuY2hhbmdlQnV0dG9uKHNhdmVOYW1lKVxyXG4gICAgdGhpcy5iaW5kQWxsU2F2ZUxvYWRCdXR0b25zKClcclxuICB9XHJcbiAgbG9hZChzYXZlTmFtZSl7XHJcbiAgICB0aGlzLnNhdmVyLmxvYWQoc2F2ZU5hbWUpXHJcbiAgfVxyXG4gIHN1cHJlKHNhdmVOYW1lKXtcclxuICAgIHRoaXMuc2F2ZXIuY2xlYXJTYXZlKHNhdmVOYW1lKVxyXG4gICAgdGhpcy5jaGFuZ2VCdXR0b24oc2F2ZU5hbWUpXHJcbiAgICB0aGlzLmJpbmRBbGxTYXZlTG9hZEJ1dHRvbnMoKVxyXG4gIH1cclxuICBiaW5kT25DTGljaygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYmluZE9uQ0xpY2tcIik7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMgLy8gSEFDSzpcclxuICAgICQoXCIjZnJhbWVcIikubW91c2Vkb3duKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJiaW5kXCIpO1xyXG4gICAgICBzZWxmLm9uQ2xpY2soZXZlbnQpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgdW5iaW5kT25DTGljaygpe1xyXG4gICAgY29uc29sZS5sb2coXCJ1bmJpbmRPbkNMaWNrXCIpO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAkKFwiI2ZyYW1lXCIpLm9mZihcIm1vdXNlZG93blwiKTtcclxuXHJcbiAgfVxyXG4gIGdldFBvc01vdXNlKGUpIHtcclxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhbWUnKVxyXG4gICAgdmFyIG9mZnNldCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpO1xyXG4gICAgdmFyIGN1cnNvclggPSBlLmNsaWVudFggLSBvZmZzZXQubGVmdCAtIHBhcnNlSW50KHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgpO1xyXG4gICAgdmFyIGN1cnNvclkgPSBlLmNsaWVudFkgLSBvZmZzZXQudG9wIC0gcGFyc2VJbnQoc3R5bGVzLmJvcmRlclRvcFdpZHRoKTtcclxuICAgIC8vY29uc29sZS5sb2coY3Vyc29yWCwgY3Vyc29yWSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiBjdXJzb3JYLFxyXG4gICAgICB5OiBjdXJzb3JZXHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uQ2xpY2soZXZlbnQpIHtcclxuICAgIHZhciBwb3NNb3VzZSA9IHRoaXMuZ2V0UG9zTW91c2UoZXZlbnQpO1xyXG4gICAgY29uc29sZS5sb2cocG9zTW91c2UpO1xyXG4gICAgdmFyIHBvcyA9IHRoaXMubWFuaXB1bGF0b3IuY2FsY1Bvcyhwb3NNb3VzZSlcclxuICAgIHRoaXMubWFuaXB1bGF0b3IucGxhY2VPYmplY3QodGhpcy5tYW5pcHVsYXRvci5zZWxlY3RlZCwgcG9zKVxyXG4gIH1cclxuICBhbmltUmVwZWF0KCl7XHJcbiAgICBzZWxmLnVuYmluZE9uQ0xpY2soKVxyXG4gICAgJChcIiNzdGFydFwiKS51bmJpbmQoJ2NsaWNrJylcclxuICAgICQoXCIjb25lU3RlcFwiKS51bmJpbmQoJ2NsaWNrJylcclxuICAgIHNlbGYudW5iaW5kQWxsU2F2ZUxvYWRCdXR0b24oKVxyXG4gICAgJChcIiNzdG9wXCIpLmNsaWNrKHNlbGYuc3RvcEFuaW0pO1xyXG4gICAgc2VsZi5hbmltKClcclxuICAgIHNlbGYubG9vcCA9c2V0SW50ZXJ2YWwoc2VsZi5hbmltLDU1MClcclxuICB9XHJcbiAgYW5pbU9uZVN0ZXAoKXtcclxuICAgICQoXCIjb25lU3RlcFwiKS51bmJpbmQoJ2NsaWNrJylcclxuICAgIHNlbGYudW5iaW5kQWxsU2F2ZUxvYWRCdXR0b24oKVxyXG4gICAgc2VsZi5hbmltKClcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJChcIiNvbmVTdGVwXCIpLmNsaWNrKHNlbGYuYW5pbU9uZVN0ZXApO1xyXG4gICAgICBzZWxmLmJpbmRBbGxTYXZlTG9hZEJ1dHRvbnMoKVxyXG4gICAgfSw1MDApXHJcblxyXG4gIH1cclxuICBzdG9wQW5pbSgpe1xyXG4gICAgc2VsZi5iaW5kT25DTGljaygpXHJcbiAgICAkKFwiI3N0b3BcIikudW5iaW5kKCdjbGljaycpXHJcbiAgICBjbGVhckludGVydmFsKHNlbGYubG9vcClcclxuICAgICQoXCIjc3RhcnRcIikuY2xpY2soc2VsZi5hbmltUmVwZWF0KTtcclxuICAgICQoXCIjb25lU3RlcFwiKS5jbGljayhzZWxmLmFuaW1PbmVTdGVwKVxyXG4gICAgc2VsZi5iaW5kQWxsU2F2ZUxvYWRCdXR0b25zKClcclxuICB9XHJcbiAgYW5pbSgpIHtcclxuICAgIHNlbGYubWFuaXB1bGF0b3IucnVuKClcclxuICB9XHJcbiAgaW5pdFNlbGVjdG9yKCkge1xyXG4gICAgJCgnLnNlbGVjdG9ySXRlbTpmaXJzdCcpLmFkZENsYXNzKCdzZWxlY3RlZCcpXHJcbiAgICB0aGlzLm1hbmlwdWxhdG9yLnNlbGVjdGVkID0gdGhpcy5tYW5pcHVsYXRvci5saXN0ZUNsYXNzWzBdXHJcbiAgICB2YXIgbWFuaXB1bGF0b3IgPSB0aGlzLm1hbmlwdWxhdG9yIC8vIEhBQ0s6XHJcbiAgICAkKCcuc2VsZWN0b3JJdGVtJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgbWFuaXB1bGF0b3IuY2hhbmdlU2VsZWN0b3IodGhpcylcclxuICAgIH0pO1xyXG4gIH1cclxuICBiaW5kSG92ZXIoZSkge1xyXG4gICAgc2VsZiA9IHRoaXNcclxuICAgICQoJyNmcmFtZScpLmhvdmVyKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgJCh0aGlzKS5tb3VzZW1vdmUoZnVuY3Rpb24oZXZlbnQyKSB7XHJcbiAgICAgICAgdmFyIHBvc01vdXNlID0gc2VsZi5nZXRQb3NNb3VzZShldmVudDIpO1xyXG4gICAgICAgIHZhciBwb3MgPSBzZWxmLm1hbmlwdWxhdG9yLmNhbGNQb3MocG9zTW91c2UpXHJcbiAgICAgICAgaWYgKHNlbGYuYWN0dWFsUG9zTW91c2UgPT0gbnVsbCB8fCAhcG9zLmlzRXF1YWwoc2VsZi5hY3R1YWxQb3NNb3VzZSkpIHtcclxuICAgICAgICAgIHNlbGYuYWN0dWFsUG9zTW91c2UgPSBwb3M7XHJcbiAgICAgICAgICBzZWxmLm1hbmlwdWxhdG9yLmNsZWFyR2hvc3QoKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFuZ2VtZW50IGNhc2VcIik7XHJcbiAgICAgICAgICBzZWxmLm1hbmlwdWxhdG9yLnBsYWNlT2JqZWN0KHNlbGYubWFuaXB1bGF0b3Iuc2VsZWN0ZWQsIHNlbGYuYWN0dWFsUG9zTW91c2UsbnVsbCx0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKGRvY3VtZW50KS51bmJpbmQoJ2tleXByZXNzJylcclxuICAgICAgICAkKGRvY3VtZW50KS5rZXlwcmVzcyhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICB2YXIgdG91Y2hlID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRvdWNoZSk7XHJcbiAgICAgICAgICB2YXIgcG9zTW91c2UgPSBzZWxmLmdldFBvc01vdXNlKGV2ZW50Mik7XHJcbiAgICAgICAgICB2YXIgcG9zID0gc2VsZi5tYW5pcHVsYXRvci5jYWxjUG9zKHBvc01vdXNlKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocG9zKTtcclxuICAgICAgICAgIGlmICh0b3VjaGUgPT0gJ3QnKSB7XHJcbiAgICAgICAgICAgIHNlbGYubWFuaXB1bGF0b3IuY2hhbmdlVXJsRGVmKHBvcylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKHRvdWNoZSA9PSAncicpIHtcclxuICAgICAgICAgICAgc2VsZi5tYW5pcHVsYXRvci5yb3RhdGVPYmplY3QocG9zKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAodG91Y2hlID09ICd4Jykge1xyXG4gICAgICAgICAgICBzZWxmLm1hbmlwdWxhdG9yLnJlbW92ZU9iamVjdE9uQ2xpY2socG9zKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZWxmLm1hbmlwdWxhdG9yLmNsZWFyR2hvc3QoKVxyXG4gICAgICBzZWxmLmFjdHVhbFBvc01vdXNlID0gbnVsbFxyXG4gICAgICAkKGRvY3VtZW50KS51bmJpbmQoJ21vdXNlbW92ZScpXHJcbiAgICAgICQoZG9jdW1lbnQpLnVuYmluZCgna2V5cHJlc3MnKVxyXG4gICAgICAkKCdoMScpLmNzcygnYmFja2dyb3VuZCcsICcnKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiIsImNvbnNvbGUubG9nKCdjbGFzcyBHcmlsbGUgbG9hZCcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpbGxlIHtcclxuICAvLyBjcsOpZXIgbGEgZ3JpbGxlIGRlIGpldVxyXG4gIGNvbnN0cnVjdG9yKG5ickNhc2VXaWR0aD0nMTAnLG5ickNhc2VIZWlnaHQ9XCIxMFwiKSB7XHJcbiAgICB0aGlzLndpZHRoPSQoXCIjc3ZnXCIpLndpZHRoKClcclxuICAgIHRoaXMuaGVpZ2h0PSQoXCIjc3ZnXCIpLmhlaWdodCgpXHJcbiAgICB2YXIgaGVpZ2h0ID0kKFwic3ZnXCIpLmhlaWdodCgpXHJcbiAgICB2YXIgZ3JvdXA9JChcIjxnIGlkPSdncmlsbGUnPjwvZz5cIilcclxuICAgIHRoaXMubmJyQ2FzZVdpZHRoPW5ickNhc2VXaWR0aFxyXG4gICAgdGhpcy5uYnJDYXNlSGVpZ2h0PW5ickNhc2VIZWlnaHRcclxuICAgIHZhciBjYXNlV2lkdGg9dGhpcy53aWR0aC9uYnJDYXNlV2lkdGg7XHJcbiAgICB0aGlzLmNhc2VXaWR0aD1jYXNlV2lkdGhcclxuICAgIHZhciBjYXNlSGVpZ2h0PXRoaXMuaGVpZ2h0L25ickNhc2VIZWlnaHQ7XHJcbiAgICB0aGlzLmNhc2VIZWlnaHQ9Y2FzZUhlaWdodFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD10aGlzLm5ickNhc2VIZWlnaHQ7IGkrKykge1xyXG4gICAgICAgIHZhciBwb3NTdGFydD17fTtcclxuICAgICAgICBwb3NTdGFydC54PTBcclxuICAgICAgICBwb3NTdGFydC55PWkqdGhpcy5jYXNlSGVpZ2h0XHJcbiAgICAgICAgdmFyIHBvc0VuZD17fTtcclxuICAgICAgICBwb3NFbmQueD10aGlzLndpZHRoXHJcbiAgICAgICAgcG9zRW5kLnk9aSp0aGlzLmNhc2VIZWlnaHRcclxuICAgICAgICB2YXIgc3ZnID10aGlzLnN2Z0xpbmUocG9zU3RhcnQscG9zRW5kKVxyXG4gICAgICAgIGdyb3VwLmFwcGVuZChzdmcpXHJcblxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD10aGlzLm5ickNhc2VXaWR0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHBvc1N0YXJ0PXt9O1xyXG4gICAgICAgIHBvc1N0YXJ0Lng9aSp0aGlzLmNhc2VXaWR0aFxyXG4gICAgICAgIHBvc1N0YXJ0Lnk9MFxyXG4gICAgICAgIHZhciBwb3NFbmQ9e307XHJcbiAgICAgICAgcG9zRW5kLng9aSp0aGlzLmNhc2VXaWR0aFxyXG4gICAgICAgIHBvc0VuZC55PXRoaXMuaGVpZ2h0XHJcbiAgICAgICAgdmFyIHN2ZyA9dGhpcy5zdmdMaW5lKHBvc1N0YXJ0LHBvc0VuZClcclxuICAgICAgICBncm91cC5hcHBlbmQoc3ZnKVxyXG4gICAgfVxyXG4gICAgJChcInN2Z1wiKS5hcHBlbmQoZ3JvdXApXHJcbiAgfVxyXG4gIHN2Z0xpbmUocG9zU3RhcnQscG9zRW5kLGNvbG9yPSdibGFjaycsd2lkdGg9JzInKXtcclxuICAgIHJldHVybiAnPGxpbmUgeDE9Jytwb3NTdGFydC54KycgeTE9Jytwb3NTdGFydC55KycgeDI9Jytwb3NFbmQueCsnIHkyPScrcG9zRW5kLnkrJyBzdHlsZT1cInN0cm9rZTonK2NvbG9yKyc7c3Ryb2tlLXdpZHRoOicrd2lkdGgrJ1wiIC8+J1xyXG4gIH1cclxufVxyXG4iLCJjb25zb2xlLmxvZygnY2xhc3MgbWFuaXB1bGF0b3IgbG9hZCcpO1xyXG5pbXBvcnQgR3JpbGxlIGZyb20nLi9HcmlsbGUuY2xhc3MuanMnO1xyXG5pbXBvcnQgRXZlbnRDb250cm9sbGVyIGZyb20nLi9FdmVudENvbnRyb2xsZXIuY2xhc3MuanMnO1xyXG5pbXBvcnQgU2F2ZU1hbmlwdWxhdG9yIGZyb20nLi9TYXZlTWFuaXB1bGF0b3IuY2xhc3MuanMnO1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gXCIuL3V0aWwuanNcIjtcclxuaW1wb3J0IFRhcGlzIGZyb20gJy4vVGFwaXMuY2xhc3MuanMnO1xyXG5pbXBvcnQgT3JlIGZyb20gJy4vT3JlLmNsYXNzLmpzJztcclxuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vUG9zaXRpb24uY2xhc3MuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuaXB1bGF0b3Ige1xyXG4gIC8vIHZhIG1hbmlwdWxlciBsZXMgb2JqZWN0cyBjb21tZSBsZXMgdGFwaXMgZXN0IGxlcyBtaW5lcmFpc1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbGlzdGVDbGFzcywgZ3JpbGxlKSB7XHJcbiAgICB0aGlzLmxpc3RlT2JqZWN0ID0gW107XHJcbiAgICB0aGlzLmxpc3RlQ2xhc3MgPSBsaXN0ZUNsYXNzO1xyXG4gICAgdGhpcy53cml0ZURlZigpXHJcbiAgICB0aGlzLmdyaWxsZSA9IG5ldyBHcmlsbGUoKTtcclxuICAgIHRoaXMucmVncm91cCgpXHJcbiAgICB0aGlzLmFkZFNlbGVjdG9yKClcclxuICAgIHRoaXMuc2F2ZXIgPSBuZXcgU2F2ZU1hbmlwdWxhdG9yKHRoaXMpXHJcbiAgICB0aGlzLmV2ZW50Q29udHJvbGxlciA9IG5ldyBFdmVudENvbnRyb2xsZXIodGhpcywgdGhpcy5zYXZlcilcclxuICAgIHRoaXMubGlzdGVPYmplY3RDaGFuZ2UgPSBbXVxyXG4gICAgLy90aGlzLmFmZkxpc3RlT2JqZWN0KClcclxuICB9XHJcbiAgYWRkU2VsZWN0b3IoKSB7XHJcbiAgICAvLyBham91dGUgbGVzIGJvdXRvbiDDoCBkcm9pdGUgcG91ciBzZWxlY3Rpb25uZXIgbGUgdHlwZSBkZSBmaWd1cmUgw6AgcG9zZXJcclxuICAgICQoXCI8ZGl2IGlkPSdzZWxlY3Rvcic+IDwvZGl2PlwiKS5pbnNlcnRBZnRlcihcIiNjb250YWluZXJGcmFtZUNvbnRyb2xcIilcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZUNsYXNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLmxpc3RlQ2xhc3NbaV0uZ2V0Q2xhc3NOYW1lKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNsYXNzTmFtZSk7XHJcbiAgICAgICQoXCIjc2VsZWN0b3JcIikuYXBwZW5kKChcIjxidXR0b24gIGNsYXNzPSdzZWxlY3Rvckl0ZW0nIHR5cGU9J2J1dHRvbicgPlwiICsgY2xhc3NOYW1lICsgXCI8L2J1dHRvbj5cIikpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjaGFuZ2VTZWxlY3RvcihzZWxlY3RlZCkge1xyXG4gICAgLy8gY2hhbmdlIGxlIGJvdXRvbiDDoCBkcm9pdGUgcXVpIGVzdCBzZWxlY3Rpb25lclxyXG4gICAgJCgnLnNlbGVjdG9ySXRlbScpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpXHJcbiAgICAkKHNlbGVjdGVkKS5hZGRDbGFzcygnc2VsZWN0ZWQnKVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlQ2xhc3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMubGlzdGVDbGFzc1tpXS5nZXRDbGFzc05hbWUoKSA9PSAkKHNlbGVjdGVkKS5odG1sKCkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5saXN0ZUNsYXNzW2ldXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZWdyb3VwKCkge1xyXG4gICAgLy8gY3LDqWVyIGxlcyBkaWZlcmVudCBncm91cCBkZSBmaWd1cmUgYXUgZGVzc3VzL2VuIGRlc3NvdXMvZmFudG9tZVxyXG4gICAgdmFyIGdyb3VwID0gJChcIjxnIGlkPSdmaWd1cmVHcnAnPjwvZz5cIilcclxuICAgICQoXCIjc3ZnXCIpLmFwcGVuZChncm91cCk7XHJcbiAgICB2YXIgc3ViR3JvdXAxID0gJChcIjxnIGlkPSdmaWd1cmVHcnBEb3duJz48L2c+XCIpXHJcbiAgICB2YXIgc3ViR3JvdXAyID0gJChcIjxnIGlkPSdmaWd1cmVHcnBVcCc+PC9nPlwiKVxyXG4gICAgdmFyIHN1Ykdyb3VwMyA9ICQoXCI8ZyBpZD0nZmlndXJlR3JwR2hvc3QnPjwvZz5cIilcclxuICAgIGdyb3VwLmFwcGVuZChzdWJHcm91cDEpXHJcbiAgICBncm91cC5hcHBlbmQoc3ViR3JvdXAyKVxyXG4gICAgZ3JvdXAuYXBwZW5kKHN1Ykdyb3VwMylcclxuICAgICQoXCIjc3ZnXCIpLmFwcGVuZChncm91cCk7XHJcbiAgICB2YXIgZ3JvdXAgPSAkKFwiPGcgaWQ9J2FuaW1hdGlvbkdycCc+PC9nPlwiKVxyXG4gICAgJChcIiNzdmdcIikuYXBwZW5kKGdyb3VwKTtcclxuICB9XHJcbiAgcmVzZXQobGlzdGVPYmplY3RMb2FkKSB7XHJcbiAgICAvLyBlbmxldmUgdG91dGUgbGVzIGZpZ3VyZXNcclxuICAgICQoXCIjZmlndXJlR3JwVXBcIikuZW1wdHkoKVxyXG4gICAgJChcIiNmaWd1cmVHcnBEb3duXCIpLmVtcHR5KClcclxuICAgIHRoaXMubGlzdGVPYmplY3QgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVPYmplY3RMb2FkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2cobGlzdGVPYmplY3RMb2FkW2ldLmNsYXNzZSlcclxuICAgICAgdmFyIGNsYXNzZTtcclxuICAgICAgaWYgKGxpc3RlT2JqZWN0TG9hZFtpXS5jbGFzc2UgPT0gJ1RhcGlzJykge1xyXG4gICAgICAgIGNsYXNzZSA9IFRhcGlzXHJcbiAgICAgICAgdGhpcy5wbGFjZU9iamVjdChjbGFzc2UsIGxpc3RlT2JqZWN0TG9hZFtpXS5wb3MpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhsaXN0ZU9iamVjdExvYWRbaV0udHlwZSk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VVcmxEZWYobGlzdGVPYmplY3RMb2FkW2ldLnBvcywgbGlzdGVPYmplY3RMb2FkW2ldLnR5cGUpXHJcblxyXG4gICAgICB9IGVsc2UgaWYgKGxpc3RlT2JqZWN0TG9hZFtpXS5jbGFzc2UgPT0gJ09yZScpIHtcclxuICAgICAgICBjbGFzc2UgPSBPcmVcclxuICAgICAgICB0aGlzLnBsYWNlT2JqZWN0KGNsYXNzZSwgbGlzdGVPYmplY3RMb2FkW2ldLnBvcylcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbiAgY2FsY1Bvcyhwb3NNb3VzZSkge1xyXG4gICAgdmFyIHggPSBNYXRoLmZsb29yKHBvc01vdXNlLnggLyB0aGlzLmdyaWxsZS5jYXNlV2lkdGgpO1xyXG4gICAgdmFyIHkgPSBNYXRoLmZsb29yKHBvc01vdXNlLnkgLyB0aGlzLmdyaWxsZS5jYXNlSGVpZ2h0KTtcclxuICAgIHggPSBNYXRoLmZsb29yKHggKiB0aGlzLmdyaWxsZS5jYXNlV2lkdGgpXHJcbiAgICB5ID0gTWF0aC5mbG9vcih5ICogdGhpcy5ncmlsbGUuY2FzZUhlaWdodClcclxuICAgIHZhciBkaXJlY3Rpb24gPSAnMCdcclxuICAgIHZhciBwb3MgPSBuZXcgUG9zaXRpb24oeC50b1N0cmluZygpLCB5LnRvU3RyaW5nKCksIGRpcmVjdGlvbik7XHJcbiAgICByZXR1cm4gcG9zO1xyXG4gIH1cclxuICBwbGFjZUdob3N0KG9iamVjdCl7XHJcbiAgICAkKFwiI2ZpZ3VyZUdycEdob3N0XCIpLmVtcHR5KClcclxuICAgIHZhciBzdmcgPSBvYmplY3QuZ2V0U3ZnKCk7XHJcbiAgICB2YXIgaWQgPSBvYmplY3QuZ2V0SWQoKTtcclxuICAgICQoXCIjZmlndXJlR3JwR2hvc3RcIikuYXBwZW5kKHN2Zyk7XHJcbiAgICAkKFwiI29iamVjdC1cIitpZCkuYXR0cignZmlsbC1vcGFjaXR5JywnMC41Jyk7XHJcbiAgfVxyXG4gIGNsZWFyR2hvc3QoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xlYXIgR0hPU1RcIik7XHJcbiAgICAkKFwiI2ZpZ3VyZUdycEdob3N0XCIpLmVtcHR5KClcclxuICAgIHV0aWwucmVmcmVzaChcIiNmaWd1cmVHcnBHaG9zdFwiKVxyXG4gIH1cclxuICBwbGFjZU9iamVjdChjbGFzc2VzLCBwb3MsdHlwZT1udWxsLGdob3N0PWZhbHNlKSB7XHJcbiAgICB2YXIgb2JqZWN0T25QbGFjZSA9IHRoaXMuZmluZEFsbE9iamVjdChwb3MpXHJcbiAgICBpZiAob2JqZWN0T25QbGFjZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICBpZiAodHlwZSE9bnVsbCAmJiBjbGFzc2VzLmdldENsYXNzTmFtZSgpPT0nVGFwaXMnKSB7XHJcbiAgICAgICAgdmFyIG9iamVjdCA9IG5ldyBjbGFzc2VzKHBvcyx0eXBlKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBvYmplY3QgPSBuZXcgY2xhc3Nlcyhwb3MpXHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhvYmplY3QpO1xyXG4gICAgICBpZiAoZ2hvc3Q9PXRydWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9iamVjdCA6XCIrb2JqZWN0LmdldElkKCkpO1xyXG4gICAgICAgIHRoaXMucGxhY2VHaG9zdChvYmplY3QpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZE9iamVjdChvYmplY3QpO1xyXG4gICAgICB0aGlzLndyaXRlT2JqZWN0KG9iamVjdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgIHZhciBhbHJlYWR5ID0gZmFsc2U7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0T25QbGFjZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBvYmplY3QgPSB0aGlzLmxpc3RlT2JqZWN0W29iamVjdE9uUGxhY2VbaV1dXHJcbiAgICAgICAgaWYgKG9iamVjdC5nZXRDbGFzcygpLmdldENsYXNzTmFtZSgpID09IGNsYXNzZXMuZ2V0Q2xhc3NOYW1lKCkpIHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2cob2JqZWN0LmdldENsYXNzKCkuZ2V0Q2xhc3NOYW1lKCksY2xhc3Nlcy5nZXRDbGFzc05hbWUoKSk7XHJcbiAgICAgICAgICBhbHJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFhbHJlYWR5ICYmIGdob3N0PT1mYWxzZSkge1xyXG4gICAgICAgIGlmICh0eXBlIT1udWxsICYmIGNsYXNzZXMuZ2V0Q2xhc3NOYW1lKCk9PSdUYXBpcycpIHtcclxuICAgICAgICAgIHZhciBvYmplY3QgPSBuZXcgY2xhc3Nlcyhwb3MsdHlwZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB2YXIgb2JqZWN0ID0gbmV3IGNsYXNzZXMocG9zKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG9iamVjdCk7XHJcbiAgICAgICAgdGhpcy5hZGRPYmplY3Qob2JqZWN0KVxyXG4gICAgICAgIHRoaXMud3JpdGVPYmplY3Qob2JqZWN0KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGdob3N0PT10cnVlKSB7XHJcbiAgICAgICAgaWYgKHR5cGUhPW51bGwgJiYgY2xhc3Nlcy5nZXRDbGFzc05hbWUoKT09J1RhcGlzJykge1xyXG4gICAgICAgICAgdmFyIG9iamVjdCA9IG5ldyBjbGFzc2VzKHBvcyx0eXBlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHZhciBvYmplY3QgPSBuZXcgY2xhc3Nlcyhwb3MpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxhY2VHaG9zdChvYmplY3QpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB1dGlsLnJlZnJlc2goXCIjZmlndXJlR3JwXCIpXHJcbiAgfVxyXG4gIHdyaXRlT2JqZWN0KG9iamVjdCkge1xyXG4gICAgLy8gYWpvdXRlIGxhIGZpZ3VyZSBkYW5zIGxlIERPTVxyXG4gICAgdmFyIGNsYXNzZSA9IG9iamVjdC5nZXRDbGFzcygpLmdldENsYXNzTmFtZSgpXHJcbiAgICB2YXIgc3ZnID0gb2JqZWN0LmdldFN2ZygpO1xyXG4gICAgaWYgKGNsYXNzZSA9PSAnVGFwaXMnKSB7XHJcbiAgICAgICQoXCIjZmlndXJlR3JwRG93blwiKS5hcHBlbmQoc3ZnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIjZmlndXJlR3JwVXBcIikuYXBwZW5kKHN2Zyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICB3cml0ZUFsbCgpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZU9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLndyaXRlT2JqZWN0KHRoaXMubGlzdGVPYmplY3RbaV0pO1xyXG4gICAgfVxyXG4gICAgdXRpbC5yZWZyZXNoKClcclxuICB9XHJcbiAgYW5pbUFsbCgpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZUNsYXNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5saXN0ZUNsYXNzW2ldLmdldEFuaW1hdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLmxpc3RlQ2xhc3NbaV0uZ2V0QW5pbWF0aW9uKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhbmltYXRpb24gPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5pbWF0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICQoXCIjYW5pbWF0aW9uR3JwXCIpLmFwcGVuZChhbmltYXRpb25baV0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICQoXCIjYW5pbWF0aW9uR3JwXCIpLmFwcGVuZChhbmltYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjYWxjRGlyZWN0aW9uKHR5cGUsIGRpcmVjdGlvbikge1xyXG4gICAgaWYgKHR5cGUgPT0gJ2ZvcndhcmQnKSB7XHJcbiAgICAgIHJldHVybiBkaXJlY3Rpb25cclxuICAgIH1cclxuICAgIGlmICh0eXBlID09ICdsZWZ0Jykge1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09IDApIHtcclxuICAgICAgICByZXR1cm4gM1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb24gLSAxXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0eXBlID09ICdyaWdodCcpIHtcclxuICAgICAgcmV0dXJuIChkaXJlY3Rpb24gKyAxKSAlIDRcclxuICAgIH1cclxuICB9XHJcbiAgY2FsY01vdmUoZGlyZWN0aW9uKSB7XHJcbiAgICBpZiAoZGlyZWN0aW9uID09IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBheGU6ICd5JyxcclxuICAgICAgICBzaWduZTogJy0nXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IDEpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBheGU6ICd4JyxcclxuICAgICAgICBzaWduZTogJysnXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IDIpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBheGU6ICd5JyxcclxuICAgICAgICBzaWduZTogJysnXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXhlOiAneCcsXHJcbiAgICAgICAgc2lnbmU6ICctJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoZWNrQ29sbGlzaW9uKHBvcywgZGlyZWN0aW9uKSB7XHJcbiAgICB2YXIgZGVzdGluYXRpb24gPSB7fVxyXG4gICAgdmFyIGNhc2VIZWlnaHQgPSBwYXJzZUludCh0aGlzLmdyaWxsZS5jYXNlSGVpZ2h0KVxyXG4gICAgdmFyIGNhc2VXaWR0aCA9IHBhcnNlSW50KHRoaXMuZ3JpbGxlLmNhc2VXaWR0aClcclxuICAgIHZhciBjb2xsaXNpb24gPSBmYWxzZTtcclxuICAgIGNvbnNvbGUubG9nKHBvcy54KTtcclxuICAgIGNvbnNvbGUubG9nKHBvcy55KTtcclxuICAgIGNvbnNvbGUubG9nKCdkaXI6JyArIGRpcmVjdGlvbik7XHJcbiAgICBpZiAoZGlyZWN0aW9uID09IDApIHtcclxuICAgICAgY29uc29sZS5sb2coJ2RpcmVjdGlvbiBwcsOpdnU6JyArIDApO1xyXG4gICAgICBkZXN0aW5hdGlvbi54ID0gcG9zLng7XHJcbiAgICAgIGRlc3RpbmF0aW9uLnkgPSBwYXJzZUludChwb3MueSkgLSBjYXNlSGVpZ2h0XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkaXJlY3Rpb24gcHLDqXZ1OicgKyAxKTtcclxuICAgICAgZGVzdGluYXRpb24ueCA9IHBhcnNlSW50KHBvcy54KSArIGNhc2VXaWR0aDtcclxuICAgICAgZGVzdGluYXRpb24ueSA9IHBvcy55XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkaXJlY3Rpb24gcHLDqXZ1OicgKyAyKTtcclxuICAgICAgZGVzdGluYXRpb24ueCA9IHBvcy54O1xyXG4gICAgICBkZXN0aW5hdGlvbi55ID0gcGFyc2VJbnQocG9zLnkpICsgY2FzZUhlaWdodFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ2RpcmVjdGlvbiBwcsOpdnU6JyArIDMpO1xyXG4gICAgICBkZXN0aW5hdGlvbi54ID0gcGFyc2VJbnQocG9zLngpIC0gY2FzZVdpZHRoO1xyXG4gICAgICBkZXN0aW5hdGlvbi55ID0gcG9zLnlcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGRlc3RpbmF0aW9uKTtcclxuICAgIHZhciBsaXN0ZU9iamVjdEZpbmQgPSB0aGlzLmZpbmRBbGxPYmplY3QoZGVzdGluYXRpb24pXHJcbiAgICBjb25zb2xlLmxvZyhsaXN0ZU9iamVjdEZpbmQpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZU9iamVjdEZpbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGNsYXNzZXMgPSB0aGlzLmxpc3RlT2JqZWN0W2xpc3RlT2JqZWN0RmluZFtpXV0uZ2V0Q2xhc3NOYW1lRnJvbU9iamVjdCgpXHJcbiAgICAgIGlmIChjbGFzc2VzID09ICdPcmUnKSB7XHJcbiAgICAgICAgY29sbGlzaW9uID0gdHJ1ZVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2xsaXNpb25cclxuICB9XHJcbiAgbW92ZUFsbCgpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZU9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMubGlzdGVPYmplY3RbaV0uZ2V0TW92ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHZhciB0YXBpc1VuZGVyID0gdGhpcy5maW5kT2JqZWN0KHRoaXMubGlzdGVPYmplY3RbaV0ucG9zLCBPcmUpXHJcblxyXG4gICAgICAgIGlmICh0YXBpc1VuZGVyICE9IG51bGwpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0YXBpc1VuZGVyICcgKyB0YXBpc1VuZGVyLmdldElkKCkpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGFwaXNVbmRlci50eXBlKTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndGFwaXNVbmRlciBkaXJlY3Rpb24gJyArIHRhcGlzVW5kZXIucG9zLmRpcmVjdGlvbik7XHJcbiAgICAgICAgICB2YXIgbW92ZURpcmVjdGlvbiA9IHRoaXMuY2FsY0RpcmVjdGlvbih0YXBpc1VuZGVyLnR5cGUsXHJcbiAgICAgICAgICAgIHRhcGlzVW5kZXIucG9zLmRpcmVjdGlvbilcclxuICAgICAgICAgIHZhciBjb2xsaXNpb24gPSB0aGlzLmNoZWNrQ29sbGlzaW9uKHRoaXMubGlzdGVPYmplY3RbaV0ucG9zLCBtb3ZlRGlyZWN0aW9uKVxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhjb2xsaXNpb24pO1xyXG4gICAgICAgICAgaWYgKCFjb2xsaXNpb24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb24gbW92ZSBcIiArIG1vdmVEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gdGhpcy5jYWxjTW92ZShtb3ZlRGlyZWN0aW9uKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRpcmVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICB2YXIgbW92ZSA9IHRoaXMuZ2V0TW92ZSh0aGlzLmxpc3RlT2JqZWN0W2ldLGRpcmVjdGlvbiwgdGhpcy5ncmlsbGUuY2FzZVdpZHRoLCB0aGlzLmdyaWxsZS5jYXNlSGVpZ2h0KVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1vdmUpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubGlzdGVPYmplY3RDaGFuZ2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtb3ZlLnBvc0ZpbmFsKTtcclxuICAgICAgICAgICAgdmFyIGFscmVhZHlQbGFubmVkUG9zaXRpb249ZmFsc2VcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxpc3RlT2JqZWN0Q2hhbmdlLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0ZU9iamVjdENoYW5nZVtqXS5wb3NGaW5hbCk7XHJcbiAgICAgICAgICAgICAgaWYodGhpcy5saXN0ZU9iamVjdENoYW5nZVtqXS5wb3NGaW5hbC54ID09bW92ZS5wb3NGaW5hbC54JiZcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVPYmplY3RDaGFuZ2Vbal0ucG9zRmluYWwueSA9PW1vdmUucG9zRmluYWwueVxyXG4gICAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICBhbHJlYWR5UGxhbm5lZFBvc2l0aW9uPXRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghYWxyZWFkeVBsYW5uZWRQb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICQoXCIjYW5pbWF0aW9uR3JwXCIpLmFwcGVuZChtb3ZlLnN2Zyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5saXN0ZU9iamVjdENoYW5nZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5saXN0ZU9iamVjdFtpXSxcclxuICAgICAgICAgICAgICAgIHBvc0ZpbmFsOiBtb3ZlLnBvc0ZpbmFsLFxyXG4gICAgICAgICAgICAgICAgYXhlOiBkaXJlY3Rpb24uYXhlLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGlcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldE1vdmUob2JqZWN0LGRpcmVjdGlvbiwgZGlzdGFuY2VYLCBkaXN0YW5jZVkpIHtcclxuICAgIHZhciBwb3NpdGlvbj17fVxyXG4gICAgaWYgKGRpcmVjdGlvbi5heGUgPT0gJ3gnKSB7XHJcbiAgICAgIHZhciBwb3NJbml0ID0gb2JqZWN0LnBvcy54O1xyXG4gICAgICB2YXIgYXhlID0gJ3gnXHJcbiAgICAgIHBvc2l0aW9uLnk9b2JqZWN0LnBvcy55XHJcbiAgICAgIGlmIChkaXJlY3Rpb24uc2lnbmUgPT0gJysnKSB7XHJcbiAgICAgICAgdmFyIHBvc0ZpbmFsID0gKHBhcnNlSW50KHBvc0luaXQpICsgZGlzdGFuY2VYKS50b1N0cmluZygpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHBvc0ZpbmFsID0gKHBhcnNlSW50KHBvc0luaXQpIC0gZGlzdGFuY2VYKS50b1N0cmluZygpXHJcbiAgICAgIH1cclxuICAgICAgcG9zaXRpb24ueD1wb3NGaW5hbFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHBvc0luaXQgPSBvYmplY3QucG9zLnk7XHJcbiAgICAgIHZhciBheGUgPSAneSdcclxuICAgICAgcG9zaXRpb24ueD1vYmplY3QucG9zLnhcclxuICAgICAgaWYgKGRpcmVjdGlvbi5zaWduZSA9PSAnKycpIHtcclxuICAgICAgICB2YXIgcG9zRmluYWwgPSAocGFyc2VJbnQocG9zSW5pdCkgKyBkaXN0YW5jZVkpLnRvU3RyaW5nKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcG9zRmluYWwgPSAocGFyc2VJbnQocG9zSW5pdCkgLSBkaXN0YW5jZVkpLnRvU3RyaW5nKClcclxuICAgICAgfVxyXG4gICAgICBwb3NpdGlvbi55PXBvc0ZpbmFsXHJcbiAgICB9XHJcbiAgICB2YXIgc3ZnPW9iamVjdC5nZXRNb3ZlKGF4ZSxwb3NJbml0LHBvc0ZpbmFsKVxyXG4gICAgcmV0dXJuIHtzdmc6c3ZnLHBvc0ZpbmFsOnBvc2l0aW9ufTtcclxuXHJcbiAgfVxyXG4gIHJld3JpdGVBbGwoKSB7XHJcbiAgICBjb25zb2xlLmxvZygncmV3cml0ZSB0aW1lJyk7XHJcbiAgICB2YXIgbGlzdGUgPSB0aGlzLmxpc3RlT2JqZWN0Q2hhbmdlXHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMubGlzdGVPYmplY3RDaGFuZ2UubGVuZ3RoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5yZXdyaXRlT2JqZWN0KGxpc3RlW2ldLm9iamVjdCwgbGlzdGVbaV0ucG9zRmluYWwsIGxpc3RlW2ldLmF4ZSwgbGlzdGVbaV0uaW5kZXgpXHJcbiAgICB9XHJcbiAgICB0aGlzLmxpc3RlT2JqZWN0Q2hhbmdlID0gW11cclxuICAgIHV0aWwucmVmcmVzaChcIiNmaWd1cmVHcnBcIilcclxuICB9XHJcbiAgcmV3cml0ZU9iamVjdChvYmplY3QsIHBvc0ZpbmFsLCBheGUsIGluZGV4KSB7XHJcbiAgICB2YXIgaWQgPSBvYmplY3QuZ2V0SWQoKVxyXG4gICAgY29uc29sZS5sb2coJ3Jld3JpdGVPYmplY3Qgd2l0aCBpZCAnICsgaWQpO1xyXG4gICAgJChcIiNvYmplY3QtXCIgKyBpZCkucmVtb3ZlKClcclxuICAgIGlmIChheGUgPT0gJ3gnKSB7XHJcbiAgICAgIG9iamVjdC5wb3MueCA9IHBhcnNlSW50KHBvc0ZpbmFsLngpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmplY3QucG9zLnkgPSBwYXJzZUludChwb3NGaW5hbC55KVxyXG4gICAgfVxyXG4gICAgLy90aGlzLmFmZkxpc3RlT2JqZWN0KClcclxuICAgIG9iamVjdC5zZXRTdmcoKVxyXG4gICAgdGhpcy53cml0ZU9iamVjdChvYmplY3QpXHJcbiAgfVxyXG4gIHJ1bigpIHtcclxuICAgICQoXCIuYW5pbWF0aW9uXCIpLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5hbmltQWxsKClcclxuICAgIHRoaXMubW92ZUFsbCgpXHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMubGlzdGVPYmplY3RDaGFuZ2UpO1xyXG4gICAgdXRpbC5yZWZyZXNoKClcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIF90aGlzLnJld3JpdGVBbGwoKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfVxyXG4gIGFkZE9iamVjdChvYmplY3QpIHtcclxuICAgIHRoaXMubGlzdGVPYmplY3QucHVzaChvYmplY3QpO1xyXG4gIH1cclxuICBhZmZMaXN0ZU9iamVjdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibGlzdGUtLS0tLS1cIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvYmplY3QtLVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJ4OlwiICsgdGhpcy5saXN0ZU9iamVjdFtpXS5wb3MueClcclxuICAgICAgY29uc29sZS5sb2coXCJ5OlwiICsgdGhpcy5saXN0ZU9iamVjdFtpXS5wb3MueSlcclxuICAgICAgY29uc29sZS5sb2coXCItLVwiKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tXCIpO1xyXG4gIH1cclxuICByZW1vdmVPYmplY3RPbkNsaWNrKHBvcywgY2xhc3NlcyA9ICdkZWZhdWx0Jykge1xyXG4gICAgdmFyIGZpbmQgPSB0aGlzLmZpbmRBbGxPYmplY3QocG9zKVxyXG4gICAgaWYgKGZpbmQubGVuZ3RoID4gMSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZW4gYXR0ZW50ZSBkZSBjb2RlJyk7IC8vLy8gVE9ETzogaW1wbGVtZW50ZSB1aSB0byBjaG9vc2VcclxuICAgIH0gZWxzZSBpZiAoZmluZC5sZW5ndGggPT0gMSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnPT0xJyk7XHJcbiAgICAgIHRoaXMucmVtb3ZlT2JqZWN0KGZpbmRbMF0pXHJcbiAgICB9XHJcbiAgICB1dGlsLnJlZnJlc2goXCIjZmlndXJlR3JwXCIpXHJcbiAgfVxyXG4gIHJlbW92ZU9iamVjdChpbmRleCkge1xyXG4gICAgdmFyIG9iamVjdCA9IHRoaXMubGlzdGVPYmplY3RbaW5kZXhdXHJcbiAgICB2YXIgaWQgPSBvYmplY3QuZ2V0SWQoKVxyXG4gICAgJChcIiNvYmplY3QtXCIgKyBpZCkucmVtb3ZlKClcclxuICAgIHRoaXMubGlzdGVPYmplY3Quc3BsaWNlKGluZGV4LCAxKVxyXG4gIH1cclxuICByZW1vdmVBbGxPYmplY3QoKSB7XHJcbiAgICB3aGlsZSAodGhpcy5saXN0ZU9iamVjdC5sZW5ndGggIT0gMCkge1xyXG4gICAgICB0aGlzLnJlbW92ZU9iamVjdCgwKVxyXG4gICAgfVxyXG4gICAgdXRpbC5yZWZyZXNoKFwiI2ZpZ3VyZUdycFwiKVxyXG4gIH1cclxuICB3cml0ZURlZigpIHtcclxuICAgIHZhciBjbGFzc2VzID0gdGhpcy5saXN0ZUNsYXNzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChjbGFzc2VzW2ldLmhhdmVNdWx0aXBsZURlZigpKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjbGFzc2VzW2ldLmRlZigpKTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNsYXNzZXNbaV0uZGVmKCkubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIHZhciBkZWYgPSBjbGFzc2VzW2ldLmRlZigpW2pdXHJcbiAgICAgICAgICAkKFwiI3N2Z1wiKS5wcmVwZW5kKGRlZilcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGRlZiA9IGNsYXNzZXNbaV0uZGVmKClcclxuICAgICAgICAkKFwiI3N2Z1wiKS5wcmVwZW5kKGRlZilcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbiAgZmluZEFsbE9iamVjdChwb3NpdGlvbikge1xyXG4gICAgdmFyIGZpbmQgPSBbXVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlT2JqZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciB4ID0gdGhpcy5saXN0ZU9iamVjdFtpXS5wb3MueFxyXG4gICAgICB2YXIgeSA9IHRoaXMubGlzdGVPYmplY3RbaV0ucG9zLnlcclxuICAgICAgaWYgKHggPT0gcG9zaXRpb24ueCAmJiB5ID09IHBvc2l0aW9uLnkpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGkpO1xyXG4gICAgICAgIGZpbmQucHVzaChpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmluZFxyXG4gIH1cclxuXHJcbiAgZmluZE9iamVjdChwb3NpdGlvbiwgZXhjbHVkZVR5cGUgPSAnRGVmYXVsdCcpIHtcclxuICAgIHZhciBmaW5kID0gbnVsbFxyXG4gICAgLy9jb25zb2xlLmxvZygncG9zaXRpb24gcmVjaGVyY2hlciB4Jytwb3NpdGlvbi54KTtcclxuICAgIC8vY29uc29sZS5sb2coJ3Bvc2l0aW9uIHJlY2hlcmNoZXIgeScrcG9zaXRpb24ueSk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJy0tLS0tLW9iamVjdC0tLS0tJyk7XHJcbiAgICAgIHZhciB4ID0gdGhpcy5saXN0ZU9iamVjdFtpXS5wb3MueFxyXG4gICAgICB2YXIgeSA9IHRoaXMubGlzdGVPYmplY3RbaV0ucG9zLnlcclxuXHJcbiAgICAgIC8vY29uc29sZS5sb2coJ2lkICcrdGhpcy5saXN0ZU9iamVjdFtpXS5nZXRJZCgpKTtcclxuICAgICAgLy9jb25zb2xlLmxvZygneCAnK3gpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCd5ICcreSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJy0tLS0tLS0tLS0tJyk7XHJcbiAgICAgIGlmICh4ID09IHBvc2l0aW9uLnggJiYgeSA9PSBwb3NpdGlvbi55ICYmIGV4Y2x1ZGVUeXBlICE9IHRoaXMubGlzdGVPYmplY3RbaV0uZ2V0Q2xhc3MoKSkge1xyXG4gICAgICAgIHZhciBmaW5kID0gdGhpcy5saXN0ZU9iamVjdFtpXVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ21hdGNoJyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnaWQgZmluZCAnICsgZmluZC5nZXRJZCgpKTtcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmluZFxyXG4gIH1cclxuICByb3RhdGVPYmplY3QocG9zKSB7XHJcbiAgICB2YXIgb2JqZWN0ID0gdGhpcy5maW5kT2JqZWN0KHBvcywgT3JlKVxyXG4gICAgaWYgKG9iamVjdCAhPSBudWxsKSB7XHJcbiAgICAgIHZhciBxdWVyeU9iamVjdCA9ICQoXCIjb2JqZWN0LVwiICsgb2JqZWN0LmdldElkKCkpXHJcbiAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5T2JqZWN0LmF0dHIoJ3RyYW5zZm9ybScpKTtcclxuICAgICAgdmFyIGFjdHVhbERlZ3JlZSA9IG9iamVjdC5wb3MuZGlyZWN0aW9uICogOTBcclxuICAgICAgY29uc29sZS5sb2coXCJhY3R1YWxEZWdyZWUgOlwiK2FjdHVhbERlZ3JlZSk7XHJcbiAgICAgIHZhciBuZXdEZWdyZWUgPSAocGFyc2VJbnQoYWN0dWFsRGVncmVlKSArIDkwKSAlIDM2MDtcclxuICAgICAgcXVlcnlPYmplY3QuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSgnICsgbmV3RGVncmVlICtcIiBcIitvYmplY3Qub3JpZ2luWCtcIiBcIitvYmplY3Qub3JpZ2luWSsgJyknKTtcclxuICAgICAgb2JqZWN0LnBvcy5kaXJlY3Rpb24gPSAob2JqZWN0LnBvcy5kaXJlY3Rpb24gKyAxKSAlIDRcclxuICAgICAgdXRpbC5yZWZyZXNoKCcjZmlndXJlR3JwJylcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoYW5nZVVybERlZihwb3MsIHR5cGVHaXZlID0gJ05vbmUnKSB7XHJcbiAgICB2YXIgb2JqZWN0ID0gdGhpcy5maW5kT2JqZWN0KHBvcywgT3JlKVxyXG4gICAgLy9jb25zb2xlLmxvZyhvYmplY3QpO1xyXG4gICAgaWYgKG9iamVjdCAhPSBudWxsKSB7XHJcbiAgICAgIHZhciBjbGFzc09iamVjdCA9IG9iamVjdC5nZXRDbGFzcygpXHJcbiAgICAgIGlmIChjbGFzc09iamVjdC5oYXZlTXVsdGlwbGVEZWYoKSkge1xyXG4gICAgICAgIGlmICh0eXBlR2l2ZSAhPSAnTm9uZScpIHtcclxuICAgICAgICAgIG5leHRUeXBlID0gdHlwZUdpdmVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFyIG5leHRUeXBlID0gY2xhc3NPYmplY3QubmV4dFR5cGUob2JqZWN0LnR5cGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdC50eXBlID0gbmV4dFR5cGVcclxuICAgICAgICAvL2NvbnNvbGUubG9nKG5leHRUeXBlKTtcclxuICAgICAgICAkKFwiI29iamVjdC1cIiArIG9iamVjdC5nZXRJZCgpKS5hdHRyKCdmaWxsJywgJ3VybCgjVGFwaXMtJyArIG5leHRUeXBlICsgJyknKTtcclxuICAgICAgICB1dGlsLnJlZnJlc2goXCIjZmlndXJlR3JwXCIpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29iamVjdCDDoCB1biBzZXVsIHR5cGUnKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJwYXMgZCdvYmplY3QgdHJvdXbDqVwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiY29uc29sZS5sb2coJ2NsYXNzIG9yZSBsb2FkJyk7XHJcbmltcG9ydCBBYnN0cmFjdE9iamVjdCBmcm9tJy4vQWJzdHJhY3RPYmplY3QuY2xhc3MuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JlIGV4dGVuZHMgQWJzdHJhY3RPYmplY3Qge1xyXG4gIC8vIGNsYXNzIHBvdXIgbGVzIG1pbmVyYWlzIFxyXG4gIGNvbnN0cnVjdG9yKHBvcykge1xyXG4gICAgc3VwZXIocG9zKVxyXG4gICAgdGhpcy5zZXRTdmcoKVxyXG4gIH1cclxuICBzdGF0aWMgYWZmKCkge1xyXG4gICAgY29uc29sZS5sb2coJ29yZSBhZmYnKTtcclxuICB9XHJcbiAgc3RhdGljIGRlZigpIHtcclxuICAgIHJldHVybiBzdXBlci5kZWYoJ3JnYmEoMCwwLDAsMC41KScsICdvcmUnLCAnTTMgMCBMNyAwIEwgMTAgMyBMIDEwIDcgTCA3IDEwIEwgMyAxMCBMIDAgNyBMIDAgMycpXHJcbiAgfVxyXG4gIHNldFN2ZygpIHtcclxuICAgIHN1cGVyLnNldFN2Zygnb3JlJylcclxuICB9XHJcbiAgZ2V0TW92ZShheGUsZnJvbSx0byl7XHJcbiAgICB2YXIgbW92ZSA9ICc8YW5pbWF0ZSB4bGluazpocmVmPSNvYmplY3QtJyArIHRoaXMuZ2V0SWQoKSArICcgYXR0cmlidXRlTmFtZT0nICsgYXhlICsgJyAgZnJvbSA9JyArIGZyb20gKyAnIHRvPScgKyB0byArICcgZmlsbD1cImZyZWV6ZVwiIGR1cj1cIjAuNXNcIiBjbGFzcz1cImFuaW1hdGlvbiB0YXBpc1wiIC8+ICc7XHJcbiAgICByZXR1cm4gbW92ZVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XHJcbiAgLy8gY2xhc3MgZ2xvYmFsIHBvdXIgbGVzIHBvc2l0aW9uIGRlIHRvdXRlIGxlcyBmaWd1cmVzXHJcbiAgY29uc3RydWN0b3IoeCx5LGRpcmVjdGlvbj0nMCcpIHtcclxuICAgIHRoaXMueD14O1xyXG4gICAgdGhpcy55PXk7XHJcbiAgICB0aGlzLmRpcmVjdGlvbj1kaXJlY3Rpb247XHJcbiAgfVxyXG4gIGlzRXF1YWwocG9zKXtcclxuICAgIGlmICh0aGlzLnggPT0gcG9zLnggJiYgdGhpcy55ID09IHBvcy55ICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIiwiY29uc29sZS5sb2coJ2NsYXNzIFNhdmVNYW5pcHVsYXRvciBsb2FkJyk7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmVNYW5pcHVsYXRvciB7XHJcbiAgLy8gIGNvbnRyb2xsZSBsZXMgc2F1dmVnYXJkZXMvY2hhcmdlbWVudHNcclxuICBjb25zdHJ1Y3RvcihtYW5pcHVsYXRvcikge1xyXG4gICAgdGhpcy5tYW5pcHVsYXRvciA9IG1hbmlwdWxhdG9yO1xyXG4gICAgY29uc29sZS5sb2cobWFuaXB1bGF0b3IpO1xyXG4gICAgLy90aGlzLmNsZWFyQWxsU2F2ZSgpXHJcbiAgfVxyXG4gIGNoZWNrU2F2ZSgpIHtcclxuICAgIHZhciBsaXN0ZVNhdmUgPSBbXVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1NhdmUtJyArIGkpICE9ICdvYmplY3QnKSB7XHJcbiAgICAgICAgbGlzdGVTYXZlLnB1c2goaSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxpc3RlU2F2ZVxyXG4gIH1cclxuICBjbGVhckFsbFNhdmUoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1NhdmUtJyArIGkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNsZWFyU2F2ZShpZCkge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhclNhdmUgXCIraWQgKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdTYXZlLScgKyBpZClcclxuICB9XHJcbiAgc2F2ZShuYW1lU2F2ZSA9ICdkZWZhdWx0Jykge1xyXG4gICAgY29uc29sZS5sb2coJ3NhdmUnKTtcclxuICAgIHZhciBsaXN0ZSA9IFtdXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWFuaXB1bGF0b3IubGlzdGVPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGNsYXNzZSA9IHRoaXMubWFuaXB1bGF0b3IubGlzdGVPYmplY3RbaV0uZ2V0Q2xhc3NOYW1lRnJvbU9iamVjdCgpXHJcbiAgICAgIHZhciBwb3MgPSB0aGlzLm1hbmlwdWxhdG9yLmxpc3RlT2JqZWN0W2ldLnBvc1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMubWFuaXB1bGF0b3IubGlzdGVPYmplY3RbaV0udHlwZSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5tYW5pcHVsYXRvci5saXN0ZU9iamVjdFtpXS50eXBlKTtcclxuICAgICAgICB2YXIgdHlwZSA9IHRoaXMubWFuaXB1bGF0b3IubGlzdGVPYmplY3RbaV0udHlwZVxyXG4gICAgICAgIGxpc3RlLnB1c2goe1xyXG4gICAgICAgICAgY2xhc3NlOiBjbGFzc2UsXHJcbiAgICAgICAgICBwb3M6IHBvcyxcclxuICAgICAgICAgIHR5cGU6IHR5cGVcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3RlLnB1c2goe1xyXG4gICAgICAgICAgY2xhc3NlOiBjbGFzc2UsXHJcbiAgICAgICAgICBwb3M6IHBvc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTYXZlLScgKyBuYW1lU2F2ZSwgSlNPTi5zdHJpbmdpZnkobGlzdGUpKTtcclxuICB9XHJcbiAgbG9hZChuYW1lU2F2ZSA9ICdkZWZhdWx0Jykge1xyXG4gICAgY29uc29sZS5sb2coJ2xvYWQnKTtcclxuICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU2F2ZS0nICsgbmFtZVNhdmUpKTtcclxuICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB0aGlzLm1hbmlwdWxhdG9yLnJlc2V0KGRhdGEpO1xyXG4gIH1cclxufVxyXG4iLCJjb25zb2xlLmxvZygnY2xhc3MgdGFwaXMgbG9hZCcpO1xyXG5pbXBvcnQgQWJzdHJhY3RPYmplY3QgZnJvbScuL0Fic3RyYWN0T2JqZWN0LmNsYXNzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcGlzIGV4dGVuZHMgQWJzdHJhY3RPYmplY3Qge1xyXG4gIC8vIGNsYXNzIHBvdXIgbGVzIHRhcGlzXHJcbiAgY29uc3RydWN0b3IocG9zLHR5cGU9J2ZvcndhcmQnKSB7XHJcbiAgICBzdXBlcihwb3MpXHJcbiAgICB0aGlzLnR5cGU9dHlwZTtcclxuICAgIHRoaXMuc2V0U3ZnKClcclxuICB9XHJcbiAgLyoqXHJcbiAgICogY3JlYXRpb24gb2YgdGhlIGltYWdlIGRlZmluaXRpb24uT25lIGJ5IGNsYXNzXHJcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgc3RhdGljIGRlZigpIHtcclxuICAgIHZhciBsaXN0ZURlZj1bXVxyXG4gICAgc2VsZj10aGlzO1xyXG4gICAgdmFyIGRlZjEgPSBzdXBlci5kZWYoJ2JsdWUnLCdUYXBpcy1mb3J3YXJkJywnTTUgMCBMMTAgMyBMNyAzIEw3IDEwIEwzIDEwIEwzIDMgTCAwIDMnLCcxMDAlJywnMTAwJScpO1xyXG4gICAgdmFyIGRlZjIgPSBzdXBlci5kZWYoJ3JlZCcsJ1RhcGlzLWxlZnQnLCdNMiAzIFEgNyAzIDcgMTAgTDMgMTAgUSAzIDcgMiA3IEwgMiA5IEwgMCA1IEwgMiAxIE0gNSAxMCBMOSAxMiBMNyAxMiBRNyAxNyAwIDE3IEwwIDEzIFEzIDEzIDMgMTIgTDEgMTInLCcxMDAlJywnMTAwJScpO1xyXG4gICAgdmFyIGRlZjM9IHN1cGVyLmRlZignZ3JlZW4nLCdUYXBpcy1yaWdodCcsJ003IDEwIFEgNyA3IDggNyBMOCA5IEwgMTAgNSBMOCAxIEw4IDMgUSAzIDMgMyAxMCBNIDUgMTAgTDkgMTIgTDcgMTIgUTcgMTMgMTAgMTMgTDEwIDE3IFEzIDE3IDMgMTIgTDEgMTInLCcxMDAlJywnMTAwJScpO1xyXG4gICAgbGlzdGVEZWYucHVzaChkZWYxKTtcclxuICAgIGxpc3RlRGVmLnB1c2goZGVmMik7XHJcbiAgICBsaXN0ZURlZi5wdXNoKGRlZjMpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhsaXN0ZURlZik7XHJcbiAgICByZXR1cm4gbGlzdGVEZWY7XHJcbiAgfVxyXG4gIHN0YXRpYyBoYXZlTXVsdGlwbGVEZWYoKXtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHN0YXRpYyBsaXN0ZU5hbWVEZWYoKXtcclxuICAgIHJldHVybiBbJ2ZvcndhcmQnLCdsZWZ0JywncmlnaHQnXVxyXG4gIH1cclxuICBzdGF0aWMgbmV4dFR5cGUodHlwZSl7XHJcbiAgICB2YXIgbGlzdGUgPSB0aGlzLmxpc3RlTmFtZURlZigpXHJcbiAgICAvL2NvbnNvbGUubG9nKGxpc3RlKTtcclxuICAgIC8vY29uc29sZS5sb2codHlwZSk7XHJcbiAgICB2YXIgaW5kZXggPSBsaXN0ZS5pbmRleE9mKHR5cGUpXHJcbiAgICAvL2NvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgdmFyIG5leHRUeXBlID1saXN0ZVsoaW5kZXgrMSklbGlzdGUubGVuZ3RoIF07XHJcbiAgICByZXR1cm4gbmV4dFR5cGVcclxuXHJcbiAgfVxyXG4gIHNldFN2Zygpe1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnR5cGUpO1xyXG4gICAgICAgIHN1cGVyLnNldFN2ZygnVGFwaXMtJyt0aGlzLnR5cGUpXHJcbiAgfVxyXG4gIHN0YXRpYyBnZXRBbmltYXRpb24oKXtcclxuICAgIHZhciBhbmltYXRpb25MaXN0ZT1bXTtcclxuICAgIHZhciBhbmltYXRpb249JzxhbmltYXRlVHJhbnNmb3JtIGhyZWY9XCIjcGF0aC1UYXBpcy1mb3J3YXJkXCIgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiAgdHlwZT1cInRyYW5zbGF0ZVwiICBmcm9tPVwiMCAwXCIgdG89XCIwIC0xMFwiICBkdXI9XCIwLjVzXCIgIGNsYXNzPVwiYW5pbWF0aW9uIHRhcGlzXCIgLz4gJztcclxuICAgIHZhciBhbmltYXRpb24xPSc8YW5pbWF0ZVRyYW5zZm9ybSBocmVmPVwiI3BhdGgtVGFwaXMtbGVmdFwiIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiAgdHlwZT1cInJvdGF0ZVwiIGZyb209XCIwIDAgMTBcIiB0bz1cIi05MCAwIDEwXCIgZHVyPVwiMC41c1wiICBjbGFzcz1cImFuaW1hdGlvbiB0YXBpc1wiIC8+JztcclxuICAgIHZhciBhbmltYXRpb24yPSc8YW5pbWF0ZVRyYW5zZm9ybSBocmVmPVwiI3BhdGgtVGFwaXMtcmlnaHRcIiBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgIHR5cGU9XCJyb3RhdGVcIiBmcm9tPVwiMCAxMCAxMFwiIHRvPVwiOTAgMTAgMTBcIiBkdXI9XCIwLjVzXCIgY2xhc3M9XCJhbmltYXRpb24gdGFwaXNcIiAvPic7XHJcbiAgICBhbmltYXRpb25MaXN0ZS5wdXNoKGFuaW1hdGlvbilcclxuICAgIGFuaW1hdGlvbkxpc3RlLnB1c2goYW5pbWF0aW9uMSlcclxuICAgIGFuaW1hdGlvbkxpc3RlLnB1c2goYW5pbWF0aW9uMilcclxuICAgIHJldHVybiBhbmltYXRpb25MaXN0ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZmYoKXtcclxuICAgIGNvbnNvbGUubG9nKCd0YXBpcyBhZmYnKTtcclxuICB9XHJcblxyXG59XHJcbiIsIi8vIGZpY2hpZXIgcG91ciBsZXMgZm9uY3Rpb25zIHV0aWxpdGFpcmVzXHJcbmNvbnNvbGUubG9nKFwidXRpbC5qc1wiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoKGVsZW1lbnQgPSBcIiNmcmFtZVwiKSB7XHJcbiAgJChlbGVtZW50KS5odG1sKCQoZWxlbWVudCkuaHRtbCgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmQobWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZERpZ2l0KHN0cmluZykge1xyXG4gIGNvbnN0IHJlZ2V4ID0gL1xcZCsvZ207O1xyXG4gIGNvbnN0IHN0ciA9IHN0cmluZ1xyXG4gIGxldCBtO1xyXG4gIHZhciBmaW5kO1xyXG4gIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcclxuICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcclxuICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xyXG4gICAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XHJcbiAgICAgIH1cclxuICAgICAgbS5mb3JFYWNoKChtYXRjaCwgZ3JvdXBJbmRleCkgPT4ge1xyXG4gICAgICAgIGZpbmQ9IG1hdGNoO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBmaW5kXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNsZWVwKG1pbGxpc2Vjb25kcykge1xyXG4gIHZhciBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMWU3OyBpKyspIHtcclxuICAgIGlmICgobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydCkgPiBtaWxsaXNlY29uZHMpe1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFmZlRlc3QoKSB7XHJcbiAgY29uc29sZS5sb2coJ2hlbGxvIHRoZXJlJyk7XHJcblxyXG59XHJcbiIsImltcG9ydCBEb21Db250cm9sbGVyIGZyb20gJy4vanNDbGFzcy9Eb21Db250cm9sbGVyLmNsYXNzLmpzJztcclxuaW1wb3J0IFRhcGlzIGZyb20gJy4vanNDbGFzcy9UYXBpcy5jbGFzcy5qcyc7XHJcbmltcG9ydCBPcmUgZnJvbSAnLi9qc0NsYXNzL09yZS5jbGFzcy5qcyc7XHJcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2pzQ2xhc3MvTWFuaXB1bGF0b3IuY2xhc3MuanMnO1xyXG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9qc0NsYXNzL1Bvc2l0aW9uLmNsYXNzLmpzJztcclxuXHJcblxyXG5cclxuLy8gaW5pdGlhbGlzZSBsZXMgcHJpbmNpcGFscyBvYmplY3RzXHJcbiQoZnVuY3Rpb24oKXtcclxuICB2YXIgZG9tID0gbmV3IERvbUNvbnRyb2xsZXIoKVxyXG4gIHZhciBsaXN0ZUNsYXNzID0gW1RhcGlzLCBPcmVdO1xyXG4gIHZhciBtYW5pcHVsYXRvciA9IG5ldyBNYW5pcHVsYXRvcihsaXN0ZUNsYXNzKTtcclxuICBtYW5pcHVsYXRvci53cml0ZUFsbCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==