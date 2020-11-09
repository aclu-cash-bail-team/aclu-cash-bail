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
    "data": [
      "Adams",
      {
        "type": "bar",
        "values": [
          30.18867925
        ]
      },
      30.18867925,
      775,
      2537
    ],
    "outlier": false
  },
  {
    "data": [
      "Allegheny",
      {
        "type": "bar",
        "values": [
          43.50802205
        ]
      },
      43.50802205,
      13884,
      31723
    ],
    "outlier": false
  },
  {
    "data": [
      "Armstrong",
      {
        "type": "bar",
        "values": [
          41.05888709
        ]
      },
      41.05888709,
      742,
      1808
    ],
    "outlier": false
  },
  {
    "data": [
      "Beaver",
      {
        "type": "bar",
        "values": [
          49.05179283
        ]
      },
      49.05179283,
      4959,
      5967
    ],
    "outlier": false
  },
  {
    "data": [
      "Bedford",
      {
        "type": "bar",
        "values": [
          38.63636364
        ]
      },
      38.63636364,
      563,
      1460
    ],
    "outlier": false
  },
  {
    "data": [
      "Berks",
      {
        "type": "bar",
        "values": [
          50.92425977
        ]
      },
      50.92425977,
      6036,
      11688
    ],
    "outlier": false
  },
  {
    "data": [
      "Blair",
      {
        "type": "bar",
        "values": [
          34.04638145
        ]
      },
      34.04638145,
      1674,
      4826
    ],
    "outlier": false
  },
  {
    "data": [
      "Bradford",
      {
        "type": "bar",
        "values": [
          45.49865229
        ]
      },
      45.49865229,
      824,
      1805
    ],
    "outlier": false
  },
  {
    "data": [
      "Bucks",
      {
        "type": "bar",
        "values": [
          32.41325938
        ]
      },
      32.41325938,
      4959,
      15185
    ],
    "outlier": false
  },
  {
    "data": [
      "Butler",
      {
        "type": "bar",
        "values": [
          31.15234375
        ]
      },
      31.15234375,
      626,
      2017
    ],
    "outlier": false
  },
  {
    "data": [
      "Cambria",
      {
        "type": "bar",
        "values": [
          44.29388101
        ]
      },
      44.29388101,
      2059,
      4613
    ],
    "outlier": false
  },
  {
    "data": [
      "Cameron",
      {
        "type": "bar",
        "values": [
          21.67832168
        ]
      },
      21.67832168,
      30,
      112
    ],
    "outlier": false
  },
  {
    "data": [
      "Carbon",
      {
        "type": "bar",
        "values": [
          32.99299883
        ]
      },
      32.99299883,
      1098,
      3307
    ],
    "outlier": false
  },
  {
    "data": [
      "Centre",
      {
        "type": "bar",
        "values": [
          26.08333333
        ]
      },
      26.08333333,
      871,
      3370
    ],
    "outlier": false
  },
  {
    "data": [
      "Chester",
      {
        "type": "bar",
        "values": [
          38.0970325
        ]
      },
      38.0970325,
      3968,
      10351
    ],
    "outlier": false
  },
  {
    "data": [
      "Clarion",
      {
        "type": "bar",
        "values": [
          40
        ]
      },
      40,
      487,
      1193
    ],
    "outlier": false
  },
  {
    "data": [
      "Clearfield",
      {
        "type": "bar",
        "values": [
          36.28318584
        ]
      },
      36.28318584,
      734,
      2002
    ],
    "outlier": false
  },
  {
    "data": [
      "Clinton",
      {
        "type": "bar",
        "values": [
          36.92628651
        ]
      },
      36.92628651,
      527,
      1421
    ],
    "outlier": false
  },
  {
    "data": [
      "Columbia",
      {
        "type": "bar",
        "values": [
          38.18897638
        ]
      },
      38.18897638,
      667,
      1722
    ],
    "outlier": false
  },
  {
    "data": [
      "Crawford",
      {
        "type": "bar",
        "values": [
          28.8973384
        ]
      },
      28.8973384,
      225,
      768
    ],
    "outlier": false
  },
  {
    "data": [
      "Cumberland",
      {
        "type": "bar",
        "values": [
          38.5278224
        ]
      },
      38.5278224,
      2593,
      6732
    ],
    "outlier": false
  },
  {
    "data": [
      "Dauphin",
      {
        "type": "bar",
        "values": [
          42.44132779
        ]
      },
      42.44132779,
      5850,
      13585
    ],
    "outlier": false
  },
  {
    "data": [
      "Delaware",
      {
        "type": "bar",
        "values": [
          55.68060922
        ]
      },
      55.68060922,
      9514,
      16808
    ],
    "outlier": false
  },
  {
    "data": [
      "Elk",
      {
        "type": "bar",
        "values": [
          28.62318841
        ]
      },
      28.62318841,
      229,
      799
    ],
    "outlier": false
  },
  {
    "data": [
      "Erie",
      {
        "type": "bar",
        "values": [
          43.95330739
        ]
      },
      43.95330739,
      2750,
      6198
    ],
    "outlier": false
  },
  {
    "data": [
      "Fayette",
      {
        "type": "bar",
        "values": [
          44.27074081
        ]
      },
      44.27074081,
      2463,
      5546
    ],
    "outlier": false
  },
  {
    "data": [
      "Forest",
      {
        "type": "bar",
        "values": [
          34.75609756
        ]
      },
      34.75609756,
      50,
      123
    ],
    "outlier": false
  },
  {
    "data": [
      "Franklin",
      {
        "type": "bar",
        "values": [
          37.47902685
        ]
      },
      37.47902685,
      1772,
      4681
    ],
    "outlier": false
  },
  {
    "data": [
      "Fulton",
      {
        "type": "bar",
        "values": [
          28.67298578
        ]
      },
      28.67298578,
      113,
      383
    ],
    "outlier": false
  },
  {
    "data": [
      "Greene",
      {
        "type": "bar",
        "values": [
          37.44343891
        ]
      },
      37.44343891,
      324,
      834
    ],
    "outlier": false
  },
  {
    "data": [
      "Huntingdon",
      {
        "type": "bar",
        "values": [
          38.96907216
        ]
      },
      38.96907216,
      552,
      1353
    ],
    "outlier": false
  },
  {
    "data": [
      "Indiana",
      {
        "type": "bar",
        "values": [
          35.01070664
        ]
      },
      35.01070664,
      322,
      922
    ],
    "outlier": false
  },
  {
    "data": [
      "Jefferson",
      {
        "type": "bar",
        "values": [
          38.55721393
        ]
      },
      38.55721393,
      460,
      1166
    ],
    "outlier": false
  },
  {
    "data": [
      "Juniata",
      {
        "type": "bar",
        "values": [
          34.46215139
        ]
      },
      34.46215139,
      168,
      455
    ],
    "outlier": false
  },
  {
    "data": [
      "Lackawanna",
      {
        "type": "bar",
        "values": [
          52.63500325
        ]
      },
      52.63500325,
      3052,
      5783
    ],
    "outlier": false
  },
  {
    "data": [
      "Lancaster",
      {
        "type": "bar",
        "values": [
          44.93240475
        ]
      },
      44.93240475,
      5430,
      11977
    ],
    "outlier": false
  },
  {
    "data": [
      "Lawrence",
      {
        "type": "bar",
        "values": [
          48.92407633
        ]
      },
      48.92407633,
      1182,
      2398
    ],
    "outlier": false
  },
  {
    "data": [
      "Lebanon",
      {
        "type": "bar",
        "values": [
          38.70437956
        ]
      },
      38.70437956,
      2085,
      5329
    ],
    "outlier": false
  },
  {
    "data": [
      "Lehigh",
      {
        "type": "bar",
        "values": [
          54.88215488
        ]
      },
      54.88215488,
      6526,
      11845
    ],
    "outlier": false
  },
  {
    "data": [
      "Luzerne",
      {
        "type": "bar",
        "values": [
          38.28885249
        ]
      },
      38.28885249,
      3828,
      9950
    ],
    "outlier": false
  },
  {
    "data": [
      "Lycoming",
      {
        "type": "bar",
        "values": [
          34.68169761
        ]
      },
      34.68169761,
      1557,
      4475
    ],
    "outlier": false
  },
  {
    "data": [
      "McKean",
      {
        "type": "bar",
        "values": [
          42.38134888
        ]
      },
      42.38134888,
      488,
      1147
    ],
    "outlier": false
  },
  {
    "data": [
      "Mercer",
      {
        "type": "bar",
        "values": [
          36.12542955
        ]
      },
      36.12542955,
      1653,
      4571
    ],
    "outlier": false
  },
  {
    "data": [
      "Mifflin",
      {
        "type": "bar",
        "values": [
          48.49498328
        ]
      },
      48.49498328,
      721,
      1477
    ],
    "outlier": false
  },
  {
    "data": [
      "Monroe",
      {
        "type": "bar",
        "values": [
          32.79661017
        ]
      },
      32.79661017,
      1910,
      5757
    ],
    "outlier": false
  },
  {
    "data": [
      "Montgomery",
      {
        "type": "bar",
        "values": [
          33.63556165
        ]
      },
      33.63556165,
      6723,
      19702
    ],
    "outlier": false
  },
  {
    "data": [
      "Montour",
      {
        "type": "bar",
        "values": [
          35.19163763
        ]
      },
      35.19163763,
      100,
      275
    ],
    "outlier": false
  },
  {
    "data": [
      "Northampton",
      {
        "type": "bar",
        "values": [
          45.83529967
        ]
      },
      45.83529967,
      3804,
      8234
    ],
    "outlier": false
  },
  {
    "data": [
      "Northumberland",
      {
        "type": "bar",
        "values": [
          36
        ]
      },
      36,
      869,
      2414
    ],
    "outlier": false
  },
  {
    "data": [
      "Perry",
      {
        "type": "bar",
        "values": [
          28.98148148
        ]
      },
      28.98148148,
      305,
      1064
    ],
    "outlier": false
  },
  {
    "data": [
      "Philadelphia",
      {
        "type": "bar",
        "values": [
          50.12216352
        ]
      },
      50.12216352,
      32072,
      63180
    ],
    "outlier": false
  },
  {
    "data": [
      "Pike",
      {
        "type": "bar",
        "values": [
          34.16738568
        ]
      },
      34.16738568,
      382,
      1109
    ],
    "outlier": false
  },
  {
    "data": [
      "Potter",
      {
        "type": "bar",
        "values": [
          23.36601307
        ]
      },
      23.36601307,
      142,
      593
    ],
    "outlier": false
  },
  {
    "data": [
      "Schuylkill",
      {
        "type": "bar",
        "values": [
          37.74187822
        ]
      },
      37.74187822,
      2100,
      5531
    ],
    "outlier": false
  },
  {
    "data": [
      "Snyder",
      {
        "type": "bar",
        "values": [
          35.92870544
        ]
      },
      35.92870544,
      381,
      1060
    ],
    "outlier": false
  },
  {
    "data": [
      "Somerset",
      {
        "type": "bar",
        "values": [
          25
        ]
      },
      25,
      498,
      1962
    ],
    "outlier": false
  },
  {
    "data": [
      "Sullivan",
      {
        "type": "bar",
        "values": [
          36.44859813
        ]
      },
      36.44859813,
      36,
      103
    ],
    "outlier": false
  },
  {
    "data": [
      "Susquehanna",
      {
        "type": "bar",
        "values": [
          40.32663317
        ]
      },
      40.32663317,
      317,
      783
    ],
    "outlier": false
  },
  {
    "data": [
      "Tioga",
      {
        "type": "bar",
        "values": [
          36.38603696
        ]
      },
      36.38603696,
      868,
      2385
    ],
    "outlier": false
  },
  {
    "data": [
      "Union",
      {
        "type": "bar",
        "values": [
          25.36136662
        ]
      },
      25.36136662,
      186,
      743
    ],
    "outlier": false
  },
  {
    "data": [
      "Venango",
      {
        "type": "bar",
        "values": [
          37.84477229
        ]
      },
      37.84477229,
      586,
      1549
    ],
    "outlier": false
  },
  {
    "data": [
      "Warren",
      {
        "type": "bar",
        "values": [
          40.61393152
        ]
      },
      40.61393152,
      338,
      831
    ],
    "outlier": false
  },
  {
    "data": [
      "Washington",
      {
        "type": "bar",
        "values": [
          38.93688681
        ]
      },
      38.93688681,
      2596,
      6615
    ],
    "outlier": false
  },
  {
    "data": [
      "Wayne",
      {
        "type": "bar",
        "values": [
          37.20349563
        ]
      },
      37.20349563,
      286,
      779
    ],
    "outlier": false
  },
  {
    "data": [
      "Westmoreland",
      {
        "type": "bar",
        "values": [
          31.71662559
        ]
      },
      31.71662559,
      3840,
      11934
    ],
    "outlier": false
  },
  {
    "data": [
      "Wyoming",
      {
        "type": "bar",
        "values": [
          35.68118628
        ]
      },
      35.68118628,
      377,
      1056
    ],
    "outlier": false
  },
  {
    "data": [
      "York",
      {
        "type": "bar",
        "values": [
          44.27380952
        ]
      },
      44.27380952,
      7356,
      16539
    ],
    "outlier": false
  }
];
export const BAIL_RACE_RATE_DATA = [
  {
    "data": [
      "Cameron",
      {
        "type": "line",
        "values": [
          100,
          25.45454545
        ]
      },
      100,
      25.45454545,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+74.5"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Forest",
      {
        "type": "line",
        "values": [
          85,
          32.03883495
        ]
      },
      85,
      32.03883495,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+53"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Potter",
      {
        "type": "line",
        "values": [
          75,
          23.24786325
        ]
      },
      75,
      23.24786325,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+51.8"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Somerset",
      {
        "type": "line",
        "values": [
          69.56521739,
          23.20855615
        ]
      },
      69.56521739,
      23.20855615,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+46.4"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Jefferson",
      {
        "type": "line",
        "values": [
          72.97297297,
          38.35252436
        ]
      },
      72.97297297,
      38.35252436,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+34.6"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Warren",
      {
        "type": "line",
        "values": [
          70,
          39.95067818
        ]
      },
      70,
      39.95067818,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+30"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Sullivan",
      {
        "type": "line",
        "values": [
          62.5,
          32.63157895
        ]
      },
      62.5,
      32.63157895,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+29.9"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Wayne",
      {
        "type": "line",
        "values": [
          64.86486486,
          35.30997305
        ]
      },
      64.86486486,
      35.30997305,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+29.6"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Blair",
      {
        "type": "line",
        "values": [
          58.6998088,
          31.76853358
        ]
      },
      58.6998088,
      31.76853358,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+26.9"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lycoming",
      {
        "type": "line",
        "values": [
          55.01355014,
          28.14726841
        ]
      },
      55.01355014,
      28.14726841,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+26.9"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Susquehanna",
      {
        "type": "line",
        "values": [
          66.66666667,
          39.76377953
        ]
      },
      66.66666667,
      39.76377953,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+26.9"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Erie",
      {
        "type": "line",
        "values": [
          63.73239437,
          37.02714731
        ]
      },
      63.73239437,
      37.02714731,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+26.7"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Cambria",
      {
        "type": "line",
        "values": [
          65.52083333,
          39.14590747
        ]
      },
      65.52083333,
      39.14590747,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+26.4"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Huntingdon",
      {
        "type": "line",
        "values": [
          64.05228758,
          37.83333333
        ]
      },
      64.05228758,
      37.83333333,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+26.2"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Crawford",
      {
        "type": "line",
        "values": [
          53.33333333,
          28.3197832
        ]
      },
      53.33333333,
      28.3197832,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+25"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Centre",
      {
        "type": "line",
        "values": [
          46.74115456,
          21.88492764
        ]
      },
      46.74115456,
      21.88492764,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+24.9"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Venango",
      {
        "type": "line",
        "values": [
          60.13986014,
          35.56187767
        ]
      },
      60.13986014,
      35.56187767,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+24.6"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Clearfield",
      {
        "type": "line",
        "values": [
          59.30232558,
          35.64718163
        ]
      },
      59.30232558,
      35.64718163,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+23.7"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Armstrong",
      {
        "type": "line",
        "values": [
          62.71186441,
          39.52662722
        ]
      },
      62.71186441,
      39.52662722,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+23.2"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Northumberland",
      {
        "type": "line",
        "values": [
          56.81818182,
          33.91066545
        ]
      },
      56.81818182,
      33.91066545,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+22.9"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lawrence",
      {
        "type": "line",
        "values": [
          66.28477905,
          43.4806939
        ]
      },
      66.28477905,
      43.4806939,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+22.8"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Mifflin",
      {
        "type": "line",
        "values": [
          70.11494253,
          47.48201439
        ]
      },
      70.11494253,
      47.48201439,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+22.6"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Tioga",
      {
        "type": "line",
        "values": [
          57,
          34.50800915
        ]
      },
      57,
      34.50800915,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+22.5"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Allegheny",
      {
        "type": "line",
        "values": [
          57.06645057,
          35.29897333
        ]
      },
      57.06645057,
      35.29897333,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+21.8"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Westmoreland",
      {
        "type": "line",
        "values": [
          50.05045409,
          28.61736334
        ]
      },
      50.05045409,
      28.61736334,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+21.4"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Greene",
      {
        "type": "line",
        "values": [
          58.97435897,
          37.86163522
        ]
      },
      58.97435897,
      37.86163522,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+21.1"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Beaver",
      {
        "type": "line",
        "values": [
          64.33048433,
          43.92212726
        ]
      },
      64.33048433,
      43.92212726,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+20.4"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "McKean",
      {
        "type": "line",
        "values": [
          61.33333333,
          41.23134328
        ]
      },
      61.33333333,
      41.23134328,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+20.1"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Washington",
      {
        "type": "line",
        "values": [
          55.77092511,
          35.82116788
        ]
      },
      55.77092511,
      35.82116788,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+19.9"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Luzerne",
      {
        "type": "line",
        "values": [
          53.5892323,
          34.6550856
        ]
      },
      53.5892323,
      34.6550856,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+18.9"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lackawanna",
      {
        "type": "line",
        "values": [
          67.1345995,
          48.9720035
        ]
      },
      67.1345995,
      48.9720035,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+18.2"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Snyder",
      {
        "type": "line",
        "values": [
          52.5,
          34.59183673
        ]
      },
      52.5,
      34.59183673,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+17.9"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Bradford",
      {
        "type": "line",
        "values": [
          62.26415094,
          45.14840183
        ]
      },
      62.26415094,
      45.14840183,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+17.1"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Cumberland",
      {
        "type": "line",
        "values": [
          51.61744023,
          35.0094162
        ]
      },
      51.61744023,
      35.0094162,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+16.6"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Butler",
      {
        "type": "line",
        "values": [
          44.7761194,
          29.5154185
        ]
      },
      44.7761194,
      29.5154185,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+15.3"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Delaware",
      {
        "type": "line",
        "values": [
          63.75237882,
          48.4952381
        ]
      },
      63.75237882,
      48.4952381,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+15.3"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Bedford",
      {
        "type": "line",
        "values": [
          52.57731959,
          37.56419663
        ]
      },
      52.57731959,
      37.56419663,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+15"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Union",
      {
        "type": "line",
        "values": [
          38.20224719,
          23.24159021
        ]
      },
      38.20224719,
      23.24159021,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+15"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Dauphin",
      {
        "type": "line",
        "values": [
          51.21710526,
          36.4556962
        ]
      },
      51.21710526,
      36.4556962,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+14.8"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Montgomery",
      {
        "type": "line",
        "values": [
          43.27198364,
          28.69733969
        ]
      },
      43.27198364,
      28.69733969,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+14.6"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Adams",
      {
        "type": "line",
        "values": [
          43.56060606,
          29.03651562
        ]
      },
      43.56060606,
      29.03651562,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+14.5"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Chester",
      {
        "type": "line",
        "values": [
          48.47354138,
          34.29690666
        ]
      },
      48.47354138,
      34.29690666,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+14.2"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Franklin",
      {
        "type": "line",
        "values": [
          49.26553672,
          35.19494204
        ]
      },
      49.26553672,
      35.19494204,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+14.1"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "York",
      {
        "type": "line",
        "values": [
          54.11985019,
          41.11844787
        ]
      },
      54.11985019,
      41.11844787,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+13"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Philadelphia",
      {
        "type": "line",
        "values": [
          56.02170568,
          43.3107617
        ]
      },
      56.02170568,
      43.3107617,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+12.7"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lancaster",
      {
        "type": "line",
        "values": [
          55.54532904,
          43.07425541
        ]
      },
      55.54532904,
      43.07425541,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+12.5"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Perry",
      {
        "type": "line",
        "values": [
          40,
          27.68130746
        ]
      },
      40,
      27.68130746,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+12.3"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Mercer",
      {
        "type": "line",
        "values": [
          45.40337711,
          33.35235378
        ]
      },
      45.40337711,
      33.35235378,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+12.1"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Northampton",
      {
        "type": "line",
        "values": [
          55.7063541,
          43.86813852
        ]
      },
      55.7063541,
      43.86813852,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+11.8"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Fayette",
      {
        "type": "line",
        "values": [
          54,
          42.30092389
        ]
      },
      54,
      42.30092389,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+11.7"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Carbon",
      {
        "type": "line",
        "values": [
          43.7751004,
          32.34139961
        ]
      },
      43.7751004,
      32.34139961,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+11.4"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Clinton",
      {
        "type": "line",
        "values": [
          47.14285714,
          35.98750976
        ]
      },
      47.14285714,
      35.98750976,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+11.2"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lebanon",
      {
        "type": "line",
        "values": [
          48.84547069,
          37.97733949
        ]
      },
      48.84547069,
      37.97733949,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+10.9"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Montour",
      {
        "type": "line",
        "values": [
          46.15384615,
          35.34136546
        ]
      },
      46.15384615,
      35.34136546,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+10.8"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Bucks",
      {
        "type": "line",
        "values": [
          41.06901218,
          30.62392673
        ]
      },
      41.06901218,
      30.62392673,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+10.4"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Schuylkill",
      {
        "type": "line",
        "values": [
          46.5060241,
          37.27521501
        ]
      },
      46.5060241,
      37.27521501,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+9.2"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lehigh",
      {
        "type": "line",
        "values": [
          61.81634031,
          52.85376562
        ]
      },
      61.81634031,
      52.85376562,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+9"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Berks",
      {
        "type": "line",
        "values": [
          58.42078961,
          50.24259317
        ]
      },
      58.42078961,
      50.24259317,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+8.2"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Juniata",
      {
        "type": "line",
        "values": [
          43.75,
          36.67425968
        ]
      },
      43.75,
      36.67425968,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+7.1"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Wyoming",
      {
        "type": "line",
        "values": [
          40,
          35.59650824
        ]
      },
      40,
      35.59650824,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+4.4"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Pike",
      {
        "type": "line",
        "values": [
          37.41007194,
          34.02061856
        ]
      },
      37.41007194,
      34.02061856,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+3.4"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Monroe",
      {
        "type": "line",
        "values": [
          35.13011152,
          32.41612358
        ]
      },
      35.13011152,
      32.41612358,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+2.7"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Columbia",
      {
        "type": "line",
        "values": [
          40.7960199,
          38.46153846
        ]
      },
      40.7960199,
      38.46153846,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+2.3"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Fulton",
      {
        "type": "line",
        "values": [
          31.57894737,
          29.27536232
        ]
      },
      31.57894737,
      29.27536232,
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+2.3"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Clarion",
      {
        "type": "line",
        "values": [
          40.625,
          40.83259522
        ]
      },
      40.625,
      40.83259522,
      {
        "type": "styled",
        "className": "negative-diff",
        "value": "-0.2"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Elk",
      {
        "type": "line",
        "values": [
          27.77777778,
          28.68117798
        ]
      },
      27.77777778,
      28.68117798,
      {
        "type": "styled",
        "className": "negative-diff",
        "value": "-0.9"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Indiana",
      {
        "type": "line",
        "values": [
          30.39215686,
          36.21169916
        ]
      },
      30.39215686,
      36.21169916,
      {
        "type": "styled",
        "className": "negative-diff",
        "value": "-5.8"
      }
    ],
    "outlier": false
  }
];

export const ROR_RATE_DATA = [
  {
    "data": [
      "Adams",
      {
        "type": "bar",
        "values": [
          24.8748556
        ]
      },
      24.8748556,
      631,
      2537
    ],
    "outlier": false
  },
  {
    "data": [
      "Allegheny",
      {
        "type": "bar",
        "values": [
          29.55770303
        ]
      },
      29.55770303,
      9377,
      31723
    ],
    "outlier": false
  },
  {
    "data": [
      "Armstrong",
      {
        "type": "bar",
        "values": [
          43.273906
        ]
      },
      43.273906,
      782,
      1808
    ],
    "outlier": false
  },
  {
    "data": [
      "Beaver",
      {
        "type": "bar",
        "values": [
          35.80876494
        ]
      },
      35.80876494,
      2137,
      5967
    ],
    "outlier": false
  },
  {
    "data": [
      "Bedford",
      {
        "type": "bar",
        "values": [
          1.804812834
        ]
      },
      1.804812834,
      26,
      1460
    ],
    "outlier": false
  },
  {
    "data": [
      "Berks",
      {
        "type": "bar",
        "values": [
          15.21347947
        ]
      },
      15.21347947,
      1778,
      11688
    ],
    "outlier": false
  },
  {
    "data": [
      "Blair",
      {
        "type": "bar",
        "values": [
          0.3598560576
        ]
      },
      0.3598560576,
      17,
      4826
    ],
    "outlier": false
  },
  {
    "data": [
      "Bradford",
      {
        "type": "bar",
        "values": [
          11.53638814
        ]
      },
      11.53638814,
      208,
      1805
    ],
    "outlier": false
  },
  {
    "data": [
      "Bucks",
      {
        "type": "bar",
        "values": [
          17.70282471
        ]
      },
      17.70282471,
      2688,
      15185
    ],
    "outlier": false
  },
  {
    "data": [
      "Butler",
      {
        "type": "bar",
        "values": [
          57.27539063
        ]
      },
      57.27539063,
      1155,
      2017
    ],
    "outlier": false
  },
  {
    "data": [
      "Cambria",
      {
        "type": "bar",
        "values": [
          21.61761592
        ]
      },
      21.61761592,
      997,
      4613
    ],
    "outlier": false
  },
  {
    "data": [
      "Cameron",
      {
        "type": "bar",
        "values": [
          0
        ]
      },
      0,
      0,
      112
    ],
    "outlier": true
  },
  {
    "data": [
      "Carbon",
      {
        "type": "bar",
        "values": [
          13.12718786
        ]
      },
      13.12718786,
      434,
      3307
    ],
    "outlier": false
  },
  {
    "data": [
      "Centre",
      {
        "type": "bar",
        "values": [
          61.55555556
        ]
      },
      61.55555556,
      2074,
      3370
    ],
    "outlier": false
  },
  {
    "data": [
      "Chester",
      {
        "type": "bar",
        "values": [
          20.7253886
        ]
      },
      20.7253886,
      2145,
      10351
    ],
    "outlier": false
  },
  {
    "data": [
      "Clarion",
      {
        "type": "bar",
        "values": [
          25.70281124
        ]
      },
      25.70281124,
      307,
      1193
    ],
    "outlier": false
  },
  {
    "data": [
      "Clearfield",
      {
        "type": "bar",
        "values": [
          0.09832841691
        ]
      },
      0.09832841691,
      2,
      2002
    ],
    "outlier": false
  },
  {
    "data": [
      "Clinton",
      {
        "type": "bar",
        "values": [
          11.40472879
        ]
      },
      11.40472879,
      162,
      1421
    ],
    "outlier": false
  },
  {
    "data": [
      "Columbia",
      {
        "type": "bar",
        "values": [
          19.6287964
        ]
      },
      19.6287964,
      338,
      1722
    ],
    "outlier": false
  },
  {
    "data": [
      "Crawford",
      {
        "type": "bar",
        "values": [
          53.99239544
        ]
      },
      53.99239544,
      415,
      768
    ],
    "outlier": false
  },
  {
    "data": [
      "Cumberland",
      {
        "type": "bar",
        "values": [
          41.36118008
        ]
      },
      41.36118008,
      2784,
      6732
    ],
    "outlier": false
  },
  {
    "data": [
      "Dauphin",
      {
        "type": "bar",
        "values": [
          18.47205582
        ]
      },
      18.47205582,
      2509,
      13585
    ],
    "outlier": false
  },
  {
    "data": [
      "Delaware",
      {
        "type": "bar",
        "values": [
          0.1063889356
        ]
      },
      0.1063889356,
      18,
      16808
    ],
    "outlier": false
  },
  {
    "data": [
      "Elk",
      {
        "type": "bar",
        "values": [
          0
        ]
      },
      0,
      0,
      799
    ],
    "outlier": true
  },
  {
    "data": [
      "Erie",
      {
        "type": "bar",
        "values": [
          36.48249027
        ]
      },
      36.48249027,
      2261,
      6198
    ],
    "outlier": false
  },
  {
    "data": [
      "Fayette",
      {
        "type": "bar",
        "values": [
          0.7816663706
        ]
      },
      0.7816663706,
      43,
      5546
    ],
    "outlier": false
  },
  {
    "data": [
      "Forest",
      {
        "type": "bar",
        "values": [
          12.80487805
        ]
      },
      12.80487805,
      16,
      123
    ],
    "outlier": true
  },
  {
    "data": [
      "Franklin",
      {
        "type": "bar",
        "values": [
          50.02097315
        ]
      },
      50.02097315,
      2341,
      4681
    ],
    "outlier": false
  },
  {
    "data": [
      "Fulton",
      {
        "type": "bar",
        "values": [
          51.42180095
        ]
      },
      51.42180095,
      197,
      383
    ],
    "outlier": false
  },
  {
    "data": [
      "Greene",
      {
        "type": "bar",
        "values": [
          26.58371041
        ]
      },
      26.58371041,
      222,
      834
    ],
    "outlier": false
  },
  {
    "data": [
      "Huntingdon",
      {
        "type": "bar",
        "values": [
          29.07216495
        ]
      },
      29.07216495,
      393,
      1353
    ],
    "outlier": false
  },
  {
    "data": [
      "Indiana",
      {
        "type": "bar",
        "values": [
          30.72805139
        ]
      },
      30.72805139,
      283,
      922
    ],
    "outlier": false
  },
  {
    "data": [
      "Jefferson",
      {
        "type": "bar",
        "values": [
          0.08291873964
        ]
      },
      0.08291873964,
      1,
      1166
    ],
    "outlier": false
  },
  {
    "data": [
      "Juniata",
      {
        "type": "bar",
        "values": [
          18.92430279
        ]
      },
      18.92430279,
      86,
      455
    ],
    "outlier": true
  },
  {
    "data": [
      "Lackawanna",
      {
        "type": "bar",
        "values": [
          1.805465192
        ]
      },
      1.805465192,
      104,
      5783
    ],
    "outlier": false
  },
  {
    "data": [
      "Lancaster",
      {
        "type": "bar",
        "values": [
          15.22326915
        ]
      },
      15.22326915,
      1823,
      11977
    ],
    "outlier": false
  },
  {
    "data": [
      "Lawrence",
      {
        "type": "bar",
        "values": [
          24.68534308
        ]
      },
      24.68534308,
      592,
      2398
    ],
    "outlier": false
  },
  {
    "data": [
      "Lebanon",
      {
        "type": "bar",
        "values": [
          3.52189781
        ]
      },
      3.52189781,
      188,
      5329
    ],
    "outlier": false
  },
  {
    "data": [
      "Lehigh",
      {
        "type": "bar",
        "values": [
          8.111417202
        ]
      },
      8.111417202,
      961,
      11845
    ],
    "outlier": false
  },
  {
    "data": [
      "Luzerne",
      {
        "type": "bar",
        "values": [
          29.28027748
        ]
      },
      29.28027748,
      2913,
      9950
    ],
    "outlier": false
  },
  {
    "data": [
      "Lycoming",
      {
        "type": "bar",
        "values": [
          0.3315649867
        ]
      },
      0.3315649867,
      15,
      4475
    ],
    "outlier": false
  },
  {
    "data": [
      "McKean",
      {
        "type": "bar",
        "values": [
          4.912572856
        ]
      },
      4.912572856,
      56,
      1147
    ],
    "outlier": false
  },
  {
    "data": [
      "Mercer",
      {
        "type": "bar",
        "values": [
          11.8556701
        ]
      },
      11.8556701,
      542,
      4571
    ],
    "outlier": false
  },
  {
    "data": [
      "Mifflin",
      {
        "type": "bar",
        "values": [
          0.4682274247
        ]
      },
      0.4682274247,
      7,
      1477
    ],
    "outlier": false
  },
  {
    "data": [
      "Monroe",
      {
        "type": "bar",
        "values": [
          17.01694915
        ]
      },
      17.01694915,
      980,
      5757
    ],
    "outlier": false
  },
  {
    "data": [
      "Montgomery",
      {
        "type": "bar",
        "values": [
          14.69809841
        ]
      },
      14.69809841,
      2896,
      19702
    ],
    "outlier": false
  },
  {
    "data": [
      "Montour",
      {
        "type": "bar",
        "values": [
          39.02439024
        ]
      },
      39.02439024,
      107,
      275
    ],
    "outlier": true
  },
  {
    "data": [
      "Northampton",
      {
        "type": "bar",
        "values": [
          15.20764512
        ]
      },
      15.20764512,
      1252,
      8234
    ],
    "outlier": false
  },
  {
    "data": [
      "Northumberland",
      {
        "type": "bar",
        "values": [
          11.87628866
        ]
      },
      11.87628866,
      287,
      2414
    ],
    "outlier": false
  },
  {
    "data": [
      "Perry",
      {
        "type": "bar",
        "values": [
          41.48148148
        ]
      },
      41.48148148,
      441,
      1064
    ],
    "outlier": false
  },
  {
    "data": [
      "Philadelphia",
      {
        "type": "bar",
        "values": [
          36.20163088
        ]
      },
      36.20163088,
      22872,
      63180
    ],
    "outlier": false
  },
  {
    "data": [
      "Pike",
      {
        "type": "bar",
        "values": [
          31.06125971
        ]
      },
      31.06125971,
      344,
      1109
    ],
    "outlier": false
  },
  {
    "data": [
      "Potter",
      {
        "type": "bar",
        "values": [
          16.50326797
        ]
      },
      16.50326797,
      98,
      593
    ],
    "outlier": true
  },
  {
    "data": [
      "Schuylkill",
      {
        "type": "bar",
        "values": [
          10.6870229
        ]
      },
      10.6870229,
      591,
      5531
    ],
    "outlier": false
  },
  {
    "data": [
      "Snyder",
      {
        "type": "bar",
        "values": [
          6.472795497
        ]
      },
      6.472795497,
      69,
      1060
    ],
    "outlier": false
  },
  {
    "data": [
      "Somerset",
      {
        "type": "bar",
        "values": [
          4.640718563
        ]
      },
      4.640718563,
      91,
      1962
    ],
    "outlier": false
  },
  {
    "data": [
      "Sullivan",
      {
        "type": "bar",
        "values": [
          1.869158879
        ]
      },
      1.869158879,
      2,
      103
    ],
    "outlier": true
  },
  {
    "data": [
      "Susquehanna",
      {
        "type": "bar",
        "values": [
          25.50251256
        ]
      },
      25.50251256,
      200,
      783
    ],
    "outlier": true
  },
  {
    "data": [
      "Tioga",
      {
        "type": "bar",
        "values": [
          13.05954825
        ]
      },
      13.05954825,
      311,
      2385
    ],
    "outlier": false
  },
  {
    "data": [
      "Union",
      {
        "type": "bar",
        "values": [
          47.70039422
        ]
      },
      47.70039422,
      354,
      743
    ],
    "outlier": false
  },
  {
    "data": [
      "Venango",
      {
        "type": "bar",
        "values": [
          0.1282873637
        ]
      },
      0.1282873637,
      2,
      1549
    ],
    "outlier": false
  },
  {
    "data": [
      "Warren",
      {
        "type": "bar",
        "values": [
          42.03069658
        ]
      },
      42.03069658,
      349,
      831
    ],
    "outlier": true
  },
  {
    "data": [
      "Washington",
      {
        "type": "bar",
        "values": [
          25.6113633
        ]
      },
      25.6113633,
      1694,
      6615
    ],
    "outlier": false
  },
  {
    "data": [
      "Wayne",
      {
        "type": "bar",
        "values": [
          34.58177278
        ]
      },
      34.58177278,
      269,
      779
    ],
    "outlier": false
  },
  {
    "data": [
      "Westmoreland",
      {
        "type": "bar",
        "values": [
          32.92518089
        ]
      },
      32.92518089,
      3929,
      11934
    ],
    "outlier": false
  },
  {
    "data": [
      "Wyoming",
      {
        "type": "bar",
        "values": [
          0.1853568119
        ]
      },
      0.1853568119,
      2,
      1056
    ],
    "outlier": true
  },
  {
    "data": [
      "York",
      {
        "type": "bar",
        "values": [
          33.30952381
        ]
      },
      33.30952381,
      5509,
      16539
    ],
    "outlier": false
  }
];

export const BAIL_RACE_AMOUNT_DATA = [
  {
    "data": [
      "Adams",
      {
        "type": "line",
        "values": [
          29479,
          26077
        ]
      },
      "$29,479",
      "$26,077",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$3,401"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Allegheny",
      {
        "type": "line",
        "values": [
          21080,
          15881
        ]
      },
      "$21,080",
      "$15,881",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$5,199"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Armstrong",
      {
        "type": "line",
        "values": [
          18541,
          13560
        ]
      },
      "$18,541",
      "$13,560",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$4,981"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Beaver",
      {
        "type": "line",
        "values": [
          26145,
          13733
        ]
      },
      "$26,145",
      "$13,733",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$12,412"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Bedford",
      {
        "type": "line",
        "values": [
          65010,
          49176
        ]
      },
      "$65,010",
      "$49,176",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$15,834"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Berks",
      {
        "type": "line",
        "values": [
          35039,
          27399
        ]
      },
      "$35,039",
      "$27,399",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$7,640"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Blair",
      {
        "type": "line",
        "values": [
          43726,
          29256
        ]
      },
      "$43,726",
      "$29,256",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$14,470"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Bradford",
      {
        "type": "line",
        "values": [
          63125,
          32077
        ]
      },
      "$63,125",
      "$32,077",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$31,048"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Bucks",
      {
        "type": "line",
        "values": [
          73635,
          58683
        ]
      },
      "$73,635",
      "$58,683",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$14,951"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Butler",
      {
        "type": "line",
        "values": [
          42155,
          12248
        ]
      },
      "$42,155",
      "$12,248",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$29,907"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Cambria",
      {
        "type": "line",
        "values": [
          51483,
          28879
        ]
      },
      "$51,483",
      "$28,879",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$22,604"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Cameron",
      {
        "type": "line",
        "values": [
          10000,
          26481
        ]
      },
      "$10,000",
      "$26,481",
      {
        "type": "styled",
        "className": "negative-diff",
        "value": "-$16,481"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Carbon",
      {
        "type": "line",
        "values": [
          35236,
          24452
        ]
      },
      "$35,236",
      "$24,452",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$10,784"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Centre",
      {
        "type": "line",
        "values": [
          45976,
          34614
        ]
      },
      "$45,976",
      "$34,614",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$11,361"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Chester",
      {
        "type": "line",
        "values": [
          32205,
          22836
        ]
      },
      "$32,205",
      "$22,836",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$9,369"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Clarion",
      {
        "type": "line",
        "values": [
          14200,
          20698
        ]
      },
      "$14,200",
      "$20,698",
      {
        "type": "styled",
        "className": "negative-diff",
        "value": "-$6,498"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Clearfield",
      {
        "type": "line",
        "values": [
          43890,
          23215
        ]
      },
      "$43,890",
      "$23,215",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$20,675"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Clinton",
      {
        "type": "line",
        "values": [
          29609,
          19817
        ]
      },
      "$29,609",
      "$19,817",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$9,792"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Columbia",
      {
        "type": "line",
        "values": [
          57747,
          33130
        ]
      },
      "$57,747",
      "$33,130",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$24,617"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Crawford",
      {
        "type": "line",
        "values": [
          32600,
          21505
        ]
      },
      "$32,600",
      "$21,505",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$11,095"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Cumberland",
      {
        "type": "line",
        "values": [
          34037,
          23281
        ]
      },
      "$34,037",
      "$23,281",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$10,756"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Dauphin",
      {
        "type": "line",
        "values": [
          40031,
          32313
        ]
      },
      "$40,031",
      "$32,313",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$7,718"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Delaware",
      {
        "type": "line",
        "values": [
          43250,
          31974
        ]
      },
      "$43,250",
      "$31,974",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$11,275"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Elk",
      {
        "type": "line",
        "values": [
          14375,
          21093
        ]
      },
      "$14,375",
      "$21,093",
      {
        "type": "styled",
        "className": "negative-diff",
        "value": "-$6,718"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Erie",
      {
        "type": "line",
        "values": [
          38881,
          23611
        ]
      },
      "$38,881",
      "$23,611",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$15,270"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Fayette",
      {
        "type": "line",
        "values": [
          25444,
          17203
        ]
      },
      "$25,444",
      "$17,203",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$8,240"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Forest",
      {
        "type": "line",
        "values": [
          21438,
          22344
        ]
      },
      "$21,438",
      "$22,344",
      {
        "type": "styled",
        "className": "negative-diff",
        "value": "-$906"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Franklin",
      {
        "type": "line",
        "values": [
          61407,
          50242
        ]
      },
      "$61,407",
      "$50,242",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$11,165"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Fulton",
      {
        "type": "line",
        "values": [
          24000,
          57879
        ]
      },
      "$24,000",
      "$57,879",
      {
        "type": "styled",
        "className": "negative-diff",
        "value": "-$33,879"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Greene",
      {
        "type": "line",
        "values": [
          20977,
          15107
        ]
      },
      "$20,977",
      "$15,107",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$5,870"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Huntingdon",
      {
        "type": "line",
        "values": [
          22010,
          18028
        ]
      },
      "$22,010",
      "$18,028",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$3,982"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Indiana",
      {
        "type": "line",
        "values": [
          20861,
          15479
        ]
      },
      "$20,861",
      "$15,479",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$5,382"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Jefferson",
      {
        "type": "line",
        "values": [
          35040,
          45707
        ]
      },
      "$35,040",
      "$45,707",
      {
        "type": "styled",
        "className": "negative-diff",
        "value": "-$10,667"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Juniata",
      {
        "type": "line",
        "values": [
          29167,
          22330
        ]
      },
      "$29,167",
      "$22,330",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$6,837"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Lackawanna",
      {
        "type": "line",
        "values": [
          41104,
          26940
        ]
      },
      "$41,104",
      "$26,940",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$14,163"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lancaster",
      {
        "type": "line",
        "values": [
          57668,
          48383
        ]
      },
      "$57,668",
      "$48,383",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$9,285"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lawrence",
      {
        "type": "line",
        "values": [
          25778,
          15192
        ]
      },
      "$25,778",
      "$15,192",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$10,586"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lebanon",
      {
        "type": "line",
        "values": [
          36343,
          23902
        ]
      },
      "$36,343",
      "$23,902",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$12,441"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lehigh",
      {
        "type": "line",
        "values": [
          25138,
          16341
        ]
      },
      "$25,138",
      "$16,341",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$8,797"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Luzerne",
      {
        "type": "line",
        "values": [
          47113,
          32968
        ]
      },
      "$47,113",
      "$32,968",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$14,145"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lycoming",
      {
        "type": "line",
        "values": [
          77030,
          37028
        ]
      },
      "$77,030",
      "$37,028",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$40,002"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "McKean",
      {
        "type": "line",
        "values": [
          34911,
          23475
        ]
      },
      "$34,911",
      "$23,475",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$11,436"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Mercer",
      {
        "type": "line",
        "values": [
          29504,
          23005
        ]
      },
      "$29,504",
      "$23,005",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$6,500"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Mifflin",
      {
        "type": "line",
        "values": [
          52219,
          35331
        ]
      },
      "$52,219",
      "$35,331",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$16,889"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Monroe",
      {
        "type": "line",
        "values": [
          34085,
          21495
        ]
      },
      "$34,085",
      "$21,495",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$12,591"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Montgomery",
      {
        "type": "line",
        "values": [
          29169,
          21885
        ]
      },
      "$29,169",
      "$21,885",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$7,284"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Montour",
      {
        "type": "line",
        "values": [
          25556,
          27449
        ]
      },
      "$25,556",
      "$27,449",
      {
        "type": "styled",
        "className": "negative-diff",
        "value": "-$1,893"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Northampton",
      {
        "type": "line",
        "values": [
          34972,
          24095
        ]
      },
      "$34,972",
      "$24,095",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$10,877"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Northumberland",
      {
        "type": "line",
        "values": [
          63255,
          38641
        ]
      },
      "$63,255",
      "$38,641",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$24,614"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Perry",
      {
        "type": "line",
        "values": [
          41126,
          24007
        ]
      },
      "$41,126",
      "$24,007",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$17,119"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Philadelphia",
      {
        "type": "line",
        "values": [
          54302,
          43459
        ]
      },
      "$54,302",
      "$43,459",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$10,843"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Pike",
      {
        "type": "line",
        "values": [
          34755,
          21534
        ]
      },
      "$34,755",
      "$21,534",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$13,221"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Potter",
      {
        "type": "line",
        "values": [
          15700,
          19338
        ]
      },
      "$15,700",
      "$19,338",
      {
        "type": "styled",
        "className": "negative-diff",
        "value": "-$3,638"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Schuylkill",
      {
        "type": "line",
        "values": [
          28947,
          19996
        ]
      },
      "$28,947",
      "$19,996",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$8,951"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Snyder",
      {
        "type": "line",
        "values": [
          29659,
          27551
        ]
      },
      "$29,659",
      "$27,551",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$2,107"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Somerset",
      {
        "type": "line",
        "values": [
          78071,
          33896
        ]
      },
      "$78,071",
      "$33,896",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$44,175"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Sullivan",
      {
        "type": "line",
        "values": [
          5000,
          18667
        ]
      },
      "$5,000",
      "$18,667",
      {
        "type": "styled",
        "className": "negative-diff",
        "value": "-$13,667"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Susquehanna",
      {
        "type": "line",
        "values": [
          29808,
          27138
        ]
      },
      "$29,808",
      "$27,138",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$2,670"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Tioga",
      {
        "type": "line",
        "values": [
          30455,
          18916
        ]
      },
      "$30,455",
      "$18,916",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$11,539"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Union",
      {
        "type": "line",
        "values": [
          34667,
          25807
        ]
      },
      "$34,667",
      "$25,807",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$8,860"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Venango",
      {
        "type": "line",
        "values": [
          48712,
          35510
        ]
      },
      "$48,712",
      "$35,510",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$13,202"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Warren",
      {
        "type": "line",
        "values": [
          32692,
          25369
        ]
      },
      "$32,692",
      "$25,369",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$7,323"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "Washington",
      {
        "type": "line",
        "values": [
          33527,
          19878
        ]
      },
      "$33,527",
      "$19,878",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$13,649"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Wayne",
      {
        "type": "line",
        "values": [
          28682,
          32101
        ]
      },
      "$28,682",
      "$32,101",
      {
        "type": "styled",
        "className": "negative-diff",
        "value": "-$3,419"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Westmoreland",
      {
        "type": "line",
        "values": [
          30920,
          17072
        ]
      },
      "$30,920",
      "$17,072",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$13,848"
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Wyoming",
      {
        "type": "line",
        "values": [
          22611,
          25042
        ]
      },
      "$22,611",
      "$25,042",
      {
        "type": "styled",
        "className": "negative-diff",
        "value": "-$2,431"
      }
    ],
    "outlier": true
  },
  {
    "data": [
      "York",
      {
        "type": "line",
        "values": [
          30258,
          18416
        ]
      },
      "$30,258",
      "$18,416",
      {
        "type": "styled",
        "className": "positive-diff",
        "value": "+$11,842"
      }
    ],
    "outlier": false
  }
];

export const MDJ_DATA = [
  {
    "data": [
      "",
      "Delaware",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 55.68060922
          },
          {
            "className": "unsecured-bar",
            "value": 43.554700000000004
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0056
          },
          {
            "className": "ror-bar",
            "value": 0.10640000000000001
          }
        ]
      },
      55.68060922,
      {
        "type": "line",
        "values": [
          63.75237882,
          48.4952381
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Davis, Wilden H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 75.87
              },
              {
                "className": "unsecured-bar",
                "value": 23.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          75.87,
          {
            "type": "line",
            "values": [
              75.15151515,
              81.98198198
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-6.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Tenaglia, Leonard V.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 74.28
              },
              {
                "className": "unsecured-bar",
                "value": 25.72
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          74.28,
          {
            "type": "line",
            "values": [
              75.54786621,
              71.47651007
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+4.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Seaton, Spencer B. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 74.02
              },
              {
                "className": "unsecured-bar",
                "value": 25.08
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          74.02,
          {
            "type": "line",
            "values": [
              75.9295499,
              72.8
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+3.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gallagher, Vincent D. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 71.73
              },
              {
                "className": "unsecured-bar",
                "value": 28.27
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          71.73,
          {
            "type": "line",
            "values": [
              83.72093023,
              62.75862069
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Berardocco, Ann",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 71.53
              },
              {
                "className": "unsecured-bar",
                "value": 28.47
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          71.53,
          {
            "type": "line",
            "values": [
              77.06422018,
              62.87128713
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sandone, Steven A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 71.18
              },
              {
                "className": "unsecured-bar",
                "value": 28.6
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          71.18,
          {
            "type": "line",
            "values": [
              75.53648069,
              68.96551724
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Loftus, Greg J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 69.26
              },
              {
                "className": "unsecured-bar",
                "value": 30.57
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          69.26,
          {
            "type": "line",
            "values": [
              70.99697885,
              66.53061224
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+4.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Radano, Robert J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 62.88
              },
              {
                "className": "unsecured-bar",
                "value": 37.12
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          62.88,
          {
            "type": "line",
            "values": [
              65.58441558,
              62.33183857
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+3.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Merkins, James",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 61.84
              },
              {
                "className": "unsecured-bar",
                "value": 37.81
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          61.84,
          {
            "type": "line",
            "values": [
              80.85106383,
              53.80116959
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+27.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Turner, Phillip S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 61.05
              },
              {
                "className": "unsecured-bar",
                "value": 38.67
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          61.05,
          {
            "type": "line",
            "values": [
              63.4375,
              59.33503836
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+4.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lippincott, Nicholas S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.52
              },
              {
                "className": "unsecured-bar",
                "value": 39.48
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          60.52,
          {
            "type": "line",
            "values": [
              74.23076923,
              45.04132231
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+29.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mattox, Christopher R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.36
              },
              {
                "className": "unsecured-bar",
                "value": 39.49
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.15
              }
            ]
          },
          60.36,
          {
            "type": "line",
            "values": [
              62.95336788,
              59.41422594
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+3.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Tozer, Peter P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.06
              },
              {
                "className": "unsecured-bar",
                "value": 40.94
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          59.06,
          {
            "type": "line",
            "values": [
              62.63736264,
              57.0977918
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Puppio, Andrea B.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.44
              },
              {
                "className": "unsecured-bar",
                "value": 41.75
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          57.44,
          {
            "type": "line",
            "values": [
              65.96491228,
              52.13114754
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Karapalides, Harry J. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.36
              },
              {
                "className": "unsecured-bar",
                "value": 41.98
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          57.36,
          {
            "type": "line",
            "values": [
              58.41836735,
              55.05050505
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+3.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Williams, W Keith II",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 56.54
              },
              {
                "className": "unsecured-bar",
                "value": 43.09
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.18
              }
            ]
          },
          56.54,
          {
            "type": "line",
            "values": [
              52.56410256,
              69.56521739
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-17.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Vann, Dawn L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.29
              },
              {
                "className": "unsecured-bar",
                "value": 46.55
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          53.29,
          {
            "type": "line",
            "values": [
              59.06735751,
              55.70469799
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+3.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hunter, Leon",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.2
              },
              {
                "className": "unsecured-bar",
                "value": 44.4
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 2.8
              }
            ]
          },
          52.2,
          {
            "type": "line",
            "values": [
              66.03773585,
              46.22222222
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Holefelder, Diane M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.46
              },
              {
                "className": "unsecured-bar",
                "value": 47.96
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          51.46,
          {
            "type": "line",
            "values": [
              71.29186603,
              37.54266212
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+33.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Griffin, David",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.33
              },
              {
                "className": "unsecured-bar",
                "value": 48.67
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          51.33,
          {
            "type": "line",
            "values": [
              57.55813953,
              45.10739857
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Burke, Robert R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.66
              },
              {
                "className": "unsecured-bar",
                "value": 49.34
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          50.66,
          {
            "type": "line",
            "values": [
              57.77777778,
              43.91534392
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Strohl, Walter A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.21
              },
              {
                "className": "unsecured-bar",
                "value": 49.16
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          50.21,
          {
            "type": "line",
            "values": [
              66.47058824,
              40.89347079
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+25.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Micozzie-Aguirre, Kelly A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50
              },
              {
                "className": "unsecured-bar",
                "value": 49.32
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          50,
          {
            "type": "line",
            "values": [
              60.33057851,
              47.05882353
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Krull, Deborah A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.54
              },
              {
                "className": "unsecured-bar",
                "value": 51.46
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          48.54,
          {
            "type": "line",
            "values": [
              61.21673004,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nistico, Charles",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.14
              },
              {
                "className": "unsecured-bar",
                "value": 54.3
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          44.14,
          {
            "type": "line",
            "values": [
              48.9010989,
              27.27272727
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lacey, Thomas J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.49
              },
              {
                "className": "unsecured-bar",
                "value": 53.65
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          43.49,
          {
            "type": "line",
            "values": [
              47.61904762,
              28.42639594
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lippart, Jack D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.1
              },
              {
                "className": "unsecured-bar",
                "value": 56.8
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          43.1,
          {
            "type": "line",
            "values": [
              55.82010582,
              35.98615917
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lacianca, Elisa C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.76
              },
              {
                "className": "unsecured-bar",
                "value": 57.95
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.28
              }
            ]
          },
          41.76,
          {
            "type": "line",
            "values": [
              59.16666667,
              35.05154639
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+24.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lang, David H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.43
              },
              {
                "className": "unsecured-bar",
                "value": 60.45
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          34.43,
          {
            "type": "line",
            "values": [
              37.64044944,
              32.44274809
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McCray, C. Walter III",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.33
              },
              {
                "className": "unsecured-bar",
                "value": 54.61
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.71
              }
            ]
          },
          33.33,
          {
            "type": "line",
            "values": [
              40.12345679,
              24.32432432
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "D'Agostino, Robert M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.41
              },
              {
                "className": "unsecured-bar",
                "value": 70.85
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          28.41,
          {
            "type": "line",
            "values": [
              36.95652174,
              28.34645669
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+8.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Roberts, Wendy B.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.98
              },
              {
                "className": "unsecured-bar",
                "value": 71.76
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          27.98,
          {
            "type": "line",
            "values": [
              40.08438819,
              19.42740286
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20.7"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Lehigh",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 54.88215488
          },
          {
            "className": "unsecured-bar",
            "value": 36.5018
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.030699999999999998
          },
          {
            "className": "ror-bar",
            "value": 8.1388
          }
        ]
      },
      54.88215488,
      {
        "type": "line",
        "values": [
          61.816340309999994,
          52.853765620000004
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Manescu, Ronald S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 68.18
              },
              {
                "className": "unsecured-bar",
                "value": 31.55
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          68.18,
          {
            "type": "line",
            "values": [
              72.63157895,
              68.11279826
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+4.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Maura, Wayne",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 64.84
              },
              {
                "className": "unsecured-bar",
                "value": 35.16
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          64.84,
          {
            "type": "line",
            "values": [
              75.24271845,
              60.41009464
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pochron, Michael Joseph",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 63.99
              },
              {
                "className": "unsecured-bar",
                "value": 36.01
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          63.99,
          {
            "type": "line",
            "values": [
              69.00584795,
              61.08786611
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Trexler, Daniel C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 61.95
              },
              {
                "className": "unsecured-bar",
                "value": 12.73
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 25.04
              }
            ]
          },
          61.95,
          {
            "type": "line",
            "values": [
              73.04964539,
              57.55813953
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Santiago, Rashid",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.72
              },
              {
                "className": "unsecured-bar",
                "value": 33
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 5.95
              }
            ]
          },
          60.72,
          {
            "type": "line",
            "values": [
              64.65517241,
              63.26530612
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+1.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Butler, Donna R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.62
              },
              {
                "className": "unsecured-bar",
                "value": 38.79
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 1.27
              }
            ]
          },
          59.62,
          {
            "type": "line",
            "values": [
              70.43478261,
              55.907173
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Engler, Patricia M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 58.02
              },
              {
                "className": "unsecured-bar",
                "value": 41.56
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          58.02,
          {
            "type": "line",
            "values": [
              67.97385621,
              57.80189959
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Devine, Karen C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.78
              },
              {
                "className": "unsecured-bar",
                "value": 42.11
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          57.78,
          {
            "type": "line",
            "values": [
              59.83263598,
              58.59213251
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+1.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Howells, David M. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.1
              },
              {
                "className": "unsecured-bar",
                "value": 42.9
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          57.1,
          {
            "type": "line",
            "values": [
              61.34453782,
              60.11235955
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+1.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Beck, Rod",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.89
              },
              {
                "className": "unsecured-bar",
                "value": 26.01
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 20.11
              }
            ]
          },
          53.89,
          {
            "type": "line",
            "values": [
              78.94736842,
              48.37049743
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+30.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Halal, Robert C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.25
              },
              {
                "className": "unsecured-bar",
                "value": 46.59
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          53.25,
          {
            "type": "line",
            "values": [
              67.79661017,
              50.32258065
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Crawford, Charles H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.37
              },
              {
                "className": "unsecured-bar",
                "value": 49.63
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          50.37,
          {
            "type": "line",
            "values": [
              58.33333333,
              46.08695652
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.2"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Hammond, Jacob E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.1
              },
              {
                "className": "unsecured-bar",
                "value": 21.83
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 27.98
              }
            ]
          },
          50.1,
          {
            "type": "line",
            "values": [
              50.71090047,
              48.14340589
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+2.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "D'Amore, Michael D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.59
              },
              {
                "className": "unsecured-bar",
                "value": 19.3
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 36.84
              }
            ]
          },
          42.59,
          {
            "type": "line",
            "values": [
              46.77419355,
              40.88145897
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Faulkner, Michael J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.49
              },
              {
                "className": "unsecured-bar",
                "value": 58.24
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          41.49,
          {
            "type": "line",
            "values": [
              45.92274678,
              37.84764208
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+8.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Anthony, James T.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.43
              },
              {
                "className": "unsecured-bar",
                "value": 65
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.71
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          31.43,
          {
            "type": "line",
            "values": [
              17.39130435,
              36.36363636
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-19.0"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Dantos, Maria L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.81
              },
              {
                "className": "unsecured-bar",
                "value": 64.86
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          30.81,
          {
            "type": "line",
            "values": [
              32.43243243,
              31.25
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+1.2"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Lackawanna",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 52.635003250000004
          },
          {
            "className": "unsecured-bar",
            "value": 37.931
          },
          {
            "className": "nonmonetary-bar",
            "value": 7.563400000000001
          },
          {
            "className": "ror-bar",
            "value": 1.8055
          }
        ]
      },
      52.635003250000004,
      {
        "type": "line",
        "values": [
          67.13459950000001,
          48.9720035
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Giglio, Theodore J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 67.94
              },
              {
                "className": "unsecured-bar",
                "value": 19.77
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.97
              },
              {
                "className": "ror-bar",
                "value": 3.32
              }
            ]
          },
          67.94,
          {
            "type": "line",
            "values": [
              82.48175182,
              64.90825688
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Corbett, Joanne Price",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 58.27
              },
              {
                "className": "unsecured-bar",
                "value": 31.22
              },
              {
                "className": "nonmonetary-bar",
                "value": 10.05
              },
              {
                "className": "ror-bar",
                "value": 0.31
              }
            ]
          },
          58.27,
          {
            "type": "line",
            "values": [
              75.42372881,
              54.09836066
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ware, Paul J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.44
              },
              {
                "className": "unsecured-bar",
                "value": 35.38
              },
              {
                "className": "nonmonetary-bar",
                "value": 7.81
              },
              {
                "className": "ror-bar",
                "value": 1.38
              }
            ]
          },
          55.44,
          {
            "type": "line",
            "values": [
              59.84251969,
              54.07725322
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McGraw, Sean P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.3
              },
              {
                "className": "unsecured-bar",
                "value": 42.52
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.71
              },
              {
                "className": "ror-bar",
                "value": 0.31
              }
            ]
          },
          55.3,
          {
            "type": "line",
            "values": [
              75.59055118,
              50.52631579
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+25.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pesota, John P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.91
              },
              {
                "className": "unsecured-bar",
                "value": 27.33
              },
              {
                "className": "nonmonetary-bar",
                "value": 14.77
              },
              {
                "className": "ror-bar",
                "value": 3.99
              }
            ]
          },
          53.91,
          {
            "type": "line",
            "values": [
              66.1971831,
              50.6
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Keeler, Paul",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.27
              },
              {
                "className": "unsecured-bar",
                "value": 39.94
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.25
              },
              {
                "className": "ror-bar",
                "value": 3.4
              }
            ]
          },
          52.27,
          {
            "type": "line",
            "values": [
              69.93464052,
              46.8503937
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+23.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Farrell, Alyce Hailstone",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.92
              },
              {
                "className": "unsecured-bar",
                "value": 42.83
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.43
              },
              {
                "className": "ror-bar",
                "value": 0.82
              }
            ]
          },
          49.92,
          {
            "type": "line",
            "values": [
              50.40650407,
              50.21097046
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+0.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Turlip-Murphy, Laura",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.17
              },
              {
                "className": "unsecured-bar",
                "value": 50.71
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.98
              },
              {
                "className": "ror-bar",
                "value": 0.13
              }
            ]
          },
          46.17,
          {
            "type": "line",
            "values": [
              63.04347826,
              41.89189189
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gallagher, Terrence V.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.52
              },
              {
                "className": "unsecured-bar",
                "value": 47.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.59
              },
              {
                "className": "ror-bar",
                "value": 1.19
              }
            ]
          },
          38.52,
          {
            "type": "line",
            "values": [
              62.28070175,
              32.93885602
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+29.3"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Berks",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 50.92425977
          },
          {
            "className": "unsecured-bar",
            "value": 32.9706
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.8427
          },
          {
            "className": "ror-bar",
            "value": 15.2172
          }
        ]
      },
      50.92425977,
      {
        "type": "line",
        "values": [
          58.42078961,
          50.242593170000006
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Hall, William N. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 95.81
              },
              {
                "className": "unsecured-bar",
                "value": 4.03
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          95.81,
          {
            "type": "line",
            "values": [
              96.2962963,
              95.74468085
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+0.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hadzick, Paul J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 82.72
              },
              {
                "className": "unsecured-bar",
                "value": 16.82
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.46
              }
            ]
          },
          82.72,
          {
            "type": "line",
            "values": [
              86.29032258,
              82.65204387
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+3.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Robinson, Alvin B.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 67.48
              },
              {
                "className": "unsecured-bar",
                "value": 32.19
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.33
              }
            ]
          },
          67.48,
          {
            "type": "line",
            "values": [
              68.46153846,
              68.62302483
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-0.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kennedy, Stuart D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 62.97
              },
              {
                "className": "unsecured-bar",
                "value": 20.99
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 16.04
              }
            ]
          },
          62.97,
          {
            "type": "line",
            "values": [
              66.66666667,
              64.62765957
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+2.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Glass, David E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.02
              },
              {
                "className": "unsecured-bar",
                "value": 42.98
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          57.02,
          {
            "type": "line",
            "values": [
              90.38461538,
              53.56200528
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+36.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kowalski, Phyllis J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.56
              },
              {
                "className": "unsecured-bar",
                "value": 43.89
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.56
              }
            ]
          },
          55.56,
          {
            "type": "line",
            "values": [
              51.89873418,
              57.08812261
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-5.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Xavios, Thomas H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 54.71
              },
              {
                "className": "unsecured-bar",
                "value": 43.5
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 1.79
              }
            ]
          },
          54.71,
          {
            "type": "line",
            "values": [
              61.9047619,
              55.87301587
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Scott, Kyley L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.4
              },
              {
                "className": "unsecured-bar",
                "value": 20.73
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 27.86
              }
            ]
          },
          51.4,
          {
            "type": "line",
            "values": [
              64.28571429,
              51.61290323
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Patton, Dean R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.8
              },
              {
                "className": "unsecured-bar",
                "value": 54.08
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          45.8,
          {
            "type": "line",
            "values": [
              57.36434109,
              43.23144105
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Yoch, David L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.48
              },
              {
                "className": "unsecured-bar",
                "value": 32.05
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 24.48
              }
            ]
          },
          43.48,
          {
            "type": "line",
            "values": [
              55.68181818,
              41.81459566
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Book, Andrea J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.38
              },
              {
                "className": "unsecured-bar",
                "value": 38.77
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 17.54
              }
            ]
          },
          43.38,
          {
            "type": "line",
            "values": [
              52.38095238,
              42.69662921
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gauby, Thomas M. Sr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.23
              },
              {
                "className": "unsecured-bar",
                "value": 32.3
              },
              {
                "className": "nonmonetary-bar",
                "value": 24.47
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          43.23,
          {
            "type": "line",
            "values": [
              45.09803922,
              43.41736695
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+1.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bentz, Nicholas M. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.58
              },
              {
                "className": "unsecured-bar",
                "value": 27.11
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 35.31
              }
            ]
          },
          37.58,
          {
            "type": "line",
            "values": [
              41.34078212,
              40.12158055
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+1.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Young, Ann L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.2
              },
              {
                "className": "unsecured-bar",
                "value": 16.3
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 46.38
              }
            ]
          },
          37.2,
          {
            "type": "line",
            "values": [
              45.52845528,
              35.87896254
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Frederick, Victor M. IV",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.03
              },
              {
                "className": "unsecured-bar",
                "value": 62.97
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          37.03,
          {
            "type": "line",
            "values": [
              41.86046512,
              37.42690058
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+4.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Greth, Gail M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.95
              },
              {
                "className": "unsecured-bar",
                "value": 65.05
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          34.95,
          {
            "type": "line",
            "values": [
              31.57894737,
              35.07246377
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-3.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hartman, Michael G.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.33
              },
              {
                "className": "unsecured-bar",
                "value": 66.67
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          33.33,
          {
            "type": "line",
            "values": [
              42.10526316,
              32.14285714
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fegley, Sandra L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.79
              },
              {
                "className": "unsecured-bar",
                "value": 29.71
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 38.27
              }
            ]
          },
          31.79,
          {
            "type": "line",
            "values": [
              29.8013245,
              32.33618234
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-2.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bagenstose, Kim L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.05
              },
              {
                "className": "unsecured-bar",
                "value": 31.58
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 37.37
              }
            ]
          },
          31.05,
          {
            "type": "line",
            "values": [
              45,
              29.82107356
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dougherty, Timothy M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.9
              },
              {
                "className": "unsecured-bar",
                "value": 6.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 63.4
              }
            ]
          },
          29.9,
          {
            "type": "line",
            "values": [
              33.33333333,
              33.33333333
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "0.0"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Philadelphia",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 50.122163519999994
          },
          {
            "className": "unsecured-bar",
            "value": 7.017900000000001
          },
          {
            "className": "nonmonetary-bar",
            "value": 6.6315
          },
          {
            "className": "ror-bar",
            "value": 36.207699999999996
          }
        ]
      },
      50.122163519999994,
      {
        "type": "line",
        "values": [
          56.02170568,
          43.3107617
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Rebstock, Francis J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.31
              },
              {
                "className": "unsecured-bar",
                "value": 5.21
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.79
              },
              {
                "className": "ror-bar",
                "value": 42.68
              }
            ]
          },
          51.31,
          {
            "type": "line",
            "values": [
              55.90909091,
              44.80991029
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Rice, Jane M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.06
              },
              {
                "className": "unsecured-bar",
                "value": 16.32
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.83
              },
              {
                "className": "ror-bar",
                "value": 30.77
              }
            ]
          },
          51.06,
          {
            "type": "line",
            "values": [
              56.29431227,
              44.7446084
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "O'Brien, James",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.56
              },
              {
                "className": "unsecured-bar",
                "value": 9.03
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.41
              },
              {
                "className": "ror-bar",
                "value": 34
              }
            ]
          },
          50.56,
          {
            "type": "line",
            "values": [
              56.52024708,
              43.40175953
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Stack, Patrick",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.24
              },
              {
                "className": "unsecured-bar",
                "value": 0.16
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.62
              },
              {
                "className": "ror-bar",
                "value": 48.97
              }
            ]
          },
          50.24,
          {
            "type": "line",
            "values": [
              56.43951744,
              42.87348433
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bedford, Sheila M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.04
              },
              {
                "className": "unsecured-bar",
                "value": 3.47
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.8
              },
              {
                "className": "ror-bar",
                "value": 34.69
              }
            ]
          },
          49.04,
          {
            "type": "line",
            "values": [
              54.89941596,
              42.60808926
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Devlin, Kevin R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.39
              },
              {
                "className": "unsecured-bar",
                "value": 2.03
              },
              {
                "className": "nonmonetary-bar",
                "value": 13.4
              },
              {
                "className": "ror-bar",
                "value": 37.17
              }
            ]
          },
          47.39,
          {
            "type": "line",
            "values": [
              53.08736379,
              41.41494436
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.7"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Beaver",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 49.051792830000004
          },
          {
            "className": "unsecured-bar",
            "value": 12.6554
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.833
          },
          {
            "className": "ror-bar",
            "value": 35.8145
          }
        ]
      },
      49.051792830000004,
      {
        "type": "line",
        "values": [
          64.33048433,
          43.922127259999996
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Livingston, William R. II",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 67.48
              },
              {
                "className": "unsecured-bar",
                "value": 5.13
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.24
              },
              {
                "className": "ror-bar",
                "value": 27.14
              }
            ]
          },
          67.48,
          {
            "type": "line",
            "values": [
              81.08108108,
              61.2244898
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hladio, Andrew M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.03
              },
              {
                "className": "unsecured-bar",
                "value": 13.87
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.05
              },
              {
                "className": "ror-bar",
                "value": 26.05
              }
            ]
          },
          59.03,
          {
            "type": "line",
            "values": [
              72.97297297,
              54.57413249
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Howe, Edward",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.84
              },
              {
                "className": "unsecured-bar",
                "value": 13.49
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.28
              },
              {
                "className": "ror-bar",
                "value": 31.4
              }
            ]
          },
          53.84,
          {
            "type": "line",
            "values": [
              70.04405286,
              49.07872697
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Armour, John W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.66
              },
              {
                "className": "unsecured-bar",
                "value": 2.09
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.62
              },
              {
                "className": "ror-bar",
                "value": 37.63
              }
            ]
          },
          53.66,
          {
            "type": "line",
            "values": [
              69.33867735,
              56.72043011
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Loughner, C. Douglas.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.62
              },
              {
                "className": "unsecured-bar",
                "value": 3.39
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.7
              },
              {
                "className": "ror-bar",
                "value": 42.15
              }
            ]
          },
          52.62,
          {
            "type": "line",
            "values": [
              67.17948718,
              48.1557377
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Swihart, Janet",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.94
              },
              {
                "className": "unsecured-bar",
                "value": 14.4
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.11
              },
              {
                "className": "ror-bar",
                "value": 32.41
              }
            ]
          },
          51.94,
          {
            "type": "line",
            "values": [
              62.9787234,
              48.10690423
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nicholson, Dale",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.45
              },
              {
                "className": "unsecured-bar",
                "value": 17.96
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.46
              },
              {
                "className": "ror-bar",
                "value": 33.13
              }
            ]
          },
          47.45,
          {
            "type": "line",
            "values": [
              59.30735931,
              41.95402299
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Schafer, Joseph",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.12
              },
              {
                "className": "unsecured-bar",
                "value": 17
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.25
              },
              {
                "className": "ror-bar",
                "value": 39.62
              }
            ]
          },
          42.12,
          {
            "type": "line",
            "values": [
              56.65024631,
              36.83274021
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Finn, Timothy",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.84
              },
              {
                "className": "unsecured-bar",
                "value": 23.2
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.59
              },
              {
                "className": "ror-bar",
                "value": 43.37
              }
            ]
          },
          31.84,
          {
            "type": "line",
            "values": [
              53.33333333,
              25.6097561
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+27.7"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Lawrence",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 48.92407633
          },
          {
            "className": "unsecured-bar",
            "value": 2.233
          },
          {
            "className": "nonmonetary-bar",
            "value": 23.3455
          },
          {
            "className": "ror-bar",
            "value": 24.685299999999998
          }
        ]
      },
      48.92407633,
      {
        "type": "line",
        "values": [
          66.28477905,
          43.4806939
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Amodie, Melissa Ann",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 65.79
              },
              {
                "className": "unsecured-bar",
                "value": 1.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 20.71
              },
              {
                "className": "ror-bar",
                "value": 11.66
              }
            ]
          },
          65.79,
          {
            "type": "line",
            "values": [
              81.85053381,
              57.64966741
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+24.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nicholson, Jennifer L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.46
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 32.82
              },
              {
                "className": "ror-bar",
                "value": 18.73
              }
            ]
          },
          48.46,
          {
            "type": "line",
            "values": [
              59.45945946,
              45.25
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McGrath, Scott",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.88
              },
              {
                "className": "unsecured-bar",
                "value": 7.94
              },
              {
                "className": "nonmonetary-bar",
                "value": 20.9
              },
              {
                "className": "ror-bar",
                "value": 23.28
              }
            ]
          },
          47.88,
          {
            "type": "line",
            "values": [
              69.76744186,
              41.66666667
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+28.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Rishel, David B.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.13
              },
              {
                "className": "unsecured-bar",
                "value": 1.64
              },
              {
                "className": "nonmonetary-bar",
                "value": 20.72
              },
              {
                "className": "ror-bar",
                "value": 37.5
              }
            ]
          },
          40.13,
          {
            "type": "line",
            "values": [
              50,
              38.24701195
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cartwright, Jerry G. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.82
              },
              {
                "className": "unsecured-bar",
                "value": 2.11
              },
              {
                "className": "nonmonetary-bar",
                "value": 28.17
              },
              {
                "className": "ror-bar",
                "value": 41.9
              }
            ]
          },
          27.82,
          {
            "type": "line",
            "values": [
              32.60869565,
              27.82608696
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+4.8"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Mifflin",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 48.49498328
          },
          {
            "className": "unsecured-bar",
            "value": 50.6355
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.33440000000000003
          },
          {
            "className": "ror-bar",
            "value": 0.46820000000000006
          }
        ]
      },
      48.49498328,
      {
        "type": "line",
        "values": [
          70.11494253000001,
          47.482014389999996
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Miller, Jack E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.1
              },
              {
                "className": "unsecured-bar",
                "value": 43.73
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.39
              },
              {
                "className": "ror-bar",
                "value": 0.59
              }
            ]
          },
          55.1,
          {
            "type": "line",
            "values": [
              75.75757576,
              54.02542373
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Reed, Jonathan W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.95
              },
              {
                "className": "unsecured-bar",
                "value": 48.63
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.42
              }
            ]
          },
          50.95,
          {
            "type": "line",
            "values": [
              74.07407407,
              49.77477477
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+24.3"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Smith, Kent A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.71
              },
              {
                "className": "unsecured-bar",
                "value": 60.86
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.43
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          38.71,
          {
            "type": "line",
            "values": [
              59.25925926,
              37.90697674
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.4"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Northampton",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 45.835299670000005
          },
          {
            "className": "unsecured-bar",
            "value": 36.5278
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.9356000000000002
          },
          {
            "className": "ror-bar",
            "value": 15.213
          }
        ]
      },
      45.835299670000005,
      {
        "type": "line",
        "values": [
          55.7063541,
          43.86813852
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Matos-Gonzalez, Nancy",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 63.3
              },
              {
                "className": "unsecured-bar",
                "value": 30.64
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 5.87
              }
            ]
          },
          63.3,
          {
            "type": "line",
            "values": [
              66.42335766,
              63.19796954
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+3.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Corpora, Daniel G.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.62
              },
              {
                "className": "unsecured-bar",
                "value": 37.47
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 4.91
              }
            ]
          },
          57.62,
          {
            "type": "line",
            "values": [
              68.65671642,
              52.03252033
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Yetter, Richard H. III",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 56.91
              },
              {
                "className": "unsecured-bar",
                "value": 34.99
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 7.37
              }
            ]
          },
          56.91,
          {
            "type": "line",
            "values": [
              63.85542169,
              53.84615385
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Grifo, Antonia",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.76
              },
              {
                "className": "unsecured-bar",
                "value": 25.65
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 18.35
              }
            ]
          },
          55.76,
          {
            "type": "line",
            "values": [
              69.60784314,
              52.25806452
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zito, Alicia Rose",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.52
              },
              {
                "className": "unsecured-bar",
                "value": 44.16
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.32
              }
            ]
          },
          55.52,
          {
            "type": "line",
            "values": [
              72.72727273,
              53.7593985
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hawke, Robert A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.61
              },
              {
                "className": "unsecured-bar",
                "value": 46.18
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.2
              }
            ]
          },
          53.61,
          {
            "type": "line",
            "values": [
              75.92592593,
              50.81585082
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+25.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Taschner, Jacqueline M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.58
              },
              {
                "className": "unsecured-bar",
                "value": 26.97
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.18
              },
              {
                "className": "ror-bar",
                "value": 18.9
              }
            ]
          },
          53.58,
          {
            "type": "line",
            "values": [
              58.01526718,
              52.63157895
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Capobianco, John",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.85
              },
              {
                "className": "unsecured-bar",
                "value": 47.15
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          52.85,
          {
            "type": "line",
            "values": [
              72.04301075,
              49.90176817
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Schlegel, Douglas",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.81
              },
              {
                "className": "unsecured-bar",
                "value": 17.19
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 34.06
              }
            ]
          },
          47.81,
          {
            "type": "line",
            "values": [
              75,
              43.28358209
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Manwaring, Roy A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.04
              },
              {
                "className": "unsecured-bar",
                "value": 48.48
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 5.49
              }
            ]
          },
          46.04,
          {
            "type": "line",
            "values": [
              54.92957746,
              43.52941176
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Narlesky, James J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.19
              },
              {
                "className": "unsecured-bar",
                "value": 55.81
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          44.19,
          {
            "type": "line",
            "values": [
              49.38271605,
              43.33333333
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Broscius, Patricia C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.69
              },
              {
                "className": "unsecured-bar",
                "value": 60.12
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.2
              }
            ]
          },
          39.69,
          {
            "type": "line",
            "values": [
              37.79527559,
              41.73669468
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-3.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pendolino, Samuel V.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.72
              },
              {
                "className": "unsecured-bar",
                "value": 12.71
              },
              {
                "className": "nonmonetary-bar",
                "value": 11.01
              },
              {
                "className": "ror-bar",
                "value": 41.56
              }
            ]
          },
          34.72,
          {
            "type": "line",
            "values": [
              57.53424658,
              34.89208633
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Rapp, Anthony G. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.62
              },
              {
                "className": "unsecured-bar",
                "value": 65.96
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          32.62,
          {
            "type": "line",
            "values": [
              38.63636364,
              42.38410596
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-3.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zilhaver, Lincoln S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.2
              },
              {
                "className": "unsecured-bar",
                "value": 3.88
              },
              {
                "className": "nonmonetary-bar",
                "value": 20
              },
              {
                "className": "ror-bar",
                "value": 45.51
              }
            ]
          },
          30.2,
          {
            "type": "line",
            "values": [
              44.44444444,
              30.13435701
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Barner, Joseph K.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.44
              },
              {
                "className": "unsecured-bar",
                "value": 72.56
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          27.44,
          {
            "type": "line",
            "values": [
              26.04166667,
              27.95698925
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-1.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Marwood, Rita J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.04
              },
              {
                "className": "unsecured-bar",
                "value": 16.46
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 60.51
              }
            ]
          },
          23.04,
          {
            "type": "line",
            "values": [
              45.83333333,
              23.36244541
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.5"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Romig, Elizabeth A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 21.2
              },
              {
                "className": "unsecured-bar",
                "value": 18.89
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 59.91
              }
            ]
          },
          21.2,
          {
            "type": "line",
            "values": [
              34.28571429,
              18.07909605
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.2"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Bradford",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 45.49865229
          },
          {
            "className": "unsecured-bar",
            "value": 13.8544
          },
          {
            "className": "nonmonetary-bar",
            "value": 29.110500000000002
          },
          {
            "className": "ror-bar",
            "value": 11.536399999999999
          }
        ]
      },
      45.49865229,
      {
        "type": "line",
        "values": [
          62.26415093999999,
          45.148401830000005
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Shaw, Michael",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.71
              },
              {
                "className": "unsecured-bar",
                "value": 2.46
              },
              {
                "className": "nonmonetary-bar",
                "value": 36.16
              },
              {
                "className": "ror-bar",
                "value": 0.67
              }
            ]
          },
          60.71,
          {
            "type": "line",
            "values": [
              81.81818182,
              59.8062954
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.0"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Wheaton, Fred M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.23
              },
              {
                "className": "unsecured-bar",
                "value": 49.22
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.55
              },
              {
                "className": "ror-bar",
                "value": 6.99
              }
            ]
          },
          42.23,
          {
            "type": "line",
            "values": [
              50,
              42.10526316
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.9"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Clark, Timothy M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.82
              },
              {
                "className": "unsecured-bar",
                "value": 1.85
              },
              {
                "className": "nonmonetary-bar",
                "value": 54.78
              },
              {
                "className": "ror-bar",
                "value": 1.54
              }
            ]
          },
          41.82,
          {
            "type": "line",
            "values": [
              47.61904762,
              42.02657807
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.6"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Wilcox, Jonathan",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.79
              },
              {
                "className": "unsecured-bar",
                "value": 12.02
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.64
              },
              {
                "className": "ror-bar",
                "value": 47.54
              }
            ]
          },
          35.79,
          {
            "type": "line",
            "values": [
              50,
              35.51136364
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.5"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Lancaster",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 44.932404749999996
          },
          {
            "className": "unsecured-bar",
            "value": 39.6443
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0902
          },
          {
            "className": "ror-bar",
            "value": 15.2283
          }
        ]
      },
      44.932404749999996,
      {
        "type": "line",
        "values": [
          55.54532904,
          43.07425541
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Hamill, Nancy G.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 64.32
              },
              {
                "className": "unsecured-bar",
                "value": 35.44
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.24
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          64.32,
          {
            "type": "line",
            "values": [
              77.02702703,
              61.37724551
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Jimenez, Janice",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 63.41
              },
              {
                "className": "unsecured-bar",
                "value": 30.46
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 6.13
              }
            ]
          },
          63.41,
          {
            "type": "line",
            "values": [
              69.23076923,
              61.59793814
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Roth, Bruce A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 62.44
              },
              {
                "className": "unsecured-bar",
                "value": 35.85
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 1.46
              }
            ]
          },
          62.44,
          {
            "type": "line",
            "values": [
              66.66666667,
              63.97306397
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+2.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Benner, William E. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.79
              },
              {
                "className": "unsecured-bar",
                "value": 39.95
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          59.79,
          {
            "type": "line",
            "values": [
              71.64179104,
              57.84313725
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sheller, Raymond S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.6
              },
              {
                "className": "unsecured-bar",
                "value": 31.82
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 8.59
              }
            ]
          },
          59.6,
          {
            "type": "line",
            "values": [
              70.58823529,
              57.84615385
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hartman, Rodney H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.28
              },
              {
                "className": "unsecured-bar",
                "value": 34.21
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 8.51
              }
            ]
          },
          57.28,
          {
            "type": "line",
            "values": [
              79.16666667,
              53.91791045
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+25.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Russell, Tony S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 56.44
              },
              {
                "className": "unsecured-bar",
                "value": 37.02
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 6.53
              }
            ]
          },
          56.44,
          {
            "type": "line",
            "values": [
              71.21212121,
              55.34591195
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mylin, Stuart J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.93
              },
              {
                "className": "unsecured-bar",
                "value": 48.88
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          50.93,
          {
            "type": "line",
            "values": [
              62.96296296,
              49.79166667
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Witkonis, Adam J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.47
              },
              {
                "className": "unsecured-bar",
                "value": 38.02
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 11.1
              }
            ]
          },
          50.47,
          {
            "type": "line",
            "values": [
              56.39534884,
              48.6437613
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Tobin, Edward A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.11
              },
              {
                "className": "unsecured-bar",
                "value": 40.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.97
              },
              {
                "className": "ror-bar",
                "value": 7.22
              }
            ]
          },
          50.11,
          {
            "type": "line",
            "values": [
              61.53846154,
              48.58611825
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Albert, Scott E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.06
              },
              {
                "className": "unsecured-bar",
                "value": 50.94
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          49.06,
          {
            "type": "line",
            "values": [
              55.10204082,
              47.76470588
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bixler, Miles K.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.41
              },
              {
                "className": "unsecured-bar",
                "value": 37.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 14.89
              }
            ]
          },
          47.41,
          {
            "type": "line",
            "values": [
              59.3220339,
              45.15463918
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Chudzik, Brian E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.31
              },
              {
                "className": "unsecured-bar",
                "value": 53.69
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          46.31,
          {
            "type": "line",
            "values": [
              57.63888889,
              43.30543933
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Miller, David P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.52
              },
              {
                "className": "unsecured-bar",
                "value": 37.11
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 17.38
              }
            ]
          },
          45.52,
          {
            "type": "line",
            "values": [
              49.24623116,
              44.69026549
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+4.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mongiovi-Sponaugle, Mary",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.38
              },
              {
                "className": "unsecured-bar",
                "value": 20.37
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 34.97
              }
            ]
          },
          44.38,
          {
            "type": "line",
            "values": [
              36.55172414,
              46.69051878
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-10.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Keller, Joshua R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.28
              },
              {
                "className": "unsecured-bar",
                "value": 38.14
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 18.09
              }
            ]
          },
          43.28,
          {
            "type": "line",
            "values": [
              39.53488372,
              44.40993789
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-4.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wilt, Richard S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.83
              },
              {
                "className": "unsecured-bar",
                "value": 8.86
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 43.04
              }
            ]
          },
          42.83,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Commins, B Denise",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.23
              },
              {
                "className": "unsecured-bar",
                "value": 52.96
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 6.81
              }
            ]
          },
          40.23,
          {
            "type": "line",
            "values": [
              56.14035088,
              36.95652174
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Jamison, Mary G.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.06
              },
              {
                "className": "unsecured-bar",
                "value": 59.94
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          40.06,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Duncan, Jayne F.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.62
              },
              {
                "className": "unsecured-bar",
                "value": 63.64
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 3.74
              }
            ]
          },
          32.62,
          {
            "type": "line",
            "values": [
              47.05882353,
              32.22891566
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gummo, Douglas L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.51
              },
              {
                "className": "unsecured-bar",
                "value": 33.68
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 38.82
              }
            ]
          },
          27.51,
          {
            "type": "line",
            "values": [
              37.83783784,
              27.39018088
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Herman, Robert A. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 10.35
              },
              {
                "className": "unsecured-bar",
                "value": 24.81
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 64.83
              }
            ]
          },
          10.35,
          {
            "type": "line",
            "values": [
              17.14285714,
              9.725158562
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Reinaker, Dennis E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 6.41
              },
              {
                "className": "unsecured-bar",
                "value": 46.45
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.23
              },
              {
                "className": "ror-bar",
                "value": 46.91
              }
            ]
          },
          6.41,
          {
            "type": "line",
            "values": [
              12,
              6
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.0"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Cambria",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 44.29388101
          },
          {
            "className": "unsecured-bar",
            "value": 33.629799999999996
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0424
          },
          {
            "className": "ror-bar",
            "value": 21.6222
          }
        ]
      },
      44.29388101,
      {
        "type": "line",
        "values": [
          65.52083332999999,
          39.145907470000004
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Musulin, Michael",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.29
              },
              {
                "className": "unsecured-bar",
                "value": 19.62
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 25.09
              }
            ]
          },
          55.29,
          {
            "type": "line",
            "values": [
              65.19607843,
              50.94339623
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zanghi, Mary Ann",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 54.42
              },
              {
                "className": "unsecured-bar",
                "value": 19.81
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.24
              },
              {
                "className": "ror-bar",
                "value": 25.54
              }
            ]
          },
          54.42,
          {
            "type": "line",
            "values": [
              77.52808989,
              47.8125
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+29.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Varner, Rick W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.68
              },
              {
                "className": "unsecured-bar",
                "value": 45.92
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.4
              }
            ]
          },
          53.68,
          {
            "type": "line",
            "values": [
              77.04918033,
              51.03926097
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+26.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Creany, Fred",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.92
              },
              {
                "className": "unsecured-bar",
                "value": 10.12
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 39.97
              }
            ]
          },
          49.92,
          {
            "type": "line",
            "values": [
              92.20779221,
              43.46978558
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+48.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Price, Kevin J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.55
              },
              {
                "className": "unsecured-bar",
                "value": 56.93
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 2.52
              }
            ]
          },
          40.55,
          {
            "type": "line",
            "values": [
              52.45283019,
              34.89278752
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Prebish, John Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.68
              },
              {
                "className": "unsecured-bar",
                "value": 40.08
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2
              },
              {
                "className": "ror-bar",
                "value": 22.04
              }
            ]
          },
          37.68,
          {
            "type": "line",
            "values": [
              68.33333333,
              33.17865429
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+35.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Barron, John W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.07
              },
              {
                "className": "unsecured-bar",
                "value": 37.54
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 26.39
              }
            ]
          },
          36.07,
          {
            "type": "line",
            "values": [
              62.79069767,
              30.84291188
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zungali, Michael",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.31
              },
              {
                "className": "unsecured-bar",
                "value": 31.63
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 32.86
              }
            ]
          },
          35.31,
          {
            "type": "line",
            "values": [
              83.33333333,
              30.90909091
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+52.4"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "York",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 44.27380952
          },
          {
            "className": "unsecured-bar",
            "value": 15.765299999999998
          },
          {
            "className": "nonmonetary-bar",
            "value": 5.7181999999999995
          },
          {
            "className": "ror-bar",
            "value": 33.3671
          }
        ]
      },
      44.27380952,
      {
        "type": "line",
        "values": [
          54.119850189999994,
          41.118447870000004
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Meisenhelter, Douglas F.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 81.79
              },
              {
                "className": "unsecured-bar",
                "value": 17.45
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.11
              }
            ]
          },
          81.79,
          {
            "type": "line",
            "values": [
              87.36462094,
              79.33227345
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+8.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Martin, Richard E. II",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 74.9
              },
              {
                "className": "unsecured-bar",
                "value": 21.84
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2
              },
              {
                "className": "ror-bar",
                "value": 2.65
              }
            ]
          },
          74.9,
          {
            "type": "line",
            "values": [
              86.79245283,
              69.13580247
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Eshbach, David C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 54.02
              },
              {
                "className": "unsecured-bar",
                "value": 9.62
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.65
              },
              {
                "className": "ror-bar",
                "value": 23.45
              }
            ]
          },
          54.02,
          {
            "type": "line",
            "values": [
              65.6,
              51.9047619
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Clancy, Jennifer J.P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.55
              },
              {
                "className": "unsecured-bar",
                "value": 19.84
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.58
              },
              {
                "className": "ror-bar",
                "value": 23.87
              }
            ]
          },
          53.55,
          {
            "type": "line",
            "values": [
              57.22543353,
              52.38095238
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+4.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Morgan, James H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.83
              },
              {
                "className": "unsecured-bar",
                "value": 15.27
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.51
              },
              {
                "className": "ror-bar",
                "value": 30.75
              }
            ]
          },
          51.83,
          {
            "type": "line",
            "values": [
              52.43902439,
              52.21843003
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+0.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Groom, Walter",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.99
              },
              {
                "className": "unsecured-bar",
                "value": 27.23
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.99
              },
              {
                "className": "ror-bar",
                "value": 20.79
              }
            ]
          },
          50.99,
          {
            "type": "line",
            "values": [
              62.68656716,
              46.21212121
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Williams, Linda L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.54
              },
              {
                "className": "unsecured-bar",
                "value": 2.78
              },
              {
                "className": "nonmonetary-bar",
                "value": 14.37
              },
              {
                "className": "ror-bar",
                "value": 32.15
              }
            ]
          },
          50.54,
          {
            "type": "line",
            "values": [
              57.73584906,
              45.57640751
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Haskell, Ronald J. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.41
              },
              {
                "className": "unsecured-bar",
                "value": 16.19
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.25
              },
              {
                "className": "ror-bar",
                "value": 25.56
              }
            ]
          },
          48.41,
          {
            "type": "line",
            "values": [
              47.87644788,
              49.31506849
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-1.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bloss, Barry L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.99
              },
              {
                "className": "unsecured-bar",
                "value": 5.61
              },
              {
                "className": "nonmonetary-bar",
                "value": 14.37
              },
              {
                "className": "ror-bar",
                "value": 32.75
              }
            ]
          },
          46.99,
          {
            "type": "line",
            "values": [
              53.28638498,
              44.73180077
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+8.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Miner, James S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.07
              },
              {
                "className": "unsecured-bar",
                "value": 6.5
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.22
              },
              {
                "className": "ror-bar",
                "value": 46.07
              }
            ]
          },
          46.07,
          {
            "type": "line",
            "values": [
              73.17073171,
              40.75286416
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+32.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Manifold, Laura S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.35
              },
              {
                "className": "unsecured-bar",
                "value": 16.45
              },
              {
                "className": "nonmonetary-bar",
                "value": 5.15
              },
              {
                "className": "ror-bar",
                "value": 34.91
              }
            ]
          },
          43.35,
          {
            "type": "line",
            "values": [
              48.61111111,
              42.09558824
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Laird, Scott",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.05
              },
              {
                "className": "unsecured-bar",
                "value": 7.08
              },
              {
                "className": "nonmonetary-bar",
                "value": 13.35
              },
              {
                "className": "ror-bar",
                "value": 36.38
              }
            ]
          },
          43.05,
          {
            "type": "line",
            "values": [
              62.8742515,
              36.69064748
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+26.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Toluba, Joel N.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.99
              },
              {
                "className": "unsecured-bar",
                "value": 23.72
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.45
              },
              {
                "className": "ror-bar",
                "value": 33.53
              }
            ]
          },
          41.99,
          {
            "type": "line",
            "values": [
              44.56928839,
              41.40625
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+3.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gross, Scott J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.36
              },
              {
                "className": "unsecured-bar",
                "value": 17.48
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.29
              },
              {
                "className": "ror-bar",
                "value": 34.54
              }
            ]
          },
          41.36,
          {
            "type": "line",
            "values": [
              62.28571429,
              36.18157543
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+26.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Albright, Keith L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.73
              },
              {
                "className": "unsecured-bar",
                "value": 31.53
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.65
              },
              {
                "className": "ror-bar",
                "value": 25.09
              }
            ]
          },
          40.73,
          {
            "type": "line",
            "values": [
              44.50549451,
              40.29850746
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+4.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Thomas, Richard T.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.78
              },
              {
                "className": "unsecured-bar",
                "value": 14.66
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.89
              },
              {
                "className": "ror-bar",
                "value": 34.32
              }
            ]
          },
          39.78,
          {
            "type": "line",
            "values": [
              52.84552846,
              37.3015873
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Reilly, Thomas J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.6
              },
              {
                "className": "unsecured-bar",
                "value": 28.6
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.2
              },
              {
                "className": "ror-bar",
                "value": 30.6
              }
            ]
          },
          39.6,
          {
            "type": "line",
            "values": [
              60,
              36.29807692
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+23.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dubs, Dwayne A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.35
              },
              {
                "className": "unsecured-bar",
                "value": 14.3
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.36
              },
              {
                "className": "ror-bar",
                "value": 48.75
              }
            ]
          },
          36.35,
          {
            "type": "line",
            "values": [
              61.14649682,
              30.81481481
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+30.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Eckenrode, Robert A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.2
              },
              {
                "className": "unsecured-bar",
                "value": 12.05
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.41
              },
              {
                "className": "ror-bar",
                "value": 52.34
              }
            ]
          },
          33.2,
          {
            "type": "line",
            "values": [
              51.04895105,
              29.22297297
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fishel, John H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.29
              },
              {
                "className": "unsecured-bar",
                "value": 7.59
              },
              {
                "className": "nonmonetary-bar",
                "value": 7.19
              },
              {
                "className": "ror-bar",
                "value": 50.6
              }
            ]
          },
          31.29,
          {
            "type": "line",
            "values": [
              51.61290323,
              28.77358491
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Oberdorf, Jeffrey L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.24
              },
              {
                "className": "unsecured-bar",
                "value": 21.36
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.57
              },
              {
                "className": "ror-bar",
                "value": 45.43
              }
            ]
          },
          30.24,
          {
            "type": "line",
            "values": [
              30.9178744,
              29.94652406
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+1.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ness, Harry M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 21.35
              },
              {
                "className": "unsecured-bar",
                "value": 48.88
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.69
              },
              {
                "className": "ror-bar",
                "value": 24.16
              }
            ]
          },
          21.35,
          {
            "type": "line",
            "values": [
              15.09433962,
              24.79338843
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-9.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Edie, Nancy L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 18.12
              },
              {
                "className": "unsecured-bar",
                "value": 2.35
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.18
              },
              {
                "className": "ror-bar",
                "value": 78.12
              }
            ]
          },
          18.12,
          {
            "type": "line",
            "values": [
              22.09302326,
              16.04584527
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.0"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Fayette",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 44.27074081
          },
          {
            "className": "unsecured-bar",
            "value": 54.6505
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 0.7825000000000001
          }
        ]
      },
      44.27074081,
      {
        "type": "line",
        "values": [
          54,
          42.30092389
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Jeffries, Jennifer L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.58
              },
              {
                "className": "unsecured-bar",
                "value": 47.25
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          52.58,
          {
            "type": "line",
            "values": [
              67.46031746,
              48.48484848
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dennis, Wendy D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.96
              },
              {
                "className": "unsecured-bar",
                "value": 52.88
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.16
              }
            ]
          },
          46.96,
          {
            "type": "line",
            "values": [
              54.54545455,
              45.65217391
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+8.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Haggerty, Ronald J. Sr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.95
              },
              {
                "className": "unsecured-bar",
                "value": 53.93
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          45.95,
          {
            "type": "line",
            "values": [
              59.40594059,
              44.37172775
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Shimshock, Daniel C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.89
              },
              {
                "className": "unsecured-bar",
                "value": 54.11
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          45.89,
          {
            "type": "line",
            "values": [
              57.89473684,
              43.59861592
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Metros, Michael",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.41
              },
              {
                "className": "unsecured-bar",
                "value": 54.49
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          45.41,
          {
            "type": "line",
            "values": [
              52.2556391,
              43.50132626
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+8.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Defino, Michael J. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.78
              },
              {
                "className": "unsecured-bar",
                "value": 58.78
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          40.78,
          {
            "type": "line",
            "values": [
              42.22222222,
              40.18518519
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+2.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kasunic, Richard II",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.85
              },
              {
                "className": "unsecured-bar",
                "value": 62.15
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          37.85,
          {
            "type": "line",
            "values": [
              50.45045045,
              36.19456366
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.3"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Erie",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 43.95330739
          },
          {
            "className": "unsecured-bar",
            "value": 18.932
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.6072
          },
          {
            "className": "ror-bar",
            "value": 36.493900000000004
          }
        ]
      },
      43.95330739,
      {
        "type": "line",
        "values": [
          63.73239437,
          37.027147310000004
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Dipaolo, Dominick",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 97.36
              },
              {
                "className": "unsecured-bar",
                "value": 2.35
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.29
              }
            ]
          },
          97.36,
          {
            "type": "line",
            "values": [
              98.31460674,
              97.35099338
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+1.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Carney, Thomas",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 91.02
              },
              {
                "className": "unsecured-bar",
                "value": 8.38
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3
              },
              {
                "className": "ror-bar",
                "value": 0.3
              }
            ]
          },
          91.02,
          {
            "type": "line",
            "values": [
              91.07142857,
              91.09589041
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-0.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mack, Suzanne C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.68
              },
              {
                "className": "unsecured-bar",
                "value": 10.04
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.49
              },
              {
                "className": "ror-bar",
                "value": 24.57
              }
            ]
          },
          60.68,
          {
            "type": "line",
            "values": [
              61.56862745,
              61.8556701
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-0.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Urbaniak, Paul G.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.33
              },
              {
                "className": "unsecured-bar",
                "value": 6.05
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.46
              },
              {
                "className": "ror-bar",
                "value": 32.15
              }
            ]
          },
          60.33,
          {
            "type": "line",
            "values": [
              60.91954023,
              60.76555024
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+0.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bizzarro, Paul A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.66
              },
              {
                "className": "unsecured-bar",
                "value": 13.36
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.76
              },
              {
                "className": "ror-bar",
                "value": 37.21
              }
            ]
          },
          48.66,
          {
            "type": "line",
            "values": [
              63.83928571,
              38.04347826
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+25.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hammer, Scott B.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.32
              },
              {
                "className": "unsecured-bar",
                "value": 13.06
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 43.62
              }
            ]
          },
          43.32,
          {
            "type": "line",
            "values": [
              64.51612903,
              41.27516779
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+23.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mackendrick, Chris K.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.37
              },
              {
                "className": "unsecured-bar",
                "value": 61.39
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.24
              }
            ]
          },
          38.37,
          {
            "type": "line",
            "values": [
              83.33333333,
              33.60433604
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+49.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fischer, Deborah",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.71
              },
              {
                "className": "unsecured-bar",
                "value": 7.63
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.12
              },
              {
                "className": "ror-bar",
                "value": 52.54
              }
            ]
          },
          37.71,
          {
            "type": "line",
            "values": [
              45.16129032,
              39.5256917
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Manzi, Paul",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.25
              },
              {
                "className": "unsecured-bar",
                "value": 62.18
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 2.57
              }
            ]
          },
          35.25,
          {
            "type": "line",
            "values": [
              56.52173913,
              33.33333333
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+23.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Stuck-Lewis, Denise",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.14
              },
              {
                "className": "unsecured-bar",
                "value": 9.29
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.24
              },
              {
                "className": "ror-bar",
                "value": 58.1
              }
            ]
          },
          32.14,
          {
            "type": "line",
            "values": [
              54.83870968,
              28.74251497
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+26.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Muir, Shannon L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.93
              },
              {
                "className": "unsecured-bar",
                "value": 0.73
              },
              {
                "className": "nonmonetary-bar",
                "value": 55.84
              },
              {
                "className": "ror-bar",
                "value": 13.14
              }
            ]
          },
          29.93,
          {
            "type": "line",
            "values": [
              42.42424242,
              32.01320132
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Strohmeyer, Susan D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.22
              },
              {
                "className": "unsecured-bar",
                "value": 9.07
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.57
              },
              {
                "className": "ror-bar",
                "value": 63.14
              }
            ]
          },
          27.22,
          {
            "type": "line",
            "values": [
              41.30434783,
              25
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cooper, Alan B.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.17
              },
              {
                "className": "unsecured-bar",
                "value": 10.2
              },
              {
                "className": "nonmonetary-bar",
                "value": 25.85
              },
              {
                "className": "ror-bar",
                "value": 38.1
              }
            ]
          },
          25.17,
          {
            "type": "line",
            "values": [
              36.36363636,
              24.26035503
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.1"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Krahe, Mark R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.31
              },
              {
                "className": "unsecured-bar",
                "value": 12.24
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 63.45
              }
            ]
          },
          24.31,
          {
            "type": "line",
            "values": [
              30.55555556,
              24.22997947
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McGowan, Brian M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 18.8
              },
              {
                "className": "unsecured-bar",
                "value": 17.54
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 63.67
              }
            ]
          },
          18.8,
          {
            "type": "line",
            "values": [
              34.73684211,
              16.00753296
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nichols, Brenda",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 17.81
              },
              {
                "className": "unsecured-bar",
                "value": 13.44
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 68.75
              }
            ]
          },
          17.81,
          {
            "type": "line",
            "values": [
              25,
              18.39464883
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.6"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Allegheny",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 43.50802205
          },
          {
            "className": "unsecured-bar",
            "value": 2.7704
          },
          {
            "className": "nonmonetary-bar",
            "value": 23.8085
          },
          {
            "className": "ror-bar",
            "value": 29.5724
          }
        ]
      },
      43.50802205,
      {
        "type": "line",
        "values": [
          57.06645057000001,
          35.29897333
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Welsh, Regis C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 85.43
              },
              {
                "className": "unsecured-bar",
                "value": 0.64
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.72
              },
              {
                "className": "ror-bar",
                "value": 10.21
              }
            ]
          },
          85.43,
          {
            "type": "line",
            "values": [
              90.43478261,
              80.69414317
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cramer, Jesse J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 75.62
              },
              {
                "className": "unsecured-bar",
                "value": 15.89
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 8.39
              }
            ]
          },
          75.62,
          {
            "type": "line",
            "values": [
              81.08108108,
              58.88077859
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Brletic, Thomas S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 73.89
              },
              {
                "className": "unsecured-bar",
                "value": 0.87
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.57
              },
              {
                "className": "ror-bar",
                "value": 16.57
              }
            ]
          },
          73.89,
          {
            "type": "line",
            "values": [
              83.11444653,
              61.09215017
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Tibbs, Edward A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 73.79
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 19.59
              },
              {
                "className": "ror-bar",
                "value": 6.49
              }
            ]
          },
          73.79,
          {
            "type": "line",
            "values": [
              79.70660147,
              68.33333333
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Barner, Robert L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 71.38
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 18.73
              },
              {
                "className": "ror-bar",
                "value": 9.89
              }
            ]
          },
          71.38,
          {
            "type": "line",
            "values": [
              77.04918033,
              64.17322835
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Armour, John W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 67.19
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 25.28
              },
              {
                "className": "ror-bar",
                "value": 7.53
              }
            ]
          },
          67.19,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Costa, Ron Sr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 58.39
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 18.08
              },
              {
                "className": "ror-bar",
                "value": 23.53
              }
            ]
          },
          58.39,
          {
            "type": "line",
            "values": [
              62.44541485,
              55.04587156
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ricciardi, Gene",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.89
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 19.07
              },
              {
                "className": "ror-bar",
                "value": 27.04
              }
            ]
          },
          53.89,
          {
            "type": "line",
            "values": [
              63.45381526,
              45.73643411
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Martini, Randy",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.25
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 24.68
              },
              {
                "className": "ror-bar",
                "value": 22.08
              }
            ]
          },
          53.25,
          {
            "type": "line",
            "values": [
              63.79928315,
              43.25396825
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Motznik, James A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.79
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 19.98
              },
              {
                "className": "ror-bar",
                "value": 28.24
              }
            ]
          },
          51.79,
          {
            "type": "line",
            "values": [
              58.31325301,
              45.47803618
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hromyak, Leonard J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.42
              },
              {
                "className": "unsecured-bar",
                "value": 0.24
              },
              {
                "className": "nonmonetary-bar",
                "value": 35.31
              },
              {
                "className": "ror-bar",
                "value": 13.03
              }
            ]
          },
          51.42,
          {
            "type": "line",
            "values": [
              55.05050505,
              49.10714286
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Miller, Thomas Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.86
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.09
              },
              {
                "className": "ror-bar",
                "value": 44.04
              }
            ]
          },
          49.86,
          {
            "type": "line",
            "values": [
              70.3125,
              38.49557522
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bengel, Carolyn S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.29
              },
              {
                "className": "unsecured-bar",
                "value": 1.42
              },
              {
                "className": "nonmonetary-bar",
                "value": 16.27
              },
              {
                "className": "ror-bar",
                "value": 33.02
              }
            ]
          },
          49.29,
          {
            "type": "line",
            "values": [
              68.27956989,
              40.55944056
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+27.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Butler, Daniel E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.64
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 25
              },
              {
                "className": "ror-bar",
                "value": 26.36
              }
            ]
          },
          48.64,
          {
            "type": "line",
            "values": [
              56.30252101,
              42.85714286
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Larotonda, Blaise P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.09
              },
              {
                "className": "unsecured-bar",
                "value": 0.26
              },
              {
                "className": "nonmonetary-bar",
                "value": 14.29
              },
              {
                "className": "ror-bar",
                "value": 38.36
              }
            ]
          },
          47.09,
          {
            "type": "line",
            "values": [
              71.02803738,
              37.07865169
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+33.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sosovicka, David J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.05
              },
              {
                "className": "unsecured-bar",
                "value": 0.21
              },
              {
                "className": "nonmonetary-bar",
                "value": 26.37
              },
              {
                "className": "ror-bar",
                "value": 26.37
              }
            ]
          },
          47.05,
          {
            "type": "line",
            "values": [
              64.42307692,
              42.23433243
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Shaffer, Peter H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.63
              },
              {
                "className": "unsecured-bar",
                "value": 1.23
              },
              {
                "className": "nonmonetary-bar",
                "value": 20.86
              },
              {
                "className": "ror-bar",
                "value": 31.29
              }
            ]
          },
          46.63,
          {
            "type": "line",
            "values": [
              60,
              48.03149606
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Stephens, Craig C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.46
              },
              {
                "className": "unsecured-bar",
                "value": 8.02
              },
              {
                "className": "nonmonetary-bar",
                "value": 19.03
              },
              {
                "className": "ror-bar",
                "value": 26.49
              }
            ]
          },
          46.46,
          {
            "type": "line",
            "values": [
              69.15422886,
              32.20858896
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+36.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kovach, David T.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.59
              },
              {
                "className": "unsecured-bar",
                "value": 10.55
              },
              {
                "className": "nonmonetary-bar",
                "value": 7.21
              },
              {
                "className": "ror-bar",
                "value": 37.12
              }
            ]
          },
          44.59,
          {
            "type": "line",
            "values": [
              62.16216216,
              41.50684932
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Joyce, Dennis R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.31
              },
              {
                "className": "unsecured-bar",
                "value": 0.29
              },
              {
                "className": "nonmonetary-bar",
                "value": 36.73
              },
              {
                "className": "ror-bar",
                "value": 18.08
              }
            ]
          },
          44.31,
          {
            "type": "line",
            "values": [
              53.52112676,
              38.26530612
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cooper, Kevin E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44
              },
              {
                "className": "unsecured-bar",
                "value": 2.46
              },
              {
                "className": "nonmonetary-bar",
                "value": 25.08
              },
              {
                "className": "ror-bar",
                "value": 28.46
              }
            ]
          },
          44,
          {
            "type": "line",
            "values": [
              51.37614679,
              36.70886076
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fullerton, William T.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.47
              },
              {
                "className": "unsecured-bar",
                "value": 2.25
              },
              {
                "className": "nonmonetary-bar",
                "value": 10.28
              },
              {
                "className": "ror-bar",
                "value": 42.29
              }
            ]
          },
          43.47,
          {
            "type": "line",
            "values": [
              74.02597403,
              40.08483563
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+33.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Martin, Armand",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.25
              },
              {
                "className": "unsecured-bar",
                "value": 0.99
              },
              {
                "className": "nonmonetary-bar",
                "value": 44.84
              },
              {
                "className": "ror-bar",
                "value": 10.71
              }
            ]
          },
          43.25,
          {
            "type": "line",
            "values": [
              50.75376884,
              38.9261745
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Riazzi, Eugene F. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.92
              },
              {
                "className": "unsecured-bar",
                "value": 0.33
              },
              {
                "className": "nonmonetary-bar",
                "value": 23.16
              },
              {
                "className": "ror-bar",
                "value": 34.42
              }
            ]
          },
          41.92,
          {
            "type": "line",
            "values": [
              45.73170732,
              37.59124088
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+8.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mills, Beth S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.74
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 16.52
              },
              {
                "className": "ror-bar",
                "value": 42.74
              }
            ]
          },
          40.74,
          {
            "type": "line",
            "values": [
              61.20689655,
              30.43478261
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+30.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ceoffe, Anthony M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.35
              },
              {
                "className": "unsecured-bar",
                "value": 3.31
              },
              {
                "className": "nonmonetary-bar",
                "value": 26.37
              },
              {
                "className": "ror-bar",
                "value": 29.83
              }
            ]
          },
          40.35,
          {
            "type": "line",
            "values": [
              47.50733138,
              33.71757925
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Arnoni, Ronald",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.83
              },
              {
                "className": "unsecured-bar",
                "value": 15.93
              },
              {
                "className": "nonmonetary-bar",
                "value": 41.09
              },
              {
                "className": "ror-bar",
                "value": 3.14
              }
            ]
          },
          39.83,
          {
            "type": "line",
            "values": [
              71.55963303,
              29.94505495
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+41.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Petite, Oscar J. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.55
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 24.44
              },
              {
                "className": "ror-bar",
                "value": 36.01
              }
            ]
          },
          39.55,
          {
            "type": "line",
            "values": [
              50.32258065,
              29.53020134
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Rushing, Derwin",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.55
              },
              {
                "className": "unsecured-bar",
                "value": 0.4
              },
              {
                "className": "nonmonetary-bar",
                "value": 29.69
              },
              {
                "className": "ror-bar",
                "value": 30.36
              }
            ]
          },
          39.55,
          {
            "type": "line",
            "values": [
              48.55643045,
              30.72625698
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hanley, James J. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.9
              },
              {
                "className": "unsecured-bar",
                "value": 2.54
              },
              {
                "className": "nonmonetary-bar",
                "value": 25.19
              },
              {
                "className": "ror-bar",
                "value": 33.37
              }
            ]
          },
          38.9,
          {
            "type": "line",
            "values": [
              49.79079498,
              26.92307692
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Saveikis, Anthony William",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.71
              },
              {
                "className": "unsecured-bar",
                "value": 0.59
              },
              {
                "className": "nonmonetary-bar",
                "value": 14.37
              },
              {
                "className": "ror-bar",
                "value": 46.33
              }
            ]
          },
          38.71,
          {
            "type": "line",
            "values": [
              79.41176471,
              21.09704641
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+58.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wagner, William",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.51
              },
              {
                "className": "unsecured-bar",
                "value": 7.14
              },
              {
                "className": "nonmonetary-bar",
                "value": 11.8
              },
              {
                "className": "ror-bar",
                "value": 42.55
              }
            ]
          },
          38.51,
          {
            "type": "line",
            "values": [
              69.47368421,
              26.60550459
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+42.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Smith, Tara",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.19
              },
              {
                "className": "unsecured-bar",
                "value": 6.61
              },
              {
                "className": "nonmonetary-bar",
                "value": 38.13
              },
              {
                "className": "ror-bar",
                "value": 19.07
              }
            ]
          },
          36.19,
          {
            "type": "line",
            "values": [
              57.06214689,
              25.3776435
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ravenstahl, Robert P. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.28
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 31.44
              },
              {
                "className": "ror-bar",
                "value": 34.28
              }
            ]
          },
          34.28,
          {
            "type": "line",
            "values": [
              38.30645161,
              32.08955224
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Stoughton, Lewis E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.96
              },
              {
                "className": "unsecured-bar",
                "value": 4.4
              },
              {
                "className": "nonmonetary-bar",
                "value": 15.47
              },
              {
                "className": "ror-bar",
                "value": 45.28
              }
            ]
          },
          33.96,
          {
            "type": "line",
            "values": [
              66,
              34.16856492
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "DeLuca, Anthony",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.17
              },
              {
                "className": "unsecured-bar",
                "value": 0.24
              },
              {
                "className": "nonmonetary-bar",
                "value": 21.88
              },
              {
                "className": "ror-bar",
                "value": 44.71
              }
            ]
          },
          33.17,
          {
            "type": "line",
            "values": [
              41.82692308,
              25.5
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dzvonick, Robert Paul",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.07
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.73
              },
              {
                "className": "ror-bar",
                "value": 59.01
              }
            ]
          },
          32.07,
          {
            "type": "line",
            "values": [
              61.37931034,
              21.0106383
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+40.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ford, Robert L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.56
              },
              {
                "className": "unsecured-bar",
                "value": 0.28
              },
              {
                "className": "nonmonetary-bar",
                "value": 66.48
              },
              {
                "className": "ror-bar",
                "value": 1.68
              }
            ]
          },
          31.56,
          {
            "type": "line",
            "values": [
              44.68085106,
              26.53846154
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Olasz, Richard D. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.23
              },
              {
                "className": "unsecured-bar",
                "value": 1.67
              },
              {
                "className": "nonmonetary-bar",
                "value": 43.12
              },
              {
                "className": "ror-bar",
                "value": 23.98
              }
            ]
          },
          31.23,
          {
            "type": "line",
            "values": [
              39.73799127,
              24.42244224
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "King, Richard G.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.79
              },
              {
                "className": "unsecured-bar",
                "value": 2.45
              },
              {
                "className": "nonmonetary-bar",
                "value": 47.41
              },
              {
                "className": "ror-bar",
                "value": 19.35
              }
            ]
          },
          30.79,
          {
            "type": "line",
            "values": [
              40.90909091,
              23.90243902
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Haggerty, Sue",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.69
              },
              {
                "className": "unsecured-bar",
                "value": 12.94
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.38
              },
              {
                "className": "ror-bar",
                "value": 51.36
              }
            ]
          },
          30.69,
          {
            "type": "line",
            "values": [
              65,
              31.11111111
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+33.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zucco, Linda",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 30
              },
              {
                "className": "ror-bar",
                "value": 39.6
              }
            ]
          },
          30,
          {
            "type": "line",
            "values": [
              40.74074074,
              24.84848485
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Caulfield, Thomas",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.88
              },
              {
                "className": "unsecured-bar",
                "value": 0.3
              },
              {
                "className": "nonmonetary-bar",
                "value": 64.2
              },
              {
                "className": "ror-bar",
                "value": 5.62
              }
            ]
          },
          29.88,
          {
            "type": "line",
            "values": [
              33.33333333,
              26.14379085
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Schricker, Scott H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.03
              },
              {
                "className": "unsecured-bar",
                "value": 0.56
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.68
              },
              {
                "className": "ror-bar",
                "value": 65.73
              }
            ]
          },
          29.03,
          {
            "type": "line",
            "values": [
              32.28070175,
              24.79674797
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Swearingen-Batch, Carla M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.58
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 58.18
              },
              {
                "className": "ror-bar",
                "value": 14.24
              }
            ]
          },
          27.58,
          {
            "type": "line",
            "values": [
              51.51515152,
              19.04761905
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+32.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Eichler, Roxanne Sakoian",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.55
              },
              {
                "className": "unsecured-bar",
                "value": 6.02
              },
              {
                "className": "nonmonetary-bar",
                "value": 18.52
              },
              {
                "className": "ror-bar",
                "value": 47.92
              }
            ]
          },
          27.55,
          {
            "type": "line",
            "values": [
              39.22651934,
              19.24686192
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Barton, David J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.52
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 10.74
              },
              {
                "className": "ror-bar",
                "value": 61.74
              }
            ]
          },
          27.52,
          {
            "type": "line",
            "values": [
              51.85185185,
              20.30769231
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McGraw-Desmet, Maureen",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.38
              },
              {
                "className": "unsecured-bar",
                "value": 0.86
              },
              {
                "className": "nonmonetary-bar",
                "value": 19.02
              },
              {
                "className": "ror-bar",
                "value": 52.74
              }
            ]
          },
          27.38,
          {
            "type": "line",
            "values": [
              49.51456311,
              17.94871795
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lang, Elissa M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.27
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 40.19
              },
              {
                "className": "ror-bar",
                "value": 32.54
              }
            ]
          },
          27.27,
          {
            "type": "line",
            "values": [
              46.15384615,
              16.2055336
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+29.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cercone, Mary A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.22
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 61.74
              },
              {
                "className": "ror-bar",
                "value": 13.04
              }
            ]
          },
          25.22,
          {
            "type": "line",
            "values": [
              33.66834171,
              19.12350598
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Opiela, Richard J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.7
              },
              {
                "className": "unsecured-bar",
                "value": 16.95
              },
              {
                "className": "nonmonetary-bar",
                "value": 30.75
              },
              {
                "className": "ror-bar",
                "value": 27.6
              }
            ]
          },
          24.7,
          {
            "type": "line",
            "values": [
              49.52380952,
              16.39344262
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+33.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kaiser, Ralph",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.17
              },
              {
                "className": "unsecured-bar",
                "value": 0.19
              },
              {
                "className": "nonmonetary-bar",
                "value": 10.72
              },
              {
                "className": "ror-bar",
                "value": 64.91
              }
            ]
          },
          24.17,
          {
            "type": "line",
            "values": [
              41.40127389,
              17.13395639
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+24.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Swan, Tom",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.11
              },
              {
                "className": "unsecured-bar",
                "value": 0.24
              },
              {
                "className": "nonmonetary-bar",
                "value": 29.36
              },
              {
                "className": "ror-bar",
                "value": 46.3
              }
            ]
          },
          24.11,
          {
            "type": "line",
            "values": [
              56.04395604,
              15.17027864
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+40.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Shaffer, William",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.33
              },
              {
                "className": "unsecured-bar",
                "value": 0.83
              },
              {
                "className": "nonmonetary-bar",
                "value": 42.5
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          23.33,
          {
            "type": "line",
            "values": [
              21.42857143,
              21.01910828
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+0.4"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Murray, Mary P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 22.8
              },
              {
                "className": "unsecured-bar",
                "value": 0.16
              },
              {
                "className": "nonmonetary-bar",
                "value": 36.48
              },
              {
                "className": "ror-bar",
                "value": 40.25
              }
            ]
          },
          22.8,
          {
            "type": "line",
            "values": [
              35.4679803,
              17.38095238
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Seibel, Wayne D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 20.58
              },
              {
                "className": "unsecured-bar",
                "value": 12.08
              },
              {
                "className": "nonmonetary-bar",
                "value": 18.57
              },
              {
                "className": "ror-bar",
                "value": 48.32
              }
            ]
          },
          20.58,
          {
            "type": "line",
            "values": [
              50,
              21.49901381
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+28.5"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Herbst, Jeffrey L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 17.67
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 13.25
              },
              {
                "className": "ror-bar",
                "value": 68.88
              }
            ]
          },
          17.67,
          {
            "type": "line",
            "values": [
              24.36548223,
              13.94557823
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Manning, Jeffrey A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 7.91
              },
              {
                "className": "unsecured-bar",
                "value": 1.35
              },
              {
                "className": "nonmonetary-bar",
                "value": 68.69
              },
              {
                "className": "ror-bar",
                "value": 21.72
              }
            ]
          },
          7.91,
          {
            "type": "line",
            "values": [
              13.4529148,
              7.142857143
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.3"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Dauphin",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 42.44132779
          },
          {
            "className": "unsecured-bar",
            "value": 37.7645
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.0226000000000002
          },
          {
            "className": "ror-bar",
            "value": 18.4838
          }
        ]
      },
      42.44132779,
      {
        "type": "line",
        "values": [
          51.21710526,
          36.4556962
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Shugars, Raymond F.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 90.57
              },
              {
                "className": "unsecured-bar",
                "value": 8
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 1.43
              }
            ]
          },
          90.57,
          {
            "type": "line",
            "values": [
              91.74757282,
              88.57142857
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+3.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Semic, Steven M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 84.79
              },
              {
                "className": "unsecured-bar",
                "value": 14.86
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.35
              }
            ]
          },
          84.79,
          {
            "type": "line",
            "values": [
              85.87443946,
              84.1191067
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+1.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zozos, George A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 65.83
              },
              {
                "className": "unsecured-bar",
                "value": 32.5
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 1.17
              }
            ]
          },
          65.83,
          {
            "type": "line",
            "values": [
              68.24512535,
              64.78873239
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+3.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pianka, Barbara",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.16
              },
              {
                "className": "unsecured-bar",
                "value": 40.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          59.16,
          {
            "type": "line",
            "values": [
              63.03317536,
              53.63984674
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zozos, Paul T.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.32
              },
              {
                "className": "unsecured-bar",
                "value": 49.04
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.64
              }
            ]
          },
          50.32,
          {
            "type": "line",
            "values": [
              54.35435435,
              45.66037736
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+8.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Witmer, Lowell A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.95
              },
              {
                "className": "unsecured-bar",
                "value": 20.58
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 32.32
              }
            ]
          },
          46.95,
          {
            "type": "line",
            "values": [
              65.46391753,
              39.26829268
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+26.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lenker, James A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.25
              },
              {
                "className": "unsecured-bar",
                "value": 56.97
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.77
              }
            ]
          },
          42.25,
          {
            "type": "line",
            "values": [
              43.58974359,
              42.19653179
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+1.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wenner, William C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.78
              },
              {
                "className": "unsecured-bar",
                "value": 12.12
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 46.1
              }
            ]
          },
          41.78,
          {
            "type": "line",
            "values": [
              48.33333333,
              37.57338552
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lenker, Kenneth A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.08
              },
              {
                "className": "unsecured-bar",
                "value": 24.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 35.22
              }
            ]
          },
          40.08,
          {
            "type": "line",
            "values": [
              45.63953488,
              35.37234043
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McKnight, Sonya M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.06
              },
              {
                "className": "unsecured-bar",
                "value": 25.84
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 34.51
              }
            ]
          },
          39.06,
          {
            "type": "line",
            "values": [
              39.04282116,
              43.55555556
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-4.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Judy, David H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.99
              },
              {
                "className": "unsecured-bar",
                "value": 19.75
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 41.13
              }
            ]
          },
          38.99,
          {
            "type": "line",
            "values": [
              55.73770492,
              31.30929791
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+24.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "O'Leary, David",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.03
              },
              {
                "className": "unsecured-bar",
                "value": 61.86
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 2.22
              }
            ]
          },
          35.03,
          {
            "type": "line",
            "values": [
              41.32653061,
              38.46153846
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+2.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Margerum, Rebecca J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.87
              },
              {
                "className": "unsecured-bar",
                "value": 29.77
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 36.36
              }
            ]
          },
          33.87,
          {
            "type": "line",
            "values": [
              56.41025641,
              27.44186047
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+29.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lindsey, Joseph S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.86
              },
              {
                "className": "unsecured-bar",
                "value": 66.14
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          33.86,
          {
            "type": "line",
            "values": [
              43.64640884,
              26.65148064
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Smith, Michael J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.43
              },
              {
                "className": "unsecured-bar",
                "value": 68.34
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.23
              }
            ]
          },
          31.43,
          {
            "type": "line",
            "values": [
              37.90664781,
              28.18991098
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Johnson, Gregory D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.92
              },
              {
                "className": "unsecured-bar",
                "value": 12.22
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 56.56
              }
            ]
          },
          30.92,
          {
            "type": "line",
            "values": [
              60.28368794,
              23.10679612
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+37.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pelino, Dominic",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.61
              },
              {
                "className": "unsecured-bar",
                "value": 10.62
              },
              {
                "className": "nonmonetary-bar",
                "value": 15.25
              },
              {
                "className": "ror-bar",
                "value": 49.42
              }
            ]
          },
          24.61,
          {
            "type": "line",
            "values": [
              45.94594595,
              18.29787234
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+27.6"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "McKean",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 42.381348880000004
          },
          {
            "className": "unsecured-bar",
            "value": 52.5042
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0835
          },
          {
            "className": "ror-bar",
            "value": 4.9249
          }
        ]
      },
      42.381348880000004,
      {
        "type": "line",
        "values": [
          61.333333329999995,
          41.23134328
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Engman, David Richard",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.85
              },
              {
                "className": "unsecured-bar",
                "value": 50.45
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 2.7
              }
            ]
          },
          46.85,
          {
            "type": "line",
            "values": [
              90.90909091,
              48.10810811
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+42.8"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Cercone, Dominic Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.11
              },
              {
                "className": "unsecured-bar",
                "value": 49.86
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 7.48
              }
            ]
          },
          42.11,
          {
            "type": "line",
            "values": [
              67.74193548,
              39.44954128
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+28.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Todd, William K.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.07
              },
              {
                "className": "unsecured-bar",
                "value": 54.37
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.32
              },
              {
                "className": "ror-bar",
                "value": 2.91
              }
            ]
          },
          42.07,
          {
            "type": "line",
            "values": [
              71.42857143,
              40.06968641
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.4"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Luther, Richard W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.74
              },
              {
                "className": "unsecured-bar",
                "value": 55.05
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 5.21
              }
            ]
          },
          39.74,
          {
            "type": "line",
            "values": [
              40.74074074,
              40.07352941
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+0.7"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Armstrong",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 41.05888709
          },
          {
            "className": "unsecured-bar",
            "value": 12.371699999999999
          },
          {
            "className": "nonmonetary-bar",
            "value": 3.2954999999999997
          },
          {
            "className": "ror-bar",
            "value": 43.2739
          }
        ]
      },
      41.05888709,
      {
        "type": "line",
        "values": [
          62.71186441,
          39.52662722
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Andring, James",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.57
              },
              {
                "className": "unsecured-bar",
                "value": 38.57
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.86
              }
            ]
          },
          60.57,
          {
            "type": "line",
            "values": [
              83.33333333,
              60.25236593
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+23.1"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Owen, James H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.05
              },
              {
                "className": "unsecured-bar",
                "value": 10.74
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.06
              },
              {
                "className": "ror-bar",
                "value": 48.14
              }
            ]
          },
          40.05,
          {
            "type": "line",
            "values": [
              67.24137931,
              37.82991202
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+29.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Decomo, J. Gary",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.65
              },
              {
                "className": "unsecured-bar",
                "value": 1.19
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.15
              },
              {
                "className": "ror-bar",
                "value": 55.01
              }
            ]
          },
          35.65,
          {
            "type": "line",
            "values": [
              50,
              34.25925926
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.7"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Warren",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 40.61393152
          },
          {
            "className": "unsecured-bar",
            "value": 15.112200000000001
          },
          {
            "className": "nonmonetary-bar",
            "value": 2.2432
          },
          {
            "className": "ror-bar",
            "value": 42.030699999999996
          }
        ]
      },
      40.61393152,
      {
        "type": "line",
        "values": [
          70,
          39.95067818
        ]
      },
      "--"
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Carlson, Glenn S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.68
              },
              {
                "className": "unsecured-bar",
                "value": 20.37
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.31
              },
              {
                "className": "ror-bar",
                "value": 33.64
              }
            ]
          },
          45.68,
          {
            "type": "line",
            "values": [
              85.71428571,
              44.93670886
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+40.8"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Bauer, Laura",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.16
              },
              {
                "className": "unsecured-bar",
                "value": 6.39
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.22
              },
              {
                "className": "ror-bar",
                "value": 50.23
              }
            ]
          },
          35.16,
          {
            "type": "line",
            "values": [
              71.42857143,
              35.5450237
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+35.9"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Woodin, Todd A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.83
              },
              {
                "className": "unsecured-bar",
                "value": 16.23
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 50.94
              }
            ]
          },
          32.83,
          {
            "type": "line",
            "values": [
              66.66666667,
              32.14285714
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+34.5"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Susquehanna",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 40.32663317
          },
          {
            "className": "unsecured-bar",
            "value": 33.2075
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.8805000000000001
          },
          {
            "className": "ror-bar",
            "value": 25.5346
          }
        ]
      },
      40.32663317,
      {
        "type": "line",
        "values": [
          66.66666667,
          39.76377953
        ]
      },
      "--"
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Hollister, Jeffrey L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.19
              },
              {
                "className": "unsecured-bar",
                "value": 37.59
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 9.22
              }
            ]
          },
          53.19,
          {
            "type": "line",
            "values": [
              100,
              52.6119403
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+47.4"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Cordner, Jodi L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.69
              },
              {
                "className": "unsecured-bar",
                "value": 24.92
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 39.06
              }
            ]
          },
          35.69,
          {
            "type": "line",
            "values": [
              50,
              35.46099291
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.5"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Brainard, Suzanne M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.09
              },
              {
                "className": "unsecured-bar",
                "value": 38.89
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.24
              },
              {
                "className": "ror-bar",
                "value": 27.78
              }
            ]
          },
          30.09,
          {
            "type": "line",
            "values": [
              50,
              29.71698113
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20.3"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Clarion",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 40
          },
          {
            "className": "unsecured-bar",
            "value": 34.2169
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0803
          },
          {
            "className": "ror-bar",
            "value": 25.702799999999996
          }
        ]
      },
      40,
      {
        "type": "line",
        "values": [
          40.625,
          40.83259522
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Miller, Jeffrey C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.41
              },
              {
                "className": "unsecured-bar",
                "value": 52.35
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 3.24
              }
            ]
          },
          44.41,
          {
            "type": "line",
            "values": [
              50,
              44.98480243
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.0"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Schill, Timothy P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.53
              },
              {
                "className": "unsecured-bar",
                "value": 18.82
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 37.65
              }
            ]
          },
          43.53,
          {
            "type": "line",
            "values": [
              72.72727273,
              43.61370717
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+29.1"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Quinn, Duane L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.9
              },
              {
                "className": "unsecured-bar",
                "value": 29.03
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.27
              },
              {
                "className": "ror-bar",
                "value": 32.8
              }
            ]
          },
          37.9,
          {
            "type": "line",
            "values": [
              31.81818182,
              39.15857605
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-7.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Long Turk, Amy L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.21
              },
              {
                "className": "unsecured-bar",
                "value": 37.64
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 33.15
              }
            ]
          },
          29.21,
          {
            "type": "line",
            "values": [
              40,
              30.12820513
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.9"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Huntingdon",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.96907216
          },
          {
            "className": "unsecured-bar",
            "value": 30.3158
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 29.6842
          }
        ]
      },
      38.96907216,
      {
        "type": "line",
        "values": [
          64.05228758,
          37.83333333
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Wilt, Richard",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.54
              },
              {
                "className": "unsecured-bar",
                "value": 8.14
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 43.01
              }
            ]
          },
          43.54,
          {
            "type": "line",
            "values": [
              77.38095238,
              39.09090909
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+38.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Jamison, Mary",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.78
              },
              {
                "className": "unsecured-bar",
                "value": 58.22
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          41.78,
          {
            "type": "line",
            "values": [
              60.71428571,
              42.90123457
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gummo, Douglas L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.93
              },
              {
                "className": "unsecured-bar",
                "value": 34.66
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 38.41
              }
            ]
          },
          26.93,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Washington",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.93688681
          },
          {
            "className": "unsecured-bar",
            "value": 34.2627
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.9538
          },
          {
            "className": "ror-bar",
            "value": 25.663999999999998
          }
        ]
      },
      38.93688681,
      {
        "type": "line",
        "values": [
          55.77092511,
          35.82116788
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Hopkins, Larry W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.38
              },
              {
                "className": "unsecured-bar",
                "value": 46.17
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.3
              }
            ]
          },
          53.38,
          {
            "type": "line",
            "values": [
              70.76923077,
              49.90176817
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wilson, Mark",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.38
              },
              {
                "className": "unsecured-bar",
                "value": 22.84
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 23.78
              }
            ]
          },
          53.38,
          {
            "type": "line",
            "values": [
              66.25,
              49.70238095
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Havelka, Gary H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50
              },
              {
                "className": "unsecured-bar",
                "value": 12.66
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 37.34
              }
            ]
          },
          50,
          {
            "type": "line",
            "values": [
              86.66666667,
              48.42519685
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+38.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ward, Ethan T.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.1
              },
              {
                "className": "unsecured-bar",
                "value": 50.45
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.23
              }
            ]
          },
          49.1,
          {
            "type": "line",
            "values": [
              69.23076923,
              45.55256065
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+23.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Redlinger, Robert W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.93
              },
              {
                "className": "unsecured-bar",
                "value": 38.54
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 17.42
              }
            ]
          },
          43.93,
          {
            "type": "line",
            "values": [
              55.45851528,
              40.58394161
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mark, David W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.65
              },
              {
                "className": "unsecured-bar",
                "value": 7.31
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.22
              },
              {
                "className": "ror-bar",
                "value": 47.54
              }
            ]
          },
          40.65,
          {
            "type": "line",
            "values": [
              65.6,
              35.77661431
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+29.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Thompson, Curtis",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.55
              },
              {
                "className": "unsecured-bar",
                "value": 65.21
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.24
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          34.55,
          {
            "type": "line",
            "values": [
              58.53658537,
              32.12290503
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+26.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ellis, James C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.19
              },
              {
                "className": "unsecured-bar",
                "value": 11.93
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 56.88
              }
            ]
          },
          31.19,
          {
            "type": "line",
            "values": [
              65.11627907,
              28.19148936
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+36.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kanalis, Joshua P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.04
              },
              {
                "className": "unsecured-bar",
                "value": 70.03
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          29.04,
          {
            "type": "line",
            "values": [
              29.16666667,
              28.84990253
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+0.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Weller, Jay",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29
              },
              {
                "className": "unsecured-bar",
                "value": 3
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.2
              },
              {
                "className": "ror-bar",
                "value": 64.5
              }
            ]
          },
          29,
          {
            "type": "line",
            "values": [
              44.93670886,
              26.06060606
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McDonald, Traci L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.08
              },
              {
                "className": "unsecured-bar",
                "value": 52.36
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 19.38
              }
            ]
          },
          28.08,
          {
            "type": "line",
            "values": [
              48.07692308,
              26.52631579
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.6"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Lebanon",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.70437956
          },
          {
            "className": "unsecured-bar",
            "value": 56.2432
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.6207
          },
          {
            "className": "ror-bar",
            "value": 3.5232
          }
        ]
      },
      38.70437956,
      {
        "type": "line",
        "values": [
          48.84547069,
          37.97733949
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Capello, Thomas M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.29
              },
              {
                "className": "unsecured-bar",
                "value": 51.71
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          48.29,
          {
            "type": "line",
            "values": [
              58.58585859,
              47.06790123
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Garver, Carl Russell",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.51
              },
              {
                "className": "unsecured-bar",
                "value": 57.35
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          42.51,
          {
            "type": "line",
            "values": [
              54.54545455,
              41.29353234
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wolfe, Kim R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.89
              },
              {
                "className": "unsecured-bar",
                "value": 59.11
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          40.89,
          {
            "type": "line",
            "values": [
              47.61904762,
              39.95006242
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kline, Samuel A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.43
              },
              {
                "className": "unsecured-bar",
                "value": 0.53
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.13
              },
              {
                "className": "ror-bar",
                "value": 43.09
              }
            ]
          },
          40.43,
          {
            "type": "line",
            "values": [
              66.66666667,
              37.34939759
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+29.3"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Jones, Charles T. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.21
              },
              {
                "className": "unsecured-bar",
                "value": 61.79
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          38.21,
          {
            "type": "line",
            "values": [
              26.08695652,
              41
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-14.9"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Verna, Anthony J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.64
              },
              {
                "className": "unsecured-bar",
                "value": 64.25
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          35.64,
          {
            "type": "line",
            "values": [
              55.35714286,
              35.25
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dissinger, Maria M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.26
              },
              {
                "className": "unsecured-bar",
                "value": 64.62
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.12
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          35.26,
          {
            "type": "line",
            "values": [
              43.68932039,
              35.25925926
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+8.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Charles, Bradford H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.14
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.66
              },
              {
                "className": "ror-bar",
                "value": 55.63
              }
            ]
          },
          29.14,
          {
            "type": "line",
            "values": [
              23.52941176,
              29.54545455
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-6.0"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Ditzler, John W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.04
              },
              {
                "className": "unsecured-bar",
                "value": 69.1
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 1.86
              }
            ]
          },
          29.04,
          {
            "type": "line",
            "values": [
              35.59322034,
              28.67132867
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.9"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Bedford",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.63636364
          },
          {
            "className": "unsecured-bar",
            "value": 59.5588
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 1.8048000000000002
          }
        ]
      },
      38.63636364,
      {
        "type": "line",
        "values": [
          52.57731959,
          37.564196630000005
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Bingham, H. Cyril Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.85
              },
              {
                "className": "unsecured-bar",
                "value": 55.15
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          44.85,
          {
            "type": "line",
            "values": [
              71.42857143,
              42.06896552
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+29.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Baker, Brian K.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.85
              },
              {
                "className": "unsecured-bar",
                "value": 58.84
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 3.31
              }
            ]
          },
          37.85,
          {
            "type": "line",
            "values": [
              58.33333333,
              36.52694611
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.8"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Calhoun, Kathy S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.06
              },
              {
                "className": "unsecured-bar",
                "value": 60.14
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 2.8
              }
            ]
          },
          37.06,
          {
            "type": "line",
            "values": [
              31.57894737,
              37.59398496
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-6.0"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Osman, Tonya M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.8
              },
              {
                "className": "unsecured-bar",
                "value": 68.06
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 1.14
              }
            ]
          },
          30.8,
          {
            "type": "line",
            "values": [
              31.25,
              30.70539419
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+0.5"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Jefferson",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.55721393
          },
          {
            "className": "unsecured-bar",
            "value": 61.2769
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0829
          },
          {
            "className": "ror-bar",
            "value": 0.0829
          }
        ]
      },
      38.55721393,
      {
        "type": "line",
        "values": [
          72.97297297,
          38.352524360000004
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Inzana, David B.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.07
              },
              {
                "className": "unsecured-bar",
                "value": 56.93
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          43.07,
          {
            "type": "line",
            "values": [
              73.33333333,
              42.06349206
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.3"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Chambers, Douglas R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.91
              },
              {
                "className": "unsecured-bar",
                "value": 62.09
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          37.91,
          {
            "type": "line",
            "values": [
              50,
              37.93103448
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.1"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Bazylak, Gregory M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.71
              },
              {
                "className": "unsecured-bar",
                "value": 65.05
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.24
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          34.71,
          {
            "type": "line",
            "values": [
              81.81818182,
              34.73684211
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+47.1"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Cumberland",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.5278224
          },
          {
            "className": "unsecured-bar",
            "value": 19.132099999999998
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.4985
          },
          {
            "className": "ror-bar",
            "value": 41.5188
          }
        ]
      },
      38.5278224,
      {
        "type": "line",
        "values": [
          51.61744023,
          35.0094162
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Beckley, Elizabeth S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.98
              },
              {
                "className": "unsecured-bar",
                "value": 48.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          50.98,
          {
            "type": "line",
            "values": [
              63.94557823,
              47.16157205
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Silcox, Kathryn H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.11
              },
              {
                "className": "unsecured-bar",
                "value": 26.14
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.29
              },
              {
                "className": "ror-bar",
                "value": 27.31
              }
            ]
          },
          46.11,
          {
            "type": "line",
            "values": [
              70.1754386,
              40.7678245
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+29.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Clement, Charles A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.14
              },
              {
                "className": "unsecured-bar",
                "value": 11.13
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 44.82
              }
            ]
          },
          43.14,
          {
            "type": "line",
            "values": [
              59.33333333,
              37.95180723
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Birbeck, Jonathan R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.02
              },
              {
                "className": "unsecured-bar",
                "value": 6.33
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.23
              },
              {
                "className": "ror-bar",
                "value": 47.3
              }
            ]
          },
          43.02,
          {
            "type": "line",
            "values": [
              60.50420168,
              37.31707317
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+23.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fegley, Paul M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.93
              },
              {
                "className": "unsecured-bar",
                "value": 13.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 43.42
              }
            ]
          },
          40.93,
          {
            "type": "line",
            "values": [
              49.59349593,
              37.96296296
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Day, Susan K.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.72
              },
              {
                "className": "unsecured-bar",
                "value": 11.24
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.16
              },
              {
                "className": "ror-bar",
                "value": 47.88
              }
            ]
          },
          40.72,
          {
            "type": "line",
            "values": [
              50.87719298,
              38.74239351
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dougherty, Richard S. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.14
              },
              {
                "className": "unsecured-bar",
                "value": 11.93
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 47.2
              }
            ]
          },
          40.14,
          {
            "type": "line",
            "values": [
              55.28455285,
              35.79952267
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cohick, Vivian J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.52
              },
              {
                "className": "unsecured-bar",
                "value": 14.34
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.84
              },
              {
                "className": "ror-bar",
                "value": 44.3
              }
            ]
          },
          39.52,
          {
            "type": "line",
            "values": [
              63.95348837,
              35.26785714
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+28.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Martin, Mark W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.06
              },
              {
                "className": "unsecured-bar",
                "value": 23.13
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 41.81
              }
            ]
          },
          35.06,
          {
            "type": "line",
            "values": [
              50,
              31.68141593
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Adams, H. Anthony",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.31
              },
              {
                "className": "unsecured-bar",
                "value": 15.36
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 59.21
              }
            ]
          },
          25.31,
          {
            "type": "line",
            "values": [
              33.5443038,
              23.60248447
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.9"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Luzerne",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.288852490000004
          },
          {
            "className": "unsecured-bar",
            "value": 31.285600000000002
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.0030000000000001
          },
          {
            "className": "ror-bar",
            "value": 29.3085
          }
        ]
      },
      38.288852490000004,
      {
        "type": "line",
        "values": [
          53.5892323,
          34.6550856
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Whittaker, Donald L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.13
              },
              {
                "className": "unsecured-bar",
                "value": 7.31
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.33
              },
              {
                "className": "ror-bar",
                "value": 32.06
              }
            ]
          },
          60.13,
          {
            "type": "line",
            "values": [
              79.85074627,
              53.75854214
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+26.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hasay, John E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.37
              },
              {
                "className": "unsecured-bar",
                "value": 10.51
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.74
              },
              {
                "className": "ror-bar",
                "value": 29.38
              }
            ]
          },
          53.37,
          {
            "type": "line",
            "values": [
              77.04918033,
              48.97260274
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+28.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Halesey, Joseph A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.26
              },
              {
                "className": "unsecured-bar",
                "value": 22.37
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.38
              },
              {
                "className": "ror-bar",
                "value": 25
              }
            ]
          },
          52.26,
          {
            "type": "line",
            "values": [
              76.92307692,
              45.40540541
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dixon, James M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.81
              },
              {
                "className": "unsecured-bar",
                "value": 39.35
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.27
              },
              {
                "className": "ror-bar",
                "value": 13.57
              }
            ]
          },
          46.81,
          {
            "type": "line",
            "values": [
              65.48672566,
              43.69747899
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "O'Donnell, Daniel",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.64
              },
              {
                "className": "unsecured-bar",
                "value": 19.96
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.45
              },
              {
                "className": "ror-bar",
                "value": 29.95
              }
            ]
          },
          46.64,
          {
            "type": "line",
            "values": [
              69.90291262,
              40.97222222
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+28.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Spagnuolo, Joseph D. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.44
              },
              {
                "className": "unsecured-bar",
                "value": 32.22
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 23.02
              }
            ]
          },
          44.44,
          {
            "type": "line",
            "values": [
              53.91304348,
              42.65010352
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Roberts, Paul J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.77
              },
              {
                "className": "unsecured-bar",
                "value": 56.23
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          43.77,
          {
            "type": "line",
            "values": [
              66.07142857,
              38.07531381
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+28.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Barilla, David A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.61
              },
              {
                "className": "unsecured-bar",
                "value": 32.37
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.17
              },
              {
                "className": "ror-bar",
                "value": 23.85
              }
            ]
          },
          43.61,
          {
            "type": "line",
            "values": [
              63.30275229,
              39.21568627
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+24.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zola, Joseph D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.47
              },
              {
                "className": "unsecured-bar",
                "value": 20.17
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.28
              },
              {
                "className": "ror-bar",
                "value": 38.08
              }
            ]
          },
          41.47,
          {
            "type": "line",
            "values": [
              66.40625,
              36.3963964
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+30.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kravitz, Alexandra Kokura",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.42
              },
              {
                "className": "unsecured-bar",
                "value": 29.94
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.45
              },
              {
                "className": "ror-bar",
                "value": 28.59
              }
            ]
          },
          40.42,
          {
            "type": "line",
            "values": [
              58,
              36.85185185
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Carmody, Joseph J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.76
              },
              {
                "className": "unsecured-bar",
                "value": 44.95
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.62
              },
              {
                "className": "ror-bar",
                "value": 15.46
              }
            ]
          },
          38.76,
          {
            "type": "line",
            "values": [
              57.2815534,
              33.69863014
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+23.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cronauer, Rick",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.59
              },
              {
                "className": "unsecured-bar",
                "value": 29.42
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.74
              },
              {
                "className": "ror-bar",
                "value": 33.13
              }
            ]
          },
          36.59,
          {
            "type": "line",
            "values": [
              39.82300885,
              36.16236162
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+3.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Malloy, Thomas F. Sr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.99
              },
              {
                "className": "unsecured-bar",
                "value": 34
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.11
              },
              {
                "className": "ror-bar",
                "value": 33.79
              }
            ]
          },
          31.99,
          {
            "type": "line",
            "values": [
              42.62948207,
              28.16901408
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dotzel, Michael G.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.88
              },
              {
                "className": "unsecured-bar",
                "value": 12.57
              },
              {
                "className": "nonmonetary-bar",
                "value": 5.3
              },
              {
                "className": "ror-bar",
                "value": 52.85
              }
            ]
          },
          28.88,
          {
            "type": "line",
            "values": [
              28.43137255,
              29.23076923
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-0.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Tupper, Brian James",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.47
              },
              {
                "className": "unsecured-bar",
                "value": 14.31
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.16
              },
              {
                "className": "ror-bar",
                "value": 57.89
              }
            ]
          },
          27.47,
          {
            "type": "line",
            "values": [
              65.75342466,
              22.09302326
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+43.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sharkey, Thomas",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 15.29
              },
              {
                "className": "unsecured-bar",
                "value": 8.28
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 76.43
              }
            ]
          },
          15.29,
          {
            "type": "line",
            "values": [
              38.88888889,
              12.97709924
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+25.9"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Lupas, David W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 14.73
              },
              {
                "className": "unsecured-bar",
                "value": 85.27
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          14.73,
          {
            "type": "line",
            "values": [
              9.090909091,
              16.50485437
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-7.4"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Sklarosky, Joseph F. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 10.53
              },
              {
                "className": "unsecured-bar",
                "value": 89.47
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          10.53,
          {
            "type": "line",
            "values": [
              4.761904762,
              11.9266055
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-7.2"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Columbia",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.18897638
          },
          {
            "className": "unsecured-bar",
            "value": 42.0697
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.11249999999999999
          },
          {
            "className": "ror-bar",
            "value": 19.6288
          }
        ]
      },
      38.18897638,
      {
        "type": "line",
        "values": [
          40.796019900000005,
          38.46153846
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Brewer, Doug D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.33
              },
              {
                "className": "unsecured-bar",
                "value": 22.37
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.33
              },
              {
                "className": "ror-bar",
                "value": 26.97
              }
            ]
          },
          50.33,
          {
            "type": "line",
            "values": [
              68.42105263,
              51.15511551
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.3"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Knecht, Richard W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.72
              },
              {
                "className": "unsecured-bar",
                "value": 8.27
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.24
              },
              {
                "className": "ror-bar",
                "value": 44.77
              }
            ]
          },
          46.72,
          {
            "type": "line",
            "values": [
              69.56521739,
              46.88346883
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Long, Craig W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.73
              },
              {
                "className": "unsecured-bar",
                "value": 20
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 37.27
              }
            ]
          },
          42.73,
          {
            "type": "line",
            "values": [
              85.71428571,
              41.06280193
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+44.7"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Lawton, Russell L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.35
              },
              {
                "className": "unsecured-bar",
                "value": 72.65
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          27.35,
          {
            "type": "line",
            "values": [
              22.44897959,
              30.37475345
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-7.9"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Chester",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.0970325
          },
          {
            "className": "unsecured-bar",
            "value": 40.0132
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.009399999999999999
          },
          {
            "className": "ror-bar",
            "value": 20.7273
          }
        ]
      },
      38.0970325,
      {
        "type": "line",
        "values": [
          48.47354138,
          34.29690666
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Hines, Gregory V.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.94
              },
              {
                "className": "unsecured-bar",
                "value": 33.4
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 5.28
              }
            ]
          },
          60.94,
          {
            "type": "line",
            "values": [
              61.76470588,
              58.85167464
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+2.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Koon, Grover E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.15
              },
              {
                "className": "unsecured-bar",
                "value": 39.08
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 8.17
              }
            ]
          },
          52.15,
          {
            "type": "line",
            "values": [
              55.09641873,
              49.47368421
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Vito, Marian T.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.41
              },
              {
                "className": "unsecured-bar",
                "value": 33.01
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 19.86
              }
            ]
          },
          46.41,
          {
            "type": "line",
            "values": [
              53.57142857,
              43.65671642
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gill, Nancy",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.86
              },
              {
                "className": "unsecured-bar",
                "value": 47.41
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 9.32
              }
            ]
          },
          42.86,
          {
            "type": "line",
            "values": [
              49.62406015,
              41.36904762
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+8.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Donatelli, Lori Novak",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.77
              },
              {
                "className": "unsecured-bar",
                "value": 36.17
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 20.43
              }
            ]
          },
          42.77,
          {
            "type": "line",
            "values": [
              53.84615385,
              38.25301205
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Massey, Scott A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.36
              },
              {
                "className": "unsecured-bar",
                "value": 38.88
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 18.01
              }
            ]
          },
          42.36,
          {
            "type": "line",
            "values": [
              54.26829268,
              39.49044586
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cabry, Michael J. III",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.83
              },
              {
                "className": "unsecured-bar",
                "value": 38.23
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 20.03
              }
            ]
          },
          40.83,
          {
            "type": "line",
            "values": [
              51.92307692,
              39.20454545
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bailey, John R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.69
              },
              {
                "className": "unsecured-bar",
                "value": 41.72
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 19.11
              }
            ]
          },
          38.69,
          {
            "type": "line",
            "values": [
              51.58730159,
              33.09352518
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Tartaglio, Thomas W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.13
              },
              {
                "className": "unsecured-bar",
                "value": 37.55
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 22.57
              }
            ]
          },
          38.13,
          {
            "type": "line",
            "values": [
              50,
              35.73264781
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bruno, Mark A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.74
              },
              {
                "className": "unsecured-bar",
                "value": 31.83
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 29.67
              }
            ]
          },
          36.74,
          {
            "type": "line",
            "values": [
              41.78082192,
              34.46327684
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Seavey, Matthew",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.73
              },
              {
                "className": "unsecured-bar",
                "value": 35.19
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 26.5
              }
            ]
          },
          35.73,
          {
            "type": "line",
            "values": [
              51.85185185,
              32.15223097
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Michaels, Theodore Peter Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.98
              },
              {
                "className": "unsecured-bar",
                "value": 43.21
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 21.6
              }
            ]
          },
          34.98,
          {
            "type": "line",
            "values": [
              43.39622642,
              32.59052925
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sondergaard, Analisa",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.14
              },
              {
                "className": "unsecured-bar",
                "value": 37.27
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 28.73
              }
            ]
          },
          32.14,
          {
            "type": "line",
            "values": [
              42.99516908,
              26.40186916
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kraut, William D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.3
              },
              {
                "className": "unsecured-bar",
                "value": 41.81
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 25.84
              }
            ]
          },
          31.3,
          {
            "type": "line",
            "values": [
              39.80582524,
              29.82954545
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Valocchi, Jeffrey J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.3
              },
              {
                "className": "unsecured-bar",
                "value": 48.03
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.12
              },
              {
                "className": "ror-bar",
                "value": 18.52
              }
            ]
          },
          31.3,
          {
            "type": "line",
            "values": [
              32.62411348,
              31.77570093
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+0.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Brown, Leonard J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.89
              },
              {
                "className": "unsecured-bar",
                "value": 44.35
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 29.76
              }
            ]
          },
          25.89,
          {
            "type": "line",
            "values": [
              52.63157895,
              25.69659443
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+26.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nistico, Charles",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.93
              },
              {
                "className": "unsecured-bar",
                "value": 34.36
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 41.72
              }
            ]
          },
          23.93,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Knapp, Gwenn S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 20.91
              },
              {
                "className": "unsecured-bar",
                "value": 47.27
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 30.91
              }
            ]
          },
          20.91,
          {
            "type": "line",
            "values": [
              32.69230769,
              17.46987952
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.2"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Venango",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.84477229
          },
          {
            "className": "unsecured-bar",
            "value": 61.7818
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 0.1291
          }
        ]
      },
      37.84477229,
      {
        "type": "line",
        "values": [
          60.13986014,
          35.56187767
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Fish, Andrew F.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.95
              },
              {
                "className": "unsecured-bar",
                "value": 56.54
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.17
              }
            ]
          },
          42.95,
          {
            "type": "line",
            "values": [
              64.58333333,
              40.92592593
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+23.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lowrey, Patrick E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.47
              },
              {
                "className": "unsecured-bar",
                "value": 57.26
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.21
              }
            ]
          },
          41.47,
          {
            "type": "line",
            "values": [
              60,
              40.31531532
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kirtland, Matthew T.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.12
              },
              {
                "className": "unsecured-bar",
                "value": 71.43
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          28.12,
          {
            "type": "line",
            "values": [
              61.40350877,
              23.03664921
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+38.4"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Schuylkill",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.741878220000004
          },
          {
            "className": "unsecured-bar",
            "value": 51.349900000000005
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 10.692699999999999
          }
        ]
      },
      37.741878220000004,
      {
        "type": "line",
        "values": [
          46.5060241,
          37.275215010000004
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Rossi, David J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.99
              },
              {
                "className": "unsecured-bar",
                "value": 52.01
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          47.99,
          {
            "type": "line",
            "values": [
              77.27272727,
              46.65314402
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+30.6"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Plachko, David A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.6
              },
              {
                "className": "unsecured-bar",
                "value": 51.94
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.47
              }
            ]
          },
          47.6,
          {
            "type": "line",
            "values": [
              56.75675676,
              48.63013699
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+8.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hale, Christina E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.88
              },
              {
                "className": "unsecured-bar",
                "value": 23.65
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 33.46
              }
            ]
          },
          42.88,
          {
            "type": "line",
            "values": [
              50,
              42.37288136
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Reiley, James",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.96
              },
              {
                "className": "unsecured-bar",
                "value": 58.95
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          40.96,
          {
            "type": "line",
            "values": [
              45.63758389,
              40.36885246
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kilker, Anthony J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.28
              },
              {
                "className": "unsecured-bar",
                "value": 62.45
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.13
              }
            ]
          },
          37.28,
          {
            "type": "line",
            "values": [
              56.25,
              35.85185185
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bayer, Stephen J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.99
              },
              {
                "className": "unsecured-bar",
                "value": 14.55
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 50.61
              }
            ]
          },
          33.99,
          {
            "type": "line",
            "values": [
              54.28571429,
              33.59580052
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ferrier, James R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.59
              },
              {
                "className": "unsecured-bar",
                "value": 68.41
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          31.59,
          {
            "type": "line",
            "values": [
              22.22222222,
              32.01754386
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-9.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Domalakes, John E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 22.41
              },
              {
                "className": "unsecured-bar",
                "value": 77.59
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          22.41,
          {
            "type": "line",
            "values": [
              20,
              22.52252252
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-2.5"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Dolbin, Cyrus P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 17.43
              },
              {
                "className": "unsecured-bar",
                "value": 82.57
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          17.43,
          {
            "type": "line",
            "values": [
              0,
              19
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-19.0"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Franklin",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.479026850000004
          },
          {
            "className": "unsecured-bar",
            "value": 11.6548
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.567
          },
          {
            "className": "ror-bar",
            "value": 50.083999999999996
          }
        ]
      },
      37.479026850000004,
      {
        "type": "line",
        "values": [
          49.26553672,
          35.19494204
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Cunningham, Duane K.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.94
              },
              {
                "className": "unsecured-bar",
                "value": 7.51
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.61
              },
              {
                "className": "ror-bar",
                "value": 38.74
              }
            ]
          },
          52.94,
          {
            "type": "line",
            "values": [
              69.23076923,
              50
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Plum, David L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48
              },
              {
                "className": "unsecured-bar",
                "value": 15.73
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 36.27
              }
            ]
          },
          48,
          {
            "type": "line",
            "values": [
              66.1971831,
              43.95973154
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Eyer, Jody C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.06
              },
              {
                "className": "unsecured-bar",
                "value": 22.52
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.1
              },
              {
                "className": "ror-bar",
                "value": 34.66
              }
            ]
          },
          41.06,
          {
            "type": "line",
            "values": [
              65.95744681,
              38.07106599
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+27.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Manns, Glenn Kenneth",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.93
              },
              {
                "className": "unsecured-bar",
                "value": 8.57
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.17
              },
              {
                "className": "ror-bar",
                "value": 52.06
              }
            ]
          },
          38.93,
          {
            "type": "line",
            "values": [
              45.27027027,
              37.42405832
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Rock, Kelly L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.31
              },
              {
                "className": "unsecured-bar",
                "value": 10.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.39
              },
              {
                "className": "ror-bar",
                "value": 53.61
              }
            ]
          },
          35.31,
          {
            "type": "line",
            "values": [
              45.69536424,
              33.4431631
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Williams, Todd R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.95
              },
              {
                "className": "unsecured-bar",
                "value": 15.81
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.71
              },
              {
                "className": "ror-bar",
                "value": 54.53
              }
            ]
          },
          28.95,
          {
            "type": "line",
            "values": [
              40.74074074,
              26.74157303
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pentz, Larry G.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.51
              },
              {
                "className": "unsecured-bar",
                "value": 7.13
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.21
              },
              {
                "className": "ror-bar",
                "value": 66.14
              }
            ]
          },
          25.51,
          {
            "type": "line",
            "values": [
              42,
              23.60335196
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.4"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Greene",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.44343891
          },
          {
            "className": "unsecured-bar",
            "value": 34.6546
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.3398
          },
          {
            "className": "ror-bar",
            "value": 26.613799999999998
          }
        ]
      },
      37.44343891,
      {
        "type": "line",
        "values": [
          58.97435897,
          37.861635220000004
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Watson, Lee",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.13
              },
              {
                "className": "unsecured-bar",
                "value": 18.8
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.75
              },
              {
                "className": "ror-bar",
                "value": 29.32
              }
            ]
          },
          51.13,
          {
            "type": "line",
            "values": [
              53.84615385,
              53.61702128
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+0.2"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Cramer, Jesse J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.37
              },
              {
                "className": "unsecured-bar",
                "value": 21.22
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 46.04
              }
            ]
          },
          32.37,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bates, D Glenn",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.06
              },
              {
                "className": "unsecured-bar",
                "value": 67.94
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          32.06,
          {
            "type": "line",
            "values": [
              64.28571429,
              31.08614232
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+33.2"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Wayne",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.20349563
          },
          {
            "className": "unsecured-bar",
            "value": 28.214699999999997
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 34.5818
          }
        ]
      },
      37.20349563,
      {
        "type": "line",
        "values": [
          64.86486486000001,
          35.309973049999996
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Edwards, Ronald",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.25
              },
              {
                "className": "unsecured-bar",
                "value": 7.01
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 53.74
              }
            ]
          },
          39.25,
          {
            "type": "line",
            "values": [
              50,
              38.19095477
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.8"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Carney, Bonnie L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.95
              },
              {
                "className": "unsecured-bar",
                "value": 49.06
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 11.99
              }
            ]
          },
          38.95,
          {
            "type": "line",
            "values": [
              61.53846154,
              36.8
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+24.7"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Myers, Linus H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.87
              },
              {
                "className": "unsecured-bar",
                "value": 23.36
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 41.78
              }
            ]
          },
          34.87,
          {
            "type": "line",
            "values": [
              75,
              32.25806452
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+42.7"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Clinton",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 36.92628651
          },
          {
            "className": "unsecured-bar",
            "value": 51.078599999999994
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.1392
          },
          {
            "className": "ror-bar",
            "value": 11.412700000000001
          }
        ]
      },
      36.92628651,
      {
        "type": "line",
        "values": [
          47.14285714,
          35.98750976
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Sanders, Joseph L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 68.98
              },
              {
                "className": "unsecured-bar",
                "value": 29.92
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.55
              },
              {
                "className": "ror-bar",
                "value": 0.28
              }
            ]
          },
          68.98,
          {
            "type": "line",
            "values": [
              63.82978723,
              69.77491961
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-5.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Maggs, John W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.44
              },
              {
                "className": "unsecured-bar",
                "value": 40.56
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          59.44,
          {
            "type": "line",
            "values": [
              66.66666667,
              59.2920354
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.4"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Mills, Frank P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 12.34
              },
              {
                "className": "unsecured-bar",
                "value": 66.14
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 21.39
              }
            ]
          },
          12.34,
          {
            "type": "line",
            "values": [
              21.66666667,
              11.68831169
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.0"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Sullivan",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 36.44859813
          },
          {
            "className": "unsecured-bar",
            "value": 61.682199999999995
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 1.8692
          }
        ]
      },
      36.44859813,
      {
        "type": "line",
        "values": [
          62.5,
          32.63157895
        ]
      },
      "--"
    ],
    "outlier": true,
    "collapseData": [],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Tioga",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 36.38603696
          },
          {
            "className": "unsecured-bar",
            "value": 48.5597
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 13.086400000000001
          }
        ]
      },
      36.38603696,
      {
        "type": "line",
        "values": [
          56.99999999999999,
          34.50800915
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Steffee, Susanne V.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.76
              },
              {
                "className": "unsecured-bar",
                "value": 18.49
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 39.6
              }
            ]
          },
          41.76,
          {
            "type": "line",
            "values": [
              50,
              40.3125
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Thachik, George M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.52
              },
              {
                "className": "unsecured-bar",
                "value": 61.21
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.26
              }
            ]
          },
          38.52,
          {
            "type": "line",
            "values": [
              80.55555556,
              35.16209476
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+45.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Edgcomb, James R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.31
              },
              {
                "className": "unsecured-bar",
                "value": 61.69
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          38.31,
          {
            "type": "line",
            "values": [
              57.14285714,
              37.58389262
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.6"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Rega, Jennifer J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.96
              },
              {
                "className": "unsecured-bar",
                "value": 47.2
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 14.36
              }
            ]
          },
          37.96,
          {
            "type": "line",
            "values": [
              59.375,
              35.51401869
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+23.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Carlson, James Edgar",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.5
              },
              {
                "className": "unsecured-bar",
                "value": 69.88
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          29.5,
          {
            "type": "line",
            "values": [
              43.75,
              28.47682119
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.3"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Repard, Robert L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.15
              },
              {
                "className": "unsecured-bar",
                "value": 76.35
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          23.15,
          {
            "type": "line",
            "values": [
              66.66666667,
              21.82741117
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+44.8"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Martin, William J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 13.91
              },
              {
                "className": "unsecured-bar",
                "value": 47.83
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          13.91,
          {
            "type": "line",
            "values": [
              5.769230769,
              15.95092025
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-10.2"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Clearfield",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 36.28318584
          },
          {
            "className": "unsecured-bar",
            "value": 63.6185
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 0.0983
          }
        ]
      },
      36.28318584,
      {
        "type": "line",
        "values": [
          59.30232558,
          35.647181630000006
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Ireland, Richard Allen",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.04
              },
              {
                "className": "unsecured-bar",
                "value": 57.96
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          42.04,
          {
            "type": "line",
            "values": [
              53.84615385,
              42.06642066
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.8"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Hawkins, James L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.13
              },
              {
                "className": "unsecured-bar",
                "value": 60.87
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          39.13,
          {
            "type": "line",
            "values": [
              82.60869565,
              36.68639053
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+45.9"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Ford, Patrick N.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.42
              },
              {
                "className": "unsecured-bar",
                "value": 65.58
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          34.42,
          {
            "type": "line",
            "values": [
              61.11111111,
              33.83838384
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+27.3"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Nevling, Jerome M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.03
              },
              {
                "className": "unsecured-bar",
                "value": 69.42
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.55
              }
            ]
          },
          30.03,
          {
            "type": "line",
            "values": [
              53.84615385,
              29.61876833
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+24.2"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Mercer",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 36.12542955
          },
          {
            "className": "unsecured-bar",
            "value": 39.6907
          },
          {
            "className": "nonmonetary-bar",
            "value": 12.070400000000001
          },
          {
            "className": "ror-bar",
            "value": 11.855699999999999
          }
        ]
      },
      36.12542955,
      {
        "type": "line",
        "values": [
          45.40337711,
          33.35235378
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Arthur, Brian R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.28
              },
              {
                "className": "unsecured-bar",
                "value": 53.83
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.89
              }
            ]
          },
          45.28,
          {
            "type": "line",
            "values": [
              74.73684211,
              41.16766467
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+33.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Songer, Dennis M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.1
              },
              {
                "className": "unsecured-bar",
                "value": 28.76
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.67
              },
              {
                "className": "ror-bar",
                "value": 14.48
              }
            ]
          },
          44.1,
          {
            "type": "line",
            "values": [
              49.09090909,
              42.11267606
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McEwen, D. Neil",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.69
              },
              {
                "className": "unsecured-bar",
                "value": 55.65
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 2.66
              }
            ]
          },
          41.69,
          {
            "type": "line",
            "values": [
              61.33333333,
              38.74755382
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hinch, Lorinda L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.37
              },
              {
                "className": "unsecured-bar",
                "value": 46.72
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.25
              },
              {
                "className": "ror-bar",
                "value": 15.66
              }
            ]
          },
          37.37,
          {
            "type": "line",
            "values": [
              51.92307692,
              35.2238806
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Antos, Ronald E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.72
              },
              {
                "className": "unsecured-bar",
                "value": 24.88
              },
              {
                "className": "nonmonetary-bar",
                "value": 29.04
              },
              {
                "className": "ror-bar",
                "value": 19.36
              }
            ]
          },
          26.72,
          {
            "type": "line",
            "values": [
              33.96226415,
              23.21981424
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fagley, William L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 17.69
              },
              {
                "className": "unsecured-bar",
                "value": 82.31
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          17.69,
          {
            "type": "line",
            "values": [
              45.83333333,
              14.95726496
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+30.9"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Northumberland",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 36
          },
          {
            "className": "unsecured-bar",
            "value": 51.91909999999999
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0825
          },
          {
            "className": "ror-bar",
            "value": 11.886099999999999
          }
        ]
      },
      36,
      {
        "type": "line",
        "values": [
          56.81818182,
          33.910665449999996
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Gembic, John",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.67
              },
              {
                "className": "unsecured-bar",
                "value": 57.2
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.13
              },
              {
                "className": "ror-bar",
                "value": 1.01
              }
            ]
          },
          41.67,
          {
            "type": "line",
            "values": [
              74.6835443,
              38.08180536
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+36.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Diehl, Michael I.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.57
              },
              {
                "className": "unsecured-bar",
                "value": 56.14
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 3.07
              }
            ]
          },
          40.57,
          {
            "type": "line",
            "values": [
              62.5,
              38.86255924
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+23.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cashman, Richard P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.14
              },
              {
                "className": "unsecured-bar",
                "value": 64.86
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          35.14,
          {
            "type": "line",
            "values": [
              40,
              35.05154639
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+4.9"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Apfelbaum, Benjamin",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.29
              },
              {
                "className": "unsecured-bar",
                "value": 30.24
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.16
              },
              {
                "className": "ror-bar",
                "value": 40.81
              }
            ]
          },
          28.29,
          {
            "type": "line",
            "values": [
              42.5,
              25.98870056
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.5"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Snyder",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 35.92870544
          },
          {
            "className": "unsecured-bar",
            "value": 54.1276
          },
          {
            "className": "nonmonetary-bar",
            "value": 2.9081
          },
          {
            "className": "ror-bar",
            "value": 6.472799999999999
          }
        ]
      },
      35.92870544,
      {
        "type": "line",
        "values": [
          52.5,
          34.59183673
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Reed, John H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.96
              },
              {
                "className": "unsecured-bar",
                "value": 60.28
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.77
              },
              {
                "className": "ror-bar",
                "value": 1.99
              }
            ]
          },
          36.96,
          {
            "type": "line",
            "values": [
              55.71428571,
              37.14759536
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hackenberg, Lori R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.79
              },
              {
                "className": "unsecured-bar",
                "value": 52.17
              },
              {
                "className": "nonmonetary-bar",
                "value": 5.69
              },
              {
                "className": "ror-bar",
                "value": 5.35
              }
            ]
          },
          36.79,
          {
            "type": "line",
            "values": [
              81.25,
              38.78205128
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+42.5"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Wyoming",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 35.68118628
          },
          {
            "className": "unsecured-bar",
            "value": 63.974
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0929
          },
          {
            "className": "ror-bar",
            "value": 0.1857
          }
        ]
      },
      35.68118628,
      {
        "type": "line",
        "values": [
          40,
          35.596508240000006
        ]
      },
      "--"
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Smith, Carl W. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.65
              },
              {
                "className": "unsecured-bar",
                "value": 55.89
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.23
              },
              {
                "className": "ror-bar",
                "value": 0.23
              }
            ]
          },
          43.65,
          {
            "type": "line",
            "values": [
              72.72727273,
              42.92565947
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+29.8"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Plummer, David K.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.21
              },
              {
                "className": "unsecured-bar",
                "value": 70.3
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.17
              }
            ]
          },
          29.21,
          {
            "type": "line",
            "values": [
              15.38461538,
              29.84562607
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-14.5"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Montour",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 35.19163763
          },
          {
            "className": "unsecured-bar",
            "value": 24.738699999999998
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.6969000000000001
          },
          {
            "className": "ror-bar",
            "value": 39.0244
          }
        ]
      },
      35.19163763,
      {
        "type": "line",
        "values": [
          46.15384615,
          35.34136546
        ]
      },
      "--"
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Shrawder, Marvin K.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 22.44
              },
              {
                "className": "unsecured-bar",
                "value": 22.44
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.98
              },
              {
                "className": "ror-bar",
                "value": 53.66
              }
            ]
          },
          22.44,
          {
            "type": "line",
            "values": [
              46.42857143,
              38.671875
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.8"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Indiana",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 35.01070664
          },
          {
            "className": "unsecured-bar",
            "value": 33.3333
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 30.761
          }
        ]
      },
      35.01070664,
      {
        "type": "line",
        "values": [
          30.392156860000004,
          36.21169916
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Steffee, Susanne V.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.02
              },
              {
                "className": "unsecured-bar",
                "value": 18.36
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 40.48
              }
            ]
          },
          41.02,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Haberl, Guy B.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40
              },
              {
                "className": "unsecured-bar",
                "value": 30.08
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 29.75
              }
            ]
          },
          40,
          {
            "type": "line",
            "values": [
              35.97122302,
              40.9190372
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-4.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Rega, Jennifer J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.66
              },
              {
                "className": "unsecured-bar",
                "value": 46.35
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 14.6
              }
            ]
          },
          38.66,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Thachik, George M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.22
              },
              {
                "className": "unsecured-bar",
                "value": 61.56
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.22
              }
            ]
          },
          38.22,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Martin, William J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 10.9
              },
              {
                "className": "unsecured-bar",
                "value": 41.71
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 37.91
              }
            ]
          },
          10.9,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Forest",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 34.75609756
          },
          {
            "className": "unsecured-bar",
            "value": 52.439
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 12.8049
          }
        ]
      },
      34.75609756,
      {
        "type": "line",
        "values": [
          85,
          32.03883495
        ]
      },
      "--"
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Miller, Daniel L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.2
              },
              {
                "className": "unsecured-bar",
                "value": 55.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 14.09
              }
            ]
          },
          30.2,
          {
            "type": "line",
            "values": [
              81.25,
              42.63565891
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+38.6"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Lycoming",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 34.68169761
          },
          {
            "className": "unsecured-bar",
            "value": 64.91029999999999
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 0.3321
          }
        ]
      },
      34.68169761,
      {
        "type": "line",
        "values": [
          55.01355014,
          28.14726841
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Solomon, William C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.91
              },
              {
                "className": "unsecured-bar",
                "value": 57.87
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          41.91,
          {
            "type": "line",
            "values": [
              78.46153846,
              36
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+42.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Page, Allen P. III",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.3
              },
              {
                "className": "unsecured-bar",
                "value": 61.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          38.3,
          {
            "type": "line",
            "values": [
              54.81927711,
              29.49756888
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+25.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lepley, Jerry C.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.55
              },
              {
                "className": "unsecured-bar",
                "value": 63.25
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          36.55,
          {
            "type": "line",
            "values": [
              70.83333333,
              33.33333333
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+37.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Frey, Christian David",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.52
              },
              {
                "className": "unsecured-bar",
                "value": 66.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.78
              }
            ]
          },
          32.52,
          {
            "type": "line",
            "values": [
              53.58166189,
              21.96969697
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kemp, Jon Edward",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.51
              },
              {
                "className": "unsecured-bar",
                "value": 68.95
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.18
              }
            ]
          },
          30.51,
          {
            "type": "line",
            "values": [
              60.25641026,
              25.3164557
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+34.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Whiteman, Gary A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.37
              },
              {
                "className": "unsecured-bar",
                "value": 70.63
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          29.37,
          {
            "type": "line",
            "values": [
              52.44755245,
              24.02597403
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+28.4"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Juniata",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 34.46215139
          },
          {
            "className": "unsecured-bar",
            "value": 39.243
          },
          {
            "className": "nonmonetary-bar",
            "value": 7.370500000000001
          },
          {
            "className": "ror-bar",
            "value": 18.9243
          }
        ]
      },
      34.46215139,
      {
        "type": "line",
        "values": [
          43.75,
          36.67425968
        ]
      },
      "--"
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Leister, Jacqueline T.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.47
              },
              {
                "className": "unsecured-bar",
                "value": 12.93
              },
              {
                "className": "nonmonetary-bar",
                "value": 15.95
              },
              {
                "className": "ror-bar",
                "value": 39.66
              }
            ]
          },
          31.47,
          {
            "type": "line",
            "values": [
              62.5,
              44.09090909
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.4"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Lyter, Barbara M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.3
              },
              {
                "className": "unsecured-bar",
                "value": 68.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          31.3,
          {
            "type": "line",
            "values": [
              25,
              33.33333333
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-8.3"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Pike",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 34.16738568
          },
          {
            "className": "unsecured-bar",
            "value": 5.6228
          },
          {
            "className": "nonmonetary-bar",
            "value": 28.0277
          },
          {
            "className": "ror-bar",
            "value": 31.1419
          }
        ]
      },
      34.16738568,
      {
        "type": "line",
        "values": [
          37.41007194,
          34.020618559999996
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Chelak, Gregory H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47
              },
              {
                "className": "unsecured-bar",
                "value": 5
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 39
              }
            ]
          },
          47,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fischer, Deborah",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.33
              },
              {
                "className": "unsecured-bar",
                "value": 6.67
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.67
              },
              {
                "className": "ror-bar",
                "value": 51
              }
            ]
          },
          39.33,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Muir, Shannon L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.84
              },
              {
                "className": "unsecured-bar",
                "value": 0.59
              },
              {
                "className": "nonmonetary-bar",
                "value": 53.25
              },
              {
                "className": "ror-bar",
                "value": 13.02
              }
            ]
          },
          32.84,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Menditto, Paul D. Sr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.03
              },
              {
                "className": "unsecured-bar",
                "value": 9.22
              },
              {
                "className": "nonmonetary-bar",
                "value": 40.09
              },
              {
                "className": "ror-bar",
                "value": 21.2
              }
            ]
          },
          29.03,
          {
            "type": "line",
            "values": [
              20.51282051,
              33.74233129
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-13.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cooper, Alan B.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.12
              },
              {
                "className": "unsecured-bar",
                "value": 8.85
              },
              {
                "className": "nonmonetary-bar",
                "value": 25.52
              },
              {
                "className": "ror-bar",
                "value": 36.98
              }
            ]
          },
          28.12,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Blair",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 34.04638145
          },
          {
            "className": "unsecured-bar",
            "value": 65.5338
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.06
          },
          {
            "className": "ror-bar",
            "value": 0.3599
          }
        ]
      },
      34.04638145,
      {
        "type": "line",
        "values": [
          58.6998088,
          31.768533580000003
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Aigner, Paula M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.64
              },
              {
                "className": "unsecured-bar",
                "value": 47.36
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          52.64,
          {
            "type": "line",
            "values": [
              79.46428571,
              49.1503268
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+30.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Miller, Fred B.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.81
              },
              {
                "className": "unsecured-bar",
                "value": 55.58
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.61
              }
            ]
          },
          43.81,
          {
            "type": "line",
            "values": [
              78.16091954,
              40.05563282
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+38.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ormsby, Craig E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.34
              },
              {
                "className": "unsecured-bar",
                "value": 64.66
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          35.34,
          {
            "type": "line",
            "values": [
              89.47368421,
              31.41025641
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+58.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kelly, Todd F.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.92
              },
              {
                "className": "unsecured-bar",
                "value": 70.08
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          29.92,
          {
            "type": "line",
            "values": [
              45.94594595,
              28.07486631
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Auker, Jeffrey P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.26
              },
              {
                "className": "unsecured-bar",
                "value": 69.98
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.33
              },
              {
                "className": "ror-bar",
                "value": 1.43
              }
            ]
          },
          28.26,
          {
            "type": "line",
            "values": [
              37.20930233,
              28.34437086
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+8.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Jackson, Steven D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 18.59
              },
              {
                "className": "unsecured-bar",
                "value": 81.41
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          18.59,
          {
            "type": "line",
            "values": [
              40.74074074,
              16.68822768
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+24.1"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Montgomery",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 33.63556165
          },
          {
            "className": "unsecured-bar",
            "value": 46.1889
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.466
          },
          {
            "className": "ror-bar",
            "value": 14.7096
          }
        ]
      },
      33.63556165,
      {
        "type": "line",
        "values": [
          43.27198364,
          28.69733969
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Lawrence, Francis J. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.12
              },
              {
                "className": "unsecured-bar",
                "value": 15.72
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 20.04
              }
            ]
          },
          60.12,
          {
            "type": "line",
            "values": [
              65.16853933,
              54.04255319
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Scott, Gregory L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 58.68
              },
              {
                "className": "unsecured-bar",
                "value": 32.54
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.18
              },
              {
                "className": "ror-bar",
                "value": 4.94
              }
            ]
          },
          58.68,
          {
            "type": "line",
            "values": [
              53.46534653,
              66.23931624
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-12.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Palladino, Scott T.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.93
              },
              {
                "className": "unsecured-bar",
                "value": 44.12
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 2.88
              }
            ]
          },
          47.93,
          {
            "type": "line",
            "values": [
              60.65088757,
              39.84526112
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cerski, Christopher",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.5
              },
              {
                "className": "unsecured-bar",
                "value": 51.5
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.75
              }
            ]
          },
          44.5,
          {
            "type": "line",
            "values": [
              44.49339207,
              45.39473684
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-0.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hunsicker, Margaret A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.48
              },
              {
                "className": "unsecured-bar",
                "value": 27.91
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 24.78
              }
            ]
          },
          44.48,
          {
            "type": "line",
            "values": [
              50.55248619,
              38.79003559
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kropp, Edward C. Sr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.39
              },
              {
                "className": "unsecured-bar",
                "value": 54.02
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.19
              }
            ]
          },
          43.39,
          {
            "type": "line",
            "values": [
              50.64102564,
              37.62376238
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McHugh Casey, Elizabeth A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.42
              },
              {
                "className": "unsecured-bar",
                "value": 55.39
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          41.42,
          {
            "type": "line",
            "values": [
              44.38502674,
              39.10891089
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kelly Rebar, Cathleen",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.5
              },
              {
                "className": "unsecured-bar",
                "value": 62.58
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.13
              }
            ]
          },
          36.5,
          {
            "type": "line",
            "values": [
              51.93370166,
              32.01438849
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nesbitt, Harry J. III",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.18
              },
              {
                "className": "unsecured-bar",
                "value": 57.26
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          36.18,
          {
            "type": "line",
            "values": [
              46.66666667,
              33.04347826
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Augustine, Albert J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.01
              },
              {
                "className": "unsecured-bar",
                "value": 62.5
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.14
              }
            ]
          },
          36.01,
          {
            "type": "line",
            "values": [
              62.80487805,
              29.00900901
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+33.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bernhardt, Francis J. III",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.87
              },
              {
                "className": "unsecured-bar",
                "value": 30.71
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 29.61
              }
            ]
          },
          35.87,
          {
            "type": "line",
            "values": [
              43.5483871,
              31.6872428
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sobeck, Robert M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.65
              },
              {
                "className": "unsecured-bar",
                "value": 29.03
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 33.28
              }
            ]
          },
          35.65,
          {
            "type": "line",
            "values": [
              52.07100592,
              31.07049608
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+21.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Saylor, Maurice H.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.62
              },
              {
                "className": "unsecured-bar",
                "value": 58.47
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          35.62,
          {
            "type": "line",
            "values": [
              58.97435897,
              30.16194332
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+28.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zaffarano, Patricia Ann",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.37
              },
              {
                "className": "unsecured-bar",
                "value": 62.72
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 1.15
              }
            ]
          },
          35.37,
          {
            "type": "line",
            "values": [
              47.66839378,
              28.20512821
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Price, Juanita Ann",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.33
              },
              {
                "className": "unsecured-bar",
                "value": 24.42
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.28
              },
              {
                "className": "ror-bar",
                "value": 21.56
              }
            ]
          },
          35.33,
          {
            "type": "line",
            "values": [
              44.78527607,
              28.83116883
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Rebar, Cathleen Kelly",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.03
              },
              {
                "className": "unsecured-bar",
                "value": 47.77
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          35.03,
          {
            "type": "line",
            "values": [
              48.57142857,
              32.17391304
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lukens, Deborah",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.92
              },
              {
                "className": "unsecured-bar",
                "value": 23.54
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 39.68
              }
            ]
          },
          34.92,
          {
            "type": "line",
            "values": [
              42.46575342,
              31.48148148
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Casillo, Ester J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.38
              },
              {
                "className": "unsecured-bar",
                "value": 62.83
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          34.38,
          {
            "type": "line",
            "values": [
              42.79279279,
              30.35230352
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gallagher, James",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.74
              },
              {
                "className": "unsecured-bar",
                "value": 29.37
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 32.14
              }
            ]
          },
          32.74,
          {
            "type": "line",
            "values": [
              42.10526316,
              27.12418301
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McGill, Katherine E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.77
              },
              {
                "className": "unsecured-bar",
                "value": 62.24
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.26
              }
            ]
          },
          31.77,
          {
            "type": "line",
            "values": [
              38.46153846,
              28.31050228
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Leo, Paul N.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.73
              },
              {
                "className": "unsecured-bar",
                "value": 63.84
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.55
              }
            ]
          },
          31.73,
          {
            "type": "line",
            "values": [
              45.0617284,
              26.28726287
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Quinn, Michael P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.21
              },
              {
                "className": "unsecured-bar",
                "value": 62.03
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.53
              },
              {
                "className": "ror-bar",
                "value": 0.53
              }
            ]
          },
          30.21,
          {
            "type": "line",
            "values": [
              32.31707317,
              29.44162437
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+2.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gadzicki, Walter F. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.01
              },
              {
                "className": "unsecured-bar",
                "value": 31.46
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 33.96
              }
            ]
          },
          30.01,
          {
            "type": "line",
            "values": [
              48.0620155,
              23.55555556
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+24.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hudak Duffy, Andrea",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.42
              },
              {
                "className": "unsecured-bar",
                "value": 46.91
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 24.12
              }
            ]
          },
          27.42,
          {
            "type": "line",
            "values": [
              36.93693694,
              25.83081571
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Schireson, Henry J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.41
              },
              {
                "className": "unsecured-bar",
                "value": 67.36
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          27.41,
          {
            "type": "line",
            "values": [
              39.22651934,
              20.70175439
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Eisner Zucker, Karen",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.34
              },
              {
                "className": "unsecured-bar",
                "value": 70.56
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          27.34,
          {
            "type": "line",
            "values": [
              31.70731707,
              22.94117647
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+8.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hummel Fried, Catherine M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.24
              },
              {
                "className": "unsecured-bar",
                "value": 68.79
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.17
              }
            ]
          },
          27.24,
          {
            "type": "line",
            "values": [
              51.92307692,
              21.49122807
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+30.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Maruszczak, William I.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.84
              },
              {
                "className": "unsecured-bar",
                "value": 69.56
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.27
              }
            ]
          },
          26.84,
          {
            "type": "line",
            "values": [
              29.84615385,
              23.8961039
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Levine, Edward",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.51
              },
              {
                "className": "unsecured-bar",
                "value": 22.04
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.12
              },
              {
                "className": "ror-bar",
                "value": 48.38
              }
            ]
          },
          25.51,
          {
            "type": "line",
            "values": [
              40.46242775,
              22.16748768
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Friedenberg, Jay S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.6
              },
              {
                "className": "unsecured-bar",
                "value": 23.49
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 50.93
              }
            ]
          },
          23.6,
          {
            "type": "line",
            "values": [
              35.4978355,
              19.83193277
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kessler, John D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 22.17
              },
              {
                "className": "unsecured-bar",
                "value": 32.69
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 35.76
              }
            ]
          },
          22.17,
          {
            "type": "line",
            "values": [
              26.35658915,
              19.82507289
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Smyth, Joseph A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 9.66
              },
              {
                "className": "unsecured-bar",
                "value": 57.56
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.42
              }
            ]
          },
          9.66,
          {
            "type": "line",
            "values": [
              15.38461538,
              5.673758865
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Corso, S. Gerald",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 7.82
              },
              {
                "className": "unsecured-bar",
                "value": 60.38
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 2.43
              }
            ]
          },
          7.82,
          {
            "type": "line",
            "values": [
              5.369127517,
              8.71559633
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-3.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nicholas, William T.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 6.73
              },
              {
                "className": "unsecured-bar",
                "value": 57.4
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 17.49
              }
            ]
          },
          6.73,
          {
            "type": "line",
            "values": [
              6.976744186,
              6.201550388
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+0.8"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Carbon",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 32.99299883
          },
          {
            "className": "unsecured-bar",
            "value": 53.85060000000001
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 13.1272
          }
        ]
      },
      32.99299883,
      {
        "type": "line",
        "values": [
          43.7751004,
          32.341399609999996
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Kosciolek, Casimir T.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.44
              },
              {
                "className": "unsecured-bar",
                "value": 46.57
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 15.99
              }
            ]
          },
          37.44,
          {
            "type": "line",
            "values": [
              53.84615385,
              36.45251397
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Homanko, Joseph D. Sr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.13
              },
              {
                "className": "unsecured-bar",
                "value": 56.16
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 6.71
              }
            ]
          },
          37.13,
          {
            "type": "line",
            "values": [
              41.57303371,
              36.29343629
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Schrantz, Eric M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.71
              },
              {
                "className": "unsecured-bar",
                "value": 50.31
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 16.98
              }
            ]
          },
          32.71,
          {
            "type": "line",
            "values": [
              40.54054054,
              33.10225303
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Serfass, Steven R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.97
              },
              {
                "className": "unsecured-bar",
                "value": 71.19
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.85
              }
            ]
          },
          27.97,
          {
            "type": "line",
            "values": [
              10,
              30.47619048
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-20.5"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Matika, Joseph J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.41
              },
              {
                "className": "unsecured-bar",
                "value": 71.11
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 1.48
              }
            ]
          },
          27.41,
          {
            "type": "line",
            "values": [
              37.5,
              27.2
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.3"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Kissner, William J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.02
              },
              {
                "className": "unsecured-bar",
                "value": 56.93
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 16.05
              }
            ]
          },
          27.02,
          {
            "type": "line",
            "values": [
              57.14285714,
              25.87719298
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lewis, Edward M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 20.52
              },
              {
                "className": "unsecured-bar",
                "value": 60.7
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 18.78
              }
            ]
          },
          20.52,
          {
            "type": "line",
            "values": [
              44.44444444,
              18.59296482
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+25.9"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Monroe",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 32.79661017
          },
          {
            "className": "unsecured-bar",
            "value": 49.6091
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.4249
          },
          {
            "className": "ror-bar",
            "value": 17.063200000000002
          }
        ]
      },
      32.79661017,
      {
        "type": "line",
        "values": [
          35.13011152,
          32.41612358
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Fluegel, Anthony D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.39
              },
              {
                "className": "unsecured-bar",
                "value": 30.26
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 23.46
              }
            ]
          },
          45.39,
          {
            "type": "line",
            "values": [
              45.39473684,
              46.30872483
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-0.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Muth, Michael R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.07
              },
              {
                "className": "unsecured-bar",
                "value": 60.61
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          38.07,
          {
            "type": "line",
            "values": [
              42.68292683,
              36.07954545
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Anzini, Kristina",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.88
              },
              {
                "className": "unsecured-bar",
                "value": 61.65
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.32
              }
            ]
          },
          37.88,
          {
            "type": "line",
            "values": [
              43.08510638,
              35.71428571
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Riley, Phillip R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.18
              },
              {
                "className": "unsecured-bar",
                "value": 15.44
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 47.38
              }
            ]
          },
          37.18,
          {
            "type": "line",
            "values": [
              33.14917127,
              39.32346723
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-6.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mancuso, Colleen",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.01
              },
              {
                "className": "unsecured-bar",
                "value": 62.71
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.28
              }
            ]
          },
          37.01,
          {
            "type": "line",
            "values": [
              44.92753623,
              35.86956522
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Krawitz, Jolana",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.63
              },
              {
                "className": "unsecured-bar",
                "value": 8.78
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.9
              },
              {
                "className": "ror-bar",
                "value": 52.52
              }
            ]
          },
          34.63,
          {
            "type": "line",
            "values": [
              53.84615385,
              30.14256619
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+23.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Claypool, Richard",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.32
              },
              {
                "className": "unsecured-bar",
                "value": 70.28
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          29.32,
          {
            "type": "line",
            "values": [
              28.47222222,
              30.40935673
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-1.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Germano, Brian",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.33
              },
              {
                "className": "unsecured-bar",
                "value": 69.42
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 3.1
              }
            ]
          },
          27.33,
          {
            "type": "line",
            "values": [
              25.36585366,
              28.38137472
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-3.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Olsen, Thomas E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.43
              },
              {
                "className": "unsecured-bar",
                "value": 73.43
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.14
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          26.43,
          {
            "type": "line",
            "values": [
              26.42487047,
              26.87140115
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-0.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Higgins, C. Daniel",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.4
              },
              {
                "className": "unsecured-bar",
                "value": 32.64
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 43.77
              }
            ]
          },
          23.4,
          {
            "type": "line",
            "values": [
              26.31578947,
              23.70572207
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+2.6"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Bucks",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 32.41325938
          },
          {
            "className": "unsecured-bar",
            "value": 49.297000000000004
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.5676
          },
          {
            "className": "ror-bar",
            "value": 17.705099999999998
          }
        ]
      },
      32.41325938,
      {
        "type": "line",
        "values": [
          41.069012179999994,
          30.62392673
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Waltman, John I.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.82
              },
              {
                "className": "unsecured-bar",
                "value": 34.1
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 19.08
              }
            ]
          },
          46.82,
          {
            "type": "line",
            "values": [
              61.29032258,
              44.52554745
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wagner, Robert",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.98
              },
              {
                "className": "unsecured-bar",
                "value": 18.28
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.16
              },
              {
                "className": "ror-bar",
                "value": 36.57
              }
            ]
          },
          44.98,
          {
            "type": "line",
            "values": [
              64.88549618,
              39.79166667
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+25.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Peranteau, Frank W. Sr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.86
              },
              {
                "className": "unsecured-bar",
                "value": 52.98
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.35
              },
              {
                "className": "ror-bar",
                "value": 2.81
              }
            ]
          },
          43.86,
          {
            "type": "line",
            "values": [
              59.67741935,
              39.81900452
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kline, Joanne V.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.64
              },
              {
                "className": "unsecured-bar",
                "value": 6.98
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.08
              },
              {
                "className": "ror-bar",
                "value": 48.29
              }
            ]
          },
          42.64,
          {
            "type": "line",
            "values": [
              49.45652174,
              40.37267081
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Douple, Mark D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.26
              },
              {
                "className": "unsecured-bar",
                "value": 58.74
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          41.26,
          {
            "type": "line",
            "values": [
              69.11764706,
              37.95309168
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Schnell, Robert A. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.03
              },
              {
                "className": "unsecured-bar",
                "value": 22.22
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 36.75
              }
            ]
          },
          41.03,
          {
            "type": "line",
            "values": [
              42.85714286,
              42.30769231
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+0.5"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Petrucci, Michael W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40
              },
              {
                "className": "unsecured-bar",
                "value": 60
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          40,
          {
            "type": "line",
            "values": [
              59.42028986,
              36.21794872
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+23.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Burns, Michael J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.7
              },
              {
                "className": "unsecured-bar",
                "value": 50
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 12.3
              }
            ]
          },
          37.7,
          {
            "type": "line",
            "values": [
              47.19101124,
              35.92592593
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Finello, Daniel J. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.11
              },
              {
                "className": "unsecured-bar",
                "value": 62.11
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.78
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          37.11,
          {
            "type": "line",
            "values": [
              46.15384615,
              35.81730769
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Durkin, John J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.25
              },
              {
                "className": "unsecured-bar",
                "value": 63.93
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          35.25,
          {
            "type": "line",
            "values": [
              52.5,
              43.125
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Snow, Maggie",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.92
              },
              {
                "className": "unsecured-bar",
                "value": 28.07
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 38.01
              }
            ]
          },
          33.92,
          {
            "type": "line",
            "values": [
              61.2244898,
              30.06993007
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Falcone, Joseph P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.58
              },
              {
                "className": "unsecured-bar",
                "value": 64.35
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.05
              },
              {
                "className": "ror-bar",
                "value": 1.96
              }
            ]
          },
          33.58,
          {
            "type": "line",
            "values": [
              38.97338403,
              31.84230478
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Baranoski, Daniel",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.33
              },
              {
                "className": "unsecured-bar",
                "value": 24.59
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 41.93
              }
            ]
          },
          33.33,
          {
            "type": "line",
            "values": [
              40.13157895,
              31.56862745
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+8.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Deatelhauser, Kenneth E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.79
              },
              {
                "className": "unsecured-bar",
                "value": 13.11
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 54.1
              }
            ]
          },
          32.79,
          {
            "type": "line",
            "values": [
              47.22222222,
              27.40384615
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gallagher, Michael W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.78
              },
              {
                "className": "unsecured-bar",
                "value": 66.82
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.07
              },
              {
                "className": "ror-bar",
                "value": 0.33
              }
            ]
          },
          32.78,
          {
            "type": "line",
            "values": [
              38.08139535,
              31.78571429
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Vislosky, Jan",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.6
              },
              {
                "className": "unsecured-bar",
                "value": 66.74
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.22
              },
              {
                "className": "ror-bar",
                "value": 0.44
              }
            ]
          },
          32.6,
          {
            "type": "line",
            "values": [
              37.28813559,
              31.57894737
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kelly, John J. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.3
              },
              {
                "className": "unsecured-bar",
                "value": 67.43
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.27
              }
            ]
          },
          32.3,
          {
            "type": "line",
            "values": [
              38.06818182,
              30.68391867
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gambardella, Gary",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.86
              },
              {
                "className": "unsecured-bar",
                "value": 34.65
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.15
              },
              {
                "className": "ror-bar",
                "value": 33.33
              }
            ]
          },
          31.86,
          {
            "type": "line",
            "values": [
              44.06779661,
              30.40650407
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Seaman, Jean",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.31
              },
              {
                "className": "unsecured-bar",
                "value": 17.91
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.23
              },
              {
                "className": "ror-bar",
                "value": 50.56
              }
            ]
          },
          31.31,
          {
            "type": "line",
            "values": [
              52.05479452,
              27.5242047
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+24.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Armitage, Regina",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.84
              },
              {
                "className": "unsecured-bar",
                "value": 43.82
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 25.34
              }
            ]
          },
          30.84,
          {
            "type": "line",
            "values": [
              39.7260274,
              29.3594306
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+10.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Baum, Charles W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.7
              },
              {
                "className": "unsecured-bar",
                "value": 69
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.15
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          30.7,
          {
            "type": "line",
            "values": [
              49.27536232,
              28.83959044
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Roth, Robert",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.64
              },
              {
                "className": "unsecured-bar",
                "value": 21
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 50.36
              }
            ]
          },
          28.64,
          {
            "type": "line",
            "values": [
              37.5,
              27.70448549
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Daly, Philip J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.21
              },
              {
                "className": "unsecured-bar",
                "value": 32.35
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 40.44
              }
            ]
          },
          27.21,
          {
            "type": "line",
            "values": [
              29.41176471,
              24.3902439
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+5.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cepparulo, Albert J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.75
              },
              {
                "className": "unsecured-bar",
                "value": 19.76
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.59
              },
              {
                "className": "ror-bar",
                "value": 50.9
              }
            ]
          },
          25.75,
          {
            "type": "line",
            "values": [
              10.34482759,
              28.35820896
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-18.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Benz, William J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 17.92
              },
              {
                "className": "unsecured-bar",
                "value": 81.48
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3
              },
              {
                "className": "ror-bar",
                "value": 0.3
              }
            ]
          },
          17.92,
          {
            "type": "line",
            "values": [
              29.78723404,
              16.94078947
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Waite, Clyde W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 10
              },
              {
                "className": "unsecured-bar",
                "value": 64.44
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.11
              },
              {
                "className": "ror-bar",
                "value": 24.44
              }
            ]
          },
          10,
          {
            "type": "line",
            "values": [
              2.702702703,
              12.14285714
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-9.4"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Westmoreland",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 31.716625590000003
          },
          {
            "className": "unsecured-bar",
            "value": 30.687900000000003
          },
          {
            "className": "nonmonetary-bar",
            "value": 4.66
          },
          {
            "className": "ror-bar",
            "value": 32.9304
          }
        ]
      },
      31.716625590000003,
      {
        "type": "line",
        "values": [
          50.050454089999995,
          28.61736334
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Pallone, Frank J. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.75
              },
              {
                "className": "unsecured-bar",
                "value": 24.49
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.08
              },
              {
                "className": "ror-bar",
                "value": 29.69
              }
            ]
          },
          45.75,
          {
            "type": "line",
            "values": [
              51.83673469,
              42.59012016
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "DeMarchis, Joseph R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.22
              },
              {
                "className": "unsecured-bar",
                "value": 51.01
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 3.77
              }
            ]
          },
          45.22,
          {
            "type": "line",
            "values": [
              59.1954023,
              39.84063745
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+19.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bilik, Mark",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.73
              },
              {
                "className": "unsecured-bar",
                "value": 14.18
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 49.09
              }
            ]
          },
          36.73,
          {
            "type": "line",
            "values": [
              49.01960784,
              36.01694915
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dalfonso, Joseph A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.51
              },
              {
                "className": "unsecured-bar",
                "value": 13.51
              },
              {
                "className": "nonmonetary-bar",
                "value": 21.9
              },
              {
                "className": "ror-bar",
                "value": 29.08
              }
            ]
          },
          35.51,
          {
            "type": "line",
            "values": [
              47.56554307,
              30.32659409
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Eckels, Roger",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.17
              },
              {
                "className": "unsecured-bar",
                "value": 29.17
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.21
              },
              {
                "className": "ror-bar",
                "value": 36.46
              }
            ]
          },
          34.17,
          {
            "type": "line",
            "values": [
              65.95744681,
              30.15075377
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+35.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mansour, Mark Stephen",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.01
              },
              {
                "className": "unsecured-bar",
                "value": 13.73
              },
              {
                "className": "nonmonetary-bar",
                "value": 25.44
              },
              {
                "className": "ror-bar",
                "value": 26.83
              }
            ]
          },
          34.01,
          {
            "type": "line",
            "values": [
              56.03448276,
              31.84165232
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+24.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Christner, Charles M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.97
              },
              {
                "className": "unsecured-bar",
                "value": 10.3
              },
              {
                "className": "nonmonetary-bar",
                "value": 17.58
              },
              {
                "className": "ror-bar",
                "value": 40.15
              }
            ]
          },
          31.97,
          {
            "type": "line",
            "values": [
              53.16455696,
              28.79581152
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+24.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Thiel, Denise S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.55
              },
              {
                "className": "unsecured-bar",
                "value": 26.48
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 41.97
              }
            ]
          },
          31.55,
          {
            "type": "line",
            "values": [
              85.18518519,
              27.10280374
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+58.1"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Moore, Charles D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.77
              },
              {
                "className": "unsecured-bar",
                "value": 3.27
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.58
              },
              {
                "className": "ror-bar",
                "value": 61.37
              }
            ]
          },
          30.77,
          {
            "type": "line",
            "values": [
              57.14285714,
              30.62381853
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+26.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kistler, Helen M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.55
              },
              {
                "className": "unsecured-bar",
                "value": 68.69
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0.76
              }
            ]
          },
          30.55,
          {
            "type": "line",
            "values": [
              38.59649123,
              29.20560748
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+9.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Buczak, Jason",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.77
              },
              {
                "className": "unsecured-bar",
                "value": 26.74
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.18
              },
              {
                "className": "ror-bar",
                "value": 43.32
              }
            ]
          },
          29.77,
          {
            "type": "line",
            "values": [
              59.64912281,
              26.69404517
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+33.0"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Albert, James",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.28
              },
              {
                "className": "unsecured-bar",
                "value": 50.87
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.29
              },
              {
                "className": "ror-bar",
                "value": 19.57
              }
            ]
          },
          29.28,
          {
            "type": "line",
            "values": [
              42.27642276,
              28.01635992
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Peck, Yackopec Cheryl J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.3
              },
              {
                "className": "unsecured-bar",
                "value": 71.46
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.12
              },
              {
                "className": "ror-bar",
                "value": 0.12
              }
            ]
          },
          28.3,
          {
            "type": "line",
            "values": [
              51.04166667,
              25.98784195
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+25.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Weimer, Douglas Reid",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.37
              },
              {
                "className": "unsecured-bar",
                "value": 68.42
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 4.21
              }
            ]
          },
          27.37,
          {
            "type": "line",
            "values": [
              55.55555556,
              24.56140351
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+31.0"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Falcon, James N.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.1
              },
              {
                "className": "unsecured-bar",
                "value": 44.99
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.9
              },
              {
                "className": "ror-bar",
                "value": 26.02
              }
            ]
          },
          27.1,
          {
            "type": "line",
            "values": [
              34.375,
              27.75665399
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.6"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mahady, Michael",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.36
              },
              {
                "className": "unsecured-bar",
                "value": 6.73
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 67.92
              }
            ]
          },
          25.36,
          {
            "type": "line",
            "values": [
              41.17647059,
              24.26035503
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bompiani, L. Anthony",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.78
              },
              {
                "className": "unsecured-bar",
                "value": 25.82
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.45
              },
              {
                "className": "ror-bar",
                "value": 48.81
              }
            ]
          },
          24.78,
          {
            "type": "line",
            "values": [
              40.69767442,
              22.46376812
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gongaware, Wayne",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 18.59
              },
              {
                "className": "unsecured-bar",
                "value": 50.14
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.7
              },
              {
                "className": "ror-bar",
                "value": 30.56
              }
            ]
          },
          18.59,
          {
            "type": "line",
            "values": [
              29.6875,
              16.93037975
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Conway, Charles",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 15.7
              },
              {
                "className": "unsecured-bar",
                "value": 24.73
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.54
              },
              {
                "className": "ror-bar",
                "value": 58.84
              }
            ]
          },
          15.7,
          {
            "type": "line",
            "values": [
              34.88372093,
              14.07867495
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20.8"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Butler",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 31.15234375
          },
          {
            "className": "unsecured-bar",
            "value": 5.0806
          },
          {
            "className": "nonmonetary-bar",
            "value": 5.8134
          },
          {
            "className": "ror-bar",
            "value": 57.3034
          }
        ]
      },
      31.15234375,
      {
        "type": "line",
        "values": [
          44.7761194,
          29.515418500000003
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "McCune, Timothy F.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.34
              },
              {
                "className": "unsecured-bar",
                "value": 0
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.85
              },
              {
                "className": "ror-bar",
                "value": 32.04
              }
            ]
          },
          55.34,
          {
            "type": "line",
            "values": [
              66.66666667,
              60
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.7"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Fullerton, William T.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.82
              },
              {
                "className": "unsecured-bar",
                "value": 2.05
              },
              {
                "className": "nonmonetary-bar",
                "value": 11.16
              },
              {
                "className": "ror-bar",
                "value": 40.18
              }
            ]
          },
          44.82,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kovach, David T.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44
              },
              {
                "className": "unsecured-bar",
                "value": 10.86
              },
              {
                "className": "nonmonetary-bar",
                "value": 7.09
              },
              {
                "className": "ror-bar",
                "value": 37.14
              }
            ]
          },
          44,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Stoughton, Lewis E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.74
              },
              {
                "className": "unsecured-bar",
                "value": 4.24
              },
              {
                "className": "nonmonetary-bar",
                "value": 15.06
              },
              {
                "className": "ror-bar",
                "value": 44.22
              }
            ]
          },
          35.74,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "O'donnell, Kevin P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.74
              },
              {
                "className": "unsecured-bar",
                "value": 2.65
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.54
              },
              {
                "className": "ror-bar",
                "value": 61.06
              }
            ]
          },
          32.74,
          {
            "type": "line",
            "values": [
              50,
              31.06796117
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.9"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Haggerty, Sue",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.66
              },
              {
                "className": "unsecured-bar",
                "value": 12.18
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.23
              },
              {
                "className": "ror-bar",
                "value": 50.42
              }
            ]
          },
          32.66,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "O'Donnell, William S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.98
              },
              {
                "className": "unsecured-bar",
                "value": 8.16
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.3
              },
              {
                "className": "ror-bar",
                "value": 59.55
              }
            ]
          },
          30.98,
          {
            "type": "line",
            "values": [
              33.33333333,
              30.66954644
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+2.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "O'Donnell, Kevin P.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.69
              },
              {
                "className": "unsecured-bar",
                "value": 0.76
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.38
              },
              {
                "className": "ror-bar",
                "value": 71.87
              }
            ]
          },
          25.69,
          {
            "type": "line",
            "values": [
              42.5,
              24.62809917
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.9"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Seibel, Wayne D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 22.69
              },
              {
                "className": "unsecured-bar",
                "value": 13.79
              },
              {
                "className": "nonmonetary-bar",
                "value": 18.15
              },
              {
                "className": "ror-bar",
                "value": 44.65
              }
            ]
          },
          22.69,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Shaffer, William",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 15.72
              },
              {
                "className": "unsecured-bar",
                "value": 0.63
              },
              {
                "className": "nonmonetary-bar",
                "value": 48.43
              },
              {
                "className": "ror-bar",
                "value": 25.79
              }
            ]
          },
          15.72,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Adams",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 30.18867925
          },
          {
            "className": "unsecured-bar",
            "value": 30.431399999999996
          },
          {
            "className": "nonmonetary-bar",
            "value": 14.3297
          },
          {
            "className": "ror-bar",
            "value": 24.8844
          }
        ]
      },
      30.18867925,
      {
        "type": "line",
        "values": [
          43.56060606,
          29.036515619999996
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Harvey, Matthew Robert",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.2
              },
              {
                "className": "unsecured-bar",
                "value": 44.22
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.06
              },
              {
                "className": "ror-bar",
                "value": 17.52
              }
            ]
          },
          35.2,
          {
            "type": "line",
            "values": [
              49.29577465,
              33.13609467
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+16.2"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bowman, Daniel S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.72
              },
              {
                "className": "unsecured-bar",
                "value": 12.39
              },
              {
                "className": "nonmonetary-bar",
                "value": 26.51
              },
              {
                "className": "ror-bar",
                "value": 27.38
              }
            ]
          },
          33.72,
          {
            "type": "line",
            "values": [
              44.7761194,
              32.95081967
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+11.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Beauchat, Mark D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.13
              },
              {
                "className": "unsecured-bar",
                "value": 10.12
              },
              {
                "className": "nonmonetary-bar",
                "value": 28.24
              },
              {
                "className": "ror-bar",
                "value": 32.33
              }
            ]
          },
          29.13,
          {
            "type": "line",
            "values": [
              40.6779661,
              27.85571142
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+12.8"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Little, Tony J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.48
              },
              {
                "className": "unsecured-bar",
                "value": 46.79
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.28
              },
              {
                "className": "ror-bar",
                "value": 26.44
              }
            ]
          },
          25.48,
          {
            "type": "line",
            "values": [
              42.30769231,
              24.63768116
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.7"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Perry",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 28.98148148
          },
          {
            "className": "unsecured-bar",
            "value": 26.2963
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.0185
          },
          {
            "className": "ror-bar",
            "value": 41.4815
          }
        ]
      },
      28.98148148,
      {
        "type": "line",
        "values": [
          40,
          27.68130746
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "McGuire, Daniel R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.2
              },
              {
                "className": "unsecured-bar",
                "value": 4.09
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 49.71
              }
            ]
          },
          46.2,
          {
            "type": "line",
            "values": [
              60,
              45.34161491
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+14.7"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Frownfelter, Elizabeth R.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46
              },
              {
                "className": "unsecured-bar",
                "value": 8
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.5
              },
              {
                "className": "ror-bar",
                "value": 45.5
              }
            ]
          },
          46,
          {
            "type": "line",
            "values": [
              87.5,
              44.21052632
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+43.3"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Schechterly, Michael E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 16.36
              },
              {
                "className": "unsecured-bar",
                "value": 37.9
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.67
              },
              {
                "className": "ror-bar",
                "value": 41.57
              }
            ]
          },
          16.36,
          {
            "type": "line",
            "values": [
              25,
              17.05150977
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.9"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Crawford",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 28.8973384
          },
          {
            "className": "unsecured-bar",
            "value": 13.054499999999999
          },
          {
            "className": "nonmonetary-bar",
            "value": 3.5488
          },
          {
            "className": "ror-bar",
            "value": 53.992399999999996
          }
        ]
      },
      28.8973384,
      {
        "type": "line",
        "values": [
          53.33333333,
          28.3197832
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Pendolino, Samuel V.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.42
              },
              {
                "className": "unsecured-bar",
                "value": 11.96
              },
              {
                "className": "nonmonetary-bar",
                "value": 9.63
              },
              {
                "className": "ror-bar",
                "value": 40.99
              }
            ]
          },
          37.42,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nicols, Amy L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.96
              },
              {
                "className": "unsecured-bar",
                "value": 14.37
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.37
              },
              {
                "className": "ror-bar",
                "value": 51.31
              }
            ]
          },
          33.96,
          {
            "type": "line",
            "values": [
              55.55555556,
              33.33333333
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.2"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Zilhaver, Lincoln S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.8
              },
              {
                "className": "unsecured-bar",
                "value": 3.63
              },
              {
                "className": "nonmonetary-bar",
                "value": 20.07
              },
              {
                "className": "ror-bar",
                "value": 45.16
              }
            ]
          },
          30.8,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Marwood, Rita J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.54
              },
              {
                "className": "unsecured-bar",
                "value": 16.97
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 58.49
              }
            ]
          },
          24.54,
          {
            "type": "line",
            "values": [
              60,
              40
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+20"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Fulton",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 28.672985779999998
          },
          {
            "className": "unsecured-bar",
            "value": 14.691899999999999
          },
          {
            "className": "nonmonetary-bar",
            "value": 5.2133
          },
          {
            "className": "ror-bar",
            "value": 51.4218
          }
        ]
      },
      28.672985779999998,
      {
        "type": "line",
        "values": [
          31.578947369999998,
          29.27536232
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Heming, Tamela M.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.36
              },
              {
                "className": "unsecured-bar",
                "value": 25.42
              },
              {
                "className": "nonmonetary-bar",
                "value": 16.95
              },
              {
                "className": "ror-bar",
                "value": 26.27
              }
            ]
          },
          31.36,
          {
            "type": "line",
            "values": [
              33.33333333,
              32
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+1.3"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Mellott, Wendy",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.74
              },
              {
                "className": "unsecured-bar",
                "value": 8.08
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.51
              },
              {
                "className": "ror-bar",
                "value": 67.68
              }
            ]
          },
          23.74,
          {
            "type": "line",
            "values": [
              25,
              24.4047619
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+0.6"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Elk",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 28.62318841
          },
          {
            "className": "unsecured-bar",
            "value": 71.3768
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 0
          }
        ]
      },
      28.62318841,
      {
        "type": "line",
        "values": [
          27.77777778,
          28.68117798
        ]
      },
      "--"
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Martin, James L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.69
              },
              {
                "className": "unsecured-bar",
                "value": 73.31
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          26.69,
          {
            "type": "line",
            "values": [
              40,
              26.99386503
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.0"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Jacob, Mark S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.67
              },
              {
                "className": "unsecured-bar",
                "value": 74.33
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          25.67,
          {
            "type": "line",
            "values": [
              25,
              26.29107981
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-1.3"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Centre",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 26.083333330000002
          },
          {
            "className": "unsecured-bar",
            "value": 12.062299999999999
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0278
          },
          {
            "className": "ror-bar",
            "value": 61.5898
          }
        ]
      },
      26.083333330000002,
      {
        "type": "line",
        "values": [
          46.74115456,
          21.884927639999997
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Gillette-Walker, Kelley",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.8
              },
              {
                "className": "unsecured-bar",
                "value": 8.55
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 47.44
              }
            ]
          },
          43.8,
          {
            "type": "line",
            "values": [
              75.3164557,
              36.96808511
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+38.3"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Jordan, Thomas N.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.16
              },
              {
                "className": "unsecured-bar",
                "value": 12.86
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 46.98
              }
            ]
          },
          40.16,
          {
            "type": "line",
            "values": [
              72.54901961,
              33.8658147
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+38.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sinclair, Allen W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.59
              },
              {
                "className": "unsecured-bar",
                "value": 13.57
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.28
              },
              {
                "className": "ror-bar",
                "value": 59.56
              }
            ]
          },
          26.59,
          {
            "type": "line",
            "values": [
              42.85714286,
              20.71428571
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Prestia, Carmine W. Jr.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 20
              },
              {
                "className": "unsecured-bar",
                "value": 15.29
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 64.71
              }
            ]
          },
          20,
          {
            "type": "line",
            "values": [
              33.59375,
              16.22641509
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+17.4"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lachman, Steven Frederic",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 16.34
              },
              {
                "className": "unsecured-bar",
                "value": 13.43
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 70.06
              }
            ]
          },
          16.34,
          {
            "type": "line",
            "values": [
              29.89690722,
              14.19491525
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+15.7"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Horner, Ronald J.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 5.93
              },
              {
                "className": "unsecured-bar",
                "value": 3.95
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 90.11
              }
            ]
          },
          5.93,
          {
            "type": "line",
            "values": [
              21.27659574,
              3.202846975
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+18.1"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nileski, Charity L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 0.74
              },
              {
                "className": "unsecured-bar",
                "value": 0.74
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 98.52
              }
            ]
          },
          0.74,
          {
            "type": "line",
            "values": [
              7.142857143,
              0.8064516129
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+6.3"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Union",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 25.36136662
          },
          {
            "className": "unsecured-bar",
            "value": 11.958
          },
          {
            "className": "nonmonetary-bar",
            "value": 14.4547
          },
          {
            "className": "ror-bar",
            "value": 47.7004
          }
        ]
      },
      25.36136662,
      {
        "type": "line",
        "values": [
          38.20224719,
          23.24159021
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Mensch, Jeffrey L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.3
              },
              {
                "className": "unsecured-bar",
                "value": 18.89
              },
              {
                "className": "nonmonetary-bar",
                "value": 34.07
              },
              {
                "className": "ror-bar",
                "value": 20.74
              }
            ]
          },
          26.3,
          {
            "type": "line",
            "values": [
              40,
              26.50176678
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+13.5"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Armbruster, Leo S.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 16.58
              },
              {
                "className": "unsecured-bar",
                "value": 5.87
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.32
              },
              {
                "className": "ror-bar",
                "value": 74.23
              }
            ]
          },
          16.58,
          {
            "type": "line",
            "values": [
              23.07692308,
              16.08187135
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+7.0"
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Somerset",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 25
          },
          {
            "className": "unsecured-bar",
            "value": 23.6146
          },
          {
            "className": "nonmonetary-bar",
            "value": 46.0809
          },
          {
            "className": "ror-bar",
            "value": 4.643
          }
        ]
      },
      25,
      {
        "type": "line",
        "values": [
          69.56521739,
          23.20855615
        ]
      },
      "--"
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Stevanus, Sandra L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.11
              },
              {
                "className": "unsecured-bar",
                "value": 26.79
              },
              {
                "className": "nonmonetary-bar",
                "value": 33.96
              },
              {
                "className": "ror-bar",
                "value": 1.13
              }
            ]
          },
          38.11,
          {
            "type": "line",
            "values": [
              75,
              34.34782609
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+40.7"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Mankamyer, Susan",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.35
              },
              {
                "className": "unsecured-bar",
                "value": 14.48
              },
              {
                "className": "nonmonetary-bar",
                "value": 55.71
              },
              {
                "className": "ror-bar",
                "value": 4.46
              }
            ]
          },
          25.35,
          {
            "type": "line",
            "values": [
              80,
              23.4421365
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+56.6"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Seger, William E.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.46
              },
              {
                "className": "unsecured-bar",
                "value": 25.54
              },
              {
                "className": "nonmonetary-bar",
                "value": 49.64
              },
              {
                "className": "ror-bar",
                "value": 0.36
              }
            ]
          },
          24.46,
          {
            "type": "line",
            "values": [
              66.66666667,
              24.07407407
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+42.6"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Johnson, Kenneth W.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 22.53
              },
              {
                "className": "unsecured-bar",
                "value": 27.34
              },
              {
                "className": "nonmonetary-bar",
                "value": 50.14
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          22.53,
          {
            "type": "line",
            "values": [
              64.1025641,
              20.59259259
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+43.5"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Geary, D Gregory",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 21.9
              },
              {
                "className": "unsecured-bar",
                "value": 22.86
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.95
              },
              {
                "className": "ror-bar",
                "value": 41.9
              }
            ]
          },
          21.9,
          {
            "type": "line",
            "values": [
              50,
              21.78217822
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+28.2"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Bell, Douglas McCall",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 19.92
              },
              {
                "className": "unsecured-bar",
                "value": 20.31
              },
              {
                "className": "nonmonetary-bar",
                "value": 49.43
              },
              {
                "className": "ror-bar",
                "value": 9.96
              }
            ]
          },
          19.92,
          {
            "type": "line",
            "values": [
              50,
              19.84126984
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+30.2"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Potter",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 23.36601307
          },
          {
            "className": "unsecured-bar",
            "value": 57.7741
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.9640000000000002
          },
          {
            "className": "ror-bar",
            "value": 16.5303
          }
        ]
      },
      23.36601307,
      {
        "type": "line",
        "values": [
          75,
          23.24786325
        ]
      },
      "--"
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "McCleaft, Kari A.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.71
              },
              {
                "className": "unsecured-bar",
                "value": 71.69
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          27.71,
          {
            "type": "line",
            "values": [
              50,
              27.5
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+22.5"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Weiss, Delores G.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.06
              },
              {
                "className": "unsecured-bar",
                "value": 61.5
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 14.44
              }
            ]
          },
          24.06,
          {
            "type": "line",
            "values": [
              0,
              24.72527473
            ]
          },
          {
            "type": "styled",
            "className": "negative-diff",
            "value": "-24.7"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Easton, Annette L.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 19.26
              },
              {
                "className": "unsecured-bar",
                "value": 45.9
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.92
              },
              {
                "className": "ror-bar",
                "value": 29.92
              }
            ]
          },
          19.26,
          {
            "type": "line",
            "values": [
              100,
              18.61471861
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+81.4"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Cameron",
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 21.67832168
          },
          {
            "className": "unsecured-bar",
            "value": 78.3217
          },
          {
            "className": "nonmonetary-bar",
            "value": 0
          },
          {
            "className": "ror-bar",
            "value": 0
          }
        ]
      },
      21.67832168,
      {
        "type": "line",
        "values": [
          100,
          25.454545449999998
        ]
      },
      "--"
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Brown, Barry D.",
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 21.28
              },
              {
                "className": "unsecured-bar",
                "value": 78.72
              },
              {
                "className": "nonmonetary-bar",
                "value": 0
              },
              {
                "className": "ror-bar",
                "value": 0
              }
            ]
          },
          21.28,
          {
            "type": "line",
            "values": [
              66.66666667,
              37.58865248
            ]
          },
          {
            "type": "styled",
            "className": "positive-diff",
            "value": "+29.1"
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  }
];