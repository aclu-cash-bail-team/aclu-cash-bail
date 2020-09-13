import { RankedTable } from "./classes/Table.js";

const createBailRateTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "County",
      sortable: false,
      searchable: true
    },
    {
      class: "viz-cell",
      header: {
        "start": 0,
        "end": 90,
        "averages": [
          {
            "name": "State Average",
            "value": 38.9
          }
        ]
      },
      sortable: false,
      searchable: false
    },
    {
      class: "bail-rate-cell number-cell",
      header: "Cash Bail Rate (%)",
      sortable: true,
      searchable: false
    },
    {
      class: "bail-cases-cell number-cell",
      header: "Cash Bail Cases",
      sortable: true,
      searchable: false
    },
    {
      class: "total-cases-cell number-cell",
      header: "Total Cases",
      sortable: true,
      searchable: false
    },
  ];
  const initSort = 2; // initially sort by cash bail rate
  const data = [
    ["Bucks", {"type": "bar", "values": [32.7]}, 32.7, 4959, 15185],
    ["Fulton", {"type": "bar", "values": [29.5]}, 29.5, 113, 383],
    ["Philadphia", {"type": "bar", "values": [50.8]}, 50.8, 32072, 63180],
    ["Franklin", {"type": "bar", "values": [37.9]}, 37.9, 1772, 4681],
    ["Lycoming", {"type": "bar", "values": [34.8]}, 34.8, 1557, 4475],
    ["Lancaster", {"type": "bar", "values": [45.3]}, 45.3, 5430, 11977],
    ["Bedford", {"type": "bar", "values": [38.6]}, 38.6, 563, 1460],
    ["Jefferson", {"type": "bar", "values": [39.5]}, 39.5, 460, 1166],
    ["Centre", {"type": "bar", "values": [25.8]}, 25.8, 871, 3370],
    ["Northumberland", {"type": "bar", "values": [36]}, 36, 869, 2414],
    ["Mifflin", {"type": "bar", "values": [48.8]}, 48.8, 721, 1477],
    ["Delaware", {"type": "bar", "values": [56.6]}, 56.6, 9514, 16808],
    ["Somerset", {"type": "bar", "values": [25.4]}, 25.4, 498, 1962],
    ["Venango", {"type": "bar", "values": [37.8]}, 37.8, 586, 1549],
    ["Luzerne", {"type": "bar", "values": [38.5]}, 38.5, 3828, 9950],
    ["Cambria", {"type": "bar", "values": [44.6]}, 44.6, 2059, 4613],
    ["Dauphin", {"type": "bar", "values": [43.1]}, 43.1, 5850, 13585],
    ["Columbia", {"type": "bar", "values": [38.7]}, 38.7, 667, 1722],
    ["Wayne", {"type": "bar", "values": [36.7]}, 36.7, 286, 779],
    ["Blair", {"type": "bar", "values": [34.7]}, 34.7, 1674, 4826],
    ["Bradford", {"type": "bar", "values": [45.7]}, 45.7, 824, 1805],
    ["Lackawanna", {"type": "bar", "values": [52.8]}, 52.8, 3052, 5783],
    ["Montour", {"type": "bar", "values": [36.4]}, 36.4, 100, 275],
    ["Berks", {"type": "bar", "values": [51.6]}, 51.6, 6036, 11688],
    ["Snyder", {"type": "bar", "values": [35.9]}, 35.9, 381, 1060],
    ["Erie", {"type": "bar", "values": [44.4]}, 44.4, 2750, 6198],
    ["Susquehanna", {"type": "bar", "values": [40.5]}, 40.5, 317, 783],
    ["Union", {"type": "bar", "values": [25]}, 25, 186, 743],
    ["Northampton", {"type": "bar", "values": [46.2]}, 46.2, 3804, 8234],
    ["Monroe", {"type": "bar", "values": [33.2]}, 33.2, 1910, 5757],
    ["Adams", {"type": "bar", "values": [30.5]}, 30.5, 775, 2537],
    ["Cameron", {"type": "bar", "values": [26.8]}, 26.8, 30, 112],
    ["Carbon", {"type": "bar", "values": [33.2]}, 33.2, 1098, 3307],
    ["Chester", {"type": "bar", "values": [38.3]}, 38.3, 3968, 10351],
    ["Perry", {"type": "bar", "values": [28.7]}, 28.7, 305, 1064],
    ["Warren", {"type": "bar", "values": [40.7]}, 40.7, 338, 831],
    ["Montgomery", {"type": "bar", "values": [34.1]}, 34.1, 6723, 19702],
    ["Washington", {"type": "bar", "values": [39.2]}, 39.2, 2596, 6615],
    ["Wyoming", {"type": "bar", "values": [35.7]}, 35.7, 377, 1056],
    ["Cumberland", {"type": "bar", "values": [38.5]}, 38.5, 2593, 6732],
    ["Mercer", {"type": "bar", "values": [36.2]}, 36.2, 1653, 4571],
    ["Lebanon", {"type": "bar", "values": [39.1]}, 39.1, 2085, 5329],
    ["Clearfield", {"type": "bar", "values": [36.7]}, 36.7, 734, 2002],
    ["McKean", {"type": "bar", "values": [42.5]}, 42.5, 488, 1147],
    ["Forest", {"type": "bar", "values": [40.7]}, 40.7, 50, 123],
    ["Crawford", {"type": "bar", "values": [29.3]}, 29.3, 225, 768],
    ["Juniata", {"type": "bar", "values": [36.9]}, 36.9, 168, 455],
    ["Pike", {"type": "bar", "values": [34.4]}, 34.4, 382, 1109],
    ["Elk", {"type": "bar", "values": [28.7]}, 28.7, 229, 799],
    ["Westmoreland", {"type": "bar", "values": [32.2]}, 32.2, 3840, 11934],
    ["Clinton", {"type": "bar", "values": [37.1]}, 37.1, 527, 1421],
    ["York", {"type": "bar", "values": [44.5]}, 44.5, 7356, 16539],
    ["Tioga", {"type": "bar", "values": [36.4]}, 36.4, 868, 2385],
    ["Schuylkill", {"type": "bar", "values": [38]}, 38, 2100, 5531],
    ["Lehigh", {"type": "bar", "values": [55.1]}, 55.1, 6526, 11845],
    ["Clarion", {"type": "bar", "values": [40.8]}, 40.8, 487, 1193],
    ["Fayette", {"type": "bar", "values": [44.4]}, 44.4, 2463, 5546],
    ["Potter", {"type": "bar", "values": [23.9]}, 23.9, 142, 593],
    ["Lawrence", {"type": "bar", "values": [49.3]}, 49.3, 1182, 2398],
    ["Allegheny", {"type": "bar", "values": [43.8]}, 43.8, 13884, 31723],
    ["Huntingdon", {"type": "bar", "values": [40.8]}, 40.8, 552, 1353],
    ["Beaver", {"type": "bar", "values": [83.1]}, 83.1, 4959, 5967],
    ["Butler", {"type": "bar", "values": [31]}, 31, 626, 2017],
    ["Sullivan", {"type": "bar", "values": [35]}, 35, 36, 103],
    ["Indiana", {"type": "bar", "values": [34.9]}, 34.9, 322, 922],
    ["Greene", {"type": "bar", "values": [38.8]}, 38.8, 324, 834],
    ["Armstrong", {"type": "bar", "values": [41]}, 41, 742, 1808]
  ];
  const tableContainer = document.getElementById("bail-rate-container");
  new RankedTable(data, columnConfigs, initSort, tableContainer);
};


const createBailRaceTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "County",
      sortable: false,
      searchable: true
    },
    {
      class: "viz-cell",
      header: {
        "start": 0,
        "end": 100,
        "averages": [
          {
            "name": "Black",
            "value": 54.6
          },
          {
            "name": "White",
            "value": 35.9
          }
        ]
      },
      sortable: false,
      searchable: false
    },
    {
      class: "bail-black-cell number-cell",
      header: "% Cash Bail Black",
      sortable: true,
      searchable: false
    },
    {
      class: "bail-white-cell number-cell",
      header: "% Cash Bail White",
      sortable: true,
      searchable: false
    },
    {
      class: "diff-cell number-cell",
      header: "Diff",
      sortable: true,
      searchable:false
    },
  ];
  const initSort = 4; // initially sort by difference
  const data = [
    ["Bucks",{"type": "line", "values": [41.1, 30.6]}, 41.1, 30.6, "+10.5"],
    ["Fulton",{"type": "line", "values": [31.6, 29.3]}, 31.6, 29.3, "+2.3"],
    ["Philadelphia",{"type": "line", "values": [56, 43.3]}, 56, 43.3, "+12.7"],
    ["Franklin",{"type": "line", "values": [49.3, 35.2]}, 49.3, 35.2, "+14.1"],
    ["Lycoming",{"type": "line", "values": [55, 28.1]}, 55, 28.1, "+26.9"],
    ["Lancaster",{"type": "line", "values": [55.5, 43.1]}, 55.5, 43.1, "+12.4"],
    ["Bedford",{"type": "line", "values": [52.6, 37.6]}, 52.6, 37.6, "+15"],
    ["Jefferson",{"type": "line", "values": [73, 38.4]}, 73, 38.4, "+34.6"],
    ["Centre",{"type": "line", "values": [46.7, 21.9]}, 46.7, 21.9, "+24.8"],
    ["Northumberland",{"type": "line", "values": [56.8, 33.9]}, 56.8, 33.9, "+22.9"],
    ["Mifflin",{"type": "line", "values": [70.1, 47.5]}, 70.1, 47.5, "+22.6"],
    ["Delaware",{"type": "line", "values": [63.8, 48.5]}, 63.8, 48.5, "+15.3"],
    ["Somerset",{"type": "line", "values": [69.6, 23.2]}, 69.6, 23.2, "+46.4"],
    ["Venango",{"type": "line", "values": [60.1, 35.6]}, 60.1, 35.6, "+24.5"],
    ["Luzerne",{"type": "line", "values": [53.6, 34.7]}, 53.6, 34.7, "+18.9"],
    ["Cambria",{"type": "line", "values": [65.5, 39.1]}, 65.5, 39.1, "+26.4"],
    ["Dauphin",{"type": "line", "values": [51.2, 36.5]}, 51.2, 36.5, "+14.7"],
    ["Columbia",{"type": "line", "values": [40.8, 38.5]}, 40.8, 38.5, "+2.3"],
    ["Wayne",{"type": "line", "values": [64.9, 35.3]}, 64.9, 35.3, "+29.6"],
    ["Blair",{"type": "line", "values": [58.7, 31.8]}, 58.7, 31.8, "+26.9"],
    ["Bradford",{"type": "line", "values": [62.3, 45.1]}, 62.3, 45.1, "+17.2"],
    ["Lackawanna",{"type": "line", "values": [67.1, 49]}, 67.1, 49, "+18.1"],
    ["Montour",{"type": "line", "values": [46.2, 35.3]}, 46.2, 35.3, "+10.9"],
    ["Berks",{"type": "line", "values": [58.4, 50.2]}, 58.4, 50.2, "+8.2"],
    ["Snyder",{"type": "line", "values": [52.5, 34.6]}, 52.5, 34.6, "+17.9"],
    ["Erie",{"type": "line", "values": [63.7, 37]}, 63.7, 37, "+26.7"],
    ["Susquehanna",{"type": "line", "values": [66.7, 39.8]}, 66.7, 39.8, "+26.9"],
    ["Union",{"type": "line", "values": [38.2, 23.2]}, 38.2, 23.2, "+15"],
    ["Northampton",{"type": "line", "values": [55.7, 43.9]}, 55.7, 43.9, "+11.8"],
    ["Monroe",{"type": "line", "values": [35.1, 32.4]}, 35.1, 32.4, "+2.7"],
    ["Adams",{"type": "line", "values": [43.6, 29]}, 43.6, 29, "+14.6"],
    ["Cameron",{"type": "line", "values": [100, 25.5]}, 100, 25.5, "+74.5"],
    ["Carbon",{"type": "line", "values": [43.8, 32.3]}, 43.8, 32.3, "+11.5"],
    ["Chester",{"type": "line", "values": [48.5, 34.3]}, 48.5, 34.3, "+14.2"],
    ["Perry",{"type": "line", "values": [40, 27.7]}, 40, 27.7, "+12.3"],
    ["Warren",{"type": "line", "values": [70, 40]}, 70, 40, "+30"],
    ["Montgomery",{"type": "line", "values": [43.3, 28.7]}, 43.3, 28.7, "+14.6"],
    ["Washington",{"type": "line", "values": [55.8, 35.8]}, 55.8, 35.8, "+20"],
    ["Wyoming",{"type": "line", "values": [40, 35.6]}, 40, 35.6, "+4.4"],
    ["Cumberland",{"type": "line", "values": [51.6, 35]}, 51.6, 35, "+16.6"],
    ["Mercer",{"type": "line", "values": [45.4, 33.4]}, 45.4, 33.4, "+12"],
    ["Lebanon",{"type": "line", "values": [48.8, 38]}, 48.8, 38, "+10.8"],
    ["Clearfield",{"type": "line", "values": [59.3, 35.6]}, 59.3, 35.6, "+23.7"],
    ["McKean",{"type": "line", "values": [61.3, 41.2]}, 61.3, 41.2, "+20.1"],
    ["Forest",{"type": "line", "values": [85, 32]}, 85, 32, "+53"],
    ["Crawford",{"type": "line", "values": [53.3, 28.3]}, 53.3, 28.3, "+25"],
    ["Juniata",{"type": "line", "values": [43.8, 36.7]}, 43.8, 36.7, "+7.1"],
    ["Pike",{"type": "line", "values": [37.4, 34]}, 37.4, 34, "+3.4"],
    ["Elk",{"type": "line", "values": [27.8,28.7]}, 27.8, 28.7, "-0.9"],
    ["Westmoreland",{"type": "line", "values": [50.1, 28.6]}, 50.1, 28.6, "+21.5"],
    ["Clinton",{"type": "line", "values": [47.1, 36]}, 47.1, 36, "+11.1"],
    ["York",{"type": "line", "values": [54.1, 41.1]}, 54.1, 41.1, "+13"],
    ["Tioga",{"type": "line", "values": [57, 34.5]}, 57, 34.5, "+22.5"],
    ["Schuylkill",{"type": "line", "values": [46.5, 37.3]}, 46.5, 37.3, "+9.2"],
    ["Lehigh",{"type": "line", "values": [61.8, 52.9]}, 61.8, 52.9, "+8.9"],
    ["Clarion",{"type": "line", "values": [40.6, 40.8]}, 40.6, 40.8, "-0.2"],
    ["Fayette",{"type": "line", "values": [54, 42.3]}, 54, 42.3, "+11.7"],
    ["Potter",{"type": "line", "values": [75, 23.2]}, 75, 23.2, "+51.8"],
    ["Lawrence",{"type": "line", "values": [66.3, 43.5]}, 66.3, 43.5, "+22.8"],
    ["Allegheny",{"type": "line", "values": [57.1, 35.3]}, 57.1, 35.3, "+21.8"],
    ["Huntingdon",{"type": "line", "values": [64.1, 37.8]}, 64.1, 37.8, "+26.3"],
    ["Beaver",{"type": "line", "values": [64.3, 43.9]}, 64.3, 43.9, "+20.4"],
    ["Butler",{"type": "line", "values": [44.8, 29.5]}, 44.8, 29.5, "+15.3"],
    ["Sullivan",{"type": "line", "values": [62.5, 32.6]}, 62.5, 32.6, "+29.9"],
    ["Indiana",{"type": "line", "values": [30.4, 36.2]}, 30.4, 36.2, "-5.8"],
    ["Greene",{"type": "line", "values": [59, 37.9]}, 59, 37.9, "+21.1"],
    ["Armstrong",{"type": "line", "values": [62.7, 39.5]}, 62.7, 39.5, "+23.2"]
  ];
  const tableContainer = document.getElementById("bail-race-container");

  new RankedTable(data, columnConfigs, initSort, tableContainer);
};

createBailRateTable();
createBailRaceTable();
