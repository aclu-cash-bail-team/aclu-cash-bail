class Cell {
  constructor(className) {
    this.className = className;
  }

  render() {
    this.element = document.createElement("td");
    this.setElementClass();
  }

  setElementClass() {
    this.element.className = this.className;
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
    super(className + " number-cell");
    this.content = content.toLocaleString();
    this.render();
  }

  render() {
    super.render();
    this.element.appendChild(document.createTextNode(this.content));
  }
}


class SpaceCell extends Cell {
  constructor(className, tag) {
    super(className);
    this.tag = tag;
    this.render();
  }

  render() {
    this.element = document.createElement(this.tag);
    this.setElementClass();
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
        this.addSortDirectionClass();
        this.table.setSortColumn(this.id);
        this.table.sort();
        // after sorting set the class to ensure its the only column highlighted
        this.setElementClass(true);
        // toggle sort direction for the next click
        this.table.setSortDirection(this.sortDir);
        this.sortDir *= -1;
      });
    }

    // if we're initializing this sort, update these params on construction
    if (this.initSort) {
      this.table.setSortDirection(this.sortDir);
      this.sortDir *= -1;
    }
  }

  render() {
    const cell = document.createElement("th");
    cell.className = this.className;
    cell.appendChild(document.createTextNode(this.content));
    this.element = cell;
    if (this.sortCol) {
      this.addSortDirectionClass();
      this.setElementClass(this.initSort);
    }
  }

  addSortDirectionClass() {
    const sortClass = this.sortDir > 0 ? "sort-asc" : "sort-desc";
    this.classNameWithSort = `${this.className} ${sortClass}`;
    this.element.className = this.classNameWithSort;
  }

  setElementClass(addSorted) {
    const sorted = addSorted ? "sorted" : "";
    this.element.className = `${this.classNameWithSort} ${sorted}`;
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
      cell.setElementClass(false);
    });
  }
}


class RankedBodyRow {
  constructor(cells, initialRank) {
    this.cells = cells;
    this.render(initialRank);
  }

  render(rank) {
    const row = document.createElement("tr");
    const rankedCells = [
      new TextCell(rank, "rank-cell"),
      new SpaceCell("space-cell", "td"),
      ...this.cells
    ];
    rankedCells.forEach(cell => {
      row.appendChild(cell.element);
    });
    this.element = row;
  }
}


class Table {
  constructor(data, classNames, headers, sortCols, tableElement) {
    this.validate(data, classNames, headers);
    this.classNames = classNames;
    this.sortCols = sortCols;
    // start with sorting ranked ascending
    this.sortCol = 0;
    this.sortDir = 1;

    this.header = this.getHeaderRow(headers);
    this.data = data;
    this.rows = this.getRows(this.data);
    this.element = tableElement;

    this.render();
  }

  validate(data, classNames, headers) {
    if (classNames.length !== headers.length) {
      throw new Error("Number of class names does not match number of headers");
    }
  }

  getHeaderRow(headers) {
    return new HeaderRow(headers.map((header, i) => {
      return new HeaderCell(
        header,
        this.classNames[i],
        this.sortCols[i],
        // 1 designates ascending; -1, descending (default); 0, not sortable
        this.sortCols[i] ? -1 : 0,
        false,
        this,
        i
      );
    }));
  }

  getRows(data) {
    throw new Error("Table class is abstract. Please use a concrete subclass");
  }

  setSortColumn(i) {
    this.sortCol = i;
  }

  setSortDirection(sortDir) {
    this.sortDir = sortDir;
  }

  sort() {
    this.header.clearedSortedCells();

    // handle the rank column separately
    if (this.sortCol === 0) {
      this.rows.reverse();
      this.updateTable(true);
      return;
    }

    this.data.sort((a, b) => {
      if (a[this.sortCol] < b[this.sortCol]) {
        return this.sortDir;
      } else if (a[this.sortCol] > b[this.sortCol]) {
        return this.sortDir * -1;
      } else {
        return 0;
      }
    });
    this.rows = this.getRows(this.data);
    this.updateTable();
  }

  updateTable(dontReRenderRows) {
    const tbody = this.element.getElementsByTagName("tbody")[0];
    tbody.textContent = "";

    // repopulate with updated rows
    this.rows.forEach((row, i) => {
      if (!dontReRenderRows) row.render(i + 1);
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

class RankedTable extends Table {
  constructor(data, classNames, headers, sortCols, tableElement) {
    super(data, classNames, headers, sortCols, tableElement);
  }

  getHeaderRow(headers, classNames) {
    const headerCells = super.getHeaderRow(headers, classNames).cells;
    const headersWithRank = [
      new HeaderCell("Rank", "rank-cell", true, 1, true, this, 0),
      new SpaceCell("space-cell", "th"),
      ...headerCells
    ];
    return new HeaderRow(headersWithRank);
  }
}

export class BailTable extends RankedTable {
  constructor(data, classNames, headers, sortCols, tableElement) {
    super(data, classNames, headers, sortCols, tableElement);
  }

  validate(data, classNames, headers) {
    super.validate(data, classNames, headers);
    if (data.some((row) => row.length != headers.length)) {
      throw new Error(`${headers.length} columns of data required`);
    }
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
}
