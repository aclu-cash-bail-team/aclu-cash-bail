// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/classes/Table.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchableTable = exports.Table = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VIEW_ALL = "view all";
var VIEW_LESS = "view less";
var NUM_TRUNCATED_ROWS = 10;
var CARET_SVG = "<svg class=\"caret\" width=\"8\" height=\"5\" viewBox=\"0 0 8 5\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7 0.999999L4 4L1 1\" stroke=\"white\" stroke-miterlimit=\"10\"/>\n</svg>";

var Cell = /*#__PURE__*/function () {
  function Cell(className) {
    _classCallCheck(this, Cell);

    this.className = className;
  }

  _createClass(Cell, [{
    key: "render",
    value: function render() {
      this.element = document.createElement("td");
      this.setElementClass(this.className);
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      return this.className;
    }
  }, {
    key: "setElementClass",
    value: function setElementClass(className) {
      this.element.className = className;
    }
  }, {
    key: "addElementClass",
    value: function addElementClass(className) {
      this.element.classList.add(className);
    }
  }]);

  return Cell;
}();

var TextCell = /*#__PURE__*/function (_Cell) {
  _inherits(TextCell, _Cell);

  var _super = _createSuper(TextCell);

  function TextCell(content, className) {
    var _this;

    _classCallCheck(this, TextCell);

    _this = _super.call(this, className);
    _this.content = content;

    _this.render();

    return _this;
  }

  _createClass(TextCell, [{
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(TextCell.prototype), "render", this).call(this);

      this.element.appendChild(document.createTextNode(this.content));
    }
  }]);

  return TextCell;
}(Cell);

var StyledTextCell = /*#__PURE__*/function (_Cell2) {
  _inherits(StyledTextCell, _Cell2);

  var _super2 = _createSuper(StyledTextCell);

  function StyledTextCell(content, className) {
    var _this2;

    _classCallCheck(this, StyledTextCell);

    _this2 = _super2.call(this, "".concat(className, " ").concat(content["className"])); // styled cells, which display differences, should always show positive

    _this2.content = content["value"].replace("-", "+");

    _this2.render();

    return _this2;
  }

  _createClass(StyledTextCell, [{
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(StyledTextCell.prototype), "render", this).call(this);

      this.element.appendChild(document.createTextNode(this.content));
    }
  }]);

  return StyledTextCell;
}(Cell);

var NumberCell = /*#__PURE__*/function (_Cell3) {
  _inherits(NumberCell, _Cell3);

  var _super3 = _createSuper(NumberCell);

  function NumberCell(content, className, data) {
    var _this3;

    _classCallCheck(this, NumberCell);

    _this3 = _super3.call(this, className);
    var isPercent = data["unit"] === "percent";
    _this3.content = isPercent ? content.toFixed(1) : content.toLocaleString();

    _this3.render();

    return _this3;
  }

  _createClass(NumberCell, [{
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(NumberCell.prototype), "render", this).call(this);

      this.element.appendChild(document.createTextNode(this.content));
    }
  }]);

  return NumberCell;
}(Cell);

var BarGraphCell = /*#__PURE__*/function (_Cell4) {
  _inherits(BarGraphCell, _Cell4);

  var _super4 = _createSuper(BarGraphCell);

  function BarGraphCell(content, className, data) {
    var _this4;

    _classCallCheck(this, BarGraphCell);

    _this4 = _super4.call(this, className); // BarGraphCell should only ever be passed one number

    _this4.content = content["values"][0];
    _this4.average = data["averages"][0]["value"];
    _this4.range = data;

    _this4.render();

    return _this4;
  }

  _createClass(BarGraphCell, [{
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(BarGraphCell.prototype), "render", this).call(this); // create the horizontal bar and scale its width by the value and range


      var bar = document.createElement("div");
      bar.className = "viz-bar";
      bar.style.width = "".concat(this.content / this.range["end"] * 100, "%"); // label the bar with the difference between value and average

      var label = document.createElement("div");
      var diff = this.content - this.average;

      if (diff > 0) {
        label.textContent = "+".concat(diff.toFixed(1));
      }

      if (diff < 0) {
        label.textContent = "".concat(diff.toFixed(1));
      }

      label.className = "bar-label";
      bar.appendChild(label);
      this.element.appendChild(bar); // add the vertical line denoting the average

      var averageLine = document.createElement("div");
      averageLine.className = "bar-average-line green";
      averageLine.style.left = "".concat(this.average / this.range["end"] * 100, "%");
      this.element.appendChild(averageLine);
    }
  }]);

  return BarGraphCell;
}(Cell);

var DistributionBarCell = /*#__PURE__*/function (_Cell5) {
  _inherits(DistributionBarCell, _Cell5);

  var _super5 = _createSuper(DistributionBarCell);

  function DistributionBarCell(content, className) {
    var _this5;

    _classCallCheck(this, DistributionBarCell);

    _this5 = _super5.call(this, className);
    _this5.content = content["values"];

    _this5.render();

    return _this5;
  }

  _createClass(DistributionBarCell, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      _get(_getPrototypeOf(DistributionBarCell.prototype), "render", this).call(this); // create bars for each distribution


      this.content.forEach(function (dist) {
        var bar = document.createElement("div");
        bar.className = "viz-bar ".concat(dist["className"]);

        _this6.element.appendChild(bar);
      }); // configure sizes of distribution bars

      var numDists = this.content.length;
      var gapSize = 2,
          gapUnits = "px";
      var gapCorrection = Math.round((numDists - 1) * gapSize / numDists);
      var distWidths = this.content.map(function (dist) {
        return "calc(".concat(dist["value"], "% - ").concat(gapCorrection).concat(gapUnits, ")");
      });
      this.element.style.display = "inline-grid";
      this.element.style.columnGap = "".concat(gapSize).concat(gapUnits);
      this.element.style.gridTemplateColumns = distWidths.join(" ");
    }
  }]);

  return DistributionBarCell;
}(Cell);

var NumberLineCell = /*#__PURE__*/function (_Cell6) {
  _inherits(NumberLineCell, _Cell6);

  var _super6 = _createSuper(NumberLineCell);

  function NumberLineCell(content, className, data) {
    var _this7;

    _classCallCheck(this, NumberLineCell);

    _this7 = _super6.call(this, className);
    _this7.content = content["values"];
    _this7.averages = data["averages"];
    _this7.range = data;
    _this7.vizColors = ["green", "purple"];

    _this7.render();

    return _this7;
  }

  _createClass(NumberLineCell, [{
    key: "render",
    value: function render() {
      var _this8 = this;

      _get(_getPrototypeOf(NumberLineCell.prototype), "render", this).call(this); // create the number line


      var bar = document.createElement("div");
      bar.className = "viz-number-line";
      this.element.appendChild(bar); // create the points on the number line

      this.content.forEach(function (value, i) {
        var point = document.createElement("div");
        point.className = "viz-number-line-point ".concat(_this8.vizColors[i]);
        point.style.left = "".concat((value - _this8.range["start"]) / _this8.range["end"] * 100, "%");

        _this8.element.appendChild(point);
      }); // add the vertical line denoting the average

      this.averages.forEach(function (average, i) {
        var averageLine = document.createElement("div");
        averageLine.className = "bar-average-line ".concat(_this8.vizColors[i]);
        averageLine.style.left = "".concat((average["value"] - _this8.range["start"]) / _this8.range["end"] * 100, "%");

        _this8.element.appendChild(averageLine);
      });
    }
  }]);

  return NumberLineCell;
}(Cell);

var HeaderCell = /*#__PURE__*/function (_Cell7) {
  _inherits(HeaderCell, _Cell7);

  var _super7 = _createSuper(HeaderCell);

  function HeaderCell(content, className, sortCol, sortDir, initSort, table, id) {
    var _this9;

    _classCallCheck(this, HeaderCell);

    _this9 = _super7.call(this, className);
    _this9.content = content;
    _this9.sortCol = sortCol;
    _this9.sortDir = sortDir;
    _this9.initSort = initSort;
    _this9.table = table;
    _this9.id = id;

    _this9.render(); // add event listener for sorting


    if (_this9.sortCol) {
      _this9.element.addEventListener("click", function () {
        // always default to descending sort
        if (_this9.table.sortCol !== _this9.id) _this9.sortDir = -1;

        var classNameWithSort = _this9.getClassName();

        _this9.table.setSortColumn(_this9.id);

        _this9.table.setSortDirection(_this9.sortDir);

        _this9.table.sort(false); // after sorting set the class to ensure its the only column highlighted


        _this9.setElementClass(classNameWithSort, true); // toggle sort direction for the next click


        _this9.sortDir *= -1;
      });
    } // if we're initializing this sort, update sortDir for the next click


    if (_this9.initSort) {
      _this9.sortDir *= -1;
    }

    return _this9;
  }

  _createClass(HeaderCell, [{
    key: "render",
    value: function render() {
      var cell = document.createElement("th");
      cell.className = this.className;
      this.element = cell;

      if (this.sortCol) {
        var classNameWithSort = this.getClassName();
        this.setElementClass(classNameWithSort, this.initSort); // if this is a sortable column, create wrapper with caret and text

        var wrapper = document.createElement("div");
        wrapper.className = "th-wrapper";
        wrapper.innerHTML = CARET_SVG;
        var text = document.createElement("div");
        text.appendChild(document.createTextNode(this.content));
        wrapper.appendChild(text);
        cell.appendChild(wrapper);
      } else {
        // otherwise, all we need is the text
        cell.appendChild(document.createTextNode(this.content));
      }
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      var sortClass = this.sortDir > 0 ? "sort-asc" : this.sortDir < 0 ? "sort-desc" : "";
      return "".concat(this.className, " ").concat(sortClass);
    }
  }, {
    key: "setElementClass",
    value: function setElementClass(className, addSorted) {
      var sorted = addSorted ? "sorted" : "";

      _get(_getPrototypeOf(HeaderCell.prototype), "setElementClass", this).call(this, "".concat(className, " ").concat(sorted));
    }
  }]);

  return HeaderCell;
}(Cell);

var VizHeaderCell = /*#__PURE__*/function (_HeaderCell) {
  _inherits(VizHeaderCell, _HeaderCell);

  var _super8 = _createSuper(VizHeaderCell);

  function VizHeaderCell(data, className, sortCol, sortDir, initSort, table, id) {
    _classCallCheck(this, VizHeaderCell);

    return _super8.call(this, data, className, sortCol, sortDir, initSort, table, id);
  }

  _createClass(VizHeaderCell, [{
    key: "render",
    value: function render() {
      var start = this.content["start"];
      var end = this.content["end"];
      var unit = this.content["unit"];
      var cell = document.createElement("th");
      cell.className = this.className; // create start, end, and average tick/number elements

      var startText = unit === "dollars" ? "$".concat(Math.round(start / 1000), "K") : start;
      var endText = unit === "dollars" ? "$".concat(Math.round(end / 1000), "K") : end;
      var startElement = this.createTickElement(startText, "start-num");
      var endElement = this.createTickElement(endText, "end-num"); // add all the elements to the cell

      [startElement, endElement].forEach(function (element) {
        cell.appendChild(element);
      });
      this.element = cell;
    }
  }, {
    key: "createTickElement",
    value: function createTickElement(content, className, averageColor) {
      var wrapper = document.createElement("div");
      wrapper.className = className;
      var text = document.createElement("div");
      text.innerHTML = content;
      if (className.includes("average")) text.className = "average-text";
      wrapper.appendChild(text); // adjust padding based on number of digits

      if (className === "start-num" && content.toString().length === 1) {
        wrapper.style.paddingLeft = "10px";
      } else if (className === "end-num" && content.toString().length <= 3) {
        wrapper.style.paddingRight = "".concat(8 - content.toString().length, "px");
      } // adjust padding based on number of digits


      if (className === "end-num" && content.toString().length === 2) {
        wrapper.style.paddingRight = "".concat(1, "px");
      } // create the vertical tick underneath the number


      var line = document.createElement("div");
      line.className = "".concat(className.includes("average") ? "average-line" : "viz-line");
      if (averageColor) line.className += " ".concat(averageColor);
      wrapper.appendChild(line);
      return wrapper;
    }
  }]);

  return VizHeaderCell;
}(HeaderCell);

var HeaderRow = /*#__PURE__*/function () {
  function HeaderRow(cells) {
    _classCallCheck(this, HeaderRow);

    this.cells = cells;
    this.render();
  }

  _createClass(HeaderRow, [{
    key: "render",
    value: function render() {
      var row = document.createElement("tr");
      this.cells.forEach(function (cell) {
        row.appendChild(cell.element);
      });
      this.element = row;
    }
  }, {
    key: "clearedSortedCells",
    value: function clearedSortedCells() {
      this.cells.forEach(function (cell) {
        var className = cell.getClassName();
        cell.setElementClass(className, false);
      });
    }
  }]);

  return HeaderRow;
}();

var BodyRow = /*#__PURE__*/function () {
  function BodyRow(cells, outlier, isHidden) {
    var isBold = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, BodyRow);

    this.cells = cells;
    this.outlier = outlier;
    this.isHidden = isHidden;
    this.isBold = isBold;
  }

  _createClass(BodyRow, [{
    key: "setIsHidden",
    value: function setIsHidden(isHidden) {
      this.isHidden = isHidden;
    } // Returns a list of DOM nodes to add to table body

  }, {
    key: "render",
    value: function render(sorted) {
      var _this10 = this;

      var row = document.createElement("tr");
      this.element = row;

      if (this.isHidden) {
        return [];
      }

      row.className = "";
      this.cells.forEach(function (cell, i) {
        cell.setElementClass(cell.className);
        if (i === sorted) cell.addElementClass("sorted");
        if (_this10.isBold) cell.addElementClass("bold-cell");
        row.appendChild(cell.element);
      });
      return [this.element];
    }
  }]);

  return BodyRow;
}();

var CollapsibleBodyRow = /*#__PURE__*/function (_BodyRow) {
  _inherits(CollapsibleBodyRow, _BodyRow);

  var _super9 = _createSuper(CollapsibleBodyRow);

  function CollapsibleBodyRow(cells, outlier, collapseRows, isHidden, isCollapsed) {
    var _this11;

    _classCallCheck(this, CollapsibleBodyRow);

    _this11 = _super9.call(this, cells, outlier, isHidden);
    _this11.isCollapsed = isCollapsed;
    _this11.collapseRows = collapseRows;
    return _this11;
  }

  _createClass(CollapsibleBodyRow, [{
    key: "render",
    value: function render(sorted) {
      var rowElements = _get(_getPrototypeOf(CollapsibleBodyRow.prototype), "render", this).call(this, sorted);

      this.element.className = "collapsible ".concat(this.isCollapsed ? "collapsed" : "expanded");

      if (rowElements.length > 0) {
        var rowNode = rowElements[0];
        var caretCell = rowNode.firstChild;
        caretCell.innerHTML = CARET_SVG;

        if (this.isCollapsed) {
          caretCell.classList.add("caret-rotated");
        } else {
          caretCell.classList.remove("caret-rotated");
        }
      }

      var subRowElements = this.collapseRows.flatMap(function (row) {
        return row.render(sorted);
      });
      return [].concat(_toConsumableArray(rowElements), _toConsumableArray(subRowElements));
    }
  }]);

  return CollapsibleBodyRow;
}(BodyRow);

var Table = /*#__PURE__*/function () {
  function Table(data, columnConfigs, initSort, tableContainer) {
    var summaryRowData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var isVisible = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

    _classCallCheck(this, Table);

    this.classNames = columnConfigs.map(function (config) {
      return config.class;
    });
    this.headers = columnConfigs.map(function (config) {
      return config.header;
    });
    this.data = data;
    this.container = tableContainer;
    this.element = tableContainer.getElementsByTagName("table")[0];
    this.showOutliers = false;
    this.summaryRowData = summaryRowData;
    this.validate();
    this.searchCols = columnConfigs.map(function (config) {
      return config.searchable;
    });
    this.searchTerms = [];
    this.isTruncated = true;
    this.sortCols = columnConfigs.map(function (config) {
      return config.sortable;
    }); // start with sorting descending

    this.sortCol = initSort;
    this.sortDir = -1;
    this.isVisible = isVisible;
    this.header = this.getHeaderRow();
    this.init(); // Initial table DOM setup

    this.sort(true); // this initial sort populates this.rows
  }

  _createClass(Table, [{
    key: "validate",
    value: function validate() {
      var _this12 = this;

      if (this.classNames.length !== this.headers.length) {
        throw new Error("Number of class names does not match number of headers");
      }

      if (this.data.some(function (row) {
        return row.data.length != _this12.headers.length;
      })) {
        throw new Error("".concat(this.headers.length, " columns of data required"));
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this13 = this;

      // create header row
      var thead = this.element.getElementsByTagName("thead")[0];
      thead.appendChild(this.header.element); // set up search bar

      var searchMenu = this.container.getElementsByClassName("menu")[0];
      var searchOptions = this.data.flatMap(function (row) {
        var rowOptions = row.data.flatMap(function (value, i) {
          return _this13.searchCols[i] ? [value] : [];
        });
        var subRowOptions = row.collapseData ? row.collapseData.map(function (subRow) {
          return subRow.data[1];
        }) : [];
        return rowOptions.concat(subRowOptions);
      }); // Current behavior is to alphabetically sort all options,
      // potentially mixing values from different columns
      // TODO: Consider dividing values by column

      searchOptions.sort();
      searchMenu.textContent = "";
      searchOptions.forEach(function (searchOption) {
        var element = document.createElement("div");
        element.className = "item";
        element.innerText = searchOption;
        searchMenu.appendChild(element);
      });
      var searchInput = this.container.getElementsByTagName("input")[0];
      searchInput.addEventListener("change", function (e) {
        var searchValue = e.target.value;
        _this13.searchTerms = searchValue.split(";").filter(function (s) {
          return s !== "";
        });
        _this13.rows = _this13.getRows();

        _this13.render();
      }); // set up view all button

      var viewAllButton = this.container.getElementsByClassName("view-all-btn")[0];
      viewAllButton.innerText = this.isTruncated ? VIEW_ALL : VIEW_LESS;
      viewAllButton.addEventListener("click", function () {
        _this13.isTruncated = !_this13.isTruncated;
        viewAllButton.innerText = _this13.isTruncated ? VIEW_ALL : VIEW_LESS;
        _this13.rows = _this13.getRows();

        _this13.render();
      }); // set up outlier button

      var outlierButtons = this.container.getElementsByClassName("outliers-btn");

      if (outlierButtons.length > 0) {
        var outlierButton = outlierButtons[0];
        outlierButton.addEventListener("click", function (e) {
          if (_this13.toggleOutliers()) {
            e.target.classList.add("showing");
          } else {
            e.target.classList.remove("showing");
          }
        });
      }
    }
  }, {
    key: "getHeaderRow",
    value: function getHeaderRow() {
      var _this14 = this;

      var headerCells = this.headers.map(function (header, i) {
        var CellType = "text" in header ? HeaderCell : VizHeaderCell;
        return new CellType(CellType === HeaderCell ? header["text"] : header, _this14.classNames[i], _this14.sortCols[i], // 1 designates ascending; -1, descending (default); 0, not sortable
        _this14.sortCols[i] ? -1 : 0, i === _this14.sortCol, _this14, i);
      });
      return new HeaderRow(headerCells);
    }
  }, {
    key: "getCells",
    value: function getCells(data, isOutlier) {
      var _this15 = this;

      return data.map(function (cell, j) {
        var CellType = TextCell;

        if (typeof cell == "number") {
          CellType = NumberCell;
        } else if (_typeof(cell) == "object") {
          if (cell["type"] === "bar") {
            CellType = BarGraphCell;
          } else if (cell["type"] === "line") {
            CellType = NumberLineCell;
          } else if (cell["type"] === "styled") {
            CellType = StyledTextCell;
          } else if (cell["type"] === "dist") {
            CellType = DistributionBarCell;
          }
        } // for county names, append an asterisk if it's an outlier
        // there could be an empty column for carets, ignore those


        if (typeof cell === "string" && cell.length > 0 && j <= 1 && isOutlier) cell += "*";
        return new CellType(cell, _this15.classNames[j], _this15.headers[j]);
      });
    }
  }, {
    key: "getRows",
    value: function getRows() {
      var _this16 = this;

      var numVisibleRows = 0;
      var rows = this.data.map(function (row) {
        // Specify how data will be rendered
        var cells = _this16.getCells(row.data, row.outlier);

        var isRowSearched = _this16.searchTerms.some(function (searchTerm) {
          return row.data.some(function (value, i) {
            return (// Search term is selected from dropdown so
              // is guaranteed to be equal to a value
              _this16.searchCols[i] && value.toLowerCase() === searchTerm.toLowerCase()
            );
          });
        });

        var isTruncated = _this16.isTruncated && numVisibleRows >= NUM_TRUNCATED_ROWS;
        var isHiddenOutlier = row.outlier && !_this16.showOutliers;
        var isRowVisible = isRowSearched || !isTruncated && !isHiddenOutlier && _this16.searchTerms.length === 0;

        if (row.collapseData !== undefined) {
          var collapseRows = row.collapseData.map(function (collapseRow) {
            var isSubRowSearched = _this16.searchTerms.some(function (searchTerm) {
              return (// For simplicity, only the first sub-row column is searchable
                collapseRow.data[1].toLowerCase() === searchTerm.toLowerCase()
              );
            });

            var isSubRowHiddenOutlier = collapseRow.outlier && !_this16.showOutliers;
            var isSubRowVisible = isSubRowSearched || !row.isCollapsed && !isSubRowHiddenOutlier;
            return new BodyRow(_this16.getCells(collapseRow.data, collapseRow.outlier), collapseRow.outlier, !isSubRowVisible);
          });
          var hasVisibleChildRow = collapseRows.some(function (bodyRow) {
            return !bodyRow.isHidden;
          });
          var isParentRowVisible = isRowVisible || hasVisibleChildRow;
          if (isParentRowVisible) numVisibleRows += collapseRows.reduce(function (acc, bodyRow) {
            return !bodyRow.isHidden ? acc + 1 : acc;
          }, 1);
          return new CollapsibleBodyRow(cells, row.outlier, collapseRows, !isParentRowVisible, !hasVisibleChildRow && row.isCollapsed);
        } else {
          if (isRowVisible) numVisibleRows++;
          return new BodyRow(cells, row.outlier, !isRowVisible);
        }
      });

      if (this.summaryRowData.length > 0) {
        var cells = this.getCells(this.summaryRowData);
        rows.unshift(new BodyRow(cells, false, false, true));
      }

      return rows;
    }
  }, {
    key: "setSortColumn",
    value: function setSortColumn(i) {
      this.sortCol = i;
    }
  }, {
    key: "setSortDirection",
    value: function setSortDirection(sortDir) {
      this.sortDir = sortDir;
    }
  }, {
    key: "getSortable",
    value: function getSortable(data) {
      if (_typeof(data) === "object" || /\d/.test(data)) {
        var value = _typeof(data) === "object" ? data["value"] : data;
        return Number(value.replace ? value.replace(/[^\d.-]/g, "") : value);
      }

      return data;
    }
  }, {
    key: "sort",
    value: function sort(initialSort) {
      var _this17 = this;

      if (!initialSort) this.header.clearedSortedCells();
      this.data.sort(function (a, b) {
        var val1 = a.data[_this17.sortCol];
        var val2 = b.data[_this17.sortCol]; // Determine if value is treated as a number or a string

        var i = _this17.getSortable(val1);

        var j = _this17.getSortable(val2);

        if (i < j) {
          return _this17.sortDir * -1;
        } else if (i > j) {
          return _this17.sortDir;
        } else {
          return 0;
        }
      });
      this.rows = this.getRows();
      this.render();
    }
  }, {
    key: "toggleOutliers",
    value: function toggleOutliers() {
      this.showOutliers = !this.showOutliers;
      this.rows = this.getRows();
      this.render();
      return this.showOutliers;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.isVisible = false;
      this.render();
    }
  }, {
    key: "show",
    value: function show() {
      this.isVisible = true;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var _this18 = this;

      if (!this.isVisible) {
        this.container.classList.add("hidden");
      } else {
        this.container.classList.remove("hidden"); // clear rows

        var tbody = this.element.getElementsByTagName("tbody")[0];
        tbody.textContent = ""; // repopulate with updated rows

        this.rows.forEach(function (row, i) {
          var domNodes = row.render(_this18.sortCol);
          domNodes.forEach(function (node) {
            return tbody.appendChild(node);
          }); // set up collapse toggle

          if (row instanceof CollapsibleBodyRow) {
            row.element.addEventListener("click", function () {
              _this18.data[i].isCollapsed = !row.isCollapsed;
              _this18.rows = _this18.getRows();

              _this18.render();
            });
          }
        });
      }
    }
  }]);

  return Table;
}();

exports.Table = Table;

var SwitchableTable = /*#__PURE__*/function () {
  function SwitchableTable(leftTable, rightTable, container) {
    _classCallCheck(this, SwitchableTable);

    this.leftTable = leftTable;
    this.rightTable = rightTable;
    this.container = container; // set up switch buttons

    var rightSwitch = this.leftTable.container.getElementsByClassName("switch-container")[0].getElementsByClassName("right")[0];
    rightSwitch.addEventListener("click", this.showRightTable.bind(this));
    var leftSwitch = this.rightTable.container.getElementsByClassName("switch-container")[0].getElementsByClassName("left")[0];
    leftSwitch.addEventListener("click", this.showLeftTable.bind(this)); // show left table by default

    this.showLeftTable();
  }

  _createClass(SwitchableTable, [{
    key: "showLeftTable",
    value: function showLeftTable() {
      this.leftTable.show();
      this.rightTable.hide();
    }
  }, {
    key: "showRightTable",
    value: function showRightTable() {
      this.rightTable.show();
      this.leftTable.hide();
    }
  }]);

  return SwitchableTable;
}();

exports.SwitchableTable = SwitchableTable;
},{}],"src/js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDJ_DATA = exports.PRETRIAL_SPENDING_DATA = exports.BAIL_RETENTION_FEE_DATA = exports.BAIL_POSTING_DATA = exports.BAIL_RACE_AMOUNT_DATA = exports.BAIL_RACE_RATE_DATA = exports.ROR_RATE_DATA = exports.BAIL_RATE_DATA = void 0;

/*
 * To get the data in this format, export a CSV with the columns in the order
 * you want. In the case of BAIL_RACE_DATA, I had [county, black %, white %,
 * difference]. I pasted the contents of the CSV into this file (you can wrap
 * multi-line strings in ``) and created the following script to convert from
 * that string to the output array. JSON.stringify will output something with
 * no spacing, so i just pasted the result into a JSON formatter to get the
 * desired format (https://jsonformatter.org).
 *
 * const excelData = ``;
 * const data = [];
 * const lines = excelData.split("\n");
 * lines.forEach((line, i) => {
 *   const cells = line.split(",");
 *   const diff = parseFloat(cells[3]);
 *   const entry = {
 *     "data": [
 *       cells[0], // county
 *       {
 *         "type": "line", // visualization
 *         "values": [parseFloat(cells[1]), parseFloat(cells[2])]
 *       },
 *       parseFloat(cells[1]), // black cash bail rate
 *       parseFloat(cells[2]), // white cash bail rate
 *       `${diff > 0 ? "+" : ""}${diff.toFixed(1)}` // overall rate
 *     ],
 *     "outlier": false
 *   };
 *   data.push(entry);
 * });
 *
 * console.log(JSON.stringify(data));
 */
