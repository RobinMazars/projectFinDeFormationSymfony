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
            self.actualPosMouse = pos; // console.log("changement case");

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
      } else if (ghost == false) {
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




 // BUG: ghost dont remove after pose and go outside frame
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy9BYnN0cmFjdE9iamVjdC5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy9Eb21Db250cm9sbGVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YXBpcy9qc0NsYXNzL0V2ZW50Q29udHJvbGxlci5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy9HcmlsbGUuY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RhcGlzL2pzQ2xhc3MvTWFuaXB1bGF0b3IuY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RhcGlzL2pzQ2xhc3MvT3JlLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YXBpcy9qc0NsYXNzL1Bvc2l0aW9uLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YXBpcy9qc0NsYXNzL1NhdmVNYW5pcHVsYXRvci5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy9UYXBpcy5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFwaXMvanNDbGFzcy91dGlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YXBpcy90YXBpc01haW4uanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkFic3RyYWN0T2JqZWN0IiwicG9zIiwiaWRNeXNlbGYiLCJjb25zdHJ1Y3RvciIsImlkIiwidW5kZWZpbmVkIiwibmFtZSIsImlkRGVmIiwid2lkdGgiLCJoZWlnaHQiLCJvcmlnaW4iLCJnZXRDZW50ZXIiLCJhbmdsZSIsImRpcmVjdGlvbiIsIm9yaWdpblJvdGF0aW9uIiwiZ2V0Qm90dG9tTGVmdCIsIm9yaWdpblgiLCJwYXJzZUludCIsIngiLCJvcmlnaW5ZIiwieSIsInN2ZyIsImdldElkIiwiY2VudGVyIiwic3RyaW5nIiwiY290ZUJvdHRvbUxlZnQiLCJjb3RlQm90dG9tUmlnaHQiLCJnZXRDbGFzc05hbWVGcm9tT2JqZWN0IiwicmhzIiwiY29sb3IiLCJpZE5hbWUiLCJwYXR0ZXJuIiwiZGVmIiwiJCIsInBhdGVybiIsImltYWdlIiwiaHRtbCIsImFwcGVuZCIsIkRvbUNvbnRyb2xsZXIiLCJuYnJTYXZlQnV0dG9uIiwiZGl2IiwiY3JlYXRpb25TYXZlTG9hZEJ1dHRvbiIsInByZXBlbmQiLCJjcmVhdGlvbkRvbUVsZW1lbnQiLCJzdGFydCIsInN0b3AiLCJvbmVTdGVwIiwiYXR0ciIsImxvYWRTYXZlIiwiaSIsImJ1dHRvblNhdmUiLCJidXR0b25Mb2FkIiwiYnV0dG9uU3VwcmUiLCJ0eXBlIiwiY2xhc3NlIiwiZWxlbWVudCIsImFkZENsYXNzIiwiRXZlbnRDb250cm9sbGVyIiwibWFuaXB1bGF0b3IiLCJzYXZlciIsImFjdHVhbFBvc01vdXNlIiwiaW5pdCIsImluaXRTZWxlY3RvciIsImJpbmRPbkNMaWNrIiwiYmluZEhvdmVyIiwiY2hlY2tTYXZlIiwic2VsZiIsImNsaWNrIiwiYW5pbU9uZVN0ZXAiLCJhbmltUmVwZWF0IiwiYmluZENsZWFyQWxsIiwiYmluZEFsbFNhdmVMb2FkQnV0dG9ucyIsInJlbW92ZUFsbE9iamVjdCIsImxpc3RlU2F2ZSIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiYmluZFNhdmVCdXR0b24iLCJiaW5kTG9hZEJ1dHRvbiIsImJpbmRTdXByZUJ1dHRvbiIsInRvZ2dsZUNsYXNzIiwidW5iaW5kTG9hZEJ1dHRvbiIsInVuYmluZFNhdmVCdXR0b24iLCJ1bmJpbmRTdXByZUJ1dHRvbiIsInVuYmluZENsZWFyQWxsIiwiY2xlYXJTdmciLCJ1bmJpbmQiLCJzYXZlIiwibG9hZCIsInN1cHJlIiwic2F2ZU5hbWUiLCJjaGFuZ2VCdXR0b24iLCJjbGVhclNhdmUiLCJtb3VzZWRvd24iLCJldmVudCIsIm9uQ2xpY2siLCJvZmYiLCJlIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0eWxlcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJjdXJzb3JYIiwiY2xpZW50WCIsImxlZnQiLCJib3JkZXJMZWZ0V2lkdGgiLCJjdXJzb3JZIiwiY2xpZW50WSIsInRvcCIsImJvcmRlclRvcFdpZHRoIiwicG9zTW91c2UiLCJnZXRQb3NNb3VzZSIsImNhbGNQb3MiLCJwbGFjZU9iamVjdCIsInNlbGVjdGVkIiwidW5iaW5kT25DTGljayIsInVuYmluZEFsbFNhdmVMb2FkQnV0dG9uIiwic3RvcEFuaW0iLCJhbmltIiwibG9vcCIsInNldEludGVydmFsIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJydW4iLCJsaXN0ZUNsYXNzIiwiY2hhbmdlU2VsZWN0b3IiLCJob3ZlciIsIm1vdXNlbW92ZSIsImV2ZW50MiIsImlzRXF1YWwiLCJrZXlwcmVzcyIsInRvdWNoZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIndoaWNoIiwiY2hhbmdlVXJsRGVmIiwicm90YXRlT2JqZWN0IiwicmVtb3ZlT2JqZWN0T25DbGljayIsImNzcyIsIkdyaWxsZSIsIm5ickNhc2VXaWR0aCIsIm5ickNhc2VIZWlnaHQiLCJncm91cCIsImNhc2VXaWR0aCIsImNhc2VIZWlnaHQiLCJwb3NTdGFydCIsInBvc0VuZCIsInN2Z0xpbmUiLCJNYW5pcHVsYXRvciIsImdyaWxsZSIsImxpc3RlT2JqZWN0Iiwid3JpdGVEZWYiLCJyZWdyb3VwIiwiYWRkU2VsZWN0b3IiLCJTYXZlTWFuaXB1bGF0b3IiLCJldmVudENvbnRyb2xsZXIiLCJsaXN0ZU9iamVjdENoYW5nZSIsImluc2VydEFmdGVyIiwiY2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwic3ViR3JvdXAxIiwic3ViR3JvdXAyIiwic3ViR3JvdXAzIiwibGlzdGVPYmplY3RMb2FkIiwiZW1wdHkiLCJUYXBpcyIsIk9yZSIsIk1hdGgiLCJmbG9vciIsIlBvc2l0aW9uIiwidG9TdHJpbmciLCJvYmplY3QiLCJnZXRTdmciLCJjbGFzc2VzIiwiZ2hvc3QiLCJvYmplY3RPblBsYWNlIiwiZmluZEFsbE9iamVjdCIsInBsYWNlR2hvc3QiLCJhZGRPYmplY3QiLCJ3cml0ZU9iamVjdCIsImFscmVhZHkiLCJnZXRDbGFzcyIsInV0aWwiLCJnZXRBbmltYXRpb24iLCJhbmltYXRpb24iLCJheGUiLCJzaWduZSIsImRlc3RpbmF0aW9uIiwiY29sbGlzaW9uIiwibGlzdGVPYmplY3RGaW5kIiwiZ2V0TW92ZSIsInRhcGlzVW5kZXIiLCJmaW5kT2JqZWN0IiwibW92ZURpcmVjdGlvbiIsImNhbGNEaXJlY3Rpb24iLCJjaGVja0NvbGxpc2lvbiIsImNhbGNNb3ZlIiwibW92ZSIsInBvc0ZpbmFsIiwiYWxyZWFkeVBsYW5uZWRQb3NpdGlvbiIsImoiLCJwdXNoIiwiaW5kZXgiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJwb3NpdGlvbiIsInBvc0luaXQiLCJsaXN0ZSIsInJld3JpdGVPYmplY3QiLCJyZW1vdmUiLCJzZXRTdmciLCJhbmltQWxsIiwibW92ZUFsbCIsIl90aGlzIiwicmV3cml0ZUFsbCIsImZpbmQiLCJyZW1vdmVPYmplY3QiLCJzcGxpY2UiLCJoYXZlTXVsdGlwbGVEZWYiLCJleGNsdWRlVHlwZSIsInF1ZXJ5T2JqZWN0IiwiYWN0dWFsRGVncmVlIiwibmV3RGVncmVlIiwidHlwZUdpdmUiLCJjbGFzc09iamVjdCIsIm5leHRUeXBlIiwiZnJvbSIsInRvIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuYW1lU2F2ZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInBhcnNlIiwicmVzZXQiLCJsaXN0ZURlZiIsImRlZjEiLCJkZWYyIiwiZGVmMyIsImxpc3RlTmFtZURlZiIsImluZGV4T2YiLCJhbmltYXRpb25MaXN0ZSIsImFuaW1hdGlvbjEiLCJhbmltYXRpb24yIiwicmVmcmVzaCIsInJhbmQiLCJtaW4iLCJtYXgiLCJyYW5kb20iLCJmaW5kRGlnaXQiLCJyZWdleCIsInN0ciIsIm0iLCJleGVjIiwibGFzdEluZGV4IiwiZm9yRWFjaCIsIm1hdGNoIiwiZ3JvdXBJbmRleCIsInNsZWVwIiwibWlsbGlzZWNvbmRzIiwiRGF0ZSIsImdldFRpbWUiLCJhZmZUZXN0IiwiZG9tIiwid3JpdGVBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVo7O0lBQ3FCQyxjOzs7QUFDbkI7QUFDQSwwQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFFBQUw7QUFDRDs7OzsrQkFZVTtBQUNULFVBQUksS0FBS0MsV0FBTCxDQUFpQkMsRUFBakIsSUFBdUJDLFNBQTNCLEVBQXNDO0FBQ3BDLGFBQUtGLFdBQUwsQ0FBaUJDLEVBQWpCLEdBQXNCLENBQXRCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0QsV0FBTCxDQUFpQkMsRUFBakI7QUFDRCxPQUxRLENBTVQ7OztBQUNBLFdBQUtBLEVBQUwsR0FBVSxLQUFLRCxXQUFMLENBQWlCQyxFQUEzQjtBQUNEOzs7NkNBSXVCO0FBQ3RCLGFBQU8sS0FBS0QsV0FBTCxDQUFpQkcsSUFBeEI7QUFDRDs7OytCQUNTO0FBQ1IsYUFBTyxLQUFLSCxXQUFaO0FBQ0Q7OzsyQkFDTUksSyxFQUFPO0FBQ1osVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxVQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLFVBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0FBLFlBQU0sR0FBRyxLQUFLQyxTQUFMLENBQWVILEtBQWYsRUFBc0JDLE1BQXRCLENBQVQsQ0FKWSxDQU1aOztBQUNBLFVBQUlHLEtBQUssR0FBRyxLQUFLLEtBQUtYLEdBQUwsQ0FBU1ksU0FBMUI7QUFDQSxVQUFJQyxjQUFjLEdBQUcsS0FBS0MsYUFBTCxDQUFtQlAsS0FBbkIsRUFBeUJDLE1BQXpCLENB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LFVBQUNDLEtBQUQsRUFBUUMsVUFBUixFQUF1QjtBQUMvQjdDLFVBQUksR0FBRTRDLEtBQU47QUFDSCxLQUZDO0FBR0g7O0FBQ0QsU0FBTzVDLElBQVA7QUFDRDtBQUNNLFNBQVM4QyxLQUFULENBQWVDLFlBQWYsRUFBNkI7QUFDbEMsTUFBSTdOLEtBQUssR0FBRyxJQUFJOE4sSUFBSixHQUFXQyxPQUFYLEVBQVo7O0FBQ0EsT0FBSyxJQUFJMU4sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxHQUFwQixFQUF5QkEsQ0FBQyxFQUExQixFQUE4QjtBQUM1QixRQUFLLElBQUl5TixJQUFKLEdBQVdDLE9BQVgsS0FBdUIvTixLQUF4QixHQUFpQzZOLFlBQXJDLEVBQWtEO0FBQ2hEO0FBQ0Q7QUFDRjtBQUNGO0FBQ00sU0FBU0csT0FBVCxHQUFtQjtBQUN4QjlRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFFRCxDOzs7Ozs7Ozs7Ozs7O0FDckNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFJQTs7QUFDQWtDLENBQUMsQ0FBQyxZQUFVO0FBQ1YsTUFBSTRPLEdBQUcsR0FBRyxJQUFJdk8sdUVBQUosRUFBVjtBQUNBLE1BQUl5RixVQUFVLEdBQUcsQ0FBQ3lDLCtEQUFELEVBQVFDLDZEQUFSLENBQWpCO0FBQ0EsTUFBSS9HLFdBQVcsR0FBRyxJQUFJNkYscUVBQUosQ0FBZ0J4QixVQUFoQixDQUFsQjtBQUNBckUsYUFBVyxDQUFDb04sUUFBWjtBQUNELENBTEEsQ0FBRCxDIiwiZmlsZSI6InRhcGlzSnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnY2xhc3MgQWJzdHJhY3RPYmplY3QgbG9hZCcpO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdE9iamVjdCB7XHJcbiAgLy8gY2xhc3MgbcOocmUgcG91ciBsZXMgZmlndXJlcyBhdmVjIGxlcyBwcm9wcmnDqXTDqSBkZSBiYXNlXHJcbiAgY29uc3RydWN0b3IocG9zKSB7XHJcbiAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgIHRoaXMuaWRNeXNlbGYoKTtcclxuICB9XHJcbiAgc3RhdGljIGRlZihjb2xvciA9ICdyZWQnLCBpZE5hbWUgPSAnRGVmYXVsdCcsIHBhdHRlcm4gPSAnTTAgMCBMMCAxMCBMMTAgMTAgTDEwIDAnLCB3aWR0aCA9ICcxMDAlJywgaGVpZ2h0ID0gJzEwMCUnKSB7XHJcbiAgICB2YXIgZGVmID0gJChcIjxkZWZzPjwvZGVmcz5cIik7XHJcbiAgICB2YXIgcGF0ZXJuID0gJCgnPHBhdHRlcm4gaWQ9JyArIGlkTmFtZSArICcgdmlld0JveD1cIjAsMCwxMCwxMFwiIHdpZHRoPScgKyB3aWR0aCArICcgaGVpZ2h0PScgKyBoZWlnaHQgKyAnID4nKTtcclxuICAgIHZhciBpbWFnZSA9ICgnPHBhdGggaWQ9cGF0aC0nK2lkTmFtZSsnIGZpbGw9JyArIGNvbG9yICsgJyBkPVwiJyArIHBhdHRlcm4gKyAnXCIvPicpO1xyXG4gICAgcGF0ZXJuID0gcGF0ZXJuLmh0bWwoaW1hZ2UpO1xyXG4gICAgZGVmID0gZGVmLmFwcGVuZChwYXRlcm4pO1xyXG4gICAgcmV0dXJuIGRlZjtcclxuICB9XHJcbiAgc3RhdGljIGhhdmVNdWx0aXBsZURlZigpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBpZE15c2VsZigpIHtcclxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLmlkID09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLmlkID0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuaWQrKztcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2codGhpcy5jb25zdHJ1Y3Rvci5pZCk7XHJcbiAgICB0aGlzLmlkID0gdGhpcy5jb25zdHJ1Y3Rvci5pZDtcclxuICB9XHJcbiAgc3RhdGljIGdldENsYXNzTmFtZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZVxyXG4gIH1cclxuICBnZXRDbGFzc05hbWVGcm9tT2JqZWN0KCl7XHJcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXHJcbiAgfVxyXG4gIGdldENsYXNzKCl7XHJcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvclxyXG4gIH1cclxuICBzZXRTdmcoaWREZWYpIHtcclxuICAgIHZhciB3aWR0aCA9IDUwO1xyXG4gICAgdmFyIGhlaWdodCA9IDUwO1xyXG4gICAgdmFyIG9yaWdpbiA9IHt9XHJcbiAgICBvcmlnaW4gPSB0aGlzLmdldENlbnRlcih3aWR0aCwgaGVpZ2h0KVxyXG5cclxuICAgIC8vY29uc29sZS5sb2cob3JpZ2luLnN0cmluZyk7XHJcbiAgICB2YXIgYW5nbGUgPSA5MCAqIHRoaXMucG9zLmRpcmVjdGlvbjtcclxuICAgIHZhciBvcmlnaW5Sb3RhdGlvbiA9IHRoaXMuZ2V0Qm90dG9tTGVmdCh3aWR0aCxoZWlnaHQpO1xyXG4gICAgdGhpcy5vcmlnaW5YPSBwYXJzZUludCh0aGlzLnBvcy54KSsod2lkdGgvMik7XHJcbiAgICB0aGlzLm9yaWdpblk9IHBhcnNlSW50KHRoaXMucG9zLnkpKyhoZWlnaHQvMik7XHJcbiAgICB0aGlzLnN2ZyA9ICc8cmVjdCBpZD1cIm9iamVjdC0nICsgdGhpcy5nZXRJZCgpICsgJ1wiIHdpZHRoPScgKyB3aWR0aCArICcgaGVpZ2h0PScgKyBoZWlnaHQgKyAnIHg9JyArIHRoaXMucG9zLnggKyAnICB5PScgKyB0aGlzLnBvcy55ICsgJyBmaWxsPVwidXJsKCMnICsgaWREZWYgKyAnKVwiIHRyYW5zZm9ybT1cInJvdGF0ZSgnICsgYW5nbGUgK1wiIFwiKyB0aGlzLm9yaWdpblggK1wiIFwiICsgdGhpcy5vcmlnaW5ZICsgJylcIi8+J1xyXG4gIH1cclxuICBnZXRDZW50ZXIod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIGNlbnRlciA9IHt9XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMucG9zKTtcclxuICAgIGNlbnRlci54ID0gcGFyc2VJbnQodGhpcy5wb3MueCkgKyB3aWR0aCAvIDI7XHJcbiAgICBjZW50ZXIueSA9IHBhcnNlSW50KHRoaXMucG9zLnkpICsgaGVpZ2h0IC8gMjtcclxuICAgIC8vY29uc29sZS5sb2coXCJjZW50ZXJcIik7XHJcbiAgICBjZW50ZXIuc3RyaW5nID0gY2VudGVyLnggKyAnICcgKyBjZW50ZXIueTtcclxuICAgIHJldHVybiBjZW50ZXI7XHJcbiAgfVxyXG4gIGdldEJvdHRvbUxlZnQod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIGNvdGVCb3R0b21MZWZ0ID0ge31cclxuICAgIGNvdGVCb3R0b21MZWZ0LnggPSBwYXJzZUludCh0aGlzLnBvcy54KTtcclxuICAgIGNvdGVCb3R0b21MZWZ0LnkgPSBwYXJzZUludCh0aGlzLnBvcy55KSArIGhlaWdodDtcclxuICAgIGNvdGVCb3R0b21MZWZ0LnN0cmluZyA9IGNvdGVCb3R0b21MZWZ0LnggKyAnICcgKyBjb3RlQm90dG9tTGVmdC55O1xyXG4gICAgcmV0dXJuIGNvdGVCb3R0b21MZWZ0O1xyXG4gIH1cclxuICBnZXRCb3R0b21SaWdodCh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgY290ZUJvdHRvbVJpZ2h0ID0ge31cclxuICAgIGNvdGVCb3R0b21SaWdodC54ID0gcGFyc2VJbnQodGhpcy5wb3MueCkgKyB3aWR0aDtcclxuICAgIGNvdGVCb3R0b21SaWdodC55ID0gcGFyc2VJbnQodGhpcy5wb3MueSkgKyBoZWlnaHQ7XHJcbiAgICBjb3RlQm90dG9tUmlnaHQuc3RyaW5nID0gY290ZUJvdHRvbVJpZ2h0LnggKyAnICcgKyBjb3RlQm90dG9tUmlnaHQueTtcclxuICAgIHJldHVybiBjb3RlQm90dG9tUmlnaHQ7XHJcbiAgfVxyXG4gIGdldFN2ZygpIHtcclxuICAgIHJldHVybiB0aGlzLnN2Z1xyXG4gIH1cclxuICBnZXRJZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldENsYXNzTmFtZUZyb21PYmplY3QoKSt0aGlzLmlkO1xyXG4gIH1cclxuICBnZXRQb3NpdGlvbigpe1xyXG4gICAgcmV0dXJuIHJocy5wb3M7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJjb25zb2xlLmxvZygnY2xhc3MgRG9tQ29udHJvbGxlciBsb2FkJyk7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbUNvbnRyb2xsZXIge1xyXG4gIC8vIGNvbnRyb2xsZSBsYSBwbHVwYXJ0IGRlcyBjcsOpYXRpb24sZGV0ZWN0aW9uLHN1cHJlc3Npb24gZCdlbGVtZW50IEhUTUxcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubmJyU2F2ZUJ1dHRvbj05XHJcbiAgICB2YXIgZGl2ID10aGlzLmNyZWF0aW9uU2F2ZUxvYWRCdXR0b24oKVxyXG4gICAgJChcIiNzb3VzU2VjdGlvblwiKS5wcmVwZW5kKGRpdilcclxuICAgIC8vdGhpcy5jcmVhdEFsbCgpXHJcbiAgICBjb25zb2xlLmxvZygnZW5kRG9tQ29udHJvbGxlcicpO1xyXG4gIH1cclxuICBjcmVhdGlvbkFuaW1hdGlvbkJ1dHRvbigpe1xyXG4gICAgdmFyIGRpdiA9dGhpcy5jcmVhdGlvbkRvbUVsZW1lbnQoJ2RpdicsJ2FuaW1hdGlvbkJ1dHRvbicpXHJcbiAgICB2YXIgc3RhcnQ9dGhpcy5jcmVhdGlvbkRvbUVsZW1lbnQoJ2J1dHRvbicsJ3N0YXJ0JywnU3RhcnQnKVxyXG4gICAgdmFyIHN0b3A9dGhpcy5jcmVhdGlvbkRvbUVsZW1lbnQoJ2J1dHRvbicsJ3N0b3AnLCdTdG9wJylcclxuICAgIHZhciBvbmVTdGVwPXRoaXMuY3JlYXRpb25Eb21FbGVtZW50KCdidXR0b24nLCdvbmVTdGVwJywnT25lIFN0ZXAnKVxyXG4gICAgc3RhcnQuYXR0cigndHlwZScsICdidXR0b24nKTtcclxuICAgIHN0b3AuYXR0cigndHlwZScsICdidXR0b24nKTtcclxuICAgIG9uZVN0ZXAuYXR0cigndHlwZScsICdidXR0b24nKTtcclxuICAgIGRpdi5hcHBlbmQoc3RhcnQpXHJcbiAgICBkaXYuYXBwZW5kKHN0b3ApXHJcbiAgICBkaXYuYXBwZW5kKG9uZVN0ZXApXHJcbiAgICByZXR1cm4gZGl2XHJcbiAgfVxyXG4gIGNyZWF0aW9uU2F2ZUxvYWRCdXR0b24oKXtcclxuICAgIHZhciBsb2FkU2F2ZT10aGlzLmNyZWF0aW9uRG9tRWxlbWVudCgnZGl2JywnbG9hZFNhdmUnKVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5uYnJTYXZlQnV0dG9uOyBpKyspIHtcclxuICAgICAgdmFyIGRpdj10aGlzLmNyZWF0aW9uRG9tRWxlbWVudCgnZGl2JyxudWxsLG51bGwsJ3NhdmVMb2FkLUJ1dHRvbnMnKVxyXG4gICAgICB2YXIgYnV0dG9uU2F2ZSA9IHRoaXMuY3JlYXRpb25Eb21FbGVtZW50KCdidXR0b24nLG51bGwsJ1NhdmUgbsKwJytwYXJzZUludChpKzEpLCdzYXZlJylcclxuICAgICAgYnV0dG9uU2F2ZS5hdHRyKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICBidXR0b25TYXZlLmF0dHIoJ2RhdGEtaWQnLCBpKzEpO1xyXG4gICAgICB2YXIgYnV0dG9uTG9hZCA9IHRoaXMuY3JlYXRpb25Eb21FbGVtZW50KCdidXR0b24nLG51bGwsJ0xvYWQgbsKwJytwYXJzZUludChpKzEpLCdsb2FkJylcclxuICAgICAgYnV0dG9uTG9hZC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICBidXR0b25Mb2FkLmF0dHIoJ2RhdGEtaWQnLCBpKzEpO1xyXG4gICAgICB2YXIgYnV0dG9uU3VwcmUgPSB0aGlzLmNyZWF0aW9uRG9tRWxlbWVudCgnYnV0dG9uJyxudWxsLCc8aSBjbGFzcz1cImZhcyBmYS10cmFzaC1hbHRcIj48L2k+Jywnc3VwcmUnKVxyXG4gICAgICBidXR0b25TdXByZS5hdHRyKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICBidXR0b25TdXByZS5hdHRyKCdkYXRhLWlkJywgaSsxKTtcclxuICAgICAgZGl2LmFwcGVuZChidXR0b25TYXZlKVxyXG4gICAgICBkaXYuYXBwZW5kKGJ1dHRvbkxvYWQpXHJcbiAgICAgIGRpdi5hcHBlbmQoYnV0dG9uU3VwcmUpXHJcbiAgICAgIGxvYWRTYXZlLmFwcGVuZChkaXYpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbG9hZFNhdmVcclxuICB9XHJcbiAgY3JlYXRpb25Eb21FbGVtZW50KHR5cGUsaWQ9bnVsbCxodG1sPW51bGwsY2xhc3NlPW51bGwpe1xyXG4gICAgLy8gZm9udGlvbiBnw6luw6lyYWxlIHBvdXIgY3LDqWVyIHVuIGVsZW1lbnRcclxuICAgIHZhciBlbGVtZW50ID0kKFwiPFwiK3R5cGUrXCI+PC9cIit0eXBlK1wiPlwiKVxyXG4gICAgaWYgKGh0bWwhPW51bGwpIHtcclxuICAgICAgZWxlbWVudC5odG1sKGh0bWwpXHJcbiAgICB9XHJcbiAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICBlbGVtZW50LmF0dHIoJ2lkJywgaWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNsYXNzZSAhPW51bGwpIHtcclxuICAgICAgZWxlbWVudC5hZGRDbGFzcyhjbGFzc2UpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG4gIH1cclxufVxyXG4iLCJjb25zb2xlLmxvZygnY2xhc3MgRXZlbnRDb250cm9sbGVyIGxvYWQnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50Q29udHJvbGxlciB7XHJcbiAgLy8gY29udHJvbGxlIGxlcyBjbGlxdWVzIHNvdXJpcyBldCBjbGF2aWVyXHJcbiAgY29uc3RydWN0b3IobWFuaXB1bGF0b3Isc2F2ZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKCdldmVudENvbnRyb2xsZXIgY29uc3RydWN0b3InKTtcclxuICAgIHRoaXMubWFuaXB1bGF0b3IgPSBtYW5pcHVsYXRvclxyXG4gICAgdGhpcy5zYXZlciA9IHNhdmVyXHJcbiAgICB0aGlzLmFjdHVhbFBvc01vdXNlID0gbnVsbFxyXG4gICAgdGhpcy5pbml0KClcclxuICAgIHRoaXMuaW5pdFNlbGVjdG9yKClcclxuICAgIHRoaXMuYmluZE9uQ0xpY2soKVxyXG4gICAgdGhpcy5iaW5kSG92ZXIoKVxyXG4gICAgdGhpcy5jaGVja1NhdmUoKVxyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzIC8vIEhBQ0s6XHJcbiAgICAkKFwiI29uZVN0ZXBcIikuY2xpY2soc2VsZi5hbmltT25lU3RlcCk7XHJcbiAgICAkKFwiI3N0YXJ0XCIpLmNsaWNrKHNlbGYuYW5pbVJlcGVhdCk7XHJcbiAgICB0aGlzLmJpbmRDbGVhckFsbCgpXHJcbiAgICB0aGlzLmNoZWNrU2F2ZSgpXHJcbiAgICB0aGlzLmJpbmRBbGxTYXZlTG9hZEJ1dHRvbnMoKVxyXG4gIH1cclxuICBjbGVhclN2Zygpe1xyXG4gICAgc2VsZi5tYW5pcHVsYXRvci5yZW1vdmVBbGxPYmplY3QoKVxyXG4gIH1cclxuICBjaGVja1NhdmUoKXtcclxuICAgIHZhciBsaXN0ZVNhdmU9dGhpcy5zYXZlci5jaGVja1NhdmUoKVxyXG4gICAgY29uc29sZS5sb2cobGlzdGVTYXZlKTtcclxuICAgICQoXCIuc2F2ZVwiKS5hZGRDbGFzcygnZW1wdHknKVxyXG4gICAgJChcIi5sb2FkXCIpLmFkZENsYXNzKCdub3RTYXZlJylcclxuICAgICQoXCIuc3VwcmVcIikuYWRkQ2xhc3MoJ25vdFNhdmUnKVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZVNhdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChcIi5zYXZlW2RhdGEtaWQ9XCIrbGlzdGVTYXZlW2ldK1wiXVwiKS5yZW1vdmVDbGFzcygnZW1wdHknKVxyXG4gICAgICAkKFwiLmxvYWRbZGF0YS1pZD1cIitsaXN0ZVNhdmVbaV0rXCJdXCIpLnJlbW92ZUNsYXNzKCdub3RTYXZlJylcclxuICAgICAgJChcIi5zdXByZVtkYXRhLWlkPVwiK2xpc3RlU2F2ZVtpXStcIl1cIikucmVtb3ZlQ2xhc3MoJ25vdFNhdmUnKVxyXG4gICAgfVxyXG4gIH1cclxuICBiaW5kQWxsU2F2ZUxvYWRCdXR0b25zKCl7XHJcbiAgICBzZWxmPXRoaXNcclxuICAgICQoZnVuY3Rpb24oKXtcclxuICAgICAgY29uc29sZS5sb2coJ2JpbmQgQWxsJyk7XHJcbiAgICAgIHNlbGYuYmluZFNhdmVCdXR0b24oKVxyXG4gICAgICBzZWxmLmJpbmRMb2FkQnV0dG9uKClcclxuICAgICAgc2VsZi5iaW5kU3VwcmVCdXR0b24oKVxyXG4gICAgICBzZWxmLmJpbmRDbGVhckFsbCgpXHJcbiAgICB9KVxyXG5cclxuICB9XHJcbiAgY2hhbmdlQnV0dG9uKGlkKXtcclxuICAgIGNvbnNvbGUubG9nKCd0b29nbGUnKTtcclxuICAgICQoXCIuc2F2ZVtkYXRhLWlkPVwiK2lkK1wiXVwiKS50b2dnbGVDbGFzcygnZW1wdHknKVxyXG4gICAgJChcIi5sb2FkW2RhdGEtaWQ9XCIraWQrXCJdXCIpLnRvZ2dsZUNsYXNzKCdub3RTYXZlJylcclxuICAgICQoXCIuc3VwcmVbZGF0YS1pZD1cIitpZCtcIl1cIikudG9nZ2xlQ2xhc3MoJ25vdFNhdmUnKVxyXG4gIH1cclxuICB1bmJpbmRBbGxTYXZlTG9hZEJ1dHRvbigpe1xyXG4gICAgdGhpcy51bmJpbmRMb2FkQnV0dG9uKClcclxuICAgIHRoaXMudW5iaW5kU2F2ZUJ1dHRvbigpXHJcbiAgICB0aGlzLnVuYmluZFN1cHJlQnV0dG9uKClcclxuICAgIHRoaXMudW5iaW5kQ2xlYXJBbGwoKVxyXG4gIH1cclxuICBiaW5kQ2xlYXJBbGwoKXtcclxuICAgICQoXCIjY2xlYXJTdmdcIikuY2xpY2soc2VsZi5jbGVhclN2Zyk7XHJcbiAgfVxyXG4gIHVuYmluZENsZWFyQWxsKCl7XHJcbiAgICAkKFwiI2NsZWFyU3ZnXCIpLnVuYmluZCgnY2xpY2snKVxyXG4gIH1cclxuICB1bmJpbmRMb2FkQnV0dG9uKCl7XHJcbiAgICAkKFwiLmxvYWRcIikudW5iaW5kKCdjbGljaycpXHJcbiAgfVxyXG4gIHVuYmluZFNhdmVCdXR0b24oKXtcclxuICAgICQoXCIuc2F2ZVwiKS51bmJpbmQoJ2NsaWNrJylcclxuICB9XHJcbiAgdW5iaW5kU3VwcmVCdXR0b24oKXtcclxuICAgICQoXCIuc3VwcmVcIikudW5iaW5kKCdjbGljaycpXHJcbiAgfVxyXG4gIGJpbmRTYXZlQnV0dG9uKCl7XHJcbiAgICB0aGlzLnVuYmluZFNhdmVCdXR0b24oKVxyXG4gICAgJChcIi5zYXZlLmVtcHR5XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2VsZi5zYXZlKCQodGhpcykuYXR0cignZGF0YS1pZCcpKVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGJpbmRMb2FkQnV0dG9uKCl7XHJcbiAgICB0aGlzLnVuYmluZExvYWRCdXR0b24oKVxyXG4gICAgJChcIi5sb2FkOm5vdCgubm90U2F2ZSlcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBzZWxmLmxvYWQoJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgYmluZFN1cHJlQnV0dG9uKCl7XHJcbiAgICB0aGlzLnVuYmluZFN1cHJlQnV0dG9uKClcclxuICAgICQoXCIuc3VwcmU6bm90KC5ub3RTYXZlKVwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHNlbGYuc3VwcmUoJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmUoc2F2ZU5hbWUpe1xyXG4gICAgdGhpcy5zYXZlci5zYXZlKHNhdmVOYW1lKVxyXG4gICAgdGhpcy5jaGFuZ2VCdXR0b24oc2F2ZU5hbWUpXHJcbiAgICB0aGlzLmJpbmRBbGxTYXZlTG9hZEJ1dHRvbnMoKVxyXG4gIH1cclxuICBsb2FkKHNhdmVOYW1lKXtcclxuICAgIHRoaXMuc2F2ZXIubG9hZChzYXZlTmFtZSlcclxuICB9XHJcbiAgc3VwcmUoc2F2ZU5hbWUpe1xyXG4gICAgdGhpcy5zYXZlci5jbGVhclNhdmUoc2F2ZU5hbWUpXHJcbiAgICB0aGlzLmNoYW5nZUJ1dHRvbihzYXZlTmFtZSlcclxuICAgIHRoaXMuYmluZEFsbFNhdmVMb2FkQnV0dG9ucygpXHJcbiAgfVxyXG4gIGJpbmRPbkNMaWNrKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJiaW5kT25DTGlja1wiKTtcclxuICAgIHZhciBzZWxmID0gdGhpcyAvLyBIQUNLOlxyXG4gICAgJChcIiNmcmFtZVwiKS5tb3VzZWRvd24oZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImJpbmRcIik7XHJcbiAgICAgIHNlbGYub25DbGljayhldmVudClcclxuICAgIH0pO1xyXG4gIH1cclxuICB1bmJpbmRPbkNMaWNrKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcInVuYmluZE9uQ0xpY2tcIik7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICQoXCIjZnJhbWVcIikub2ZmKFwibW91c2Vkb3duXCIpO1xyXG5cclxuICB9XHJcbiAgZ2V0UG9zTW91c2UoZSkge1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZScpXHJcbiAgICB2YXIgb2Zmc2V0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcik7XHJcbiAgICB2YXIgY3Vyc29yWCA9IGUuY2xpZW50WCAtIG9mZnNldC5sZWZ0IC0gcGFyc2VJbnQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCk7XHJcbiAgICB2YXIgY3Vyc29yWSA9IGUuY2xpZW50WSAtIG9mZnNldC50b3AgLSBwYXJzZUludChzdHlsZXMuYm9yZGVyVG9wV2lkdGgpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhjdXJzb3JYLCBjdXJzb3JZKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IGN1cnNvclgsXHJcbiAgICAgIHk6IGN1cnNvcllcclxuICAgIH1cclxuICB9XHJcbiAgb25DbGljayhldmVudCkge1xyXG4gICAgdmFyIHBvc01vdXNlID0gdGhpcy5nZXRQb3NNb3VzZShldmVudCk7XHJcbiAgICBjb25zb2xlLmxvZyhwb3NNb3VzZSk7XHJcbiAgICB2YXIgcG9zID0gdGhpcy5tYW5pcHVsYXRvci5jYWxjUG9zKHBvc01vdXNlKVxyXG4gICAgdGhpcy5tYW5pcHVsYXRvci5wbGFjZU9iamVjdCh0aGlzLm1hbmlwdWxhdG9yLnNlbGVjdGVkLCBwb3MpXHJcbiAgfVxyXG4gIGFuaW1SZXBlYXQoKXtcclxuICAgIHNlbGYudW5iaW5kT25DTGljaygpXHJcbiAgICAkKFwiI3N0YXJ0XCIpLnVuYmluZCgnY2xpY2snKVxyXG4gICAgJChcIiNvbmVTdGVwXCIpLnVuYmluZCgnY2xpY2snKVxyXG4gICAgc2VsZi51bmJpbmRBbGxTYXZlTG9hZEJ1dHRvbigpXHJcbiAgICAkKFwiI3N0b3BcIikuY2xpY2soc2VsZi5zdG9wQW5pbSk7XHJcbiAgICBzZWxmLmFuaW0oKVxyXG4gICAgc2VsZi5sb29wID1zZXRJbnRlcnZhbChzZWxmLmFuaW0sNTUwKVxyXG4gIH1cclxuICBhbmltT25lU3RlcCgpe1xyXG4gICAgJChcIiNvbmVTdGVwXCIpLnVuYmluZCgnY2xpY2snKVxyXG4gICAgc2VsZi51bmJpbmRBbGxTYXZlTG9hZEJ1dHRvbigpXHJcbiAgICBzZWxmLmFuaW0oKVxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKFwiI29uZVN0ZXBcIikuY2xpY2soc2VsZi5hbmltT25lU3RlcCk7XHJcbiAgICAgIHNlbGYuYmluZEFsbFNhdmVMb2FkQnV0dG9ucygpXHJcbiAgICB9LDUwMClcclxuXHJcbiAgfVxyXG4gIHN0b3BBbmltKCl7XHJcbiAgICBzZWxmLmJpbmRPbkNMaWNrKClcclxuICAgICQoXCIjc3RvcFwiKS51bmJpbmQoJ2NsaWNrJylcclxuICAgIGNsZWFySW50ZXJ2YWwoc2VsZi5sb29wKVxyXG4gICAgJChcIiNzdGFydFwiKS5jbGljayhzZWxmLmFuaW1SZXBlYXQpO1xyXG4gICAgJChcIiNvbmVTdGVwXCIpLmNsaWNrKHNlbGYuYW5pbU9uZVN0ZXApXHJcbiAgICBzZWxmLmJpbmRBbGxTYXZlTG9hZEJ1dHRvbnMoKVxyXG4gIH1cclxuICBhbmltKCkge1xyXG4gICAgc2VsZi5tYW5pcHVsYXRvci5ydW4oKVxyXG4gIH1cclxuICBpbml0U2VsZWN0b3IoKSB7XHJcbiAgICAkKCcuc2VsZWN0b3JJdGVtOmZpcnN0JykuYWRkQ2xhc3MoJ3NlbGVjdGVkJylcclxuICAgIHRoaXMubWFuaXB1bGF0b3Iuc2VsZWN0ZWQgPSB0aGlzLm1hbmlwdWxhdG9yLmxpc3RlQ2xhc3NbMF1cclxuICAgIHZhciBtYW5pcHVsYXRvciA9IHRoaXMubWFuaXB1bGF0b3IgLy8gSEFDSzpcclxuICAgICQoJy5zZWxlY3Rvckl0ZW0nKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gICAgICBtYW5pcHVsYXRvci5jaGFuZ2VTZWxlY3Rvcih0aGlzKVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGJpbmRIb3ZlcihlKSB7XHJcbiAgICBzZWxmID0gdGhpc1xyXG4gICAgJCgnI2ZyYW1lJykuaG92ZXIoZnVuY3Rpb24oZSkge1xyXG4gICAgICAkKHRoaXMpLm1vdXNlbW92ZShmdW5jdGlvbihldmVudDIpIHtcclxuICAgICAgICB2YXIgcG9zTW91c2UgPSBzZWxmLmdldFBvc01vdXNlKGV2ZW50Mik7XHJcbiAgICAgICAgdmFyIHBvcyA9IHNlbGYubWFuaXB1bGF0b3IuY2FsY1Bvcyhwb3NNb3VzZSlcclxuICAgICAgICBpZiAoc2VsZi5hY3R1YWxQb3NNb3VzZSA9PSBudWxsIHx8ICFwb3MuaXNFcXVhbChzZWxmLmFjdHVhbFBvc01vdXNlKSkge1xyXG4gICAgICAgICAgc2VsZi5hY3R1YWxQb3NNb3VzZSA9IHBvcztcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlbWVudCBjYXNlXCIpO1xyXG4gICAgICAgICAgc2VsZi5tYW5pcHVsYXRvci5wbGFjZU9iamVjdChzZWxmLm1hbmlwdWxhdG9yLnNlbGVjdGVkLCBzZWxmLmFjdHVhbFBvc01vdXNlLG51bGwsdHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgJChkb2N1bWVudCkudW5iaW5kKCdrZXlwcmVzcycpXHJcbiAgICAgICAgJChkb2N1bWVudCkua2V5cHJlc3MoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgdmFyIHRvdWNoZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0b3VjaGUpO1xyXG4gICAgICAgICAgdmFyIHBvc01vdXNlID0gc2VsZi5nZXRQb3NNb3VzZShldmVudDIpO1xyXG4gICAgICAgICAgdmFyIHBvcyA9IHNlbGYubWFuaXB1bGF0b3IuY2FsY1Bvcyhwb3NNb3VzZSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHBvcyk7XHJcbiAgICAgICAgICBpZiAodG91Y2hlID09ICd0Jykge1xyXG4gICAgICAgICAgICBzZWxmLm1hbmlwdWxhdG9yLmNoYW5nZVVybERlZihwb3MpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmICh0b3VjaGUgPT0gJ3InKSB7XHJcbiAgICAgICAgICAgIHNlbGYubWFuaXB1bGF0b3Iucm90YXRlT2JqZWN0KHBvcylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKHRvdWNoZSA9PSAneCcpIHtcclxuICAgICAgICAgICAgc2VsZi5tYW5pcHVsYXRvci5yZW1vdmVPYmplY3RPbkNsaWNrKHBvcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgJChkb2N1bWVudCkudW5iaW5kKCdtb3VzZW1vdmUnKVxyXG4gICAgICAkKGRvY3VtZW50KS51bmJpbmQoJ2tleXByZXNzJylcclxuICAgICAgJCgnaDEnKS5jc3MoJ2JhY2tncm91bmQnLCAnJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCJjb25zb2xlLmxvZygnY2xhc3MgR3JpbGxlIGxvYWQnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWxsZSB7XHJcbiAgLy8gY3LDqWVyIGxhIGdyaWxsZSBkZSBqZXVcclxuICBjb25zdHJ1Y3RvcihuYnJDYXNlV2lkdGg9JzEwJyxuYnJDYXNlSGVpZ2h0PVwiMTBcIikge1xyXG4gICAgdGhpcy53aWR0aD0kKFwiI3N2Z1wiKS53aWR0aCgpXHJcbiAgICB0aGlzLmhlaWdodD0kKFwiI3N2Z1wiKS5oZWlnaHQoKVxyXG4gICAgdmFyIGhlaWdodCA9JChcInN2Z1wiKS5oZWlnaHQoKVxyXG4gICAgdmFyIGdyb3VwPSQoXCI8ZyBpZD0nZ3JpbGxlJz48L2c+XCIpXHJcbiAgICB0aGlzLm5ickNhc2VXaWR0aD1uYnJDYXNlV2lkdGhcclxuICAgIHRoaXMubmJyQ2FzZUhlaWdodD1uYnJDYXNlSGVpZ2h0XHJcbiAgICB2YXIgY2FzZVdpZHRoPXRoaXMud2lkdGgvbmJyQ2FzZVdpZHRoO1xyXG4gICAgdGhpcy5jYXNlV2lkdGg9Y2FzZVdpZHRoXHJcbiAgICB2YXIgY2FzZUhlaWdodD10aGlzLmhlaWdodC9uYnJDYXNlSGVpZ2h0O1xyXG4gICAgdGhpcy5jYXNlSGVpZ2h0PWNhc2VIZWlnaHRcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9dGhpcy5uYnJDYXNlSGVpZ2h0OyBpKyspIHtcclxuICAgICAgICB2YXIgcG9zU3RhcnQ9e307XHJcbiAgICAgICAgcG9zU3RhcnQueD0wXHJcbiAgICAgICAgcG9zU3RhcnQueT1pKnRoaXMuY2FzZUhlaWdodFxyXG4gICAgICAgIHZhciBwb3NFbmQ9e307XHJcbiAgICAgICAgcG9zRW5kLng9dGhpcy53aWR0aFxyXG4gICAgICAgIHBvc0VuZC55PWkqdGhpcy5jYXNlSGVpZ2h0XHJcbiAgICAgICAgdmFyIHN2ZyA9dGhpcy5zdmdMaW5lKHBvc1N0YXJ0LHBvc0VuZClcclxuICAgICAgICBncm91cC5hcHBlbmQoc3ZnKVxyXG5cclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9dGhpcy5uYnJDYXNlV2lkdGg7IGkrKykge1xyXG4gICAgICAgIHZhciBwb3NTdGFydD17fTtcclxuICAgICAgICBwb3NTdGFydC54PWkqdGhpcy5jYXNlV2lkdGhcclxuICAgICAgICBwb3NTdGFydC55PTBcclxuICAgICAgICB2YXIgcG9zRW5kPXt9O1xyXG4gICAgICAgIHBvc0VuZC54PWkqdGhpcy5jYXNlV2lkdGhcclxuICAgICAgICBwb3NFbmQueT10aGlzLmhlaWdodFxyXG4gICAgICAgIHZhciBzdmcgPXRoaXMuc3ZnTGluZShwb3NTdGFydCxwb3NFbmQpXHJcbiAgICAgICAgZ3JvdXAuYXBwZW5kKHN2ZylcclxuICAgIH1cclxuICAgICQoXCJzdmdcIikuYXBwZW5kKGdyb3VwKVxyXG4gIH1cclxuICBzdmdMaW5lKHBvc1N0YXJ0LHBvc0VuZCxjb2xvcj0nYmxhY2snLHdpZHRoPScyJyl7XHJcbiAgICByZXR1cm4gJzxsaW5lIHgxPScrcG9zU3RhcnQueCsnIHkxPScrcG9zU3RhcnQueSsnIHgyPScrcG9zRW5kLngrJyB5Mj0nK3Bvc0VuZC55Kycgc3R5bGU9XCJzdHJva2U6Jytjb2xvcisnO3N0cm9rZS13aWR0aDonK3dpZHRoKydcIiAvPidcclxuICB9XHJcbn1cclxuIiwiY29uc29sZS5sb2coJ2NsYXNzIG1hbmlwdWxhdG9yIGxvYWQnKTtcclxuaW1wb3J0IEdyaWxsZSBmcm9tJy4vR3JpbGxlLmNsYXNzLmpzJztcclxuaW1wb3J0IEV2ZW50Q29udHJvbGxlciBmcm9tJy4vRXZlbnRDb250cm9sbGVyLmNsYXNzLmpzJztcclxuaW1wb3J0IFNhdmVNYW5pcHVsYXRvciBmcm9tJy4vU2F2ZU1hbmlwdWxhdG9yLmNsYXNzLmpzJztcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwiLi91dGlsLmpzXCI7XHJcbmltcG9ydCBUYXBpcyBmcm9tICcuL1RhcGlzLmNsYXNzLmpzJztcclxuaW1wb3J0IE9yZSBmcm9tICcuL09yZS5jbGFzcy5qcyc7XHJcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL1Bvc2l0aW9uLmNsYXNzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmlwdWxhdG9yIHtcclxuICAvLyB2YSBtYW5pcHVsZXIgbGVzIG9iamVjdHMgY29tbWUgbGVzIHRhcGlzIGVzdCBsZXMgbWluZXJhaXNcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGxpc3RlQ2xhc3MsIGdyaWxsZSkge1xyXG4gICAgdGhpcy5saXN0ZU9iamVjdCA9IFtdO1xyXG4gICAgdGhpcy5saXN0ZUNsYXNzID0gbGlzdGVDbGFzcztcclxuICAgIHRoaXMud3JpdGVEZWYoKVxyXG4gICAgdGhpcy5ncmlsbGUgPSBuZXcgR3JpbGxlKCk7XHJcbiAgICB0aGlzLnJlZ3JvdXAoKVxyXG4gICAgdGhpcy5hZGRTZWxlY3RvcigpXHJcbiAgICB0aGlzLnNhdmVyID0gbmV3IFNhdmVNYW5pcHVsYXRvcih0aGlzKVxyXG4gICAgdGhpcy5ldmVudENvbnRyb2xsZXIgPSBuZXcgRXZlbnRDb250cm9sbGVyKHRoaXMsIHRoaXMuc2F2ZXIpXHJcbiAgICB0aGlzLmxpc3RlT2JqZWN0Q2hhbmdlID0gW11cclxuICAgIC8vdGhpcy5hZmZMaXN0ZU9iamVjdCgpXHJcbiAgfVxyXG4gIGFkZFNlbGVjdG9yKCkge1xyXG4gICAgLy8gYWpvdXRlIGxlcyBib3V0b24gw6AgZHJvaXRlIHBvdXIgc2VsZWN0aW9ubmVyIGxlIHR5cGUgZGUgZmlndXJlIMOgIHBvc2VyXHJcbiAgICAkKFwiPGRpdiBpZD0nc2VsZWN0b3InPiA8L2Rpdj5cIikuaW5zZXJ0QWZ0ZXIoXCIjY29udGFpbmVyRnJhbWVDb250cm9sXCIpXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVDbGFzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5saXN0ZUNsYXNzW2ldLmdldENsYXNzTmFtZSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjbGFzc05hbWUpO1xyXG4gICAgICAkKFwiI3NlbGVjdG9yXCIpLmFwcGVuZCgoXCI8YnV0dG9uICBjbGFzcz0nc2VsZWN0b3JJdGVtJyB0eXBlPSdidXR0b24nID5cIiArIGNsYXNzTmFtZSArIFwiPC9idXR0b24+XCIpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY2hhbmdlU2VsZWN0b3Ioc2VsZWN0ZWQpIHtcclxuICAgIC8vIGNoYW5nZSBsZSBib3V0b24gw6AgZHJvaXRlIHF1aSBlc3Qgc2VsZWN0aW9uZXJcclxuICAgICQoJy5zZWxlY3Rvckl0ZW0nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKVxyXG4gICAgJChzZWxlY3RlZCkuYWRkQ2xhc3MoJ3NlbGVjdGVkJylcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZUNsYXNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpc3RlQ2xhc3NbaV0uZ2V0Q2xhc3NOYW1lKCkgPT0gJChzZWxlY3RlZCkuaHRtbCgpKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMubGlzdGVDbGFzc1tpXVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmVncm91cCgpIHtcclxuICAgIC8vIGNyw6llciBsZXMgZGlmZXJlbnQgZ3JvdXAgZGUgZmlndXJlIGF1IGRlc3N1cy9lbiBkZXNzb3VzL2ZhbnRvbWVcclxuICAgIHZhciBncm91cCA9ICQoXCI8ZyBpZD0nZmlndXJlR3JwJz48L2c+XCIpXHJcbiAgICAkKFwiI3N2Z1wiKS5hcHBlbmQoZ3JvdXApO1xyXG4gICAgdmFyIHN1Ykdyb3VwMSA9ICQoXCI8ZyBpZD0nZmlndXJlR3JwRG93bic+PC9nPlwiKVxyXG4gICAgdmFyIHN1Ykdyb3VwMiA9ICQoXCI8ZyBpZD0nZmlndXJlR3JwVXAnPjwvZz5cIilcclxuICAgIHZhciBzdWJHcm91cDMgPSAkKFwiPGcgaWQ9J2ZpZ3VyZUdycEdob3N0Jz48L2c+XCIpXHJcbiAgICBncm91cC5hcHBlbmQoc3ViR3JvdXAxKVxyXG4gICAgZ3JvdXAuYXBwZW5kKHN1Ykdyb3VwMilcclxuICAgIGdyb3VwLmFwcGVuZChzdWJHcm91cDMpXHJcbiAgICAkKFwiI3N2Z1wiKS5hcHBlbmQoZ3JvdXApO1xyXG4gICAgdmFyIGdyb3VwID0gJChcIjxnIGlkPSdhbmltYXRpb25HcnAnPjwvZz5cIilcclxuICAgICQoXCIjc3ZnXCIpLmFwcGVuZChncm91cCk7XHJcbiAgfVxyXG4gIHJlc2V0KGxpc3RlT2JqZWN0TG9hZCkge1xyXG4gICAgLy8gZW5sZXZlIHRvdXRlIGxlcyBmaWd1cmVzXHJcbiAgICAkKFwiI2ZpZ3VyZUdycFVwXCIpLmVtcHR5KClcclxuICAgICQoXCIjZmlndXJlR3JwRG93blwiKS5lbXB0eSgpXHJcbiAgICB0aGlzLmxpc3RlT2JqZWN0ID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlT2JqZWN0TG9hZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGxpc3RlT2JqZWN0TG9hZFtpXS5jbGFzc2UpXHJcbiAgICAgIHZhciBjbGFzc2U7XHJcbiAgICAgIGlmIChsaXN0ZU9iamVjdExvYWRbaV0uY2xhc3NlID09ICdUYXBpcycpIHtcclxuICAgICAgICBjbGFzc2UgPSBUYXBpc1xyXG4gICAgICAgIHRoaXMucGxhY2VPYmplY3QoY2xhc3NlLCBsaXN0ZU9iamVjdExvYWRbaV0ucG9zKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cobGlzdGVPYmplY3RMb2FkW2ldLnR5cGUpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlVXJsRGVmKGxpc3RlT2JqZWN0TG9hZFtpXS5wb3MsIGxpc3RlT2JqZWN0TG9hZFtpXS50eXBlKVxyXG5cclxuICAgICAgfSBlbHNlIGlmIChsaXN0ZU9iamVjdExvYWRbaV0uY2xhc3NlID09ICdPcmUnKSB7XHJcbiAgICAgICAgY2xhc3NlID0gT3JlXHJcbiAgICAgICAgdGhpcy5wbGFjZU9iamVjdChjbGFzc2UsIGxpc3RlT2JqZWN0TG9hZFtpXS5wb3MpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhbGNQb3MocG9zTW91c2UpIHtcclxuICAgIHZhciB4ID0gTWF0aC5mbG9vcihwb3NNb3VzZS54IC8gdGhpcy5ncmlsbGUuY2FzZVdpZHRoKTtcclxuICAgIHZhciB5ID0gTWF0aC5mbG9vcihwb3NNb3VzZS55IC8gdGhpcy5ncmlsbGUuY2FzZUhlaWdodCk7XHJcbiAgICB4ID0gTWF0aC5mbG9vcih4ICogdGhpcy5ncmlsbGUuY2FzZVdpZHRoKVxyXG4gICAgeSA9IE1hdGguZmxvb3IoeSAqIHRoaXMuZ3JpbGxlLmNhc2VIZWlnaHQpXHJcbiAgICB2YXIgZGlyZWN0aW9uID0gJzAnXHJcbiAgICB2YXIgcG9zID0gbmV3IFBvc2l0aW9uKHgudG9TdHJpbmcoKSwgeS50b1N0cmluZygpLCBkaXJlY3Rpb24pO1xyXG4gICAgcmV0dXJuIHBvcztcclxuICB9XHJcbiAgcGxhY2VHaG9zdChvYmplY3Qpe1xyXG4gICAgJChcIiNmaWd1cmVHcnBHaG9zdFwiKS5lbXB0eSgpXHJcbiAgICB2YXIgc3ZnID0gb2JqZWN0LmdldFN2ZygpO1xyXG4gICAgdmFyIGlkID0gb2JqZWN0LmdldElkKCk7XHJcbiAgICAkKFwiI2ZpZ3VyZUdycEdob3N0XCIpLmFwcGVuZChzdmcpO1xyXG4gICAgJChcIiNvYmplY3QtXCIraWQpLmF0dHIoJ2ZpbGwtb3BhY2l0eScsJzAuNScpO1xyXG4gIH1cclxuICBwbGFjZU9iamVjdChjbGFzc2VzLCBwb3MsdHlwZT1udWxsLGdob3N0PWZhbHNlKSB7XHJcbiAgICB2YXIgb2JqZWN0T25QbGFjZSA9IHRoaXMuZmluZEFsbE9iamVjdChwb3MpXHJcbiAgICBpZiAob2JqZWN0T25QbGFjZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICBpZiAodHlwZSE9bnVsbCAmJiBjbGFzc2VzLmdldENsYXNzTmFtZSgpPT0nVGFwaXMnKSB7XHJcbiAgICAgICAgdmFyIG9iamVjdCA9IG5ldyBjbGFzc2VzKHBvcyx0eXBlKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBvYmplY3QgPSBuZXcgY2xhc3Nlcyhwb3MpXHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhvYmplY3QpO1xyXG4gICAgICBpZiAoZ2hvc3Q9PXRydWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9iamVjdCA6XCIrb2JqZWN0LmdldElkKCkpO1xyXG4gICAgICAgIHRoaXMucGxhY2VHaG9zdChvYmplY3QpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZE9iamVjdChvYmplY3QpO1xyXG4gICAgICB0aGlzLndyaXRlT2JqZWN0KG9iamVjdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgZWxzZSBpZiAoZ2hvc3Q9PWZhbHNlKXtcclxuICAgICAgdmFyIGFscmVhZHkgPSBmYWxzZTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RPblBsYWNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIG9iamVjdCA9IHRoaXMubGlzdGVPYmplY3Rbb2JqZWN0T25QbGFjZVtpXV1cclxuICAgICAgICBpZiAob2JqZWN0LmdldENsYXNzKCkuZ2V0Q2xhc3NOYW1lKCkgPT0gY2xhc3Nlcy5nZXRDbGFzc05hbWUoKSkge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmplY3QuZ2V0Q2xhc3MoKS5nZXRDbGFzc05hbWUoKSxjbGFzc2VzLmdldENsYXNzTmFtZSgpKTtcclxuICAgICAgICAgIGFscmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIWFscmVhZHkgJiYgZ2hvc3Q9PWZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHR5cGUhPW51bGwgJiYgY2xhc3Nlcy5nZXRDbGFzc05hbWUoKT09J1RhcGlzJykge1xyXG4gICAgICAgICAgdmFyIG9iamVjdCA9IG5ldyBjbGFzc2VzKHBvcyx0eXBlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHZhciBvYmplY3QgPSBuZXcgY2xhc3Nlcyhwb3MpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cob2JqZWN0KTtcclxuICAgICAgICB0aGlzLmFkZE9iamVjdChvYmplY3QpXHJcbiAgICAgICAgdGhpcy53cml0ZU9iamVjdChvYmplY3QpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHV0aWwucmVmcmVzaChcIiNmaWd1cmVHcnBcIilcclxuICB9XHJcbiAgd3JpdGVPYmplY3Qob2JqZWN0KSB7XHJcbiAgICAvLyBham91dGUgbGEgZmlndXJlIGRhbnMgbGUgRE9NXHJcbiAgICB2YXIgY2xhc3NlID0gb2JqZWN0LmdldENsYXNzKCkuZ2V0Q2xhc3NOYW1lKClcclxuICAgIHZhciBzdmcgPSBvYmplY3QuZ2V0U3ZnKCk7XHJcbiAgICBpZiAoY2xhc3NlID09ICdUYXBpcycpIHtcclxuICAgICAgJChcIiNmaWd1cmVHcnBEb3duXCIpLmFwcGVuZChzdmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIiNmaWd1cmVHcnBVcFwiKS5hcHBlbmQoc3ZnKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIHdyaXRlQWxsKCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlT2JqZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMud3JpdGVPYmplY3QodGhpcy5saXN0ZU9iamVjdFtpXSk7XHJcbiAgICB9XHJcbiAgICB1dGlsLnJlZnJlc2goKVxyXG4gIH1cclxuICBhbmltQWxsKCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlQ2xhc3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmxpc3RlQ2xhc3NbaV0uZ2V0QW5pbWF0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMubGlzdGVDbGFzc1tpXS5nZXRBbmltYXRpb24oKTtcclxuICAgICAgICBpZiAodHlwZW9mIGFuaW1hdGlvbiA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmltYXRpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJChcIiNhbmltYXRpb25HcnBcIikuYXBwZW5kKGFuaW1hdGlvbltpXSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJChcIiNhbmltYXRpb25HcnBcIikuYXBwZW5kKGFuaW1hdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhbGNEaXJlY3Rpb24odHlwZSwgZGlyZWN0aW9uKSB7XHJcbiAgICBpZiAodHlwZSA9PSAnZm9yd2FyZCcpIHtcclxuICAgICAgcmV0dXJuIGRpcmVjdGlvblxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT0gJ2xlZnQnKSB7XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT0gMCkge1xyXG4gICAgICAgIHJldHVybiAzXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiAtIDFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT0gJ3JpZ2h0Jykge1xyXG4gICAgICByZXR1cm4gKGRpcmVjdGlvbiArIDEpICUgNFxyXG4gICAgfVxyXG4gIH1cclxuICBjYWxjTW92ZShkaXJlY3Rpb24pIHtcclxuICAgIGlmIChkaXJlY3Rpb24gPT0gMCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF4ZTogJ3knLFxyXG4gICAgICAgIHNpZ25lOiAnLSdcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF4ZTogJ3gnLFxyXG4gICAgICAgIHNpZ25lOiAnKydcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMikge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF4ZTogJ3knLFxyXG4gICAgICAgIHNpZ25lOiAnKydcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBheGU6ICd4JyxcclxuICAgICAgICBzaWduZTogJy0nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY2hlY2tDb2xsaXNpb24ocG9zLCBkaXJlY3Rpb24pIHtcclxuICAgIHZhciBkZXN0aW5hdGlvbiA9IHt9XHJcbiAgICB2YXIgY2FzZUhlaWdodCA9IHBhcnNlSW50KHRoaXMuZ3JpbGxlLmNhc2VIZWlnaHQpXHJcbiAgICB2YXIgY2FzZVdpZHRoID0gcGFyc2VJbnQodGhpcy5ncmlsbGUuY2FzZVdpZHRoKVxyXG4gICAgdmFyIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2cocG9zLngpO1xyXG4gICAgY29uc29sZS5sb2cocG9zLnkpO1xyXG4gICAgY29uc29sZS5sb2coJ2RpcjonICsgZGlyZWN0aW9uKTtcclxuICAgIGlmIChkaXJlY3Rpb24gPT0gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZGlyZWN0aW9uIHByw6l2dTonICsgMCk7XHJcbiAgICAgIGRlc3RpbmF0aW9uLnggPSBwb3MueDtcclxuICAgICAgZGVzdGluYXRpb24ueSA9IHBhcnNlSW50KHBvcy55KSAtIGNhc2VIZWlnaHRcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2RpcmVjdGlvbiBwcsOpdnU6JyArIDEpO1xyXG4gICAgICBkZXN0aW5hdGlvbi54ID0gcGFyc2VJbnQocG9zLngpICsgY2FzZVdpZHRoO1xyXG4gICAgICBkZXN0aW5hdGlvbi55ID0gcG9zLnlcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IDIpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2RpcmVjdGlvbiBwcsOpdnU6JyArIDIpO1xyXG4gICAgICBkZXN0aW5hdGlvbi54ID0gcG9zLng7XHJcbiAgICAgIGRlc3RpbmF0aW9uLnkgPSBwYXJzZUludChwb3MueSkgKyBjYXNlSGVpZ2h0XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnZGlyZWN0aW9uIHByw6l2dTonICsgMyk7XHJcbiAgICAgIGRlc3RpbmF0aW9uLnggPSBwYXJzZUludChwb3MueCkgLSBjYXNlV2lkdGg7XHJcbiAgICAgIGRlc3RpbmF0aW9uLnkgPSBwb3MueVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGVzdGluYXRpb24pO1xyXG4gICAgdmFyIGxpc3RlT2JqZWN0RmluZCA9IHRoaXMuZmluZEFsbE9iamVjdChkZXN0aW5hdGlvbilcclxuICAgIGNvbnNvbGUubG9nKGxpc3RlT2JqZWN0RmluZCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlT2JqZWN0RmluZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgY2xhc3NlcyA9IHRoaXMubGlzdGVPYmplY3RbbGlzdGVPYmplY3RGaW5kW2ldXS5nZXRDbGFzc05hbWVGcm9tT2JqZWN0KClcclxuICAgICAgaWYgKGNsYXNzZXMgPT0gJ09yZScpIHtcclxuICAgICAgICBjb2xsaXNpb24gPSB0cnVlXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbGxpc2lvblxyXG4gIH1cclxuICBtb3ZlQWxsKCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlT2JqZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5saXN0ZU9iamVjdFtpXS5nZXRNb3ZlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdmFyIHRhcGlzVW5kZXIgPSB0aGlzLmZpbmRPYmplY3QodGhpcy5saXN0ZU9iamVjdFtpXS5wb3MsIE9yZSlcclxuXHJcbiAgICAgICAgaWYgKHRhcGlzVW5kZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3RhcGlzVW5kZXIgJyArIHRhcGlzVW5kZXIuZ2V0SWQoKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0YXBpc1VuZGVyLnR5cGUpO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0YXBpc1VuZGVyIGRpcmVjdGlvbiAnICsgdGFwaXNVbmRlci5wb3MuZGlyZWN0aW9uKTtcclxuICAgICAgICAgIHZhciBtb3ZlRGlyZWN0aW9uID0gdGhpcy5jYWxjRGlyZWN0aW9uKHRhcGlzVW5kZXIudHlwZSxcclxuICAgICAgICAgICAgdGFwaXNVbmRlci5wb3MuZGlyZWN0aW9uKVxyXG4gICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IHRoaXMuY2hlY2tDb2xsaXNpb24odGhpcy5saXN0ZU9iamVjdFtpXS5wb3MsIG1vdmVEaXJlY3Rpb24pXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvbGxpc2lvbik7XHJcbiAgICAgICAgICBpZiAoIWNvbGxpc2lvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvbiBtb3ZlIFwiICsgbW92ZURpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSB0aGlzLmNhbGNNb3ZlKG1vdmVEaXJlY3Rpb24pXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtb3ZlID0gdGhpcy5nZXRNb3ZlKHRoaXMubGlzdGVPYmplY3RbaV0sZGlyZWN0aW9uLCB0aGlzLmdyaWxsZS5jYXNlV2lkdGgsIHRoaXMuZ3JpbGxlLmNhc2VIZWlnaHQpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobW92ZSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5saXN0ZU9iamVjdENoYW5nZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vdmUucG9zRmluYWwpO1xyXG4gICAgICAgICAgICB2YXIgYWxyZWFkeVBsYW5uZWRQb3NpdGlvbj1mYWxzZVxyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGlzdGVPYmplY3RDaGFuZ2UubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RlT2JqZWN0Q2hhbmdlW2pdLnBvc0ZpbmFsKTtcclxuICAgICAgICAgICAgICBpZih0aGlzLmxpc3RlT2JqZWN0Q2hhbmdlW2pdLnBvc0ZpbmFsLnggPT1tb3ZlLnBvc0ZpbmFsLngmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZU9iamVjdENoYW5nZVtqXS5wb3NGaW5hbC55ID09bW92ZS5wb3NGaW5hbC55XHJcbiAgICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgIGFscmVhZHlQbGFubmVkUG9zaXRpb249dHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFhbHJlYWR5UGxhbm5lZFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgJChcIiNhbmltYXRpb25HcnBcIikuYXBwZW5kKG1vdmUuc3ZnKTtcclxuICAgICAgICAgICAgICB0aGlzLmxpc3RlT2JqZWN0Q2hhbmdlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLmxpc3RlT2JqZWN0W2ldLFxyXG4gICAgICAgICAgICAgICAgcG9zRmluYWw6IG1vdmUucG9zRmluYWwsXHJcbiAgICAgICAgICAgICAgICBheGU6IGRpcmVjdGlvbi5heGUsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogaVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZ2V0TW92ZShvYmplY3QsZGlyZWN0aW9uLCBkaXN0YW5jZVgsIGRpc3RhbmNlWSkge1xyXG4gICAgdmFyIHBvc2l0aW9uPXt9XHJcbiAgICBpZiAoZGlyZWN0aW9uLmF4ZSA9PSAneCcpIHtcclxuICAgICAgdmFyIHBvc0luaXQgPSBvYmplY3QucG9zLng7XHJcbiAgICAgIHZhciBheGUgPSAneCdcclxuICAgICAgcG9zaXRpb24ueT1vYmplY3QucG9zLnlcclxuICAgICAgaWYgKGRpcmVjdGlvbi5zaWduZSA9PSAnKycpIHtcclxuICAgICAgICB2YXIgcG9zRmluYWwgPSAocGFyc2VJbnQocG9zSW5pdCkgKyBkaXN0YW5jZVgpLnRvU3RyaW5nKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcG9zRmluYWwgPSAocGFyc2VJbnQocG9zSW5pdCkgLSBkaXN0YW5jZVgpLnRvU3RyaW5nKClcclxuICAgICAgfVxyXG4gICAgICBwb3NpdGlvbi54PXBvc0ZpbmFsXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgcG9zSW5pdCA9IG9iamVjdC5wb3MueTtcclxuICAgICAgdmFyIGF4ZSA9ICd5J1xyXG4gICAgICBwb3NpdGlvbi54PW9iamVjdC5wb3MueFxyXG4gICAgICBpZiAoZGlyZWN0aW9uLnNpZ25lID09ICcrJykge1xyXG4gICAgICAgIHZhciBwb3NGaW5hbCA9IChwYXJzZUludChwb3NJbml0KSArIGRpc3RhbmNlWSkudG9TdHJpbmcoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBwb3NGaW5hbCA9IChwYXJzZUludChwb3NJbml0KSAtIGRpc3RhbmNlWSkudG9TdHJpbmcoKVxyXG4gICAgICB9XHJcbiAgICAgIHBvc2l0aW9uLnk9cG9zRmluYWxcclxuICAgIH1cclxuICAgIHZhciBzdmc9b2JqZWN0LmdldE1vdmUoYXhlLHBvc0luaXQscG9zRmluYWwpXHJcbiAgICByZXR1cm4ge3N2ZzpzdmcscG9zRmluYWw6cG9zaXRpb259O1xyXG5cclxuICB9XHJcbiAgcmV3cml0ZUFsbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdyZXdyaXRlIHRpbWUnKTtcclxuICAgIHZhciBsaXN0ZSA9IHRoaXMubGlzdGVPYmplY3RDaGFuZ2VcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5saXN0ZU9iamVjdENoYW5nZS5sZW5ndGgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLnJld3JpdGVPYmplY3QobGlzdGVbaV0ub2JqZWN0LCBsaXN0ZVtpXS5wb3NGaW5hbCwgbGlzdGVbaV0uYXhlLCBsaXN0ZVtpXS5pbmRleClcclxuICAgIH1cclxuICAgIHRoaXMubGlzdGVPYmplY3RDaGFuZ2UgPSBbXVxyXG4gICAgdXRpbC5yZWZyZXNoKFwiI2ZpZ3VyZUdycFwiKVxyXG4gIH1cclxuICByZXdyaXRlT2JqZWN0KG9iamVjdCwgcG9zRmluYWwsIGF4ZSwgaW5kZXgpIHtcclxuICAgIHZhciBpZCA9IG9iamVjdC5nZXRJZCgpXHJcbiAgICBjb25zb2xlLmxvZygncmV3cml0ZU9iamVjdCB3aXRoIGlkICcgKyBpZCk7XHJcbiAgICAkKFwiI29iamVjdC1cIiArIGlkKS5yZW1vdmUoKVxyXG4gICAgaWYgKGF4ZSA9PSAneCcpIHtcclxuICAgICAgb2JqZWN0LnBvcy54ID0gcGFyc2VJbnQocG9zRmluYWwueClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9iamVjdC5wb3MueSA9IHBhcnNlSW50KHBvc0ZpbmFsLnkpXHJcbiAgICB9XHJcbiAgICAvL3RoaXMuYWZmTGlzdGVPYmplY3QoKVxyXG4gICAgb2JqZWN0LnNldFN2ZygpXHJcbiAgICB0aGlzLndyaXRlT2JqZWN0KG9iamVjdClcclxuICB9XHJcbiAgcnVuKCkge1xyXG4gICAgJChcIi5hbmltYXRpb25cIikucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmFuaW1BbGwoKVxyXG4gICAgdGhpcy5tb3ZlQWxsKClcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5saXN0ZU9iamVjdENoYW5nZSk7XHJcbiAgICB1dGlsLnJlZnJlc2goKVxyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgX3RoaXMucmV3cml0ZUFsbCgpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcbiAgYWRkT2JqZWN0KG9iamVjdCkge1xyXG4gICAgdGhpcy5saXN0ZU9iamVjdC5wdXNoKG9iamVjdCk7XHJcbiAgfVxyXG4gIGFmZkxpc3RlT2JqZWN0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJsaXN0ZS0tLS0tLVwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZU9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9iamVjdC0tXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIng6XCIgKyB0aGlzLmxpc3RlT2JqZWN0W2ldLnBvcy54KVxyXG4gICAgICBjb25zb2xlLmxvZyhcInk6XCIgKyB0aGlzLmxpc3RlT2JqZWN0W2ldLnBvcy55KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCItLS0tLS1cIik7XHJcbiAgfVxyXG4gIHJlbW92ZU9iamVjdE9uQ2xpY2socG9zLCBjbGFzc2VzID0gJ2RlZmF1bHQnKSB7XHJcbiAgICB2YXIgZmluZCA9IHRoaXMuZmluZEFsbE9iamVjdChwb3MpXHJcbiAgICBpZiAoZmluZC5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlbiBhdHRlbnRlIGRlIGNvZGUnKTsgLy8vLyBUT0RPOiBpbXBsZW1lbnRlIHVpIHRvIGNob29zZVxyXG4gICAgfSBlbHNlIGlmIChmaW5kLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PTEnKTtcclxuICAgICAgdGhpcy5yZW1vdmVPYmplY3QoZmluZFswXSlcclxuICAgIH1cclxuICAgIHV0aWwucmVmcmVzaChcIiNmaWd1cmVHcnBcIilcclxuICB9XHJcbiAgcmVtb3ZlT2JqZWN0KGluZGV4KSB7XHJcbiAgICB2YXIgb2JqZWN0ID0gdGhpcy5saXN0ZU9iamVjdFtpbmRleF1cclxuICAgIHZhciBpZCA9IG9iamVjdC5nZXRJZCgpXHJcbiAgICAkKFwiI29iamVjdC1cIiArIGlkKS5yZW1vdmUoKVxyXG4gICAgdGhpcy5saXN0ZU9iamVjdC5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgfVxyXG4gIHJlbW92ZUFsbE9iamVjdCgpIHtcclxuICAgIHdoaWxlICh0aGlzLmxpc3RlT2JqZWN0Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlT2JqZWN0KDApXHJcbiAgICB9XHJcbiAgICB1dGlsLnJlZnJlc2goXCIjZmlndXJlR3JwXCIpXHJcbiAgfVxyXG4gIHdyaXRlRGVmKCkge1xyXG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmxpc3RlQ2xhc3M7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGNsYXNzZXNbaV0uaGF2ZU11bHRpcGxlRGVmKCkpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNsYXNzZXNbaV0uZGVmKCkpO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2xhc3Nlc1tpXS5kZWYoKS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgdmFyIGRlZiA9IGNsYXNzZXNbaV0uZGVmKClbal1cclxuICAgICAgICAgICQoXCIjc3ZnXCIpLnByZXBlbmQoZGVmKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgZGVmID0gY2xhc3Nlc1tpXS5kZWYoKVxyXG4gICAgICAgICQoXCIjc3ZnXCIpLnByZXBlbmQoZGVmKVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBmaW5kQWxsT2JqZWN0KHBvc2l0aW9uKSB7XHJcbiAgICB2YXIgZmluZCA9IFtdXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHggPSB0aGlzLmxpc3RlT2JqZWN0W2ldLnBvcy54XHJcbiAgICAgIHZhciB5ID0gdGhpcy5saXN0ZU9iamVjdFtpXS5wb3MueVxyXG4gICAgICBpZiAoeCA9PSBwb3NpdGlvbi54ICYmIHkgPT0gcG9zaXRpb24ueSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coaSk7XHJcbiAgICAgICAgZmluZC5wdXNoKGkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmaW5kXHJcbiAgfVxyXG5cclxuICBmaW5kT2JqZWN0KHBvc2l0aW9uLCBleGNsdWRlVHlwZSA9ICdEZWZhdWx0Jykge1xyXG4gICAgdmFyIGZpbmQgPSBudWxsXHJcbiAgICAvL2NvbnNvbGUubG9nKCdwb3NpdGlvbiByZWNoZXJjaGVyIHgnK3Bvc2l0aW9uLngpO1xyXG4gICAgLy9jb25zb2xlLmxvZygncG9zaXRpb24gcmVjaGVyY2hlciB5Jytwb3NpdGlvbi55KTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZU9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnLS0tLS0tb2JqZWN0LS0tLS0nKTtcclxuICAgICAgdmFyIHggPSB0aGlzLmxpc3RlT2JqZWN0W2ldLnBvcy54XHJcbiAgICAgIHZhciB5ID0gdGhpcy5saXN0ZU9iamVjdFtpXS5wb3MueVxyXG5cclxuICAgICAgLy9jb25zb2xlLmxvZygnaWQgJyt0aGlzLmxpc3RlT2JqZWN0W2ldLmdldElkKCkpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCd4ICcreCk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ3kgJyt5KTtcclxuICAgICAgLy9jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0nKTtcclxuICAgICAgaWYgKHggPT0gcG9zaXRpb24ueCAmJiB5ID09IHBvc2l0aW9uLnkgJiYgZXhjbHVkZVR5cGUgIT0gdGhpcy5saXN0ZU9iamVjdFtpXS5nZXRDbGFzcygpKSB7XHJcbiAgICAgICAgdmFyIGZpbmQgPSB0aGlzLmxpc3RlT2JqZWN0W2ldXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbWF0Y2gnKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdpZCBmaW5kICcgKyBmaW5kLmdldElkKCkpO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmaW5kXHJcbiAgfVxyXG4gIHJvdGF0ZU9iamVjdChwb3MpIHtcclxuICAgIHZhciBvYmplY3QgPSB0aGlzLmZpbmRPYmplY3QocG9zLCBPcmUpXHJcbiAgICBpZiAob2JqZWN0ICE9IG51bGwpIHtcclxuICAgICAgdmFyIHF1ZXJ5T2JqZWN0ID0gJChcIiNvYmplY3QtXCIgKyBvYmplY3QuZ2V0SWQoKSlcclxuICAgICAgY29uc29sZS5sb2cocXVlcnlPYmplY3QuYXR0cigndHJhbnNmb3JtJykpO1xyXG4gICAgICB2YXIgYWN0dWFsRGVncmVlID0gb2JqZWN0LnBvcy5kaXJlY3Rpb24gKiA5MFxyXG4gICAgICBjb25zb2xlLmxvZyhcImFjdHVhbERlZ3JlZSA6XCIrYWN0dWFsRGVncmVlKTtcclxuICAgICAgdmFyIG5ld0RlZ3JlZSA9IChwYXJzZUludChhY3R1YWxEZWdyZWUpICsgOTApICUgMzYwO1xyXG4gICAgICBxdWVyeU9iamVjdC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKCcgKyBuZXdEZWdyZWUgK1wiIFwiK29iamVjdC5vcmlnaW5YK1wiIFwiK29iamVjdC5vcmlnaW5ZKyAnKScpO1xyXG4gICAgICBvYmplY3QucG9zLmRpcmVjdGlvbiA9IChvYmplY3QucG9zLmRpcmVjdGlvbiArIDEpICUgNFxyXG4gICAgICB1dGlsLnJlZnJlc2goJyNmaWd1cmVHcnAnKVxyXG5cclxuICAgIH1cclxuICB9XHJcbiAgY2hhbmdlVXJsRGVmKHBvcywgdHlwZUdpdmUgPSAnTm9uZScpIHtcclxuICAgIHZhciBvYmplY3QgPSB0aGlzLmZpbmRPYmplY3QocG9zLCBPcmUpXHJcbiAgICAvL2NvbnNvbGUubG9nKG9iamVjdCk7XHJcbiAgICBpZiAob2JqZWN0ICE9IG51bGwpIHtcclxuICAgICAgdmFyIGNsYXNzT2JqZWN0ID0gb2JqZWN0LmdldENsYXNzKClcclxuICAgICAgaWYgKGNsYXNzT2JqZWN0LmhhdmVNdWx0aXBsZURlZigpKSB7XHJcbiAgICAgICAgaWYgKHR5cGVHaXZlICE9ICdOb25lJykge1xyXG4gICAgICAgICAgbmV4dFR5cGUgPSB0eXBlR2l2ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIgbmV4dFR5cGUgPSBjbGFzc09iamVjdC5uZXh0VHlwZShvYmplY3QudHlwZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqZWN0LnR5cGUgPSBuZXh0VHlwZVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cobmV4dFR5cGUpO1xyXG4gICAgICAgICQoXCIjb2JqZWN0LVwiICsgb2JqZWN0LmdldElkKCkpLmF0dHIoJ2ZpbGwnLCAndXJsKCNUYXBpcy0nICsgbmV4dFR5cGUgKyAnKScpO1xyXG4gICAgICAgIHV0aWwucmVmcmVzaChcIiNmaWd1cmVHcnBcIilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb2JqZWN0IMOgIHVuIHNldWwgdHlwZScpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInBhcyBkJ29iamVjdCB0cm91dsOpXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJjb25zb2xlLmxvZygnY2xhc3Mgb3JlIGxvYWQnKTtcclxuaW1wb3J0IEFic3RyYWN0T2JqZWN0IGZyb20nLi9BYnN0cmFjdE9iamVjdC5jbGFzcy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmUgZXh0ZW5kcyBBYnN0cmFjdE9iamVjdCB7XHJcbiAgLy8gY2xhc3MgcG91ciBsZXMgbWluZXJhaXMgXHJcbiAgY29uc3RydWN0b3IocG9zKSB7XHJcbiAgICBzdXBlcihwb3MpXHJcbiAgICB0aGlzLnNldFN2ZygpXHJcbiAgfVxyXG4gIHN0YXRpYyBhZmYoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnb3JlIGFmZicpO1xyXG4gIH1cclxuICBzdGF0aWMgZGVmKCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLmRlZigncmdiYSgwLDAsMCwwLjUpJywgJ29yZScsICdNMyAwIEw3IDAgTCAxMCAzIEwgMTAgNyBMIDcgMTAgTCAzIDEwIEwgMCA3IEwgMCAzJylcclxuICB9XHJcbiAgc2V0U3ZnKCkge1xyXG4gICAgc3VwZXIuc2V0U3ZnKCdvcmUnKVxyXG4gIH1cclxuICBnZXRNb3ZlKGF4ZSxmcm9tLHRvKXtcclxuICAgIHZhciBtb3ZlID0gJzxhbmltYXRlIHhsaW5rOmhyZWY9I29iamVjdC0nICsgdGhpcy5nZXRJZCgpICsgJyBhdHRyaWJ1dGVOYW1lPScgKyBheGUgKyAnICBmcm9tID0nICsgZnJvbSArICcgdG89JyArIHRvICsgJyBmaWxsPVwiZnJlZXplXCIgZHVyPVwiMC41c1wiIGNsYXNzPVwiYW5pbWF0aW9uIHRhcGlzXCIgLz4gJztcclxuICAgIHJldHVybiBtb3ZlXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uIHtcclxuICAvLyBjbGFzcyBnbG9iYWwgcG91ciBsZXMgcG9zaXRpb24gZGUgdG91dGUgbGVzIGZpZ3VyZXNcclxuICBjb25zdHJ1Y3Rvcih4LHksZGlyZWN0aW9uPScwJykge1xyXG4gICAgdGhpcy54PXg7XHJcbiAgICB0aGlzLnk9eTtcclxuICAgIHRoaXMuZGlyZWN0aW9uPWRpcmVjdGlvbjtcclxuICB9XHJcbiAgaXNFcXVhbChwb3Mpe1xyXG4gICAgaWYgKHRoaXMueCA9PSBwb3MueCAmJiB0aGlzLnkgPT0gcG9zLnkgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCJjb25zb2xlLmxvZygnY2xhc3MgU2F2ZU1hbmlwdWxhdG9yIGxvYWQnKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F2ZU1hbmlwdWxhdG9yIHtcclxuICAvLyAgY29udHJvbGxlIGxlcyBzYXV2ZWdhcmRlcy9jaGFyZ2VtZW50c1xyXG4gIGNvbnN0cnVjdG9yKG1hbmlwdWxhdG9yKSB7XHJcbiAgICB0aGlzLm1hbmlwdWxhdG9yID0gbWFuaXB1bGF0b3I7XHJcbiAgICBjb25zb2xlLmxvZyhtYW5pcHVsYXRvcik7XHJcbiAgICAvL3RoaXMuY2xlYXJBbGxTYXZlKClcclxuICB9XHJcbiAgY2hlY2tTYXZlKCkge1xyXG4gICAgdmFyIGxpc3RlU2F2ZSA9IFtdXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU2F2ZS0nICsgaSkgIT0gJ29iamVjdCcpIHtcclxuICAgICAgICBsaXN0ZVNhdmUucHVzaChpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGlzdGVTYXZlXHJcbiAgfVxyXG4gIGNsZWFyQWxsU2F2ZSgpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnU2F2ZS0nICsgaSlcclxuICAgIH1cclxuICB9XHJcbiAgY2xlYXJTYXZlKGlkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyU2F2ZSBcIitpZCApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1NhdmUtJyArIGlkKVxyXG4gIH1cclxuICBzYXZlKG5hbWVTYXZlID0gJ2RlZmF1bHQnKSB7XHJcbiAgICBjb25zb2xlLmxvZygnc2F2ZScpO1xyXG4gICAgdmFyIGxpc3RlID0gW11cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tYW5pcHVsYXRvci5saXN0ZU9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgY2xhc3NlID0gdGhpcy5tYW5pcHVsYXRvci5saXN0ZU9iamVjdFtpXS5nZXRDbGFzc05hbWVGcm9tT2JqZWN0KClcclxuICAgICAgdmFyIHBvcyA9IHRoaXMubWFuaXB1bGF0b3IubGlzdGVPYmplY3RbaV0ucG9zXHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5tYW5pcHVsYXRvci5saXN0ZU9iamVjdFtpXS50eXBlICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm1hbmlwdWxhdG9yLmxpc3RlT2JqZWN0W2ldLnR5cGUpO1xyXG4gICAgICAgIHZhciB0eXBlID0gdGhpcy5tYW5pcHVsYXRvci5saXN0ZU9iamVjdFtpXS50eXBlXHJcbiAgICAgICAgbGlzdGUucHVzaCh7XHJcbiAgICAgICAgICBjbGFzc2U6IGNsYXNzZSxcclxuICAgICAgICAgIHBvczogcG9zLFxyXG4gICAgICAgICAgdHlwZTogdHlwZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdGUucHVzaCh7XHJcbiAgICAgICAgICBjbGFzc2U6IGNsYXNzZSxcclxuICAgICAgICAgIHBvczogcG9zXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1NhdmUtJyArIG5hbWVTYXZlLCBKU09OLnN0cmluZ2lmeShsaXN0ZSkpO1xyXG4gIH1cclxuICBsb2FkKG5hbWVTYXZlID0gJ2RlZmF1bHQnKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbG9hZCcpO1xyXG4gICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTYXZlLScgKyBuYW1lU2F2ZSkpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHRoaXMubWFuaXB1bGF0b3IucmVzZXQoZGF0YSk7XHJcbiAgfVxyXG59XHJcbiIsImNvbnNvbGUubG9nKCdjbGFzcyB0YXBpcyBsb2FkJyk7XHJcbmltcG9ydCBBYnN0cmFjdE9iamVjdCBmcm9tJy4vQWJzdHJhY3RPYmplY3QuY2xhc3MuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFwaXMgZXh0ZW5kcyBBYnN0cmFjdE9iamVjdCB7XHJcbiAgLy8gY2xhc3MgcG91ciBsZXMgdGFwaXNcclxuICBjb25zdHJ1Y3Rvcihwb3MsdHlwZT0nZm9yd2FyZCcpIHtcclxuICAgIHN1cGVyKHBvcylcclxuICAgIHRoaXMudHlwZT10eXBlO1xyXG4gICAgdGhpcy5zZXRTdmcoKVxyXG4gIH1cclxuICAvKipcclxuICAgKiBjcmVhdGlvbiBvZiB0aGUgaW1hZ2UgZGVmaW5pdGlvbi5PbmUgYnkgY2xhc3NcclxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cclxuICAgKi9cclxuICBzdGF0aWMgZGVmKCkge1xyXG4gICAgdmFyIGxpc3RlRGVmPVtdXHJcbiAgICBzZWxmPXRoaXM7XHJcbiAgICB2YXIgZGVmMSA9IHN1cGVyLmRlZignYmx1ZScsJ1RhcGlzLWZvcndhcmQnLCdNNSAwIEwxMCAzIEw3IDMgTDcgMTAgTDMgMTAgTDMgMyBMIDAgMycsJzEwMCUnLCcxMDAlJyk7XHJcbiAgICB2YXIgZGVmMiA9IHN1cGVyLmRlZigncmVkJywnVGFwaXMtbGVmdCcsJ00yIDMgUSA3IDMgNyAxMCBMMyAxMCBRIDMgNyAyIDcgTCAyIDkgTCAwIDUgTCAyIDEgTSA1IDEwIEw5IDEyIEw3IDEyIFE3IDE3IDAgMTcgTDAgMTMgUTMgMTMgMyAxMiBMMSAxMicsJzEwMCUnLCcxMDAlJyk7XHJcbiAgICB2YXIgZGVmMz0gc3VwZXIuZGVmKCdncmVlbicsJ1RhcGlzLXJpZ2h0JywnTTcgMTAgUSA3IDcgOCA3IEw4IDkgTCAxMCA1IEw4IDEgTDggMyBRIDMgMyAzIDEwIE0gNSAxMCBMOSAxMiBMNyAxMiBRNyAxMyAxMCAxMyBMMTAgMTcgUTMgMTcgMyAxMiBMMSAxMicsJzEwMCUnLCcxMDAlJyk7XHJcbiAgICBsaXN0ZURlZi5wdXNoKGRlZjEpO1xyXG4gICAgbGlzdGVEZWYucHVzaChkZWYyKTtcclxuICAgIGxpc3RlRGVmLnB1c2goZGVmMyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGxpc3RlRGVmKTtcclxuICAgIHJldHVybiBsaXN0ZURlZjtcclxuICB9XHJcbiAgc3RhdGljIGhhdmVNdWx0aXBsZURlZigpe1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgc3RhdGljIGxpc3RlTmFtZURlZigpe1xyXG4gICAgcmV0dXJuIFsnZm9yd2FyZCcsJ2xlZnQnLCdyaWdodCddXHJcbiAgfVxyXG4gIHN0YXRpYyBuZXh0VHlwZSh0eXBlKXtcclxuICAgIHZhciBsaXN0ZSA9IHRoaXMubGlzdGVOYW1lRGVmKClcclxuICAgIC8vY29uc29sZS5sb2cobGlzdGUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0eXBlKTtcclxuICAgIHZhciBpbmRleCA9IGxpc3RlLmluZGV4T2YodHlwZSlcclxuICAgIC8vY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICB2YXIgbmV4dFR5cGUgPWxpc3RlWyhpbmRleCsxKSVsaXN0ZS5sZW5ndGggXTtcclxuICAgIHJldHVybiBuZXh0VHlwZVxyXG5cclxuICB9XHJcbiAgc2V0U3ZnKCl7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMudHlwZSk7XHJcbiAgICAgICAgc3VwZXIuc2V0U3ZnKCdUYXBpcy0nK3RoaXMudHlwZSlcclxuICB9XHJcbiAgc3RhdGljIGdldEFuaW1hdGlvbigpe1xyXG4gICAgdmFyIGFuaW1hdGlvbkxpc3RlPVtdO1xyXG4gICAgdmFyIGFuaW1hdGlvbj0nPGFuaW1hdGVUcmFuc2Zvcm0gaHJlZj1cIiNwYXRoLVRhcGlzLWZvcndhcmRcIiAgYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiICB0eXBlPVwidHJhbnNsYXRlXCIgIGZyb209XCIwIDBcIiB0bz1cIjAgLTEwXCIgIGR1cj1cIjAuNXNcIiAgY2xhc3M9XCJhbmltYXRpb24gdGFwaXNcIiAvPiAnO1xyXG4gICAgdmFyIGFuaW1hdGlvbjE9JzxhbmltYXRlVHJhbnNmb3JtIGhyZWY9XCIjcGF0aC1UYXBpcy1sZWZ0XCIgYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiICB0eXBlPVwicm90YXRlXCIgZnJvbT1cIjAgMCAxMFwiIHRvPVwiLTkwIDAgMTBcIiBkdXI9XCIwLjVzXCIgIGNsYXNzPVwiYW5pbWF0aW9uIHRhcGlzXCIgLz4nO1xyXG4gICAgdmFyIGFuaW1hdGlvbjI9JzxhbmltYXRlVHJhbnNmb3JtIGhyZWY9XCIjcGF0aC1UYXBpcy1yaWdodFwiIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiAgdHlwZT1cInJvdGF0ZVwiIGZyb209XCIwIDEwIDEwXCIgdG89XCI5MCAxMCAxMFwiIGR1cj1cIjAuNXNcIiBjbGFzcz1cImFuaW1hdGlvbiB0YXBpc1wiIC8+JztcclxuICAgIGFuaW1hdGlvbkxpc3RlLnB1c2goYW5pbWF0aW9uKVxyXG4gICAgYW5pbWF0aW9uTGlzdGUucHVzaChhbmltYXRpb24xKVxyXG4gICAgYW5pbWF0aW9uTGlzdGUucHVzaChhbmltYXRpb24yKVxyXG4gICAgcmV0dXJuIGFuaW1hdGlvbkxpc3RlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFmZigpe1xyXG4gICAgY29uc29sZS5sb2coJ3RhcGlzIGFmZicpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiLy8gZmljaGllciBwb3VyIGxlcyBmb25jdGlvbnMgdXRpbGl0YWlyZXNcclxuY29uc29sZS5sb2coXCJ1dGlsLmpzXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2goZWxlbWVudCA9IFwiI2ZyYW1lXCIpIHtcclxuICAkKGVsZW1lbnQpLmh0bWwoJChlbGVtZW50KS5odG1sKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZChtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRGlnaXQoc3RyaW5nKSB7XHJcbiAgY29uc3QgcmVnZXggPSAvXFxkKy9nbTs7XHJcbiAgY29uc3Qgc3RyID0gc3RyaW5nXHJcbiAgbGV0IG07XHJcbiAgdmFyIGZpbmQ7XHJcbiAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xyXG4gICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xyXG4gICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XHJcbiAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcclxuICAgICAgfVxyXG4gICAgICBtLmZvckVhY2goKG1hdGNoLCBncm91cEluZGV4KSA9PiB7XHJcbiAgICAgICAgZmluZD0gbWF0Y2g7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIGZpbmRcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2xlZXAobWlsbGlzZWNvbmRzKSB7XHJcbiAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxZTc7IGkrKykge1xyXG4gICAgaWYgKChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0KSA+IG1pbGxpc2Vjb25kcyl7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWZmVGVzdCgpIHtcclxuICBjb25zb2xlLmxvZygnaGVsbG8gdGhlcmUnKTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IERvbUNvbnRyb2xsZXIgZnJvbSAnLi9qc0NsYXNzL0RvbUNvbnRyb2xsZXIuY2xhc3MuanMnO1xyXG5pbXBvcnQgVGFwaXMgZnJvbSAnLi9qc0NsYXNzL1RhcGlzLmNsYXNzLmpzJztcclxuaW1wb3J0IE9yZSBmcm9tICcuL2pzQ2xhc3MvT3JlLmNsYXNzLmpzJztcclxuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vanNDbGFzcy9NYW5pcHVsYXRvci5jbGFzcy5qcyc7XHJcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL2pzQ2xhc3MvUG9zaXRpb24uY2xhc3MuanMnO1xyXG4vLyBCVUc6IGdob3N0IGRvbnQgcmVtb3ZlIGFmdGVyIHBvc2UgYW5kIGdvIG91dHNpZGUgZnJhbWVcclxuXHJcblxyXG5cclxuLy8gaW5pdGlhbGlzZSBsZXMgcHJpbmNpcGFscyBvYmplY3RzXHJcbiQoZnVuY3Rpb24oKXtcclxuICB2YXIgZG9tID0gbmV3IERvbUNvbnRyb2xsZXIoKVxyXG4gIHZhciBsaXN0ZUNsYXNzID0gW1RhcGlzLCBPcmVdO1xyXG4gIHZhciBtYW5pcHVsYXRvciA9IG5ldyBNYW5pcHVsYXRvcihsaXN0ZUNsYXNzKTtcclxuICBtYW5pcHVsYXRvci53cml0ZUFsbCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==