import { configureTooltip } from "./Tooltip";
import { toMoney, toPercent, toNumberString, getSizing } from "../helpers";
import {
  VIEW_ALL,
  VIEW_LESS,
  NUM_TRUNCATED_ROWS,
  CARET_SVG,
  ARROW_SVG,
  SMALL_PHONE
} from "../constants";

class Cell {
  constructor(className) {
    this.className = className;
  }

  render() {
    this.element = document.createElement("td");
    this.setElementClass(this.className);
  }

  getClassName() {
    return this.className;
  }

  setElementClass(className) {
    this.element.className = className;
  }

  addElementClass(className) {
    this.element.classList.add(className);
  }
}

class TextCell extends Cell {
  constructor(content, className) {
    super(className);
    this.content = content;
    this.render();
  }

  render() {
    super.render();
    this.element.appendChild(document.createTextNode(this.content));
  }
}

class LinkCell extends Cell {
  constructor(content, className) {
    super(className);
    this.content = document.createElement("a");
    this.content.className = "retention-fee-link";
    this.content.href = content.href;
    this.content.target = "_blank";
    this.content.innerHTML = `${content.text} ${ARROW_SVG}`;
    this.render();
  }

  render() {
    super.render();
    this.element.appendChild(this.content);
  }
}

class FootnoteCell extends Cell {
  constructor(content, className) {
    super(className);
    this.content = document.createElement("span");
    this.content.innerText = content.text;
    const footnote = document.createElement("sup");
    footnote.innerText = content.number;
    this.content.appendChild(footnote);
    this.render();
  }

  render() {
    super.render();
    this.element.appendChild(this.content);
  }
}

class NumberCell extends Cell {
  constructor(content, className, data) {
    super(className);
    this.data = data;
    this.content = this.formatValue(content);
    this.render();
  }

  formatValue(value) {
    const sign = this.data.showSigns ? value > 0 ? "+" : "" : "";
    if (this.data.unit === "percent") return `${sign}${toPercent(value)}`;
    if (this.data.unit === "dollars") return `${sign}${toMoney(value)}`;
    return `${sign}${toNumberString(value)}`;
  }

  render() {
    super.render();
    this.element.appendChild(document.createTextNode(this.content));
  }
}

class BarGraphCell extends Cell {
  constructor(content, className, data) {
    super(className);
    // BarGraphCell should only ever be passed one number
    this.content = content.values[0];
    this.average = data.averages[0].value;
    this.range = data;
    this.showDiff = data.showDiff;
    this.render();
  }

  render() {
    super.render();
    // create the horizontal bar and scale its width by the value and range
    const bar = document.createElement("div");
    bar.className = "viz-bar";
    bar.style.width = `${(this.content / this.range.end) * 100}%`;
    // label the bar with the difference between value and average
    if (this.showDiff) {
      const label = document.createElement("div");
      const diff = this.content - this.average;
      label.textContent = `${diff.toFixed(1)}`;
      if (diff > 0) {
        label.textContent = `+${label.textContent}`;
      }
      label.className = "bar-label";
      bar.appendChild(label);
    }
    this.element.appendChild(bar);
    // add the vertical line denoting the average
    const averageLine = document.createElement("div");
    averageLine.className = "bar-average-line gray";
    averageLine.style.left = `${(this.average / this.range.end) * 100}%`;
    this.element.appendChild(averageLine);
  }
}

class DistributionBarCell extends Cell {
  constructor(content, className) {
    super(className);
    this.values = content.values;
    this.tooltipValues = [
      this.values.reduce((obj, { value, className }) => {
        obj[className] = value;
        return obj;
      }, {})
    ];

    const createHeader = (hdr, colorClassName) => {
      const container = document.createElement("div");
      container.style.display = "flex";
      container.style.alignItems = "center";
      const colorBox = document.createElement("div");
      colorBox.classList.add("color-box");
      colorBox.classList.add(colorClassName);
      colorBox.style.marginRight = "10px";
      const text = document.createElement("div");
      text.innerText = hdr;
      container.appendChild(colorBox);
      container.appendChild(text);
      return container;
    };

    this.renderTooltip = configureTooltip({
      rows: this.values.map((v) => ({
        rowHeader: createHeader(v.name, v.className),
        dataKey: v.className,
        render: (value) => toPercent(value)
      })),
      placement: "top",
      followCursor: true
    });
    this.tooltipName = content.name;
    this.render();
  }