var BAIL_RATE_DATA = [{
  "data": ["Adams", {
    "type": "bar",
    "values": [30.18867925]
  }, 30.18867925, 775, 2537],
  "outlier": false
}, {
  "data": ["Allegheny", {
    "type": "bar",
    "values": [43.50802205]
  }, 43.50802205, 13884, 31723],
  "outlier": false
}, {
  "data": ["Armstrong", {
    "type": "bar",
    "values": [41.05888709]
  }, 41.05888709, 742, 1808],
  "outlier": false
}, {
  "data": ["Beaver", {
    "type": "bar",
    "values": [49.05179283]
  }, 49.05179283, 4959, 5967],
  "outlier": false
}, {
  "data": ["Bedford", {
    "type": "bar",
    "values": [38.63636364]
  }, 38.63636364, 563, 1460],
  "outlier": false
}, {
  "data": ["Berks", {
    "type": "bar",
    "values": [50.92425977]
  }, 50.92425977, 6036, 11688],
  "outlier": false
}, {
  "data": ["Blair", {
    "type": "bar",
    "values": [34.04638145]
  }, 34.04638145, 1674, 4826],
  "outlier": false
}, {
  "data": ["Bradford", {
    "type": "bar",
    "values": [45.49865229]
  }, 45.49865229, 824, 1805],
  "outlier": false
}, {
  "data": ["Bucks", {
    "type": "bar",
    "values": [32.41325938]
  }, 32.41325938, 4959, 15185],
  "outlier": false
}, {
  "data": ["Butler", {
    "type": "bar",
    "values": [31.15234375]
  }, 31.15234375, 626, 2017],
  "outlier": false
}, {
  "data": ["Cambria", {
    "type": "bar",
    "values": [44.29388101]
  }, 44.29388101, 2059, 4613],
  "outlier": false
}, {
  "data": ["Cameron", {
    "type": "bar",
    "values": [21.67832168]
  }, 21.67832168, 30, 112],
  "outlier": false
}, {
  "data": ["Carbon", {
    "type": "bar",
    "values": [32.99299883]
  }, 32.99299883, 1098, 3307],
  "outlier": false
}, {
  "data": ["Centre", {
    "type": "bar",
    "values": [26.08333333]
  }, 26.08333333, 871, 3370],
  "outlier": false
}, {
  "data": ["Chester", {
    "type": "bar",
    "values": [38.0970325]
  }, 38.0970325, 3968, 10351],
  "outlier": false
}, {
  "data": ["Clarion", {
    "type": "bar",
    "values": [40]
  }, 40, 487, 1193],
  "outlier": false
}, {
  "data": ["Clearfield", {
    "type": "bar",
    "values": [36.28318584]
  }, 36.28318584, 734, 2002],
  "outlier": false
}, {
  "data": ["Clinton", {
    "type": "bar",
    "values": [36.92628651]
  }, 36.92628651, 527, 1421],
  "outlier": false
}, {
  "data": ["Columbia", {
    "type": "bar",
    "values": [38.18897638]
  }, 38.18897638, 667, 1722],
  "outlier": false
}, {
  "data": ["Crawford", {
    "type": "bar",
    "values": [28.8973384]
  }, 28.8973384, 225, 768],
  "outlier": false
}, {
  "data": ["Cumberland", {
    "type": "bar",
    "values": [38.5278224]
  }, 38.5278224, 2593, 6732],
  "outlier": false
}, {
  "data": ["Dauphin", {
    "type": "bar",
    "values": [42.44132779]
  }, 42.44132779, 5850, 13585],
  "outlier": false
}, {
  "data": ["Delaware", {
    "type": "bar",
    "values": [55.68060922]
  }, 55.68060922, 9514, 16808],
  "outlier": false
}, {
  "data": ["Elk", {
    "type": "bar",
    "values": [28.62318841]
  }, 28.62318841, 229, 799],
  "outlier": false
}, {
  "data": ["Erie", {
    "type": "bar",
    "values": [43.95330739]
  }, 43.95330739, 2750, 6198],
  "outlier": false
}, {
  "data": ["Fayette", {
    "type": "bar",
    "values": [44.27074081]
  }, 44.27074081, 2463, 5546],
  "outlier": false
}, {
  "data": ["Forest", {
    "type": "bar",
    "values": [34.75609756]
  }, 34.75609756, 50, 123],
  "outlier": false
}, {
  "data": ["Franklin", {
    "type": "bar",
    "values": [37.47902685]
  }, 37.47902685, 1772, 4681],
  "outlier": false
}, {
  "data": ["Fulton", {
    "type": "bar",
    "values": [28.67298578]
  }, 28.67298578, 113, 383],
  "outlier": false
}, {
  "data": ["Greene", {
    "type": "bar",
    "values": [37.44343891]
  }, 37.44343891, 324, 834],
  "outlier": false
}, {
  "data": ["Huntingdon", {
    "type": "bar",
    "values": [38.96907216]
  }, 38.96907216, 552, 1353],
  "outlier": false
}, {
  "data": ["Indiana", {
    "type": "bar",
    "values": [35.01070664]
  }, 35.01070664, 322, 922],
  "outlier": false
}, {
  "data": ["Jefferson", {
    "type": "bar",
    "values": [38.55721393]
  }, 38.55721393, 460, 1166],
  "outlier": false
}, {
  "data": ["Juniata", {
    "type": "bar",
    "values": [34.46215139]
  }, 34.46215139, 168, 455],
  "outlier": false
}, {
  "data": ["Lackawanna", {
    "type": "bar",
    "values": [52.63500325]
  }, 52.63500325, 3052, 5783],
  "outlier": false
}, {
  "data": ["Lancaster", {
    "type": "bar",
    "values": [44.93240475]
  }, 44.93240475, 5430, 11977],
  "outlier": false
}, {
  "data": ["Lawrence", {
    "type": "bar",
    "values": [48.92407633]
  }, 48.92407633, 1182, 2398],
  "outlier": false
}, {
  "data": ["Lebanon", {
    "type": "bar",
    "values": [38.70437956]
  }, 38.70437956, 2085, 5329],
  "outlier": false
}, {
  "data": ["Lehigh", {
    "type": "bar",
    "values": [54.88215488]
  }, 54.88215488, 6526, 11845],
  "outlier": false
}, {
  "data": ["Luzerne", {
    "type": "bar",
    "values": [38.28885249]
  }, 38.28885249, 3828, 9950],
  "outlier": false
}, {
  "data": ["Lycoming", {
    "type": "bar",
    "values": [34.68169761]
  }, 34.68169761, 1557, 4475],
  "outlier": false
}, {
  "data": ["McKean", {
    "type": "bar",
    "values": [42.38134888]
  }, 42.38134888, 488, 1147],
  "outlier": false
}, {
  "data": ["Mercer", {
    "type": "bar",
    "values": [36.12542955]
  }, 36.12542955, 1653, 4571],
  "outlier": false
}, {
  "data": ["Mifflin", {
    "type": "bar",
    "values": [48.49498328]
  }, 48.49498328, 721, 1477],
  "outlier": false
}, {
  "data": ["Monroe", {
    "type": "bar",
    "values": [32.79661017]
  }, 32.79661017, 1910, 5757],
  "outlier": false
}, {
  "data": ["Montgomery", {
    "type": "bar",
    "values": [33.63556165]
  }, 33.63556165, 6723, 19702],
  "outlier": false
}, {
  "data": ["Montour", {
    "type": "bar",
    "values": [35.19163763]
  }, 35.19163763, 100, 275],
  "outlier": false
}, {
  "data": ["Northampton", {
    "type": "bar",
    "values": [45.83529967]
  }, 45.83529967, 3804, 8234],
  "outlier": false
}, {
  "data": ["Northumberland", {
    "type": "bar",
    "values": [36]
  }, 36, 869, 2414],
  "outlier": false
}, {
  "data": ["Perry", {
    "type": "bar",
    "values": [28.98148148]
  }, 28.98148148, 305, 1064],
  "outlier": false
}, {
  "data": ["Philadelphia", {
    "type": "bar",
    "values": [50.12216352]
  }, 50.12216352, 32072, 63180],
  "outlier": false
}, {
  "data": ["Pike", {
    "type": "bar",
    "values": [34.16738568]
  }, 34.16738568, 382, 1109],
  "outlier": false
}, {
  "data": ["Potter", {
    "type": "bar",
    "values": [23.36601307]
  }, 23.36601307, 142, 593],
  "outlier": false
}, {
  "data": ["Schuylkill", {
    "type": "bar",
    "values": [37.74187822]
  }, 37.74187822, 2100, 5531],
  "outlier": false
}, {
  "data": ["Snyder", {
    "type": "bar",
    "values": [35.92870544]
  }, 35.92870544, 381, 1060],
  "outlier": false
}, {
  "data": ["Somerset", {
    "type": "bar",
    "values": [25]
  }, 25, 498, 1962],
  "outlier": false
}, {
  "data": ["Sullivan", {
    "type": "bar",
    "values": [36.44859813]
  }, 36.44859813, 36, 103],
  "outlier": false
}, {
  "data": ["Susquehanna", {
    "type": "bar",
    "values": [40.32663317]
  }, 40.32663317, 317, 783],
  "outlier": false
}, {
  "data": ["Tioga", {
    "type": "bar",
    "values": [36.38603696]
  }, 36.38603696, 868, 2385],
  "outlier": false
}, {
  "data": ["Union", {
    "type": "bar",
    "values": [25.36136662]
  }, 25.36136662, 186, 743],
  "outlier": false
}, {
  "data": ["Venango", {
    "type": "bar",
    "values": [37.84477229]
  }, 37.84477229, 586, 1549],
  "outlier": false
}, {
  "data": ["Warren", {
    "type": "bar",
    "values": [40.61393152]
  }, 40.61393152, 338, 831],
  "outlier": false
}, {
  "data": ["Washington", {
    "type": "bar",
    "values": [38.93688681]
  }, 38.93688681, 2596, 6615],
  "outlier": false
}, {
  "data": ["Wayne", {
    "type": "bar",
    "values": [37.20349563]
  }, 37.20349563, 286, 779],
  "outlier": false
}, {
  "data": ["Westmoreland", {
    "type": "bar",
    "values": [31.71662559]
  }, 31.71662559, 3840, 11934],
  "outlier": false
}, {
  "data": ["Wyoming", {
    "type": "bar",
    "values": [35.68118628]
  }, 35.68118628, 377, 1056],
  "outlier": false
}, {
  "data": ["York", {
    "type": "bar",
    "values": [44.27380952]
  }, 44.27380952, 7356, 16539],
  "outlier": false
}];
exports.BAIL_RATE_DATA = BAIL_RATE_DATA;
var ROR_RATE_DATA = [{
  "data": ["Adams", {
    "type": "bar",
    "values": [24.8748556]
  }, 24.8748556, 631, 2537],
  "outlier": false
}, {
  "data": ["Allegheny", {
    "type": "bar",
    "values": [29.55770303]
  }, 29.55770303, 9377, 31723],
  "outlier": false
}, {
  "data": ["Armstrong", {
    "type": "bar",
    "values": [43.273906]
  }, 43.273906, 782, 1808],
  "outlier": false
}, {
  "data": ["Beaver", {
    "type": "bar",
    "values": [35.80876494]
  }, 35.80876494, 2137, 5967],
  "outlier": false
}, {
  "data": ["Bedford", {
    "type": "bar",
    "values": [1.804812834]
  }, 1.804812834, 26, 1460],
  "outlier": false
}, {
  "data": ["Berks", {
    "type": "bar",
    "values": [15.21347947]
  }, 15.21347947, 1778, 11688],
  "outlier": false
}, {
  "data": ["Blair", {
    "type": "bar",
    "values": [0.3598560576]
  }, 0.3598560576, 17, 4826],
  "outlier": false
}, {
  "data": ["Bradford", {
    "type": "bar",
    "values": [11.53638814]
  }, 11.53638814, 208, 1805],
  "outlier": false
}, {
  "data": ["Bucks", {
    "type": "bar",
    "values": [17.70282471]
  }, 17.70282471, 2688, 15185],
  "outlier": false
}, {
  "data": ["Butler", {
    "type": "bar",
    "values": [57.27539063]
  }, 57.27539063, 1155, 2017],
  "outlier": false
}, {
  "data": ["Cambria", {
    "type": "bar",
    "values": [21.61761592]
  }, 21.61761592, 997, 4613],
  "outlier": false
}, {
  "data": ["Cameron", {
    "type": "bar",
    "values": [0]
  }, 0, 0, 112],
  "outlier": true
}, {
  "data": ["Carbon", {
    "type": "bar",
    "values": [13.12718786]
  }, 13.12718786, 434, 3307],
  "outlier": false
}, {
  "data": ["Centre", {
    "type": "bar",
    "values": [61.55555556]
  }, 61.55555556, 2074, 3370],
  "outlier": false
}, {
  "data": ["Chester", {
    "type": "bar",
    "values": [20.7253886]
  }, 20.7253886, 2145, 10351],
  "outlier": false
}, {
  "data": ["Clarion", {
    "type": "bar",
    "values": [25.70281124]
  }, 25.70281124, 307, 1193],
  "outlier": false
}, {
  "data": ["Clearfield", {
    "type": "bar",
    "values": [0.09832841691]
  }, 0.09832841691, 2, 2002],
  "outlier": false
}, {
  "data": ["Clinton", {
    "type": "bar",
    "values": [11.40472879]
  }, 11.40472879, 162, 1421],
  "outlier": false
}, {
  "data": ["Columbia", {
    "type": "bar",
    "values": [19.6287964]
  }, 19.6287964, 338, 1722],
  "outlier": false
}, {
  "data": ["Crawford", {
    "type": "bar",
    "values": [53.99239544]
  }, 53.99239544, 415, 768],
  "outlier": false
}, {
  "data": ["Cumberland", {
    "type": "bar",
    "values": [41.36118008]
  }, 41.36118008, 2784, 6732],
  "outlier": false
}, {
  "data": ["Dauphin", {
    "type": "bar",
    "values": [18.47205582]
  }, 18.47205582, 2509, 13585],
  "outlier": false
}, {
  "data": ["Delaware", {
    "type": "bar",
    "values": [0.1063889356]
  }, 0.1063889356, 18, 16808],
  "outlier": false
}, {
  "data": ["Elk", {
    "type": "bar",
    "values": [0]
  }, 0, 0, 799],
  "outlier": true
}, {
  "data": ["Erie", {
    "type": "bar",
    "values": [36.48249027]
  }, 36.48249027, 2261, 6198],
  "outlier": false
}, {
  "data": ["Fayette", {
    "type": "bar",
    "values": [0.7816663706]
  }, 0.7816663706, 43, 5546],
  "outlier": false
}, {
  "data": ["Forest", {
    "type": "bar",
    "values": [12.80487805]
  }, 12.80487805, 16, 123],
  "outlier": true
}, {
  "data": ["Franklin", {
    "type": "bar",
    "values": [50.02097315]
  }, 50.02097315, 2341, 4681],
  "outlier": false
}, {
  "data": ["Fulton", {
    "type": "bar",
    "values": [51.42180095]
  }, 51.42180095, 197, 383],
  "outlier": false
}, {
  "data": ["Greene", {
    "type": "bar",
    "values": [26.58371041]
  }, 26.58371041, 222, 834],
  "outlier": false
}, {
  "data": ["Huntingdon", {
    "type": "bar",
    "values": [29.07216495]
  }, 29.07216495, 393, 1353],
  "outlier": false
}, {
  "data": ["Indiana", {
    "type": "bar",
    "values": [30.72805139]
  }, 30.72805139, 283, 922],
  "outlier": false
}, {
  "data": ["Jefferson", {
    "type": "bar",
    "values": [0.08291873964]
  }, 0.08291873964, 1, 1166],
  "outlier": false
}, {
  "data": ["Juniata", {
    "type": "bar",
    "values": [18.92430279]
  }, 18.92430279, 86, 455],
  "outlier": true
}, {
  "data": ["Lackawanna", {
    "type": "bar",
    "values": [1.805465192]
  }, 1.805465192, 104, 5783],
  "outlier": false
}, {
  "data": ["Lancaster", {
    "type": "bar",
    "values": [15.22326915]
  }, 15.22326915, 1823, 11977],
  "outlier": false
}, {
  "data": ["Lawrence", {
    "type": "bar",
    "values": [24.68534308]
  }, 24.68534308, 592, 2398],
  "outlier": false
}, {
  "data": ["Lebanon", {
    "type": "bar",
    "values": [3.52189781]
  }, 3.52189781, 188, 5329],
  "outlier": false
}, {
  "data": ["Lehigh", {
    "type": "bar",
    "values": [8.111417202]
  }, 8.111417202, 961, 11845],
  "outlier": false
}, {
  "data": ["Luzerne", {
    "type": "bar",
    "values": [29.28027748]
  }, 29.28027748, 2913, 9950],
  "outlier": false
}, {
  "data": ["Lycoming", {
    "type": "bar",
    "values": [0.3315649867]
  }, 0.3315649867, 15, 4475],
  "outlier": false
}, {
  "data": ["McKean", {
    "type": "bar",
    "values": [4.912572856]
  }, 4.912572856, 56, 1147],
  "outlier": false
}, {
  "data": ["Mercer", {
    "type": "bar",
    "values": [11.8556701]
  }, 11.8556701, 542, 4571],
  "outlier": false
}, {
  "data": ["Mifflin", {
    "type": "bar",
    "values": [0.4682274247]
  }, 0.4682274247, 7, 1477],
  "outlier": false
}, {
  "data": ["Monroe", {
    "type": "bar",
    "values": [17.01694915]
  }, 17.01694915, 980, 5757],
  "outlier": false
}, {
  "data": ["Montgomery", {
    "type": "bar",
    "values": [14.69809841]
  }, 14.69809841, 2896, 19702],
  "outlier": false
}, {
  "data": ["Montour", {
    "type": "bar",
    "values": [39.02439024]
  }, 39.02439024, 107, 275],
  "outlier": true
}, {
  "data": ["Northampton", {
    "type": "bar",
    "values": [15.20764512]
  }, 15.20764512, 1252, 8234],
  "outlier": false
}, {
  "data": ["Northumberland", {
    "type": "bar",
    "values": [11.87628866]
  }, 11.87628866, 287, 2414],
  "outlier": false
}, {
  "data": ["Perry", {
    "type": "bar",
    "values": [41.48148148]
  }, 41.48148148, 441, 1064],
  "outlier": false
}, {
  "data": ["Philadelphia", {
    "type": "bar",
    "values": [36.20163088]
  }, 36.20163088, 22872, 63180],
  "outlier": false
}, {
  "data": ["Pike", {
    "type": "bar",
    "values": [31.06125971]
  }, 31.06125971, 344, 1109],
  "outlier": false
}, {
  "data": ["Potter", {
    "type": "bar",
    "values": [16.50326797]
  }, 16.50326797, 98, 593],
  "outlier": true
}, {
  "data": ["Schuylkill", {
    "type": "bar",
    "values": [10.6870229]
  }, 10.6870229, 591, 5531],
  "outlier": false
}, {
  "data": ["Snyder", {
    "type": "bar",
    "values": [6.472795497]
  }, 6.472795497, 69, 1060],
  "outlier": false
}, {
  "data": ["Somerset", {
    "type": "bar",
    "values": [4.640718563]
  }, 4.640718563, 91, 1962],
  "outlier": false
}, {
  "data": ["Sullivan", {
    "type": "bar",
    "values": [1.869158879]
  }, 1.869158879, 2, 103],
  "outlier": true
}, {
  "data": ["Susquehanna", {
    "type": "bar",
    "values": [25.50251256]
  }, 25.50251256, 200, 783],
  "outlier": true
}, {
  "data": ["Tioga", {
    "type": "bar",
    "values": [13.05954825]
  }, 13.05954825, 311, 2385],
  "outlier": false
}, {
  "data": ["Union", {
    "type": "bar",
    "values": [47.70039422]
  }, 47.70039422, 354, 743],
  "outlier": false
}, {
  "data": ["Venango", {
    "type": "bar",
    "values": [0.1282873637]
  }, 0.1282873637, 2, 1549],
  "outlier": false
}, {
  "data": ["Warren", {
    "type": "bar",
    "values": [42.03069658]
  }, 42.03069658, 349, 831],
  "outlier": true
}, {
  "data": ["Washington", {
    "type": "bar",
    "values": [25.6113633]
  }, 25.6113633, 1694, 6615],
  "outlier": false
}, {
  "data": ["Wayne", {
    "type": "bar",
    "values": [34.58177278]
  }, 34.58177278, 269, 779],
  "outlier": false
}, {
  "data": ["Westmoreland", {
    "type": "bar",
    "values": [32.92518089]
  }, 32.92518089, 3929, 11934],
  "outlier": false
}, {
  "data": ["Wyoming", {
    "type": "bar",
    "values": [0.1853568119]
  }, 0.1853568119, 2, 1056],
  "outlier": true
}, {
  "data": ["York", {
    "type": "bar",
    "values": [33.30952381]
  }, 33.30952381, 5509, 16539],
  "outlier": false
}];
exports.ROR_RATE_DATA = ROR_RATE_DATA;
var BAIL_RACE_RATE_DATA = [{
  "data": ["Cameron", {
    "type": "line",
    "values": [100, 25.45454545]
  }, 100, 25.45454545, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+74.5"
  }],
  "outlier": true
}, {
  "data": ["Forest", {
    "type": "line",
    "values": [85, 32.03883495]
  }, 85, 32.03883495, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+53"
  }],
  "outlier": true
}, {
  "data": ["Potter", {
    "type": "line",
    "values": [75, 23.24786325]
  }, 75, 23.24786325, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+51.8"
  }],
  "outlier": true
}, {
  "data": ["Somerset", {
    "type": "line",
    "values": [69.56521739, 23.20855615]
  }, 69.56521739, 23.20855615, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+46.4"
  }],
  "outlier": false
}, {
  "data": ["Jefferson", {
    "type": "line",
    "values": [72.97297297, 38.35252436]
  }, 72.97297297, 38.35252436, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+34.6"
  }],
  "outlier": false
}, {
  "data": ["Warren", {
    "type": "line",
    "values": [70, 39.95067818]
  }, 70, 39.95067818, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+30"
  }],
  "outlier": true
}, {
  "data": ["Sullivan", {
    "type": "line",
    "values": [62.5, 32.63157895]
  }, 62.5, 32.63157895, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+29.9"
  }],
  "outlier": true
}, {
  "data": ["Wayne", {
    "type": "line",
    "values": [64.86486486, 35.30997305]
  }, 64.86486486, 35.30997305, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+29.6"
  }],
  "outlier": false
}, {
  "data": ["Blair", {
    "type": "line",
    "values": [58.6998088, 31.76853358]
  }, 58.6998088, 31.76853358, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+26.9"
  }],
  "outlier": false
}, {
  "data": ["Lycoming", {
    "type": "line",
    "values": [55.01355014, 28.14726841]
  }, 55.01355014, 28.14726841, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+26.9"
  }],
  "outlier": false
}, {
  "data": ["Susquehanna", {
    "type": "line",
    "values": [66.66666667, 39.76377953]
  }, 66.66666667, 39.76377953, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+26.9"
  }],
  "outlier": true
}, {
  "data": ["Erie", {
    "type": "line",
    "values": [63.73239437, 37.02714731]
  }, 63.73239437, 37.02714731, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+26.7"
  }],
  "outlier": false
}, {
  "data": ["Cambria", {
    "type": "line",
    "values": [65.52083333, 39.14590747]
  }, 65.52083333, 39.14590747, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+26.4"
  }],
  "outlier": false
}, {
  "data": ["Huntingdon", {
    "type": "line",
    "values": [64.05228758, 37.83333333]
  }, 64.05228758, 37.83333333, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+26.2"
  }],
  "outlier": false
}, {
  "data": ["Crawford", {
    "type": "line",
    "values": [53.33333333, 28.3197832]
  }, 53.33333333, 28.3197832, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+25"
  }],
  "outlier": false
}, {
  "data": ["Centre", {
    "type": "line",
    "values": [46.74115456, 21.88492764]
  }, 46.74115456, 21.88492764, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+24.9"
  }],
  "outlier": false
}, {
  "data": ["Venango", {
    "type": "line",
    "values": [60.13986014, 35.56187767]
  }, 60.13986014, 35.56187767, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+24.6"
  }],
  "outlier": false
}, {
  "data": ["Clearfield", {
    "type": "line",
    "values": [59.30232558, 35.64718163]
  }, 59.30232558, 35.64718163, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+23.7"
  }],
  "outlier": false
}, {
  "data": ["Armstrong", {
    "type": "line",
    "values": [62.71186441, 39.52662722]
  }, 62.71186441, 39.52662722, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+23.2"
  }],
  "outlier": false
}, {
  "data": ["Northumberland", {
    "type": "line",
    "values": [56.81818182, 33.91066545]
  }, 56.81818182, 33.91066545, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+22.9"
  }],
  "outlier": false
}, {
  "data": ["Lawrence", {
    "type": "line",
    "values": [66.28477905, 43.4806939]
  }, 66.28477905, 43.4806939, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+22.8"
  }],
  "outlier": false
}, {
  "data": ["Mifflin", {
    "type": "line",
    "values": [70.11494253, 47.48201439]
  }, 70.11494253, 47.48201439, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+22.6"
  }],
  "outlier": false
}, {
  "data": ["Tioga", {
    "type": "line",
    "values": [57, 34.50800915]
  }, 57, 34.50800915, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+22.5"
  }],
  "outlier": false
}, {
  "data": ["Allegheny", {
    "type": "line",
    "values": [57.06645057, 35.29897333]
  }, 57.06645057, 35.29897333, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+21.8"
  }],
  "outlier": false
}, {
  "data": ["Westmoreland", {
    "type": "line",
    "values": [50.05045409, 28.61736334]
  }, 50.05045409, 28.61736334, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+21.4"
  }],
  "outlier": false
}, {
  "data": ["Greene", {
    "type": "line",
    "values": [58.97435897, 37.86163522]
  }, 58.97435897, 37.86163522, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+21.1"
  }],
  "outlier": false
}, {
  "data": ["Beaver", {
    "type": "line",
    "values": [64.33048433, 43.92212726]
  }, 64.33048433, 43.92212726, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+20.4"
  }],
  "outlier": false
}, {
  "data": ["McKean", {
    "type": "line",
    "values": [61.33333333, 41.23134328]
  }, 61.33333333, 41.23134328, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+20.1"
  }],
  "outlier": false
}, {
  "data": ["Washington", {
    "type": "line",
    "values": [55.77092511, 35.82116788]
  }, 55.77092511, 35.82116788, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+19.9"
  }],
  "outlier": false
}, {
  "data": ["Luzerne", {
    "type": "line",
    "values": [53.5892323, 34.6550856]
  }, 53.5892323, 34.6550856, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+18.9"
  }],
  "outlier": false
}, {
  "data": ["Lackawanna", {
    "type": "line",
    "values": [67.1345995, 48.9720035]
  }, 67.1345995, 48.9720035, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+18.2"
  }],
  "outlier": false
}, {
  "data": ["Snyder", {
    "type": "line",
    "values": [52.5, 34.59183673]
  }, 52.5, 34.59183673, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+17.9"
  }],
  "outlier": false
}, {
  "data": ["Bradford", {
    "type": "line",
    "values": [62.26415094, 45.14840183]
  }, 62.26415094, 45.14840183, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+17.1"
  }],
  "outlier": false
}, {
  "data": ["Cumberland", {
    "type": "line",
    "values": [51.61744023, 35.0094162]
  }, 51.61744023, 35.0094162, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+16.6"
  }],
  "outlier": false
}, {
  "data": ["Butler", {
    "type": "line",
    "values": [44.7761194, 29.5154185]
  }, 44.7761194, 29.5154185, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+15.3"
  }],
  "outlier": false
}, {
  "data": ["Delaware", {
    "type": "line",
    "values": [63.75237882, 48.4952381]
  }, 63.75237882, 48.4952381, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+15.3"
  }],
  "outlier": false
}, {
  "data": ["Bedford", {
    "type": "line",
    "values": [52.57731959, 37.56419663]
  }, 52.57731959, 37.56419663, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+15"
  }],
  "outlier": false
}, {
  "data": ["Union", {
    "type": "line",
    "values": [38.20224719, 23.24159021]
  }, 38.20224719, 23.24159021, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+15"
  }],
  "outlier": false
}, {
  "data": ["Dauphin", {
    "type": "line",
    "values": [51.21710526, 36.4556962]
  }, 51.21710526, 36.4556962, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+14.8"
  }],
  "outlier": false
}, {
  "data": ["Montgomery", {
    "type": "line",
    "values": [43.27198364, 28.69733969]
  }, 43.27198364, 28.69733969, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+14.6"
  }],
  "outlier": false
}, {
  "data": ["Adams", {
    "type": "line",
    "values": [43.56060606, 29.03651562]
  }, 43.56060606, 29.03651562, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+14.5"
  }],
  "outlier": false
}, {
  "data": ["Chester", {
    "type": "line",
    "values": [48.47354138, 34.29690666]
  }, 48.47354138, 34.29690666, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+14.2"
  }],
  "outlier": false
}, {
  "data": ["Franklin", {
    "type": "line",
    "values": [49.26553672, 35.19494204]
  }, 49.26553672, 35.19494204, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+14.1"
  }],
  "outlier": false
}, {
  "data": ["York", {
    "type": "line",
    "values": [54.11985019, 41.11844787]
  }, 54.11985019, 41.11844787, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+13"
  }],
  "outlier": false
}, {
  "data": ["Philadelphia", {
    "type": "line",
    "values": [56.02170568, 43.3107617]
  }, 56.02170568, 43.3107617, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+12.7"
  }],
  "outlier": false
}, {
  "data": ["Lancaster", {
    "type": "line",
    "values": [55.54532904, 43.07425541]
  }, 55.54532904, 43.07425541, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+12.5"
  }],
  "outlier": false
}, {
  "data": ["Perry", {
    "type": "line",
    "values": [40, 27.68130746]
  }, 40, 27.68130746, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+12.3"
  }],
  "outlier": false
}, {
  "data": ["Mercer", {
    "type": "line",
    "values": [45.40337711, 33.35235378]
  }, 45.40337711, 33.35235378, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+12.1"
  }],
  "outlier": false
}, {
  "data": ["Northampton", {
    "type": "line",
    "values": [55.7063541, 43.86813852]
  }, 55.7063541, 43.86813852, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+11.8"
  }],
  "outlier": false
}, {
  "data": ["Fayette", {
    "type": "line",
    "values": [54, 42.30092389]
  }, 54, 42.30092389, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+11.7"
  }],
  "outlier": false
}, {
  "data": ["Carbon", {
    "type": "line",
    "values": [43.7751004, 32.34139961]
  }, 43.7751004, 32.34139961, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+11.4"
  }],
  "outlier": false
}, {
  "data": ["Clinton", {
    "type": "line",
    "values": [47.14285714, 35.98750976]
  }, 47.14285714, 35.98750976, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+11.2"
  }],
  "outlier": false
}, {
  "data": ["Lebanon", {
    "type": "line",
    "values": [48.84547069, 37.97733949]
  }, 48.84547069, 37.97733949, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+10.9"
  }],
  "outlier": false
}, {
  "data": ["Montour", {
    "type": "line",
    "values": [46.15384615, 35.34136546]
  }, 46.15384615, 35.34136546, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+10.8"
  }],
  "outlier": true
}, {
  "data": ["Bucks", {
    "type": "line",
    "values": [41.06901218, 30.62392673]
  }, 41.06901218, 30.62392673, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+10.4"
  }],
  "outlier": false
}, {
  "data": ["Schuylkill", {
    "type": "line",
    "values": [46.5060241, 37.27521501]
  }, 46.5060241, 37.27521501, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+9.2"
  }],
  "outlier": false
}, {
  "data": ["Lehigh", {
    "type": "line",
    "values": [61.81634031, 52.85376562]
  }, 61.81634031, 52.85376562, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+9"
  }],
  "outlier": false
}, {
  "data": ["Berks", {
    "type": "line",
    "values": [58.42078961, 50.24259317]
  }, 58.42078961, 50.24259317, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+8.2"
  }],
  "outlier": false
}, {
  "data": ["Juniata", {
    "type": "line",
    "values": [43.75, 36.67425968]
  }, 43.75, 36.67425968, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+7.1"
  }],
  "outlier": true
}, {
  "data": ["Wyoming", {
    "type": "line",
    "values": [40, 35.59650824]
  }, 40, 35.59650824, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+4.4"
  }],
  "outlier": true
}, {
  "data": ["Pike", {
    "type": "line",
    "values": [37.41007194, 34.02061856]
  }, 37.41007194, 34.02061856, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+3.4"
  }],
  "outlier": false
}, {
  "data": ["Monroe", {
    "type": "line",
    "values": [35.13011152, 32.41612358]
  }, 35.13011152, 32.41612358, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+2.7"
  }],
  "outlier": false
}, {
  "data": ["Columbia", {
    "type": "line",
    "values": [40.7960199, 38.46153846]
  }, 40.7960199, 38.46153846, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+2.3"
  }],
  "outlier": false
}, {
  "data": ["Fulton", {
    "type": "line",
    "values": [31.57894737, 29.27536232]
  }, 31.57894737, 29.27536232, {
    "type": "styled",
    "className": "positive-diff",
    "value": "+2.3"
  }],
  "outlier": false
}, {
  "data": ["Clarion", {
    "type": "line",
    "values": [40.625, 40.83259522]
  }, 40.625, 40.83259522, {
    "type": "styled",
    "className": "negative-diff",
    "value": "-0.2"
  }],
  "outlier": false
}, {
  "data": ["Elk", {
    "type": "line",
    "values": [27.77777778, 28.68117798]
  }, 27.77777778, 28.68117798, {
    "type": "styled",
    "className": "negative-diff",
    "value": "-0.9"
  }],
  "outlier": true
}, {
  "data": ["Indiana", {
    "type": "line",
    "values": [30.39215686, 36.21169916]
  }, 30.39215686, 36.21169916, {
    "type": "styled",
    "className": "negative-diff",
    "value": "-5.8"
  }],
  "outlier": false
}];
exports.BAIL_RACE_RATE_DATA = BAIL_RACE_RATE_DATA;
var BAIL_RACE_AMOUNT_DATA = [{
  "data": ["Adams", {
    "type": "line",
    "values": [29479, 26077]
  }, "$29,479", "$26,077", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$3,401"
  }],
  "outlier": false
}, {
  "data": ["Allegheny", {
    "type": "line",
    "values": [21080, 15881]
  }, "$21,080", "$15,881", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$5,199"
  }],
  "outlier": false
}, {
  "data": ["Armstrong", {
    "type": "line",
    "values": [18541, 13560]
  }, "$18,541", "$13,560", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$4,981"
  }],
  "outlier": false
}, {
  "data": ["Beaver", {
    "type": "line",
    "values": [26145, 13733]
  }, "$26,145", "$13,733", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$12,412"
  }],
  "outlier": false
}, {
  "data": ["Bedford", {
    "type": "line",
    "values": [65010, 49176]
  }, "$65,010", "$49,176", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$15,834"
  }],
  "outlier": false
}, {
  "data": ["Berks", {
    "type": "line",
    "values": [35039, 27399]
  }, "$35,039", "$27,399", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$7,640"
  }],
  "outlier": false
}, {
  "data": ["Blair", {
    "type": "line",
    "values": [43726, 29256]
  }, "$43,726", "$29,256", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$14,470"
  }],
  "outlier": false
}, {
  "data": ["Bradford", {
    "type": "line",
    "values": [63125, 32077]
  }, "$63,125", "$32,077", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$31,048"
  }],
  "outlier": false
}, {
  "data": ["Bucks", {
    "type": "line",
    "values": [73635, 58683]
  }, "$73,635", "$58,683", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$14,951"
  }],
  "outlier": false
}, {
  "data": ["Butler", {
    "type": "line",
    "values": [42155, 12248]
  }, "$42,155", "$12,248", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$29,907"
  }],
  "outlier": false
}, {
  "data": ["Cambria", {
    "type": "line",
    "values": [51483, 28879]
  }, "$51,483", "$28,879", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$22,604"
  }],
  "outlier": false
}, {
  "data": ["Cameron", {
    "type": "line",
    "values": [10000, 26481]
  }, "$10,000", "$26,481", {
    "type": "styled",
    "className": "negative-diff",
    "value": "-$16,481"
  }],
  "outlier": true
}, {
  "data": ["Carbon", {
    "type": "line",
    "values": [35236, 24452]
  }, "$35,236", "$24,452", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$10,784"
  }],
  "outlier": false
}, {
  "data": ["Centre", {
    "type": "line",
    "values": [45976, 34614]
  }, "$45,976", "$34,614", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$11,361"
  }],
  "outlier": false
}, {
  "data": ["Chester", {
    "type": "line",
    "values": [32205, 22836]
  }, "$32,205", "$22,836", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$9,369"
  }],
  "outlier": false
}, {
  "data": ["Clarion", {
    "type": "line",
    "values": [14200, 20698]
  }, "$14,200", "$20,698", {
    "type": "styled",
    "className": "negative-diff",
    "value": "-$6,498"
  }],
  "outlier": false
}, {
  "data": ["Clearfield", {
    "type": "line",
    "values": [43890, 23215]
  }, "$43,890", "$23,215", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$20,675"
  }],
  "outlier": false
}, {
  "data": ["Clinton", {
    "type": "line",
    "values": [29609, 19817]
  }, "$29,609", "$19,817", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$9,792"
  }],
  "outlier": false
}, {
  "data": ["Columbia", {
    "type": "line",
    "values": [57747, 33130]
  }, "$57,747", "$33,130", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$24,617"
  }],
  "outlier": false
}, {
  "data": ["Crawford", {
    "type": "line",
    "values": [32600, 21505]
  }, "$32,600", "$21,505", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$11,095"
  }],
  "outlier": false
}, {
  "data": ["Cumberland", {
    "type": "line",
    "values": [34037, 23281]
  }, "$34,037", "$23,281", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$10,756"
  }],
  "outlier": false
}, {
  "data": ["Dauphin", {
    "type": "line",
    "values": [40031, 32313]
  }, "$40,031", "$32,313", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$7,718"
  }],
  "outlier": false
}, {
  "data": ["Delaware", {
    "type": "line",
    "values": [43250, 31974]
  }, "$43,250", "$31,974", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$11,275"
  }],
  "outlier": false
}, {
  "data": ["Elk", {
    "type": "line",
    "values": [14375, 21093]
  }, "$14,375", "$21,093", {
    "type": "styled",
    "className": "negative-diff",
    "value": "-$6,718"
  }],
  "outlier": true
}, {
  "data": ["Erie", {
    "type": "line",
    "values": [38881, 23611]
  }, "$38,881", "$23,611", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$15,270"
  }],
  "outlier": false
}, {
  "data": ["Fayette", {
    "type": "line",
    "values": [25444, 17203]
  }, "$25,444", "$17,203", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$8,240"
  }],
  "outlier": false
}, {
  "data": ["Forest", {
    "type": "line",
    "values": [21438, 22344]
  }, "$21,438", "$22,344", {
    "type": "styled",
    "className": "negative-diff",
    "value": "-$906"
  }],
  "outlier": true
}, {
  "data": ["Franklin", {
    "type": "line",
    "values": [61407, 50242]
  }, "$61,407", "$50,242", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$11,165"
  }],
  "outlier": false
}, {
  "data": ["Fulton", {
    "type": "line",
    "values": [24000, 57879]
  }, "$24,000", "$57,879", {
    "type": "styled",
    "className": "negative-diff",
    "value": "-$33,879"
  }],
  "outlier": false
}, {
  "data": ["Greene", {
    "type": "line",
    "values": [20977, 15107]
  }, "$20,977", "$15,107", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$5,870"
  }],
  "outlier": false
}, {
  "data": ["Huntingdon", {
    "type": "line",
    "values": [22010, 18028]
  }, "$22,010", "$18,028", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$3,982"
  }],
  "outlier": false
}, {
  "data": ["Indiana", {
    "type": "line",
    "values": [20861, 15479]
  }, "$20,861", "$15,479", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$5,382"
  }],
  "outlier": false
}, {
  "data": ["Jefferson", {
    "type": "line",
    "values": [35040, 45707]
  }, "$35,040", "$45,707", {
    "type": "styled",
    "className": "negative-diff",
    "value": "-$10,667"
  }],
  "outlier": false
}, {
  "data": ["Juniata", {
    "type": "line",
    "values": [29167, 22330]
  }, "$29,167", "$22,330", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$6,837"
  }],
  "outlier": true
}, {
  "data": ["Lackawanna", {
    "type": "line",
    "values": [41104, 26940]
  }, "$41,104", "$26,940", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$14,163"
  }],
  "outlier": false
}, {
  "data": ["Lancaster", {
    "type": "line",
    "values": [57668, 48383]
  }, "$57,668", "$48,383", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$9,285"
  }],
  "outlier": false
}, {
  "data": ["Lawrence", {
    "type": "line",
    "values": [25778, 15192]
  }, "$25,778", "$15,192", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$10,586"
  }],
  "outlier": false
}, {
  "data": ["Lebanon", {
    "type": "line",
    "values": [36343, 23902]
  }, "$36,343", "$23,902", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$12,441"
  }],
  "outlier": false
}, {
  "data": ["Lehigh", {
    "type": "line",
    "values": [25138, 16341]
  }, "$25,138", "$16,341", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$8,797"
  }],
  "outlier": false
}, {
  "data": ["Luzerne", {
    "type": "line",
    "values": [47113, 32968]
  }, "$47,113", "$32,968", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$14,145"
  }],
  "outlier": false
}, {
  "data": ["Lycoming", {
    "type": "line",
    "values": [77030, 37028]
  }, "$77,030", "$37,028", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$40,002"
  }],
  "outlier": false
}, {
  "data": ["McKean", {
    "type": "line",
    "values": [34911, 23475]
  }, "$34,911", "$23,475", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$11,436"
  }],
  "outlier": false
}, {
  "data": ["Mercer", {
    "type": "line",
    "values": [29504, 23005]
  }, "$29,504", "$23,005", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$6,500"
  }],
  "outlier": false
}, {
  "data": ["Mifflin", {
    "type": "line",
    "values": [52219, 35331]
  }, "$52,219", "$35,331", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$16,889"
  }],
  "outlier": false
}, {
  "data": ["Monroe", {
    "type": "line",
    "values": [34085, 21495]
  }, "$34,085", "$21,495", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$12,591"
  }],
  "outlier": false
}, {
  "data": ["Montgomery", {
    "type": "line",
    "values": [29169, 21885]
  }, "$29,169", "$21,885", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$7,284"
  }],
  "outlier": false
}, {
  "data": ["Montour", {
    "type": "line",
    "values": [25556, 27449]
  }, "$25,556", "$27,449", {
    "type": "styled",
    "className": "negative-diff",
    "value": "-$1,893"
  }],
  "outlier": true
}, {
  "data": ["Northampton", {
    "type": "line",
    "values": [34972, 24095]
  }, "$34,972", "$24,095", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$10,877"
  }],
  "outlier": false
}, {
  "data": ["Northumberland", {
    "type": "line",
    "values": [63255, 38641]
  }, "$63,255", "$38,641", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$24,614"
  }],
  "outlier": false
}, {
  "data": ["Perry", {
    "type": "line",
    "values": [41126, 24007]
  }, "$41,126", "$24,007", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$17,119"
  }],
  "outlier": false
}, {
  "data": ["Philadelphia", {
    "type": "line",
    "values": [54302, 43459]
  }, "$54,302", "$43,459", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$10,843"
  }],
  "outlier": false
}, {
  "data": ["Pike", {
    "type": "line",
    "values": [34755, 21534]
  }, "$34,755", "$21,534", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$13,221"
  }],
  "outlier": false
}, {
  "data": ["Potter", {
    "type": "line",
    "values": [15700, 19338]
  }, "$15,700", "$19,338", {
    "type": "styled",
    "className": "negative-diff",
    "value": "-$3,638"
  }],
  "outlier": true
}, {
  "data": ["Schuylkill", {
    "type": "line",
    "values": [28947, 19996]
  }, "$28,947", "$19,996", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$8,951"
  }],
  "outlier": false
}, {
  "data": ["Snyder", {
    "type": "line",
    "values": [29659, 27551]
  }, "$29,659", "$27,551", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$2,107"
  }],
  "outlier": false
}, {
  "data": ["Somerset", {
    "type": "line",
    "values": [78071, 33896]
  }, "$78,071", "$33,896", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$44,175"
  }],
  "outlier": false
}, {
  "data": ["Sullivan", {
    "type": "line",
    "values": [5000, 18667]
  }, "$5,000", "$18,667", {
    "type": "styled",
    "className": "negative-diff",
    "value": "-$13,667"
  }],
  "outlier": true
}, {
  "data": ["Susquehanna", {
    "type": "line",
    "values": [29808, 27138]
  }, "$29,808", "$27,138", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$2,670"
  }],
  "outlier": true
}, {
  "data": ["Tioga", {
    "type": "line",
    "values": [30455, 18916]
  }, "$30,455", "$18,916", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$11,539"
  }],
  "outlier": false
}, {
  "data": ["Union", {
    "type": "line",
    "values": [34667, 25807]
  }, "$34,667", "$25,807", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$8,860"
  }],
  "outlier": false
}, {
  "data": ["Venango", {
    "type": "line",
    "values": [48712, 35510]
  }, "$48,712", "$35,510", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$13,202"
  }],
  "outlier": false
}, {
  "data": ["Warren", {
    "type": "line",
    "values": [32692, 25369]
  }, "$32,692", "$25,369", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$7,323"
  }],
  "outlier": true
}, {
  "data": ["Washington", {
    "type": "line",
    "values": [33527, 19878]
  }, "$33,527", "$19,878", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$13,649"
  }],
  "outlier": false
}, {
  "data": ["Wayne", {
    "type": "line",
    "values": [28682, 32101]
  }, "$28,682", "$32,101", {
    "type": "styled",
    "className": "negative-diff",
    "value": "-$3,419"
  }],
  "outlier": false
}, {
  "data": ["Westmoreland", {
    "type": "line",
    "values": [30920, 17072]
  }, "$30,920", "$17,072", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$13,848"
  }],
  "outlier": false
}, {
  "data": ["Wyoming", {
    "type": "line",
    "values": [22611, 25042]
  }, "$22,611", "$25,042", {
    "type": "styled",
    "className": "negative-diff",
    "value": "-$2,431"
  }],
  "outlier": true
}, {
  "data": ["York", {
    "type": "line",
    "values": [30258, 18416]
  }, "$30,258", "$18,416", {
    "type": "styled",
    "className": "positive-diff",
    "value": "+$11,842"
  }],
  "outlier": false
}];
exports.BAIL_RACE_AMOUNT_DATA = BAIL_RACE_AMOUNT_DATA;
var BAIL_POSTING_DATA = [{
  "data": ["Adams", "$27.0K", 43.62244898, {
    "type": "bar",
    "values": [43.62244898]
  }],
  "outlier": false
}, {
  "data": ["Allegheny", "$18.6K", 61.27998861, {
    "type": "bar",
    "values": [61.27998861]
  }],
  "outlier": false
}, {
  "data": ["Armstrong", "$13.9K", 56.05263158, {
    "type": "bar",
    "values": [56.05263158]
  }],
  "outlier": false
}, {
  "data": ["Beaver", "$17.6K", 67.60883691, {
    "type": "bar",
    "values": [67.60883691]
  }],
  "outlier": false
}, {
  "data": ["Bedford", "$50.1K", 72.3183391, {
    "type": "bar",
    "values": [72.3183391]
  }],
  "outlier": false
}, {
  "data": ["Berks", "$28.3K", 56.45679409, {
    "type": "bar",
    "values": [56.45679409]
  }],
  "outlier": false
}, {
  "data": ["Blair", "$33.1K", 68.23253083, {
    "type": "bar",
    "values": [68.23253083]
  }],
  "outlier": false
}, {
  "data": ["Bradford", "$32.7K", 89.21800948, {
    "type": "bar",
    "values": [89.21800948]
  }],
  "outlier": false
}, {
  "data": ["Bucks", "$62.6K", 48.80620772, {
    "type": "bar",
    "values": [48.80620772]
  }],
  "outlier": false
}, {
  "data": ["Butler", "$17.6K", 66.14420063, {
    "type": "bar",
    "values": [66.14420063]
  }],
  "outlier": false
}, {
  "data": ["Cambria", "$37.0K", 41.87380497, {
    "type": "bar",
    "values": [41.87380497]
  }],
  "outlier": false
}, {
  "data": ["Cameron", "$26.8K", 51.61290323, {
    "type": "bar",
    "values": [51.61290323]
  }],
  "outlier": false
}, {
  "data": ["Carbon", "$26.8K", 49.51370469, {
    "type": "bar",
    "values": [49.51370469]
  }],
  "outlier": false
}, {
  "data": ["Centre", "$44.3K", 65.17571885, {
    "type": "bar",
    "values": [65.17571885]
  }],
  "outlier": false
}, {
  "data": ["Chester", "$26.4K", 51.38476756, {
    "type": "bar",
    "values": [51.38476756]
  }],
  "outlier": false
}, {
  "data": ["Clarion", "$20.0K", 72.08835341, {
    "type": "bar",
    "values": [72.08835341]
  }],
  "outlier": false
}, {
  "data": ["Clearfield", "$24.3K", 82.5203252, {
    "type": "bar",
    "values": [82.5203252]
  }],
  "outlier": false
}, {
  "data": ["Clinton", "$21.0K", 74.19962335, {
    "type": "bar",
    "values": [74.19962335]
  }],
  "outlier": false
}, {
  "data": ["Columbia", "$35.8K", 27.68777614, {
    "type": "bar",
    "values": [27.68777614]
  }],
  "outlier": false
}, {
  "data": ["Crawford", "$22.6K", 55.26315789, {
    "type": "bar",
    "values": [55.26315789]
  }],
  "outlier": false
}, {
  "data": ["Cumberland", "$25.0K", 57.75502465, {
    "type": "bar",
    "values": [57.75502465]
  }],
  "outlier": false
}, {
  "data": ["Dauphin", "$36.6K", 67.51909665, {
    "type": "bar",
    "values": [67.51909665]
  }],
  "outlier": false
}, {
  "data": ["Delaware", "$38.5K", 61.44408689, {
    "type": "bar",
    "values": [61.44408689]
  }],
  "outlier": false
}, {
  "data": ["Elk", "$21.3K", 79.74683544, {
    "type": "bar",
    "values": [79.74683544]
  }],
  "outlier": false
}, {
  "data": ["Erie", "$27.8K", 60.4815864, {
    "type": "bar",
    "values": [60.4815864]
  }],
  "outlier": false
}, {
  "data": ["Fayette", "$19.5K", 39.92776886, {
    "type": "bar",
    "values": [39.92776886]
  }],
  "outlier": false
}, {
  "data": ["Forest", "$22.7K", 80.70175439, {
    "type": "bar",
    "values": [80.70175439]
  }],
  "outlier": false
}, {
  "data": ["Franklin", "$53.5K", 76.32904309, {
    "type": "bar",
    "values": [76.32904309]
  }],
  "outlier": false
}, {
  "data": ["Fulton", "$54.7K", 78.51239669, {
    "type": "bar",
    "values": [78.51239669]
  }],
  "outlier": false
}, {
  "data": ["Greene", "$15.6K", 55.89123867, {
    "type": "bar",
    "values": [55.89123867]
  }],
  "outlier": false
}, {
  "data": ["Huntingdon", "$18.3K", 76.89594356, {
    "type": "bar",
    "values": [76.89594356]
  }],
  "outlier": false
}, {
  "data": ["Indiana", "$16.6K", 42.81345566, {
    "type": "bar",
    "values": [42.81345566]
  }],
  "outlier": false
}, {
  "data": ["Jefferson", "$45.0K", 85.16129032, {
    "type": "bar",
    "values": [85.16129032]
  }],
  "outlier": false
}, {
  "data": ["Juniata", "$22.4K", 73.98843931, {
    "type": "bar",
    "values": [73.98843931]
  }],
  "outlier": false
}, {
  "data": ["Lackawanna", "$31.1K", 72.46600742, {
    "type": "bar",
    "values": [72.46600742]
  }],
  "outlier": false
}, {
  "data": ["Lancaster", "$52.6K", 64.47848286, {
    "type": "bar",
    "values": [64.47848286]
  }],
  "outlier": false
}, {
  "data": ["Lawrence", "$19.2K", 43.81742739, {
    "type": "bar",
    "values": [43.81742739]
  }],
  "outlier": false
}, {
  "data": ["Lebanon", "$24.5K", 43.23432343, {
    "type": "bar",
    "values": [43.23432343]
  }],
  "outlier": false
}, {
  "data": ["Lehigh", "$20.1K", 57.91968767, {
    "type": "bar",
    "values": [57.91968767]
  }],
  "outlier": false
}, {
  "data": ["Luzerne", "$37.0K", 66.80926019, {
    "type": "bar",
    "values": [66.80926019]
  }],
  "outlier": false
}, {
  "data": ["Lycoming", "$52.7K", 71.89292543, {
    "type": "bar",
    "values": [71.89292543]
  }],
  "outlier": false
}, {
  "data": ["McKean", "$23.7K", 70.13752456, {
    "type": "bar",
    "values": [70.13752456]
  }],
  "outlier": false
}, {
  "data": ["Mercer", "$25.0K", 49.10820452, {
    "type": "bar",
    "values": [49.10820452]
  }],
  "outlier": false
}, {
  "data": ["Mifflin", "$39.8K", 82.62068966, {
    "type": "bar",
    "values": [82.62068966]
  }],
  "outlier": false
}, {
  "data": ["Monroe", "$27.4K", 38.39793282, {
    "type": "bar",
    "values": [38.39793282]
  }],
  "outlier": false
}, {
  "data": ["Montgomery", "$25.3K", 64.50531837, {
    "type": "bar",
    "values": [64.50531837]
  }],
  "outlier": false
}, {
  "data": ["Montour", "$28.6K", 65.34653465, {
    "type": "bar",
    "values": [65.34653465]
  }],
  "outlier": false
}, {
  "data": ["Northampton", "$27.5K", 54.74903475, {
    "type": "bar",
    "values": [54.74903475]
  }],
  "outlier": false
}, {
  "data": ["Northumberland", "$41.8K", 57.73195876, {
    "type": "bar",
    "values": [57.73195876]
  }],
  "outlier": false
}, {
  "data": ["Perry", "$25.6K", 76.99680511, {
    "type": "bar",
    "values": [76.99680511]
  }],
  "outlier": false
}, {
  "data": ["Philadelphia", "$54.0K", 50.7113914, {
    "type": "bar",
    "values": [50.7113914]
  }],
  "outlier": false
}, {
  "data": ["Pike", "$22.2K", 63.88888889, {
    "type": "bar",
    "values": [63.88888889]
  }],
  "outlier": false
}, {
  "data": ["Potter", "$19.4K", 67.83216783, {
    "type": "bar",
    "values": [67.83216783]
  }],
  "outlier": false
}, {
  "data": ["Schuylkill", "$20.6K", 59.0780809, {
    "type": "bar",
    "values": [59.0780809]
  }],
  "outlier": false
}, {
  "data": ["Snyder", "$28.0K", 45.69190601, {
    "type": "bar",
    "values": [45.69190601]
  }],
  "outlier": false
}, {
  "data": ["Somerset", "$37.9K", 55.08982036, {
    "type": "bar",
    "values": [55.08982036]
  }],
  "outlier": false
}, {
  "data": ["Sullivan", "$16.9K", 69.23076923, {
    "type": "bar",
    "values": [69.23076923]
  }],
  "outlier": false
}, {
  "data": ["Susquehanna", "$27.6K", 75.07788162, {
    "type": "bar",
    "values": [75.07788162]
  }],
  "outlier": false
}, {
  "data": ["Tioga", "$20.6K", 60.72234763, {
    "type": "bar",
    "values": [60.72234763]
  }],
  "outlier": false
}, {
  "data": ["Union", "$27.5K", 74.61139896, {
    "type": "bar",
    "values": [74.61139896]
  }],
  "outlier": false
}, {
  "data": ["Venango", "$37.5K", 72.88135593, {
    "type": "bar",
    "values": [72.88135593]
  }],
  "outlier": false
}, {
  "data": ["Warren", "$25.4K", 75.87209302, {
    "type": "bar",
    "values": [75.87209302]
  }],
  "outlier": false
}, {
  "data": ["Washington", "$25.1K", 63.82098533, {
    "type": "bar",
    "values": [63.82098533]
  }],
  "outlier": false
}, {
  "data": ["Wayne", "$34.1K", 46.6442953, {
    "type": "bar",
    "values": [46.6442953]
  }],
  "outlier": false
}, {
  "data": ["Westmoreland", "$21.0K", 71.47154675, {
    "type": "bar",
    "values": [71.47154675]
  }],
  "outlier": false
}, {
  "data": ["Wyoming", "$25.1K", 67.53246753, {
    "type": "bar",
    "values": [67.53246753]
  }],
  "outlier": false
}, {
  "data": ["York", "$20.8K", 58.36246303, {
    "type": "bar",
    "values": [58.36246303]
  }],
  "outlier": false
}];
exports.BAIL_POSTING_DATA = BAIL_POSTING_DATA;
var BAIL_RETENTION_FEE_DATA = [{
  "data": ["Adams", "Placeholder....!!!!!"]
}, {
  "data": ["Allegheny", "Placeholder....!!!!!"]
}, {
  "data": ["Armstrong", "Placeholder....!!!!!"]
}, {
  "data": ["Beaver", "Placeholder....!!!!!"]
}, {
  "data": ["Bedford", "Placeholder....!!!!!"]
}, {
  "data": ["Berks", "Placeholder....!!!!!"]
}, {
  "data": ["Blair", "Placeholder....!!!!!"]
}, {
  "data": ["Bradford", "Placeholder....!!!!!"]
}, {
  "data": ["Bucks", "Placeholder....!!!!!"]
}, {
  "data": ["Butler", "Placeholder....!!!!!"]
}, {
  "data": ["Cambria", "Placeholder....!!!!!"]
}, {
  "data": ["Cameron", "Placeholder....!!!!!"]
}, {
  "data": ["Carbon", "Placeholder....!!!!!"]
}, {
  "data": ["Centre", "Placeholder....!!!!!"]
}, {
  "data": ["Chester", "Placeholder....!!!!!"]
}, {
  "data": ["Clarion", "Placeholder....!!!!!"]
}, {
  "data": ["Clearfield", "Placeholder....!!!!!"]
}, {
  "data": ["Clinton", "Placeholder....!!!!!"]
}, {
  "data": ["Columbia", "Placeholder....!!!!!"]
}, {
  "data": ["Crawford", "Placeholder....!!!!!"]
}, {
  "data": ["Cumberland", "Placeholder....!!!!!"]
}, {
  "data": ["Dauphin", "Placeholder....!!!!!"]
}, {
  "data": ["Delaware", "Placeholder....!!!!!"]
}, {
  "data": ["Elk", "Placeholder....!!!!!"]
}, {
  "data": ["Erie", "Placeholder....!!!!!"]
}, {
  "data": ["Fayette", "Placeholder....!!!!!"]
}, {
  "data": ["Forest", "Placeholder....!!!!!"]
}, {
  "data": ["Franklin", "Placeholder....!!!!!"]
}, {
  "data": ["Fulton", "Placeholder....!!!!!"]
}, {
  "data": ["Greene", "Placeholder....!!!!!"]
}, {
  "data": ["Huntingdon", "Placeholder....!!!!!"]
}, {
  "data": ["Indiana", "Placeholder....!!!!!"]
}, {
  "data": ["Jefferson", "Placeholder....!!!!!"]
}, {
  "data": ["Juniata", "Placeholder....!!!!!"]
}, {
  "data": ["Lackawanna", "Placeholder....!!!!!"]
}, {
  "data": ["Lancaster", "Placeholder....!!!!!"]
}, {
  "data": ["Lawrence", "Placeholder....!!!!!"]
}, {
  "data": ["Lebanon", "Placeholder....!!!!!"]
}, {
  "data": ["Lehigh", "Placeholder....!!!!!"]
}, {
  "data": ["Luzerne", "Placeholder....!!!!!"]
}, {
  "data": ["Lycoming", "Placeholder....!!!!!"]
}, {
  "data": ["McKean", "Placeholder....!!!!!"]
}, {
  "data": ["Mercer", "Placeholder....!!!!!"]
}, {
  "data": ["Mifflin", "Placeholder....!!!!!"]
}, {
  "data": ["Monroe", "Placeholder....!!!!!"]
}, {
  "data": ["Montgomery", "Placeholder....!!!!!"]
}, {
  "data": ["Montour", "Placeholder....!!!!!"]
}, {
  "data": ["Northampton", "Placeholder....!!!!!"]
}, {
  "data": ["Northumberland", "Placeholder....!!!!!"]
}, {
  "data": ["Perry", "Placeholder....!!!!!"]
}, {
  "data": ["Philadelphia", "Placeholder....!!!!!"]
}, {
  "data": ["Pike", "Placeholder....!!!!!"]
}, {
  "data": ["Potter", "Placeholder....!!!!!"]
}, {
  "data": ["Schuylkill", "Placeholder....!!!!!"]
}, {
  "data": ["Snyder", "Placeholder....!!!!!"]
}, {
  "data": ["Somerset", "Placeholder....!!!!!"]
}, {
  "data": ["Sullivan", "Placeholder....!!!!!"]
}, {
  "data": ["Susquehanna", "Placeholder....!!!!!"]
}, {
  "data": ["Tioga", "Placeholder....!!!!!"]
}, {
  "data": ["Union", "Placeholder....!!!!!"]
}, {
  "data": ["Venango", "Placeholder....!!!!!"]
}, {
  "data": ["Warren", "Placeholder....!!!!!"]
}, {
  "data": ["Washington", "Placeholder....!!!!!"]
}, {
  "data": ["Wayne", "Placeholder....!!!!!"]
}, {
  "data": ["Westmoreland", "Placeholder....!!!!!"]
}, {
  "data": ["Wyoming", "Placeholder....!!!!!"]
}, {
  "data": ["York", "Placeholder....!!!!!"]
}];
exports.BAIL_RETENTION_FEE_DATA = BAIL_RETENTION_FEE_DATA;
var PRETRIAL_SPENDING_DATA = [{
  "data": ["Average", "$10.1M", "$16.1M", 62.44427927, {
    "type": "bar",
    "values": [62.44427927]
  }],
  "outlier": false
}, {
  "data": ["Adams", "$3.6M", "$11.1M", 32.43914185, {
    "type": "bar",
    "values": [32.43914185]
  }],
  "outlier": false
}, {
  "data": ["Allegheny", "$57.6M", "$86.M", 67.01743239, {
    "type": "bar",
    "values": [67.01743239]
  }],
  "outlier": false
}, {
  "data": ["Armstrong", "$2.9M", "$4.6M", 63.23898622, {
    "type": "bar",
    "values": [63.23898622]
  }],
  "outlier": false
}, {
  "data": ["Beaver", "$4.7M", "$9.3M", 49.91935539, {
    "type": "bar",
    "values": [49.91935539]
  }],
  "outlier": false
}, {
  "data": ["Bedford", "$2.2M", "$3.1M", 70.14284972, {
    "type": "bar",
    "values": [70.14284972]
  }],
  "outlier": false
}, {
  "data": ["Berks", "$27.4M", "$35.7M", 76.92692634, {
    "type": "bar",
    "values": [76.92692634]
  }],
  "outlier": false
}, {
  "data": ["Blair", "N/R", "$8.6M", "N/R", {
    "type": "bar",
    "values": [62.4]
  }],
  "outlier": false
}, {
  "data": ["Bradford", "$0.7M", "$4.1M", 16.17296357, {
    "type": "bar",
    "values": [16.17296357]
  }],
  "outlier": false
}, {
  "data": ["Bucks", "$16.M", "$27.6M", 57.90105653, {
    "type": "bar",
    "values": [57.90105653]
  }],
  "outlier": false
}, {
  "data": ["Butler", "$10.M", "$11.6M", 86.19403059, {
    "type": "bar",
    "values": [86.19403059]
  }],
  "outlier": false
}, {
  "data": ["Cambria", "$4.9M", "$10.6M", 46.00591555, {
    "type": "bar",
    "values": [46.00591555]
  }],
  "outlier": false
}, {
  "data": ["Cameron", "N/A", "N/A", "N/A", {
    "type": "bar",
    "values": [62.4]
  }],
  "outlier": false
}, {
  "data": ["Carbon", "$2.7M", "$5.M", 55.20362881, {
    "type": "bar",
    "values": [55.20362881]
  }],
  "outlier": false
}, {
  "data": ["Centre", "$3.M", "$8.9M", 33.49236863, {
    "type": "bar",
    "values": [33.49236863]
  }],
  "outlier": false
}, {
  "data": ["Chester", "$16.3M", "$30.M", 54.39229774, {
    "type": "bar",
    "values": [54.39229774]
  }],
  "outlier": false
}, {
  "data": ["Clarion", "$0.8M", "$2.4M", 32.47664265, {
    "type": "bar",
    "values": [32.47664265]
  }],
  "outlier": false
}, {
  "data": ["Clearfield", "$1.6M", "$3.4M", 47.56945001, {
    "type": "bar",
    "values": [47.56945001]
  }],
  "outlier": false
}, {
  "data": ["Clinton", "$1.7M", "$6.5M", 26.20482058, {
    "type": "bar",
    "values": [26.20482058]
  }],
  "outlier": false
}, {
  "data": ["Columbia", "$2.8M", "$6.M", 45.91836515, {
    "type": "bar",
    "values": [45.91836515]
  }],
  "outlier": false
}, {
  "data": ["Crawford", "$3.3M", "$6.M", 54.53667276, {
    "type": "bar",
    "values": [54.53667276]
  }],
  "outlier": false
}, {
  "data": ["Cumberland", "$8.5M", "$11.3M", 75.28473396, {
    "type": "bar",
    "values": [75.28473396]
  }],
  "outlier": false
}, {
  "data": ["Dauphin", "$0.3M", "N/R", "N/R", {
    "type": "bar",
    "values": [62.4]
  }],
  "outlier": false
}, {
  "data": ["Delaware", "$0.4M", "N/R", "N/R", {
    "type": "bar",
    "values": [62.4]
  }],
  "outlier": false
}, {
  "data": ["Elk", "$1.9M", "$2.7M", 70.16631838, {
    "type": "bar",
    "values": [70.16631838]
  }],
  "outlier": false
}, {
  "data": ["Erie", "$6.7M", "$17.M", 39.4405589, {
    "type": "bar",
    "values": [39.4405589]
  }],
  "outlier": false
}, {
  "data": ["Fayette", "$9.3M", "$7.6M", 100, {
    "type": "bar",
    "values": [100]
  }],
  "outlier": false
}, {
  "data": ["Forest", "N/A", "N/A", "N/A", {
    "type": "bar",
    "values": [62.4]
  }],
  "outlier": false
}, {
  "data": ["Franklin", "$6.2M", "$13.3M", 46.55092852, {
    "type": "bar",
    "values": [46.55092852]
  }],
  "outlier": false
}, {
  "data": ["Fulton", "N/A", "N/A", "N/A", {
    "type": "bar",
    "values": [62.4]
  }],
  "outlier": false
}, {
  "data": ["Greene", "$1.3M", "$2.7M", 47.56944381, {
    "type": "bar",
    "values": [47.56944381]
  }],
  "outlier": false
}, {
  "data": ["Huntingdon", "$1.3M", "$1.7M", 77.32557584, {
    "type": "bar",
    "values": [77.32557584]
  }],
  "outlier": false
}, {
  "data": ["Indiana", "$3.6M", "$7.1M", 51.53061275, {
    "type": "bar",
    "values": [51.53061275]
  }],
  "outlier": false
}, {
  "data": ["Jefferson", "$1.5M", "$3.3M", 46.1397167, {
    "type": "bar",
    "values": [46.1397167]
  }],
  "outlier": false
}, {
  "data": ["Juniata", "N/A", "N/A", "N/A", {
    "type": "bar",
    "values": [62.4]
  }],
  "outlier": false
}, {
  "data": ["Lackawanna", "$16.9M", "$25.4M", 66.42315908, {
    "type": "bar",
    "values": [66.42315908]
  }],
  "outlier": false
}, {
  "data": ["Lancaster", "$15.5M", "$27.6M", 56.0542793, {
    "type": "bar",
    "values": [56.0542793]
  }],
  "outlier": false
}, {
  "data": ["Lawrence", "N/R", "$6.2M", "N/R", {
    "type": "bar",
    "values": [62.4]
  }],
  "outlier": false
}, {
  "data": ["Lebanon", "$4.7M", "$9.3M", 50.50411042, {
    "type": "bar",
    "values": [50.50411042]
  }],
  "outlier": false
}, {
  "data": ["Lehigh", "$9.M", "$30.M", 30.0079569, {
    "type": "bar",
    "values": [30.0079569]
  }],
  "outlier": false
}, {
  "data": ["Luzerne", "N/R", "$26.3M", "N/R", {
    "type": "bar",
    "values": [62.4]
  }],
  "outlier": false
}, {
  "data": ["Lycoming", "$9.M", "$10.3M", 87.12023555, {
    "type": "bar",
    "values": [87.12023555]
  }],
  "outlier": false
}, {
  "data": ["McKean", "$2.1M", "$2.6M", 80.62499691, {
    "type": "bar",
    "values": [80.62499691]
  }],
  "outlier": false
}, {
  "data": ["Mercer", "$3.5M", "$7.8M", 45.21396757, {
    "type": "bar",
    "values": [45.21396757]
  }],
  "outlier": false
}, {
  "data": ["Mifflin", "$2.1M", "$3.6M", 58.29183635, {
    "type": "bar",
    "values": [58.29183635]
  }],
  "outlier": false
}, {
  "data": ["Monroe", "$6.3M", "$12.7M", 49.18033199, {
    "type": "bar",
    "values": [49.18033199]
  }],
  "outlier": false
}, {
  "data": ["Montgomery", "$29.6M", "$38.8M", 76.43072401, {
    "type": "bar",
    "values": [76.43072401]
  }],
  "outlier": false
}, {
  "data": ["Montour", "$0.7M", "$0.9M", 76.64233742, {
    "type": "bar",
    "values": [76.64233742]
  }],
  "outlier": false
}, {
  "data": ["Northampton", "$12.6M", "$26.6M", 47.6338724, {
    "type": "bar",
    "values": [47.6338724]
  }],
  "outlier": false
}, {
  "data": ["Northumberland", "$1.5M", "$2.4M", 64.0957536, {
    "type": "bar",
    "values": [64.0957536]
  }],
  "outlier": false
}, {
  "data": ["Perry", "$3.1M", "$4.8M", 64.92248608, {
    "type": "bar",
    "values": [64.92248608]
  }],
  "outlier": false
}, {
  "data": ["Philadelphia", "$205.1M", "$260.9M", 78.60564543, {
    "type": "bar",
    "values": [78.60564543]
  }],
  "outlier": false
}, {
  "data": ["Pike", "$8.1M", "$10.2M", 79.57516231, {
    "type": "bar",
    "values": [79.57516231]
  }],
  "outlier": false
}, {
  "data": ["Potter", "$0.3M", "$0.7M", 38.28125105, {
    "type": "bar",
    "values": [38.28125105]
  }],
  "outlier": false
}, {
  "data": ["Schuylkill", "$4.9M", "$7.3M", 67.50973321, {
    "type": "bar",
    "values": [67.50973321]
  }],
  "outlier": false
}, {
  "data": ["Snyder", "$1.1M", "$3.4M", 33.18584058, {
    "type": "bar",
    "values": [33.18584058]
  }],
  "outlier": false
}, {
  "data": ["Somerset", "$3.8M", "$2.9M", 100, {
    "type": "bar",
    "values": [100]
  }],
  "outlier": false
}, {
  "data": ["Sullivan", "N/A", "N/A", "N/A", {
    "type": "bar",
    "values": [62.4]
  }],
  "outlier": false
}, {
  "data": ["Susquehanna", "$2.7M", "$3.1M", 87.27389024, {
    "type": "bar",
    "values": [87.27389024]
  }],
  "outlier": false
}, {
  "data": ["Tioga", "$1.2M", "$2.6M", 44.75309491, {
    "type": "bar",
    "values": [44.75309491]
  }],
  "outlier": false
}, {
  "data": ["Union", "$0.4M", "$0.9M", 41.91170231, {
    "type": "bar",
    "values": [41.91170231]
  }],
  "outlier": false
}, {
  "data": ["Venango", "$1.8M", "$2.7M", 65.28663594, {
    "type": "bar",
    "values": [65.28663594]
  }],
  "outlier": false
}, {
  "data": ["Warren", "N/R", "$3.1M", "N/R", {
    "type": "bar",
    "values": [62.4]
  }],
  "outlier": false
}, {
  "data": ["Washington", "$4.M", "$7.7M", 51.11357976, {
    "type": "bar",
    "values": [51.11357976]
  }],
  "outlier": false
}, {
  "data": ["Wayne", "$2.8M", "$4.4M", 63.54167183, {
    "type": "bar",
    "values": [63.54167183]
  }],
  "outlier": false
}, {
  "data": ["Westmoreland", "$8.4M", "$16.5M", 51.29716715, {
    "type": "bar",
    "values": [51.29716715]
  }],
  "outlier": false
}, {
  "data": ["Wyoming", "$1.9M", "$2.2M", 85.99998119, {
    "type": "bar",
    "values": [85.99998119]
  }],
  "outlier": false
}, {
  "data": ["York", "$16.7M", "$54.6M", 30.66932716, {
    "type": "bar",
    "values": [30.66932716]
  }],
  "outlier": false
}];
exports.PRETRIAL_SPENDING_DATA = PRETRIAL_SPENDING_DATA;
var MDJ_DATA = [{
  "data": ["", "Delaware", 55.68060922, 63.75237882, 48.4952381, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 55.68060922
    }, {
      "className": "unsecured-bar",
      "value": 43.554700000000004
    }, {
      "className": "nonmonetary-bar",
      "value": 0.0056
    }, {
      "className": "ror-bar",
      "value": 0.10640000000000001
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Davis, Wilden H.", 75.87, 75.15151515, 81.98198198, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 75.87
      }, {
        "className": "unsecured-bar",
        "value": 23.7
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Tenaglia, Leonard V.", 74.28, 75.54786621, 71.47651007, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 74.28
      }, {
        "className": "unsecured-bar",
        "value": 25.72
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Seaton, Spencer B. Jr.", 74.02, 75.9295499, 72.8, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 74.02
      }, {
        "className": "unsecured-bar",
        "value": 25.08
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Gallagher, Vincent D. Jr.", 71.73, 83.72093023, 62.75862069, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 71.73
      }, {
        "className": "unsecured-bar",
        "value": 28.27
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Berardocco, Ann", 71.53, 77.06422018, 62.87128713, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 71.53
      }, {
        "className": "unsecured-bar",
        "value": 28.47
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Sandone, Steven A.", 71.18, 75.53648069, 68.96551724, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 71.18
      }, {
        "className": "unsecured-bar",
        "value": 28.6
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Loftus, Greg J.", 69.26, 70.99697885, 66.53061224, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 69.26
      }, {
        "className": "unsecured-bar",
        "value": 30.57
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Radano, Robert J.", 62.88, 65.58441558, 62.33183857, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 62.88
      }, {
        "className": "unsecured-bar",
        "value": 37.12
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Merkins, James", 61.84, 80.85106383, 53.80116959, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 61.84
      }, {
        "className": "unsecured-bar",
        "value": 37.81
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Turner, Phillip S.", 61.05, 63.4375, 59.33503836, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 61.05
      }, {
        "className": "unsecured-bar",
        "value": 38.67
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Lippincott, Nicholas S.", 60.52, 74.23076923, 45.04132231, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 60.52
      }, {
        "className": "unsecured-bar",
        "value": 39.48
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Mattox, Christopher R.", 60.36, 62.95336788, 59.41422594, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 60.36
      }, {
        "className": "unsecured-bar",
        "value": 39.49
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.15
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Tozer, Peter P.", 59.06, 62.63736264, 57.0977918, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 59.06
      }, {
        "className": "unsecured-bar",
        "value": 40.94
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Puppio, Andrea B.", 57.44, 65.96491228, 52.13114754, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 57.44
      }, {
        "className": "unsecured-bar",
        "value": 41.75
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Karapalides, Harry J. Jr.", 57.36, 58.41836735, 55.05050505, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 57.36
      }, {
        "className": "unsecured-bar",
        "value": 41.98
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Williams, W Keith II", 56.54, 52.56410256, 69.56521739, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 56.54
      }, {
        "className": "unsecured-bar",
        "value": 43.09
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.18
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Vann, Dawn L.", 53.29, 59.06735751, 55.70469799, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.29
      }, {
        "className": "unsecured-bar",
        "value": 46.55
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hunter, Leon", 52.2, 66.03773585, 46.22222222, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 52.2
      }, {
        "className": "unsecured-bar",
        "value": 44.4
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 2.8
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Holefelder, Diane M.", 51.46, 71.29186603, 37.54266212, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 51.46
      }, {
        "className": "unsecured-bar",
        "value": 47.96
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Griffin, David", 51.33, 57.55813953, 45.10739857, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 51.33
      }, {
        "className": "unsecured-bar",
        "value": 48.67
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Burke, Robert R.", 50.66, 57.77777778, 43.91534392, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.66
      }, {
        "className": "unsecured-bar",
        "value": 49.34
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Strohl, Walter A.", 50.21, 66.47058824, 40.89347079, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.21
      }, {
        "className": "unsecured-bar",
        "value": 49.16
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Micozzie-Aguirre, Kelly A.", 50, 60.33057851, 47.05882353, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50
      }, {
        "className": "unsecured-bar",
        "value": 49.32
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Krull, Deborah A.", 48.54, 61.21673004, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 48.54
      }, {
        "className": "unsecured-bar",
        "value": 51.46
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Nistico, Charles", 44.14, 48.9010989, 27.27272727, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44.14
      }, {
        "className": "unsecured-bar",
        "value": 54.3
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Lacey, Thomas J.", 43.49, 47.61904762, 28.42639594, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.49
      }, {
        "className": "unsecured-bar",
        "value": 53.65
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Lippart, Jack D.", 43.1, 55.82010582, 35.98615917, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.1
      }, {
        "className": "unsecured-bar",
        "value": 56.8
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Lacianca, Elisa C.", 41.76, 59.16666667, 35.05154639, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.76
      }, {
        "className": "unsecured-bar",
        "value": 57.95
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.28
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Lang, David H.", 34.43, 37.64044944, 32.44274809, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 34.43
      }, {
        "className": "unsecured-bar",
        "value": 60.45
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "McCray, C. Walter III", 33.33, 40.12345679, 24.32432432, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 33.33
      }, {
        "className": "unsecured-bar",
        "value": 54.61
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.71
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "D'Agostino, Robert M.", 28.41, 36.95652174, 28.34645669, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 28.41
      }, {
        "className": "unsecured-bar",
        "value": 70.85
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Roberts, Wendy B.", 27.98, 40.08438819, 19.42740286, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.98
      }, {
        "className": "unsecured-bar",
        "value": 71.76
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Lehigh", 54.88215488, 61.816340309999994, 52.853765620000004, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 54.88215488
    }, {
      "className": "unsecured-bar",
      "value": 36.5018
    }, {
      "className": "nonmonetary-bar",
      "value": 0.030699999999999998
    }, {
      "className": "ror-bar",
      "value": 8.1388
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Manescu, Ronald S.", 68.18, 72.63157895, 68.11279826, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 68.18
      }, {
        "className": "unsecured-bar",
        "value": 31.55
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Maura, Wayne", 64.84, 75.24271845, 60.41009464, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 64.84
      }, {
        "className": "unsecured-bar",
        "value": 35.16
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Pochron, Michael Joseph", 63.99, 69.00584795, 61.08786611, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 63.99
      }, {
        "className": "unsecured-bar",
        "value": 36.01
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Trexler, Daniel C.", 61.95, 73.04964539, 57.55813953, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 61.95
      }, {
        "className": "unsecured-bar",
        "value": 12.73
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 25.04
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Santiago, Rashid", 60.72, 64.65517241, 63.26530612, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 60.72
      }, {
        "className": "unsecured-bar",
        "value": 33
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 5.95
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Butler, Donna R.", 59.62, 70.43478261, 55.907173, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 59.62
      }, {
        "className": "unsecured-bar",
        "value": 38.79
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 1.27
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Engler, Patricia M.", 58.02, 67.97385621, 57.80189959, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 58.02
      }, {
        "className": "unsecured-bar",
        "value": 41.56
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Devine, Karen C.", 57.78, 59.83263598, 58.59213251, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 57.78
      }, {
        "className": "unsecured-bar",
        "value": 42.11
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Howells, David M. Jr.", 57.1, 61.34453782, 60.11235955, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 57.1
      }, {
        "className": "unsecured-bar",
        "value": 42.9
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Beck, Rod", 53.89, 78.94736842, 48.37049743, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.89
      }, {
        "className": "unsecured-bar",
        "value": 26.01
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 20.11
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Halal, Robert C.", 53.25, 67.79661017, 50.32258065, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.25
      }, {
        "className": "unsecured-bar",
        "value": 46.59
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Crawford, Charles H.", 50.37, 58.33333333, 46.08695652, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.37
      }, {
        "className": "unsecured-bar",
        "value": 49.63
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Hammond, Jacob E.", 50.1, 50.71090047, 48.14340589, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.1
      }, {
        "className": "unsecured-bar",
        "value": 21.83
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 27.98
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "D'Amore, Michael D.", 42.59, 46.77419355, 40.88145897, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.59
      }, {
        "className": "unsecured-bar",
        "value": 19.3
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 36.84
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Faulkner, Michael J.", 41.49, 45.92274678, 37.84764208, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.49
      }, {
        "className": "unsecured-bar",
        "value": 58.24
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Anthony, James T.", 31.43, 17.39130435, 36.36363636, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.43
      }, {
        "className": "unsecured-bar",
        "value": 65
      }, {
        "className": "nonmonetary-bar",
        "value": 0.71
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Dantos, Maria L.", 30.81, 32.43243243, 31.25, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.81
      }, {
        "className": "unsecured-bar",
        "value": 64.86
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Lackawanna", 52.635003250000004, 67.13459950000001, 48.9720035, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 52.635003250000004
    }, {
      "className": "unsecured-bar",
      "value": 37.931
    }, {
      "className": "nonmonetary-bar",
      "value": 7.563400000000001
    }, {
      "className": "ror-bar",
      "value": 1.8055
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Giglio, Theodore J.", 67.94, 82.48175182, 64.90825688, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 67.94
      }, {
        "className": "unsecured-bar",
        "value": 19.77
      }, {
        "className": "nonmonetary-bar",
        "value": 8.97
      }, {
        "className": "ror-bar",
        "value": 3.32
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Corbett, Joanne Price", 58.27, 75.42372881, 54.09836066, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 58.27
      }, {
        "className": "unsecured-bar",
        "value": 31.22
      }, {
        "className": "nonmonetary-bar",
        "value": 10.05
      }, {
        "className": "ror-bar",
        "value": 0.31
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Ware, Paul J.", 55.44, 59.84251969, 54.07725322, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 55.44
      }, {
        "className": "unsecured-bar",
        "value": 35.38
      }, {
        "className": "nonmonetary-bar",
        "value": 7.81
      }, {
        "className": "ror-bar",
        "value": 1.38
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "McGraw, Sean P.", 55.3, 75.59055118, 50.52631579, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 55.3
      }, {
        "className": "unsecured-bar",
        "value": 42.52
      }, {
        "className": "nonmonetary-bar",
        "value": 1.71
      }, {
        "className": "ror-bar",
        "value": 0.31
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Pesota, John P.", 53.91, 66.1971831, 50.6, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.91
      }, {
        "className": "unsecured-bar",
        "value": 27.33
      }, {
        "className": "nonmonetary-bar",
        "value": 14.77
      }, {
        "className": "ror-bar",
        "value": 3.99
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Keeler, Paul", 52.27, 69.93464052, 46.8503937, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 52.27
      }, {
        "className": "unsecured-bar",
        "value": 39.94
      }, {
        "className": "nonmonetary-bar",
        "value": 4.25
      }, {
        "className": "ror-bar",
        "value": 3.4
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Farrell, Alyce Hailstone", 49.92, 50.40650407, 50.21097046, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 49.92
      }, {
        "className": "unsecured-bar",
        "value": 42.83
      }, {
        "className": "nonmonetary-bar",
        "value": 6.43
      }, {
        "className": "ror-bar",
        "value": 0.82
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Turlip-Murphy, Laura", 46.17, 63.04347826, 41.89189189, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.17
      }, {
        "className": "unsecured-bar",
        "value": 50.71
      }, {
        "className": "nonmonetary-bar",
        "value": 2.98
      }, {
        "className": "ror-bar",
        "value": 0.13
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Gallagher, Terrence V.", 38.52, 62.28070175, 32.93885602, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.52
      }, {
        "className": "unsecured-bar",
        "value": 47.7
      }, {
        "className": "nonmonetary-bar",
        "value": 12.59
      }, {
        "className": "ror-bar",
        "value": 1.19
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Berks", 50.92425977, 58.42078961, 50.242593170000006, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 50.92425977
    }, {
      "className": "unsecured-bar",
      "value": 32.9706
    }, {
      "className": "nonmonetary-bar",
      "value": 0.8427
    }, {
      "className": "ror-bar",
      "value": 15.2172
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Hall, William N. Jr.", 95.81, 96.2962963, 95.74468085, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 95.81
      }, {
        "className": "unsecured-bar",
        "value": 4.03
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hadzick, Paul J.", 82.72, 86.29032258, 82.65204387, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 82.72
      }, {
        "className": "unsecured-bar",
        "value": 16.82
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.46
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Robinson, Alvin B.", 67.48, 68.46153846, 68.62302483, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 67.48
      }, {
        "className": "unsecured-bar",
        "value": 32.19
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.33
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kennedy, Stuart D.", 62.97, 66.66666667, 64.62765957, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 62.97
      }, {
        "className": "unsecured-bar",
        "value": 20.99
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 16.04
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Glass, David E.", 57.02, 90.38461538, 53.56200528, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 57.02
      }, {
        "className": "unsecured-bar",
        "value": 42.98
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kowalski, Phyllis J.", 55.56, 51.89873418, 57.08812261, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 55.56
      }, {
        "className": "unsecured-bar",
        "value": 43.89
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.56
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Xavios, Thomas H.", 54.71, 61.9047619, 55.87301587, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 54.71
      }, {
        "className": "unsecured-bar",
        "value": 43.5
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 1.79
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Scott, Kyley L.", 51.4, 64.28571429, 51.61290323, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 51.4
      }, {
        "className": "unsecured-bar",
        "value": 20.73
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 27.86
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Patton, Dean R.", 45.8, 57.36434109, 43.23144105, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 45.8
      }, {
        "className": "unsecured-bar",
        "value": 54.08
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Yoch, David L.", 43.48, 55.68181818, 41.81459566, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.48
      }, {
        "className": "unsecured-bar",
        "value": 32.05
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 24.48
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Book, Andrea J.", 43.38, 52.38095238, 42.69662921, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.38
      }, {
        "className": "unsecured-bar",
        "value": 38.77
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 17.54
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Gauby, Thomas M. Sr.", 43.23, 45.09803922, 43.41736695, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.23
      }, {
        "className": "unsecured-bar",
        "value": 32.3
      }, {
        "className": "nonmonetary-bar",
        "value": 24.47
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bentz, Nicholas M. Jr.", 37.58, 41.34078212, 40.12158055, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.58
      }, {
        "className": "unsecured-bar",
        "value": 27.11
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 35.31
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Young, Ann L.", 37.2, 45.52845528, 35.87896254, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.2
      }, {
        "className": "unsecured-bar",
        "value": 16.3
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 46.38
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Frederick, Victor M. IV", 37.03, 41.86046512, 37.42690058, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.03
      }, {
        "className": "unsecured-bar",
        "value": 62.97
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Greth, Gail M.", 34.95, 31.57894737, 35.07246377, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 34.95
      }, {
        "className": "unsecured-bar",
        "value": 65.05
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hartman, Michael G.", 33.33, 42.10526316, 32.14285714, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 33.33
      }, {
        "className": "unsecured-bar",
        "value": 66.67
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Fegley, Sandra L.", 31.79, 29.8013245, 32.33618234, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.79
      }, {
        "className": "unsecured-bar",
        "value": 29.71
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 38.27
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bagenstose, Kim L.", 31.05, 45, 29.82107356, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.05
      }, {
        "className": "unsecured-bar",
        "value": 31.58
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 37.37
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Dougherty, Timothy M.", 29.9, 33.33333333, 33.33333333, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.9
      }, {
        "className": "unsecured-bar",
        "value": 6.7
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 63.4
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Philadelphia", 50.122163519999994, 56.02170568, 43.3107617, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 50.122163519999994
    }, {
      "className": "unsecured-bar",
      "value": 7.017900000000001
    }, {
      "className": "nonmonetary-bar",
      "value": 6.6315
    }, {
      "className": "ror-bar",
      "value": 36.207699999999996
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Rebstock, Francis J.", 51.31, 55.90909091, 44.80991029, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 51.31
      }, {
        "className": "unsecured-bar",
        "value": 5.21
      }, {
        "className": "nonmonetary-bar",
        "value": 0.79
      }, {
        "className": "ror-bar",
        "value": 42.68
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Rice, Jane M.", 51.06, 56.29431227, 44.7446084, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 51.06
      }, {
        "className": "unsecured-bar",
        "value": 16.32
      }, {
        "className": "nonmonetary-bar",
        "value": 1.83
      }, {
        "className": "ror-bar",
        "value": 30.77
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "O'Brien, James", 50.56, 56.52024708, 43.40175953, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.56
      }, {
        "className": "unsecured-bar",
        "value": 9.03
      }, {
        "className": "nonmonetary-bar",
        "value": 6.41
      }, {
        "className": "ror-bar",
        "value": 34
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Stack, Patrick", 50.24, 56.43951744, 42.87348433, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.24
      }, {
        "className": "unsecured-bar",
        "value": 0.16
      }, {
        "className": "nonmonetary-bar",
        "value": 0.62
      }, {
        "className": "ror-bar",
        "value": 48.97
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bedford, Sheila M.", 49.04, 54.89941596, 42.60808926, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 49.04
      }, {
        "className": "unsecured-bar",
        "value": 3.47
      }, {
        "className": "nonmonetary-bar",
        "value": 12.8
      }, {
        "className": "ror-bar",
        "value": 34.69
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Devlin, Kevin R.", 47.39, 53.08736379, 41.41494436, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 47.39
      }, {
        "className": "unsecured-bar",
        "value": 2.03
      }, {
        "className": "nonmonetary-bar",
        "value": 13.4
      }, {
        "className": "ror-bar",
        "value": 37.17
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Beaver", 49.051792830000004, 64.33048433, 43.922127259999996, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 49.051792830000004
    }, {
      "className": "unsecured-bar",
      "value": 12.6554
    }, {
      "className": "nonmonetary-bar",
      "value": 1.833
    }, {
      "className": "ror-bar",
      "value": 35.8145
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Livingston, William R. II", 67.48, 81.08108108, 61.2244898, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 67.48
      }, {
        "className": "unsecured-bar",
        "value": 5.13
      }, {
        "className": "nonmonetary-bar",
        "value": 0.24
      }, {
        "className": "ror-bar",
        "value": 27.14
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hladio, Andrew M.", 59.03, 72.97297297, 54.57413249, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 59.03
      }, {
        "className": "unsecured-bar",
        "value": 13.87
      }, {
        "className": "nonmonetary-bar",
        "value": 1.05
      }, {
        "className": "ror-bar",
        "value": 26.05
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Howe, Edward", 53.84, 70.04405286, 49.07872697, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.84
      }, {
        "className": "unsecured-bar",
        "value": 13.49
      }, {
        "className": "nonmonetary-bar",
        "value": 1.28
      }, {
        "className": "ror-bar",
        "value": 31.4
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Armour, John W.", 53.66, 69.33867735, 56.72043011, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.66
      }, {
        "className": "unsecured-bar",
        "value": 2.09
      }, {
        "className": "nonmonetary-bar",
        "value": 6.62
      }, {
        "className": "ror-bar",
        "value": 37.63
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Loughner, C. Douglas.", 52.62, 67.17948718, 48.1557377, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 52.62
      }, {
        "className": "unsecured-bar",
        "value": 3.39
      }, {
        "className": "nonmonetary-bar",
        "value": 1.7
      }, {
        "className": "ror-bar",
        "value": 42.15
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Swihart, Janet", 51.94, 62.9787234, 48.10690423, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 51.94
      }, {
        "className": "unsecured-bar",
        "value": 14.4
      }, {
        "className": "nonmonetary-bar",
        "value": 1.11
      }, {
        "className": "ror-bar",
        "value": 32.41
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Nicholson, Dale", 47.45, 59.30735931, 41.95402299, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 47.45
      }, {
        "className": "unsecured-bar",
        "value": 17.96
      }, {
        "className": "nonmonetary-bar",
        "value": 1.46
      }, {
        "className": "ror-bar",
        "value": 33.13
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Schafer, Joseph", 42.12, 56.65024631, 36.83274021, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.12
      }, {
        "className": "unsecured-bar",
        "value": 17
      }, {
        "className": "nonmonetary-bar",
        "value": 1.25
      }, {
        "className": "ror-bar",
        "value": 39.62
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Finn, Timothy", 31.84, 53.33333333, 25.6097561, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.84
      }, {
        "className": "unsecured-bar",
        "value": 23.2
      }, {
        "className": "nonmonetary-bar",
        "value": 1.59
      }, {
        "className": "ror-bar",
        "value": 43.37
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Lawrence", 48.92407633, 66.28477905, 43.4806939, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 48.92407633
    }, {
      "className": "unsecured-bar",
      "value": 2.233
    }, {
      "className": "nonmonetary-bar",
      "value": 23.3455
    }, {
      "className": "ror-bar",
      "value": 24.685299999999998
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Amodie, Melissa Ann", 65.79, 81.85053381, 57.64966741, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 65.79
      }, {
        "className": "unsecured-bar",
        "value": 1.7
      }, {
        "className": "nonmonetary-bar",
        "value": 20.71
      }, {
        "className": "ror-bar",
        "value": 11.66
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Nicholson, Jennifer L.", 48.46, 59.45945946, 45.25, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 48.46
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 32.82
      }, {
        "className": "ror-bar",
        "value": 18.73
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "McGrath, Scott", 47.88, 69.76744186, 41.66666667, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 47.88
      }, {
        "className": "unsecured-bar",
        "value": 7.94
      }, {
        "className": "nonmonetary-bar",
        "value": 20.9
      }, {
        "className": "ror-bar",
        "value": 23.28
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Rishel, David B.", 40.13, 50, 38.24701195, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.13
      }, {
        "className": "unsecured-bar",
        "value": 1.64
      }, {
        "className": "nonmonetary-bar",
        "value": 20.72
      }, {
        "className": "ror-bar",
        "value": 37.5
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Cartwright, Jerry G. Jr.", 27.82, 32.60869565, 27.82608696, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.82
      }, {
        "className": "unsecured-bar",
        "value": 2.11
      }, {
        "className": "nonmonetary-bar",
        "value": 28.17
      }, {
        "className": "ror-bar",
        "value": 41.9
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Mifflin", 48.49498328, 70.11494253000001, 47.482014389999996, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 48.49498328
    }, {
      "className": "unsecured-bar",
      "value": 50.6355
    }, {
      "className": "nonmonetary-bar",
      "value": 0.33440000000000003
    }, {
      "className": "ror-bar",
      "value": 0.46820000000000006
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Miller, Jack E.", 55.1, 75.75757576, 54.02542373, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 55.1
      }, {
        "className": "unsecured-bar",
        "value": 43.73
      }, {
        "className": "nonmonetary-bar",
        "value": 0.39
      }, {
        "className": "ror-bar",
        "value": 0.59
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Reed, Jonathan W.", 50.95, 74.07407407, 49.77477477, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.95
      }, {
        "className": "unsecured-bar",
        "value": 48.63
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.42
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Smith, Kent A.", 38.71, 59.25925926, 37.90697674, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.71
      }, {
        "className": "unsecured-bar",
        "value": 60.86
      }, {
        "className": "nonmonetary-bar",
        "value": 0.43
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Northampton", 45.835299670000005, 55.7063541, 43.86813852, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 45.835299670000005
    }, {
      "className": "unsecured-bar",
      "value": 36.5278
    }, {
      "className": "nonmonetary-bar",
      "value": 1.9356000000000002
    }, {
      "className": "ror-bar",
      "value": 15.213
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Matos-Gonzalez, Nancy", 63.3, 66.42335766, 63.19796954, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 63.3
      }, {
        "className": "unsecured-bar",
        "value": 30.64
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 5.87
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Corpora, Daniel G.", 57.62, 68.65671642, 52.03252033, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 57.62
      }, {
        "className": "unsecured-bar",
        "value": 37.47
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 4.91
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Yetter, Richard H. III", 56.91, 63.85542169, 53.84615385, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 56.91
      }, {
        "className": "unsecured-bar",
        "value": 34.99
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 7.37
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Grifo, Antonia", 55.76, 69.60784314, 52.25806452, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 55.76
      }, {
        "className": "unsecured-bar",
        "value": 25.65
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 18.35
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Zito, Alicia Rose", 55.52, 72.72727273, 53.7593985, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 55.52
      }, {
        "className": "unsecured-bar",
        "value": 44.16
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.32
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hawke, Robert A.", 53.61, 75.92592593, 50.81585082, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.61
      }, {
        "className": "unsecured-bar",
        "value": 46.18
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.2
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Taschner, Jacqueline M.", 53.58, 58.01526718, 52.63157895, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.58
      }, {
        "className": "unsecured-bar",
        "value": 26.97
      }, {
        "className": "nonmonetary-bar",
        "value": 0.18
      }, {
        "className": "ror-bar",
        "value": 18.9
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Capobianco, John", 52.85, 72.04301075, 49.90176817, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 52.85
      }, {
        "className": "unsecured-bar",
        "value": 47.15
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Schlegel, Douglas", 47.81, 75, 43.28358209, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 47.81
      }, {
        "className": "unsecured-bar",
        "value": 17.19
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 34.06
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Manwaring, Roy A.", 46.04, 54.92957746, 43.52941176, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.04
      }, {
        "className": "unsecured-bar",
        "value": 48.48
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 5.49
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Narlesky, James J.", 44.19, 49.38271605, 43.33333333, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44.19
      }, {
        "className": "unsecured-bar",
        "value": 55.81
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Broscius, Patricia C.", 39.69, 37.79527559, 41.73669468, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 39.69
      }, {
        "className": "unsecured-bar",
        "value": 60.12
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.2
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Pendolino, Samuel V.", 34.72, 57.53424658, 34.89208633, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 34.72
      }, {
        "className": "unsecured-bar",
        "value": 12.71
      }, {
        "className": "nonmonetary-bar",
        "value": 11.01
      }, {
        "className": "ror-bar",
        "value": 41.56
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Rapp, Anthony G. Jr.", 32.62, 38.63636364, 42.38410596, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.62
      }, {
        "className": "unsecured-bar",
        "value": 65.96
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Zilhaver, Lincoln S.", 30.2, 44.44444444, 30.13435701, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.2
      }, {
        "className": "unsecured-bar",
        "value": 3.88
      }, {
        "className": "nonmonetary-bar",
        "value": 20
      }, {
        "className": "ror-bar",
        "value": 45.51
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Barner, Joseph K.", 27.44, 26.04166667, 27.95698925, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.44
      }, {
        "className": "unsecured-bar",
        "value": 72.56
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Marwood, Rita J.", 23.04, 45.83333333, 23.36244541, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 23.04
      }, {
        "className": "unsecured-bar",
        "value": 16.46
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 60.51
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Romig, Elizabeth A.", 21.2, 34.28571429, 18.07909605, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 21.2
      }, {
        "className": "unsecured-bar",
        "value": 18.89
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 59.91
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Bradford", 45.49865229, 62.26415093999999, 45.148401830000005, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 45.49865229
    }, {
      "className": "unsecured-bar",
      "value": 13.8544
    }, {
      "className": "nonmonetary-bar",
      "value": 29.110500000000002
    }, {
      "className": "ror-bar",
      "value": 11.536399999999999
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Shaw, Michael", 60.71, 81.81818182, 59.8062954, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 60.71
      }, {
        "className": "unsecured-bar",
        "value": 2.46
      }, {
        "className": "nonmonetary-bar",
        "value": 36.16
      }, {
        "className": "ror-bar",
        "value": 0.67
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Wheaton, Fred M.", 42.23, 50, 42.10526316, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.23
      }, {
        "className": "unsecured-bar",
        "value": 49.22
      }, {
        "className": "nonmonetary-bar",
        "value": 1.55
      }, {
        "className": "ror-bar",
        "value": 6.99
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Clark, Timothy M.", 41.82, 47.61904762, 42.02657807, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.82
      }, {
        "className": "unsecured-bar",
        "value": 1.85
      }, {
        "className": "nonmonetary-bar",
        "value": 54.78
      }, {
        "className": "ror-bar",
        "value": 1.54
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Wilcox, Jonathan", 35.79, 50, 35.51136364, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.79
      }, {
        "className": "unsecured-bar",
        "value": 12.02
      }, {
        "className": "nonmonetary-bar",
        "value": 4.64
      }, {
        "className": "ror-bar",
        "value": 47.54
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Lancaster", 44.932404749999996, 55.54532904, 43.07425541, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 44.932404749999996
    }, {
      "className": "unsecured-bar",
      "value": 39.6443
    }, {
      "className": "nonmonetary-bar",
      "value": 0.0902
    }, {
      "className": "ror-bar",
      "value": 15.2283
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Hamill, Nancy G.", 64.32, 77.02702703, 61.37724551, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 64.32
      }, {
        "className": "unsecured-bar",
        "value": 35.44
      }, {
        "className": "nonmonetary-bar",
        "value": 0.24
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Jimenez, Janice", 63.41, 69.23076923, 61.59793814, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 63.41
      }, {
        "className": "unsecured-bar",
        "value": 30.46
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 6.13
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Roth, Bruce A.", 62.44, 66.66666667, 63.97306397, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 62.44
      }, {
        "className": "unsecured-bar",
        "value": 35.85
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 1.46
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Benner, William E. Jr.", 59.79, 71.64179104, 57.84313725, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 59.79
      }, {
        "className": "unsecured-bar",
        "value": 39.95
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Sheller, Raymond S.", 59.6, 70.58823529, 57.84615385, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 59.6
      }, {
        "className": "unsecured-bar",
        "value": 31.82
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 8.59
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hartman, Rodney H.", 57.28, 79.16666667, 53.91791045, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 57.28
      }, {
        "className": "unsecured-bar",
        "value": 34.21
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 8.51
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Russell, Tony S.", 56.44, 71.21212121, 55.34591195, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 56.44
      }, {
        "className": "unsecured-bar",
        "value": 37.02
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 6.53
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Mylin, Stuart J.", 50.93, 62.96296296, 49.79166667, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.93
      }, {
        "className": "unsecured-bar",
        "value": 48.88
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Witkonis, Adam J.", 50.47, 56.39534884, 48.6437613, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.47
      }, {
        "className": "unsecured-bar",
        "value": 38.02
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 11.1
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Tobin, Edward A.", 50.11, 61.53846154, 48.58611825, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.11
      }, {
        "className": "unsecured-bar",
        "value": 40.7
      }, {
        "className": "nonmonetary-bar",
        "value": 1.97
      }, {
        "className": "ror-bar",
        "value": 7.22
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Albert, Scott E.", 49.06, 55.10204082, 47.76470588, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 49.06
      }, {
        "className": "unsecured-bar",
        "value": 50.94
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bixler, Miles K.", 47.41, 59.3220339, 45.15463918, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 47.41
      }, {
        "className": "unsecured-bar",
        "value": 37.7
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 14.89
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Chudzik, Brian E.", 46.31, 57.63888889, 43.30543933, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.31
      }, {
        "className": "unsecured-bar",
        "value": 53.69
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Miller, David P.", 45.52, 49.24623116, 44.69026549, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 45.52
      }, {
        "className": "unsecured-bar",
        "value": 37.11
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 17.38
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Mongiovi-Sponaugle, Mary", 44.38, 36.55172414, 46.69051878, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44.38
      }, {
        "className": "unsecured-bar",
        "value": 20.37
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 34.97
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Keller, Joshua R.", 43.28, 39.53488372, 44.40993789, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.28
      }, {
        "className": "unsecured-bar",
        "value": 38.14
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 18.09
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Wilt, Richard S.", 42.83, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.83
      }, {
        "className": "unsecured-bar",
        "value": 8.86
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 43.04
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Commins, B Denise", 40.23, 56.14035088, 36.95652174, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.23
      }, {
        "className": "unsecured-bar",
        "value": 52.96
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 6.81
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Jamison, Mary G.", 40.06, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.06
      }, {
        "className": "unsecured-bar",
        "value": 59.94
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Duncan, Jayne F.", 32.62, 47.05882353, 32.22891566, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.62
      }, {
        "className": "unsecured-bar",
        "value": 63.64
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 3.74
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Gummo, Douglas L.", 27.51, 37.83783784, 27.39018088, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.51
      }, {
        "className": "unsecured-bar",
        "value": 33.68
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 38.82
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Herman, Robert A. Jr.", 10.35, 17.14285714, 9.725158562, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 10.35
      }, {
        "className": "unsecured-bar",
        "value": 24.81
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 64.83
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Reinaker, Dennis E.", 6.41, 12, 6, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 6.41
      }, {
        "className": "unsecured-bar",
        "value": 46.45
      }, {
        "className": "nonmonetary-bar",
        "value": 0.23
      }, {
        "className": "ror-bar",
        "value": 46.91
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Cambria", 44.29388101, 65.52083332999999, 39.145907470000004, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 44.29388101
    }, {
      "className": "unsecured-bar",
      "value": 33.629799999999996
    }, {
      "className": "nonmonetary-bar",
      "value": 0.0424
    }, {
      "className": "ror-bar",
      "value": 21.6222
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Musulin, Michael", 55.29, 65.19607843, 50.94339623, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 55.29
      }, {
        "className": "unsecured-bar",
        "value": 19.62
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 25.09
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Zanghi, Mary Ann", 54.42, 77.52808989, 47.8125, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 54.42
      }, {
        "className": "unsecured-bar",
        "value": 19.81
      }, {
        "className": "nonmonetary-bar",
        "value": 0.24
      }, {
        "className": "ror-bar",
        "value": 25.54
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Varner, Rick W.", 53.68, 77.04918033, 51.03926097, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.68
      }, {
        "className": "unsecured-bar",
        "value": 45.92
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.4
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Creany, Fred", 49.92, 92.20779221, 43.46978558, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 49.92
      }, {
        "className": "unsecured-bar",
        "value": 10.12
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 39.97
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Price, Kevin J.", 40.55, 52.45283019, 34.89278752, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.55
      }, {
        "className": "unsecured-bar",
        "value": 56.93
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 2.52
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Prebish, John Jr.", 37.68, 68.33333333, 33.17865429, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.68
      }, {
        "className": "unsecured-bar",
        "value": 40.08
      }, {
        "className": "nonmonetary-bar",
        "value": 0.2
      }, {
        "className": "ror-bar",
        "value": 22.04
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Barron, John W.", 36.07, 62.79069767, 30.84291188, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 36.07
      }, {
        "className": "unsecured-bar",
        "value": 37.54
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 26.39
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Zungali, Michael", 35.31, 83.33333333, 30.90909091, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.31
      }, {
        "className": "unsecured-bar",
        "value": 31.63
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 32.86
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "York", 44.27380952, 54.119850189999994, 41.118447870000004, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 44.27380952
    }, {
      "className": "unsecured-bar",
      "value": 15.765299999999998
    }, {
      "className": "nonmonetary-bar",
      "value": 5.7181999999999995
    }, {
      "className": "ror-bar",
      "value": 33.3671
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Meisenhelter, Douglas F.", 81.79, 87.36462094, 79.33227345, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 81.79
      }, {
        "className": "unsecured-bar",
        "value": 17.45
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.11
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Martin, Richard E. II", 74.9, 86.79245283, 69.13580247, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 74.9
      }, {
        "className": "unsecured-bar",
        "value": 21.84
      }, {
        "className": "nonmonetary-bar",
        "value": 0.2
      }, {
        "className": "ror-bar",
        "value": 2.65
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Eshbach, David C.", 54.02, 65.6, 51.9047619, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 54.02
      }, {
        "className": "unsecured-bar",
        "value": 9.62
      }, {
        "className": "nonmonetary-bar",
        "value": 12.65
      }, {
        "className": "ror-bar",
        "value": 23.45
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Clancy, Jennifer J.P.", 53.55, 57.22543353, 52.38095238, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.55
      }, {
        "className": "unsecured-bar",
        "value": 19.84
      }, {
        "className": "nonmonetary-bar",
        "value": 2.58
      }, {
        "className": "ror-bar",
        "value": 23.87
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Morgan, James H.", 51.83, 52.43902439, 52.21843003, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 51.83
      }, {
        "className": "unsecured-bar",
        "value": 15.27
      }, {
        "className": "nonmonetary-bar",
        "value": 1.51
      }, {
        "className": "ror-bar",
        "value": 30.75
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Groom, Walter", 50.99, 62.68656716, 46.21212121, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.99
      }, {
        "className": "unsecured-bar",
        "value": 27.23
      }, {
        "className": "nonmonetary-bar",
        "value": 0.99
      }, {
        "className": "ror-bar",
        "value": 20.79
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Williams, Linda L.", 50.54, 57.73584906, 45.57640751, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.54
      }, {
        "className": "unsecured-bar",
        "value": 2.78
      }, {
        "className": "nonmonetary-bar",
        "value": 14.37
      }, {
        "className": "ror-bar",
        "value": 32.15
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Haskell, Ronald J. Jr.", 48.41, 47.87644788, 49.31506849, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 48.41
      }, {
        "className": "unsecured-bar",
        "value": 16.19
      }, {
        "className": "nonmonetary-bar",
        "value": 8.25
      }, {
        "className": "ror-bar",
        "value": 25.56
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bloss, Barry L.", 46.99, 53.28638498, 44.73180077, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.99
      }, {
        "className": "unsecured-bar",
        "value": 5.61
      }, {
        "className": "nonmonetary-bar",
        "value": 14.37
      }, {
        "className": "ror-bar",
        "value": 32.75
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Miner, James S.", 46.07, 73.17073171, 40.75286416, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.07
      }, {
        "className": "unsecured-bar",
        "value": 6.5
      }, {
        "className": "nonmonetary-bar",
        "value": 1.22
      }, {
        "className": "ror-bar",
        "value": 46.07
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Manifold, Laura S.", 43.35, 48.61111111, 42.09558824, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.35
      }, {
        "className": "unsecured-bar",
        "value": 16.45
      }, {
        "className": "nonmonetary-bar",
        "value": 5.15
      }, {
        "className": "ror-bar",
        "value": 34.91
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Laird, Scott", 43.05, 62.8742515, 36.69064748, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.05
      }, {
        "className": "unsecured-bar",
        "value": 7.08
      }, {
        "className": "nonmonetary-bar",
        "value": 13.35
      }, {
        "className": "ror-bar",
        "value": 36.38
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Toluba, Joel N.", 41.99, 44.56928839, 41.40625, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.99
      }, {
        "className": "unsecured-bar",
        "value": 23.72
      }, {
        "className": "nonmonetary-bar",
        "value": 0.45
      }, {
        "className": "ror-bar",
        "value": 33.53
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Gross, Scott J.", 41.36, 62.28571429, 36.18157543, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.36
      }, {
        "className": "unsecured-bar",
        "value": 17.48
      }, {
        "className": "nonmonetary-bar",
        "value": 6.29
      }, {
        "className": "ror-bar",
        "value": 34.54
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Albright, Keith L.", 40.73, 44.50549451, 40.29850746, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.73
      }, {
        "className": "unsecured-bar",
        "value": 31.53
      }, {
        "className": "nonmonetary-bar",
        "value": 2.65
      }, {
        "className": "ror-bar",
        "value": 25.09
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Thomas, Richard T.", 39.78, 52.84552846, 37.3015873, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 39.78
      }, {
        "className": "unsecured-bar",
        "value": 14.66
      }, {
        "className": "nonmonetary-bar",
        "value": 8.89
      }, {
        "className": "ror-bar",
        "value": 34.32
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Reilly, Thomas J.", 39.6, 60, 36.29807692, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 39.6
      }, {
        "className": "unsecured-bar",
        "value": 28.6
      }, {
        "className": "nonmonetary-bar",
        "value": 1.2
      }, {
        "className": "ror-bar",
        "value": 30.6
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Dubs, Dwayne A.", 36.35, 61.14649682, 30.81481481, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 36.35
      }, {
        "className": "unsecured-bar",
        "value": 14.3
      }, {
        "className": "nonmonetary-bar",
        "value": 0.36
      }, {
        "className": "ror-bar",
        "value": 48.75
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Eckenrode, Robert A.", 33.2, 51.04895105, 29.22297297, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 33.2
      }, {
        "className": "unsecured-bar",
        "value": 12.05
      }, {
        "className": "nonmonetary-bar",
        "value": 2.41
      }, {
        "className": "ror-bar",
        "value": 52.34
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Fishel, John H.", 31.29, 51.61290323, 28.77358491, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.29
      }, {
        "className": "unsecured-bar",
        "value": 7.59
      }, {
        "className": "nonmonetary-bar",
        "value": 7.19
      }, {
        "className": "ror-bar",
        "value": 50.6
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Oberdorf, Jeffrey L.", 30.24, 30.9178744, 29.94652406, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.24
      }, {
        "className": "unsecured-bar",
        "value": 21.36
      }, {
        "className": "nonmonetary-bar",
        "value": 2.57
      }, {
        "className": "ror-bar",
        "value": 45.43
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Ness, Harry M.", 21.35, 15.09433962, 24.79338843, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 21.35
      }, {
        "className": "unsecured-bar",
        "value": 48.88
      }, {
        "className": "nonmonetary-bar",
        "value": 1.69
      }, {
        "className": "ror-bar",
        "value": 24.16
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Edie, Nancy L.", 18.12, 22.09302326, 16.04584527, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 18.12
      }, {
        "className": "unsecured-bar",
        "value": 2.35
      }, {
        "className": "nonmonetary-bar",
        "value": 1.18
      }, {
        "className": "ror-bar",
        "value": 78.12
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Fayette", 44.27074081, 54, 42.30092389, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 44.27074081
    }, {
      "className": "unsecured-bar",
      "value": 54.6505
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 0.7825000000000001
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Jeffries, Jennifer L.", 52.58, 67.46031746, 48.48484848, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 52.58
      }, {
        "className": "unsecured-bar",
        "value": 47.25
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Dennis, Wendy D.", 46.96, 54.54545455, 45.65217391, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.96
      }, {
        "className": "unsecured-bar",
        "value": 52.88
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.16
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Haggerty, Ronald J. Sr.", 45.95, 59.40594059, 44.37172775, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 45.95
      }, {
        "className": "unsecured-bar",
        "value": 53.93
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Shimshock, Daniel C.", 45.89, 57.89473684, 43.59861592, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 45.89
      }, {
        "className": "unsecured-bar",
        "value": 54.11
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Metros, Michael", 45.41, 52.2556391, 43.50132626, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 45.41
      }, {
        "className": "unsecured-bar",
        "value": 54.49
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Defino, Michael J. Jr.", 40.78, 42.22222222, 40.18518519, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.78
      }, {
        "className": "unsecured-bar",
        "value": 58.78
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kasunic, Richard II", 37.85, 50.45045045, 36.19456366, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.85
      }, {
        "className": "unsecured-bar",
        "value": 62.15
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Erie", 43.95330739, 63.73239437, 37.027147310000004, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 43.95330739
    }, {
      "className": "unsecured-bar",
      "value": 18.932
    }, {
      "className": "nonmonetary-bar",
      "value": 0.6072
    }, {
      "className": "ror-bar",
      "value": 36.493900000000004
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Dipaolo, Dominick", 97.36, 98.31460674, 97.35099338, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 97.36
      }, {
        "className": "unsecured-bar",
        "value": 2.35
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.29
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Carney, Thomas", 91.02, 91.07142857, 91.09589041, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 91.02
      }, {
        "className": "unsecured-bar",
        "value": 8.38
      }, {
        "className": "nonmonetary-bar",
        "value": 0.3
      }, {
        "className": "ror-bar",
        "value": 0.3
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Mack, Suzanne C.", 60.68, 61.56862745, 61.8556701, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 60.68
      }, {
        "className": "unsecured-bar",
        "value": 10.04
      }, {
        "className": "nonmonetary-bar",
        "value": 4.49
      }, {
        "className": "ror-bar",
        "value": 24.57
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Urbaniak, Paul G.", 60.33, 60.91954023, 60.76555024, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 60.33
      }, {
        "className": "unsecured-bar",
        "value": 6.05
      }, {
        "className": "nonmonetary-bar",
        "value": 1.46
      }, {
        "className": "ror-bar",
        "value": 32.15
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bizzarro, Paul A.", 48.66, 63.83928571, 38.04347826, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 48.66
      }, {
        "className": "unsecured-bar",
        "value": 13.36
      }, {
        "className": "nonmonetary-bar",
        "value": 0.76
      }, {
        "className": "ror-bar",
        "value": 37.21
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hammer, Scott B.", 43.32, 64.51612903, 41.27516779, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.32
      }, {
        "className": "unsecured-bar",
        "value": 13.06
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 43.62
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Mackendrick, Chris K.", 38.37, 83.33333333, 33.60433604, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.37
      }, {
        "className": "unsecured-bar",
        "value": 61.39
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.24
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Fischer, Deborah", 37.71, 45.16129032, 39.5256917, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.71
      }, {
        "className": "unsecured-bar",
        "value": 7.63
      }, {
        "className": "nonmonetary-bar",
        "value": 2.12
      }, {
        "className": "ror-bar",
        "value": 52.54
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Manzi, Paul", 35.25, 56.52173913, 33.33333333, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.25
      }, {
        "className": "unsecured-bar",
        "value": 62.18
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 2.57
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Stuck-Lewis, Denise", 32.14, 54.83870968, 28.74251497, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.14
      }, {
        "className": "unsecured-bar",
        "value": 9.29
      }, {
        "className": "nonmonetary-bar",
        "value": 0.24
      }, {
        "className": "ror-bar",
        "value": 58.1
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Muir, Shannon L.", 29.93, 42.42424242, 32.01320132, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.93
      }, {
        "className": "unsecured-bar",
        "value": 0.73
      }, {
        "className": "nonmonetary-bar",
        "value": 55.84
      }, {
        "className": "ror-bar",
        "value": 13.14
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Strohmeyer, Susan D.", 27.22, 41.30434783, 25, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.22
      }, {
        "className": "unsecured-bar",
        "value": 9.07
      }, {
        "className": "nonmonetary-bar",
        "value": 0.57
      }, {
        "className": "ror-bar",
        "value": 63.14
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Cooper, Alan B.", 25.17, 36.36363636, 24.26035503, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 25.17
      }, {
        "className": "unsecured-bar",
        "value": 10.2
      }, {
        "className": "nonmonetary-bar",
        "value": 25.85
      }, {
        "className": "ror-bar",
        "value": 38.1
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Krahe, Mark R.", 24.31, 30.55555556, 24.22997947, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 24.31
      }, {
        "className": "unsecured-bar",
        "value": 12.24
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 63.45
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "McGowan, Brian M.", 18.8, 34.73684211, 16.00753296, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 18.8
      }, {
        "className": "unsecured-bar",
        "value": 17.54
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 63.67
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Nichols, Brenda", 17.81, 25, 18.39464883, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 17.81
      }, {
        "className": "unsecured-bar",
        "value": 13.44
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 68.75
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Allegheny", 43.50802205, 57.06645057000001, 35.29897333, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 43.50802205
    }, {
      "className": "unsecured-bar",
      "value": 2.7704
    }, {
      "className": "nonmonetary-bar",
      "value": 23.8085
    }, {
      "className": "ror-bar",
      "value": 29.5724
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Welsh, Regis C.", 85.43, 90.43478261, 80.69414317, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 85.43
      }, {
        "className": "unsecured-bar",
        "value": 0.64
      }, {
        "className": "nonmonetary-bar",
        "value": 3.72
      }, {
        "className": "ror-bar",
        "value": 10.21
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Cramer, Jesse J.", 75.62, 81.08108108, 58.88077859, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 75.62
      }, {
        "className": "unsecured-bar",
        "value": 15.89
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 8.39
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Brletic, Thomas S.", 73.89, 83.11444653, 61.09215017, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 73.89
      }, {
        "className": "unsecured-bar",
        "value": 0.87
      }, {
        "className": "nonmonetary-bar",
        "value": 8.57
      }, {
        "className": "ror-bar",
        "value": 16.57
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Tibbs, Edward A.", 73.79, 79.70660147, 68.33333333, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 73.79
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 19.59
      }, {
        "className": "ror-bar",
        "value": 6.49
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Barner, Robert L.", 71.38, 77.04918033, 64.17322835, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 71.38
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 18.73
      }, {
        "className": "ror-bar",
        "value": 9.89
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Armour, John W.", 67.19, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 67.19
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 25.28
      }, {
        "className": "ror-bar",
        "value": 7.53
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Costa, Ron Sr.", 58.39, 62.44541485, 55.04587156, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 58.39
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 18.08
      }, {
        "className": "ror-bar",
        "value": 23.53
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Ricciardi, Gene", 53.89, 63.45381526, 45.73643411, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.89
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 19.07
      }, {
        "className": "ror-bar",
        "value": 27.04
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Martini, Randy", 53.25, 63.79928315, 43.25396825, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.25
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 24.68
      }, {
        "className": "ror-bar",
        "value": 22.08
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Motznik, James A.", 51.79, 58.31325301, 45.47803618, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 51.79
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 19.98
      }, {
        "className": "ror-bar",
        "value": 28.24
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hromyak, Leonard J.", 51.42, 55.05050505, 49.10714286, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 51.42
      }, {
        "className": "unsecured-bar",
        "value": 0.24
      }, {
        "className": "nonmonetary-bar",
        "value": 35.31
      }, {
        "className": "ror-bar",
        "value": 13.03
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Miller, Thomas Jr.", 49.86, 70.3125, 38.49557522, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 49.86
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 6.09
      }, {
        "className": "ror-bar",
        "value": 44.04
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bengel, Carolyn S.", 49.29, 68.27956989, 40.55944056, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 49.29
      }, {
        "className": "unsecured-bar",
        "value": 1.42
      }, {
        "className": "nonmonetary-bar",
        "value": 16.27
      }, {
        "className": "ror-bar",
        "value": 33.02
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Butler, Daniel E.", 48.64, 56.30252101, 42.85714286, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 48.64
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 25
      }, {
        "className": "ror-bar",
        "value": 26.36
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Larotonda, Blaise P.", 47.09, 71.02803738, 37.07865169, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 47.09
      }, {
        "className": "unsecured-bar",
        "value": 0.26
      }, {
        "className": "nonmonetary-bar",
        "value": 14.29
      }, {
        "className": "ror-bar",
        "value": 38.36
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Sosovicka, David J.", 47.05, 64.42307692, 42.23433243, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 47.05
      }, {
        "className": "unsecured-bar",
        "value": 0.21
      }, {
        "className": "nonmonetary-bar",
        "value": 26.37
      }, {
        "className": "ror-bar",
        "value": 26.37
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Shaffer, Peter H.", 46.63, 60, 48.03149606, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.63
      }, {
        "className": "unsecured-bar",
        "value": 1.23
      }, {
        "className": "nonmonetary-bar",
        "value": 20.86
      }, {
        "className": "ror-bar",
        "value": 31.29
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Stephens, Craig C.", 46.46, 69.15422886, 32.20858896, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.46
      }, {
        "className": "unsecured-bar",
        "value": 8.02
      }, {
        "className": "nonmonetary-bar",
        "value": 19.03
      }, {
        "className": "ror-bar",
        "value": 26.49
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kovach, David T.", 44.59, 62.16216216, 41.50684932, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44.59
      }, {
        "className": "unsecured-bar",
        "value": 10.55
      }, {
        "className": "nonmonetary-bar",
        "value": 7.21
      }, {
        "className": "ror-bar",
        "value": 37.12
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Joyce, Dennis R.", 44.31, 53.52112676, 38.26530612, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44.31
      }, {
        "className": "unsecured-bar",
        "value": 0.29
      }, {
        "className": "nonmonetary-bar",
        "value": 36.73
      }, {
        "className": "ror-bar",
        "value": 18.08
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Cooper, Kevin E.", 44, 51.37614679, 36.70886076, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44
      }, {
        "className": "unsecured-bar",
        "value": 2.46
      }, {
        "className": "nonmonetary-bar",
        "value": 25.08
      }, {
        "className": "ror-bar",
        "value": 28.46
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Fullerton, William T.", 43.47, 74.02597403, 40.08483563, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.47
      }, {
        "className": "unsecured-bar",
        "value": 2.25
      }, {
        "className": "nonmonetary-bar",
        "value": 10.28
      }, {
        "className": "ror-bar",
        "value": 42.29
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Martin, Armand", 43.25, 50.75376884, 38.9261745, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.25
      }, {
        "className": "unsecured-bar",
        "value": 0.99
      }, {
        "className": "nonmonetary-bar",
        "value": 44.84
      }, {
        "className": "ror-bar",
        "value": 10.71
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Riazzi, Eugene F. Jr.", 41.92, 45.73170732, 37.59124088, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.92
      }, {
        "className": "unsecured-bar",
        "value": 0.33
      }, {
        "className": "nonmonetary-bar",
        "value": 23.16
      }, {
        "className": "ror-bar",
        "value": 34.42
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Mills, Beth S.", 40.74, 61.20689655, 30.43478261, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.74
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 16.52
      }, {
        "className": "ror-bar",
        "value": 42.74
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Ceoffe, Anthony M.", 40.35, 47.50733138, 33.71757925, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.35
      }, {
        "className": "unsecured-bar",
        "value": 3.31
      }, {
        "className": "nonmonetary-bar",
        "value": 26.37
      }, {
        "className": "ror-bar",
        "value": 29.83
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Arnoni, Ronald", 39.83, 71.55963303, 29.94505495, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 39.83
      }, {
        "className": "unsecured-bar",
        "value": 15.93
      }, {
        "className": "nonmonetary-bar",
        "value": 41.09
      }, {
        "className": "ror-bar",
        "value": 3.14
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Petite, Oscar J. Jr.", 39.55, 50.32258065, 29.53020134, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 39.55
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 24.44
      }, {
        "className": "ror-bar",
        "value": 36.01
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Rushing, Derwin", 39.55, 48.55643045, 30.72625698, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 39.55
      }, {
        "className": "unsecured-bar",
        "value": 0.4
      }, {
        "className": "nonmonetary-bar",
        "value": 29.69
      }, {
        "className": "ror-bar",
        "value": 30.36
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hanley, James J. Jr.", 38.9, 49.79079498, 26.92307692, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.9
      }, {
        "className": "unsecured-bar",
        "value": 2.54
      }, {
        "className": "nonmonetary-bar",
        "value": 25.19
      }, {
        "className": "ror-bar",
        "value": 33.37
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Saveikis, Anthony William", 38.71, 79.41176471, 21.09704641, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.71
      }, {
        "className": "unsecured-bar",
        "value": 0.59
      }, {
        "className": "nonmonetary-bar",
        "value": 14.37
      }, {
        "className": "ror-bar",
        "value": 46.33
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Wagner, William", 38.51, 69.47368421, 26.60550459, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.51
      }, {
        "className": "unsecured-bar",
        "value": 7.14
      }, {
        "className": "nonmonetary-bar",
        "value": 11.8
      }, {
        "className": "ror-bar",
        "value": 42.55
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Smith, Tara", 36.19, 57.06214689, 25.3776435, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 36.19
      }, {
        "className": "unsecured-bar",
        "value": 6.61
      }, {
        "className": "nonmonetary-bar",
        "value": 38.13
      }, {
        "className": "ror-bar",
        "value": 19.07
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Ravenstahl, Robert P. Jr.", 34.28, 38.30645161, 32.08955224, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 34.28
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 31.44
      }, {
        "className": "ror-bar",
        "value": 34.28
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Stoughton, Lewis E.", 33.96, 66, 34.16856492, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 33.96
      }, {
        "className": "unsecured-bar",
        "value": 4.4
      }, {
        "className": "nonmonetary-bar",
        "value": 15.47
      }, {
        "className": "ror-bar",
        "value": 45.28
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "DeLuca, Anthony", 33.17, 41.82692308, 25.5, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 33.17
      }, {
        "className": "unsecured-bar",
        "value": 0.24
      }, {
        "className": "nonmonetary-bar",
        "value": 21.88
      }, {
        "className": "ror-bar",
        "value": 44.71
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Dzvonick, Robert Paul", 32.07, 61.37931034, 21.0106383, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.07
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 8.73
      }, {
        "className": "ror-bar",
        "value": 59.01
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Ford, Robert L.", 31.56, 44.68085106, 26.53846154, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.56
      }, {
        "className": "unsecured-bar",
        "value": 0.28
      }, {
        "className": "nonmonetary-bar",
        "value": 66.48
      }, {
        "className": "ror-bar",
        "value": 1.68
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Olasz, Richard D. Jr.", 31.23, 39.73799127, 24.42244224, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.23
      }, {
        "className": "unsecured-bar",
        "value": 1.67
      }, {
        "className": "nonmonetary-bar",
        "value": 43.12
      }, {
        "className": "ror-bar",
        "value": 23.98
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "King, Richard G.", 30.79, 40.90909091, 23.90243902, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.79
      }, {
        "className": "unsecured-bar",
        "value": 2.45
      }, {
        "className": "nonmonetary-bar",
        "value": 47.41
      }, {
        "className": "ror-bar",
        "value": 19.35
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Haggerty, Sue", 30.69, 65, 31.11111111, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.69
      }, {
        "className": "unsecured-bar",
        "value": 12.94
      }, {
        "className": "nonmonetary-bar",
        "value": 4.38
      }, {
        "className": "ror-bar",
        "value": 51.36
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Zucco, Linda", 30, 40.74074074, 24.84848485, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 30
      }, {
        "className": "ror-bar",
        "value": 39.6
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Caulfield, Thomas", 29.88, 33.33333333, 26.14379085, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.88
      }, {
        "className": "unsecured-bar",
        "value": 0.3
      }, {
        "className": "nonmonetary-bar",
        "value": 64.2
      }, {
        "className": "ror-bar",
        "value": 5.62
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Schricker, Scott H.", 29.03, 32.28070175, 24.79674797, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.03
      }, {
        "className": "unsecured-bar",
        "value": 0.56
      }, {
        "className": "nonmonetary-bar",
        "value": 4.68
      }, {
        "className": "ror-bar",
        "value": 65.73
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Swearingen-Batch, Carla M.", 27.58, 51.51515152, 19.04761905, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.58
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 58.18
      }, {
        "className": "ror-bar",
        "value": 14.24
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Eichler, Roxanne Sakoian", 27.55, 39.22651934, 19.24686192, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.55
      }, {
        "className": "unsecured-bar",
        "value": 6.02
      }, {
        "className": "nonmonetary-bar",
        "value": 18.52
      }, {
        "className": "ror-bar",
        "value": 47.92
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Barton, David J.", 27.52, 51.85185185, 20.30769231, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.52
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 10.74
      }, {
        "className": "ror-bar",
        "value": 61.74
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "McGraw-Desmet, Maureen", 27.38, 49.51456311, 17.94871795, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.38
      }, {
        "className": "unsecured-bar",
        "value": 0.86
      }, {
        "className": "nonmonetary-bar",
        "value": 19.02
      }, {
        "className": "ror-bar",
        "value": 52.74
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Lang, Elissa M.", 27.27, 46.15384615, 16.2055336, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.27
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 40.19
      }, {
        "className": "ror-bar",
        "value": 32.54
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Cercone, Mary A.", 25.22, 33.66834171, 19.12350598, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 25.22
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 61.74
      }, {
        "className": "ror-bar",
        "value": 13.04
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Opiela, Richard J.", 24.7, 49.52380952, 16.39344262, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 24.7
      }, {
        "className": "unsecured-bar",
        "value": 16.95
      }, {
        "className": "nonmonetary-bar",
        "value": 30.75
      }, {
        "className": "ror-bar",
        "value": 27.6
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kaiser, Ralph", 24.17, 41.40127389, 17.13395639, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 24.17
      }, {
        "className": "unsecured-bar",
        "value": 0.19
      }, {
        "className": "nonmonetary-bar",
        "value": 10.72
      }, {
        "className": "ror-bar",
        "value": 64.91
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Swan, Tom", 24.11, 56.04395604, 15.17027864, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 24.11
      }, {
        "className": "unsecured-bar",
        "value": 0.24
      }, {
        "className": "nonmonetary-bar",
        "value": 29.36
      }, {
        "className": "ror-bar",
        "value": 46.3
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Shaffer, William", 23.33, 21.42857143, 21.01910828, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 23.33
      }, {
        "className": "unsecured-bar",
        "value": 0.83
      }, {
        "className": "nonmonetary-bar",
        "value": 42.5
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Murray, Mary P.", 22.8, 35.4679803, 17.38095238, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 22.8
      }, {
        "className": "unsecured-bar",
        "value": 0.16
      }, {
        "className": "nonmonetary-bar",
        "value": 36.48
      }, {
        "className": "ror-bar",
        "value": 40.25
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Seibel, Wayne D.", 20.58, 50, 21.49901381, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 20.58
      }, {
        "className": "unsecured-bar",
        "value": 12.08
      }, {
        "className": "nonmonetary-bar",
        "value": 18.57
      }, {
        "className": "ror-bar",
        "value": 48.32
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Herbst, Jeffrey L.", 17.67, 24.36548223, 13.94557823, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 17.67
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 13.25
      }, {
        "className": "ror-bar",
        "value": 68.88
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Manning, Jeffrey A.", 7.91, 13.4529148, 7.142857143, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 7.91
      }, {
        "className": "unsecured-bar",
        "value": 1.35
      }, {
        "className": "nonmonetary-bar",
        "value": 68.69
      }, {
        "className": "ror-bar",
        "value": 21.72
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Dauphin", 42.44132779, 51.21710526, 36.4556962, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 42.44132779
    }, {
      "className": "unsecured-bar",
      "value": 37.7645
    }, {
      "className": "nonmonetary-bar",
      "value": 1.0226000000000002
    }, {
      "className": "ror-bar",
      "value": 18.4838
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Shugars, Raymond F.", 90.57, 91.74757282, 88.57142857, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 90.57
      }, {
        "className": "unsecured-bar",
        "value": 8
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 1.43
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Semic, Steven M.", 84.79, 85.87443946, 84.1191067, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 84.79
      }, {
        "className": "unsecured-bar",
        "value": 14.86
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.35
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Zozos, George A.", 65.83, 68.24512535, 64.78873239, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 65.83
      }, {
        "className": "unsecured-bar",
        "value": 32.5
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 1.17
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Pianka, Barbara", 59.16, 63.03317536, 53.63984674, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 59.16
      }, {
        "className": "unsecured-bar",
        "value": 40.7
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Zozos, Paul T.", 50.32, 54.35435435, 45.66037736, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.32
      }, {
        "className": "unsecured-bar",
        "value": 49.04
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.64
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Witmer, Lowell A.", 46.95, 65.46391753, 39.26829268, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.95
      }, {
        "className": "unsecured-bar",
        "value": 20.58
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 32.32
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Lenker, James A.", 42.25, 43.58974359, 42.19653179, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.25
      }, {
        "className": "unsecured-bar",
        "value": 56.97
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.77
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Wenner, William C.", 41.78, 48.33333333, 37.57338552, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.78
      }, {
        "className": "unsecured-bar",
        "value": 12.12
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 46.1
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Lenker, Kenneth A.", 40.08, 45.63953488, 35.37234043, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.08
      }, {
        "className": "unsecured-bar",
        "value": 24.7
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 35.22
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "McKnight, Sonya M.", 39.06, 39.04282116, 43.55555556, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 39.06
      }, {
        "className": "unsecured-bar",
        "value": 25.84
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 34.51
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Judy, David H.", 38.99, 55.73770492, 31.30929791, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.99
      }, {
        "className": "unsecured-bar",
        "value": 19.75
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 41.13
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "O'Leary, David", 35.03, 41.32653061, 38.46153846, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.03
      }, {
        "className": "unsecured-bar",
        "value": 61.86
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 2.22
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Margerum, Rebecca J.", 33.87, 56.41025641, 27.44186047, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 33.87
      }, {
        "className": "unsecured-bar",
        "value": 29.77
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 36.36
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Lindsey, Joseph S.", 33.86, 43.64640884, 26.65148064, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 33.86
      }, {
        "className": "unsecured-bar",
        "value": 66.14
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Smith, Michael J.", 31.43, 37.90664781, 28.18991098, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.43
      }, {
        "className": "unsecured-bar",
        "value": 68.34
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.23
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Johnson, Gregory D.", 30.92, 60.28368794, 23.10679612, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.92
      }, {
        "className": "unsecured-bar",
        "value": 12.22
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 56.56
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Pelino, Dominic", 24.61, 45.94594595, 18.29787234, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 24.61
      }, {
        "className": "unsecured-bar",
        "value": 10.62
      }, {
        "className": "nonmonetary-bar",
        "value": 15.25
      }, {
        "className": "ror-bar",
        "value": 49.42
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "McKean", 42.381348880000004, 61.333333329999995, 41.23134328, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 42.381348880000004
    }, {
      "className": "unsecured-bar",
      "value": 52.5042
    }, {
      "className": "nonmonetary-bar",
      "value": 0.0835
    }, {
      "className": "ror-bar",
      "value": 4.9249
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Engman, David Richard", 46.85, 90.90909091, 48.10810811, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.85
      }, {
        "className": "unsecured-bar",
        "value": 50.45
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 2.7
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Cercone, Dominic Jr.", 42.11, 67.74193548, 39.44954128, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.11
      }, {
        "className": "unsecured-bar",
        "value": 49.86
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 7.48
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Todd, William K.", 42.07, 71.42857143, 40.06968641, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.07
      }, {
        "className": "unsecured-bar",
        "value": 54.37
      }, {
        "className": "nonmonetary-bar",
        "value": 0.32
      }, {
        "className": "ror-bar",
        "value": 2.91
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Luther, Richard W.", 39.74, 40.74074074, 40.07352941, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 39.74
      }, {
        "className": "unsecured-bar",
        "value": 55.05
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 5.21
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Armstrong", 41.05888709, 62.71186441, 39.52662722, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 41.05888709
    }, {
      "className": "unsecured-bar",
      "value": 12.371699999999999
    }, {
      "className": "nonmonetary-bar",
      "value": 3.2954999999999997
    }, {
      "className": "ror-bar",
      "value": 43.2739
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Andring, James", 60.57, 83.33333333, 60.25236593, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 60.57
      }, {
        "className": "unsecured-bar",
        "value": 38.57
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.86
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Owen, James H.", 40.05, 67.24137931, 37.82991202, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.05
      }, {
        "className": "unsecured-bar",
        "value": 10.74
      }, {
        "className": "nonmonetary-bar",
        "value": 1.06
      }, {
        "className": "ror-bar",
        "value": 48.14
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Decomo, J. Gary", 35.65, 50, 34.25925926, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.65
      }, {
        "className": "unsecured-bar",
        "value": 1.19
      }, {
        "className": "nonmonetary-bar",
        "value": 8.15
      }, {
        "className": "ror-bar",
        "value": 55.01
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Warren", 40.61393152, 70, 39.95067818, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 40.61393152
    }, {
      "className": "unsecured-bar",
      "value": 15.112200000000001
    }, {
      "className": "nonmonetary-bar",
      "value": 2.2432
    }, {
      "className": "ror-bar",
      "value": 42.030699999999996
    }]
  }],
  "outlier": true,
  "collapseData": [{
    "data": ["", "Carlson, Glenn S.", 45.68, 85.71428571, 44.93670886, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 45.68
      }, {
        "className": "unsecured-bar",
        "value": 20.37
      }, {
        "className": "nonmonetary-bar",
        "value": 0.31
      }, {
        "className": "ror-bar",
        "value": 33.64
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Bauer, Laura", 35.16, 71.42857143, 35.5450237, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.16
      }, {
        "className": "unsecured-bar",
        "value": 6.39
      }, {
        "className": "nonmonetary-bar",
        "value": 8.22
      }, {
        "className": "ror-bar",
        "value": 50.23
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Woodin, Todd A.", 32.83, 66.66666667, 32.14285714, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.83
      }, {
        "className": "unsecured-bar",
        "value": 16.23
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 50.94
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Susquehanna", 40.32663317, 66.66666667, 39.76377953, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 40.32663317
    }, {
      "className": "unsecured-bar",
      "value": 33.2075
    }, {
      "className": "nonmonetary-bar",
      "value": 0.8805000000000001
    }, {
      "className": "ror-bar",
      "value": 25.5346
    }]
  }],
  "outlier": true,
  "collapseData": [{
    "data": ["", "Hollister, Jeffrey L.", 53.19, 100, 52.6119403, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.19
      }, {
        "className": "unsecured-bar",
        "value": 37.59
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 9.22
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Cordner, Jodi L.", 35.69, 50, 35.46099291, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.69
      }, {
        "className": "unsecured-bar",
        "value": 24.92
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 39.06
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Brainard, Suzanne M.", 30.09, 50, 29.71698113, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.09
      }, {
        "className": "unsecured-bar",
        "value": 38.89
      }, {
        "className": "nonmonetary-bar",
        "value": 3.24
      }, {
        "className": "ror-bar",
        "value": 27.78
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Clarion", 40, 40.625, 40.83259522, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 40
    }, {
      "className": "unsecured-bar",
      "value": 34.2169
    }, {
      "className": "nonmonetary-bar",
      "value": 0.0803
    }, {
      "className": "ror-bar",
      "value": 25.702799999999996
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Miller, Jeffrey C.", 44.41, 50, 44.98480243, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44.41
      }, {
        "className": "unsecured-bar",
        "value": 52.35
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 3.24
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Schill, Timothy P.", 43.53, 72.72727273, 43.61370717, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.53
      }, {
        "className": "unsecured-bar",
        "value": 18.82
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 37.65
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Quinn, Duane L.", 37.9, 31.81818182, 39.15857605, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.9
      }, {
        "className": "unsecured-bar",
        "value": 29.03
      }, {
        "className": "nonmonetary-bar",
        "value": 0.27
      }, {
        "className": "ror-bar",
        "value": 32.8
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Long Turk, Amy L.", 29.21, 40, 30.12820513, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.21
      }, {
        "className": "unsecured-bar",
        "value": 37.64
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 33.15
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Huntingdon", 38.96907216, 64.05228758, 37.83333333, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 38.96907216
    }, {
      "className": "unsecured-bar",
      "value": 30.3158
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 29.6842
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Wilt, Richard", 43.54, 77.38095238, 39.09090909, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.54
      }, {
        "className": "unsecured-bar",
        "value": 8.14
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 43.01
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Jamison, Mary", 41.78, 60.71428571, 42.90123457, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.78
      }, {
        "className": "unsecured-bar",
        "value": 58.22
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Gummo, Douglas L.", 26.93, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 26.93
      }, {
        "className": "unsecured-bar",
        "value": 34.66
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 38.41
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Washington", 38.93688681, 55.77092511, 35.82116788, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 38.93688681
    }, {
      "className": "unsecured-bar",
      "value": 34.2627
    }, {
      "className": "nonmonetary-bar",
      "value": 0.9538
    }, {
      "className": "ror-bar",
      "value": 25.663999999999998
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Hopkins, Larry W.", 53.38, 70.76923077, 49.90176817, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.38
      }, {
        "className": "unsecured-bar",
        "value": 46.17
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.3
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Wilson, Mark", 53.38, 66.25, 49.70238095, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.38
      }, {
        "className": "unsecured-bar",
        "value": 22.84
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 23.78
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Havelka, Gary H.", 50, 86.66666667, 48.42519685, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50
      }, {
        "className": "unsecured-bar",
        "value": 12.66
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 37.34
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Ward, Ethan T.", 49.1, 69.23076923, 45.55256065, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 49.1
      }, {
        "className": "unsecured-bar",
        "value": 50.45
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.23
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Redlinger, Robert W.", 43.93, 55.45851528, 40.58394161, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.93
      }, {
        "className": "unsecured-bar",
        "value": 38.54
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 17.42
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Mark, David W.", 40.65, 65.6, 35.77661431, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.65
      }, {
        "className": "unsecured-bar",
        "value": 7.31
      }, {
        "className": "nonmonetary-bar",
        "value": 4.22
      }, {
        "className": "ror-bar",
        "value": 47.54
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Thompson, Curtis", 34.55, 58.53658537, 32.12290503, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 34.55
      }, {
        "className": "unsecured-bar",
        "value": 65.21
      }, {
        "className": "nonmonetary-bar",
        "value": 0.24
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Ellis, James C.", 31.19, 65.11627907, 28.19148936, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.19
      }, {
        "className": "unsecured-bar",
        "value": 11.93
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 56.88
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kanalis, Joshua P.", 29.04, 29.16666667, 28.84990253, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.04
      }, {
        "className": "unsecured-bar",
        "value": 70.03
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Weller, Jay", 29, 44.93670886, 26.06060606, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29
      }, {
        "className": "unsecured-bar",
        "value": 3
      }, {
        "className": "nonmonetary-bar",
        "value": 3.2
      }, {
        "className": "ror-bar",
        "value": 64.5
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "McDonald, Traci L.", 28.08, 48.07692308, 26.52631579, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 28.08
      }, {
        "className": "unsecured-bar",
        "value": 52.36
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 19.38
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Lebanon", 38.70437956, 48.84547069, 37.97733949, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 38.70437956
    }, {
      "className": "unsecured-bar",
      "value": 56.2432
    }, {
      "className": "nonmonetary-bar",
      "value": 0.6207
    }, {
      "className": "ror-bar",
      "value": 3.5232
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Capello, Thomas M.", 48.29, 58.58585859, 47.06790123, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 48.29
      }, {
        "className": "unsecured-bar",
        "value": 51.71
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Garver, Carl Russell", 42.51, 54.54545455, 41.29353234, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.51
      }, {
        "className": "unsecured-bar",
        "value": 57.35
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Wolfe, Kim R.", 40.89, 47.61904762, 39.95006242, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.89
      }, {
        "className": "unsecured-bar",
        "value": 59.11
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kline, Samuel A.", 40.43, 66.66666667, 37.34939759, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.43
      }, {
        "className": "unsecured-bar",
        "value": 0.53
      }, {
        "className": "nonmonetary-bar",
        "value": 2.13
      }, {
        "className": "ror-bar",
        "value": 43.09
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Jones, Charles T. Jr.", 38.21, 26.08695652, 41, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.21
      }, {
        "className": "unsecured-bar",
        "value": 61.79
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Verna, Anthony J.", 35.64, 55.35714286, 35.25, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.64
      }, {
        "className": "unsecured-bar",
        "value": 64.25
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Dissinger, Maria M.", 35.26, 43.68932039, 35.25925926, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.26
      }, {
        "className": "unsecured-bar",
        "value": 64.62
      }, {
        "className": "nonmonetary-bar",
        "value": 0.12
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Charles, Bradford H.", 29.14, 23.52941176, 29.54545455, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.14
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 0.66
      }, {
        "className": "ror-bar",
        "value": 55.63
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Ditzler, John W.", 29.04, 35.59322034, 28.67132867, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.04
      }, {
        "className": "unsecured-bar",
        "value": 69.1
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 1.86
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Bedford", 38.63636364, 52.57731959, 37.564196630000005, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 38.63636364
    }, {
      "className": "unsecured-bar",
      "value": 59.5588
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 1.8048000000000002
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Bingham, H. Cyril Jr.", 44.85, 71.42857143, 42.06896552, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44.85
      }, {
        "className": "unsecured-bar",
        "value": 55.15
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Baker, Brian K.", 37.85, 58.33333333, 36.52694611, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.85
      }, {
        "className": "unsecured-bar",
        "value": 58.84
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 3.31
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Calhoun, Kathy S.", 37.06, 31.57894737, 37.59398496, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.06
      }, {
        "className": "unsecured-bar",
        "value": 60.14
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 2.8
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Osman, Tonya M.", 30.8, 31.25, 30.70539419, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.8
      }, {
        "className": "unsecured-bar",
        "value": 68.06
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 1.14
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Jefferson", 38.55721393, 72.97297297, 38.352524360000004, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 38.55721393
    }, {
      "className": "unsecured-bar",
      "value": 61.2769
    }, {
      "className": "nonmonetary-bar",
      "value": 0.0829
    }, {
      "className": "ror-bar",
      "value": 0.0829
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Inzana, David B.", 43.07, 73.33333333, 42.06349206, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.07
      }, {
        "className": "unsecured-bar",
        "value": 56.93
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Chambers, Douglas R.", 37.91, 50, 37.93103448, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.91
      }, {
        "className": "unsecured-bar",
        "value": 62.09
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Bazylak, Gregory M.", 34.71, 81.81818182, 34.73684211, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 34.71
      }, {
        "className": "unsecured-bar",
        "value": 65.05
      }, {
        "className": "nonmonetary-bar",
        "value": 0.24
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Cumberland", 38.5278224, 51.61744023, 35.0094162, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 38.5278224
    }, {
      "className": "unsecured-bar",
      "value": 19.132099999999998
    }, {
      "className": "nonmonetary-bar",
      "value": 0.4985
    }, {
      "className": "ror-bar",
      "value": 41.5188
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Beckley, Elizabeth S.", 50.98, 63.94557823, 47.16157205, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.98
      }, {
        "className": "unsecured-bar",
        "value": 48.7
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Silcox, Kathryn H.", 46.11, 70.1754386, 40.7678245, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.11
      }, {
        "className": "unsecured-bar",
        "value": 26.14
      }, {
        "className": "nonmonetary-bar",
        "value": 0.29
      }, {
        "className": "ror-bar",
        "value": 27.31
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Clement, Charles A.", 43.14, 59.33333333, 37.95180723, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.14
      }, {
        "className": "unsecured-bar",
        "value": 11.13
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 44.82
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Birbeck, Jonathan R.", 43.02, 60.50420168, 37.31707317, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.02
      }, {
        "className": "unsecured-bar",
        "value": 6.33
      }, {
        "className": "nonmonetary-bar",
        "value": 2.23
      }, {
        "className": "ror-bar",
        "value": 47.3
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Fegley, Paul M.", 40.93, 49.59349593, 37.96296296, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.93
      }, {
        "className": "unsecured-bar",
        "value": 13.7
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 43.42
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Day, Susan K.", 40.72, 50.87719298, 38.74239351, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.72
      }, {
        "className": "unsecured-bar",
        "value": 11.24
      }, {
        "className": "nonmonetary-bar",
        "value": 0.16
      }, {
        "className": "ror-bar",
        "value": 47.88
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Dougherty, Richard S. Jr.", 40.14, 55.28455285, 35.79952267, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.14
      }, {
        "className": "unsecured-bar",
        "value": 11.93
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 47.2
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Cohick, Vivian J.", 39.52, 63.95348837, 35.26785714, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 39.52
      }, {
        "className": "unsecured-bar",
        "value": 14.34
      }, {
        "className": "nonmonetary-bar",
        "value": 1.84
      }, {
        "className": "ror-bar",
        "value": 44.3
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Martin, Mark W.", 35.06, 50, 31.68141593, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.06
      }, {
        "className": "unsecured-bar",
        "value": 23.13
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 41.81
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Adams, H. Anthony", 25.31, 33.5443038, 23.60248447, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 25.31
      }, {
        "className": "unsecured-bar",
        "value": 15.36
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 59.21
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Luzerne", 38.288852490000004, 53.5892323, 34.6550856, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 38.288852490000004
    }, {
      "className": "unsecured-bar",
      "value": 31.285600000000002
    }, {
      "className": "nonmonetary-bar",
      "value": 1.0030000000000001
    }, {
      "className": "ror-bar",
      "value": 29.3085
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Whittaker, Donald L.", 60.13, 79.85074627, 53.75854214, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 60.13
      }, {
        "className": "unsecured-bar",
        "value": 7.31
      }, {
        "className": "nonmonetary-bar",
        "value": 0.33
      }, {
        "className": "ror-bar",
        "value": 32.06
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hasay, John E.", 53.37, 77.04918033, 48.97260274, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 53.37
      }, {
        "className": "unsecured-bar",
        "value": 10.51
      }, {
        "className": "nonmonetary-bar",
        "value": 6.74
      }, {
        "className": "ror-bar",
        "value": 29.38
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Halesey, Joseph A.", 52.26, 76.92307692, 45.40540541, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 52.26
      }, {
        "className": "unsecured-bar",
        "value": 22.37
      }, {
        "className": "nonmonetary-bar",
        "value": 0.38
      }, {
        "className": "ror-bar",
        "value": 25
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Dixon, James M.", 46.81, 65.48672566, 43.69747899, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.81
      }, {
        "className": "unsecured-bar",
        "value": 39.35
      }, {
        "className": "nonmonetary-bar",
        "value": 0.27
      }, {
        "className": "ror-bar",
        "value": 13.57
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "O'Donnell, Daniel", 46.64, 69.90291262, 40.97222222, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.64
      }, {
        "className": "unsecured-bar",
        "value": 19.96
      }, {
        "className": "nonmonetary-bar",
        "value": 3.45
      }, {
        "className": "ror-bar",
        "value": 29.95
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Spagnuolo, Joseph D. Jr.", 44.44, 53.91304348, 42.65010352, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44.44
      }, {
        "className": "unsecured-bar",
        "value": 32.22
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 23.02
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Roberts, Paul J.", 43.77, 66.07142857, 38.07531381, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.77
      }, {
        "className": "unsecured-bar",
        "value": 56.23
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Barilla, David A.", 43.61, 63.30275229, 39.21568627, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.61
      }, {
        "className": "unsecured-bar",
        "value": 32.37
      }, {
        "className": "nonmonetary-bar",
        "value": 0.17
      }, {
        "className": "ror-bar",
        "value": 23.85
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Zola, Joseph D.", 41.47, 66.40625, 36.3963964, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.47
      }, {
        "className": "unsecured-bar",
        "value": 20.17
      }, {
        "className": "nonmonetary-bar",
        "value": 0.28
      }, {
        "className": "ror-bar",
        "value": 38.08
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kravitz, Alexandra Kokura", 40.42, 58, 36.85185185, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.42
      }, {
        "className": "unsecured-bar",
        "value": 29.94
      }, {
        "className": "nonmonetary-bar",
        "value": 0.45
      }, {
        "className": "ror-bar",
        "value": 28.59
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Carmody, Joseph J.", 38.76, 57.2815534, 33.69863014, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.76
      }, {
        "className": "unsecured-bar",
        "value": 44.95
      }, {
        "className": "nonmonetary-bar",
        "value": 0.62
      }, {
        "className": "ror-bar",
        "value": 15.46
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Cronauer, Rick", 36.59, 39.82300885, 36.16236162, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 36.59
      }, {
        "className": "unsecured-bar",
        "value": 29.42
      }, {
        "className": "nonmonetary-bar",
        "value": 0.74
      }, {
        "className": "ror-bar",
        "value": 33.13
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Malloy, Thomas F. Sr.", 31.99, 42.62948207, 28.16901408, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.99
      }, {
        "className": "unsecured-bar",
        "value": 34
      }, {
        "className": "nonmonetary-bar",
        "value": 0.11
      }, {
        "className": "ror-bar",
        "value": 33.79
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Dotzel, Michael G.", 28.88, 28.43137255, 29.23076923, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 28.88
      }, {
        "className": "unsecured-bar",
        "value": 12.57
      }, {
        "className": "nonmonetary-bar",
        "value": 5.3
      }, {
        "className": "ror-bar",
        "value": 52.85
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Tupper, Brian James", 27.47, 65.75342466, 22.09302326, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.47
      }, {
        "className": "unsecured-bar",
        "value": 14.31
      }, {
        "className": "nonmonetary-bar",
        "value": 0.16
      }, {
        "className": "ror-bar",
        "value": 57.89
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Sharkey, Thomas", 15.29, 38.88888889, 12.97709924, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 15.29
      }, {
        "className": "unsecured-bar",
        "value": 8.28
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 76.43
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Lupas, David W.", 14.73, 9.090909091, 16.50485437, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 14.73
      }, {
        "className": "unsecured-bar",
        "value": 85.27
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Sklarosky, Joseph F. Jr.", 10.53, 4.761904762, 11.9266055, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 10.53
      }, {
        "className": "unsecured-bar",
        "value": 89.47
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Columbia", 38.18897638, 40.796019900000005, 38.46153846, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 38.18897638
    }, {
      "className": "unsecured-bar",
      "value": 42.0697
    }, {
      "className": "nonmonetary-bar",
      "value": 0.11249999999999999
    }, {
      "className": "ror-bar",
      "value": 19.6288
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Brewer, Doug D.", 50.33, 68.42105263, 51.15511551, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 50.33
      }, {
        "className": "unsecured-bar",
        "value": 22.37
      }, {
        "className": "nonmonetary-bar",
        "value": 0.33
      }, {
        "className": "ror-bar",
        "value": 26.97
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Knecht, Richard W.", 46.72, 69.56521739, 46.88346883, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.72
      }, {
        "className": "unsecured-bar",
        "value": 8.27
      }, {
        "className": "nonmonetary-bar",
        "value": 0.24
      }, {
        "className": "ror-bar",
        "value": 44.77
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Long, Craig W.", 42.73, 85.71428571, 41.06280193, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.73
      }, {
        "className": "unsecured-bar",
        "value": 20
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 37.27
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Lawton, Russell L.", 27.35, 22.44897959, 30.37475345, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.35
      }, {
        "className": "unsecured-bar",
        "value": 72.65
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Chester", 38.0970325, 48.47354138, 34.29690666, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 38.0970325
    }, {
      "className": "unsecured-bar",
      "value": 40.0132
    }, {
      "className": "nonmonetary-bar",
      "value": 0.009399999999999999
    }, {
      "className": "ror-bar",
      "value": 20.7273
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Hines, Gregory V.", 60.94, 61.76470588, 58.85167464, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 60.94
      }, {
        "className": "unsecured-bar",
        "value": 33.4
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 5.28
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Koon, Grover E.", 52.15, 55.09641873, 49.47368421, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 52.15
      }, {
        "className": "unsecured-bar",
        "value": 39.08
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 8.17
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Vito, Marian T.", 46.41, 53.57142857, 43.65671642, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.41
      }, {
        "className": "unsecured-bar",
        "value": 33.01
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 19.86
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Gill, Nancy", 42.86, 49.62406015, 41.36904762, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.86
      }, {
        "className": "unsecured-bar",
        "value": 47.41
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 9.32
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Donatelli, Lori Novak", 42.77, 53.84615385, 38.25301205, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.77
      }, {
        "className": "unsecured-bar",
        "value": 36.17
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 20.43
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Massey, Scott A.", 42.36, 54.26829268, 39.49044586, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.36
      }, {
        "className": "unsecured-bar",
        "value": 38.88
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 18.01
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Cabry, Michael J. III", 40.83, 51.92307692, 39.20454545, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.83
      }, {
        "className": "unsecured-bar",
        "value": 38.23
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 20.03
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bailey, John R.", 38.69, 51.58730159, 33.09352518, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.69
      }, {
        "className": "unsecured-bar",
        "value": 41.72
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 19.11
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Tartaglio, Thomas W.", 38.13, 50, 35.73264781, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.13
      }, {
        "className": "unsecured-bar",
        "value": 37.55
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 22.57
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bruno, Mark A.", 36.74, 41.78082192, 34.46327684, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 36.74
      }, {
        "className": "unsecured-bar",
        "value": 31.83
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 29.67
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Seavey, Matthew", 35.73, 51.85185185, 32.15223097, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.73
      }, {
        "className": "unsecured-bar",
        "value": 35.19
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 26.5
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Michaels, Theodore Peter Jr.", 34.98, 43.39622642, 32.59052925, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 34.98
      }, {
        "className": "unsecured-bar",
        "value": 43.21
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 21.6
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Sondergaard, Analisa", 32.14, 42.99516908, 26.40186916, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.14
      }, {
        "className": "unsecured-bar",
        "value": 37.27
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 28.73
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kraut, William D.", 31.3, 39.80582524, 29.82954545, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.3
      }, {
        "className": "unsecured-bar",
        "value": 41.81
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 25.84
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Valocchi, Jeffrey J.", 31.3, 32.62411348, 31.77570093, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.3
      }, {
        "className": "unsecured-bar",
        "value": 48.03
      }, {
        "className": "nonmonetary-bar",
        "value": 0.12
      }, {
        "className": "ror-bar",
        "value": 18.52
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Brown, Leonard J.", 25.89, 52.63157895, 25.69659443, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 25.89
      }, {
        "className": "unsecured-bar",
        "value": 44.35
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 29.76
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Nistico, Charles", 23.93, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 23.93
      }, {
        "className": "unsecured-bar",
        "value": 34.36
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 41.72
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Knapp, Gwenn S.", 20.91, 32.69230769, 17.46987952, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 20.91
      }, {
        "className": "unsecured-bar",
        "value": 47.27
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 30.91
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Venango", 37.84477229, 60.13986014, 35.56187767, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 37.84477229
    }, {
      "className": "unsecured-bar",
      "value": 61.7818
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 0.1291
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Fish, Andrew F.", 42.95, 64.58333333, 40.92592593, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.95
      }, {
        "className": "unsecured-bar",
        "value": 56.54
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.17
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Lowrey, Patrick E.", 41.47, 60, 40.31531532, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.47
      }, {
        "className": "unsecured-bar",
        "value": 57.26
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.21
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kirtland, Matthew T.", 28.12, 61.40350877, 23.03664921, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 28.12
      }, {
        "className": "unsecured-bar",
        "value": 71.43
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Schuylkill", 37.741878220000004, 46.5060241, 37.275215010000004, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 37.741878220000004
    }, {
      "className": "unsecured-bar",
      "value": 51.349900000000005
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 10.692699999999999
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Rossi, David J.", 47.99, 77.27272727, 46.65314402, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 47.99
      }, {
        "className": "unsecured-bar",
        "value": 52.01
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Plachko, David A.", 47.6, 56.75675676, 48.63013699, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 47.6
      }, {
        "className": "unsecured-bar",
        "value": 51.94
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.47
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hale, Christina E.", 42.88, 50, 42.37288136, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.88
      }, {
        "className": "unsecured-bar",
        "value": 23.65
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 33.46
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Reiley, James", 40.96, 45.63758389, 40.36885246, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.96
      }, {
        "className": "unsecured-bar",
        "value": 58.95
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kilker, Anthony J.", 37.28, 56.25, 35.85185185, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.28
      }, {
        "className": "unsecured-bar",
        "value": 62.45
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.13
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bayer, Stephen J.", 33.99, 54.28571429, 33.59580052, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 33.99
      }, {
        "className": "unsecured-bar",
        "value": 14.55
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 50.61
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Ferrier, James R.", 31.59, 22.22222222, 32.01754386, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.59
      }, {
        "className": "unsecured-bar",
        "value": 68.41
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Domalakes, John E.", 22.41, 20, 22.52252252, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 22.41
      }, {
        "className": "unsecured-bar",
        "value": 77.59
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Dolbin, Cyrus P.", 17.43, 0, 19, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 17.43
      }, {
        "className": "unsecured-bar",
        "value": 82.57
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Franklin", 37.479026850000004, 49.26553672, 35.19494204, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 37.479026850000004
    }, {
      "className": "unsecured-bar",
      "value": 11.6548
    }, {
      "className": "nonmonetary-bar",
      "value": 0.567
    }, {
      "className": "ror-bar",
      "value": 50.083999999999996
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Cunningham, Duane K.", 52.94, 69.23076923, 50, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 52.94
      }, {
        "className": "unsecured-bar",
        "value": 7.51
      }, {
        "className": "nonmonetary-bar",
        "value": 0.61
      }, {
        "className": "ror-bar",
        "value": 38.74
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Plum, David L.", 48, 66.1971831, 43.95973154, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 48
      }, {
        "className": "unsecured-bar",
        "value": 15.73
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 36.27
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Eyer, Jody C.", 41.06, 65.95744681, 38.07106599, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.06
      }, {
        "className": "unsecured-bar",
        "value": 22.52
      }, {
        "className": "nonmonetary-bar",
        "value": 1.1
      }, {
        "className": "ror-bar",
        "value": 34.66
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Manns, Glenn Kenneth", 38.93, 45.27027027, 37.42405832, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.93
      }, {
        "className": "unsecured-bar",
        "value": 8.57
      }, {
        "className": "nonmonetary-bar",
        "value": 0.17
      }, {
        "className": "ror-bar",
        "value": 52.06
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Rock, Kelly L.", 35.31, 45.69536424, 33.4431631, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.31
      }, {
        "className": "unsecured-bar",
        "value": 10.7
      }, {
        "className": "nonmonetary-bar",
        "value": 0.39
      }, {
        "className": "ror-bar",
        "value": 53.61
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Williams, Todd R.", 28.95, 40.74074074, 26.74157303, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 28.95
      }, {
        "className": "unsecured-bar",
        "value": 15.81
      }, {
        "className": "nonmonetary-bar",
        "value": 0.71
      }, {
        "className": "ror-bar",
        "value": 54.53
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Pentz, Larry G.", 25.51, 42, 23.60335196, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 25.51
      }, {
        "className": "unsecured-bar",
        "value": 7.13
      }, {
        "className": "nonmonetary-bar",
        "value": 1.21
      }, {
        "className": "ror-bar",
        "value": 66.14
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Greene", 37.44343891, 58.97435897, 37.861635220000004, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 37.44343891
    }, {
      "className": "unsecured-bar",
      "value": 34.6546
    }, {
      "className": "nonmonetary-bar",
      "value": 0.3398
    }, {
      "className": "ror-bar",
      "value": 26.613799999999998
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Watson, Lee", 51.13, 53.84615385, 53.61702128, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 51.13
      }, {
        "className": "unsecured-bar",
        "value": 18.8
      }, {
        "className": "nonmonetary-bar",
        "value": 0.75
      }, {
        "className": "ror-bar",
        "value": 29.32
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Cramer, Jesse J.", 32.37, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.37
      }, {
        "className": "unsecured-bar",
        "value": 21.22
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 46.04
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bates, D Glenn", 32.06, 64.28571429, 31.08614232, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.06
      }, {
        "className": "unsecured-bar",
        "value": 67.94
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Wayne", 37.20349563, 64.86486486000001, 35.309973049999996, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 37.20349563
    }, {
      "className": "unsecured-bar",
      "value": 28.214699999999997
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 34.5818
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Edwards, Ronald", 39.25, 50, 38.19095477, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 39.25
      }, {
        "className": "unsecured-bar",
        "value": 7.01
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 53.74
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Carney, Bonnie L.", 38.95, 61.53846154, 36.8, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.95
      }, {
        "className": "unsecured-bar",
        "value": 49.06
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 11.99
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Myers, Linus H.", 34.87, 75, 32.25806452, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 34.87
      }, {
        "className": "unsecured-bar",
        "value": 23.36
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 41.78
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Clinton", 36.92628651, 47.14285714, 35.98750976, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 36.92628651
    }, {
      "className": "unsecured-bar",
      "value": 51.078599999999994
    }, {
      "className": "nonmonetary-bar",
      "value": 0.1392
    }, {
      "className": "ror-bar",
      "value": 11.412700000000001
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Sanders, Joseph L.", 68.98, 63.82978723, 69.77491961, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 68.98
      }, {
        "className": "unsecured-bar",
        "value": 29.92
      }, {
        "className": "nonmonetary-bar",
        "value": 0.55
      }, {
        "className": "ror-bar",
        "value": 0.28
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Maggs, John W.", 59.44, 66.66666667, 59.2920354, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 59.44
      }, {
        "className": "unsecured-bar",
        "value": 40.56
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Mills, Frank P.", 12.34, 21.66666667, 11.68831169, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 12.34
      }, {
        "className": "unsecured-bar",
        "value": 66.14
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 21.39
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Sullivan", 36.44859813, 62.5, 32.63157895, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 36.44859813
    }, {
      "className": "unsecured-bar",
      "value": 61.682199999999995
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 1.8692
    }]
  }],
  "outlier": true,
  "collapseData": [],
  "isCollapsed": true
}, {
  "data": ["", "Tioga", 36.38603696, 56.99999999999999, 34.50800915, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 36.38603696
    }, {
      "className": "unsecured-bar",
      "value": 48.5597
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 13.086400000000001
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Steffee, Susanne V.", 41.76, 50, 40.3125, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.76
      }, {
        "className": "unsecured-bar",
        "value": 18.49
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 39.6
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Thachik, George M.", 38.52, 80.55555556, 35.16209476, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.52
      }, {
        "className": "unsecured-bar",
        "value": 61.21
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.26
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Edgcomb, James R.", 38.31, 57.14285714, 37.58389262, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.31
      }, {
        "className": "unsecured-bar",
        "value": 61.69
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Rega, Jennifer J.", 37.96, 59.375, 35.51401869, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.96
      }, {
        "className": "unsecured-bar",
        "value": 47.2
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 14.36
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Carlson, James Edgar", 29.5, 43.75, 28.47682119, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.5
      }, {
        "className": "unsecured-bar",
        "value": 69.88
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Repard, Robert L.", 23.15, 66.66666667, 21.82741117, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 23.15
      }, {
        "className": "unsecured-bar",
        "value": 76.35
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Martin, William J.", 13.91, 5.769230769, 15.95092025, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 13.91
      }, {
        "className": "unsecured-bar",
        "value": 47.83
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Clearfield", 36.28318584, 59.30232558, 35.647181630000006, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 36.28318584
    }, {
      "className": "unsecured-bar",
      "value": 63.6185
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 0.0983
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Ireland, Richard Allen", 42.04, 53.84615385, 42.06642066, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.04
      }, {
        "className": "unsecured-bar",
        "value": 57.96
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Hawkins, James L.", 39.13, 82.60869565, 36.68639053, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 39.13
      }, {
        "className": "unsecured-bar",
        "value": 60.87
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Ford, Patrick N.", 34.42, 61.11111111, 33.83838384, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 34.42
      }, {
        "className": "unsecured-bar",
        "value": 65.58
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Nevling, Jerome M.", 30.03, 53.84615385, 29.61876833, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.03
      }, {
        "className": "unsecured-bar",
        "value": 69.42
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.55
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Mercer", 36.12542955, 45.40337711, 33.35235378, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 36.12542955
    }, {
      "className": "unsecured-bar",
      "value": 39.6907
    }, {
      "className": "nonmonetary-bar",
      "value": 12.070400000000001
    }, {
      "className": "ror-bar",
      "value": 11.855699999999999
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Arthur, Brian R.", 45.28, 74.73684211, 41.16766467, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 45.28
      }, {
        "className": "unsecured-bar",
        "value": 53.83
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.89
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Songer, Dennis M.", 44.1, 49.09090909, 42.11267606, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44.1
      }, {
        "className": "unsecured-bar",
        "value": 28.76
      }, {
        "className": "nonmonetary-bar",
        "value": 12.67
      }, {
        "className": "ror-bar",
        "value": 14.48
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "McEwen, D. Neil", 41.69, 61.33333333, 38.74755382, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.69
      }, {
        "className": "unsecured-bar",
        "value": 55.65
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 2.66
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hinch, Lorinda L.", 37.37, 51.92307692, 35.2238806, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.37
      }, {
        "className": "unsecured-bar",
        "value": 46.72
      }, {
        "className": "nonmonetary-bar",
        "value": 0.25
      }, {
        "className": "ror-bar",
        "value": 15.66
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Antos, Ronald E.", 26.72, 33.96226415, 23.21981424, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 26.72
      }, {
        "className": "unsecured-bar",
        "value": 24.88
      }, {
        "className": "nonmonetary-bar",
        "value": 29.04
      }, {
        "className": "ror-bar",
        "value": 19.36
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Fagley, William L.", 17.69, 45.83333333, 14.95726496, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 17.69
      }, {
        "className": "unsecured-bar",
        "value": 82.31
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Northumberland", 36, 56.81818182, 33.910665449999996, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 36
    }, {
      "className": "unsecured-bar",
      "value": 51.91909999999999
    }, {
      "className": "nonmonetary-bar",
      "value": 0.0825
    }, {
      "className": "ror-bar",
      "value": 11.886099999999999
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Gembic, John", 41.67, 74.6835443, 38.08180536, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.67
      }, {
        "className": "unsecured-bar",
        "value": 57.2
      }, {
        "className": "nonmonetary-bar",
        "value": 0.13
      }, {
        "className": "ror-bar",
        "value": 1.01
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Diehl, Michael I.", 40.57, 62.5, 38.86255924, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.57
      }, {
        "className": "unsecured-bar",
        "value": 56.14
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 3.07
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Cashman, Richard P.", 35.14, 40, 35.05154639, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.14
      }, {
        "className": "unsecured-bar",
        "value": 64.86
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Apfelbaum, Benjamin", 28.29, 42.5, 25.98870056, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 28.29
      }, {
        "className": "unsecured-bar",
        "value": 30.24
      }, {
        "className": "nonmonetary-bar",
        "value": 0.16
      }, {
        "className": "ror-bar",
        "value": 40.81
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Snyder", 35.92870544, 52.5, 34.59183673, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 35.92870544
    }, {
      "className": "unsecured-bar",
      "value": 54.1276
    }, {
      "className": "nonmonetary-bar",
      "value": 2.9081
    }, {
      "className": "ror-bar",
      "value": 6.472799999999999
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Reed, John H.", 36.96, 55.71428571, 37.14759536, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 36.96
      }, {
        "className": "unsecured-bar",
        "value": 60.28
      }, {
        "className": "nonmonetary-bar",
        "value": 0.77
      }, {
        "className": "ror-bar",
        "value": 1.99
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hackenberg, Lori R.", 36.79, 81.25, 38.78205128, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 36.79
      }, {
        "className": "unsecured-bar",
        "value": 52.17
      }, {
        "className": "nonmonetary-bar",
        "value": 5.69
      }, {
        "className": "ror-bar",
        "value": 5.35
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Wyoming", 35.68118628, 40, 35.596508240000006, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 35.68118628
    }, {
      "className": "unsecured-bar",
      "value": 63.974
    }, {
      "className": "nonmonetary-bar",
      "value": 0.0929
    }, {
      "className": "ror-bar",
      "value": 0.1857
    }]
  }],
  "outlier": true,
  "collapseData": [{
    "data": ["", "Smith, Carl W. Jr.", 43.65, 72.72727273, 42.92565947, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.65
      }, {
        "className": "unsecured-bar",
        "value": 55.89
      }, {
        "className": "nonmonetary-bar",
        "value": 0.23
      }, {
        "className": "ror-bar",
        "value": 0.23
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Plummer, David K.", 29.21, 15.38461538, 29.84562607, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.21
      }, {
        "className": "unsecured-bar",
        "value": 70.3
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.17
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Montour", 35.19163763, 46.15384615, 35.34136546, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 35.19163763
    }, {
      "className": "unsecured-bar",
      "value": 24.738699999999998
    }, {
      "className": "nonmonetary-bar",
      "value": 0.6969000000000001
    }, {
      "className": "ror-bar",
      "value": 39.0244
    }]
  }],
  "outlier": true,
  "collapseData": [{
    "data": ["", "Shrawder, Marvin K.", 22.44, 46.42857143, 38.671875, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 22.44
      }, {
        "className": "unsecured-bar",
        "value": 22.44
      }, {
        "className": "nonmonetary-bar",
        "value": 0.98
      }, {
        "className": "ror-bar",
        "value": 53.66
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Indiana", 35.01070664, 30.392156860000004, 36.21169916, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 35.01070664
    }, {
      "className": "unsecured-bar",
      "value": 33.3333
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 30.761
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Steffee, Susanne V.", 41.02, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.02
      }, {
        "className": "unsecured-bar",
        "value": 18.36
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 40.48
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Haberl, Guy B.", 40, 35.97122302, 40.9190372, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40
      }, {
        "className": "unsecured-bar",
        "value": 30.08
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 29.75
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Rega, Jennifer J.", 38.66, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.66
      }, {
        "className": "unsecured-bar",
        "value": 46.35
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 14.6
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Thachik, George M.", 38.22, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.22
      }, {
        "className": "unsecured-bar",
        "value": 61.56
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.22
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Martin, William J.", 10.9, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 10.9
      }, {
        "className": "unsecured-bar",
        "value": 41.71
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 37.91
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Forest", 34.75609756, 85, 32.03883495, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 34.75609756
    }, {
      "className": "unsecured-bar",
      "value": 52.439
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 12.8049
    }]
  }],
  "outlier": true,
  "collapseData": [{
    "data": ["", "Miller, Daniel L.", 30.2, 81.25, 42.63565891, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.2
      }, {
        "className": "unsecured-bar",
        "value": 55.7
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 14.09
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Lycoming", 34.68169761, 55.01355014, 28.14726841, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 34.68169761
    }, {
      "className": "unsecured-bar",
      "value": 64.91029999999999
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 0.3321
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Solomon, William C.", 41.91, 78.46153846, 36, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.91
      }, {
        "className": "unsecured-bar",
        "value": 57.87
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Page, Allen P. III", 38.3, 54.81927711, 29.49756888, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.3
      }, {
        "className": "unsecured-bar",
        "value": 61.7
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Lepley, Jerry C.", 36.55, 70.83333333, 33.33333333, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 36.55
      }, {
        "className": "unsecured-bar",
        "value": 63.25
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Frey, Christian David", 32.52, 53.58166189, 21.96969697, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.52
      }, {
        "className": "unsecured-bar",
        "value": 66.7
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.78
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kemp, Jon Edward", 30.51, 60.25641026, 25.3164557, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.51
      }, {
        "className": "unsecured-bar",
        "value": 68.95
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.18
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Whiteman, Gary A.", 29.37, 52.44755245, 24.02597403, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.37
      }, {
        "className": "unsecured-bar",
        "value": 70.63
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Juniata", 34.46215139, 43.75, 36.67425968, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 34.46215139
    }, {
      "className": "unsecured-bar",
      "value": 39.243
    }, {
      "className": "nonmonetary-bar",
      "value": 7.370500000000001
    }, {
      "className": "ror-bar",
      "value": 18.9243
    }]
  }],
  "outlier": true,
  "collapseData": [{
    "data": ["", "Leister, Jacqueline T.", 31.47, 62.5, 44.09090909, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.47
      }, {
        "className": "unsecured-bar",
        "value": 12.93
      }, {
        "className": "nonmonetary-bar",
        "value": 15.95
      }, {
        "className": "ror-bar",
        "value": 39.66
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Lyter, Barbara M.", 31.3, 25, 33.33333333, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.3
      }, {
        "className": "unsecured-bar",
        "value": 68.7
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Pike", 34.16738568, 37.41007194, 34.020618559999996, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 34.16738568
    }, {
      "className": "unsecured-bar",
      "value": 5.6228
    }, {
      "className": "nonmonetary-bar",
      "value": 28.0277
    }, {
      "className": "ror-bar",
      "value": 31.1419
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Chelak, Gregory H.", 47, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 47
      }, {
        "className": "unsecured-bar",
        "value": 5
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 39
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Fischer, Deborah", 39.33, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 39.33
      }, {
        "className": "unsecured-bar",
        "value": 6.67
      }, {
        "className": "nonmonetary-bar",
        "value": 2.67
      }, {
        "className": "ror-bar",
        "value": 51
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Muir, Shannon L.", 32.84, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.84
      }, {
        "className": "unsecured-bar",
        "value": 0.59
      }, {
        "className": "nonmonetary-bar",
        "value": 53.25
      }, {
        "className": "ror-bar",
        "value": 13.02
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Menditto, Paul D. Sr.", 29.03, 20.51282051, 33.74233129, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.03
      }, {
        "className": "unsecured-bar",
        "value": 9.22
      }, {
        "className": "nonmonetary-bar",
        "value": 40.09
      }, {
        "className": "ror-bar",
        "value": 21.2
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Cooper, Alan B.", 28.12, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 28.12
      }, {
        "className": "unsecured-bar",
        "value": 8.85
      }, {
        "className": "nonmonetary-bar",
        "value": 25.52
      }, {
        "className": "ror-bar",
        "value": 36.98
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Blair", 34.04638145, 58.6998088, 31.768533580000003, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 34.04638145
    }, {
      "className": "unsecured-bar",
      "value": 65.5338
    }, {
      "className": "nonmonetary-bar",
      "value": 0.06
    }, {
      "className": "ror-bar",
      "value": 0.3599
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Aigner, Paula M.", 52.64, 79.46428571, 49.1503268, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 52.64
      }, {
        "className": "unsecured-bar",
        "value": 47.36
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Miller, Fred B.", 43.81, 78.16091954, 40.05563282, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.81
      }, {
        "className": "unsecured-bar",
        "value": 55.58
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.61
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Ormsby, Craig E.", 35.34, 89.47368421, 31.41025641, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.34
      }, {
        "className": "unsecured-bar",
        "value": 64.66
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kelly, Todd F.", 29.92, 45.94594595, 28.07486631, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.92
      }, {
        "className": "unsecured-bar",
        "value": 70.08
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Auker, Jeffrey P.", 28.26, 37.20930233, 28.34437086, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 28.26
      }, {
        "className": "unsecured-bar",
        "value": 69.98
      }, {
        "className": "nonmonetary-bar",
        "value": 0.33
      }, {
        "className": "ror-bar",
        "value": 1.43
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Jackson, Steven D.", 18.59, 40.74074074, 16.68822768, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 18.59
      }, {
        "className": "unsecured-bar",
        "value": 81.41
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Montgomery", 33.63556165, 43.27198364, 28.69733969, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 33.63556165
    }, {
      "className": "unsecured-bar",
      "value": 46.1889
    }, {
      "className": "nonmonetary-bar",
      "value": 0.466
    }, {
      "className": "ror-bar",
      "value": 14.7096
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Lawrence, Francis J. Jr.", 60.12, 65.16853933, 54.04255319, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 60.12
      }, {
        "className": "unsecured-bar",
        "value": 15.72
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 20.04
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Scott, Gregory L.", 58.68, 53.46534653, 66.23931624, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 58.68
      }, {
        "className": "unsecured-bar",
        "value": 32.54
      }, {
        "className": "nonmonetary-bar",
        "value": 0.18
      }, {
        "className": "ror-bar",
        "value": 4.94
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Palladino, Scott T.", 47.93, 60.65088757, 39.84526112, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 47.93
      }, {
        "className": "unsecured-bar",
        "value": 44.12
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 2.88
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Cerski, Christopher", 44.5, 44.49339207, 45.39473684, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44.5
      }, {
        "className": "unsecured-bar",
        "value": 51.5
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.75
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hunsicker, Margaret A.", 44.48, 50.55248619, 38.79003559, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44.48
      }, {
        "className": "unsecured-bar",
        "value": 27.91
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 24.78
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kropp, Edward C. Sr.", 43.39, 50.64102564, 37.62376238, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.39
      }, {
        "className": "unsecured-bar",
        "value": 54.02
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.19
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "McHugh Casey, Elizabeth A.", 41.42, 44.38502674, 39.10891089, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.42
      }, {
        "className": "unsecured-bar",
        "value": 55.39
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kelly Rebar, Cathleen", 36.5, 51.93370166, 32.01438849, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 36.5
      }, {
        "className": "unsecured-bar",
        "value": 62.58
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.13
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Nesbitt, Harry J. III", 36.18, 46.66666667, 33.04347826, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 36.18
      }, {
        "className": "unsecured-bar",
        "value": 57.26
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Augustine, Albert J.", 36.01, 62.80487805, 29.00900901, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 36.01
      }, {
        "className": "unsecured-bar",
        "value": 62.5
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.14
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bernhardt, Francis J. III", 35.87, 43.5483871, 31.6872428, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.87
      }, {
        "className": "unsecured-bar",
        "value": 30.71
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 29.61
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Sobeck, Robert M.", 35.65, 52.07100592, 31.07049608, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.65
      }, {
        "className": "unsecured-bar",
        "value": 29.03
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 33.28
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Saylor, Maurice H.", 35.62, 58.97435897, 30.16194332, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.62
      }, {
        "className": "unsecured-bar",
        "value": 58.47
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Zaffarano, Patricia Ann", 35.37, 47.66839378, 28.20512821, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.37
      }, {
        "className": "unsecured-bar",
        "value": 62.72
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 1.15
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Price, Juanita Ann", 35.33, 44.78527607, 28.83116883, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.33
      }, {
        "className": "unsecured-bar",
        "value": 24.42
      }, {
        "className": "nonmonetary-bar",
        "value": 12.28
      }, {
        "className": "ror-bar",
        "value": 21.56
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Rebar, Cathleen Kelly", 35.03, 48.57142857, 32.17391304, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.03
      }, {
        "className": "unsecured-bar",
        "value": 47.77
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Lukens, Deborah", 34.92, 42.46575342, 31.48148148, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 34.92
      }, {
        "className": "unsecured-bar",
        "value": 23.54
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 39.68
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Casillo, Ester J.", 34.38, 42.79279279, 30.35230352, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 34.38
      }, {
        "className": "unsecured-bar",
        "value": 62.83
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Gallagher, James", 32.74, 42.10526316, 27.12418301, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.74
      }, {
        "className": "unsecured-bar",
        "value": 29.37
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 32.14
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "McGill, Katherine E.", 31.77, 38.46153846, 28.31050228, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.77
      }, {
        "className": "unsecured-bar",
        "value": 62.24
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.26
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Leo, Paul N.", 31.73, 45.0617284, 26.28726287, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.73
      }, {
        "className": "unsecured-bar",
        "value": 63.84
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.55
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Quinn, Michael P.", 30.21, 32.31707317, 29.44162437, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.21
      }, {
        "className": "unsecured-bar",
        "value": 62.03
      }, {
        "className": "nonmonetary-bar",
        "value": 0.53
      }, {
        "className": "ror-bar",
        "value": 0.53
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Gadzicki, Walter F. Jr.", 30.01, 48.0620155, 23.55555556, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.01
      }, {
        "className": "unsecured-bar",
        "value": 31.46
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 33.96
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hudak Duffy, Andrea", 27.42, 36.93693694, 25.83081571, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.42
      }, {
        "className": "unsecured-bar",
        "value": 46.91
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 24.12
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Schireson, Henry J.", 27.41, 39.22651934, 20.70175439, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.41
      }, {
        "className": "unsecured-bar",
        "value": 67.36
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Eisner Zucker, Karen", 27.34, 31.70731707, 22.94117647, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.34
      }, {
        "className": "unsecured-bar",
        "value": 70.56
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Hummel Fried, Catherine M.", 27.24, 51.92307692, 21.49122807, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.24
      }, {
        "className": "unsecured-bar",
        "value": 68.79
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.17
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Maruszczak, William I.", 26.84, 29.84615385, 23.8961039, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 26.84
      }, {
        "className": "unsecured-bar",
        "value": 69.56
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.27
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Levine, Edward", 25.51, 40.46242775, 22.16748768, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 25.51
      }, {
        "className": "unsecured-bar",
        "value": 22.04
      }, {
        "className": "nonmonetary-bar",
        "value": 0.12
      }, {
        "className": "ror-bar",
        "value": 48.38
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Friedenberg, Jay S.", 23.6, 35.4978355, 19.83193277, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 23.6
      }, {
        "className": "unsecured-bar",
        "value": 23.49
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 50.93
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kessler, John D.", 22.17, 26.35658915, 19.82507289, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 22.17
      }, {
        "className": "unsecured-bar",
        "value": 32.69
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 35.76
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Smyth, Joseph A.", 9.66, 15.38461538, 5.673758865, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 9.66
      }, {
        "className": "unsecured-bar",
        "value": 57.56
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.42
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Corso, S. Gerald", 7.82, 5.369127517, 8.71559633, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 7.82
      }, {
        "className": "unsecured-bar",
        "value": 60.38
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 2.43
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Nicholas, William T.", 6.73, 6.976744186, 6.201550388, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 6.73
      }, {
        "className": "unsecured-bar",
        "value": 57.4
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 17.49
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Carbon", 32.99299883, 43.7751004, 32.341399609999996, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 32.99299883
    }, {
      "className": "unsecured-bar",
      "value": 53.85060000000001
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 13.1272
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Kosciolek, Casimir T.", 37.44, 53.84615385, 36.45251397, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.44
      }, {
        "className": "unsecured-bar",
        "value": 46.57
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 15.99
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Homanko, Joseph D. Sr.", 37.13, 41.57303371, 36.29343629, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.13
      }, {
        "className": "unsecured-bar",
        "value": 56.16
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 6.71
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Schrantz, Eric M.", 32.71, 40.54054054, 33.10225303, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.71
      }, {
        "className": "unsecured-bar",
        "value": 50.31
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 16.98
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Serfass, Steven R.", 27.97, 10, 30.47619048, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.97
      }, {
        "className": "unsecured-bar",
        "value": 71.19
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.85
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Matika, Joseph J.", 27.41, 37.5, 27.2, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.41
      }, {
        "className": "unsecured-bar",
        "value": 71.11
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 1.48
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Kissner, William J.", 27.02, 57.14285714, 25.87719298, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.02
      }, {
        "className": "unsecured-bar",
        "value": 56.93
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 16.05
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Lewis, Edward M.", 20.52, 44.44444444, 18.59296482, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 20.52
      }, {
        "className": "unsecured-bar",
        "value": 60.7
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 18.78
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Monroe", 32.79661017, 35.13011152, 32.41612358, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 32.79661017
    }, {
      "className": "unsecured-bar",
      "value": 49.6091
    }, {
      "className": "nonmonetary-bar",
      "value": 0.4249
    }, {
      "className": "ror-bar",
      "value": 17.063200000000002
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Fluegel, Anthony D.", 45.39, 45.39473684, 46.30872483, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 45.39
      }, {
        "className": "unsecured-bar",
        "value": 30.26
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 23.46
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Muth, Michael R.", 38.07, 42.68292683, 36.07954545, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.07
      }, {
        "className": "unsecured-bar",
        "value": 60.61
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Anzini, Kristina", 37.88, 43.08510638, 35.71428571, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.88
      }, {
        "className": "unsecured-bar",
        "value": 61.65
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.32
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Riley, Phillip R.", 37.18, 33.14917127, 39.32346723, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.18
      }, {
        "className": "unsecured-bar",
        "value": 15.44
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 47.38
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Mancuso, Colleen", 37.01, 44.92753623, 35.86956522, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.01
      }, {
        "className": "unsecured-bar",
        "value": 62.71
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.28
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Krawitz, Jolana", 34.63, 53.84615385, 30.14256619, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 34.63
      }, {
        "className": "unsecured-bar",
        "value": 8.78
      }, {
        "className": "nonmonetary-bar",
        "value": 3.9
      }, {
        "className": "ror-bar",
        "value": 52.52
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Claypool, Richard", 29.32, 28.47222222, 30.40935673, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.32
      }, {
        "className": "unsecured-bar",
        "value": 70.28
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Germano, Brian", 27.33, 25.36585366, 28.38137472, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.33
      }, {
        "className": "unsecured-bar",
        "value": 69.42
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 3.1
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Olsen, Thomas E.", 26.43, 26.42487047, 26.87140115, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 26.43
      }, {
        "className": "unsecured-bar",
        "value": 73.43
      }, {
        "className": "nonmonetary-bar",
        "value": 0.14
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Higgins, C. Daniel", 23.4, 26.31578947, 23.70572207, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 23.4
      }, {
        "className": "unsecured-bar",
        "value": 32.64
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 43.77
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Bucks", 32.41325938, 41.069012179999994, 30.62392673, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 32.41325938
    }, {
      "className": "unsecured-bar",
      "value": 49.297000000000004
    }, {
      "className": "nonmonetary-bar",
      "value": 0.5676
    }, {
      "className": "ror-bar",
      "value": 17.705099999999998
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Waltman, John I.", 46.82, 61.29032258, 44.52554745, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.82
      }, {
        "className": "unsecured-bar",
        "value": 34.1
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 19.08
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Wagner, Robert", 44.98, 64.88549618, 39.79166667, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44.98
      }, {
        "className": "unsecured-bar",
        "value": 18.28
      }, {
        "className": "nonmonetary-bar",
        "value": 0.16
      }, {
        "className": "ror-bar",
        "value": 36.57
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Peranteau, Frank W. Sr.", 43.86, 59.67741935, 39.81900452, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.86
      }, {
        "className": "unsecured-bar",
        "value": 52.98
      }, {
        "className": "nonmonetary-bar",
        "value": 0.35
      }, {
        "className": "ror-bar",
        "value": 2.81
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kline, Joanne V.", 42.64, 49.45652174, 40.37267081, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 42.64
      }, {
        "className": "unsecured-bar",
        "value": 6.98
      }, {
        "className": "nonmonetary-bar",
        "value": 2.08
      }, {
        "className": "ror-bar",
        "value": 48.29
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Douple, Mark D.", 41.26, 69.11764706, 37.95309168, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.26
      }, {
        "className": "unsecured-bar",
        "value": 58.74
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Schnell, Robert A. Jr.", 41.03, 42.85714286, 42.30769231, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 41.03
      }, {
        "className": "unsecured-bar",
        "value": 22.22
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 36.75
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Petrucci, Michael W.", 40, 59.42028986, 36.21794872, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40
      }, {
        "className": "unsecured-bar",
        "value": 60
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Burns, Michael J.", 37.7, 47.19101124, 35.92592593, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.7
      }, {
        "className": "unsecured-bar",
        "value": 50
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 12.3
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Finello, Daniel J. Jr.", 37.11, 46.15384615, 35.81730769, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.11
      }, {
        "className": "unsecured-bar",
        "value": 62.11
      }, {
        "className": "nonmonetary-bar",
        "value": 0.78
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Durkin, John J.", 35.25, 52.5, 43.125, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.25
      }, {
        "className": "unsecured-bar",
        "value": 63.93
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Snow, Maggie", 33.92, 61.2244898, 30.06993007, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 33.92
      }, {
        "className": "unsecured-bar",
        "value": 28.07
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 38.01
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Falcone, Joseph P.", 33.58, 38.97338403, 31.84230478, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 33.58
      }, {
        "className": "unsecured-bar",
        "value": 64.35
      }, {
        "className": "nonmonetary-bar",
        "value": 0.05
      }, {
        "className": "ror-bar",
        "value": 1.96
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Baranoski, Daniel", 33.33, 40.13157895, 31.56862745, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 33.33
      }, {
        "className": "unsecured-bar",
        "value": 24.59
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 41.93
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Deatelhauser, Kenneth E.", 32.79, 47.22222222, 27.40384615, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.79
      }, {
        "className": "unsecured-bar",
        "value": 13.11
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 54.1
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Gallagher, Michael W.", 32.78, 38.08139535, 31.78571429, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.78
      }, {
        "className": "unsecured-bar",
        "value": 66.82
      }, {
        "className": "nonmonetary-bar",
        "value": 0.07
      }, {
        "className": "ror-bar",
        "value": 0.33
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Vislosky, Jan", 32.6, 37.28813559, 31.57894737, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.6
      }, {
        "className": "unsecured-bar",
        "value": 66.74
      }, {
        "className": "nonmonetary-bar",
        "value": 0.22
      }, {
        "className": "ror-bar",
        "value": 0.44
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kelly, John J. Jr.", 32.3, 38.06818182, 30.68391867, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.3
      }, {
        "className": "unsecured-bar",
        "value": 67.43
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.27
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Gambardella, Gary", 31.86, 44.06779661, 30.40650407, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.86
      }, {
        "className": "unsecured-bar",
        "value": 34.65
      }, {
        "className": "nonmonetary-bar",
        "value": 0.15
      }, {
        "className": "ror-bar",
        "value": 33.33
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Seaman, Jean", 31.31, 52.05479452, 27.5242047, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.31
      }, {
        "className": "unsecured-bar",
        "value": 17.91
      }, {
        "className": "nonmonetary-bar",
        "value": 0.23
      }, {
        "className": "ror-bar",
        "value": 50.56
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Armitage, Regina", 30.84, 39.7260274, 29.3594306, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.84
      }, {
        "className": "unsecured-bar",
        "value": 43.82
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 25.34
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Baum, Charles W.", 30.7, 49.27536232, 28.83959044, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.7
      }, {
        "className": "unsecured-bar",
        "value": 69
      }, {
        "className": "nonmonetary-bar",
        "value": 0.15
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Roth, Robert", 28.64, 37.5, 27.70448549, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 28.64
      }, {
        "className": "unsecured-bar",
        "value": 21
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 50.36
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Daly, Philip J.", 27.21, 29.41176471, 24.3902439, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.21
      }, {
        "className": "unsecured-bar",
        "value": 32.35
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 40.44
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Cepparulo, Albert J.", 25.75, 10.34482759, 28.35820896, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 25.75
      }, {
        "className": "unsecured-bar",
        "value": 19.76
      }, {
        "className": "nonmonetary-bar",
        "value": 3.59
      }, {
        "className": "ror-bar",
        "value": 50.9
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Benz, William J.", 17.92, 29.78723404, 16.94078947, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 17.92
      }, {
        "className": "unsecured-bar",
        "value": 81.48
      }, {
        "className": "nonmonetary-bar",
        "value": 0.3
      }, {
        "className": "ror-bar",
        "value": 0.3
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Waite, Clyde W.", 10, 2.702702703, 12.14285714, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 10
      }, {
        "className": "unsecured-bar",
        "value": 64.44
      }, {
        "className": "nonmonetary-bar",
        "value": 1.11
      }, {
        "className": "ror-bar",
        "value": 24.44
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Westmoreland", 31.716625590000003, 50.050454089999995, 28.61736334, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 31.716625590000003
    }, {
      "className": "unsecured-bar",
      "value": 30.687900000000003
    }, {
      "className": "nonmonetary-bar",
      "value": 4.66
    }, {
      "className": "ror-bar",
      "value": 32.9304
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Pallone, Frank J. Jr.", 45.75, 51.83673469, 42.59012016, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 45.75
      }, {
        "className": "unsecured-bar",
        "value": 24.49
      }, {
        "className": "nonmonetary-bar",
        "value": 0.08
      }, {
        "className": "ror-bar",
        "value": 29.69
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "DeMarchis, Joseph R.", 45.22, 59.1954023, 39.84063745, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 45.22
      }, {
        "className": "unsecured-bar",
        "value": 51.01
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 3.77
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bilik, Mark", 36.73, 49.01960784, 36.01694915, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 36.73
      }, {
        "className": "unsecured-bar",
        "value": 14.18
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 49.09
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Dalfonso, Joseph A.", 35.51, 47.56554307, 30.32659409, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.51
      }, {
        "className": "unsecured-bar",
        "value": 13.51
      }, {
        "className": "nonmonetary-bar",
        "value": 21.9
      }, {
        "className": "ror-bar",
        "value": 29.08
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Eckels, Roger", 34.17, 65.95744681, 30.15075377, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 34.17
      }, {
        "className": "unsecured-bar",
        "value": 29.17
      }, {
        "className": "nonmonetary-bar",
        "value": 0.21
      }, {
        "className": "ror-bar",
        "value": 36.46
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Mansour, Mark Stephen", 34.01, 56.03448276, 31.84165232, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 34.01
      }, {
        "className": "unsecured-bar",
        "value": 13.73
      }, {
        "className": "nonmonetary-bar",
        "value": 25.44
      }, {
        "className": "ror-bar",
        "value": 26.83
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Christner, Charles M.", 31.97, 53.16455696, 28.79581152, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.97
      }, {
        "className": "unsecured-bar",
        "value": 10.3
      }, {
        "className": "nonmonetary-bar",
        "value": 17.58
      }, {
        "className": "ror-bar",
        "value": 40.15
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Thiel, Denise S.", 31.55, 85.18518519, 27.10280374, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.55
      }, {
        "className": "unsecured-bar",
        "value": 26.48
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 41.97
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Moore, Charles D.", 30.77, 57.14285714, 30.62381853, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.77
      }, {
        "className": "unsecured-bar",
        "value": 3.27
      }, {
        "className": "nonmonetary-bar",
        "value": 4.58
      }, {
        "className": "ror-bar",
        "value": 61.37
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kistler, Helen M.", 30.55, 38.59649123, 29.20560748, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.55
      }, {
        "className": "unsecured-bar",
        "value": 68.69
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0.76
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Buczak, Jason", 29.77, 59.64912281, 26.69404517, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.77
      }, {
        "className": "unsecured-bar",
        "value": 26.74
      }, {
        "className": "nonmonetary-bar",
        "value": 0.18
      }, {
        "className": "ror-bar",
        "value": 43.32
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Albert, James", 29.28, 42.27642276, 28.01635992, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.28
      }, {
        "className": "unsecured-bar",
        "value": 50.87
      }, {
        "className": "nonmonetary-bar",
        "value": 0.29
      }, {
        "className": "ror-bar",
        "value": 19.57
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Peck, Yackopec Cheryl J.", 28.3, 51.04166667, 25.98784195, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 28.3
      }, {
        "className": "unsecured-bar",
        "value": 71.46
      }, {
        "className": "nonmonetary-bar",
        "value": 0.12
      }, {
        "className": "ror-bar",
        "value": 0.12
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Weimer, Douglas Reid", 27.37, 55.55555556, 24.56140351, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.37
      }, {
        "className": "unsecured-bar",
        "value": 68.42
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 4.21
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Falcon, James N.", 27.1, 34.375, 27.75665399, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.1
      }, {
        "className": "unsecured-bar",
        "value": 44.99
      }, {
        "className": "nonmonetary-bar",
        "value": 1.9
      }, {
        "className": "ror-bar",
        "value": 26.02
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Mahady, Michael", 25.36, 41.17647059, 24.26035503, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 25.36
      }, {
        "className": "unsecured-bar",
        "value": 6.73
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 67.92
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bompiani, L. Anthony", 24.78, 40.69767442, 22.46376812, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 24.78
      }, {
        "className": "unsecured-bar",
        "value": 25.82
      }, {
        "className": "nonmonetary-bar",
        "value": 0.45
      }, {
        "className": "ror-bar",
        "value": 48.81
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Gongaware, Wayne", 18.59, 29.6875, 16.93037975, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 18.59
      }, {
        "className": "unsecured-bar",
        "value": 50.14
      }, {
        "className": "nonmonetary-bar",
        "value": 0.7
      }, {
        "className": "ror-bar",
        "value": 30.56
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Conway, Charles", 15.7, 34.88372093, 14.07867495, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 15.7
      }, {
        "className": "unsecured-bar",
        "value": 24.73
      }, {
        "className": "nonmonetary-bar",
        "value": 0.54
      }, {
        "className": "ror-bar",
        "value": 58.84
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Butler", 31.15234375, 44.7761194, 29.515418500000003, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 31.15234375
    }, {
      "className": "unsecured-bar",
      "value": 5.0806
    }, {
      "className": "nonmonetary-bar",
      "value": 5.8134
    }, {
      "className": "ror-bar",
      "value": 57.3034
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "McCune, Timothy F.", 55.34, 66.66666667, 60, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 55.34
      }, {
        "className": "unsecured-bar",
        "value": 0
      }, {
        "className": "nonmonetary-bar",
        "value": 4.85
      }, {
        "className": "ror-bar",
        "value": 32.04
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Fullerton, William T.", 44.82, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44.82
      }, {
        "className": "unsecured-bar",
        "value": 2.05
      }, {
        "className": "nonmonetary-bar",
        "value": 11.16
      }, {
        "className": "ror-bar",
        "value": 40.18
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Kovach, David T.", 44, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 44
      }, {
        "className": "unsecured-bar",
        "value": 10.86
      }, {
        "className": "nonmonetary-bar",
        "value": 7.09
      }, {
        "className": "ror-bar",
        "value": 37.14
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Stoughton, Lewis E.", 35.74, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.74
      }, {
        "className": "unsecured-bar",
        "value": 4.24
      }, {
        "className": "nonmonetary-bar",
        "value": 15.06
      }, {
        "className": "ror-bar",
        "value": 44.22
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "O'donnell, Kevin P.", 32.74, 50, 31.06796117, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.74
      }, {
        "className": "unsecured-bar",
        "value": 2.65
      }, {
        "className": "nonmonetary-bar",
        "value": 3.54
      }, {
        "className": "ror-bar",
        "value": 61.06
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Haggerty, Sue", 32.66, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 32.66
      }, {
        "className": "unsecured-bar",
        "value": 12.18
      }, {
        "className": "nonmonetary-bar",
        "value": 4.23
      }, {
        "className": "ror-bar",
        "value": 50.42
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "O'Donnell, William S.", 30.98, 33.33333333, 30.66954644, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.98
      }, {
        "className": "unsecured-bar",
        "value": 8.16
      }, {
        "className": "nonmonetary-bar",
        "value": 1.3
      }, {
        "className": "ror-bar",
        "value": 59.55
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "O'Donnell, Kevin P.", 25.69, 42.5, 24.62809917, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 25.69
      }, {
        "className": "unsecured-bar",
        "value": 0.76
      }, {
        "className": "nonmonetary-bar",
        "value": 1.38
      }, {
        "className": "ror-bar",
        "value": 71.87
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Seibel, Wayne D.", 22.69, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 22.69
      }, {
        "className": "unsecured-bar",
        "value": 13.79
      }, {
        "className": "nonmonetary-bar",
        "value": 18.15
      }, {
        "className": "ror-bar",
        "value": 44.65
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Shaffer, William", 15.72, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 15.72
      }, {
        "className": "unsecured-bar",
        "value": 0.63
      }, {
        "className": "nonmonetary-bar",
        "value": 48.43
      }, {
        "className": "ror-bar",
        "value": 25.79
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Adams", 30.18867925, 43.56060606, 29.036515619999996, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 30.18867925
    }, {
      "className": "unsecured-bar",
      "value": 30.431399999999996
    }, {
      "className": "nonmonetary-bar",
      "value": 14.3297
    }, {
      "className": "ror-bar",
      "value": 24.8844
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Harvey, Matthew Robert", 35.2, 49.29577465, 33.13609467, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 35.2
      }, {
        "className": "unsecured-bar",
        "value": 44.22
      }, {
        "className": "nonmonetary-bar",
        "value": 3.06
      }, {
        "className": "ror-bar",
        "value": 17.52
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Bowman, Daniel S.", 33.72, 44.7761194, 32.95081967, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 33.72
      }, {
        "className": "unsecured-bar",
        "value": 12.39
      }, {
        "className": "nonmonetary-bar",
        "value": 26.51
      }, {
        "className": "ror-bar",
        "value": 27.38
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Beauchat, Mark D.", 29.13, 40.6779661, 27.85571142, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 29.13
      }, {
        "className": "unsecured-bar",
        "value": 10.12
      }, {
        "className": "nonmonetary-bar",
        "value": 28.24
      }, {
        "className": "ror-bar",
        "value": 32.33
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Little, Tony J.", 25.48, 42.30769231, 24.63768116, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 25.48
      }, {
        "className": "unsecured-bar",
        "value": 46.79
      }, {
        "className": "nonmonetary-bar",
        "value": 1.28
      }, {
        "className": "ror-bar",
        "value": 26.44
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Perry", 28.98148148, 40, 27.68130746, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 28.98148148
    }, {
      "className": "unsecured-bar",
      "value": 26.2963
    }, {
      "className": "nonmonetary-bar",
      "value": 1.0185
    }, {
      "className": "ror-bar",
      "value": 41.4815
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "McGuire, Daniel R.", 46.2, 60, 45.34161491, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46.2
      }, {
        "className": "unsecured-bar",
        "value": 4.09
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 49.71
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Frownfelter, Elizabeth R.", 46, 87.5, 44.21052632, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 46
      }, {
        "className": "unsecured-bar",
        "value": 8
      }, {
        "className": "nonmonetary-bar",
        "value": 0.5
      }, {
        "className": "ror-bar",
        "value": 45.5
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Schechterly, Michael E.", 16.36, 25, 17.05150977, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 16.36
      }, {
        "className": "unsecured-bar",
        "value": 37.9
      }, {
        "className": "nonmonetary-bar",
        "value": 1.67
      }, {
        "className": "ror-bar",
        "value": 41.57
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Crawford", 28.8973384, 53.33333333, 28.3197832, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 28.8973384
    }, {
      "className": "unsecured-bar",
      "value": 13.054499999999999
    }, {
      "className": "nonmonetary-bar",
      "value": 3.5488
    }, {
      "className": "ror-bar",
      "value": 53.992399999999996
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Pendolino, Samuel V.", 37.42, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 37.42
      }, {
        "className": "unsecured-bar",
        "value": 11.96
      }, {
        "className": "nonmonetary-bar",
        "value": 9.63
      }, {
        "className": "ror-bar",
        "value": 40.99
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Nicols, Amy L.", 33.96, 55.55555556, 33.33333333, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 33.96
      }, {
        "className": "unsecured-bar",
        "value": 14.37
      }, {
        "className": "nonmonetary-bar",
        "value": 0.37
      }, {
        "className": "ror-bar",
        "value": 51.31
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Zilhaver, Lincoln S.", 30.8, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 30.8
      }, {
        "className": "unsecured-bar",
        "value": 3.63
      }, {
        "className": "nonmonetary-bar",
        "value": 20.07
      }, {
        "className": "ror-bar",
        "value": 45.16
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Marwood, Rita J.", 24.54, 60, 40, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 24.54
      }, {
        "className": "unsecured-bar",
        "value": 16.97
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 58.49
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Fulton", 28.672985779999998, 31.578947369999998, 29.27536232, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 28.672985779999998
    }, {
      "className": "unsecured-bar",
      "value": 14.691899999999999
    }, {
      "className": "nonmonetary-bar",
      "value": 5.2133
    }, {
      "className": "ror-bar",
      "value": 51.4218
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Heming, Tamela M.", 31.36, 33.33333333, 32, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 31.36
      }, {
        "className": "unsecured-bar",
        "value": 25.42
      }, {
        "className": "nonmonetary-bar",
        "value": 16.95
      }, {
        "className": "ror-bar",
        "value": 26.27
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Mellott, Wendy", 23.74, 25, 24.4047619, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 23.74
      }, {
        "className": "unsecured-bar",
        "value": 8.08
      }, {
        "className": "nonmonetary-bar",
        "value": 0.51
      }, {
        "className": "ror-bar",
        "value": 67.68
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Elk", 28.62318841, 27.77777778, 28.68117798, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 28.62318841
    }, {
      "className": "unsecured-bar",
      "value": 71.3768
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 0
    }]
  }],
  "outlier": true,
  "collapseData": [{
    "data": ["", "Martin, James L.", 26.69, 40, 26.99386503, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 26.69
      }, {
        "className": "unsecured-bar",
        "value": 73.31
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Jacob, Mark S.", 25.67, 25, 26.29107981, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 25.67
      }, {
        "className": "unsecured-bar",
        "value": 74.33
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Centre", 26.083333330000002, 46.74115456, 21.884927639999997, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 26.083333330000002
    }, {
      "className": "unsecured-bar",
      "value": 12.062299999999999
    }, {
      "className": "nonmonetary-bar",
      "value": 0.0278
    }, {
      "className": "ror-bar",
      "value": 61.5898
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Gillette-Walker, Kelley", 43.8, 75.3164557, 36.96808511, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 43.8
      }, {
        "className": "unsecured-bar",
        "value": 8.55
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 47.44
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Jordan, Thomas N.", 40.16, 72.54901961, 33.8658147, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 40.16
      }, {
        "className": "unsecured-bar",
        "value": 12.86
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 46.98
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Sinclair, Allen W.", 26.59, 42.85714286, 20.71428571, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 26.59
      }, {
        "className": "unsecured-bar",
        "value": 13.57
      }, {
        "className": "nonmonetary-bar",
        "value": 0.28
      }, {
        "className": "ror-bar",
        "value": 59.56
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Prestia, Carmine W. Jr.", 20, 33.59375, 16.22641509, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 20
      }, {
        "className": "unsecured-bar",
        "value": 15.29
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 64.71
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Lachman, Steven Frederic", 16.34, 29.89690722, 14.19491525, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 16.34
      }, {
        "className": "unsecured-bar",
        "value": 13.43
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 70.06
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Horner, Ronald J.", 5.93, 21.27659574, 3.202846975, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 5.93
      }, {
        "className": "unsecured-bar",
        "value": 3.95
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 90.11
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Nileski, Charity L.", 0.74, 7.142857143, 0.8064516129, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 0.74
      }, {
        "className": "unsecured-bar",
        "value": 0.74
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 98.52
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Union", 25.36136662, 38.20224719, 23.24159021, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 25.36136662
    }, {
      "className": "unsecured-bar",
      "value": 11.958
    }, {
      "className": "nonmonetary-bar",
      "value": 14.4547
    }, {
      "className": "ror-bar",
      "value": 47.7004
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Mensch, Jeffrey L.", 26.3, 40, 26.50176678, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 26.3
      }, {
        "className": "unsecured-bar",
        "value": 18.89
      }, {
        "className": "nonmonetary-bar",
        "value": 34.07
      }, {
        "className": "ror-bar",
        "value": 20.74
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Armbruster, Leo S.", 16.58, 23.07692308, 16.08187135, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 16.58
      }, {
        "className": "unsecured-bar",
        "value": 5.87
      }, {
        "className": "nonmonetary-bar",
        "value": 3.32
      }, {
        "className": "ror-bar",
        "value": 74.23
      }]
    }],
    "outlier": false
  }],
  "isCollapsed": true
}, {
  "data": ["", "Somerset", 25, 69.56521739, 23.20855615, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 25
    }, {
      "className": "unsecured-bar",
      "value": 23.6146
    }, {
      "className": "nonmonetary-bar",
      "value": 46.0809
    }, {
      "className": "ror-bar",
      "value": 4.643
    }]
  }],
  "outlier": false,
  "collapseData": [{
    "data": ["", "Stevanus, Sandra L.", 38.11, 75, 34.34782609, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 38.11
      }, {
        "className": "unsecured-bar",
        "value": 26.79
      }, {
        "className": "nonmonetary-bar",
        "value": 33.96
      }, {
        "className": "ror-bar",
        "value": 1.13
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Mankamyer, Susan", 25.35, 80, 23.4421365, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 25.35
      }, {
        "className": "unsecured-bar",
        "value": 14.48
      }, {
        "className": "nonmonetary-bar",
        "value": 55.71
      }, {
        "className": "ror-bar",
        "value": 4.46
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Seger, William E.", 24.46, 66.66666667, 24.07407407, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 24.46
      }, {
        "className": "unsecured-bar",
        "value": 25.54
      }, {
        "className": "nonmonetary-bar",
        "value": 49.64
      }, {
        "className": "ror-bar",
        "value": 0.36
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Johnson, Kenneth W.", 22.53, 64.1025641, 20.59259259, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 22.53
      }, {
        "className": "unsecured-bar",
        "value": 27.34
      }, {
        "className": "nonmonetary-bar",
        "value": 50.14
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": false
  }, {
    "data": ["", "Geary, D Gregory", 21.9, 50, 21.78217822, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 21.9
      }, {
        "className": "unsecured-bar",
        "value": 22.86
      }, {
        "className": "nonmonetary-bar",
        "value": 0.95
      }, {
        "className": "ror-bar",
        "value": 41.9
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Bell, Douglas McCall", 19.92, 50, 19.84126984, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 19.92
      }, {
        "className": "unsecured-bar",
        "value": 20.31
      }, {
        "className": "nonmonetary-bar",
        "value": 49.43
      }, {
        "className": "ror-bar",
        "value": 9.96
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Potter", 23.36601307, 75, 23.24786325, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 23.36601307
    }, {
      "className": "unsecured-bar",
      "value": 57.7741
    }, {
      "className": "nonmonetary-bar",
      "value": 1.9640000000000002
    }, {
      "className": "ror-bar",
      "value": 16.5303
    }]
  }],
  "outlier": true,
  "collapseData": [{
    "data": ["", "McCleaft, Kari A.", 27.71, 50, 27.5, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 27.71
      }, {
        "className": "unsecured-bar",
        "value": 71.69
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Weiss, Delores G.", 24.06, 0, 24.72527473, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 24.06
      }, {
        "className": "unsecured-bar",
        "value": 61.5
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 14.44
      }]
    }],
    "outlier": true
  }, {
    "data": ["", "Easton, Annette L.", 19.26, 100, 18.61471861, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 19.26
      }, {
        "className": "unsecured-bar",
        "value": 45.9
      }, {
        "className": "nonmonetary-bar",
        "value": 4.92
      }, {
        "className": "ror-bar",
        "value": 29.92
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}, {
  "data": ["", "Cameron", 21.67832168, 100, 25.454545449999998, {
    "type": "dist",
    "values": [{
      "className": "cash-bar",
      "value": 21.67832168
    }, {
      "className": "unsecured-bar",
      "value": 78.3217
    }, {
      "className": "nonmonetary-bar",
      "value": 0
    }, {
      "className": "ror-bar",
      "value": 0
    }]
  }],
  "outlier": true,
  "collapseData": [{
    "data": ["", "Brown, Barry D.", 21.28, 66.66666667, 37.58865248, {
      "type": "dist",
      "values": [{
        "className": "cash-bar",
        "value": 21.28
      }, {
        "className": "unsecured-bar",
        "value": 78.72
      }, {
        "className": "nonmonetary-bar",
        "value": 0
      }, {
        "className": "ror-bar",
        "value": 0
      }]
    }],
    "outlier": true
  }],
  "isCollapsed": true
}];
exports.MDJ_DATA = MDJ_DATA;
},{}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _Table = require("./classes/Table.js");

