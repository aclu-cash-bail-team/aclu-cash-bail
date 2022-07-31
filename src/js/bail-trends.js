import * as d3 from "d3";
import { Table, SwitchableTable } from "./classes/Table.js";
import { BailRateMap, SwitchableMap } from "./classes/Map.js";
import {
  ScatterPlot,
  DistributionGraph,
  CountyBarChart
} from "./classes/Graph.js";
import {
  BAIL_RATE_DATA,
  PA_BAIL_CASES,
  PA_ROR_CASES,
  PA_TOTAL_CASES,
  PA_BAIL_RATE,
  PA_ROR_RATE,
  PA_AVG_POSTING_RATE,
  PA_AVG_BAIL_AMT,
  ROR_RATE_DATA,
  BAIL_POSTING_DATA,
  BAIL_CASES_SCATTER_PLOT,
  MDJ_DATA
} from "./data.js";

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
            value: PA_BAIL_RATE
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
      values: [PA_BAIL_RATE]
    },
    PA_BAIL_RATE,
    PA_BAIL_CASES,
    PA_TOTAL_CASES
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
            value: PA_ROR_RATE
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
      values: [PA_ROR_RATE]
    },
    PA_ROR_RATE,
    PA_ROR_CASES,
    PA_TOTAL_CASES
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
  const stateData = ["Pennsylvania", PA_AVG_BAIL_AMT, PA_AVG_POSTING_RATE];

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
  const cashBailRateToText = (num) => `${num}%`;
  const bailAmountToText = (num) => (num === 0 ? "0" : `${num}K`);
  const totalBailCasesToText = (num) => num.toLocaleString();

  const xAxis = {
    name: "Cash Bail Rate",
    min: 20,
    max: 60,
    numTicks: 4,
    convert: cashBailRateToText
  };
  const yAxis = {
    name: "Bail Amount",
    min: 0,
    max: 90,
    numTicks: 9,
    convert: bailAmountToText
  };

  const tooltipConfig = {
    rows: [
      {
        rowHeader: "Cash Bail Rate",
        dataKey: "x",
        render: (num) => `${num.toFixed(1)}%`
      },
      {
        rowHeader: "Average Bail Amount",
        dataKey: "y",
        render: (value) =>
          (value * 1000).toLocaleString("en", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          })
      },
      { rowHeader: "Total Cases", dataKey: "r", render: totalBailCasesToText }
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

  const container = document.getElementById("cases-scatter-plot");
  return new ScatterPlot(
    BAIL_CASES_SCATTER_PLOT,
    xAxis,
    yAxis,
    radiusScale,
    tooltipConfig,
    container
  );
};

const createAvgBailAmountBarChart = () => {
  const nonPostingRateToText = (num) => `${num}%`;
  const bailAmountToText = (num) => (num === 0 ? "0" : `$${num}K`);

  const xAxis = {
    name: "AVERAGE BAIL AMOUNT",
    min: 10,
    max: 80,
    numTicks: 7,
    convert: bailAmountToText
  };

  const tooltipConfig = {
    rows: [
      {
        rowHeader: "Average bail amount",
        dataKey: "x",
        render: bailAmountToText
      },
      {
        rowHeader: "Non-posting rate",
        dataKey: "y",
        render: nonPostingRateToText
      }
    ],
    placement: "top",
    followCursor: true
  };

  const data = BAIL_POSTING_DATA.map(({ data: county }) => ({
    name: county[0],
    x: parseFloat(county[1].replace(/[$K]/g, "")),
    y: county[2],
    highlighted: county[2] > 50
  }));

  const container = document.getElementById("avg-bail-graph-container");
  return new CountyBarChart(data, xAxis, tooltipConfig, container);
};

/* RENDER PAGE */
const bailRateTable = createBailRateTable();
const rorRateTable = createRorRateTable();

const rateTableContainer = document.getElementById("rate-table-container");
new SwitchableTable(bailRateTable, rorRateTable, rateTableContainer);

createBailPostingTable();

const cashBailRateMap = new BailRateMap(
  "cash-bail-rate",
  BAIL_RATE_DATA,
  PA_BAIL_RATE,
  "Cash Bail Rate"
);

const rorRateMap = new BailRateMap(
  "ror-rate",
  ROR_RATE_DATA,
  PA_ROR_RATE,
  "ROR Rate"
);

const rateChloroplethContainer = document.getElementById(
  "rate-chloropleth-container"
);

new SwitchableMap(cashBailRateMap, rorRateMap, rateChloroplethContainer);

createAvgBailAmountBarChart();

createCasesScatterPlot();
new DistributionGraph(
  document.getElementById("dist-graph-container"),
  MDJ_DATA
);
