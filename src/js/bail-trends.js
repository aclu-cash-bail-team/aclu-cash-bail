import * as d3 from "d3";
import { toMoney, toPercent, toNumberString } from "./helpers";
import { Table, SwitchableTable } from "./classes/Table.js";
import { BailRateMap, SwitchableMap } from "./classes/Map.js";
import {
  ScatterPlot,
  DistributionGraph,
  CountyBarChart
} from "./classes/Graph.js";
import { STATE_DATA, COUNTY_DATA, MDJ_DATA } from "./data.js";

// restructure county data for tables and maps
const BAIL_RATE_DATA = COUNTY_DATA.map((countyData) => ({
  data: [
    countyData["name"],
    {
      type: "bar",
      values: [countyData["cash_bail_pct"]]
    },
    countyData["cash_bail_pct"],
    countyData["cash_bail_cases"],
    countyData["total_cases"]
  ]
}));
const ROR_RATE_DATA = COUNTY_DATA.map((countyData) => ({
  data: [
    countyData["name"],
    {
      type: "bar",
      values: [countyData["ror_pct"]]
    },
    countyData["ror_pct"],
    countyData["ror_cases"],
    countyData["total_cases"]
  ]
}));
const BAIL_POSTING_DATA = COUNTY_DATA.map((countyData) => ({
  data: [
    countyData["name"],
    countyData["avg_bail_amount"],
    countyData["non_posting_rate"],
    countyData["total_cases"]
  ]
}));
const COUNTY_BAIL_TYPE_DATA = COUNTY_DATA.map((countyData) => ({
  data: [
    countyData["name"],
    {
      type: "dist",
      values: [
        {
          className: "cash-bar",
          value: countyData["cash_bail_pct"],
          name: "Cash Bail"
        },
        {
          className: "unsecured-bar",
          value: countyData["unsecured_pct"],
          name: "Unsecured"
        },
        {
          className: "ror-bar",
          value: countyData["ror_pct"],
          name: "ROR"
        },
        {
          className: "nonmonetary-bar",
          value: countyData["nonmonetary_pct"],
          name: "Nonmonetary"
        },
        {
          className: "nominal-bar",
          value: countyData["nominal_pct"],
          name: "Nominal"
        }
      ],
    }
  ],
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
        end: 0.6,
        averages: [
          {
            name: "Avg.",
            value: STATE_DATA["cash_bail_pct"]
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
      values: [STATE_DATA["cash_bail_pct"]]
    },
    STATE_DATA["cash_bail_pct"],
    STATE_DATA["cash_bail_cases"],
    STATE_DATA["total_cases"]
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
        end: 0.75,
        averages: [
          {
            name: "Avg.",
            value: STATE_DATA["ror_pct"]
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
      values: [STATE_DATA["ror_pct"]]
    },
    STATE_DATA["ror_pct"],
    STATE_DATA["ror_cases"],
    STATE_DATA["total_cases"]
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
        text: "Non-Posting Rt.",
        unit: "percent"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "total-cases-cell number-cell",
      header: {
        text: "Total Cases",
        unit: "number"
      },
      sortable: true,
      searchable: false
    }
  ];
  const initSort = { col: 2, dir: -1 };
  const stateData = [
    "Pennsylvania",
    STATE_DATA["avg_bail_amount"],
    STATE_DATA["non_posting_rate"],
    STATE_DATA["total_cases"]
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
        render: (value) => toPercent(value)
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
      {
        rowHeader: "Total Cases",
        dataKey: "r",
        render: (value) => toNumberString(value)
      }
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

  const PLOT_DATA = COUNTY_DATA.reduce((acc, countyData) => ({
    ...acc,
    [countyData["name"]]: {
      showName: false,
      x: countyData["cash_bail_pct"],
      r: countyData["cash_bail_cases"],
      y: countyData["avg_bail_amount"]
    }
  }), {});
  PLOT_DATA["State Average"] = {
    showName: true,
    x: STATE_DATA["cash_bail_pct"],
    r: STATE_DATA["cash_bail_cases"],
    y: STATE_DATA["avg_bail_amount"]
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

const createAvgBailAmountBarChart = () => {
  const nonPostingRateToText = (num) => `${num}%`;
  const bailAmountToText = (num) => (num === 0 ? "0" : `${num}K`);

  const xAxis = {
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
  STATE_DATA["cash_bail_pct"],
  "Cash Bail Rate"
);
const rorRateMap = new BailRateMap(
  "ror-rate",
  ROR_RATE_DATA,
  STATE_DATA["ror_pct"],
  "ROR Rate"
);
const rateChloroplethContainer = document.getElementById(
  "rate-chloropleth-container"
);
new SwitchableMap(cashBailRateMap, rorRateMap, rateChloroplethContainer);

/* RENDER GRAPHS */
createCasesScatterPlot();
createAvgBailAmountBarChart();
const headerConfig = [
  {
    title: "Cash Bail",
    className: "cash-bar",
    render: (value) => toPercent(value)
  },
  {
    title: "Unsecured",
    className: "unsecured-bar",
    render: (value) => toPercent(value)
  },
  {
    title: "ROR",
    className: "ror-bar",
    render: (value) => toPercent(value)
  },
  {
    title: "Nonmonetary",
    className: "nonmonetary-bar",
    render: (value) => toPercent(value)
  },
  {
    title: "Nominal",
    className: "nominal-bar",
    render: (value) => toPercent(value)
  },
];
new DistributionGraph(
  document.getElementById("dist-graph-container"),
  COUNTY_BAIL_TYPE_DATA,
  headerConfig
);