var _data = require("./data.js");

/* TABLE CREATION FUNCTIONS */
var createBailRateTable = function createBailRateTable() {
  var columnConfigs = [{
    class: "county-name-cell",
    header: {
      "text": "",
      "unit": ""
    },
    sortable: false,
    searchable: true
  }, {
    class: "viz-cell",
    header: {
      "start": 0,
      "end": 60,
      "averages": [{
        "name": "Avg.",
        "value": 42.5966697900
      }],
      "unit": "percent"
    },
    sortable: false,
    searchable: false
  }, {
    class: "bail-rate-cell number-cell",
    header: {
      "text": "Rate\xa0(%)",
      "unit": "percent"
    },
    sortable: true,
    searchable: false
  }, {
    class: "bail-cases-cell number-cell",
    header: {
      "text": "Cases",
      "unit": "number"
    },
    sortable: true,
    searchable: false
  }, {
    class: "total-cases-cell number-cell",
    header: {
      "text": "Total",
      "unit": "number"
    },
    sortable: true,
    searchable: false
  }];
  var initSort = 2; // initially sort by cash bail rate

  var stateData = ["Pennsylvania", {
    "type": "bar",
    "values": [42.5966697900]
  }, 42.5966697900, 2470, 5681];
  var tableContainer = document.getElementById("bail-rate-container");
  return new _Table.Table(_data.BAIL_RATE_DATA, columnConfigs, initSort, tableContainer, stateData, false);
};

