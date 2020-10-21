import { RankedTable, SwitchableTable } from "./classes/Table.js";
import { BAIL_RATE_DATA, BAIL_RACE_DATA, ROR_RATE_DATA } from "./data.js";

/* TABLE CREATION FUNCTIONS */
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
      header: {
        "start": 0,
        "end": 90,
        "averages": [
          {
            "name": "State Average",
            "value": 42.5966697900
          }
        ]
      },
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
  const tableContainer = document.getElementById("bail-rate-container");
  return new RankedTable(BAIL_RATE_DATA, columnConfigs, initSort, tableContainer, false);
};

const createRorRateTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "County",
      sortable: false,
      searchable: true
    },
    {
      class: "viz-cell",
      header: {
        "start": 0,
        "end": 75,
        "averages": [
          {
            "name": "State Average",
            "value": 22.73
          }
        ]
      },
      sortable: false,
      searchable: false
    },
    {
      class: "ror-rate-cell number-cell",
      header: "ROR Bail Rate (%)",
      sortable: true,
      searchable: false
    },
    {
      class: "ror-cases-cell number-cell",
      header: "ROR Cases",
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
  const initSort = 2; // initially sort by ror bail rate
  const tableContainer = document.getElementById("ror-rate-container");
  return new RankedTable(ROR_RATE_DATA, columnConfigs, initSort, tableContainer, false);
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
      header: {
        "start": 0,
        "end": 100,
        "averages": [
          {
            "name": "Black",
            "value": 54.7462525
          },
          {
            "name": "White",
            "value": 37.87542236
          }
        ]
      },
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
      header: "Diff",
      sortable: true,
      searchable: false
    },
  ];
  const initSort = 4; // initially sort by difference
  const tableContainer = document.getElementById("bail-race-container");

  return new RankedTable(BAIL_RACE_DATA, columnConfigs, initSort, tableContainer);
};

/* RENDER PAGE */
const bailRateTable = createBailRateTable();
const rorRateTable = createRorRateTable();

const switchableContainer = document.getElementById("rate-container");
new SwitchableTable(bailRateTable, rorRateTable, switchableContainer);

const bailRaceTable = createBailRaceTable();
document.getElementById("race-outliers").addEventListener("click", (e) => {
  const showOutliers = bailRaceTable.toggleOutliers();
  e.target.className = showOutliers ? "outliers-btn showing" : "outliers-btn";
});
