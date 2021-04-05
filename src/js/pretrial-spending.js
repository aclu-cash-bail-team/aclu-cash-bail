import { Table } from "./classes/Table.js";
import { PRETRIAL_SPENDING_DATA } from "./data.js";

/* TABLE CREATION FUNCTIONS */
const createPretrialSpendingTable = () => {
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
      class: "spending-cell number-cell",
      header: {
        "text": "Cost",
        "unit": "dollars"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "total-budget-cell number-cell",
      header: {
        "text": "Budget",
        "unit": "dollars"
      },
      sortable: true,
      searchable: false
    },
    {
      class: "fraction-budget-cell number-cell",
      header: {
        "text": "Pct. Budget",
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
            "name": "",
            "value": 62.4,
          },
        ],
        "unit": "percent"
      },
      sortable: false,
      searchable: false
    }
  ];
  const initSort = 1;
  const stateData = [
    "Pennsylvania",
    "$10.1M",
    "$16.1M",
    62.4,
    {
      "type": "bar",
      "values": [
        62.4
      ]
    }
  ];

  const tableContainer = document.getElementById("pretrial-spending-container");
  return new Table(PRETRIAL_SPENDING_DATA, columnConfigs, initSort, tableContainer, stateData);
};

/* RENDER PAGE */
createPretrialSpendingTable();