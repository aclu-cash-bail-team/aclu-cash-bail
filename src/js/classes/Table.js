const VIEW_ALL = "view all";
const VIEW_LESS = "view less";
const NUM_TRUNCATED_ROWS = 10;
const CARET_SVG = `<svg class="caret" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0.999999L4 4L1 1" stroke="white" stroke-miterlimit="10"/>
</svg>`;

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


class StyledTextCell extends Cell {
  constructor(content, className) {
    super(`${className} ${content["className"]}`);
    this.content = content["value"].toLocaleString();
    this.render();
  }

  render() {
    super.render();
    this.element.appendChild(document.createTextNode(this.content));
  }
}


class NumberCell extends Cell {
  constructor(content, className) {
    super(className);
    this.content = content % 1 === 0 ? content.toLocaleString() : content.toFixed(1);
    this.render();
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
    this.content = content["values"][0];
    this.average = data["averages"][0]["value"];
    this.range = data;
    this.render();
  }

  render() {
    super.render();
    // create the horizontal bar and scale its width by the value and range
    const bar = document.createElement("div");
    bar.className = "viz-bar";
    bar.style.width = `${this.content / this.range["end"] * 100}%`;
    // label the bar with the difference between value and average
    const label = document.createElement("div");
    const diff = this.content - this.average;
    label.textContent = `${diff > 0 ? "+" : ""}${diff.toFixed(1)}`;
    label.className = "bar-label";
    bar.appendChild(label);
    this.element.appendChild(bar);
    // add the vertical line denoting the average
    const averageLine = document.createElement("div");
    averageLine.className = "bar-average-line green";
    averageLine.style.left = `${this.average / this.range["end"] * 100}%`;
    this.element.appendChild(averageLine);
  }
}


class DistributionBarCell extends Cell {
  constructor(content, className) {
    super(className);
    this.content = content["values"];
    this.render();
  }

  render() {
    super.render();
    // create bars for each distribution
    this.content.forEach(dist => {
      const bar = document.createElement("div");
      bar.className = `viz-bar ${dist["className"]}`;
      this.element.appendChild(bar);
    });
    // configure sizes of distribution bars
    const numDists = this.content.length;
    const [gapSize, gapUnits] = [2, "px"];
    const gapCorrection = Math.round(((numDists - 1) * gapSize) / numDists);
    const distWidths = this.content.map((dist) =>
      `calc(${dist["value"]}% - ${gapCorrection}${gapUnits})`
    );
    this.element.style.display = "inline-grid";
    this.element.style.columnGap = `${gapSize}${gapUnits}`;
    this.element.style.gridTemplateColumns = distWidths.join(" ");
  }
}


