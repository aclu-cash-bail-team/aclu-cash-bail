import { RankedTable } from "./classes/Table.js";

const createBailRateTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "County",
      sortable: false,
      searchable: true
    },
    {
      class: "viz-cell",
      header: "Viz Placeholder",
      sortable: false,
      searchable: false
    },
    {
      class: "bail-rate-cell number-cell",
      header: "Cash Bail Rate (%)",
      sortable: true,
      searchable: false
    },
    {
      class: "bail-cases-cell number-cell",
      header: "Cash Bail Cases",
      sortable: true,
      searchable: false
    },
    {
      class: "total-cases-cell number-cell",
      header: "Total Cases",
      sortable: true,
      searchable: false
    },
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
  const tableContainer = document.getElementById("bail-rate-container");
  new RankedTable(data, columnConfigs, initSort, tableContainer);
};


const createBailRaceTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "County",
      sortable: false,
      searchable: true
    },
    {
      class: "viz-cell",
      header: "Viz Placeholder",
      sortable: false,
      searchable: false
    },
    {
      class: "bail-black-cell number-cell",
      header: "% Cash Bail Black",
      sortable: true,
      searchable: false
    },
    {
      class: "bail-white-cell number-cell",
      header: "% Cash Bail White",
      sortable: true,
      searchable: false
    },
    {
      class: "diff-cell number-cell",
      header: "Difference",
      sortable: true,
      searchable: false
    },
  ];
  const initSort = 4; // initially sort by difference
  const data = [
    ["Somerset", "", 69.6, 23.2, "+46.4"],
    ["Centre", "", 46.7, 21.9, "+25.7"],
    ["Lycoming", "", 55, 28.1, "+26.9"],
    ["Jefferson", "", 73, 38.4, "+34.6"],
    ["Crawford", "", 53.3, 28.3, "+25"],
    ["Blair", "", 58.7, 31.8, "+26.9"]
  ];
  const tableContainer = document.getElementById("bail-race-container");

  new RankedTable(data, columnConfigs, initSort, tableContainer);
};

createBailRateTable();
createBailRaceTable();
