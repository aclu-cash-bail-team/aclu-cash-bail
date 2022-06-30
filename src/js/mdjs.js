import { Table } from "./classes/Table.js";
import { DistributionGraph } from "./classes/Graph.js";
import { MDJ_BAIL_TYPE_DATA, COUNTY_BAIL_TYPE_DATA } from "./data.js";
import { toMoney, toPercent, toNumberString } from "./helpers";
import { COUNTY_DATA } from "./raw-data.js";

/* TABLE CREATION FUNCTIONS */
const createMdjTable = (tableContainer, county = "") => {
  const columnConfigs = [
    {
      class: "caret-cell",
      header: {
        text: "",
        unit: ""
      },
      sortable: false,
      searchable: false
    },
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
      class: "total-cases-cell number-cell",
      header: {
        text: "Total Cases",
        unit: "number"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "total-bail-rate-cell number-cell",
      header: {
        text: "Cash bail rt.",
        unit: "percent"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "viz-cell bail-dist-cell",
      header: {
        text: "Bail Types",
        unit: "number"
      },
      sortable: false,
      searchable: false
    }
  ];
  const initSort = { col: 3, dir: -1 };
  if (county !== "") {
      const countyMdjBailTypeData = MDJ_BAIL_TYPE_DATA.flatMap(row => {
        const countyName = row.data[1];
        if (countyName === county) {
          return row.collapseData;
        } else {
          return [];
        }
      })
    return new Table(countyMdjBailTypeData, columnConfigs, initSort, tableContainer);
  } else {
    return new Table(MDJ_BAIL_TYPE_DATA, columnConfigs, initSort, tableContainer);
  }
};

/* RENDER PAGE */
createMdjTable(document.getElementById("mdj-container"));

const counties = COUNTY_DATA.map(county => county["name"]);
counties.forEach((name) => {
  const tableContainer = document.getElementById(`${name.toLowerCase()}-mdj-container`)
  if (tableContainer !== null) {
    createMdjTable(tableContainer, name)
  }
});

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

counties.forEach((name) => {
  const rowContainer = document.getElementById(`${name.toLowerCase()}-dist-row-container`)
  if (rowContainer !== null) {
    const data = COUNTY_BAIL_TYPE_DATA.filter(row => row.data[0] === name);
    new DistributionGraph(rowContainer, data, headerConfig);
  }
});

/*
  Produce county HTML - consider moving to templating engine if modifying HTML frequently
  Parcel supports Pug: https://parceljs.org/languages/pug/
*/
// const html = countyName =>
// `
//       <div class="table-container" id="${countyName.toLowerCase()}-mdj-container">
//         <div class="search-container">
//           <div class="ui fluid multiple search selection dropdown">
//             <input type="hidden" name="county" />
//             <i class="dropdown icon"></i>
//             <div class="default text">Select judges</div>
//             <div class="menu"></div>
//           </div>
//         </div>
//         <table class="mdj-table">
//           <thead></thead>
//           <tbody></tbody>
//         </table>
//         <div class="btn-text view-all-btn"></div>
//       </div>
//       <div id="${countyName.toLowerCase()}-dist-row-container" class="dist-row-container"></div>
// `
// console.log(counties.sort((a, b) => a.localeCompare(b)).map(name => html(name)).join(""))