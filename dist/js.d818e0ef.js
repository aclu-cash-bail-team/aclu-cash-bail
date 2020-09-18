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
exports.RankedTable = void 0;

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

var NumberCell = /*#__PURE__*/function (_Cell2) {
  _inherits(NumberCell, _Cell2);

  var _super2 = _createSuper(NumberCell);

  function NumberCell(content, className) {
    var _this2;

    _classCallCheck(this, NumberCell);

    _this2 = _super2.call(this, className);
    _this2.content = content % 1 === 0 ? content.toLocaleString() : content.toFixed(1);

    _this2.render();

    return _this2;
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

var BarGraphCell = /*#__PURE__*/function (_Cell3) {
  _inherits(BarGraphCell, _Cell3);

  var _super3 = _createSuper(BarGraphCell);

  function BarGraphCell(content, className, data) {
    var _this3;

    _classCallCheck(this, BarGraphCell);

    _this3 = _super3.call(this, className); // BarGraphCell should only ever be passed one number

    _this3.content = content["values"][0];
    _this3.average = data["averages"][0]["value"];
    _this3.range = data;

    _this3.render();

    return _this3;
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
      label.textContent = "".concat(diff > 0 ? "+" : "").concat(diff.toFixed(1));
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

var NumberLineCell = /*#__PURE__*/function (_Cell4) {
  _inherits(NumberLineCell, _Cell4);

  var _super4 = _createSuper(NumberLineCell);

  function NumberLineCell(content, className, data) {
    var _this4;

    _classCallCheck(this, NumberLineCell);

    _this4 = _super4.call(this, className);
    _this4.content = content["values"];
    _this4.averages = data["averages"];
    _this4.range = data;
    _this4.vizColors = ["green", "purple"];

    _this4.render();

    return _this4;
  }

  _createClass(NumberLineCell, [{
    key: "render",
    value: function render() {
      var _this5 = this;

      _get(_getPrototypeOf(NumberLineCell.prototype), "render", this).call(this); // create the number line


      var bar = document.createElement("div");
      bar.className = "viz-number-line";
      this.element.appendChild(bar); // create the points on the number line

      this.content.forEach(function (value, i) {
        var point = document.createElement("div");
        point.className = "viz-number-line-point ".concat(_this5.vizColors[i]);
        point.style.left = "".concat(value / _this5.range["end"] * 100, "%");

        _this5.element.appendChild(point);
      }); // add the vertical line denoting the average

      this.averages.forEach(function (average, i) {
        var averageLine = document.createElement("div");
        averageLine.className = "bar-average-line ".concat(_this5.vizColors[i]);
        averageLine.style.left = "".concat(average["value"] / _this5.range["end"] * 100, "%");

        _this5.element.appendChild(averageLine);
      });
    }
  }]);

  return NumberLineCell;
}(Cell);

var HeaderCell = /*#__PURE__*/function (_Cell5) {
  _inherits(HeaderCell, _Cell5);

  var _super5 = _createSuper(HeaderCell);

  function HeaderCell(content, className, sortCol, sortDir, initSort, table, id) {
    var _this6;

    _classCallCheck(this, HeaderCell);

    _this6 = _super5.call(this, className);
    _this6.content = content;
    _this6.sortCol = sortCol;
    _this6.sortDir = sortDir;
    _this6.initSort = initSort;
    _this6.table = table;
    _this6.id = id;

    _this6.render(); // add event listener for sorting


    if (_this6.sortCol) {
      _this6.element.addEventListener("click", function () {
        var classNameWithSort = _this6.getClassName();

        _this6.table.setSortColumn(_this6.id);

        _this6.table.setSortDirection(_this6.sortDir);

        _this6.table.sort(false); // after sorting set the class to ensure its the only column highlighted


        _this6.setElementClass(classNameWithSort, true); // toggle sort direction for the next click


        _this6.sortDir *= -1;
      });
    } // if we're initializing this sort, update sortDir for the next click


    if (_this6.initSort) {
      _this6.sortDir *= -1;
    }

    return _this6;
  }

  _createClass(HeaderCell, [{
    key: "render",
    value: function render() {
      var cell = document.createElement("th");
      cell.className = this.className;
      cell.appendChild(document.createTextNode(this.content));
      this.element = cell;

      if (this.sortCol) {
        var classNameWithSort = this.getClassName();
        this.setElementClass(classNameWithSort, this.initSort);
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

  var _super6 = _createSuper(VizHeaderCell);

  function VizHeaderCell(data, className, sortCol, sortDir, initSort, table, id) {
    _classCallCheck(this, VizHeaderCell);

    return _super6.call(this, data, className, sortCol, sortDir, initSort, table, id);
  }

  _createClass(VizHeaderCell, [{
    key: "render",
    value: function render() {
      var _this7 = this;

      var vizColors = ["green", "purple"];
      var start = this.content["start"];
      var end = this.content["end"];
      var averages = this.content["averages"];
      var cell = document.createElement("th");
      cell.className = this.className; // create start, end, and average tick/number elements

      var startElement = this.createTickElement(start, "start-num");
      var endElement = this.createTickElement(end, "end-num");
      var averageElements = averages.map(function (average, i) {
        var text = "".concat(average["name"], ":<br>").concat(average["value"].toFixed(1), "%");
        var className = "average";
        return _this7.createTickElement(text, className, vizColors[i]);
      }); // create wrapper around averages for positioning

      var averageWrapper = document.createElement("div");
      averageWrapper.className = "average-wrapper"; // offset the average elements by the value/end ratio (and subtract padding)

      averageElements.forEach(function (element, i) {
        element.style.left = "calc(".concat(averages[i]["value"] / end * 100, "%)");
        averageWrapper.appendChild(element);
      }); // add all the elements to the cell

      [startElement, endElement, averageWrapper].forEach(function (element) {
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
      if (className === "average") text.className = "average-text";
      wrapper.appendChild(text); // adjust padding based on number of digits

      if (className === "start-num" && content.toString().length === 1) {
        wrapper.style.paddingLeft = "".concat(0.25, "em");
      } // create the vertical tick underneath the number


      var line = document.createElement("div");
      line.className = "".concat(className === "average" ? "average-line" : "viz-line");
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

var RankedBodyRow = /*#__PURE__*/function () {
  function RankedBodyRow(cells, initialRank) {
    _classCallCheck(this, RankedBodyRow);

    this.cells = cells;
    this.render(initialRank);
  }

  _createClass(RankedBodyRow, [{
    key: "render",
    value: function render(rank, sorted) {
      var row = document.createElement("tr");
      var rankedCells = [new TextCell(rank, "rank-cell")].concat(_toConsumableArray(this.cells));
      rankedCells.forEach(function (cell, i) {
        cell.setElementClass(i === sorted ? "".concat(cell.className, " sorted") : cell.className);
        row.appendChild(cell.element);
      });
      this.element = row;
    }
  }]);

  return RankedBodyRow;
}();

var RankedTable = /*#__PURE__*/function () {
  function RankedTable(data, columnConfigs, initSort, tableElement) {
    _classCallCheck(this, RankedTable);

    this.classNames = columnConfigs.map(function (config) {
      return config.class;
    });
    this.headers = columnConfigs.map(function (config) {
      return config.header;
    });
    this.data = data;
    this.validate(this.data, this.classNames, this.headers);
    this.element = tableElement;
    this.sortCols = columnConfigs.map(function (config) {
      return config.sortable;
    }); // start with sorting descending; add one to account for rank

    this.sortCol = initSort + 1;
    this.sortDir = -1;
    this.sort(true); // this initial sort populates this.rows

    this.header = this.getHeaderRow();
    this.render();
  }

  _createClass(RankedTable, [{
    key: "validate",
    value: function validate(data, classNames, headers) {
      if (classNames.length !== headers.length) {
        throw new Error("Number of class names does not match number of headers");
      }

      if (data.some(function (row) {
        return row.length != headers.length;
      })) {
        throw new Error("".concat(headers.length, " columns of data required"));
      }
    }
  }, {
    key: "getHeaderRow",
    value: function getHeaderRow() {
      var _this8 = this;

      var headerCells = this.headers.map(function (header, i) {
        var CellType = typeof header == "string" ? HeaderCell : VizHeaderCell;
        return new CellType(header, _this8.classNames[i], _this8.sortCols[i], // 1 designates ascending; -1, descending (default); 0, not sortable
        _this8.sortCols[i] ? -1 : 0, i + 1 === _this8.sortCol, _this8, // adjust ids for rank and space headers
        i + 1);
      });
      var headersWithRank = [new HeaderCell("Rank", "rank-cell", false, 0, false, this, 0)].concat(_toConsumableArray(headerCells));
      return new HeaderRow(headersWithRank);
    }
  }, {
    key: "getRows",
    value: function getRows(data) {
      var _this9 = this;

      return data.map(function (row, i) {
        // Specify how data will be rendered
        var cells = row.map(function (cell, j) {
          var CellType = TextCell;
          if (typeof cell == "number") CellType = NumberCell;

          if (_typeof(cell) == "object") {
            CellType = cell["type"] === "bar" ? BarGraphCell : NumberLineCell;
          }

          return new CellType(cell, _this9.classNames[j], _this9.headers[j]);
        });
        return new RankedBodyRow(cells, i + 1);
      });
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
    key: "sort",
    value: function sort(initialSort) {
      var _this10 = this;

      if (!initialSort) this.header.clearedSortedCells(); // data doesn't have rank, so subtract one from the index

      var dataCol = this.sortCol - 1;
      this.data.sort(function (a, b) {
        // Assumes that we only want to sort numbers, which is fine for now
        // May need to support sorting multiple types
        var i = Number(a[dataCol]);
        var j = Number(b[dataCol]);

        if (i < j) {
          return _this10.sortDir * -1;
        } else if (i > j) {
          return _this10.sortDir;
        } else {
          return 0;
        }
      });
      this.rows = this.getRows(this.data);
      this.updateTable(false);
    }
  }, {
    key: "updateTable",
    value: function updateTable(rankReverse) {
      var _this11 = this;

      var tbody = this.element.getElementsByTagName("tbody")[0];
      tbody.textContent = ""; // repopulate with updated rows

      this.rows.forEach(function (row, i) {
        var rank = rankReverse ? _this11.rows.length - i : i + 1;
        row.render(rank, _this11.sortCol);
        tbody.appendChild(row.element);
      });
    }
  }, {
    key: "render",
    value: function render() {
      // create header row
      var thead = this.element.getElementsByTagName("thead")[0];
      thead.appendChild(this.header.element); // create rows

      var tbody = this.element.getElementsByTagName("tbody")[0];
      this.rows.forEach(function (row) {
        tbody.appendChild(row.element);
      });
    }
  }]);

  return RankedTable;
}();

exports.RankedTable = RankedTable;
},{}],"src/js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BAIL_RACE_DATA = exports.BAIL_RATE_DATA = void 0;

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
 *   data.push([
 *     cells[0], // county
 *     {
 *       "type": "line", // visualization
 *       "values": [parseFloat(cells[1]), parseFloat(cells[2])]
 *     },
 *     parseFloat(cells[1]), // black cash bail rate
 *     parseFloat(cells[2]), // white cash bail rate
 *     `${diff > 0 ? "+" : ""}${diff.toFixed(1)}` // overall cash bail rate
 *   ]);
 * });
 *
 * console.log(JSON.stringify(data));
 */
var BAIL_RATE_DATA = [["Adams", {
  "type": "bar",
  "values": [30.18867925]
}, 30.18867925, 775, 2537], ["Allegheny", {
  "type": "bar",
  "values": [43.50802205]
}, 43.50802205, 13884, 31723], ["Armstrong", {
  "type": "bar",
  "values": [41.05888709]
}, 41.05888709, 742, 1808], ["Beaver", {
  "type": "bar",
  "values": [49.05179283]
}, 49.05179283, 4959, 5967], ["Bedford", {
  "type": "bar",
  "values": [38.63636364]
}, 38.63636364, 563, 1460], ["Berks", {
  "type": "bar",
  "values": [50.92425977]
}, 50.92425977, 6036, 11688], ["Blair", {
  "type": "bar",
  "values": [34.04638145]
}, 34.04638145, 1674, 4826], ["Bradford", {
  "type": "bar",
  "values": [45.49865229]
}, 45.49865229, 824, 1805], ["Bucks", {
  "type": "bar",
  "values": [32.41325938]
}, 32.41325938, 4959, 15185], ["Butler", {
  "type": "bar",
  "values": [31.15234375]
}, 31.15234375, 626, 2017], ["Cambria", {
  "type": "bar",
  "values": [44.29388101]
}, 44.29388101, 2059, 4613], ["Cameron", {
  "type": "bar",
  "values": [21.67832168]
}, 21.67832168, 30, 112], ["Carbon", {
  "type": "bar",
  "values": [32.99299883]
}, 32.99299883, 1098, 3307], ["Centre", {
  "type": "bar",
  "values": [26.08333333]
}, 26.08333333, 871, 3370], ["Chester", {
  "type": "bar",
  "values": [38.0970325]
}, 38.0970325, 3968, 10351], ["Clarion", {
  "type": "bar",
  "values": [40]
}, 40, 487, 1193], ["Clearfield", {
  "type": "bar",
  "values": [36.28318584]
}, 36.28318584, 734, 2002], ["Clinton", {
  "type": "bar",
  "values": [36.92628651]
}, 36.92628651, 527, 1421], ["Columbia", {
  "type": "bar",
  "values": [38.18897638]
}, 38.18897638, 667, 1722], ["Crawford", {
  "type": "bar",
  "values": [28.8973384]
}, 28.8973384, 225, 768], ["Cumberland", {
  "type": "bar",
  "values": [38.5278224]
}, 38.5278224, 2593, 6732], ["Dauphin", {
  "type": "bar",
  "values": [42.44132779]
}, 42.44132779, 5850, 13585], ["Delaware", {
  "type": "bar",
  "values": [55.68060922]
}, 55.68060922, 9514, 16808], ["Elk", {
  "type": "bar",
  "values": [28.62318841]
}, 28.62318841, 229, 799], ["Erie", {
  "type": "bar",
  "values": [43.95330739]
}, 43.95330739, 2750, 6198], ["Fayette", {
  "type": "bar",
  "values": [44.27074081]
}, 44.27074081, 2463, 5546], ["Forest", {
  "type": "bar",
  "values": [34.75609756]
}, 34.75609756, 50, 123], ["Franklin", {
  "type": "bar",
  "values": [37.47902685]
}, 37.47902685, 1772, 4681], ["Fulton", {
  "type": "bar",
  "values": [28.67298578]
}, 28.67298578, 113, 383], ["Greene", {
  "type": "bar",
  "values": [37.44343891]
}, 37.44343891, 324, 834], ["Huntingdon", {
  "type": "bar",
  "values": [38.96907216]
}, 38.96907216, 552, 1353], ["Indiana", {
  "type": "bar",
  "values": [35.01070664]
}, 35.01070664, 322, 922], ["Jefferson", {
  "type": "bar",
  "values": [38.55721393]
}, 38.55721393, 460, 1166], ["Juniata", {
  "type": "bar",
  "values": [34.46215139]
}, 34.46215139, 168, 455], ["Lackawanna", {
  "type": "bar",
  "values": [52.63500325]
}, 52.63500325, 3052, 5783], ["Lancaster", {
  "type": "bar",
  "values": [44.93240475]
}, 44.93240475, 5430, 11977], ["Lawrence", {
  "type": "bar",
  "values": [48.92407633]
}, 48.92407633, 1182, 2398], ["Lebanon", {
  "type": "bar",
  "values": [38.70437956]
}, 38.70437956, 2085, 5329], ["Lehigh", {
  "type": "bar",
  "values": [54.88215488]
}, 54.88215488, 6526, 11845], ["Luzerne", {
  "type": "bar",
  "values": [38.28885249]
}, 38.28885249, 3828, 9950], ["Lycoming", {
  "type": "bar",
  "values": [34.68169761]
}, 34.68169761, 1557, 4475], ["McKean", {
  "type": "bar",
  "values": [42.38134888]
}, 42.38134888, 488, 1147], ["Mercer", {
  "type": "bar",
  "values": [36.12542955]
}, 36.12542955, 1653, 4571], ["Mifflin", {
  "type": "bar",
  "values": [48.49498328]
}, 48.49498328, 721, 1477], ["Monroe", {
  "type": "bar",
  "values": [32.79661017]
}, 32.79661017, 1910, 5757], ["Montgomery", {
  "type": "bar",
  "values": [33.63556165]
}, 33.63556165, 6723, 19702], ["Montour", {
  "type": "bar",
  "values": [35.19163763]
}, 35.19163763, 100, 275], ["Northampton", {
  "type": "bar",
  "values": [45.83529967]
}, 45.83529967, 3804, 8234], ["Northumberland", {
  "type": "bar",
  "values": [36]
}, 36, 869, 2414], ["Perry", {
  "type": "bar",
  "values": [28.98148148]
}, 28.98148148, 305, 1064], ["Philadelphia", {
  "type": "bar",
  "values": [50.12216352]
}, 50.12216352, 32072, 63180], ["Pike", {
  "type": "bar",
  "values": [34.16738568]
}, 34.16738568, 382, 1109], ["Potter", {
  "type": "bar",
  "values": [23.36601307]
}, 23.36601307, 142, 593], ["Schuylkill", {
  "type": "bar",
  "values": [37.74187822]
}, 37.74187822, 2100, 5531], ["Snyder", {
  "type": "bar",
  "values": [35.92870544]
}, 35.92870544, 381, 1060], ["Somerset", {
  "type": "bar",
  "values": [25]
}, 25, 498, 1962], ["Sullivan", {
  "type": "bar",
  "values": [36.44859813]
}, 36.44859813, 36, 103], ["Susquehanna", {
  "type": "bar",
  "values": [40.32663317]
}, 40.32663317, 317, 783], ["Tioga", {
  "type": "bar",
  "values": [36.38603696]
}, 36.38603696, 868, 2385], ["Union", {
  "type": "bar",
  "values": [25.36136662]
}, 25.36136662, 186, 743], ["Venango", {
  "type": "bar",
  "values": [37.84477229]
}, 37.84477229, 586, 1549], ["Warren", {
  "type": "bar",
  "values": [40.61393152]
}, 40.61393152, 338, 831], ["Washington", {
  "type": "bar",
  "values": [38.93688681]
}, 38.93688681, 2596, 6615], ["Wayne", {
  "type": "bar",
  "values": [37.20349563]
}, 37.20349563, 286, 779], ["Westmoreland", {
  "type": "bar",
  "values": [31.71662559]
}, 31.71662559, 3840, 11934], ["Wyoming", {
  "type": "bar",
  "values": [35.68118628]
}, 35.68118628, 377, 1056], ["York", {
  "type": "bar",
  "values": [44.27380952]
}, 44.27380952, 7356, 16539]];
exports.BAIL_RATE_DATA = BAIL_RATE_DATA;
var BAIL_RACE_DATA = [["Adams", {
  "type": "line",
  "values": [43.56060606, 29.03651562]
}, 43.56060606, 29.03651562, "+14.5"], ["Allegheny", {
  "type": "line",
  "values": [57.06645057, 35.29897333]
}, 57.06645057, 35.29897333, "+21.8"], ["Armstrong", {
  "type": "line",
  "values": [62.71186441, 39.52662722]
}, 62.71186441, 39.52662722, "+23.2"], ["Beaver", {
  "type": "line",
  "values": [64.33048433, 43.92212726]
}, 64.33048433, 43.92212726, "+20.4"], ["Bedford", {
  "type": "line",
  "values": [52.57731959, 37.56419663]
}, 52.57731959, 37.56419663, "+15.0"], ["Berks", {
  "type": "line",
  "values": [58.42078961, 50.24259317]
}, 58.42078961, 50.24259317, "+8.2"], ["Blair", {
  "type": "line",
  "values": [58.6998088, 31.76853358]
}, 58.6998088, 31.76853358, "+26.9"], ["Bradford", {
  "type": "line",
  "values": [62.26415094, 45.14840183]
}, 62.26415094, 45.14840183, "+17.1"], ["Bucks", {
  "type": "line",
  "values": [41.06901218, 30.62392673]
}, 41.06901218, 30.62392673, "+10.4"], ["Butler", {
  "type": "line",
  "values": [44.7761194, 29.5154185]
}, 44.7761194, 29.5154185, "+15.3"], ["Cambria", {
  "type": "line",
  "values": [65.52083333, 39.14590747]
}, 65.52083333, 39.14590747, "+26.4"], ["Cameron", {
  "type": "line",
  "values": [100, 25.45454545]
}, 100, 25.45454545, "+74.5"], ["Carbon", {
  "type": "line",
  "values": [43.7751004, 32.34139961]
}, 43.7751004, 32.34139961, "+11.4"], ["Centre", {
  "type": "line",
  "values": [46.74115456, 21.88492764]
}, 46.74115456, 21.88492764, "+24.9"], ["Chester", {
  "type": "line",
  "values": [48.47354138, 34.29690666]
}, 48.47354138, 34.29690666, "+14.2"], ["Clarion", {
  "type": "line",
  "values": [40.625, 40.83259522]
}, 40.625, 40.83259522, "-0.2"], ["Clearfield", {
  "type": "line",
  "values": [59.30232558, 35.64718163]
}, 59.30232558, 35.64718163, "+23.7"], ["Clinton", {
  "type": "line",
  "values": [47.14285714, 35.98750976]
}, 47.14285714, 35.98750976, "+11.2"], ["Columbia", {
  "type": "line",
  "values": [40.7960199, 38.46153846]
}, 40.7960199, 38.46153846, "+2.3"], ["Crawford", {
  "type": "line",
  "values": [53.33333333, 28.3197832]
}, 53.33333333, 28.3197832, "+25.0"], ["Cumberland", {
  "type": "line",
  "values": [51.61744023, 35.0094162]
}, 51.61744023, 35.0094162, "+16.6"], ["Dauphin", {
  "type": "line",
  "values": [51.21710526, 36.4556962]
}, 51.21710526, 36.4556962, "+14.8"], ["Delaware", {
  "type": "line",
  "values": [63.75237882, 48.4952381]
}, 63.75237882, 48.4952381, "+15.3"], ["Elk", {
  "type": "line",
  "values": [27.77777778, 28.68117798]
}, 27.77777778, 28.68117798, "-0.9"], ["Erie", {
  "type": "line",
  "values": [63.73239437, 37.02714731]
}, 63.73239437, 37.02714731, "+26.7"], ["Fayette", {
  "type": "line",
  "values": [54, 42.30092389]
}, 54, 42.30092389, "+11.7"], ["Forest", {
  "type": "line",
  "values": [85, 32.03883495]
}, 85, 32.03883495, "+53.0"], ["Franklin", {
  "type": "line",
  "values": [49.26553672, 35.19494204]
}, 49.26553672, 35.19494204, "+14.1"], ["Fulton", {
  "type": "line",
  "values": [31.57894737, 29.27536232]
}, 31.57894737, 29.27536232, "+2.3"], ["Greene", {
  "type": "line",
  "values": [58.97435897, 37.86163522]
}, 58.97435897, 37.86163522, "+21.1"], ["Huntingdon", {
  "type": "line",
  "values": [64.05228758, 37.83333333]
}, 64.05228758, 37.83333333, "+26.2"], ["Indiana", {
  "type": "line",
  "values": [30.39215686, 36.21169916]
}, 30.39215686, 36.21169916, "-5.8"], ["Jefferson", {
  "type": "line",
  "values": [72.97297297, 38.35252436]
}, 72.97297297, 38.35252436, "+34.6"], ["Juniata", {
  "type": "line",
  "values": [43.75, 36.67425968]
}, 43.75, 36.67425968, "+7.1"], ["Lackawanna", {
  "type": "line",
  "values": [67.1345995, 48.9720035]
}, 67.1345995, 48.9720035, "+18.2"], ["Lancaster", {
  "type": "line",
  "values": [55.54532904, 43.07425541]
}, 55.54532904, 43.07425541, "+12.5"], ["Lawrence", {
  "type": "line",
  "values": [66.28477905, 43.4806939]
}, 66.28477905, 43.4806939, "+22.8"], ["Lebanon", {
  "type": "line",
  "values": [48.84547069, 37.97733949]
}, 48.84547069, 37.97733949, "+10.9"], ["Lehigh", {
  "type": "line",
  "values": [61.81634031, 52.85376562]
}, 61.81634031, 52.85376562, "+9.0"], ["Luzerne", {
  "type": "line",
  "values": [53.5892323, 34.6550856]
}, 53.5892323, 34.6550856, "+18.9"], ["Lycoming", {
  "type": "line",
  "values": [55.01355014, 28.14726841]
}, 55.01355014, 28.14726841, "+26.9"], ["McKean", {
  "type": "line",
  "values": [61.33333333, 41.23134328]
}, 61.33333333, 41.23134328, "+20.1"], ["Mercer", {
  "type": "line",
  "values": [45.40337711, 33.35235378]
}, 45.40337711, 33.35235378, "+12.1"], ["Mifflin", {
  "type": "line",
  "values": [70.11494253, 47.48201439]
}, 70.11494253, 47.48201439, "+22.6"], ["Monroe", {
  "type": "line",
  "values": [35.13011152, 32.41612358]
}, 35.13011152, 32.41612358, "+2.7"], ["Montgomery", {
  "type": "line",
  "values": [43.27198364, 28.69733969]
}, 43.27198364, 28.69733969, "+14.6"], ["Montour", {
  "type": "line",
  "values": [46.15384615, 35.34136546]
}, 46.15384615, 35.34136546, "+10.8"], ["Northampton", {
  "type": "line",
  "values": [55.7063541, 43.86813852]
}, 55.7063541, 43.86813852, "+11.8"], ["Northumberland", {
  "type": "line",
  "values": [56.81818182, 33.91066545]
}, 56.81818182, 33.91066545, "+22.9"], ["Perry", {
  "type": "line",
  "values": [40, 27.68130746]
}, 40, 27.68130746, "+12.3"], ["Philadelphia", {
  "type": "line",
  "values": [56.02170568, 43.3107617]
}, 56.02170568, 43.3107617, "+12.7"], ["Pike", {
  "type": "line",
  "values": [37.41007194, 34.02061856]
}, 37.41007194, 34.02061856, "+3.4"], ["Potter", {
  "type": "line",
  "values": [75, 23.24786325]
}, 75, 23.24786325, "+51.8"], ["Schuylkill", {
  "type": "line",
  "values": [46.5060241, 37.27521501]
}, 46.5060241, 37.27521501, "+9.2"], ["Snyder", {
  "type": "line",
  "values": [52.5, 34.59183673]
}, 52.5, 34.59183673, "+17.9"], ["Somerset", {
  "type": "line",
  "values": [69.56521739, 23.20855615]
}, 69.56521739, 23.20855615, "+46.4"], ["Sullivan", {
  "type": "line",
  "values": [62.5, 32.63157895]
}, 62.5, 32.63157895, "+29.9"], ["Susquehanna", {
  "type": "line",
  "values": [66.66666667, 39.76377953]
}, 66.66666667, 39.76377953, "+26.9"], ["Tioga", {
  "type": "line",
  "values": [57, 34.50800915]
}, 57, 34.50800915, "+22.5"], ["Union", {
  "type": "line",
  "values": [38.20224719, 23.24159021]
}, 38.20224719, 23.24159021, "+15.0"], ["Venango", {
  "type": "line",
  "values": [60.13986014, 35.56187767]
}, 60.13986014, 35.56187767, "+24.6"], ["Warren", {
  "type": "line",
  "values": [70, 39.95067818]
}, 70, 39.95067818, "+30.0"], ["Washington", {
  "type": "line",
  "values": [55.77092511, 35.82116788]
}, 55.77092511, 35.82116788, "+19.9"], ["Wayne", {
  "type": "line",
  "values": [64.86486486, 35.30997305]
}, 64.86486486, 35.30997305, "+29.6"], ["Westmoreland", {
  "type": "line",
  "values": [50.05045409, 28.61736334]
}, 50.05045409, 28.61736334, "+21.4"], ["Wyoming", {
  "type": "line",
  "values": [40, 35.59650824]
}, 40, 35.59650824, "+4.4"], ["York", {
  "type": "line",
  "values": [54.11985019, 41.11844787]
}, 54.11985019, 41.11844787, "+13.0"]];
exports.BAIL_RACE_DATA = BAIL_RACE_DATA;
},{}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _Table = require("./classes/Table.js");

var _data = require("./data.js");

var createBailRateTable = function createBailRateTable() {
  var columnConfigs = [{
    class: "county-name-cell",
    header: "County",
    sortable: false
  }, {
    class: "viz-cell",
    header: {
      "start": 0,
      "end": 60,
      "averages": [{
        "name": "State Average",
        "value": 42.5966697900
      }]
    },
    sortable: false
  }, {
    class: "bail-rate-cell number-cell",
    header: "Cash Bail Rate (%)",
    sortable: true
  }, {
    class: "bail-cases-cell number-cell",
    header: "Cash Bail Cases",
    sortable: true
  }, {
    class: "total-cases-cell number-cell",
    header: "Total Cases",
    sortable: true
  }];
  var initSort = 2; // initially sort by cash bail rate

  var tableElement = document.getElementById("bail-rate-table");
  new _Table.RankedTable(_data.BAIL_RATE_DATA, columnConfigs, initSort, tableElement);
};

var createBailRaceTable = function createBailRaceTable() {
  var columnConfigs = [{
    class: "county-name-cell",
    header: "County",
    sortable: false
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
      }]
    },
    sortable: false
  }, {
    class: "bail-black-cell number-cell",
    header: "% Cash Bail Black",
    sortable: true
  }, {
    class: "bail-white-cell number-cell",
    header: "% Cash Bail White",
    sortable: true
  }, {
    class: "diff-cell number-cell",
    header: "Diff",
    sortable: true
  }];
  var initSort = 4; // initially sort by difference

  var tableElement = document.getElementById("bail-race-table");
  new _Table.RankedTable(_data.BAIL_RACE_DATA, columnConfigs, initSort, tableElement);
};

createBailRateTable();
createBailRaceTable();
},{"./classes/Table.js":"src/js/classes/Table.js","./data.js":"src/js/data.js"}],"../../../../.nvm/versions/node/v11.8.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56280" + '/');

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
},{}]},{},["../../../../.nvm/versions/node/v11.8.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map