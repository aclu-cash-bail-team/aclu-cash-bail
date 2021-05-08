import { Table, SwitchableTable } from "./classes/Table.js";
import { RaceMapContainer } from "./classes/Map.js";
import { ScatterPlot } from "./classes/Graph.js";
import { BAIL_RACE_RATE_DATA, BAIL_RACE_AMOUNT_DATA, RACE_SCATTER_PLOT } from "./data.js";

/* TABLE CREATION FUNCTIONS */
const createBailRaceRateTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: {
        "text": "",
        "unit": ""
      },
      sortable: false,
      searchable: true
    },
    {
      class: "bail-black-cell number-cell",
      header: {
        "text": "Black",
        "unit": "percent"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "bail-white-cell number-cell",
      header: {
        "text": "White",
        "unit": "percent"
      },
      sortable: true,
      searchable: false
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
          },
          {
            "name": "White",
            "value": 37.87542236,
          }
        ],
        "unit": "percent"
      },
      sortable: false,
      searchable: false
    },
    {
      class: "diff-cell number-cell",
      header: {
        "text": "Gap",
        "unit": "percent"
      },
      sortable: true,
      searchable: false
    },
  ];
  const initSort = {col: 4, dir: -1}; // initially sort by difference
  const stateData = [
    "Pennsylvania",
    54.7,
    37.0,
    {
      "type": "line",
      "values": [
        54.7,
        37.0
      ]
    },
    "+17.7"
  ];


  const tableContainer = document.getElementById("bail-race-rate-container");
  return new Table(BAIL_RACE_RATE_DATA, columnConfigs, initSort, tableContainer, stateData, false);
};

const createBailRaceAmountTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: {
        "text": "",
        "unit": ""
      },
      sortable: false,
      searchable: true
    },
    {
      class: "bail-black-cell number-cell",
      header: {
        "text": "Black",
        "unit": "dollars"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "bail-white-cell number-cell",
      header: {
        "text": "White",
        "unit": "dollars"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "viz-cell",
      header: {
        "start": 10000,
        "end": 80000,
        "averages": [
          {
            "name": "Black",
            "value": 38700.61968,
          },
          {
            "name": "White",
            "value": 27572.55514,
          }
        ],
        "unit": "dollars"
      },
      sortable: false,
      searchable: false
    },
    {
      class: "diff-cell number-cell",
      header: {
        "text": "Gap",
        "unit": "dollars"
      },
      sortable: true,
      searchable: false
    },
  ];
  const initSort = {col: 4, dir: -1}; // initially sort by difference
  const stateData = [
    "Pennsylvania",
    "$36,202",
    "$26,868",
    {
      "type": "line",
      "values": [
        38700.61968,
        27572.55514
      ]
    },
    "+$11.0K"
  ];

  const tableContainer = document.getElementById("bail-race-amount-container");
  return new Table(BAIL_RACE_AMOUNT_DATA, columnConfigs, initSort, tableContainer, stateData, false);
};

/* PLOT CREATION FUNCTIONS */
const createRaceScatterPlot = () => {
  const xAxis = {
    name: "Cash Bail Rate",
    min: 20,
    max: 80,
    numTicks: 6,
    convert: num => `${num}%`
  };
  const yAxis = {
    name: "Bail Amount",
    min: 0,
    max: 80000,
    numTicks: 8,
    convert: num => num === 0 ? "0" : `${num / 1000}K`
  };

  const tooltipConfig = {
    columns: [
      { dataKey: "name", isRowHeader: true },
      { columnHeader: "% Cash Bail", dataKey: "x", render: value => `${value.toFixed(1)}%` },
      { columnHeader: "Bail Amount", dataKey: "y", render: value => value.toLocaleString("en", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}
    ]
  };

  const container = document.getElementById("race-scatter-plot");
  return new ScatterPlot(RACE_SCATTER_PLOT, xAxis, yAxis, null, tooltipConfig, container);
};

/* RENDER PAGE */
const bailRaceRateTable = createBailRaceRateTable();
const bailRaceAmountTable = createBailRaceAmountTable();

const raceContainer = document.getElementById("race-container");
new SwitchableTable(bailRaceRateTable, bailRaceAmountTable, raceContainer);

new RaceMapContainer("race-rate", BAIL_RACE_RATE_DATA, 37.9, 54.7);

createRaceScatterPlot();
