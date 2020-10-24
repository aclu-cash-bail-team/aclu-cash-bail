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
      point.style.left = `${value / this.range["end"] * 100}%`;
      this.element.appendChild(point);
    });
    // add the vertical line denoting the average
    this.averages.forEach((average, i) => {
      const averageLine = document.createElement("div");
      averageLine.className = `bar-average-line ${this.vizColors[i]}`;
      averageLine.style.left = `${average["value"] / this.range["end"] * 100}%`;
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
    cell.appendChild(document.createTextNode(this.content));
    this.element = cell;
    if (this.sortCol) {
      const classNameWithSort = this.getClassName();
      this.setElementClass(classNameWithSort, this.initSort);
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

    const cell = document.createElement("th");
    cell.className = this.className;
    // create start, end, and average tick/number elements
    const startElement = this.createTickElement(start, "start-num");
    const endElement = this.createTickElement(end, "end-num");
    const averageElements = averages.map((average, i) => {
      let text = "";
      if (average["unit"] === "percent") {
        text = `${average["name"]}:<br>${average["value"].toFixed(1)}`;
      } else if (average["unit"] === "dollars") {
        text =`${average["name"]}:<br>$${Math.round(average["value"]).toString().substring(0, 2)}K`;
      }
      const className = "average";
      return this.createTickElement(text, className, vizColors[i]);
    });
    // create wrapper around averages for positioning
    const averageWrapper = document.createElement("div");
    averageWrapper.className = "average-wrapper";
    // offset the average elements by the value/end ratio (and subtract padding)
    averageElements.forEach((element, i) => {
      element.style.left = `calc(${averages[i]["value"] / end * 100}%)`;
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
    if (className === "average") text.className = "average-text";
    wrapper.appendChild(text);
    // adjust padding based on number of digits
    if (className === "start-num" && content.toString().length === 1) {
      wrapper.style.paddingLeft = `${0.25}em`;
    }

    // create the vertical tick underneath the number
    const line = document.createElement("div");
    line.className = `${className === "average" ? "average-line" : "viz-line"}`;
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


class RankedBodyRow {
  constructor(cells, initialRank, outlier, isHidden = false) {
    this.cells = cells;
    this.outlier = outlier;
    this.isHidden = isHidden;
    this.render(initialRank);
  }

  render(rank, sorted) {
    const row = document.createElement("tr");
    if (this.isHidden) {
      row.className = "hidden";
    } else {
      const rankedCells = [
        new TextCell(rank, "rank-cell"),
        ...this.cells
      ];
      rankedCells.forEach((cell, i) => {
        cell.setElementClass(
          i === sorted ? `${cell.className} sorted` : cell.className
        );
        row.appendChild(cell.element);
      });
    }
    this.element = row;
  }
}


export class RankedTable {
  constructor(data, columnConfigs, initSort, tableContainer, isVisible = true) {
    this.classNames = columnConfigs.map((config) => config.class);
    this.headers = columnConfigs.map((config) => config.header);
    this.data = data;
    this.container = tableContainer;
    this.element = tableContainer.getElementsByTagName("table")[0];
    this.showOutliers = false;

    this.validate(this.data, this.classNames, this.headers);
    this.searchCols = columnConfigs.map((config) => config.searchable);
    this.searchTerms = [];
    this.isTruncated = true;

    this.sortCols = columnConfigs.map((config) => config.sortable);
    // start with sorting descending; add one to account for rank
    this.sortCol = initSort + 1;
    this.sortDir = -1;

    this.isVisible = isVisible;
    this.header = this.getHeaderRow();

    this.init(); // Initial table DOM setup
    this.sort(true); // this initial sort populates this.rows

  }

  validate(data, classNames, headers) {
    if (classNames.length !== headers.length) {
      throw new Error("Number of class names does not match number of headers");
    }
    if (data.some(row => row.data.length != headers.length)) {
      throw new Error(`${headers.length} columns of data required`);
    }
  }

  init() {
    // create header row
    const thead = this.element.getElementsByTagName("thead")[0];
    thead.appendChild(this.header.element);

    // set up search bar
    const searchMenu = this.container.getElementsByClassName("menu")[0];
    const searchOptions = this.data.flatMap((row) =>
      row.data.flatMap((value, i) => this.searchCols[i] ? [value] : [])
    );
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
      this.searchTerms = searchValue.split(",").filter(s => s !== "");
      this.rows = this.getRows(this.data);
      this.render(false);
    });

    // set up view all button
    const viewAllButton = this.container.getElementsByClassName("view-all-btn")[0];
    viewAllButton.innerText = this.isTruncated ? "VIEW ALL" : "COLLAPSE";
    viewAllButton.addEventListener("click", () => {
      this.isTruncated = !this.isTruncated;
      viewAllButton.innerText = this.isTruncated ? "VIEW ALL" : "COLLAPSE";
      this.rows = this.getRows(this.data);
      this.render();
    });

    // set up outlier button
    const outlierButtonList = this.container.getElementsByClassName("outliers-btn");
    if (outlierButtonList.length > 0) {
      const outlierButton = outlierButtonList[0];

      outlierButton.addEventListener("click", (e) => {
        const showOutliers = this.toggleOutliers();
        e.target.className = showOutliers ? "outliers-btn showing" : "outliers-btn";
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
        i + 1 === this.sortCol,
        this,
        // adjust ids for rank and space headers
        i + 1
      );
    });
    const headersWithRank = [
      new HeaderCell("Rank", "rank-cell", false, 0, false, this, 0),
      ...headerCells
    ];
    return new HeaderRow(headersWithRank);
  }

  getRows(data) {
    let numVisibleRows = 0;
    return data.map((row, i) => {
      // Specify how data will be rendered
      const cells = row.data.map((cell, j) => {
        let CellType = TextCell;
        if (typeof(cell) == "number") CellType = NumberCell;
        if (typeof(cell) == "object") {
          CellType = cell["type"] === "bar" ? BarGraphCell : NumberLineCell;
        }
        // for county names, append an asterisk if it's an outlier
        if (j === 0 && row.outlier) cell += "*";
        return new CellType(cell, this.classNames[j], this.headers[j]);
      });
      const isHidden = (this.isTruncated && numVisibleRows >= 10) || !this.matchesSearchTerm(row);
      numVisibleRows += isHidden ? 0 : 1;
      return new RankedBodyRow(cells, i + 1, isHidden);
    });
  }

  matchesSearchTerm(row) {
    if (this.searchTerms.length == 0) {
      return true;
    }
    return this.searchTerms.some(searchTerm =>
      row.data.some((value, i) =>
        // Search term is selected from dropdown so
        // is guaranteed to be equal to a value
        this.searchCols[i] && value.toLowerCase() === searchTerm.toLowerCase()
      )
    );
  }

  setSortColumn(i) {
    this.sortCol = i;
  }

  setSortDirection(sortDir) {
    this.sortDir = sortDir;
  }

  sort(initialSort) {
    if (!initialSort) this.header.clearedSortedCells();

    // data doesn't have rank, so subtract one from the index
    const dataCol = this.sortCol - 1;
    this.data.sort((a, b) => {
      // Assumes that we only want to sort numbers, which is fine for now
      // May need to support sorting multiple types
      const i = Number(a.data[dataCol]);
      const j = Number(b.data[dataCol]);
      if (i < j) {
        return this.sortDir * -1;
      } else if (i > j) {
        return this.sortDir;
      } else {
        return 0;
      }
    });
    this.rows = this.getRows(this.data);
    this.render();
  }

  toggleOutliers() {
    this.showOutliers = !this.showOutliers;
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

      // create rows
      const tbody = this.element.getElementsByTagName("tbody")[0];
      tbody.textContent = "";

      // repopulate with updated rows
      let rowRank = 1;
      this.rows.forEach(row => {
        if (!row.outlier || this.showOutliers) {
          row.render(rowRank, this.sortCol);
          tbody.appendChild(row.element);
          rowRank++;
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
