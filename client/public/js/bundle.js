/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Aspirations = __webpack_require__(/*! ./models/aspirations.js */ \"./client/src/models/aspirations.js\")\nconst AspirationsListView = __webpack_require__(/*! ./views/aspirations_list_view.js */ \"./client/src/views/aspirations_list_view.js\")\nconst AspirationFormView = __webpack_require__(/*! ./views/aspiration_form_view.js */ \"./client/src/views/aspiration_form_view.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JS loaded');\n\n  const aspirationForm = document.querySelector('form#aspiration-form');\n\n  const aspirationFormView = new AspirationFormView(aspirationForm);\n  console.log(aspirationFormView);\n  aspirationFormView.bindEvents();\n\n\n  const aspirationsContainer = document.querySelector('div#bucket-list');\n  const aspirationsListView = new AspirationsListView(aspirationsContainer)\n  aspirationsListView.bindEvents()\n\n  const url = 'http://localhost:3000/api/listitems';\n  const aspirations = new Aspirations(url);\n  aspirations.bindEvents();\n  aspirations.getData();\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request_helper.js":
/*!**********************************************!*\
  !*** ./client/src/helpers/request_helper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url;\n};\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url)\n    .then((response) => response.json());\n};\n\nRequestHelper.prototype.post = function (payload) {\n  return fetch(this.url, {\n    method: 'POST',\n    body: JSON.stringify(payload),\n    headers: { 'Content-Type': 'application/json'}\n  })\n  .then((response) => response.json());\n};\n\nRequestHelper.prototype.delete = function (id) {\n  return fetch(`${this.url}/${id}`, {\n    method: 'DELETE'\n  })\n    .then((response) => response.json());\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request_helper.js?");

/***/ }),

/***/ "./client/src/models/aspirations.js":
/*!******************************************!*\
  !*** ./client/src/models/aspirations.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst Aspirations = function (url) {\n  this.url = url;\n  this.request = new RequestHelper(this.url);\n};\n\nAspirations.prototype.bindEvents = function () {\n  PubSub.subscribe('AspirationFormView:aspiration-submitted', (evt) => {\n    this.postAspiration(evt.detail);\n  })\n};\n\nAspirations.prototype.getData = function () {\n  this.request.get()\n      .then((aspirations) => {\n        PubSub.publish('Aspirations:data-loaded', aspirations);\n      })\n      .catch(console.error);\n};\n\nAspirations.prototype.postAspiration = function (aspiration) {\n  this.request.post(aspiration)\n  .then((aspirations) => {\n    PubSub.publish('Aspirations:data-loaded', aspirations);\n  })\n  .catch(console.error)\n};\n\n\n\n\n\nmodule.exports = Aspirations;\n\n\n//# sourceURL=webpack:///./client/src/models/aspirations.js?");

/***/ }),

/***/ "./client/src/views/aspiration_form_view.js":
/*!**************************************************!*\
  !*** ./client/src/views/aspiration_form_view.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst AspirationFormView = function(form) {\n  this.form = form\n}\n\nAspirationFormView.prototype.bindEvents = function () {\n  this.form.addEventListener('submit', (evt) => {\n    console.log(evt);\n    this.handleSubmit(evt)\n  })\n};\n\nAspirationFormView.prototype.handleSubmit = function (evt) {\n  evt.preventDefault();\n\n  const newAspiration = this.createAspiration(evt.target);\n  console.log(newAspiration);\n  PubSub.publish('AspirationFormView:aspiration-submitted', newAspiration);\n\n  evt.target.reset()\n\n};\n\nAspirationFormView.prototype.createAspiration = function (form) {\n  const newAspiration = {\n    aspiration: form.aspiration.value\n  };\n  console.log(newAspiration);\n  return newAspiration;\n\n};\n\n\n\n\nmodule.exports = AspirationFormView;\n\n\n//# sourceURL=webpack:///./client/src/views/aspiration_form_view.js?");

/***/ }),

/***/ "./client/src/views/aspiration_view.js":
/*!*********************************************!*\
  !*** ./client/src/views/aspiration_view.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst AspirationView = function (container) {\n  this.container = container\n}\n\nAspirationView.prototype.render = function (input) {\n  const aspirationContainer = document.createElement('div')\n\n  const individualAspiration = document.createElement('li')\n  individualAspiration.textContent = input.aspiration\n\n  aspirationContainer.appendChild(individualAspiration)\n\n  this.container.appendChild(aspirationContainer)\n\n};\n\n\n\n\n\n\nmodule.exports = AspirationView;\n\n\n//# sourceURL=webpack:///./client/src/views/aspiration_view.js?");

/***/ }),

/***/ "./client/src/views/aspirations_list_view.js":
/*!***************************************************!*\
  !*** ./client/src/views/aspirations_list_view.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst AspirationView = __webpack_require__(/*! ./aspiration_view.js */ \"./client/src/views/aspiration_view.js\")\n\nconst AspirationsListView = function (container) {\n  this.container = container\n}\n\nAspirationsListView.prototype.bindEvents = function () {\n  PubSub.subscribe('Aspirations:data-loaded', (evt) => {\n    console.log(evt);\n    \n    this.render(evt.detail);\n  });\n\n};\n\nAspirationsListView.prototype.render = function (aspirations) {\n    this.container.innerHTML = '';\n    const aspirationView = new AspirationView(this.container);\n    aspirations.forEach((aspiration) => aspirationView.render(aspiration))\n};\n\nmodule.exports = AspirationsListView;\n\n\n//# sourceURL=webpack:///./client/src/views/aspirations_list_view.js?");

/***/ })

/******/ });