  render() {
    super.render();
    const container = document.createElement("div");
    container.className = "dist-bar-container";
    // create bars for each distribution
    this.values.forEach((dist) => {
      const bar = document.createElement("div");
      bar.className = `viz-bar ${dist.className}`;
      container.appendChild(bar);
    });
    // configure sizes of distribution bars
    const distWidths = this.values.map((dist) => `${dist.value * 100}%`);
    container.style.gridTemplateColumns = distWidths.join(" ");
    this.renderTooltip(container, this.tooltipValues, this.tooltipName);
    this.element.appendChild(container);
  }
}

class NumberLineCell extends Cell {
  constructor(content, className, data) {
    super(className);
    this.content = content.values;
    this.averages = data.averages;
    this.range = data;
    this.vizColors = ["black-race", "white-race"];
    this.render();
  }

  render() {
    super.render();
    // create the number line
    const bar = document.createElement("div");
    bar.className = "viz-number-line";
    this.element.appendChild(bar);
    // create the points on the number line
    this.content.forEach((value, i) => {
      const point = document.createElement("div");
      point.className = `viz-number-line-point ${this.vizColors[i]}`;
      point.style.left = `calc(${
        ((value - this.range.start) / this.range.end) * 100
      }% - 2px)`;
      this.element.appendChild(point);
    });
    // add the vertical line denoting the average
    this.averages.forEach((average, i) => {
      const averageLine = document.createElement("div");
      averageLine.className = `bar-average-line ${this.vizColors[i]}`;
      averageLine.style.left = `${
        ((average.value - this.range.start) / this.range.end) * 100
      }%`;
      this.element.appendChild(averageLine);
    });
  }
}

class HeaderCell extends Cell {
  constructor(content, className, sortCol, sortDir, initSort, table, id) {
    super(className);
    this.content = content;
    this.sortCol = sortCol;
    this.sortDir = sortDir;
    this.initSort = initSort;
    this.table = table;
    this.id = id;
    this.sizing;
    this.render();

    // add event listener for sorting
    if (this.sortCol) {
      this.element.addEventListener("click", () => {
        // always default to descending sort
        if (this.table.sortCol !== this.id) this.sortDir = -1;
        const classNameWithSort = this.getClassName();
        this.table.setSortColumn(this.id);
        this.table.setSortDirection(this.sortDir);
        this.table.sort(false);
        // after sorting set the class to ensure its the only column highlighted
        this.setElementClass(classNameWithSort, true);
        // toggle sort direction for the next click
        this.sortDir *= -1;
      });
    }

    // if we're initializing this sort, update sortDir for the next click
    if (this.initSort) {
      this.sortDir *= -1;
    }
  }

  render() {
    const cell = document.createElement("th");
    cell.className = this.className;
    this.element = cell;
    if (this.sortCol) {
      const classNameWithSort = this.getClassName();
      this.setElementClass(classNameWithSort, this.initSort);

      // if this is a sortable column, create wrapper with caret and text
      const wrapper = document.createElement("div");
      wrapper.className = "th-wrapper";
      const text = document.createElement("div");
      text.appendChild(document.createTextNode(this.content));
      if (this.id === 0) {
        wrapper.appendChild(text);
        wrapper.innerHTML = wrapper.innerHTML + CARET_SVG;
      } else {
        wrapper.innerHTML = CARET_SVG;
        wrapper.appendChild(text);
      }
      cell.appendChild(wrapper);
    } else {
      // otherwise, all we need is the text
      cell.appendChild(document.createTextNode(this.content));
    }
  }

  getClassName() {
    const sortClass =
      this.sortDir > 0 ? "sort-asc" : this.sortDir < 0 ? "sort-desc" : "";
    return `${this.className} ${sortClass}`;
  }

  setElementClass(className, addSorted) {
    const sorted = addSorted ? "sorted" : "";
    super.setElementClass(`${className} ${sorted}`);
  }
}

class VizHeaderCell extends HeaderCell {
  constructor(data, className, sortCol, sortDir, initSort, table, id) {
    super(data, className, sortCol, sortDir, initSort, table, id);
  }

  formatValue(value) {
    if (this.content.unit === "percent") return toPercent(value, 0, false);
    if (this.content.unit === "dollars") return toMoney(value, 0);
    return toNumberString(value);
  }

  render() {
    // set up tick elements to adjust position on window resize
    this.sizing = getSizing(window.innerWidth);
    window.addEventListener("resize", () => this.updateTickElements());

    const cell = document.createElement("th");
    cell.className = this.className;
    const startText = this.formatValue(this.content.start);
    const endText = this.formatValue(this.content.end);
    const startElement = this.createTickElement(startText, "start-num");
    const endElement = this.createTickElement(endText, "end-num");
    // add all the elements to the cell
    [startElement, endElement].forEach((element) => {
      cell.appendChild(element);
    });
    this.element = cell;
  }

