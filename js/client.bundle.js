/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./js/mosaic.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// Constants shared between client and server.\n\nvar TILE_WIDTH = 16;\nvar TILE_HEIGHT = 16;\n\nvar _exports = _exports || null;\nif (_exports) {\n  _exports.TILE_WIDTH = TILE_WIDTH;\n  _exports.TILE_HEIGHT = TILE_HEIGHT;\n}\n\nexports.TILE_WIDTH = TILE_WIDTH;\nexports.TILE_HEIGHT = TILE_HEIGHT;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9tb3NhaWMuanM/ZGZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb25zdGFudHMgc2hhcmVkIGJldHdlZW4gY2xpZW50IGFuZCBzZXJ2ZXIuXHJcblxyXG52YXIgVElMRV9XSURUSCA9IDE2O1xyXG52YXIgVElMRV9IRUlHSFQgPSAxNjtcclxuXHJcbnZhciBleHBvcnRzID0gZXhwb3J0cyB8fCBudWxsO1xyXG5pZiAoZXhwb3J0cykge1xyXG4gIGV4cG9ydHMuVElMRV9XSURUSCA9IFRJTEVfV0lEVEg7XHJcbiAgZXhwb3J0cy5USUxFX0hFSUdIVCA9IFRJTEVfSEVJR0hUO1xyXG59XHJcblxyXG5leHBvcnQgeyBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVCB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvbW9zYWljLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./js/Render.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Render = function () {\n  function Render() {\n    _classCallCheck(this, Render);\n  }\n\n  _createClass(Render, null, [{\n    key: 'clearMosaic',\n    value: function clearMosaic() {\n      var mosaicArea = document.getElementById('mosaic-area');\n      while (mosaicArea.hasChildNodes()) {\n        mosaicArea.removeChild(mosaicArea.firstChild);\n      }\n    }\n  }, {\n    key: 'setupMosaic',\n    value: function setupMosaic(rows, cols) {\n      for (var row = 0; row < rows; row++) {\n        var mosaicArea = document.getElementById('mosaic-area');\n        mosaicArea.insertAdjacentHTML('beforeend', '<div class=\"mosaic-row\" id=\"mosaic-row-' + row + '\"></div>');\n        var mosaicRow = document.getElementById('mosaic-row-' + row);\n        for (var col = 0; col < cols; col++) {\n          mosaicRow.insertAdjacentHTML('beforeend', '<span class=\"mosaic-tile\" id=\"mosaic-tile-' + row + '-' + col + '\"></span>');\n        }\n      }\n    }\n  }, {\n    key: 'renderTile',\n    value: function renderTile(row, col, data) {\n      var mosaicTile = document.getElementById('mosaic-tile-' + row + '-' + col);\n      mosaicTile.insertAdjacentHTML('beforeend', data);\n    }\n  }]);\n\n  return Render;\n}();\n\nexports.default = Render;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9SZW5kZXIuanM/YmEwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBSZW5kZXIge1xyXG4gIHN0YXRpYyBjbGVhck1vc2FpYygpIHtcclxuICAgIGNvbnN0IG1vc2FpY0FyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9zYWljLWFyZWEnKTtcclxuICAgIHdoaWxlIChtb3NhaWNBcmVhLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICBtb3NhaWNBcmVhLnJlbW92ZUNoaWxkKG1vc2FpY0FyZWEuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0dXBNb3NhaWMocm93cywgY29scykge1xyXG4gICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcclxuICAgICAgbGV0IG1vc2FpY0FyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9zYWljLWFyZWEnKTtcclxuICAgICAgbW9zYWljQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJtb3NhaWMtcm93XCIgaWQ9XCJtb3NhaWMtcm93LSR7cm93fVwiPjwvZGl2PmApO1xyXG4gICAgICBsZXQgbW9zYWljUm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1vc2FpYy1yb3ctJHtyb3d9YCk7XHJcbiAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IGNvbHM7IGNvbCsrKSB7XHJcbiAgICAgICAgbW9zYWljUm93Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxcclxuICAgICAgICAgIGA8c3BhbiBjbGFzcz1cIm1vc2FpYy10aWxlXCIgaWQ9XCJtb3NhaWMtdGlsZS0ke3Jvd30tJHtjb2x9XCI+PC9zcGFuPmApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVuZGVyVGlsZShyb3csIGNvbCwgZGF0YSkge1xyXG4gICAgbGV0IG1vc2FpY1RpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbW9zYWljLXRpbGUtJHtyb3d9LSR7Y29sfWApO1xyXG4gICAgbW9zYWljVGlsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvUmVuZGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./js/CanvasImage.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _mosaic = __webpack_require__(/*! ./mosaic */ 0);\n\nvar _Grid = __webpack_require__(/*! ./Grid */ 4);\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar CanvasImage = function () {\n  function CanvasImage(canvasId) {\n    _classCallCheck(this, CanvasImage);\n\n    this.canvas = document.getElementById(canvasId);\n    this.img = new Image();\n    this.reader = null;\n  }\n\n  _createClass(CanvasImage, [{\n    key: 'readImage',\n    value: function readImage(imageFile) {\n      var _this = this;\n\n      var imageLoaded = function imageLoaded() {\n        var drawCtx = _this.canvas.getContext('2d');\n        _this.canvas.width = _this.img.width;\n        _this.canvas.height = _this.img.height;\n        drawCtx.drawImage(_this.img, 0, 0);\n        _this.setupGrid(drawCtx);\n      };\n\n      var loadImage = function loadImage() {\n        _this.img.onload = imageLoaded;\n        _this.img.src = _this.reader.result;\n      };\n\n      this.reader = new FileReader();\n      this.reader.onload = loadImage;\n      this.reader.readAsDataURL(imageFile);\n    }\n  }, {\n    key: 'setupGrid',\n    value: function setupGrid(drawCtx) {\n      // Split the image into tiles based on TILE_WIDTH and TILE_HEIGHT\n      var tileRowSize = Math.floor(this.img.width / _mosaic.TILE_WIDTH);\n      var tileRowCount = Math.floor(this.img.height / _mosaic.TILE_HEIGHT);\n      var grid = new _Grid2.default(tileRowCount, tileRowSize, drawCtx);\n      grid.processRow();\n    }\n  }]);\n\n  return CanvasImage;\n}();\n\nexports.default = CanvasImage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9DYW52YXNJbWFnZS5qcz80NzNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUIH0gZnJvbSAnLi9tb3NhaWMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICcuL0dyaWQnO1xyXG5cclxuY2xhc3MgQ2FudmFzSW1hZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKGNhbnZhc0lkKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLnJlYWRlciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICByZWFkSW1hZ2UoaW1hZ2VGaWxlKSB7XHJcbiAgICBsZXQgaW1hZ2VMb2FkZWQgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBkcmF3Q3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmltZy53aWR0aDtcclxuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5pbWcuaGVpZ2h0O1xyXG4gICAgICBkcmF3Q3R4LmRyYXdJbWFnZSh0aGlzLmltZywwLDApO1xyXG4gICAgICB0aGlzLnNldHVwR3JpZChkcmF3Q3R4KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbG9hZEltYWdlID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmltZy5vbmxvYWQgPSBpbWFnZUxvYWRlZDtcclxuICAgICAgdGhpcy5pbWcuc3JjID0gdGhpcy5yZWFkZXIucmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHRoaXMucmVhZGVyLm9ubG9hZCA9IGxvYWRJbWFnZTtcclxuICAgIHRoaXMucmVhZGVyLnJlYWRBc0RhdGFVUkwoaW1hZ2VGaWxlKTtcclxuICB9XHJcblxyXG4gIHNldHVwR3JpZChkcmF3Q3R4KSB7XHJcbiAgICAvLyBTcGxpdCB0aGUgaW1hZ2UgaW50byB0aWxlcyBiYXNlZCBvbiBUSUxFX1dJRFRIIGFuZCBUSUxFX0hFSUdIVFxyXG4gICAgY29uc3QgdGlsZVJvd1NpemUgPSBNYXRoLmZsb29yKHRoaXMuaW1nLndpZHRoIC8gVElMRV9XSURUSCk7XHJcbiAgICBjb25zdCB0aWxlUm93Q291bnQgPSBNYXRoLmZsb29yKHRoaXMuaW1nLmhlaWdodCAvIFRJTEVfSEVJR0hUKTtcclxuICAgIGxldCBncmlkID0gbmV3IEdyaWQodGlsZVJvd0NvdW50LCB0aWxlUm93U2l6ZSwgZHJhd0N0eCk7XHJcbiAgICBncmlkLnByb2Nlc3NSb3coKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbnZhc0ltYWdlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvQ2FudmFzSW1hZ2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!*********************!*\
  !*** ./js/Color.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Color = function () {\n  function Color() {\n    _classCallCheck(this, Color);\n  }\n\n  _createClass(Color, null, [{\n    key: 'rgbToHex',\n    value: function rgbToHex(red, green, blue) {\n      var redHex = this.getHex(red);\n      var greenHex = this.getHex(green);\n      var blueHex = this.getHex(blue);\n      return '' + redHex + greenHex + blueHex;\n    }\n\n    // Convert rgb numbers to base 16 with leading 0 if needed\n\n  }, {\n    key: 'getHex',\n    value: function getHex(rgbColor) {\n      var hex = rgbColor.toString(16);\n      if (hex.length < 2) {\n        return '0' + hex;\n      }\n      return hex;\n    }\n  }]);\n\n  return Color;\n}();\n\nexports.default = Color;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9Db2xvci5qcz9iMjcyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvbG9yIHtcclxuICBzdGF0aWMgcmdiVG9IZXgocmVkLCBncmVlbiwgYmx1ZSkge1xyXG4gICAgY29uc3QgcmVkSGV4ID0gdGhpcy5nZXRIZXgocmVkKTtcclxuICAgIGNvbnN0IGdyZWVuSGV4ID0gdGhpcy5nZXRIZXgoZ3JlZW4pO1xyXG4gICAgY29uc3QgYmx1ZUhleCA9IHRoaXMuZ2V0SGV4KGJsdWUpO1xyXG4gICAgcmV0dXJuIGAke3JlZEhleH0ke2dyZWVuSGV4fSR7Ymx1ZUhleH1gO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydCByZ2IgbnVtYmVycyB0byBiYXNlIDE2IHdpdGggbGVhZGluZyAwIGlmIG5lZWRlZFxyXG4gIHN0YXRpYyBnZXRIZXgocmdiQ29sb3IpIHtcclxuICAgIGNvbnN0IGhleCA9IHJnYkNvbG9yLnRvU3RyaW5nKDE2KTtcclxuICAgIGlmIChoZXgubGVuZ3RoIDwgMikge1xyXG4gICAgICByZXR1cm4gJzAnICsgaGV4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhleDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbG9yO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvQ29sb3IuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** ./js/Grid.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _mosaic = __webpack_require__(/*! ./mosaic.js */ 0);\n\nvar _Tile = __webpack_require__(/*! ./Tile */ 5);\n\nvar _Tile2 = _interopRequireDefault(_Tile);\n\nvar _Render = __webpack_require__(/*! ./Render */ 1);\n\nvar _Render2 = _interopRequireDefault(_Render);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Grid = function () {\n  function Grid(rows, cols, drawContext) {\n    _classCallCheck(this, Grid);\n\n    this.currentRow = 0;\n    this.drawCtx = drawContext;\n    _Render2.default.clearMosaic();\n    _Render2.default.setupMosaic(rows, cols);\n    this.tiles = Array(rows);\n    for (var row = 0; row < rows; row++) {\n      this.tiles[row] = new Array();\n      for (var col = 0; col < cols; col++) {\n        this.tiles[row].push(new _Tile2.default(col, row));\n      }\n    }\n  }\n\n  _createClass(Grid, [{\n    key: 'processRow',\n    value: function processRow() {\n      var _this = this;\n\n      if (this.currentRow < this.tiles.length) {\n        var row = this.tiles[this.currentRow];\n        var promises = [];\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n          for (var _iterator = row[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var tile = _step.value;\n\n            promises.push(tile.startRender(this.drawCtx));\n          }\n        } catch (err) {\n          _didIteratorError = true;\n          _iteratorError = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n              _iterator.return();\n            }\n          } finally {\n            if (_didIteratorError) {\n              throw _iteratorError;\n            }\n          }\n        }\n\n        Promise.all(promises).then(function () {\n          _this.currentRow++;\n          _this.processRow();\n        });\n      }\n    }\n  }]);\n\n  return Grid;\n}();\n\nexports.default = Grid;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9HcmlkLmpzPzU0MWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVElMRV9XSURUSCwgVElMRV9IRUlHSFQgfSBmcm9tICcuL21vc2FpYy5qcyc7XHJcbmltcG9ydCBUaWxlIGZyb20gJy4vVGlsZSc7XHJcbmltcG9ydCBSZW5kZXIgZnJvbSAnLi9SZW5kZXInO1xyXG5cclxuY2xhc3MgR3JpZCB7XHJcbiAgY29uc3RydWN0b3Iocm93cywgY29scywgZHJhd0NvbnRleHQpIHtcclxuICAgIHRoaXMuY3VycmVudFJvdyA9IDA7XHJcbiAgICB0aGlzLmRyYXdDdHggPSBkcmF3Q29udGV4dDtcclxuICAgIFJlbmRlci5jbGVhck1vc2FpYygpO1xyXG4gICAgUmVuZGVyLnNldHVwTW9zYWljKHJvd3MsIGNvbHMpO1xyXG4gICAgdGhpcy50aWxlcyA9IEFycmF5KHJvd3MpO1xyXG4gICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcclxuICAgICAgdGhpcy50aWxlc1tyb3ddID0gbmV3IEFycmF5KCk7XHJcbiAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IGNvbHM7IGNvbCsrKSB7XHJcbiAgICAgICAgdGhpcy50aWxlc1tyb3ddLnB1c2gobmV3IFRpbGUoY29sLCByb3cpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1JvdygpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRSb3cgPCB0aGlzLnRpbGVzLmxlbmd0aCkge1xyXG4gICAgICBsZXQgcm93ID0gdGhpcy50aWxlc1t0aGlzLmN1cnJlbnRSb3ddO1xyXG4gICAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgdGlsZSBvZiByb3cpIHtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKHRpbGUuc3RhcnRSZW5kZXIodGhpcy5kcmF3Q3R4KSk7XHJcbiAgICAgIH1cclxuICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFJvdysrO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc1JvdygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9HcmlkLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** ./js/Tile.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _mosaic = __webpack_require__(/*! ./mosaic.js */ 0);\n\nvar _Color = __webpack_require__(/*! ./Color */ 3);\n\nvar _Color2 = _interopRequireDefault(_Color);\n\nvar _Render = __webpack_require__(/*! ./Render */ 1);\n\nvar _Render2 = _interopRequireDefault(_Render);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Tile = function () {\n  function Tile(posX, posY) {\n    _classCallCheck(this, Tile);\n\n    this.pixelPos = { x: posX * _mosaic.TILE_WIDTH, y: posY * _mosaic.TILE_HEIGHT };\n    this.tilePos = { x: posX, y: posY };\n    this.tileColor = '';\n    this.drawCtx = '';\n  }\n\n  _createClass(Tile, [{\n    key: 'startRender',\n    value: function startRender(drawContext) {\n      this.drawCtx = drawContext;\n      this.calculateTileColor(this.drawCtx);\n      var fetchPromise = this.startTileFetch();\n      return fetchPromise;\n    }\n  }, {\n    key: 'calculateTileColor',\n    value: function calculateTileColor(drawCtx) {\n      var rgbTotals = { r: 0, g: 0, b: 0 };\n      var rgbAvg = { r: 0, g: 0, b: 0 };\n      var pixDataIndex = 0;\n      var pixelCount = 0;\n      var pixels = drawCtx.getImageData(this.pixelPos.x, this.pixelPos.y, _mosaic.TILE_WIDTH, _mosaic.TILE_HEIGHT);\n      // The count of pixels by 4 (rgba colors) is less than pixel data array size\n      while ((pixDataIndex += 4) < pixels.data.length) {\n        pixelCount++;\n        rgbTotals.r += pixels.data[pixDataIndex];\n        rgbTotals.g += pixels.data[pixDataIndex + 1];\n        rgbTotals.b += pixels.data[pixDataIndex + 2];\n      }\n\n      rgbAvg.r = Math.floor(rgbTotals.r / pixelCount);\n      rgbAvg.g = Math.floor(rgbTotals.g / pixelCount);\n      rgbAvg.b = Math.floor(rgbTotals.b / pixelCount);\n\n      this.tileColor = _Color2.default.rgbToHex(rgbAvg.r, rgbAvg.g, rgbAvg.b);\n    }\n  }, {\n    key: 'startTileFetch',\n    value: function startTileFetch(promise, error) {\n      var _this = this;\n\n      var fetchReturn = fetch('/color/' + this.tileColor).then(function (response) {\n        return response.text();\n      }).then(function (responseData) {\n        _this.renderTile(responseData);\n      }).catch();\n      return fetchReturn;\n    }\n  }, {\n    key: 'renderTile',\n    value: function renderTile(responseData) {\n      _Render2.default.renderTile(this.tilePos.y, this.tilePos.x, responseData);\n    }\n  }]);\n\n  return Tile;\n}();\n\nexports.default = Tile;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9UaWxlLmpzPzA4NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVElMRV9XSURUSCwgVElMRV9IRUlHSFQgfSBmcm9tICcuL21vc2FpYy5qcyc7XHJcbmltcG9ydCBDb2xvciBmcm9tICcuL0NvbG9yJztcclxuaW1wb3J0IFJlbmRlciBmcm9tICcuL1JlbmRlcic7XHJcblxyXG5jbGFzcyBUaWxlIHtcclxuICBjb25zdHJ1Y3Rvcihwb3NYLCBwb3NZKSB7XHJcbiAgICB0aGlzLnBpeGVsUG9zID0geyB4OiBwb3NYICogVElMRV9XSURUSCwgeTogcG9zWSAqIFRJTEVfSEVJR0hUIH07XHJcbiAgICB0aGlzLnRpbGVQb3MgPSB7IHg6IHBvc1gsIHk6IHBvc1kgfTtcclxuICAgIHRoaXMudGlsZUNvbG9yID0gJyc7XHJcbiAgICB0aGlzLmRyYXdDdHggPSAnJztcclxuICB9XHJcblxyXG4gIHN0YXJ0UmVuZGVyKGRyYXdDb250ZXh0KSB7XHJcbiAgICB0aGlzLmRyYXdDdHggPSBkcmF3Q29udGV4dDtcclxuICAgIHRoaXMuY2FsY3VsYXRlVGlsZUNvbG9yKHRoaXMuZHJhd0N0eCk7XHJcbiAgICBsZXQgZmV0Y2hQcm9taXNlID0gdGhpcy5zdGFydFRpbGVGZXRjaCgpO1xyXG4gICAgcmV0dXJuIGZldGNoUHJvbWlzZTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZVRpbGVDb2xvcihkcmF3Q3R4KSB7XHJcbiAgICBsZXQgcmdiVG90YWxzID0geyByOiAwLCBnOiAwLCBiOiAwIH07XHJcbiAgICBsZXQgcmdiQXZnID0geyByOiAwLCBnOiAwLCBiOiAwIH07XHJcbiAgICBsZXQgcGl4RGF0YUluZGV4ID0gMDtcclxuICAgIGxldCBwaXhlbENvdW50ID0gMDtcclxuICAgIGxldCBwaXhlbHMgPSBkcmF3Q3R4LmdldEltYWdlRGF0YShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpeGVsUG9zLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waXhlbFBvcy55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRJTEVfV0lEVEgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVElMRV9IRUlHSFQpO1xyXG4gICAgLy8gVGhlIGNvdW50IG9mIHBpeGVscyBieSA0IChyZ2JhIGNvbG9ycykgaXMgbGVzcyB0aGFuIHBpeGVsIGRhdGEgYXJyYXkgc2l6ZVxyXG4gICAgd2hpbGUgKCAocGl4RGF0YUluZGV4ICs9IDQpIDwgcGl4ZWxzLmRhdGEubGVuZ3RoICkge1xyXG4gICAgICBwaXhlbENvdW50Kys7XHJcbiAgICAgIHJnYlRvdGFscy5yICs9IHBpeGVscy5kYXRhW3BpeERhdGFJbmRleF07XHJcbiAgICAgIHJnYlRvdGFscy5nICs9IHBpeGVscy5kYXRhW3BpeERhdGFJbmRleCArIDFdO1xyXG4gICAgICByZ2JUb3RhbHMuYiArPSBwaXhlbHMuZGF0YVtwaXhEYXRhSW5kZXggKyAyXTtcclxuICAgIH1cclxuXHJcbiAgICByZ2JBdmcuciA9IE1hdGguZmxvb3IocmdiVG90YWxzLnIgLyBwaXhlbENvdW50KTtcclxuICAgIHJnYkF2Zy5nID0gTWF0aC5mbG9vcihyZ2JUb3RhbHMuZyAvIHBpeGVsQ291bnQpO1xyXG4gICAgcmdiQXZnLmIgPSBNYXRoLmZsb29yKHJnYlRvdGFscy5iIC8gcGl4ZWxDb3VudCk7XHJcblxyXG4gICAgdGhpcy50aWxlQ29sb3IgPSBDb2xvci5yZ2JUb0hleChyZ2JBdmcuciwgcmdiQXZnLmcsIHJnYkF2Zy5iKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VGlsZUZldGNoKHByb21pc2UsIGVycm9yKSB7XHJcbiAgICBsZXQgZmV0Y2hSZXR1cm4gPSBmZXRjaChgL2NvbG9yLyR7dGhpcy50aWxlQ29sb3J9YClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJUaWxlKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgpO1xyXG4gICAgcmV0dXJuIGZldGNoUmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVGlsZShyZXNwb25zZURhdGEpIHtcclxuICAgIFJlbmRlci5yZW5kZXJUaWxlKHRoaXMudGlsZVBvcy55LCB0aGlzLnRpbGVQb3MueCwgcmVzcG9uc2VEYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbGU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9UaWxlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./js/client.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _CanvasImage = __webpack_require__(/*! ./CanvasImage.js */ 2);\n\nvar _CanvasImage2 = _interopRequireDefault(_CanvasImage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Load the image into a canvas element\nfunction loadImageCanvas() {\n  var canvasImage = new _CanvasImage2.default('image-preview');\n  var input = void 0;\n\n  input = document.getElementById('file-select');\n  if (!input.files[0]) {\n    alert(\"Please select a file to load.\");\n  } else {\n    var imageFile = input.files[0];\n    canvasImage.readImage(imageFile);\n  }\n}\n\ndocument.getElementById('btn-load-image').onclick = loadImageCanvas;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9jbGllbnQuanM/MDk2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzSW1hZ2UgZnJvbSAnLi9DYW52YXNJbWFnZS5qcyc7XHJcblxyXG4vLyBMb2FkIHRoZSBpbWFnZSBpbnRvIGEgY2FudmFzIGVsZW1lbnRcclxuZnVuY3Rpb24gbG9hZEltYWdlQ2FudmFzKCkge1xyXG4gIGxldCBjYW52YXNJbWFnZSA9IG5ldyBDYW52YXNJbWFnZSgnaW1hZ2UtcHJldmlldycpO1xyXG4gIGxldCBpbnB1dDtcclxuXHJcbiAgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZS1zZWxlY3QnKTtcclxuICBpZiAoIWlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICBhbGVydChcIlBsZWFzZSBzZWxlY3QgYSBmaWxlIHRvIGxvYWQuXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgaW1hZ2VGaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcbiAgICBjYW52YXNJbWFnZS5yZWFkSW1hZ2UoaW1hZ2VGaWxlKTtcclxuICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbG9hZC1pbWFnZScpLm9uY2xpY2sgPSBsb2FkSW1hZ2VDYW52YXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9jbGllbnQuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);