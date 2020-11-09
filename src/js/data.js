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

export const PRETRIAL_SPENDING_DATA = [
  {
    "data": [
      "Average",
      "$10.1M",
      "$16.1M",
      62.44427927,
      {
        "type": "bar",
        "values": [
          62.44427927
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Adams",
      "$3.6M",
      "$11.1M",
      32.43914185,
      {
        "type": "bar",
        "values": [
          32.43914185
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Allegheny",
      "$57.6M",
      "$86.M",
      67.01743239,
      {
        "type": "bar",
        "values": [
          67.01743239
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Armstrong",
      "$2.9M",
      "$4.6M",
      63.23898622,
      {
        "type": "bar",
        "values": [
          63.23898622
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Beaver",
      "$4.7M",
      "$9.3M",
      49.91935539,
      {
        "type": "bar",
        "values": [
          49.91935539
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Bedford",
      "$2.2M",
      "$3.1M",
      70.14284972,
      {
        "type": "bar",
        "values": [
          70.14284972
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Berks",
      "$27.4M",
      "$35.7M",
      76.92692634,
      {
        "type": "bar",
        "values": [
          76.92692634
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Blair",
      "N/R",
      "$8.6M",
      "N/R",
      {
        "type": "bar",
        "values": [
          62.4
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Bradford",
      "$0.7M",
      "$4.1M",
      16.17296357,
      {
        "type": "bar",
        "values": [
          16.17296357
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Bucks",
      "$16.M",
      "$27.6M",
      57.90105653,
      {
        "type": "bar",
        "values": [
          57.90105653
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Butler",
      "$10.M",
      "$11.6M",
      86.19403059,
      {
        "type": "bar",
        "values": [
          86.19403059
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Cambria",
      "$4.9M",
      "$10.6M",
      46.00591555,
      {
        "type": "bar",
        "values": [
          46.00591555
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Cameron",
      "N/A",
      "N/A",
      "N/A",
      {
        "type": "bar",
        "values": [
          62.4
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Carbon",
      "$2.7M",
      "$5.M",
      55.20362881,
      {
        "type": "bar",
        "values": [
          55.20362881
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Centre",
      "$3.M",
      "$8.9M",
      33.49236863,
      {
        "type": "bar",
        "values": [
          33.49236863
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Chester",
      "$16.3M",
      "$30.M",
      54.39229774,
      {
        "type": "bar",
        "values": [
          54.39229774
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Clarion",
      "$0.8M",
      "$2.4M",
      32.47664265,
      {
        "type": "bar",
        "values": [
          32.47664265
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Clearfield",
      "$1.6M",
      "$3.4M",
      47.56945001,
      {
        "type": "bar",
        "values": [
          47.56945001
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Clinton",
      "$1.7M",
      "$6.5M",
      26.20482058,
      {
        "type": "bar",
        "values": [
          26.20482058
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Columbia",
      "$2.8M",
      "$6.M",
      45.91836515,
      {
        "type": "bar",
        "values": [
          45.91836515
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Crawford",
      "$3.3M",
      "$6.M",
      54.53667276,
      {
        "type": "bar",
        "values": [
          54.53667276
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Cumberland",
      "$8.5M",
      "$11.3M",
      75.28473396,
      {
        "type": "bar",
        "values": [
          75.28473396
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Dauphin",
      "$0.3M",
      "N/R",
      "N/R",
      {
        "type": "bar",
        "values": [
          62.4
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Delaware",
      "$0.4M",
      "N/R",
      "N/R",
      {
        "type": "bar",
        "values": [
          62.4
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Elk",
      "$1.9M",
      "$2.7M",
      70.16631838,
      {
        "type": "bar",
        "values": [
          70.16631838
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Erie",
      "$6.7M",
      "$17.M",
      39.4405589,
      {
        "type": "bar",
        "values": [
          39.4405589
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Fayette",
      "$9.3M",
      "$7.6M",
      121.3963915,
      {
        "type": "bar",
        "values": [
          121.3963915
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Forest",
      "N/A",
      "N/A",
      "N/A",
      {
        "type": "bar",
        "values": [
          62.4
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Franklin",
      "$6.2M",
      "$13.3M",
      46.55092852,
      {
        "type": "bar",
        "values": [
          46.55092852
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Fulton",
      "N/A",
      "N/A",
      "N/A",
      {
        "type": "bar",
        "values": [
          62.4
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Greene",
      "$1.3M",
      "$2.7M",
      47.56944381,
      {
        "type": "bar",
        "values": [
          47.56944381
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Huntingdon",
      "$1.3M",
      "$1.7M",
      77.32557584,
      {
        "type": "bar",
        "values": [
          77.32557584
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Indiana",
      "$3.6M",
      "$7.1M",
      51.53061275,
      {
        "type": "bar",
        "values": [
          51.53061275
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Jefferson",
      "$1.5M",
      "$3.3M",
      46.1397167,
      {
        "type": "bar",
        "values": [
          46.1397167
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Juniata",
      "N/A",
      "N/A",
      "N/A",
      {
        "type": "bar",
        "values": [
          62.4
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lackawanna",
      "$16.9M",
      "$25.4M",
      66.42315908,
      {
        "type": "bar",
        "values": [
          66.42315908
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lancaster",
      "$15.5M",
      "$27.6M",
      56.0542793,
      {
        "type": "bar",
        "values": [
          56.0542793
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lawrence",
      "N/R",
      "$6.2M",
      "N/R",
      {
        "type": "bar",
        "values": [
          62.4
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lebanon",
      "$4.7M",
      "$9.3M",
      50.50411042,
      {
        "type": "bar",
        "values": [
          50.50411042
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lehigh",
      "$9.M",
      "$30.M",
      30.0079569,
      {
        "type": "bar",
        "values": [
          30.0079569
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Luzerne",
      "N/R",
      "$26.3M",
      "N/R",
      {
        "type": "bar",
        "values": [
          62.4
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lycoming",
      "$9.M",
      "$10.3M",
      87.12023555,
      {
        "type": "bar",
        "values": [
          87.12023555
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "McKean",
      "$2.1M",
      "$2.6M",
      80.62499691,
      {
        "type": "bar",
        "values": [
          80.62499691
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Mercer",
      "$3.5M",
      "$7.8M",
      45.21396757,
      {
        "type": "bar",
        "values": [
          45.21396757
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Mifflin",
      "$2.1M",
      "$3.6M",
      58.29183635,
      {
        "type": "bar",
        "values": [
          58.29183635
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Monroe",
      "$6.3M",
      "$12.7M",
      49.18033199,
      {
        "type": "bar",
        "values": [
          49.18033199
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Montgomery",
      "$29.6M",
      "$38.8M",
      76.43072401,
      {
        "type": "bar",
        "values": [
          76.43072401
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Montour",
      "$0.7M",
      "$0.9M",
      76.64233742,
      {
        "type": "bar",
        "values": [
          76.64233742
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Northampton",
      "$12.6M",
      "$26.6M",
      47.6338724,
      {
        "type": "bar",
        "values": [
          47.6338724
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Northumberland",
      "$1.5M",
      "$2.4M",
      64.0957536,
      {
        "type": "bar",
        "values": [
          64.0957536
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Perry",
      "$3.1M",
      "$4.8M",
      64.92248608,
      {
        "type": "bar",
        "values": [
          64.92248608
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Philadelphia",
      "$205.1M",
      "$260.9M",
      78.60564543,
      {
        "type": "bar",
        "values": [
          78.60564543
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Pike",
      "$8.1M",
      "$10.2M",
      79.57516231,
      {
        "type": "bar",
        "values": [
          79.57516231
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Potter",
      "$0.3M",
      "$0.7M",
      38.28125105,
      {
        "type": "bar",
        "values": [
          38.28125105
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Schuylkill",
      "$4.9M",
      "$7.3M",
      67.50973321,
      {
        "type": "bar",
        "values": [
          67.50973321
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Snyder",
      "$1.1M",
      "$3.4M",
      33.18584058,
      {
        "type": "bar",
        "values": [
          33.18584058
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Somerset",
      "$3.8M",
      "$2.9M",
      130.5309721,
      {
        "type": "bar",
        "values": [
          130.5309721
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Sullivan",
      "N/A",
      "N/A",
      "N/A",
      {
        "type": "bar",
        "values": [
          62.4
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Susquehanna",
      "$2.7M",
      "$3.1M",
      87.27389024,
      {
        "type": "bar",
        "values": [
          87.27389024
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Tioga",
      "$1.2M",
      "$2.6M",
      44.75309491,
      {
        "type": "bar",
        "values": [
          44.75309491
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Union",
      "$0.4M",
      "$0.9M",
      41.91170231,
      {
        "type": "bar",
        "values": [
          41.91170231
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Venango",
      "$1.8M",
      "$2.7M",
      65.28663594,
      {
        "type": "bar",
        "values": [
          65.28663594
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Warren",
      "N/R",
      "$3.1M",
      "N/R",
      {
        "type": "bar",
        "values": [
          62.4
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Washington",
      "$4.M",
      "$7.7M",
      51.11357976,
      {
        "type": "bar",
        "values": [
          51.11357976
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Wayne",
      "$2.8M",
      "$4.4M",
      63.54167183,
      {
        "type": "bar",
        "values": [
          63.54167183
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Westmoreland",
      "$8.4M",
      "$16.5M",
      51.29716715,
      {
        "type": "bar",
        "values": [
          51.29716715
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Wyoming",
      "$1.9M",
      "$2.2M",
      85.99998119,
      {
        "type": "bar",
        "values": [
          85.99998119
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "York",
      "$16.7M",
      "$54.6M",
      30.66932716,
      {
        "type": "bar",
        "values": [
          30.66932716
        ]
      }
    ],
    "outlier": false
  }
]