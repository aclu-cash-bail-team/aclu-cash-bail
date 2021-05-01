import { Table, SwitchableTable } from "./classes/Table.js";
import { BailRateMap, BailPostingMap, SwitchableMap } from "./classes/Map.js";
import { ScatterPlot, DistributionGraph } from "./classes/Graph.js";
import { BAIL_RATE_DATA, ROR_RATE_DATA, BAIL_POSTING_DATA, BAIL_CASES_SCATTER_PLOT, MDJ_DATA } from "./data.js";

/* TABLE CREATION FUNCTIONS */
const createBailRateTable = () => {
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
      class: "bail-rate-cell number-cell",
      header: {
        "text": "Rate\xa0(%)",
        "unit": "percent"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "bail-cases-cell number-cell",
      header: {
        "text": "Cases",
        "unit": "number"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "total-cases-cell number-cell",
      header: {
        "text": "Total",
        "unit": "number"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "viz-cell",
      header: {
        "start": 0,
        "end": 60,
        "averages": [
          {
            "name": "Avg.",
            "value": 42.5966697900,
          },
        ],
        "unit": "percent"
      },
      sortable: false,
      searchable: false
    },
  ];
  const initSort = {col: 2, dir: -1}; // initially sort by cash bail rate
  const stateData = [
    "Pennsylvania",
    42.5966697900,
    2470,
    5681,
    {
      "type": "bar",
      "values": [
        42.5966697900
      ]
    },
  ];

  const tableContainer = document.getElementById("bail-rate-container");
  return new Table(BAIL_RATE_DATA, columnConfigs, initSort, tableContainer, stateData, false);
};

const createRorRateTable = () => {
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
      class: "ror-rate-cell number-cell",
      header: {
        "text": "Rate\xa0(%)",
        "unit": "percent"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "ror-cases-cell number-cell",
      header: {
        "text": "Cases",
        "unit": "number"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "total-cases-cell number-cell",
      header: {
        "text": "Cases",
        "unit": "number"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "viz-cell",
      header: {
        "start": 0,
        "end": 75,
        "averages": [
          {
            "name": "Avg.",
            "value": 22.73,
          }
        ],
        "unit": "percent"
      },
      sortable: false,
      searchable: false
    },
  ];
  const initSort = {col: 2, dir: -1}; // initially sort by ror bail rate
  const stateData = [
    "Pennsylvania",
    22.73,
    1294,
    5681,
    {
      "type": "bar",
      "values": [
        22.73
      ]
    },
  ];

  const tableContainer = document.getElementById("ror-rate-container");
  return new Table(ROR_RATE_DATA, columnConfigs, initSort, tableContainer, stateData, false);
};

const createBailPostingTable = () => {
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
      class: "bail-amount-cell number-cell",
      header: {
        "text": "Bail Set",
        "unit": "dollars"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "nonposting-rate-cell number-cell",
      header: {
        "text": "Non-posting rt.",
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
            "name": "Avg.",
            "value": 58.5211725
          }
        ],
        "unit": "percent"
      },
      sortable: false,
      searchable: false
    },
  ];
  const initSort = {col: 2, dir: -1};
  const stateData = [
    "Pennsylvania",
    "$31.8K",
    58.5211725,
    {
      "type": "bar",
      "values": [
        58.5211725
      ]
    }
  ];

  const tableContainer = document.getElementById("bail-posting-container");
  return new Table(BAIL_POSTING_DATA, columnConfigs, initSort, tableContainer, stateData);
};

/* PLOT CREATION FUNCTIONS */
const createCasesScatterPlot = () => {
  const cashBailRateToText = num => `${num}%`;
  const bailAmountToText = num => num === 0 ? "0" : `${num}K`;
  const totalBailCasesToText = num => num.toLocaleString();

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
    max: 70,
    numTicks: 7,
    convert: bailAmountToText
  };

  const tooltipConfig = {
    rows: [
      { rowHeader: "Cash Bail Rate", dataKey: "x", render: num => `${num.toFixed(1)}%`},
      { rowHeader: "Average Bail Amount", dataKey: "y", render: value => (value * 1000).toLocaleString("en", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }) },
      { rowHeader: "Total Cases", dataKey: "r", render: totalBailCasesToText }
    ]
  };

  const radiusDesktopMin = 4, radiusDesktop10k = 35;
  const radiusMobileMin = 4, radiusMobile10k = 21;

  const maxRadiusValue = Math.max(...Object.values(BAIL_CASES_SCATTER_PLOT).map(county => county.r));
  const minRadiusValue = 100;

  const radiusDesktopMax = (radiusDesktop10k * (minRadiusValue - maxRadiusValue) + radiusDesktopMin * (maxRadiusValue - 10000)) / (minRadiusValue - 10000);
  const radiusMobileMax = (radiusMobile10k * (minRadiusValue - maxRadiusValue) + radiusMobileMin * (maxRadiusValue - 10000)) / (minRadiusValue - 10000);

  const radiusScale = {
    desktop: {
      min: radiusDesktopMin,
      max: radiusDesktopMax,
      minValue: minRadiusValue,
      maxValue: maxRadiusValue
    },
    mobile: {
      min: radiusMobileMin,
      max: radiusMobileMax,
      minValue: minRadiusValue,
      maxValue: maxRadiusValue
    },
  };

  const container = document.getElementById("cases-scatter-plot");
  return new ScatterPlot(BAIL_CASES_SCATTER_PLOT, xAxis, yAxis, radiusScale, tooltipConfig, container);
};

/* RENDER PAGE */
const bailRateTable = createBailRateTable();
const rorRateTable = createRorRateTable();

const rateTableContainer = document.getElementById("rate-table-container");
new SwitchableTable(bailRateTable, rorRateTable, rateTableContainer);

createBailPostingTable();

const cashBailRateMap = new BailRateMap("cash-bail-rate", BAIL_RATE_DATA, 42.6);
const rorRateMap = new BailRateMap("ror-rate", ROR_RATE_DATA, 22.7);
const rateChloroplethContainer = document.getElementById("rate-chloropleth-container");
new SwitchableMap(cashBailRateMap, rorRateMap, rateChloroplethContainer);
new BailPostingMap("bail-posting", BAIL_POSTING_DATA, 58.5, 70);

createCasesScatterPlot();
new DistributionGraph(document.getElementById("dist-graph-container"), MDJ_DATA);