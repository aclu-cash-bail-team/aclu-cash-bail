class Cell {
  constructor(content, className) {
    this.content = content;
    this.class = className;
  }

  export() {
    /*
     * EXAMPLE
     * const cell = new Cell("1", "rank-cell");
     * cell.export();
     *    <td class="rank-cell">1</td>
    */
    const cell = document.createElement("td");
    cell.className = this.class;
    const cellText = document.createTextNode(this.content);
    cell.appendChild(cellText);
    return cell;
  }
}


class Row {
  constructor(cells) {
    this.cells = cells;
  }

  export() {
    const row = document.createElement("td");
    this.cells.forEach(cell => {
      row.appendChild(cell);
    });
    return row;
  }
}


class Table {
  constructor(rows, element) {
    this.rows = rows;
    this.element = element;
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
      tbody.appendChild(row);
    });
  }
}


// EXAMPLE: to create a table

const row_map = {
  0: "rank-cell",
  1: "county-name-cell",
}

const rows = [];
for (let row in data) {
  const cells = row.map((item, i) => {
    return new Cell(item, row_map[i]);
  });
  rows.append(new Row(cells));
}
const tableElement = document.createElement("table");
const table = new Table(rows, tableElement);