  createTickElement(content, className, averageColor) {
    const wrapper = document.createElement("div");
    wrapper.className = className;
    const text = document.createElement("div");
    text.innerHTML = content;
    if (className.includes("average")) text.className = "average-text";
    wrapper.appendChild(text);
    // adjust padding based on number of digits
    if (className === "start-num" && content.length === 1) {
      wrapper.style.paddingLeft = "10px";
    } else if (className === "end-num") {
      wrapper.style.paddingRight = `${13 - 3 * content.length}px`;
      wrapper.style.marginRight = this.getEndNumMargin();
      this.endNum = wrapper;
    }

    // create the vertical tick underneath the number
    const line = document.createElement("div");
    line.className = `${
      className.includes("average") ? "average-line" : "viz-line"
    }`;
    if (averageColor) line.className += ` ${averageColor}`;
    wrapper.appendChild(line);
    return wrapper;
  }

  updateTickElements() {
    const prevSizing = this.sizing;
    this.sizing = getSizing(window.innerWidth);
    if (prevSizing !== this.sizing) {
      this.endNum.style.marginRight = this.getEndNumMargin();
    }
  }

  getEndNumMargin() {
    return this.sizing === SMALL_PHONE ? "0" : "-13px";
  }
}

class HeaderRow {
  constructor(cells) {
    this.cells = cells;
    this.render();
  }

  render() {
    const row = document.createElement("tr");
    this.cells.forEach((cell) => {
      row.appendChild(cell.element);
    });
    this.element = row;
  }

  clearedSortedCells() {
    this.cells.forEach((cell) => {
      const className = cell.getClassName();
      cell.setElementClass(className, false);
    });
  }
}

class BodyRow {
  constructor(cells, outlier, isHidden, className = "") {
    this.cells = cells;
    this.outlier = outlier;
    this.isHidden = isHidden;
    this.className = className;
  }

  setIsHidden(isHidden) {
    this.isHidden = isHidden;
  }

  // Returns a list of DOM nodes to add to table body
  render(sorted) {
    const row = document.createElement("tr");
    this.element = row;
    if (this.isHidden) {
      return [];
    }

    row.className = this.className;
    this.cells.forEach((cell, i) => {
      cell.setElementClass(cell.className);
      if (i === sorted) cell.addElementClass("sorted");
      row.appendChild(cell.element);
    });
    return [this.element];
  }
}

class CollapsibleBodyRow extends BodyRow {
  constructor(cells, outlier, collapseRows, isHidden, isCollapsed) {
    super(cells, outlier, isHidden);
    this.isCollapsed = isCollapsed;
    this.collapseRows = collapseRows;
  }

  render(sorted) {
    const rowElements = super.render(sorted);
    this.element.className = `collapsible ${
      this.isCollapsed ? "collapsed" : "expanded"
    }`;
    if (rowElements.length > 0) {
      const rowNode = rowElements[0];
      const caretCell = rowNode.firstChild;
      caretCell.innerHTML = CARET_SVG;
      if (this.isCollapsed) {
        caretCell.classList.add("caret-rotated");
      } else {
        caretCell.classList.remove("caret-rotated");
      }
    }
    const subRowElements = this.collapseRows.flatMap((row) =>
      row.render(sorted)
    );

    return [...rowElements, ...subRowElements];
  }
}

export class Table {
  constructor(
    data,
    columnConfigs,
    initSort,
    tableContainer,
    summaryRowData = [],
    isVisible = true,
    showOutliers = true
  ) {
    this.classNames = columnConfigs.map((config) => config.class);
    this.headers = columnConfigs.map((config) => config.header);
    this.data = data;
    this.container = tableContainer;
    this.element = tableContainer.getElementsByTagName("table")[0];
    this.showOutliers = showOutliers;
    this.summaryRowData = summaryRowData;

    this.validate();
    this.searchCols = columnConfigs.map((config) => config.searchable);
    this.searchTerms = [];
    this.isTruncated = true;

    this.sortCols = columnConfigs.map((config) => config.sortable);
    // start with sorting descending
    this.sortCol = initSort.col;
    this.sortDir = initSort.dir;

    this.isVisible = isVisible;
    this.header = this.getHeaderRow();

    this.init(); // Initial table DOM setup
    this.sort(true); // this initial sort populates this.rows
  }

  validate() {
    if (this.classNames.length !== this.headers.length) {
      throw new Error("Number of class names does not match number of headers");
    }
    if (this.data.some((row) => row.data.length != this.headers.length)) {
      throw new Error(`${this.headers.length} columns of data required`);
    }
  }

