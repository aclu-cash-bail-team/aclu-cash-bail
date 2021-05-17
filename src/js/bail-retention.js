import { Table } from "./classes/Table.js";
import { BAIL_RETENTION_FEE_DATA } from "./data.js";

/* TABLE CREATION FUNCTIONS */
const createBailRetentionFeeTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: {
        text: "County",
        unit: ""
      },
      sortable: true,
      searchable: true
    },
    {
      class: "retention-fee-cell",
      header: {
        text: "Retention Fee",
        unit: ""
      },
      sortable: false,
      searchable: false
    }
  ];
  const initSort = { col: 0, dir: 1 }; // initially sort by county name
  const tableContainer = document.getElementById(
    "bail-retention-fee-container"
  );
  return new Table(
    BAIL_RETENTION_FEE_DATA,
    columnConfigs,
    initSort,
    tableContainer
  );
};

/* FOOTNOTE CREATION FUNCTIONS */
const createBailRetentionFeeFootnotes = () => {
  const footnotesContainer = document.getElementById(
    "bail-retention-fee-footnotes"
  );
  BAIL_RETENTION_FEE_DATA.forEach((data) => {
    if (data.data[1].type == "footnote") {
      const number = data.data[1].number;
      const footnote = document.createElement("p");
      footnote.className = "bail-retention-footnote";
      footnote.innerText = number;
      const text = document.createElement("span");
      text.className = "footnote-text";
      text.innerText = data.data[1].footnote;
      footnote.appendChild(text);
      footnotesContainer.appendChild(footnote);
    }
  });
};

/* RENDER PAGE */
createBailRetentionFeeTable();
createBailRetentionFeeFootnotes();
