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

var StyledTextCell = /*#__PURE__*/function (_Cell2) {
  _inherits(StyledTextCell, _Cell2);

  var _super2 = _createSuper(StyledTextCell);

  function StyledTextCell(content, className) {
    var _this2;

    _classCallCheck(this, StyledTextCell);

    _this2 = _super2.call(this, "".concat(className, " ").concat(content["className"]));
    _this2.content = content["value"].toLocaleString();

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

  function NumberCell(content, className) {
    var _this3;

    _classCallCheck(this, NumberCell);

    _this3 = _super3.call(this, className);
    _this3.content = content % 1 === 0 ? content.toLocaleString() : content.toFixed(1);

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

var NumberLineCell = /*#__PURE__*/function (_Cell5) {
  _inherits(NumberLineCell, _Cell5);

  var _super5 = _createSuper(NumberLineCell);

  function NumberLineCell(content, className, data) {
    var _this5;

    _classCallCheck(this, NumberLineCell);

    _this5 = _super5.call(this, className);
    _this5.content = content["values"];
    _this5.averages = data["averages"];
    _this5.range = data;
    _this5.vizColors = ["green", "purple"];

    _this5.render();

    return _this5;
  }

  _createClass(NumberLineCell, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      _get(_getPrototypeOf(NumberLineCell.prototype), "render", this).call(this); // create the number line


      var bar = document.createElement("div");
      bar.className = "viz-number-line";
      this.element.appendChild(bar); // create the points on the number line

      this.content.forEach(function (value, i) {
        var point = document.createElement("div");
        point.className = "viz-number-line-point ".concat(_this6.vizColors[i]);
        point.style.left = "".concat((value - _this6.range["start"]) / _this6.range["end"] * 100, "%");

        _this6.element.appendChild(point);
      }); // add the vertical line denoting the average

      this.averages.forEach(function (average, i) {
        var averageLine = document.createElement("div");
        averageLine.className = "bar-average-line ".concat(_this6.vizColors[i]);
        averageLine.style.left = "".concat((average["value"] - _this6.range["start"]) / _this6.range["end"] * 100, "%");

        _this6.element.appendChild(averageLine);
      });
    }
  }]);

  return NumberLineCell;
}(Cell);

