import { RankedTable } from './classes/Table.js';

const createBailRateTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "County",
      sortable: false
    },
    {
      class: "viz-cell",
      header: {
        "start": 0,
        "end": 60,
        "averages": [
          {
            "name": "State Average",
            "value": 42.5
          }
        ]
      },
      sortable: false
    },
    {
      class: "bail-rate-cell number-cell",
      header: "Cash Bail Rate (%)",
      sortable: true
    },
    {
      class: "bail-cases-cell number-cell",
      header: "Cash Bail Cases",
      sortable: true
    },
    {
      class: "total-cases-cell number-cell",
      header: "Total Cases",
      sortable: true
    },
  ];
  const initSort = 2; // initially sort by cash bail rate
  const data = [
    ["Delaware", {"type": "bar", "values": [55.7]}, 55.7, 9514, 17863],
    ["Lehigh", {"type": "bar", "values": [54.9]}, 54.9, 6526, 13069],
    ["Lackawanna", {"type": "bar", "values": [52.6]}, 52.6, 3236, 6148],
    ["Berks", {"type": "bar", "values": [50.9]}, 50.9, 6266, 12230],
    ["Philadelphia", {"type": "bar", "values": [50.1]}, 50.1, 32823, 65487],
    ["Beaver", {"type": "bar", "values": [49.0]}, 49.0, 6226, 12230]
  ];
  const tableElement = document.getElementById("bail-rate-table");
  new RankedTable(data, columnConfigs, initSort, tableElement);
}


const createBailRaceTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "County",
      sortable: false
    },
    {
      class: "viz-cell",
      header: {
        "start": 0,
        "end": 100,
        "averages": [
          {
            "name": "Black",
            "value": 54.7
          },
          {
            "name": "White",
            "value": 37.9
          }
        ]
      },
      sortable: false
    },
    {
      class: "bail-black-cell number-cell",
      header: "% Cash Bail Black",
      sortable: true
    },
    {
      class: "bail-white-cell number-cell",
      header: "% Cash Bail White",
      sortable: true
    },
    {
      class: "diff-cell number-cell",
      header: "Difference",
      sortable: true
    },
  ]
  const initSort = 4; // initially sort by difference
  const data = [
    ["Somerset", {"type": "line", "values": [69.6, 23.2]}, 69.6, 23.2, "+46.4"],
    ["Centre", {"type": "line", "values": [46.7, 21.9]}, 46.7, 21.9, "+25.7"],
    ["Lycoming", {"type": "line", "values": [55, 28.1]}, 55, 28.1, "+26.9"],
    ["Jefferson", {"type": "line", "values": [73, 38.4]}, 73, 38.4, "+34.6"],
    ["Crawford", {"type": "line", "values": [53.3, 28.3]}, 53.3, 28.3, "+25"],
    ["Blair", {"type": "line", "values": [58.7, 31.8]}, 58.7, 31.8, "+26.9"]
  ]
  const tableElement = document.getElementById("bail-race-table");

  new RankedTable(data, columnConfigs, initSort, tableElement);
}

createBailRateTable();
createBailRaceTable();