class NumberLineCell extends Cell {
  constructor(content, className, data) {
    super(className);
    this.content = content["values"];
    this.averages = data["averages"];
    this.range = data;
    this.vizColors = ["green", "purple"];
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
      point.style.left = `${(value - this.range["start"]) / this.range["end"] * 100}%`;
      this.element.appendChild(point);
    });
    // add the vertical line denoting the average
    this.averages.forEach((average, i) => {
      const averageLine = document.createElement("div");
      averageLine.className = `bar-average-line ${this.vizColors[i]}`;
      averageLine.style.left = `${(average["value"] - this.range["start"]) / this.range["end"] * 100}%`;
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
    this.render();

    // add event listener for sorting
    if (this.sortCol) {
      this.element.addEventListener("click", () => {
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
      wrapper.innerHTML = CARET_SVG;
      const text = document.createElement("div");
      text.appendChild(document.createTextNode(this.content));
      wrapper.appendChild(text);
      cell.appendChild(wrapper);
    } else {
      // otherwise, all we need is the text
      cell.appendChild(document.createTextNode(this.content));
    }
  }

  getClassName() {
    const sortClass = this.sortDir > 0 ? "sort-asc" :
      this.sortDir < 0 ? "sort-desc" : "";
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

  render() {
    const vizColors = ["green", "purple"];
    const start = this.content["start"];
    const end = this.content["end"];
    const averages = this.content["averages"];
    const unit = this.content["unit"];

    const cell = document.createElement("th");
    cell.className = this.className;
    // create start, end, and average tick/number elements
    const startText = unit === "dollars" ? `$${Math.round(start / 1000)}K` : start;
    const endText = unit === "dollars" ? `$${Math.round(end / 1000)}K` : end;
    const startElement = this.createTickElement(startText, "start-num");
    const endElement = this.createTickElement(endText, "end-num");
    const multiple = averages.length > 1;
    const averageElements = averages.map((average, i) => {
      let text = "";
      if (unit === "percent") {
        text = `${average["name"]}<br>${average["value"].toFixed(1)}%`;
      } else if (unit === "dollars") {
        text =`${average["name"]}<br>$${Math.round(average["value"] / 1000)}K`;
      }
      const className = `average ${average["name"].toLowerCase()}`;
      return this.createTickElement(text, className, vizColors[i]);
    });
    // create wrapper around averages for positioning
    const averageWrapper = document.createElement("div");
    averageWrapper.className = "average-wrapper";
    // offset the average elements by the value/end ratio (and subtract padding)
    averageElements.forEach((element, i) => {
      element.style.left = `calc(${(averages[i]["value"] - start) / end * 100}%)`;
      averageWrapper.appendChild(element);
    });
    // add all the elements to the cell
    [startElement, endElement, averageWrapper].forEach(element => {
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
    if (className === "start-num" && content.toString().length === 1) {
      wrapper.style.paddingLeft = `${4}px`;
    }

    // create the vertical tick underneath the number
    const line = document.createElement("div");
    line.className = `${className.includes("average") ? "average-line" : "viz-line"}`;
    if (averageColor) line.className += ` ${averageColor}`;
    wrapper.appendChild(line);
    return wrapper;
  }
}


class HeaderRow {
  constructor(cells) {
    this.cells = cells;
    this.render();
  }

  render() {
    const row = document.createElement("tr");
    this.cells.forEach(cell => {
      row.appendChild(cell.element);
    });
    this.element = row;
  }

  clearedSortedCells() {
    this.cells.forEach(cell => {
      const className = cell.getClassName();
      cell.setElementClass(className, false);
    });
  }
}


class BodyRow {
  constructor(cells, outlier, isHidden) {
    this.cells = cells;
    this.outlier = outlier;
    this.isHidden = isHidden;
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

    row.className = "";
    this.cells.forEach((cell, i) => {
      cell.setElementClass(
        i === sorted ? `${cell.className} sorted` : cell.className
      );
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
    this.element.className = `collapsible ${this.isCollapsed ? "collapsed" : "expanded"}`;
    if (rowElements.length > 0) {
      const rowNode = rowElements[0];
      const caretCell = rowNode.firstChild;
      caretCell.innerHTML = CARET_SVG;
      if (this.isCollapsed) {
        caretCell.addClass("caret-rotated");
      } else {
        caretCell.removeClass("caret-rotated");
      }
    }
    const subRowElements = this.collapseRows.flatMap(row => row.render(sorted));

    return [...rowElements, ...subRowElements];
  }
}

export class Table {
  constructor(data, columnConfigs, initSort, tableContainer, isVisible = true) {
    this.classNames = columnConfigs.map((config) => config.class);
    this.headers = columnConfigs.map((config) => config.header);
    this.data = data;
    this.container = tableContainer;
    this.element = tableContainer.getElementsByTagName("table")[0];
    this.showOutliers = false;

    this.validate();
    this.searchCols = columnConfigs.map((config) => config.searchable);
    this.searchTerms = [];
    this.isTruncated = true;

    this.sortCols = columnConfigs.map((config) => config.sortable);
    // start with sorting descending
    this.sortCol = initSort;
    this.sortDir = -1;

    this.isVisible = isVisible;
    this.header = this.getHeaderRow();

    this.init(); // Initial table DOM setup
    this.sort(true); // this initial sort populates this.rows

  }

  validate() {
    if (this.classNames.length !== this.headers.length) {
      throw new Error("Number of class names does not match number of headers");
    }
    if (this.data.some(row => row.data.length != this.headers.length)) {
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
      const rowOptions = row.data.flatMap((value, i) => this.searchCols[i] ? [value] : []);
      const subRowOptions = row.collapseData ? row.collapseData.map(subRow => subRow.data[1]) : [];
      return rowOptions.concat(subRowOptions);
    });
    // Current behavior is to alphabetically sort all options,
    // potentially mixing values from different columns
    // TODO: Consider dividing values by column
    searchOptions.sort();
    searchMenu.textContent = "";
    searchOptions.forEach(searchOption => {
      const element = document.createElement("div");
      element.className = "item";
      element.innerText = searchOption;
      searchMenu.appendChild(element);
    });
    const searchInput = this.container.getElementsByTagName("input")[0];
    searchInput.addEventListener("change", e => {
      const searchValue = e.target.value;
      this.searchTerms = searchValue.split(";").filter(s => s !== "");
      this.rows = this.getRows();
      this.render();
    });

    // set up view all button
    const viewAllButton = this.container.getElementsByClassName("view-all-btn")[0];
    viewAllButton.innerText = this.isTruncated ? VIEW_ALL : VIEW_LESS;
    viewAllButton.addEventListener("click", () => {
      this.isTruncated = !this.isTruncated;
      viewAllButton.innerText = this.isTruncated ? VIEW_ALL : VIEW_LESS;
      this.rows = this.getRows();
      this.render();
    });

    // set up outlier button
    const outlierButtons = this.container.getElementsByClassName("outliers-btn");
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
      const CellType = typeof(header) == "string" ? HeaderCell : VizHeaderCell;
      return new CellType(
        header,
        this.classNames[i],
        this.sortCols[i],
        // 1 designates ascending; -1, descending (default); 0, not sortable
        this.sortCols[i] ? -1 : 0,
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
      if (typeof(cell) == "number") {
        CellType = NumberCell;
      } else if (typeof(cell) == "object") {
        if (cell["type"] === "bar") {
          CellType = BarGraphCell;
        } else if (cell["type"] === "line") {
          CellType = NumberLineCell;
        } else if (cell["type"] === "styled") {
          CellType = StyledTextCell;
        } else if (cell["type"] === "dist") {
          CellType = DistributionBarCell;
        }
      }
      // for county names, append an asterisk if it's an outlier
      // there could be an empty column for carets, ignore those
      if (typeof(cell) === "string" && cell.length > 0 && j <= 1 && isOutlier) cell += "*";
      return new CellType(cell, this.classNames[j], this.headers[j]);
    });
  }

  getRows() {
    let numVisibleRows = 0;
    return this.data.map(row => {
      // Specify how data will be rendered
      const cells = this.getCells(row.data, row.outlier);
      const isRowSearched = this.searchTerms.some(searchTerm =>
        row.data.some((value, i) =>
          // Search term is selected from dropdown so
          // is guaranteed to be equal to a value
          this.searchCols[i] && value.toLowerCase() === searchTerm.toLowerCase()));
      const isTruncated = (this.isTruncated && numVisibleRows >= NUM_TRUNCATED_ROWS);
      const isHiddenOutlier = row.outlier && !this.showOutliers;
      const isRowVisible = isRowSearched || (!isTruncated && !isHiddenOutlier && this.searchTerms.length === 0);
      if (row.collapseData !== undefined) {
        const collapseRows = row.collapseData.map(collapseRow => {
          const isSubRowSearched = this.searchTerms.some(searchTerm =>
            // For simplicity, only the first sub-row column is searchable
            collapseRow.data[1].toLowerCase() === searchTerm.toLowerCase()
          );
          const isSubRowHiddenOutlier = collapseRow.outlier && !this.showOutliers;
          const isSubRowVisible = isSubRowSearched || (!row.isCollapsed && !isSubRowHiddenOutlier);
          return new BodyRow(this.getCells(collapseRow.data, collapseRow.outlier), collapseRow.outlier, !isSubRowVisible);
        });
        const hasVisibleChildRow = collapseRows.some(bodyRow => !bodyRow.isHidden);
        const isParentRowVisible = isRowVisible || hasVisibleChildRow;
        if (isParentRowVisible) numVisibleRows += collapseRows.reduce((acc, bodyRow) => !bodyRow.isHidden ? acc + 1 : acc, 1);
        return new CollapsibleBodyRow(cells, row.outlier, collapseRows, !isParentRowVisible, !hasVisibleChildRow && row.isCollapsed);
      } else {
        if (isRowVisible) numVisibleRows++;
        return new BodyRow(cells, row.outlier, !isRowVisible);
      }
    });
  }

  setSortColumn(i) {
    this.sortCol = i;
  }

  setSortDirection(sortDir) {
    this.sortDir = sortDir;
  }

  toNumber(data) {
    const value = typeof(data) === "object" ? data["value"] : data;
    return Number(value.replace ? value.replace(/[^\d.-]/g, "") : value);
  }

  sort(initialSort) {
    if (!initialSort) this.header.clearedSortedCells();

    this.data.sort((a, b) => {
      const i = this.toNumber(a.data[this.sortCol]);
      const j = this.toNumber(b.data[this.sortCol]);
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
        domNodes.forEach(node => tbody.appendChild(node));

        // set up collapse toggle
        if (row instanceof CollapsibleBodyRow) {
          row.element.addEventListener("click", () => {
            this.data[i].isCollapsed = !row.isCollapsed;
            this.rows = this.getRows();
            this.render();
          });
        }
      });
    }
  }
}

export class SwitchableTable {
  constructor(leftTable, rightTable, container) {
    this.leftTable = leftTable;
    this.rightTable = rightTable;
    this.container = container;

    // set up switch buttons
    const rightSwitch =
      this.leftTable.container
        .getElementsByClassName("switch-container")[0]
        .getElementsByClassName("right")[0];
    rightSwitch.addEventListener("click", this.showRightTable.bind(this));

    const leftSwitch =
      this.rightTable.container
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
