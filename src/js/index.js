import { RankedTable } from "./classes/Table.js";
import { BAIL_RATE_DATA, BAIL_RACE_DATA } from "./data.js";

/* TABLE CREATION FUNCTIONS */
const createBailRateTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "County",
      sortable: false
    },
    {
      class: "viz-cell",
      header: {
        "start": 0,
        "end": 60,
        "averages": [
          {
            "name": "State Average",
            "value": 42.5966697900
          }
        ]
      },
      sortable: false
    },
    {
      class: "bail-rate-cell number-cell",
      header: "Cash Bail Rate (%)",
      sortable: true
    },
    {
      class: "bail-cases-cell number-cell",
      header: "Cash Bail Cases",
      sortable: true
    },
    {
      class: "total-cases-cell number-cell",
      header: "Total Cases",
      sortable: true
    },
  ];
  const initSort = 2; // initially sort by cash bail rate
  const tableElement = document.getElementById("bail-rate-table");
  return new RankedTable(BAIL_RATE_DATA, columnConfigs, initSort, tableElement);
};

const createBailRaceTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "County",
      sortable: false
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
      sortable: false
    },
    {
      class: "bail-black-cell number-cell",
      header: "% Cash Bail Black",
      sortable: true
    },
    {
      class: "bail-white-cell number-cell",
      header: "% Cash Bail White",
      sortable: true
    },
    {
      class: "diff-cell number-cell",
      header: "Diff",
      sortable: true
    },
  ];
  const initSort = 4; // initially sort by difference
  const tableElement = document.getElementById("bail-race-table");

  return new RankedTable(BAIL_RACE_DATA, columnConfigs, initSort, tableElement);
};

/* RENDER PAGE */
const bailRateTable = createBailRateTable();

const bailRaceTable = createBailRaceTable();
document.getElementById("race-outliers").addEventListener("click", (e) => {
  const showOutliers = bailRaceTable.toggleOutliers();
  e.target.className = showOutliers ? "outliers-btn showing" : "outliers-btn";
});