var createRorRateTable = function createRorRateTable() {
  var columnConfigs = [{
    class: "county-name-cell",
    header: {
      "text": "",
      "unit": ""
    },
    sortable: false,
    searchable: true
  }, {
    class: "viz-cell",
    header: {
      "start": 0,
      "end": 75,
      "averages": [{
        "name": "Avg.",
        "value": 22.73
      }],
      "unit": "percent"
    },
    sortable: false,
    searchable: false
  }, {
    class: "ror-rate-cell number-cell",
    header: {
      "text": "Rate\xa0(%)",
      "unit": "percent"
    },
    sortable: true,
    searchable: false
  }, {
    class: "ror-cases-cell number-cell",
    header: {
      "text": "Cases",
      "unit": "number"
    },
    sortable: true,
    searchable: false
  }, {
    class: "total-cases-cell number-cell",
    header: {
      "text": "Cases",
      "unit": "number"
    },
    sortable: true,
    searchable: false
  }];
  var initSort = 2; // initially sort by ror bail rate

  var stateData = ["Pennsylvania", {
    "type": "bar",
    "values": [22.73]
  }, 22.73, 1294, 5681];
  var tableContainer = document.getElementById("ror-rate-container");
  return new _Table.Table(_data.ROR_RATE_DATA, columnConfigs, initSort, tableContainer, stateData, false);
};

