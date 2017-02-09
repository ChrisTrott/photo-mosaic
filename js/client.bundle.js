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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Constants shared between client and server.

var TILE_WIDTH = 16;
var TILE_HEIGHT = 16;

var _exports = _exports || null;
if (_exports) {
  _exports.TILE_WIDTH = TILE_WIDTH;
  _exports.TILE_HEIGHT = TILE_HEIGHT;
}

exports.TILE_WIDTH = TILE_WIDTH;
exports.TILE_HEIGHT = TILE_HEIGHT;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Render = function () {
  function Render() {
    _classCallCheck(this, Render);
  }

  _createClass(Render, null, [{
    key: 'clearMosaic',
    value: function clearMosaic() {
      var mosaicArea = document.getElementById('mosaic-area');
      while (mosaicArea.hasChildNodes()) {
        mosaicArea.removeChild(mosaicArea.firstChild);
      }
    }
  }, {
    key: 'setupMosaic',
    value: function setupMosaic(rows, cols) {
      for (var row = 0; row < rows; row++) {
        var mosaicArea = document.getElementById('mosaic-area');
        mosaicArea.insertAdjacentHTML('beforeend', '<div class="mosaic-row" id="mosaic-row-' + row + '"></div>');
        var mosaicRow = document.getElementById('mosaic-row-' + row);
        for (var col = 0; col < cols; col++) {
          mosaicRow.insertAdjacentHTML('beforeend', '<span class="mosaic-tile" id="mosaic-tile-' + row + '-' + col + '"></span>');
        }
      }
    }
  }, {
    key: 'renderTile',
    value: function renderTile(row, col, data) {
      var mosaicTile = document.getElementById('mosaic-tile-' + row + '-' + col);
      mosaicTile.insertAdjacentHTML('beforeend', data);
    }
  }]);

  return Render;
}();

exports.default = Render;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mosaic = __webpack_require__(0);

var _Grid = __webpack_require__(4);

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasImage = function () {
  function CanvasImage(canvasId) {
    _classCallCheck(this, CanvasImage);

    this.canvas = document.getElementById(canvasId);
    this.img = new Image();
    this.reader = null;
  }

  _createClass(CanvasImage, [{
    key: 'readImage',
    value: function readImage(imageFile) {
      var _this = this;

      var imageLoaded = function imageLoaded() {
        var drawCtx = _this.canvas.getContext('2d');
        _this.canvas.width = _this.img.width;
        _this.canvas.height = _this.img.height;
        drawCtx.drawImage(_this.img, 0, 0);
        _this.setupGrid(drawCtx);
      };
      var loadImage = function loadImage() {
        _this.img.onload = imageLoaded;
        _this.img.src = _this.reader.result;
      };

      this.reader = new FileReader();
      this.reader.onload = loadImage;
      this.reader.readAsDataURL(imageFile);
    }
  }, {
    key: 'setupGrid',
    value: function setupGrid(drawCtx) {
      // Split the image into tiles based on TILE_WIDTH and TILE_HEIGHT
      var tileRowSize = Math.floor(this.img.width / _mosaic.TILE_WIDTH);
      var tileRowCount = Math.floor(this.img.height / _mosaic.TILE_HEIGHT);
      var grid = new _Grid2.default(tileRowCount, tileRowSize, drawCtx);
      grid.process();
    }
  }]);

  return CanvasImage;
}();

exports.default = CanvasImage;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Color = function () {
  function Color() {
    _classCallCheck(this, Color);
  }

  _createClass(Color, null, [{
    key: 'rgbToHex',
    value: function rgbToHex(red, green, blue) {
      var redHex = this.getHex(red);
      var greenHex = this.getHex(green);
      var blueHex = this.getHex(blue);
      return '' + redHex + greenHex + blueHex;
    }

    // Convert rgb numbers to base 16 with leading 0 if needed

  }, {
    key: 'getHex',
    value: function getHex(rgbColor) {
      var hex = rgbColor.toString(16);
      if (hex.length < 2) {
        return '0' + hex;
      }
      return hex;
    }
  }]);

  return Color;
}();

exports.default = Color;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mosaic = __webpack_require__(0);

var _Tile = __webpack_require__(5);

var _Tile2 = _interopRequireDefault(_Tile);

var _Render = __webpack_require__(1);

