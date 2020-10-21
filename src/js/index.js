import { RankedTable, SwitchableTable } from "./classes/Table.js";
import { BAIL_RATE_DATA, BAIL_RACE_RATE_DATA, ROR_RATE_DATA, BAIL_RACE_AMOUNT_DATA } from "./data.js";

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
            "value": 42.5966697900,
            "unit": "percent"
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
            "value": 22.73,
            "unit": "percent"
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

const createBailRaceRateTable = () => {
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
            "value": 54.7462525,
            "unit": "percent"
          },
          {
            "name": "White",
            "value": 37.87542236,
            "unit": "percent"
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
  const tableContainer = document.getElementById("bail-race-rate-container");

  return new RankedTable(BAIL_RACE_RATE_DATA, columnConfigs, initSort, tableContainer, false);
};

const createBailRaceAmountTable = () => {
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
        "start": 5000,
        "end": 80000,
        "averages": [
          {
            "name": "Black",
            "value": 38700.61968,
            "unit": "dollars"
          },
          {
            "name": "White",
            "value": 27572.55514,
            "unit": "dollars"
          }
        ]
      },
      sortable: false,
      searchable: false
    },
    {
      class: "bail-black-cell number-cell",
      header: "Bail Amt Black",
      sortable: true,
      searchable: false
    },
    {
      class: "bail-white-cell number-cell",
      header: "Bail Amt White",
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
  const tableContainer = document.getElementById("bail-race-amount-container");

  return new RankedTable(BAIL_RACE_AMOUNT_DATA, columnConfigs, initSort, tableContainer, false);
};

/* RENDER PAGE */
const bailRateTable = createBailRateTable();
const rorRateTable = createRorRateTable();

const rateContainer = document.getElementById("rate-container");
new SwitchableTable(bailRateTable, rorRateTable, rateContainer);

const bailRaceRateTable = createBailRaceRateTable();
const bailRaceAmountTable = createBailRaceAmountTable();

const raceContainer = document.getElementById("race-container");
new SwitchableTable(bailRaceRateTable, bailRaceAmountTable, raceContainer);
