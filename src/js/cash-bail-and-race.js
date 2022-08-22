import { toMoney, toPercent } from "./helpers";
import { Table, SwitchableTable } from "./classes/Table.js";
import { RaceMapContainer } from "./classes/Map.js";
import { ScatterPlot } from "./classes/Graph.js";
import { STATE_DATA, COUNTY_DATA } from "./raw-data.js";
import {
  BAIL_RACE_RATE_DATA,
  BAIL_RACE_AMOUNT_DATA,
  BAIL_RATE_MAP_DATA
} from "./data.js";

/* TABLE CREATION FUNCTIONS */
const createBailRaceRateTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: {
        text: "",
        unit: ""
      },
      sortable: false,
      searchable: true
    },
    {
      class: "bail-black-cell number-cell",
      header: {
        text: "Black Cases",
        unit: "number"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "bail-black-cell number-cell",
      header: {
        text: "Black Rate",
        unit: "percent"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "bail-white-cell number-cell",
      header: {
        text: "White Cases",
        unit: "number"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "bail-white-cell number-cell",
      header: {
        text: "White Rate",
        unit: "percent"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "viz-cell race-disparity-viz-cell",
      header: {
        start: 0,
        end: 1,
        averages: [
          {
            name: "Black",
            value: STATE_DATA["cash_bail_pct_black"]
          },
          {
            name: "White",
            value: STATE_DATA["cash_bail_pct_white"]
          }
        ],
        unit: "percent"
      },
      sortable: false,
      searchable: false
    },
    {
      class: "diff-cell number-cell",
      header: {
        text: "Gap",
        unit: "percent",
        showSigns: true
      },
      sortable: true,
      searchable: false
    }
  ];
  const initSort = { col: 4, dir: -1 }; // initially sort by difference
  const stateData = [
    "Pennsylvania",
    STATE_DATA["cash_bail_cases_black"],
    STATE_DATA["cash_bail_pct_black"],
    STATE_DATA["cash_bail_cases_white"],
    STATE_DATA["cash_bail_pct_white"],
    {
      type: "line",
      values: [
        STATE_DATA["cash_bail_pct_black"],
        STATE_DATA["cash_bail_pct_white"]
      ]
    },
    STATE_DATA["cash_bail_pct_black"] - STATE_DATA["cash_bail_pct_white"]
  ];

  const tableContainer = document.getElementById("bail-race-rate-container");
  return new Table(
    BAIL_RACE_RATE_DATA,
    columnConfigs,
    initSort,
    tableContainer,
    stateData,
    false,
    false
  );
};

const createBailRaceAmountTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: {
        text: "",
        unit: ""
      },
      sortable: false,
      searchable: true
    },
    {
      class: "bail-black-cell number-cell",
      header: {
        text: "Black Cases",
        unit: "number"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "bail-black-cell number-cell",
      header: {
        text: "Black Amt.",
        unit: "dollars"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "bail-white-cell number-cell",
      header: {
        text: "White Cases",
        unit: "number"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "bail-white-cell number-cell",
      header: {
        text: "White Amt.",
        unit: "dollars"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "viz-cell race-disparity-viz-cell",
      header: {
        start: 10000,
        end: 80000,
        averages: [
          {
            name: "Black",
            value: STATE_DATA["bail_amount_black"]
          },
          {
            name: "White",
            value: STATE_DATA["bail_amount_white"]
          }
        ],
        unit: "dollars",
        showSigns: true
      },
      sortable: false,
      searchable: false
    },
    {
      class: "diff-cell number-cell",
      header: {
        text: "Gap",
        unit: "dollars"
      },
      sortable: true,
      searchable: false
    }
  ];
  const initSort = { col: 4, dir: -1 }; // initially sort by difference
  const stateData = [
    "Pennsylvania",
    STATE_DATA["cash_bail_cases_black"],
    STATE_DATA["bail_amount_black"],
    STATE_DATA["cash_bail_cases_white"],
    STATE_DATA["bail_amount_white"],
    {
      type: "line",
      values: [
        STATE_DATA["bail_amount_black"],
        STATE_DATA["bail_amount_white"]
      ]
    },
    STATE_DATA["bail_amount_black"] - STATE_DATA["bail_amount_white"]
  ];

  const tableContainer = document.getElementById("bail-race-amount-container");
  return new Table(
    BAIL_RACE_AMOUNT_DATA,
    columnConfigs,
    initSort,
    tableContainer,
    stateData,
    false,
    false
  );
};

/* PLOT CREATION FUNCTIONS */
const createRaceScatterPlot = () => {
  const xAxis = {
    name: "Cash Bail Rate",
    min: 0,
    max: 1,
    numTicks: 10,
    convert: (value) => toPercent(value, 0)
  };
  const yAxis = {
    name: "Bail Amount",
    min: 0,
    max: 100000,
    numTicks: 10,
    convert: (value) => toMoney(value, 0, false)
  };

  const tooltipConfig = {
    columns: [
      { dataKey: "name", isRowHeader: true },
      {
        columnHeader: "Cash\xa0Bail\xa0Rt.",
        dataKey: "x",
        render: (value) => toPercent(value)
      },
      {
        columnHeader: "Bail Amount",
        dataKey: "y",
        render: (value) => toMoney(value, 0, true, false)
      }
    ]
  };

  const PLOT_DATA = COUNTY_DATA.reduce((acc, countyData) => ({
    ...acc,
    [countyData["name"]]: {
      showName: false,
      outlier: countyData["is_outlier"],
      x: {
        black: countyData["cash_bail_pct_black"],
        white: countyData["cash_bail_pct_white"]
      },
      y: {
        black: countyData["bail_amount_black"],
        white: countyData["bail_amount_white"]
      }
    }
  }), {});
  PLOT_DATA["State Average"] = {
    showName: true,
    outlier: false,
    x: {
      black: STATE_DATA["cash_bail_pct_black"],
      white: STATE_DATA["cash_bail_pct_white"]
    },
    y: {
      black: STATE_DATA["bail_amount_black"],
      white: STATE_DATA["bail_amount_white"]
    }
  };
  const container = document.getElementById("race-scatter-plot");
  return new ScatterPlot(
    PLOT_DATA,
    xAxis,
    yAxis,
    null,
    tooltipConfig,
    container
  );
};

/* RENDER TABLES */
const bailRaceRateTable = createBailRaceRateTable();
const bailRaceAmountTable = createBailRaceAmountTable();
const raceContainer = document.getElementById("race-container");
new SwitchableTable(bailRaceRateTable, bailRaceAmountTable, raceContainer);

/* RENDER MAPS */
new RaceMapContainer(
  "race-rate",
  BAIL_RATE_MAP_DATA,
  {
    black: STATE_DATA["cash_bail_pct_black"],
    white: STATE_DATA["cash_bail_pct_white"]
  }
);

/* RENDER GRAPHS */
createRaceScatterPlot();
