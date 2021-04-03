import { Table } from "./classes/Table.js";
import { MDJ_DATA } from "./data.js";

/* TABLE CREATION FUNCTIONS */
const createMdjTable = () => {
  const columnConfigs = [
    {
      class: "caret-cell",
      header: {
        "text": "",
        "unit": ""
      },
      sortable: false,
      searchable: false,
    },
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
      class: "total-bail-rate-cell  number-cell",
      header: {
        "text": "Cash Bail Rate",
        "unit": "percent"
      },
      sortable: true,
      searchable: false
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
      class: "viz-cell bail-dist-cell",
      header: {
        "text": "Bail Types",
        "unit": "number"
      },
      sortable: false,
      searchable: false
    },
  ];
  const initSort = 2;
  const tableContainer = document.getElementById("mdj-container");
  return new Table(MDJ_DATA, columnConfigs, initSort, tableContainer);
};

/* RENDER PAGE */
createMdjTable();