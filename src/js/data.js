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
      [
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
      [
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 8.39
            }
          ]
        },
        75.62,
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
      [
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
      [
        "Tibbs, Edward A.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 73.79
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
      [
        "Barner, Robert L.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 71.38
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
      [
        "Armour, John W.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 67.19
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
      [
        "Costa, Ron Sr.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 58.39
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
      [
        "Ricciardi, Gene",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 53.89
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
      [
        "Martini, Randy",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 53.25
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
      [
        "Motznik, James A.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 51.79
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
      [
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
      [
        "Miller, Thomas Jr.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 49.86
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
      [
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
      [
        "Butler, Daniel E.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 48.64
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
      [
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
      [
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
      [
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
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ],
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
        "Mills, Beth S.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 40.74
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
      [
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
      [
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
      [
        "Petite, Oscar J. Jr.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 39.55
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
        "Ravenstahl, Robert P. Jr.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 34.28
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
      [
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
      [
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
      [
        "Dzvonick, Robert Paul",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 32.07
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
      [
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
      [
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
      [
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
      [
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
      [
        "Zucco, Linda",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 30
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
      [
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
      [
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
      [
        "Swearingen-Batch, Carla M.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 27.58
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
      [
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
      [
        "Barton, David J.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 27.52
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
      [
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
      [
        "Lang, Elissa M.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 27.27
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
      [
        "Cercone, Mary A.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 25.22
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
      [
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
      [
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
      [
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
      [
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
          ]
        },
        23.33,
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
      [
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
      [
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
      [
        "Herbst, Jeffrey L.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 17.67
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 0.86
            }
          ]
        },
        60.57,
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        44.85,
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
      [
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
              "className": "ror-bar",
              "value": 3.31
            }
          ]
        },
        37.85,
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
      [
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
              "className": "ror-bar",
              "value": 2.8
            }
          ]
        },
        37.06,
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
      [
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
              "className": "ror-bar",
              "value": 1.14
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        95.81,
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
      [
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
              "className": "ror-bar",
              "value": 0.46
            }
          ]
        },
        82.72,
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
      [
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
              "className": "ror-bar",
              "value": 0.33
            }
          ]
        },
        67.48,
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
      [
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
              "className": "ror-bar",
              "value": 16.04
            }
          ]
        },
        62.97,
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
      [
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
          ]
        },
        57.02,
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
      [
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
              "className": "ror-bar",
              "value": 0.56
            }
          ]
        },
        55.56,
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
      [
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
              "className": "ror-bar",
              "value": 1.79
            }
          ]
        },
        54.71,
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
      [
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
              "className": "ror-bar",
              "value": 27.86
            }
          ]
        },
        51.4,
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
      [
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
          ]
        },
        45.8,
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
      [
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
              "className": "ror-bar",
              "value": 24.48
            }
          ]
        },
        43.48,
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
      [
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
              "className": "ror-bar",
              "value": 17.54
            }
          ]
        },
        43.38,
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
      [
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
          ]
        },
        43.23,
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
      [
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
              "className": "ror-bar",
              "value": 35.31
            }
          ]
        },
        37.58,
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
      [
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
              "className": "ror-bar",
              "value": 46.38
            }
          ]
        },
        37.2,
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
      [
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
          ]
        },
        37.03,
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
      [
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
          ]
        },
        34.95,
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
      [
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
          ]
        },
        33.33,
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
      [
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
              "className": "ror-bar",
              "value": 38.27
            }
          ]
        },
        31.79,
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
      [
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
              "className": "ror-bar",
              "value": 37.37
            }
          ]
        },
        31.05,
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
      [
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
              "className": "ror-bar",
              "value": 63.4
            }
          ]
        },
        29.9,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        52.64,
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
      [
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
              "className": "ror-bar",
              "value": 0.61
            }
          ]
        },
        43.81,
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
      [
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
          ]
        },
        35.34,
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
      [
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
          ]
        },
        29.92,
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
      [
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
      [
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
          ]
        },
        18.59,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 19.08
            }
          ]
        },
        46.82,
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
      [
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
      [
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
      [
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
      [
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
          ]
        },
        41.26,
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
      [
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
              "className": "ror-bar",
              "value": 36.75
            }
          ]
        },
        41.03,
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
      [
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
          ]
        },
        40,
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
      [
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
              "className": "ror-bar",
              "value": 12.3
            }
          ]
        },
        37.7,
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
      [
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
          ]
        },
        37.11,
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
      [
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
          ]
        },
        35.25,
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
      [
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
              "className": "ror-bar",
              "value": 38.01
            }
          ]
        },
        33.92,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 41.93
            }
          ]
        },
        33.33,
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
      [
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
              "className": "ror-bar",
              "value": 54.1
            }
          ]
        },
        32.79,
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
      [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 0.27
            }
          ]
        },
        32.3,
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
      [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 25.34
            }
          ]
        },
        30.84,
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
      [
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
          ]
        },
        30.7,
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
      [
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
              "className": "ror-bar",
              "value": 50.36
            }
          ]
        },
        28.64,
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
      [
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
              "className": "ror-bar",
              "value": 40.44
            }
          ]
        },
        27.21,
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
      [
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
        "McCune, Timothy F.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 55.34
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 25.09
            }
          ]
        },
        55.29,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 0.4
            }
          ]
        },
        53.68,
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
      [
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
              "className": "ror-bar",
              "value": 39.97
            }
          ]
        },
        49.92,
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
      [
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
              "className": "ror-bar",
              "value": 2.52
            }
          ]
        },
        40.55,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 26.39
            }
          ]
        },
        36.07,
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
      [
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
              "className": "ror-bar",
              "value": 32.86
            }
          ]
        },
        35.31,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        21.28,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 15.99
            }
          ]
        },
        37.44,
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
      [
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
              "className": "ror-bar",
              "value": 6.71
            }
          ]
        },
        37.13,
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
      [
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
              "className": "ror-bar",
              "value": 16.98
            }
          ]
        },
        32.71,
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
      [
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
              "className": "ror-bar",
              "value": 0.85
            }
          ]
        },
        27.97,
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
      [
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
              "className": "ror-bar",
              "value": 1.48
            }
          ]
        },
        27.41,
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
      [
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
              "className": "ror-bar",
              "value": 16.05
            }
          ]
        },
        27.02,
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
      [
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
              "className": "ror-bar",
              "value": 18.78
            }
          ]
        },
        20.52,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 47.44
            }
          ]
        },
        43.8,
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
      [
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
              "className": "ror-bar",
              "value": 46.98
            }
          ]
        },
        40.16,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 64.71
            }
          ]
        },
        20,
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
      [
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
              "className": "ror-bar",
              "value": 70.06
            }
          ]
        },
        16.34,
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
      [
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
              "className": "ror-bar",
              "value": 90.11
            }
          ]
        },
        5.93,
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
      [
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
              "className": "ror-bar",
              "value": 98.52
            }
          ]
        },
        0.74,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 5.28
            }
          ]
        },
        60.94,
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
      [
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
              "className": "ror-bar",
              "value": 8.17
            }
          ]
        },
        52.15,
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
      [
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
              "className": "ror-bar",
              "value": 19.86
            }
          ]
        },
        46.41,
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
      [
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
              "className": "ror-bar",
              "value": 9.32
            }
          ]
        },
        42.86,
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
      [
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
              "className": "ror-bar",
              "value": 20.43
            }
          ]
        },
        42.77,
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
      [
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
              "className": "ror-bar",
              "value": 18.01
            }
          ]
        },
        42.36,
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
      [
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
              "className": "ror-bar",
              "value": 20.03
            }
          ]
        },
        40.83,
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
      [
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
              "className": "ror-bar",
              "value": 19.11
            }
          ]
        },
        38.69,
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
      [
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
              "className": "ror-bar",
              "value": 22.57
            }
          ]
        },
        38.13,
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
      [
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
              "className": "ror-bar",
              "value": 29.67
            }
          ]
        },
        36.74,
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
      [
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
              "className": "ror-bar",
              "value": 26.5
            }
          ]
        },
        35.73,
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
      [
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
              "className": "ror-bar",
              "value": 21.6
            }
          ]
        },
        34.98,
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
      [
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
              "className": "ror-bar",
              "value": 28.73
            }
          ]
        },
        32.14,
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
      [
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
              "className": "ror-bar",
              "value": 25.84
            }
          ]
        },
        31.3,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 29.76
            }
          ]
        },
        25.89,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 30.91
            }
          ]
        },
        20.91,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 3.24
            }
          ]
        },
        44.41,
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
      [
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
              "className": "ror-bar",
              "value": 37.65
            }
          ]
        },
        43.53,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 33.15
            }
          ]
        },
        29.21,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        42.04,
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
      [
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
          ]
        },
        39.13,
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
      [
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
          ]
        },
        34.42,
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
      [
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
              "className": "ror-bar",
              "value": 0.55
            }
          ]
        },
        30.03,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
          ]
        },
        59.44,
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
      [
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
              "className": "ror-bar",
              "value": 21.39
            }
          ]
        },
        12.34,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 37.27
            }
          ]
        },
        42.73,
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
      [
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
          ]
        },
        27.35,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
      [
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
      [
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        50.98,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 44.82
            }
          ]
        },
        43.14,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 43.42
            }
          ]
        },
        40.93,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 47.2
            }
          ]
        },
        40.14,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 41.81
            }
          ]
        },
        35.06,
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
      [
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
              "className": "ror-bar",
              "value": 59.21
            }
          ]
        },
        25.31,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 1.43
            }
          ]
        },
        90.57,
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
      [
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
              "className": "ror-bar",
              "value": 0.35
            }
          ]
        },
        84.79,
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
      [
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
              "className": "ror-bar",
              "value": 1.17
            }
          ]
        },
        65.83,
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
      [
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
          ]
        },
        59.16,
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
      [
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
              "className": "ror-bar",
              "value": 0.64
            }
          ]
        },
        50.32,
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
      [
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
              "className": "ror-bar",
              "value": 32.32
            }
          ]
        },
        46.95,
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
      [
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
              "className": "ror-bar",
              "value": 0.77
            }
          ]
        },
        42.25,
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
      [
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
              "className": "ror-bar",
              "value": 46.1
            }
          ]
        },
        41.78,
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
      [
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
              "className": "ror-bar",
              "value": 35.22
            }
          ]
        },
        40.08,
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
      [
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
              "className": "ror-bar",
              "value": 34.51
            }
          ]
        },
        39.06,
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
      [
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
              "className": "ror-bar",
              "value": 41.13
            }
          ]
        },
        38.99,
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
      [
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
              "className": "ror-bar",
              "value": 2.22
            }
          ]
        },
        35.03,
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
      [
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
              "className": "ror-bar",
              "value": 36.36
            }
          ]
        },
        33.87,
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
      [
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
          ]
        },
        33.86,
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
      [
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
              "className": "ror-bar",
              "value": 0.23
            }
          ]
        },
        31.43,
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
      [
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
              "className": "ror-bar",
              "value": 56.56
            }
          ]
        },
        30.92,
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        75.87,
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
      [
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
          ]
        },
        74.28,
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
      [
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
          ]
        },
        74.02,
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
      [
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
          ]
        },
        71.73,
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
      [
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
          ]
        },
        71.53,
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
      [
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
          ]
        },
        71.18,
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
      [
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
          ]
        },
        69.26,
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
      [
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
          ]
        },
        62.88,
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
      [
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
          ]
        },
        61.84,
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
      [
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
          ]
        },
        61.05,
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
      [
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
          ]
        },
        60.52,
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
      [
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
              "className": "ror-bar",
              "value": 0.15
            }
          ]
        },
        60.36,
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
      [
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
          ]
        },
        59.06,
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
      [
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
          ]
        },
        57.44,
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
      [
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
          ]
        },
        57.36,
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
      [
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
              "className": "ror-bar",
              "value": 0.18
            }
          ]
        },
        56.54,
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
      [
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
          ]
        },
        53.29,
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
      [
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
              "className": "ror-bar",
              "value": 2.8
            }
          ]
        },
        52.2,
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
      [
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
          ]
        },
        51.46,
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
      [
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
          ]
        },
        51.33,
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
      [
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
          ]
        },
        50.66,
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
      [
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
          ]
        },
        50.21,
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
      [
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
          ]
        },
        50,
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
      [
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
          ]
        },
        48.54,
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
      [
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
          ]
        },
        44.14,
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
      [
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
          ]
        },
        43.49,
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
      [
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
          ]
        },
        43.1,
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
      [
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
              "className": "ror-bar",
              "value": 0.28
            }
          ]
        },
        41.76,
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
      [
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
          ]
        },
        34.43,
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
      [
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
              "className": "ror-bar",
              "value": 0.71
            }
          ]
        },
        33.33,
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
      [
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
          ]
        },
        28.41,
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
      [
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
          ]
        },
        27.98,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        26.69,
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
      [
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
          ]
        },
        25.67,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 0.29
            }
          ]
        },
        97.36,
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
      [
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
      [
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
      [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 43.62
            }
          ]
        },
        43.32,
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
      [
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
              "className": "ror-bar",
              "value": 0.24
            }
          ]
        },
        38.37,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 2.57
            }
          ]
        },
        35.25,
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
      [
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
      [
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
      [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 63.45
            }
          ]
        },
        24.31,
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
      [
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
              "className": "ror-bar",
              "value": 63.67
            }
          ]
        },
        18.8,
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
      [
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
              "className": "ror-bar",
              "value": 68.75
            }
          ]
        },
        17.81,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        52.58,
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
      [
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
              "className": "ror-bar",
              "value": 0.16
            }
          ]
        },
        46.96,
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
      [
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
          ]
        },
        45.95,
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
      [
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
          ]
        },
        45.89,
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
      [
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
          ]
        },
        45.41,
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
      [
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
          ]
        },
        40.78,
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
      [
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
          ]
        },
        37.85,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 14.09
            }
          ]
        },
        30.2,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 36.27
            }
          ]
        },
        48,
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
      [
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
      [
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
      [
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
      [
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
          ]
        },
        32.06,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 43.01
            }
          ]
        },
        43.54,
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
      [
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
          ]
        },
        41.78,
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
      [
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 29.75
            }
          ]
        },
        40,
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
      [
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
      [
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
      [
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        43.07,
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
      [
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
          ]
        },
        37.91,
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
      [
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
          ]
        },
        34.71,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
          ]
        },
        31.3,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        64.32,
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
      [
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
              "className": "ror-bar",
              "value": 6.13
            }
          ]
        },
        63.41,
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
      [
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
              "className": "ror-bar",
              "value": 1.46
            }
          ]
        },
        62.44,
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
      [
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
          ]
        },
        59.79,
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
      [
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
              "className": "ror-bar",
              "value": 8.59
            }
          ]
        },
        59.6,
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
      [
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
              "className": "ror-bar",
              "value": 8.51
            }
          ]
        },
        57.28,
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
      [
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
              "className": "ror-bar",
              "value": 6.53
            }
          ]
        },
        56.44,
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
      [
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
          ]
        },
        50.93,
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
      [
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
              "className": "ror-bar",
              "value": 11.1
            }
          ]
        },
        50.47,
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
      [
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
      [
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
          ]
        },
        49.06,
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
      [
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
              "className": "ror-bar",
              "value": 14.89
            }
          ]
        },
        47.41,
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
      [
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
          ]
        },
        46.31,
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
      [
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
              "className": "ror-bar",
              "value": 17.38
            }
          ]
        },
        45.52,
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
      [
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
              "className": "ror-bar",
              "value": 34.97
            }
          ]
        },
        44.38,
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
      [
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
              "className": "ror-bar",
              "value": 18.09
            }
          ]
        },
        43.28,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 6.81
            }
          ]
        },
        40.23,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 3.74
            }
          ]
        },
        32.62,
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
      [
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
              "className": "ror-bar",
              "value": 38.82
            }
          ]
        },
        27.51,
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
      [
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
              "className": "ror-bar",
              "value": 64.83
            }
          ]
        },
        10.35,
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
        "Nicholson, Jennifer L.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 48.46
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
      [
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        48.29,
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
      [
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
          ]
        },
        42.51,
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
      [
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
          ]
        },
        40.89,
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
      [
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
      [
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
          ]
        },
        38.21,
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
      [
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
          ]
        },
        35.64,
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
      [
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
          ]
        },
        35.26,
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
      [
        "Charles, Bradford H.",
        {
          "type": "dist",
          "values": [
            {
              "className": "cash-bar",
              "value": 29.14
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
      [
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
              "className": "ror-bar",
              "value": 1.86
            }
          ]
        },
        29.04,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        68.18,
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
      [
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
          ]
        },
        64.84,
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
      [
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
          ]
        },
        63.99,
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
      [
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
              "className": "ror-bar",
              "value": 25.04
            }
          ]
        },
        61.95,
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
      [
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
              "className": "ror-bar",
              "value": 5.95
            }
          ]
        },
        60.72,
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
      [
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
              "className": "ror-bar",
              "value": 1.27
            }
          ]
        },
        59.62,
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
      [
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
          ]
        },
        58.02,
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
      [
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
          ]
        },
        57.78,
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
      [
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
          ]
        },
        57.1,
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
      [
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
              "className": "ror-bar",
              "value": 20.11
            }
          ]
        },
        53.89,
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
      [
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
          ]
        },
        53.25,
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
      [
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
          ]
        },
        50.37,
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
      [
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
              "className": "ror-bar",
              "value": 27.98
            }
          ]
        },
        50.1,
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
      [
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
              "className": "ror-bar",
              "value": 36.84
            }
          ]
        },
        42.59,
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
      [
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
          ]
        },
        41.49,
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
      [
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
          ]
        },
        31.43,
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
      [
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
          ]
        },
        30.81,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 23.02
            }
          ]
        },
        44.44,
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
      [
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
          ]
        },
        43.77,
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 76.43
            }
          ]
        },
        15.29,
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
      [
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
          ]
        },
        14.73,
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
      [
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
          ]
        },
        10.53,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        41.91,
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
      [
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
          ]
        },
        38.3,
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
      [
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
          ]
        },
        36.55,
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
      [
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
              "className": "ror-bar",
              "value": 0.78
            }
          ]
        },
        32.52,
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
      [
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
              "className": "ror-bar",
              "value": 0.18
            }
          ]
        },
        30.51,
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
      [
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
          ]
        },
        29.37,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 2.7
            }
          ]
        },
        46.85,
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
      [
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
              "className": "ror-bar",
              "value": 7.48
            }
          ]
        },
        42.11,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 5.21
            }
          ]
        },
        39.74,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 0.89
            }
          ]
        },
        45.28,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 2.66
            }
          ]
        },
        41.69,
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
      [
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
      [
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
      [
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
          ]
        },
        17.69,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 0.42
            }
          ]
        },
        50.95,
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
      [
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
          ]
        },
        38.71,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 23.46
            }
          ]
        },
        45.39,
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
      [
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
          ]
        },
        38.07,
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
      [
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
              "className": "ror-bar",
              "value": 0.32
            }
          ]
        },
        37.88,
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
      [
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
              "className": "ror-bar",
              "value": 47.38
            }
          ]
        },
        37.18,
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
      [
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
              "className": "ror-bar",
              "value": 0.28
            }
          ]
        },
        37.01,
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
      [
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
      [
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
          ]
        },
        29.32,
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
      [
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
              "className": "ror-bar",
              "value": 3.1
            }
          ]
        },
        27.33,
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
      [
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
          ]
        },
        26.43,
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
      [
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
              "className": "ror-bar",
              "value": 43.77
            }
          ]
        },
        23.4,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 20.04
            }
          ]
        },
        60.12,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 2.88
            }
          ]
        },
        47.93,
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
      [
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
              "className": "ror-bar",
              "value": 0.75
            }
          ]
        },
        44.5,
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
      [
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
              "className": "ror-bar",
              "value": 24.78
            }
          ]
        },
        44.48,
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
      [
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
              "className": "ror-bar",
              "value": 0.19
            }
          ]
        },
        43.39,
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
      [
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
          ]
        },
        41.42,
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
      [
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
              "className": "ror-bar",
              "value": 0.13
            }
          ]
        },
        36.5,
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
      [
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
          ]
        },
        36.18,
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
      [
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
              "className": "ror-bar",
              "value": 0.14
            }
          ]
        },
        36.01,
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
      [
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
              "className": "ror-bar",
              "value": 29.61
            }
          ]
        },
        35.87,
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
      [
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
              "className": "ror-bar",
              "value": 33.28
            }
          ]
        },
        35.65,
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
      [
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
          ]
        },
        35.62,
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
      [
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
              "className": "ror-bar",
              "value": 1.15
            }
          ]
        },
        35.37,
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
      [
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
      [
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
          ]
        },
        35.03,
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
      [
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
              "className": "ror-bar",
              "value": 39.68
            }
          ]
        },
        34.92,
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
      [
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
          ]
        },
        34.38,
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
      [
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
              "className": "ror-bar",
              "value": 32.14
            }
          ]
        },
        32.74,
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
      [
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
              "className": "ror-bar",
              "value": 0.26
            }
          ]
        },
        31.77,
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
      [
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
              "className": "ror-bar",
              "value": 0.55
            }
          ]
        },
        31.73,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 33.96
            }
          ]
        },
        30.01,
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
      [
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
              "className": "ror-bar",
              "value": 24.12
            }
          ]
        },
        27.42,
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
      [
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
          ]
        },
        27.41,
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
      [
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
          ]
        },
        27.34,
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
      [
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
              "className": "ror-bar",
              "value": 0.17
            }
          ]
        },
        27.24,
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
      [
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
              "className": "ror-bar",
              "value": 0.27
            }
          ]
        },
        26.84,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 50.93
            }
          ]
        },
        23.6,
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
      [
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
              "className": "ror-bar",
              "value": 35.76
            }
          ]
        },
        22.17,
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
      [
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
              "className": "ror-bar",
              "value": 0.42
            }
          ]
        },
        9.66,
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
      [
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
              "className": "ror-bar",
              "value": 2.43
            }
          ]
        },
        7.82,
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
      [
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
              "className": "ror-bar",
              "value": 17.49
            }
          ]
        },
        6.73,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 5.87
            }
          ]
        },
        63.3,
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
      [
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
              "className": "ror-bar",
              "value": 4.91
            }
          ]
        },
        57.62,
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
      [
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
              "className": "ror-bar",
              "value": 7.37
            }
          ]
        },
        56.91,
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
      [
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
              "className": "ror-bar",
              "value": 18.35
            }
          ]
        },
        55.76,
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
      [
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
              "className": "ror-bar",
              "value": 0.32
            }
          ]
        },
        55.52,
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
      [
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
              "className": "ror-bar",
              "value": 0.2
            }
          ]
        },
        53.61,
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
      [
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
      [
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
          ]
        },
        52.85,
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
      [
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
              "className": "ror-bar",
              "value": 34.06
            }
          ]
        },
        47.81,
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
      [
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
              "className": "ror-bar",
              "value": 5.49
            }
          ]
        },
        46.04,
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
      [
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
          ]
        },
        44.19,
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
      [
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
              "className": "ror-bar",
              "value": 0.2
            }
          ]
        },
        39.69,
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
      [
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
      [
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
          ]
        },
        32.62,
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
      [
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
      [
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
          ]
        },
        27.44,
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
      [
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
              "className": "ror-bar",
              "value": 60.51
            }
          ]
        },
        23.04,
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
      [
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
              "className": "ror-bar",
              "value": 59.91
            }
          ]
        },
        21.2,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 3.07
            }
          ]
        },
        40.57,
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
      [
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
          ]
        },
        35.14,
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ],
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        27.71,
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
      [
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
              "className": "ror-bar",
              "value": 14.44
            }
          ]
        },
        24.06,
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
          ]
        },
        47.99,
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
      [
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
              "className": "ror-bar",
              "value": 0.47
            }
          ]
        },
        47.6,
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
      [
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
              "className": "ror-bar",
              "value": 33.46
            }
          ]
        },
        42.88,
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
      [
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
          ]
        },
        40.96,
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
      [
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
              "className": "ror-bar",
              "value": 0.13
            }
          ]
        },
        37.28,
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
      [
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
              "className": "ror-bar",
              "value": 50.61
            }
          ]
        },
        33.99,
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
      [
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
          ]
        },
        31.59,
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
      [
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
          ]
        },
        22.41,
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
      [
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
          ]
        },
        17.43,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
      [
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
      [
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
          ]
        },
        22.53,
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 9.22
            }
          ]
        },
        53.19,
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
      [
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
              "className": "ror-bar",
              "value": 39.06
            }
          ]
        },
        35.69,
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 39.6
            }
          ]
        },
        41.76,
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
      [
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
              "className": "ror-bar",
              "value": 0.26
            }
          ]
        },
        38.52,
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
      [
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
          ]
        },
        38.31,
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
      [
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
              "className": "ror-bar",
              "value": 14.36
            }
          ]
        },
        37.96,
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
      [
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
          ]
        },
        29.5,
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
      [
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
          ]
        },
        23.15,
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
      [
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
          ]
        },
        13.91,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 0.17
            }
          ]
        },
        42.95,
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
      [
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
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ],
      [
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 50.94
            }
          ]
        },
        32.83,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 0.3
            }
          ]
        },
        53.38,
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
      [
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
              "className": "ror-bar",
              "value": 23.78
            }
          ]
        },
        53.38,
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
      [
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
              "className": "ror-bar",
              "value": 37.34
            }
          ]
        },
        50,
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
      [
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
              "className": "ror-bar",
              "value": 0.23
            }
          ]
        },
        49.1,
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
      [
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
              "className": "ror-bar",
              "value": 17.42
            }
          ]
        },
        43.93,
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
      [
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
      [
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
          ]
        },
        34.55,
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
      [
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
              "className": "ror-bar",
              "value": 56.88
            }
          ]
        },
        31.19,
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
      [
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
          ]
        },
        29.04,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 19.38
            }
          ]
        },
        28.08,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 53.74
            }
          ]
        },
        39.25,
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
      [
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
              "className": "ror-bar",
              "value": 11.99
            }
          ]
        },
        38.95,
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
      [
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
              "className": "ror-bar",
              "value": 41.78
            }
          ]
        },
        34.87,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 3.77
            }
          ]
        },
        45.22,
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
      [
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
              "className": "ror-bar",
              "value": 49.09
            }
          ]
        },
        36.73,
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
      [
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
      [
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
      [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 41.97
            }
          ]
        },
        31.55,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 0.76
            }
          ]
        },
        30.55,
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
      [
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
      [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 4.21
            }
          ]
        },
        27.37,
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 67.92
            }
          ]
        },
        25.36,
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
      [
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
      [
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
              "className": "ror-bar",
              "value": 0.17
            }
          ]
        },
        29.21,
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
      ]
    ],
    "isCollapsed": true
  },
  {
    "data": [
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
      [
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
              "className": "ror-bar",
              "value": 0.11
            }
          ]
        },
        81.79,
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ],
      [
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
      [
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
      [
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
      [
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
      [
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
      [
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
            60,
            40
          ]
        },
        {
          "type": "styled",
          "className": "positive-diff",
          "value": "+20"
        }
      ]
    ],
    "isCollapsed": true
  }
];