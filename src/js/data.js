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

export const BAIL_POSTING_DATA = [
  {
    "data": [
      "Adams",
      "$27.0K",
      43.62244898,
      {
        "type": "bar",
        "values": [
          43.62244898
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Allegheny",
      "$18.6K",
      61.27998861,
      {
        "type": "bar",
        "values": [
          61.27998861
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Armstrong",
      "$13.9K",
      56.05263158,
      {
        "type": "bar",
        "values": [
          56.05263158
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Beaver",
      "$17.6K",
      67.60883691,
      {
        "type": "bar",
        "values": [
          67.60883691
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Bedford",
      "$50.1K",
      72.3183391,
      {
        "type": "bar",
        "values": [
          72.3183391
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Berks",
      "$28.3K",
      56.45679409,
      {
        "type": "bar",
        "values": [
          56.45679409
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Blair",
      "$33.1K",
      68.23253083,
      {
        "type": "bar",
        "values": [
          68.23253083
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Bradford",
      "$32.7K",
      89.21800948,
      {
        "type": "bar",
        "values": [
          89.21800948
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Bucks",
      "$62.6K",
      48.80620772,
      {
        "type": "bar",
        "values": [
          48.80620772
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Butler",
      "$17.6K",
      66.14420063,
      {
        "type": "bar",
        "values": [
          66.14420063
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Cambria",
      "$37.0K",
      41.87380497,
      {
        "type": "bar",
        "values": [
          41.87380497
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Cameron",
      "$26.8K",
      51.61290323,
      {
        "type": "bar",
        "values": [
          51.61290323
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Carbon",
      "$26.8K",
      49.51370469,
      {
        "type": "bar",
        "values": [
          49.51370469
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Centre",
      "$44.3K",
      65.17571885,
      {
        "type": "bar",
        "values": [
          65.17571885
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Chester",
      "$26.4K",
      51.38476756,
      {
        "type": "bar",
        "values": [
          51.38476756
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Clarion",
      "$20.0K",
      72.08835341,
      {
        "type": "bar",
        "values": [
          72.08835341
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Clearfield",
      "$24.3K",
      82.5203252,
      {
        "type": "bar",
        "values": [
          82.5203252
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Clinton",
      "$21.0K",
      74.19962335,
      {
        "type": "bar",
        "values": [
          74.19962335
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Columbia",
      "$35.8K",
      27.68777614,
      {
        "type": "bar",
        "values": [
          27.68777614
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Crawford",
      "$22.6K",
      55.26315789,
      {
        "type": "bar",
        "values": [
          55.26315789
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Cumberland",
      "$25.0K",
      57.75502465,
      {
        "type": "bar",
        "values": [
          57.75502465
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Dauphin",
      "$36.6K",
      67.51909665,
      {
        "type": "bar",
        "values": [
          67.51909665
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Delaware",
      "$38.5K",
      61.44408689,
      {
        "type": "bar",
        "values": [
          61.44408689
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Elk",
      "$21.3K",
      79.74683544,
      {
        "type": "bar",
        "values": [
          79.74683544
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Erie",
      "$27.8K",
      60.4815864,
      {
        "type": "bar",
        "values": [
          60.4815864
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Fayette",
      "$19.5K",
      39.92776886,
      {
        "type": "bar",
        "values": [
          39.92776886
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Forest",
      "$22.7K",
      80.70175439,
      {
        "type": "bar",
        "values": [
          80.70175439
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Franklin",
      "$53.5K",
      76.32904309,
      {
        "type": "bar",
        "values": [
          76.32904309
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Fulton",
      "$54.7K",
      78.51239669,
      {
        "type": "bar",
        "values": [
          78.51239669
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Greene",
      "$15.6K",
      55.89123867,
      {
        "type": "bar",
        "values": [
          55.89123867
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Huntingdon",
      "$18.3K",
      76.89594356,
      {
        "type": "bar",
        "values": [
          76.89594356
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Indiana",
      "$16.6K",
      42.81345566,
      {
        "type": "bar",
        "values": [
          42.81345566
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Jefferson",
      "$45.0K",
      85.16129032,
      {
        "type": "bar",
        "values": [
          85.16129032
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Juniata",
      "$22.4K",
      73.98843931,
      {
        "type": "bar",
        "values": [
          73.98843931
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lackawanna",
      "$31.1K",
      72.46600742,
      {
        "type": "bar",
        "values": [
          72.46600742
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lancaster",
      "$52.6K",
      64.47848286,
      {
        "type": "bar",
        "values": [
          64.47848286
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lawrence",
      "$19.2K",
      43.81742739,
      {
        "type": "bar",
        "values": [
          43.81742739
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lebanon",
      "$24.5K",
      43.23432343,
      {
        "type": "bar",
        "values": [
          43.23432343
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lehigh",
      "$20.1K",
      57.91968767,
      {
        "type": "bar",
        "values": [
          57.91968767
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Luzerne",
      "$37.0K",
      66.80926019,
      {
        "type": "bar",
        "values": [
          66.80926019
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Lycoming",
      "$52.7K",
      71.89292543,
      {
        "type": "bar",
        "values": [
          71.89292543
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "McKean",
      "$23.7K",
      70.13752456,
      {
        "type": "bar",
        "values": [
          70.13752456
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Mercer",
      "$25.0K",
      49.10820452,
      {
        "type": "bar",
        "values": [
          49.10820452
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Mifflin",
      "$39.8K",
      82.62068966,
      {
        "type": "bar",
        "values": [
          82.62068966
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Monroe",
      "$27.4K",
      38.39793282,
      {
        "type": "bar",
        "values": [
          38.39793282
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Montgomery",
      "$25.3K",
      64.50531837,
      {
        "type": "bar",
        "values": [
          64.50531837
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Montour",
      "$28.6K",
      65.34653465,
      {
        "type": "bar",
        "values": [
          65.34653465
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Northampton",
      "$27.5K",
      54.74903475,
      {
        "type": "bar",
        "values": [
          54.74903475
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Northumberland",
      "$41.8K",
      57.73195876,
      {
        "type": "bar",
        "values": [
          57.73195876
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Perry",
      "$25.6K",
      76.99680511,
      {
        "type": "bar",
        "values": [
          76.99680511
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Philadelphia",
      "$54.0K",
      50.7113914,
      {
        "type": "bar",
        "values": [
          50.7113914
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Pike",
      "$22.2K",
      63.88888889,
      {
        "type": "bar",
        "values": [
          63.88888889
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Potter",
      "$19.4K",
      67.83216783,
      {
        "type": "bar",
        "values": [
          67.83216783
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Schuylkill",
      "$20.6K",
      59.0780809,
      {
        "type": "bar",
        "values": [
          59.0780809
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Snyder",
      "$28.0K",
      45.69190601,
      {
        "type": "bar",
        "values": [
          45.69190601
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Somerset",
      "$37.9K",
      55.08982036,
      {
        "type": "bar",
        "values": [
          55.08982036
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Sullivan",
      "$16.9K",
      69.23076923,
      {
        "type": "bar",
        "values": [
          69.23076923
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Susquehanna",
      "$27.6K",
      75.07788162,
      {
        "type": "bar",
        "values": [
          75.07788162
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Tioga",
      "$20.6K",
      60.72234763,
      {
        "type": "bar",
        "values": [
          60.72234763
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Union",
      "$27.5K",
      74.61139896,
      {
        "type": "bar",
        "values": [
          74.61139896
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Venango",
      "$37.5K",
      72.88135593,
      {
        "type": "bar",
        "values": [
          72.88135593
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Warren",
      "$25.4K",
      75.87209302,
      {
        "type": "bar",
        "values": [
          75.87209302
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Washington",
      "$25.1K",
      63.82098533,
      {
        "type": "bar",
        "values": [
          63.82098533
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Wayne",
      "$34.1K",
      46.6442953,
      {
        "type": "bar",
        "values": [
          46.6442953
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Westmoreland",
      "$21.0K",
      71.47154675,
      {
        "type": "bar",
        "values": [
          71.47154675
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "Wyoming",
      "$25.1K",
      67.53246753,
      {
        "type": "bar",
        "values": [
          67.53246753
        ]
      }
    ],
    "outlier": false
  },
  {
    "data": [
      "York",
      "$20.8K",
      58.36246303,
      {
        "type": "bar",
        "values": [
          58.36246303
        ]
      }
    ],
    "outlier": false
  }
];

export const BAIL_RETENTION_FEE_DATA = [
  {
    "data": [
      "Adams",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Allegheny",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Armstrong",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Beaver",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Bedford",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Berks",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Blair",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Bradford",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Bucks",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Butler",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Cambria",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Cameron",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Carbon",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Centre",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Chester",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Clarion",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Clearfield",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Clinton",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Columbia",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Crawford",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Cumberland",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Dauphin",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Delaware",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Elk",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Erie",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Fayette",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Forest",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Franklin",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Fulton",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Greene",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Huntingdon",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Indiana",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Jefferson",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Juniata",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Lackawanna",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Lancaster",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Lawrence",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Lebanon",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Lehigh",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Luzerne",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Lycoming",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "McKean",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Mercer",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Mifflin",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Monroe",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Montgomery",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Montour",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Northampton",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Northumberland",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Perry",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Philadelphia",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Pike",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Potter",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Schuylkill",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Snyder",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Somerset",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Sullivan",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Susquehanna",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Tioga",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Union",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Venango",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Warren",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Washington",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Wayne",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Westmoreland",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "Wyoming",
      "Placeholder....!!!!!"
    ]
  },
  {
    "data": [
      "York",
      "Placeholder....!!!!!"
    ]
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
      100,
      {
        "type": "bar",
        "values": [
          100
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
      100,
      {
        "type": "bar",
        "values": [
          100
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
];

export const MDJ_DATA = [
  {
    "data": [
      "",
      "Delaware",
      55.68060922,
      63.75237882,
      48.4952381,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 55.68060922,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 43.554700000000004,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0056,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.10640000000000001,
            "name": "ROR"
          }
        ],
        "name": "Delaware"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Davis, Wilden H.",
          75.87,
          75.15151515,
          81.98198198,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 75.87,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Davis, Wilden H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Tenaglia, Leonard V.",
          74.28,
          75.54786621,
          71.47651007,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 74.28,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.72,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Tenaglia, Leonard V."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Seaton, Spencer B. Jr.",
          74.02,
          75.9295499,
          72.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 74.02,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.08,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Seaton, Spencer B. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gallagher, Vincent D. Jr.",
          71.73,
          83.72093023,
          62.75862069,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 71.73,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 28.27,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Gallagher, Vincent D. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Berardocco, Ann",
          71.53,
          77.06422018,
          62.87128713,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 71.53,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 28.47,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Berardocco, Ann"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sandone, Steven A.",
          71.18,
          75.53648069,
          68.96551724,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 71.18,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 28.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Sandone, Steven A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Loftus, Greg J.",
          69.26,
          70.99697885,
          66.53061224,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 69.26,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.57,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Loftus, Greg J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Radano, Robert J.",
          62.88,
          65.58441558,
          62.33183857,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 62.88,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.12,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Radano, Robert J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Merkins, James",
          61.84,
          80.85106383,
          53.80116959,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 61.84,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.81,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Merkins, James"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Turner, Phillip S.",
          61.05,
          63.4375,
          59.33503836,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 61.05,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.67,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Turner, Phillip S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lippincott, Nicholas S.",
          60.52,
          74.23076923,
          45.04132231,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.52,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 39.48,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Lippincott, Nicholas S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mattox, Christopher R.",
          60.36,
          62.95336788,
          59.41422594,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.36,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 39.49,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.15,
                "name": "ROR"
              }
            ],
            "name": "Mattox, Christopher R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Tozer, Peter P.",
          59.06,
          62.63736264,
          57.0977918,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.06,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 40.94,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Tozer, Peter P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Puppio, Andrea B.",
          57.44,
          65.96491228,
          52.13114754,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.44,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 41.75,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Puppio, Andrea B."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Karapalides, Harry J. Jr.",
          57.36,
          58.41836735,
          55.05050505,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.36,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 41.98,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Karapalides, Harry J. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Williams, W Keith II",
          56.54,
          52.56410256,
          69.56521739,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 56.54,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.09,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.18,
                "name": "ROR"
              }
            ],
            "name": "Williams, W Keith II"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Vann, Dawn L.",
          53.29,
          59.06735751,
          55.70469799,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.29,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.55,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Vann, Dawn L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hunter, Leon",
          52.2,
          66.03773585,
          46.22222222,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 44.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.8,
                "name": "ROR"
              }
            ],
            "name": "Hunter, Leon"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Holefelder, Diane M.",
          51.46,
          71.29186603,
          37.54266212,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.46,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.96,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Holefelder, Diane M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Griffin, David",
          51.33,
          57.55813953,
          45.10739857,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.33,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 48.67,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Griffin, David"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Burke, Robert R.",
          50.66,
          57.77777778,
          43.91534392,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.66,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.34,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Burke, Robert R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Strohl, Walter A.",
          50.21,
          66.47058824,
          40.89347079,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.21,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.16,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Strohl, Walter A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Micozzie-Aguirre, Kelly A.",
          50,
          60.33057851,
          47.05882353,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.32,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Micozzie-Aguirre, Kelly A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Krull, Deborah A.",
          48.54,
          61.21673004,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.54,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 51.46,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Krull, Deborah A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nistico, Charles",
          44.14,
          48.9010989,
          27.27272727,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.14,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 54.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Nistico, Charles"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lacey, Thomas J.",
          43.49,
          47.61904762,
          28.42639594,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.49,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 53.65,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Lacey, Thomas J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lippart, Jack D.",
          43.1,
          55.82010582,
          35.98615917,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Lippart, Jack D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lacianca, Elisa C.",
          41.76,
          59.16666667,
          35.05154639,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.76,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.95,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.28,
                "name": "ROR"
              }
            ],
            "name": "Lacianca, Elisa C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lang, David H.",
          34.43,
          37.64044944,
          32.44274809,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.43,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.45,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Lang, David H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McCray, C. Walter III",
          33.33,
          40.12345679,
          24.32432432,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.33,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 54.61,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.71,
                "name": "ROR"
              }
            ],
            "name": "McCray, C. Walter III"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "D'Agostino, Robert M.",
          28.41,
          36.95652174,
          28.34645669,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.41,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 70.85,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "D'Agostino, Robert M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Roberts, Wendy B.",
          27.98,
          40.08438819,
          19.42740286,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.98,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 71.76,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Roberts, Wendy B."
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
      54.88215488,
      61.816340309999994,
      52.853765620000004,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 54.88215488,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 36.5018,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.030699999999999998,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 8.1388,
            "name": "ROR"
          }
        ],
        "name": "Lehigh"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Manescu, Ronald S.",
          68.18,
          72.63157895,
          68.11279826,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 68.18,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 31.55,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Manescu, Ronald S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Maura, Wayne",
          64.84,
          75.24271845,
          60.41009464,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 64.84,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 35.16,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Maura, Wayne"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pochron, Michael Joseph",
          63.99,
          69.00584795,
          61.08786611,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 63.99,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 36.01,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Pochron, Michael Joseph"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Trexler, Daniel C.",
          61.95,
          73.04964539,
          57.55813953,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 61.95,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.73,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25.04,
                "name": "ROR"
              }
            ],
            "name": "Trexler, Daniel C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Santiago, Rashid",
          60.72,
          64.65517241,
          63.26530612,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.72,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 33,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 5.95,
                "name": "ROR"
              }
            ],
            "name": "Santiago, Rashid"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Butler, Donna R.",
          59.62,
          70.43478261,
          55.907173,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.62,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.79,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.27,
                "name": "ROR"
              }
            ],
            "name": "Butler, Donna R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Engler, Patricia M.",
          58.02,
          67.97385621,
          57.80189959,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 58.02,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 41.56,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Engler, Patricia M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Devine, Karen C.",
          57.78,
          59.83263598,
          58.59213251,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.78,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.11,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Devine, Karen C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Howells, David M. Jr.",
          57.1,
          61.34453782,
          60.11235955,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Howells, David M. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Beck, Rod",
          53.89,
          78.94736842,
          48.37049743,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.89,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 26.01,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 20.11,
                "name": "ROR"
              }
            ],
            "name": "Beck, Rod"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Halal, Robert C.",
          53.25,
          67.79661017,
          50.32258065,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.25,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.59,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Halal, Robert C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Crawford, Charles H.",
          50.37,
          58.33333333,
          46.08695652,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.37,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.63,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Crawford, Charles H."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Hammond, Jacob E.",
          50.1,
          50.71090047,
          48.14340589,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 21.83,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 27.98,
                "name": "ROR"
              }
            ],
            "name": "Hammond, Jacob E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "D'Amore, Michael D.",
          42.59,
          46.77419355,
          40.88145897,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.59,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.84,
                "name": "ROR"
              }
            ],
            "name": "D'Amore, Michael D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Faulkner, Michael J.",
          41.49,
          45.92274678,
          37.84764208,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.49,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 58.24,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Faulkner, Michael J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Anthony, James T.",
          31.43,
          17.39130435,
          36.36363636,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.43,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 65,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.71,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Anthony, James T."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Dantos, Maria L.",
          30.81,
          32.43243243,
          31.25,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.81,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.86,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Dantos, Maria L."
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
      52.635003250000004,
      67.13459950000001,
      48.9720035,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 52.635003250000004,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 37.931,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 7.563400000000001,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 1.8055,
            "name": "ROR"
          }
        ],
        "name": "Lackawanna"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Giglio, Theodore J.",
          67.94,
          82.48175182,
          64.90825688,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 67.94,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.77,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.97,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.32,
                "name": "ROR"
              }
            ],
            "name": "Giglio, Theodore J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Corbett, Joanne Price",
          58.27,
          75.42372881,
          54.09836066,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 58.27,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 31.22,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 10.05,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.31,
                "name": "ROR"
              }
            ],
            "name": "Corbett, Joanne Price"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ware, Paul J.",
          55.44,
          59.84251969,
          54.07725322,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.44,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 35.38,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 7.81,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.38,
                "name": "ROR"
              }
            ],
            "name": "Ware, Paul J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McGraw, Sean P.",
          55.3,
          75.59055118,
          50.52631579,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.52,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.71,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.31,
                "name": "ROR"
              }
            ],
            "name": "McGraw, Sean P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pesota, John P.",
          53.91,
          66.1971831,
          50.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.91,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 27.33,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 14.77,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.99,
                "name": "ROR"
              }
            ],
            "name": "Pesota, John P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Keeler, Paul",
          52.27,
          69.93464052,
          46.8503937,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.27,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 39.94,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.25,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.4,
                "name": "ROR"
              }
            ],
            "name": "Keeler, Paul"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Farrell, Alyce Hailstone",
          49.92,
          50.40650407,
          50.21097046,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.92,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.83,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.43,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.82,
                "name": "ROR"
              }
            ],
            "name": "Farrell, Alyce Hailstone"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Turlip-Murphy, Laura",
          46.17,
          63.04347826,
          41.89189189,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.17,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 50.71,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.98,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.13,
                "name": "ROR"
              }
            ],
            "name": "Turlip-Murphy, Laura"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gallagher, Terrence V.",
          38.52,
          62.28070175,
          32.93885602,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.52,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.59,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.19,
                "name": "ROR"
              }
            ],
            "name": "Gallagher, Terrence V."
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
      50.92425977,
      58.42078961,
      50.242593170000006,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 50.92425977,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 32.9706,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.8427,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 15.2172,
            "name": "ROR"
          }
        ],
        "name": "Berks"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Hall, William N. Jr.",
          95.81,
          96.2962963,
          95.74468085,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 95.81,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 4.03,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Hall, William N. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hadzick, Paul J.",
          82.72,
          86.29032258,
          82.65204387,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 82.72,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.82,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.46,
                "name": "ROR"
              }
            ],
            "name": "Hadzick, Paul J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Robinson, Alvin B.",
          67.48,
          68.46153846,
          68.62302483,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 67.48,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.19,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.33,
                "name": "ROR"
              }
            ],
            "name": "Robinson, Alvin B."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kennedy, Stuart D.",
          62.97,
          66.66666667,
          64.62765957,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 62.97,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 20.99,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 16.04,
                "name": "ROR"
              }
            ],
            "name": "Kennedy, Stuart D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Glass, David E.",
          57.02,
          90.38461538,
          53.56200528,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.02,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.98,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Glass, David E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kowalski, Phyllis J.",
          55.56,
          51.89873418,
          57.08812261,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.56,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.89,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.56,
                "name": "ROR"
              }
            ],
            "name": "Kowalski, Phyllis J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Xavios, Thomas H.",
          54.71,
          61.9047619,
          55.87301587,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 54.71,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.79,
                "name": "ROR"
              }
            ],
            "name": "Xavios, Thomas H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Scott, Kyley L.",
          51.4,
          64.28571429,
          51.61290323,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 20.73,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 27.86,
                "name": "ROR"
              }
            ],
            "name": "Scott, Kyley L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Patton, Dean R.",
          45.8,
          57.36434109,
          43.23144105,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 54.08,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Patton, Dean R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Yoch, David L.",
          43.48,
          55.68181818,
          41.81459566,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.48,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.05,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 24.48,
                "name": "ROR"
              }
            ],
            "name": "Yoch, David L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Book, Andrea J.",
          43.38,
          52.38095238,
          42.69662921,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.38,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.77,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 17.54,
                "name": "ROR"
              }
            ],
            "name": "Book, Andrea J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gauby, Thomas M. Sr.",
          43.23,
          45.09803922,
          43.41736695,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.23,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 24.47,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Gauby, Thomas M. Sr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bentz, Nicholas M. Jr.",
          37.58,
          41.34078212,
          40.12158055,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.58,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 27.11,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 35.31,
                "name": "ROR"
              }
            ],
            "name": "Bentz, Nicholas M. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Young, Ann L.",
          37.2,
          45.52845528,
          35.87896254,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.38,
                "name": "ROR"
              }
            ],
            "name": "Young, Ann L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Frederick, Victor M. IV",
          37.03,
          41.86046512,
          37.42690058,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.03,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.97,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Frederick, Victor M. IV"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Greth, Gail M.",
          34.95,
          31.57894737,
          35.07246377,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.95,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 65.05,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Greth, Gail M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hartman, Michael G.",
          33.33,
          42.10526316,
          32.14285714,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.33,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 66.67,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Hartman, Michael G."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fegley, Sandra L.",
          31.79,
          29.8013245,
          32.33618234,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.79,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.71,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.27,
                "name": "ROR"
              }
            ],
            "name": "Fegley, Sandra L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bagenstose, Kim L.",
          31.05,
          45,
          29.82107356,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.05,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 31.58,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.37,
                "name": "ROR"
              }
            ],
            "name": "Bagenstose, Kim L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dougherty, Timothy M.",
          29.9,
          33.33333333,
          33.33333333,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 6.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 63.4,
                "name": "ROR"
              }
            ],
            "name": "Dougherty, Timothy M."
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
      50.122163519999994,
      56.02170568,
      43.3107617,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 50.122163519999994,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 7.017900000000001,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 6.6315,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 36.207699999999996,
            "name": "ROR"
          }
        ],
        "name": "Philadelphia"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Rebstock, Francis J.",
          51.31,
          55.90909091,
          44.80991029,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.31,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 5.21,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.79,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 42.68,
                "name": "ROR"
              }
            ],
            "name": "Rebstock, Francis J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Rice, Jane M.",
          51.06,
          56.29431227,
          44.7446084,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.06,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.32,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.83,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 30.77,
                "name": "ROR"
              }
            ],
            "name": "Rice, Jane M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "O'Brien, James",
          50.56,
          56.52024708,
          43.40175953,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.56,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 9.03,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.41,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34,
                "name": "ROR"
              }
            ],
            "name": "O'Brien, James"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Stack, Patrick",
          50.24,
          56.43951744,
          42.87348433,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.24,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.16,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.62,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 48.97,
                "name": "ROR"
              }
            ],
            "name": "Stack, Patrick"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bedford, Sheila M.",
          49.04,
          54.89941596,
          42.60808926,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.04,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 3.47,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.69,
                "name": "ROR"
              }
            ],
            "name": "Bedford, Sheila M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Devlin, Kevin R.",
          47.39,
          53.08736379,
          41.41494436,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.39,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.03,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 13.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.17,
                "name": "ROR"
              }
            ],
            "name": "Devlin, Kevin R."
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
      49.051792830000004,
      64.33048433,
      43.922127259999996,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 49.051792830000004,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 12.6554,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.833,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 35.8145,
            "name": "ROR"
          }
        ],
        "name": "Beaver"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Livingston, William R. II",
          67.48,
          81.08108108,
          61.2244898,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 67.48,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 5.13,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.24,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 27.14,
                "name": "ROR"
              }
            ],
            "name": "Livingston, William R. II"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hladio, Andrew M.",
          59.03,
          72.97297297,
          54.57413249,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.03,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.87,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.05,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.05,
                "name": "ROR"
              }
            ],
            "name": "Hladio, Andrew M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Howe, Edward",
          53.84,
          70.04405286,
          49.07872697,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.84,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.49,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.28,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 31.4,
                "name": "ROR"
              }
            ],
            "name": "Howe, Edward"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Armour, John W.",
          53.66,
          69.33867735,
          56.72043011,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.66,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.09,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.62,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.63,
                "name": "ROR"
              }
            ],
            "name": "Armour, John W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Loughner, C. Douglas.",
          52.62,
          67.17948718,
          48.1557377,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.62,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 3.39,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 42.15,
                "name": "ROR"
              }
            ],
            "name": "Loughner, C. Douglas."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Swihart, Janet",
          51.94,
          62.9787234,
          48.10690423,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.94,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.11,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.41,
                "name": "ROR"
              }
            ],
            "name": "Swihart, Janet"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nicholson, Dale",
          47.45,
          59.30735931,
          41.95402299,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.45,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 17.96,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.46,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.13,
                "name": "ROR"
              }
            ],
            "name": "Nicholson, Dale"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Schafer, Joseph",
          42.12,
          56.65024631,
          36.83274021,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.12,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 17,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.25,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.62,
                "name": "ROR"
              }
            ],
            "name": "Schafer, Joseph"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Finn, Timothy",
          31.84,
          53.33333333,
          25.6097561,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.84,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.59,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 43.37,
                "name": "ROR"
              }
            ],
            "name": "Finn, Timothy"
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
      48.92407633,
      66.28477905,
      43.4806939,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 48.92407633,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 2.233,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 23.3455,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 24.685299999999998,
            "name": "ROR"
          }
        ],
        "name": "Lawrence"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Amodie, Melissa Ann",
          65.79,
          81.85053381,
          57.64966741,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 65.79,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 20.71,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 11.66,
                "name": "ROR"
              }
            ],
            "name": "Amodie, Melissa Ann"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nicholson, Jennifer L.",
          48.46,
          59.45945946,
          45.25,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.46,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 32.82,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.73,
                "name": "ROR"
              }
            ],
            "name": "Nicholson, Jennifer L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McGrath, Scott",
          47.88,
          69.76744186,
          41.66666667,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.88,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.94,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 20.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 23.28,
                "name": "ROR"
              }
            ],
            "name": "McGrath, Scott"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Rishel, David B.",
          40.13,
          50,
          38.24701195,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.13,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.64,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 20.72,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.5,
                "name": "ROR"
              }
            ],
            "name": "Rishel, David B."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cartwright, Jerry G. Jr.",
          27.82,
          32.60869565,
          27.82608696,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.82,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.11,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 28.17,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.9,
                "name": "ROR"
              }
            ],
            "name": "Cartwright, Jerry G. Jr."
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
      48.49498328,
      70.11494253000001,
      47.482014389999996,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 48.49498328,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 50.6355,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.33440000000000003,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.46820000000000006,
            "name": "ROR"
          }
        ],
        "name": "Mifflin"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Miller, Jack E.",
          55.1,
          75.75757576,
          54.02542373,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.73,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.39,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.59,
                "name": "ROR"
              }
            ],
            "name": "Miller, Jack E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Reed, Jonathan W.",
          50.95,
          74.07407407,
          49.77477477,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.95,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 48.63,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.42,
                "name": "ROR"
              }
            ],
            "name": "Reed, Jonathan W."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Smith, Kent A.",
          38.71,
          59.25925926,
          37.90697674,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.71,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.86,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.43,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Smith, Kent A."
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
      45.835299670000005,
      55.7063541,
      43.86813852,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 45.835299670000005,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 36.5278,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.9356000000000002,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 15.213,
            "name": "ROR"
          }
        ],
        "name": "Northampton"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Matos-Gonzalez, Nancy",
          63.3,
          66.42335766,
          63.19796954,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 63.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.64,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 5.87,
                "name": "ROR"
              }
            ],
            "name": "Matos-Gonzalez, Nancy"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Corpora, Daniel G.",
          57.62,
          68.65671642,
          52.03252033,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.62,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.47,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.91,
                "name": "ROR"
              }
            ],
            "name": "Corpora, Daniel G."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Yetter, Richard H. III",
          56.91,
          63.85542169,
          53.84615385,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 56.91,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 34.99,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 7.37,
                "name": "ROR"
              }
            ],
            "name": "Yetter, Richard H. III"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Grifo, Antonia",
          55.76,
          69.60784314,
          52.25806452,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.76,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.65,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.35,
                "name": "ROR"
              }
            ],
            "name": "Grifo, Antonia"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zito, Alicia Rose",
          55.52,
          72.72727273,
          53.7593985,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.52,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 44.16,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.32,
                "name": "ROR"
              }
            ],
            "name": "Zito, Alicia Rose"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hawke, Robert A.",
          53.61,
          75.92592593,
          50.81585082,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.61,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.18,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              }
            ],
            "name": "Hawke, Robert A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Taschner, Jacqueline M.",
          53.58,
          58.01526718,
          52.63157895,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.58,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 26.97,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.18,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.9,
                "name": "ROR"
              }
            ],
            "name": "Taschner, Jacqueline M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Capobianco, John",
          52.85,
          72.04301075,
          49.90176817,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.85,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.15,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Capobianco, John"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Schlegel, Douglas",
          47.81,
          75,
          43.28358209,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.81,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 17.19,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.06,
                "name": "ROR"
              }
            ],
            "name": "Schlegel, Douglas"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Manwaring, Roy A.",
          46.04,
          54.92957746,
          43.52941176,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.04,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 48.48,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 5.49,
                "name": "ROR"
              }
            ],
            "name": "Manwaring, Roy A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Narlesky, James J.",
          44.19,
          49.38271605,
          43.33333333,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.19,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 55.81,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Narlesky, James J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Broscius, Patricia C.",
          39.69,
          37.79527559,
          41.73669468,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.69,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.12,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              }
            ],
            "name": "Broscius, Patricia C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pendolino, Samuel V.",
          34.72,
          57.53424658,
          34.89208633,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.72,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.71,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 11.01,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.56,
                "name": "ROR"
              }
            ],
            "name": "Pendolino, Samuel V."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Rapp, Anthony G. Jr.",
          32.62,
          38.63636364,
          42.38410596,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.62,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 65.96,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Rapp, Anthony G. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zilhaver, Lincoln S.",
          30.2,
          44.44444444,
          30.13435701,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 3.88,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 20,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 45.51,
                "name": "ROR"
              }
            ],
            "name": "Zilhaver, Lincoln S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Barner, Joseph K.",
          27.44,
          26.04166667,
          27.95698925,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.44,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 72.56,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Barner, Joseph K."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Marwood, Rita J.",
          23.04,
          45.83333333,
          23.36244541,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.04,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.46,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 60.51,
                "name": "ROR"
              }
            ],
            "name": "Marwood, Rita J."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Romig, Elizabeth A.",
          21.2,
          34.28571429,
          18.07909605,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 21.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 18.89,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 59.91,
                "name": "ROR"
              }
            ],
            "name": "Romig, Elizabeth A."
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
      45.49865229,
      62.26415093999999,
      45.148401830000005,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 45.49865229,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 13.8544,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 29.110500000000002,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 11.536399999999999,
            "name": "ROR"
          }
        ],
        "name": "Bradford"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Shaw, Michael",
          60.71,
          81.81818182,
          59.8062954,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.71,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.46,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 36.16,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.67,
                "name": "ROR"
              }
            ],
            "name": "Shaw, Michael"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Wheaton, Fred M.",
          42.23,
          50,
          42.10526316,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.23,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.22,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.55,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 6.99,
                "name": "ROR"
              }
            ],
            "name": "Wheaton, Fred M."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Clark, Timothy M.",
          41.82,
          47.61904762,
          42.02657807,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.82,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.85,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 54.78,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.54,
                "name": "ROR"
              }
            ],
            "name": "Clark, Timothy M."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Wilcox, Jonathan",
          35.79,
          50,
          35.51136364,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.79,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.02,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.64,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.54,
                "name": "ROR"
              }
            ],
            "name": "Wilcox, Jonathan"
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
      44.932404749999996,
      55.54532904,
      43.07425541,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 44.932404749999996,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 39.6443,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0902,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 15.2283,
            "name": "ROR"
          }
        ],
        "name": "Lancaster"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Hamill, Nancy G.",
          64.32,
          77.02702703,
          61.37724551,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 64.32,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 35.44,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.24,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Hamill, Nancy G."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Jimenez, Janice",
          63.41,
          69.23076923,
          61.59793814,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 63.41,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.46,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 6.13,
                "name": "ROR"
              }
            ],
            "name": "Jimenez, Janice"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Roth, Bruce A.",
          62.44,
          66.66666667,
          63.97306397,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 62.44,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 35.85,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.46,
                "name": "ROR"
              }
            ],
            "name": "Roth, Bruce A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Benner, William E. Jr.",
          59.79,
          71.64179104,
          57.84313725,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.79,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 39.95,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Benner, William E. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sheller, Raymond S.",
          59.6,
          70.58823529,
          57.84615385,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 31.82,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 8.59,
                "name": "ROR"
              }
            ],
            "name": "Sheller, Raymond S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hartman, Rodney H.",
          57.28,
          79.16666667,
          53.91791045,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.28,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 34.21,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 8.51,
                "name": "ROR"
              }
            ],
            "name": "Hartman, Rodney H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Russell, Tony S.",
          56.44,
          71.21212121,
          55.34591195,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 56.44,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.02,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 6.53,
                "name": "ROR"
              }
            ],
            "name": "Russell, Tony S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mylin, Stuart J.",
          50.93,
          62.96296296,
          49.79166667,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.93,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 48.88,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Mylin, Stuart J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Witkonis, Adam J.",
          50.47,
          56.39534884,
          48.6437613,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.47,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.02,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 11.1,
                "name": "ROR"
              }
            ],
            "name": "Witkonis, Adam J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Tobin, Edward A.",
          50.11,
          61.53846154,
          48.58611825,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.11,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 40.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.97,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 7.22,
                "name": "ROR"
              }
            ],
            "name": "Tobin, Edward A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Albert, Scott E.",
          49.06,
          55.10204082,
          47.76470588,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.06,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 50.94,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Albert, Scott E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bixler, Miles K.",
          47.41,
          59.3220339,
          45.15463918,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.41,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 14.89,
                "name": "ROR"
              }
            ],
            "name": "Bixler, Miles K."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Chudzik, Brian E.",
          46.31,
          57.63888889,
          43.30543933,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.31,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 53.69,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Chudzik, Brian E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Miller, David P.",
          45.52,
          49.24623116,
          44.69026549,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.52,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.11,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 17.38,
                "name": "ROR"
              }
            ],
            "name": "Miller, David P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mongiovi-Sponaugle, Mary",
          44.38,
          36.55172414,
          46.69051878,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.38,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 20.37,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.97,
                "name": "ROR"
              }
            ],
            "name": "Mongiovi-Sponaugle, Mary"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Keller, Joshua R.",
          43.28,
          39.53488372,
          44.40993789,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.28,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.14,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.09,
                "name": "ROR"
              }
            ],
            "name": "Keller, Joshua R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wilt, Richard S.",
          42.83,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.83,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.86,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 43.04,
                "name": "ROR"
              }
            ],
            "name": "Wilt, Richard S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Commins, B Denise",
          40.23,
          56.14035088,
          36.95652174,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.23,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.96,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 6.81,
                "name": "ROR"
              }
            ],
            "name": "Commins, B Denise"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Jamison, Mary G.",
          40.06,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.06,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 59.94,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Jamison, Mary G."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Duncan, Jayne F.",
          32.62,
          47.05882353,
          32.22891566,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.62,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 63.64,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.74,
                "name": "ROR"
              }
            ],
            "name": "Duncan, Jayne F."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gummo, Douglas L.",
          27.51,
          37.83783784,
          27.39018088,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.51,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 33.68,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.82,
                "name": "ROR"
              }
            ],
            "name": "Gummo, Douglas L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Herman, Robert A. Jr.",
          10.35,
          17.14285714,
          9.725158562,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 10.35,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 24.81,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 64.83,
                "name": "ROR"
              }
            ],
            "name": "Herman, Robert A. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Reinaker, Dennis E.",
          6.41,
          12,
          6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 6.41,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.45,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.23,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.91,
                "name": "ROR"
              }
            ],
            "name": "Reinaker, Dennis E."
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
      44.29388101,
      65.52083332999999,
      39.145907470000004,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 44.29388101,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 33.629799999999996,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0424,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 21.6222,
            "name": "ROR"
          }
        ],
        "name": "Cambria"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Musulin, Michael",
          55.29,
          65.19607843,
          50.94339623,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.29,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.62,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25.09,
                "name": "ROR"
              }
            ],
            "name": "Musulin, Michael"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zanghi, Mary Ann",
          54.42,
          77.52808989,
          47.8125,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 54.42,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.81,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.24,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25.54,
                "name": "ROR"
              }
            ],
            "name": "Zanghi, Mary Ann"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Varner, Rick W.",
          53.68,
          77.04918033,
          51.03926097,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.68,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 45.92,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.4,
                "name": "ROR"
              }
            ],
            "name": "Varner, Rick W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Creany, Fred",
          49.92,
          92.20779221,
          43.46978558,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.92,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.12,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.97,
                "name": "ROR"
              }
            ],
            "name": "Creany, Fred"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Price, Kevin J.",
          40.55,
          52.45283019,
          34.89278752,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.55,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.93,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.52,
                "name": "ROR"
              }
            ],
            "name": "Price, Kevin J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Prebish, John Jr.",
          37.68,
          68.33333333,
          33.17865429,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.68,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 40.08,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 22.04,
                "name": "ROR"
              }
            ],
            "name": "Prebish, John Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Barron, John W.",
          36.07,
          62.79069767,
          30.84291188,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.07,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.54,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.39,
                "name": "ROR"
              }
            ],
            "name": "Barron, John W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zungali, Michael",
          35.31,
          83.33333333,
          30.90909091,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.31,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 31.63,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.86,
                "name": "ROR"
              }
            ],
            "name": "Zungali, Michael"
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
      44.27380952,
      54.119850189999994,
      41.118447870000004,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 44.27380952,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 15.765299999999998,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 5.7181999999999995,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 33.3671,
            "name": "ROR"
          }
        ],
        "name": "York"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Meisenhelter, Douglas F.",
          81.79,
          87.36462094,
          79.33227345,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 81.79,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 17.45,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.11,
                "name": "ROR"
              }
            ],
            "name": "Meisenhelter, Douglas F."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Martin, Richard E. II",
          74.9,
          86.79245283,
          69.13580247,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 74.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 21.84,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.65,
                "name": "ROR"
              }
            ],
            "name": "Martin, Richard E. II"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Eshbach, David C.",
          54.02,
          65.6,
          51.9047619,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 54.02,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 9.62,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.65,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 23.45,
                "name": "ROR"
              }
            ],
            "name": "Eshbach, David C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Clancy, Jennifer J.P.",
          53.55,
          57.22543353,
          52.38095238,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.55,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.84,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.58,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 23.87,
                "name": "ROR"
              }
            ],
            "name": "Clancy, Jennifer J.P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Morgan, James H.",
          51.83,
          52.43902439,
          52.21843003,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.83,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.27,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.51,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 30.75,
                "name": "ROR"
              }
            ],
            "name": "Morgan, James H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Groom, Walter",
          50.99,
          62.68656716,
          46.21212121,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.99,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 27.23,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.99,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 20.79,
                "name": "ROR"
              }
            ],
            "name": "Groom, Walter"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Williams, Linda L.",
          50.54,
          57.73584906,
          45.57640751,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.54,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.78,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 14.37,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.15,
                "name": "ROR"
              }
            ],
            "name": "Williams, Linda L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Haskell, Ronald J. Jr.",
          48.41,
          47.87644788,
          49.31506849,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.41,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.19,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.25,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25.56,
                "name": "ROR"
              }
            ],
            "name": "Haskell, Ronald J. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bloss, Barry L.",
          46.99,
          53.28638498,
          44.73180077,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.99,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 5.61,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 14.37,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.75,
                "name": "ROR"
              }
            ],
            "name": "Bloss, Barry L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Miner, James S.",
          46.07,
          73.17073171,
          40.75286416,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.07,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 6.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.22,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.07,
                "name": "ROR"
              }
            ],
            "name": "Miner, James S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Manifold, Laura S.",
          43.35,
          48.61111111,
          42.09558824,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.35,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.45,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 5.15,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.91,
                "name": "ROR"
              }
            ],
            "name": "Manifold, Laura S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Laird, Scott",
          43.05,
          62.8742515,
          36.69064748,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.05,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.08,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 13.35,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.38,
                "name": "ROR"
              }
            ],
            "name": "Laird, Scott"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Toluba, Joel N.",
          41.99,
          44.56928839,
          41.40625,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.99,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.72,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.45,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.53,
                "name": "ROR"
              }
            ],
            "name": "Toluba, Joel N."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gross, Scott J.",
          41.36,
          62.28571429,
          36.18157543,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.36,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 17.48,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.29,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.54,
                "name": "ROR"
              }
            ],
            "name": "Gross, Scott J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Albright, Keith L.",
          40.73,
          44.50549451,
          40.29850746,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.73,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 31.53,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.65,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25.09,
                "name": "ROR"
              }
            ],
            "name": "Albright, Keith L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Thomas, Richard T.",
          39.78,
          52.84552846,
          37.3015873,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.78,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.66,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.89,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.32,
                "name": "ROR"
              }
            ],
            "name": "Thomas, Richard T."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Reilly, Thomas J.",
          39.6,
          60,
          36.29807692,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 28.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 30.6,
                "name": "ROR"
              }
            ],
            "name": "Reilly, Thomas J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dubs, Dwayne A.",
          36.35,
          61.14649682,
          30.81481481,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.35,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.36,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 48.75,
                "name": "ROR"
              }
            ],
            "name": "Dubs, Dwayne A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Eckenrode, Robert A.",
          33.2,
          51.04895105,
          29.22297297,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.05,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.41,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 52.34,
                "name": "ROR"
              }
            ],
            "name": "Eckenrode, Robert A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fishel, John H.",
          31.29,
          51.61290323,
          28.77358491,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.29,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.59,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 7.19,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.6,
                "name": "ROR"
              }
            ],
            "name": "Fishel, John H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Oberdorf, Jeffrey L.",
          30.24,
          30.9178744,
          29.94652406,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.24,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 21.36,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.57,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 45.43,
                "name": "ROR"
              }
            ],
            "name": "Oberdorf, Jeffrey L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ness, Harry M.",
          21.35,
          15.09433962,
          24.79338843,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 21.35,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 48.88,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.69,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 24.16,
                "name": "ROR"
              }
            ],
            "name": "Ness, Harry M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Edie, Nancy L.",
          18.12,
          22.09302326,
          16.04584527,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 18.12,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.35,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.18,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 78.12,
                "name": "ROR"
              }
            ],
            "name": "Edie, Nancy L."
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
      44.27074081,
      54,
      42.30092389,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 44.27074081,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 54.6505,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.7825000000000001,
            "name": "ROR"
          }
        ],
        "name": "Fayette"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Jeffries, Jennifer L.",
          52.58,
          67.46031746,
          48.48484848,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.58,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.25,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Jeffries, Jennifer L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dennis, Wendy D.",
          46.96,
          54.54545455,
          45.65217391,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.96,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.88,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.16,
                "name": "ROR"
              }
            ],
            "name": "Dennis, Wendy D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Haggerty, Ronald J. Sr.",
          45.95,
          59.40594059,
          44.37172775,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.95,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 53.93,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Haggerty, Ronald J. Sr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Shimshock, Daniel C.",
          45.89,
          57.89473684,
          43.59861592,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.89,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 54.11,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Shimshock, Daniel C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Metros, Michael",
          45.41,
          52.2556391,
          43.50132626,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.41,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 54.49,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Metros, Michael"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Defino, Michael J. Jr.",
          40.78,
          42.22222222,
          40.18518519,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.78,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 58.78,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Defino, Michael J. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kasunic, Richard II",
          37.85,
          50.45045045,
          36.19456366,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.85,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.15,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Kasunic, Richard II"
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
      43.95330739,
      63.73239437,
      37.027147310000004,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 43.95330739,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 18.932,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.6072,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 36.493900000000004,
            "name": "ROR"
          }
        ],
        "name": "Erie"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Dipaolo, Dominick",
          97.36,
          98.31460674,
          97.35099338,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 97.36,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.35,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.29,
                "name": "ROR"
              }
            ],
            "name": "Dipaolo, Dominick"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Carney, Thomas",
          91.02,
          91.07142857,
          91.09589041,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 91.02,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.38,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.3,
                "name": "ROR"
              }
            ],
            "name": "Carney, Thomas"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mack, Suzanne C.",
          60.68,
          61.56862745,
          61.8556701,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.68,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.04,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.49,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 24.57,
                "name": "ROR"
              }
            ],
            "name": "Mack, Suzanne C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Urbaniak, Paul G.",
          60.33,
          60.91954023,
          60.76555024,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.33,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 6.05,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.46,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.15,
                "name": "ROR"
              }
            ],
            "name": "Urbaniak, Paul G."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bizzarro, Paul A.",
          48.66,
          63.83928571,
          38.04347826,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.66,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.36,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.76,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.21,
                "name": "ROR"
              }
            ],
            "name": "Bizzarro, Paul A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hammer, Scott B.",
          43.32,
          64.51612903,
          41.27516779,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.32,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.06,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 43.62,
                "name": "ROR"
              }
            ],
            "name": "Hammer, Scott B."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mackendrick, Chris K.",
          38.37,
          83.33333333,
          33.60433604,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.37,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 61.39,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.24,
                "name": "ROR"
              }
            ],
            "name": "Mackendrick, Chris K."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fischer, Deborah",
          37.71,
          45.16129032,
          39.5256917,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.71,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.63,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.12,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 52.54,
                "name": "ROR"
              }
            ],
            "name": "Fischer, Deborah"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Manzi, Paul",
          35.25,
          56.52173913,
          33.33333333,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.25,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.18,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.57,
                "name": "ROR"
              }
            ],
            "name": "Manzi, Paul"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Stuck-Lewis, Denise",
          32.14,
          54.83870968,
          28.74251497,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.14,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 9.29,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.24,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 58.1,
                "name": "ROR"
              }
            ],
            "name": "Stuck-Lewis, Denise"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Muir, Shannon L.",
          29.93,
          42.42424242,
          32.01320132,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.93,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.73,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 55.84,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 13.14,
                "name": "ROR"
              }
            ],
            "name": "Muir, Shannon L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Strohmeyer, Susan D.",
          27.22,
          41.30434783,
          25,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.22,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 9.07,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.57,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 63.14,
                "name": "ROR"
              }
            ],
            "name": "Strohmeyer, Susan D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cooper, Alan B.",
          25.17,
          36.36363636,
          24.26035503,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.17,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 25.85,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.1,
                "name": "ROR"
              }
            ],
            "name": "Cooper, Alan B."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Krahe, Mark R.",
          24.31,
          30.55555556,
          24.22997947,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.31,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.24,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 63.45,
                "name": "ROR"
              }
            ],
            "name": "Krahe, Mark R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McGowan, Brian M.",
          18.8,
          34.73684211,
          16.00753296,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 18.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 17.54,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 63.67,
                "name": "ROR"
              }
            ],
            "name": "McGowan, Brian M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nichols, Brenda",
          17.81,
          25,
          18.39464883,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 17.81,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.44,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 68.75,
                "name": "ROR"
              }
            ],
            "name": "Nichols, Brenda"
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
      43.50802205,
      57.06645057000001,
      35.29897333,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 43.50802205,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 2.7704,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 23.8085,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 29.5724,
            "name": "ROR"
          }
        ],
        "name": "Allegheny"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Welsh, Regis C.",
          85.43,
          90.43478261,
          80.69414317,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 85.43,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.64,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.72,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 10.21,
                "name": "ROR"
              }
            ],
            "name": "Welsh, Regis C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cramer, Jesse J.",
          75.62,
          81.08108108,
          58.88077859,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 75.62,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.89,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 8.39,
                "name": "ROR"
              }
            ],
            "name": "Cramer, Jesse J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Brletic, Thomas S.",
          73.89,
          83.11444653,
          61.09215017,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 73.89,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.87,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.57,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 16.57,
                "name": "ROR"
              }
            ],
            "name": "Brletic, Thomas S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Tibbs, Edward A.",
          73.79,
          79.70660147,
          68.33333333,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 73.79,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 19.59,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 6.49,
                "name": "ROR"
              }
            ],
            "name": "Tibbs, Edward A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Barner, Robert L.",
          71.38,
          77.04918033,
          64.17322835,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 71.38,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 18.73,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 9.89,
                "name": "ROR"
              }
            ],
            "name": "Barner, Robert L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Armour, John W.",
          67.19,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 67.19,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 25.28,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 7.53,
                "name": "ROR"
              }
            ],
            "name": "Armour, John W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Costa, Ron Sr.",
          58.39,
          62.44541485,
          55.04587156,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 58.39,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 18.08,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 23.53,
                "name": "ROR"
              }
            ],
            "name": "Costa, Ron Sr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ricciardi, Gene",
          53.89,
          63.45381526,
          45.73643411,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.89,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 19.07,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 27.04,
                "name": "ROR"
              }
            ],
            "name": "Ricciardi, Gene"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Martini, Randy",
          53.25,
          63.79928315,
          43.25396825,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.25,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 24.68,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 22.08,
                "name": "ROR"
              }
            ],
            "name": "Martini, Randy"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Motznik, James A.",
          51.79,
          58.31325301,
          45.47803618,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.79,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 19.98,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 28.24,
                "name": "ROR"
              }
            ],
            "name": "Motznik, James A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hromyak, Leonard J.",
          51.42,
          55.05050505,
          49.10714286,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.42,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.24,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 35.31,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 13.03,
                "name": "ROR"
              }
            ],
            "name": "Hromyak, Leonard J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Miller, Thomas Jr.",
          49.86,
          70.3125,
          38.49557522,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.86,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.09,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 44.04,
                "name": "ROR"
              }
            ],
            "name": "Miller, Thomas Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bengel, Carolyn S.",
          49.29,
          68.27956989,
          40.55944056,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.29,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.42,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 16.27,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.02,
                "name": "ROR"
              }
            ],
            "name": "Bengel, Carolyn S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Butler, Daniel E.",
          48.64,
          56.30252101,
          42.85714286,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.64,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 25,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.36,
                "name": "ROR"
              }
            ],
            "name": "Butler, Daniel E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Larotonda, Blaise P.",
          47.09,
          71.02803738,
          37.07865169,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.09,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.26,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 14.29,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.36,
                "name": "ROR"
              }
            ],
            "name": "Larotonda, Blaise P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sosovicka, David J.",
          47.05,
          64.42307692,
          42.23433243,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.05,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.21,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 26.37,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.37,
                "name": "ROR"
              }
            ],
            "name": "Sosovicka, David J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Shaffer, Peter H.",
          46.63,
          60,
          48.03149606,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.63,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.23,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 20.86,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 31.29,
                "name": "ROR"
              }
            ],
            "name": "Shaffer, Peter H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Stephens, Craig C.",
          46.46,
          69.15422886,
          32.20858896,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.46,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.02,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 19.03,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.49,
                "name": "ROR"
              }
            ],
            "name": "Stephens, Craig C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kovach, David T.",
          44.59,
          62.16216216,
          41.50684932,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.59,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.55,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 7.21,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.12,
                "name": "ROR"
              }
            ],
            "name": "Kovach, David T."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Joyce, Dennis R.",
          44.31,
          53.52112676,
          38.26530612,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.31,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.29,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 36.73,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.08,
                "name": "ROR"
              }
            ],
            "name": "Joyce, Dennis R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cooper, Kevin E.",
          44,
          51.37614679,
          36.70886076,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.46,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 25.08,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 28.46,
                "name": "ROR"
              }
            ],
            "name": "Cooper, Kevin E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fullerton, William T.",
          43.47,
          74.02597403,
          40.08483563,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.47,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.25,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 10.28,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 42.29,
                "name": "ROR"
              }
            ],
            "name": "Fullerton, William T."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Martin, Armand",
          43.25,
          50.75376884,
          38.9261745,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.25,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.99,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 44.84,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 10.71,
                "name": "ROR"
              }
            ],
            "name": "Martin, Armand"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Riazzi, Eugene F. Jr.",
          41.92,
          45.73170732,
          37.59124088,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.92,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.33,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 23.16,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.42,
                "name": "ROR"
              }
            ],
            "name": "Riazzi, Eugene F. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mills, Beth S.",
          40.74,
          61.20689655,
          30.43478261,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.74,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 16.52,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 42.74,
                "name": "ROR"
              }
            ],
            "name": "Mills, Beth S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ceoffe, Anthony M.",
          40.35,
          47.50733138,
          33.71757925,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.35,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 3.31,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 26.37,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.83,
                "name": "ROR"
              }
            ],
            "name": "Ceoffe, Anthony M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Arnoni, Ronald",
          39.83,
          71.55963303,
          29.94505495,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.83,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.93,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 41.09,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.14,
                "name": "ROR"
              }
            ],
            "name": "Arnoni, Ronald"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Petite, Oscar J. Jr.",
          39.55,
          50.32258065,
          29.53020134,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.55,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 24.44,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.01,
                "name": "ROR"
              }
            ],
            "name": "Petite, Oscar J. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Rushing, Derwin",
          39.55,
          48.55643045,
          30.72625698,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.55,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 29.69,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 30.36,
                "name": "ROR"
              }
            ],
            "name": "Rushing, Derwin"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hanley, James J. Jr.",
          38.9,
          49.79079498,
          26.92307692,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.54,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 25.19,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.37,
                "name": "ROR"
              }
            ],
            "name": "Hanley, James J. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Saveikis, Anthony William",
          38.71,
          79.41176471,
          21.09704641,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.71,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.59,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 14.37,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.33,
                "name": "ROR"
              }
            ],
            "name": "Saveikis, Anthony William"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wagner, William",
          38.51,
          69.47368421,
          26.60550459,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.51,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.14,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 11.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 42.55,
                "name": "ROR"
              }
            ],
            "name": "Wagner, William"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Smith, Tara",
          36.19,
          57.06214689,
          25.3776435,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.19,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 6.61,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 38.13,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 19.07,
                "name": "ROR"
              }
            ],
            "name": "Smith, Tara"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ravenstahl, Robert P. Jr.",
          34.28,
          38.30645161,
          32.08955224,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.28,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 31.44,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.28,
                "name": "ROR"
              }
            ],
            "name": "Ravenstahl, Robert P. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Stoughton, Lewis E.",
          33.96,
          66,
          34.16856492,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.96,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 4.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 15.47,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 45.28,
                "name": "ROR"
              }
            ],
            "name": "Stoughton, Lewis E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "DeLuca, Anthony",
          33.17,
          41.82692308,
          25.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.17,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.24,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 21.88,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 44.71,
                "name": "ROR"
              }
            ],
            "name": "DeLuca, Anthony"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dzvonick, Robert Paul",
          32.07,
          61.37931034,
          21.0106383,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.07,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.73,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 59.01,
                "name": "ROR"
              }
            ],
            "name": "Dzvonick, Robert Paul"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ford, Robert L.",
          31.56,
          44.68085106,
          26.53846154,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.56,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.28,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 66.48,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.68,
                "name": "ROR"
              }
            ],
            "name": "Ford, Robert L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Olasz, Richard D. Jr.",
          31.23,
          39.73799127,
          24.42244224,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.23,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.67,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 43.12,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 23.98,
                "name": "ROR"
              }
            ],
            "name": "Olasz, Richard D. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "King, Richard G.",
          30.79,
          40.90909091,
          23.90243902,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.79,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.45,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 47.41,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 19.35,
                "name": "ROR"
              }
            ],
            "name": "King, Richard G."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Haggerty, Sue",
          30.69,
          65,
          31.11111111,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.69,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.94,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.38,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 51.36,
                "name": "ROR"
              }
            ],
            "name": "Haggerty, Sue"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zucco, Linda",
          30,
          40.74074074,
          24.84848485,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 30,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.6,
                "name": "ROR"
              }
            ],
            "name": "Zucco, Linda"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Caulfield, Thomas",
          29.88,
          33.33333333,
          26.14379085,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.88,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 64.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 5.62,
                "name": "ROR"
              }
            ],
            "name": "Caulfield, Thomas"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Schricker, Scott H.",
          29.03,
          32.28070175,
          24.79674797,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.03,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.56,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.68,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 65.73,
                "name": "ROR"
              }
            ],
            "name": "Schricker, Scott H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Swearingen-Batch, Carla M.",
          27.58,
          51.51515152,
          19.04761905,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.58,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 58.18,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 14.24,
                "name": "ROR"
              }
            ],
            "name": "Swearingen-Batch, Carla M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Eichler, Roxanne Sakoian",
          27.55,
          39.22651934,
          19.24686192,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.55,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 6.02,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 18.52,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.92,
                "name": "ROR"
              }
            ],
            "name": "Eichler, Roxanne Sakoian"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Barton, David J.",
          27.52,
          51.85185185,
          20.30769231,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.52,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 10.74,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 61.74,
                "name": "ROR"
              }
            ],
            "name": "Barton, David J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McGraw-Desmet, Maureen",
          27.38,
          49.51456311,
          17.94871795,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.38,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.86,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 19.02,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 52.74,
                "name": "ROR"
              }
            ],
            "name": "McGraw-Desmet, Maureen"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lang, Elissa M.",
          27.27,
          46.15384615,
          16.2055336,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.27,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 40.19,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.54,
                "name": "ROR"
              }
            ],
            "name": "Lang, Elissa M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cercone, Mary A.",
          25.22,
          33.66834171,
          19.12350598,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.22,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 61.74,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 13.04,
                "name": "ROR"
              }
            ],
            "name": "Cercone, Mary A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Opiela, Richard J.",
          24.7,
          49.52380952,
          16.39344262,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.95,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 30.75,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 27.6,
                "name": "ROR"
              }
            ],
            "name": "Opiela, Richard J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kaiser, Ralph",
          24.17,
          41.40127389,
          17.13395639,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.17,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.19,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 10.72,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 64.91,
                "name": "ROR"
              }
            ],
            "name": "Kaiser, Ralph"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Swan, Tom",
          24.11,
          56.04395604,
          15.17027864,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.11,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.24,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 29.36,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.3,
                "name": "ROR"
              }
            ],
            "name": "Swan, Tom"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Shaffer, William",
          23.33,
          21.42857143,
          21.01910828,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.33,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.83,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 42.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Shaffer, William"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Murray, Mary P.",
          22.8,
          35.4679803,
          17.38095238,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 22.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.16,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 36.48,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 40.25,
                "name": "ROR"
              }
            ],
            "name": "Murray, Mary P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Seibel, Wayne D.",
          20.58,
          50,
          21.49901381,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 20.58,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.08,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 18.57,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 48.32,
                "name": "ROR"
              }
            ],
            "name": "Seibel, Wayne D."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Herbst, Jeffrey L.",
          17.67,
          24.36548223,
          13.94557823,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 17.67,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 13.25,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 68.88,
                "name": "ROR"
              }
            ],
            "name": "Herbst, Jeffrey L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Manning, Jeffrey A.",
          7.91,
          13.4529148,
          7.142857143,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 7.91,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.35,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 68.69,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 21.72,
                "name": "ROR"
              }
            ],
            "name": "Manning, Jeffrey A."
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
      42.44132779,
      51.21710526,
      36.4556962,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 42.44132779,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 37.7645,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.0226000000000002,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 18.4838,
            "name": "ROR"
          }
        ],
        "name": "Dauphin"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Shugars, Raymond F.",
          90.57,
          91.74757282,
          88.57142857,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 90.57,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.43,
                "name": "ROR"
              }
            ],
            "name": "Shugars, Raymond F."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Semic, Steven M.",
          84.79,
          85.87443946,
          84.1191067,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 84.79,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.86,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.35,
                "name": "ROR"
              }
            ],
            "name": "Semic, Steven M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zozos, George A.",
          65.83,
          68.24512535,
          64.78873239,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 65.83,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.17,
                "name": "ROR"
              }
            ],
            "name": "Zozos, George A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pianka, Barbara",
          59.16,
          63.03317536,
          53.63984674,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.16,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 40.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Pianka, Barbara"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zozos, Paul T.",
          50.32,
          54.35435435,
          45.66037736,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.32,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.04,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.64,
                "name": "ROR"
              }
            ],
            "name": "Zozos, Paul T."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Witmer, Lowell A.",
          46.95,
          65.46391753,
          39.26829268,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.95,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 20.58,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.32,
                "name": "ROR"
              }
            ],
            "name": "Witmer, Lowell A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lenker, James A.",
          42.25,
          43.58974359,
          42.19653179,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.25,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.97,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.77,
                "name": "ROR"
              }
            ],
            "name": "Lenker, James A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wenner, William C.",
          41.78,
          48.33333333,
          37.57338552,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.78,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.12,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.1,
                "name": "ROR"
              }
            ],
            "name": "Wenner, William C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lenker, Kenneth A.",
          40.08,
          45.63953488,
          35.37234043,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.08,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 24.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 35.22,
                "name": "ROR"
              }
            ],
            "name": "Lenker, Kenneth A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McKnight, Sonya M.",
          39.06,
          39.04282116,
          43.55555556,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.06,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.84,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.51,
                "name": "ROR"
              }
            ],
            "name": "McKnight, Sonya M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Judy, David H.",
          38.99,
          55.73770492,
          31.30929791,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.99,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.75,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.13,
                "name": "ROR"
              }
            ],
            "name": "Judy, David H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "O'Leary, David",
          35.03,
          41.32653061,
          38.46153846,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.03,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 61.86,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.22,
                "name": "ROR"
              }
            ],
            "name": "O'Leary, David"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Margerum, Rebecca J.",
          33.87,
          56.41025641,
          27.44186047,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.87,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.77,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.36,
                "name": "ROR"
              }
            ],
            "name": "Margerum, Rebecca J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lindsey, Joseph S.",
          33.86,
          43.64640884,
          26.65148064,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.86,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 66.14,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Lindsey, Joseph S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Smith, Michael J.",
          31.43,
          37.90664781,
          28.18991098,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.43,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 68.34,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.23,
                "name": "ROR"
              }
            ],
            "name": "Smith, Michael J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Johnson, Gregory D.",
          30.92,
          60.28368794,
          23.10679612,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.92,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.22,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 56.56,
                "name": "ROR"
              }
            ],
            "name": "Johnson, Gregory D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pelino, Dominic",
          24.61,
          45.94594595,
          18.29787234,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.61,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.62,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 15.25,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 49.42,
                "name": "ROR"
              }
            ],
            "name": "Pelino, Dominic"
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
      42.381348880000004,
      61.333333329999995,
      41.23134328,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 42.381348880000004,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 52.5042,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0835,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 4.9249,
            "name": "ROR"
          }
        ],
        "name": "McKean"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Engman, David Richard",
          46.85,
          90.90909091,
          48.10810811,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.85,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 50.45,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.7,
                "name": "ROR"
              }
            ],
            "name": "Engman, David Richard"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Cercone, Dominic Jr.",
          42.11,
          67.74193548,
          39.44954128,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.11,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.86,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 7.48,
                "name": "ROR"
              }
            ],
            "name": "Cercone, Dominic Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Todd, William K.",
          42.07,
          71.42857143,
          40.06968641,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.07,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 54.37,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.32,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.91,
                "name": "ROR"
              }
            ],
            "name": "Todd, William K."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Luther, Richard W.",
          39.74,
          40.74074074,
          40.07352941,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.74,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 55.05,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 5.21,
                "name": "ROR"
              }
            ],
            "name": "Luther, Richard W."
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
      41.05888709,
      62.71186441,
      39.52662722,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 41.05888709,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 12.371699999999999,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 3.2954999999999997,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 43.2739,
            "name": "ROR"
          }
        ],
        "name": "Armstrong"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Andring, James",
          60.57,
          83.33333333,
          60.25236593,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.57,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.57,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.86,
                "name": "ROR"
              }
            ],
            "name": "Andring, James"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Owen, James H.",
          40.05,
          67.24137931,
          37.82991202,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.05,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.74,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.06,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 48.14,
                "name": "ROR"
              }
            ],
            "name": "Owen, James H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Decomo, J. Gary",
          35.65,
          50,
          34.25925926,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.65,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.19,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.15,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 55.01,
                "name": "ROR"
              }
            ],
            "name": "Decomo, J. Gary"
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
      40.61393152,
      70,
      39.95067818,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 40.61393152,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 15.112200000000001,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 2.2432,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 42.030699999999996,
            "name": "ROR"
          }
        ],
        "name": "Warren"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Carlson, Glenn S.",
          45.68,
          85.71428571,
          44.93670886,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.68,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 20.37,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.31,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.64,
                "name": "ROR"
              }
            ],
            "name": "Carlson, Glenn S."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Bauer, Laura",
          35.16,
          71.42857143,
          35.5450237,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.16,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 6.39,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.22,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.23,
                "name": "ROR"
              }
            ],
            "name": "Bauer, Laura"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Woodin, Todd A.",
          32.83,
          66.66666667,
          32.14285714,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.83,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.23,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.94,
                "name": "ROR"
              }
            ],
            "name": "Woodin, Todd A."
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
      40.32663317,
      66.66666667,
      39.76377953,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 40.32663317,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 33.2075,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.8805000000000001,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 25.5346,
            "name": "ROR"
          }
        ],
        "name": "Susquehanna"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Hollister, Jeffrey L.",
          53.19,
          100,
          52.6119403,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.19,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.59,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 9.22,
                "name": "ROR"
              }
            ],
            "name": "Hollister, Jeffrey L."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Cordner, Jodi L.",
          35.69,
          50,
          35.46099291,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.69,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 24.92,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.06,
                "name": "ROR"
              }
            ],
            "name": "Cordner, Jodi L."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Brainard, Suzanne M.",
          30.09,
          50,
          29.71698113,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.09,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.89,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.24,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 27.78,
                "name": "ROR"
              }
            ],
            "name": "Brainard, Suzanne M."
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
      40,
      40.625,
      40.83259522,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 40,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 34.2169,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0803,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 25.702799999999996,
            "name": "ROR"
          }
        ],
        "name": "Clarion"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Miller, Jeffrey C.",
          44.41,
          50,
          44.98480243,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.41,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.35,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.24,
                "name": "ROR"
              }
            ],
            "name": "Miller, Jeffrey C."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Schill, Timothy P.",
          43.53,
          72.72727273,
          43.61370717,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.53,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 18.82,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.65,
                "name": "ROR"
              }
            ],
            "name": "Schill, Timothy P."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Quinn, Duane L.",
          37.9,
          31.81818182,
          39.15857605,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.03,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.27,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.8,
                "name": "ROR"
              }
            ],
            "name": "Quinn, Duane L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Long Turk, Amy L.",
          29.21,
          40,
          30.12820513,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.21,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.64,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.15,
                "name": "ROR"
              }
            ],
            "name": "Long Turk, Amy L."
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
      38.96907216,
      64.05228758,
      37.83333333,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.96907216,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 30.3158,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 29.6842,
            "name": "ROR"
          }
        ],
        "name": "Huntingdon"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Wilt, Richard",
          43.54,
          77.38095238,
          39.09090909,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.54,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.14,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 43.01,
                "name": "ROR"
              }
            ],
            "name": "Wilt, Richard"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Jamison, Mary",
          41.78,
          60.71428571,
          42.90123457,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.78,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 58.22,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Jamison, Mary"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gummo, Douglas L.",
          26.93,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.93,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 34.66,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.41,
                "name": "ROR"
              }
            ],
            "name": "Gummo, Douglas L."
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
      38.93688681,
      55.77092511,
      35.82116788,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.93688681,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 34.2627,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.9538,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 25.663999999999998,
            "name": "ROR"
          }
        ],
        "name": "Washington"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Hopkins, Larry W.",
          53.38,
          70.76923077,
          49.90176817,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.38,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.17,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.3,
                "name": "ROR"
              }
            ],
            "name": "Hopkins, Larry W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wilson, Mark",
          53.38,
          66.25,
          49.70238095,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.38,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 22.84,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 23.78,
                "name": "ROR"
              }
            ],
            "name": "Wilson, Mark"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Havelka, Gary H.",
          50,
          86.66666667,
          48.42519685,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.66,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.34,
                "name": "ROR"
              }
            ],
            "name": "Havelka, Gary H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ward, Ethan T.",
          49.1,
          69.23076923,
          45.55256065,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 50.45,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.23,
                "name": "ROR"
              }
            ],
            "name": "Ward, Ethan T."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Redlinger, Robert W.",
          43.93,
          55.45851528,
          40.58394161,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.93,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.54,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 17.42,
                "name": "ROR"
              }
            ],
            "name": "Redlinger, Robert W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mark, David W.",
          40.65,
          65.6,
          35.77661431,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.65,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.31,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.22,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.54,
                "name": "ROR"
              }
            ],
            "name": "Mark, David W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Thompson, Curtis",
          34.55,
          58.53658537,
          32.12290503,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.55,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 65.21,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.24,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Thompson, Curtis"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ellis, James C.",
          31.19,
          65.11627907,
          28.19148936,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.19,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 11.93,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 56.88,
                "name": "ROR"
              }
            ],
            "name": "Ellis, James C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kanalis, Joshua P.",
          29.04,
          29.16666667,
          28.84990253,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.04,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 70.03,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Kanalis, Joshua P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Weller, Jay",
          29,
          44.93670886,
          26.06060606,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 64.5,
                "name": "ROR"
              }
            ],
            "name": "Weller, Jay"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McDonald, Traci L.",
          28.08,
          48.07692308,
          26.52631579,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.08,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.36,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 19.38,
                "name": "ROR"
              }
            ],
            "name": "McDonald, Traci L."
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
      38.70437956,
      48.84547069,
      37.97733949,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.70437956,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 56.2432,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.6207,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 3.5232,
            "name": "ROR"
          }
        ],
        "name": "Lebanon"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Capello, Thomas M.",
          48.29,
          58.58585859,
          47.06790123,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.29,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 51.71,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Capello, Thomas M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Garver, Carl Russell",
          42.51,
          54.54545455,
          41.29353234,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.51,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.35,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Garver, Carl Russell"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wolfe, Kim R.",
          40.89,
          47.61904762,
          39.95006242,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.89,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 59.11,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Wolfe, Kim R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kline, Samuel A.",
          40.43,
          66.66666667,
          37.34939759,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.43,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.53,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.13,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 43.09,
                "name": "ROR"
              }
            ],
            "name": "Kline, Samuel A."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Jones, Charles T. Jr.",
          38.21,
          26.08695652,
          41,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.21,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 61.79,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Jones, Charles T. Jr."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Verna, Anthony J.",
          35.64,
          55.35714286,
          35.25,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.64,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.25,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Verna, Anthony J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dissinger, Maria M.",
          35.26,
          43.68932039,
          35.25925926,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.26,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.62,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.12,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Dissinger, Maria M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Charles, Bradford H.",
          29.14,
          23.52941176,
          29.54545455,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.14,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.66,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 55.63,
                "name": "ROR"
              }
            ],
            "name": "Charles, Bradford H."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Ditzler, John W.",
          29.04,
          35.59322034,
          28.67132867,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.04,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 69.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.86,
                "name": "ROR"
              }
            ],
            "name": "Ditzler, John W."
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
      38.63636364,
      52.57731959,
      37.564196630000005,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.63636364,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 59.5588,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 1.8048000000000002,
            "name": "ROR"
          }
        ],
        "name": "Bedford"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Bingham, H. Cyril Jr.",
          44.85,
          71.42857143,
          42.06896552,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.85,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 55.15,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Bingham, H. Cyril Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Baker, Brian K.",
          37.85,
          58.33333333,
          36.52694611,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.85,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 58.84,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.31,
                "name": "ROR"
              }
            ],
            "name": "Baker, Brian K."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Calhoun, Kathy S.",
          37.06,
          31.57894737,
          37.59398496,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.06,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.14,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.8,
                "name": "ROR"
              }
            ],
            "name": "Calhoun, Kathy S."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Osman, Tonya M.",
          30.8,
          31.25,
          30.70539419,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 68.06,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.14,
                "name": "ROR"
              }
            ],
            "name": "Osman, Tonya M."
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
      38.55721393,
      72.97297297,
      38.352524360000004,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.55721393,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 61.2769,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0829,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.0829,
            "name": "ROR"
          }
        ],
        "name": "Jefferson"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Inzana, David B.",
          43.07,
          73.33333333,
          42.06349206,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.07,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.93,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Inzana, David B."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Chambers, Douglas R.",
          37.91,
          50,
          37.93103448,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.91,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.09,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Chambers, Douglas R."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Bazylak, Gregory M.",
          34.71,
          81.81818182,
          34.73684211,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.71,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 65.05,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.24,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Bazylak, Gregory M."
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
      38.5278224,
      51.61744023,
      35.0094162,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.5278224,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 19.132099999999998,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.4985,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 41.5188,
            "name": "ROR"
          }
        ],
        "name": "Cumberland"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Beckley, Elizabeth S.",
          50.98,
          63.94557823,
          47.16157205,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.98,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 48.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Beckley, Elizabeth S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Silcox, Kathryn H.",
          46.11,
          70.1754386,
          40.7678245,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.11,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 26.14,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.29,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 27.31,
                "name": "ROR"
              }
            ],
            "name": "Silcox, Kathryn H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Clement, Charles A.",
          43.14,
          59.33333333,
          37.95180723,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.14,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 11.13,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 44.82,
                "name": "ROR"
              }
            ],
            "name": "Clement, Charles A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Birbeck, Jonathan R.",
          43.02,
          60.50420168,
          37.31707317,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.02,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 6.33,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.23,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.3,
                "name": "ROR"
              }
            ],
            "name": "Birbeck, Jonathan R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fegley, Paul M.",
          40.93,
          49.59349593,
          37.96296296,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.93,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 43.42,
                "name": "ROR"
              }
            ],
            "name": "Fegley, Paul M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Day, Susan K.",
          40.72,
          50.87719298,
          38.74239351,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.72,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 11.24,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.16,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.88,
                "name": "ROR"
              }
            ],
            "name": "Day, Susan K."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dougherty, Richard S. Jr.",
          40.14,
          55.28455285,
          35.79952267,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.14,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 11.93,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.2,
                "name": "ROR"
              }
            ],
            "name": "Dougherty, Richard S. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cohick, Vivian J.",
          39.52,
          63.95348837,
          35.26785714,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.52,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.34,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.84,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 44.3,
                "name": "ROR"
              }
            ],
            "name": "Cohick, Vivian J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Martin, Mark W.",
          35.06,
          50,
          31.68141593,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.06,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.13,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.81,
                "name": "ROR"
              }
            ],
            "name": "Martin, Mark W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Adams, H. Anthony",
          25.31,
          33.5443038,
          23.60248447,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.31,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.36,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 59.21,
                "name": "ROR"
              }
            ],
            "name": "Adams, H. Anthony"
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
      38.288852490000004,
      53.5892323,
      34.6550856,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.288852490000004,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 31.285600000000002,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.0030000000000001,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 29.3085,
            "name": "ROR"
          }
        ],
        "name": "Luzerne"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Whittaker, Donald L.",
          60.13,
          79.85074627,
          53.75854214,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.13,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.31,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.33,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.06,
                "name": "ROR"
              }
            ],
            "name": "Whittaker, Donald L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hasay, John E.",
          53.37,
          77.04918033,
          48.97260274,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.37,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.51,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.74,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.38,
                "name": "ROR"
              }
            ],
            "name": "Hasay, John E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Halesey, Joseph A.",
          52.26,
          76.92307692,
          45.40540541,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.26,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 22.37,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.38,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25,
                "name": "ROR"
              }
            ],
            "name": "Halesey, Joseph A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dixon, James M.",
          46.81,
          65.48672566,
          43.69747899,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.81,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 39.35,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.27,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 13.57,
                "name": "ROR"
              }
            ],
            "name": "Dixon, James M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "O'Donnell, Daniel",
          46.64,
          69.90291262,
          40.97222222,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.64,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.96,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.45,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.95,
                "name": "ROR"
              }
            ],
            "name": "O'Donnell, Daniel"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Spagnuolo, Joseph D. Jr.",
          44.44,
          53.91304348,
          42.65010352,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.44,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.22,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 23.02,
                "name": "ROR"
              }
            ],
            "name": "Spagnuolo, Joseph D. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Roberts, Paul J.",
          43.77,
          66.07142857,
          38.07531381,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.77,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.23,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Roberts, Paul J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Barilla, David A.",
          43.61,
          63.30275229,
          39.21568627,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.61,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.37,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.17,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 23.85,
                "name": "ROR"
              }
            ],
            "name": "Barilla, David A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zola, Joseph D.",
          41.47,
          66.40625,
          36.3963964,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.47,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 20.17,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.28,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.08,
                "name": "ROR"
              }
            ],
            "name": "Zola, Joseph D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kravitz, Alexandra Kokura",
          40.42,
          58,
          36.85185185,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.42,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.94,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.45,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 28.59,
                "name": "ROR"
              }
            ],
            "name": "Kravitz, Alexandra Kokura"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Carmody, Joseph J.",
          38.76,
          57.2815534,
          33.69863014,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.76,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 44.95,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.62,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 15.46,
                "name": "ROR"
              }
            ],
            "name": "Carmody, Joseph J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cronauer, Rick",
          36.59,
          39.82300885,
          36.16236162,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.59,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.42,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.74,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.13,
                "name": "ROR"
              }
            ],
            "name": "Cronauer, Rick"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Malloy, Thomas F. Sr.",
          31.99,
          42.62948207,
          28.16901408,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.99,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 34,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.11,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.79,
                "name": "ROR"
              }
            ],
            "name": "Malloy, Thomas F. Sr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dotzel, Michael G.",
          28.88,
          28.43137255,
          29.23076923,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.88,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.57,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 5.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 52.85,
                "name": "ROR"
              }
            ],
            "name": "Dotzel, Michael G."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Tupper, Brian James",
          27.47,
          65.75342466,
          22.09302326,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.47,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.31,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.16,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 57.89,
                "name": "ROR"
              }
            ],
            "name": "Tupper, Brian James"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sharkey, Thomas",
          15.29,
          38.88888889,
          12.97709924,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 15.29,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.28,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 76.43,
                "name": "ROR"
              }
            ],
            "name": "Sharkey, Thomas"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Lupas, David W.",
          14.73,
          9.090909091,
          16.50485437,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 14.73,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 85.27,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Lupas, David W."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Sklarosky, Joseph F. Jr.",
          10.53,
          4.761904762,
          11.9266055,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 10.53,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 89.47,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Sklarosky, Joseph F. Jr."
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
      38.18897638,
      40.796019900000005,
      38.46153846,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.18897638,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 42.0697,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.11249999999999999,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 19.6288,
            "name": "ROR"
          }
        ],
        "name": "Columbia"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Brewer, Doug D.",
          50.33,
          68.42105263,
          51.15511551,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.33,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 22.37,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.33,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.97,
                "name": "ROR"
              }
            ],
            "name": "Brewer, Doug D."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Knecht, Richard W.",
          46.72,
          69.56521739,
          46.88346883,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.72,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.27,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.24,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 44.77,
                "name": "ROR"
              }
            ],
            "name": "Knecht, Richard W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Long, Craig W.",
          42.73,
          85.71428571,
          41.06280193,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.73,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 20,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.27,
                "name": "ROR"
              }
            ],
            "name": "Long, Craig W."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Lawton, Russell L.",
          27.35,
          22.44897959,
          30.37475345,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.35,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 72.65,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Lawton, Russell L."
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
      38.0970325,
      48.47354138,
      34.29690666,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.0970325,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 40.0132,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.009399999999999999,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 20.7273,
            "name": "ROR"
          }
        ],
        "name": "Chester"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Hines, Gregory V.",
          60.94,
          61.76470588,
          58.85167464,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.94,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 33.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 5.28,
                "name": "ROR"
              }
            ],
            "name": "Hines, Gregory V."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Koon, Grover E.",
          52.15,
          55.09641873,
          49.47368421,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.15,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 39.08,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 8.17,
                "name": "ROR"
              }
            ],
            "name": "Koon, Grover E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Vito, Marian T.",
          46.41,
          53.57142857,
          43.65671642,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.41,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 33.01,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 19.86,
                "name": "ROR"
              }
            ],
            "name": "Vito, Marian T."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gill, Nancy",
          42.86,
          49.62406015,
          41.36904762,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.86,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.41,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 9.32,
                "name": "ROR"
              }
            ],
            "name": "Gill, Nancy"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Donatelli, Lori Novak",
          42.77,
          53.84615385,
          38.25301205,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.77,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 36.17,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 20.43,
                "name": "ROR"
              }
            ],
            "name": "Donatelli, Lori Novak"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Massey, Scott A.",
          42.36,
          54.26829268,
          39.49044586,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.36,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.88,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.01,
                "name": "ROR"
              }
            ],
            "name": "Massey, Scott A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cabry, Michael J. III",
          40.83,
          51.92307692,
          39.20454545,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.83,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.23,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 20.03,
                "name": "ROR"
              }
            ],
            "name": "Cabry, Michael J. III"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bailey, John R.",
          38.69,
          51.58730159,
          33.09352518,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.69,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 41.72,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 19.11,
                "name": "ROR"
              }
            ],
            "name": "Bailey, John R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Tartaglio, Thomas W.",
          38.13,
          50,
          35.73264781,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.13,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.55,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 22.57,
                "name": "ROR"
              }
            ],
            "name": "Tartaglio, Thomas W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bruno, Mark A.",
          36.74,
          41.78082192,
          34.46327684,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.74,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 31.83,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.67,
                "name": "ROR"
              }
            ],
            "name": "Bruno, Mark A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Seavey, Matthew",
          35.73,
          51.85185185,
          32.15223097,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.73,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 35.19,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.5,
                "name": "ROR"
              }
            ],
            "name": "Seavey, Matthew"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Michaels, Theodore Peter Jr.",
          34.98,
          43.39622642,
          32.59052925,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.98,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.21,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 21.6,
                "name": "ROR"
              }
            ],
            "name": "Michaels, Theodore Peter Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sondergaard, Analisa",
          32.14,
          42.99516908,
          26.40186916,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.14,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.27,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 28.73,
                "name": "ROR"
              }
            ],
            "name": "Sondergaard, Analisa"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kraut, William D.",
          31.3,
          39.80582524,
          29.82954545,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 41.81,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25.84,
                "name": "ROR"
              }
            ],
            "name": "Kraut, William D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Valocchi, Jeffrey J.",
          31.3,
          32.62411348,
          31.77570093,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 48.03,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.12,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.52,
                "name": "ROR"
              }
            ],
            "name": "Valocchi, Jeffrey J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Brown, Leonard J.",
          25.89,
          52.63157895,
          25.69659443,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.89,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 44.35,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.76,
                "name": "ROR"
              }
            ],
            "name": "Brown, Leonard J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nistico, Charles",
          23.93,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.93,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 34.36,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.72,
                "name": "ROR"
              }
            ],
            "name": "Nistico, Charles"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Knapp, Gwenn S.",
          20.91,
          32.69230769,
          17.46987952,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 20.91,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.27,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 30.91,
                "name": "ROR"
              }
            ],
            "name": "Knapp, Gwenn S."
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
      37.84477229,
      60.13986014,
      35.56187767,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.84477229,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 61.7818,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.1291,
            "name": "ROR"
          }
        ],
        "name": "Venango"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Fish, Andrew F.",
          42.95,
          64.58333333,
          40.92592593,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.95,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.54,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.17,
                "name": "ROR"
              }
            ],
            "name": "Fish, Andrew F."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lowrey, Patrick E.",
          41.47,
          60,
          40.31531532,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.47,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.26,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.21,
                "name": "ROR"
              }
            ],
            "name": "Lowrey, Patrick E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kirtland, Matthew T.",
          28.12,
          61.40350877,
          23.03664921,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.12,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 71.43,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Kirtland, Matthew T."
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
      37.741878220000004,
      46.5060241,
      37.275215010000004,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.741878220000004,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 51.349900000000005,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 10.692699999999999,
            "name": "ROR"
          }
        ],
        "name": "Schuylkill"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Rossi, David J.",
          47.99,
          77.27272727,
          46.65314402,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.99,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.01,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Rossi, David J."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Plachko, David A.",
          47.6,
          56.75675676,
          48.63013699,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 51.94,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.47,
                "name": "ROR"
              }
            ],
            "name": "Plachko, David A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hale, Christina E.",
          42.88,
          50,
          42.37288136,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.88,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.65,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.46,
                "name": "ROR"
              }
            ],
            "name": "Hale, Christina E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Reiley, James",
          40.96,
          45.63758389,
          40.36885246,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.96,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 58.95,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Reiley, James"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kilker, Anthony J.",
          37.28,
          56.25,
          35.85185185,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.28,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.45,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.13,
                "name": "ROR"
              }
            ],
            "name": "Kilker, Anthony J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bayer, Stephen J.",
          33.99,
          54.28571429,
          33.59580052,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.99,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.55,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.61,
                "name": "ROR"
              }
            ],
            "name": "Bayer, Stephen J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ferrier, James R.",
          31.59,
          22.22222222,
          32.01754386,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.59,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 68.41,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Ferrier, James R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Domalakes, John E.",
          22.41,
          20,
          22.52252252,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 22.41,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 77.59,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Domalakes, John E."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Dolbin, Cyrus P.",
          17.43,
          0,
          19,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 17.43,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 82.57,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Dolbin, Cyrus P."
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
      37.479026850000004,
      49.26553672,
      35.19494204,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.479026850000004,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 11.6548,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.567,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 50.083999999999996,
            "name": "ROR"
          }
        ],
        "name": "Franklin"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Cunningham, Duane K.",
          52.94,
          69.23076923,
          50,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.94,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.51,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.61,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.74,
                "name": "ROR"
              }
            ],
            "name": "Cunningham, Duane K."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Plum, David L.",
          48,
          66.1971831,
          43.95973154,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.73,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.27,
                "name": "ROR"
              }
            ],
            "name": "Plum, David L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Eyer, Jody C.",
          41.06,
          65.95744681,
          38.07106599,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.06,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 22.52,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.66,
                "name": "ROR"
              }
            ],
            "name": "Eyer, Jody C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Manns, Glenn Kenneth",
          38.93,
          45.27027027,
          37.42405832,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.93,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.57,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.17,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 52.06,
                "name": "ROR"
              }
            ],
            "name": "Manns, Glenn Kenneth"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Rock, Kelly L.",
          35.31,
          45.69536424,
          33.4431631,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.31,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.39,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 53.61,
                "name": "ROR"
              }
            ],
            "name": "Rock, Kelly L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Williams, Todd R.",
          28.95,
          40.74074074,
          26.74157303,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.95,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.81,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.71,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 54.53,
                "name": "ROR"
              }
            ],
            "name": "Williams, Todd R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pentz, Larry G.",
          25.51,
          42,
          23.60335196,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.51,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.13,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.21,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 66.14,
                "name": "ROR"
              }
            ],
            "name": "Pentz, Larry G."
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
      37.44343891,
      58.97435897,
      37.861635220000004,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.44343891,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 34.6546,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.3398,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 26.613799999999998,
            "name": "ROR"
          }
        ],
        "name": "Greene"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Watson, Lee",
          51.13,
          53.84615385,
          53.61702128,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.13,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 18.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.75,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.32,
                "name": "ROR"
              }
            ],
            "name": "Watson, Lee"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Cramer, Jesse J.",
          32.37,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.37,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 21.22,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.04,
                "name": "ROR"
              }
            ],
            "name": "Cramer, Jesse J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bates, D Glenn",
          32.06,
          64.28571429,
          31.08614232,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.06,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 67.94,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Bates, D Glenn"
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
      37.20349563,
      64.86486486000001,
      35.309973049999996,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.20349563,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 28.214699999999997,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 34.5818,
            "name": "ROR"
          }
        ],
        "name": "Wayne"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Edwards, Ronald",
          39.25,
          50,
          38.19095477,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.25,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.01,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 53.74,
                "name": "ROR"
              }
            ],
            "name": "Edwards, Ronald"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Carney, Bonnie L.",
          38.95,
          61.53846154,
          36.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.95,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.06,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 11.99,
                "name": "ROR"
              }
            ],
            "name": "Carney, Bonnie L."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Myers, Linus H.",
          34.87,
          75,
          32.25806452,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.87,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.36,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.78,
                "name": "ROR"
              }
            ],
            "name": "Myers, Linus H."
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
      36.92628651,
      47.14285714,
      35.98750976,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 36.92628651,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 51.078599999999994,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.1392,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 11.412700000000001,
            "name": "ROR"
          }
        ],
        "name": "Clinton"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Sanders, Joseph L.",
          68.98,
          63.82978723,
          69.77491961,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 68.98,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.92,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.55,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.28,
                "name": "ROR"
              }
            ],
            "name": "Sanders, Joseph L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Maggs, John W.",
          59.44,
          66.66666667,
          59.2920354,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.44,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 40.56,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Maggs, John W."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Mills, Frank P.",
          12.34,
          21.66666667,
          11.68831169,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 12.34,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 66.14,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 21.39,
                "name": "ROR"
              }
            ],
            "name": "Mills, Frank P."
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
      36.44859813,
      62.5,
      32.63157895,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 36.44859813,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 61.682199999999995,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 1.8692,
            "name": "ROR"
          }
        ],
        "name": "Sullivan"
      }
    ],
    "outlier": true,
    "collapseData": [],
    "isCollapsed": true
  },
  {
    "data": [
      "",
      "Tioga",
      36.38603696,
      56.99999999999999,
      34.50800915,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 36.38603696,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 48.5597,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 13.086400000000001,
            "name": "ROR"
          }
        ],
        "name": "Tioga"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Steffee, Susanne V.",
          41.76,
          50,
          40.3125,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.76,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 18.49,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.6,
                "name": "ROR"
              }
            ],
            "name": "Steffee, Susanne V."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Thachik, George M.",
          38.52,
          80.55555556,
          35.16209476,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.52,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 61.21,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.26,
                "name": "ROR"
              }
            ],
            "name": "Thachik, George M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Edgcomb, James R.",
          38.31,
          57.14285714,
          37.58389262,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.31,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 61.69,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Edgcomb, James R."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Rega, Jennifer J.",
          37.96,
          59.375,
          35.51401869,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.96,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 14.36,
                "name": "ROR"
              }
            ],
            "name": "Rega, Jennifer J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Carlson, James Edgar",
          29.5,
          43.75,
          28.47682119,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 69.88,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Carlson, James Edgar"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Repard, Robert L.",
          23.15,
          66.66666667,
          21.82741117,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.15,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 76.35,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Repard, Robert L."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Martin, William J.",
          13.91,
          5.769230769,
          15.95092025,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 13.91,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.83,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Martin, William J."
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
      36.28318584,
      59.30232558,
      35.647181630000006,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 36.28318584,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 63.6185,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.0983,
            "name": "ROR"
          }
        ],
        "name": "Clearfield"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Ireland, Richard Allen",
          42.04,
          53.84615385,
          42.06642066,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.04,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.96,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Ireland, Richard Allen"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Hawkins, James L.",
          39.13,
          82.60869565,
          36.68639053,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.13,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.87,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Hawkins, James L."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Ford, Patrick N.",
          34.42,
          61.11111111,
          33.83838384,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.42,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 65.58,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Ford, Patrick N."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Nevling, Jerome M.",
          30.03,
          53.84615385,
          29.61876833,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.03,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 69.42,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.55,
                "name": "ROR"
              }
            ],
            "name": "Nevling, Jerome M."
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
      36.12542955,
      45.40337711,
      33.35235378,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 36.12542955,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 39.6907,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 12.070400000000001,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 11.855699999999999,
            "name": "ROR"
          }
        ],
        "name": "Mercer"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Arthur, Brian R.",
          45.28,
          74.73684211,
          41.16766467,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.28,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 53.83,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.89,
                "name": "ROR"
              }
            ],
            "name": "Arthur, Brian R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Songer, Dennis M.",
          44.1,
          49.09090909,
          42.11267606,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 28.76,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.67,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 14.48,
                "name": "ROR"
              }
            ],
            "name": "Songer, Dennis M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McEwen, D. Neil",
          41.69,
          61.33333333,
          38.74755382,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.69,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 55.65,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.66,
                "name": "ROR"
              }
            ],
            "name": "McEwen, D. Neil"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hinch, Lorinda L.",
          37.37,
          51.92307692,
          35.2238806,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.37,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.72,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.25,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 15.66,
                "name": "ROR"
              }
            ],
            "name": "Hinch, Lorinda L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Antos, Ronald E.",
          26.72,
          33.96226415,
          23.21981424,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.72,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 24.88,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 29.04,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 19.36,
                "name": "ROR"
              }
            ],
            "name": "Antos, Ronald E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fagley, William L.",
          17.69,
          45.83333333,
          14.95726496,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 17.69,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 82.31,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Fagley, William L."
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
      36,
      56.81818182,
      33.910665449999996,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 36,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 51.91909999999999,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0825,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 11.886099999999999,
            "name": "ROR"
          }
        ],
        "name": "Northumberland"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Gembic, John",
          41.67,
          74.6835443,
          38.08180536,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.67,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.13,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.01,
                "name": "ROR"
              }
            ],
            "name": "Gembic, John"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Diehl, Michael I.",
          40.57,
          62.5,
          38.86255924,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.57,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.14,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.07,
                "name": "ROR"
              }
            ],
            "name": "Diehl, Michael I."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cashman, Richard P.",
          35.14,
          40,
          35.05154639,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.14,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.86,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Cashman, Richard P."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Apfelbaum, Benjamin",
          28.29,
          42.5,
          25.98870056,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.29,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.24,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.16,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 40.81,
                "name": "ROR"
              }
            ],
            "name": "Apfelbaum, Benjamin"
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
      35.92870544,
      52.5,
      34.59183673,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 35.92870544,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 54.1276,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 2.9081,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 6.472799999999999,
            "name": "ROR"
          }
        ],
        "name": "Snyder"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Reed, John H.",
          36.96,
          55.71428571,
          37.14759536,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.96,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.28,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.77,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.99,
                "name": "ROR"
              }
            ],
            "name": "Reed, John H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hackenberg, Lori R.",
          36.79,
          81.25,
          38.78205128,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.79,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.17,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 5.69,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 5.35,
                "name": "ROR"
              }
            ],
            "name": "Hackenberg, Lori R."
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
      35.68118628,
      40,
      35.596508240000006,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 35.68118628,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 63.974,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0929,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.1857,
            "name": "ROR"
          }
        ],
        "name": "Wyoming"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Smith, Carl W. Jr.",
          43.65,
          72.72727273,
          42.92565947,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.65,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 55.89,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.23,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.23,
                "name": "ROR"
              }
            ],
            "name": "Smith, Carl W. Jr."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Plummer, David K.",
          29.21,
          15.38461538,
          29.84562607,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.21,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 70.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.17,
                "name": "ROR"
              }
            ],
            "name": "Plummer, David K."
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
      35.19163763,
      46.15384615,
      35.34136546,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 35.19163763,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 24.738699999999998,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.6969000000000001,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 39.0244,
            "name": "ROR"
          }
        ],
        "name": "Montour"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Shrawder, Marvin K.",
          22.44,
          46.42857143,
          38.671875,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 22.44,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 22.44,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.98,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 53.66,
                "name": "ROR"
              }
            ],
            "name": "Shrawder, Marvin K."
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
      35.01070664,
      30.392156860000004,
      36.21169916,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 35.01070664,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 33.3333,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 30.761,
            "name": "ROR"
          }
        ],
        "name": "Indiana"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Steffee, Susanne V.",
          41.02,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.02,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 18.36,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 40.48,
                "name": "ROR"
              }
            ],
            "name": "Steffee, Susanne V."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Haberl, Guy B.",
          40,
          35.97122302,
          40.9190372,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.08,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.75,
                "name": "ROR"
              }
            ],
            "name": "Haberl, Guy B."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Rega, Jennifer J.",
          38.66,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.66,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.35,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 14.6,
                "name": "ROR"
              }
            ],
            "name": "Rega, Jennifer J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Thachik, George M.",
          38.22,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.22,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 61.56,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.22,
                "name": "ROR"
              }
            ],
            "name": "Thachik, George M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Martin, William J.",
          10.9,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 10.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 41.71,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.91,
                "name": "ROR"
              }
            ],
            "name": "Martin, William J."
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
      34.75609756,
      85,
      32.03883495,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 34.75609756,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 52.439,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 12.8049,
            "name": "ROR"
          }
        ],
        "name": "Forest"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Miller, Daniel L.",
          30.2,
          81.25,
          42.63565891,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 55.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 14.09,
                "name": "ROR"
              }
            ],
            "name": "Miller, Daniel L."
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
      34.68169761,
      55.01355014,
      28.14726841,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 34.68169761,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 64.91029999999999,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.3321,
            "name": "ROR"
          }
        ],
        "name": "Lycoming"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Solomon, William C.",
          41.91,
          78.46153846,
          36,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.91,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.87,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Solomon, William C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Page, Allen P. III",
          38.3,
          54.81927711,
          29.49756888,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 61.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Page, Allen P. III"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lepley, Jerry C.",
          36.55,
          70.83333333,
          33.33333333,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.55,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 63.25,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Lepley, Jerry C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Frey, Christian David",
          32.52,
          53.58166189,
          21.96969697,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.52,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 66.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.78,
                "name": "ROR"
              }
            ],
            "name": "Frey, Christian David"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kemp, Jon Edward",
          30.51,
          60.25641026,
          25.3164557,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.51,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 68.95,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.18,
                "name": "ROR"
              }
            ],
            "name": "Kemp, Jon Edward"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Whiteman, Gary A.",
          29.37,
          52.44755245,
          24.02597403,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.37,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 70.63,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Whiteman, Gary A."
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
      34.46215139,
      43.75,
      36.67425968,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 34.46215139,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 39.243,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 7.370500000000001,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 18.9243,
            "name": "ROR"
          }
        ],
        "name": "Juniata"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Leister, Jacqueline T.",
          31.47,
          62.5,
          44.09090909,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.47,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.93,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 15.95,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.66,
                "name": "ROR"
              }
            ],
            "name": "Leister, Jacqueline T."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Lyter, Barbara M.",
          31.3,
          25,
          33.33333333,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 68.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Lyter, Barbara M."
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
      34.16738568,
      37.41007194,
      34.020618559999996,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 34.16738568,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 5.6228,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 28.0277,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 31.1419,
            "name": "ROR"
          }
        ],
        "name": "Pike"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Chelak, Gregory H.",
          47,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39,
                "name": "ROR"
              }
            ],
            "name": "Chelak, Gregory H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fischer, Deborah",
          39.33,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.33,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 6.67,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.67,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 51,
                "name": "ROR"
              }
            ],
            "name": "Fischer, Deborah"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Muir, Shannon L.",
          32.84,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.84,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.59,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 53.25,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 13.02,
                "name": "ROR"
              }
            ],
            "name": "Muir, Shannon L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Menditto, Paul D. Sr.",
          29.03,
          20.51282051,
          33.74233129,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.03,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 9.22,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 40.09,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 21.2,
                "name": "ROR"
              }
            ],
            "name": "Menditto, Paul D. Sr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cooper, Alan B.",
          28.12,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.12,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.85,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 25.52,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.98,
                "name": "ROR"
              }
            ],
            "name": "Cooper, Alan B."
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
      34.04638145,
      58.6998088,
      31.768533580000003,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 34.04638145,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 65.5338,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.06,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.3599,
            "name": "ROR"
          }
        ],
        "name": "Blair"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Aigner, Paula M.",
          52.64,
          79.46428571,
          49.1503268,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.64,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.36,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Aigner, Paula M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Miller, Fred B.",
          43.81,
          78.16091954,
          40.05563282,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.81,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 55.58,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.61,
                "name": "ROR"
              }
            ],
            "name": "Miller, Fred B."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ormsby, Craig E.",
          35.34,
          89.47368421,
          31.41025641,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.34,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.66,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Ormsby, Craig E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kelly, Todd F.",
          29.92,
          45.94594595,
          28.07486631,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.92,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 70.08,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Kelly, Todd F."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Auker, Jeffrey P.",
          28.26,
          37.20930233,
          28.34437086,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.26,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 69.98,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.33,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.43,
                "name": "ROR"
              }
            ],
            "name": "Auker, Jeffrey P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Jackson, Steven D.",
          18.59,
          40.74074074,
          16.68822768,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 18.59,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 81.41,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Jackson, Steven D."
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
      33.63556165,
      43.27198364,
      28.69733969,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 33.63556165,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 46.1889,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.466,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 14.7096,
            "name": "ROR"
          }
        ],
        "name": "Montgomery"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Lawrence, Francis J. Jr.",
          60.12,
          65.16853933,
          54.04255319,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.12,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.72,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 20.04,
                "name": "ROR"
              }
            ],
            "name": "Lawrence, Francis J. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Scott, Gregory L.",
          58.68,
          53.46534653,
          66.23931624,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 58.68,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.54,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.18,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.94,
                "name": "ROR"
              }
            ],
            "name": "Scott, Gregory L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Palladino, Scott T.",
          47.93,
          60.65088757,
          39.84526112,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.93,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 44.12,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.88,
                "name": "ROR"
              }
            ],
            "name": "Palladino, Scott T."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cerski, Christopher",
          44.5,
          44.49339207,
          45.39473684,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 51.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.75,
                "name": "ROR"
              }
            ],
            "name": "Cerski, Christopher"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hunsicker, Margaret A.",
          44.48,
          50.55248619,
          38.79003559,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.48,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 27.91,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 24.78,
                "name": "ROR"
              }
            ],
            "name": "Hunsicker, Margaret A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kropp, Edward C. Sr.",
          43.39,
          50.64102564,
          37.62376238,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.39,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 54.02,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.19,
                "name": "ROR"
              }
            ],
            "name": "Kropp, Edward C. Sr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McHugh Casey, Elizabeth A.",
          41.42,
          44.38502674,
          39.10891089,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.42,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 55.39,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "McHugh Casey, Elizabeth A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kelly Rebar, Cathleen",
          36.5,
          51.93370166,
          32.01438849,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.58,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.13,
                "name": "ROR"
              }
            ],
            "name": "Kelly Rebar, Cathleen"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nesbitt, Harry J. III",
          36.18,
          46.66666667,
          33.04347826,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.18,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.26,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Nesbitt, Harry J. III"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Augustine, Albert J.",
          36.01,
          62.80487805,
          29.00900901,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.01,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.14,
                "name": "ROR"
              }
            ],
            "name": "Augustine, Albert J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bernhardt, Francis J. III",
          35.87,
          43.5483871,
          31.6872428,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.87,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.71,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.61,
                "name": "ROR"
              }
            ],
            "name": "Bernhardt, Francis J. III"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sobeck, Robert M.",
          35.65,
          52.07100592,
          31.07049608,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.65,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.03,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.28,
                "name": "ROR"
              }
            ],
            "name": "Sobeck, Robert M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Saylor, Maurice H.",
          35.62,
          58.97435897,
          30.16194332,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.62,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 58.47,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Saylor, Maurice H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zaffarano, Patricia Ann",
          35.37,
          47.66839378,
          28.20512821,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.37,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.72,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.15,
                "name": "ROR"
              }
            ],
            "name": "Zaffarano, Patricia Ann"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Price, Juanita Ann",
          35.33,
          44.78527607,
          28.83116883,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.33,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 24.42,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.28,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 21.56,
                "name": "ROR"
              }
            ],
            "name": "Price, Juanita Ann"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Rebar, Cathleen Kelly",
          35.03,
          48.57142857,
          32.17391304,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.03,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.77,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Rebar, Cathleen Kelly"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lukens, Deborah",
          34.92,
          42.46575342,
          31.48148148,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.92,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.54,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.68,
                "name": "ROR"
              }
            ],
            "name": "Lukens, Deborah"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Casillo, Ester J.",
          34.38,
          42.79279279,
          30.35230352,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.38,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.83,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Casillo, Ester J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gallagher, James",
          32.74,
          42.10526316,
          27.12418301,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.74,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.37,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.14,
                "name": "ROR"
              }
            ],
            "name": "Gallagher, James"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McGill, Katherine E.",
          31.77,
          38.46153846,
          28.31050228,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.77,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.24,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.26,
                "name": "ROR"
              }
            ],
            "name": "McGill, Katherine E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Leo, Paul N.",
          31.73,
          45.0617284,
          26.28726287,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.73,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 63.84,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.55,
                "name": "ROR"
              }
            ],
            "name": "Leo, Paul N."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Quinn, Michael P.",
          30.21,
          32.31707317,
          29.44162437,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.21,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.03,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.53,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.53,
                "name": "ROR"
              }
            ],
            "name": "Quinn, Michael P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gadzicki, Walter F. Jr.",
          30.01,
          48.0620155,
          23.55555556,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.01,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 31.46,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.96,
                "name": "ROR"
              }
            ],
            "name": "Gadzicki, Walter F. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hudak Duffy, Andrea",
          27.42,
          36.93693694,
          25.83081571,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.42,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.91,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 24.12,
                "name": "ROR"
              }
            ],
            "name": "Hudak Duffy, Andrea"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Schireson, Henry J.",
          27.41,
          39.22651934,
          20.70175439,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.41,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 67.36,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Schireson, Henry J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Eisner Zucker, Karen",
          27.34,
          31.70731707,
          22.94117647,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.34,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 70.56,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Eisner Zucker, Karen"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hummel Fried, Catherine M.",
          27.24,
          51.92307692,
          21.49122807,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.24,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 68.79,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.17,
                "name": "ROR"
              }
            ],
            "name": "Hummel Fried, Catherine M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Maruszczak, William I.",
          26.84,
          29.84615385,
          23.8961039,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.84,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 69.56,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.27,
                "name": "ROR"
              }
            ],
            "name": "Maruszczak, William I."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Levine, Edward",
          25.51,
          40.46242775,
          22.16748768,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.51,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 22.04,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.12,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 48.38,
                "name": "ROR"
              }
            ],
            "name": "Levine, Edward"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Friedenberg, Jay S.",
          23.6,
          35.4978355,
          19.83193277,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.49,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.93,
                "name": "ROR"
              }
            ],
            "name": "Friedenberg, Jay S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kessler, John D.",
          22.17,
          26.35658915,
          19.82507289,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 22.17,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.69,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 35.76,
                "name": "ROR"
              }
            ],
            "name": "Kessler, John D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Smyth, Joseph A.",
          9.66,
          15.38461538,
          5.673758865,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 9.66,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.56,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.42,
                "name": "ROR"
              }
            ],
            "name": "Smyth, Joseph A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Corso, S. Gerald",
          7.82,
          5.369127517,
          8.71559633,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 7.82,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.38,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.43,
                "name": "ROR"
              }
            ],
            "name": "Corso, S. Gerald"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nicholas, William T.",
          6.73,
          6.976744186,
          6.201550388,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 6.73,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 17.49,
                "name": "ROR"
              }
            ],
            "name": "Nicholas, William T."
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
      32.99299883,
      43.7751004,
      32.341399609999996,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 32.99299883,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 53.85060000000001,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 13.1272,
            "name": "ROR"
          }
        ],
        "name": "Carbon"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Kosciolek, Casimir T.",
          37.44,
          53.84615385,
          36.45251397,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.44,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.57,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 15.99,
                "name": "ROR"
              }
            ],
            "name": "Kosciolek, Casimir T."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Homanko, Joseph D. Sr.",
          37.13,
          41.57303371,
          36.29343629,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.13,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.16,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 6.71,
                "name": "ROR"
              }
            ],
            "name": "Homanko, Joseph D. Sr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Schrantz, Eric M.",
          32.71,
          40.54054054,
          33.10225303,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.71,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 50.31,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 16.98,
                "name": "ROR"
              }
            ],
            "name": "Schrantz, Eric M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Serfass, Steven R.",
          27.97,
          10,
          30.47619048,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.97,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 71.19,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.85,
                "name": "ROR"
              }
            ],
            "name": "Serfass, Steven R."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Matika, Joseph J.",
          27.41,
          37.5,
          27.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.41,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 71.11,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.48,
                "name": "ROR"
              }
            ],
            "name": "Matika, Joseph J."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Kissner, William J.",
          27.02,
          57.14285714,
          25.87719298,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.02,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.93,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 16.05,
                "name": "ROR"
              }
            ],
            "name": "Kissner, William J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lewis, Edward M.",
          20.52,
          44.44444444,
          18.59296482,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 20.52,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.78,
                "name": "ROR"
              }
            ],
            "name": "Lewis, Edward M."
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
      32.79661017,
      35.13011152,
      32.41612358,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 32.79661017,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 49.6091,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.4249,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 17.063200000000002,
            "name": "ROR"
          }
        ],
        "name": "Monroe"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Fluegel, Anthony D.",
          45.39,
          45.39473684,
          46.30872483,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.39,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.26,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 23.46,
                "name": "ROR"
              }
            ],
            "name": "Fluegel, Anthony D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Muth, Michael R.",
          38.07,
          42.68292683,
          36.07954545,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.07,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.61,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Muth, Michael R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Anzini, Kristina",
          37.88,
          43.08510638,
          35.71428571,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.88,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 61.65,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.32,
                "name": "ROR"
              }
            ],
            "name": "Anzini, Kristina"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Riley, Phillip R.",
          37.18,
          33.14917127,
          39.32346723,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.18,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.44,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.38,
                "name": "ROR"
              }
            ],
            "name": "Riley, Phillip R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mancuso, Colleen",
          37.01,
          44.92753623,
          35.86956522,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.01,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.71,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.28,
                "name": "ROR"
              }
            ],
            "name": "Mancuso, Colleen"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Krawitz, Jolana",
          34.63,
          53.84615385,
          30.14256619,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.63,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.78,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 52.52,
                "name": "ROR"
              }
            ],
            "name": "Krawitz, Jolana"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Claypool, Richard",
          29.32,
          28.47222222,
          30.40935673,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.32,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 70.28,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Claypool, Richard"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Germano, Brian",
          27.33,
          25.36585366,
          28.38137472,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.33,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 69.42,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.1,
                "name": "ROR"
              }
            ],
            "name": "Germano, Brian"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Olsen, Thomas E.",
          26.43,
          26.42487047,
          26.87140115,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.43,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 73.43,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.14,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Olsen, Thomas E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Higgins, C. Daniel",
          23.4,
          26.31578947,
          23.70572207,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.64,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 43.77,
                "name": "ROR"
              }
            ],
            "name": "Higgins, C. Daniel"
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
      32.41325938,
      41.069012179999994,
      30.62392673,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 32.41325938,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 49.297000000000004,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.5676,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 17.705099999999998,
            "name": "ROR"
          }
        ],
        "name": "Bucks"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Waltman, John I.",
          46.82,
          61.29032258,
          44.52554745,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.82,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 34.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 19.08,
                "name": "ROR"
              }
            ],
            "name": "Waltman, John I."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wagner, Robert",
          44.98,
          64.88549618,
          39.79166667,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.98,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 18.28,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.16,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.57,
                "name": "ROR"
              }
            ],
            "name": "Wagner, Robert"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Peranteau, Frank W. Sr.",
          43.86,
          59.67741935,
          39.81900452,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.86,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.98,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.35,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.81,
                "name": "ROR"
              }
            ],
            "name": "Peranteau, Frank W. Sr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kline, Joanne V.",
          42.64,
          49.45652174,
          40.37267081,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.64,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 6.98,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.08,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 48.29,
                "name": "ROR"
              }
            ],
            "name": "Kline, Joanne V."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Douple, Mark D.",
          41.26,
          69.11764706,
          37.95309168,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.26,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 58.74,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Douple, Mark D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Schnell, Robert A. Jr.",
          41.03,
          42.85714286,
          42.30769231,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.03,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 22.22,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.75,
                "name": "ROR"
              }
            ],
            "name": "Schnell, Robert A. Jr."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Petrucci, Michael W.",
          40,
          59.42028986,
          36.21794872,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Petrucci, Michael W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Burns, Michael J.",
          37.7,
          47.19101124,
          35.92592593,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 50,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 12.3,
                "name": "ROR"
              }
            ],
            "name": "Burns, Michael J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Finello, Daniel J. Jr.",
          37.11,
          46.15384615,
          35.81730769,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.11,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.11,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.78,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Finello, Daniel J. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Durkin, John J.",
          35.25,
          52.5,
          43.125,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.25,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 63.93,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Durkin, John J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Snow, Maggie",
          33.92,
          61.2244898,
          30.06993007,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.92,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 28.07,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.01,
                "name": "ROR"
              }
            ],
            "name": "Snow, Maggie"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Falcone, Joseph P.",
          33.58,
          38.97338403,
          31.84230478,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.58,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.35,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.05,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.96,
                "name": "ROR"
              }
            ],
            "name": "Falcone, Joseph P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Baranoski, Daniel",
          33.33,
          40.13157895,
          31.56862745,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.33,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 24.59,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.93,
                "name": "ROR"
              }
            ],
            "name": "Baranoski, Daniel"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Deatelhauser, Kenneth E.",
          32.79,
          47.22222222,
          27.40384615,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.79,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.11,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 54.1,
                "name": "ROR"
              }
            ],
            "name": "Deatelhauser, Kenneth E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gallagher, Michael W.",
          32.78,
          38.08139535,
          31.78571429,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.78,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 66.82,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.07,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.33,
                "name": "ROR"
              }
            ],
            "name": "Gallagher, Michael W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Vislosky, Jan",
          32.6,
          37.28813559,
          31.57894737,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 66.74,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.22,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.44,
                "name": "ROR"
              }
            ],
            "name": "Vislosky, Jan"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kelly, John J. Jr.",
          32.3,
          38.06818182,
          30.68391867,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 67.43,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.27,
                "name": "ROR"
              }
            ],
            "name": "Kelly, John J. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gambardella, Gary",
          31.86,
          44.06779661,
          30.40650407,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.86,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 34.65,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.15,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.33,
                "name": "ROR"
              }
            ],
            "name": "Gambardella, Gary"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Seaman, Jean",
          31.31,
          52.05479452,
          27.5242047,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.31,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 17.91,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.23,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.56,
                "name": "ROR"
              }
            ],
            "name": "Seaman, Jean"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Armitage, Regina",
          30.84,
          39.7260274,
          29.3594306,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.84,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.82,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25.34,
                "name": "ROR"
              }
            ],
            "name": "Armitage, Regina"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Baum, Charles W.",
          30.7,
          49.27536232,
          28.83959044,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 69,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.15,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Baum, Charles W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Roth, Robert",
          28.64,
          37.5,
          27.70448549,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.64,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 21,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.36,
                "name": "ROR"
              }
            ],
            "name": "Roth, Robert"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Daly, Philip J.",
          27.21,
          29.41176471,
          24.3902439,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.21,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.35,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 40.44,
                "name": "ROR"
              }
            ],
            "name": "Daly, Philip J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cepparulo, Albert J.",
          25.75,
          10.34482759,
          28.35820896,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.75,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.76,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.59,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.9,
                "name": "ROR"
              }
            ],
            "name": "Cepparulo, Albert J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Benz, William J.",
          17.92,
          29.78723404,
          16.94078947,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 17.92,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 81.48,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.3,
                "name": "ROR"
              }
            ],
            "name": "Benz, William J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Waite, Clyde W.",
          10,
          2.702702703,
          12.14285714,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 10,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.44,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.11,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 24.44,
                "name": "ROR"
              }
            ],
            "name": "Waite, Clyde W."
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
      31.716625590000003,
      50.050454089999995,
      28.61736334,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 31.716625590000003,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 30.687900000000003,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 4.66,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 32.9304,
            "name": "ROR"
          }
        ],
        "name": "Westmoreland"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Pallone, Frank J. Jr.",
          45.75,
          51.83673469,
          42.59012016,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.75,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 24.49,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.08,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.69,
                "name": "ROR"
              }
            ],
            "name": "Pallone, Frank J. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "DeMarchis, Joseph R.",
          45.22,
          59.1954023,
          39.84063745,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.22,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 51.01,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.77,
                "name": "ROR"
              }
            ],
            "name": "DeMarchis, Joseph R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bilik, Mark",
          36.73,
          49.01960784,
          36.01694915,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.73,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.18,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 49.09,
                "name": "ROR"
              }
            ],
            "name": "Bilik, Mark"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dalfonso, Joseph A.",
          35.51,
          47.56554307,
          30.32659409,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.51,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.51,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 21.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.08,
                "name": "ROR"
              }
            ],
            "name": "Dalfonso, Joseph A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Eckels, Roger",
          34.17,
          65.95744681,
          30.15075377,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.17,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.17,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.21,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.46,
                "name": "ROR"
              }
            ],
            "name": "Eckels, Roger"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mansour, Mark Stephen",
          34.01,
          56.03448276,
          31.84165232,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.01,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.73,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 25.44,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.83,
                "name": "ROR"
              }
            ],
            "name": "Mansour, Mark Stephen"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Christner, Charles M.",
          31.97,
          53.16455696,
          28.79581152,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.97,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 17.58,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 40.15,
                "name": "ROR"
              }
            ],
            "name": "Christner, Charles M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Thiel, Denise S.",
          31.55,
          85.18518519,
          27.10280374,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.55,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 26.48,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.97,
                "name": "ROR"
              }
            ],
            "name": "Thiel, Denise S."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Moore, Charles D.",
          30.77,
          57.14285714,
          30.62381853,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.77,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 3.27,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.58,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 61.37,
                "name": "ROR"
              }
            ],
            "name": "Moore, Charles D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kistler, Helen M.",
          30.55,
          38.59649123,
          29.20560748,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.55,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 68.69,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.76,
                "name": "ROR"
              }
            ],
            "name": "Kistler, Helen M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Buczak, Jason",
          29.77,
          59.64912281,
          26.69404517,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.77,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 26.74,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.18,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 43.32,
                "name": "ROR"
              }
            ],
            "name": "Buczak, Jason"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Albert, James",
          29.28,
          42.27642276,
          28.01635992,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.28,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 50.87,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.29,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 19.57,
                "name": "ROR"
              }
            ],
            "name": "Albert, James"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Peck, Yackopec Cheryl J.",
          28.3,
          51.04166667,
          25.98784195,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 71.46,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.12,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.12,
                "name": "ROR"
              }
            ],
            "name": "Peck, Yackopec Cheryl J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Weimer, Douglas Reid",
          27.37,
          55.55555556,
          24.56140351,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.37,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 68.42,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.21,
                "name": "ROR"
              }
            ],
            "name": "Weimer, Douglas Reid"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Falcon, James N.",
          27.1,
          34.375,
          27.75665399,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 44.99,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.02,
                "name": "ROR"
              }
            ],
            "name": "Falcon, James N."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mahady, Michael",
          25.36,
          41.17647059,
          24.26035503,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.36,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 6.73,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 67.92,
                "name": "ROR"
              }
            ],
            "name": "Mahady, Michael"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bompiani, L. Anthony",
          24.78,
          40.69767442,
          22.46376812,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.78,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.82,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.45,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 48.81,
                "name": "ROR"
              }
            ],
            "name": "Bompiani, L. Anthony"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gongaware, Wayne",
          18.59,
          29.6875,
          16.93037975,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 18.59,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 50.14,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 30.56,
                "name": "ROR"
              }
            ],
            "name": "Gongaware, Wayne"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Conway, Charles",
          15.7,
          34.88372093,
          14.07867495,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 15.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 24.73,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.54,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 58.84,
                "name": "ROR"
              }
            ],
            "name": "Conway, Charles"
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
      31.15234375,
      44.7761194,
      29.515418500000003,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 31.15234375,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 5.0806,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 5.8134,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 57.3034,
            "name": "ROR"
          }
        ],
        "name": "Butler"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "McCune, Timothy F.",
          55.34,
          66.66666667,
          60,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.34,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.85,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.04,
                "name": "ROR"
              }
            ],
            "name": "McCune, Timothy F."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Fullerton, William T.",
          44.82,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.82,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.05,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 11.16,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 40.18,
                "name": "ROR"
              }
            ],
            "name": "Fullerton, William T."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kovach, David T.",
          44,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.86,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 7.09,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.14,
                "name": "ROR"
              }
            ],
            "name": "Kovach, David T."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Stoughton, Lewis E.",
          35.74,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.74,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 4.24,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 15.06,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 44.22,
                "name": "ROR"
              }
            ],
            "name": "Stoughton, Lewis E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "O'donnell, Kevin P.",
          32.74,
          50,
          31.06796117,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.74,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.65,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.54,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 61.06,
                "name": "ROR"
              }
            ],
            "name": "O'donnell, Kevin P."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Haggerty, Sue",
          32.66,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.66,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.18,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.23,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.42,
                "name": "ROR"
              }
            ],
            "name": "Haggerty, Sue"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "O'Donnell, William S.",
          30.98,
          33.33333333,
          30.66954644,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.98,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.16,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 59.55,
                "name": "ROR"
              }
            ],
            "name": "O'Donnell, William S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "O'Donnell, Kevin P.",
          25.69,
          42.5,
          24.62809917,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.69,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.76,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.38,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 71.87,
                "name": "ROR"
              }
            ],
            "name": "O'Donnell, Kevin P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Seibel, Wayne D.",
          22.69,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 22.69,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.79,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 18.15,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 44.65,
                "name": "ROR"
              }
            ],
            "name": "Seibel, Wayne D."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Shaffer, William",
          15.72,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 15.72,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.63,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 48.43,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25.79,
                "name": "ROR"
              }
            ],
            "name": "Shaffer, William"
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
      30.18867925,
      43.56060606,
      29.036515619999996,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 30.18867925,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 30.431399999999996,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 14.3297,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 24.8844,
            "name": "ROR"
          }
        ],
        "name": "Adams"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Harvey, Matthew Robert",
          35.2,
          49.29577465,
          33.13609467,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 44.22,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.06,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 17.52,
                "name": "ROR"
              }
            ],
            "name": "Harvey, Matthew Robert"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bowman, Daniel S.",
          33.72,
          44.7761194,
          32.95081967,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.72,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.39,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 26.51,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 27.38,
                "name": "ROR"
              }
            ],
            "name": "Bowman, Daniel S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Beauchat, Mark D.",
          29.13,
          40.6779661,
          27.85571142,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.13,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.12,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 28.24,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.33,
                "name": "ROR"
              }
            ],
            "name": "Beauchat, Mark D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Little, Tony J.",
          25.48,
          42.30769231,
          24.63768116,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.48,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.79,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.28,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.44,
                "name": "ROR"
              }
            ],
            "name": "Little, Tony J."
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
      28.98148148,
      40,
      27.68130746,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 28.98148148,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 26.2963,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.0185,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 41.4815,
            "name": "ROR"
          }
        ],
        "name": "Perry"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "McGuire, Daniel R.",
          46.2,
          60,
          45.34161491,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 4.09,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 49.71,
                "name": "ROR"
              }
            ],
            "name": "McGuire, Daniel R."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Frownfelter, Elizabeth R.",
          46,
          87.5,
          44.21052632,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 45.5,
                "name": "ROR"
              }
            ],
            "name": "Frownfelter, Elizabeth R."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Schechterly, Michael E.",
          16.36,
          25,
          17.05150977,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 16.36,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.67,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.57,
                "name": "ROR"
              }
            ],
            "name": "Schechterly, Michael E."
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
      28.8973384,
      53.33333333,
      28.3197832,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 28.8973384,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 13.054499999999999,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 3.5488,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 53.992399999999996,
            "name": "ROR"
          }
        ],
        "name": "Crawford"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Pendolino, Samuel V.",
          37.42,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.42,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 11.96,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 9.63,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 40.99,
                "name": "ROR"
              }
            ],
            "name": "Pendolino, Samuel V."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nicols, Amy L.",
          33.96,
          55.55555556,
          33.33333333,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.96,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.37,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.37,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 51.31,
                "name": "ROR"
              }
            ],
            "name": "Nicols, Amy L."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Zilhaver, Lincoln S.",
          30.8,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 3.63,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 20.07,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 45.16,
                "name": "ROR"
              }
            ],
            "name": "Zilhaver, Lincoln S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Marwood, Rita J.",
          24.54,
          60,
          40,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.54,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.97,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 58.49,
                "name": "ROR"
              }
            ],
            "name": "Marwood, Rita J."
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
      28.672985779999998,
      31.578947369999998,
      29.27536232,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 28.672985779999998,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 14.691899999999999,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 5.2133,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 51.4218,
            "name": "ROR"
          }
        ],
        "name": "Fulton"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Heming, Tamela M.",
          31.36,
          33.33333333,
          32,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.36,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.42,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 16.95,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.27,
                "name": "ROR"
              }
            ],
            "name": "Heming, Tamela M."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Mellott, Wendy",
          23.74,
          25,
          24.4047619,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.74,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.08,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.51,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 67.68,
                "name": "ROR"
              }
            ],
            "name": "Mellott, Wendy"
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
      28.62318841,
      27.77777778,
      28.68117798,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 28.62318841,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 71.3768,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0,
            "name": "ROR"
          }
        ],
        "name": "Elk"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Martin, James L.",
          26.69,
          40,
          26.99386503,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.69,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 73.31,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Martin, James L."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Jacob, Mark S.",
          25.67,
          25,
          26.29107981,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.67,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 74.33,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Jacob, Mark S."
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
      26.083333330000002,
      46.74115456,
      21.884927639999997,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 26.083333330000002,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 12.062299999999999,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0278,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 61.5898,
            "name": "ROR"
          }
        ],
        "name": "Centre"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Gillette-Walker, Kelley",
          43.8,
          75.3164557,
          36.96808511,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.55,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.44,
                "name": "ROR"
              }
            ],
            "name": "Gillette-Walker, Kelley"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Jordan, Thomas N.",
          40.16,
          72.54901961,
          33.8658147,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.16,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.86,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.98,
                "name": "ROR"
              }
            ],
            "name": "Jordan, Thomas N."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sinclair, Allen W.",
          26.59,
          42.85714286,
          20.71428571,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.59,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.57,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.28,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 59.56,
                "name": "ROR"
              }
            ],
            "name": "Sinclair, Allen W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Prestia, Carmine W. Jr.",
          20,
          33.59375,
          16.22641509,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 20,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.29,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 64.71,
                "name": "ROR"
              }
            ],
            "name": "Prestia, Carmine W. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Lachman, Steven Frederic",
          16.34,
          29.89690722,
          14.19491525,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 16.34,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.43,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 70.06,
                "name": "ROR"
              }
            ],
            "name": "Lachman, Steven Frederic"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Horner, Ronald J.",
          5.93,
          21.27659574,
          3.202846975,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 5.93,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 3.95,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 90.11,
                "name": "ROR"
              }
            ],
            "name": "Horner, Ronald J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nileski, Charity L.",
          0.74,
          7.142857143,
          0.8064516129,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 0.74,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.74,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 98.52,
                "name": "ROR"
              }
            ],
            "name": "Nileski, Charity L."
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
      25.36136662,
      38.20224719,
      23.24159021,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 25.36136662,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 11.958,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 14.4547,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 47.7004,
            "name": "ROR"
          }
        ],
        "name": "Union"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Mensch, Jeffrey L.",
          26.3,
          40,
          26.50176678,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 18.89,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 34.07,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 20.74,
                "name": "ROR"
              }
            ],
            "name": "Mensch, Jeffrey L."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Armbruster, Leo S.",
          16.58,
          23.07692308,
          16.08187135,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 16.58,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 5.87,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.32,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 74.23,
                "name": "ROR"
              }
            ],
            "name": "Armbruster, Leo S."
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
      25,
      69.56521739,
      23.20855615,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 25,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 23.6146,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 46.0809,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 4.643,
            "name": "ROR"
          }
        ],
        "name": "Somerset"
      }
    ],
    "outlier": false,
    "collapseData": [
      {
        "data": [
          "",
          "Stevanus, Sandra L.",
          38.11,
          75,
          34.34782609,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.11,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 26.79,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 33.96,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.13,
                "name": "ROR"
              }
            ],
            "name": "Stevanus, Sandra L."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Mankamyer, Susan",
          25.35,
          80,
          23.4421365,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.35,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.48,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 55.71,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.46,
                "name": "ROR"
              }
            ],
            "name": "Mankamyer, Susan"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Seger, William E.",
          24.46,
          66.66666667,
          24.07407407,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.46,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.54,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 49.64,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.36,
                "name": "ROR"
              }
            ],
            "name": "Seger, William E."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Johnson, Kenneth W.",
          22.53,
          64.1025641,
          20.59259259,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 22.53,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 27.34,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 50.14,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Johnson, Kenneth W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Geary, D Gregory",
          21.9,
          50,
          21.78217822,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 21.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 22.86,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.95,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.9,
                "name": "ROR"
              }
            ],
            "name": "Geary, D Gregory"
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Bell, Douglas McCall",
          19.92,
          50,
          19.84126984,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 19.92,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 20.31,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 49.43,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 9.96,
                "name": "ROR"
              }
            ],
            "name": "Bell, Douglas McCall"
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
      23.36601307,
      75,
      23.24786325,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 23.36601307,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 57.7741,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.9640000000000002,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 16.5303,
            "name": "ROR"
          }
        ],
        "name": "Potter"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "McCleaft, Kari A.",
          27.71,
          50,
          27.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.71,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 71.69,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "McCleaft, Kari A."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Weiss, Delores G.",
          24.06,
          0,
          24.72527473,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.06,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 61.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 14.44,
                "name": "ROR"
              }
            ],
            "name": "Weiss, Delores G."
          }
        ],
        "outlier": true
      },
      {
        "data": [
          "",
          "Easton, Annette L.",
          19.26,
          100,
          18.61471861,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 19.26,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 45.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.92,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.92,
                "name": "ROR"
              }
            ],
            "name": "Easton, Annette L."
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
      21.67832168,
      100,
      25.454545449999998,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 21.67832168,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 78.3217,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0,
            "name": "ROR"
          }
        ],
        "name": "Cameron"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Brown, Barry D.",
          21.28,
          66.66666667,
          37.58865248,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 21.28,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 78.72,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0,
                "name": "ROR"
              }
            ],
            "name": "Brown, Barry D."
          }
        ],
        "outlier": true
      }
    ],
    "isCollapsed": true
  }
];