  init() {
    // create header row
    const thead = this.element.getElementsByTagName("thead")[0];
    thead.appendChild(this.header.element);

    // set up search bar
    const searchMenu = this.container.getElementsByClassName("menu")[0];
    let searchOptions = this.data.flatMap((row) => {
      const rowOptions = row.data.flatMap((value, i) =>
        this.searchCols[i] ? [value] : []
      );
      const subRowOptions = row.collapseData
        ? row.collapseData.map((subRow) => subRow.data[1])
        : [];
      return rowOptions.concat(subRowOptions);
    });
    // Current behavior is to alphabetically sort all options,
    // potentially mixing values from different columns
    // TODO: Consider dividing values by column
    searchOptions.sort();
    searchMenu.textContent = "";
    searchOptions.forEach((searchOption) => {
      const element = document.createElement("div");
      element.className = "item";
      element.innerText = searchOption;
      searchMenu.appendChild(element);
    });
    const searchInput = this.container.getElementsByTagName("input")[0];
    searchInput.addEventListener("change", (e) => {
      const searchValue = e.target.value;
      this.searchTerms = searchValue.split(";").filter((s) => s !== "");
      this.rows = this.getRows();
      this.render();
    });

    // set up view all button
    const viewAllButton =
      this.container.getElementsByClassName("view-all-btn")[0];
    viewAllButton.innerText = this.isTruncated ? VIEW_ALL : VIEW_LESS;
    viewAllButton.addEventListener("click", () => {
      this.isTruncated = !this.isTruncated;
      viewAllButton.innerText = this.isTruncated ? VIEW_ALL : VIEW_LESS;
      this.rows = this.getRows();
      this.render();
    });

    // set up outlier button
    const outlierButtons =
      this.container.getElementsByClassName("outliers-btn");
    if (outlierButtons.length > 0) {
      const outlierButton = outlierButtons[0];

      outlierButton.addEventListener("click", (e) => {
        if (this.toggleOutliers()) {
          e.target.classList.add("showing");
        } else {
          e.target.classList.remove("showing");
        }
      });
    }
  }

  getHeaderRow() {
    const headerCells = this.headers.map((header, i) => {
      const CellType = "text" in header ? HeaderCell : VizHeaderCell;
      return new CellType(
        CellType === HeaderCell ? header.text : header,
        this.classNames[i],
        this.sortCols[i],
        // 1 designates ascending; -1, descending (default); 0, not sortable
        this.sortCols[i] ? this.sortDir : 0,
        i === this.sortCol,
        this,
        i
      );
    });
    return new HeaderRow(headerCells);
  }

  getCells(data, isOutlier) {
    return data.map((cell, j) => {
      let CellType = TextCell;
      if (typeof cell == "number") {
        CellType = NumberCell;
      } else if (typeof cell == "object") {
        if (cell.type === "bar") {
          CellType = BarGraphCell;
        } else if (cell.type === "line") {
          CellType = NumberLineCell;
        } else if (cell.type === "dist") {
          CellType = DistributionBarCell;
        } else if (cell.type === "link") {
          CellType = LinkCell;
        } else if (cell.type === "footnote") {
          CellType = FootnoteCell;
        }
      }
      // for county names, append an asterisk if it's an outlier
      // there could be an empty column for carets, ignore those
      if (typeof cell === "string" && cell.length > 0 && j <= 1 && isOutlier)
        cell += "*";
      return new CellType(cell, this.classNames[j], this.headers[j]);
    });
  }

  isSearching() {
    return this.searchTerms.length > 0;
  }

