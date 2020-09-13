import { BailTable } from './classes/Table.js';

const createBailRateTable = () => {
  const classNames = [
    "county-name-cell",
    "viz-cell",
    "bail-rate-cell number-cell",
    "bail-cases-cell number-cell",
    "total-cases-cell number-cell"
  ]
  const headers = [
    "County",
    "Viz Placeholder",
    "Cash Bail Rate (%)",
    "Cash Bail Cases",
    "Total Cases"
  ];
  const sortCols = [
    false,
    false,
    true,
    true,
    true
  ];
  const initSort = 2; // initially sort by cash bail rate
  const data = [
    ["Delaware", "", 55.7, 9514, 17863],
    ["Lehigh", "", 54.9, 6526, 13069],
    ["Lackawanna", "", 52.6, 3236, 6148],
    ["Berks", "", 50.9, 6266, 12230],
    ["Philadelphia", "", 50.1, 32823, 65487],
    ["Beaver", "", 50.9, 6226, 12230]
  ];
  const tableElement = document.getElementById("bail-rate-table");
  new BailTable(data, classNames, headers, sortCols, initSort, tableElement);
}


const createBailRaceTable = () => {
  const classNames = [
    "county-name-cell",
    "viz-cell",
    "bail-black-cell number-cell",
    "bail-white-cell number-cell",
    "diff-cell number-cell"
  ]
  const headers = [
    "County",
    "Viz Placeholder",
    "% Cash Bail Black",
    "% Cash Bail White",
    "Difference"
  ];
  const sortCols = [
    false,
    false,
    true,
    true,
    true
  ];
  const initSort = 4; // initially sort by difference
  const data = [
    ["Somerset", "", 69.6, 23.2, "+46.4"],
    ["Centre", "", 46.7, 21.9, "+25.7"],
    ["Lycoming", "", 55, 28.1, "+26.9"],
    ["Jefferson", "", 73, 38.4, "+34.6"],
    ["Crawford", "", 53.3, 28.3, "+25"],
    ["Blair", "", 58.7, 31.8, "+26.9"]
  ]
  const tableElement = document.getElementById("bail-race-table");

  new BailTable(data, classNames, headers, sortCols, initSort, tableElement);
}

createBailRateTable();
createBailRaceTable();