var createBailRaceRateTable = function createBailRaceRateTable() {
  var columnConfigs = [{
    class: "county-name-cell",
    header: {
      "text": "",
      "unit": ""
    },
    sortable: false,
    searchable: true
  }, {
    class: "viz-cell",
    header: {
      "start": 0,
      "end": 100,
      "averages": [{
        "name": "Black",
        "value": 54.7462525
      }, {
        "name": "White",
        "value": 37.87542236
      }],
      "unit": "percent"
    },
    sortable: false,
    searchable: false
  }, {
    class: "bail-black-cell number-cell",
    header: {
      "text": "Black",
      "unit": "percent"
    },
    sortable: true,
    searchable: false
  }, {
    class: "bail-white-cell number-cell",
    header: {
      "text": "White",
      "unit": "percent"
    },
    sortable: true,
    searchable: false
  }, {
    class: "diff-cell number-cell",
    header: {
      "text": "Gap",
      "unit": "percent"
    },
    sortable: true,
    searchable: false
  }];
  var initSort = 4; // initially sort by difference

  var stateData = ["Pennsylvania", {
    "type": "line",
    "values": [54.7, 37.0]
  }, 54.7, 37.0, 0];
  var tableContainer = document.getElementById("bail-race-rate-container");
  return new _Table.Table(_data.BAIL_RACE_RATE_DATA, columnConfigs, initSort, tableContainer, stateData, false);
};

