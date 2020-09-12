import { Cell, Header, Row, Table } from './classes/Table.js';

const tableElement = document.getElementById("table");

const row_map = {
  0: "rank-cell",
  1: "county-name-cell",
}
const header = ["Rank", "County"];
const data = [
  [1, "Philadelphia"],
  [2, "Montgomery"],
  [3, "Bucks"],
  [4, "Berks"]
]

// create table header row
const headerCells = header.map((item, i) => {
  return new Header(item, row_map[i]);
});
const headerRow = new Row(headerCells);

// build data rows
const rows = [];
for (let row of data) {
  const cells = row.map((item, i) => {
    return new Cell(item, row_map[i]);
  });
  rows.push(new Row(cells));
}

// create and render table
const table = new Table(headerRow, rows, tableElement);
