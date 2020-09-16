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
    this.content = content.toLocaleString();
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
      const text = `${average["name"]}:<br>${average["value"]}%`;
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
  constructor(cells, initialRank) {
    this.cells = cells;
    this.render(initialRank);
  }

  render(rank, sorted) {
    const row = document.createElement("tr");
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
    this.element = row;
  }
}


export class RankedTable {
  constructor(data, columnConfigs, initSort, tableElement) {
    this.classNames = columnConfigs.map((config) => config.class);
    this.headers = columnConfigs.map((config) => config.header);
    this.data = data;
    this.validate(this.data, this.classNames, this.headers);
    this.element = tableElement;

    this.sortCols = columnConfigs.map((config) => config.sortable);
    // start with sorting descending; add one to account for rank
    this.sortCol = initSort + 1;
    this.sortDir = -1;
    this.sort(true); // this initial sort populates this.rows

    this.header = this.getHeaderRow();

    this.render();
  }

  validate(data, classNames, headers) {
    if (classNames.length !== headers.length) {
      throw new Error("Number of class names does not match number of headers");
    }
    if (data.some((row) => row.length != headers.length)) {
      throw new Error(`${headers.length} columns of data required`);
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
    return data.map((row, i) => {
      // Specify how data will be rendered
      const cells = row.map((cell, j) => {
        let CellType = TextCell;
        if (typeof(cell) == "number") CellType = NumberCell;
        if (typeof(cell) == "object") {
          CellType = cell["type"] === "bar" ? BarGraphCell : NumberLineCell;
        }
        return new CellType(cell, this.classNames[j], this.headers[j]);
      });
      return new RankedBodyRow(cells, i + 1);
    });
  }

  setSortColumn(i) {
    this.sortCol = i;
  }

  setSortDirection(sortDir) {
    this.sortDir = sortDir;
  }

  sort(initialSort) {
    if (!initialSort) this.header.clearedSortedCells();

    // data doesn't have rank or spacer, so subtract two from the index
    const dataCol = this.sortCol - 1;
    this.data.sort((a, b) => {
      if (a[dataCol] < b[dataCol]) {
        return this.sortDir * -1;
      } else if (a[dataCol] > b[dataCol]) {
        return this.sortDir;
      } else {
        return 0;
      }
    });
    this.rows = this.getRows(this.data);
    this.updateTable(false);
  }

  updateTable(rankReverse) {
    const tbody = this.element.getElementsByTagName("tbody")[0];
    tbody.textContent = "";

    // repopulate with updated rows
    this.rows.forEach((row, i) => {
      const rank = rankReverse ? this.rows.length - i : i + 1;
      row.render(rank, this.sortCol);
      tbody.appendChild(row.element);
    });
  }

  render() {
    // create header row
    const thead = this.element.getElementsByTagName("thead")[0];
    thead.appendChild(this.header.element);

    // create rows
    const tbody = this.element.getElementsByTagName("tbody")[0];
    this.rows.forEach(row => {
      tbody.appendChild(row.element);
    });
  }
}
