/*
 * To get the data in this format, export a CSV with the columns in the order
 * you want. In the case of BAIL_RACE_DATA, I had [county, black %, white %,
 * difference]. I pasted the contents of the CSV into this file (you can wrap
 * multi-line strings in ``) and created the following script to convert from
 * that string to the output array. JSON.stringify will output something with
 * no spacing, so i just pasted the result into a JSON formatter to get the
 * desired format (https://jsonformatter.org).
 *
 * const excelData = ``;
 * const data = [];
 * const lines = excelData.split("\n");
 * lines.forEach((line, i) => {
 *   const cells = line.split(",");
 *   const diff = parseFloat(cells[3]);
 *   const entry = {
 *     "data": [
 *       cells[0], // county
 *       {
 *         "type": "line", // visualization
 *         "values": [parseFloat(cells[1]), parseFloat(cells[2])]
 *       },
 *       parseFloat(cells[1]), // black cash bail rate
 *       parseFloat(cells[2]), // white cash bail rate
 *       `${diff > 0 ? "+" : ""}${diff.toFixed(1)}` // overall rate
 *     ],
 *     "outlier": false
 *   };
 *   data.push(entry);
 * });
 *
 * console.log(JSON.stringify(data));
 */

export const BAIL_RATE_DATA = [
  {
    data: [
      "Adams",
      30.18867925,
      775,
      2537,
      {
        type: "bar",
        values: [30.18867925]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Allegheny",
      43.50802205,
      13884,
      31723,
      {
        type: "bar",
        values: [43.50802205]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Armstrong",
      41.05888709,
      742,
      1808,
      {
        type: "bar",
        values: [41.05888709]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Beaver",
      49.05179283,
      4959,
      5967,
      {
        type: "bar",
        values: [49.05179283]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Bedford",
      38.63636364,
      563,
      1460,
      {
        type: "bar",
        values: [38.63636364]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Berks",
      50.92425977,
      6036,
      11688,
      {
        type: "bar",
        values: [50.92425977]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Blair",
      34.04638145,
      1674,
      4826,
      {
        type: "bar",
        values: [34.04638145]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Bradford",
      45.49865229,
      824,
      1805,
      {
        type: "bar",
        values: [45.49865229]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Bucks",
      32.41325938,
      4959,
      15185,
      {
        type: "bar",
        values: [32.41325938]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Butler",
      31.15234375,
      626,
      2017,
      {
        type: "bar",
        values: [31.15234375]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Cambria",
      44.29388101,
      2059,
      4613,
      {
        type: "bar",
        values: [44.29388101]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Cameron",
      21.67832168,
      30,
      112,
      {
        type: "bar",
        values: [21.67832168]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Carbon",
      32.99299883,
      1098,
      3307,
      {
        type: "bar",
        values: [32.99299883]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Centre",
      26.08333333,
      871,
      3370,
      {
        type: "bar",
        values: [26.08333333]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Chester",
      38.0970325,
      3968,
      10351,
      {
        type: "bar",
        values: [38.0970325]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Clarion",
      40,
      487,
      1193,
      {
        type: "bar",
        values: [40]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Clearfield",
      36.28318584,
      734,
      2002,
      {
        type: "bar",
        values: [36.28318584]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Clinton",
      36.92628651,
      527,
      1421,
      {
        type: "bar",
        values: [36.92628651]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Columbia",
      38.18897638,
      667,
      1722,
      {
        type: "bar",
        values: [38.18897638]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Crawford",
      28.8973384,
      225,
      768,
      {
        type: "bar",
        values: [28.8973384]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Cumberland",
      38.5278224,
      2593,
      6732,
      {
        type: "bar",
        values: [38.5278224]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Dauphin",
      42.44132779,
      5850,
      13585,
      {
        type: "bar",
        values: [42.44132779]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Delaware",
      55.68060922,
      9514,
      16808,
      {
        type: "bar",
        values: [55.68060922]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Elk",
      28.62318841,
      229,
      799,
      {
        type: "bar",
        values: [28.62318841]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Erie",
      43.95330739,
      2750,
      6198,
      {
        type: "bar",
        values: [43.95330739]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Fayette",
      44.27074081,
      2463,
      5546,
      {
        type: "bar",
        values: [44.27074081]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Forest",
      34.75609756,
      50,
      123,
      {
        type: "bar",
        values: [34.75609756]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Franklin",
      37.47902685,
      1772,
      4681,
      {
        type: "bar",
        values: [37.47902685]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Fulton",
      28.67298578,
      113,
      383,
      {
        type: "bar",
        values: [28.67298578]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Greene",
      37.44343891,
      324,
      834,
      {
        type: "bar",
        values: [37.44343891]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Huntingdon",
      38.96907216,
      552,
      1353,
      {
        type: "bar",
        values: [38.96907216]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Indiana",
      35.01070664,
      322,
      922,
      {
        type: "bar",
        values: [35.01070664]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Jefferson",
      38.55721393,
      460,
      1166,
      {
        type: "bar",
        values: [38.55721393]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Juniata",
      34.46215139,
      168,
      455,
      {
        type: "bar",
        values: [34.46215139]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lackawanna",
      52.63500325,
      3052,
      5783,
      {
        type: "bar",
        values: [52.63500325]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lancaster",
      44.93240475,
      5430,
      11977,
      {
        type: "bar",
        values: [44.93240475]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lawrence",
      48.92407633,
      1182,
      2398,
      {
        type: "bar",
        values: [48.92407633]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lebanon",
      38.70437956,
      2085,
      5329,
      {
        type: "bar",
        values: [38.70437956]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lehigh",
      54.88215488,
      6526,
      11845,
      {
        type: "bar",
        values: [54.88215488]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Luzerne",
      38.28885249,
      3828,
      9950,
      {
        type: "bar",
        values: [38.28885249]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lycoming",
      34.68169761,
      1557,
      4475,
      {
        type: "bar",
        values: [34.68169761]
      }
    ],
    outlier: false
  },
  {
    data: [
      "McKean",
      42.38134888,
      488,
      1147,
      {
        type: "bar",
        values: [42.38134888]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Mercer",
      36.12542955,
      1653,
      4571,
      {
        type: "bar",
        values: [36.12542955]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Mifflin",
      48.49498328,
      721,
      1477,
      {
        type: "bar",
        values: [48.49498328]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Monroe",
      32.79661017,
      1910,
      5757,
      {
        type: "bar",
        values: [32.79661017]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Montgomery",
      33.63556165,
      6723,
      19702,
      {
        type: "bar",
        values: [33.63556165]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Montour",
      35.19163763,
      100,
      275,
      {
        type: "bar",
        values: [35.19163763]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Northampton",
      45.83529967,
      3804,
      8234,
      {
        type: "bar",
        values: [45.83529967]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Northumberland",
      36,
      869,
      2414,
      {
        type: "bar",
        values: [36]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Perry",
      28.98148148,
      305,
      1064,
      {
        type: "bar",
        values: [28.98148148]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Philadelphia",
      50.12216352,
      32072,
      63180,
      {
        type: "bar",
        values: [50.12216352]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Pike",
      34.16738568,
      382,
      1109,
      {
        type: "bar",
        values: [34.16738568]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Potter",
      23.36601307,
      142,
      593,
      {
        type: "bar",
        values: [23.36601307]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Schuylkill",
      37.74187822,
      2100,
      5531,
      {
        type: "bar",
        values: [37.74187822]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Snyder",
      35.92870544,
      381,
      1060,
      {
        type: "bar",
        values: [35.92870544]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Somerset",
      25,
      498,
      1962,
      {
        type: "bar",
        values: [25]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Sullivan",
      36.44859813,
      36,
      103,
      {
        type: "bar",
        values: [36.44859813]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Susquehanna",
      40.32663317,
      317,
      783,
      {
        type: "bar",
        values: [40.32663317]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Tioga",
      36.38603696,
      868,
      2385,
      {
        type: "bar",
        values: [36.38603696]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Union",
      25.36136662,
      186,
      743,
      {
        type: "bar",
        values: [25.36136662]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Venango",
      37.84477229,
      586,
      1549,
      {
        type: "bar",
        values: [37.84477229]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Warren",
      40.61393152,
      338,
      831,
      {
        type: "bar",
        values: [40.61393152]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Washington",
      38.93688681,
      2596,
      6615,
      {
        type: "bar",
        values: [38.93688681]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Wayne",
      37.20349563,
      286,
      779,
      {
        type: "bar",
        values: [37.20349563]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Westmoreland",
      31.71662559,
      3840,
      11934,
      {
        type: "bar",
        values: [31.71662559]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Wyoming",
      35.68118628,
      377,
      1056,
      {
        type: "bar",
        values: [35.68118628]
      }
    ],
    outlier: false
  },
  {
    data: [
      "York",
      44.27380952,
      7356,
      16539,
      {
        type: "bar",
        values: [44.27380952]
      }
    ],
    outlier: false
  }
];
export const ROR_RATE_DATA = [
  {
    data: [
      "Adams",
      24.8748556,
      631,
      2537,
      {
        type: "bar",
        values: [24.8748556]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Allegheny",
      29.55770303,
      9377,
      31723,
      {
        type: "bar",
        values: [29.55770303]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Armstrong",
      43.273906,
      782,
      1808,
      {
        type: "bar",
        values: [43.273906]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Beaver",
      35.80876494,
      2137,
      5967,
      {
        type: "bar",
        values: [35.80876494]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Bedford",
      1.804812834,
      26,
      1460,
      {
        type: "bar",
        values: [1.804812834]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Berks",
      15.21347947,
      1778,
      11688,
      {
        type: "bar",
        values: [15.21347947]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Blair",
      0.3598560576,
      17,
      4826,
      {
        type: "bar",
        values: [0.3598560576]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Bradford",
      11.53638814,
      208,
      1805,
      {
        type: "bar",
        values: [11.53638814]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Bucks",
      17.70282471,
      2688,
      15185,
      {
        type: "bar",
        values: [17.70282471]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Butler",
      57.27539063,
      1155,
      2017,
      {
        type: "bar",
        values: [57.27539063]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Cambria",
      21.61761592,
      997,
      4613,
      {
        type: "bar",
        values: [21.61761592]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Cameron",
      0,
      0,
      112,
      {
        type: "bar",
        values: [0]
      }
    ],
    outlier: true
  },
  {
    data: [
      "Carbon",
      13.12718786,
      434,
      3307,
      {
        type: "bar",
        values: [13.12718786]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Centre",
      61.55555556,
      2074,
      3370,
      {
        type: "bar",
        values: [61.55555556]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Chester",
      20.7253886,
      2145,
      10351,
      {
        type: "bar",
        values: [20.7253886]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Clarion",
      25.70281124,
      307,
      1193,
      {
        type: "bar",
        values: [25.70281124]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Clearfield",
      0.09832841691,
      2,
      2002,
      {
        type: "bar",
        values: [0.09832841691]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Clinton",
      11.40472879,
      162,
      1421,
      {
        type: "bar",
        values: [11.40472879]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Columbia",
      19.6287964,
      338,
      1722,
      {
        type: "bar",
        values: [19.6287964]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Crawford",
      53.99239544,
      415,
      768,
      {
        type: "bar",
        values: [53.99239544]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Cumberland",
      41.36118008,
      2784,
      6732,
      {
        type: "bar",
        values: [41.36118008]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Dauphin",
      18.47205582,
      2509,
      13585,
      {
        type: "bar",
        values: [18.47205582]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Delaware",
      0.1063889356,
      18,
      16808,
      {
        type: "bar",
        values: [0.1063889356]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Elk",
      0,
      0,
      799,
      {
        type: "bar",
        values: [0]
      }
    ],
    outlier: true
  },
  {
    data: [
      "Erie",
      36.48249027,
      2261,
      6198,
      {
        type: "bar",
        values: [36.48249027]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Fayette",
      0.7816663706,
      43,
      5546,
      {
        type: "bar",
        values: [0.7816663706]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Forest",
      12.80487805,
      16,
      123,
      {
        type: "bar",
        values: [12.80487805]
      }
    ],
    outlier: true
  },
  {
    data: [
      "Franklin",
      50.02097315,
      2341,
      4681,
      {
        type: "bar",
        values: [50.02097315]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Fulton",
      51.42180095,
      197,
      383,
      {
        type: "bar",
        values: [51.42180095]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Greene",
      26.58371041,
      222,
      834,
      {
        type: "bar",
        values: [26.58371041]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Huntingdon",
      29.07216495,
      393,
      1353,
      {
        type: "bar",
        values: [29.07216495]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Indiana",
      30.72805139,
      283,
      922,
      {
        type: "bar",
        values: [30.72805139]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Jefferson",
      0.08291873964,
      1,
      1166,
      {
        type: "bar",
        values: [0.08291873964]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Juniata",
      18.92430279,
      86,
      455,
      {
        type: "bar",
        values: [18.92430279]
      }
    ],
    outlier: true
  },
  {
    data: [
      "Lackawanna",
      1.805465192,
      104,
      5783,
      {
        type: "bar",
        values: [1.805465192]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lancaster",
      15.22326915,
      1823,
      11977,
      {
        type: "bar",
        values: [15.22326915]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lawrence",
      24.68534308,
      592,
      2398,
      {
        type: "bar",
        values: [24.68534308]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lebanon",
      3.52189781,
      188,
      5329,
      {
        type: "bar",
        values: [3.52189781]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lehigh",
      8.111417202,
      961,
      11845,
      {
        type: "bar",
        values: [8.111417202]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Luzerne",
      29.28027748,
      2913,
      9950,
      {
        type: "bar",
        values: [29.28027748]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lycoming",
      0.3315649867,
      15,
      4475,
      {
        type: "bar",
        values: [0.3315649867]
      }
    ],
    outlier: false
  },
  {
    data: [
      "McKean",
      4.912572856,
      56,
      1147,
      {
        type: "bar",
        values: [4.912572856]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Mercer",
      11.8556701,
      542,
      4571,
      {
        type: "bar",
        values: [11.8556701]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Mifflin",
      0.4682274247,
      7,
      1477,
      {
        type: "bar",
        values: [0.4682274247]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Monroe",
      17.01694915,
      980,
      5757,
      {
        type: "bar",
        values: [17.01694915]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Montgomery",
      14.69809841,
      2896,
      19702,
      {
        type: "bar",
        values: [14.69809841]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Montour",
      39.02439024,
      107,
      275,
      {
        type: "bar",
        values: [39.02439024]
      }
    ],
    outlier: true
  },
  {
    data: [
      "Northampton",
      15.20764512,
      1252,
      8234,
      {
        type: "bar",
        values: [15.20764512]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Northumberland",
      11.87628866,
      287,
      2414,
      {
        type: "bar",
        values: [11.87628866]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Perry",
      41.48148148,
      441,
      1064,
      {
        type: "bar",
        values: [41.48148148]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Philadelphia",
      36.20163088,
      22872,
      63180,
      {
        type: "bar",
        values: [36.20163088]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Pike",
      31.06125971,
      344,
      1109,
      {
        type: "bar",
        values: [31.06125971]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Potter",
      16.50326797,
      98,
      593,
      {
        type: "bar",
        values: [16.50326797]
      }
    ],
    outlier: true
  },
  {
    data: [
      "Schuylkill",
      10.6870229,
      591,
      5531,
      {
        type: "bar",
        values: [10.6870229]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Snyder",
      6.472795497,
      69,
      1060,
      {
        type: "bar",
        values: [6.472795497]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Somerset",
      4.640718563,
      91,
      1962,
      {
        type: "bar",
        values: [4.640718563]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Sullivan",
      1.869158879,
      2,
      103,
      {
        type: "bar",
        values: [1.869158879]
      }
    ],
    outlier: true
  },
  {
    data: [
      "Susquehanna",
      25.50251256,
      200,
      783,
      {
        type: "bar",
        values: [25.50251256]
      }
    ],
    outlier: true
  },
  {
    data: [
      "Tioga",
      13.05954825,
      311,
      2385,
      {
        type: "bar",
        values: [13.05954825]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Union",
      47.70039422,
      354,
      743,
      {
        type: "bar",
        values: [47.70039422]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Venango",
      0.1282873637,
      2,
      1549,
      {
        type: "bar",
        values: [0.1282873637]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Warren",
      42.03069658,
      349,
      831,
      {
        type: "bar",
        values: [42.03069658]
      }
    ],
    outlier: true
  },
  {
    data: [
      "Washington",
      25.6113633,
      1694,
      6615,
      {
        type: "bar",
        values: [25.6113633]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Wayne",
      34.58177278,
      269,
      779,
      {
        type: "bar",
        values: [34.58177278]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Westmoreland",
      32.92518089,
      3929,
      11934,
      {
        type: "bar",
        values: [32.92518089]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Wyoming",
      0.1853568119,
      2,
      1056,
      {
        type: "bar",
        values: [0.1853568119]
      }
    ],
    outlier: true
  },
  {
    data: [
      "York",
      33.30952381,
      5509,
      16539,
      {
        type: "bar",
        values: [33.30952381]
      }
    ],
    outlier: false
  }
];

export const BAIL_RACE_RATE_DATA = [
  {
    data: [
      "Cameron",
      100,
      25.45454545,
      {
        type: "line",
        values: [100, 25.45454545]
      },
      "+74.5"
    ],
    outlier: true
  },
  {
    data: [
      "Forest",
      85,
      32.03883495,
      {
        type: "line",
        values: [85, 32.03883495]
      },
      "+53.0"
    ],
    outlier: true
  },
  {
    data: [
      "Potter",
      75,
      23.24786325,
      {
        type: "line",
        values: [75, 23.24786325]
      },
      "+51.8"
    ],
    outlier: true
  },
  {
    data: [
      "Somerset",
      69.56521739,
      23.20855615,
      {
        type: "line",
        values: [69.56521739, 23.20855615]
      },
      "+46.4"
    ],
    outlier: false
  },
  {
    data: [
      "Jefferson",
      72.97297297,
      38.35252436,
      {
        type: "line",
        values: [72.97297297, 38.35252436]
      },
      "+34.6"
    ],
    outlier: false
  },
  {
    data: [
      "Warren",
      70,
      39.95067818,
      {
        type: "line",
        values: [70, 39.95067818]
      },
      "+30.0"
    ],
    outlier: true
  },
  {
    data: [
      "Sullivan",
      62.5,
      32.63157895,
      {
        type: "line",
        values: [62.5, 32.63157895]
      },
      "+29.9"
    ],
    outlier: true
  },
  {
    data: [
      "Wayne",
      64.86486486,
      35.30997305,
      {
        type: "line",
        values: [64.86486486, 35.30997305]
      },
      "+29.6"
    ],
    outlier: false
  },
  {
    data: [
      "Blair",
      58.6998088,
      31.76853358,
      {
        type: "line",
        values: [58.6998088, 31.76853358]
      },
      "+26.9"
    ],
    outlier: false
  },
  {
    data: [
      "Lycoming",
      55.01355014,
      28.14726841,
      {
        type: "line",
        values: [55.01355014, 28.14726841]
      },
      "+26.9"
    ],
    outlier: false
  },
  {
    data: [
      "Susquehanna",
      66.66666667,
      39.76377953,
      {
        type: "line",
        values: [66.66666667, 39.76377953]
      },
      "+26.9"
    ],
    outlier: true
  },
  {
    data: [
      "Erie",
      63.73239437,
      37.02714731,
      {
        type: "line",
        values: [63.73239437, 37.02714731]
      },
      "+26.7"
    ],
    outlier: false
  },
  {
    data: [
      "Cambria",
      65.52083333,
      39.14590747,
      {
        type: "line",
        values: [65.52083333, 39.14590747]
      },
      "+26.4"
    ],
    outlier: false
  },
  {
    data: [
      "Huntingdon",
      64.05228758,
      37.83333333,
      {
        type: "line",
        values: [64.05228758, 37.83333333]
      },
      "+26.2"
    ],
    outlier: false
  },
  {
    data: [
      "Crawford",
      53.33333333,
      28.3197832,
      {
        type: "line",
        values: [53.33333333, 28.3197832]
      },
      "+25.0"
    ],
    outlier: false
  },
  {
    data: [
      "Centre",
      46.74115456,
      21.88492764,
      {
        type: "line",
        values: [46.74115456, 21.88492764]
      },
      "+24.9"
    ],
    outlier: false
  },
  {
    data: [
      "Venango",
      60.13986014,
      35.56187767,
      {
        type: "line",
        values: [60.13986014, 35.56187767]
      },
      "+24.6"
    ],
    outlier: false
  },
  {
    data: [
      "Clearfield",
      59.30232558,
      35.64718163,
      {
        type: "line",
        values: [59.30232558, 35.64718163]
      },
      "+23.7"
    ],
    outlier: false
  },
  {
    data: [
      "Armstrong",
      62.71186441,
      39.52662722,
      {
        type: "line",
        values: [62.71186441, 39.52662722]
      },
      "+23.2"
    ],
    outlier: false
  },
  {
    data: [
      "Northumberland",
      56.81818182,
      33.91066545,
      {
        type: "line",
        values: [56.81818182, 33.91066545]
      },
      "+22.9"
    ],
    outlier: false
  },
  {
    data: [
      "Lawrence",
      66.28477905,
      43.4806939,
      {
        type: "line",
        values: [66.28477905, 43.4806939]
      },
      "+22.8"
    ],
    outlier: false
  },
  {
    data: [
      "Mifflin",
      70.11494253,
      47.48201439,
      {
        type: "line",
        values: [70.11494253, 47.48201439]
      },
      "+22.6"
    ],
    outlier: false
  },
  {
    data: [
      "Tioga",
      57,
      34.50800915,
      {
        type: "line",
        values: [57, 34.50800915]
      },
      "+22.5"
    ],
    outlier: false
  },
  {
    data: [
      "Allegheny",
      57.06645057,
      35.29897333,
      {
        type: "line",
        values: [57.06645057, 35.29897333]
      },
      "+21.8"
    ],
    outlier: false
  },
  {
    data: [
      "Westmoreland",
      50.05045409,
      28.61736334,
      {
        type: "line",
        values: [50.05045409, 28.61736334]
      },
      "+21.4"
    ],
    outlier: false
  },
  {
    data: [
      "Greene",
      58.97435897,
      37.86163522,
      {
        type: "line",
        values: [58.97435897, 37.86163522]
      },
      "+21.1"
    ],
    outlier: false
  },
  {
    data: [
      "Beaver",
      64.33048433,
      43.92212726,
      {
        type: "line",
        values: [64.33048433, 43.92212726]
      },
      "+20.4"
    ],
    outlier: false
  },
  {
    data: [
      "McKean",
      61.33333333,
      41.23134328,
      {
        type: "line",
        values: [61.33333333, 41.23134328]
      },
      "+20.1"
    ],
    outlier: false
  },
  {
    data: [
      "Washington",
      55.77092511,
      35.82116788,
      {
        type: "line",
        values: [55.77092511, 35.82116788]
      },
      "+19.9"
    ],
    outlier: false
  },
  {
    data: [
      "Luzerne",
      53.5892323,
      34.6550856,
      {
        type: "line",
        values: [53.5892323, 34.6550856]
      },
      "+18.9"
    ],
    outlier: false
  },
  {
    data: [
      "Lackawanna",
      67.1345995,
      48.9720035,
      {
        type: "line",
        values: [67.1345995, 48.9720035]
      },
      "+18.2"
    ],
    outlier: false
  },
  {
    data: [
      "Snyder",
      52.5,
      34.59183673,
      {
        type: "line",
        values: [52.5, 34.59183673]
      },
      "+17.9"
    ],
    outlier: false
  },
  {
    data: [
      "Bradford",
      62.26415094,
      45.14840183,
      {
        type: "line",
        values: [62.26415094, 45.14840183]
      },
      "+17.1"
    ],
    outlier: false
  },
  {
    data: [
      "Cumberland",
      51.61744023,
      35.0094162,
      {
        type: "line",
        values: [51.61744023, 35.0094162]
      },
      "+16.6"
    ],
    outlier: false
  },
  {
    data: [
      "Butler",
      44.7761194,
      29.5154185,
      {
        type: "line",
        values: [44.7761194, 29.5154185]
      },
      "+15.3"
    ],
    outlier: false
  },
  {
    data: [
      "Delaware",
      63.75237882,
      48.4952381,
      {
        type: "line",
        values: [63.75237882, 48.4952381]
      },
      "+15.3"
    ],
    outlier: false
  },
  {
    data: [
      "Bedford",
      52.57731959,
      37.56419663,
      {
        type: "line",
        values: [52.57731959, 37.56419663]
      },
      "+15.0"
    ],
    outlier: false
  },
  {
    data: [
      "Union",
      38.20224719,
      23.24159021,
      {
        type: "line",
        values: [38.20224719, 23.24159021]
      },
      "+15.0"
    ],
    outlier: false
  },
  {
    data: [
      "Dauphin",
      51.21710526,
      36.4556962,
      {
        type: "line",
        values: [51.21710526, 36.4556962]
      },
      "+14.8"
    ],
    outlier: false
  },
  {
    data: [
      "Montgomery",
      43.27198364,
      28.69733969,
      {
        type: "line",
        values: [43.27198364, 28.69733969]
      },
      "+14.6"
    ],
    outlier: false
  },
  {
    data: [
      "Adams",
      43.56060606,
      29.03651562,
      {
        type: "line",
        values: [43.56060606, 29.03651562]
      },
      "+14.5"
    ],
    outlier: false
  },
  {
    data: [
      "Chester",
      48.47354138,
      34.29690666,
      {
        type: "line",
        values: [48.47354138, 34.29690666]
      },
      "+14.2"
    ],
    outlier: false
  },
  {
    data: [
      "Franklin",
      49.26553672,
      35.19494204,
      {
        type: "line",
        values: [49.26553672, 35.19494204]
      },
      "+14.1"
    ],
    outlier: false
  },
  {
    data: [
      "York",
      54.11985019,
      41.11844787,
      {
        type: "line",
        values: [54.11985019, 41.11844787]
      },
      "+13.0"
    ],
    outlier: false
  },
  {
    data: [
      "Philadelphia",
      56.02170568,
      43.3107617,
      {
        type: "line",
        values: [56.02170568, 43.3107617]
      },
      "+12.7"
    ],
    outlier: false
  },
  {
    data: [
      "Lancaster",
      55.54532904,
      43.07425541,
      {
        type: "line",
        values: [55.54532904, 43.07425541]
      },
      "+12.5"
    ],
    outlier: false
  },
  {
    data: [
      "Perry",
      40,
      27.68130746,
      {
        type: "line",
        values: [40, 27.68130746]
      },
      "+12.3"
    ],
    outlier: false
  },
  {
    data: [
      "Mercer",
      45.40337711,
      33.35235378,
      {
        type: "line",
        values: [45.40337711, 33.35235378]
      },
      "+12.1"
    ],
    outlier: false
  },
  {
    data: [
      "Northampton",
      55.7063541,
      43.86813852,
      {
        type: "line",
        values: [55.7063541, 43.86813852]
      },
      "+11.8"
    ],
    outlier: false
  },
  {
    data: [
      "Fayette",
      54,
      42.30092389,
      {
        type: "line",
        values: [54, 42.30092389]
      },
      "+11.7"
    ],
    outlier: false
  },
  {
    data: [
      "Carbon",
      43.7751004,
      32.34139961,
      {
        type: "line",
        values: [43.7751004, 32.34139961]
      },
      "+11.4"
    ],
    outlier: false
  },
  {
    data: [
      "Clinton",
      47.14285714,
      35.98750976,
      {
        type: "line",
        values: [47.14285714, 35.98750976]
      },
      "+11.2"
    ],
    outlier: false
  },
  {
    data: [
      "Lebanon",
      48.84547069,
      37.97733949,
      {
        type: "line",
        values: [48.84547069, 37.97733949]
      },
      "+10.9"
    ],
    outlier: false
  },
  {
    data: [
      "Montour",
      46.15384615,
      35.34136546,
      {
        type: "line",
        values: [46.15384615, 35.34136546]
      },
      "+10.8"
    ],
    outlier: true
  },
  {
    data: [
      "Bucks",
      41.06901218,
      30.62392673,
      {
        type: "line",
        values: [41.06901218, 30.62392673]
      },
      "+10.4"
    ],
    outlier: false
  },
  {
    data: [
      "Schuylkill",
      46.5060241,
      37.27521501,
      {
        type: "line",
        values: [46.5060241, 37.27521501]
      },
      "+9.2"
    ],
    outlier: false
  },
  {
    data: [
      "Lehigh",
      61.81634031,
      52.85376562,
      {
        type: "line",
        values: [61.81634031, 52.85376562]
      },
      "+9"
    ],
    outlier: false
  },
  {
    data: [
      "Berks",
      58.42078961,
      50.24259317,
      {
        type: "line",
        values: [58.42078961, 50.24259317]
      },
      "+8.2"
    ],
    outlier: false
  },
  {
    data: [
      "Juniata",
      43.75,
      36.67425968,
      {
        type: "line",
        values: [43.75, 36.67425968]
      },
      "+7.1"
    ],
    outlier: true
  },
  {
    data: [
      "Wyoming",
      40,
      35.59650824,
      {
        type: "line",
        values: [40, 35.59650824]
      },
      "+4.4"
    ],
    outlier: true
  },
  {
    data: [
      "Pike",
      37.41007194,
      34.02061856,
      {
        type: "line",
        values: [37.41007194, 34.02061856]
      },
      "+3.4"
    ],
    outlier: false
  },
  {
    data: [
      "Monroe",
      35.13011152,
      32.41612358,
      {
        type: "line",
        values: [35.13011152, 32.41612358]
      },
      "+2.7"
    ],
    outlier: false
  },
  {
    data: [
      "Columbia",
      40.7960199,
      38.46153846,
      {
        type: "line",
        values: [40.7960199, 38.46153846]
      },
      "+2.3"
    ],
    outlier: false
  },
  {
    data: [
      "Fulton",
      31.57894737,
      29.27536232,
      {
        type: "line",
        values: [31.57894737, 29.27536232]
      },
      "+2.3"
    ],
    outlier: false
  },
  {
    data: [
      "Clarion",
      40.625,
      40.83259522,
      {
        type: "line",
        values: [40.625, 40.83259522]
      },
      "−0.2"
    ],
    outlier: false
  },
  {
    data: [
      "Elk",
      27.77777778,
      28.68117798,
      {
        type: "line",
        values: [27.77777778, 28.68117798]
      },
      "−0.9"
    ],
    outlier: true
  },
  {
    data: [
      "Indiana",
      30.39215686,
      36.21169916,
      {
        type: "line",
        values: [30.39215686, 36.21169916]
      },
      "−5.8"
    ],
    outlier: false
  }
];
export const BAIL_RACE_AMOUNT_DATA = [
  {
    data: [
      "Adams",
      "$29.5K",
      "$26.1K",
      {
        type: "line",
        values: [29479, 26077]
      },
      "+$3.4K"
    ],
    outlier: false
  },
  {
    data: [
      "Allegheny",
      "$21.1K",
      "$15.9K",
      {
        type: "line",
        values: [21080, 15881]
      },
      "+$5.2K"
    ],
    outlier: false
  },
  {
    data: [
      "Armstrong",
      "$18.5K",
      "$13.6K",
      {
        type: "line",
        values: [18541, 13560]
      },
      "+$5.0K"
    ],
    outlier: false
  },
  {
    data: [
      "Beaver",
      "$26.1K",
      "$13.7K",
      {
        type: "line",
        values: [26145, 13733]
      },
      "+$12.4K"
    ],
    outlier: false
  },
  {
    data: [
      "Bedford",
      "$65.0K",
      "$49.2K",
      {
        type: "line",
        values: [65010, 49176]
      },
      "+$15.8K"
    ],
    outlier: false
  },
  {
    data: [
      "Berks",
      "$35.0K",
      "$27.4K",
      {
        type: "line",
        values: [35039, 27399]
      },
      "+$7.6K"
    ],
    outlier: false
  },
  {
    data: [
      "Blair",
      "$43.7K",
      "$29.3K",
      {
        type: "line",
        values: [43726, 29256]
      },
      "+$14.5K"
    ],
    outlier: false
  },
  {
    data: [
      "Bradford",
      "$63.1K",
      "$32.1K",
      {
        type: "line",
        values: [63125, 32077]
      },
      "+$31.0K"
    ],
    outlier: false
  },
  {
    data: [
      "Bucks",
      "$73.6K",
      "$58.7K",
      {
        type: "line",
        values: [73635, 58683]
      },
      "+$15.0K"
    ],
    outlier: false
  },
  {
    data: [
      "Butler",
      "$42.2K",
      "$12.2K",
      {
        type: "line",
        values: [42155, 12248]
      },
      "+$29.9K"
    ],
    outlier: false
  },
  {
    data: [
      "Cambria",
      "$51.5K",
      "$28.9K",
      {
        type: "line",
        values: [51483, 28879]
      },
      "+$22.6K"
    ],
    outlier: false
  },
  {
    data: [
      "Cameron",
      "$10.0K",
      "$26.5K",
      {
        type: "line",
        values: [10000, 26481]
      },
      "−$16.5K"
    ],
    outlier: true
  },
  {
    data: [
      "Carbon",
      "$35.2K",
      "$24.5K",
      {
        type: "line",
        values: [35236, 24452]
      },
      "+$10.8K"
    ],
    outlier: false
  },
  {
    data: [
      "Centre",
      "$46.0K",
      "$34.6K",
      {
        type: "line",
        values: [45976, 34614]
      },
      "+$11.4K"
    ],
    outlier: false
  },
  {
    data: [
      "Chester",
      "$32.2K",
      "$22.8K",
      {
        type: "line",
        values: [32205, 22836]
      },
      "+$9.4K"
    ],
    outlier: false
  },
  {
    data: [
      "Clarion",
      "$14.2K",
      "$20.7K",
      {
        type: "line",
        values: [14200, 20698]
      },
      "−$6.5K"
    ],
    outlier: false
  },
  {
    data: [
      "Clearfield",
      "$43.9K",
      "$23.2K",
      {
        type: "line",
        values: [43890, 23215]
      },
      "+$20.7K"
    ],
    outlier: false
  },
  {
    data: [
      "Clinton",
      "$29.6K",
      "$19.8K",
      {
        type: "line",
        values: [29609, 19817]
      },
      "+$9.8K"
    ],
    outlier: false
  },
  {
    data: [
      "Columbia",
      "$57.7K",
      "$33.1K",
      {
        type: "line",
        values: [57747, 33130]
      },
      "+$24.6K"
    ],
    outlier: false
  },
  {
    data: [
      "Crawford",
      "$32.6K",
      "$21.5K",
      {
        type: "line",
        values: [32600, 21505]
      },
      "+$11.1K"
    ],
    outlier: false
  },
  {
    data: [
      "Cumberland",
      "$34.0K",
      "$23.3K",
      {
        type: "line",
        values: [34037, 23281]
      },
      "+$10.8K"
    ],
    outlier: false
  },
  {
    data: [
      "Dauphin",
      "$40.0K",
      "$32.3K",
      {
        type: "line",
        values: [40031, 32313]
      },
      "+$7.7K"
    ],
    outlier: false
  },
  {
    data: [
      "Delaware",
      "$43.3K",
      "$32.0K",
      {
        type: "line",
        values: [43250, 31974]
      },
      "+$11.3K"
    ],
    outlier: false
  },
  {
    data: [
      "Elk",
      "$14.4K",
      "$21.1K",
      {
        type: "line",
        values: [14375, 21093]
      },
      "−$6.7K"
    ],
    outlier: true
  },
  {
    data: [
      "Erie",
      "$38.9K",
      "$23.6K",
      {
        type: "line",
        values: [38881, 23611]
      },
      "+$15.3K"
    ],
    outlier: false
  },
  {
    data: [
      "Fayette",
      "$25.4K",
      "$17.2K",
      {
        type: "line",
        values: [25444, 17203]
      },
      "+$8.2K"
    ],
    outlier: false
  },
  {
    data: [
      "Forest",
      "$21.4K",
      "$22.3K",
      {
        type: "line",
        values: [21438, 22344]
      },
      "−$0.9K"
    ],
    outlier: true
  },
  {
    data: [
      "Franklin",
      "$61.4K",
      "$50.2K",
      {
        type: "line",
        values: [61407, 50242]
      },
      "+$11.2K"
    ],
    outlier: false
  },
  {
    data: [
      "Fulton",
      "$24.0K",
      "$57.9K",
      {
        type: "line",
        values: [24000, 57879]
      },
      "−$33.9K"
    ],
    outlier: false
  },
  {
    data: [
      "Greene",
      "$21.0K",
      "$15.1K",
      {
        type: "line",
        values: [20977, 15107]
      },
      "+$5.9K"
    ],
    outlier: false
  },
  {
    data: [
      "Huntingdon",
      "$22.0K",
      "$18.0K",
      {
        type: "line",
        values: [22010, 18028]
      },
      "+$4.0K"
    ],
    outlier: false
  },
  {
    data: [
      "Indiana",
      "$20.9K",
      "$15.5K",
      {
        type: "line",
        values: [20861, 15479]
      },
      "+$5.4K"
    ],
    outlier: false
  },
  {
    data: [
      "Jefferson",
      "$35.0K",
      "$45.7K",
      {
        type: "line",
        values: [35040, 45707]
      },
      "−$10.7K"
    ],
    outlier: false
  },
  {
    data: [
      "Juniata",
      "$29.2K",
      "$22.3K",
      {
        type: "line",
        values: [29167, 22330]
      },
      "+$6.8K"
    ],
    outlier: true
  },
  {
    data: [
      "Lackawanna",
      "$41.1K",
      "$26.9K",
      {
        type: "line",
        values: [41104, 26940]
      },
      "+$14.2K"
    ],
    outlier: false
  },
  {
    data: [
      "Lancaster",
      "$57.7K",
      "$48.4K",
      {
        type: "line",
        values: [57668, 48383]
      },
      "+$9.3K"
    ],
    outlier: false
  },
  {
    data: [
      "Lawrence",
      "$25.8K",
      "$15.2K",
      {
        type: "line",
        values: [25778, 15192]
      },
      "+$10.6K"
    ],
    outlier: false
  },
  {
    data: [
      "Lebanon",
      "$36.3K",
      "$23.9K",
      {
        type: "line",
        values: [36343, 23902]
      },
      "+$12.4K"
    ],
    outlier: false
  },
  {
    data: [
      "Lehigh",
      "$25.1K",
      "$16.3K",
      {
        type: "line",
        values: [25138, 16341]
      },
      "+$8.8K"
    ],
    outlier: false
  },
  {
    data: [
      "Luzerne",
      "$47.1K",
      "$33.0K",
      {
        type: "line",
        values: [47113, 32968]
      },
      "+$14.1K"
    ],
    outlier: false
  },
  {
    data: [
      "Lycoming",
      "$77.0K",
      "$37.0K",
      {
        type: "line",
        values: [77030, 37028]
      },
      "+$40.0K"
    ],
    outlier: false
  },
  {
    data: [
      "McKean",
      "$34.9K",
      "$23.5K",
      {
        type: "line",
        values: [34911, 23475]
      },
      "+$11.4K"
    ],
    outlier: false
  },
  {
    data: [
      "Mercer",
      "$29.5K",
      "$23.0K",
      {
        type: "line",
        values: [29504, 23005]
      },
      "+$6.5K"
    ],
    outlier: false
  },
  {
    data: [
      "Mifflin",
      "$52.2K",
      "$35.3K",
      {
        type: "line",
        values: [52219, 35331]
      },
      "+$16.9K"
    ],
    outlier: false
  },
  {
    data: [
      "Monroe",
      "$34.1K",
      "$21.5K",
      {
        type: "line",
        values: [34085, 21495]
      },
      "+$12.6K"
    ],
    outlier: false
  },
  {
    data: [
      "Montgomery",
      "$29.2K",
      "$21.9K",
      {
        type: "line",
        values: [29169, 21885]
      },
      "+$7.3K"
    ],
    outlier: false
  },
  {
    data: [
      "Montour",
      "$25.6K",
      "$27.4K",
      {
        type: "line",
        values: [25556, 27449]
      },
      "−$1.9K"
    ],
    outlier: true
  },
  {
    data: [
      "Northampton",
      "$35.0K",
      "$24.1K",
      {
        type: "line",
        values: [34972, 24095]
      },
      "+$10.9K"
    ],
    outlier: false
  },
  {
    data: [
      "Northumberland",
      "$63.3K",
      "$38.6K",
      {
        type: "line",
        values: [63255, 38641]
      },
      "+$24.6K"
    ],
    outlier: false
  },
  {
    data: [
      "Perry",
      "$41.1K",
      "$24.0K",
      {
        type: "line",
        values: [41126, 24007]
      },
      "+$17.1K"
    ],
    outlier: false
  },
  {
    data: [
      "Philadelphia",
      "$54.3K",
      "$43.5K",
      {
        type: "line",
        values: [54302, 43459]
      },
      "+$10.8K"
    ],
    outlier: false
  },
  {
    data: [
      "Pike",
      "$34.8K",
      "$21.5K",
      {
        type: "line",
        values: [34755, 21534]
      },
      "+$13.2K"
    ],
    outlier: false
  },
  {
    data: [
      "Potter",
      "$15.7K",
      "$19.3K",
      {
        type: "line",
        values: [15700, 19338]
      },
      "−$3.6K"
    ],
    outlier: true
  },
  {
    data: [
      "Schuylkill",
      "$28.9K",
      "$20.0K",
      {
        type: "line",
        values: [28947, 19996]
      },
      "+$9.0K"
    ],
    outlier: false
  },
  {
    data: [
      "Snyder",
      "$29.7K",
      "$27.6K",
      {
        type: "line",
        values: [29659, 27551]
      },
      "+$2.1K"
    ],
    outlier: false
  },
  {
    data: [
      "Somerset",
      "$78.1K",
      "$33.9K",
      {
        type: "line",
        values: [78071, 33896]
      },
      "+$44.2K"
    ],
    outlier: false
  },
  {
    data: [
      "Sullivan",
      "$5.0K",
      "$18.7K",
      {
        type: "line",
        values: [5000, 18667]
      },
      "−$13.7K"
    ],
    outlier: true
  },
  {
    data: [
      "Susquehanna",
      "$29.8K",
      "$27.1K",
      {
        type: "line",
        values: [29808, 27138]
      },
      "+$2.7K"
    ],
    outlier: true
  },
  {
    data: [
      "Tioga",
      "$30.5K",
      "$18.9K",
      {
        type: "line",
        values: [30455, 18916]
      },
      "+$11.5K"
    ],
    outlier: false
  },
  {
    data: [
      "Union",
      "$34.7K",
      "$25.8K",
      {
        type: "line",
        values: [34667, 25807]
      },
      "+$8.9K"
    ],
    outlier: false
  },
  {
    data: [
      "Venango",
      "$48.7K",
      "$35.5K",
      {
        type: "line",
        values: [48712, 35510]
      },
      "+$13.2K"
    ],
    outlier: false
  },
  {
    data: [
      "Warren",
      "$32.7K",
      "$25.4K",
      {
        type: "line",
        values: [32692, 25369]
      },
      "+$7.3K"
    ],
    outlier: true
  },
  {
    data: [
      "Washington",
      "$33.5K",
      "$19.9K",
      {
        type: "line",
        values: [33527, 19878]
      },
      "+$13.6K"
    ],
    outlier: false
  },
  {
    data: [
      "Wayne",
      "$28.7K",
      "$32.1K",
      {
        type: "line",
        values: [28682, 32101]
      },
      "−$3.4K"
    ],
    outlier: false
  },
  {
    data: [
      "Westmoreland",
      "$30.9K",
      "$17.1K",
      {
        type: "line",
        values: [30920, 17072]
      },
      "+$13.8K"
    ],
    outlier: false
  },
  {
    data: [
      "Wyoming",
      "$22.6K",
      "$25.0K",
      {
        type: "line",
        values: [22611, 25042]
      },
      "−$2.4K"
    ],
    outlier: true
  },
  {
    data: [
      "York",
      "$30.3K",
      "$18.4K",
      {
        type: "line",
        values: [30258, 18416]
      },
      "+$11.8K"
    ],
    outlier: false
  }
];

export const RACE_SCATTER_PLOT = {
  Cameron: {
    showName: false,
    outlier: true,
    x: {
      black: 100,
      white: 25.45454545
    },
    y: {
      black: "$10,000",
      white: "$26,481"
    }
  },
  Forest: {
    showName: false,
    outlier: true,
    x: {
      black: 85,
      white: 32.03883495
    },
    y: {
      black: "$21,438",
      white: "$22,344"
    }
  },
  Potter: {
    showName: false,
    outlier: true,
    x: {
      black: 75,
      white: 23.24786325
    },
    y: {
      black: "$15,700",
      white: "$19,338"
    }
  },
  Somerset: {
    showName: false,
    outlier: false,
    x: {
      black: 69.56521739,
      white: 23.20855615
    },
    y: {
      black: "$78,071",
      white: "$33,896"
    }
  },
  Jefferson: {
    showName: false,
    outlier: false,
    x: {
      black: 72.97297297,
      white: 38.35252436
    },
    y: {
      black: "$35,040",
      white: "$45,707"
    }
  },
  Warren: {
    showName: false,
    outlier: true,
    x: {
      black: 70,
      white: 39.95067818
    },
    y: {
      black: "$32,692",
      white: "$25,369"
    }
  },
  Sullivan: {
    showName: false,
    outlier: true,
    x: {
      black: 62.5,
      white: 32.63157895
    },
    y: {
      black: "$5,000",
      white: "$18,667"
    }
  },
  Wayne: {
    showName: false,
    outlier: false,
    x: {
      black: 64.86486486,
      white: 35.30997305
    },
    y: {
      black: "$28,682",
      white: "$32,101"
    }
  },
  Blair: {
    showName: true,
    outlier: false,
    x: {
      black: 58.6998088,
      white: 31.76853358
    },
    y: {
      black: "$43,726",
      white: "$29,256"
    }
  },
  Lycoming: {
    showName: true,
    outlier: false,
    x: {
      black: 55.01355014,
      white: 28.14726841
    },
    y: {
      black: "$77,030",
      white: "$37,028"
    }
  },
  Susquehanna: {
    showName: false,
    outlier: true,
    x: {
      black: 66.66666667,
      white: 39.76377953
    },
    y: {
      black: "$29,808",
      white: "$27,138"
    }
  },
  Erie: {
    showName: true,
    outlier: false,
    x: {
      black: 63.73239437,
      white: 37.02714731
    },
    y: {
      black: "$38,881",
      white: "$23,611"
    }
  },
  Cambria: {
    showName: false,
    outlier: false,
    x: {
      black: 65.52083333,
      white: 39.14590747
    },
    y: {
      black: "$51,483",
      white: "$28,879"
    }
  },
  Huntingdon: {
    showName: false,
    outlier: false,
    x: {
      black: 64.05228758,
      white: 37.83333333
    },
    y: {
      black: "$22,010",
      white: "$18,028"
    }
  },
  Crawford: {
    showName: false,
    outlier: false,
    x: {
      black: 53.33333333,
      white: 28.3197832
    },
    y: {
      black: "$32,600",
      white: "$21,505"
    }
  },
  Centre: {
    showName: false,
    outlier: false,
    x: {
      black: 46.74115456,
      white: 21.88492764
    },
    y: {
      black: "$45,976",
      white: "$34,614"
    }
  },
  Venango: {
    showName: false,
    outlier: false,
    x: {
      black: 60.13986014,
      white: 35.56187767
    },
    y: {
      black: "$48,712",
      white: "$35,510"
    }
  },
  Clearfield: {
    showName: false,
    outlier: false,
    x: {
      black: 59.30232558,
      white: 35.64718163
    },
    y: {
      black: "$43,890",
      white: "$23,215"
    }
  },
  Armstrong: {
    showName: false,
    outlier: false,
    x: {
      black: 62.71186441,
      white: 39.52662722
    },
    y: {
      black: "$18,541",
      white: "$13,560"
    }
  },
  Northumberland: {
    showName: false,
    outlier: false,
    x: {
      black: 56.81818182,
      white: 33.91066545
    },
    y: {
      black: "$63,255",
      white: "$38,641"
    }
  },
  Lawrence: {
    showName: false,
    outlier: false,
    x: {
      black: 66.28477905,
      white: 43.4806939
    },
    y: {
      black: "$25,778",
      white: "$15,192"
    }
  },
  Mifflin: {
    showName: false,
    outlier: false,
    x: {
      black: 70.11494253,
      white: 47.48201439
    },
    y: {
      black: "$52,219",
      white: "$35,331"
    }
  },
  Tioga: {
    showName: false,
    outlier: false,
    x: {
      black: 57,
      white: 34.50800915
    },
    y: {
      black: "$30,455",
      white: "$18,916"
    }
  },
  Allegheny: {
    showName: true,
    outlier: false,
    x: {
      black: 57.06645057,
      white: 35.29897333
    },
    y: {
      black: "$21,080",
      white: "$15,881"
    }
  },
  Westmoreland: {
    showName: true,
    outlier: false,
    x: {
      black: 50.05045409,
      white: 28.61736334
    },
    y: {
      black: "$30,920",
      white: "$17,072"
    }
  },
  Greene: {
    showName: false,
    outlier: false,
    x: {
      black: 58.97435897,
      white: 37.86163522
    },
    y: {
      black: "$20,977",
      white: "$15,107"
    }
  },
  Beaver: {
    showName: false,
    outlier: false,
    x: {
      black: 64.33048433,
      white: 43.92212726
    },
    y: {
      black: "$26,145",
      white: "$13,733"
    }
  },
  McKean: {
    showName: false,
    outlier: false,
    x: {
      black: 61.33333333,
      white: 41.23134328
    },
    y: {
      black: "$34,911",
      white: "$23,475"
    }
  },
  Washington: {
    showName: false,
    outlier: false,
    x: {
      black: 55.77092511,
      white: 35.82116788
    },
    y: {
      black: "$33,527",
      white: "$19,878"
    }
  },
  Luzerne: {
    showName: false,
    outlier: false,
    x: {
      black: 53.5892323,
      white: 34.6550856
    },
    y: {
      black: "$47,113",
      white: "$32,968"
    }
  },
  Lackawanna: {
    showName: true,
    outlier: false,
    x: {
      black: 67.1345995,
      white: 48.9720035
    },
    y: {
      black: "$41,104",
      white: "$26,940"
    }
  },
  Snyder: {
    showName: false,
    outlier: false,
    x: {
      black: 52.5,
      white: 34.59183673
    },
    y: {
      black: "$29,659",
      white: "$27,551"
    }
  },
  Bradford: {
    showName: false,
    outlier: false,
    x: {
      black: 62.26415094,
      white: 45.14840183
    },
    y: {
      black: "$63,125",
      white: "$32,077"
    }
  },
  Cumberland: {
    showName: false,
    outlier: false,
    x: {
      black: 51.61744023,
      white: 35.0094162
    },
    y: {
      black: "$34,037",
      white: "$23,281"
    }
  },
  Butler: {
    showName: false,
    outlier: false,
    x: {
      black: 44.7761194,
      white: 29.5154185
    },
    y: {
      black: "$42,155",
      white: "$12,248"
    }
  },
  Delaware: {
    showName: true,
    outlier: false,
    x: {
      black: 63.75237882,
      white: 48.4952381
    },
    y: {
      black: "$43,250",
      white: "$31,974"
    }
  },
  Bedford: {
    showName: false,
    outlier: false,
    x: {
      black: 52.57731959,
      white: 37.56419663
    },
    y: {
      black: "$65,010",
      white: "$49,176"
    }
  },
  Union: {
    showName: true,
    outlier: false,
    x: {
      black: 38.20224719,
      white: 23.24159021
    },
    y: {
      black: "$34,667",
      white: "$25,807"
    }
  },
  Dauphin: {
    showName: true,
    outlier: false,
    x: {
      black: 51.21710526,
      white: 36.4556962
    },
    y: {
      black: "$40,031",
      white: "$32,313"
    }
  },
  Montgomery: {
    showName: true,
    outlier: false,
    x: {
      black: 43.27198364,
      white: 28.69733969
    },
    y: {
      black: "$29,169",
      white: "$21,885"
    }
  },
  Adams: {
    showName: false,
    outlier: false,
    x: {
      black: 43.56060606,
      white: 29.03651562
    },
    y: {
      black: "$29,479",
      white: "$26,077"
    }
  },
  Chester: {
    showName: false,
    outlier: false,
    x: {
      black: 48.47354138,
      white: 34.29690666
    },
    y: {
      black: "$32,205",
      white: "$22,836"
    }
  },
  Franklin: {
    showName: false,
    outlier: false,
    x: {
      black: 49.26553672,
      white: 35.19494204
    },
    y: {
      black: "$61,407",
      white: "$50,242"
    }
  },
  York: {
    showName: false,
    outlier: false,
    x: {
      black: 54.11985019,
      white: 41.11844787
    },
    y: {
      black: "$30,258",
      white: "$18,416"
    }
  },
  Philadelphia: {
    showName: true,
    outlier: false,
    x: {
      black: 56.02170568,
      white: 43.3107617
    },
    y: {
      black: "$54,302",
      white: "$43,459"
    }
  },
  Lancaster: {
    showName: false,
    outlier: false,
    x: {
      black: 55.54532904,
      white: 43.07425541
    },
    y: {
      black: "$57,668",
      white: "$48,383"
    }
  },
  Perry: {
    showName: false,
    outlier: false,
    x: {
      black: 40,
      white: 27.68130746
    },
    y: {
      black: "$41,126",
      white: "$24,007"
    }
  },
  Mercer: {
    showName: false,
    outlier: false,
    x: {
      black: 45.40337711,
      white: 33.35235378
    },
    y: {
      black: "$29,504",
      white: "$23,005"
    }
  },
  Northampton: {
    showName: false,
    outlier: false,
    x: {
      black: 55.7063541,
      white: 43.86813852
    },
    y: {
      black: "$34,972",
      white: "$24,095"
    }
  },
  Fayette: {
    showName: false,
    outlier: false,
    x: {
      black: 54,
      white: 42.30092389
    },
    y: {
      black: "$25,444",
      white: "$17,203"
    }
  },
  Carbon: {
    showName: false,
    outlier: false,
    x: {
      black: 43.7751004,
      white: 32.34139961
    },
    y: {
      black: "$35,236",
      white: "$24,452"
    }
  },
  Clinton: {
    showName: true,
    outlier: false,
    x: {
      black: 47.14285714,
      white: 35.98750976
    },
    y: {
      black: "$29,609",
      white: "$19,817"
    }
  },
  Lebanon: {
    showName: false,
    outlier: false,
    x: {
      black: 48.84547069,
      white: 37.97733949
    },
    y: {
      black: "$36,343",
      white: "$23,902"
    }
  },
  Montour: {
    showName: false,
    outlier: true,
    x: {
      black: 46.15384615,
      white: 35.34136546
    },
    y: {
      black: "$25,556",
      white: "$27,449"
    }
  },
  Bucks: {
    showName: false,
    outlier: false,
    x: {
      black: 41.06901218,
      white: 30.62392673
    },
    y: {
      black: "$73,635",
      white: "$58,683"
    }
  },
  Schuylkill: {
    showName: false,
    outlier: false,
    x: {
      black: 46.5060241,
      white: 37.27521501
    },
    y: {
      black: "$28,947",
      white: "$19,996"
    }
  },
  Lehigh: {
    showName: false,
    outlier: false,
    x: {
      black: 61.81634031,
      white: 52.85376562
    },
    y: {
      black: "$25,138",
      white: "$16,341"
    }
  },
  Berks: {
    showName: true,
    outlier: false,
    x: {
      black: 58.42078961,
      white: 50.24259317
    },
    y: {
      black: "$35,039",
      white: "$27,399"
    }
  },
  Juniata: {
    showName: false,
    outlier: true,
    x: {
      black: 43.75,
      white: 36.67425968
    },
    y: {
      black: "$29,167",
      white: "$22,330"
    }
  },
  Wyoming: {
    showName: false,
    outlier: true,
    x: {
      black: 40,
      white: 35.59650824
    },
    y: {
      black: "$22,611",
      white: "$25,042"
    }
  },
  Pike: {
    showName: false,
    outlier: false,
    x: {
      black: 37.41007194,
      white: 34.02061856
    },
    y: {
      black: "$34,755",
      white: "$21,534"
    }
  },
  Monroe: {
    showName: false,
    outlier: false,
    x: {
      black: 35.13011152,
      white: 32.41612358
    },
    y: {
      black: "$34,085",
      white: "$21,495"
    }
  },
  Columbia: {
    showName: false,
    outlier: false,
    x: {
      black: 40.7960199,
      white: 38.46153846
    },
    y: {
      black: "$57,747",
      white: "$33,130"
    }
  },
  Fulton: {
    showName: false,
    outlier: false,
    x: {
      black: 31.57894737,
      white: 29.27536232
    },
    y: {
      black: "$24,000",
      white: "$57,879"
    }
  },
  Clarion: {
    showName: false,
    outlier: false,
    x: {
      black: 40.625,
      white: 40.83259522
    },
    y: {
      black: "$14,200",
      white: "$20,698"
    }
  },
  Elk: {
    showName: false,
    outlier: true,
    x: {
      black: 27.77777778,
      white: 28.68117798
    },
    y: {
      black: "$14,375",
      white: "$21,093"
    }
  },
  Indiana: {
    showName: false,
    outlier: false,
    x: {
      black: 30.39215686,
      white: 36.21169916
    },
    y: {
      black: "$20,861",
      white: "$15,479"
    }
  },
  "State Average": {
    showName: true,
    outlier: false,
    x: {
      black: 54.7,
      white: 37
    },
    y: {
      black: "$36,202",
      white: "$26,868"
    }
  }
};

export const BAIL_CASES_SCATTER_PLOT = {
  "State Average": {
    showName: true,
    x: 42.59666979,
    y: "$31.8K",
    r: 2470
  },
  Adams: {
    showName: false,
    x: 30.18867925,
    r: 775,
    y: "$27.0K"
  },
  Allegheny: {
    showName: true,
    x: 43.50802205,
    r: 13884,
    y: "$18.6K"
  },
  Armstrong: {
    showName: false,
    x: 41.05888709,
    r: 742,
    y: "$13.9K"
  },
  Beaver: {
    showName: false,
    x: 49.05179283,
    r: 4959,
    y: "$17.6K"
  },
  Bedford: {
    showName: false,
    x: 38.63636364,
    r: 563,
    y: "$50.1K"
  },
  Berks: {
    showName: true,
    x: 50.92425977,
    r: 6036,
    y: "$28.3K"
  },
  Blair: {
    showName: true,
    x: 34.04638145,
    r: 1674,
    y: "$33.1K"
  },
  Bradford: {
    showName: false,
    x: 45.49865229,
    r: 824,
    y: "$32.7K"
  },
  Bucks: {
    showName: false,
    x: 32.41325938,
    r: 4959,
    y: "$62.6K"
  },
  Butler: {
    showName: false,
    x: 31.15234375,
    r: 626,
    y: "$17.6K"
  },
  Cambria: {
    showName: false,
    x: 44.29388101,
    r: 2059,
    y: "$37.0K"
  },
  Cameron: {
    showName: false,
    x: 21.67832168,
    r: 30,
    y: "$26.8K"
  },
  Carbon: {
    showName: false,
    x: 32.99299883,
    r: 1098,
    y: "$26.8K"
  },
  Centre: {
    showName: false,
    x: 26.08333333,
    r: 871,
    y: "$44.3K"
  },
  Chester: {
    showName: false,
    x: 38.0970325,
    r: 3968,
    y: "$26.4K"
  },
  Clarion: {
    showName: false,
    x: 40,
    r: 487,
    y: "$20.0K"
  },
  Clearfield: {
    showName: false,
    x: 36.28318584,
    r: 734,
    y: "$24.3K"
  },
  Clinton: {
    showName: true,
    x: 36.92628651,
    r: 527,
    y: "$21.0K"
  },
  Columbia: {
    showName: false,
    x: 38.18897638,
    r: 667,
    y: "$35.8K"
  },
  Crawford: {
    showName: false,
    x: 28.8973384,
    r: 225,
    y: "$22.6K"
  },
  Cumberland: {
    showName: false,
    x: 38.5278224,
    r: 2593,
    y: "$25.0K"
  },
  Dauphin: {
    showName: true,
    x: 42.44132779,
    r: 5850,
    y: "$36.6K"
  },
  Delaware: {
    showName: true,
    x: 55.68060922,
    r: 9514,
    y: "$38.5K"
  },
  Elk: {
    showName: false,
    x: 28.62318841,
    r: 229,
    y: "$21.3K"
  },
  Erie: {
    showName: true,
    x: 43.95330739,
    r: 2750,
    y: "$27.8K"
  },
  Fayette: {
    showName: false,
    x: 44.27074081,
    r: 2463,
    y: "$19.5K"
  },
  Forest: {
    showName: false,
    x: 34.75609756,
    r: 50,
    y: "$22.7K"
  },
  Franklin: {
    showName: false,
    x: 37.47902685,
    r: 1772,
    y: "$53.5K"
  },
  Fulton: {
    showName: false,
    x: 28.67298578,
    r: 113,
    y: "$54.7K"
  },
  Greene: {
    showName: false,
    x: 37.44343891,
    r: 324,
    y: "$15.6K"
  },
  Huntingdon: {
    showName: false,
    x: 38.96907216,
    r: 552,
    y: "$18.3K"
  },
  Indiana: {
    showName: false,
    x: 35.01070664,
    r: 322,
    y: "$16.6K"
  },
  Jefferson: {
    showName: false,
    x: 38.55721393,
    r: 460,
    y: "$45.0K"
  },
  Juniata: {
    showName: false,
    x: 34.46215139,
    r: 168,
    y: "$22.4K"
  },
  Lackawanna: {
    showName: true,
    x: 52.63500325,
    r: 3052,
    y: "$31.1K"
  },
  Lancaster: {
    showName: false,
    x: 44.93240475,
    r: 5430,
    y: "$52.6K"
  },
  Lawrence: {
    showName: false,
    x: 48.92407633,
    r: 1182,
    y: "$19.2K"
  },
  Lebanon: {
    showName: false,
    x: 38.70437956,
    r: 2085,
    y: "$24.5K"
  },
  Lehigh: {
    showName: false,
    x: 54.88215488,
    r: 6526,
    y: "$20.1K"
  },
  Luzerne: {
    showName: false,
    x: 38.28885249,
    r: 3828,
    y: "$37.0K"
  },
  Lycoming: {
    showName: true,
    x: 34.68169761,
    r: 1557,
    y: "$52.7K"
  },
  McKean: {
    showName: false,
    x: 42.38134888,
    r: 488,
    y: "$23.7K"
  },
  Mercer: {
    showName: false,
    x: 36.12542955,
    r: 1653,
    y: "$25.0K"
  },
  Mifflin: {
    showName: false,
    x: 48.49498328,
    r: 721,
    y: "$39.8K"
  },
  Monroe: {
    showName: false,
    x: 32.79661017,
    r: 1910,
    y: "$27.4K"
  },
  Montgomery: {
    showName: false,
    x: 33.63556165,
    r: 6723,
    y: "$25.3K"
  },
  Montour: {
    showName: false,
    x: 35.19163763,
    r: 100,
    y: "$28.6K"
  },
  Northampton: {
    showName: false,
    x: 45.83529967,
    r: 3804,
    y: "$27.5K"
  },
  Northumberland: {
    showName: false,
    x: 36,
    r: 869,
    y: "$41.8K"
  },
  Perry: {
    showName: false,
    x: 28.98148148,
    r: 305,
    y: "$25.6K"
  },
  Philadelphia: {
    showName: true,
    x: 50.12216352,
    r: 32072,
    y: "$54.0K"
  },
  Pike: {
    showName: false,
    x: 34.16738568,
    r: 382,
    y: "$22.2K"
  },
  Potter: {
    showName: false,
    x: 23.36601307,
    r: 142,
    y: "$19.4K"
  },
  Schuylkill: {
    showName: false,
    x: 37.74187822,
    r: 2100,
    y: "$20.6K"
  },
  Snyder: {
    showName: false,
    x: 35.92870544,
    r: 381,
    y: "$28.0K"
  },
  Somerset: {
    showName: false,
    x: 25,
    r: 498,
    y: "$37.9K"
  },
  Sullivan: {
    showName: false,
    x: 36.44859813,
    r: 36,
    y: "$16.9K"
  },
  Susquehanna: {
    showName: false,
    x: 40.32663317,
    r: 317,
    y: "$27.6K"
  },
  Tioga: {
    showName: false,
    x: 36.38603696,
    r: 868,
    y: "$20.6K"
  },
  Union: {
    showName: true,
    x: 25.36136662,
    r: 186,
    y: "$27.5K"
  },
  Venango: {
    showName: false,
    x: 37.84477229,
    r: 586,
    y: "$37.5K"
  },
  Warren: {
    showName: false,
    x: 40.61393152,
    r: 338,
    y: "$25.4K"
  },
  Washington: {
    showName: false,
    x: 38.93688681,
    r: 2596,
    y: "$25.1K"
  },
  Wayne: {
    showName: false,
    x: 37.20349563,
    r: 286,
    y: "$34.1K"
  },
  Westmoreland: {
    showName: true,
    x: 31.71662559,
    r: 3840,
    y: "$21.0K"
  },
  Wyoming: {
    showName: false,
    x: 35.68118628,
    r: 377,
    y: "$25.1K"
  },
  York: {
    showName: false,
    x: 44.27380952,
    r: 7356,
    y: "$20.8K"
  }
};

export const BAIL_POSTING_DATA = [
  {
    data: [
      "Adams",
      "$27.0K",
      43.62244898,
      {
        type: "bar",
        values: [43.62244898]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Allegheny",
      "$18.6K",
      61.27998861,
      {
        type: "bar",
        values: [61.27998861]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Armstrong",
      "$13.9K",
      56.05263158,
      {
        type: "bar",
        values: [56.05263158]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Beaver",
      "$17.6K",
      67.60883691,
      {
        type: "bar",
        values: [67.60883691]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Bedford",
      "$50.1K",
      72.3183391,
      {
        type: "bar",
        values: [72.3183391]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Berks",
      "$28.3K",
      56.45679409,
      {
        type: "bar",
        values: [56.45679409]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Blair",
      "$33.1K",
      68.23253083,
      {
        type: "bar",
        values: [68.23253083]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Bradford",
      "$32.7K",
      89.21800948,
      {
        type: "bar",
        values: [89.21800948]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Bucks",
      "$62.6K",
      48.80620772,
      {
        type: "bar",
        values: [48.80620772]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Butler",
      "$17.6K",
      66.14420063,
      {
        type: "bar",
        values: [66.14420063]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Cambria",
      "$37.0K",
      41.87380497,
      {
        type: "bar",
        values: [41.87380497]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Cameron",
      "$26.8K",
      51.61290323,
      {
        type: "bar",
        values: [51.61290323]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Carbon",
      "$26.8K",
      49.51370469,
      {
        type: "bar",
        values: [49.51370469]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Centre",
      "$44.3K",
      65.17571885,
      {
        type: "bar",
        values: [65.17571885]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Chester",
      "$26.4K",
      51.38476756,
      {
        type: "bar",
        values: [51.38476756]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Clarion",
      "$20.0K",
      72.08835341,
      {
        type: "bar",
        values: [72.08835341]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Clearfield",
      "$24.3K",
      82.5203252,
      {
        type: "bar",
        values: [82.5203252]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Clinton",
      "$21.0K",
      74.19962335,
      {
        type: "bar",
        values: [74.19962335]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Columbia",
      "$35.8K",
      27.68777614,
      {
        type: "bar",
        values: [27.68777614]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Crawford",
      "$22.6K",
      55.26315789,
      {
        type: "bar",
        values: [55.26315789]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Cumberland",
      "$25.0K",
      57.75502465,
      {
        type: "bar",
        values: [57.75502465]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Dauphin",
      "$36.6K",
      67.51909665,
      {
        type: "bar",
        values: [67.51909665]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Delaware",
      "$38.5K",
      61.44408689,
      {
        type: "bar",
        values: [61.44408689]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Elk",
      "$21.3K",
      79.74683544,
      {
        type: "bar",
        values: [79.74683544]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Erie",
      "$27.8K",
      60.4815864,
      {
        type: "bar",
        values: [60.4815864]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Fayette",
      "$19.5K",
      39.92776886,
      {
        type: "bar",
        values: [39.92776886]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Forest",
      "$22.7K",
      80.70175439,
      {
        type: "bar",
        values: [80.70175439]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Franklin",
      "$53.5K",
      76.32904309,
      {
        type: "bar",
        values: [76.32904309]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Fulton",
      "$54.7K",
      78.51239669,
      {
        type: "bar",
        values: [78.51239669]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Greene",
      "$15.6K",
      55.89123867,
      {
        type: "bar",
        values: [55.89123867]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Huntingdon",
      "$18.3K",
      76.89594356,
      {
        type: "bar",
        values: [76.89594356]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Indiana",
      "$16.6K",
      42.81345566,
      {
        type: "bar",
        values: [42.81345566]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Jefferson",
      "$45.0K",
      85.16129032,
      {
        type: "bar",
        values: [85.16129032]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Juniata",
      "$22.4K",
      73.98843931,
      {
        type: "bar",
        values: [73.98843931]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lackawanna",
      "$31.1K",
      72.46600742,
      {
        type: "bar",
        values: [72.46600742]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lancaster",
      "$52.6K",
      64.47848286,
      {
        type: "bar",
        values: [64.47848286]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lawrence",
      "$19.2K",
      43.81742739,
      {
        type: "bar",
        values: [43.81742739]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lebanon",
      "$24.5K",
      43.23432343,
      {
        type: "bar",
        values: [43.23432343]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lehigh",
      "$20.1K",
      57.91968767,
      {
        type: "bar",
        values: [57.91968767]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Luzerne",
      "$37.0K",
      66.80926019,
      {
        type: "bar",
        values: [66.80926019]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lycoming",
      "$52.7K",
      71.89292543,
      {
        type: "bar",
        values: [71.89292543]
      }
    ],
    outlier: false
  },
  {
    data: [
      "McKean",
      "$23.7K",
      70.13752456,
      {
        type: "bar",
        values: [70.13752456]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Mercer",
      "$25.0K",
      49.10820452,
      {
        type: "bar",
        values: [49.10820452]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Mifflin",
      "$39.8K",
      82.62068966,
      {
        type: "bar",
        values: [82.62068966]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Monroe",
      "$27.4K",
      38.39793282,
      {
        type: "bar",
        values: [38.39793282]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Montgomery",
      "$25.3K",
      64.50531837,
      {
        type: "bar",
        values: [64.50531837]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Montour",
      "$28.6K",
      65.34653465,
      {
        type: "bar",
        values: [65.34653465]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Northampton",
      "$27.5K",
      54.74903475,
      {
        type: "bar",
        values: [54.74903475]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Northumberland",
      "$41.8K",
      57.73195876,
      {
        type: "bar",
        values: [57.73195876]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Perry",
      "$25.6K",
      76.99680511,
      {
        type: "bar",
        values: [76.99680511]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Philadelphia",
      "$54.0K",
      50.7113914,
      {
        type: "bar",
        values: [50.7113914]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Pike",
      "$22.2K",
      63.88888889,
      {
        type: "bar",
        values: [63.88888889]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Potter",
      "$19.4K",
      67.83216783,
      {
        type: "bar",
        values: [67.83216783]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Schuylkill",
      "$20.6K",
      59.0780809,
      {
        type: "bar",
        values: [59.0780809]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Snyder",
      "$28.0K",
      45.69190601,
      {
        type: "bar",
        values: [45.69190601]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Somerset",
      "$37.9K",
      55.08982036,
      {
        type: "bar",
        values: [55.08982036]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Sullivan",
      "$16.9K",
      69.23076923,
      {
        type: "bar",
        values: [69.23076923]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Susquehanna",
      "$27.6K",
      75.07788162,
      {
        type: "bar",
        values: [75.07788162]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Tioga",
      "$20.6K",
      60.72234763,
      {
        type: "bar",
        values: [60.72234763]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Union",
      "$27.5K",
      74.61139896,
      {
        type: "bar",
        values: [74.61139896]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Venango",
      "$37.5K",
      72.88135593,
      {
        type: "bar",
        values: [72.88135593]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Warren",
      "$25.4K",
      75.87209302,
      {
        type: "bar",
        values: [75.87209302]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Washington",
      "$25.1K",
      63.82098533,
      {
        type: "bar",
        values: [63.82098533]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Wayne",
      "$34.1K",
      46.6442953,
      {
        type: "bar",
        values: [46.6442953]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Westmoreland",
      "$21.0K",
      71.47154675,
      {
        type: "bar",
        values: [71.47154675]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Wyoming",
      "$25.1K",
      67.53246753,
      {
        type: "bar",
        values: [67.53246753]
      }
    ],
    outlier: false
  },
  {
    data: [
      "York",
      "$20.8K",
      58.36246303,
      {
        type: "bar",
        values: [58.36246303]
      }
    ],
    outlier: false
  }
];

export const BAIL_RETENTION_FEE_DATA = [
  {
    data: [
      "Adams",
      {
        type: "link",
        text: "4.5% of first $1,000 deposited, 1.5% of each additional dollar",
        href: "http://www.adamscounty.us/Dept/CourtofCommonPleas/Documents/Adams%20County%20Rules%20of%20Criminal%20Procedure.pdf"
      }
    ]
  },
  {
    data: [
      "Allegheny",
      {
        type: "link",
        text: "5% of first $1,000 deposited, 2% of each additional dollar",
        href: "https://www.alleghenycounty.us/court-records/criminal/cost-and-fee-schedule.aspx"
      }
    ]
  },
  {
    data: [
      "Armstrong",
      {
        type: "link",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        href: "https://co.armstrong.pa.us/images/departments/prothonotary/prothfees.pdf"
      }
    ]
  },
  {
    data: [
      "Beaver",
      {
        type: "link",
        text: "30% of amount deposited, but no less than $10",
        href: "http://www.beavercountypa.gov/Depts/Courts/CCP/Documents/Local%20Rules%20Criminal%20Procedure.pdf"
      }
    ]
  },
  {
    data: [
      "Bedford",
      {
        type: "link",
        text: "5% of first $1,000 deposited, 2% of each additional dollar",
        href: "https://www.bedfordcountypa.org/document_center/Prothonotary/Amended%20Clerk%20of%20Courts%20%20Fee%20Schedule.pdf"
      }
    ]
  },
  {
    data: [
      "Berks",
      {
        type: "link",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        href: "http://www.co.berks.pa.us/Dept/Prothy/Documents/FEE%20BILL%20update%201-1-2019%20-%20Act%20119%20Increase.pdf"
      }
    ]
  },
  {
    data: [
      "Blair",
      {
        type: "footnote",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        footnote:
          "Conversation with Office of the Prothonotary on 5/1, 5/8, 5/15, 5/18, 5/21, 5/22 of 2020",
        number: 1
      }
    ]
  },
  {
    data: [
      "Bradford",
      {
        type: "link",
        text: "3% of first $1,000 deposited, 1% for each additional dollar",
        href: "http://bradfordcountypa.org/wp-content/uploads/2019/01/Prothonotary-Fee-Schedule.pdf"
      }
    ]
  },
  {
    data: ["Bucks", "$100"]
  },
  {
    data: [
      "Butler",
      {
        type: "link",
        text: "5.25% of first $1,000 deposited, 1.8% of each additional dollar ",
        href: "https://www.butlercountypa.gov/DocumentCenter/View/878/Fee-Schedule-PDF"
      }
    ]
  },
  {
    data: ["Cambria", "$25"]
  },
  {
    data: [
      "Cameron",
      {
        type: "link",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        href: "http://www.cameroncountypa.com/Document_Center/Clerk_Court/2020%20Protho%20and%20Clerk%20of%20Courts%20Fee%20Schedules.pdf"
      }
    ]
  },
  {
    data: [
      "Carbon",
      {
        type: "link",
        text: "$75",
        href: "https://www.carboncourts.com/Crimrules.htm#l535d"
      }
    ]
  },
  {
    data: [
      "Centre",
      {
        type: "footnote",
        text: "None",
        footnote:
          "Conversation with Office of the Prothonotary on 5/1, 5/8, 5/15, 5/18, 5/21, 5/22 of 2020",
        number: 1
      }
    ]
  },
  {
    data: [
      "Chester",
      {
        type: "link",
        text: "For percentage bail, 40% of amount deposited, but no less than $50",
        href: "https://chesco.org/DocumentCenter/View/34793/CCCriminal-Rules?bidId="
      }
    ]
  },
  {
    data: [
      "Clarion",
      {
        type: "footnote",
        text: "None",
        footnote:
          "Conversation with Office of the Prothonotary on 5/1, 5/8, 5/15, 5/18, 5/21, 5/22 of 2020",
        number: 1
      }
    ]
  },
  {
    data: [
      "Clearfield",
      {
        type: "footnote",
        text: "None",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Clinton",
      {
        type: "link",
        text: "3% of first $1,000 deposited, 1% for each additional dollar",
        href: "https://www.clintoncountypa.com/home/showdocument?id=2151"
      }
    ]
  },
  {
    data: [
      "Columbia",
      {
        type: "link",
        text: "$25",
        href: "http://www.columbiamontourcourts.com/wp-content/uploads/2015/05/Criminal-Local-Rules.pdf"
      }
    ]
  },
  {
    data: [
      "Crawford",
      {
        type: "footnote",
        text: "None",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Cumberland",
      {
        type: "link",
        text: "5% of first $1,000 deposited, 1.5% for each additional dollar",
        href: "https://www.ccpa.net/1919/Current-Fee-Schedule"
      }
    ]
  },
  {
    data: [
      "Dauphin",
      {
        type: "link",
        text: "For percentage bail, 30% percent of amount deposited, but no less than $50; for nominal bail, $25",
        href: "https://cms3.revize.com/revize/dauphincounty/document_center/courtdepartments/Local%20Rules%20of%20Court/Criminal%20Rules/530-Duties%20and%20Powers%20of%20a%20Bail%20Agency.pdf"
      }
    ]
  },
  {
    data: [
      "Delaware",
      {
        type: "link",
        text: "For percentage bail, 40% percent of amount deposited, but no less than $100; for straight bail, 4% of first $1,000 deposited, 2% of each additional dollar",
        href: "https://www.delcopa.gov/courts/localrules/CriminalRules.pdf"
      }
    ]
  },
  {
    data: [
      "Elk",
      {
        type: "link",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        href: "https://www.co.elk.pa.us/images/Prothonotary/CLERK-OF-COURTS-FEE-SCHEDULE-2019-2021.pdf"
      }
    ]
  },
  {
    data: [
      "Erie",
      {
        type: "link",
        text: "$16.50 filing fee on all bonds",
        href: "https://eriecountypa.gov/wp-content/uploads/2019/06/BOND-INFORMATION.revised-2019.pdf  "
      }
    ]
  },
  {
    data: [
      "Fayette",
      {
        type: "link",
        text: "For percentage bail, 30% percent of amount deposited, but no less than $10",
        href: "https://www.fayettecountypa.org/DocumentCenter/View/1737/Local-Rules-PDF?bidId="
      }
    ]
  },
  {
    data: [
      "Forest",
      {
        type: "footnote",
        text: "None",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Franklin",
      {
        type: "link",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        href: "https://franklincountypa.gov/ckeditorfiles/files/Clerk%20of%20Courts/03012019%20Fee%20Schedule.pdf"
      }
    ]
  },
  {
    data: [
      "Fulton",
      {
        type: "footnote",
        text: "None",
        footnote:
          "Conversation with Magisterial District Judge Wendy Richards Mellott on 5/8/2020",
        number: 3
      }
    ]
  },
  {
    data: [
      "Greene",
      {
        type: "footnote",
        text: "None",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Huntingdon",
      {
        type: "link",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        href: "https://huntingdoncountycourt.net/wp-content/uploads/2019/01/2019_Prothonotary_Fee_Schedule.pdf"
      }
    ]
  },
  {
    data: [
      "Indiana",
      {
        type: "footnote",
        text: "None",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Jefferson",
      {
        type: "footnote",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Juniata",
      {
        type: "footnote",
        text: "None",
        footnote:
          "Conversation with Office of the Prothonotary on 5/1, 5/8, 5/15, 5/18, 5/21, 5/22 of 2020",
        number: 1
      }
    ]
  },
  {
    data: [
      "Lackawanna",
      {
        type: "link",
        text: "For percentage bail, 20% of amount deposited, but no less than $50 and no greater than $500",
        href: "https://www.lackawannacounty.org/wp-content/uploads/2017/11/Rules-of-Criminal-Procedure.pdf"
      }
    ]
  },
  {
    data: [
      "Lancaster",
      {
        type: "link",
        text: "4.9% of first $1,000 deposited, 1.6% of each additional dollar",
        href: "https://lancasterpaclerkofcourts.com/DocumentCenter/View/37/Fee-Schedule?bidId="
      }
    ]
  },
  {
    data: [
      "Lawrence",
      {
        type: "link",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        href: "https://co.lawrence.pa.us/gov/prothonotary-lawrence_county/clerk-of-court-fees/"
      }
    ]
  },
  {
    data: [
      "Lebanon",
      {
        type: "footnote",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Lehigh",
      {
        type: "link",
        text: "For percentage bail, 30% of amount deposited, but no less than $10; for straight bail,  6.54% of first $1,000, 2.17% of each additional dollar",
        href: "https://www.lccpa.org/criminal/CriminalCourtRules.pdf"
      }
    ]
  },
  {
    data: [
      "Luzerne",
      {
        type: "link",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        href: "https://www.luzernecounty.org/DocumentCenter/View/11672/Fee-Schedule"
      }
    ]
  },
  {
    data: [
      "Lycoming",
      {
        type: "link",
        text: "For straight bail, 3% of first $1,000 deposited, 1% of each additional dollar",
        href: "https://www.lyco.org/Portals/1/Prothonotary/Documents/Fee%20Schedule.pdf?ver=2019-02-08-084920-037 "
      }
    ]
  },
  {
    data: [
      "McKean",
      {
        type: "footnote",
        text: "None",
        footnote:
          "Conversation with Office of the Prothonotary on 5/1, 5/8, 5/15, 5/18, 5/21, 5/22 of 2020",
        number: 1
      }
    ]
  },
  {
    data: [
      "Mercer",
      {
        type: "footnote",
        text: "6% of first $1,000 deposited, 2% of each additional dollar",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Mifflin",
      {
        type: "footnote",
        text: "4.5% of first $1,000 deposited, 1.5% of each additional dollar",
        footnote:
          "Conversation with Office of the Prothonotary on 5/1, 5/8, 5/15, 5/18, 5/21, 5/22 of 2020",
        number: 1
      }
    ]
  },
  {
    data: ["Monroe", "Unable to confirm fee"]
  },
  {
    data: [
      "Montgomery",
      {
        type: "link",
        text: "Graduated percentages for straight and cash bail",
        href: "https://www.montcopa.org/DocumentCenter/View/533/Cash-Bail-Fees?bidId="
      }
    ]
  },
  {
    data: [
      "Montour",
      {
        type: "link",
        text: "$25",
        href: "http://www.columbiamontourcourts.com/wp-content/uploads/2015/05/Criminal-Local-Rules.pdf"
      }
    ]
  },
  {
    data: [
      "Northampton",
      {
        type: "link",
        text: "For percentage bail, 20% of amount deposited; for straight bail, 4.5% of first $1,000 deposited, 1.5% for each additional dollar",
        href: "https://www.northamptoncounty.org/CRTSRVCS/CRIMINAL/Documents/FEE%20SCHEDULE.pdf#search=criminal%20fees"
      }
    ]
  },
  {
    data: [
      "Northumberland",
      {
        type: "footnote",
        text: "$25",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Perry",
      {
        type: "footnote",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Philadelphia",
      {
        type: "link",
        text: "None if the defendant appears at all court dates",
        href: "https://www.courts.phila.gov/pdf/rules/CP-Criminal-Division-Compiled-Rules.pdf"
      }
    ]
  },
  {
    data: [
      "Pike",
      {
        type: "link",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        href: "https://www.pikepa.org/Prothfold/Prothonotaryfee.pdf "
      }
    ]
  },
  {
    data: [
      "Potter",
      {
        type: "link",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        href: "https://pottercountypa.net/post/_docs/2018POCO_FEE_SCHEDULE.pdf  "
      }
    ]
  },
  {
    data: [
      "Schuylkill",
      {
        type: "link",
        text: "For percentage bail, 10% of the amount deposited, but no less than $10",
        href: "http://www.co.schuylkill.pa.us/Offices/LawLibrary/CriminalRulesRevNovember2018.pdf"
      }
    ]
  },
  {
    data: [
      "Snyder",
      {
        type: "footnote",
        text: "None",
        footnote:
          "Conversation with Office of the Prothonotary on 5/1, 5/8, 5/15, 5/18, 5/21, 5/22 of 2020",
        number: 1
      }
    ]
  },
  {
    data: [
      "Somerset",
      {
        type: "footnote",
        text: "1% of all money deposited",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Sullivan",
      {
        type: "footnote",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        footnote:
          "Conversation with Office of the Prothonotary on 5/1, 5/8, 5/15, 5/18, 5/21, 5/22 of 2020",
        number: 1
      }
    ]
  },
  {
    data: [
      "Susquehanna",
      {
        type: "footnote",
        text: "4.5% of first $1,000 deposited, 1.5% of each additional dollar",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Tioga",
      {
        type: "link",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        href: "http://www.tiogacountypa.us/Departments/Prothonotary_Clerk_of_Courts/Documents/TIOGA%20COUNTY%20PROTHONOTARY%20FEE%20SCHEDULE%20EFFECTIVE%20DECEMBER%201.pdf"
      }
    ]
  },
  {
    data: [
      "Union",
      {
        type: "footnote",
        text: "None",
        footnote:
          "Conversation with Office of the Prothonotary on 5/1, 5/8, 5/15, 5/18, 5/21, 5/22 of 2020",
        number: 1
      }
    ]
  },
  {
    data: [
      "Venango",
      {
        type: "footnote",
        text: "3% of first $1,000 deposited, 1% of each additional dollar  Additional $30 service fee",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Warren",
      {
        type: "footnote",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        footnote:
          "Conversation with Office of the Prothonotary on 5/1, 5/8, 5/15, 5/18, 5/21, 5/22 of 2020",
        number: 1
      }
    ]
  },
  {
    data: [
      "Washington",
      {
        type: "footnote",
        text: "For percentage bail, $60; for straight bail, 5% of first $1,000 deposited, 1.8% of each additional dollar",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Wayne",
      {
        type: "link",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        href: "http://www.waynecountypa.gov/DocumentCenter/View/901/Fee-Schedule-PDF?bidId="
      }
    ]
  },
  {
    data: [
      "Westmoreland",
      {
        type: "footnote",
        text: "6.6% of first $1,000 deposited, 2.5% of each additional dollar",
        footnote:
          "Conversation with the Office of the Clerk of Courts on 5/1, 5/6, 5/8, 5/18, 5/21, 5/22, 5/26, 7/21, 7/24 of 2020",
        number: 2
      }
    ]
  },
  {
    data: [
      "Wyoming",
      {
        type: "footnote",
        text: "3% of first $1,000 deposited, 1% of each additional dollar",
        footnote:
          "Conversation with Office of the Prothonotary on 5/1, 5/8, 5/15, 5/18, 5/21, 5/22 of 2020",
        number: 1
      }
    ]
  },
  {
    data: ["York", "Unable to confirm fee"]
  }
];

export const PRETRIAL_SPENDING_DATA = [
  {
    data: [
      "Adams",
      "$3.6M",
      "$11.1M",
      32.43914185,
      {
        type: "bar",
        values: [32.43914185]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Allegheny",
      "$57.6M",
      "$86.0M",
      67.01743239,
      {
        type: "bar",
        values: [67.01743239]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Armstrong",
      "$2.9M",
      "$4.6M",
      63.23898622,
      {
        type: "bar",
        values: [63.23898622]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Beaver",
      "$4.7M",
      "$9.3M",
      49.91935539,
      {
        type: "bar",
        values: [49.91935539]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Bedford",
      "$2.2M",
      "$3.1M",
      70.14284972,
      {
        type: "bar",
        values: [70.14284972]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Berks",
      "$27.4M",
      "$35.7M",
      76.92692634,
      {
        type: "bar",
        values: [76.92692634]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Blair",
      "N/R",
      "$8.6M",
      "N/R",
      {
        type: "bar",
        values: [62.4]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Bradford",
      "$0.7M",
      "$4.1M",
      16.17296357,
      {
        type: "bar",
        values: [16.17296357]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Bucks",
      "$16.0M",
      "$27.6M",
      57.90105653,
      {
        type: "bar",
        values: [57.90105653]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Butler",
      "$10.0M",
      "$11.6M",
      86.19403059,
      {
        type: "bar",
        values: [86.19403059]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Cambria",
      "$4.9M",
      "$10.6M",
      46.00591555,
      {
        type: "bar",
        values: [46.00591555]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Cameron",
      "N/A",
      "N/A",
      "N/A",
      {
        type: "bar",
        values: [62.4]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Carbon",
      "$2.7M",
      "$5.0M",
      55.20362881,
      {
        type: "bar",
        values: [55.20362881]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Centre",
      "$3.0M",
      "$8.9M",
      33.49236863,
      {
        type: "bar",
        values: [33.49236863]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Chester",
      "$16.3M",
      "$30.0M",
      54.39229774,
      {
        type: "bar",
        values: [54.39229774]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Clarion",
      "$0.8M",
      "$2.4M",
      32.47664265,
      {
        type: "bar",
        values: [32.47664265]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Clearfield",
      "$1.6M",
      "$3.4M",
      47.56945001,
      {
        type: "bar",
        values: [47.56945001]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Clinton",
      "$1.7M",
      "$6.5M",
      26.20482058,
      {
        type: "bar",
        values: [26.20482058]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Columbia",
      "$2.8M",
      "$6.0M",
      45.91836515,
      {
        type: "bar",
        values: [45.91836515]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Crawford",
      "$3.3M",
      "$6.0M",
      54.53667276,
      {
        type: "bar",
        values: [54.53667276]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Cumberland",
      "$8.5M",
      "$11.3M",
      75.28473396,
      {
        type: "bar",
        values: [75.28473396]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Dauphin",
      "$0.3M",
      "N/R",
      "N/R",
      {
        type: "bar",
        values: [62.4]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Delaware",
      "$0.4M",
      "N/R",
      "N/R",
      {
        type: "bar",
        values: [62.4]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Elk",
      "$1.9M",
      "$2.7M",
      70.16631838,
      {
        type: "bar",
        values: [70.16631838]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Erie",
      "$6.7M",
      "$17.0M",
      39.4405589,
      {
        type: "bar",
        values: [39.4405589]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Fayette",
      "$9.3M",
      "$7.6M",
      100,
      {
        type: "bar",
        values: [100]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Forest",
      "N/A",
      "N/A",
      "N/A",
      {
        type: "bar",
        values: [62.4]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Franklin",
      "$6.2M",
      "$13.3M",
      46.55092852,
      {
        type: "bar",
        values: [46.55092852]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Fulton",
      "N/A",
      "N/A",
      "N/A",
      {
        type: "bar",
        values: [62.4]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Greene",
      "$1.3M",
      "$2.7M",
      47.56944381,
      {
        type: "bar",
        values: [47.56944381]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Huntingdon",
      "$1.3M",
      "$1.7M",
      77.32557584,
      {
        type: "bar",
        values: [77.32557584]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Indiana",
      "$3.6M",
      "$7.1M",
      51.53061275,
      {
        type: "bar",
        values: [51.53061275]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Jefferson",
      "$1.5M",
      "$3.3M",
      46.1397167,
      {
        type: "bar",
        values: [46.1397167]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Juniata",
      "N/A",
      "N/A",
      "N/A",
      {
        type: "bar",
        values: [62.4]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lackawanna",
      "$16.9M",
      "$25.4M",
      66.42315908,
      {
        type: "bar",
        values: [66.42315908]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lancaster",
      "$15.5M",
      "$27.6M",
      56.0542793,
      {
        type: "bar",
        values: [56.0542793]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lawrence",
      "N/R",
      "$6.2M",
      "N/R",
      {
        type: "bar",
        values: [62.4]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lebanon",
      "$4.7M",
      "$9.3M",
      50.50411042,
      {
        type: "bar",
        values: [50.50411042]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lehigh",
      "$9.0M",
      "$30.0M",
      30.0079569,
      {
        type: "bar",
        values: [30.0079569]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Luzerne",
      "N/R",
      "$26.3M",
      "N/R",
      {
        type: "bar",
        values: [62.4]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Lycoming",
      "$9.0M",
      "$10.3M",
      87.12023555,
      {
        type: "bar",
        values: [87.12023555]
      }
    ],
    outlier: false
  },
  {
    data: [
      "McKean",
      "$2.1M",
      "$2.6M",
      80.62499691,
      {
        type: "bar",
        values: [80.62499691]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Mercer",
      "$3.5M",
      "$7.8M",
      45.21396757,
      {
        type: "bar",
        values: [45.21396757]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Mifflin",
      "$2.1M",
      "$3.6M",
      58.29183635,
      {
        type: "bar",
        values: [58.29183635]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Monroe",
      "$6.3M",
      "$12.7M",
      49.18033199,
      {
        type: "bar",
        values: [49.18033199]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Montgomery",
      "$29.6M",
      "$38.8M",
      76.43072401,
      {
        type: "bar",
        values: [76.43072401]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Montour",
      "$0.7M",
      "$0.9M",
      76.64233742,
      {
        type: "bar",
        values: [76.64233742]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Northampton",
      "$12.6M",
      "$26.6M",
      47.6338724,
      {
        type: "bar",
        values: [47.6338724]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Northumberland",
      "$1.5M",
      "$2.4M",
      64.0957536,
      {
        type: "bar",
        values: [64.0957536]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Perry",
      "$3.1M",
      "$4.8M",
      64.92248608,
      {
        type: "bar",
        values: [64.92248608]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Philadelphia",
      "$205.1M",
      "$260.9M",
      78.60564543,
      {
        type: "bar",
        values: [78.60564543]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Pike",
      "$8.1M",
      "$10.2M",
      79.57516231,
      {
        type: "bar",
        values: [79.57516231]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Potter",
      "$0.3M",
      "$0.7M",
      38.28125105,
      {
        type: "bar",
        values: [38.28125105]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Schuylkill",
      "$4.9M",
      "$7.3M",
      67.50973321,
      {
        type: "bar",
        values: [67.50973321]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Snyder",
      "$1.1M",
      "$3.4M",
      33.18584058,
      {
        type: "bar",
        values: [33.18584058]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Somerset",
      "$3.8M",
      "$2.9M",
      100,
      {
        type: "bar",
        values: [100]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Sullivan",
      "N/A",
      "N/A",
      "N/A",
      {
        type: "bar",
        values: [62.4]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Susquehanna",
      "$2.7M",
      "$3.1M",
      87.27389024,
      {
        type: "bar",
        values: [87.27389024]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Tioga",
      "$1.2M",
      "$2.6M",
      44.75309491,
      {
        type: "bar",
        values: [44.75309491]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Union",
      "$0.4M",
      "$0.9M",
      41.91170231,
      {
        type: "bar",
        values: [41.91170231]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Venango",
      "$1.8M",
      "$2.7M",
      65.28663594,
      {
        type: "bar",
        values: [65.28663594]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Warren",
      "N/R",
      "$3.1M",
      "N/R",
      {
        type: "bar",
        values: [62.4]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Washington",
      "$4.0M",
      "$7.7M",
      51.11357976,
      {
        type: "bar",
        values: [51.11357976]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Wayne",
      "$2.8M",
      "$4.4M",
      63.54167183,
      {
        type: "bar",
        values: [63.54167183]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Westmoreland",
      "$8.4M",
      "$16.5M",
      51.29716715,
      {
        type: "bar",
        values: [51.29716715]
      }
    ],
    outlier: false
  },
  {
    data: [
      "Wyoming",
      "$1.9M",
      "$2.2M",
      85.99998119,
      {
        type: "bar",
        values: [85.99998119]
      }
    ],
    outlier: false
  },
  {
    data: [
      "York",
      "$16.7M",
      "$54.6M",
      30.66932716,
      {
        type: "bar",
        values: [30.66932716]
      }
    ],
    outlier: false
  }
];

export const MDJ_DATA = [
  {
    data: [
      "",
      "Delaware",
      55.68060922,
      63.75237882,
      48.4952381,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 55.68060922,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 43.554700000000004,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.0056,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 0.10640000000000001,
            name: "ROR"
          }
        ],
        name: "Delaware"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Davis, W.",
          75.87,
          75.15151515,
          81.98198198,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 75.87,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 23.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Davis, Wilden H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Tenaglia, L.",
          74.28,
          75.54786621,
          71.47651007,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 74.28,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 25.72,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Tenaglia, Leonard V."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Seaton, S.",
          74.02,
          75.9295499,
          72.8,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 74.02,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 25.08,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Seaton, Spencer B. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Gallagher, V.",
          71.73,
          83.72093023,
          62.75862069,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 71.73,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 28.27,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Gallagher, Vincent D. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Berardocco, A.",
          71.53,
          77.06422018,
          62.87128713,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 71.53,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 28.47,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Berardocco, Ann"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Sandone, S.",
          71.18,
          75.53648069,
          68.96551724,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 71.18,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 28.6,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Sandone, Steven A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Loftus, G.",
          69.26,
          70.99697885,
          66.53061224,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 69.26,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 30.57,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Loftus, Greg J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Radano, R.",
          62.88,
          65.58441558,
          62.33183857,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 62.88,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 37.12,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Radano, Robert J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Merkins, J.",
          61.84,
          80.85106383,
          53.80116959,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 61.84,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 37.81,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Merkins, James"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Turner, P.",
          61.05,
          63.4375,
          59.33503836,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 61.05,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 38.67,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Turner, Phillip S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Lippincott, N.",
          60.52,
          74.23076923,
          45.04132231,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 60.52,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 39.48,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Lippincott, Nicholas S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Mattox, C.",
          60.36,
          62.95336788,
          59.41422594,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 60.36,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 39.49,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.15,
                name: "ROR"
              }
            ],
            name: "Mattox, Christopher R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Tozer, P.",
          59.06,
          62.63736264,
          57.0977918,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 59.06,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 40.94,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Tozer, Peter P."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Puppio, A.",
          57.44,
          65.96491228,
          52.13114754,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 57.44,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 41.75,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Puppio, Andrea B."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Karapalides, H.",
          57.36,
          58.41836735,
          55.05050505,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 57.36,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 41.98,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Karapalides, Harry J. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Williams, W.",
          56.54,
          52.56410256,
          69.56521739,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 56.54,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 43.09,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.18,
                name: "ROR"
              }
            ],
            name: "Williams, W Keith II"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Vann, D.",
          53.29,
          59.06735751,
          55.70469799,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.29,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 46.55,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Vann, Dawn L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hunter, L.",
          52.2,
          66.03773585,
          46.22222222,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 52.2,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 44.4,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 2.8,
                name: "ROR"
              }
            ],
            name: "Hunter, Leon"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Holefelder, D.",
          51.46,
          71.29186603,
          37.54266212,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 51.46,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 47.96,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Holefelder, Diane M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Griffin, D.",
          51.33,
          57.55813953,
          45.10739857,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 51.33,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 48.67,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Griffin, David"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Burke, R.",
          50.66,
          57.77777778,
          43.91534392,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.66,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 49.34,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Burke, Robert R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Strohl, W.",
          50.21,
          66.47058824,
          40.89347079,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.21,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 49.16,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Strohl, Walter A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Micozzie-Aguirre, K.",
          50,
          60.33057851,
          47.05882353,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 49.32,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Micozzie-Aguirre, Kelly A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Krull, D.",
          48.54,
          61.21673004,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 48.54,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 51.46,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Krull, Deborah A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Nistico, C.",
          44.14,
          48.9010989,
          27.27272727,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44.14,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 54.3,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Nistico, Charles"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Lacey, T.",
          43.49,
          47.61904762,
          28.42639594,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.49,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 53.65,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Lacey, Thomas J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Lippart, J.",
          43.1,
          55.82010582,
          35.98615917,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.1,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 56.8,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Lippart, Jack D."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Lacianca, E.",
          41.76,
          59.16666667,
          35.05154639,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.76,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 57.95,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.28,
                name: "ROR"
              }
            ],
            name: "Lacianca, Elisa C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Lang, D.",
          34.43,
          37.64044944,
          32.44274809,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 34.43,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 60.45,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Lang, David H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "McCray, C.",
          33.33,
          40.12345679,
          24.32432432,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 33.33,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 54.61,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.71,
                name: "ROR"
              }
            ],
            name: "McCray, C. Walter III"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "D’Agostino, R.",
          28.41,
          36.95652174,
          28.34645669,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 28.41,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 70.85,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "D’Agostino, Robert M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Roberts, W.",
          27.98,
          40.08438819,
          19.42740286,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.98,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 71.76,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Roberts, Wendy B."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Lehigh",
      54.88215488,
      61.816340309999994,
      52.853765620000004,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 54.88215488,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 36.5018,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.030699999999999998,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 8.1388,
            name: "ROR"
          }
        ],
        name: "Lehigh"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Manescu, R.",
          68.18,
          72.63157895,
          68.11279826,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 68.18,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 31.55,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Manescu, Ronald S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Maura, W.",
          64.84,
          75.24271845,
          60.41009464,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 64.84,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 35.16,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Maura, Wayne"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Pochron, M.",
          63.99,
          69.00584795,
          61.08786611,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 63.99,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 36.01,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Pochron, Michael Joseph"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Trexler, D.",
          61.95,
          73.04964539,
          57.55813953,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 61.95,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.73,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 25.04,
                name: "ROR"
              }
            ],
            name: "Trexler, Daniel C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Santiago, R.",
          60.72,
          64.65517241,
          63.26530612,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 60.72,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 33,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 5.95,
                name: "ROR"
              }
            ],
            name: "Santiago, Rashid"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Butler, D.",
          59.62,
          70.43478261,
          55.907173,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 59.62,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 38.79,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.27,
                name: "ROR"
              }
            ],
            name: "Butler, Donna R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Engler, P.",
          58.02,
          67.97385621,
          57.80189959,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 58.02,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 41.56,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Engler, Patricia M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Devine, K.",
          57.78,
          59.83263598,
          58.59213251,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 57.78,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 42.11,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Devine, Karen C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Howells, D.",
          57.1,
          61.34453782,
          60.11235955,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 57.1,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 42.9,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Howells, David M. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Beck, R.",
          53.89,
          78.94736842,
          48.37049743,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.89,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 26.01,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 20.11,
                name: "ROR"
              }
            ],
            name: "Beck, Rod"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Halal, R.",
          53.25,
          67.79661017,
          50.32258065,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.25,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 46.59,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Halal, Robert C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Crawford, C.",
          50.37,
          58.33333333,
          46.08695652,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.37,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 49.63,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Crawford, Charles H."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Hammond, J.",
          50.1,
          50.71090047,
          48.14340589,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.1,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 21.83,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 27.98,
                name: "ROR"
              }
            ],
            name: "Hammond, Jacob E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "D’Amore, M.",
          42.59,
          46.77419355,
          40.88145897,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.59,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 19.3,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 36.84,
                name: "ROR"
              }
            ],
            name: "D’Amore, Michael D."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Faulkner, M.",
          41.49,
          45.92274678,
          37.84764208,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.49,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 58.24,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Faulkner, Michael J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Anthony, J.",
          31.43,
          17.39130435,
          36.36363636,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.43,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 65,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.71,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Anthony, James T."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Dantos, M.",
          30.81,
          32.43243243,
          31.25,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.81,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 64.86,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Dantos, Maria L."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Lackawanna",
      52.635003250000004,
      67.13459950000001,
      48.9720035,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 52.635003250000004,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 37.931,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 7.563400000000001,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 1.8055,
            name: "ROR"
          }
        ],
        name: "Lackawanna"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Giglio, T.",
          67.94,
          82.48175182,
          64.90825688,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 67.94,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 19.77,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 8.97,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 3.32,
                name: "ROR"
              }
            ],
            name: "Giglio, Theodore J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Corbett, J.",
          58.27,
          75.42372881,
          54.09836066,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 58.27,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 31.22,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 10.05,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.31,
                name: "ROR"
              }
            ],
            name: "Corbett, Joanne Price"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Ware, P.",
          55.44,
          59.84251969,
          54.07725322,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 55.44,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 35.38,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 7.81,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.38,
                name: "ROR"
              }
            ],
            name: "Ware, Paul J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "McGraw, S.",
          55.3,
          75.59055118,
          50.52631579,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 55.3,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 42.52,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.71,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.31,
                name: "ROR"
              }
            ],
            name: "McGraw, Sean P."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Pesota, J.",
          53.91,
          66.1971831,
          50.6,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.91,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 27.33,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 14.77,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 3.99,
                name: "ROR"
              }
            ],
            name: "Pesota, John P."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Keeler, P.",
          52.27,
          69.93464052,
          46.8503937,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 52.27,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 39.94,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 4.25,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 3.4,
                name: "ROR"
              }
            ],
            name: "Keeler, Paul"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Farrell, A.",
          49.92,
          50.40650407,
          50.21097046,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 49.92,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 42.83,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 6.43,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.82,
                name: "ROR"
              }
            ],
            name: "Farrell, Alyce Hailstone"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Turlip-Murphy, L.",
          46.17,
          63.04347826,
          41.89189189,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.17,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 50.71,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 2.98,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.13,
                name: "ROR"
              }
            ],
            name: "Turlip-Murphy, Laura"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Gallagher, T.",
          38.52,
          62.28070175,
          32.93885602,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.52,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 47.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 12.59,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.19,
                name: "ROR"
              }
            ],
            name: "Gallagher, Terrence V."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Berks",
      50.92425977,
      58.42078961,
      50.242593170000006,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 50.92425977,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 32.9706,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.8427,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 15.2172,
            name: "ROR"
          }
        ],
        name: "Berks"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Hall, W.",
          95.81,
          96.2962963,
          95.74468085,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 95.81,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 4.03,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Hall, William N. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hadzick, P.",
          82.72,
          86.29032258,
          82.65204387,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 82.72,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 16.82,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.46,
                name: "ROR"
              }
            ],
            name: "Hadzick, Paul J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Robinson, A.",
          67.48,
          68.46153846,
          68.62302483,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 67.48,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 32.19,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.33,
                name: "ROR"
              }
            ],
            name: "Robinson, Alvin B."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kennedy, S.",
          62.97,
          66.66666667,
          64.62765957,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 62.97,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 20.99,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 16.04,
                name: "ROR"
              }
            ],
            name: "Kennedy, Stuart D."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Glass, D.",
          57.02,
          90.38461538,
          53.56200528,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 57.02,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 42.98,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Glass, David E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kowalski, P.",
          55.56,
          51.89873418,
          57.08812261,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 55.56,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 43.89,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.56,
                name: "ROR"
              }
            ],
            name: "Kowalski, Phyllis J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Xavios, T.",
          54.71,
          61.9047619,
          55.87301587,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 54.71,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 43.5,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.79,
                name: "ROR"
              }
            ],
            name: "Xavios, Thomas H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Scott, K.",
          51.4,
          64.28571429,
          51.61290323,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 51.4,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 20.73,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 27.86,
                name: "ROR"
              }
            ],
            name: "Scott, Kyley L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Patton, D.",
          45.8,
          57.36434109,
          43.23144105,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 45.8,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 54.08,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Patton, Dean R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Yoch, D.",
          43.48,
          55.68181818,
          41.81459566,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.48,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 32.05,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 24.48,
                name: "ROR"
              }
            ],
            name: "Yoch, David L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Book, A.",
          43.38,
          52.38095238,
          42.69662921,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.38,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 38.77,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 17.54,
                name: "ROR"
              }
            ],
            name: "Book, Andrea J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Gauby, T.",
          43.23,
          45.09803922,
          43.41736695,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.23,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 32.3,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 24.47,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Gauby, Thomas M. Sr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bentz, N.",
          37.58,
          41.34078212,
          40.12158055,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.58,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 27.11,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 35.31,
                name: "ROR"
              }
            ],
            name: "Bentz, Nicholas M. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Young, A.",
          37.2,
          45.52845528,
          35.87896254,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.2,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 16.3,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 46.38,
                name: "ROR"
              }
            ],
            name: "Young, Ann L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Frederick, V.",
          37.03,
          41.86046512,
          37.42690058,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.03,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 62.97,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Frederick, Victor M. IV"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Greth, G.",
          34.95,
          31.57894737,
          35.07246377,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 34.95,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 65.05,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Greth, Gail M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hartman, M.",
          33.33,
          42.10526316,
          32.14285714,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 33.33,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 66.67,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Hartman, Michael G."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Fegley, S.",
          31.79,
          29.8013245,
          32.33618234,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.79,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 29.71,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 38.27,
                name: "ROR"
              }
            ],
            name: "Fegley, Sandra L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bagenstose, K.",
          31.05,
          45,
          29.82107356,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.05,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 31.58,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 37.37,
                name: "ROR"
              }
            ],
            name: "Bagenstose, Kim L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Dougherty, T.",
          29.9,
          33.33333333,
          33.33333333,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.9,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 6.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 63.4,
                name: "ROR"
              }
            ],
            name: "Dougherty, Timothy M."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Philadelphia",
      50.122163519999994,
      56.02170568,
      43.3107617,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 50.122163519999994,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 7.017900000000001,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 6.6315,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 36.207699999999996,
            name: "ROR"
          }
        ],
        name: "Philadelphia"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Rebstock, F.",
          51.31,
          55.90909091,
          44.80991029,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 51.31,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 5.21,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.79,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 42.68,
                name: "ROR"
              }
            ],
            name: "Rebstock, Francis J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Rice, J.",
          51.06,
          56.29431227,
          44.7446084,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 51.06,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 16.32,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.83,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 30.77,
                name: "ROR"
              }
            ],
            name: "Rice, Jane M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "O’Brien, J.",
          50.56,
          56.52024708,
          43.40175953,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.56,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 9.03,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 6.41,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 34,
                name: "ROR"
              }
            ],
            name: "O’Brien, James"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Stack, P.",
          50.24,
          56.43951744,
          42.87348433,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.24,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.16,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.62,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 48.97,
                name: "ROR"
              }
            ],
            name: "Stack, Patrick"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bedford, S.",
          49.04,
          54.89941596,
          42.60808926,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 49.04,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 3.47,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 12.8,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 34.69,
                name: "ROR"
              }
            ],
            name: "Bedford, Sheila M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Devlin, K.",
          47.39,
          53.08736379,
          41.41494436,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 47.39,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 2.03,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 13.4,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 37.17,
                name: "ROR"
              }
            ],
            name: "Devlin, Kevin R."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Beaver",
      49.051792830000004,
      64.33048433,
      43.922127259999996,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 49.051792830000004,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 12.6554,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 1.833,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 35.8145,
            name: "ROR"
          }
        ],
        name: "Beaver"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Livingston, W.",
          67.48,
          81.08108108,
          61.2244898,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 67.48,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 5.13,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.24,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 27.14,
                name: "ROR"
              }
            ],
            name: "Livingston, William R. II"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hladio, A.",
          59.03,
          72.97297297,
          54.57413249,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 59.03,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 13.87,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.05,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 26.05,
                name: "ROR"
              }
            ],
            name: "Hladio, Andrew M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Howe, E.",
          53.84,
          70.04405286,
          49.07872697,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.84,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 13.49,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.28,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 31.4,
                name: "ROR"
              }
            ],
            name: "Howe, Edward"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Armour, J.",
          53.66,
          69.33867735,
          56.72043011,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.66,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 2.09,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 6.62,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 37.63,
                name: "ROR"
              }
            ],
            name: "Armour, John W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Loughner, C.",
          52.62,
          67.17948718,
          48.1557377,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 52.62,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 3.39,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.7,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 42.15,
                name: "ROR"
              }
            ],
            name: "Loughner, C. Douglas."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Swihart, J.",
          51.94,
          62.9787234,
          48.10690423,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 51.94,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 14.4,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.11,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 32.41,
                name: "ROR"
              }
            ],
            name: "Swihart, Janet"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Nicholson, D.",
          47.45,
          59.30735931,
          41.95402299,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 47.45,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 17.96,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.46,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 33.13,
                name: "ROR"
              }
            ],
            name: "Nicholson, Dale"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Schafer, J.",
          42.12,
          56.65024631,
          36.83274021,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.12,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 17,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.25,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 39.62,
                name: "ROR"
              }
            ],
            name: "Schafer, Joseph"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Finn, T.",
          31.84,
          53.33333333,
          25.6097561,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.84,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 23.2,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.59,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 43.37,
                name: "ROR"
              }
            ],
            name: "Finn, Timothy"
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Lawrence",
      48.92407633,
      66.28477905,
      43.4806939,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 48.92407633,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 2.233,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 23.3455,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 24.685299999999998,
            name: "ROR"
          }
        ],
        name: "Lawrence"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Amodie, M.",
          65.79,
          81.85053381,
          57.64966741,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 65.79,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 1.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 20.71,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 11.66,
                name: "ROR"
              }
            ],
            name: "Amodie, Melissa Ann"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Nicholson, J.",
          48.46,
          59.45945946,
          45.25,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 48.46,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 32.82,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 18.73,
                name: "ROR"
              }
            ],
            name: "Nicholson, Jennifer L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "McGrath, S.",
          47.88,
          69.76744186,
          41.66666667,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 47.88,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 7.94,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 20.9,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 23.28,
                name: "ROR"
              }
            ],
            name: "McGrath, Scott"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Rishel, D.",
          40.13,
          50,
          38.24701195,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.13,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 1.64,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 20.72,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 37.5,
                name: "ROR"
              }
            ],
            name: "Rishel, David B."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Cartwright, J.",
          27.82,
          32.60869565,
          27.82608696,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.82,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 2.11,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 28.17,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 41.9,
                name: "ROR"
              }
            ],
            name: "Cartwright, Jerry G. Jr."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Mifflin",
      48.49498328,
      70.11494253000001,
      47.482014389999996,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 48.49498328,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 50.6355,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.33440000000000003,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 0.46820000000000006,
            name: "ROR"
          }
        ],
        name: "Mifflin"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Miller, J.",
          55.1,
          75.75757576,
          54.02542373,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 55.1,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 43.73,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.39,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.59,
                name: "ROR"
              }
            ],
            name: "Miller, Jack E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Reed, J.",
          50.95,
          74.07407407,
          49.77477477,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.95,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 48.63,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.42,
                name: "ROR"
              }
            ],
            name: "Reed, Jonathan W."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Smith, K.",
          38.71,
          59.25925926,
          37.90697674,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.71,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 60.86,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.43,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Smith, Kent A."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Northampton",
      45.835299670000005,
      55.7063541,
      43.86813852,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 45.835299670000005,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 36.5278,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 1.9356000000000002,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 15.213,
            name: "ROR"
          }
        ],
        name: "Northampton"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Matos-Gonzalez, N.",
          63.3,
          66.42335766,
          63.19796954,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 63.3,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 30.64,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 5.87,
                name: "ROR"
              }
            ],
            name: "Matos-Gonzalez, Nancy"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Corpora, D.",
          57.62,
          68.65671642,
          52.03252033,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 57.62,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 37.47,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 4.91,
                name: "ROR"
              }
            ],
            name: "Corpora, Daniel G."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Yetter, R.",
          56.91,
          63.85542169,
          53.84615385,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 56.91,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 34.99,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 7.37,
                name: "ROR"
              }
            ],
            name: "Yetter, Richard H. III"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Grifo, A.",
          55.76,
          69.60784314,
          52.25806452,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 55.76,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 25.65,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 18.35,
                name: "ROR"
              }
            ],
            name: "Grifo, Antonia"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Zito, A.",
          55.52,
          72.72727273,
          53.7593985,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 55.52,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 44.16,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.32,
                name: "ROR"
              }
            ],
            name: "Zito, Alicia Rose"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hawke, R.",
          53.61,
          75.92592593,
          50.81585082,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.61,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 46.18,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.2,
                name: "ROR"
              }
            ],
            name: "Hawke, Robert A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Taschner, J.",
          53.58,
          58.01526718,
          52.63157895,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.58,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 26.97,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.18,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 18.9,
                name: "ROR"
              }
            ],
            name: "Taschner, Jacqueline M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Capobianco, J.",
          52.85,
          72.04301075,
          49.90176817,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 52.85,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 47.15,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Capobianco, John"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Schlegel, D.",
          47.81,
          75,
          43.28358209,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 47.81,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 17.19,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 34.06,
                name: "ROR"
              }
            ],
            name: "Schlegel, Douglas"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Manwaring, R.",
          46.04,
          54.92957746,
          43.52941176,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.04,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 48.48,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 5.49,
                name: "ROR"
              }
            ],
            name: "Manwaring, Roy A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Narlesky, J.",
          44.19,
          49.38271605,
          43.33333333,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44.19,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 55.81,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Narlesky, James J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Broscius, P.",
          39.69,
          37.79527559,
          41.73669468,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 39.69,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 60.12,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.2,
                name: "ROR"
              }
            ],
            name: "Broscius, Patricia C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Pendolino, S.",
          34.72,
          57.53424658,
          34.89208633,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 34.72,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.71,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 11.01,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 41.56,
                name: "ROR"
              }
            ],
            name: "Pendolino, Samuel V."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Rapp, A.",
          32.62,
          38.63636364,
          42.38410596,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.62,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 65.96,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Rapp, Anthony G. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Zilhaver, L.",
          30.2,
          44.44444444,
          30.13435701,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.2,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 3.88,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 20,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 45.51,
                name: "ROR"
              }
            ],
            name: "Zilhaver, Lincoln S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Barner, J.",
          27.44,
          26.04166667,
          27.95698925,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.44,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 72.56,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Barner, Joseph K."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Marwood, R.",
          23.04,
          45.83333333,
          23.36244541,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 23.04,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 16.46,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 60.51,
                name: "ROR"
              }
            ],
            name: "Marwood, Rita J."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Romig, E.",
          21.2,
          34.28571429,
          18.07909605,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 21.2,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 18.89,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 59.91,
                name: "ROR"
              }
            ],
            name: "Romig, Elizabeth A."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Bradford",
      45.49865229,
      62.26415093999999,
      45.148401830000005,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 45.49865229,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 13.8544,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 29.110500000000002,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 11.536399999999999,
            name: "ROR"
          }
        ],
        name: "Bradford"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Shaw, M.",
          60.71,
          81.81818182,
          59.8062954,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 60.71,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 2.46,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 36.16,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.67,
                name: "ROR"
              }
            ],
            name: "Shaw, Michael"
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Wheaton, F.",
          42.23,
          50,
          42.10526316,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.23,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 49.22,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.55,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 6.99,
                name: "ROR"
              }
            ],
            name: "Wheaton, Fred M."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Clark, T.",
          41.82,
          47.61904762,
          42.02657807,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.82,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 1.85,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 54.78,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.54,
                name: "ROR"
              }
            ],
            name: "Clark, Timothy M."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Wilcox, J.",
          35.79,
          50,
          35.51136364,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.79,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.02,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 4.64,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 47.54,
                name: "ROR"
              }
            ],
            name: "Wilcox, Jonathan"
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Lancaster",
      44.932404749999996,
      55.54532904,
      43.07425541,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 44.932404749999996,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 39.6443,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.0902,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 15.2283,
            name: "ROR"
          }
        ],
        name: "Lancaster"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Hamill, N.",
          64.32,
          77.02702703,
          61.37724551,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 64.32,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 35.44,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.24,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Hamill, Nancy G."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Jimenez, J.",
          63.41,
          69.23076923,
          61.59793814,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 63.41,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 30.46,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 6.13,
                name: "ROR"
              }
            ],
            name: "Jimenez, Janice"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Roth, B.",
          62.44,
          66.66666667,
          63.97306397,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 62.44,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 35.85,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.46,
                name: "ROR"
              }
            ],
            name: "Roth, Bruce A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Benner, W.",
          59.79,
          71.64179104,
          57.84313725,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 59.79,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 39.95,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Benner, William E. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Sheller, R.",
          59.6,
          70.58823529,
          57.84615385,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 59.6,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 31.82,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 8.59,
                name: "ROR"
              }
            ],
            name: "Sheller, Raymond S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hartman, R.",
          57.28,
          79.16666667,
          53.91791045,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 57.28,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 34.21,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 8.51,
                name: "ROR"
              }
            ],
            name: "Hartman, Rodney H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Russell, T.",
          56.44,
          71.21212121,
          55.34591195,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 56.44,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 37.02,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 6.53,
                name: "ROR"
              }
            ],
            name: "Russell, Tony S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Mylin, S.",
          50.93,
          62.96296296,
          49.79166667,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.93,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 48.88,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Mylin, Stuart J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Witkonis, A.",
          50.47,
          56.39534884,
          48.6437613,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.47,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 38.02,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 11.1,
                name: "ROR"
              }
            ],
            name: "Witkonis, Adam J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Tobin, E.",
          50.11,
          61.53846154,
          48.58611825,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.11,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 40.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.97,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 7.22,
                name: "ROR"
              }
            ],
            name: "Tobin, Edward A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Albert, S.",
          49.06,
          55.10204082,
          47.76470588,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 49.06,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 50.94,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Albert, Scott E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bixler, M.",
          47.41,
          59.3220339,
          45.15463918,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 47.41,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 37.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 14.89,
                name: "ROR"
              }
            ],
            name: "Bixler, Miles K."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Chudzik, B.",
          46.31,
          57.63888889,
          43.30543933,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.31,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 53.69,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Chudzik, Brian E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Miller, D.",
          45.52,
          49.24623116,
          44.69026549,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 45.52,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 37.11,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 17.38,
                name: "ROR"
              }
            ],
            name: "Miller, David P."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Mongiovi-Sponaugle, M.",
          44.38,
          36.55172414,
          46.69051878,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44.38,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 20.37,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 34.97,
                name: "ROR"
              }
            ],
            name: "Mongiovi-Sponaugle, Mary"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Keller, J.",
          43.28,
          39.53488372,
          44.40993789,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.28,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 38.14,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 18.09,
                name: "ROR"
              }
            ],
            name: "Keller, Joshua R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Wilt, R.",
          42.83,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.83,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 8.86,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 43.04,
                name: "ROR"
              }
            ],
            name: "Wilt, Richard S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Commins, B.",
          40.23,
          56.14035088,
          36.95652174,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.23,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 52.96,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 6.81,
                name: "ROR"
              }
            ],
            name: "Commins, B Denise"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Jamison, M.",
          40.06,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.06,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 59.94,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Jamison, Mary G."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Duncan, J.",
          32.62,
          47.05882353,
          32.22891566,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.62,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 63.64,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 3.74,
                name: "ROR"
              }
            ],
            name: "Duncan, Jayne F."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Gummo, D.",
          27.51,
          37.83783784,
          27.39018088,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.51,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 33.68,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 38.82,
                name: "ROR"
              }
            ],
            name: "Gummo, Douglas L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Herman, R.",
          10.35,
          17.14285714,
          9.725158562,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 10.35,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 24.81,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 64.83,
                name: "ROR"
              }
            ],
            name: "Herman, Robert A. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Reinaker, D.",
          6.41,
          12,
          6,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 6.41,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 46.45,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.23,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 46.91,
                name: "ROR"
              }
            ],
            name: "Reinaker, Dennis E."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Cambria",
      44.29388101,
      65.52083332999999,
      39.145907470000004,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 44.29388101,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 33.629799999999996,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.0424,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 21.6222,
            name: "ROR"
          }
        ],
        name: "Cambria"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Musulin, M.",
          55.29,
          65.19607843,
          50.94339623,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 55.29,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 19.62,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 25.09,
                name: "ROR"
              }
            ],
            name: "Musulin, Michael"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Zanghi, M.",
          54.42,
          77.52808989,
          47.8125,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 54.42,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 19.81,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.24,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 25.54,
                name: "ROR"
              }
            ],
            name: "Zanghi, Mary Ann"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Varner, R.",
          53.68,
          77.04918033,
          51.03926097,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.68,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 45.92,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.4,
                name: "ROR"
              }
            ],
            name: "Varner, Rick W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Creany, F.",
          49.92,
          92.20779221,
          43.46978558,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 49.92,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 10.12,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 39.97,
                name: "ROR"
              }
            ],
            name: "Creany, Fred"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Price, K.",
          40.55,
          52.45283019,
          34.89278752,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.55,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 56.93,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 2.52,
                name: "ROR"
              }
            ],
            name: "Price, Kevin J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Prebish, J.",
          37.68,
          68.33333333,
          33.17865429,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.68,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 40.08,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.2,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 22.04,
                name: "ROR"
              }
            ],
            name: "Prebish, John Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Barron, J.",
          36.07,
          62.79069767,
          30.84291188,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 36.07,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 37.54,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 26.39,
                name: "ROR"
              }
            ],
            name: "Barron, John W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Zungali, M.",
          35.31,
          83.33333333,
          30.90909091,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.31,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 31.63,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 32.86,
                name: "ROR"
              }
            ],
            name: "Zungali, Michael"
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "York",
      44.27380952,
      54.119850189999994,
      41.118447870000004,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 44.27380952,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 15.765299999999998,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 5.7181999999999995,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 33.3671,
            name: "ROR"
          }
        ],
        name: "York"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Meisenhelter, D.",
          81.79,
          87.36462094,
          79.33227345,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 81.79,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 17.45,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.11,
                name: "ROR"
              }
            ],
            name: "Meisenhelter, Douglas F."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Martin, R.",
          74.9,
          86.79245283,
          69.13580247,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 74.9,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 21.84,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.2,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 2.65,
                name: "ROR"
              }
            ],
            name: "Martin, Richard E. II"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Eshbach, D.",
          54.02,
          65.6,
          51.9047619,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 54.02,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 9.62,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 12.65,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 23.45,
                name: "ROR"
              }
            ],
            name: "Eshbach, David C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Clancy, J.",
          53.55,
          57.22543353,
          52.38095238,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.55,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 19.84,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 2.58,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 23.87,
                name: "ROR"
              }
            ],
            name: "Clancy, Jennifer J.P."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Morgan, J.",
          51.83,
          52.43902439,
          52.21843003,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 51.83,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 15.27,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.51,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 30.75,
                name: "ROR"
              }
            ],
            name: "Morgan, James H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Groom, W.",
          50.99,
          62.68656716,
          46.21212121,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.99,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 27.23,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.99,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 20.79,
                name: "ROR"
              }
            ],
            name: "Groom, Walter"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Williams, L.",
          50.54,
          57.73584906,
          45.57640751,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.54,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 2.78,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 14.37,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 32.15,
                name: "ROR"
              }
            ],
            name: "Williams, Linda L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Haskell, R.",
          48.41,
          47.87644788,
          49.31506849,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 48.41,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 16.19,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 8.25,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 25.56,
                name: "ROR"
              }
            ],
            name: "Haskell, Ronald J. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bloss, B.",
          46.99,
          53.28638498,
          44.73180077,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.99,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 5.61,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 14.37,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 32.75,
                name: "ROR"
              }
            ],
            name: "Bloss, Barry L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Miner, J.",
          46.07,
          73.17073171,
          40.75286416,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.07,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 6.5,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.22,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 46.07,
                name: "ROR"
              }
            ],
            name: "Miner, James S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Manifold, L.",
          43.35,
          48.61111111,
          42.09558824,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.35,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 16.45,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 5.15,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 34.91,
                name: "ROR"
              }
            ],
            name: "Manifold, Laura S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Laird, S.",
          43.05,
          62.8742515,
          36.69064748,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.05,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 7.08,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 13.35,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 36.38,
                name: "ROR"
              }
            ],
            name: "Laird, Scott"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Toluba, J.",
          41.99,
          44.56928839,
          41.40625,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.99,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 23.72,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.45,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 33.53,
                name: "ROR"
              }
            ],
            name: "Toluba, Joel N."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Gross, S.",
          41.36,
          62.28571429,
          36.18157543,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.36,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 17.48,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 6.29,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 34.54,
                name: "ROR"
              }
            ],
            name: "Gross, Scott J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Albright, K.",
          40.73,
          44.50549451,
          40.29850746,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.73,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 31.53,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 2.65,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 25.09,
                name: "ROR"
              }
            ],
            name: "Albright, Keith L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Thomas, R.",
          39.78,
          52.84552846,
          37.3015873,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 39.78,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 14.66,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 8.89,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 34.32,
                name: "ROR"
              }
            ],
            name: "Thomas, Richard T."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Reilly, T.",
          39.6,
          60,
          36.29807692,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 39.6,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 28.6,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.2,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 30.6,
                name: "ROR"
              }
            ],
            name: "Reilly, Thomas J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Dubs, D.",
          36.35,
          61.14649682,
          30.81481481,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 36.35,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 14.3,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.36,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 48.75,
                name: "ROR"
              }
            ],
            name: "Dubs, Dwayne A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Eckenrode, R.",
          33.2,
          51.04895105,
          29.22297297,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 33.2,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.05,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 2.41,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 52.34,
                name: "ROR"
              }
            ],
            name: "Eckenrode, Robert A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Fishel, J.",
          31.29,
          51.61290323,
          28.77358491,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.29,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 7.59,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 7.19,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 50.6,
                name: "ROR"
              }
            ],
            name: "Fishel, John H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Oberdorf, J.",
          30.24,
          30.9178744,
          29.94652406,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.24,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 21.36,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 2.57,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 45.43,
                name: "ROR"
              }
            ],
            name: "Oberdorf, Jeffrey L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Ness, H.",
          21.35,
          15.09433962,
          24.79338843,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 21.35,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 48.88,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.69,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 24.16,
                name: "ROR"
              }
            ],
            name: "Ness, Harry M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Edie, N.",
          18.12,
          22.09302326,
          16.04584527,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 18.12,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 2.35,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.18,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 78.12,
                name: "ROR"
              }
            ],
            name: "Edie, Nancy L."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Fayette",
      44.27074081,
      54,
      42.30092389,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 44.27074081,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 54.6505,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 0.7825000000000001,
            name: "ROR"
          }
        ],
        name: "Fayette"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Jeffries, J.",
          52.58,
          67.46031746,
          48.48484848,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 52.58,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 47.25,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Jeffries, Jennifer L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Dennis, W.",
          46.96,
          54.54545455,
          45.65217391,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.96,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 52.88,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.16,
                name: "ROR"
              }
            ],
            name: "Dennis, Wendy D."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Haggerty, R.",
          45.95,
          59.40594059,
          44.37172775,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 45.95,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 53.93,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Haggerty, Ronald J. Sr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Shimshock, D.",
          45.89,
          57.89473684,
          43.59861592,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 45.89,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 54.11,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Shimshock, Daniel C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Metros, M.",
          45.41,
          52.2556391,
          43.50132626,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 45.41,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 54.49,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Metros, Michael"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Defino, M.",
          40.78,
          42.22222222,
          40.18518519,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.78,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 58.78,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Defino, Michael J. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kasunic, R.",
          37.85,
          50.45045045,
          36.19456366,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.85,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 62.15,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Kasunic, Richard II"
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Erie",
      43.95330739,
      63.73239437,
      37.027147310000004,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 43.95330739,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 18.932,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.6072,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 36.493900000000004,
            name: "ROR"
          }
        ],
        name: "Erie"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Dipaolo, D.",
          97.36,
          98.31460674,
          97.35099338,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 97.36,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 2.35,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.29,
                name: "ROR"
              }
            ],
            name: "Dipaolo, Dominick"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Carney, T.",
          91.02,
          91.07142857,
          91.09589041,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 91.02,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 8.38,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.3,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.3,
                name: "ROR"
              }
            ],
            name: "Carney, Thomas"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Mack, S.",
          60.68,
          61.56862745,
          61.8556701,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 60.68,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 10.04,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 4.49,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 24.57,
                name: "ROR"
              }
            ],
            name: "Mack, Suzanne C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Urbaniak, P.",
          60.33,
          60.91954023,
          60.76555024,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 60.33,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 6.05,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.46,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 32.15,
                name: "ROR"
              }
            ],
            name: "Urbaniak, Paul G."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bizzarro, P.",
          48.66,
          63.83928571,
          38.04347826,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 48.66,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 13.36,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.76,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 37.21,
                name: "ROR"
              }
            ],
            name: "Bizzarro, Paul A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hammer, S.",
          43.32,
          64.51612903,
          41.27516779,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.32,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 13.06,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 43.62,
                name: "ROR"
              }
            ],
            name: "Hammer, Scott B."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Mackendrick, C.",
          38.37,
          83.33333333,
          33.60433604,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.37,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 61.39,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.24,
                name: "ROR"
              }
            ],
            name: "Mackendrick, Chris K."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Fischer, D.",
          37.71,
          45.16129032,
          39.5256917,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.71,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 7.63,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 2.12,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 52.54,
                name: "ROR"
              }
            ],
            name: "Fischer, Deborah"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Manzi, P.",
          35.25,
          56.52173913,
          33.33333333,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.25,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 62.18,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 2.57,
                name: "ROR"
              }
            ],
            name: "Manzi, Paul"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Stuck-Lewis, D.",
          32.14,
          54.83870968,
          28.74251497,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.14,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 9.29,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.24,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 58.1,
                name: "ROR"
              }
            ],
            name: "Stuck-Lewis, Denise"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Muir, S.",
          29.93,
          42.42424242,
          32.01320132,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.93,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.73,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 55.84,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 13.14,
                name: "ROR"
              }
            ],
            name: "Muir, Shannon L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Strohmeyer, S.",
          27.22,
          41.30434783,
          25,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.22,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 9.07,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.57,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 63.14,
                name: "ROR"
              }
            ],
            name: "Strohmeyer, Susan D."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Cooper, A.",
          25.17,
          36.36363636,
          24.26035503,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 25.17,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 10.2,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 25.85,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 38.1,
                name: "ROR"
              }
            ],
            name: "Cooper, Alan B."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Krahe, M.",
          24.31,
          30.55555556,
          24.22997947,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 24.31,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.24,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 63.45,
                name: "ROR"
              }
            ],
            name: "Krahe, Mark R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "McGowan, B.",
          18.8,
          34.73684211,
          16.00753296,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 18.8,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 17.54,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 63.67,
                name: "ROR"
              }
            ],
            name: "McGowan, Brian M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Nichols, B.",
          17.81,
          25,
          18.39464883,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 17.81,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 13.44,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 68.75,
                name: "ROR"
              }
            ],
            name: "Nichols, Brenda"
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Allegheny",
      43.50802205,
      57.06645057000001,
      35.29897333,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 43.50802205,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 2.7704,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 23.8085,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 29.5724,
            name: "ROR"
          }
        ],
        name: "Allegheny"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Welsh, R.",
          85.43,
          90.43478261,
          80.69414317,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 85.43,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.64,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 3.72,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 10.21,
                name: "ROR"
              }
            ],
            name: "Welsh, Regis C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Cramer, J.",
          75.62,
          81.08108108,
          58.88077859,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 75.62,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 15.89,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 8.39,
                name: "ROR"
              }
            ],
            name: "Cramer, Jesse J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Brletic, T.",
          73.89,
          83.11444653,
          61.09215017,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 73.89,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.87,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 8.57,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 16.57,
                name: "ROR"
              }
            ],
            name: "Brletic, Thomas S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Tibbs, E.",
          73.79,
          79.70660147,
          68.33333333,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 73.79,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 19.59,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 6.49,
                name: "ROR"
              }
            ],
            name: "Tibbs, Edward A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Barner, R.",
          71.38,
          77.04918033,
          64.17322835,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 71.38,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 18.73,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 9.89,
                name: "ROR"
              }
            ],
            name: "Barner, Robert L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Armour, J.",
          67.19,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 67.19,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 25.28,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 7.53,
                name: "ROR"
              }
            ],
            name: "Armour, John W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Costa, R.",
          58.39,
          62.44541485,
          55.04587156,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 58.39,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 18.08,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 23.53,
                name: "ROR"
              }
            ],
            name: "Costa, Ron Sr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Ricciardi, G.",
          53.89,
          63.45381526,
          45.73643411,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.89,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 19.07,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 27.04,
                name: "ROR"
              }
            ],
            name: "Ricciardi, Gene"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Martini, R.",
          53.25,
          63.79928315,
          43.25396825,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.25,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 24.68,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 22.08,
                name: "ROR"
              }
            ],
            name: "Martini, Randy"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Motznik, J.",
          51.79,
          58.31325301,
          45.47803618,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 51.79,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 19.98,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 28.24,
                name: "ROR"
              }
            ],
            name: "Motznik, James A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hromyak, L.",
          51.42,
          55.05050505,
          49.10714286,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 51.42,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.24,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 35.31,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 13.03,
                name: "ROR"
              }
            ],
            name: "Hromyak, Leonard J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Miller, T.",
          49.86,
          70.3125,
          38.49557522,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 49.86,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 6.09,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 44.04,
                name: "ROR"
              }
            ],
            name: "Miller, Thomas Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bengel, C.",
          49.29,
          68.27956989,
          40.55944056,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 49.29,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 1.42,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 16.27,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 33.02,
                name: "ROR"
              }
            ],
            name: "Bengel, Carolyn S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Butler, D.",
          48.64,
          56.30252101,
          42.85714286,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 48.64,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 25,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 26.36,
                name: "ROR"
              }
            ],
            name: "Butler, Daniel E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Larotonda, B.",
          47.09,
          71.02803738,
          37.07865169,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 47.09,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.26,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 14.29,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 38.36,
                name: "ROR"
              }
            ],
            name: "Larotonda, Blaise P."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Sosovicka, D.",
          47.05,
          64.42307692,
          42.23433243,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 47.05,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.21,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 26.37,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 26.37,
                name: "ROR"
              }
            ],
            name: "Sosovicka, David J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Shaffer, P.",
          46.63,
          60,
          48.03149606,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.63,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 1.23,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 20.86,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 31.29,
                name: "ROR"
              }
            ],
            name: "Shaffer, Peter H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Stephens, C.",
          46.46,
          69.15422886,
          32.20858896,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.46,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 8.02,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 19.03,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 26.49,
                name: "ROR"
              }
            ],
            name: "Stephens, Craig C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kovach, D.",
          44.59,
          62.16216216,
          41.50684932,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44.59,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 10.55,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 7.21,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 37.12,
                name: "ROR"
              }
            ],
            name: "Kovach, David T."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Joyce, D.",
          44.31,
          53.52112676,
          38.26530612,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44.31,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.29,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 36.73,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 18.08,
                name: "ROR"
              }
            ],
            name: "Joyce, Dennis R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Cooper, K.",
          44,
          51.37614679,
          36.70886076,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 2.46,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 25.08,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 28.46,
                name: "ROR"
              }
            ],
            name: "Cooper, Kevin E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Fullerton, W.",
          43.47,
          74.02597403,
          40.08483563,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.47,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 2.25,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 10.28,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 42.29,
                name: "ROR"
              }
            ],
            name: "Fullerton, William T."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Martin, A.",
          43.25,
          50.75376884,
          38.9261745,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.25,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.99,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 44.84,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 10.71,
                name: "ROR"
              }
            ],
            name: "Martin, Armand"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Riazzi, E.",
          41.92,
          45.73170732,
          37.59124088,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.92,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.33,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 23.16,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 34.42,
                name: "ROR"
              }
            ],
            name: "Riazzi, Eugene F. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Mills, B.",
          40.74,
          61.20689655,
          30.43478261,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.74,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 16.52,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 42.74,
                name: "ROR"
              }
            ],
            name: "Mills, Beth S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Ceoffe, A.",
          40.35,
          47.50733138,
          33.71757925,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.35,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 3.31,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 26.37,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 29.83,
                name: "ROR"
              }
            ],
            name: "Ceoffe, Anthony M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Arnoni, R.",
          39.83,
          71.55963303,
          29.94505495,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 39.83,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 15.93,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 41.09,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 3.14,
                name: "ROR"
              }
            ],
            name: "Arnoni, Ronald"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Petite, O.",
          39.55,
          50.32258065,
          29.53020134,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 39.55,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 24.44,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 36.01,
                name: "ROR"
              }
            ],
            name: "Petite, Oscar J. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Rushing, D.",
          39.55,
          48.55643045,
          30.72625698,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 39.55,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.4,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 29.69,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 30.36,
                name: "ROR"
              }
            ],
            name: "Rushing, Derwin"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hanley, J.",
          38.9,
          49.79079498,
          26.92307692,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.9,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 2.54,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 25.19,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 33.37,
                name: "ROR"
              }
            ],
            name: "Hanley, James J. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Saveikis, A.",
          38.71,
          79.41176471,
          21.09704641,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.71,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.59,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 14.37,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 46.33,
                name: "ROR"
              }
            ],
            name: "Saveikis, Anthony William"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Wagner, W.",
          38.51,
          69.47368421,
          26.60550459,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.51,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 7.14,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 11.8,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 42.55,
                name: "ROR"
              }
            ],
            name: "Wagner, William"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Smith, T.",
          36.19,
          57.06214689,
          25.3776435,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 36.19,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 6.61,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 38.13,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 19.07,
                name: "ROR"
              }
            ],
            name: "Smith, Tara"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Ravenstahl, R.",
          34.28,
          38.30645161,
          32.08955224,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 34.28,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 31.44,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 34.28,
                name: "ROR"
              }
            ],
            name: "Ravenstahl, Robert P. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Stoughton, L.",
          33.96,
          66,
          34.16856492,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 33.96,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 4.4,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 15.47,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 45.28,
                name: "ROR"
              }
            ],
            name: "Stoughton, Lewis E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "DeLuca, A.",
          33.17,
          41.82692308,
          25.5,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 33.17,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.24,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 21.88,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 44.71,
                name: "ROR"
              }
            ],
            name: "DeLuca, Anthony"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Dzvonick, R.",
          32.07,
          61.37931034,
          21.0106383,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.07,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 8.73,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 59.01,
                name: "ROR"
              }
            ],
            name: "Dzvonick, Robert Paul"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Ford, R.",
          31.56,
          44.68085106,
          26.53846154,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.56,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.28,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 66.48,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.68,
                name: "ROR"
              }
            ],
            name: "Ford, Robert L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Olasz, R.",
          31.23,
          39.73799127,
          24.42244224,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.23,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 1.67,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 43.12,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 23.98,
                name: "ROR"
              }
            ],
            name: "Olasz, Richard D. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "King, R.",
          30.79,
          40.90909091,
          23.90243902,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.79,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 2.45,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 47.41,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 19.35,
                name: "ROR"
              }
            ],
            name: "King, Richard G."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Haggerty, S.",
          30.69,
          65,
          31.11111111,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.69,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.94,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 4.38,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 51.36,
                name: "ROR"
              }
            ],
            name: "Haggerty, Sue"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Zucco, L.",
          30,
          40.74074074,
          24.84848485,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 30,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 39.6,
                name: "ROR"
              }
            ],
            name: "Zucco, Linda"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Caulfield, T.",
          29.88,
          33.33333333,
          26.14379085,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.88,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.3,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 64.2,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 5.62,
                name: "ROR"
              }
            ],
            name: "Caulfield, Thomas"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Schricker, S.",
          29.03,
          32.28070175,
          24.79674797,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.03,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.56,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 4.68,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 65.73,
                name: "ROR"
              }
            ],
            name: "Schricker, Scott H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Swearingen-Batch, C.",
          27.58,
          51.51515152,
          19.04761905,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.58,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 58.18,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 14.24,
                name: "ROR"
              }
            ],
            name: "Swearingen-Batch, Carla M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Eichler, R.",
          27.55,
          39.22651934,
          19.24686192,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.55,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 6.02,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 18.52,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 47.92,
                name: "ROR"
              }
            ],
            name: "Eichler, Roxanne Sakoian"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Barton, D.",
          27.52,
          51.85185185,
          20.30769231,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.52,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 10.74,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 61.74,
                name: "ROR"
              }
            ],
            name: "Barton, David J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "McGraw-Desmet, M.",
          27.38,
          49.51456311,
          17.94871795,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.38,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.86,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 19.02,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 52.74,
                name: "ROR"
              }
            ],
            name: "McGraw-Desmet, Maureen"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Lang, E.",
          27.27,
          46.15384615,
          16.2055336,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.27,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 40.19,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 32.54,
                name: "ROR"
              }
            ],
            name: "Lang, Elissa M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Cercone, M.",
          25.22,
          33.66834171,
          19.12350598,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 25.22,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 61.74,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 13.04,
                name: "ROR"
              }
            ],
            name: "Cercone, Mary A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Opiela, R.",
          24.7,
          49.52380952,
          16.39344262,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 24.7,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 16.95,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 30.75,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 27.6,
                name: "ROR"
              }
            ],
            name: "Opiela, Richard J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kaiser, R.",
          24.17,
          41.40127389,
          17.13395639,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 24.17,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.19,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 10.72,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 64.91,
                name: "ROR"
              }
            ],
            name: "Kaiser, Ralph"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Swan, T.",
          24.11,
          56.04395604,
          15.17027864,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 24.11,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.24,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 29.36,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 46.3,
                name: "ROR"
              }
            ],
            name: "Swan, Tom"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Shaffer, W.",
          23.33,
          21.42857143,
          21.01910828,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 23.33,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.83,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 42.5,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Shaffer, William"
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Murray, M.",
          22.8,
          35.4679803,
          17.38095238,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 22.8,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.16,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 36.48,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 40.25,
                name: "ROR"
              }
            ],
            name: "Murray, Mary P."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Seibel, W.",
          20.58,
          50,
          21.49901381,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 20.58,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.08,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 18.57,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 48.32,
                name: "ROR"
              }
            ],
            name: "Seibel, Wayne D."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Herbst, J.",
          17.67,
          24.36548223,
          13.94557823,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 17.67,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 13.25,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 68.88,
                name: "ROR"
              }
            ],
            name: "Herbst, Jeffrey L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Manning, J.",
          7.91,
          13.4529148,
          7.142857143,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 7.91,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 1.35,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 68.69,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 21.72,
                name: "ROR"
              }
            ],
            name: "Manning, Jeffrey A."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Dauphin",
      42.44132779,
      51.21710526,
      36.4556962,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 42.44132779,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 37.7645,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 1.0226000000000002,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 18.4838,
            name: "ROR"
          }
        ],
        name: "Dauphin"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Shugars, R.",
          90.57,
          91.74757282,
          88.57142857,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 90.57,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 8,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.43,
                name: "ROR"
              }
            ],
            name: "Shugars, Raymond F."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Semic, S.",
          84.79,
          85.87443946,
          84.1191067,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 84.79,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 14.86,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.35,
                name: "ROR"
              }
            ],
            name: "Semic, Steven M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Zozos, G.",
          65.83,
          68.24512535,
          64.78873239,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 65.83,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 32.5,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.17,
                name: "ROR"
              }
            ],
            name: "Zozos, George A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Pianka, B.",
          59.16,
          63.03317536,
          53.63984674,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 59.16,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 40.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Pianka, Barbara"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Zozos, P.",
          50.32,
          54.35435435,
          45.66037736,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.32,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 49.04,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.64,
                name: "ROR"
              }
            ],
            name: "Zozos, Paul T."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Witmer, L.",
          46.95,
          65.46391753,
          39.26829268,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.95,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 20.58,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 32.32,
                name: "ROR"
              }
            ],
            name: "Witmer, Lowell A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Lenker, J.",
          42.25,
          43.58974359,
          42.19653179,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.25,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 56.97,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.77,
                name: "ROR"
              }
            ],
            name: "Lenker, James A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Wenner, W.",
          41.78,
          48.33333333,
          37.57338552,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.78,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.12,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 46.1,
                name: "ROR"
              }
            ],
            name: "Wenner, William C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Lenker, K.",
          40.08,
          45.63953488,
          35.37234043,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.08,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 24.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 35.22,
                name: "ROR"
              }
            ],
            name: "Lenker, Kenneth A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "McKnight, S.",
          39.06,
          39.04282116,
          43.55555556,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 39.06,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 25.84,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 34.51,
                name: "ROR"
              }
            ],
            name: "McKnight, Sonya M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Judy, D.",
          38.99,
          55.73770492,
          31.30929791,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.99,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 19.75,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 41.13,
                name: "ROR"
              }
            ],
            name: "Judy, David H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "O’Leary, D.",
          35.03,
          41.32653061,
          38.46153846,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.03,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 61.86,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 2.22,
                name: "ROR"
              }
            ],
            name: "O’Leary, David"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Margerum, R.",
          33.87,
          56.41025641,
          27.44186047,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 33.87,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 29.77,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 36.36,
                name: "ROR"
              }
            ],
            name: "Margerum, Rebecca J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Lindsey, J.",
          33.86,
          43.64640884,
          26.65148064,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 33.86,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 66.14,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Lindsey, Joseph S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Smith, M.",
          31.43,
          37.90664781,
          28.18991098,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.43,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 68.34,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.23,
                name: "ROR"
              }
            ],
            name: "Smith, Michael J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Johnson, G.",
          30.92,
          60.28368794,
          23.10679612,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.92,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.22,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 56.56,
                name: "ROR"
              }
            ],
            name: "Johnson, Gregory D."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Pelino, D.",
          24.61,
          45.94594595,
          18.29787234,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 24.61,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 10.62,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 15.25,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 49.42,
                name: "ROR"
              }
            ],
            name: "Pelino, Dominic"
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "McKean",
      42.381348880000004,
      61.333333329999995,
      41.23134328,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 42.381348880000004,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 52.5042,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.0835,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 4.9249,
            name: "ROR"
          }
        ],
        name: "McKean"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Engman, D.",
          46.85,
          90.90909091,
          48.10810811,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.85,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 50.45,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 2.7,
                name: "ROR"
              }
            ],
            name: "Engman, David Richard"
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Cercone, D.",
          42.11,
          67.74193548,
          39.44954128,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.11,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 49.86,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 7.48,
                name: "ROR"
              }
            ],
            name: "Cercone, Dominic Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Todd, W.",
          42.07,
          71.42857143,
          40.06968641,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.07,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 54.37,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.32,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 2.91,
                name: "ROR"
              }
            ],
            name: "Todd, William K."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Luther, R.",
          39.74,
          40.74074074,
          40.07352941,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 39.74,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 55.05,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 5.21,
                name: "ROR"
              }
            ],
            name: "Luther, Richard W."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Armstrong",
      41.05888709,
      62.71186441,
      39.52662722,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 41.05888709,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 12.371699999999999,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 3.2954999999999997,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 43.2739,
            name: "ROR"
          }
        ],
        name: "Armstrong"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Andring, J.",
          60.57,
          83.33333333,
          60.25236593,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 60.57,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 38.57,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.86,
                name: "ROR"
              }
            ],
            name: "Andring, James"
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Owen, J.",
          40.05,
          67.24137931,
          37.82991202,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.05,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 10.74,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.06,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 48.14,
                name: "ROR"
              }
            ],
            name: "Owen, James H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Decomo, J.",
          35.65,
          50,
          34.25925926,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.65,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 1.19,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 8.15,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 55.01,
                name: "ROR"
              }
            ],
            name: "Decomo, J. Gary"
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Warren",
      40.61393152,
      70,
      39.95067818,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 40.61393152,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 15.112200000000001,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 2.2432,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 42.030699999999996,
            name: "ROR"
          }
        ],
        name: "Warren"
      }
    ],
    outlier: true,
    collapseData: [
      {
        data: [
          "",
          "Carlson, G.",
          45.68,
          85.71428571,
          44.93670886,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 45.68,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 20.37,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.31,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 33.64,
                name: "ROR"
              }
            ],
            name: "Carlson, Glenn S."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Bauer, L.",
          35.16,
          71.42857143,
          35.5450237,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.16,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 6.39,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 8.22,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 50.23,
                name: "ROR"
              }
            ],
            name: "Bauer, Laura"
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Woodin, T.",
          32.83,
          66.66666667,
          32.14285714,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.83,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 16.23,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 50.94,
                name: "ROR"
              }
            ],
            name: "Woodin, Todd A."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Susquehanna",
      40.32663317,
      66.66666667,
      39.76377953,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 40.32663317,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 33.2075,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.8805000000000001,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 25.5346,
            name: "ROR"
          }
        ],
        name: "Susquehanna"
      }
    ],
    outlier: true,
    collapseData: [
      {
        data: [
          "",
          "Hollister, J.",
          53.19,
          100,
          52.6119403,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.19,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 37.59,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 9.22,
                name: "ROR"
              }
            ],
            name: "Hollister, Jeffrey L."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Cordner, J.",
          35.69,
          50,
          35.46099291,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.69,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 24.92,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 39.06,
                name: "ROR"
              }
            ],
            name: "Cordner, Jodi L."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Brainard, S.",
          30.09,
          50,
          29.71698113,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.09,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 38.89,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 3.24,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 27.78,
                name: "ROR"
              }
            ],
            name: "Brainard, Suzanne M."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Clarion",
      40,
      40.625,
      40.83259522,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 40,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 34.2169,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.0803,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 25.702799999999996,
            name: "ROR"
          }
        ],
        name: "Clarion"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Miller, J.",
          44.41,
          50,
          44.98480243,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44.41,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 52.35,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 3.24,
                name: "ROR"
              }
            ],
            name: "Miller, Jeffrey C."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Schill, T.",
          43.53,
          72.72727273,
          43.61370717,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.53,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 18.82,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 37.65,
                name: "ROR"
              }
            ],
            name: "Schill, Timothy P."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Quinn, D.",
          37.9,
          31.81818182,
          39.15857605,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.9,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 29.03,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.27,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 32.8,
                name: "ROR"
              }
            ],
            name: "Quinn, Duane L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Long Turk, A.",
          29.21,
          40,
          30.12820513,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.21,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 37.64,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 33.15,
                name: "ROR"
              }
            ],
            name: "Long Turk, Amy L."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Huntingdon",
      38.96907216,
      64.05228758,
      37.83333333,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 38.96907216,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 30.3158,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 29.6842,
            name: "ROR"
          }
        ],
        name: "Huntingdon"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Wilt, R.",
          43.54,
          77.38095238,
          39.09090909,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.54,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 8.14,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 43.01,
                name: "ROR"
              }
            ],
            name: "Wilt, Richard"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Jamison, M.",
          41.78,
          60.71428571,
          42.90123457,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.78,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 58.22,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Jamison, Mary"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Gummo, D.",
          26.93,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 26.93,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 34.66,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 38.41,
                name: "ROR"
              }
            ],
            name: "Gummo, Douglas L."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Washington",
      38.93688681,
      55.77092511,
      35.82116788,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 38.93688681,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 34.2627,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.9538,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 25.663999999999998,
            name: "ROR"
          }
        ],
        name: "Washington"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Hopkins, L.",
          53.38,
          70.76923077,
          49.90176817,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.38,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 46.17,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.3,
                name: "ROR"
              }
            ],
            name: "Hopkins, Larry W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Wilson, M.",
          53.38,
          66.25,
          49.70238095,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.38,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 22.84,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 23.78,
                name: "ROR"
              }
            ],
            name: "Wilson, Mark"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Havelka, G.",
          50,
          86.66666667,
          48.42519685,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.66,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 37.34,
                name: "ROR"
              }
            ],
            name: "Havelka, Gary H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Ward, E.",
          49.1,
          69.23076923,
          45.55256065,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 49.1,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 50.45,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.23,
                name: "ROR"
              }
            ],
            name: "Ward, Ethan T."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Redlinger, R.",
          43.93,
          55.45851528,
          40.58394161,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.93,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 38.54,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 17.42,
                name: "ROR"
              }
            ],
            name: "Redlinger, Robert W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Mark, D.",
          40.65,
          65.6,
          35.77661431,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.65,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 7.31,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 4.22,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 47.54,
                name: "ROR"
              }
            ],
            name: "Mark, David W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Thompson, C.",
          34.55,
          58.53658537,
          32.12290503,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 34.55,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 65.21,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.24,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Thompson, Curtis"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Ellis, J.",
          31.19,
          65.11627907,
          28.19148936,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.19,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 11.93,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 56.88,
                name: "ROR"
              }
            ],
            name: "Ellis, James C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kanalis, J.",
          29.04,
          29.16666667,
          28.84990253,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.04,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 70.03,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Kanalis, Joshua P."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Weller, J.",
          29,
          44.93670886,
          26.06060606,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 3,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 3.2,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 64.5,
                name: "ROR"
              }
            ],
            name: "Weller, Jay"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "McDonald, T.",
          28.08,
          48.07692308,
          26.52631579,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 28.08,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 52.36,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 19.38,
                name: "ROR"
              }
            ],
            name: "McDonald, Traci L."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Lebanon",
      38.70437956,
      48.84547069,
      37.97733949,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 38.70437956,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 56.2432,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.6207,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 3.5232,
            name: "ROR"
          }
        ],
        name: "Lebanon"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Capello, T.",
          48.29,
          58.58585859,
          47.06790123,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 48.29,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 51.71,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Capello, Thomas M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Garver, C.",
          42.51,
          54.54545455,
          41.29353234,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.51,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 57.35,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Garver, Carl Russell"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Wolfe, K.",
          40.89,
          47.61904762,
          39.95006242,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.89,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 59.11,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Wolfe, Kim R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kline, S.",
          40.43,
          66.66666667,
          37.34939759,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.43,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.53,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 2.13,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 43.09,
                name: "ROR"
              }
            ],
            name: "Kline, Samuel A."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Jones, C.",
          38.21,
          26.08695652,
          41,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.21,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 61.79,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Jones, Charles T. Jr."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Verna, A.",
          35.64,
          55.35714286,
          35.25,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.64,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 64.25,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Verna, Anthony J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Dissinger, M.",
          35.26,
          43.68932039,
          35.25925926,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.26,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 64.62,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.12,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Dissinger, Maria M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Charles, B.",
          29.14,
          23.52941176,
          29.54545455,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.14,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.66,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 55.63,
                name: "ROR"
              }
            ],
            name: "Charles, Bradford H."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Ditzler, J.",
          29.04,
          35.59322034,
          28.67132867,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.04,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 69.1,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.86,
                name: "ROR"
              }
            ],
            name: "Ditzler, John W."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Bedford",
      38.63636364,
      52.57731959,
      37.564196630000005,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 38.63636364,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 59.5588,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 1.8048000000000002,
            name: "ROR"
          }
        ],
        name: "Bedford"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Bingham, H.",
          44.85,
          71.42857143,
          42.06896552,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44.85,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 55.15,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Bingham, H. Cyril Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Baker, B.",
          37.85,
          58.33333333,
          36.52694611,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.85,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 58.84,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 3.31,
                name: "ROR"
              }
            ],
            name: "Baker, Brian K."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Calhoun, K.",
          37.06,
          31.57894737,
          37.59398496,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.06,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 60.14,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 2.8,
                name: "ROR"
              }
            ],
            name: "Calhoun, Kathy S."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Osman, T.",
          30.8,
          31.25,
          30.70539419,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.8,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 68.06,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.14,
                name: "ROR"
              }
            ],
            name: "Osman, Tonya M."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Jefferson",
      38.55721393,
      72.97297297,
      38.352524360000004,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 38.55721393,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 61.2769,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.0829,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 0.0829,
            name: "ROR"
          }
        ],
        name: "Jefferson"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Inzana, D.",
          43.07,
          73.33333333,
          42.06349206,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.07,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 56.93,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Inzana, David B."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Chambers, D.",
          37.91,
          50,
          37.93103448,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.91,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 62.09,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Chambers, Douglas R."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Bazylak, G.",
          34.71,
          81.81818182,
          34.73684211,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 34.71,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 65.05,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.24,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Bazylak, Gregory M."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Cumberland",
      38.5278224,
      51.61744023,
      35.0094162,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 38.5278224,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 19.132099999999998,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.4985,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 41.5188,
            name: "ROR"
          }
        ],
        name: "Cumberland"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Beckley, E.",
          50.98,
          63.94557823,
          47.16157205,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.98,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 48.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Beckley, Elizabeth S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Silcox, K.",
          46.11,
          70.1754386,
          40.7678245,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.11,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 26.14,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.29,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 27.31,
                name: "ROR"
              }
            ],
            name: "Silcox, Kathryn H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Clement, C.",
          43.14,
          59.33333333,
          37.95180723,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.14,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 11.13,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 44.82,
                name: "ROR"
              }
            ],
            name: "Clement, Charles A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Birbeck, J.",
          43.02,
          60.50420168,
          37.31707317,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.02,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 6.33,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 2.23,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 47.3,
                name: "ROR"
              }
            ],
            name: "Birbeck, Jonathan R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Fegley, P.",
          40.93,
          49.59349593,
          37.96296296,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.93,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 13.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 43.42,
                name: "ROR"
              }
            ],
            name: "Fegley, Paul M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Day, S.",
          40.72,
          50.87719298,
          38.74239351,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.72,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 11.24,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.16,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 47.88,
                name: "ROR"
              }
            ],
            name: "Day, Susan K."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Dougherty, R.",
          40.14,
          55.28455285,
          35.79952267,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.14,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 11.93,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 47.2,
                name: "ROR"
              }
            ],
            name: "Dougherty, Richard S. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Cohick, V.",
          39.52,
          63.95348837,
          35.26785714,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 39.52,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 14.34,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.84,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 44.3,
                name: "ROR"
              }
            ],
            name: "Cohick, Vivian J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Martin, M.",
          35.06,
          50,
          31.68141593,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.06,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 23.13,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 41.81,
                name: "ROR"
              }
            ],
            name: "Martin, Mark W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Adams, H.",
          25.31,
          33.5443038,
          23.60248447,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 25.31,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 15.36,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 59.21,
                name: "ROR"
              }
            ],
            name: "Adams, H. Anthony"
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Luzerne",
      38.288852490000004,
      53.5892323,
      34.6550856,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 38.288852490000004,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 31.285600000000002,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 1.0030000000000001,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 29.3085,
            name: "ROR"
          }
        ],
        name: "Luzerne"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Whittaker, D.",
          60.13,
          79.85074627,
          53.75854214,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 60.13,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 7.31,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.33,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 32.06,
                name: "ROR"
              }
            ],
            name: "Whittaker, Donald L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hasay, J.",
          53.37,
          77.04918033,
          48.97260274,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 53.37,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 10.51,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 6.74,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 29.38,
                name: "ROR"
              }
            ],
            name: "Hasay, John E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Halesey, J.",
          52.26,
          76.92307692,
          45.40540541,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 52.26,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 22.37,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.38,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 25,
                name: "ROR"
              }
            ],
            name: "Halesey, Joseph A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Dixon, J.",
          46.81,
          65.48672566,
          43.69747899,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.81,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 39.35,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.27,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 13.57,
                name: "ROR"
              }
            ],
            name: "Dixon, James M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "O’Donnell, D.",
          46.64,
          69.90291262,
          40.97222222,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.64,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 19.96,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 3.45,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 29.95,
                name: "ROR"
              }
            ],
            name: "O’Donnell, Daniel"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Spagnuolo, J.",
          44.44,
          53.91304348,
          42.65010352,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44.44,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 32.22,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 23.02,
                name: "ROR"
              }
            ],
            name: "Spagnuolo, Joseph D. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Roberts, P.",
          43.77,
          66.07142857,
          38.07531381,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.77,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 56.23,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Roberts, Paul J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Barilla, D.",
          43.61,
          63.30275229,
          39.21568627,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.61,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 32.37,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.17,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 23.85,
                name: "ROR"
              }
            ],
            name: "Barilla, David A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Zola, J.",
          41.47,
          66.40625,
          36.3963964,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.47,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 20.17,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.28,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 38.08,
                name: "ROR"
              }
            ],
            name: "Zola, Joseph D."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kravitz, A.",
          40.42,
          58,
          36.85185185,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.42,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 29.94,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.45,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 28.59,
                name: "ROR"
              }
            ],
            name: "Kravitz, Alexandra Kokura"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Carmody, J.",
          38.76,
          57.2815534,
          33.69863014,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.76,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 44.95,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.62,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 15.46,
                name: "ROR"
              }
            ],
            name: "Carmody, Joseph J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Cronauer, R.",
          36.59,
          39.82300885,
          36.16236162,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 36.59,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 29.42,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.74,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 33.13,
                name: "ROR"
              }
            ],
            name: "Cronauer, Rick"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Malloy, T.",
          31.99,
          42.62948207,
          28.16901408,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.99,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 34,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.11,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 33.79,
                name: "ROR"
              }
            ],
            name: "Malloy, Thomas F. Sr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Dotzel, M.",
          28.88,
          28.43137255,
          29.23076923,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 28.88,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.57,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 5.3,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 52.85,
                name: "ROR"
              }
            ],
            name: "Dotzel, Michael G."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Tupper, B.",
          27.47,
          65.75342466,
          22.09302326,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.47,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 14.31,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.16,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 57.89,
                name: "ROR"
              }
            ],
            name: "Tupper, Brian James"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Sharkey, T.",
          15.29,
          38.88888889,
          12.97709924,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 15.29,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 8.28,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 76.43,
                name: "ROR"
              }
            ],
            name: "Sharkey, Thomas"
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Lupas, D.",
          14.73,
          9.090909091,
          16.50485437,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 14.73,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 85.27,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Lupas, David W."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Sklarosky, J.",
          10.53,
          4.761904762,
          11.9266055,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 10.53,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 89.47,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Sklarosky, Joseph F. Jr."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Columbia",
      38.18897638,
      40.796019900000005,
      38.46153846,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 38.18897638,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 42.0697,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.11249999999999999,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 19.6288,
            name: "ROR"
          }
        ],
        name: "Columbia"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Brewer, D.",
          50.33,
          68.42105263,
          51.15511551,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 50.33,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 22.37,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.33,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 26.97,
                name: "ROR"
              }
            ],
            name: "Brewer, Doug D."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Knecht, R.",
          46.72,
          69.56521739,
          46.88346883,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.72,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 8.27,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.24,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 44.77,
                name: "ROR"
              }
            ],
            name: "Knecht, Richard W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Long, C.",
          42.73,
          85.71428571,
          41.06280193,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.73,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 20,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 37.27,
                name: "ROR"
              }
            ],
            name: "Long, Craig W."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Lawton, R.",
          27.35,
          22.44897959,
          30.37475345,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.35,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 72.65,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Lawton, Russell L."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Chester",
      38.0970325,
      48.47354138,
      34.29690666,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 38.0970325,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 40.0132,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.009399999999999999,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 20.7273,
            name: "ROR"
          }
        ],
        name: "Chester"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Hines, G.",
          60.94,
          61.76470588,
          58.85167464,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 60.94,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 33.4,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 5.28,
                name: "ROR"
              }
            ],
            name: "Hines, Gregory V."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Koon, G.",
          52.15,
          55.09641873,
          49.47368421,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 52.15,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 39.08,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 8.17,
                name: "ROR"
              }
            ],
            name: "Koon, Grover E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Vito, M.",
          46.41,
          53.57142857,
          43.65671642,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.41,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 33.01,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 19.86,
                name: "ROR"
              }
            ],
            name: "Vito, Marian T."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Gill, N.",
          42.86,
          49.62406015,
          41.36904762,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.86,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 47.41,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 9.32,
                name: "ROR"
              }
            ],
            name: "Gill, Nancy"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Donatelli, L.",
          42.77,
          53.84615385,
          38.25301205,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.77,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 36.17,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 20.43,
                name: "ROR"
              }
            ],
            name: "Donatelli, Lori Novak"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Massey, S.",
          42.36,
          54.26829268,
          39.49044586,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.36,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 38.88,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 18.01,
                name: "ROR"
              }
            ],
            name: "Massey, Scott A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Cabry, M.",
          40.83,
          51.92307692,
          39.20454545,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.83,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 38.23,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 20.03,
                name: "ROR"
              }
            ],
            name: "Cabry, Michael J. III"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bailey, J.",
          38.69,
          51.58730159,
          33.09352518,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.69,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 41.72,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 19.11,
                name: "ROR"
              }
            ],
            name: "Bailey, John R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Tartaglio, T.",
          38.13,
          50,
          35.73264781,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.13,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 37.55,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 22.57,
                name: "ROR"
              }
            ],
            name: "Tartaglio, Thomas W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bruno, M.",
          36.74,
          41.78082192,
          34.46327684,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 36.74,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 31.83,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 29.67,
                name: "ROR"
              }
            ],
            name: "Bruno, Mark A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Seavey, M.",
          35.73,
          51.85185185,
          32.15223097,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.73,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 35.19,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 26.5,
                name: "ROR"
              }
            ],
            name: "Seavey, Matthew"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Michaels, T.",
          34.98,
          43.39622642,
          32.59052925,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 34.98,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 43.21,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 21.6,
                name: "ROR"
              }
            ],
            name: "Michaels, Theodore Peter Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Sondergaard, A.",
          32.14,
          42.99516908,
          26.40186916,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.14,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 37.27,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 28.73,
                name: "ROR"
              }
            ],
            name: "Sondergaard, Analisa"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kraut, W.",
          31.3,
          39.80582524,
          29.82954545,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.3,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 41.81,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 25.84,
                name: "ROR"
              }
            ],
            name: "Kraut, William D."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Valocchi, J.",
          31.3,
          32.62411348,
          31.77570093,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.3,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 48.03,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.12,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 18.52,
                name: "ROR"
              }
            ],
            name: "Valocchi, Jeffrey J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Brown, L.",
          25.89,
          52.63157895,
          25.69659443,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 25.89,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 44.35,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 29.76,
                name: "ROR"
              }
            ],
            name: "Brown, Leonard J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Nistico, C.",
          23.93,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 23.93,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 34.36,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 41.72,
                name: "ROR"
              }
            ],
            name: "Nistico, Charles"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Knapp, G.",
          20.91,
          32.69230769,
          17.46987952,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 20.91,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 47.27,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 30.91,
                name: "ROR"
              }
            ],
            name: "Knapp, Gwenn S."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Venango",
      37.84477229,
      60.13986014,
      35.56187767,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 37.84477229,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 61.7818,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 0.1291,
            name: "ROR"
          }
        ],
        name: "Venango"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Fish, A.",
          42.95,
          64.58333333,
          40.92592593,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.95,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 56.54,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.17,
                name: "ROR"
              }
            ],
            name: "Fish, Andrew F."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Lowrey, P.",
          41.47,
          60,
          40.31531532,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.47,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 57.26,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.21,
                name: "ROR"
              }
            ],
            name: "Lowrey, Patrick E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kirtland, M.",
          28.12,
          61.40350877,
          23.03664921,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 28.12,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 71.43,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Kirtland, Matthew T."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Schuylkill",
      37.741878220000004,
      46.5060241,
      37.275215010000004,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 37.741878220000004,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 51.349900000000005,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 10.692699999999999,
            name: "ROR"
          }
        ],
        name: "Schuylkill"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Rossi, D.",
          47.99,
          77.27272727,
          46.65314402,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 47.99,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 52.01,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Rossi, David J."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Plachko, D.",
          47.6,
          56.75675676,
          48.63013699,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 47.6,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 51.94,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.47,
                name: "ROR"
              }
            ],
            name: "Plachko, David A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hale, C.",
          42.88,
          50,
          42.37288136,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.88,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 23.65,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 33.46,
                name: "ROR"
              }
            ],
            name: "Hale, Christina E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Reiley, J.",
          40.96,
          45.63758389,
          40.36885246,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.96,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 58.95,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Reiley, James"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kilker, A.",
          37.28,
          56.25,
          35.85185185,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.28,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 62.45,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.13,
                name: "ROR"
              }
            ],
            name: "Kilker, Anthony J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bayer, S.",
          33.99,
          54.28571429,
          33.59580052,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 33.99,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 14.55,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 50.61,
                name: "ROR"
              }
            ],
            name: "Bayer, Stephen J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Ferrier, J.",
          31.59,
          22.22222222,
          32.01754386,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.59,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 68.41,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Ferrier, James R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Domalakes, J.",
          22.41,
          20,
          22.52252252,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 22.41,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 77.59,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Domalakes, John E."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Dolbin, C.",
          17.43,
          0,
          19,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 17.43,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 82.57,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Dolbin, Cyrus P."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Franklin",
      37.479026850000004,
      49.26553672,
      35.19494204,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 37.479026850000004,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 11.6548,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.567,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 50.083999999999996,
            name: "ROR"
          }
        ],
        name: "Franklin"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Cunningham, D.",
          52.94,
          69.23076923,
          50,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 52.94,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 7.51,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.61,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 38.74,
                name: "ROR"
              }
            ],
            name: "Cunningham, Duane K."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Plum, D.",
          48,
          66.1971831,
          43.95973154,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 48,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 15.73,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 36.27,
                name: "ROR"
              }
            ],
            name: "Plum, David L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Eyer, J.",
          41.06,
          65.95744681,
          38.07106599,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.06,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 22.52,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.1,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 34.66,
                name: "ROR"
              }
            ],
            name: "Eyer, Jody C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Manns, G.",
          38.93,
          45.27027027,
          37.42405832,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.93,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 8.57,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.17,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 52.06,
                name: "ROR"
              }
            ],
            name: "Manns, Glenn Kenneth"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Rock, K.",
          35.31,
          45.69536424,
          33.4431631,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.31,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 10.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.39,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 53.61,
                name: "ROR"
              }
            ],
            name: "Rock, Kelly L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Williams, T.",
          28.95,
          40.74074074,
          26.74157303,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 28.95,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 15.81,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.71,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 54.53,
                name: "ROR"
              }
            ],
            name: "Williams, Todd R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Pentz, L.",
          25.51,
          42,
          23.60335196,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 25.51,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 7.13,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.21,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 66.14,
                name: "ROR"
              }
            ],
            name: "Pentz, Larry G."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Greene",
      37.44343891,
      58.97435897,
      37.861635220000004,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 37.44343891,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 34.6546,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.3398,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 26.613799999999998,
            name: "ROR"
          }
        ],
        name: "Greene"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Watson, L.",
          51.13,
          53.84615385,
          53.61702128,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 51.13,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 18.8,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.75,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 29.32,
                name: "ROR"
              }
            ],
            name: "Watson, Lee"
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Cramer, J.",
          32.37,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.37,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 21.22,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 46.04,
                name: "ROR"
              }
            ],
            name: "Cramer, Jesse J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bates, D.",
          32.06,
          64.28571429,
          31.08614232,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.06,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 67.94,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Bates, D Glenn"
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Wayne",
      37.20349563,
      64.86486486000001,
      35.309973049999996,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 37.20349563,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 28.214699999999997,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 34.5818,
            name: "ROR"
          }
        ],
        name: "Wayne"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Edwards, R.",
          39.25,
          50,
          38.19095477,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 39.25,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 7.01,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 53.74,
                name: "ROR"
              }
            ],
            name: "Edwards, Ronald"
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Carney, B.",
          38.95,
          61.53846154,
          36.8,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.95,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 49.06,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 11.99,
                name: "ROR"
              }
            ],
            name: "Carney, Bonnie L."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Myers, L.",
          34.87,
          75,
          32.25806452,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 34.87,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 23.36,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 41.78,
                name: "ROR"
              }
            ],
            name: "Myers, Linus H."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Clinton",
      36.92628651,
      47.14285714,
      35.98750976,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 36.92628651,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 51.078599999999994,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.1392,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 11.412700000000001,
            name: "ROR"
          }
        ],
        name: "Clinton"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Sanders, J.",
          68.98,
          63.82978723,
          69.77491961,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 68.98,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 29.92,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.55,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.28,
                name: "ROR"
              }
            ],
            name: "Sanders, Joseph L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Maggs, J.",
          59.44,
          66.66666667,
          59.2920354,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 59.44,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 40.56,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Maggs, John W."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Mills, F.",
          12.34,
          21.66666667,
          11.68831169,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 12.34,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 66.14,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 21.39,
                name: "ROR"
              }
            ],
            name: "Mills, Frank P."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Sullivan",
      36.44859813,
      62.5,
      32.63157895,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 36.44859813,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 61.682199999999995,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 1.8692,
            name: "ROR"
          }
        ],
        name: "Sullivan"
      }
    ],
    outlier: true,
    collapseData: [],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Tioga",
      36.38603696,
      56.99999999999999,
      34.50800915,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 36.38603696,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 48.5597,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 13.086400000000001,
            name: "ROR"
          }
        ],
        name: "Tioga"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Steffee, S.",
          41.76,
          50,
          40.3125,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.76,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 18.49,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 39.6,
                name: "ROR"
              }
            ],
            name: "Steffee, Susanne V."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Thachik, G.",
          38.52,
          80.55555556,
          35.16209476,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.52,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 61.21,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.26,
                name: "ROR"
              }
            ],
            name: "Thachik, George M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Edgcomb, J.",
          38.31,
          57.14285714,
          37.58389262,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.31,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 61.69,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Edgcomb, James R."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Rega, J.",
          37.96,
          59.375,
          35.51401869,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.96,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 47.2,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 14.36,
                name: "ROR"
              }
            ],
            name: "Rega, Jennifer J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Carlson, J.",
          29.5,
          43.75,
          28.47682119,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.5,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 69.88,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Carlson, James Edgar"
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Repard, R.",
          23.15,
          66.66666667,
          21.82741117,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 23.15,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 76.35,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Repard, Robert L."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Martin, W.",
          13.91,
          5.769230769,
          15.95092025,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 13.91,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 47.83,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Martin, William J."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Clearfield",
      36.28318584,
      59.30232558,
      35.647181630000006,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 36.28318584,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 63.6185,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 0.0983,
            name: "ROR"
          }
        ],
        name: "Clearfield"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Ireland, R.",
          42.04,
          53.84615385,
          42.06642066,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.04,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 57.96,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Ireland, Richard Allen"
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Hawkins, J.",
          39.13,
          82.60869565,
          36.68639053,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 39.13,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 60.87,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Hawkins, James L."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Ford, P.",
          34.42,
          61.11111111,
          33.83838384,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 34.42,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 65.58,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Ford, Patrick N."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Nevling, J.",
          30.03,
          53.84615385,
          29.61876833,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.03,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 69.42,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.55,
                name: "ROR"
              }
            ],
            name: "Nevling, Jerome M."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Mercer",
      36.12542955,
      45.40337711,
      33.35235378,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 36.12542955,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 39.6907,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 12.070400000000001,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 11.855699999999999,
            name: "ROR"
          }
        ],
        name: "Mercer"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Arthur, B.",
          45.28,
          74.73684211,
          41.16766467,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 45.28,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 53.83,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.89,
                name: "ROR"
              }
            ],
            name: "Arthur, Brian R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Songer, D.",
          44.1,
          49.09090909,
          42.11267606,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44.1,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 28.76,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 12.67,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 14.48,
                name: "ROR"
              }
            ],
            name: "Songer, Dennis M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "McEwen, D.",
          41.69,
          61.33333333,
          38.74755382,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.69,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 55.65,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 2.66,
                name: "ROR"
              }
            ],
            name: "McEwen, D. Neil"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hinch, L.",
          37.37,
          51.92307692,
          35.2238806,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.37,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 46.72,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.25,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 15.66,
                name: "ROR"
              }
            ],
            name: "Hinch, Lorinda L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Antos, R.",
          26.72,
          33.96226415,
          23.21981424,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 26.72,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 24.88,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 29.04,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 19.36,
                name: "ROR"
              }
            ],
            name: "Antos, Ronald E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Fagley, W.",
          17.69,
          45.83333333,
          14.95726496,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 17.69,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 82.31,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Fagley, William L."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Northumberland",
      36,
      56.81818182,
      33.910665449999996,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 36,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 51.91909999999999,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.0825,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 11.886099999999999,
            name: "ROR"
          }
        ],
        name: "Northumberland"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Gembic, J.",
          41.67,
          74.6835443,
          38.08180536,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.67,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 57.2,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.13,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.01,
                name: "ROR"
              }
            ],
            name: "Gembic, John"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Diehl, M.",
          40.57,
          62.5,
          38.86255924,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.57,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 56.14,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 3.07,
                name: "ROR"
              }
            ],
            name: "Diehl, Michael I."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Cashman, R.",
          35.14,
          40,
          35.05154639,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.14,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 64.86,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Cashman, Richard P."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Apfelbaum, B.",
          28.29,
          42.5,
          25.98870056,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 28.29,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 30.24,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.16,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 40.81,
                name: "ROR"
              }
            ],
            name: "Apfelbaum, Benjamin"
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Snyder",
      35.92870544,
      52.5,
      34.59183673,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 35.92870544,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 54.1276,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 2.9081,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 6.472799999999999,
            name: "ROR"
          }
        ],
        name: "Snyder"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Reed, J.",
          36.96,
          55.71428571,
          37.14759536,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 36.96,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 60.28,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.77,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.99,
                name: "ROR"
              }
            ],
            name: "Reed, John H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hackenberg, L.",
          36.79,
          81.25,
          38.78205128,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 36.79,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 52.17,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 5.69,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 5.35,
                name: "ROR"
              }
            ],
            name: "Hackenberg, Lori R."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Wyoming",
      35.68118628,
      40,
      35.596508240000006,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 35.68118628,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 63.974,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.0929,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 0.1857,
            name: "ROR"
          }
        ],
        name: "Wyoming"
      }
    ],
    outlier: true,
    collapseData: [
      {
        data: [
          "",
          "Smith, C.",
          43.65,
          72.72727273,
          42.92565947,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.65,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 55.89,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.23,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.23,
                name: "ROR"
              }
            ],
            name: "Smith, Carl W. Jr."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Plummer, D.",
          29.21,
          15.38461538,
          29.84562607,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.21,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 70.3,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.17,
                name: "ROR"
              }
            ],
            name: "Plummer, David K."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Montour",
      35.19163763,
      46.15384615,
      35.34136546,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 35.19163763,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 24.738699999999998,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.6969000000000001,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 39.0244,
            name: "ROR"
          }
        ],
        name: "Montour"
      }
    ],
    outlier: true,
    collapseData: [
      {
        data: [
          "",
          "Shrawder, M.",
          22.44,
          46.42857143,
          38.671875,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 22.44,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 22.44,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.98,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 53.66,
                name: "ROR"
              }
            ],
            name: "Shrawder, Marvin K."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Indiana",
      35.01070664,
      30.392156860000004,
      36.21169916,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 35.01070664,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 33.3333,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 30.761,
            name: "ROR"
          }
        ],
        name: "Indiana"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Steffee, S.",
          41.02,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.02,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 18.36,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 40.48,
                name: "ROR"
              }
            ],
            name: "Steffee, Susanne V."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Haberl, G.",
          40,
          35.97122302,
          40.9190372,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 30.08,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 29.75,
                name: "ROR"
              }
            ],
            name: "Haberl, Guy B."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Rega, J.",
          38.66,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.66,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 46.35,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 14.6,
                name: "ROR"
              }
            ],
            name: "Rega, Jennifer J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Thachik, G.",
          38.22,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.22,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 61.56,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.22,
                name: "ROR"
              }
            ],
            name: "Thachik, George M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Martin, W.",
          10.9,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 10.9,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 41.71,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 37.91,
                name: "ROR"
              }
            ],
            name: "Martin, William J."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Forest",
      34.75609756,
      85,
      32.03883495,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 34.75609756,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 52.439,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 12.8049,
            name: "ROR"
          }
        ],
        name: "Forest"
      }
    ],
    outlier: true,
    collapseData: [
      {
        data: [
          "",
          "Miller, D.",
          30.2,
          81.25,
          42.63565891,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.2,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 55.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 14.09,
                name: "ROR"
              }
            ],
            name: "Miller, Daniel L."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Lycoming",
      34.68169761,
      55.01355014,
      28.14726841,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 34.68169761,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 64.91029999999999,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 0.3321,
            name: "ROR"
          }
        ],
        name: "Lycoming"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Solomon, W.",
          41.91,
          78.46153846,
          36,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.91,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 57.87,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Solomon, William C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Page, A.",
          38.3,
          54.81927711,
          29.49756888,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.3,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 61.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Page, Allen P. III"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Lepley, J.",
          36.55,
          70.83333333,
          33.33333333,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 36.55,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 63.25,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Lepley, Jerry C."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Frey, C.",
          32.52,
          53.58166189,
          21.96969697,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.52,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 66.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.78,
                name: "ROR"
              }
            ],
            name: "Frey, Christian David"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kemp, J.",
          30.51,
          60.25641026,
          25.3164557,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.51,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 68.95,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.18,
                name: "ROR"
              }
            ],
            name: "Kemp, Jon Edward"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Whiteman, G.",
          29.37,
          52.44755245,
          24.02597403,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.37,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 70.63,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Whiteman, Gary A."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Juniata",
      34.46215139,
      43.75,
      36.67425968,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 34.46215139,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 39.243,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 7.370500000000001,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 18.9243,
            name: "ROR"
          }
        ],
        name: "Juniata"
      }
    ],
    outlier: true,
    collapseData: [
      {
        data: [
          "",
          "Leister, J.",
          31.47,
          62.5,
          44.09090909,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.47,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.93,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 15.95,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 39.66,
                name: "ROR"
              }
            ],
            name: "Leister, Jacqueline T."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Lyter, B.",
          31.3,
          25,
          33.33333333,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.3,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 68.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Lyter, Barbara M."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Pike",
      34.16738568,
      37.41007194,
      34.020618559999996,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 34.16738568,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 5.6228,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 28.0277,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 31.1419,
            name: "ROR"
          }
        ],
        name: "Pike"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Chelak, G.",
          47,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 47,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 5,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 39,
                name: "ROR"
              }
            ],
            name: "Chelak, Gregory H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Fischer, D.",
          39.33,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 39.33,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 6.67,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 2.67,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 51,
                name: "ROR"
              }
            ],
            name: "Fischer, Deborah"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Muir, S.",
          32.84,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.84,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.59,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 53.25,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 13.02,
                name: "ROR"
              }
            ],
            name: "Muir, Shannon L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Menditto, P.",
          29.03,
          20.51282051,
          33.74233129,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.03,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 9.22,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 40.09,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 21.2,
                name: "ROR"
              }
            ],
            name: "Menditto, Paul D. Sr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Cooper, A.",
          28.12,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 28.12,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 8.85,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 25.52,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 36.98,
                name: "ROR"
              }
            ],
            name: "Cooper, Alan B."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Blair",
      34.04638145,
      58.6998088,
      31.768533580000003,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 34.04638145,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 65.5338,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.06,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 0.3599,
            name: "ROR"
          }
        ],
        name: "Blair"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Aigner, P.",
          52.64,
          79.46428571,
          49.1503268,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 52.64,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 47.36,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Aigner, Paula M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Miller, F.",
          43.81,
          78.16091954,
          40.05563282,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.81,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 55.58,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.61,
                name: "ROR"
              }
            ],
            name: "Miller, Fred B."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Ormsby, C.",
          35.34,
          89.47368421,
          31.41025641,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.34,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 64.66,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Ormsby, Craig E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kelly, T.",
          29.92,
          45.94594595,
          28.07486631,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.92,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 70.08,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Kelly, Todd F."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Auker, J.",
          28.26,
          37.20930233,
          28.34437086,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 28.26,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 69.98,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.33,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.43,
                name: "ROR"
              }
            ],
            name: "Auker, Jeffrey P."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Jackson, S.",
          18.59,
          40.74074074,
          16.68822768,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 18.59,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 81.41,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Jackson, Steven D."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Montgomery",
      33.63556165,
      43.27198364,
      28.69733969,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 33.63556165,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 46.1889,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.466,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 14.7096,
            name: "ROR"
          }
        ],
        name: "Montgomery"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Lawrence, F.",
          60.12,
          65.16853933,
          54.04255319,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 60.12,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 15.72,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 20.04,
                name: "ROR"
              }
            ],
            name: "Lawrence, Francis J. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Scott, G.",
          58.68,
          53.46534653,
          66.23931624,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 58.68,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 32.54,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.18,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 4.94,
                name: "ROR"
              }
            ],
            name: "Scott, Gregory L."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Palladino, S.",
          47.93,
          60.65088757,
          39.84526112,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 47.93,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 44.12,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 2.88,
                name: "ROR"
              }
            ],
            name: "Palladino, Scott T."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Cerski, C.",
          44.5,
          44.49339207,
          45.39473684,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44.5,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 51.5,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.75,
                name: "ROR"
              }
            ],
            name: "Cerski, Christopher"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hunsicker, M.",
          44.48,
          50.55248619,
          38.79003559,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44.48,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 27.91,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 24.78,
                name: "ROR"
              }
            ],
            name: "Hunsicker, Margaret A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kropp, E.",
          43.39,
          50.64102564,
          37.62376238,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.39,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 54.02,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.19,
                name: "ROR"
              }
            ],
            name: "Kropp, Edward C. Sr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "McHugh Casey, E.",
          41.42,
          44.38502674,
          39.10891089,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.42,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 55.39,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "McHugh Casey, Elizabeth A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kelly Rebar, C.",
          36.5,
          51.93370166,
          32.01438849,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 36.5,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 62.58,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.13,
                name: "ROR"
              }
            ],
            name: "Kelly Rebar, Cathleen"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Nesbitt, H.",
          36.18,
          46.66666667,
          33.04347826,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 36.18,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 57.26,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Nesbitt, Harry J. III"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Augustine, A.",
          36.01,
          62.80487805,
          29.00900901,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 36.01,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 62.5,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.14,
                name: "ROR"
              }
            ],
            name: "Augustine, Albert J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bernhardt, F.",
          35.87,
          43.5483871,
          31.6872428,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.87,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 30.71,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 29.61,
                name: "ROR"
              }
            ],
            name: "Bernhardt, Francis J. III"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Sobeck, R.",
          35.65,
          52.07100592,
          31.07049608,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.65,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 29.03,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 33.28,
                name: "ROR"
              }
            ],
            name: "Sobeck, Robert M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Saylor, M.",
          35.62,
          58.97435897,
          30.16194332,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.62,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 58.47,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Saylor, Maurice H."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Zaffarano, P.",
          35.37,
          47.66839378,
          28.20512821,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.37,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 62.72,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.15,
                name: "ROR"
              }
            ],
            name: "Zaffarano, Patricia Ann"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Price, J.",
          35.33,
          44.78527607,
          28.83116883,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.33,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 24.42,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 12.28,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 21.56,
                name: "ROR"
              }
            ],
            name: "Price, Juanita Ann"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Rebar, C.",
          35.03,
          48.57142857,
          32.17391304,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.03,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 47.77,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Rebar, Cathleen Kelly"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Lukens, D.",
          34.92,
          42.46575342,
          31.48148148,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 34.92,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 23.54,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 39.68,
                name: "ROR"
              }
            ],
            name: "Lukens, Deborah"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Casillo, E.",
          34.38,
          42.79279279,
          30.35230352,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 34.38,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 62.83,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Casillo, Ester J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Gallagher, J.",
          32.74,
          42.10526316,
          27.12418301,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.74,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 29.37,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 32.14,
                name: "ROR"
              }
            ],
            name: "Gallagher, James"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "McGill, K.",
          31.77,
          38.46153846,
          28.31050228,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.77,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 62.24,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.26,
                name: "ROR"
              }
            ],
            name: "McGill, Katherine E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Leo, P.",
          31.73,
          45.0617284,
          26.28726287,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.73,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 63.84,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.55,
                name: "ROR"
              }
            ],
            name: "Leo, Paul N."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Quinn, M.",
          30.21,
          32.31707317,
          29.44162437,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.21,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 62.03,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.53,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.53,
                name: "ROR"
              }
            ],
            name: "Quinn, Michael P."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Gadzicki, W.",
          30.01,
          48.0620155,
          23.55555556,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.01,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 31.46,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 33.96,
                name: "ROR"
              }
            ],
            name: "Gadzicki, Walter F. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hudak Duffy, A.",
          27.42,
          36.93693694,
          25.83081571,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.42,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 46.91,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 24.12,
                name: "ROR"
              }
            ],
            name: "Hudak Duffy, Andrea"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Schireson, H.",
          27.41,
          39.22651934,
          20.70175439,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.41,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 67.36,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Schireson, Henry J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Eisner Zucker, K.",
          27.34,
          31.70731707,
          22.94117647,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.34,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 70.56,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Eisner Zucker, Karen"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Hummel Fried, C.",
          27.24,
          51.92307692,
          21.49122807,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.24,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 68.79,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.17,
                name: "ROR"
              }
            ],
            name: "Hummel Fried, Catherine M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Maruszczak, W.",
          26.84,
          29.84615385,
          23.8961039,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 26.84,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 69.56,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.27,
                name: "ROR"
              }
            ],
            name: "Maruszczak, William I."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Levine, E.",
          25.51,
          40.46242775,
          22.16748768,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 25.51,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 22.04,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.12,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 48.38,
                name: "ROR"
              }
            ],
            name: "Levine, Edward"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Friedenberg, J.",
          23.6,
          35.4978355,
          19.83193277,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 23.6,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 23.49,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 50.93,
                name: "ROR"
              }
            ],
            name: "Friedenberg, Jay S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kessler, J.",
          22.17,
          26.35658915,
          19.82507289,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 22.17,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 32.69,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 35.76,
                name: "ROR"
              }
            ],
            name: "Kessler, John D."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Smyth, J.",
          9.66,
          15.38461538,
          5.673758865,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 9.66,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 57.56,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.42,
                name: "ROR"
              }
            ],
            name: "Smyth, Joseph A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Corso, S.",
          7.82,
          5.369127517,
          8.71559633,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 7.82,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 60.38,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 2.43,
                name: "ROR"
              }
            ],
            name: "Corso, S. Gerald"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Nicholas, W.",
          6.73,
          6.976744186,
          6.201550388,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 6.73,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 57.4,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 17.49,
                name: "ROR"
              }
            ],
            name: "Nicholas, William T."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Carbon",
      32.99299883,
      43.7751004,
      32.341399609999996,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 32.99299883,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 53.85060000000001,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 13.1272,
            name: "ROR"
          }
        ],
        name: "Carbon"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Kosciolek, C.",
          37.44,
          53.84615385,
          36.45251397,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.44,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 46.57,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 15.99,
                name: "ROR"
              }
            ],
            name: "Kosciolek, Casimir T."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Homanko, J.",
          37.13,
          41.57303371,
          36.29343629,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.13,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 56.16,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 6.71,
                name: "ROR"
              }
            ],
            name: "Homanko, Joseph D. Sr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Schrantz, E.",
          32.71,
          40.54054054,
          33.10225303,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.71,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 50.31,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 16.98,
                name: "ROR"
              }
            ],
            name: "Schrantz, Eric M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Serfass, S.",
          27.97,
          10,
          30.47619048,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.97,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 71.19,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.85,
                name: "ROR"
              }
            ],
            name: "Serfass, Steven R."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Matika, J.",
          27.41,
          37.5,
          27.2,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.41,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 71.11,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.48,
                name: "ROR"
              }
            ],
            name: "Matika, Joseph J."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Kissner, W.",
          27.02,
          57.14285714,
          25.87719298,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.02,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 56.93,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 16.05,
                name: "ROR"
              }
            ],
            name: "Kissner, William J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Lewis, E.",
          20.52,
          44.44444444,
          18.59296482,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 20.52,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 60.7,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 18.78,
                name: "ROR"
              }
            ],
            name: "Lewis, Edward M."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Monroe",
      32.79661017,
      35.13011152,
      32.41612358,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 32.79661017,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 49.6091,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.4249,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 17.063200000000002,
            name: "ROR"
          }
        ],
        name: "Monroe"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Fluegel, A.",
          45.39,
          45.39473684,
          46.30872483,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 45.39,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 30.26,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 23.46,
                name: "ROR"
              }
            ],
            name: "Fluegel, Anthony D."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Muth, M.",
          38.07,
          42.68292683,
          36.07954545,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.07,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 60.61,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Muth, Michael R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Anzini, K.",
          37.88,
          43.08510638,
          35.71428571,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.88,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 61.65,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.32,
                name: "ROR"
              }
            ],
            name: "Anzini, Kristina"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Riley, P.",
          37.18,
          33.14917127,
          39.32346723,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.18,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 15.44,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 47.38,
                name: "ROR"
              }
            ],
            name: "Riley, Phillip R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Mancuso, C.",
          37.01,
          44.92753623,
          35.86956522,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.01,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 62.71,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.28,
                name: "ROR"
              }
            ],
            name: "Mancuso, Colleen"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Krawitz, J.",
          34.63,
          53.84615385,
          30.14256619,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 34.63,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 8.78,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 3.9,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 52.52,
                name: "ROR"
              }
            ],
            name: "Krawitz, Jolana"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Claypool, R.",
          29.32,
          28.47222222,
          30.40935673,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.32,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 70.28,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Claypool, Richard"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Germano, B.",
          27.33,
          25.36585366,
          28.38137472,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.33,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 69.42,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 3.1,
                name: "ROR"
              }
            ],
            name: "Germano, Brian"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Olsen, T.",
          26.43,
          26.42487047,
          26.87140115,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 26.43,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 73.43,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.14,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Olsen, Thomas E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Higgins, C.",
          23.4,
          26.31578947,
          23.70572207,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 23.4,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 32.64,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 43.77,
                name: "ROR"
              }
            ],
            name: "Higgins, C. Daniel"
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Bucks",
      32.41325938,
      41.069012179999994,
      30.62392673,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 32.41325938,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 49.297000000000004,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.5676,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 17.705099999999998,
            name: "ROR"
          }
        ],
        name: "Bucks"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Waltman, J.",
          46.82,
          61.29032258,
          44.52554745,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.82,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 34.1,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 19.08,
                name: "ROR"
              }
            ],
            name: "Waltman, John I."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Wagner, R.",
          44.98,
          64.88549618,
          39.79166667,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44.98,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 18.28,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.16,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 36.57,
                name: "ROR"
              }
            ],
            name: "Wagner, Robert"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Peranteau, F.",
          43.86,
          59.67741935,
          39.81900452,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.86,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 52.98,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.35,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 2.81,
                name: "ROR"
              }
            ],
            name: "Peranteau, Frank W. Sr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kline, J.",
          42.64,
          49.45652174,
          40.37267081,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 42.64,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 6.98,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 2.08,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 48.29,
                name: "ROR"
              }
            ],
            name: "Kline, Joanne V."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Douple, M.",
          41.26,
          69.11764706,
          37.95309168,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.26,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 58.74,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Douple, Mark D."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Schnell, R.",
          41.03,
          42.85714286,
          42.30769231,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 41.03,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 22.22,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 36.75,
                name: "ROR"
              }
            ],
            name: "Schnell, Robert A. Jr."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Petrucci, M.",
          40,
          59.42028986,
          36.21794872,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 60,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Petrucci, Michael W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Burns, M.",
          37.7,
          47.19101124,
          35.92592593,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.7,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 50,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 12.3,
                name: "ROR"
              }
            ],
            name: "Burns, Michael J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Finello, D.",
          37.11,
          46.15384615,
          35.81730769,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.11,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 62.11,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.78,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Finello, Daniel J. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Durkin, J.",
          35.25,
          52.5,
          43.125,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.25,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 63.93,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Durkin, John J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Snow, M.",
          33.92,
          61.2244898,
          30.06993007,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 33.92,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 28.07,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 38.01,
                name: "ROR"
              }
            ],
            name: "Snow, Maggie"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Falcone, J.",
          33.58,
          38.97338403,
          31.84230478,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 33.58,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 64.35,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.05,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.96,
                name: "ROR"
              }
            ],
            name: "Falcone, Joseph P."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Baranoski, D.",
          33.33,
          40.13157895,
          31.56862745,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 33.33,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 24.59,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 41.93,
                name: "ROR"
              }
            ],
            name: "Baranoski, Daniel"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Deatelhauser, K.",
          32.79,
          47.22222222,
          27.40384615,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.79,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 13.11,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 54.1,
                name: "ROR"
              }
            ],
            name: "Deatelhauser, Kenneth E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Gallagher, M.",
          32.78,
          38.08139535,
          31.78571429,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.78,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 66.82,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.07,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.33,
                name: "ROR"
              }
            ],
            name: "Gallagher, Michael W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Vislosky, J.",
          32.6,
          37.28813559,
          31.57894737,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.6,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 66.74,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.22,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.44,
                name: "ROR"
              }
            ],
            name: "Vislosky, Jan"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kelly, J.",
          32.3,
          38.06818182,
          30.68391867,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.3,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 67.43,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.27,
                name: "ROR"
              }
            ],
            name: "Kelly, John J. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Gambardella, G.",
          31.86,
          44.06779661,
          30.40650407,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.86,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 34.65,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.15,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 33.33,
                name: "ROR"
              }
            ],
            name: "Gambardella, Gary"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Seaman, J.",
          31.31,
          52.05479452,
          27.5242047,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.31,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 17.91,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.23,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 50.56,
                name: "ROR"
              }
            ],
            name: "Seaman, Jean"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Armitage, R.",
          30.84,
          39.7260274,
          29.3594306,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.84,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 43.82,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 25.34,
                name: "ROR"
              }
            ],
            name: "Armitage, Regina"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Baum, C.",
          30.7,
          49.27536232,
          28.83959044,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.7,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 69,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.15,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Baum, Charles W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Roth, R.",
          28.64,
          37.5,
          27.70448549,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 28.64,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 21,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 50.36,
                name: "ROR"
              }
            ],
            name: "Roth, Robert"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Daly, P.",
          27.21,
          29.41176471,
          24.3902439,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.21,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 32.35,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 40.44,
                name: "ROR"
              }
            ],
            name: "Daly, Philip J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Cepparulo, A.",
          25.75,
          10.34482759,
          28.35820896,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 25.75,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 19.76,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 3.59,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 50.9,
                name: "ROR"
              }
            ],
            name: "Cepparulo, Albert J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Benz, W.",
          17.92,
          29.78723404,
          16.94078947,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 17.92,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 81.48,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.3,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.3,
                name: "ROR"
              }
            ],
            name: "Benz, William J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Waite, C.",
          10,
          2.702702703,
          12.14285714,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 10,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 64.44,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.11,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 24.44,
                name: "ROR"
              }
            ],
            name: "Waite, Clyde W."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Westmoreland",
      31.716625590000003,
      50.050454089999995,
      28.61736334,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 31.716625590000003,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 30.687900000000003,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 4.66,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 32.9304,
            name: "ROR"
          }
        ],
        name: "Westmoreland"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Pallone, F.",
          45.75,
          51.83673469,
          42.59012016,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 45.75,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 24.49,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.08,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 29.69,
                name: "ROR"
              }
            ],
            name: "Pallone, Frank J. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "DeMarchis, J.",
          45.22,
          59.1954023,
          39.84063745,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 45.22,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 51.01,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 3.77,
                name: "ROR"
              }
            ],
            name: "DeMarchis, Joseph R."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bilik, M.",
          36.73,
          49.01960784,
          36.01694915,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 36.73,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 14.18,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 49.09,
                name: "ROR"
              }
            ],
            name: "Bilik, Mark"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Dalfonso, J.",
          35.51,
          47.56554307,
          30.32659409,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.51,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 13.51,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 21.9,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 29.08,
                name: "ROR"
              }
            ],
            name: "Dalfonso, Joseph A."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Eckels, R.",
          34.17,
          65.95744681,
          30.15075377,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 34.17,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 29.17,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.21,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 36.46,
                name: "ROR"
              }
            ],
            name: "Eckels, Roger"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Mansour, M.",
          34.01,
          56.03448276,
          31.84165232,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 34.01,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 13.73,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 25.44,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 26.83,
                name: "ROR"
              }
            ],
            name: "Mansour, Mark Stephen"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Christner, C.",
          31.97,
          53.16455696,
          28.79581152,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.97,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 10.3,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 17.58,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 40.15,
                name: "ROR"
              }
            ],
            name: "Christner, Charles M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Thiel, D.",
          31.55,
          85.18518519,
          27.10280374,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.55,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 26.48,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 41.97,
                name: "ROR"
              }
            ],
            name: "Thiel, Denise S."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Moore, C.",
          30.77,
          57.14285714,
          30.62381853,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.77,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 3.27,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 4.58,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 61.37,
                name: "ROR"
              }
            ],
            name: "Moore, Charles D."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kistler, H.",
          30.55,
          38.59649123,
          29.20560748,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.55,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 68.69,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.76,
                name: "ROR"
              }
            ],
            name: "Kistler, Helen M."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Buczak, J.",
          29.77,
          59.64912281,
          26.69404517,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.77,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 26.74,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.18,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 43.32,
                name: "ROR"
              }
            ],
            name: "Buczak, Jason"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Albert, J.",
          29.28,
          42.27642276,
          28.01635992,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.28,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 50.87,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.29,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 19.57,
                name: "ROR"
              }
            ],
            name: "Albert, James"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Peck, Y.",
          28.3,
          51.04166667,
          25.98784195,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 28.3,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 71.46,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.12,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.12,
                name: "ROR"
              }
            ],
            name: "Peck, Yackopec Cheryl J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Weimer, D.",
          27.37,
          55.55555556,
          24.56140351,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.37,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 68.42,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 4.21,
                name: "ROR"
              }
            ],
            name: "Weimer, Douglas Reid"
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Falcon, J.",
          27.1,
          34.375,
          27.75665399,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.1,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 44.99,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.9,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 26.02,
                name: "ROR"
              }
            ],
            name: "Falcon, James N."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Mahady, M.",
          25.36,
          41.17647059,
          24.26035503,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 25.36,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 6.73,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 67.92,
                name: "ROR"
              }
            ],
            name: "Mahady, Michael"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bompiani, L.",
          24.78,
          40.69767442,
          22.46376812,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 24.78,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 25.82,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.45,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 48.81,
                name: "ROR"
              }
            ],
            name: "Bompiani, L. Anthony"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Gongaware, W.",
          18.59,
          29.6875,
          16.93037975,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 18.59,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 50.14,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.7,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 30.56,
                name: "ROR"
              }
            ],
            name: "Gongaware, Wayne"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Conway, C.",
          15.7,
          34.88372093,
          14.07867495,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 15.7,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 24.73,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.54,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 58.84,
                name: "ROR"
              }
            ],
            name: "Conway, Charles"
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Butler",
      31.15234375,
      44.7761194,
      29.515418500000003,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 31.15234375,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 5.0806,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 5.8134,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 57.3034,
            name: "ROR"
          }
        ],
        name: "Butler"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "McCune, T.",
          55.34,
          66.66666667,
          60,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 55.34,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 4.85,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 32.04,
                name: "ROR"
              }
            ],
            name: "McCune, Timothy F."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Fullerton, W.",
          44.82,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44.82,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 2.05,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 11.16,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 40.18,
                name: "ROR"
              }
            ],
            name: "Fullerton, William T."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Kovach, D.",
          44,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 44,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 10.86,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 7.09,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 37.14,
                name: "ROR"
              }
            ],
            name: "Kovach, David T."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Stoughton, L.",
          35.74,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.74,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 4.24,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 15.06,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 44.22,
                name: "ROR"
              }
            ],
            name: "Stoughton, Lewis E."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "O’donnell, K.", // *Sigh* - this guy appears twice in the data set
          32.74,
          50,
          31.06796117,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.74,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 2.65,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 3.54,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 61.06,
                name: "ROR"
              }
            ],
            name: "O’donnell, Kevin P."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Haggerty, S.",
          32.66,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 32.66,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.18,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 4.23,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 50.42,
                name: "ROR"
              }
            ],
            name: "Haggerty, Sue"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "O’Donnell, W.",
          30.98,
          33.33333333,
          30.66954644,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.98,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 8.16,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.3,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 59.55,
                name: "ROR"
              }
            ],
            name: "O’Donnell, William S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "O’Donnell, K.",
          25.69,
          42.5,
          24.62809917,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 25.69,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.76,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.38,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 71.87,
                name: "ROR"
              }
            ],
            name: "O’Donnell, Kevin P."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Seibel, W.",
          22.69,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 22.69,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 13.79,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 18.15,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 44.65,
                name: "ROR"
              }
            ],
            name: "Seibel, Wayne D."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Shaffer, W.",
          15.72,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 15.72,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.63,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 48.43,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 25.79,
                name: "ROR"
              }
            ],
            name: "Shaffer, William"
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Adams",
      30.18867925,
      43.56060606,
      29.036515619999996,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 30.18867925,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 30.431399999999996,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 14.3297,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 24.8844,
            name: "ROR"
          }
        ],
        name: "Adams"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Harvey, M.",
          35.2,
          49.29577465,
          33.13609467,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 35.2,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 44.22,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 3.06,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 17.52,
                name: "ROR"
              }
            ],
            name: "Harvey, Matthew Robert"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Bowman, D.",
          33.72,
          44.7761194,
          32.95081967,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 33.72,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.39,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 26.51,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 27.38,
                name: "ROR"
              }
            ],
            name: "Bowman, Daniel S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Beauchat, M.",
          29.13,
          40.6779661,
          27.85571142,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 29.13,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 10.12,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 28.24,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 32.33,
                name: "ROR"
              }
            ],
            name: "Beauchat, Mark D."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Little, T.",
          25.48,
          42.30769231,
          24.63768116,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 25.48,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 46.79,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.28,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 26.44,
                name: "ROR"
              }
            ],
            name: "Little, Tony J."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Perry",
      28.98148148,
      40,
      27.68130746,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 28.98148148,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 26.2963,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 1.0185,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 41.4815,
            name: "ROR"
          }
        ],
        name: "Perry"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "McGuire, D.",
          46.2,
          60,
          45.34161491,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46.2,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 4.09,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 49.71,
                name: "ROR"
              }
            ],
            name: "McGuire, Daniel R."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Frownfelter, E.",
          46,
          87.5,
          44.21052632,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 46,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 8,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.5,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 45.5,
                name: "ROR"
              }
            ],
            name: "Frownfelter, Elizabeth R."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Schechterly, M.",
          16.36,
          25,
          17.05150977,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 16.36,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 37.9,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 1.67,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 41.57,
                name: "ROR"
              }
            ],
            name: "Schechterly, Michael E."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Crawford",
      28.8973384,
      53.33333333,
      28.3197832,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 28.8973384,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 13.054499999999999,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 3.5488,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 53.992399999999996,
            name: "ROR"
          }
        ],
        name: "Crawford"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Pendolino, S.",
          37.42,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 37.42,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 11.96,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 9.63,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 40.99,
                name: "ROR"
              }
            ],
            name: "Pendolino, Samuel V."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Nicols, A.",
          33.96,
          55.55555556,
          33.33333333,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 33.96,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 14.37,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.37,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 51.31,
                name: "ROR"
              }
            ],
            name: "Nicols, Amy L."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Zilhaver, L.",
          30.8,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 30.8,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 3.63,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 20.07,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 45.16,
                name: "ROR"
              }
            ],
            name: "Zilhaver, Lincoln S."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Marwood, R.",
          24.54,
          60,
          40,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 24.54,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 16.97,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 58.49,
                name: "ROR"
              }
            ],
            name: "Marwood, Rita J."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Fulton",
      28.672985779999998,
      31.578947369999998,
      29.27536232,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 28.672985779999998,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 14.691899999999999,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 5.2133,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 51.4218,
            name: "ROR"
          }
        ],
        name: "Fulton"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Heming, T.",
          31.36,
          33.33333333,
          32,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 31.36,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 25.42,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 16.95,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 26.27,
                name: "ROR"
              }
            ],
            name: "Heming, Tamela M."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Mellott, W.",
          23.74,
          25,
          24.4047619,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 23.74,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 8.08,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.51,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 67.68,
                name: "ROR"
              }
            ],
            name: "Mellott, Wendy"
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Elk",
      28.62318841,
      27.77777778,
      28.68117798,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 28.62318841,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 71.3768,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 0,
            name: "ROR"
          }
        ],
        name: "Elk"
      }
    ],
    outlier: true,
    collapseData: [
      {
        data: [
          "",
          "Martin, J.",
          26.69,
          40,
          26.99386503,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 26.69,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 73.31,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Martin, James L."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Jacob, M.",
          25.67,
          25,
          26.29107981,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 25.67,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 74.33,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Jacob, Mark S."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Centre",
      26.083333330000002,
      46.74115456,
      21.884927639999997,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 26.083333330000002,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 12.062299999999999,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0.0278,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 61.5898,
            name: "ROR"
          }
        ],
        name: "Centre"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Gillette-Walker, K.",
          43.8,
          75.3164557,
          36.96808511,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 43.8,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 8.55,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 47.44,
                name: "ROR"
              }
            ],
            name: "Gillette-Walker, Kelley"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Jordan, T.",
          40.16,
          72.54901961,
          33.8658147,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 40.16,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 12.86,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 46.98,
                name: "ROR"
              }
            ],
            name: "Jordan, Thomas N."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Sinclair, A.",
          26.59,
          42.85714286,
          20.71428571,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 26.59,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 13.57,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.28,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 59.56,
                name: "ROR"
              }
            ],
            name: "Sinclair, Allen W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Prestia, C.",
          20,
          33.59375,
          16.22641509,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 20,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 15.29,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 64.71,
                name: "ROR"
              }
            ],
            name: "Prestia, Carmine W. Jr."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Lachman, S.",
          16.34,
          29.89690722,
          14.19491525,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 16.34,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 13.43,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 70.06,
                name: "ROR"
              }
            ],
            name: "Lachman, Steven Frederic"
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Horner, R.",
          5.93,
          21.27659574,
          3.202846975,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 5.93,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 3.95,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 90.11,
                name: "ROR"
              }
            ],
            name: "Horner, Ronald J."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Nileski, C.",
          0.74,
          7.142857143,
          0.8064516129,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 0.74,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 0.74,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 98.52,
                name: "ROR"
              }
            ],
            name: "Nileski, Charity L."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Union",
      25.36136662,
      38.20224719,
      23.24159021,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 25.36136662,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 11.958,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 14.4547,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 47.7004,
            name: "ROR"
          }
        ],
        name: "Union"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Mensch, J.",
          26.3,
          40,
          26.50176678,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 26.3,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 18.89,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 34.07,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 20.74,
                name: "ROR"
              }
            ],
            name: "Mensch, Jeffrey L."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Armbruster, L.",
          16.58,
          23.07692308,
          16.08187135,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 16.58,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 5.87,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 3.32,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 74.23,
                name: "ROR"
              }
            ],
            name: "Armbruster, Leo S."
          }
        ],
        outlier: false
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Somerset",
      25,
      69.56521739,
      23.20855615,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 25,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 23.6146,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 46.0809,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 4.643,
            name: "ROR"
          }
        ],
        name: "Somerset"
      }
    ],
    outlier: false,
    collapseData: [
      {
        data: [
          "",
          "Stevanus, S.",
          38.11,
          75,
          34.34782609,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 38.11,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 26.79,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 33.96,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 1.13,
                name: "ROR"
              }
            ],
            name: "Stevanus, Sandra L."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Mankamyer, S.",
          25.35,
          80,
          23.4421365,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 25.35,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 14.48,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 55.71,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 4.46,
                name: "ROR"
              }
            ],
            name: "Mankamyer, Susan"
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Seger, W.",
          24.46,
          66.66666667,
          24.07407407,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 24.46,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 25.54,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 49.64,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0.36,
                name: "ROR"
              }
            ],
            name: "Seger, William E."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Johnson, K.",
          22.53,
          64.1025641,
          20.59259259,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 22.53,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 27.34,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 50.14,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Johnson, Kenneth W."
          }
        ],
        outlier: false
      },
      {
        data: [
          "",
          "Geary, D.",
          21.9,
          50,
          21.78217822,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 21.9,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 22.86,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0.95,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 41.9,
                name: "ROR"
              }
            ],
            name: "Geary, D Gregory"
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Bell, D.",
          19.92,
          50,
          19.84126984,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 19.92,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 20.31,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 49.43,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 9.96,
                name: "ROR"
              }
            ],
            name: "Bell, Douglas McCall"
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Potter",
      23.36601307,
      75,
      23.24786325,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 23.36601307,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 57.7741,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 1.9640000000000002,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 16.5303,
            name: "ROR"
          }
        ],
        name: "Potter"
      }
    ],
    outlier: true,
    collapseData: [
      {
        data: [
          "",
          "McCleaft, K.",
          27.71,
          50,
          27.5,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 27.71,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 71.69,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "McCleaft, Kari A."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Weiss, D.",
          24.06,
          0,
          24.72527473,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 24.06,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 61.5,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 14.44,
                name: "ROR"
              }
            ],
            name: "Weiss, Delores G."
          }
        ],
        outlier: true
      },
      {
        data: [
          "",
          "Easton, A.",
          19.26,
          100,
          18.61471861,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 19.26,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 45.9,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 4.92,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 29.92,
                name: "ROR"
              }
            ],
            name: "Easton, Annette L."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  },
  {
    data: [
      "",
      "Cameron",
      21.67832168,
      100,
      25.454545449999998,
      {
        type: "dist",
        values: [
          {
            className: "cash-bar",
            value: 21.67832168,
            name: "Cash bail"
          },
          {
            className: "unsecured-bar",
            value: 78.3217,
            name: "Unsecured"
          },
          {
            className: "nonmonetary-bar",
            value: 0,
            name: "Nonmonetary"
          },
          {
            className: "ror-bar",
            value: 0,
            name: "ROR"
          }
        ],
        name: "Cameron"
      }
    ],
    outlier: true,
    collapseData: [
      {
        data: [
          "",
          "Brown, B.",
          21.28,
          66.66666667,
          37.58865248,
          {
            type: "dist",
            values: [
              {
                className: "cash-bar",
                value: 21.28,
                name: "Cash bail"
              },
              {
                className: "unsecured-bar",
                value: 78.72,
                name: "Unsecured"
              },
              {
                className: "nonmonetary-bar",
                value: 0,
                name: "Nonmonetary"
              },
              {
                className: "ror-bar",
                value: 0,
                name: "ROR"
              }
            ],
            name: "Brown, Barry D."
          }
        ],
        outlier: true
      }
    ],
    isCollapsed: true
  }
];

// https://github.com/deldersveld/topojson/blob/master/countries/us-states/PA-42-pennsylvania-counties.json
export const COUNTY_MAP_DATA = {
  type: "Topology",
  arcs: [
    [
      [13874, 38],
      [53, 140],
      [40, 80],
      [9, 36],
      [22, 44],
      [13, 45],
      [161, 454],
      [19, 27],
      [18, 48],
      [33, 139],
      [46, 200],
      [0, 11],
      [-8, 469],
      [2, 40],
      [-4, 195],
      [-3, 85],
      [-18, 1341],
      [-2, 27],
      [-2, 137],
      [-12, 3],
      [-1, 507],
      [0, 3],
      [91, 216],
      [98, -65],
      [21, 70],
      [117, 392],
      [10, 36],
      [124, 410],
      [62, 201],
      [176, 600],
      [123, 234],
      [6, 26],
      [21, 123]
    ],
    [
      [15089, 6312],
      [117, 199],
      [-32, 135],
      [-12, 54],
      [-19, 80],
      [72, 20],
      [61, 315],
      [79, 119],
      [43, 93]
    ],
    [
      [15398, 7327],
      [515, -292],
      [38, -20],
      [4, -3],
      [178, -97],
      [157, -54],
      [37, -13],
      [356, -400],
      [23, -27],
      [12, -14],
      [78, -77],
      [33, 127],
      [1, 14],
      [7, 42],
      [6, 145],
      [-1, 70],
      [2, 19],
      [4, 12],
      [58, 269],
      [177, -112],
      [72, -50],
      [244, -149],
      [84, -48],
      [286, -165],
      [32, -18],
      [139, -111],
      [146, -73],
      [5, 18],
      [22, 103],
      [11, 29],
      [30, 49],
      [60, 121],
      [16, 60],
      [27, 52],
      [14, 41],
      [18, 66],
      [10, 23],
      [32, 98],
      [10, 13]
    ],
    [
      [18341, 6975],
      [58, -303],
      [34, -180],
      [69, -375],
      [10, -27],
      [70, -62],
      [621, -535],
      [6, -5],
      [77, -69],
      [47, -46]
    ],
    [
      [19333, 5373],
      [-180, -484],
      [-9, -31],
      [-246, -250],
      [-147, -184],
      [16, -13],
      [7, -28],
      [1, -51],
      [-5, -16],
      [-6, -56],
      [11, -36],
      [8, -12],
      [33, -20],
      [64, -8],
      [27, -24],
      [18, -51],
      [12, -12],
      [18, -5],
      [1, -9],
      [-2, -19],
      [-24, -82],
      [-29, -34],
      [-90, -13],
      [-23, -22],
      [-17, -25],
      [-12, -57],
      [2, -42],
      [22, -50],
      [-2, -64],
      [-9, -79],
      [15, -39],
      [10, -19],
      [-29, -28],
      [-31, -59],
      [-67, -105],
      [-25, -46],
      [-46, -114],
      [-32, -100],
      [-14, -53],
      [-33, -90],
      [-21, -77],
      [-17, -94],
      [-34, -51],
      [-48, -112],
      [-142, -392],
      [-12, -41],
      [-12, -83],
      [-14, -50],
      [-38, -102],
      [-10, -41],
      [-4, -27],
      [-22, -94],
      [-27, -97],
      [-24, -95],
      [-21, -63],
      [-3, -31],
      [-12, -25],
      [-7, -36],
      [-49, -157],
      [-5, -10],
      [-161, -329],
      [-22, -32],
      [-6, -25],
      [-13, -38],
      [-22, -58],
      [-9, -17],
      [-5, -27],
      [-13, -17],
      [-27, -50],
      [-14, -16],
      [-45, -92],
      [-21, -60],
      [-15, -19],
      [-10, -24],
      [-26, -26],
      [-44, -65],
      [-12, -32],
      [-51, -75],
      [-11, -23],
      [-82, -145],
      [-48, -62]
    ],
    [
      [17341, 33],
      [-472, -1],
      [-183, 5],
      [-259, -2],
      [-359, -3],
      [-71, 5],
      [-239, -4],
      [-116, 1],
      [-551, 3],
      [-529, 2],
      [-154, 0],
      [-244, -1],
      [-290, 0]
    ],
    [
      [39097, 6299],
      [0, 0],
      [-6, -4],
      [-262, -205],
      [-108, -94],
      [-140, -126],
      [-99, -88],
      [-286, -258],
      [-106, -95],
      [-16, -15],
      [-15, -15],
      [-176, -162],
      [-65, -55],
      [-132, -128],
      [-21, -19]
    ],
    [
      [37665, 5035],
      [-10, 9],
      [-5, 3],
      [-55, 54],
      [-33, 32],
      [-62, 60],
      [-36, 36],
      [-29, 28],
      [-324, 315],
      [-13, 13],
      [-92, 90],
      [-17, 15],
      [-191, 180],
      [-88, 83],
      [-428, 411],
      [0, 0],
      [-44, 41],
      [-93, 89],
      [-250, 238],
      [-324, 307],
      [-54, 52],
      [-23, 21],
      [-67, 63],
      [-14, 18]
    ],
    [
      [35413, 7193],
      [-6, 7],
      [-306, 374],
      [-71, 88],
      [-57, 71],
      [-151, 47],
      [-63, 21],
      [-93, 86],
      [-300, 278],
      [-216, 204],
      [-98, 88],
      [-15, 14],
      [-162, 151],
      [-101, 94],
      [-43, 41],
      [-146, 132],
      [-514, 476]
    ],
    [
      [33071, 9365],
      [29, 3],
      [18, -7],
      [57, -2],
      [71, 2],
      [22, 5],
      [25, 15],
      [56, 18],
      [6, 7],
      [46, 23],
      [95, 40],
      [33, 16],
      [45, 1],
      [10, 4],
      [62, 40],
      [122, 15],
      [21, 8],
      [55, 18],
      [46, 28],
      [70, 7],
      [35, -17],
      [36, -4],
      [58, 21],
      [22, -1],
      [77, -14],
      [53, 7],
      [41, 2],
      [70, 9],
      [81, 17],
      [74, -11],
      [57, 5],
      [81, 30],
      [27, 3],
      [21, 9],
      [47, 18],
      [25, 26],
      [95, 54],
      [129, 22],
      [56, 9],
      [38, 30],
      [51, 22],
      [114, -7],
      [21, 24],
      [44, 36],
      [28, 6],
      [38, 54],
      [25, 16],
      [134, 69],
      [9, 18],
      [141, 61],
      [49, 26],
      [44, 18],
      [25, 2],
      [188, 45],
      [21, 28],
      [94, 136],
      [60, 0],
      [3, -36],
      [12, -22],
      [15, -9],
      [27, 13],
      [12, 16],
      [18, 41],
      [0, 33],
      [18, 14],
      [20, 2],
      [33, -20],
      [15, -36],
      [25, -25],
      [16, -3],
      [41, 19],
      [14, -10],
      [29, -48],
      [16, 0],
      [18, 8],
      [2, 19],
      [37, 21],
      [130, 630],
      [5, 28],
      [8, 39],
      [11, 51],
      [808, 443],
      [17, 10]
    ],
    [
      [37519, 11553],
      [374, -365],
      [173, -172],
      [362, -339],
      [102, -92],
      [86, -81],
      [135, -126],
      [366, -347],
      [98, -91],
      [66, -63],
      [44, -41],
      [133, -129],
      [87, -80],
      [306, -291],
      [0, 0],
      [113, -107],
      [69, -66],
      [16, -14],
      [60, -57],
      [48, -45],
      [136, -126],
      [107, -99],
      [43, -39],
      [8, -9]
    ],
    [
      [40451, 8774],
      [-170, -314],
      [-10, -19],
      [-63, -116],
      [-77, -143],
      [-100, -182],
      [-186, -336],
      [-17, -30],
      [-69, -125],
      [-28, -51],
      [-20, -37],
      [-34, -66],
      [-23, -42],
      [-2, -4],
      [-48, -86],
      [-37, -68],
      [-52, -95],
      [-155, -284],
      [-2, -4],
      [0, 0],
      [-89, -158],
      [-1, -2],
      [-86, -159],
      [-65, -123],
      [-20, -31]
    ],
    [
      [17586, 12127],
      [-77, 93]
    ],
    [
      [17509, 12220],
      [146, 11],
      [383, 28],
      [96, 7],
      [31, 3],
      [108, 7],
      [289, 21],
      [796, 49],
      [124, -47]
    ],
    [
      [19482, 12299],
      [-49, -48],
      [-45, -49],
      [-38, -32],
      [-51, -50],
      [-59, -41],
      [-39, -22],
      [-38, -16],
      [4, -37],
      [-5, -16],
      [-17, -11],
      [-35, -9],
      [-13, 22],
      [-49, -11],
      [-101, -81],
      [-58, -59],
      [-16, -10],
      [-37, -40],
      [-9, -3],
      [-20, 29],
      [-41, -38],
      [-5, -13],
      [-27, -33],
      [-41, -63],
      [-27, -48],
      [-39, -100],
      [35, -57],
      [32, -53],
      [29, -59],
      [33, -65],
      [37, -40],
      [27, -50],
      [5, -25],
      [0, -8],
      [4, -10],
      [8, -20],
      [-6, -46],
      [28, 3],
      [14, -6],
      [11, -15],
      [-2, -21],
      [11, -32],
      [32, -15],
      [53, -56],
      [22, 14],
      [21, 3],
      [13, -49],
      [21, -46],
      [23, -28],
      [-27, -57],
      [-16, -14],
      [-102, -204],
      [9, 0],
      [31, -31],
      [13, -78],
      [-5, -30],
      [-42, -88],
      [-20, -33],
      [-16, -43],
      [-74, -142],
      [29, -37],
      [3, -13],
      [32, -37],
      [12, -32],
      [9, -11],
      [-2, -25],
      [10, -23],
      [20, -12],
      [39, -61],
      [-1, -16],
      [15, -23],
      [25, 6],
      [59, -42],
      [27, 63],
      [39, 14],
      [15, 27],
      [15, 10],
      [18, -2],
      [20, 11],
      [6, 19],
      [-7, 34],
      [23, 14],
      [15, 23],
      [0, 58],
      [34, 38],
      [21, 67],
      [6, 36],
      [12, 44],
      [19, 15],
      [42, -30],
      [-31, -42],
      [-2, -35],
      [-54, -133],
      [-11, -74],
      [-54, -135],
      [-41, -364],
      [-10, -74],
      [-2, -58],
      [4, -43],
      [13, -16],
      [24, 5],
      [107, 127],
      [14, 2],
      [18, -18],
      [14, -47],
      [3, -28],
      [1, -59],
      [-5, -45],
      [-10, -25],
      [-23, -81],
      [-28, -64],
      [-8, -28],
      [-18, -39],
      [-6, -25],
      [-12, -16],
      [-33, -85],
      [-79, -188],
      [-21, -31],
      [-150, -303],
      [-67, -106],
      [-24, -53],
      [-15, -44],
      [-146, -299],
      [-24, -92],
      [-18, -38],
      [-18, -32],
      [-66, -84],
      [-51, -83],
      [-39, -72],
      [-60, -136],
      [-16, -40],
      [-41, -84],
      [-9, -30],
      [-40, -124],
      [-9, -20]
    ],
    [
      [15398, 7327],
      [0, 0],
      [1, 1],
      [17, 60],
      [62, 130],
      [34, 53],
      [36, 72],
      [306, 210],
      [6, 50],
      [52, 415],
      [31, 249],
      [-54, 108],
      [63, 192],
      [1, 7],
      [1, 3],
      [4, 11],
      [0, 1],
      [1, 2],
      [12, 13],
      [10, 50],
      [30, 39],
      [20, 45],
      [1, 4],
      [0, 3],
      [1, 3],
      [13, 81],
      [-34, 93],
      [5, 61],
      [21, 96],
      [13, 109],
      [22, 46],
      [52, 107],
      [64, 54],
      [35, 66],
      [46, 26],
      [106, 88],
      [31, 23],
      [80, 9],
      [17, 29],
      [29, 51],
      [23, 40],
      [11, 19],
      [47, 93],
      [185, 380],
      [52, 110],
      [-54, 285],
      [21, 46],
      [30, 27],
      [11, 101],
      [-17, 30],
      [15, 24],
      [6, 22],
      [21, 21],
      [23, 2],
      [17, 10],
      [26, -12],
      [38, 9],
      [23, -11],
      [13, 3],
      [21, -18],
      [44, -11],
      [25, -1],
      [52, 99],
      [211, 409],
      [142, 281],
      [84, 165],
      [-17, 17]
    ],
    [
      [6703, 11462],
      [-12, -1],
      [-34, 1],
      [-150, -1],
      [-103, -5],
      [-17, 0],
      [-95, 6],
      [-15, -1],
      [-118, 10],
      [-33, 0],
      [-180, 13],
      [-98, 6],
      [-15, -1],
      [-93, 3],
      [-42, -6],
      [-68, -6],
      [-330, 12],
      [-90, 1],
      [-63, 2],
      [-31, 2],
      [-210, 7],
      [-26, -2],
      [-51, 0],
      [-297, -9],
      [-21, 1],
      [-10, 1],
      [-101, 7],
      [-104, 7],
      [-34, 0],
      [-9, 0],
      [-14, 0],
      [-318, 5],
      [-156, 1],
      [-38, 0],
      [-60, 0],
      [-7, 0],
      [-24, 0],
      [-1, 10],
      [-198, -10],
      [-9, 0],
      [-13, -1],
      [-24, -1],
      [-95, -1],
      [-26, -1],
      [-78, -1],
      [-181, 7]
    ],
    [
      [3011, 11517],
      [-3, 21],
      [-2, 60],
      [-6, 144],
      [-1, 38],
      [-9, 203],
      [-4, 120],
      [-8, 256],
      [-11, 258],
      [-5, 87],
      [1, 42],
      [-3, 71],
      [-3, 48],
      [1, 14],
      [0, 1],
      [-1, 9],
      [0, 4],
      [-7, 145],
      [-5, 126],
      [-2, 58],
      [2, 23],
      [-16, 454]
    ],
    [
      [2929, 13699],
      [-12, 383],
      [-20, 614],
      [-10, 364],
      [-4, 124],
      [-6, 228],
      [-3, 41],
      [254, 369],
      [270, 415],
      [31, 52]
    ],
    [
      [3429, 16289],
      [77, 113],
      [44, 71],
      [61, 87],
      [57, 92],
      [165, 251],
      [27, 44],
      [312, 503],
      [44, 71]
    ],
    [
      [4216, 17521],
      [104, 1],
      [42, -2],
      [481, 1],
      [6, 2],
      [133, 1],
      [160, 4],
      [510, 7],
      [68, 1],
      [223, -2],
      [744, -1]
    ],
    [
      [6687, 17533],
      [34, -27]
    ],
    [
      [6721, 17506],
      [2, -20],
      [-2, -530],
      [4, -59],
      [0, -204],
      [0, -14],
      [0, -102],
      [1, -176],
      [0, -269],
      [0, -315],
      [2, -337],
      [0, -544],
      [0, -7],
      [-11, -751],
      [-2, -120],
      [-2, -436],
      [-2, -427],
      [0, -84],
      [0, -221],
      [1, -179],
      [1, -256],
      [14, -129],
      [-19, -298],
      [0, -125],
      [-2, -211],
      [0, -3],
      [0, -49],
      [-1, -65],
      [3, -75],
      [-5, -38]
    ],
    [
      [11867, 6821],
      [7, 52],
      [30, 5],
      [20, 60],
      [29, 22],
      [-3, 29],
      [7, 15],
      [33, 25],
      [4, 35],
      [28, 28],
      [-4, 11],
      [9, 28],
      [-8, 35],
      [7, 11],
      [7, 9],
      [13, 14],
      [19, 13],
      [3, 39],
      [12, 34],
      [32, 22],
      [18, 33],
      [5, 25],
      [23, 65],
      [19, 31],
      [29, 14],
      [153, 320],
      [119, 241],
      [50, 109],
      [1, 3],
      [-3, 10]
    ],
    [
      [12526, 8159],
      [223, 555],
      [186, 471],
      [9, 24],
      [3, 9],
      [4, 9],
      [69, 178],
      [135, 404],
      [1, 5],
      [177, 509],
      [73, 212],
      [49, 142],
      [72, 246],
      [3, 17],
      [34, 110],
      [27, 92],
      [30, 86],
      [40, 137],
      [215, 711],
      [61, -40],
      [13, 0],
      [-22, 87]
    ],
    [
      [13928, 12123],
      [356, 2],
      [365, -4],
      [132, -1],
      [42, -1],
      [25, 0],
      [799, 15],
      [92, 1],
      [376, 4],
      [147, 1],
      [109, 1],
      [266, -3],
      [294, -4],
      [655, -7]
    ],
    [
      [15089, 6312],
      [-222, 1],
      [-604, 2],
      [-67, 3],
      [-275, 11],
      [-44, 1],
      [-19, 0],
      [-86, 2],
      [-24, 1],
      [-13, -1],
      [-78, 2],
      [-31, 1],
      [-74, 1],
      [-12, 13],
      [-32, -3],
      [-21, -27],
      [0, -1],
      [-29, -10],
      [-10, 32],
      [-21, -10],
      [-12, 3],
      [-20, 29],
      [-7, 20],
      [-30, 0],
      [-64, -18],
      [-15, -30],
      [-17, -1],
      [-3, 0],
      [-3, 0],
      [-2, 0],
      [-50, 64],
      [-13, 94],
      [-13, 44],
      [-24, 28],
      [22, 56],
      [-4, 17],
      [-13, 23],
      [-58, 41],
      [-1, 0],
      [-2, 0],
      [-52, 13],
      [-87, 13],
      [-24, 8],
      [-17, 18],
      [-14, 37],
      [1, 21],
      [1, 2],
      [1, 5],
      [0, 3],
      [-47, -1],
      [-31, 1],
      [-18, 0],
      [-50, 1],
      [-292, 3],
      [-602, -3]
    ],
    [
      [39479, 16923],
      [16, -7],
      [16, -44],
      [-8, -47],
      [2, -11],
      [20, -6],
      [29, 9],
      [23, -2],
      [26, -15],
      [11, -44],
      [14, -12],
      [25, -7],
      [9, 13],
      [8, 31],
      [10, 10],
      [39, -29],
      [-5, -27],
      [38, -24],
      [3, -27],
      [13, -34],
      [-2, -43],
      [13, -23],
      [42, 4],
      [27, -14],
      [-7, -21],
      [-1, -31],
      [-8, -42],
      [6, -11],
      [37, -3],
      [39, -46],
      [13, 3],
      [38, -47],
      [18, -8],
      [16, -30],
      [21, -15],
      [-3, -24],
      [22, -34],
      [13, 11],
      [15, -7],
      [18, -66],
      [30, -41],
      [0, -21],
      [19, -11],
      [4, -16],
      [-13, -5],
      [1, -55],
      [68, -16],
      [124, -177],
      [23, -33],
      [120, -170],
      [49, -69],
      [53, -75],
      [56, -83],
      [85, -112],
      [9, -12],
      [12, -15],
      [-36, -25],
      [-115, -76],
      [-43, -26],
      [-59, -40],
      [-151, -103],
      [-4, -2],
      [-230, -160],
      [16, -26],
      [132, -248],
      [188, -363],
      [52, -99],
      [0, -1],
      [72, -146],
      [36, -66],
      [94, -185],
      [7, -14],
      [11, -25],
      [59, -114],
      [38, -81],
      [42, -98],
      [67, -182]
    ],
    [
      [40901, 13212],
      [-35, -20],
      [-141, -25],
      [-98, -24],
      [-89, -3],
      [-76, -25],
      [-51, 0],
      [-56, 1],
      [-79, -27],
      [-50, -41],
      [-70, -4],
      [-70, -21],
      [-22, 4],
      [-146, -74],
      [-24, -38],
      [-34, -26],
      [-44, -6],
      [-1, -1],
      [-6, -1]
    ],
    [
      [39809, 12881],
      [-1, 2],
      [-353, -97],
      [-90, -25],
      [-106, -30],
      [-92, -34],
      [-53, -23],
      [-38, -49],
      [-25, -47],
      [-212, -100],
      [-29, -28],
      [-16, -34],
      [-42, -56],
      [-34, -9],
      [-11, -38],
      [-105, -59]
    ],
    [
      [38602, 12254],
      [-237, 219],
      [-210, 202],
      [-23, 23],
      [-105, 95],
      [-240, 226],
      [-101, 99],
      [-3, 2],
      [-120, 110],
      [-46, 58],
      [-16, 21],
      [-31, 39],
      [-3, 5],
      [-16, 21],
      [-49, 62],
      [-3, 5],
      [-17, 22],
      [-28, 39],
      [-119, 156],
      [-195, 249],
      [-23, 33],
      [-37, 43],
      [-170, 219],
      [-42, 55],
      [-42, 51],
      [-14, 18],
      [-52, 71]
    ],
    [
      [36660, 14397],
      [78, 43],
      [15, 11],
      [130, 68],
      [43, 22],
      [236, 126],
      [42, 23],
      [339, 178],
      [159, 88],
      [40, 20],
      [129, 65],
      [-13, 63],
      [244, 127],
      [144, 10],
      [131, 73],
      [8, 5],
      [427, 227],
      [-13, 19],
      [-9, 37],
      [-31, 53],
      [2, 26],
      [-6, 28],
      [8, 32],
      [-8, 47],
      [-13, 23],
      [-16, 19],
      [-54, 3],
      [-47, -8],
      [-13, 5],
      [-21, 63],
      [-15, 20],
      [-5, 39],
      [-31, 26],
      [-38, 73],
      [-1, 58],
      [0, 1],
      [1, 31],
      [-10, 44],
      [12, 30],
      [-1, 25],
      [0, 12],
      [0, 24],
      [-15, 98],
      [51, 90],
      [-15, 93],
      [1, 13],
      [28, 9],
      [20, -27],
      [19, 3],
      [33, 27],
      [14, 26],
      [0, 34],
      [-9, 21],
      [8, 29],
      [33, 9],
      [16, 0],
      [15, -11],
      [38, -10],
      [48, 0],
      [19, 9],
      [30, 61],
      [42, 17],
      [21, 27],
      [24, 59],
      [11, 19],
      [17, -2],
      [26, -22],
      [21, -6],
      [7, 6],
      [2, 14],
      [-14, 59],
      [15, 6],
      [16, -14],
      [23, 13],
      [12, 45],
      [9, 16],
      [33, 29],
      [22, 12],
      [37, 3],
      [30, -14],
      [26, 25],
      [22, 12],
      [44, -3],
      [27, 11],
      [32, 0],
      [8, -12],
      [5, -31],
      [17, -9],
      [11, -1],
      [21, -27],
      [21, -47],
      [-13, -58],
      [10, -28],
      [8, 1],
      [49, 73]
    ],
    [
      [20117, 17301],
      [-185, 252],
      [-262, 511]
    ],
    [
      [19670, 18064],
      [322, 686],
      [38, 85],
      [44, 87],
      [444, 959],
      [1, 51],
      [-2, 922],
      [-3, 322]
    ],
    [
      [20514, 21176],
      [548, 13],
      [774, 13],
      [436, 7],
      [58, -1],
      [660, 6],
      [479, 3],
      [16, 2],
      [199, 2]
    ],
    [
      [23684, 21221],
      [8, -414],
      [-1, -38],
      [102, 1],
      [1, -9],
      [33, -58],
      [39, -169],
      [33, -68],
      [27, -30],
      [33, -11],
      [36, -64],
      [81, -148],
      [61, -155],
      [19, -173],
      [19, -34],
      [67, -60],
      [23, -18],
      [72, -29],
      [132, -21],
      [11, -5],
      [61, -52],
      [56, -53],
      [44, -54],
      [38, -38],
      [7, -30],
      [-3, -123],
      [18, -89],
      [10, -50],
      [26, -36],
      [58, -50],
      [27, -13],
      [17, -14],
      [22, -49],
      [14, -59],
      [10, -23],
      [33, -58],
      [10, -12],
      [120, -58],
      [24, -64],
      [16, -51],
      [29, -24],
      [45, -14],
      [42, -45],
      [41, -64],
      [10, -33],
      [12, -13],
      [31, -49],
      [67, -63],
      [29, -35],
      [65, -70],
      [34, -28],
      [40, -50],
      [20, -3],
      [39, 14],
      [14, -6],
      [24, -30],
      [43, -7],
      [26, -14],
      [2, -55],
      [6, -14],
      [-22, -26],
      [0, -9],
      [59, 4],
      [79, -1],
      [8, -8],
      [61, -1],
      [23, -13],
      [26, -8],
      [49, -60],
      [9, -10],
      [36, -35],
      [14, -14],
      [60, -86],
      [35, -27],
      [27, -30],
      [6, -14],
      [-13, -17],
      [-12, -32],
      [5, -55],
      [7, -14],
      [32, -28],
      [40, -4],
      [48, -26],
      [15, -17],
      [25, -44],
      [4, -35],
      [20, -31],
      [38, -58],
      [104, -147],
      [4, -4],
      [121, -176],
      [4, -7],
      [1, -1],
      [40, -56],
      [92, -129],
      [317, -456],
      [52, -73],
      [80, -115],
      [164, 2]
    ],
    [
      [27365, 16278],
      [3, -287],
      [-4, -9]
    ],
    [
      [27364, 15982],
      [-1587, -690],
      [-26, -7],
      [-411, -100],
      [-376, -46],
      [-554, -139],
      [-46, 80],
      [-27, 46],
      [-165, 287],
      [-75, 131],
      [-1, 0],
      [-92, 160],
      [-172, 310],
      [145, 129],
      [-39, 85],
      [-4, 5],
      [-27, 14],
      [-24, 29],
      [-21, -1],
      [-42, -18],
      [-9, 3],
      [-11, 33],
      [-40, 19],
      [-20, -12],
      [-6, 11],
      [1, 34],
      [-28, 40],
      [-28, 24],
      [-12, 3],
      [-54, 38],
      [-16, 2],
      [-25, 30],
      [-53, 34],
      [-20, 6],
      [-6, 25],
      [-64, 26],
      [-2, 15],
      [-9, -6],
      [-7, 13],
      [-34, 0],
      [-28, 21],
      [-14, -3],
      [-52, 17],
      [-20, -6],
      [-22, 9],
      [-52, 33],
      [-8, 22],
      [-5, 47],
      [-14, 21],
      [-12, 6],
      [-25, -9],
      [-29, -32],
      [-11, -4],
      [-29, 9],
      [-9, 13],
      [-35, 24],
      [-22, 3],
      [-20, -11],
      [-4, -12],
      [-35, -14],
      [-36, 16],
      [-29, 25],
      [-12, 13],
      [-27, 26],
      [-19, 12],
      [-9, -5],
      [-15, -23],
      [-13, -1],
      [-25, -66],
      [-31, -13],
      [-48, 23],
      [-16, 40],
      [-25, 16],
      [-39, -16],
      [-28, -27],
      [-36, -6],
      [-4, 2],
      [-141, 182],
      [-142, 271],
      [-69, -44],
      [-2, 27],
      [-33, -19],
      [-3, 422],
      [-62, 0],
      [-7, 58],
      [-518, -31],
      [-246, -13],
      [-2, 54],
      [-18, 0],
      [-17, 756],
      [-7, 89],
      [-20, -34],
      [-44, -48],
      [-39, -29],
      [-23, -36],
      [-26, -63],
      [-26, -74],
      [-13, -22],
      [-15, -12],
      [-27, -3],
      [-39, 3],
      [-37, -5],
      [-13, -14],
      [-9, -26],
      [2, -35],
      [26, -59],
      [-1, -38],
      [-11, -17],
      [-19, -11],
      [-34, 10],
      [-57, 42],
      [-41, 44],
      [-31, 1],
      [-21, -26],
      [-15, -47],
      [-14, -22],
      [-42, -35],
      [-18, -30],
      [-4, -183],
      [22, -130],
      [1, -43],
      [-19, -20],
      [-44, -16],
      [-19, -1],
      [-23, -11],
      [-12, -24],
      [-13, -60],
      [-21, -23],
      [-21, 2],
      [-28, 13],
      [-31, -1],
      [-12, -17],
      [-9, -42],
      [12, -87],
      [-5, -38],
      [-21, -35],
      [-19, -15],
      [-26, -4],
      [-24, 21],
      [-20, 84],
      [-23, 14],
      [-23, -5],
      [-36, -24],
      [-32, -5],
      [-21, 14],
      [-31, 29],
      [-26, -3]
    ],
    [
      [33557, 12738],
      [-95, 253],
      [-4, 13],
      [-37, 155],
      [-13, 34],
      [-14, 40],
      [-20, 53],
      [-56, 153],
      [-15, -1],
      [-12, -3],
      [-67, 5],
      [-65, -16],
      [-66, 2],
      [-32, -14],
      [-35, -5],
      [-26, 2],
      [-36, -12],
      [-9, 8],
      [-43, -13],
      [-18, -11],
      [-54, -9],
      [-14, 8],
      [-28, -18],
      [-58, -3],
      [-33, -11],
      [-32, -1],
      [-13, -9],
      [-30, -13],
      [-34, -3],
      [-23, 11],
      [-6, 36],
      [-3, 48],
      [-20, 41],
      [-2, 34],
      [-23, 50],
      [4, 64],
      [70, 46],
      [-2, 18],
      [7, 13],
      [-15, 31],
      [1, 28],
      [-19, 35],
      [-23, 15],
      [-10, -4],
      [-9, 15],
      [-3, 47],
      [-15, 36],
      [6, 41],
      [21, 33],
      [19, 18],
      [-1, 32],
      [-13, 18],
      [-180, 1]
    ],
    [
      [32359, 14029],
      [27, 395],
      [-13, 27],
      [-16, 20],
      [12, 19],
      [37, 25],
      [17, 47],
      [-14, 60],
      [-16, 31],
      [-16, 4],
      [-29, 68],
      [23, 8],
      [114, 64],
      [-26, 44],
      [-5, 33],
      [9, 20],
      [5, 31],
      [-3, 25],
      [-21, 20],
      [-32, 51],
      [-2, 26],
      [-25, 8],
      [-21, 48],
      [-13, 19],
      [-179, 196],
      [0, 0],
      [-115, 127],
      [-8, 105],
      [27, 180],
      [5, 130],
      [-6, 24],
      [-56, 212],
      [-397, 120],
      [20, 41],
      [3, 19],
      [-10, 56],
      [-7, 10],
      [13, 22],
      [10, 40],
      [-21, 25],
      [-22, 45],
      [0, 54],
      [-5, 24],
      [-158, 774]
    ],
    [
      [31445, 17326],
      [321, 20],
      [70, 5],
      [291, 345],
      [283, 336],
      [179, 237],
      [293, 347],
      [22, 27],
      [107, 130]
    ],
    [
      [33011, 18773],
      [176, 216],
      [145, 179],
      [793, 22]
    ],
    [
      [34125, 19190],
      [-9, -44],
      [-13, -215],
      [-47, -643],
      [0, -5],
      [-11, -287],
      [5, -21],
      [1, -17],
      [11, -33],
      [87, -243],
      [53, -148],
      [4, -15],
      [92, -238],
      [90, -244],
      [226, 40],
      [169, 41],
      [0, -7],
      [2, -436],
      [1, -179],
      [0, -86],
      [0, -88],
      [0, -21],
      [1, -70],
      [0, -10],
      [0, -6],
      [0, -40],
      [0, -51],
      [0, -30],
      [0, -20],
      [-5, -3],
      [-9, -6],
      [-10, -6],
      [-2, -5],
      [0, -3],
      [3, -5],
      [78, -543],
      [0, -1],
      [48, -292],
      [64, -370]
    ],
    [
      [34954, 14840],
      [-339, -409],
      [-189, -260],
      [-57, -78],
      [-37, -51],
      [-118, -632],
      [-65, -354],
      [-208, -112],
      [-128, -68],
      [-85, -46],
      [-45, -24],
      [-37, -19],
      [-16, -9],
      [-6, -3],
      [-40, -22],
      [-27, -15]
    ],
    [
      [5, 25698],
      [919, 0],
      [447, -1],
      [26, 0],
      [653, 0],
      [490, -6],
      [487, 3],
      [421, 4],
      [113, 2],
      [77, -4],
      [81, 5],
      [210, 3],
      [86, 1],
      [110, 0],
      [819, 6],
      [187, 1],
      [232, 1],
      [780, 0],
      [6, 0],
      [94, -1],
      [236, 6],
      [130, 0],
      [27, 2],
      [20, -2],
      [149, 3],
      [554, -17]
    ],
    [
      [7359, 25704],
      [-2, -242],
      [-2, -533],
      [0, -131],
      [-2, -841],
      [-1, -50],
      [3, -81],
      [-3, -852]
    ],
    [
      [7352, 22974],
      [0, -82],
      [-253, 2],
      [-45, 1],
      [-187, 0],
      [-124, 1],
      [-486, 5],
      [-165, -1],
      [0, 39],
      [-491, 14],
      [-1, -59],
      [-4, -183],
      [-162, -53],
      [-2, -122],
      [-2, -6],
      [-188, -70],
      [25, -84],
      [-57, 0],
      [-128, -1],
      [2, -5],
      [-3, -116],
      [2, -22],
      [-128, -4],
      [-7, -144],
      [-78, 1],
      [-52, -5],
      [17, -147],
      [-163, -1],
      [8, -147],
      [-135, 1],
      [7, -143],
      [-50, -8],
      [-138, 0],
      [-2, -17],
      [0, -136],
      [-4, 0],
      [-33, 6],
      [-100, 3],
      [1, -131],
      [-10, 0]
    ],
    [
      [4216, 21360],
      [-176, -9],
      [-161, -7],
      [-168, -9],
      [-318, -12],
      [-195, -9],
      [0, -71],
      [-254, 6],
      [-22, 3],
      [-13, 2],
      [-29, 1],
      [-118, 4],
      [-632, 21],
      [-65, 0],
      [-110, 1],
      [-383, 9],
      [-263, 9],
      [-176, 10],
      [-147, 5],
      [-242, 8],
      [-25, 1],
      [-7, 61],
      [-76, 1],
      [-28, 2],
      [-1, -38],
      [0, -25],
      [-24, 2],
      [-577, 21]
    ],
    [
      [6, 21347],
      [-1, 132],
      [1, 348],
      [-2, 127],
      [0, 153],
      [0, 320],
      [0, 344],
      [0, 651],
      [0, 106],
      [0, 18],
      [0, 365],
      [0, 160],
      [0, 297],
      [0, 158],
      [1, 63],
      [0, 90],
      [0, 1019]
    ],
    [
      [14669, 17883],
      [2, 342],
      [-228, 5],
      [-7, 281],
      [15, 55],
      [15, 53],
      [-213, 143],
      [-429, 281],
      [-386, 257],
      [-457, 301],
      [-329, 216],
      [-3, 112],
      [-39, -20],
      [-18, 14],
      [-6, 24],
      [-21, 35],
      [-14, 8],
      [-24, -13],
      [-29, -45],
      [-5, -21],
      [-23, -27],
      [-28, -9],
      [-17, 15],
      [-45, 5],
      [-47, -50],
      [-8, -24],
      [-23, -35],
      [-12, -7],
      [-43, 4],
      [-12, -2],
      [-31, -22],
      [-7, -21],
      [-9, -56],
      [-9, -11],
      [-23, 5],
      [-14, 11],
      [-4, 17],
      [-28, 30],
      [-15, 23],
      [-47, 6],
      [-27, -1],
      [-24, -11],
      [-50, -34],
      [-20, -22],
      [-30, -11],
      [-49, -3],
      [-38, -9],
      [-18, 0],
      [-30, 14],
      [-26, 25],
      [-27, 11],
      [-24, -6],
      [-22, -14],
      [-47, -77],
      [-17, -33],
      [-23, -34],
      [-26, -1]
    ],
    [
      [11550, 19557],
      [0, 156],
      [2, 41],
      [0, 110],
      [-2, 20],
      [11, 600],
      [1, 70],
      [230, -1],
      [14, 362],
      [704, -17],
      [0, -179],
      [143, 1],
      [0, 189],
      [-1, 572],
      [4, 306],
      [10, 638],
      [11, 544]
    ],
    [
      [12677, 22969],
      [0, 5]
    ],
    [
      [12677, 22974],
      [35, 1],
      [809, -13],
      [193, -3],
      [99, -1],
      [1, 3],
      [-1, 23],
      [122, 3],
      [27, 0],
      [402, -3],
      [334, 2],
      [277, 3],
      [251, 38],
      [1282, 20],
      [5, -332],
      [516, -2]
    ],
    [
      [17029, 22713],
      [6, -703],
      [-14, 1],
      [0, -346],
      [-5, -364],
      [-3, -137],
      [13, -1],
      [-1, -67],
      [-3, -762],
      [366, -2],
      [980, -2],
      [-3, -979],
      [159, -2],
      [-17, -1121]
    ],
    [
      [18507, 18228],
      [-854, 69],
      [-590, 48],
      [-56, 4],
      [-403, 33],
      [-106, 8],
      [-350, 28],
      [-170, 16],
      [-793, 73],
      [0, -43],
      [-11, -393],
      [-2, -1],
      [-326, -122],
      [-7, -2],
      [-75, -28],
      [-95, -35]
    ],
    [
      [10627, 19451],
      [6, 428],
      [4, 382],
      [2, 108],
      [3, 110],
      [0, 60],
      [0, 9],
      [-1, 98],
      [-147, 2],
      [-616, 11],
      [-456, 6],
      [0, 46],
      [-94, 0],
      [-249, -1],
      [-4, -32],
      [-1, -194],
      [0, -373],
      [-72, -1],
      [-13, 1],
      [-542, -1]
    ],
    [
      [8447, 20110],
      [-2, 297],
      [-1, 351],
      [-352, 5],
      [-3, 297],
      [79, 0],
      [2, 100],
      [5, 283],
      [1, 114],
      [-6, 1426]
    ],
    [
      [8170, 22983],
      [150, 2],
      [737, 15],
      [0, 0],
      [5, 0],
      [890, -2],
      [524, 5],
      [141, 2],
      [42, 0],
      [919, -1],
      [1099, -35]
    ],
    [
      [11550, 19557],
      [-37, 24],
      [-25, -3],
      [-18, -10],
      [-19, -62],
      [23, -62],
      [-12, -55],
      [-7, -7],
      [-42, -13],
      [-16, 2],
      [-26, 30],
      [-29, 17],
      [-26, 22],
      [-37, 48],
      [-30, 49],
      [-34, 28],
      [-28, 2],
      [-14, -30],
      [-28, -41],
      [-26, -47],
      [-53, -37],
      [-35, 9],
      [-27, 30],
      [-3, 42],
      [23, 56],
      [-5, 22],
      [-18, 17],
      [-29, 8],
      [-18, -17],
      [-5, -34],
      [21, -91],
      [-2, -20],
      [-17, -29],
      [-22, -26],
      [-21, -6],
      [-11, 19],
      [-5, 63],
      [9, 46],
      [-37, 38],
      [-47, -5],
      [-12, -17],
      [1, -43],
      [6, -32],
      [-1, -31],
      [-14, -22],
      [-29, -28],
      [-29, -1],
      [-18, 18],
      [-42, 12],
      [-17, 20],
      [-12, 30],
      [-23, 11]
    ],
    [
      [19333, 5373],
      [459, -384],
      [3, -1],
      [0, 0],
      [5, -2],
      [387, -124],
      [64, -18],
      [323, -97],
      [453, -136],
      [5, 22],
      [493, -509]
    ],
    [
      [21525, 4124],
      [-28, -16],
      [-87, -90],
      [-38, -52],
      [-39, -92],
      [-9, -11],
      [-35, -83],
      [-11, -9],
      [-48, -67],
      [-32, -48],
      [-6, -49],
      [-20, -33],
      [-10, -8],
      [-21, -35],
      [-20, -26],
      [-15, -34],
      [-27, -49],
      [-14, -52],
      [1, -35],
      [11, -43],
      [-84, -229],
      [-18, -15],
      [-12, -84],
      [-10, -37],
      [-12, -15],
      [-7, -60],
      [-5, -73],
      [2, -14],
      [-51, -101],
      [0, -1],
      [-4, -9],
      [-11, -36],
      [-11, -22],
      [-48, -40],
      [-19, -33],
      [-6, -26],
      [17, -46],
      [-20, -87],
      [-18, -47],
      [-3, -30],
      [-28, -92],
      [-17, -25],
      [-3, -60],
      [-5, -13],
      [-10, -8],
      [-16, -50],
      [0, -17],
      [-12, -26],
      [-17, -87],
      [-21, -75],
      [-11, -16],
      [-10, -40],
      [-23, -65],
      [-82, -191],
      [-17, -27],
      [-9, -35],
      [-10, -12],
      [-2, -22],
      [-22, -49],
      [-15, -25],
      [-20, -50],
      [-2, -13],
      [-47, -82],
      [-51, -98],
      [-35, -56],
      [-27, -26],
      [-66, -85],
      [-48, -71],
      [-6, -24],
      [-47, -80],
      [-18, -38],
      [-9, -11],
      [-25, -52],
      [-12, -16],
      [-18, -41],
      [-22, -29],
      [-18, -36],
      [-12, -13],
      [-40, -74],
      [-17, -43],
      [-10, -46],
      [-12, -24],
      [-242, -314]
    ],
    [
      [19623, 30],
      [-624, 1],
      [-217, 1],
      [-13, 1],
      [-291, 0],
      [-22, -1],
      [-209, 2],
      [-1, 0],
      [-103, 0],
      [-397, 1],
      [-52, -3],
      [-20, 1],
      [-7, 0],
      [-17, 0],
      [-309, 0]
    ],
    [
      [8671, 9778],
      [191, 290],
      [112, 169],
      [133, 203],
      [151, 228],
      [157, 248],
      [59, 93],
      [110, 175],
      [388, 611],
      [310, 488],
      [82, 130],
      [25, 34],
      [6, 14],
      [14, 22],
      [8, 10],
      [159, 251],
      [2, 105],
      [0, 250],
      [-1, 397],
      [0, 11],
      [-2, 781],
      [0, 89]
    ],
    [
      [10575, 14377],
      [726, -9],
      [191, -5],
      [447, -7],
      [8, 0],
      [240, -4],
      [211, -3],
      [222, -5],
      [9, 1],
      [52, -1],
      [77, -2],
      [42, -2],
      [301, -12],
      [54, -4],
      [38, 1],
      [206, -10],
      [501, -3]
    ],
    [
      [13900, 14312],
      [-10, -735],
      [-1, -335],
      [0, -81],
      [0, -59],
      [1, -850],
      [1, -66],
      [24, -11],
      [13, -52]
    ],
    [
      [12526, 8159],
      [-20, 29],
      [-30, 55],
      [-12, 34],
      [-39, 63],
      [-6, 6],
      [-29, 13],
      [-42, 8],
      [-106, 58],
      [-22, 19],
      [-34, 8],
      [-45, -6],
      [-32, -2],
      [-26, -4],
      [-27, -22],
      [-13, -65],
      [0, -28],
      [53, -44],
      [-30, -39],
      [-13, -47],
      [-27, -36],
      [-28, 3],
      [-6, -39],
      [-16, -20],
      [-49, -12],
      [-22, -9],
      [-5, -4],
      [-42, -60],
      [-12, -42],
      [-29, -20],
      [-20, -2],
      [-43, 17],
      [-13, 16],
      [-24, 49],
      [-41, 37],
      [-23, 8],
      [-35, -11],
      [-13, -25],
      [-18, -76],
      [-46, -75],
      [-5, -40],
      [-31, -24],
      [-29, 9],
      [-16, 13],
      [-26, 33],
      [-44, -11],
      [-27, -12],
      [-21, -10],
      [-5, 0],
      [-28, 28],
      [-19, 26],
      [-14, 75],
      [3, 54],
      [11, 14],
      [51, 37],
      [20, -1],
      [14, -10],
      [14, 10],
      [-9, 44],
      [-127, 46],
      [-56, 14],
      [-65, -8],
      [-10, -3],
      [-8, 1],
      [-10, 5],
      [-21, 14],
      [-3, 4],
      [-8, 26],
      [11, 35],
      [5, 50],
      [-13, 25],
      [-33, 11],
      [-34, -12],
      [-20, -6],
      [-76, 4],
      [-24, 15],
      [-37, 13],
      [-33, 16],
      [-47, 12],
      [-13, -4],
      [-1, -1],
      [-11, -8],
      [-27, -32],
      [-26, -7],
      [-15, 11],
      [-99, 152],
      [-80, 36],
      [-20, 20],
      [-29, 14],
      [-20, 6],
      [-56, -9],
      [-60, 25],
      [-25, -40],
      [-28, -78],
      [-21, -25],
      [-51, -40],
      [-25, -6],
      [-19, 5],
      [-36, 19],
      [-8, 13],
      [2, 42],
      [30, 45],
      [4, 22],
      [-11, 84],
      [-15, 44],
      [-51, 34],
      [-32, 10],
      [-22, -12],
      [-14, -38],
      [-18, -23],
      [-63, -25],
      [-18, -1],
      [-15, 8],
      [-4, 49],
      [15, 68],
      [-11, 27],
      [-4, 44],
      [4, 12],
      [27, 39],
      [-14, 62],
      [-22, 14],
      [-64, -17],
      [-47, -8],
      [-30, -14],
      [-24, -25],
      [-21, -40],
      [-26, -2],
      [-14, 16],
      [-4, 58],
      [-8, 39],
      [-12, 26],
      [-27, 33],
      [-9, 27],
      [-21, 19],
      [-27, -16],
      [-14, -25],
      [-1, -71],
      [-4, -78],
      [-10, -25],
      [-22, -10],
      [-32, -3],
      [-18, 3],
      [-15, 5],
      [-21, 21],
      [-14, 72],
      [0, 37],
      [10, 14],
      [24, 80],
      [6, 52],
      [-10, 32],
      [-7, 7],
      [-21, 3],
      [-25, -10],
      [-7, -5],
      [-9, -29],
      [6, -76],
      [0, -34],
      [-14, -76],
      [-12, -37],
      [-13, -18],
      [-21, -15],
      [-65, -14],
      [-73, 20],
      [-30, 20],
      [-8, 14],
      [-20, 68],
      [-25, 33],
      [-27, 85],
      [-19, 21],
      [-17, 0],
      [-29, -16],
      [-27, -29],
      [-36, -9],
      [-10, 9],
      [-18, 33],
      [-22, 80],
      [-18, 42],
      [-5, 53],
      [-12, 15],
      [-64, -28],
      [-20, -22],
      [-46, -49],
      [-41, 17],
      [-17, 24],
      [2, 26],
      [5, 13],
      [3, 18],
      [-5, 39],
      [-17, 61],
      [-1, 47],
      [12, 53],
      [-5, 18],
      [-24, 50],
      [-18, 67],
      [-2, 15],
      [6, 22],
      [24, 44],
      [54, 40],
      [-5, 41]
    ],
    [
      [10575, 14377],
      [0, 14],
      [-1, 321],
      [-2, 12],
      [26, 251],
      [-1, 67],
      [2, 78],
      [15, 815],
      [3, 104],
      [-41, -2],
      [0, 19]
    ],
    [
      [10576, 16056],
      [6, 341],
      [25, 0],
      [1, 237],
      [1, 171],
      [6, 586],
      [2, 203],
      [0, 28],
      [0, 6],
      [0, 58],
      [2, 252],
      [1, 343],
      [4, 568],
      [0, 186],
      [2, 237],
      [1, 179]
    ],
    [
      [14669, 17883],
      [-253, 5],
      [-202, 5],
      [-130, -366],
      [-116, -316],
      [-2, -5],
      [-26, -70],
      [-35, -93],
      [-1, -153],
      [0, -26],
      [1, -339],
      [1, -309],
      [1, -96],
      [1, -189],
      [0, -378],
      [1, -180],
      [0, -254],
      [-9, -807]
    ],
    [
      [23087, 6878],
      [-33, -62],
      [-35, -49],
      [-40, -52],
      [-112, -127],
      [-33, -27]
    ],
    [
      [22834, 6561],
      [-1, 8],
      [-20, 86],
      [-14, 32],
      [-67, 232],
      [-192, 676],
      [-16, 54],
      [-88, 299]
    ],
    [
      [22436, 7948],
      [43, 74],
      [189, 273],
      [13, 15],
      [81, 93],
      [29, 37],
      [47, 54],
      [52, 51],
      [48, 54],
      [82, 102],
      [25, 27],
      [78, 93],
      [44, 56],
      [129, 155],
      [142, 156],
      [130, 116],
      [0, 281],
      [9, 10],
      [70, 64],
      [53, 53],
      [61, 55],
      [73, 60],
      [46, 43],
      [59, 48],
      [58, 39],
      [87, 68],
      [6, 9],
      [93, 70],
      [34, 28],
      [34, 33],
      [15, 9],
      [36, 39],
      [12, 6],
      [20, 22],
      [16, 9],
      [27, 45],
      [19, 13],
      [33, 34],
      [33, 24],
      [38, 34],
      [-1, 183],
      [-1, 152],
      [63, 64],
      [29, 13],
      [17, 23],
      [28, 21],
      [21, 10],
      [37, 30],
      [38, 23],
      [107, 73],
      [31, 24],
      [32, 20],
      [45, 32],
      [26, 13],
      [59, 41],
      [51, 31],
      [15, 4],
      [41, 25],
      [94, 70],
      [59, 35],
      [102, 58],
      [27, 19],
      [189, 101],
      [305, 158],
      [30, 9],
      [69, 34],
      [29, 17],
      [157, 67]
    ],
    [
      [26199, 11750],
      [147, -28],
      [2, -1],
      [167, -31],
      [6, 0],
      [58, -12],
      [341, -62],
      [224, -42],
      [169, -24],
      [11, 42],
      [26, 8],
      [49, 29],
      [44, 8],
      [9, 7],
      [67, 12],
      [14, 12],
      [68, 26],
      [24, 20],
      [8, 7],
      [8, 4],
      [11, -2],
      [13, -8],
      [12, -13],
      [9, -3],
      [5, 4],
      [20, -10],
      [10, -35],
      [22, -47],
      [1, -23],
      [0, -22],
      [28, -26],
      [33, 11],
      [15, 15],
      [25, -11],
      [54, 12],
      [15, 8],
      [12, -9],
      [35, 16],
      [20, 2],
      [18, -19],
      [20, 2],
      [22, 18],
      [15, -36],
      [17, -12],
      [19, 0],
      [9, -9],
      [49, 14],
      [12, -9],
      [28, 35],
      [24, 17],
      [7, -3],
      [23, -41],
      [-6, -17],
      [11, -30],
      [-10, -13],
      [7, -34],
      [20, -42],
      [0, -28],
      [-12, -28],
      [22, -40],
      [29, -15],
      [19, 3],
      [7, 36],
      [19, 22],
      [28, -17],
      [22, 6],
      [21, 27],
      [27, -7],
      [17, -21],
      [9, -46],
      [-11, -4],
      [4, -54],
      [14, -19],
      [19, -50],
      [-12, -13],
      [-3, -26],
      [9, -7],
      [13, -36],
      [34, -12],
      [12, -23],
      [64, 71],
      [13, 22],
      [34, 2],
      [53, 21],
      [6, -1],
      [5, -38],
      [9, 7],
      [25, -12],
      [34, -7],
      [-1, 49],
      [17, 22],
      [30, -17],
      [26, 17],
      [41, 9],
      [59, 27],
      [12, 1],
      [11, -22],
      [23, -26],
      [7, -94]
    ],
    [
      [29021, 11084],
      [-62, -107],
      [-16, -17]
    ],
    [
      [28943, 10960],
      [-54, -2],
      [-21, -14],
      [-100, -51],
      [-75, -45],
      [-60, -32],
      [-37, -27],
      [-64, -37],
      [-188, -80],
      [-78, -10],
      [-73, 9],
      [-43, -20],
      [-80, -20],
      [-13, 3],
      [-40, -18],
      [-52, -14],
      [-37, -3],
      [-28, -6],
      [-75, 4],
      [-29, -11],
      [-34, -3],
      [-7, -7],
      [-37, 0],
      [-23, -5],
      [-28, -38],
      [-30, 6],
      [-18, -5],
      [-50, -2],
      [-11, -17],
      [-63, -5],
      [-82, -18],
      [-38, -3],
      [-55, -13],
      [-16, -9],
      [-76, -9],
      [-18, 4],
      [-22, -6],
      [-95, -41],
      [-43, -10],
      [105, -233],
      [0, -1],
      [20, -39],
      [-43, -22],
      [-82, -12],
      [-126, -53],
      [-146, -95],
      [-424, -225],
      [-64, -36],
      [-39, -37],
      [-66, -15],
      [-230, -166],
      [-163, -113],
      [-426, -294],
      [-110, -72],
      [-16, -14],
      [-59, -40],
      [-68, -43],
      [-58, -31],
      [-61, -47],
      [-58, -36],
      [-18, -5],
      [-180, -125],
      [-27, -22],
      [-56, -35],
      [-8, -9],
      [-19, -17],
      [-150, -114],
      [-71, -64],
      [-12, -4],
      [-31, -25],
      [-13, -4],
      [-65, -53],
      [-50, -46],
      [-82, -60],
      [13, -57],
      [51, -223],
      [-67, -6],
      [-19, -5],
      [-185, -94],
      [-121, -106],
      [-59, -47],
      [-45, -41],
      [-2, -2],
      [-46, -35],
      [-35, -49],
      [-24, -11],
      [-35, -34],
      [-22, -33],
      [-23, -14],
      [-27, -36],
      [-19, -16],
      [-28, -33],
      [-12, -5],
      [-18, -27],
      [-26, -21],
      [-49, -58],
      [-11, -9],
      [-162, -211],
      [-96, -147]
    ],
    [
      [37979, 20602],
      [266, 493],
      [228, 431],
      [13, 25],
      [-95, 83],
      [-151, 130],
      [104, 214],
      [10, 19],
      [27, 55],
      [46, 93],
      [17, 31],
      [10, 19],
      [53, 108],
      [-5, 10],
      [-35, 62],
      [68, 137],
      [132, 260],
      [46, 95],
      [121, 251],
      [50, -14],
      [14, 2],
      [22, 22],
      [0, 15],
      [-15, 13],
      [-2, 18],
      [7, 22]
    ],
    [
      [38910, 23196],
      [548, 0],
      [156, -3],
      [287, -1],
      [347, -5],
      [191, 2],
      [237, -2],
      [184, 2],
      [36, 1],
      [45, -4],
      [56, 2]
    ],
    [
      [40997, 23188],
      [3, -129],
      [3, -116],
      [2, -18],
      [2, -10],
      [1, -31],
      [10, -249],
      [0, -8],
      [4, -85],
      [15, -463],
      [1, -13],
      [0, -25],
      [8, -155],
      [11, -203],
      [3, -131],
      [4, -49],
      [9, -183],
      [4, -92],
      [14, -448],
      [6, -198],
      [7, -197],
      [8, -260],
      [10, -296],
      [9, -244],
      [18, -473],
      [14, -414],
      [3, -91],
      [9, -46],
      [-21, -13],
      [-18, -30],
      [-42, -10],
      [-5, -15],
      [-20, -1],
      [-8, 26],
      [-18, -7],
      [-17, -31],
      [-18, -50],
      [-16, -5],
      [-36, 14],
      [-14, -48],
      [-14, -9],
      [-22, 16],
      [-25, 6],
      [-6, 25],
      [-16, -11],
      [-20, 6],
      [-21, -9],
      [3, -16],
      [-8, -24],
      [-50, -10],
      [-14, 18],
      [-18, 0],
      [-29, -40],
      [-15, -41],
      [-1, 0],
      [0, -1],
      [-14, -2],
      [-20, -23],
      [0, -3],
      [-1, -3],
      [-1, -4],
      [0, 0],
      [0, -2],
      [-2, -1],
      [0, 0],
      [0, 0],
      [-1, -3],
      [0, 0],
      [2, -3],
      [-1, -2],
      [-1, -2]
    ],
    [
      [40647, 18253],
      [-25, -2],
      [-5, -53],
      [-26, -58],
      [-17, -13],
      [-15, -30],
      [-9, -5],
      [-34, 33],
      [-31, 13],
      [-9, 22],
      [-18, 19],
      [-29, -13],
      [-21, -4],
      [-39, 5],
      [-26, -17],
      [-11, -26],
      [-38, -54],
      [-17, -29],
      [-9, -31],
      [-14, -9],
      [-11, -50],
      [-28, -8],
      [-10, -22],
      [-22, 2],
      [-5, -16],
      [-31, -55],
      [-18, -4],
      [-12, -48],
      [14, -20],
      [-11, -9],
      [3, -18],
      [-14, -6],
      [-33, -39],
      [-3, -10],
      [1, -58],
      [6, -11],
      [-9, -36],
      [-13, -8],
      [-36, -6],
      [-42, -49],
      [-54, -14],
      [-31, 11],
      [3, -52],
      [13, -27],
      [-7, -32],
      [-11, -2],
      [-18, -18]
    ],
    [
      [39875, 17396],
      [-15, 1],
      [-18, 25],
      [-58, 7],
      [-13, 35],
      [-13, 13],
      [11, 10],
      [-5, 31],
      [-17, 10],
      [-22, -20],
      [-29, 1],
      [-10, -15],
      [-17, 3],
      [-44, -7],
      [-23, 13],
      [-18, 20],
      [-23, 50],
      [-32, 1],
      [-8, 41],
      [6, 31],
      [-13, 18],
      [-12, 41],
      [-14, 1],
      [-2, 45],
      [-4, 0],
      [-8, 232],
      [-22, 581],
      [-68, 33],
      [-133, 41],
      [-2, 1],
      [-11, 285],
      [-82, -4],
      [-7, 194],
      [-30, -1],
      [-2, 163],
      [53, 2],
      [1, 131],
      [3, 131],
      [-156, 39],
      [-141, 35],
      [-22, 7],
      [-8, 1],
      [-14, 3],
      [-85, 19],
      [-18, 10],
      [-20, 22],
      [-58, 55],
      [-11, 11],
      [-3, 3],
      [-4, 4],
      [-53, 52],
      [-1, 1],
      [-59, 59],
      [-106, 67],
      [-117, 81],
      [-19, 41],
      [-29, 24],
      [-43, 20],
      [-83, 19],
      [-22, 10],
      [-59, 50],
      [-27, 33],
      [-12, 30],
      [-7, 30],
      [-1, 6],
      [1, 46],
      [6, 60],
      [4, 39],
      [1, 43],
      [-1, 28],
      [-13, 80],
      [-15, 34]
    ],
    [
      [7, 16956],
      [175, 0],
      [82, 3],
      [381, 7],
      [33, 0],
      [415, 7],
      [4, 0],
      [351, 5],
      [51, 3],
      [58, 0],
      [564, 10],
      [2, -128],
      [553, -28],
      [38, -1],
      [307, -14],
      [14, -19],
      [153, -202],
      [20, -23],
      [221, -287]
    ],
    [
      [2929, 13699],
      [-432, -9],
      [-222, -3],
      [-1, 0],
      [-101, -2],
      [-159, -2],
      [-3, 0],
      [0, 0],
      [-39, -1],
      [-99, -1],
      [-76, -2],
      [0, 0],
      [-4, 0],
      [-192, -3],
      [-1, 0],
      [-1, -1],
      [-348, -6],
      [-247, -2],
      [-92, -2],
      [-9, 0],
      [-114, -1],
      [-187, -2],
      [-166, -2],
      [-429, -7]
    ],
    [
      [7, 13653],
      [0, 316],
      [-6, 270],
      [0, 10],
      [0, 21],
      [-1, 51],
      [6, 173],
      [0, 7],
      [1, 383],
      [0, 492],
      [0, 16],
      [1, 241],
      [0, 174],
      [0, 268],
      [0, 114],
      [0, 114],
      [0, 11],
      [-1, 38],
      [0, 85],
      [-1, 104],
      [0, 0],
      [0, 105],
      [0, 17],
      [0, 55],
      [1, 128],
      [0, 110],
      [0, 0],
      [0, 0]
    ],
    [
      [32299, 10079],
      [165, -155],
      [120, -113],
      [24, -20],
      [65, -60],
      [42, -38],
      [79, -74],
      [277, -254]
    ],
    [
      [35413, 7193],
      [-71, -42],
      [-6, -4],
      [-409, -234],
      [-33, -19],
      [-464, -269],
      [-93, -54],
      [-193, -113],
      [-232, -45],
      [-114, -20],
      [-82, -17],
      [-62, -10],
      [-146, -29],
      [-351, -72],
      [-48, -10],
      [-8, -4],
      [-242, -114],
      [-24, -12],
      [-254, -116],
      [-12, -5],
      [-521, -250]
    ],
    [
      [32048, 5754],
      [-25, -14],
      [-97, 372],
      [-35, 137],
      [-22, 93],
      [-30, 107],
      [-30, 116],
      [-18, 71],
      [-51, 200],
      [-4, 13],
      [-23, 95],
      [-1, 5],
      [-16, 52],
      [-2, 11],
      [-9, 36],
      [0, 7],
      [-12, 44],
      [-105, 376],
      [-87, 327],
      [-34, 132],
      [-31, 120],
      [-103, 396],
      [-87, 335],
      [-3, 10],
      [-80, 314],
      [1156, 970]
    ],
    [
      [37519, 11553],
      [18, 13],
      [279, 179],
      [82, -2],
      [14, 6],
      [281, 166],
      [4, 2],
      [91, 116],
      [111, 72],
      [26, 24],
      [14, 50],
      [97, 21],
      [66, 54]
    ],
    [
      [39809, 12881],
      [28, -79],
      [7, -61],
      [-17, -53],
      [18, -31],
      [13, -34],
      [-4, -87],
      [-1, -24],
      [6, -45],
      [7, -35],
      [35, -67],
      [7, -12],
      [7, -23],
      [7, -19],
      [6, -16],
      [14, -32],
      [38, -27],
      [60, 14],
      [46, 0],
      [28, -22],
      [20, -71],
      [8, -17],
      [28, -30],
      [25, -19],
      [26, -12],
      [21, 1],
      [11, 1],
      [72, 40],
      [18, 26],
      [10, 17],
      [10, 95],
      [28, 23],
      [56, -16],
      [25, -28],
      [10, -31],
      [-2, -42],
      [6, -89],
      [1, -12],
      [25, -82],
      [53, -128],
      [31, -63],
      [11, -24],
      [56, -58],
      [2, -3],
      [2, -3],
      [43, -126],
      [15, -17],
      [5, -1],
      [41, -16],
      [2, -1],
      [6, -5],
      [10, -11],
      [6, -7],
      [9, -18],
      [9, -18],
      [12, -56],
      [-1, -80],
      [18, -54],
      [19, 10],
      [37, 20],
      [13, 7],
      [14, 8],
      [41, 22],
      [54, 29],
      [116, 62],
      [120, 64],
      [5, -8],
      [-2, -61],
      [42, -57],
      [26, -36],
      [21, -29],
      [44, -67],
      [22, -32],
      [17, -23],
      [30, -40],
      [43, -58],
      [32, -39],
      [33, -36],
      [35, -9],
      [-7, -33],
      [4, -32],
      [2, -2],
      [1, -2],
      [20, -27],
      [3, -4],
      [7, -3],
      [6, -11],
      [-9, -34],
      [0, -6],
      [0, -2],
      [2, -5],
      [2, -1],
      [3, -7],
      [1, -5],
      [3, -19],
      [20, -3],
      [10, -20],
      [-43, -5],
      [-34, -4],
      [-11, -112],
      [-2, -22],
      [-3, -32],
      [-1, -3],
      [0, -5],
      [-5, -42],
      [-24, -43],
      [-18, -32],
      [-62, -106],
      [3, -9],
      [110, -103],
      [88, -81],
      [126, -116],
      [17, -16],
      [77, -72],
      [152, -140]
    ],
    [
      [42042, 9861],
      [-42, -36],
      [-227, -225],
      [-10, -10],
      [-101, -96],
      [-14, -12],
      [-38, -36],
      [-2, -2],
      [-10, -10],
      [-166, -158],
      [-8, -7],
      [-264, -366],
      [-128, -181],
      [-50, -69],
      [-161, -223]
    ],
    [
      [40821, 8430],
      [-49, 45],
      [-58, 56],
      [-263, 243]
    ],
    [
      [34125, 19190],
      [63, 230],
      [143, 527],
      [13, 43]
    ],
    [
      [34344, 19990],
      [247, 10],
      [517, 21],
      [243, 10],
      [693, 27],
      [91, 4],
      [78, 3],
      [84, 5],
      [135, 7],
      [166, 10],
      [177, 78],
      [117, 36],
      [69, 25],
      [44, 16],
      [617, 213],
      [35, 13],
      [285, 102],
      [33, 24],
      [4, 8]
    ],
    [
      [39875, 17396],
      [-1, -25],
      [-27, -35],
      [9, -32],
      [1, -24],
      [-32, -22],
      [-18, -2],
      [-35, 16],
      [-13, -4],
      [-4, -11],
      [14, -39],
      [-1, -17],
      [-19, -30],
      [-42, -24],
      [-28, -36],
      [-26, -9],
      [-2, -36],
      [5, -17],
      [23, -21],
      [-17, -14],
      [-8, -19],
      [-39, -4],
      [-4, -36],
      [-9, -23],
      [-35, 40],
      [-19, 6],
      [-59, -18],
      [-10, -37]
    ],
    [
      [36660, 14397],
      [-249, -133],
      [-3, 1],
      [-579, 236],
      [-39, 13],
      [-9, 4],
      [-129, 51],
      [-328, 128],
      [-104, 40],
      [-21, 8],
      [-241, 94],
      [-4, 1]
    ],
    [
      [28537, 0],
      [-357, 2],
      [-29, 0],
      [-90, 3],
      [-6, -1],
      [-873, -1],
      [-271, 0],
      [-136, -1],
      [-3, 0],
      [-183, 0],
      [-28, 0],
      [-3, 0],
      [-621, 0],
      [-246, 1],
      [-101, 0],
      [-139, 0],
      [-642, 0]
    ],
    [
      [24809, 3],
      [-5, 178],
      [-2, 107],
      [0, 5],
      [0, 1],
      [-5, 187],
      [-5, 176],
      [-13, 485],
      [-17, 428],
      [-6, 119],
      [-5, 106],
      [-1, 36],
      [-17, 391],
      [1, 40],
      [-8, 107],
      [-12, 337]
    ],
    [
      [24714, 2706],
      [403, 449],
      [145, 160],
      [403, 106],
      [625, 168],
      [174, 42],
      [15, 4],
      [199, 49],
      [148, 22],
      [79, 12],
      [121, 18],
      [63, 90],
      [141, 197],
      [41, 44],
      [148, 158]
    ],
    [
      [27419, 4225],
      [25, -10],
      [52, -5],
      [36, -30],
      [77, -43],
      [16, -15],
      [46, -20],
      [16, -22],
      [45, -21],
      [19, -15],
      [36, -16],
      [23, -25],
      [30, -49],
      [38, -52],
      [20, -68],
      [49, -45],
      [22, -52],
      [123, -76],
      [68, -11],
      [43, -12],
      [58, -30],
      [50, -8],
      [9, 3],
      [40, -42],
      [22, -12],
      [20, -50],
      [46, -113],
      [144, -329],
      [39, -76],
      [176, -382],
      [-11, 1],
      [-17, 24],
      [-17, -28],
      [5, -36],
      [-6, -33],
      [6, -15],
      [-9, -27],
      [18, -25],
      [3, -27],
      [26, 11],
      [11, -5],
      [-15, -29],
      [-13, -13],
      [10, -14],
      [-1, -17],
      [-37, -17],
      [-7, -14],
      [-3, -28],
      [-21, -31],
      [-24, -26],
      [-22, -15],
      [10, -17],
      [-30, -21],
      [0, -13],
      [14, -39],
      [-13, -31],
      [0, -17],
      [14, -14],
      [2, -21],
      [11, -34],
      [22, -26],
      [-1, -29],
      [-4, -13],
      [9, -31],
      [38, -82],
      [74, 16],
      [11, -111],
      [57, -97],
      [1, -1],
      [-14, -12],
      [-4, -2],
      [-5, -2],
      [-57, -58],
      [-75, -13],
      [-36, -24],
      [-37, -76],
      [-61, -85],
      [-63, -27],
      [-2, -9],
      [-6, -33],
      [-2, -108],
      [-2, -23],
      [0, -68],
      [1, -41],
      [0, -45],
      [0, -122],
      [1, -16],
      [1, -30],
      [1, -11],
      [1, -21],
      [0, -342],
      [-2, -486]
    ],
    [
      [6703, 11462],
      [3, 0]
    ],
    [
      [6706, 11462],
      [1, -11],
      [-25, -56],
      [3, -45],
      [35, -86],
      [15, -56],
      [2, -59],
      [-17, -55],
      [-23, -48],
      [-66, -104],
      [-69, -68],
      [-17, -11],
      [-3, -3],
      [-23, -40],
      [-11, -38],
      [-34, -65],
      [-59, -39],
      [-38, -20],
      [-65, -29],
      [-65, -21],
      [-61, -33],
      [-6, -3],
      [-10, -7],
      [-19, -14],
      [-19, -13],
      [-5, -5],
      [-51, -77],
      [-16, -31],
      [-8, -37],
      [-6, -60],
      [-3, -72],
      [21, -82],
      [10, -33],
      [11, -33],
      [27, -80],
      [4, -13],
      [36, 15],
      [23, -9],
      [34, 3],
      [15, 13],
      [31, -6],
      [26, -20],
      [24, -7],
      [22, 8],
      [28, -5],
      [43, -52],
      [9, -11],
      [57, -23],
      [14, -13],
      [16, -41],
      [0, 0],
      [1, -2],
      [24, -41],
      [23, -13],
      [21, -7],
      [19, -20],
      [23, -43],
      [28, -20],
      [-3, -20],
      [-2, -71],
      [1, -343],
      [-3, -147],
      [-5, -166],
      [-2, -92],
      [-4, -150],
      [-5, -114],
      [-2, -78],
      [-16, -36],
      [-3, -26],
      [-39, -34],
      [-6, -12],
      [-27, -16],
      [-14, -44],
      [-43, 16],
      [-32, -12],
      [-4, -13],
      [43, -46],
      [0, -1],
      [-2, -3],
      [-44, -6],
      [-16, 5],
      [-14, -13],
      [-6, -29],
      [-1, -60],
      [-2, -8],
      [-19, -21],
      [-12, 19],
      [-16, -14],
      [-1, -30],
      [-32, 13],
      [-18, -11],
      [-28, -61],
      [-19, 3],
      [-4, -25],
      [-34, 1],
      [-28, 36],
      [-28, 8],
      [-25, -40],
      [6, -29],
      [1, -6],
      [0, 0],
      [0, -30],
      [-13, 1],
      [-42, -105],
      [-9, -73],
      [-11, -71],
      [-2, -14],
      [-5, -32],
      [-8, -60],
      [-2, -20],
      [-19, -142],
      [-11, -76],
      [-20, -135],
      [-12, -79],
      [-3, -16],
      [-1, -6],
      [-3, -19],
      [-15, -76],
      [-15, -119],
      [68, -61],
      [35, -57],
      [2, -17],
      [-23, -38],
      [-28, -17],
      [-77, 3],
      [-33, -6],
      [-14, -30],
      [2, -38],
      [11, -52],
      [50, -78],
      [10, -30],
      [-24, -48],
      [-46, -66],
      [-19, -68],
      [-39, -74],
      [-14, -6],
      [-16, -43],
      [8, -52],
      [20, -17],
      [64, -21],
      [53, -12],
      [14, -13],
      [45, -4],
      [-285, -144],
      [-179, -88],
      [-10, -5],
      [-246, -128]
    ],
    [
      [5263, 5763],
      [-91, -11],
      [-58, -20],
      [-35, -6],
      [-6, 0],
      [-8, 0],
      [-11, 1],
      [-31, 8],
      [-100, 32],
      [-28, 20],
      [-19, 14],
      [-18, 21],
      [-8, 11],
      [-17, 18],
      [-16, 14],
      [-18, 11],
      [-21, 10],
      [-67, 27],
      [-34, 5],
      [-60, 16],
      [-47, 24],
      [-28, 31],
      [-71, 93],
      [-15, 30],
      [-4, 61],
      [13, 35],
      [35, 41],
      [43, 25],
      [62, 14],
      [96, 7],
      [74, 19],
      [11, 4],
      [14, 7],
      [39, 26],
      [53, 46],
      [18, 31],
      [-28, 13],
      [-3, 1],
      [-9, 3],
      [-24, 11],
      [-149, 67],
      [-25, 11],
      [-207, 89],
      [-29, 12],
      [-5, 3],
      [-1, -1],
      [-5, 3],
      [-2, 2],
      [-231, 101],
      [-118, 53],
      [-128, 58],
      [-5, 2],
      [-49, 20],
      [-61, 26],
      [-51, 25],
      [-127, 57],
      [-25, 9],
      [-13, 6],
      [-25, 11],
      [-30, 12],
      [-18, 9],
      [-25, 10],
      [-25, 11],
      [-47, 20],
      [-172, 77],
      [-58, 26],
      [-165, 74],
      [-19, 8],
      [-126, 57],
      [-78, 35],
      [-100, 47],
      [-234, 292],
      [-87, 107],
      [-40, 50],
      [-52, 61],
      [-2, 4],
      [-196, 240],
      [-107, 130],
      [-11, 15],
      [-105, 124],
      [-13, 11],
      [-69, 83],
      [-228, 277],
      [-294, 353]
    ],
    [
      [1289, 9143],
      [1, 1],
      [150, 160],
      [521, 553],
      [9, 9],
      [14, 16],
      [21, 27],
      [78, 82],
      [93, 99],
      [147, 163],
      [38, 42],
      [0, 1],
      [35, 26],
      [1, 22],
      [28, 30],
      [5, 3],
      [8, -4],
      [-2, 26],
      [11, 2],
      [30, -12],
      [24, 28],
      [5, 29],
      [22, 30],
      [2, 2],
      [5, 1],
      [3, -1],
      [21, 6],
      [19, 30],
      [22, 15],
      [36, 53],
      [37, -6],
      [31, 0],
      [15, 13],
      [-33, 25],
      [0, 5],
      [37, 18],
      [-6, 18],
      [5, 19],
      [30, 39],
      [5, 20],
      [16, -1],
      [13, -11],
      [51, -7],
      [7, -17],
      [23, -4],
      [48, 43],
      [14, -5],
      [22, -13],
      [31, 17],
      [2, 18],
      [29, 8],
      [27, 22],
      [0, 16],
      [-15, 329],
      [-14, 341],
      [-2, 43],
      [0, 6],
      [2, -1]
    ],
    [
      [6721, 17506],
      [80, -102],
      [11, -32],
      [-7, -49],
      [-29, -51],
      [-12, -19],
      [-10, -56],
      [32, -56],
      [26, -41],
      [7, -76],
      [-9, -62],
      [4, -113],
      [-17, -116],
      [3, -40],
      [-1, -13],
      [7, -55],
      [2, -47],
      [25, -97],
      [22, -36],
      [68, -48],
      [55, -64],
      [28, -57],
      [-3, -38],
      [-24, -36],
      [-53, -49],
      [-13, -31],
      [2, -53],
      [9, -29],
      [26, -22],
      [91, -27],
      [99, -67],
      [18, -19],
      [73, -25],
      [67, -30],
      [48, -1],
      [22, 8],
      [34, 29],
      [44, 7],
      [20, -42],
      [-5, -49],
      [-20, -88],
      [-21, -53],
      [-30, -46],
      [-8, -20],
      [-4, -46],
      [12, -31],
      [145, -22],
      [23, -13],
      [45, -57],
      [5, -42],
      [-13, -28],
      [-26, -14],
      [-27, 7],
      [-61, 30],
      [-52, 5],
      [-20, -5],
      [-37, -14],
      [-70, -51],
      [-36, -53],
      [-7, -29],
      [1, -42],
      [7, -20],
      [21, -23],
      [20, -12],
      [42, -12],
      [51, -23],
      [46, -24],
      [39, -8],
      [37, 8],
      [11, 7],
      [12, 12],
      [16, 39],
      [44, 72],
      [33, 35],
      [38, 29],
      [21, 4],
      [65, -3],
      [39, -19],
      [49, -41],
      [82, 50],
      [15, -4],
      [18, -41],
      [11, -10],
      [58, -20],
      [31, -30],
      [20, -11],
      [49, 26],
      [13, 23],
      [-5, 27],
      [-20, 21],
      [0, 11],
      [13, 33],
      [18, 2],
      [48, -29],
      [11, -16],
      [0, -25],
      [7, -40],
      [20, -16],
      [79, 18],
      [8, 18],
      [-1, 18],
      [-16, 64],
      [32, 60],
      [9, 31],
      [15, 23],
      [50, -19],
      [49, 10],
      [49, -17],
      [18, -22],
      [22, -16],
      [24, -4],
      [41, 13],
      [8, -11],
      [-2, -24],
      [-39, -25],
      [-13, -17],
      [1, -19],
      [23, -12],
      [28, 3],
      [34, -8],
      [22, 10],
      [25, 37],
      [22, 19],
      [29, 3],
      [73, -25],
      [25, 7],
      [23, 37],
      [17, 56],
      [2, 27],
      [12, 38],
      [-3, 44],
      [8, 16],
      [35, 18],
      [29, 36],
      [18, -14],
      [0, -24],
      [-24, -23],
      [-16, -33],
      [13, -29],
      [14, -5],
      [30, 8],
      [27, -9],
      [3, -25],
      [-14, -56],
      [10, -29],
      [18, -9],
      [15, 2],
      [27, 24],
      [9, 41],
      [13, 16],
      [11, -4],
      [6, -4],
      [18, -9],
      [38, 18],
      [24, 5],
      [25, -2],
      [13, -9],
      [8, -31],
      [-7, -13],
      [-37, 0],
      [-25, -12],
      [-9, -27],
      [10, -21],
      [19, -9],
      [19, 2],
      [27, 6],
      [23, -18],
      [-52, -52],
      [-8, -31],
      [-2, -74],
      [5, -18],
      [21, -15],
      [24, -1],
      [29, 18],
      [9, 43],
      [15, 18],
      [-3, 42],
      [-13, 50],
      [-1, 56],
      [5, 36],
      [20, 44],
      [12, 38],
      [9, 47],
      [9, 16],
      [20, 16],
      [11, 3],
      [14, -12],
      [24, -36],
      [34, -1],
      [33, -24],
      [18, 0],
      [13, 12],
      [21, 33],
      [33, 13],
      [26, -41],
      [32, 14],
      [82, 15],
      [39, 22],
      [8, 17],
      [34, 39],
      [63, 67],
      [9, -4],
      [17, -18],
      [115, -29],
      [22, 6],
      [69, 94],
      [38, 19],
      [15, 15],
      [20, 36],
      [10, 27],
      [2, 3],
      [1, 4],
      [2, 3],
      [2, 3],
      [2, 5],
      [2, 1],
      [19, 30],
      [78, 35],
      [36, 27],
      [36, 11],
      [37, 68],
      [56, 56],
      [89, 31],
      [31, 23]
    ],
    [
      [8671, 9778],
      [-10, 20],
      [-29, 27],
      [-45, 3],
      [-30, -3],
      [-44, -18],
      [-42, -33],
      [-14, -3],
      [-10, 23],
      [8, 30],
      [0, 22],
      [-20, 15],
      [-21, -1],
      [-23, -32],
      [-1, -45],
      [-13, -38],
      [-18, -17],
      [-48, -14],
      [-20, 6],
      [-7, 14],
      [5, 31],
      [-13, 37],
      [-52, 46],
      [-24, 30],
      [-17, 38],
      [-12, 13],
      [-89, -14],
      [-27, 10],
      [-35, 50],
      [-53, 51],
      [-78, 55],
      [-93, 75],
      [-21, 24],
      [-18, 66],
      [-11, 29],
      [-17, 37],
      [-8, 33],
      [0, 7],
      [-1, 4],
      [-25, 68],
      [3, 17],
      [15, 38],
      [6, 20],
      [11, 37],
      [3, 5],
      [9, 13],
      [65, 56],
      [8, 11],
      [34, 22],
      [8, 25],
      [-10, 9],
      [-66, 9],
      [-2, 2],
      [-6, 4],
      [-41, 24],
      [-20, -4],
      [-37, -42],
      [-38, -34],
      [-31, 19],
      [-23, 50],
      [5, 41],
      [-7, 19],
      [-40, 59],
      [8, 104],
      [9, 16],
      [1, 3],
      [36, 72],
      [-6, 43],
      [-26, 2],
      [-37, -29],
      [-20, -35],
      [-20, -38],
      [-11, -14],
      [-35, -32],
      [-35, 6],
      [-12, 4],
      [-2, 2],
      [-5, 4],
      [-11, 63],
      [7, 29],
      [2, 47],
      [-4, 30],
      [-30, 46],
      [-41, 14],
      [-32, 11],
      [-36, 23],
      [-16, 13],
      [-60, 70],
      [-9, 58],
      [0, 36],
      [-8, 40],
      [-16, 16],
      [-32, 23],
      [-72, 37],
      [-39, 44],
      [-51, 42],
      [-36, 12],
      [-26, -20],
      [-8, -12],
      [-42, -54],
      [-19, -11],
      [-52, -11],
      [-49, -16]
    ],
    [
      [1289, 9143],
      [-3, 0],
      [-1, 0],
      [-3, 0],
      [-1, 0],
      [-610, 3],
      [-89, -1],
      [-152, -5],
      [-423, 1]
    ],
    [
      [7, 9141],
      [0, 489],
      [0, 0],
      [0, 503],
      [0, 369],
      [0, 0],
      [0, 316],
      [0, 0],
      [0, 254],
      [0, 17],
      [0, 600],
      [0, 545],
      [0, 496],
      [0, 176],
      [0, 35],
      [0, 107],
      [0, 579],
      [0, 11],
      [0, 0],
      [0, 15]
    ],
    [
      [35459, 27500],
      [16, -254],
      [49, -767],
      [15, -272],
      [10, -182],
      [3, -37],
      [35, -572],
      [18, -301],
      [16, -253],
      [-3, -117],
      [11, -45],
      [13, -211],
      [8, -131],
      [55, -1046]
    ],
    [
      [35705, 23312],
      [-371, -30],
      [-36, -2],
      [-264, -16],
      [-23, -178],
      [-104, -755],
      [-52, -353]
    ],
    [
      [34855, 21978],
      [-788, 99],
      [-337, 39],
      [-897, 106],
      [-114, 14],
      [-580, 70],
      [-995, 122],
      [-134, 16],
      [-684, 82],
      [-113, 14],
      [-170, 26]
    ],
    [
      [30043, 22566],
      [-494, 80],
      [-1, 3]
    ],
    [
      [29548, 22649],
      [-32, 283],
      [-13, 226],
      [1, 23],
      [-27, 306],
      [-3, 32],
      [-75, 959],
      [-24, 301],
      [-20, 254],
      [-4, 146],
      [-40, 381],
      [-63, 706],
      [-21, 213],
      [-85, 883],
      [-1, 13],
      [-8, 89],
      [-9, 69]
    ],
    [
      [29124, 27533],
      [42, 0],
      [9, 1],
      [695, 0],
      [36, 0],
      [119, -1],
      [537, 0],
      [19, 0],
      [885, -11],
      [649, -7],
      [3, 0],
      [207, -4],
      [71, -1],
      [405, -8],
      [56, -1],
      [36, -1],
      [653, -5],
      [257, -1],
      [50, -1],
      [644, 3],
      [962, 4]
    ],
    [
      [44953, 3971],
      [-46, 57],
      [-18, 2],
      [-10, 8],
      [-3, 6],
      [-3, 5],
      [-1, 6],
      [2, 24],
      [30, 30],
      [-3, 53],
      [1, 3],
      [3, 14],
      [52, 61],
      [5, 3],
      [1, 2],
      [15, 26],
      [6, 30],
      [46, 12],
      [4, -1],
      [7, 3],
      [8, 8],
      [2, 8],
      [15, 27],
      [18, 39],
      [1, 66],
      [14, 45],
      [2, 28],
      [-20, 14],
      [-1, 0],
      [-24, 11],
      [4, 68],
      [-34, 55],
      [13, 18],
      [5, 66],
      [-6, 31],
      [0, 1],
      [-2, 2],
      [-18, 4],
      [-31, -11],
      [-25, 32],
      [-54, -1],
      [-1, 1],
      [-22, 13],
      [-2, 29],
      [-34, -1],
      [-5, 8],
      [-7, 6],
      [1, 3],
      [-14, 21],
      [-28, 3],
      [11, 51],
      [-10, 17],
      [-35, -54],
      [-43, 39],
      [-6, 4],
      [-16, 14],
      [-26, 22],
      [-48, 44]
    ],
    [
      [44623, 5046],
      [-3, 3],
      [0, 0],
      [-12, 10],
      [-3, 4],
      [-67, 59],
      [-30, 27],
      [-34, 29],
      [-125, 110],
      [-24, 21],
      [-45, 40],
      [-22, 20],
      [-35, 29],
      [-4, 3],
      [-51, 44],
      [-18, 15],
      [-60, 55],
      [-10, 9],
      [-28, 25],
      [-26, 23],
      [-8, 7],
      [-4, 4],
      [0, 0],
      [-35, 31],
      [-7, 6],
      [0, 0],
      [-12, 10],
      [-42, 37],
      [-8, 7],
      [0, 0],
      [-15, 13],
      [-16, 14],
      [0, 0],
      [-8, 6],
      [-66, 60],
      [-21, 18],
      [-34, 30],
      [-15, 13],
      [-42, 38],
      [-65, 59],
      [-13, 12],
      [-157, 142],
      [-172, 158],
      [-62, 57],
      [-34, 31],
      [-119, 107],
      [-62, 55],
      [-115, 101],
      [-120, 104],
      [-3, 3],
      [-10, 8],
      [-19, 16],
      [-72, 62],
      [-10, 9],
      [-51, 46],
      [-34, 31],
      [-133, 114],
      [-13, 12],
      [-70, 60],
      [-44, 42],
      [-64, 59],
      [-29, 26],
      [-46, 42],
      [-2, 2],
      [-96, 85],
      [-7, 6],
      [-38, 33],
      [-10, 8],
      [-29, 27],
      [-112, 103],
      [-1, 0],
      [-54, 48],
      [-359, 321],
      [-50, 45],
      [-96, 86],
      [-27, 33],
      [-58, 50],
      [-104, 92],
      [-208, 181],
      [-104, 88]
    ],
    [
      [42042, 9861],
      [3, -3],
      [17, 15],
      [136, 130],
      [123, 118],
      [45, 41],
      [220, 188],
      [80, 62],
      [226, 142],
      [98, 64],
      [15, 10],
      [46, 30],
      [67, 44],
      [32, 22]
    ],
    [
      [43150, 10724],
      [7, -22],
      [29, -49],
      [18, -149],
      [-5, -42],
      [-6, -10],
      [-2, -4],
      [-24, -45],
      [-3, -28],
      [2, -13],
      [6, -28],
      [14, -24],
      [45, -59],
      [30, -24],
      [63, -29],
      [54, -11],
      [14, 0],
      [33, 0],
      [36, 15],
      [64, 67],
      [26, 28],
      [44, 25],
      [42, 6],
      [157, -31],
      [52, -30],
      [86, -35],
      [37, -41],
      [96, -133],
      [44, -61],
      [80, -74],
      [11, -31],
      [7, -37],
      [11, -126],
      [-7, -80],
      [-1, -106],
      [6, -73],
      [24, -156],
      [3, -65],
      [0, -4],
      [-2, -56],
      [-17, -55],
      [-28, -48],
      [-2, -51],
      [6, -44],
      [-9, -34],
      [-18, -70],
      [0, -14],
      [26, -83],
      [36, -180],
      [12, -127],
      [6, -18],
      [15, -40],
      [22, -24],
      [78, -27],
      [28, -27],
      [11, -19],
      [1, -1],
      [40, -38],
      [68, -35],
      [28, -5],
      [17, 4],
      [45, 10],
      [112, 39],
      [38, 27],
      [19, 5],
      [60, -21],
      [28, -34],
      [22, -18],
      [28, -15],
      [79, -41],
      [33, -30],
      [12, -25],
      [84, -231],
      [8, -30],
      [32, -107],
      [22, -90],
      [5, -91],
      [2, -29],
      [11, -58],
      [33, -55],
      [53, -59],
      [51, -44],
      [0, 0],
      [77, -85],
      [73, -66],
      [41, -16],
      [16, -2],
      [6, 0],
      [34, -4],
      [39, -25],
      [36, -33],
      [53, -57],
      [100, -125],
      [0, 0],
      [29, -55],
      [34, -73],
      [32, -87],
      [28, -93],
      [0, 0],
      [52, -129],
      [1, -2],
      [34, -98],
      [0, -2],
      [49, -52],
      [82, -47],
      [19, -10],
      [35, -36],
      [196, -110],
      [109, -90],
      [6, -5],
      [23, -22],
      [57, -52],
      [7, -11],
      [17, -49],
      [10, -27],
      [2, -6],
      [49, -102],
      [2, -4],
      [30, -115],
      [1, -3],
      [9, -29],
      [11, -18],
      [21, -23],
      [61, -28],
      [56, -41],
      [28, -37],
      [93, -168],
      [7, -27],
      [-1, -55],
      [-8, -46],
      [-14, -36],
      [-11, -19],
      [-121, -124],
      [-19, -9],
      [-24, -3],
      [-76, 6],
      [-29, -8],
      [-33, -18],
      [-53, -41],
      [-103, -100],
      [-24, -6],
      [-29, 1],
      [-97, 29],
      [-38, 19],
      [-60, 30],
      [-24, 7],
      [-5, 2],
      [-22, -2],
      [-26, -9],
      [-30, -34],
      [-20, -43],
      [-14, -43],
      [-22, -61],
      [-9, -47],
      [-8, -40],
      [-1, -7],
      [-24, -37],
      [-43, -37],
      [0, -1],
      [-3, -2],
      [-5, -2],
      [-19, -10],
      [-9, -5],
      [-6, -3],
      [-21, -12],
      [-10, -8],
      [-17, -14],
      [-17, -21],
      [0, -1],
      [-13, -30],
      [-13, -47],
      [-9, -14],
      [-24, -18],
      [-133, -41],
      [-61, -36],
      [-172, -68],
      [-1, 0],
      [-23, -4],
      [-72, 15],
      [-33, -4],
      [-3, -1],
      [-56, -28],
      [-99, -62],
      [-22, -16],
      [0, 0],
      [-160, -114],
      [-61, -43]
    ],
    [
      [27364, 15982],
      [3, -19],
      [-112, -139],
      [-376, -465],
      [-143, -234],
      [-467, -768],
      [-688, -757]
    ],
    [
      [25581, 13600],
      [-29, 0],
      [-81, -31],
      [-293, -136],
      [-199, -109],
      [-577, -356],
      [-14, -8],
      [-336, -198],
      [-155, -98],
      [-174, -98],
      [-480, -197],
      [-76, -87],
      [-48, -29],
      [-109, -67]
    ],
    [
      [23010, 12186],
      [-115, -88],
      [-34, -17],
      [-86, -77],
      [-68, 153],
      [-404, -95],
      [-454, 292],
      [-56, -31],
      [-225, -124],
      [-284, -176],
      [-86, -64],
      [-91, -66],
      [-227, -167],
      [-281, 116],
      [-118, 49],
      [-142, 59],
      [-323, 134],
      [-280, 116],
      [-251, 102],
      [-3, -3]
    ],
    [
      [17509, 12220],
      [-14, 1],
      [-4, 22],
      [-27, 33],
      [-12, 29],
      [-50, 106],
      [-8, 26],
      [-16, 8],
      [-6, 16],
      [3, 23],
      [25, 38],
      [21, 8],
      [1, 17],
      [21, 18],
      [20, 36],
      [40, 15],
      [15, 29],
      [55, 14],
      [-2, 38],
      [12, 26],
      [-5, 17],
      [17, 7],
      [15, 32],
      [9, 0],
      [3, 24],
      [28, 21],
      [-10, 20],
      [10, 8],
      [-2, 33],
      [-9, 35],
      [30, 12],
      [8, 38],
      [0, 42],
      [11, 12],
      [50, 23],
      [19, 33],
      [24, 28],
      [35, -5],
      [14, 34],
      [53, 3],
      [-2, 16],
      [14, 17],
      [6, 28],
      [28, 24],
      [20, 58],
      [23, 11],
      [11, 16],
      [14, 17],
      [-5, 20],
      [6, 43],
      [-18, 58],
      [24, 11],
      [36, 32],
      [5, 33],
      [27, 27],
      [-7, 47],
      [13, 25],
      [11, 11],
      [23, 1],
      [21, 28],
      [60, -27],
      [15, -22],
      [33, -12],
      [19, 15],
      [1, 23],
      [26, 9],
      [7, 22],
      [24, 24],
      [27, 7],
      [7, -18],
      [26, 7],
      [9, -3],
      [19, 14],
      [19, 36],
      [-18, 33],
      [8, 15],
      [-4, 28],
      [-9, 8],
      [6, 50],
      [17, 29],
      [27, 0],
      [38, 9],
      [27, 14],
      [-3, 15],
      [-29, 25],
      [-38, -3],
      [-18, -12],
      [-25, 10],
      [19, 13],
      [-5, 22],
      [45, 24],
      [71, -16],
      [4, -22],
      [24, 23],
      [14, 32],
      [6, 47],
      [12, 8],
      [28, 8],
      [17, 26],
      [-3, 17],
      [-27, 35],
      [-23, 31],
      [-4, 5],
      [-13, 37],
      [33, 55],
      [-6, 24],
      [34, 49],
      [81, 55],
      [15, 19],
      [6, -12],
      [18, 5],
      [19, -15],
      [21, 1],
      [16, 15],
      [-1, 14],
      [12, -6],
      [21, 29],
      [14, -8],
      [15, 14],
      [16, -29],
      [56, 43],
      [0, 10],
      [16, -2],
      [36, 66],
      [-16, 0],
      [15, 29],
      [18, 21],
      [28, 6],
      [-6, 33],
      [3, 14],
      [28, -2],
      [16, 6],
      [28, 35],
      [-12, 16],
      [17, 14],
      [35, -9],
      [20, 4],
      [-6, 34],
      [-11, 20],
      [0, 23],
      [-14, 28],
      [-2, 49],
      [-13, 5],
      [-14, -2],
      [-26, -17],
      [-25, 2],
      [0, 27],
      [3, 48],
      [7, 15],
      [43, 5],
      [62, -25],
      [30, -25],
      [30, -9],
      [5, -91],
      [4, -2],
      [19, -1],
      [26, 15],
      [1, 29],
      [11, 21],
      [0, 37],
      [29, 67],
      [-1, 42],
      [22, 9],
      [9, -10],
      [14, -37],
      [0, -17],
      [-22, -33],
      [-25, -22],
      [5, -38],
      [37, -19],
      [-3, -33],
      [-18, -13],
      [1, -27],
      [18, -8],
      [34, -1],
      [41, 19],
      [9, -8],
      [-15, -40],
      [17, -16],
      [34, 11],
      [41, 27],
      [11, 30],
      [3, 31],
      [18, 8],
      [23, -17],
      [45, 29],
      [35, -14],
      [16, 11],
      [7, 20],
      [21, 17],
      [65, 5],
      [28, 19],
      [2, 29],
      [-27, 61],
      [-17, 20],
      [-7, 27],
      [-20, 27],
      [-57, 7],
      [-25, 25],
      [11, 14],
      [33, -8],
      [21, 35],
      [-19, 53],
      [12, 9],
      [34, -8],
      [13, 14],
      [14, 36],
      [-2, 20],
      [-22, 63],
      [-15, 24],
      [9, 12],
      [37, -15],
      [56, 3],
      [22, 15],
      [21, 28],
      [13, 9],
      [25, -34],
      [20, 0],
      [5, 15],
      [-6, 22],
      [-24, 28],
      [0, 42],
      [16, 8],
      [26, -12],
      [18, -1],
      [14, 23],
      [-4, 35],
      [-32, 47],
      [-15, 13],
      [-41, -7],
      [-22, 15],
      [-1, 18],
      [18, 40],
      [0, 12],
      [-17, 11],
      [-17, -1],
      [-30, 20],
      [4, 15],
      [31, 10],
      [7, 9],
      [-20, 28],
      [-28, -13],
      [-8, 4],
      [-21, 35],
      [-2, 20],
      [13, 32],
      [33, 5],
      [31, -22],
      [17, 6],
      [7, 19],
      [20, 16],
      [27, -2],
      [35, 15],
      [5, 29],
      [-12, 19],
      [-34, 33],
      [-12, 28],
      [37, 58],
      [-6, 23],
      [-15, 9],
      [-27, -13],
      [-34, -28],
      [-16, 5],
      [-9, 22],
      [-7, 71],
      [-13, 20],
      [-22, 2],
      [-30, -16],
      [-42, -7],
      [-30, 21],
      [19, 42],
      [29, 24],
      [2, 10],
      [-8, 31],
      [-19, 3],
      [-37, 18],
      [-29, 5],
      [-12, 25],
      [5, 6],
      [22, 30],
      [9, 35],
      [-4, 18],
      [-41, 70],
      [-50, 154],
      [-21, 55],
      [-5, 24],
      [-33, 68],
      [-3, 39],
      [60, 73],
      [28, 16],
      [31, -2],
      [17, -19],
      [9, -37],
      [7, -9],
      [30, -1],
      [15, 12],
      [9, 30],
      [-4, 44],
      [15, 29],
      [23, 8],
      [24, -5],
      [53, -49],
      [22, 4],
      [12, 18],
      [0, 25],
      [-12, 30],
      [-1, 32],
      [21, 22],
      [21, -3],
      [20, -12],
      [24, -6],
      [27, 5],
      [11, 20],
      [8, 115],
      [8, 26],
      [20, 14],
      [42, 0],
      [17, 13],
      [23, 57],
      [20, 26]
    ],
    [
      [35540, 21],
      [-7, 50],
      [19, 18],
      [47, 6],
      [29, -13],
      [20, -38],
      [24, 0],
      [9, 24],
      [-17, 53],
      [4, 25],
      [-7, 39],
      [6, 15],
      [37, 3],
      [14, 6],
      [41, -28],
      [-11, -51],
      [-10, -25],
      [26, -38],
      [22, -17],
      [28, 4],
      [0, 12],
      [15, 26],
      [26, 20],
      [33, 54],
      [0, 8],
      [-29, 36],
      [-26, 9],
      [-21, 23],
      [11, 36],
      [3, 35],
      [14, -3],
      [14, -29],
      [31, -3],
      [40, 25],
      [28, 34],
      [3, 33],
      [13, 31],
      [-8, 19],
      [-17, 15],
      [11, 34],
      [14, 26],
      [25, 14],
      [25, -2],
      [47, -20],
      [24, -6],
      [9, 5],
      [33, 53],
      [-9, 35],
      [-1, 3],
      [-2, 9],
      [-7, 23],
      [3, 11],
      [32, 46],
      [2, 16],
      [16, 43],
      [24, 5],
      [26, 19],
      [20, 23],
      [10, 66],
      [12, 12],
      [28, 14],
      [-13, 20],
      [32, 47],
      [-19, 11],
      [-20, 34],
      [-27, 16],
      [5, 22],
      [77, -24],
      [14, 18],
      [13, 36],
      [4, 21],
      [-2, 31],
      [6, 20],
      [34, -1],
      [9, 10],
      [-12, 21],
      [1, 21],
      [-10, 30],
      [-48, 67],
      [-2, 17],
      [6, 11],
      [37, -11],
      [23, -24],
      [26, 2],
      [26, 36],
      [8, 44],
      [51, 6],
      [-7, 27],
      [-5, 35],
      [2, 21],
      [-17, 19],
      [9, 10],
      [-16, 54],
      [1, 43],
      [-6, 11],
      [-9, -12],
      [-3, 16],
      [32, 51],
      [92, -21],
      [6, 20],
      [-7, 42],
      [5, 9],
      [10, 101],
      [11, 28],
      [2, 48],
      [20, 22],
      [37, -17],
      [-10, -14],
      [55, -41],
      [9, 27],
      [29, 31],
      [1, 14],
      [-13, 42],
      [-22, 27],
      [-10, 21],
      [14, 29],
      [-7, 8],
      [2, 29],
      [15, 36],
      [21, 19],
      [-8, 31],
      [-45, 51],
      [-12, -8],
      [2, 51],
      [-11, 15],
      [-13, 74],
      [16, 17],
      [-4, 39],
      [9, 24],
      [-18, 66],
      [11, 31],
      [-12, 29],
      [0, 19],
      [17, -5],
      [21, -19],
      [12, 8],
      [-3, 21],
      [33, 10],
      [18, 27],
      [9, -3],
      [12, -26],
      [8, -1],
      [5, 47],
      [-9, 26],
      [-24, 27],
      [-25, 22],
      [-17, 66],
      [-17, 10],
      [11, 18],
      [-29, 60],
      [25, 42],
      [11, 43],
      [5, 7],
      [25, 41],
      [-2, 45],
      [116, 245],
      [170, 349],
      [47, 95],
      [72, 146],
      [8, 25],
      [11, 110],
      [-14, 203],
      [-1, 34],
      [1, 137],
      [-48, 313],
      [-1, 8],
      [-2, 16],
      [-5, 33],
      [426, 245],
      [103, 72],
      [35, 19]
    ],
    [
      [39097, 6299],
      [35, -35],
      [15, -28],
      [41, -1],
      [33, 31],
      [44, 42],
      [39, 24],
      [58, 4],
      [38, -31],
      [3, -3],
      [2, -1],
      [1, -1],
      [25, -9],
      [45, 6],
      [37, -25],
      [14, -12],
      [3, -3],
      [76, -37],
      [50, -30],
      [46, -22],
      [21, -11],
      [27, -62],
      [31, -23],
      [14, 0],
      [42, 21],
      [19, 27],
      [1, 15],
      [-37, 62],
      [3, 29],
      [11, 15],
      [21, 12],
      [21, -1],
      [32, -17],
      [33, -133],
      [41, -138],
      [53, -93],
      [11, -55],
      [4, -9],
      [16, -33],
      [32, -37],
      [24, -14],
      [24, 1],
      [21, 18],
      [18, 26],
      [0, 51],
      [-19, 50],
      [7, 38],
      [27, 4],
      [33, -39],
      [49, -151],
      [11, -53],
      [15, -37],
      [17, -47],
      [4, -11],
      [5, -9],
      [18, -40],
      [19, -32],
      [42, -31],
      [21, -22],
      [26, -37],
      [12, -62],
      [4, -46],
      [-9, -66],
      [8, -43],
      [20, -22],
      [31, -5],
      [16, 15],
      [23, 76],
      [30, 50],
      [24, 14],
      [23, 0],
      [28, -11],
      [13, -21],
      [4, -22],
      [-7, -25],
      [-15, -30],
      [-43, -55],
      [-11, -27],
      [-7, -41],
      [13, -52],
      [5, -5],
      [4, -8],
      [20, -35],
      [48, -37],
      [22, -18],
      [36, -23],
      [2, -1],
      [4, 0],
      [2, 0],
      [85, 9],
      [45, 23],
      [25, 7],
      [39, -20],
      [49, -34],
      [3, -33],
      [-11, -30],
      [-55, -35],
      [-10, -22],
      [-8, -36],
      [22, -58],
      [41, -43],
      [17, -6],
      [-7, -37],
      [-2, -33],
      [49, -31],
      [2, -10],
      [3, -73],
      [126, 79],
      [23, -57],
      [34, 22],
      [60, 39],
      [52, 26],
      [20, -38],
      [19, -42],
      [15, -26],
      [41, -81],
      [20, -33],
      [14, -30],
      [91, -182],
      [211, 137],
      [45, -82]
    ],
    [
      [41818, 4172],
      [-97, -65],
      [-107, -71],
      [-42, -27],
      [-57, -37],
      [-16, -10],
      [-18, -11],
      [-20, -14],
      [-80, -52],
      [23, -45],
      [4, -11],
      [43, -83],
      [17, -35],
      [-13, -12],
      [-11, -11],
      [-128, -134],
      [-47, -46],
      [-162, -165],
      [-40, -39],
      [86, 1],
      [21, -11],
      [23, 13],
      [-5, -23],
      [9, -24],
      [13, -14],
      [-4, -47],
      [-215, -150],
      [-88, -60],
      [-232, -159],
      [-47, -32],
      [-21, -15],
      [-108, -76],
      [35, -63],
      [5, -52],
      [-4, -9],
      [-42, -27],
      [-2, 7],
      [-11, 33],
      [-32, -19],
      [4, -11],
      [-7, -5],
      [17, -34],
      [33, -62],
      [7, -11],
      [-9, -9],
      [-10, -7],
      [-11, 19],
      [-25, -16],
      [-48, 94],
      [-53, -33],
      [13, -25],
      [-27, -20],
      [3, -36],
      [13, -24],
      [-65, -43],
      [33, -62],
      [-79, -53],
      [-20, 40],
      [-22, -15],
      [16, -54],
      [-25, -15],
      [-1, -1],
      [-88, -63],
      [9, -39],
      [-16, -12],
      [25, -49],
      [-75, -53],
      [-16, 24],
      [-17, -9],
      [-22, -9],
      [20, -39],
      [-107, -79],
      [14, -32],
      [24, -28],
      [2, -29],
      [-18, -6],
      [-12, -27],
      [3, -17],
      [-42, -78],
      [2, -13],
      [21, -14],
      [33, -7],
      [21, -13],
      [1, -14],
      [-18, -18],
      [-6, -61],
      [-12, -30],
      [-11, -15],
      [0, -20],
      [23, -26]
    ],
    [
      [39923, 1418],
      [-7, -2],
      [-174, -38],
      [-142, -46],
      [-1, -1],
      [-54, -21],
      [-173, -87],
      [-145, -95],
      [-43, -27],
      [-123, -102],
      [-128, -128],
      [-19, -22],
      [-62, -73],
      [-77, -101],
      [-23, -35],
      [-41, -60],
      [-70, -124],
      [-12, -24],
      [-47, -101],
      [-47, -114],
      [-60, -185],
      [-120, -8],
      [-91, 1],
      [-85, 0],
      [-17, 0],
      [-241, 0],
      [-975, -3],
      [-153, 0],
      [-141, -1],
      [-2, 0],
      [-117, 5],
      [-118, -1],
      [-875, -4]
    ],
    [
      [40044, 1432],
      [-106, -12]
    ],
    [
      [39938, 1420],
      [26, 62],
      [9, 11],
      [20, 9],
      [21, -17],
      [13, -17],
      [17, -36]
    ],
    [
      [6687, 17533],
      [-46, 26],
      [4, 14],
      [1, 1],
      [0, 3],
      [1, 4],
      [0, 1],
      [-1, 1],
      [0, 2],
      [2, 2],
      [1, 2],
      [1, 2],
      [0, 1],
      [0, 1],
      [-6, 48],
      [25, 33],
      [32, -18],
      [25, -20],
      [27, 9],
      [24, 27],
      [33, -14],
      [23, 5],
      [7, 15],
      [24, -2],
      [2, -21],
      [22, 1],
      [0, 18],
      [39, 54],
      [-43, 50],
      [35, 48],
      [-21, 23],
      [156, 227],
      [-6, 432],
      [142, -1],
      [2, 161],
      [40, -1],
      [1, 124],
      [186, -1],
      [0, 172],
      [2, 155],
      [2, 209],
      [508, -6],
      [1, 180],
      [136, -1],
      [377, -1],
      [2, 612]
    ],
    [
      [18507, 18228],
      [0, -4],
      [706, -95],
      [457, -65]
    ],
    [
      [29676, 6112],
      [-14, -25],
      [-9, -12],
      [7, -48],
      [-38, -21],
      [-22, -21],
      [-36, -2],
      [-38, 26],
      [-37, -14],
      [-1, -1],
      [-28, -31],
      [-24, -4],
      [-26, 27],
      [-13, 46],
      [-31, 61],
      [-23, -16],
      [-23, 14],
      [-9, -6],
      [0, -14],
      [43, -100],
      [-18, -35],
      [-14, 23],
      [-12, 41],
      [-13, 1],
      [-14, -29],
      [6, -31],
      [-1, -38],
      [-26, -9],
      [-4, -33],
      [-14, -13],
      [-21, 18],
      [0, 33],
      [-30, 18],
      [-22, -12],
      [-22, -45],
      [4, -19],
      [-19, -14],
      [-8, -31],
      [-38, -9],
      [2, -22],
      [14, -9],
      [23, 11],
      [20, -5],
      [46, 12],
      [9, -9],
      [23, -23],
      [11, -30],
      [38, -30],
      [-8, -22],
      [-28, 4],
      [-4, -19],
      [13, -33],
      [-20, -26],
      [-19, 6],
      [-29, 39],
      [-35, 21],
      [-16, 3],
      [-9, -11],
      [-5, -45],
      [16, -28],
      [8, -30],
      [158, -137],
      [0, -23],
      [-26, 5],
      [-14, -15],
      [-43, -11],
      [-48, -21],
      [0, 0],
      [-1, 0],
      [-57, -12],
      [-36, 9],
      [-46, 27],
      [-28, -2],
      [-70, 21],
      [-28, -6],
      [-47, -19],
      [-33, 13],
      [-24, -27],
      [-44, 5],
      [-29, 13],
      [-11, 8],
      [-29, -20],
      [7, -31],
      [32, -19],
      [7, 4],
      [27, -4],
      [10, -17],
      [-2, -11],
      [-19, -22],
      [-7, -19],
      [-31, -15],
      [-20, 19],
      [-46, 19],
      [-51, -3],
      [-42, -19],
      [-44, -3],
      [-45, -50],
      [-3, 4],
      [-24, -10],
      [-58, -2],
      [-25, -30],
      [-49, 25],
      [-30, -23],
      [-26, -36],
      [-194, -206],
      [-1, -7],
      [-16, -12],
      [-121, -129],
      [-30, -32],
      [-402, -431],
      [-60, -64]
    ],
    [
      [24714, 2706],
      [1, 3],
      [137, 339],
      [-61, 53],
      [-1, 11],
      [-33, 81],
      [-42, 29],
      [-28, 62],
      [-37, -3],
      [-21, 20],
      [-49, 68],
      [-13, 28],
      [-20, 14],
      [-32, 36],
      [-32, 58],
      [-4, 38],
      [-39, 64],
      [-35, 75],
      [2, 6],
      [9, 42],
      [-80, 102],
      [-14, 31],
      [12, 37],
      [2, 4],
      [5, 12],
      [-11, 15],
      [-13, 5],
      [10, -20],
      [-9, -5],
      [-5, 9],
      [-8, -7],
      [-11, 20],
      [-9, -1],
      [-11, -10],
      [-7, 10],
      [0, 0],
      [-1, 1],
      [-12, 19],
      [-8, 5],
      [-30, 12],
      [10, 66],
      [7, 61],
      [-20, 47],
      [5, 48],
      [-21, 38],
      [-57, -5],
      [16, 49],
      [-18, 17],
      [15, 17],
      [-10, 9],
      [-28, 1],
      [-5, 10],
      [37, 15],
      [0, 11],
      [-21, 20],
      [9, 20],
      [-36, 29],
      [31, 11],
      [0, 31],
      [-16, 9],
      [-24, -5],
      [-18, 13],
      [-4, 25],
      [-13, 22],
      [-21, 9],
      [-34, -22],
      [-12, 7],
      [-7, 45],
      [15, 29],
      [14, 29],
      [-10, 26],
      [-15, 37],
      [-13, 70],
      [-4, 64],
      [-11, 4],
      [-1, 24],
      [-15, 14],
      [-16, 36],
      [-51, 22],
      [-39, 46],
      [-25, 35],
      [-63, -6],
      [-21, 18],
      [6, 39],
      [-7, 37],
      [-23, 22],
      [-27, 46],
      [-18, 6],
      [-22, 43],
      [-36, 21],
      [-43, 145],
      [-3, 20],
      [5, 41],
      [-22, 27],
      [-49, 113],
      [-41, 82],
      [20, 16],
      [84, 104]
    ],
    [
      [23550, 5777],
      [47, -89],
      [28, -71],
      [54, 39],
      [42, 42],
      [30, 54],
      [77, 89],
      [17, 33],
      [71, 66],
      [26, 16],
      [21, 26],
      [46, 37],
      [11, 5],
      [110, 4],
      [51, -4],
      [64, 48],
      [20, 34],
      [188, 138],
      [28, 19],
      [53, 52],
      [25, 15],
      [28, 28],
      [12, 6],
      [64, 60],
      [31, 24],
      [47, 49],
      [55, 69],
      [69, 67],
      [22, 18],
      [29, 34],
      [62, 61],
      [47, 41],
      [50, 52],
      [104, 88],
      [17, 10],
      [90, 70],
      [49, 36],
      [40, 19],
      [60, 41],
      [97, 45],
      [34, 16],
      [48, 7],
      [7, -3],
      [13, -17],
      [-1, -19],
      [-17, -51],
      [-11, -18],
      [-29, -32],
      [-66, -50],
      [-48, -44],
      [-66, -53],
      [-71, -73],
      [-39, -31],
      [-19, -19],
      [-52, -67],
      [-10, -25],
      [-4, -39],
      [-47, -31],
      [-24, -32],
      [-28, -68],
      [14, -31],
      [47, -8],
      [107, 21],
      [19, 11],
      [122, 59],
      [106, 74],
      [48, 42],
      [44, 28],
      [52, 56],
      [52, 38],
      [58, 54],
      [48, 35],
      [52, 30],
      [42, 2],
      [-2, -36],
      [-37, -75],
      [-22, -33],
      [-6, -40],
      [8, -20],
      [27, -22],
      [35, -37],
      [40, -34],
      [11, -5],
      [35, 3],
      [54, 18],
      [56, 26],
      [57, 18],
      [90, 37],
      [86, 33],
      [229, 51],
      [24, 15],
      [37, -8],
      [40, 4],
      [149, 26],
      [50, 13],
      [20, 3],
      [135, 5],
      [45, 4],
      [113, 18],
      [24, 0],
      [42, 8],
      [13, 8],
      [68, 10],
      [10, 6],
      [111, 35],
      [27, -1],
      [22, 6],
      [0, 10],
      [35, 7],
      [87, 6],
      [52, 16],
      [30, -1],
      [44, 21],
      [100, 10],
      [76, 13],
      [65, -2],
      [30, 1],
      [26, 13],
      [48, 1],
      [16, 4],
      [81, 9],
      [140, -6],
      [50, 4],
      [30, 6],
      [77, 10],
      [229, 52],
      [72, 24],
      [152, 60],
      [77, 39],
      [191, 96],
      [10, 5]
    ],
    [
      [29222, 7344],
      [20, -40],
      [2, -29],
      [-27, -86],
      [0, -1],
      [-9, -18],
      [-44, -136],
      [-9, -31],
      [-9, -112],
      [14, -54],
      [1, -3],
      [4, -8],
      [15, -30],
      [31, -34],
      [18, -69],
      [2, -31],
      [0, -1],
      [0, -3],
      [43, -77],
      [5, -6],
      [0, -5],
      [1, -1],
      [26, -44],
      [56, -71],
      [44, -44],
      [0, 0],
      [1, 0],
      [0, -1],
      [1, -1],
      [7, -5],
      [4, -4],
      [5, -8],
      [8, -4],
      [1, -1],
      [0, 0],
      [1, 0],
      [-2, -3],
      [13, -6],
      [11, -7],
      [1, 0],
      [9, -6],
      [2, -1],
      [2, -1],
      [2, -1],
      [0, -2],
      [2, -2],
      [3, -1],
      [4, -4],
      [6, -4],
      [2, -2],
      [11, -9],
      [15, -12],
      [0, 0],
      [1, -1],
      [0, 0],
      [5, -7],
      [27, -48],
      [7, -13],
      [3, -3],
      [1, -1],
      [0, -2],
      [1, 0],
      [0, -1],
      [22, -28],
      [25, -38],
      [69, -71]
    ],
    [
      [29222, 7344],
      [-15, 39],
      [-35, 57],
      [-41, 55],
      [-9, 30],
      [-10, 55],
      [-29, 79],
      [-4, 9],
      [-8, 9],
      [-32, 17],
      [-59, 1],
      [-56, 7],
      [-44, -5],
      [-32, 4],
      [-77, -21],
      [-50, 3],
      [-42, 9],
      [-36, -8],
      [-85, -1],
      [-92, 23],
      [-102, 94],
      [-12, 106],
      [-38, 71],
      [-7, 31],
      [-4, 11],
      [-7, 30],
      [5, 52],
      [20, 38],
      [38, 43],
      [44, 24],
      [4, 12],
      [19, 18],
      [10, 36],
      [2, 25],
      [-10, 46],
      [-24, 53],
      [-9, 61],
      [6, 54],
      [106, 20],
      [43, 83],
      [27, 25],
      [20, 11],
      [19, 15],
      [24, 47],
      [38, 51],
      [60, 51],
      [21, 10],
      [7, 10],
      [9, 7],
      [5, 3],
      [5, 1],
      [9, 2],
      [54, 33],
      [36, 35],
      [26, 36],
      [31, 84],
      [7, 58],
      [0, 89],
      [-6, 45],
      [-29, 73],
      [-90, 53],
      [-40, 31],
      [-20, 40],
      [-19, 18],
      [-85, 148],
      [-5, 21],
      [-5, 104],
      [4, 29],
      [30, 55],
      [7, 87],
      [-62, 219],
      [-30, 51],
      [-8, 30],
      [4, 34],
      [-8, 6],
      [8, -2],
      [16, 54],
      [21, 39],
      [34, 41],
      [57, 41],
      [33, 23],
      [-2, -5],
      [25, 16],
      [39, 37],
      [37, 44],
      [24, 42],
      [29, 84],
      [6, 35],
      [0, 86],
      [-4, 38],
      [5, 60],
      [10, 40],
      [7, 49],
      [12, 12]
    ],
    [
      [28943, 10960],
      [101, -187],
      [27, -8],
      [62, -34],
      [17, -18],
      [28, -44],
      [14, -7],
      [7, 6],
      [-10, 34],
      [-17, 28],
      [4, 11],
      [33, 2],
      [27, 11],
      [42, 2],
      [38, 8],
      [37, -17],
      [64, -5],
      [7, 3],
      [3, 31],
      [-14, 17],
      [9, 24],
      [32, 18],
      [24, 2],
      [17, -11],
      [72, -7],
      [21, 14],
      [2, 30],
      [2, 42],
      [29, 44],
      [19, 3],
      [22, -12],
      [40, -7],
      [63, 0],
      [64, -6],
      [33, 10],
      [27, 22],
      [7, 21],
      [36, 50],
      [18, 7],
      [22, -12],
      [75, -3],
      [17, 7],
      [8, 13],
      [2, 86],
      [34, 52],
      [26, 11],
      [13, -24],
      [22, -7],
      [29, -36],
      [-1, -11],
      [35, 0],
      [37, 11],
      [10, 15],
      [51, 36],
      [13, -4],
      [53, 15],
      [20, 0],
      [51, 13],
      [38, 1],
      [17, 9],
      [40, 53],
      [47, 20],
      [22, -4],
      [54, 6],
      [32, -13],
      [47, -10],
      [22, 4],
      [17, 40],
      [14, 20],
      [38, 15],
      [78, -51],
      [13, 4],
      [6, 28]
    ],
    [
      [30952, 11321],
      [92, -82],
      [3, -3],
      [407, -376],
      [136, -127],
      [87, -83],
      [20, -18],
      [264, -245],
      [62, -55],
      [55, -51],
      [142, -130],
      [79, -72]
    ],
    [
      [32048, 5754],
      [-5, -14],
      [-42, -15],
      [-3, 8],
      [-23, -9],
      [-30, 8],
      [-13, -2],
      [-11, -15],
      [-5, -30],
      [-10, 0],
      [-17, -17],
      [-16, 12],
      [-12, -2],
      [-55, -19],
      [-45, -5],
      [-12, 14],
      [-27, 5],
      [-10, -16],
      [-32, -29],
      [-10, -10],
      [6, -18],
      [-20, -18],
      [-10, -22],
      [-29, -16],
      [-13, 7],
      [-35, -22],
      [-7, 3],
      [-47, -92],
      [-32, -7],
      [-19, -40],
      [-18, 6],
      [-21, -20],
      [0, 0],
      [-1, -1],
      [-6, -7],
      [-73, 13],
      [-16, -25],
      [-48, 14],
      [-9, -20],
      [-19, -4],
      [-16, -1],
      [-3, -21],
      [-49, -46],
      [18, -36],
      [-29, -1],
      [-18, -16],
      [-7, -51],
      [-27, 2],
      [-2, 24],
      [-19, 9],
      [-30, -28],
      [-26, -16],
      [1, 50],
      [-14, 21],
      [7, 27],
      [-6, 11],
      [-6, 3],
      [-41, -9],
      [14, -60],
      [-4, -19],
      [-23, -20],
      [-1, -32],
      [-6, -8],
      [-32, -8],
      [-15, -18],
      [-36, -71],
      [30, -22],
      [-24, -8],
      [-10, -7],
      [-5, -9],
      [-19, -12],
      [-9, 2],
      [-10, -12],
      [-47, -137]
    ],
    [
      [30789, 4830],
      [-42, 23],
      [-19, -1],
      [-28, 10],
      [-38, 31],
      [-45, 57],
      [-12, 26],
      [1, 17],
      [-12, 101],
      [-1, 50],
      [-20, 116],
      [-4, 80],
      [-2, 57],
      [-14, 76],
      [-20, 32],
      [-25, 12],
      [-50, 21],
      [-10, 8],
      [-29, 23],
      [-54, 33],
      [-12, 13],
      [-42, 30],
      [-43, 40],
      [-14, 7],
      [-10, 16],
      [-26, 21],
      [-27, 33],
      [-42, 33],
      [-45, 7],
      [-11, 1],
      [-5, -2],
      [0, 1],
      [-109, 8],
      [-29, 15],
      [-30, 30],
      [-11, 33],
      [-22, 82],
      [-3, 23],
      [-50, 62],
      [-77, 27],
      [-81, 30]
    ],
    [
      [39938, 1420],
      [-5, 0],
      [-10, -2]
    ],
    [
      [41818, 4172],
      [8, 8],
      [12, -14],
      [15, -24],
      [59, -123],
      [58, -106],
      [24, -46],
      [28, -54],
      [32, -60],
      [26, -50],
      [13, -26],
      [7, -14],
      [22, -42],
      [16, -33],
      [8, -11],
      [40, 26],
      [35, 17],
      [6, -11],
      [0, -2],
      [10, -16],
      [0, -9],
      [4, -9],
      [9, -16],
      [12, -20],
      [7, -8],
      [3, -4],
      [12, -20],
      [1, -4],
      [8, -11],
      [2, -5],
      [6, -10],
      [15, -29],
      [9, -17],
      [6, -10],
      [0, -1],
      [14, -26],
      [10, -18],
      [0, -2],
      [0, 0],
      [16, -29],
      [19, -31],
      [10, -17],
      [21, -35],
      [21, -31],
      [2, -4],
      [10, -20],
      [20, -40],
      [30, -62]
    ],
    [
      [42504, 3103],
      [-31, -24],
      [13, -31],
      [17, -20],
      [2, -4],
      [6, -3],
      [2, -9],
      [40, -11],
      [25, -28],
      [15, -11],
      [41, 12],
      [27, -31],
      [24, 20],
      [23, -2],
      [26, -14],
      [3, -15],
      [-2, -21],
      [-5, -10],
      [-18, -14],
      [11, -23],
      [4, -3],
      [-2, -18],
      [-13, -23],
      [-3, -6],
      [0, -4],
      [-4, -9],
      [1, -6],
      [7, -36],
      [6, -22],
      [22, -33],
      [2, -4],
      [0, -2],
      [28, -13],
      [2, 0],
      [2, -1],
      [23, -2],
      [2, -25],
      [3, -24],
      [22, 5],
      [16, -12],
      [-15, -36],
      [-1, -4],
      [0, -4],
      [-4, -14],
      [-37, 11],
      [-14, -32],
      [-6, -10],
      [8, -7],
      [0, -3],
      [0, -22],
      [-20, -35],
      [-12, -25],
      [0, -3],
      [-3, -6],
      [2, -30],
      [0, -2],
      [-1, 0],
      [2, -3],
      [0, -3],
      [0, -9],
      [1, -8],
      [2, -3],
      [-1, -37],
      [-36, -45],
      [11, -21],
      [-19, -21],
      [-8, -12],
      [18, -15],
      [-35, -58],
      [4, -10],
      [-18, -37],
      [6, -10],
      [-20, -29],
      [-22, -8],
      [-4, -39],
      [-21, -7],
      [17, -27],
      [-15, -12],
      [19, -29],
      [-17, -2],
      [14, -65],
      [1, -2],
      [0, -1],
      [10, 0],
      [63, -6],
      [41, 6],
      [13, -17],
      [52, -33],
      [44, 55],
      [41, -1],
      [50, -12],
      [33, -5],
      [32, 8],
      [0, -13],
      [-2, -47],
      [37, -50],
      [5, -15]
    ],
    [
      [43036, 1761],
      [-83, -56],
      [-113, -54],
      [-68, -25],
      [-201, -55],
      [-24, -7],
      [-131, -6],
      [-49, -2],
      [-66, 9],
      [-66, 8],
      [-56, -2],
      [-16, -1],
      [-38, -1],
      [-58, -10],
      [-90, -34],
      [-2, -1],
      [-103, -75],
      [-12, -12],
      [-97, -102],
      [-27, -29],
      [-5, -5],
      [-25, -24],
      [-31, -31],
      [-30, -30],
      [-59, -57],
      [-7, -7],
      [-64, -57],
      [-43, -37],
      [-91, -69],
      [-106, 90],
      [-73, 47],
      [-135, 87],
      [-10, 5],
      [-39, 22],
      [-29, 15],
      [-1, 0],
      [-73, 33],
      [-71, 31],
      [-58, 21],
      [-38, 13],
      [-47, 17],
      [-1, 0],
      [-157, 36],
      [-170, 23],
      [-12, 0],
      [-85, 3],
      [-155, 6],
      [-76, -5],
      [-1, -1]
    ],
    [
      [7369, 27501],
      [-2, -714],
      [0, -112],
      [-1, -176],
      [0, -101],
      [-1, -142],
      [-1, -155],
      [-5, -397]
    ],
    [
      [5, 25698],
      [0, 162],
      [0, 533],
      [-1, 265],
      [1, 179],
      [0, 74],
      [-1, 314],
      [0, 17],
      [0, 0],
      [0, 0],
      [7, 3],
      [45, 23],
      [256, 127],
      [18, 9],
      [38, 19],
      [209, 104],
      [107, 53],
      [0, 1],
      [87, 29],
      [122, 43],
      [5, 2],
      [15, 8],
      [4, 2],
      [171, 87],
      [59, 30],
      [43, 22],
      [0, 0],
      [10, -2],
      [3, 2],
      [54, 38],
      [3, 2],
      [10, 6],
      [27, 7],
      [6, 1],
      [18, 5],
      [33, 8],
      [30, 7],
      [4, 2],
      [6, 2],
      [16, 8],
      [7, 3],
      [7, 3],
      [2, 1],
      [8, 4],
      [5, 2],
      [11, 5],
      [8, 4],
      [23, 11],
      [37, 17],
      [21, 9],
      [77, 45],
      [44, 25],
      [3, 2],
      [87, 50],
      [23, 14],
      [19, 10],
      [7, 4],
      [10, 6],
      [2, 1],
      [131, 85],
      [225, 147],
      [122, 79],
      [47, 30],
      [10, 7],
      [18, 10],
      [14, 8],
      [117, 67],
      [26, 15],
      [66, 38],
      [55, 31],
      [11, 6],
      [37, 21],
      [60, 47],
      [5, 4],
      [28, 22],
      [19, 15],
      [62, 48],
      [4, 3],
      [2, 1],
      [1, 2],
      [4, 4],
      [25, 28],
      [6, 7],
      [7, 7],
      [48, 54],
      [4, 6],
      [2, 6],
      [2, 3],
      [68, 200],
      [40, 118],
      [33, 97],
      [47, 77],
      [106, 121],
      [66, 23],
      [61, 22],
      [27, 9],
      [45, 16],
      [35, 13],
      [11, -3],
      [79, -21],
      [28, -27],
      [2, -2],
      [2, -2],
      [-2, -2],
      [-10, -12],
      [-4, -4],
      [-35, -41],
      [-2, -2],
      [7, -12],
      [56, -84],
      [1, -2],
      [1, -2],
      [-1, -1],
      [-37, -31],
      [-14, -11],
      [0, -1],
      [-3, -3],
      [20, -43],
      [8, -5],
      [27, -17],
      [46, -7],
      [39, -7],
      [3, 0],
      [0, 0],
      [17, 11],
      [28, 18],
      [47, 32],
      [39, 26],
      [24, 16],
      [2, 2],
      [72, 48],
      [30, 19],
      [34, 23],
      [3, 2],
      [28, 19],
      [59, 39],
      [30, 20],
      [63, 42],
      [29, 19],
      [17, 11],
      [8, 6],
      [44, 29],
      [5, 3],
      [4, 3],
      [2, 2],
      [36, 27],
      [0, 0],
      [1, 1],
      [43, 33],
      [97, 74],
      [1, 1],
      [51, 39],
      [86, 65],
      [77, 59],
      [75, 57],
      [3, 1],
      [26, 4],
      [31, 5],
      [14, 8],
      [59, 36],
      [2, 1],
      [61, 36],
      [25, 15],
      [23, 14],
      [1, 1],
      [41, 33],
      [80, 66],
      [10, 5],
      [128, 64],
      [10, 4],
      [5, 2],
      [55, 15],
      [65, 19],
      [34, 10],
      [30, 8],
      [58, 39],
      [47, 31],
      [35, 23],
      [193, 127],
      [36, 24],
      [5, 3],
      [30, 17],
      [155, 88],
      [111, 63],
      [0, -7],
      [0, -216],
      [-2, -100],
      [0, -26],
      [3, -691],
      [-1, -48],
      [0, -77],
      [2, -128],
      [-1, -89],
      [0, -56],
      [-2, -235],
      [3, -147],
      [0, -2],
      [0, -393],
      [-1, -536],
      [0, -275],
      [4, -241],
      [0, 0],
      [1, 0],
      [468, 2],
      [270, 1],
      [364, -4],
      [0, 1],
      [117, -1]
    ],
    [
      [4894, 13],
      [42, 71],
      [10, 26],
      [29, 54],
      [22, 71],
      [0, 46],
      [-30, 53],
      [-48, 51],
      [-32, 13],
      [-44, 8],
      [-32, 17],
      [-30, 27],
      [-28, 59],
      [-9, 34],
      [14, 81],
      [-9, 42],
      [-2, 81],
      [15, 38],
      [26, 17],
      [57, 3],
      [45, 8],
      [8, 2],
      [9, 5],
      [5, 3],
      [19, 15],
      [17, 22],
      [7, 18],
      [0, 15],
      [-13, 70],
      [-27, 64],
      [-19, 28],
      [-38, 75],
      [-5, 27],
      [-4, 189],
      [-6, 31],
      [-7, 22],
      [-12, 35],
      [-27, 15],
      [-42, 7],
      [-26, 15],
      [-16, 27],
      [1, 27],
      [18, 24],
      [51, 39],
      [18, 16],
      [6, 5],
      [19, 39],
      [-2, 29],
      [-25, 49],
      [0, 1],
      [-3, 6],
      [-20, 56],
      [25, 47],
      [65, 38],
      [9, 6],
      [13, 12],
      [13, 45],
      [-15, 55],
      [-31, 54],
      [-11, 28],
      [-32, 87],
      [-18, 41],
      [-1, 8],
      [-8, 58],
      [18, 57],
      [14, 27],
      [19, 36],
      [0, 46],
      [-32, 56],
      [-42, 55],
      [-7, 12],
      [-24, 41],
      [-52, 95],
      [-57, 71],
      [-32, 32],
      [-45, 28],
      [-48, 16],
      [-42, 4],
      [-32, -5],
      [-41, -14],
      [-42, -24],
      [-50, -26],
      [-36, -3],
      [-30, 16],
      [-52, 49],
      [-19, 21],
      [-14, 26],
      [-6, 26],
      [-5, 57],
      [-1, 66],
      [3, 34],
      [10, 38],
      [27, 37],
      [47, 31],
      [16, 7]
    ],
    [
      [4230, 3180],
      [13, 1],
      [34, 13],
      [11, 25],
      [-4, 49],
      [-12, 45],
      [-11, 34],
      [-12, 95],
      [6, 28],
      [19, 25],
      [61, 44],
      [85, 9],
      [26, 0],
      [17, -9],
      [23, -22],
      [27, -40],
      [34, -96],
      [18, -36],
      [17, -21],
      [12, -7],
      [52, -5],
      [27, 9],
      [41, 26],
      [31, 29],
      [9, 33],
      [4, 10],
      [25, 104],
      [41, 52],
      [31, 22],
      [54, 38],
      [33, 11],
      [48, 7],
      [72, -6],
      [46, 6],
      [37, 25],
      [42, 44],
      [31, 66],
      [-7, 37],
      [-13, 17],
      [-17, 12],
      [-34, 25],
      [-25, 24],
      [-30, 50],
      [1, 24],
      [17, 31],
      [40, 38],
      [28, 32],
      [17, 37],
      [-6, 51],
      [-34, 36],
      [0, 0],
      [-2, 1],
      [-41, 18],
      [-4, 1],
      [-17, 3],
      [-24, 4],
      [-30, 12],
      [-24, 28],
      [-3, 29],
      [19, 29],
      [24, 17],
      [28, 6],
      [68, -7],
      [55, -20],
      [45, -28],
      [12, -5],
      [37, -3],
      [31, 7],
      [48, 20],
      [22, 9],
      [64, 38],
      [25, 29],
      [2, 2],
      [1, 1],
      [21, 48],
      [7, 33],
      [-13, 52],
      [-15, 37],
      [-19, 61],
      [-33, 110],
      [-9, 22],
      [-40, 38],
      [-41, 21],
      [-24, 19],
      [-10, 6],
      [-79, 58],
      [-28, 13]
    ],
    [
      [5208, 4911],
      [8, 16],
      [10, 13],
      [48, -14],
      [52, 0],
      [19, 1],
      [18, 0],
      [0, 0],
      [2, 0],
      [1, 0],
      [23, -2],
      [26, 0],
      [72, 3],
      [161, -2],
      [12, -1],
      [24, 1],
      [309, -1],
      [240, 3],
      [44, 1],
      [9, -2],
      [2, -9],
      [35, -26],
      [41, -51],
      [58, -5],
      [27, 30],
      [17, -23],
      [30, -51],
      [-36, -30],
      [1, -15],
      [32, 3],
      [13, -7],
      [15, -22],
      [25, -9],
      [9, -20],
      [34, -13],
      [30, 23],
      [10, 11],
      [28, -9],
      [36, 20],
      [8, 14],
      [22, 10],
      [44, 4],
      [11, -61],
      [35, -18],
      [19, -2],
      [11, -15],
      [32, 7],
      [34, -21],
      [11, -22],
      [-4, -28],
      [-15, -18],
      [1, -19],
      [18, 3],
      [19, -10],
      [4, -25],
      [14, -2],
      [19, 34],
      [17, -9],
      [24, -35],
      [-4, -35],
      [5, -18],
      [49, -20],
      [27, 22],
      [31, -17],
      [-24, -43],
      [12, -10],
      [32, -9],
      [22, 36],
      [23, 13],
      [19, -3],
      [35, 30],
      [3, 33],
      [32, 32],
      [10, -22],
      [49, -18],
      [13, 26],
      [24, -12],
      [17, -1],
      [35, -18],
      [11, -40],
      [-6, -18],
      [21, -21],
      [-15, -16],
      [75, -11],
      [5, 5],
      [4, 40],
      [-7, 29],
      [2, 46],
      [4, 18],
      [22, 18],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [4, 2],
      [18, 18],
      [12, 18],
      [-12, 22],
      [12, 26],
      [50, 41],
      [4, -14],
      [29, -11],
      [13, 9],
      [13, 13],
      [45, 10],
      [27, -13],
      [19, 3],
      [-4, 16],
      [14, 35],
      [4, 26],
      [22, 15],
      [49, -27],
      [10, -4],
      [17, 20],
      [38, -1],
      [13, 26],
      [-9, 45],
      [5, 38],
      [23, 43],
      [21, 18],
      [0, 20],
      [12, 12],
      [25, -5],
      [9, -13],
      [18, -51],
      [5, 4],
      [77, 103],
      [-4, 16],
      [36, 32],
      [18, 3],
      [67, 62],
      [51, 7],
      [20, -10],
      [38, 2],
      [29, 24],
      [3, 3],
      [7, -2],
      [1, 2],
      [9, 2],
      [0, -2],
      [33, -6],
      [19, -19],
      [55, -32],
      [20, -22],
      [48, -12],
      [40, -8],
      [40, -36],
      [36, -22],
      [-1, -43],
      [38, -69],
      [19, -34],
      [26, -28],
      [68, -30],
      [46, -27],
      [19, -21],
      [29, -40],
      [17, -18],
      [89, -29],
      [23, 5],
      [34, -90],
      [32, -53],
      [23, -17],
      [68, -46],
      [38, -20],
      [36, -28],
      [46, -16],
      [24, -17],
      [33, -34],
      [17, -10],
      [22, -10],
      [31, -65],
      [19, -68],
      [40, -150],
      [9, -52],
      [8, -4],
      [-3, -22],
      [8, -15],
      [25, -13],
      [47, -5],
      [23, -11],
      [44, -2],
      [69, 39],
      [31, 6],
      [18, -15],
      [133, -32]
    ],
    [
      [9940, 3869],
      [-21, -48],
      [-29, -54],
      [-14, -26],
      [-9, -14],
      [-22, -42],
      [-161, -306],
      [-42, -85],
      [-137, -281],
      [-70, -137],
      [-63, -125],
      [-154, -306],
      [-130, -264],
      [-150, -556],
      [-2, -8],
      [35, -26],
      [28, -28],
      [51, -22],
      [20, -17],
      [59, -32],
      [20, -34],
      [13, -12],
      [36, -15],
      [30, -25],
      [0, -33],
      [-14, -50],
      [9, -29],
      [7, -2],
      [49, 13],
      [15, -2],
      [14, -9],
      [35, -52],
      [13, -26],
      [5, -63],
      [-3, -19],
      [12, -85],
      [-17, -34],
      [-22, -30],
      [-1, -38],
      [5, -29],
      [25, -70],
      [22, -19],
      [34, -5],
      [32, 5],
      [23, -10],
      [2, -13],
      [-9, -26],
      [-17, -24],
      [-18, -12],
      [-26, 5],
      [-14, 22],
      [-69, 25],
      [-49, 41],
      [-31, 11],
      [-8, -19],
      [-1, -26],
      [-8, -35],
      [-20, -14],
      [-38, 22],
      [-30, 2],
      [-16, -11],
      [-3, -11],
      [11, -25],
      [19, -29],
      [92, -58],
      [13, -36],
      [0, -16],
      [-15, -32],
      [-17, -13],
      [-30, -39],
      [-21, -6],
      [-78, -38],
      [-11, -32],
      [2, -15],
      [15, -31],
      [15, -17],
      [18, -57],
      [-3, -29],
      [-34, -8],
      [-49, 5],
      [-29, -12],
      [-8, -11],
      [-9, -56],
      [0, -18],
      [31, -17],
      [34, 7],
      [27, -12],
      [14, 11],
      [35, -17],
      [17, -33],
      [8, -34],
      [-2, -27],
      [-22, -41]
    ],
    [
      [9139, 20],
      [-682, -5],
      [-389, -2],
      [-193, -1],
      [-485, 4],
      [-19, 1],
      [-880, -4],
      [-362, -1],
      [-722, -1],
      [-2, 0],
      [-21, 0],
      [-14, 0],
      [-476, 2]
    ],
    [
      [21525, 4124],
      [18, 8],
      [7, 8],
      [17, 28],
      [135, 329],
      [119, 293],
      [98, 189],
      [22, 75],
      [65, 171],
      [71, 169],
      [121, 239],
      [107, 211],
      [148, 240],
      [100, 161],
      [109, 154],
      [42, 33],
      [45, 44],
      [21, 25],
      [21, 33],
      [43, 27]
    ],
    [
      [23087, 6878],
      [62, -113],
      [-1, -27],
      [38, -45],
      [25, -47],
      [-116, -144],
      [-3, -13],
      [28, -67],
      [18, 0],
      [15, 15],
      [23, 9],
      [60, 41],
      [19, 3],
      [32, -10],
      [12, -10],
      [5, -25],
      [-28, -58],
      [-12, -14],
      [30, -88],
      [7, -21],
      [-16, -51],
      [-12, -17],
      [-10, -55],
      [1, -30],
      [19, -46],
      [14, 16],
      [5, -15],
      [15, 8],
      [1, -15],
      [4, -46],
      [24, -6],
      [123, 119],
      [28, 22],
      [41, 40],
      [26, 7],
      [31, -6],
      [21, -36],
      [31, -19],
      [-17, -39],
      [0, -228],
      [-2, -6],
      [-9, -13],
      [-69, -71]
    ],
    [
      [24809, 3],
      [-79, 0],
      [-101, 0],
      [-116, 0],
      [-6, 0],
      [-21, 0],
      [-227, 1],
      [-50, 0],
      [-11, 0],
      [-70, 1],
      [-501, 3],
      [-522, 4],
      [-22, 0],
      [-18, 1],
      [-316, 0],
      [-86, 0],
      [0, 0],
      [-69, 3],
      [-86, 1],
      [0, 0],
      [-89, 1],
      [-114, 1],
      [-2, 0],
      [-174, 2],
      [-467, 6],
      [-145, 1],
      [-75, 1],
      [-508, 1],
      [-103, 0],
      [-369, 0],
      [-633, 0],
      [-17, 0],
      [-189, 0]
    ],
    [
      [5, 2925],
      [10, 16],
      [31, -41],
      [35, -10],
      [13, -23],
      [60, -44],
      [-4, 28],
      [13, 18],
      [27, 12],
      [28, 2],
      [26, 33],
      [15, 0],
      [9, -23],
      [-27, -25],
      [1, -36],
      [26, 3],
      [32, -11],
      [22, -14],
      [40, -7],
      [27, 30],
      [41, 1],
      [6, 26],
      [-34, 44],
      [5, 16],
      [49, -11],
      [27, 17],
      [13, 21],
      [-19, 22],
      [-2, 18],
      [40, 25],
      [23, 47],
      [9, -2],
      [11, -28],
      [-1, -28],
      [11, -20],
      [13, -2],
      [10, 54],
      [23, 17],
      [2, 19],
      [-11, 16],
      [18, 7],
      [19, -7],
      [18, 20],
      [40, 3],
      [31, -19],
      [31, -46],
      [7, 0],
      [17, 2],
      [24, 39],
      [20, -2],
      [37, 21],
      [50, -3],
      [41, 24],
      [30, -12],
      [12, 2],
      [6, 16],
      [0, 52],
      [20, 22],
      [17, 32],
      [31, 15],
      [33, 31],
      [20, 11],
      [17, 21],
      [33, 9],
      [20, 17],
      [26, 7],
      [41, -8],
      [25, 10],
      [53, -1],
      [21, 35],
      [29, 10],
      [38, -5],
      [9, 14],
      [76, 23],
      [26, 22],
      [12, -9],
      [59, 11],
      [29, -28],
      [18, 5],
      [22, -5],
      [28, 30],
      [-7, 39],
      [8, 38],
      [-14, 11],
      [4, 55],
      [32, 6],
      [11, 17],
      [28, 12],
      [23, -4],
      [34, -20],
      [19, 24],
      [37, -16],
      [15, -39],
      [0, -28],
      [8, -15],
      [28, 12],
      [18, -9],
      [46, 7],
      [11, -67],
      [-34, -27],
      [9, -23],
      [15, -14],
      [10, 8],
      [22, -3],
      [21, -14],
      [24, 3],
      [9, 15],
      [30, 12],
      [18, -13],
      [17, 15],
      [13, 10],
      [10, 32],
      [60, -9],
      [18, 25],
      [16, 4],
      [64, -19],
      [47, -2],
      [29, -37],
      [65, -22],
      [17, 1],
      [37, 27],
      [27, -20],
      [44, -4],
      [18, 20],
      [27, 1],
      [13, -13],
      [8, -23],
      [28, 17],
      [11, -8],
      [33, 7],
      [10, 42],
      [35, 16],
      [12, -1],
      [27, -29],
      [18, 8],
      [41, -23],
      [35, -12],
      [25, -45],
      [18, -9],
      [-1, -28],
      [25, -4],
      [9, -22],
      [36, 1],
      [26, -13],
      [14, 2],
      [43, -12],
      [55, -50],
      [24, 6],
      [4, 2],
      [8, 5],
      [1, 1],
      [54, 21],
      [40, -23],
      [19, -15],
      [18, 20],
      [25, 14],
      [23, -6],
      [19, 4],
      [20, 14],
      [18, -5],
      [31, 5],
      [48, -20],
      [72, 81],
      [75, 71],
      [14, 34],
      [37, 33],
      [16, 13],
      [16, -13],
      [1, -13],
      [-13, -16],
      [1, -23],
      [17, -7],
      [64, 38],
      [16, -19],
      [24, -56],
      [-2, -21],
      [45, -28],
      [-17, -14],
      [-23, -9],
      [-18, -16],
      [-37, -43],
      [-1, -15],
      [13, -15],
      [10, -29],
      [24, 4],
      [2, -7],
      [-27, -36],
      [-5, -32],
      [24, -16],
      [48, -42],
      [41, 25],
      [22, 19],
      [-15, 59],
      [7, 16],
      [22, -1],
      [16, -10],
      [16, -19],
      [24, -9],
      [35, -35],
      [12, -3],
      [57, 70],
      [29, 16],
      [30, -6],
      [27, 5],
      [15, -15]
    ],
    [
      [4894, 13],
      [-276, 1],
      [-455, 2],
      [-287, 2],
      [-161, 0],
      [-5, 0],
      [-111, 1],
      [-72, 0],
      [-726, -1],
      [-561, 0],
      [-212, 0],
      [-195, 0],
      [-121, 0],
      [-6, 0],
      [-761, -1],
      [-147, 0],
      [-251, 1],
      [-543, 1],
      [0, 848],
      [0, 175],
      [2, 602],
      [2, 421],
      [-3, 555],
      [1, 27],
      [0, 211],
      [0, 33],
      [-1, 34]
    ],
    [
      [23010, 12186],
      [38, -160],
      [-47, -39],
      [-37, -18],
      [-113, -79],
      [-2, -3],
      [16, -83],
      [-12, -17],
      [2, -22],
      [-21, -26],
      [-39, -15],
      [-4, -12],
      [37, -127],
      [34, 14],
      [41, 11],
      [38, 21],
      [36, 14],
      [25, 3],
      [-3, -29],
      [-36, -72],
      [-28, -21],
      [-64, -63],
      [-100, -94],
      [-81, -49],
      [3, -41],
      [-63, -72],
      [-26, -25],
      [-30, -22],
      [-70, -74],
      [-64, -76],
      [-56, -30],
      [-113, -47],
      [-37, -51],
      [-23, -24],
      [-64, -92],
      [-66, -92],
      [-26, -26],
      [-8, -19],
      [-78, -118],
      [-15, -21],
      [-27, -50],
      [-18, -26],
      [-16, -31],
      [-15, -8],
      [-10, -32],
      [-13, -18],
      [-51, -104],
      [-20, -53],
      [-40, -81],
      [-10, -15],
      [-25, -54],
      [203, -597],
      [6, -10],
      [-80, -84],
      [-19, -15],
      [-33, -55],
      [-29, -33],
      [-67, -131],
      [-37, -54],
      [-53, -95],
      [-32, -41],
      [-14, -30],
      [-32, -48],
      [-43, -72],
      [-37, -45],
      [-9, -18],
      [-34, -42],
      [-43, -69],
      [-27, -26],
      [-12, -17],
      [-22, -57],
      [-17, -28],
      [-13, -32],
      [-72, -37],
      [-21, -6],
      [-33, -63],
      [-14, -122],
      [201, 4],
      [0, -5],
      [0, -77],
      [11, 1],
      [0, -7],
      [0, -4],
      [92, 27],
      [49, -16],
      [2, -25],
      [-20, -56],
      [-3, -22],
      [7, -41],
      [3, -9],
      [17, -36],
      [30, -52],
      [38, -30],
      [15, -37],
      [40, -24],
      [35, 12],
      [39, 36],
      [56, 4],
      [37, -26],
      [32, -36],
      [76, -40],
      [25, 5],
      [19, 15],
      [15, 24],
      [23, 52],
      [394, 2],
      [78, 118]
    ],
    [
      [34695, 18],
      [8, 56],
      [-14, 53],
      [-41, 83],
      [-32, 33],
      [-57, 122],
      [-32, 24],
      [-17, 27],
      [-18, 31],
      [-21, 30],
      [-34, 78],
      [-36, 119],
      [-8, 19],
      [-10, 15],
      [-24, 21],
      [-16, 0],
      [-56, 58],
      [-56, 74],
      [-114, 150],
      [-11, 22],
      [-14, 26],
      [16, -15],
      [-9, 20],
      [-19, 25],
      [-57, 37],
      [-46, 20],
      [-36, 35],
      [-39, 48],
      [-28, 51],
      [1, 11],
      [-12, 25],
      [-52, 89],
      [-14, 18],
      [-5, 55],
      [4, 43],
      [0, 15],
      [-11, 23],
      [-38, 52],
      [-32, 31],
      [-8, 14],
      [-48, 27],
      [-16, 13],
      [-38, 52],
      [-27, 24],
      [-8, 26],
      [-7, 50],
      [-13, 19],
      [-5, 52],
      [13, 37],
      [5, 55],
      [-2, 17],
      [-16, 45],
      [-17, 24],
      [0, 47],
      [-13, 54],
      [-3, 51],
      [-48, 80],
      [-4, -1],
      [-24, 15],
      [-72, 20],
      [-9, -3],
      [-52, 54],
      [-86, 72],
      [-15, 7],
      [-52, 30],
      [-44, 20],
      [-9, -2],
      [-29, 17],
      [-27, 6],
      [-28, 15],
      [-13, 10],
      [-40, 46],
      [-41, 25],
      [-8, 13],
      [-46, 11],
      [-25, 16],
      [-75, 97],
      [2, -21],
      [-4, 22],
      [2, 15],
      [-11, 23],
      [-42, 50],
      [-25, 40],
      [-14, 33],
      [-13, 37],
      [-4, 18],
      [-3, 1],
      [-1, 5],
      [-28, 73],
      [-11, 77],
      [-4, 79],
      [-7, 43],
      [0, 22],
      [-5, 30],
      [-16, 44],
      [-26, 32],
      [-14, 33],
      [-33, 42],
      [-19, 37],
      [-3, 3],
      [1, 8],
      [-12, 26],
      [-24, 24],
      [-30, 29],
      [-50, 72],
      [-2, 0],
      [-1, 3],
      [0, 3],
      [-21, 54],
      [-22, 88],
      [3, 86],
      [-6, 48],
      [-11, 18],
      [-13, 8],
      [-48, -5],
      [-101, -52],
      [-16, -5],
      [-124, -8],
      [-121, 39],
      [-97, 36],
      [-50, 8],
      [-74, 23],
      [-53, 3],
      [-88, 24],
      [-18, 8],
      [-23, 12],
      [-63, 15],
      [-7, -18],
      [-75, 21],
      [-56, 32],
      [-26, 9],
      [-44, 51],
      [-16, 19],
      [-35, 55],
      [-4, 29],
      [-12, 18],
      [-24, 69],
      [-24, 37],
      [-33, 73],
      [-46, 78],
      [-33, 45],
      [-41, 48],
      [-45, 50],
      [-25, 39],
      [-34, 25],
      [-4, 6],
      [-6, 6],
      [-43, 38]
    ],
    [
      [35540, 21],
      [-152, 0],
      [-640, -3],
      [-53, 0]
    ],
    [
      [18752, 27508],
      [0, -296],
      [1, -232],
      [0, -49],
      [0, -468],
      [1, -349],
      [0, -97],
      [8, -695],
      [8, -990],
      [4, -733],
      [1, -309],
      [3, -384]
    ],
    [
      [18778, 22906],
      [-172, 0],
      [-323, -1],
      [-500, -7],
      [-755, -8],
      [1, -177]
    ],
    [
      [12677, 22974],
      [5, 198],
      [7, -1],
      [-1, 352],
      [6, 218],
      [15, 547],
      [1, 37],
      [3, 190],
      [23, 952],
      [220, 6],
      [-1, 120],
      [48, 0],
      [-2, 186],
      [0, 50],
      [-9, 16],
      [12, 1100],
      [-23, 0],
      [-3, 486],
      [0, 59]
    ],
    [
      [12978, 27490],
      [358, -7],
      [763, 5],
      [250, 2],
      [284, 5],
      [784, 13],
      [173, 3],
      [204, 0],
      [311, -1],
      [569, -1],
      [914, -2],
      [26, 0],
      [196, -1],
      [119, 0],
      [8, 0],
      [291, -6],
      [524, 8]
    ],
    [
      [43768, 15065],
      [-70, -114],
      [-79, -54],
      [-50, -34],
      [-64, -28],
      [-60, -10],
      [-4, 0],
      [-7, -1],
      [-63, -4],
      [-59, -30],
      [-10, -63],
      [-77, -39],
      [-65, -9],
      [-174, -96],
      [-10, -6],
      [-29, -100],
      [-156, -123],
      [69, -117],
      [-12, -8],
      [-82, -59],
      [-188, -143],
      [-50, -111],
      [-85, -85],
      [-49, -26],
      [-39, -20],
      [0, 0],
      [-1, -1],
      [-46, -32],
      [-125, -36],
      [-39, -11],
      [-142, -107],
      [-27, -18],
      [-259, -133],
      [-42, -21],
      [-36, -18],
      [-253, -55],
      [-18, -4],
      [-30, -32],
      [-178, -62],
      [-7, -1],
      [-229, -38],
      [-22, -4]
    ],
    [
      [40647, 18253],
      [34, 1],
      [32, 1],
      [43, 2],
      [265, 16],
      [62, 4],
      [56, 4],
      [188, 11],
      [401, 26],
      [43, 4],
      [34, 14],
      [29, -3]
    ],
    [
      [41834, 18333],
      [420, 37],
      [341, 28],
      [253, 18],
      [322, 30],
      [524, 43],
      [-71, -404],
      [-147, -824],
      [35, -6],
      [24, -5],
      [540, -93],
      [10, -2],
      [35, -5],
      [115, -233],
      [66, -136],
      [24, -49],
      [89, -186],
      [24, -32],
      [33, -11],
      [10, -27],
      [28, -29],
      [10, -36],
      [17, 8],
      [3, 22],
      [4, 14],
      [45, 16],
      [36, -14],
      [16, -1],
      [6, 47],
      [44, 12],
      [9, 9],
      [20, 30],
      [2, 0],
      [22, -27],
      [19, 0],
      [12, 42],
      [23, 11],
      [10, -12],
      [5, -8]
    ],
    [
      [44812, 16560],
      [0, -38],
      [6, -6],
      [22, -5],
      [29, 4],
      [28, 16],
      [48, 51],
      [27, 18],
      [21, 6],
      [16, -9],
      [6, -23],
      [-14, -68],
      [-21, -30],
      [-94, -74],
      [-54, -10],
      [-45, -21],
      [-39, -32],
      [-55, -77],
      [-38, 0],
      [-12, -15],
      [-22, -61],
      [-4, -37],
      [-12, -33],
      [-15, -30],
      [-53, -78],
      [-6, -25],
      [8, -45],
      [-3, -11],
      [-40, -17],
      [-30, -20],
      [-50, -60],
      [-23, -15],
      [-220, -143],
      [-36, -18],
      [-49, -4],
      [-71, -28],
      [-4, -15],
      [-42, -53],
      [-42, -26],
      [-68, -32],
      [-12, -23],
      [-104, -73],
      [-31, -26],
      [-27, -35],
      [-7, -22],
      [-2, -4],
      [1, -48],
      [-5, -28],
      [-8, -29],
      [-19, -40],
      [0, -37],
      [14, -34],
      [19, -21],
      [19, -3],
      [52, 14],
      [17, -22]
    ],
    [
      [44623, 5046],
      [-23, -38],
      [-14, -20],
      [-8, -11],
      [-35, -37],
      [-67, -70],
      [-38, -39],
      [-48, -50],
      [-3, -4],
      [-35, -36],
      [-6, -6],
      [-23, -24],
      [-18, -19],
      [-33, -33],
      [-16, -25],
      [-28, -43],
      [-46, -71],
      [-15, -23],
      [-41, -63],
      [-12, -18],
      [-37, -35],
      [-36, -51],
      [-18, -28],
      [-10, -15],
      [-25, -37],
      [-27, -37],
      [52, -44],
      [8, -7],
      [15, -14],
      [-30, -45],
      [-9, -14],
      [-10, -16],
      [0, -1],
      [-4, -6],
      [-30, -27],
      [-21, -18],
      [-5, -4],
      [0, 0],
      [-8, -8],
      [-4, -3],
      [0, 0],
      [-7, -5],
      [-10, -10],
      [-16, -14],
      [-4, -5],
      [-20, -38],
      [0, 0],
      [-12, 11],
      [-12, 10],
      [-17, 15],
      [-21, 18],
      [-12, 10],
      [-1, 1],
      [-28, 24],
      [-13, 10],
      [-9, 8],
      [-12, 9],
      [-22, 20],
      [-9, 8],
      [-40, 39],
      [-1, 0],
      [-11, 9],
      [-1, 1],
      [-2, 1],
      [-20, 17],
      [-10, 10],
      [-20, 16],
      [-17, 15],
      [-12, 10],
      [-13, 11],
      [-27, 22],
      [-20, 17],
      [-35, 30],
      [-23, 19],
      [-17, 14],
      [-40, 35],
      [-13, 12],
      [-14, 12],
      [-11, 9],
      [-28, 25],
      [-10, -15],
      [-13, -18],
      [-4, -7],
      [-9, -13],
      [-10, -14],
      [-32, -48],
      [-20, -28],
      [-3, 2],
      [-2, 2],
      [-14, 12],
      [-33, 29],
      [-22, 18],
      [-6, 5],
      [-16, 14],
      [-31, 26],
      [-62, 53],
      [-4, 0],
      [-3, 3],
      [-13, 15],
      [-75, 64],
      [-56, -83],
      [-20, -29],
      [-84, -122],
      [-95, -131],
      [-70, -95],
      [-6, -8],
      [39, -59],
      [36, -38],
      [4, -2],
      [3, -2],
      [0, -1],
      [11, -11],
      [13, -15],
      [1, -1],
      [16, -18],
      [25, -44],
      [38, -38],
      [24, -33],
      [3, -3],
      [3, -3],
      [24, -22],
      [5, -6],
      [12, -15],
      [3, -3],
      [34, -25],
      [12, -9],
      [12, -10],
      [12, -9],
      [12, -13],
      [18, -9],
      [3, -2],
      [5, -4],
      [8, -5],
      [13, -18],
      [13, -21],
      [4, -6],
      [5, -6],
      [12, -16],
      [34, -29],
      [3, -4],
      [10, -8],
      [1, -1],
      [-6, -7],
      [-2, -3],
      [0, -11],
      [0, 0],
      [-6, -4],
      [-19, -13],
      [-27, -20],
      [-57, -39],
      [-24, -16],
      [-22, -16],
      [-9, -6],
      [-28, -20],
      [-35, -24],
      [-17, -12],
      [-67, -47],
      [-19, -13],
      [-10, -7],
      [-6, -5],
      [-12, -8],
      [-21, -14],
      [-13, -10],
      [-5, -4],
      [-19, -20],
      [-35, -30],
      [-12, -8],
      [-9, -6],
      [-14, -9],
      [-6, -4],
      [-10, -7],
      [-17, -11],
      [-18, -12],
      [-19, -13],
      [-5, -3]
    ],
    [
      [43768, 15065],
      [1, -1],
      [5, -21],
      [-7, -30],
      [3, -17],
      [3, -12],
      [8, -64],
      [10, -40],
      [49, -59],
      [45, -102],
      [5, -41],
      [40, -73],
      [23, -43],
      [18, -30],
      [67, -63],
      [65, -61],
      [18, -49],
      [7, -34],
      [8, -83],
      [-7, -54],
      [5, -18],
      [12, -24],
      [69, -78],
      [9, -15],
      [17, -26],
      [29, -56],
      [40, -49],
      [18, -41],
      [5, -26],
      [-1, -29],
      [-19, -70],
      [-58, -83],
      [-31, -56],
      [-14, -9],
      [-39, -2],
      [-22, 18],
      [-25, 11],
      [-116, -8],
      [-39, -25],
      [-12, -29],
      [-3, -20],
      [0, -25],
      [5, -20],
      [17, -27],
      [76, -84],
      [14, -28],
      [0, -2],
      [-1, -38],
      [-12, -30],
      [-42, -73],
      [-45, -45],
      [-18, -23],
      [-16, -33],
      [-3, -25],
      [4, -30],
      [-1, -22],
      [-4, -17],
      [-62, -105],
      [-23, -14],
      [-45, -7],
      [-17, -11],
      [-34, -20],
      [-22, -33],
      [-39, -84],
      [-7, -14],
      [-14, -22],
      [-9, -4],
      [-38, -2],
      [-18, 3],
      [-66, 11],
      [-115, 44],
      [-48, 1],
      [-17, -9],
      [-14, -19],
      [-7, -16],
      [-6, -12],
      [-5, -11],
      [-10, -51],
      [-5, -54],
      [-13, -28],
      [-21, -20],
      [-12, -11],
      [-60, -36],
      [-11, -6],
      [-30, -40],
      [-8, -11],
      [-3, -18],
      [5, -36],
      [8, -20],
      [77, -99],
      [13, -23],
      [11, -21],
      [6, -26],
      [-3, -19],
      [-28, -63],
      [-4, -9],
      [-24, -72],
      [-26, -25],
      [-2, -3],
      [-13, -20],
      [-35, -105],
      [-27, -109],
      [-3, -10],
      [-12, -48],
      [0, 0],
      [8, -24],
      [16, -48],
      [33, -51],
      [51, -23],
      [4, 1],
      [45, 6],
      [32, -7],
      [25, -20],
      [6, -24],
      [-6, -38],
      [-42, -80],
      [-42, -26],
      [-17, -16],
      [-7, -6],
      [-47, -82],
      [-22, -51],
      [-9, -21],
      [0, -28],
      [27, -26],
      [15, -14],
      [15, -15],
      [10, -18],
      [9, -34],
      [3, -21],
      [15, -122],
      [3, -18],
      [-6, -38],
      [-12, -19],
      [-24, -3],
      [-34, -4],
      [-23, -12],
      [-3, -5],
      [-6, -9],
      [4, -31],
      [23, -38],
      [14, -35]
    ],
    [
      [30152, 14023],
      [-26, 32],
      [-25, 16],
      [-30, 14],
      [-91, 25],
      [-25, 18],
      [-64, 84],
      [-85, 104],
      [2, 5],
      [-15, 11],
      [-41, 44],
      [-6, 21],
      [-36, 41],
      [-8, 26],
      [-15, 29],
      [-29, 66],
      [-23, 67],
      [-36, 99],
      [-34, 56],
      [-17, 40],
      [-21, 78],
      [0, 36],
      [2, 23],
      [-29, 86],
      [-3, 9],
      [-9, 16],
      [-1, 32],
      [52, 154],
      [39, 79],
      [18, 46],
      [10, 48],
      [2, 115],
      [10, 64],
      [8, 63],
      [0, 1],
      [1, 3],
      [4, 7],
      [0, 5],
      [0, 1],
      [13, 52],
      [14, 52],
      [-2, 56],
      [0, 3],
      [1, 0],
      [-1, 1],
      [0, 1],
      [-1, 35],
      [31, 85],
      [10, 45],
      [1, 53],
      [-6, 24],
      [-5, 24],
      [2, 98],
      [4, 27],
      [-14, 93],
      [-11, 25],
      [-45, 55],
      [-32, 13],
      [-15, 4],
      [-66, 98],
      [-4, 5],
      [-3, 4],
      [-32, 38],
      [-30, 67],
      [-15, 19],
      [2, 5],
      [-14, 52],
      [-6, 56],
      [-12, 43],
      [-16, 66],
      [-1, 64],
      [-13, 65],
      [-4, 51],
      [14, 59]
    ],
    [
      [29375, 17125],
      [37, 106],
      [15, 35],
      [13, 37],
      [32, 42],
      [26, 9],
      [47, 15],
      [7, 3],
      [21, 6],
      [105, 37],
      [214, 41],
      [181, 54],
      [156, 53],
      [52, 0],
      [180, -18],
      [239, -22]
    ],
    [
      [30700, 17523],
      [0, -54],
      [9, -21],
      [2, -33],
      [-1, -87],
      [4, -28],
      [-6, -4],
      [-4, -28],
      [-11, -33],
      [2, -11],
      [-9, -49],
      [1, -16],
      [-14, -34],
      [10, -26],
      [7, -60],
      [-15, -27],
      [18, -24],
      [-5, -42],
      [-7, -66],
      [-3, -105],
      [9, -76],
      [-7, -153],
      [-21, -56],
      [-12, -60],
      [-60, -194],
      [-18, -41],
      [-69, -157],
      [-5, -58],
      [-14, -66],
      [-39, -110],
      [20, -44],
      [-70, -87],
      [-14, -30],
      [-11, -23],
      [4, -16],
      [-12, -9],
      [-9, -50],
      [11, -31],
      [6, -36],
      [-4, -30],
      [-87, -400],
      [-13, -21],
      [-2, -55],
      [9, -24],
      [-39, -23],
      [-8, -14],
      [1, -19],
      [17, -24],
      [-32, -23],
      [-4, -14],
      [7, -29],
      [42, 9],
      [33, 7],
      [64, 19],
      [68, 4],
      [134, 37],
      [63, 20],
      [42, -3],
      [30, 3],
      [72, 22],
      [52, 10],
      [39, 13],
      [93, 23],
      [37, 15],
      [88, 16],
      [41, 27],
      [19, 6],
      [39, 1],
      [67, 19],
      [43, 11],
      [72, -77],
      [27, 20],
      [31, 14],
      [35, 5],
      [48, -6],
      [39, -17],
      [31, -22],
      [43, -43],
      [20, -21],
      [29, -34],
      [8, -10],
      [7, -11],
      [24, -32],
      [55, -65],
      [17, -13],
      [71, -21],
      [58, -6],
      [41, 0],
      [64, -7],
      [87, 2],
      [25, -6],
      [14, -5],
      [-5, -34],
      [-10, -33],
      [0, -35],
      [-10, -14],
      [-13, -51],
      [-32, -44],
      [-15, -39],
      [-5, -29],
      [5, -32],
      [14, -45],
      [-4, -19],
      [12, -40],
      [25, -53],
      [11, -11],
      [1, -44],
      [13, -32],
      [-1, -11],
      [11, -35],
      [18, -15],
      [18, -42],
      [9, -8],
      [6, -6],
      [2, -4],
      [2, 0],
      [139, -1],
      [44, 0]
    ],
    [
      [33557, 12738],
      [-151, -80],
      [-92, -48],
      [-481, -262],
      [-286, -156],
      [-430, -237],
      [-51, -29],
      [-54, -27],
      [-13, -7],
      [-224, -100],
      [-304, -172],
      [-364, -188],
      [-87, -42],
      [-11, -9],
      [-46, 9],
      [-8, -17],
      [-3, -52]
    ],
    [
      [29021, 11084],
      [39, 25],
      [53, 54],
      [40, 71],
      [27, 61],
      [23, 70],
      [19, 36],
      [39, 55],
      [51, 59],
      [68, 60],
      [16, 2],
      [28, 33],
      [27, 10],
      [20, 20],
      [34, 32],
      [28, 53],
      [15, 14],
      [26, 45],
      [7, 10],
      [12, 23],
      [35, 84],
      [7, 7],
      [23, 59],
      [16, 51],
      [22, 82],
      [4, 28],
      [5, 47],
      [-1, 100],
      [-11, 79],
      [-4, 77],
      [8, 69],
      [-7, 44],
      [-3, 79],
      [-6, 43],
      [-7, 91],
      [4, 54],
      [17, 82],
      [4, 35],
      [22, 77],
      [10, 39],
      [6, 13],
      [21, 54],
      [-5, 36],
      [0, 0],
      [1, 3],
      [35, 72],
      [16, 31],
      [20, 38],
      [34, 54],
      [37, 42],
      [17, 21],
      [46, 70],
      [53, 84],
      [19, 20],
      [19, 20],
      [11, 52],
      [14, 42],
      [12, 33],
      [19, 70],
      [50, 132],
      [8, 44],
      [0, 7],
      [-12, 41]
    ],
    [
      [44953, 3971],
      [-3, -2],
      [-28, -28],
      [-34, -32],
      [-12, -13],
      [-28, -37],
      [-21, -28],
      [-107, -125],
      [-39, -46],
      [-26, -22],
      [-22, -13],
      [-14, -9],
      [-120, -49],
      [-38, -15],
      [-26, -11],
      [-9, -3],
      [-13, -11],
      [-15, -12],
      [-31, -24],
      [-3, -3],
      [-34, -53],
      [-8, -17],
      [-2, -6],
      [-53, -121],
      [-5, -6],
      [-42, -58],
      [-8, -12],
      [-23, -30],
      [-7, -10],
      [-21, -28],
      [-89, -43],
      [-45, -22],
      [-24, -6],
      [-8, -2],
      [-10, -2],
      [0, 0],
      [-29, -12],
      [-45, -19],
      [-38, -16],
      [-4, -2],
      [-38, -25],
      [-50, -33],
      [-2, -1],
      [-50, -42],
      [-13, -10],
      [-21, -24],
      [-5, -5],
      [0, -2],
      [-27, -50],
      [-13, -65],
      [-5, -23],
      [-1, -47],
      [-1, -37],
      [-1, -76],
      [0, 0],
      [2, -16],
      [4, -40],
      [3, -23],
      [4, -18],
      [13, -47],
      [1, -4],
      [21, -55],
      [8, -27],
      [10, -36],
      [-13, -80],
      [-10, -60],
      [-21, -48],
      [-21, -37],
      [-34, -60],
      [-18, -22],
      [-25, -26],
      [-43, -18],
      [-193, -7],
      [-68, -2],
      [-34, -10],
      [-18, -5],
      [-46, -43],
      [-2, -2],
      [-123, -134],
      [-3, -2]
    ],
    [
      [41834, 18333],
      [70, 63],
      [30, 38],
      [8, 3],
      [14, 47],
      [13, 8],
      [7, 35],
      [-21, 7],
      [-2, 24],
      [-29, 2],
      [-17, 25],
      [23, 41],
      [0, 31],
      [27, 22],
      [32, -6],
      [44, 28],
      [23, 66],
      [-11, 22],
      [-4, 30],
      [30, 47],
      [1, 27],
      [42, 39],
      [-8, 45],
      [-18, 33],
      [2, 45],
      [19, -3],
      [24, 13],
      [40, 79],
      [27, 51],
      [3, 25],
      [-22, 39],
      [5, 44],
      [30, 19],
      [-4, 38],
      [16, 26],
      [-9, 65],
      [-22, 11],
      [-26, 23],
      [-8, 25],
      [-32, 40],
      [-21, 7],
      [-16, -9],
      [-14, -44],
      [-12, -15],
      [-27, 14],
      [-29, 3],
      [-43, -5],
      [-15, 17],
      [0, 44],
      [57, 61],
      [-12, 3],
      [8, 27],
      [-11, 26],
      [-24, 14],
      [3, 37],
      [-13, 2],
      [-25, 26],
      [-19, 65],
      [-1, 17],
      [-20, -4],
      [14, 33],
      [-8, 14],
      [18, 21],
      [1, 17],
      [32, 8],
      [17, 25],
      [29, 30],
      [20, 1],
      [45, -79],
      [40, -22],
      [17, -20],
      [22, 19],
      [53, 11],
      [10, 17],
      [33, 57],
      [24, -6],
      [49, -69],
      [14, -13],
      [54, 17],
      [56, 29],
      [52, 15],
      [41, -4],
      [61, 3],
      [25, 33],
      [10, 93],
      [45, 40],
      [13, 27],
      [8, 46],
      [-28, 23],
      [15, 61],
      [21, 23],
      [34, 16],
      [10, 1],
      [-3, 40],
      [-14, 13],
      [4, 20],
      [-27, 23],
      [2, 24],
      [12, 18],
      [29, 31],
      [2, 8],
      [-17, 3],
      [-15, 15],
      [35, 15],
      [-3, 11],
      [32, 6],
      [23, -8],
      [49, 1],
      [-10, 16],
      [8, 30],
      [12, 1],
      [19, 0],
      [9, 32],
      [4, -30],
      [39, 2],
      [44, -9],
      [25, 24],
      [-2, 17],
      [25, 5],
      [6, 29],
      [13, 9],
      [23, -2],
      [30, 17],
      [9, -9],
      [20, 24],
      [-4, 17],
      [6, 30],
      [25, -2],
      [14, 13],
      [21, -2],
      [13, 37],
      [35, 22],
      [-6, 37],
      [-14, 0],
      [-6, 13],
      [0, 40],
      [13, 2],
      [6, 34],
      [-13, 40],
      [16, 24],
      [42, 32],
      [24, 5],
      [4, 41],
      [32, 45],
      [32, 50],
      [10, 25],
      [16, 30],
      [34, 65],
      [102, 193],
      [8, 18],
      [209, 397],
      [10, 17],
      [52, 97],
      [6, 12],
      [16, 32],
      [25, 53],
      [95, 173],
      [230, 438]
    ],
    [
      [44180, 22707],
      [22, -27],
      [27, -57],
      [30, -47],
      [58, -37],
      [49, -55],
      [23, -98],
      [28, -65],
      [28, -32],
      [31, -24],
      [32, -5],
      [16, -13],
      [71, -142],
      [18, -64],
      [1, -27],
      [-12, -18],
      [-42, -16],
      [-16, -20],
      [0, -7],
      [0, -50],
      [5, -13],
      [10, -10],
      [51, -13],
      [14, -8],
      [44, -36],
      [46, -53],
      [21, -41],
      [3, -16],
      [0, -20],
      [-14, -37],
      [-9, -41],
      [0, -1],
      [0, -22],
      [5, -14],
      [13, -4],
      [15, -5],
      [47, 17],
      [50, -1],
      [16, -9],
      [11, -16],
      [16, -68],
      [2, -30],
      [-3, -25],
      [-22, -88],
      [-2, -23],
      [-1, -17],
      [5, -26],
      [5, -12],
      [8, -22],
      [14, -11],
      [95, -30],
      [32, -5],
      [63, -8],
      [15, 4],
      [67, 47],
      [20, 31],
      [31, 4],
      [75, -14],
      [46, -49],
      [22, -14],
      [56, -1],
      [37, -17],
      [1, 0],
      [27, -39],
      [9, -52],
      [0, -42],
      [10, -42],
      [22, -16],
      [74, -20],
      [24, -14],
      [14, -20],
      [10, -34],
      [0, -15],
      [-47, -62],
      [-12, -48],
      [3, -26],
      [17, -13],
      [42, -8],
      [97, 25],
      [98, 44],
      [50, 5],
      [35, -15],
      [45, -36],
      [25, -31],
      [70, -72],
      [19, -10],
      [32, -4],
      [17, 3],
      [20, 12],
      [26, 61],
      [40, 45],
      [18, 11],
      [29, 19],
      [37, -2],
      [16, -9],
      [35, -48],
      [7, -25],
      [3, -41],
      [4, -16],
      [34, -88],
      [12, -16],
      [28, -12],
      [49, 9],
      [51, 32],
      [39, 15],
      [21, -1],
      [57, -32],
      [41, -4],
      [34, 23],
      [30, 34],
      [56, 32],
      [23, 6],
      [20, -6],
      [15, -17],
      [9, -21],
      [5, -20],
      [1, -38],
      [-32, -111],
      [-19, -25],
      [-5, -43],
      [6, -33],
      [19, -47],
      [20, -34],
      [20, -17],
      [27, -16],
      [77, -12],
      [39, -25],
      [21, -34],
      [25, -93],
      [15, -38],
      [21, -22],
      [21, -24],
      [50, -41],
      [18, -16],
      [31, -37],
      [13, -42],
      [-2, -28],
      [-11, -14],
      [-36, -31],
      [-7, -5],
      [12, 1],
      [-46, -35],
      [-31, -6],
      [-33, -16],
      [-101, -65],
      [-76, -16],
      [-43, 6],
      [-143, -5],
      [-22, -14],
      [-35, -56],
      [-26, -105],
      [-26, -37],
      [-31, -33],
      [-8, -9],
      [-27, -9],
      [-54, -1],
      [-61, -11],
      [-13, -5],
      [-12, -5],
      [-23, -25],
      [-7, -23],
      [2, -4],
      [26, -49],
      [3, -30],
      [-4, -12],
      [-116, -90],
      [-42, -61],
      [-30, -24],
      [-50, -28],
      [-66, -80],
      [-33, -73],
      [-35, -46],
      [-3, -10],
      [-19, -66],
      [-42, -96],
      [-2, -18],
      [12, -42],
      [-7, -38],
      [-8, -20],
      [-17, -25],
      [-46, -8],
      [-11, -5],
      [-9, -14],
      [-37, -89],
      [-3, -48],
      [-33, -66],
      [-10, -53],
      [5, -11],
      [48, -55],
      [13, -21],
      [-1, -6],
      [-2, -12],
      [-6, -19],
      [-56, -105],
      [-55, -124],
      [-34, -97],
      [-2, -36],
      [-29, -80],
      [-2, -2],
      [-57, -85],
      [-84, -90],
      [-12, -28],
      [-5, -30],
      [-28, -69],
      [-145, -211],
      [-65, -58],
      [-113, -52],
      [-21, -33],
      [3, -23],
      [-5, -10],
      [-132, -113],
      [-17, -7],
      [-24, 3],
      [-29, -7],
      [-57, -35],
      [-19, -26],
      [-77, -193]
    ],
    [
      [9940, 3869],
      [1, 1],
      [1, -2],
      [39, 17],
      [24, 40],
      [0, 24],
      [11, 14],
      [47, 23],
      [2, 35],
      [-4, 30],
      [17, 35],
      [29, 38],
      [14, 32],
      [32, 18],
      [2, 23],
      [-7, 21],
      [2, 59],
      [27, 53],
      [47, 19],
      [10, 61],
      [11, 38],
      [30, 27],
      [48, 37],
      [28, -18],
      [23, 3],
      [0, 27],
      [28, 22],
      [17, -4],
      [45, 19],
      [19, 5],
      [8, 30],
      [25, 42],
      [14, 103],
      [30, 22],
      [27, 42],
      [25, 11],
      [45, -29],
      [18, -19],
      [3, 25],
      [13, 13],
      [36, 4],
      [-2, -30],
      [12, -32],
      [30, -40],
      [13, -6],
      [39, 4],
      [19, 19],
      [0, 21],
      [14, 9],
      [6, 30],
      [50, 51],
      [7, 17],
      [7, 43],
      [40, 39],
      [2, 43],
      [13, 47],
      [-1, 29],
      [22, 29],
      [8, 27],
      [-8, 36],
      [7, 38],
      [-4, 56],
      [19, 34],
      [-7, 45],
      [3, 6],
      [26, -8],
      [31, 5],
      [22, -7],
      [37, 12],
      [10, 12],
      [38, 12],
      [5, 7],
      [0, 23],
      [-10, 47],
      [2, 41],
      [-7, 38],
      [-12, 41],
      [25, 6],
      [36, -17],
      [34, 13],
      [17, 14],
      [29, 49],
      [-12, 21],
      [14, 54],
      [14, 14],
      [2, 19],
      [-20, 75],
      [30, 18],
      [5, 18],
      [46, 7],
      [18, 36],
      [-2, 43],
      [17, 15],
      [14, -1],
      [21, 19],
      [7, 34],
      [-17, 30],
      [29, -16],
      [19, 11],
      [-3, 27],
      [27, 27],
      [-10, 17],
      [-25, 6],
      [6, 7],
      [28, 1],
      [16, 20],
      [0, 17],
      [-14, 38],
      [-19, 8],
      [10, 7],
      [18, -4],
      [23, 6],
      [9, 13],
      [1, 34],
      [24, 31],
      [4, 18],
      [23, 9],
      [20, 17],
      [-5, 32],
      [15, 10],
      [20, 47],
      [26, 14],
      [9, 14],
      [1, 30],
      [-13, 37],
      [24, 29],
      [7, 26],
      [17, 28],
      [0, 21],
      [47, 72],
      [20, 15],
      [49, 24],
      [22, 35],
      [4, 28],
      [-4, 24],
      [6, 26]
    ],
    [
      [13874, 38],
      [-237, -1],
      [-100, 0],
      [-526, -1],
      [-133, 0],
      [-927, 1],
      [-89, 0],
      [-250, -2],
      [-980, -6],
      [-1493, -9]
    ],
    [
      [8170, 22983],
      [-473, -5],
      [-345, -4]
    ],
    [
      [7369, 27501],
      [482, -4],
      [105, -2],
      [222, -1],
      [157, -1],
      [156, -1],
      [635, 2],
      [877, 3],
      [293, 1],
      [569, 8],
      [8, 0],
      [393, -1],
      [558, -1],
      [71, 0],
      [563, -4],
      [176, -3],
      [344, -7]
    ],
    [
      [5, 2925],
      [0, 2],
      [1, 12],
      [0, 640],
      [0, 8],
      [1, 686],
      [0, 37],
      [1, 13],
      [-1, 215],
      [0, 91],
      [0, 170],
      [0, 204],
      [-1, 304],
      [1, 158],
      [0, 1],
      [0, 279],
      [0, 1035],
      [0, 729],
      [8, 305],
      [0, 7],
      [0, 373],
      [0, 7],
      [1, 289],
      [2, 370],
      [0, 101],
      [-1, 12],
      [-10, 123],
      [0, 45]
    ],
    [
      [5263, 5763],
      [39, -5],
      [66, -46],
      [26, -23],
      [15, -50],
      [7, -31],
      [7, -48],
      [1, -7],
      [3, -27],
      [-6, -59],
      [-2, -9],
      [-12, -33],
      [-25, -44],
      [-28, -32],
      [-29, -14],
      [-9, -2],
      [-12, 0],
      [-41, 4],
      [-21, 5],
      [-27, 9],
      [-39, 10],
      [-48, 11],
      [-43, 0],
      [-38, -12],
      [-25, -18],
      [-30, -43],
      [-7, -50],
      [0, -7],
      [6, -27],
      [5, -14],
      [12, -27],
      [25, -37],
      [14, -19],
      [21, -25],
      [28, -45],
      [21, -70],
      [26, -35],
      [65, -32]
    ],
    [
      [40997, 23188],
      [-1, 51],
      [-2, 54],
      [-7, 153],
      [-12, 309],
      [-8, 194],
      [-10, 270],
      [-7, 176],
      [-21, 502],
      [-1, 17],
      [-7, 221],
      [-16, 430],
      [-21, 420],
      [-3, 44],
      [-3, 18],
      [1, 13],
      [-13, 436],
      [-4, 108],
      [-33, 900]
    ],
    [
      [40829, 27504],
      [48, 2],
      [332, -1],
      [35, 0],
      [586, 1],
      [50, -28],
      [56, -22],
      [44, -30],
      [29, -74],
      [-2, -28],
      [-38, -121],
      [2, -17],
      [22, -26],
      [30, -5],
      [8, -4],
      [45, -21],
      [56, -79],
      [19, -10],
      [15, -80],
      [43, -49],
      [20, -14],
      [52, -10],
      [19, 2],
      [3, 6],
      [-3, 47],
      [10, 13],
      [15, 8],
      [39, 1],
      [19, -26],
      [-3, -65],
      [7, -24],
      [12, -26],
      [84, -48],
      [15, -64],
      [6, -84],
      [-1, -54],
      [10, -32],
      [46, -99],
      [17, -52],
      [-1, -61],
      [-41, -59],
      [2, -47],
      [10, -70],
      [28, -17],
      [39, -10],
      [20, -16],
      [24, -81],
      [-7, -24],
      [-25, -22],
      [-18, -31],
      [1, -32],
      [7, -22],
      [18, -30],
      [22, -19],
      [54, -2],
      [25, 15],
      [39, 44],
      [17, 3],
      [20, -18],
      [34, -49],
      [24, -26],
      [47, -24],
      [6, 0],
      [11, 0],
      [29, 37],
      [42, 84],
      [42, 21],
      [46, 8],
      [50, -13],
      [28, -18],
      [24, -27],
      [10, -32],
      [11, -14],
      [15, -14],
      [14, -2],
      [11, 7],
      [14, 20],
      [14, 42],
      [11, 52],
      [20, 29],
      [17, 3],
      [33, -12],
      [11, -16],
      [9, -39],
      [-6, -94],
      [21, -65],
      [16, -28],
      [22, -21],
      [40, -18],
      [30, 3],
      [52, 28],
      [21, 10],
      [29, 4],
      [75, -84],
      [25, -3],
      [74, 12],
      [26, -15],
      [10, -12],
      [8, -35],
      [0, -53],
      [-13, -73],
      [-1, -36],
      [2, -20],
      [12, -34],
      [108, -54],
      [53, -60],
      [33, -22],
      [30, 1],
      [48, 38],
      [14, 4],
      [30, 0],
      [18, -17],
      [4, -22],
      [-4, -43],
      [-18, -74],
      [-20, -44],
      [-11, -13],
      [-26, -12],
      [-56, 13],
      [-37, -14],
      [-69, -102],
      [-7, -17],
      [-10, -54],
      [-3, -35],
      [-1, -4],
      [-5, -56],
      [2, -18],
      [7, -17],
      [21, -26],
      [44, -9],
      [22, 0],
      [108, 34],
      [29, 4],
      [13, -12],
      [13, -21],
      [33, -18],
      [30, -7],
      [34, -25],
      [59, -146],
      [5, -94],
      [-16, -116],
      [10, -96],
      [31, -146],
      [-1, -21],
      [-7, -17],
      [-12, -6],
      [-73, 18],
      [-44, -4],
      [-16, -30],
      [-2, -23],
      [13, -33],
      [4, -6],
      [56, -63],
      [25, -49],
      [33, -88],
      [12, -72],
      [-1, -30],
      [-11, -18],
      [-49, -49],
      [-5, -25],
      [7, -32],
      [1, 0],
      [9, -9],
      [27, -9],
      [33, -68],
      [10, -75],
      [-5, -174],
      [5, -98],
      [3, -21],
      [38, -101],
      [-5, -69],
      [-11, -21],
      [-14, -5],
      [-9, 2],
      [-28, 27],
      [-16, 6],
      [-51, -15],
      [-12, -12],
      [-1, -12],
      [14, -38],
      [2, -18],
      [-24, -14],
      [-41, 6],
      [-25, -6],
      [-7, -2],
      [-24, -19],
      [0, -27],
      [40, -48]
    ],
    [
      [34695, 18],
      [-750, 0],
      [-39, 0],
      [-48, 0],
      [-300, 0],
      [-4, 0],
      [-122, -1],
      [-72, 0],
      [-115, 1],
      [-1, -1],
      [-163, 0],
      [-180, 1],
      [-249, 0],
      [-205, 0],
      [-73, 0],
      [-204, -1],
      [-147, 0],
      [-324, 0],
      [-368, -1],
      [-25, 0],
      [-223, 0],
      [-140, 0],
      [-75, 0],
      [-30, 0],
      [-342, -2],
      [-237, -2],
      [-109, -2],
      [-48, 0],
      [-22, 1],
      [-583, -3],
      [-73, -1],
      [-61, 0],
      [-316, 4],
      [-310, -8],
      [-130, -3],
      [-70, 0]
    ],
    [
      [29375, 17125],
      [-141, 31],
      [-2, 0],
      [-245, 56],
      [-37, 9],
      [-95, 21],
      [-143, -735],
      [-650, -28],
      [-82, -4],
      [-298, -155],
      [-72, -40],
      [-245, -2]
    ],
    [
      [23684, 21221],
      [-9, 769]
    ],
    [
      [23675, 21990],
      [1105, 15],
      [850, 7],
      [483, 3],
      [30, -3],
      [660, 16],
      [164, 4],
      [1480, 49],
      [0, 0],
      [15, 1],
      [6, 0],
      [356, 16],
      [29, 3],
      [4, 31],
      [-26, 9],
      [5, 25],
      [10, 13],
      [17, 0],
      [56, 86],
      [26, 18],
      [20, 21],
      [29, 12],
      [40, 1],
      [13, -7],
      [29, 2],
      [25, 17],
      [29, 11],
      [7, 13],
      [4, 46],
      [23, 59],
      [21, 0],
      [17, 20],
      [32, -12],
      [41, -3],
      [7, 10],
      [35, 8],
      [40, 18],
      [14, 18],
      [24, -2],
      [24, 12],
      [29, 1],
      [71, 44],
      [29, 77]
    ],
    [
      [30043, 22566],
      [74, -307],
      [57, -260],
      [11, -41],
      [193, -820],
      [0, 0],
      [185, -797],
      [32, -35],
      [383, -357],
      [39, -36],
      [725, -702],
      [94, -92],
      [223, -64],
      [139, -40],
      [-5, -31],
      [184, -46],
      [45, -13],
      [166, -34],
      [423, -118]
    ],
    [
      [31445, 17326],
      [-308, -19],
      [-128, 66],
      [-287, 148],
      [-22, 2]
    ],
    [
      [4216, 21360],
      [0, -322],
      [0, -373],
      [0, -350],
      [0, -371],
      [0, -37],
      [0, -675],
      [0, -477],
      [0, -429],
      [1, -356],
      [3, -116],
      [-1, -205],
      [-3, -128]
    ],
    [
      [7, 16956],
      [0, 1],
      [-1, 99],
      [0, 147],
      [0, 186],
      [0, 124],
      [1, 200],
      [2, 249],
      [0, 9],
      [0, 9],
      [-1, 114],
      [0, 0],
      [0, 14],
      [0, 88],
      [0, 57],
      [0, 2],
      [1, 125],
      [1, 70],
      [-2, 196],
      [-1, 35],
      [0, 1],
      [0, 2],
      [2, 449],
      [-2, 71],
      [0, 1],
      [-1, 11],
      [-1, 255],
      [0, 30],
      [0, 14],
      [0, 0],
      [0, 23],
      [0, 0],
      [0, 7],
      [-1, 6],
      [0, 7],
      [1, 245],
      [0, 0],
      [0, 133],
      [0, 83],
      [2, 453],
      [0, 0],
      [0, 158],
      [0, 71],
      [0, 64],
      [-1, 263],
      [0, 319]
    ],
    [
      [25581, 13600],
      [15, -2],
      [3, -3],
      [39, -25],
      [3, -351],
      [1, -97]
    ],
    [
      [25642, 13122],
      [10, -578],
      [9, -600],
      [1, -97],
      [118, -21],
      [293, -54],
      [126, -22]
    ],
    [
      [23588, 27507],
      [17, -967],
      [1, -16],
      [1, -64],
      [6, -366],
      [2, -125],
      [9, -675],
      [1, -82],
      [16, -992],
      [7, -473],
      [6, -372],
      [16, -1040],
      [5, -345]
    ],
    [
      [20514, 21176],
      [-496, 8],
      [-365, 505],
      [-295, 409],
      [-580, 808]
    ],
    [
      [18752, 27508],
      [664, 10],
      [289, -4],
      [469, -8],
      [2, 0],
      [271, -8],
      [282, -1],
      [950, -2],
      [109, 0],
      [75, 0],
      [591, 3],
      [172, 2],
      [962, 7]
    ],
    [
      [25642, 13122],
      [287, 119],
      [629, 179],
      [2, 1],
      [747, 212],
      [130, 37],
      [45, 13],
      [253, 98],
      [198, 77],
      [81, 6],
      [97, 7],
      [24, -26],
      [31, -13],
      [16, -30],
      [39, -10],
      [10, 21],
      [44, -6],
      [24, -29],
      [32, -51],
      [12, 0],
      [37, 11],
      [27, 31],
      [4, 33],
      [18, 26],
      [21, 46],
      [44, 30],
      [39, 5],
      [31, -4],
      [9, 27],
      [37, 11],
      [108, 15],
      [32, 6],
      [19, 17],
      [7, 29],
      [112, 37],
      [76, 22],
      [28, 23],
      [13, 4],
      [58, -11],
      [57, 3],
      [68, -26],
      [50, -8],
      [10, 0],
      [31, 3],
      [22, 2],
      [84, 25],
      [34, 20],
      [108, -52],
      [56, 24],
      [92, 33],
      [58, -5],
      [17, -27],
      [66, 4],
      [50, 22],
      [9, 12],
      [40, -25],
      [32, 5],
      [17, -14],
      [51, -33],
      [76, -66],
      [50, 9],
      [19, -9],
      [-8, 41]
    ],
    [
      [34855, 21978],
      [-31, -202],
      [-34, -162],
      [-103, -375],
      [-13, -48],
      [-330, -1201]
    ],
    [
      [38910, 23196],
      [-3, 0],
      [-387, 14],
      [-118, -7],
      [-79, -9],
      [-41, 7],
      [-419, 13],
      [-160, 8],
      [-83, -11],
      [-86, 1],
      [-542, 8],
      [-102, 1],
      [-26, 0],
      [-103, 5],
      [-525, -3],
      [-308, 3],
      [-89, -7],
      [-126, -9],
      [-8, 102]
    ],
    [
      [35459, 27500],
      [116, 0],
      [61, 0],
      [104, -1],
      [41, 0],
      [371, 1],
      [577, 1],
      [47, 0],
      [23, 0],
      [727, -2],
      [161, 0],
      [789, -9],
      [253, -3],
      [702, 9],
      [367, 4],
      [22, 0],
      [1004, 4],
      [5, 0]
    ],
    [
      [23588, 27507],
      [849, 7],
      [234, -1],
      [298, -1],
      [888, -2],
      [112, 0],
      [167, -1],
      [616, -1],
      [614, -2],
      [156, 0],
      [81, 2],
      [414, 10],
      [87, 1],
      [367, 4],
      [1, 0],
      [339, 5],
      [187, 4],
      [45, 1],
      [81, 0]
    ]
  ],
  transform: {
    scale: [0.00012336284964665066, 0.00008287757158178693],
    translate: [-80.519891, 39.7198]
  },
  objects: {
    pa_counties: {
      type: "GeometryCollection",
      geometries: [
        {
          arcs: [[0, 1, 2, 3, 4, 5]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42009",
            STATE: "42",
            COUNTY: "009",
            NAME: "Bedford",
            LSAD: "County",
            CENSUSAREA: 1012.296
          }
        },
        {
          arcs: [[6, 7, 8, 9, 10, 11]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42011",
            STATE: "42",
            COUNTY: "011",
            NAME: "Berks",
            LSAD: "County",
            CENSUSAREA: 856.506
          }
        },
        {
          arcs: [[12, 13, 14, -3, 15]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42013",
            STATE: "42",
            COUNTY: "013",
            NAME: "Blair",
            LSAD: "County",
            CENSUSAREA: 525.8
          }
        },
        {
          arcs: [[16, 17, 18, 19, 20, 21, 22]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42019",
            STATE: "42",
            COUNTY: "019",
            NAME: "Butler",
            LSAD: "County",
            CENSUSAREA: 788.604
          }
        },
        {
          arcs: [[23, 24, 25, -16, -2, 26]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42021",
            STATE: "42",
            COUNTY: "021",
            NAME: "Cambria",
            LSAD: "County",
            CENSUSAREA: 688.351
          }
        },
        {
          arcs: [[27, 28, 29, 30, 31]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42025",
            STATE: "42",
            COUNTY: "025",
            NAME: "Carbon",
            LSAD: "County",
            CENSUSAREA: 381.46
          }
        },
        {
          arcs: [[32, 33, 34, 35, 36, 37]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42035",
            STATE: "42",
            COUNTY: "035",
            NAME: "Clinton",
            LSAD: "County",
            CENSUSAREA: 887.984
          }
        },
        {
          arcs: [[38, 39, 40, 41, 42, 43]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42037",
            STATE: "42",
            COUNTY: "037",
            NAME: "Columbia",
            LSAD: "County",
            CENSUSAREA: 483.108
          }
        },
        {
          arcs: [[44, 45, 46, 47, 48]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42039",
            STATE: "42",
            COUNTY: "039",
            NAME: "Crawford",
            LSAD: "County",
            CENSUSAREA: 1012.298
          }
        },
        {
          arcs: [[49, 50, 51, 52, 53, 54]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42047",
            STATE: "42",
            COUNTY: "047",
            NAME: "Elk",
            LSAD: "County",
            CENSUSAREA: 827.358
          }
        },
        {
          arcs: [[55, 56, 57, -51, 58]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42053",
            STATE: "42",
            COUNTY: "053",
            NAME: "Forest",
            LSAD: "County",
            CENSUSAREA: 427.185
          }
        },
        {
          arcs: [[-5, 59, 60, 61]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42057",
            STATE: "42",
            COUNTY: "057",
            NAME: "Fulton",
            LSAD: "County",
            CENSUSAREA: 437.551
          }
        },
        {
          arcs: [[62, 63, 64, -25, 65]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42063",
            STATE: "42",
            COUNTY: "063",
            NAME: "Indiana",
            LSAD: "County",
            CENSUSAREA: 827.03
          }
        },
        {
          arcs: [[-64, 66, 67, -59, -50, 68]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42065",
            STATE: "42",
            COUNTY: "065",
            NAME: "Jefferson",
            LSAD: "County",
            CENSUSAREA: 652.429
          }
        },
        {
          arcs: [[69, 70, 71, 72, 73, 74]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42067",
            STATE: "42",
            COUNTY: "067",
            NAME: "Juniata",
            LSAD: "County",
            CENSUSAREA: 391.35
          }
        },
        {
          arcs: [[75, 76, 77, 78, 79]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42069",
            STATE: "42",
            COUNTY: "069",
            NAME: "Lackawanna",
            LSAD: "County",
            CENSUSAREA: 459.078
          }
        },
        {
          arcs: [[80, -19, 81, 82]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42073",
            STATE: "42",
            COUNTY: "073",
            NAME: "Lawrence",
            LSAD: "County",
            CENSUSAREA: 358.175
          }
        },
        {
          arcs: [[83, -9, 84, 85]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42075",
            STATE: "42",
            COUNTY: "075",
            NAME: "Lebanon",
            LSAD: "County",
            CENSUSAREA: 361.833
          }
        },
        {
          arcs: [[-11, 86, -30, 87, 88, 89]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42077",
            STATE: "42",
            COUNTY: "077",
            NAME: "Lehigh",
            LSAD: "County",
            CENSUSAREA: 345.166
          }
        },
        {
          arcs: [[-43, 90, 91, -80, 92, -32, 93]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42079",
            STATE: "42",
            COUNTY: "079",
            NAME: "Luzerne",
            LSAD: "County",
            CENSUSAREA: 890.333
          }
        },
        {
          arcs: [[94, 95, 96, 97]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42001",
            STATE: "42",
            COUNTY: "001",
            NAME: "Adams",
            LSAD: "County",
            CENSUSAREA: 518.668
          }
        },
        {
          arcs: [[-17, 98, 99, 100, 101]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42003",
            STATE: "42",
            COUNTY: "003",
            NAME: "Allegheny",
            LSAD: "County",
            CENSUSAREA: 730.075
          }
        },
        {
          arcs: [[102, -67, -63, 103, -99, -23]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42005",
            STATE: "42",
            COUNTY: "005",
            NAME: "Armstrong",
            LSAD: "County",
            CENSUSAREA: 653.203
          }
        },
        {
          arcs: [[-82, -18, -102, 104, 105]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42007",
            STATE: "42",
            COUNTY: "007",
            NAME: "Beaver",
            LSAD: "County",
            CENSUSAREA: 434.712
          }
        },
        {
          arcs: [[106, 107, 108, 109, 110, 111]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42015",
            STATE: "42",
            COUNTY: "015",
            NAME: "Bradford",
            LSAD: "County",
            CENSUSAREA: 1147.399
          }
        },
        {
          arcs: [[112, 113, -89, 114, 115]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42017",
            STATE: "42",
            COUNTY: "017",
            NAME: "Bucks",
            LSAD: "County",
            CENSUSAREA: 604.307
          }
        },
        {
          arcs: [[-38, 116, 117, 118, -14, 119]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42027",
            STATE: "42",
            COUNTY: "027",
            NAME: "Centre",
            LSAD: "County",
            CENSUSAREA: 1109.921
          }
        },
        {
          arcs: [[[120, -7, 121, 122, 123]], [[124, 125]]],
          type: "MultiPolygon",
          properties: {
            GEO_ID: "0500000US42029",
            STATE: "42",
            COUNTY: "029",
            NAME: "Chester",
            LSAD: "County",
            CENSUSAREA: 750.508
          }
        },
        {
          arcs: [[-22, 126, -56, -68, -103]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42031",
            STATE: "42",
            COUNTY: "031",
            NAME: "Clarion",
            LSAD: "County",
            CENSUSAREA: 600.834
          }
        },
        {
          arcs: [[-13, -26, -65, -69, -55, 127, -33, -120]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42033",
            STATE: "42",
            COUNTY: "033",
            NAME: "Clearfield",
            LSAD: "County",
            CENSUSAREA: 1144.722
          }
        },
        {
          arcs: [[128, -97, 129, 130, 131]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42041",
            STATE: "42",
            COUNTY: "041",
            NAME: "Cumberland",
            LSAD: "County",
            CENSUSAREA: 545.459
          }
        },
        {
          arcs: [[132, 133, 134, -86, 135, 136, -132]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42043",
            STATE: "42",
            COUNTY: "043",
            NAME: "Dauphin",
            LSAD: "County",
            CENSUSAREA: 525.047
          }
        },
        {
          arcs: [[137, -123, 138, 139, 140, -126]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42045",
            STATE: "42",
            COUNTY: "045",
            NAME: "Delaware",
            LSAD: "County",
            CENSUSAREA: 183.843
          }
        },
        {
          arcs: [[141, -45, 142]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42049",
            STATE: "42",
            COUNTY: "049",
            NAME: "Erie",
            LSAD: "County",
            CENSUSAREA: 799.154
          }
        },
        {
          arcs: [[143, 144, 145, 146, 147]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42051",
            STATE: "42",
            COUNTY: "051",
            NAME: "Fayette",
            LSAD: "County",
            CENSUSAREA: 790.339
          }
        },
        {
          arcs: [[-61, 148, -70, 149, -130, -96, 150]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42055",
            STATE: "42",
            COUNTY: "055",
            NAME: "Franklin",
            LSAD: "County",
            CENSUSAREA: 772.224
          }
        },
        {
          arcs: [[151, -144, 152]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42059",
            STATE: "42",
            COUNTY: "059",
            NAME: "Greene",
            LSAD: "County",
            CENSUSAREA: 575.949
          }
        },
        {
          arcs: [[-60, -4, -15, -119, 153, -71, -149]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42061",
            STATE: "42",
            COUNTY: "061",
            NAME: "Huntingdon",
            LSAD: "County",
            CENSUSAREA: 874.639
          }
        },
        {
          arcs: [[154, -136, -85, -8, -121, 155]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42071",
            STATE: "42",
            COUNTY: "071",
            NAME: "Lancaster",
            LSAD: "County",
            CENSUSAREA: 943.81
          }
        },
        {
          arcs: [[156, 157, -53, 158, 159]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42083",
            STATE: "42",
            COUNTY: "083",
            NAME: "McKean",
            LSAD: "County",
            CENSUSAREA: 979.197
          }
        },
        {
          arcs: [[160, -28, -93, -79, 161, 162, 163]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42089",
            STATE: "42",
            COUNTY: "089",
            NAME: "Monroe",
            LSAD: "County",
            CENSUSAREA: 608.286
          }
        },
        {
          arcs: [[164, -139, -122, -12, -90, -114]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42091",
            STATE: "42",
            COUNTY: "091",
            NAME: "Montgomery",
            LSAD: "County",
            CENSUSAREA: 483.04
          }
        },
        {
          arcs: [[-115, -88, -29, -161, 165]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42095",
            STATE: "42",
            COUNTY: "095",
            NAME: "Northampton",
            LSAD: "County",
            CENSUSAREA: 369.671
          }
        },
        {
          arcs: [[166, 167, 168, -39, 169, -134, -74, 170]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42097",
            STATE: "42",
            COUNTY: "097",
            NAME: "Northumberland",
            LSAD: "County",
            CENSUSAREA: 458.368
          }
        },
        {
          arcs: [[-75, -133, -131, -150]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42099",
            STATE: "42",
            COUNTY: "099",
            NAME: "Perry",
            LSAD: "County",
            CENSUSAREA: 551.445
          }
        },
        {
          arcs: [[-140, -165, -113, 171]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42101",
            STATE: "42",
            COUNTY: "101",
            NAME: "Philadelphia",
            LSAD: "County",
            CENSUSAREA: 134.101
          }
        },
        {
          arcs: [[-163, 172, 173]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42103",
            STATE: "42",
            COUNTY: "103",
            NAME: "Pike",
            LSAD: "County",
            CENSUSAREA: 544.961
          }
        },
        {
          arcs: [[-147, 174, -27, -1, 175]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42111",
            STATE: "42",
            COUNTY: "111",
            NAME: "Somerset",
            LSAD: "County",
            CENSUSAREA: 1074.374
          }
        },
        {
          arcs: [[-159, -52, -58, 176, -46, -142, 177]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42123",
            STATE: "42",
            COUNTY: "123",
            NAME: "Warren",
            LSAD: "County",
            CENSUSAREA: 884.135
          }
        },
        {
          arcs: [[178, -105, -101, 179, -145, -152]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42125",
            STATE: "42",
            COUNTY: "125",
            NAME: "Washington",
            LSAD: "County",
            CENSUSAREA: 856.989
          }
        },
        {
          arcs: [[-173, -162, -78, 180, 181]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42127",
            STATE: "42",
            COUNTY: "127",
            NAME: "Wayne",
            LSAD: "County",
            CENSUSAREA: 725.604
          }
        },
        {
          arcs: [[-146, -180, -100, -104, -66, -24, -175]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42129",
            STATE: "42",
            COUNTY: "129",
            NAME: "Westmoreland",
            LSAD: "County",
            CENSUSAREA: 1027.554
          }
        },
        {
          arcs: [[182, -98, -129, -137, -155]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42133",
            STATE: "42",
            COUNTY: "133",
            NAME: "York",
            LSAD: "County",
            CENSUSAREA: 904.181
          }
        },
        {
          arcs: [[183, -36, 184, 185, -110, 186, -41, 187, -168]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42081",
            STATE: "42",
            COUNTY: "081",
            NAME: "Lycoming",
            LSAD: "County",
            CENSUSAREA: 1228.594
          }
        },
        {
          arcs: [[-48, 188, -20, -81, 189]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42085",
            STATE: "42",
            COUNTY: "085",
            NAME: "Mercer",
            LSAD: "County",
            CENSUSAREA: 672.575
          }
        },
        {
          arcs: [[-154, -118, 190, 191, -72]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42087",
            STATE: "42",
            COUNTY: "087",
            NAME: "Mifflin",
            LSAD: "County",
            CENSUSAREA: 411.031
          }
        },
        {
          arcs: [[-188, -40, -169]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42093",
            STATE: "42",
            COUNTY: "093",
            NAME: "Montour",
            LSAD: "County",
            CENSUSAREA: 130.242
          }
        },
        {
          arcs: [[192, -185, -35, 193, -157, 194]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42105",
            STATE: "42",
            COUNTY: "105",
            NAME: "Potter",
            LSAD: "County",
            CENSUSAREA: 1081.323
          }
        },
        {
          arcs: [[-31, -87, -10, -84, -135, -170, -44, -94]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42107",
            STATE: "42",
            COUNTY: "107",
            NAME: "Schuylkill",
            LSAD: "County",
            CENSUSAREA: 778.634
          }
        },
        {
          arcs: [[-73, -192, 195, -171]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42109",
            STATE: "42",
            COUNTY: "109",
            NAME: "Snyder",
            LSAD: "County",
            CENSUSAREA: 328.705
          }
        },
        {
          arcs: [[-158, -194, -34, -128, -54]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42023",
            STATE: "42",
            COUNTY: "023",
            NAME: "Cameron",
            LSAD: "County",
            CENSUSAREA: 396.231
          }
        },
        {
          arcs: [[196, -91, -42, -187, -109]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42113",
            STATE: "42",
            COUNTY: "113",
            NAME: "Sullivan",
            LSAD: "County",
            CENSUSAREA: 449.94
          }
        },
        {
          arcs: [[-181, -77, 197, -107, 198]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42115",
            STATE: "42",
            COUNTY: "115",
            NAME: "Susquehanna",
            LSAD: "County",
            CENSUSAREA: 823.435
          }
        },
        {
          arcs: [[199, -111, -186, -193]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42117",
            STATE: "42",
            COUNTY: "117",
            NAME: "Tioga",
            LSAD: "County",
            CENSUSAREA: 1133.788
          }
        },
        {
          arcs: [[-196, -191, -117, -37, -184, -167]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42119",
            STATE: "42",
            COUNTY: "119",
            NAME: "Union",
            LSAD: "County",
            CENSUSAREA: 315.982
          }
        },
        {
          arcs: [[-177, -57, -127, -21, -189, -47]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42121",
            STATE: "42",
            COUNTY: "121",
            NAME: "Venango",
            LSAD: "County",
            CENSUSAREA: 674.284
          }
        },
        {
          arcs: [[-92, -197, -108, -198, -76]],
          type: "Polygon",
          properties: {
            GEO_ID: "0500000US42131",
            STATE: "42",
            COUNTY: "131",
            NAME: "Wyoming",
            LSAD: "County",
            CENSUSAREA: 397.324
          }
        }
      ]
    }
  }
};
