import { Table } from "./classes/Table.js";
import { MDJ_DATA } from "./data.js";

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
  const initSort = { col: 2, dir: -1 };
  const tableContainer = document.getElementById("mdj-container");
  return new Table(MDJ_DATA, columnConfigs, initSort, tableContainer);
};

/* RENDER PAGE */
createMdjTable();
