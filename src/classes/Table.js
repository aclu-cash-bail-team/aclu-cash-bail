export class Cell {
  constructor(content, className) {
    this.content = content;
    this.class = className;
    this.render();
  }

  render() {
    const cell = document.createElement("td");
    cell.className = this.class;
    cell.appendChild(document.createTextNode(this.content));
    this.element = cell;
  }
}


export class Header extends Cell {
  constructor(content, className) {
    super(content, className);
  }

  render() {
    const cell = document.createElement("th");
    cell.className = this.class;
    cell.appendChild(document.createTextNode(this.content));
    this.element = cell;
  }
}


export class Row {
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


export class Table {
  constructor(header, rows, element) {
    this.header = header;
    this.rows = rows;
    this.element = element;
    this.render();
  }

  sort() {
    // TODO: update rows
  }

  updateTable() {
    const tbody = this.element.getElementsByTagName("tbody")[0];
    const trs = tbody.getElementsByTagName("tr");
    trs.forEach(tr => {
      tbody.deleteRow(tr);
    });
    // repopulate with updated rows
    this.rows.forEach(row => {
      tbody.appendChild(row.export());
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