var createBailRaceAmountTable = function createBailRaceAmountTable() {
  var columnConfigs = [{
    class: "county-name-cell",
    header: {
      "text": "",
      "unit": ""
    },
    sortable: false,
    searchable: true
  }, {
    class: "viz-cell",
    header: {
      "start": 10000,
      "end": 80000,
      "averages": [{
        "name": "Black",
        "value": 38700.61968
      }, {
        "name": "White",
        "value": 27572.55514
      }],
      "unit": "dollars"
    },
    sortable: false,
    searchable: false
  }, {
    class: "bail-black-cell number-cell",
    header: {
      "text": "Black",
      "unit": "dollars"
    },
    sortable: true,
    searchable: false
  }, {
    class: "bail-white-cell number-cell",
    header: {
      "text": "White",
      "unit": "dollars"
    },
    sortable: true,
    searchable: false
  }, {
    class: "diff-cell number-cell",
    header: {
      "text": "Gap",
      "unit": "dollars"
    },
    sortable: true,
    searchable: false
  }];
  var initSort = 4; // initially sort by difference

  var stateData = ["Pennsylvania", {
    "type": "line",
    "values": [38700.61968, 27572.55514]
  }, "$36,202", "$26,868", 0];
  var tableContainer = document.getElementById("bail-race-amount-container");
  return new _Table.Table(_data.BAIL_RACE_AMOUNT_DATA, columnConfigs, initSort, tableContainer, stateData, false);
};