// https://github.com/deldersveld/topojson/blob/master/countries/us-states/PA-42-pennsylvania-counties.json
export const COUNTY_MAP_DATA = {
  "type": "Topology",
  "transform": {
    "scale": [
      0.0017670448167643974,
      0.0012458904739165544
    ],
    "translate": [
      -80.51993641973256,
      39.71990436019388
    ]
  },
  "arcs": [
    [
      [
        2559,
        958
      ],
      [
        150,
        76
      ],
      [
        -21,
        33
      ],
      [
        42,
        65
      ],
      [
        26,
        -7
      ]
    ],
    [
      [
        2756,
        1125
      ],
      [
        87,
        -107
      ],
      [
        -34,
        -47
      ],
      [
        39,
        -73
      ],
      [
        7,
        -19
      ]
    ],
    [
      [
        2855,
        879
      ],
      [
        -58,
        -12
      ],
      [
        -18,
        -10
      ]
    ],
    [
      [
        2779,
        857
      ],
      [
        -49,
        -14
      ],
      [
        -35,
        -28
      ]
    ],
    [
      [
        2695,
        815
      ],
      [
        -73,
        65
      ],
      [
        -23,
        29
      ],
      [
        -40,
        49
      ]
    ],
    [
      [
        1725,
        180
      ],
      [
        39,
        40
      ],
      [
        123,
        29
      ],
      [
        27,
        32
      ]
    ],
    [
      [
        1914,
        281
      ],
      [
        68,
        -45
      ],
      [
        29,
        -63
      ],
      [
        7,
        -63
      ],
      [
        -26,
        -21
      ],
      [
        1,
        -89
      ]
    ],
    [
      [
        1993,
        0
      ],
      [
        -124,
        0
      ],
      [
        -13,
        0
      ],
      [
        -124,
        0
      ]
    ],
    [
      [
        1732,
        0
      ],
      [
        -7,
        180
      ]
    ],
    [
      [
        0,
        909
      ],
      [
        205,
        3
      ]
    ],
    [
      [
        205,
        912
      ],
      [
        5,
        -146
      ]
    ],
    [
      [
        210,
        766
      ],
      [
        2,
        -48
      ],
      [
        -35,
        -21
      ],
      [
        -7,
        -5
      ],
      [
        -80,
        -84
      ]
    ],
    [
      [
        90,
        608
      ],
      [
        -89,
        0
      ]
    ],
    [
      [
        1,
        608
      ],
      [
        0,
        130
      ],
      [
        -1,
        171
      ]
    ],
    [
      [
        2144,
        1165
      ],
      [
        30,
        -14
      ],
      [
        22,
        1
      ]
    ],
    [
      [
        2196,
        1152
      ],
      [
        12,
        -74
      ],
      [
        28,
        -8
      ],
      [
        31,
        -75
      ],
      [
        -8,
        -61
      ]
    ],
    [
      [
        2259,
        934
      ],
      [
        -16,
        45
      ],
      [
        -49,
        20
      ],
      [
        -85,
        -14
      ],
      [
        33,
        116
      ],
      [
        2,
        64
      ]
    ],
    [
      [
        2343,
        848
      ],
      [
        42,
        21
      ],
      [
        12,
        65
      ],
      [
        44,
        54
      ]
    ],
    [
      [
        2441,
        988
      ],
      [
        101,
        -39
      ],
      [
        17,
        9
      ]
    ],
    [
      [
        2695,
        815
      ],
      [
        -29,
        -22
      ],
      [
        -47,
        -24
      ]
    ],
    [
      [
        2619,
        769
      ],
      [
        -58,
        -30
      ],
      [
        -13,
        -53
      ],
      [
        -87,
        -31
      ],
      [
        -152,
        -32
      ]
    ],
    [
      [
        2309,
        623
      ],
      [
        -54,
        48
      ]
    ],
    [
      [
        2255,
        671
      ],
      [
        -94,
        82
      ]
    ],
    [
      [
        2161,
        753
      ],
      [
        8,
        6
      ],
      [
        174,
        89
      ]
    ],
    [
      [
        1647,
        1829
      ],
      [
        341,
        2
      ],
      [
        24,
        0
      ],
      [
        22,
        0
      ]
    ],
    [
      [
        2034,
        1831
      ],
      [
        29,
        -325
      ]
    ],
    [
      [
        2063,
        1506
      ],
      [
        -48,
        -36
      ],
      [
        -362,
        -8
      ]
    ],
    [
      [
        1653,
        1462
      ],
      [
        -2,
        117
      ],
      [
        -2,
        157
      ],
      [
        -2,
        93
      ]
    ],
    [
      [
        1790,
        873
      ],
      [
        235,
        65
      ],
      [
        80,
        -5
      ]
    ],
    [
      [
        2105,
        933
      ],
      [
        1,
        -3
      ],
      [
        -29,
        -55
      ],
      [
        -8,
        -83
      ],
      [
        -43,
        -54
      ]
    ],
    [
      [
        2026,
        738
      ],
      [
        -96,
        42
      ],
      [
        -101,
        2
      ]
    ],
    [
      [
        1829,
        782
      ],
      [
        -37,
        6
      ],
      [
        -2,
        85
      ]
    ],
    [
      [
        906,
        1829
      ],
      [
        182,
        1
      ],
      [
        163,
        -1
      ],
      [
        21,
        0
      ],
      [
        37,
        0
      ]
    ],
    [
      [
        1309,
        1829
      ],
      [
        2,
        -306
      ]
    ],
    [
      [
        1311,
        1523
      ],
      [
        -118,
        -1
      ],
      [
        -4,
        -11
      ]
    ],
    [
      [
        1189,
        1511
      ],
      [
        -37,
        22
      ],
      [
        -267,
        -5
      ]
    ],
    [
      [
        885,
        1528
      ],
      [
        22,
        174
      ],
      [
        -1,
        127
      ]
    ],
    [
      [
        2855,
        879
      ],
      [
        52,
        13
      ],
      [
        50,
        25
      ],
      [
        43,
        53
      ],
      [
        54,
        30
      ]
    ],
    [
      [
        3054,
        1000
      ],
      [
        14,
        -31
      ],
      [
        19,
        -33
      ],
      [
        -15,
        -29
      ],
      [
        -10,
        -47
      ],
      [
        -1,
        0
      ],
      [
        -38,
        -21
      ],
      [
        -8,
        -39
      ],
      [
        0,
        -31
      ],
      [
        1,
        -32
      ],
      [
        1,
        -23
      ]
    ],
    [
      [
        3017,
        714
      ],
      [
        -39,
        -22
      ],
      [
        -43,
        -36
      ]
    ],
    [
      [
        2935,
        656
      ],
      [
        -40,
        36
      ],
      [
        9,
        41
      ],
      [
        -53,
        19
      ],
      [
        -28,
        64
      ],
      [
        -44,
        41
      ]
    ],
    [
      [
        368,
        383
      ],
      [
        50,
        25
      ],
      [
        -1,
        70
      ],
      [
        11,
        60
      ],
      [
        24,
        15
      ],
      [
        10,
        20
      ],
      [
        1,
        74
      ],
      [
        -11,
        13
      ],
      [
        -15,
        8
      ],
      [
        -10,
        -2
      ],
      [
        0,
        1
      ],
      [
        -3,
        10
      ],
      [
        -2,
        5
      ],
      [
        1,
        9
      ],
      [
        0,
        3
      ],
      [
        5,
        7
      ],
      [
        8,
        5
      ],
      [
        21,
        17
      ],
      [
        11,
        40
      ]
    ],
    [
      [
        468,
        763
      ],
      [
        14,
        8
      ],
      [
        124,
        -120
      ]
    ],
    [
      [
        606,
        651
      ],
      [
        -2,
        -37
      ],
      [
        33,
        -22
      ],
      [
        135,
        -36
      ],
      [
        20,
        -33
      ],
      [
        58,
        39
      ],
      [
        24,
        -19
      ]
    ],
    [
      [
        874,
        543
      ],
      [
        -37,
        -75
      ],
      [
        -9,
        -14
      ]
    ],
    [
      [
        828,
        454
      ],
      [
        -18,
        -35
      ],
      [
        -53,
        -105
      ],
      [
        -63,
        -57
      ]
    ],
    [
      [
        694,
        257
      ],
      [
        -105,
        83
      ],
      [
        -91,
        -44
      ],
      [
        -59,
        32
      ],
      [
        -75,
        -1
      ]
    ],
    [
      [
        364,
        327
      ],
      [
        -15,
        20
      ],
      [
        -1,
        4
      ],
      [
        3,
        4
      ],
      [
        4,
        2
      ],
      [
        3,
        0
      ],
      [
        10,
        -2
      ],
      [
        0,
        28
      ]
    ],
    [
      [
        2309,
        623
      ],
      [
        56,
        -49
      ],
      [
        20,
        -17
      ],
      [
        57,
        -42
      ],
      [
        30,
        -36
      ]
    ],
    [
      [
        2472,
        479
      ],
      [
        -88,
        -49
      ],
      [
        -90,
        -22
      ],
      [
        -56,
        -25
      ]
    ],
    [
      [
        2238,
        383
      ],
      [
        -7,
        17
      ],
      [
        -56,
        206
      ],
      [
        80,
        65
      ]
    ],
    [
      [
        2063,
        1506
      ],
      [
        35,
        -5
      ]
    ],
    [
      [
        2098,
        1501
      ],
      [
        36,
        -148
      ],
      [
        89,
        -82
      ],
      [
        82,
        -23
      ]
    ],
    [
      [
        2305,
        1248
      ],
      [
        -82,
        -94
      ],
      [
        -27,
        -2
      ]
    ],
    [
      [
        2144,
        1165
      ],
      [
        -86,
        -12
      ],
      [
        -7,
        -14
      ]
    ],
    [
      [
        2051,
        1139
      ],
      [
        -36,
        7
      ],
      [
        -10,
        -48
      ],
      [
        -94,
        -16
      ]
    ],
    [
      [
        1911,
        1082
      ],
      [
        -101,
        121
      ],
      [
        -116,
        112
      ],
      [
        -40,
        66
      ],
      [
        0,
        30
      ]
    ],
    [
      [
        1654,
        1411
      ],
      [
        -1,
        51
      ]
    ],
    [
      [
        1786,
        905
      ],
      [
        48,
        50
      ],
      [
        77,
        108
      ]
    ],
    [
      [
        1911,
        1063
      ],
      [
        0,
        19
      ]
    ],
    [
      [
        2051,
        1139
      ],
      [
        21,
        -53
      ],
      [
        3,
        -126
      ],
      [
        30,
        -27
      ]
    ],
    [
      [
        1790,
        873
      ],
      [
        -4,
        32
      ]
    ],
    [
      [
        295,
        1420
      ],
      [
        96,
        106
      ],
      [
        80,
        -3
      ],
      [
        25,
        0
      ],
      [
        18,
        5
      ]
    ],
    [
      [
        514,
        1528
      ],
      [
        57,
        0
      ]
    ],
    [
      [
        571,
        1528
      ],
      [
        0,
        -127
      ],
      [
        19,
        -21
      ],
      [
        0,
        -43
      ]
    ],
    [
      [
        590,
        1337
      ],
      [
        0,
        -40
      ],
      [
        -71,
        -12
      ],
      [
        -52,
        -119
      ]
    ],
    [
      [
        467,
        1166
      ],
      [
        -172,
        -1
      ]
    ],
    [
      [
        295,
        1165
      ],
      [
        0,
        255
      ]
    ],
    [
      [
        2383,
        1276
      ],
      [
        15,
        53
      ]
    ],
    [
      [
        2398,
        1329
      ],
      [
        157,
        7
      ],
      [
        96,
        34
      ]
    ],
    [
      [
        2651,
        1370
      ],
      [
        22,
        -39
      ],
      [
        20,
        -14
      ],
      [
        42,
        -18
      ],
      [
        19,
        -65
      ],
      [
        5,
        -66
      ],
      [
        25,
        -11
      ]
    ],
    [
      [
        2784,
        1157
      ],
      [
        -28,
        -32
      ]
    ],
    [
      [
        2441,
        988
      ],
      [
        -12,
        150
      ],
      [
        -28,
        -5
      ],
      [
        -23,
        61
      ],
      [
        5,
        82
      ]
    ],
    [
      [
        2098,
        1501
      ],
      [
        336,
        -39
      ]
    ],
    [
      [
        2434,
        1462
      ],
      [
        -5,
        -25
      ],
      [
        -31,
        -108
      ]
    ],
    [
      [
        2383,
        1276
      ],
      [
        -56,
        -1
      ],
      [
        -22,
        -27
      ]
    ],
    [
      [
        1311,
        1523
      ],
      [
        86,
        -114
      ],
      [
        35,
        -1
      ]
    ],
    [
      [
        1432,
        1408
      ],
      [
        0,
        -86
      ],
      [
        -59,
        -121
      ]
    ],
    [
      [
        1373,
        1201
      ],
      [
        -81,
        11
      ]
    ],
    [
      [
        1292,
        1212
      ],
      [
        -10,
        140
      ],
      [
        -94,
        0
      ],
      [
        1,
        159
      ]
    ],
    [
      [
        2629,
        335
      ],
      [
        74,
        64
      ],
      [
        26,
        20
      ]
    ],
    [
      [
        2729,
        419
      ],
      [
        78,
        -26
      ],
      [
        55,
        -85
      ],
      [
        3,
        -12
      ],
      [
        54,
        -18
      ]
    ],
    [
      [
        2919,
        278
      ],
      [
        -42,
        -65
      ],
      [
        -72,
        -67
      ],
      [
        -20,
        -22
      ],
      [
        2,
        -32
      ]
    ],
    [
      [
        2787,
        92
      ],
      [
        -39,
        -10
      ],
      [
        -30,
        -24
      ],
      [
        -21,
        -27
      ],
      [
        -11,
        -29
      ],
      [
        -9,
        0
      ],
      [
        -13,
        0
      ],
      [
        -183,
        -1
      ]
    ],
    [
      [
        2481,
        1
      ],
      [
        19,
        3
      ],
      [
        30,
        62
      ],
      [
        18,
        25
      ],
      [
        16,
        31
      ],
      [
        -3,
        65
      ],
      [
        33,
        68
      ],
      [
        -4,
        55
      ],
      [
        39,
        25
      ]
    ],
    [
      [
        1053,
        420
      ],
      [
        4,
        31
      ],
      [
        18,
        37
      ]
    ],
    [
      [
        1075,
        488
      ],
      [
        97,
        -67
      ],
      [
        8,
        47
      ],
      [
        82,
        -49
      ],
      [
        18,
        45
      ]
    ],
    [
      [
        1280,
        464
      ],
      [
        12,
        -59
      ],
      [
        58,
        -47
      ]
    ],
    [
      [
        1350,
        358
      ],
      [
        -41,
        -64
      ],
      [
        14,
        -22
      ],
      [
        -66,
        -187
      ],
      [
        -47,
        -83
      ]
    ],
    [
      [
        1210,
        2
      ],
      [
        -194,
        1
      ],
      [
        -48,
        0
      ]
    ],
    [
      [
        968,
        3
      ],
      [
        29,
        80
      ],
      [
        -3,
        187
      ],
      [
        13,
        11
      ],
      [
        46,
        139
      ]
    ],
    [
      [
        1370,
        2
      ],
      [
        54,
        84
      ],
      [
        47,
        139
      ],
      [
        32,
        49
      ]
    ],
    [
      [
        1503,
        274
      ],
      [
        54,
        115
      ],
      [
        37,
        48
      ]
    ],
    [
      [
        1594,
        437
      ],
      [
        18,
        21
      ]
    ],
    [
      [
        1612,
        458
      ],
      [
        39,
        -50
      ],
      [
        -7,
        -24
      ]
    ],
    [
      [
        1644,
        384
      ],
      [
        47,
        -120
      ],
      [
        44,
        -61
      ],
      [
        -10,
        -23
      ]
    ],
    [
      [
        1732,
        0
      ],
      [
        -5,
        0
      ],
      [
        -1,
        0
      ],
      [
        -169,
        1
      ],
      [
        -174,
        1
      ],
      [
        -13,
        0
      ]
    ],
    [
      [
        2935,
        656
      ],
      [
        -43,
        -39
      ],
      [
        -42,
        -56
      ]
    ],
    [
      [
        2850,
        561
      ],
      [
        -4,
        3
      ],
      [
        -22,
        20
      ]
    ],
    [
      [
        2824,
        584
      ],
      [
        -24,
        21
      ],
      [
        -181,
        164
      ]
    ],
    [
      [
        1606,
        811
      ],
      [
        17,
        12
      ],
      [
        163,
        82
      ]
    ],
    [
      [
        1829,
        782
      ],
      [
        -114,
        -63
      ],
      [
        -5,
        -27
      ],
      [
        -144,
        -163
      ]
    ],
    [
      [
        1566,
        529
      ],
      [
        -5,
        -8
      ],
      [
        -86,
        24
      ],
      [
        55,
        82
      ],
      [
        -14,
        40
      ],
      [
        87,
        101
      ],
      [
        3,
        43
      ]
    ],
    [
      [
        2850,
        561
      ],
      [
        136,
        -116
      ],
      [
        129,
        -109
      ]
    ],
    [
      [
        3115,
        336
      ],
      [
        -52,
        -72
      ],
      [
        -11,
        5
      ],
      [
        -55,
        31
      ],
      [
        -23,
        -32
      ],
      [
        33,
        -34
      ],
      [
        -24,
        -17
      ],
      [
        -16,
        -11
      ]
    ],
    [
      [
        2967,
        206
      ],
      [
        -20,
        35
      ],
      [
        -21,
        26
      ],
      [
        -7,
        11
      ]
    ],
    [
      [
        2729,
        419
      ],
      [
        33,
        57
      ],
      [
        62,
        108
      ]
    ],
    [
      [
        1612,
        458
      ],
      [
        74,
        88
      ],
      [
        203,
        146
      ],
      [
        132,
        37
      ]
    ],
    [
      [
        2021,
        729
      ],
      [
        -25,
        -48
      ],
      [
        23,
        -85
      ],
      [
        -36,
        -30
      ],
      [
        -3,
        -47
      ],
      [
        59,
        -28
      ],
      [
        1,
        -2
      ]
    ],
    [
      [
        2040,
        489
      ],
      [
        -33,
        -15
      ],
      [
        -62,
        -7
      ],
      [
        -88,
        -14
      ],
      [
        -24,
        -6
      ],
      [
        -79,
        -17
      ],
      [
        34,
        47
      ],
      [
        -139,
        -103
      ],
      [
        -5,
        10
      ]
    ],
    [
      [
        3115,
        336
      ],
      [
        34,
        -35
      ],
      [
        -14,
        -24
      ],
      [
        4,
        -15
      ]
    ],
    [
      [
        3139,
        262
      ],
      [
        -10,
        -7
      ],
      [
        -39,
        -36
      ],
      [
        0,
        0
      ],
      [
        -34,
        -22
      ],
      [
        -9,
        -15
      ],
      [
        1,
        -40
      ],
      [
        -4,
        -2
      ],
      [
        -24,
        -10
      ],
      [
        -16,
        -12
      ],
      [
        -5,
        -5
      ],
      [
        -22,
        -5
      ]
    ],
    [
      [
        2977,
        108
      ],
      [
        -3,
        22
      ],
      [
        10,
        26
      ],
      [
        3,
        15
      ],
      [
        4,
        4
      ],
      [
        -10,
        9
      ],
      [
        2,
        12
      ],
      [
        -10,
        1
      ],
      [
        -8,
        8
      ],
      [
        2,
        1
      ]
    ],
    [
      [
        2026,
        738
      ],
      [
        -5,
        -9
      ]
    ],
    [
      [
        1594,
        437
      ],
      [
        -28,
        92
      ]
    ],
    [
      [
        2977,
        108
      ],
      [
        -19,
        -5
      ],
      [
        -28,
        -2
      ],
      [
        -5,
        -4
      ],
      [
        -22,
        -19
      ],
      [
        -14,
        -12
      ],
      [
        -38,
        22
      ],
      [
        -50,
        8
      ],
      [
        -14,
        -4
      ]
    ],
    [
      [
        2343,
        848
      ],
      [
        -17,
        46
      ],
      [
        -51,
        -7
      ],
      [
        -16,
        47
      ]
    ],
    [
      [
        590,
        1337
      ],
      [
        44,
        0
      ],
      [
        0,
        40
      ],
      [
        109,
        -4
      ],
      [
        -1,
        -80
      ]
    ],
    [
      [
        742,
        1293
      ],
      [
        -1,
        -176
      ],
      [
        -2,
        -49
      ]
    ],
    [
      [
        739,
        1068
      ],
      [
        -40,
        -34
      ],
      [
        -190,
        -26
      ],
      [
        -33,
        112
      ],
      [
        -6,
        44
      ]
    ],
    [
      [
        470,
        1164
      ],
      [
        -3,
        2
      ]
    ],
    [
      [
        1228,
        807
      ],
      [
        -6,
        6
      ]
    ],
    [
      [
        1222,
        813
      ],
      [
        127,
        8
      ],
      [
        11,
        -3
      ]
    ],
    [
      [
        1360,
        818
      ],
      [
        -60,
        -51
      ],
      [
        32,
        -46
      ],
      [
        -18,
        -48
      ],
      [
        38,
        -61
      ],
      [
        -34,
        -72
      ],
      [
        -31,
        -59
      ],
      [
        -7,
        -17
      ]
    ],
    [
      [
        1075,
        488
      ],
      [
        32,
        35
      ],
      [
        4,
        30
      ],
      [
        9,
        78
      ],
      [
        31,
        28
      ],
      [
        77,
        148
      ]
    ],
    [
      [
        2629,
        335
      ],
      [
        -96,
        88
      ],
      [
        -28,
        25
      ],
      [
        -33,
        31
      ]
    ],
    [
      [
        3017,
        714
      ],
      [
        0,
        -13
      ],
      [
        1,
        -19
      ],
      [
        28,
        5
      ],
      [
        33,
        -22
      ],
      [
        9,
        -54
      ],
      [
        -4,
        -21
      ],
      [
        8,
        -31
      ],
      [
        18,
        -10
      ],
      [
        31,
        -3
      ],
      [
        13,
        -34
      ],
      [
        10,
        -14
      ],
      [
        14,
        -20
      ],
      [
        27,
        -30
      ],
      [
        18,
        -29
      ],
      [
        36,
        -34
      ],
      [
        7,
        -12
      ],
      [
        15,
        -25
      ],
      [
        -2,
        -1
      ],
      [
        -25,
        -18
      ],
      [
        -32,
        -5
      ],
      [
        -21,
        -33
      ],
      [
        -39,
        -11
      ],
      [
        -23,
        -18
      ]
    ],
    [
      [
        0,
        1709
      ],
      [
        177,
        0
      ],
      [
        298,
        2
      ],
      [
        39,
        -1
      ]
    ],
    [
      [
        514,
        1710
      ],
      [
        0,
        -182
      ]
    ],
    [
      [
        295,
        1420
      ],
      [
        -72,
        -7
      ],
      [
        -223,
        7
      ]
    ],
    [
      [
        0,
        1420
      ],
      [
        0,
        8
      ],
      [
        0,
        137
      ],
      [
        0,
        144
      ]
    ],
    [
      [
        2481,
        1
      ],
      [
        -55,
        0
      ],
      [
        0,
        0
      ],
      [
        -3,
        0
      ]
    ],
    [
      [
        2423,
        1
      ],
      [
        -133,
        182
      ],
      [
        -24,
        56
      ],
      [
        -10,
        27
      ],
      [
        -73,
        10
      ],
      [
        -33,
        45
      ]
    ],
    [
      [
        2150,
        321
      ],
      [
        13,
        29
      ],
      [
        11,
        -6
      ],
      [
        64,
        39
      ]
    ],
    [
      [
        1309,
        1829
      ],
      [
        99,
        1
      ],
      [
        113,
        -1
      ],
      [
        47,
        0
      ],
      [
        79,
        0
      ]
    ],
    [
      [
        1654,
        1411
      ],
      [
        -222,
        -3
      ]
    ],
    [
      [
        514,
        1710
      ],
      [
        1,
        119
      ]
    ],
    [
      [
        515,
        1829
      ],
      [
        78,
        0
      ],
      [
        232,
        0
      ],
      [
        44,
        0
      ],
      [
        37,
        0
      ]
    ],
    [
      [
        885,
        1528
      ],
      [
        -314,
        0
      ]
    ],
    [
      [
        2021,
        729
      ],
      [
        17,
        -19
      ],
      [
        123,
        43
      ]
    ],
    [
      [
        2150,
        321
      ],
      [
        -20,
        46
      ],
      [
        -39,
        20
      ],
      [
        -8,
        16
      ],
      [
        -11,
        4
      ]
    ],
    [
      [
        2072,
        407
      ],
      [
        -15,
        16
      ],
      [
        -22,
        34
      ],
      [
        5,
        32
      ]
    ],
    [
      [
        0,
        1127
      ],
      [
        148,
        3
      ],
      [
        63,
        -12
      ],
      [
        29,
        -35
      ]
    ],
    [
      [
        240,
        1083
      ],
      [
        -39,
        -56
      ],
      [
        1,
        -49
      ],
      [
        3,
        -66
      ]
    ],
    [
      [
        0,
        909
      ],
      [
        0,
        39
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        65
      ],
      [
        0,
        109
      ]
    ],
    [
      [
        2475,
        1829
      ],
      [
        23,
        0
      ],
      [
        133,
        0
      ],
      [
        180,
        0
      ],
      [
        39,
        1
      ]
    ],
    [
      [
        2850,
        1830
      ],
      [
        12,
        -288
      ]
    ],
    [
      [
        2862,
        1542
      ],
      [
        -146,
        1
      ]
    ],
    [
      [
        2716,
        1543
      ],
      [
        -214,
        1
      ],
      [
        -10,
        6
      ]
    ],
    [
      [
        2492,
        1550
      ],
      [
        -17,
        279
      ]
    ],
    [
      [
        2784,
        1157
      ],
      [
        23,
        36
      ],
      [
        30,
        21
      ]
    ],
    [
      [
        2837,
        1214
      ],
      [
        83,
        5
      ]
    ],
    [
      [
        2920,
        1219
      ],
      [
        30,
        2
      ],
      [
        100,
        8
      ],
      [
        -15,
        -81
      ],
      [
        45,
        -8
      ],
      [
        28,
        -49
      ],
      [
        20,
        11
      ]
    ],
    [
      [
        3128,
        1102
      ],
      [
        -13,
        -26
      ],
      [
        -31,
        -34
      ],
      [
        -36,
        -30
      ],
      [
        6,
        -12
      ]
    ],
    [
      [
        468,
        763
      ],
      [
        2,
        401
      ]
    ],
    [
      [
        739,
        1068
      ],
      [
        2,
        -15
      ],
      [
        -2,
        -96
      ]
    ],
    [
      [
        739,
        957
      ],
      [
        0,
        -109
      ],
      [
        -133,
        -197
      ]
    ],
    [
      [
        2434,
        1462
      ],
      [
        12,
        85
      ],
      [
        46,
        3
      ]
    ],
    [
      [
        2716,
        1543
      ],
      [
        -30,
        -110
      ],
      [
        -35,
        -63
      ]
    ],
    [
      [
        240,
        1083
      ],
      [
        55,
        82
      ]
    ],
    [
      [
        468,
        763
      ],
      [
        -258,
        3
      ]
    ],
    [
      [
        1360,
        818
      ],
      [
        98,
        -38
      ],
      [
        67,
        42
      ],
      [
        81,
        -11
      ]
    ],
    [
      [
        1503,
        274
      ],
      [
        -35,
        34
      ],
      [
        -118,
        50
      ]
    ],
    [
      [
        0,
        1134
      ],
      [
        1,
        80
      ],
      [
        0,
        81
      ],
      [
        -1,
        125
      ]
    ],
    [
      [
        0,
        1127
      ],
      [
        0,
        7
      ]
    ],
    [
      [
        1911,
        1063
      ],
      [
        -111,
        -45
      ],
      [
        -96,
        -20
      ],
      [
        -64,
        102
      ],
      [
        -68,
        13
      ],
      [
        -32,
        60
      ],
      [
        -53,
        -3
      ],
      [
        -3,
        60
      ],
      [
        -43,
        -39
      ],
      [
        -17,
        -48
      ],
      [
        -20,
        7
      ]
    ],
    [
      [
        1404,
        1150
      ],
      [
        -13,
        17
      ],
      [
        -18,
        34
      ]
    ],
    [
      [
        2072,
        407
      ],
      [
        -35,
        -14
      ],
      [
        8,
        -35
      ],
      [
        -60,
        -14
      ],
      [
        -9,
        -1
      ],
      [
        -62,
        -62
      ]
    ],
    [
      [
        0,
        1812
      ],
      [
        108,
        47
      ],
      [
        99,
        63
      ],
      [
        10,
        28
      ],
      [
        27,
        19
      ],
      [
        38,
        -8
      ],
      [
        1,
        0
      ],
      [
        54,
        36
      ],
      [
        45,
        22
      ],
      [
        47,
        28
      ],
      [
        0,
        -112
      ],
      [
        1,
        -106
      ],
      [
        85,
        0
      ]
    ],
    [
      [
        0,
        1709
      ],
      [
        0,
        103
      ]
    ],
    [
      [
        885,
        1528
      ],
      [
        -2,
        -150
      ],
      [
        -59,
        13
      ],
      [
        -17,
        -90
      ]
    ],
    [
      [
        807,
        1301
      ],
      [
        -7,
        -12
      ],
      [
        -58,
        4
      ]
    ],
    [
      [
        0,
        238
      ],
      [
        0,
        115
      ],
      [
        1,
        147
      ],
      [
        0,
        46
      ],
      [
        0,
        62
      ]
    ],
    [
      [
        90,
        608
      ],
      [
        101,
        -116
      ],
      [
        152,
        -64
      ],
      [
        -26,
        -30
      ],
      [
        35,
        -17
      ],
      [
        16,
        2
      ]
    ],
    [
      [
        364,
        327
      ],
      [
        22,
        -29
      ],
      [
        -22,
        -44
      ],
      [
        -68,
        -42
      ]
    ],
    [
      [
        296,
        212
      ],
      [
        -29,
        -4
      ],
      [
        5,
        14
      ],
      [
        -21,
        1
      ],
      [
        -171,
        -3
      ],
      [
        -69,
        -32
      ],
      [
        -11,
        7
      ]
    ],
    [
      [
        0,
        195
      ],
      [
        0,
        43
      ]
    ],
    [
      [
        296,
        212
      ],
      [
        42,
        -50
      ],
      [
        4,
        -161
      ]
    ],
    [
      [
        342,
        1
      ],
      [
        -71,
        0
      ],
      [
        -20,
        0
      ],
      [
        -195,
        0
      ],
      [
        -56,
        0
      ],
      [
        0,
        194
      ]
    ],
    [
      [
        694,
        257
      ],
      [
        -39,
        -74
      ],
      [
        -31,
        -75
      ],
      [
        35,
        -59
      ],
      [
        -30,
        -37
      ],
      [
        9,
        -11
      ]
    ],
    [
      [
        638,
        1
      ],
      [
        -47,
        0
      ],
      [
        -163,
        0
      ],
      [
        -86,
        0
      ]
    ],
    [
      [
        807,
        1301
      ],
      [
        69,
        28
      ],
      [
        134,
        -91
      ],
      [
        14,
        -49
      ]
    ],
    [
      [
        1024,
        1189
      ],
      [
        -32,
        1
      ],
      [
        -22,
        -57
      ],
      [
        0,
        -181
      ]
    ],
    [
      [
        970,
        952
      ],
      [
        -231,
        5
      ]
    ],
    [
      [
        3098,
        1512
      ],
      [
        1,
        -23
      ],
      [
        35,
        -63
      ],
      [
        52,
        -33
      ],
      [
        51,
        -20
      ],
      [
        25,
        -3
      ],
      [
        12,
        -1
      ],
      [
        22,
        -55
      ],
      [
        -37,
        -14
      ],
      [
        -31,
        -35
      ],
      [
        -29,
        -55
      ],
      [
        -22,
        -58
      ],
      [
        -42,
        -36
      ],
      [
        -2,
        -4
      ],
      [
        -5,
        -10
      ]
    ],
    [
      [
        2920,
        1219
      ],
      [
        28,
        74
      ],
      [
        -23,
        29
      ],
      [
        48,
        4
      ],
      [
        125,
        186
      ]
    ],
    [
      [
        1222,
        813
      ],
      [
        -9,
        18
      ],
      [
        53,
        78
      ],
      [
        19,
        3
      ],
      [
        46,
        85
      ],
      [
        51,
        -2
      ],
      [
        12,
        35
      ],
      [
        -32,
        89
      ],
      [
        42,
        31
      ]
    ],
    [
      [
        1370,
        2
      ],
      [
        -138,
        0
      ],
      [
        0,
        0
      ],
      [
        -22,
        0
      ]
    ],
    [
      [
        1292,
        1212
      ],
      [
        -232,
        19
      ],
      [
        -36,
        -42
      ]
    ],
    [
      [
        1228,
        807
      ],
      [
        -256,
        0
      ]
    ],
    [
      [
        972,
        807
      ],
      [
        -3,
        15
      ],
      [
        1,
        130
      ]
    ],
    [
      [
        2034,
        1831
      ],
      [
        208,
        -1
      ],
      [
        1,
        0
      ],
      [
        48,
        -1
      ],
      [
        6,
        0
      ],
      [
        178,
        0
      ]
    ],
    [
      [
        828,
        454
      ],
      [
        73,
        0
      ],
      [
        24,
        -33
      ],
      [
        128,
        -1
      ]
    ],
    [
      [
        968,
        3
      ],
      [
        -69,
        -1
      ],
      [
        -65,
        0
      ],
      [
        -196,
        -1
      ]
    ],
    [
      [
        2862,
        1542
      ],
      [
        12,
        -307
      ],
      [
        -37,
        -21
      ]
    ],
    [
      [
        874,
        543
      ],
      [
        79,
        213
      ],
      [
        14,
        45
      ],
      [
        5,
        6
      ]
    ],
    [
      [
        2423,
        1
      ],
      [
        -102,
        0
      ],
      [
        -85,
        0
      ],
      [
        -83,
        0
      ],
      [
        -40,
        0
      ],
      [
        -116,
        -1
      ],
      [
        -4,
        0
      ]
    ],
    [
      [
        2850,
        1830
      ],
      [
        4,
        0
      ],
      [
        66,
        -5
      ],
      [
        11,
        -1
      ],
      [
        28,
        -36
      ],
      [
        16,
        -50
      ],
      [
        41,
        -18
      ],
      [
        25,
        -10
      ],
      [
        19,
        -8
      ],
      [
        22,
        -31
      ],
      [
        11,
        -40
      ],
      [
        3,
        -89
      ],
      [
        2,
        -30
      ]
    ]
  ],
  "objects": {
    "cb_2015_pennsylvania_county_20m": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "arcs": [
            [
              0,
              1,
              2,
              3,
              4
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "025",
            "COUNTYNS": "01213664",
            "AFFGEOID": "0500000US42025",
            "GEOID": "42025",
            "NAME": "Carbon",
            "LSAD": "06",
            "ALAND": 987977576,
            "AWATER": 15349904
          }
        },
        {
          "arcs": [
            [
              5,
              6,
              7,
              8
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "001",
            "COUNTYNS": "01213656",
            "AFFGEOID": "0500000US42001",
            "GEOID": "42001",
            "NAME": "Adams",
            "LSAD": "06",
            "ALAND": 1343400048,
            "AWATER": 7883930
          }
        },
        {
          "arcs": [
            [
              9,
              10,
              11,
              12,
              13
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "007",
            "COUNTYNS": "01214112",
            "AFFGEOID": "0500000US42007",
            "GEOID": "42007",
            "NAME": "Beaver",
            "LSAD": "06",
            "ALAND": 1125901160,
            "AWATER": 24165972
          }
        },
        {
          "arcs": [
            [
              14,
              15,
              16
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "093",
            "COUNTYNS": "01213681",
            "AFFGEOID": "0500000US42093",
            "GEOID": "42093",
            "NAME": "Montour",
            "LSAD": "06",
            "ALAND": 337326238,
            "AWATER": 5407947
          }
        },
        {
          "arcs": [
            [
              17,
              18,
              -5,
              19,
              20,
              21,
              22,
              23
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "107",
            "COUNTYNS": "01213685",
            "AFFGEOID": "0500000US42107",
            "GEOID": "42107",
            "NAME": "Schuylkill",
            "LSAD": "06",
            "ALAND": 2016645898,
            "AWATER": 10834897
          }
        },
        {
          "arcs": [
            [
              24,
              25,
              26,
              27
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "117",
            "COUNTYNS": "01209189",
            "AFFGEOID": "0500000US42117",
            "GEOID": "42117",
            "NAME": "Tioga",
            "LSAD": "06",
            "ALAND": 2936469322,
            "AWATER": 8257078
          }
        },
        {
          "arcs": [
            [
              28,
              29,
              30,
              31
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "109",
            "COUNTYNS": "01213686",
            "AFFGEOID": "0500000US42109",
            "GEOID": "42109",
            "NAME": "Snyder",
            "LSAD": "06",
            "ALAND": 851462481,
            "AWATER": 7173377
          }
        },
        {
          "arcs": [
            [
              32,
              33,
              34,
              35,
              36
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "083",
            "COUNTYNS": "01210235",
            "AFFGEOID": "0500000US42083",
            "GEOID": "42083",
            "NAME": "McKean",
            "LSAD": "06",
            "ALAND": 2536106035,
            "AWATER": 13010718
          }
        },
        {
          "arcs": [
            [
              37,
              38,
              39,
              40,
              -3
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "095",
            "COUNTYNS": "01209185",
            "AFFGEOID": "0500000US42095",
            "GEOID": "42095",
            "NAME": "Northampton",
            "LSAD": "06",
            "ALAND": 957444537,
            "AWATER": 20005867
          }
        },
        {
          "arcs": [
            [
              41,
              42,
              43,
              44,
              45,
              46,
              47
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "129",
            "COUNTYNS": "01209191",
            "AFFGEOID": "0500000US42129",
            "GEOID": "42129",
            "NAME": "Westmoreland",
            "LSAD": "06",
            "ALAND": 2661370994,
            "AWATER": 22050456
          }
        },
        {
          "arcs": [
            [
              -22,
              48,
              49,
              50
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "075",
            "COUNTYNS": "01214034",
            "AFFGEOID": "0500000US42075",
            "GEOID": "42075",
            "NAME": "Lebanon",
            "LSAD": "06",
            "ALAND": 937138345,
            "AWATER": 1727921
          }
        },
        {
          "arcs": [
            [
              -27,
              51,
              52,
              53,
              -15,
              54,
              55,
              56,
              57
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "081",
            "COUNTYNS": "01213677",
            "AFFGEOID": "0500000US42081",
            "GEOID": "42081",
            "NAME": "Lycoming",
            "LSAD": "06",
            "ALAND": 3182060991,
            "AWATER": 39457017
          }
        },
        {
          "arcs": [
            [
              58,
              59,
              -56,
              60,
              -29,
              61
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "119",
            "COUNTYNS": "01213689",
            "AFFGEOID": "0500000US42119",
            "GEOID": "42119",
            "NAME": "Union",
            "LSAD": "06",
            "ALAND": 818399145,
            "AWATER": 4639329
          }
        },
        {
          "arcs": [
            [
              62,
              63,
              64,
              65,
              66,
              67
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "121",
            "COUNTYNS": "01213690",
            "AFFGEOID": "0500000US42121",
            "GEOID": "42121",
            "NAME": "Venango",
            "LSAD": "06",
            "ALAND": 1746387420,
            "AWATER": 22148537
          }
        },
        {
          "arcs": [
            [
              68,
              69,
              70,
              71,
              -1,
              -19,
              72
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "079",
            "COUNTYNS": "01209183",
            "AFFGEOID": "0500000US42079",
            "GEOID": "42079",
            "NAME": "Luzerne",
            "LSAD": "06",
            "ALAND": 2305974191,
            "AWATER": 41240056
          }
        },
        {
          "arcs": [
            [
              73,
              74,
              -69,
              75,
              -53
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "113",
            "COUNTYNS": "01213687",
            "AFFGEOID": "0500000US42113",
            "GEOID": "42113",
            "NAME": "Sullivan",
            "LSAD": "06",
            "ALAND": 1165338400,
            "AWATER": 6617028
          }
        },
        {
          "arcs": [
            [
              -35,
              76,
              77,
              78,
              79
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "023",
            "COUNTYNS": "01213663",
            "AFFGEOID": "0500000US42023",
            "GEOID": "42023",
            "NAME": "Cameron",
            "LSAD": "06",
            "ALAND": 1026231717,
            "AWATER": 5664033
          }
        },
        {
          "arcs": [
            [
              80,
              81,
              82,
              83,
              84
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "029",
            "COUNTYNS": "01209174",
            "AFFGEOID": "0500000US42029",
            "GEOID": "42029",
            "NAME": "Chester",
            "LSAD": "06",
            "ALAND": 1943821140,
            "AWATER": 22587331
          }
        },
        {
          "arcs": [
            [
              85,
              86,
              87,
              88,
              89,
              90
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "009",
            "COUNTYNS": "01209171",
            "AFFGEOID": "0500000US42009",
            "GEOID": "42009",
            "NAME": "Bedford",
            "LSAD": "06",
            "ALAND": 2621836590,
            "AWATER": 11935889
          }
        },
        {
          "arcs": [
            [
              91,
              92,
              93,
              94,
              95,
              -9,
              96
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "055",
            "COUNTYNS": "01213670",
            "AFFGEOID": "0500000US42055",
            "GEOID": "42055",
            "NAME": "Franklin",
            "LSAD": "06",
            "ALAND": 2000052119,
            "AWATER": 1544300
          }
        },
        {
          "arcs": [
            [
              -4,
              -41,
              97,
              98,
              99,
              -20
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "077",
            "COUNTYNS": "01209182",
            "AFFGEOID": "0500000US42077",
            "GEOID": "42077",
            "NAME": "Lehigh",
            "LSAD": "06",
            "ALAND": 893983197,
            "AWATER": 7952806
          }
        },
        {
          "arcs": [
            [
              100,
              -62,
              -32,
              101,
              102
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "087",
            "COUNTYNS": "01213679",
            "AFFGEOID": "0500000US42087",
            "GEOID": "42087",
            "NAME": "Mifflin",
            "LSAD": "06",
            "ALAND": 1064564850,
            "AWATER": 9544799
          }
        },
        {
          "arcs": [
            [
              -99,
              103,
              104,
              105,
              -82,
              106
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "091",
            "COUNTYNS": "01213680",
            "AFFGEOID": "0500000US42091",
            "GEOID": "42091",
            "NAME": "Montgomery",
            "LSAD": "06",
            "ALAND": 1251046282,
            "AWATER": 10791845
          }
        },
        {
          "arcs": [
            [
              107,
              108,
              109,
              -95
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "099",
            "COUNTYNS": "01213682",
            "AFFGEOID": "0500000US42099",
            "GEOID": "42099",
            "NAME": "Perry",
            "LSAD": "06",
            "ALAND": 1428233551,
            "AWATER": 10589698
          }
        },
        {
          "arcs": [
            [
              -105,
              110,
              111,
              112
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "101",
            "COUNTYNS": "01209187",
            "AFFGEOID": "0500000US42101",
            "GEOID": "42101",
            "NAME": "Philadelphia",
            "LSAD": "06",
            "ALAND": 347519325,
            "AWATER": 22089787
          }
        },
        {
          "arcs": [
            [
              -102,
              -31,
              113,
              -108,
              -94,
              114
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "067",
            "COUNTYNS": "01209180",
            "AFFGEOID": "0500000US42067",
            "GEOID": "42067",
            "NAME": "Juniata",
            "LSAD": "06",
            "ALAND": 1013592889,
            "AWATER": 5606074
          }
        },
        {
          "arcs": [
            [
              -106,
              -113,
              115,
              -83
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "045",
            "COUNTYNS": "01209177",
            "AFFGEOID": "0500000US42045",
            "GEOID": "42045",
            "NAME": "Delaware",
            "LSAD": "06",
            "ALAND": 476226980,
            "AWATER": 17433559
          }
        },
        {
          "arcs": [
            [
              -54,
              -76,
              -73,
              -18,
              116,
              -16
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "037",
            "COUNTYNS": "01213665",
            "AFFGEOID": "0500000US42037",
            "GEOID": "42037",
            "NAME": "Columbia",
            "LSAD": "06",
            "ALAND": 1251240675,
            "AWATER": 18266325
          }
        },
        {
          "arcs": [
            [
              -66,
              117,
              118,
              119,
              120
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "031",
            "COUNTYNS": "01210234",
            "AFFGEOID": "0500000US42031",
            "GEOID": "42031",
            "NAME": "Clarion",
            "LSAD": "06",
            "ALAND": 1556153772,
            "AWATER": 23335886
          }
        },
        {
          "arcs": [
            [
              121,
              122,
              123,
              -87,
              124
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "013",
            "COUNTYNS": "01213659",
            "AFFGEOID": "0500000US42013",
            "GEOID": "42013",
            "NAME": "Blair",
            "LSAD": "06",
            "ALAND": 1361815246,
            "AWATER": 3285511
          }
        },
        {
          "arcs": [
            [
              -21,
              -100,
              -107,
              -81,
              125,
              -49
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "011",
            "COUNTYNS": "01209172",
            "AFFGEOID": "0500000US42011",
            "GEOID": "42011",
            "NAME": "Berks",
            "LSAD": "06",
            "ALAND": 2218040257,
            "AWATER": 24252061
          }
        },
        {
          "arcs": [
            [
              -40,
              126,
              -111,
              -104,
              -98
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "017",
            "COUNTYNS": "01209173",
            "AFFGEOID": "0500000US42017",
            "GEOID": "42017",
            "NAME": "Bucks",
            "LSAD": "06",
            "ALAND": 1565316699,
            "AWATER": 45329736
          }
        },
        {
          "arcs": [
            [
              127,
              128,
              -63,
              129,
              130
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "039",
            "COUNTYNS": "01213666",
            "AFFGEOID": "0500000US42039",
            "GEOID": "42039",
            "NAME": "Crawford",
            "LSAD": "06",
            "ALAND": 2621846809,
            "AWATER": 65303124
          }
        },
        {
          "arcs": [
            [
              -50,
              -126,
              -85,
              131,
              132,
              133
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "071",
            "COUNTYNS": "01209181",
            "AFFGEOID": "0500000US42071",
            "GEOID": "42071",
            "NAME": "Lancaster",
            "LSAD": "06",
            "ALAND": 2444495031,
            "AWATER": 103535036
          }
        },
        {
          "arcs": [
            [
              134,
              -28,
              -58,
              135,
              -77,
              -34
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "105",
            "COUNTYNS": "01213684",
            "AFFGEOID": "0500000US42105",
            "GEOID": "42105",
            "NAME": "Potter",
            "LSAD": "06",
            "ALAND": 2800606026,
            "AWATER": 559779
          }
        },
        {
          "arcs": [
            [
              136,
              137,
              -37,
              138,
              -64,
              -129
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "123",
            "COUNTYNS": "01213691",
            "AFFGEOID": "0500000US42123",
            "GEOID": "42123",
            "NAME": "Warren",
            "LSAD": "06",
            "ALAND": 2289914221,
            "AWATER": 37352304
          }
        },
        {
          "arcs": [
            [
              139,
              -23,
              -51,
              -134,
              140,
              141,
              -109
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "043",
            "COUNTYNS": "01213667",
            "AFFGEOID": "0500000US42043",
            "GEOID": "42043",
            "NAME": "Dauphin",
            "LSAD": "06",
            "ALAND": 1359893290,
            "AWATER": 85780784
          }
        },
        {
          "arcs": [
            [
              142,
              143,
              -10,
              144
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "073",
            "COUNTYNS": "01213676",
            "AFFGEOID": "0500000US42073",
            "GEOID": "42073",
            "NAME": "Lawrence",
            "LSAD": "06",
            "ALAND": 927644464,
            "AWATER": 11783868
          }
        },
        {
          "arcs": [
            [
              145,
              146,
              147,
              148,
              149
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "115",
            "COUNTYNS": "01213688",
            "AFFGEOID": "0500000US42115",
            "GEOID": "42115",
            "NAME": "Susquehanna",
            "LSAD": "06",
            "ALAND": 2132881571,
            "AWATER": 22356562
          }
        },
        {
          "arcs": [
            [
              150,
              151,
              152,
              153,
              -38,
              -2,
              -72
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "089",
            "COUNTYNS": "01209184",
            "AFFGEOID": "0500000US42089",
            "GEOID": "42089",
            "NAME": "Monroe",
            "LSAD": "06",
            "ALAND": 1575560089,
            "AWATER": 23131029
          }
        },
        {
          "arcs": [
            [
              154,
              -120,
              155,
              156,
              -43
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "005",
            "COUNTYNS": "01213658",
            "AFFGEOID": "0500000US42005",
            "GEOID": "42005",
            "NAME": "Armstrong",
            "LSAD": "06",
            "ALAND": 1691786924,
            "AWATER": 27556957
          }
        },
        {
          "arcs": [
            [
              157,
              -149,
              158,
              -70,
              -75
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "131",
            "COUNTYNS": "01209192",
            "AFFGEOID": "0500000US42131",
            "GEOID": "42131",
            "NAME": "Wyoming",
            "LSAD": "06",
            "ALAND": 1029008281,
            "AWATER": 20034376
          }
        },
        {
          "arcs": [
            [
              159,
              -67,
              -121,
              -155,
              160,
              -11,
              -144
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "019",
            "COUNTYNS": "01213661",
            "AFFGEOID": "0500000US42019",
            "GEOID": "42019",
            "NAME": "Butler",
            "LSAD": "06",
            "ALAND": 2042451168,
            "AWATER": 15948239
          }
        },
        {
          "arcs": [
            [
              161,
              -103,
              -115,
              -93,
              162,
              -88,
              -124
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "061",
            "COUNTYNS": "01213672",
            "AFFGEOID": "0500000US42061",
            "GEOID": "42061",
            "NAME": "Huntingdon",
            "LSAD": "06",
            "ALAND": 2265337402,
            "AWATER": 37851955
          }
        },
        {
          "arcs": [
            [
              163,
              -130,
              -68,
              -160,
              -143,
              164
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "085",
            "COUNTYNS": "01213678",
            "AFFGEOID": "0500000US42085",
            "GEOID": "42085",
            "NAME": "Mercer",
            "LSAD": "06",
            "ALAND": 1741978099,
            "AWATER": 25963051
          }
        },
        {
          "arcs": [
            [
              -78,
              -136,
              -57,
              -60,
              165,
              166
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "035",
            "COUNTYNS": "01214721",
            "AFFGEOID": "0500000US42035",
            "GEOID": "42035",
            "NAME": "Clinton",
            "LSAD": "06",
            "ALAND": 2299868232,
            "AWATER": 23178794
          }
        },
        {
          "arcs": [
            [
              -142,
              167,
              -6,
              -96,
              -110
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "041",
            "COUNTYNS": "01209176",
            "AFFGEOID": "0500000US42041",
            "GEOID": "42041",
            "NAME": "Cumberland",
            "LSAD": "06",
            "ALAND": 1412834154,
            "AWATER": 12521844
          }
        },
        {
          "arcs": [
            [
              168,
              -137,
              -128,
              169
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "049",
            "COUNTYNS": "01209178",
            "AFFGEOID": "0500000US42049",
            "GEOID": "42049",
            "NAME": "Erie",
            "LSAD": "06",
            "ALAND": 2069952474,
            "AWATER": 1965847842
          }
        },
        {
          "arcs": [
            [
              -30,
              -61,
              -55,
              -17,
              -117,
              -24,
              -140,
              -114
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "097",
            "COUNTYNS": "01209186",
            "AFFGEOID": "0500000US42097",
            "GEOID": "42097",
            "NAME": "Northumberland",
            "LSAD": "06",
            "ALAND": 1187166422,
            "AWATER": 49616021
          }
        },
        {
          "arcs": [
            [
              -139,
              170,
              171,
              -118,
              -65
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "053",
            "COUNTYNS": "01213669",
            "AFFGEOID": "0500000US42053",
            "GEOID": "42053",
            "NAME": "Forest",
            "LSAD": "06",
            "ALAND": 1106625250,
            "AWATER": 8355296
          }
        },
        {
          "arcs": [
            [
              172,
              -13,
              173,
              -48,
              174,
              175,
              176
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "125",
            "COUNTYNS": "01209190",
            "AFFGEOID": "0500000US42125",
            "GEOID": "42125",
            "NAME": "Washington",
            "LSAD": "06",
            "ALAND": 2219590654,
            "AWATER": 10147672
          }
        },
        {
          "arcs": [
            [
              -176,
              177,
              178
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "059",
            "COUNTYNS": "01214033",
            "AFFGEOID": "0500000US42059",
            "GEOID": "42059",
            "NAME": "Greene",
            "LSAD": "06",
            "ALAND": 1491700970,
            "AWATER": 5253864
          }
        },
        {
          "arcs": [
            [
              -175,
              -47,
              179,
              180,
              -178
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "051",
            "COUNTYNS": "01209179",
            "AFFGEOID": "0500000US42051",
            "GEOID": "42051",
            "NAME": "Fayette",
            "LSAD": "06",
            "ALAND": 2046968033,
            "AWATER": 20644021
          }
        },
        {
          "arcs": [
            [
              -119,
              -172,
              181,
              182,
              183,
              -156
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "065",
            "COUNTYNS": "01213674",
            "AFFGEOID": "0500000US42065",
            "GEOID": "42065",
            "NAME": "Jefferson",
            "LSAD": "06",
            "ALAND": 1689784200,
            "AWATER": 11321806
          }
        },
        {
          "arcs": [
            [
              184,
              -153,
              185
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "103",
            "COUNTYNS": "01213683",
            "AFFGEOID": "0500000US42103",
            "GEOID": "42103",
            "NAME": "Pike",
            "LSAD": "06",
            "ALAND": 1411441327,
            "AWATER": 56692145
          }
        },
        {
          "arcs": [
            [
              -166,
              -59,
              -101,
              -162,
              -123,
              186
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "027",
            "COUNTYNS": "01214720",
            "AFFGEOID": "0500000US42027",
            "GEOID": "42027",
            "NAME": "Centre",
            "LSAD": "06",
            "ALAND": 2874687362,
            "AWATER": 7878513
          }
        },
        {
          "arcs": [
            [
              -89,
              -163,
              -92,
              187
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "057",
            "COUNTYNS": "01213671",
            "AFFGEOID": "0500000US42057",
            "GEOID": "42057",
            "NAME": "Fulton",
            "LSAD": "06",
            "ALAND": 1133252800,
            "AWATER": 1305486
          }
        },
        {
          "arcs": [
            [
              -36,
              -80,
              188,
              -182,
              -171
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "047",
            "COUNTYNS": "01213668",
            "AFFGEOID": "0500000US42047",
            "GEOID": "42047",
            "NAME": "Elk",
            "LSAD": "06",
            "ALAND": 2142861754,
            "AWATER": 12818644
          }
        },
        {
          "arcs": [
            [
              -183,
              -189,
              -79,
              -167,
              -187,
              -122,
              189,
              190
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "033",
            "COUNTYNS": "01209175",
            "AFFGEOID": "0500000US42033",
            "GEOID": "42033",
            "NAME": "Clearfield",
            "LSAD": "06",
            "ALAND": 2964817439,
            "AWATER": 23932649
          }
        },
        {
          "arcs": [
            [
              191,
              -150,
              -158,
              -74,
              -52,
              -26
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "015",
            "COUNTYNS": "01213660",
            "AFFGEOID": "0500000US42015",
            "GEOID": "42015",
            "NAME": "Bradford",
            "LSAD": "06",
            "ALAND": 2971750796,
            "AWATER": 35275587
          }
        },
        {
          "arcs": [
            [
              -46,
              192,
              -91,
              193,
              -180
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "111",
            "COUNTYNS": "01209188",
            "AFFGEOID": "0500000US42111",
            "GEOID": "42111",
            "NAME": "Somerset",
            "LSAD": "06",
            "ALAND": 2782597179,
            "AWATER": 17002814
          }
        },
        {
          "arcs": [
            [
              -159,
              -148,
              194,
              -151,
              -71
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "069",
            "COUNTYNS": "01213675",
            "AFFGEOID": "0500000US42069",
            "GEOID": "42069",
            "NAME": "Lackawanna",
            "LSAD": "06",
            "ALAND": 1188215428,
            "AWATER": 15896171
          }
        },
        {
          "arcs": [
            [
              -161,
              -42,
              -174,
              -12
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "003",
            "COUNTYNS": "01213657",
            "AFFGEOID": "0500000US42003",
            "GEOID": "42003",
            "NAME": "Allegheny",
            "LSAD": "06",
            "ALAND": 1890889518,
            "AWATER": 37411670
          }
        },
        {
          "arcs": [
            [
              195,
              -190,
              -125,
              -86,
              -193,
              -45
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "021",
            "COUNTYNS": "01213662",
            "AFFGEOID": "0500000US42021",
            "GEOID": "42021",
            "NAME": "Cambria",
            "LSAD": "06",
            "ALAND": 1782823041,
            "AWATER": 13677375
          }
        },
        {
          "arcs": [
            [
              -141,
              -133,
              196,
              -7,
              -168
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "133",
            "COUNTYNS": "01209193",
            "AFFGEOID": "0500000US42133",
            "GEOID": "42133",
            "NAME": "York",
            "LSAD": "06",
            "ALAND": 2341884216,
            "AWATER": 16941833
          }
        },
        {
          "arcs": [
            [
              -157,
              -184,
              -191,
              -196,
              -44
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "063",
            "COUNTYNS": "01213673",
            "AFFGEOID": "0500000US42063",
            "GEOID": "42063",
            "NAME": "Indiana",
            "LSAD": "06",
            "ALAND": 2141999553,
            "AWATER": 18812180
          }
        },
        {
          "arcs": [
            [
              -147,
              197,
              -186,
              -152,
              -195
            ]
          ],
          "type": "Polygon",
          "properties": {
            "STATEFP": "42",
            "COUNTYFP": "127",
            "COUNTYNS": "01213692",
            "AFFGEOID": "0500000US42127",
            "GEOID": "42127",
            "NAME": "Wayne",
            "LSAD": "06",
            "ALAND": 1879307105,
            "AWATER": 64774622
          }
        }
      ]
    }
  }
};