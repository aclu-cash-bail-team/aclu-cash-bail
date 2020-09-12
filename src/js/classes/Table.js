class Cell {
  constructor(className) {
    this.className = className;
    this.render();
  }

  render() {
    const cell = document.createElement("td");
    cell.className = this.className;
    this.element = cell;
  }
}

class TextCell extends Cell {
  constructor(content, className) {
    super(className)
    this.content = content;
    this.render()
  }

  render() {
    super.render()
    this.element.appendChild(document.createTextNode(this.content));
  }
}


class SpaceCell extends Cell {
  constructor(className) {
    super(className)
    this.render();
  }

  render() {
    super.render()
    this.element.appendChild(document.createTextNode(""));
  }
}


class HeaderCell extends TextCell {
  constructor(content, className) {
    super(content, className);
  }

  render() {
    const cell = document.createElement("th");
    cell.className = this.className;
    cell.appendChild(document.createTextNode(this.content));
    this.element = cell;
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
}


class RankedBodyRow {
  constructor(cells, initialRank) {
    this.cells = cells;
    this.render(initialRank);
  }

  render(rank) {
    const row = document.createElement("tr");
    const rankedCells = [new TextCell(rank, "rank-cell"), new SpaceCell("space-cell"), ...this.cells]
    rankedCells.forEach(cell => {
      row.appendChild(cell.element);
    });
    this.element = row;
  }
}


class Table {
  constructor(data, classNames, headers, tableElement) {
    this.validate(data, classNames, headers)
    this.classNames= classNames;
    this.header = this.getHeaderRow(headers);
    this.data = data;
    this.rows = this.getRows(this.data);
    this.element = tableElement;

    this.sortCol =
    this.sortDesc = true
    this.render();
  }

  validate(data, classNames, headers) {
    const numCols = headers.length;
    if (classNames.length != numCols) {
      throw new Error("Number of class names does not match number of headers");
    }
  }

  getHeaderRow(headers) {
    const headerCells = headers.map((item, i) => {
      return new HeaderCell(item, this.classNames[i]);
    });
    return new HeaderRow(headerCells);
  }

  getRows(data) {
    throw new Error("Table class is abstract. Please use a concrete subclass");
  }

  sort() {
    if (this.sortCol) {
      this.data.sort((row1, row2) => {
        if (row1[this.sortCol] < row2[this.sortCol]) {
          return this.sortDesc ? -1 : 1;
        } else if (row1[this.sortCol] > row2[this.sortCol]) {
          return this.sortDesc ? 1 : -1;
        } else {
          return 0
        }
      })
      this.rows = this.getRows(this.data)
      this.updateTable()
    }
  }

  updateTable() {
    const tbody = this.element.getElementsByTagName("tbody")[0];
    tbody.textContent = "";

    // repopulate with updated rows
    this.rows.forEach((row, i)=> {
      row.render(i + 1)
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
  constructor(data, classNames, headers, tableElement) {
    super(data, classNames, headers, tableElement);
  }

  getHeaderRow(headers, classNames) {
    const headerCells = super.getHeaderRow(headers, classNames).cells;
    const headersWithRank = [
      new HeaderCell("Rank", "rank-cell"),
      new HeaderCell("", "space-cell"),
      ...headerCells
    ]
    return new HeaderRow(headersWithRank);
  }
}

export class BailRateTable extends RankedTable {
  constructor(data, classNames, headers, tableElement) {
    super(data, classNames, headers, tableElement);
  }

  validate(data, classNames, headers) {
    super.validate(data, classNames, headers)
    if (data.some((row) => row.length != 4)) {
      throw new Error("4 columns of data required")
    }
  }

  getRows(data) {
    const rows = [];
    data.forEach((rowData, rowIdx) => {
      // Specify how data will be rendered
      const cells = [
        new TextCell(rowData[0], this.classNames[0]),
        new TextCell("", this.classNames[1]), // TODO: Viz cells
        new TextCell(rowData[1], this.classNames[2]),
        new TextCell(rowData[2], this.classNames[3]),
        new TextCell(rowData[3], this.classNames[4])
      ]
      rows.push(new RankedBodyRow(cells, rowIdx + 1));
    });
    return rows;
  }
}

export class BailRaceTable extends RankedTable {
  constructor(data, classNames, headers, tableElement) {
    super(data, classNames, headers, tableElement);
  }

  validate(data, classNames, headers) {
    super.validate(data, classNames, headers)
    if (data.some((row) => row.length != 4)) {
      throw new Error("4 columns of data required")
    }
  }

  getRows(data) {
    const rows = [];
    data.forEach((rowData, rowIdx) => {
      // Specify how data will be rendered
      const cells = [
        new TextCell(rowData[0], this.classNames[0]),
        new TextCell("", this.classNames[1]), // TODO: Viz cells
        new TextCell(rowData[1], this.classNames[2]),
        new TextCell(rowData[2], this.classNames[3]),
        new TextCell(rowData[3], this.classNames[4])
      ]
      rows.push(new RankedBodyRow(cells, rowIdx + 1));
    });
    return rows;
  }
}