var HeaderCell = /*#__PURE__*/function (_Cell6) {
  _inherits(HeaderCell, _Cell6);

  var _super6 = _createSuper(HeaderCell);

  function HeaderCell(content, className, sortCol, sortDir, initSort, table, id) {
    var _this7;

    _classCallCheck(this, HeaderCell);

    _this7 = _super6.call(this, className);
    _this7.content = content;
    _this7.sortCol = sortCol;
    _this7.sortDir = sortDir;
    _this7.initSort = initSort;
    _this7.table = table;
    _this7.id = id;

    _this7.render(); // add event listener for sorting


    if (_this7.sortCol) {
      _this7.element.addEventListener("click", function () {
        var classNameWithSort = _this7.getClassName();

        _this7.table.setSortColumn(_this7.id);

        _this7.table.setSortDirection(_this7.sortDir);

        _this7.table.sort(false); // after sorting set the class to ensure its the only column highlighted


        _this7.setElementClass(classNameWithSort, true); // toggle sort direction for the next click


        _this7.sortDir *= -1;
      });
    } // if we're initializing this sort, update sortDir for the next click


    if (_this7.initSort) {
      _this7.sortDir *= -1;
    }

    return _this7;
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

  var _super7 = _createSuper(VizHeaderCell);

  function VizHeaderCell(data, className, sortCol, sortDir, initSort, table, id) {
    _classCallCheck(this, VizHeaderCell);

    return _super7.call(this, data, className, sortCol, sortDir, initSort, table, id);
  }

  _createClass(VizHeaderCell, [{
    key: "render",
    value: function render() {
      var _this8 = this;

      var vizColors = ["green", "purple"];
      var start = this.content["start"];
      var end = this.content["end"];
      var averages = this.content["averages"];
      var unit = this.content["unit"];
      var cell = document.createElement("th");
      cell.className = this.className; // create start, end, and average tick/number elements

      var startText = unit === "dollars" ? "$".concat(Math.round(start / 1000), "K") : start;
      var endText = unit === "dollars" ? "$".concat(Math.round(end / 1000), "K") : end;
      var startElement = this.createTickElement(startText, "start-num");
      var endElement = this.createTickElement(endText, "end-num");
      var averageElements = averages.map(function (average, i) {
        var text = "";

        if (unit === "percent") {
          text = "".concat(average["name"], "<br>").concat(average["value"].toFixed(1), "%");
        } else if (unit === "dollars") {
          text = "".concat(average["name"], "<br>$").concat(Math.round(average["value"] / 1000), "K");
        }

        var className = "average";
        return _this8.createTickElement(text, className, vizColors[i]);
      }); // create wrapper around averages for positioning

      var averageWrapper = document.createElement("div");
      averageWrapper.className = "average-wrapper"; // offset the average elements by the value/end ratio (and subtract padding)

      averageElements.forEach(function (element, i) {
        element.style.left = "calc(".concat((averages[i]["value"] - start) / end * 100, "%)");
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
        wrapper.style.paddingLeft = "".concat(4, "px");
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

var BodyRow = /*#__PURE__*/function () {
  function BodyRow(cells, outlier, isHidden) {
    _classCallCheck(this, BodyRow);

    this.cells = cells;
    this.outlier = outlier;
    this.isHidden = isHidden;
    this.render();
  }

  _createClass(BodyRow, [{
    key: "setIsHidden",
    value: function setIsHidden(isHidden) {
      this.isHidden = isHidden;
    }
  }, {
    key: "render",
    value: function render(sorted) {
      var row = document.createElement("tr");

      if (this.isHidden) {
        row.className = "hidden";
      } else {
        row.className = "";
        this.cells.forEach(function (cell, i) {
          cell.setElementClass(i === sorted ? "".concat(cell.className, " sorted") : cell.className);
          row.appendChild(cell.element);
        });
      }

      this.element = row;
    }
  }]);

  return BodyRow;
}();

var Table = /*#__PURE__*/function () {
  function Table(data, columnConfigs, initSort, tableContainer) {
    var isVisible = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

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
    this.validate(this.data, this.classNames, this.headers);
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
    value: function validate(data, classNames, headers) {
      if (classNames.length !== headers.length) {
        throw new Error("Number of class names does not match number of headers");
      }

      if (data.some(function (row) {
        return row.data.length != headers.length;
      })) {
        throw new Error("".concat(headers.length, " columns of data required"));
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this9 = this;

      // create header row
      var thead = this.element.getElementsByTagName("thead")[0];
      thead.appendChild(this.header.element); // set up search bar

      var searchMenu = this.container.getElementsByClassName("menu")[0];
      var searchOptions = this.data.flatMap(function (row) {
        return row.data.flatMap(function (value, i) {
          return _this9.searchCols[i] ? [value] : [];
        });
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
        _this9.searchTerms = searchValue.split(",").filter(function (s) {
          return s !== "";
        });
        _this9.rows = _this9.getRows();

        _this9.render();
      }); // set up view all button

      var viewAllButton = this.container.getElementsByClassName("view-all-btn")[0];
      viewAllButton.innerText = this.isTruncated ? VIEW_ALL : VIEW_LESS;
      viewAllButton.addEventListener("click", function () {
        _this9.isTruncated = !_this9.isTruncated;
        viewAllButton.innerText = _this9.isTruncated ? VIEW_ALL : VIEW_LESS;
        _this9.rows = _this9.getRows();

        _this9.render();
      }); // set up outlier button

      var outlierButtons = this.container.getElementsByClassName("outliers-btn");

      if (outlierButtons.length > 0) {
        var outlierButton = outlierButtons[0];
        outlierButton.addEventListener("click", function (e) {
          var showOutliers = _this9.toggleOutliers();

          e.target.className = showOutliers ? "outliers-btn showing" : "outliers-btn";
        });
      }
    }
  }, {
    key: "getHeaderRow",
    value: function getHeaderRow() {
      var _this10 = this;

      var headerCells = this.headers.map(function (header, i) {
        var CellType = typeof header == "string" ? HeaderCell : VizHeaderCell;
        return new CellType(header, _this10.classNames[i], _this10.sortCols[i], // 1 designates ascending; -1, descending (default); 0, not sortable
        _this10.sortCols[i] ? -1 : 0, i === _this10.sortCol, _this10, i);
      });
      return new HeaderRow(headerCells);
    }
  }, {
    key: "getRows",
    value: function getRows() {
      var _this11 = this;

      var numVisibleRows = 0;
      return this.data.map(function (row, i) {
        // Specify how data will be rendered
        var cells = row.data.map(function (cell, j) {
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
            }
          } // for county names, append an asterisk if it's an outlier


          if (j === 0 && row.outlier) cell += "*";
          return new CellType(cell, _this11.classNames[j], _this11.headers[j]);
        });
        var isHidden = _this11.isTruncated && numVisibleRows >= 10 || row.outlier && !_this11.showOutliers || !_this11.matchesSearchTerm(row);
        if (!isHidden) numVisibleRows++;
        return new BodyRow(cells, row.outlier, isHidden);
      });
    }
  }, {
    key: "matchesSearchTerm",
    value: function matchesSearchTerm(row) {
      var _this12 = this;

      if (this.searchTerms.length == 0) {
        return true;
      }

      return this.searchTerms.some(function (searchTerm) {
        return row.data.some(function (value, i) {
          return (// Search term is selected from dropdown so
            // is guaranteed to be equal to a value
            _this12.searchCols[i] && value.toLowerCase() === searchTerm.toLowerCase()
          );
        });
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
    key: "toNumber",
    value: function toNumber(data) {
      var value = _typeof(data) === "object" ? data["value"] : data;
      return Number(value.replace ? value.replace(/[^\d.-]/g, "") : value);
    }
  }, {
    key: "sort",
    value: function sort(initialSort) {
      var _this13 = this;

      if (!initialSort) this.header.clearedSortedCells();
      this.data.sort(function (a, b) {
        var i = _this13.toNumber(a.data[_this13.sortCol]);

        var j = _this13.toNumber(b.data[_this13.sortCol]);

        if (i < j) {
          return _this13.sortDir * -1;
        } else if (i > j) {
          return _this13.sortDir;
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
      var _this14 = this;

      if (!this.isVisible) {
        this.container.classList.add("hidden");
      } else {
        this.container.classList.remove("hidden"); // clear rows

        var tbody = this.element.getElementsByTagName("tbody")[0];
        tbody.textContent = ""; // repopulate with updated rows

        this.rows.forEach(function (row) {
          row.render(_this14.sortCol);
          tbody.appendChild(row.element);
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
exports.BAIL_RACE_AMOUNT_DATA = exports.ROR_RATE_DATA = exports.BAIL_RACE_RATE_DATA = exports.BAIL_RATE_DATA = void 0;

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
},{}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _Table = require("./classes/Table.js");

var _data = require("./data.js");

/* TABLE CREATION FUNCTIONS */
var createBailRateTable = function createBailRateTable() {
  var columnConfigs = [{
    class: "county-name-cell",
    header: "County",
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
    header: "Cash Bail Rate (%)",
    sortable: true,
    searchable: false
  }, {
    class: "bail-cases-cell number-cell",
    header: "Cash Bail Cases",
    sortable: true,
    searchable: false
  }, {
    class: "total-cases-cell number-cell",
    header: "Total Cases",
    sortable: true,
    searchable: false
  }];
  var initSort = 2; // initially sort by cash bail rate

  var tableContainer = document.getElementById("bail-rate-container");
  return new _Table.Table(_data.BAIL_RATE_DATA, columnConfigs, initSort, tableContainer, false);
};

var createRorRateTable = function createRorRateTable() {
  var columnConfigs = [{
    class: "county-name-cell",
    header: "County",
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
    header: "ROR Bail Rate (%)",
    sortable: true,
    searchable: false
  }, {
    class: "ror-cases-cell number-cell",
    header: "ROR Cases",
    sortable: true,
    searchable: false
  }, {
    class: "total-cases-cell number-cell",
    header: "Total Cases",
    sortable: true,
    searchable: false
  }];
  var initSort = 2; // initially sort by ror bail rate

  var tableContainer = document.getElementById("ror-rate-container");
  return new _Table.Table(_data.ROR_RATE_DATA, columnConfigs, initSort, tableContainer, false);
};

var createBailRaceRateTable = function createBailRaceRateTable() {
  var columnConfigs = [{
    class: "county-name-cell",
    header: "County",
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
    header: "% Cash Bail Black",
    sortable: true,
    searchable: false
  }, {
    class: "bail-white-cell number-cell",
    header: "% Cash Bail White",
    sortable: true,
    searchable: false
  }, {
    class: "diff-cell number-cell",
    header: "Diff",
    sortable: true,
    searchable: false
  }];
  var initSort = 4; // initially sort by difference

  var tableContainer = document.getElementById("bail-race-rate-container");
  return new _Table.Table(_data.BAIL_RACE_RATE_DATA, columnConfigs, initSort, tableContainer, false);
};

var createBailRaceAmountTable = function createBailRaceAmountTable() {
  var columnConfigs = [{
    class: "county-name-cell",
    header: "County",
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
    header: "Bail Amt Black",
    sortable: true,
    searchable: false
  }, {
    class: "bail-white-cell number-cell",
    header: "Bail Amt White",
    sortable: true,
    searchable: false
  }, {
    class: "diff-cell number-cell",
    header: "Diff",
    sortable: true,
    searchable: false
  }];
  var initSort = 4; // initially sort by difference

  var tableContainer = document.getElementById("bail-race-amount-container");
  return new _Table.Table(_data.BAIL_RACE_AMOUNT_DATA, columnConfigs, initSort, tableContainer, false);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57775" + '/');

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