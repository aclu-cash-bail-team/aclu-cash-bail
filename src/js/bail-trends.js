import * as d3 from "d3";
import { toMoney, toPercent, toNumberString } from "./helpers";
import { Table, SwitchableTable } from "./classes/Table.js";
import { BailRateMap, BailPostingMap, SwitchableMap } from "./classes/Map.js";
import { ScatterPlot, DistributionGraph } from "./classes/Graph.js";
import { STATEWIDE_DATA, COUNTY_DATA, MDJ_DATA } from "./data.js";

// restructure county data for tables and maps
const BAIL_RATE_DATA = COUNTY_DATA.map(county_data => ({
  data: [
    county_data["name"],
    {
      type: "bar",
      values: [county_data["cash_bail_pct"]]
    },
    county_data["cash_bail_pct"],
    county_data["cash_bail_cases"],
    county_data["total_cases"]
  ]
}));
const ROR_RATE_DATA = COUNTY_DATA.map(county_data => ({
  data: [
    county_data["name"],
    {
      type: "bar",
      values: [county_data["ror_pct"]]
    },
    county_data["ror_pct"],
    county_data["ror_cases"],
    county_data["total_cases"]
  ]
}));
const BAIL_POSTING_DATA = COUNTY_DATA.map(county_data => ({
  data: [
    county_data["name"],
    county_data["avg_bail_amount"],
    county_data["non_posting_rate"]
  ]
}));

/* TABLE CREATION FUNCTIONS */
const createBailRateTable = () => {
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
      class: "viz-cell",
      header: {
        start: 0,
        end: 60,
        averages: [
          {
            name: "Avg.",
            value: STATEWIDE_DATA["cash_bail_pct"]
          }
        ],
        unit: "percent",
        showDiff: false
      },
      sortable: false,
      searchable: false
    },
    {
      class: "bail-rate-cell number-cell",
      header: {
        text: "Cash\xa0Rate",
        unit: "percent"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "bail-cases-cell number-cell",
      header: {
        text: "Cash\xa0Cases",
        unit: "number"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "total-cases-cell number-cell",
      header: {
        text: "Total",
        unit: "number"
      },
      sortable: true,
      searchable: false
    }
  ];
  const initSort = { col: 2, dir: -1 }; // initially sort by cash bail rate
  const stateData = [
    "Pennsylvania",
    {
      type: "bar",
      values: [STATEWIDE_DATA["cash_bail_pct"]]
    },
    STATEWIDE_DATA["cash_bail_pct"],
    STATEWIDE_DATA["cash_bail_cases"],
    STATEWIDE_DATA["total_cases"]
  ];

  const tableContainer = document.getElementById("bail-rate-container");
  return new Table(
    BAIL_RATE_DATA,
    columnConfigs,
    initSort,
    tableContainer,
    stateData,
    false
  );
};

const createRorRateTable = () => {
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
      class: "viz-cell",
      header: {
        start: 0,
        end: 75,
        averages: [
          {
            name: "Avg.",
            value: STATEWIDE_DATA["ror_pct"]
          }
        ],
        unit: "percent",
        showDiff: false
      },
      sortable: false,
      searchable: false
    },
    {
      class: "ror-rate-cell number-cell",
      header: {
        text: "ROR\xa0Rate",
        unit: "percent"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "ror-cases-cell number-cell",
      header: {
        text: "ROR\xa0Cases",
        unit: "number"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "total-cases-cell number-cell",
      header: {
        text: "Total",
        unit: "number"
      },
      sortable: true,
      searchable: false
    }
  ];
  const initSort = { col: 2, dir: -1 }; // initially sort by ror bail rate
  const stateData = [
    "Pennsylvania",
    {
      type: "bar",
      values: [STATEWIDE_DATA["ror_pct"]]
    },
    STATEWIDE_DATA["ror_pct"],
    STATEWIDE_DATA["ror_cases"],
    STATEWIDE_DATA["total_cases"]
  ];

  const tableContainer = document.getElementById("ror-rate-container");
  return new Table(
    ROR_RATE_DATA,
    columnConfigs,
    initSort,
    tableContainer,
    stateData,
    false
  );
};