var createBailPostingTable = function createBailPostingTable() {
  var columnConfigs = [{
    class: "county-name-cell",
    header: {
      "text": "",
      "unit": ""
    },
    sortable: false,
    searchable: true
  }, {
    class: "bail-amount-cell number-cell",
    header: {
      "text": "Bail Set",
      "unit": "dollars"
    },
    sortable: true,
    searchable: false
  }, {
    class: "nonposting-rate-cell number-cell",
    header: {
      "text": "Non-Posting Rate",
      "unit": "percent"
    },
    sortable: true,
    searchable: false
  }, {
    class: "viz-cell",
    header: {
      "start": 0,
      "end": 100,
      "averages": [{
        "name": "Avg.",
        "value": 58.5211725
      }],
      "unit": "percent"
    },
    sortable: false,
    searchable: false
  }];
  var initSort = 2;
  var stateData = ["Pennsylvania", "$31.8K", 58.5211725, {
    "type": "line",
    "values": [58.5211725]
  }];
  var tableContainer = document.getElementById("bail-posting-container");
  return new _Table.Table(_data.BAIL_POSTING_DATA, columnConfigs, initSort, tableContainer, stateData);
};

var createBailRetentionFeeTable = function createBailRetentionFeeTable() {
  var columnConfigs = [{
    class: "county-name-cell",
    header: {
      "text": "County",
      "unit": ""
    },
    sortable: true,
    searchable: true
  }, {
    class: "retention-fee-cell",
    header: {
      "text": "Retention Fee",
      "unit": "dollars"
    },
    sortable: false,
    searchable: false
  }];
  var initSort = 0; // initially sort by difference

  var tableContainer = document.getElementById("bail-retention-fee-container");
  return new _Table.Table(_data.BAIL_RETENTION_FEE_DATA, columnConfigs, initSort, tableContainer);
};