var _Render2 = _interopRequireDefault(_Render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {
  function Grid(rows, cols, drawContext) {
    _classCallCheck(this, Grid);

    this.currentRow = 0;
    this.drawCtx = drawContext;
    this.tiles = Array(rows);
    for (var row = 0; row < rows; row++) {
      this.tiles[row] = new Array();
      for (var col = 0; col < cols; col++) {
        this.tiles[row].push(new _Tile2.default(col, row));
      }
    }
  }

  _createClass(Grid, [{
    key: 'process',
    value: function process() {
      _Render2.default.clearMosaic();
      _Render2.default.setupMosaic(this.tiles.length, this.tiles[0].length);
      this.processRow();
    }
  }, {
    key: 'processRow',
    value: function processRow() {
      var _this = this;

      if (this.currentRow < this.tiles.length) {
        var row = this.tiles[this.currentRow];
        var promises = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = row[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var tile = _step.value;

            promises.push(tile.startRender(this.drawCtx));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        Promise.all(promises).then(function () {
          _this.currentRow++;
          _this.processRow();
        });
      }
    }
  }]);

  return Grid;
}();

exports.default = Grid;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mosaic = __webpack_require__(0);

var _Color = __webpack_require__(3);

var _Color2 = _interopRequireDefault(_Color);

var _Render = __webpack_require__(1);

var _Render2 = _interopRequireDefault(_Render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tile = function () {
  function Tile(posX, posY) {
    _classCallCheck(this, Tile);

    this.pixelPos = { x: posX * _mosaic.TILE_WIDTH, y: posY * _mosaic.TILE_HEIGHT };
    this.tilePos = { x: posX, y: posY };
    this.tileColor = '';
    this.drawCtx = '';
  }

  _createClass(Tile, [{
    key: 'startRender',
    value: function startRender(drawContext) {
      this.drawCtx = drawContext;
      this.calculateTileColor(this.drawCtx);
      var fetchPromise = this.startTileFetch();
      return fetchPromise;
    }
  }, {
    key: 'calculateTileColor',
    value: function calculateTileColor(drawCtx) {
      var rgbTotals = { r: 0, g: 0, b: 0 };
      var rgbAvg = { r: 0, g: 0, b: 0 };
      var pixDataIndex = 0;
      var pixelCount = 0;
      var pixels = drawCtx.getImageData(this.pixelPos.x, this.pixelPos.y, _mosaic.TILE_WIDTH, _mosaic.TILE_HEIGHT);
      // The count of pixels by 4 (rgba colors) is less than pixel data array size
      while ((pixDataIndex += 4) < pixels.data.length) {
        pixelCount++;
        rgbTotals.r += pixels.data[pixDataIndex];
        rgbTotals.g += pixels.data[pixDataIndex + 1];
        rgbTotals.b += pixels.data[pixDataIndex + 2];
      }

      rgbAvg.r = Math.floor(rgbTotals.r / pixelCount);
      rgbAvg.g = Math.floor(rgbTotals.g / pixelCount);
      rgbAvg.b = Math.floor(rgbTotals.b / pixelCount);

      this.tileColor = _Color2.default.rgbToHex(rgbAvg.r, rgbAvg.g, rgbAvg.b);
    }
  }, {
    key: 'startTileFetch',
    value: function startTileFetch(promise, error) {
      var _this = this;

      var fetchReturn = fetch('/color/' + this.tileColor).then(function (response) {
        return response.text();
      }).then(function (responseData) {
        _this.renderTile(responseData);
      }).catch();
      return fetchReturn;
    }
  }, {
    key: 'renderTile',
    value: function renderTile(responseData) {
      _Render2.default.renderTile(this.tilePos.y, this.tilePos.x, responseData);
    }
  }]);

  return Tile;
}();

exports.default = Tile;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CanvasImage = __webpack_require__(2);

var _CanvasImage2 = _interopRequireDefault(_CanvasImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Load the image into a canvas element
function loadImageCanvas() {
  var canvasImage = new _CanvasImage2.default('image-preview');
  var input = void 0;

  input = document.getElementById('file-select');
  if (!input.files[0]) {
    alert("Please select a file to load.");
  } else {
    var imageFile = input.files[0];
    canvasImage.readImage(imageFile);
  }
}

document.getElementById('btn-load-image').onclick = loadImageCanvas;

/***/ })
/******/ ]);