const createBailPostingTable = () => {
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
      class: "bail-amount-cell number-cell",
      header: {
        text: "Bail Set",
        unit: "dollars"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "nonposting-rate-cell number-cell",
      header: {
        text: "Non-posting rt.",
        unit: "percent"
      },
      sortable: true,
      searchable: false
    }
  ];
  const initSort = { col: 2, dir: -1 };
  const stateData = [
    "Pennsylvania",
    STATEWIDE_DATA["avg_bail_amount"],
    STATEWIDE_DATA["non_posting_rate"]
  ];

  const tableContainer = document.getElementById("bail-posting-container");
  return new Table(
    BAIL_POSTING_DATA,
    columnConfigs,
    initSort,
    tableContainer,
    stateData
  );
};

/* PLOT CREATION FUNCTIONS */
const createCasesScatterPlot = () => {
  const xAxis = {
    name: "Cash Bail Rate",
    min: 0.2,
    max: 0.6,
    numTicks: 4,
    convert: (value) => toPercent(value, 0)
  };
  const yAxis = {
    name: "Bail Amount",
    min: 0,
    max: 90000,
    numTicks: 9,
    convert: (value) => toMoney(value, 0)
  };

  const tooltipConfig = {
    rows: [
      {
        rowHeader: "Cash Bail Rate",
        dataKey: "x",
        render: toPercent
      },
      {
        rowHeader: "Average Bail Amount",
        dataKey: "y",
        render: (value) =>
          value.toLocaleString("en", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          })
      },
      { rowHeader: "Total Cases", dataKey: "r", render: toNumberString }
    ]
  };

  const DESKTOP_100_CASES_PX = 4; // 100 total cash bail cases === 4px radius circle for desktop screens
  const DESKTOP_25K_CASES_PX = 35; // 25,000 total cash bail cases === 40px radius circle for desktop screens
  const MOBILE_100_CASES_PX = 4; // 100 total cash bail cases === 4px radius circle for mobile screens
  const MOBILE_25K_CASES_PX = 21; // 25,000 total cash bail cases === 20px radius circle for mobile screens

  /* The scaleSqrt scale is useful for sizing circles by area (rather than radius).
     (When using circle size to represent data, it’s considered better practice to set the area,
     rather than the radius proportionally to the data.)
     https://eagereyes.org/blog/2008/linear-vs-quadratic-change
  */

  const desktopScale = d3
    .scaleSqrt()
    .domain([100, 25000]) // values used in legend
    .range([DESKTOP_100_CASES_PX, DESKTOP_25K_CASES_PX]);

  const mobileScale = d3
    .scaleSqrt()
    .domain([100, 25000]) // values used in legend
    .range([MOBILE_100_CASES_PX, MOBILE_25K_CASES_PX]);

  const radiusScale = {
    desktop: desktopScale,
    mobile: mobileScale
  };

  const PLOT_DATA = COUNTY_DATA.reduce((acc, county_data) => ({
    ...acc,
    [county_data["name"]]: {
      showName: false,
      x: county_data["cash_bail_pct"],
      r: county_data["cash_bail_cases"],
      y: county_data["avg_bail_amount"]
    }
  }), {});
  PLOT_DATA["State Average"] = {
    showName: true,
    x: STATEWIDE_DATA["cash_bail_pct"],
    r: STATEWIDE_DATA["cash_bail_cases"],
    y: STATEWIDE_DATA["avg_bail_amount"]
  };
  const container = document.getElementById("cases-scatter-plot");
  return new ScatterPlot(
    PLOT_DATA,
    xAxis,
    yAxis,
    radiusScale,
    tooltipConfig,
    container
  );
};

/* RENDER TABLES */
const bailRateTable = createBailRateTable();
const rorRateTable = createRorRateTable();

const rateTableContainer = document.getElementById("rate-table-container");
new SwitchableTable(bailRateTable, rorRateTable, rateTableContainer);

createBailPostingTable();

/* RENDER MAPS */
const cashBailRateMap = new BailRateMap(
  "cash-bail-rate",
  BAIL_RATE_DATA,
  STATEWIDE_DATA["cash_bail_pct"],
  "Cash Bail Rate"
);
const rorRateMap = new BailRateMap(
  "ror-rate",
  ROR_RATE_DATA,
  STATEWIDE_DATA["ror_pct"],
  "ROR Rate"
);
const rateChloroplethContainer = document.getElementById(
  "rate-chloropleth-container"
);
new SwitchableMap(cashBailRateMap, rorRateMap, rateChloroplethContainer);

/* RENDER GRAPHS */
createCasesScatterPlot();
// TODO: new bail posting graph goes here
new DistributionGraph(
  document.getElementById("dist-graph-container"),
  MDJ_DATA
);
