import { Table } from "./classes/Table.js";
import { COUNTY_DATA, MDJ_DATA } from "./data.js";

const COUNTY_INFO = COUNTY_DATA.reduce((acc, data) => ({
  ...acc, [data["name"]]: data
}), {});
const MDJ_BAIL_TYPE_DATA = Object.entries(MDJ_DATA).map(([county, judges]) => ({
  data: [
    "",
    county,
    COUNTY_INFO[county]["total_cases"],
    COUNTY_INFO[county]["cash_bail_pct"],
    {
      type: "dist",
      values: [
        {
          "className": "cash-bar",
          "value": COUNTY_INFO[county]["cash_bail_pct"],
          "name": "Cash bail"
        },
        {
          "className": "unsecured-bar",
          "value": COUNTY_INFO[county]["unsecured_pct"],
          "name": "Unsecured"
        },
        {
          "className": "ror-bar",
          "value": COUNTY_INFO[county]["ror_pct"],
          "name": "ROR"
        },
        {
          "className": "nonmonetary-bar",
          "value": COUNTY_INFO[county]["nonmonetary_pct"],
          "name": "Nonmonetary"
        },
        {
          "className": "nominal-bar",
          "value": COUNTY_INFO[county]["nominal_pct"],
          "name": "Nominal"
        }
      ],
      name: county
    }
  ],
  outlier: COUNTY_INFO[county]["is_outlier"],
  collapseData: judges.map((judge) => ({
    data: [
      "",
      judge["name"],
      judge["total_cases"],
      judge["cash_bail_pct"],
      {
        type: "dist",
        values: [
          {
            "className": "cash-bar",
            "value": judge["cash_bail_pct"],
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": judge["unsecured_pct"],
            "name": "Unsecured"
          },
          {
            "className": "ror-bar",
            "value": judge["ror_pct"],
            "name": "ROR"
          },
          {
            "className": "nonmonetary-bar",
            "value": judge["nonmonetary_pct"],
            "name": "Nonmonetary"
          },
          {
            "className": "nominal-bar",
            "value": judge["nominal_pct"],
            "name": "Nominal"
          }
        ],
        name: judge["name"]
      }
    ],
    outlier: false
  })),
  isCollapsed: true
}));

/* TABLE CREATION FUNCTIONS */
const createMdjTable = () => {
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
  const tableContainer = document.getElementById("mdj-container");
  return new Table(MDJ_BAIL_TYPE_DATA, columnConfigs, initSort, tableContainer);
};

/* RENDER PAGE */
createMdjTable();
