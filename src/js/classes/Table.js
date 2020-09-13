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
  constructor(range, className, sortCol, sortDir, initSort, table, id) {
    super(range, className, sortCol, sortDir, initSort, table, id);
  }

  render() {
    const cell = document.createElement("th");
    cell.className = this.className;
    const startNum = this.createRangeNumSpan(this.content[0], "start-num");
    cell.appendChild(startNum);
    const endNum = this.createRangeNumSpan(this.content[1], "end-num");
    cell.appendChild(endNum);
    this.element = cell;
  }

  createRangeNumSpan(content, className) {
    const num = document.createElement("span");
    num.textContent = content;
    num.className = className;
    // adjust padding based on number of digits
    console.log(content.toString().length);
    if (className === "start-num" && content.toString().length === 1) {
      num.style.paddingLeft = `${0.25}em`;
    }

    // create the vertical tick underneath the number
    const line = document.createElement("span");
    line.className = "viz-line";
    num.appendChild(line);
    return num;
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
    this.classNames = columnConfigs.map((config) => config.class)
    this.headers = columnConfigs.map((config) => config.header)
    this.data = data;
    this.validate(this.data, this.classNames, this.headers);
    this.element = tableElement;

    this.sortCols = columnConfigs.map((config) => config.sortable);
    // start with sorting descending; add one to account for rank
    this.sortCol = initSort + 1;
    this.sortDir = -1;
    this.sort(true); // this initial sort populates this.rows

    this.header = this.getHeaderRow(this.headers);

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

  getHeaderRow(headers) {
    const headerCells = headers.map((header, i) => {
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
        const CellType = typeof(cell) == "number" ? NumberCell : TextCell;
        return new CellType(cell, this.classNames[j]);
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