var createPretrialSpendingTable = function createPretrialSpendingTable() {
  var columnConfigs = [{
    class: "county-name-cell",
    header: {
      "text": "",
      "unit": ""
    },
    sortable: false,
    searchable: true
  }, {
    class: "spending-cell number-cell",
    header: {
      "text": "Cost",
      "unit": "dollars"
    },
    sortable: true,
    searchable: false
  }, {
    class: "total-budget-cell number-cell",
    header: {
      "text": "Total Budget",
      "unit": "dollars"
    },
    sortable: true,
    searchable: false
  }, {
    class: "fraction-budget-cell number-cell",
    header: {
      "text": "% Budget",
      "unit": "percent"
    },
    sortable: true,
    searchable: false
  }, {
    class: "viz-cell",
    header: {
      "start": 0,
      "end": 100,
      "averages": [{
        "name": "",
        "value": 62.4
      }],
      "unit": "percent"
    },
    sortable: false,
    searchable: false
  }];
  var initSort = 1;
  var stateData = ["Pennsylvania", "$10.1M", "$16.1M", 62.4, {
    "type": "bar",
    "values": [62.4]
  }];
  var tableContainer = document.getElementById("pretrial-spending-container");
  return new _Table.Table(_data.PRETRIAL_SPENDING_DATA, columnConfigs, initSort, tableContainer, stateData);
};

var createMdjTable = function createMdjTable() {
  var columnConfigs = [{
    class: "caret-cell",
    header: {
      "text": "",
      "unit": ""
    },
    sortable: false,
    searchable: false
  }, {
    class: "county-name-cell",
    header: {
      "text": "",
      "unit": ""
    },
    sortable: false,
    searchable: true
  }, {
    class: "total-bail-rate-cell  number-cell",
    header: {
      "text": "Cash Bail Rate",
      "unit": "percent"
    },
    sortable: true,
    searchable: false
  }, {
    class: "bail-black-cell number-cell",
    header: {
      "text": "Black",
      "unit": "percent"
    },
    sortable: true,
    searchable: false
  }, {
    class: "bail-white-cell number-cell",
    header: {
      "text": "White",
      "unit": "percent"
    },
    sortable: true,
    searchable: false
  }, {
    class: "viz-cell bail-dist-cell",
    header: {
      "text": "Bail Types",
      "unit": "number"
    },
    sortable: false,
    searchable: false
  }];
  var initSort = 2;
  var tableContainer = document.getElementById("mdj-container");
  return new _Table.Table(_data.MDJ_DATA, columnConfigs, initSort, tableContainer);
};
/* RENDER PAGE */


var bailRateTable = createBailRateTable();
var rorRateTable = createRorRateTable();
var rateContainer = document.getElementById("rate-container");
new _Table.SwitchableTable(bailRateTable, rorRateTable, rateContainer);
var bailRaceRateTable = createBailRaceRateTable();
var bailRaceAmountTable = createBailRaceAmountTable();
var raceContainer = document.getElementById("race-container");
new _Table.SwitchableTable(bailRaceRateTable, bailRaceAmountTable, raceContainer);
createBailPostingTable();
createBailRetentionFeeTable();
createPretrialSpendingTable();
createMdjTable();
},{"./classes/Table.js":"src/js/classes/Table.js","./data.js":"src/js/data.js"}],"../../.nvm/versions/node/v12.16.2/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58139" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.nvm/versions/node/v12.16.2/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map