  getRows() {
    let numVisibleRows = 0;
    const rows = this.data.map((row) => {
      // Specify how data will be rendered
      const cells = this.getCells(row.data, row.outlier);
      const isRowSearched = this.searchTerms.some((searchTerm) =>
        row.data.some(
          (value, i) =>
            // Search term is selected from dropdown so
            // is guaranteed to be equal to a value
            this.searchCols[i] &&
            value.toLowerCase() === searchTerm.toLowerCase()
        )
      );
      const isTruncated =
        this.isTruncated && numVisibleRows >= NUM_TRUNCATED_ROWS;
      const isHiddenOutlier = row.outlier && !this.showOutliers;
      const isRowVisible = isRowSearched || (
        !isTruncated && !isHiddenOutlier && !this.isSearching()
      );
      if (row.collapseData !== undefined && row.collapseData.length > 0) {
        const collapseRows = row.collapseData.map((collapseRow) => {
          const isSubRowSearched = this.searchTerms.some(
            (searchTerm) =>
              // For simplicity, only the first sub-row column is searchable
              collapseRow.data[1].toLowerCase() === searchTerm.toLowerCase()
          );
          const isSubRowHiddenOutlier = collapseRow.outlier && !this.showOutliers;
          const isSubRowVisible = isSubRowSearched || (
            !row.isCollapsed && !isSubRowHiddenOutlier && !this.isSearching()
          );
          return new BodyRow(
            this.getCells(collapseRow.data, collapseRow.outlier),
            collapseRow.outlier,
            !isSubRowVisible
          );
        });
        const hasVisibleChildRow = collapseRows.some(bodyRow => !bodyRow.isHidden);
        const isParentRowVisible = isRowVisible || hasVisibleChildRow;
        if (isParentRowVisible)
          numVisibleRows += collapseRows.reduce(
            (acc, bodyRow) => (!bodyRow.isHidden ? acc + 1 : acc),
            1
          );
        return new CollapsibleBodyRow(
          cells,
          row.outlier,
          collapseRows,
          !isParentRowVisible,
          !hasVisibleChildRow && row.isCollapsed
        );
      } else {
        if (isRowVisible) numVisibleRows++;
        return new BodyRow(cells, row.outlier, !isRowVisible);
      }
    });
    if (this.summaryRowData.length > 0) {
      const cells = this.getCells(this.summaryRowData);
      rows.unshift(new BodyRow(cells, false, false, "summary-row"));
    }
    return rows;
  }

  setSortColumn(i) {
    this.sortCol = i;
  }

  setSortDirection(sortDir) {
    this.sortDir = sortDir;
  }

  getSortable(data) {
    if (typeof data === "object" || /\d/.test(data)) {
      const value = typeof data === "object" ? data.value : data;
      return Number(value.replace ? value.replace(/[^\d.-]/g, "") : value);
    }
    return data;
  }

  sort(initialSort) {
    if (!initialSort) this.header.clearedSortedCells();

    this.data.sort((a, b) => {
      const val1 = a.data[this.sortCol];
      const val2 = b.data[this.sortCol];
      // Determine if value is treated as a number or a string
      const i = this.getSortable(val1);
      const j = this.getSortable(val2);
      if (i < j) {
        return this.sortDir * -1;
      } else if (i > j) {
        return this.sortDir;
      } else {
        return 0;
      }
    });
    this.rows = this.getRows();
    this.render();
  }

  toggleOutliers() {
    this.showOutliers = !this.showOutliers;
    this.rows = this.getRows();
    this.render();
    return this.showOutliers;
  }

  hide() {
    this.isVisible = false;
    this.render();
  }

  show() {
    this.isVisible = true;
    this.render();
  }

  render() {
    if (!this.isVisible) {
      this.container.classList.add("hidden");
    } else {
      this.container.classList.remove("hidden");

      // clear rows
      const tbody = this.element.getElementsByTagName("tbody")[0];
      tbody.textContent = "";

      // repopulate with updated rows
      this.rows.forEach((row, i) => {
        const domNodes = row.render(this.sortCol);
        domNodes.forEach((node) => tbody.appendChild(node));

        // set up collapse toggle
        if (row instanceof CollapsibleBodyRow) {
          row.element.addEventListener("click", () => {
            this.data[i].isCollapsed = !row.isCollapsed;
            this.rows = this.getRows();
            this.render();
          });
        }
      });

      // hide "view all" button when it wouldn't change table
      const viewAllButton =
        this.container.getElementsByClassName("view-all-btn")[0];
      const numVisibleRows = this.rows.filter((row) => !row.isHidden).length;
      if (numVisibleRows < NUM_TRUNCATED_ROWS) {
        viewAllButton.classList.add("hidden");
      } else {
        viewAllButton.classList.remove("hidden");
      }
    }
  }
}

export class SwitchableTable {
  constructor(leftTable, rightTable, container) {
    this.leftTable = leftTable;
    this.rightTable = rightTable;
    this.container = container;

    // set up switch buttons
    const rightSwitch = this.leftTable.container
      .getElementsByClassName("switch-container")[0]
      .getElementsByClassName("right")[0];
    rightSwitch.addEventListener("click", this.showRightTable.bind(this));

    const leftSwitch = this.rightTable.container
      .getElementsByClassName("switch-container")[0]
      .getElementsByClassName("left")[0];
    leftSwitch.addEventListener("click", this.showLeftTable.bind(this));

    // show left table by default
    this.showLeftTable();
  }

  showLeftTable() {
    this.leftTable.show();
    this.rightTable.hide();
  }

  showRightTable() {
    this.rightTable.show();
    this.leftTable.hide();
  }
}
