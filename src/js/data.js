/*
 * Given a CSV with the desired keys as header and all the data you need, use
 * the function below to generate an array of objects containing all the data.
 *
 * const excelData = ``;
 * const data = [];
 * const lines = excelData.split("\n");
 * const headers = lines.shift().split(",");
 * lines.forEach(line => {
 *   const cells = line.split(",");
 *   data.push(
 *     cells.reduce((acc, cell, i) => ({
 *       ...acc, [headers[i]]: parseFloat(cell) || cell
 *     }), {})
 *   );
 * });
 *
 * console.log(JSON.stringify(data));
 */

export const STATEWIDE_DATA = {
  "name": "Pennsylvania",
  "nominal_pct": "",
  "nonmonetary_pct": "",
  "cash_bail_pct": 0.433842,
  "ror_pct": 0.224746,
  "unsecured_pct": "",
  "total_cases": 383317,
  "cash_bail_cases": 166299,
  "ror_cases": 86149,
  "avg_bail_amount": 34450.1196,
  "non_posting_rate": 0, // TODO: need this datapoint
  "cash_bail_pct_black": "",
  "cash_bail_cases_black": 64473,
  "cash_bail_pct_white": "",
  "bail_amount_black": "",
  "bail_amount_white": "",
  "bail_amount_diff": "",
  "is_outlier": false
};
export const COUNTY_DATA = [
  {
    "name": "Adams",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.149123,
    "cash_bail_pct": 0.313158,
    "ror_pct": 0.253509,
    "unsecured_pct": 0.284211,
    "total_cases": 2280,
    "cash_bail_cases": 714,
    "ror_cases": 578,
    "avg_bail_amount": 30449.43978,
    "non_posting_rate": 0.442577,
    "cash_bail_pct_black": 0.442982,
    "cash_bail_cases_black": 101,
    "cash_bail_pct_white": 0.301849,
    "bail_amount_black": 39302.9703,
    "bail_amount_white": 29094.86755,
    "bail_amount_diff": 10208.10275,
    "is_outlier": false
  },
  {
    "name": "Allegheny",
    "nominal_pct": 0.000316,
    "nonmonetary_pct": 0.292861,
    "cash_bail_pct": 0.4258,
    "ror_pct": 0.254355,
    "unsecured_pct": 0.026668,
    "total_cases": 47473,
    "cash_bail_cases": 20214,
    "ror_cases": 12075,
    "avg_bail_amount": 16795.83635,
    "non_posting_rate": 0.604878,
    "cash_bail_pct_black": 0.525011,
    "cash_bail_cases_black": 11031,
    "cash_bail_pct_white": 0.349545,
    "bail_amount_black": 18845.16218,
    "bail_amount_white": 13921.65751,
    "bail_amount_diff": 4923.504669,
    "is_outlier": false
  },
  {
    "name": "Armstrong",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.031073,
    "cash_bail_pct": 0.415254,
    "ror_pct": 0.426554,
    "unsecured_pct": 0.127119,
    "total_cases": 1770,
    "cash_bail_cases": 735,
    "ror_cases": 755,
    "avg_bail_amount": 15099.45578,
    "non_posting_rate": 0.563265,
    "cash_bail_pct_black": 0.622807,
    "cash_bail_cases_black": 71,
    "cash_bail_pct_white": 0.401119,
    "bail_amount_black": 19380.28169,
    "bail_amount_white": 14656.74419,
    "bail_amount_diff": 4723.537504,
    "is_outlier": false
  },
  {
    "name": "Beaver",
    "nominal_pct": 0.000173,
    "nonmonetary_pct": 0.020295,
    "cash_bail_pct": 0.508413,
    "ror_pct": 0.341197,
    "unsecured_pct": 0.129922,
    "total_cases": 5765,
    "cash_bail_cases": 2931,
    "ror_cases": 1967,
    "avg_bail_amount": 21476.32446,
    "non_posting_rate": 0.668031,
    "cash_bail_pct_black": 0.653036,
    "cash_bail_cases_black": 1054,
    "cash_bail_pct_white": 0.460601,
    "bail_amount_black": 32043.50285,
    "bail_amount_white": 15969.64266,
    "bail_amount_diff": 16073.86019,
    "is_outlier": false
  },
  {
    "name": "Bedford",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.373563,
    "ror_pct": 0.019397,
    "unsecured_pct": 0.60704,
    "total_cases": 1392,
    "cash_bail_cases": 520,
    "ror_cases": 27,
    "avg_bail_amount": 54775.96154,
    "non_posting_rate": 0.713462,
    "cash_bail_pct_black": 0.55814,
    "cash_bail_cases_black": 48,
    "cash_bail_pct_white": 0.360063,
    "bail_amount_black": 82145.83333,
    "bail_amount_white": 51605.8952,
    "bail_amount_diff": 30539.93814,
    "is_outlier": true
  },
  {
    "name": "Berks",
    "nominal_pct": 0.000265,
    "nonmonetary_pct": 0.008826,
    "cash_bail_pct": 0.508826,
    "ror_pct": 0.150838,
    "unsecured_pct": 0.331244,
    "total_cases": 11330,
    "cash_bail_cases": 5765,
    "ror_cases": 1709,
    "avg_bail_amount": 35951.36201,
    "non_posting_rate": 0.571899,
    "cash_bail_pct_black": 0.585288,
    "cash_bail_cases_black": 1098,
    "cash_bail_pct_white": 0.501453,
    "bail_amount_black": 41514.57377,
    "bail_amount_white": 35373.15496,
    "bail_amount_diff": 6141.418809,
    "is_outlier": false
  },
  {
    "name": "Blair",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000698,
    "cash_bail_pct": 0.30805,
    "ror_pct": 0.004421,
    "unsecured_pct": 0.686831,
    "total_cases": 4298,
    "cash_bail_cases": 1324,
    "ror_cases": 19,
    "avg_bail_amount": 33359.70544,
    "non_posting_rate": 0.665408,
    "cash_bail_pct_black": 0.538084,
    "cash_bail_cases_black": 219,
    "cash_bail_pct_white": 0.290748,
    "bail_amount_black": 50874.42922,
    "bail_amount_white": 30764.80111,
    "bail_amount_diff": 20109.62811,
    "is_outlier": false
  },
  {
    "name": "Bradford",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.289904,
    "cash_bail_pct": 0.459109,
    "ror_pct": 0.116187,
    "unsecured_pct": 0.1348,
    "total_cases": 1773,
    "cash_bail_cases": 814,
    "ror_cases": 206,
    "avg_bail_amount": 35212.04423,
    "non_posting_rate": 0.89312,
    "cash_bail_pct_black": 0.615385,
    "cash_bail_cases_black": 32,
    "cash_bail_pct_white": 0.455742,
    "bail_amount_black": 68109.375,
    "bail_amount_white": 34295.28084,
    "bail_amount_diff": 33814.09416,
    "is_outlier": true
  },
  {
    "name": "Bucks",
    "nominal_pct": 0.000145,
    "nonmonetary_pct": 0.002386,
    "cash_bail_pct": 0.348735,
    "ror_pct": 0.159147,
    "unsecured_pct": 0.489588,
    "total_cases": 13830,
    "cash_bail_cases": 4823,
    "ror_cases": 2201,
    "avg_bail_amount": 77461.73689,
    "non_posting_rate": 0.50425,
    "cash_bail_pct_black": 0.455865,
    "cash_bail_cases_black": 1193,
    "cash_bail_pct_white": 0.326778,
    "bail_amount_black": 87411.6513,
    "bail_amount_white": 73918.96991,
    "bail_amount_diff": 13492.68139,
    "is_outlier": false
  },
  {
    "name": "Butler",
    "nominal_pct": 0.005466,
    "nonmonetary_pct": 0.086082,
    "cash_bail_pct": 0.355261,
    "ror_pct": 0.490142,
    "unsecured_pct": 0.063049,
    "total_cases": 5123,
    "cash_bail_cases": 1820,
    "ror_cases": 2511,
    "avg_bail_amount": 25638.93736,
    "non_posting_rate": 0.619231,
    "cash_bail_pct_black": 0.593684,
    "cash_bail_cases_black": 282,
    "cash_bail_pct_white": 0.330989,
    "bail_amount_black": 43726.24823,
    "bail_amount_white": 21800.64011,
    "bail_amount_diff": 21925.60812,
    "is_outlier": false
  },
  {
    "name": "Cambria",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000455,
    "cash_bail_pct": 0.450057,
    "ror_pct": 0.207053,
    "unsecured_pct": 0.342435,
    "total_cases": 4395,
    "cash_bail_cases": 1978,
    "ror_cases": 910,
    "avg_bail_amount": 40106.82508,
    "non_posting_rate": 0.427705,
    "cash_bail_pct_black": 0.663657,
    "cash_bail_cases_black": 588,
    "cash_bail_pct_white": 0.398235,
    "bail_amount_black": 58433.33333,
    "bail_amount_white": 32649.18759,
    "bail_amount_diff": 25784.14574,
    "is_outlier": false
  },
  {
    "name": "Cameron",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.220588,
    "ror_pct": 0.000000,
    "unsecured_pct": 0.779412,
    "total_cases": 136,
    "cash_bail_cases": 30,
    "ror_cases": "0",
    "avg_bail_amount": 28258.33333,
    "non_posting_rate": 0.566667,
    "cash_bail_pct_black": 1,
    "cash_bail_cases_black": 2,
    "cash_bail_pct_white": 0.262136,
    "bail_amount_black": 42175,
    "bail_amount_white": 27851.85185,
    "bail_amount_diff": 14323.14815,
    "is_outlier": true
  },
  {
    "name": "Carbon",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.328777,
    "ror_pct": 0.142446,
    "unsecured_pct": 0.528777,
    "total_cases": 2780,
    "cash_bail_cases": 914,
    "ror_cases": 396,
    "avg_bail_amount": 32519.26696,
    "non_posting_rate": 0.5186,
    "cash_bail_pct_black": 0.475,
    "cash_bail_cases_black": 95,
    "cash_bail_pct_white": 0.319692,
    "bail_amount_black": 43984.21053,
    "bail_amount_white": 31083.78961,
    "bail_amount_diff": 12900.42092,
    "is_outlier": false
  },
  {
    "name": "Centre",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000314,
    "cash_bail_pct": 0.272527,
    "ror_pct": 0.616327,
    "unsecured_pct": 0.110832,
    "total_cases": 3185,
    "cash_bail_cases": 868,
    "ror_cases": 1963,
    "avg_bail_amount": 51739.7477,
    "non_posting_rate": 0.665899,
    "cash_bail_pct_black": 0.489796,
    "cash_bail_cases_black": 240,
    "cash_bail_pct_white": 0.227858,
    "bail_amount_black": 56770.83333,
    "bail_amount_white": 46869.4364,
    "bail_amount_diff": 9901.396937,
    "is_outlier": false
  },
  {
    "name": "Chester",
    "nominal_pct": 0.010471,
    "nonmonetary_pct": 0.000201,
    "cash_bail_pct": 0.383206,
    "ror_pct": 0.208216,
    "unsecured_pct": 0.397906,
    "total_cases": 9932,
    "cash_bail_cases": 3806,
    "ror_cases": 2068,
    "avg_bail_amount": 33629.82974,
    "non_posting_rate": 0.516816,
    "cash_bail_pct_black": 0.490007,
    "cash_bail_cases_black": 1373,
    "cash_bail_pct_white": 0.343277,
    "bail_amount_black": 37417.2622,
    "bail_amount_white": 31420.82705,
    "bail_amount_diff": 5996.435155,
    "is_outlier": false
  },
  {
    "name": "Clarion",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000839,
    "cash_bail_pct": 0.394295,
    "ror_pct": 0.263423,
    "unsecured_pct": 0.341443,
    "total_cases": 1192,
    "cash_bail_cases": 470,
    "ror_cases": 314,
    "avg_bail_amount": 23134.46809,
    "non_posting_rate": 0.717021,
    "cash_bail_pct_black": 0.396825,
    "cash_bail_cases_black": 25,
    "cash_bail_pct_white": 0.403721,
    "bail_amount_black": 14104,
    "bail_amount_white": 24033.87097,
    "bail_amount_diff": -9929.870968,
    "is_outlier": true
  },
  {
    "name": "Clearfield",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.370141,
    "ror_pct": 0.001127,
    "unsecured_pct": 0.628732,
    "total_cases": 1775,
    "cash_bail_cases": 657,
    "ror_cases": 2,
    "avg_bail_amount": 29201.97869,
    "non_posting_rate": 0.838661,
    "cash_bail_pct_black": 0.657143,
    "cash_bail_cases_black": 46,
    "cash_bail_pct_white": 0.362388,
    "bail_amount_black": 59500,
    "bail_amount_white": 27240.85667,
    "bail_amount_diff": 32259.14333,
    "is_outlier": true
  },
  {
    "name": "Clinton",
    "nominal_pct": 0.000825,
    "nonmonetary_pct": 0.00165,
    "cash_bail_pct": 0.333333,
    "ror_pct": 0.129538,
    "unsecured_pct": 0.534653,
    "total_cases": 1212,
    "cash_bail_cases": 404,
    "ror_cases": 157,
    "avg_bail_amount": 28516.73515,
    "non_posting_rate": 0.730198,
    "cash_bail_pct_black": 0.398058,
    "cash_bail_cases_black": 41,
    "cash_bail_pct_white": 0.330594,
    "bail_amount_black": 30579.29268,
    "bail_amount_white": 28093.25967,
    "bail_amount_diff": 2486.033014,
    "is_outlier": true
  },
  {
    "name": "Columbia",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.001311,
    "cash_bail_pct": 0.408912,
    "ror_pct": 0.21363,
    "unsecured_pct": 0.376147,
    "total_cases": 1526,
    "cash_bail_cases": 624,
    "ror_cases": 326,
    "avg_bail_amount": 37230.86539,
    "non_posting_rate": 0.275641,
    "cash_bail_pct_black": 0.428571,
    "cash_bail_cases_black": 72,
    "cash_bail_pct_white": 0.411899,
    "bail_amount_black": 60937.5,
    "bail_amount_white": 34290.85185,
    "bail_amount_diff": 26646.64815,
    "is_outlier": false
  },
  {
    "name": "Crawford",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.084442,
    "cash_bail_pct": 0.356192,
    "ror_pct": 0.430399,
    "unsecured_pct": 0.128966,
    "total_cases": 1954,
    "cash_bail_cases": 696,
    "ror_cases": 841,
    "avg_bail_amount": 26715.51724,
    "non_posting_rate": 0.568966,
    "cash_bail_pct_black": 0.551282,
    "cash_bail_cases_black": 86,
    "cash_bail_pct_white": 0.341324,
    "bail_amount_black": 29781.97674,
    "bail_amount_white": 26269.23077,
    "bail_amount_diff": 3512.745975,
    "is_outlier": false
  },
  {
    "name": "Cumberland",
    "nominal_pct": 0.001049,
    "nonmonetary_pct": 0.004345,
    "cash_bail_pct": 0.410548,
    "ror_pct": 0.391669,
    "unsecured_pct": 0.192388,
    "total_cases": 6674,
    "cash_bail_cases": 2740,
    "ror_cases": 2614,
    "avg_bail_amount": 27850.80584,
    "non_posting_rate": 0.553285,
    "cash_bail_pct_black": 0.551493,
    "cash_bail_cases_black": 739,
    "cash_bail_pct_white": 0.375695,
    "bail_amount_black": 35423.58728,
    "bail_amount_white": 25383.11684,
    "bail_amount_diff": 10040.47044,
    "is_outlier": false
  },
  {
    "name": "Dauphin",
    "nominal_pct": 0.000571,
    "nonmonetary_pct": 0.01084,
    "cash_bail_pct": 0.441764,
    "ror_pct": 0.189828,
    "unsecured_pct": 0.356997,
    "total_cases": 12269,
    "cash_bail_cases": 5420,
    "ror_cases": 2329,
    "avg_bail_amount": 43160.53911,
    "non_posting_rate": 0.68321,
    "cash_bail_pct_black": 0.536661,
    "cash_bail_cases_black": 2774,
    "cash_bail_pct_white": 0.378675,
    "bail_amount_black": 45889.83886,
    "bail_amount_white": 40000.19469,
    "bail_amount_diff": 5889.644171,
    "is_outlier": false
  },
  {
    "name": "Delaware",
    "nominal_pct": 0.006038,
    "nonmonetary_pct": 0.000059,
    "cash_bail_pct": 0.558825,
    "ror_pct": 0.001055,
    "unsecured_pct": 0.434023,
    "total_cases": 17059,
    "cash_bail_cases": 9533,
    "ror_cases": 18,
    "avg_bail_amount": 46630.95584,
    "non_posting_rate": 0.613448,
    "cash_bail_pct_black": 0.641501,
    "cash_bail_cases_black": 5472,
    "cash_bail_pct_white": 0.48597,
    "bail_amount_black": 52748.20925,
    "bail_amount_white": 35606.1592,
    "bail_amount_diff": 17142.05005,
    "is_outlier": false
  },
  {
    "name": "Elk",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.286073,
    "ror_pct": 0.000000,
    "unsecured_pct": 0.713927,
    "total_cases": 797,
    "cash_bail_cases": 228,
    "ror_cases": "0",
    "avg_bail_amount": 29280.70175,
    "non_posting_rate": 0.798246,
    "cash_bail_pct_black": 0.294118,
    "cash_bail_cases_black": 5,
    "cash_bail_pct_white": 0.286667,
    "bail_amount_black": 17460,
    "bail_amount_white": 29516.27907,
    "bail_amount_diff": -12056.27907,
    "is_outlier": true
  },
  {
    "name": "Erie",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.006849,
    "cash_bail_pct": 0.470667,
    "ror_pct": 0.334127,
    "unsecured_pct": 0.188356,
    "total_cases": 6716,
    "cash_bail_cases": 3161,
    "ror_cases": 2244,
    "avg_bail_amount": 32539.14046,
    "non_posting_rate": 0.624486,
    "cash_bail_pct_black": 0.678438,
    "cash_bail_cases_black": 1268,
    "cash_bail_pct_white": 0.394262,
    "bail_amount_black": 41009.0694,
    "bail_amount_white": 26792.57056,
    "bail_amount_diff": 14216.49884,
    "is_outlier": false
  },
  {
    "name": "Fayette",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.449371,
    "ror_pct": 0.000999,
    "unsecured_pct": 0.549631,
    "total_cases": 5007,
    "cash_bail_cases": 2250,
    "ror_cases": 5,
    "avg_bail_amount": 22434.84444,
    "non_posting_rate": 0.392889,
    "cash_bail_pct_black": 0.541899,
    "cash_bail_cases_black": 485,
    "cash_bail_pct_white": 0.43027,
    "bail_amount_black": 29696.28866,
    "bail_amount_white": 20176.5688,
    "bail_amount_diff": 9519.719863,
    "is_outlier": false
  },
  {
    "name": "Forest",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.350993,
    "ror_pct": 0.125828,
    "unsecured_pct": 0.523179,
    "total_cases": 151,
    "cash_bail_cases": 53,
    "ror_cases": 19,
    "avg_bail_amount": 27849.0566,
    "non_posting_rate": 0.811321,
    "cash_bail_pct_black": 0.888889,
    "cash_bail_cases_black": 16,
    "cash_bail_pct_white": 0.3125,
    "bail_amount_black": 27375,
    "bail_amount_white": 27086.66667,
    "bail_amount_diff": 288.333333,
    "is_outlier": true
  },
  {
    "name": "Franklin",
    "nominal_pct": 0.000226,
    "nonmonetary_pct": 0.006107,
    "cash_bail_pct": 0.373445,
    "ror_pct": 0.503732,
    "unsecured_pct": 0.116489,
    "total_cases": 4421,
    "cash_bail_cases": 1651,
    "ror_cases": 2227,
    "avg_bail_amount": 64731.37492,
    "non_posting_rate": 0.765597,
    "cash_bail_pct_black": 0.494532,
    "cash_bail_cases_black": 407,
    "cash_bail_pct_white": 0.350513,
    "bail_amount_black": 65076.16708,
    "bail_amount_white": 64309.91064,
    "bail_amount_diff": 766.256434,
    "is_outlier": false
  },
  {
    "name": "Fulton",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.0525,
    "cash_bail_pct": 0.2825,
    "ror_pct": 0.5175,
    "unsecured_pct": 0.1475,
    "total_cases": 400,
    "cash_bail_cases": 113,
    "ror_cases": 207,
    "avg_bail_amount": 64907.07965,
    "non_posting_rate": 0.787611,
    "cash_bail_pct_black": 0.285714,
    "cash_bail_cases_black": 10,
    "cash_bail_pct_white": 0.290909,
    "bail_amount_black": 38000,
    "bail_amount_white": 69270.83333,
    "bail_amount_diff": -31270.83333,
    "is_outlier": true
  },
  {
    "name": "Greene",
    "nominal_pct": 0.001255,
    "nonmonetary_pct": 0.002509,
    "cash_bail_pct": 0.393977,
    "ror_pct": 0.243413,
    "unsecured_pct": 0.358846,
    "total_cases": 797,
    "cash_bail_cases": 314,
    "ror_cases": 194,
    "avg_bail_amount": 19024.66879,
    "non_posting_rate": 0.570064,
    "cash_bail_pct_black": 0.583333,
    "cash_bail_cases_black": 21,
    "cash_bail_pct_white": 0.39749,
    "bail_amount_black": 21023.80952,
    "bail_amount_white": 18309.63509,
    "bail_amount_diff": 2714.174436,
    "is_outlier": true
  },
  {
    "name": "Huntingdon",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.386169,
    "ror_pct": 0.299922,
    "unsecured_pct": 0.313908,
    "total_cases": 1287,
    "cash_bail_cases": 497,
    "ror_cases": 386,
    "avg_bail_amount": 22393.05835,
    "non_posting_rate": 0.7666,
    "cash_bail_pct_black": 0.648276,
    "cash_bail_cases_black": 94,
    "cash_bail_pct_white": 0.369732,
    "bail_amount_black": 24255.31915,
    "bail_amount_white": 21800.12953,
    "bail_amount_diff": 2455.189615,
    "is_outlier": false
  },
  {
    "name": "Indiana",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.406648,
    "ror_pct": 0.23224,
    "unsecured_pct": 0.361111,
    "total_cases": 2196,
    "cash_bail_cases": 893,
    "ror_cases": 510,
    "avg_bail_amount": 17639.19373,
    "non_posting_rate": 0.479283,
    "cash_bail_pct_black": 0.493548,
    "cash_bail_cases_black": 153,
    "cash_bail_pct_white": 0.393148,
    "bail_amount_black": 28699.34641,
    "bail_amount_white": 15395.98894,
    "bail_amount_diff": 13303.35747,
    "is_outlier": false
  },
  {
    "name": "Jefferson",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000921,
    "cash_bail_pct": 0.38674,
    "ror_pct": 0.000921,
    "unsecured_pct": 0.611418,
    "total_cases": 1086,
    "cash_bail_cases": 420,
    "ror_cases": 1,
    "avg_bail_amount": 52759.52381,
    "non_posting_rate": 0.859524,
    "cash_bail_pct_black": 0.69697,
    "cash_bail_cases_black": 23,
    "cash_bail_pct_white": 0.383937,
    "bail_amount_black": 79565.21739,
    "bail_amount_white": 51413.26531,
    "bail_amount_diff": 28151.95209,
    "is_outlier": true
  },
  {
    "name": "Juniata",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.077922,
    "cash_bail_pct": 0.341991,
    "ror_pct": 0.194805,
    "unsecured_pct": 0.385281,
    "total_cases": 462,
    "cash_bail_cases": 158,
    "ror_cases": 90,
    "avg_bail_amount": 27028.48101,
    "non_posting_rate": 0.727848,
    "cash_bail_pct_black": 0.4375,
    "cash_bail_cases_black": 7,
    "cash_bail_pct_white": 0.365915,
    "bail_amount_black": 39071.42857,
    "bail_amount_white": 26784.24658,
    "bail_amount_diff": 12287.182,
    "is_outlier": true
  },
  {
    "name": "Lackawanna",
    "nominal_pct": 0.000664,
    "nonmonetary_pct": 0.07424,
    "cash_bail_pct": 0.525826,
    "ror_pct": 0.017937,
    "unsecured_pct": 0.381332,
    "total_cases": 6021,
    "cash_bail_cases": 3166,
    "ror_cases": 108,
    "avg_bail_amount": 32984.23879,
    "non_posting_rate": 0.722678,
    "cash_bail_pct_black": 0.666667,
    "cash_bail_cases_black": 788,
    "cash_bail_pct_white": 0.490579,
    "bail_amount_black": 43937.30965,
    "bail_amount_white": 29251.71468,
    "bail_amount_diff": 14685.59497,
    "is_outlier": false
  },
  {
    "name": "Lancaster",
    "nominal_pct": 0.000879,
    "nonmonetary_pct": 0.000959,
    "cash_bail_pct": 0.450839,
    "ror_pct": 0.146283,
    "unsecured_pct": 0.401039,
    "total_cases": 12510,
    "cash_bail_cases": 5640,
    "ror_cases": 1830,
    "avg_bail_amount": 56861.72021,
    "non_posting_rate": 0.646809,
    "cash_bail_pct_black": 0.552574,
    "cash_bail_cases_black": 1256,
    "cash_bail_pct_white": 0.43393,
    "bail_amount_black": 66013.01752,
    "bail_amount_white": 55177.34693,
    "bail_amount_diff": 10835.67059,
    "is_outlier": false
  },
  {
    "name": "Lawrence",
    "nominal_pct": 0.000454,
    "nonmonetary_pct": 0.246824,
    "cash_bail_pct": 0.50726,
    "ror_pct": 0.221416,
    "unsecured_pct": 0.024047,
    "total_cases": 2204,
    "cash_bail_cases": 1118,
    "ror_cases": 488,
    "avg_bail_amount": 22124.77639,
    "non_posting_rate": 0.457961,
    "cash_bail_pct_black": 0.68784,
    "cash_bail_cases_black": 379,
    "cash_bail_pct_white": 0.451511,
    "bail_amount_black": 30965.69921,
    "bail_amount_white": 16481.8689,
    "bail_amount_diff": 14483.83031,
    "is_outlier": false
  },
  {
    "name": "Lebanon",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.377892,
    "ror_pct": 0.002828,
    "unsecured_pct": 0.61928,
    "total_cases": 3890,
    "cash_bail_cases": 1470,
    "ror_cases": 11,
    "avg_bail_amount": 36573.77687,
    "non_posting_rate": 0.427211,
    "cash_bail_pct_black": 0.511429,
    "cash_bail_cases_black": 179,
    "cash_bail_pct_white": 0.37101,
    "bail_amount_black": 67514.52514,
    "bail_amount_white": 33646.29203,
    "bail_amount_diff": 33868.23311,
    "is_outlier": false
  },
  {
    "name": "Lehigh",
    "nominal_pct": 0.00168,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.565002,
    "ror_pct": 0.083714,
    "unsecured_pct": 0.349603,
    "total_cases": 10715,
    "cash_bail_cases": 6054,
    "ror_cases": 897,
    "avg_bail_amount": 23279.31682,
    "non_posting_rate": 0.579452,
    "cash_bail_pct_black": 0.625051,
    "cash_bail_cases_black": 1537,
    "cash_bail_pct_white": 0.545657,
    "bail_amount_black": 27318.21991,
    "bail_amount_white": 22187.57741,
    "bail_amount_diff": 5130.642495,
    "is_outlier": false
  },
  {
    "name": "Luzerne",
    "nominal_pct": 0.000319,
    "nonmonetary_pct": 0.011286,
    "cash_bail_pct": 0.408752,
    "ror_pct": 0.306963,
    "unsecured_pct": 0.272679,
    "total_cases": 9392,
    "cash_bail_cases": 3839,
    "ror_cases": 2883,
    "avg_bail_amount": 39863.67079,
    "non_posting_rate": 0.669706,
    "cash_bail_pct_black": 0.577887,
    "cash_bail_cases_black": 1061,
    "cash_bail_pct_white": 0.368782,
    "bail_amount_black": 52198.33662,
    "bail_amount_white": 36195.32523,
    "bail_amount_diff": 16003.01139,
    "is_outlier": false
  },
  {
    "name": "Lycoming",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.344184,
    "ror_pct": 0.002523,
    "unsecured_pct": 0.653293,
    "total_cases": 3963,
    "cash_bail_cases": 1364,
    "ror_cases": 10,
    "avg_bail_amount": 59972.14076,
    "non_posting_rate": 0.732405,
    "cash_bail_pct_black": 0.559162,
    "cash_bail_cases_black": 534,
    "cash_bail_pct_white": 0.277141,
    "bail_amount_black": 85748.12734,
    "bail_amount_white": 43319.95134,
    "bail_amount_diff": 42428.176,
    "is_outlier": false
  },
  {
    "name": "McKean",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.00087,
    "cash_bail_pct": 0.41913,
    "ror_pct": 0.050435,
    "unsecured_pct": 0.529565,
    "total_cases": 1150,
    "cash_bail_cases": 482,
    "ror_cases": 58,
    "avg_bail_amount": 25103.73444,
    "non_posting_rate": 0.695021,
    "cash_bail_pct_black": 0.605634,
    "cash_bail_cases_black": 43,
    "cash_bail_pct_white": 0.412916,
    "bail_amount_black": 35930.23256,
    "bail_amount_white": 24742.891,
    "bail_amount_diff": 11187.34156,
    "is_outlier": true
  },
  {
    "name": "Mercer",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.120947,
    "cash_bail_pct": 0.356634,
    "ror_pct": 0.115429,
    "unsecured_pct": 0.40699,
    "total_cases": 4349,
    "cash_bail_cases": 1551,
    "ror_cases": 502,
    "avg_bail_amount": 28138.29787,
    "non_posting_rate": 0.508704,
    "cash_bail_pct_black": 0.456349,
    "cash_bail_cases_black": 460,
    "cash_bail_pct_white": 0.326274,
    "bail_amount_black": 33481.52174,
    "bail_amount_white": 25741.76858,
    "bail_amount_diff": 7739.75316,
    "is_outlier": false
  },
  {
    "name": "Mifflin",
    "nominal_pct": 0.000727,
    "nonmonetary_pct": 0.002909,
    "cash_bail_pct": 0.480727,
    "ror_pct": 0.003636,
    "unsecured_pct": 0.512,
    "total_cases": 1375,
    "cash_bail_cases": 661,
    "ror_cases": 5,
    "avg_bail_amount": 49405.76399,
    "non_posting_rate": 0.822995,
    "cash_bail_pct_black": 0.702381,
    "cash_bail_cases_black": 59,
    "cash_bail_pct_white": 0.469756,
    "bail_amount_black": 114474.5763,
    "bail_amount_white": 43165.90301,
    "bail_amount_diff": 71308.67326,
    "is_outlier": false
  },
  {
    "name": "Monroe",
    "nominal_pct": 0.000181,
    "nonmonetary_pct": 0.004515,
    "cash_bail_pct": 0.335922,
    "ror_pct": 0.175546,
    "unsecured_pct": 0.483836,
    "total_cases": 5537,
    "cash_bail_cases": 1860,
    "ror_cases": 972,
    "avg_bail_amount": 30385.00054,
    "non_posting_rate": 0.385484,
    "cash_bail_pct_black": 0.361759,
    "cash_bail_cases_black": 543,
    "cash_bail_pct_white": 0.331622,
    "bail_amount_black": 38310.6814,
    "bail_amount_white": 27099.69118,
    "bail_amount_diff": 11210.99022,
    "is_outlier": false
  },
  {
    "name": "Montgomery",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.004938,
    "cash_bail_pct": 0.37538,
    "ror_pct": 0.152954,
    "unsecured_pct": 0.466728,
    "total_cases": 17417,
    "cash_bail_cases": 6538,
    "ror_cases": 2664,
    "avg_bail_amount": 33857.12585,
    "non_posting_rate": 0.638574,
    "cash_bail_pct_black": 0.487213,
    "cash_bail_cases_black": 3010,
    "cash_bail_pct_white": 0.319375,
    "bail_amount_black": 36939.01522,
    "bail_amount_white": 30934.82705,
    "bail_amount_diff": 6004.188171,
    "is_outlier": false
  },
  {
    "name": "Montour",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.007874,
    "cash_bail_pct": 0.354331,
    "ror_pct": 0.413386,
    "unsecured_pct": 0.224409,
    "total_cases": 254,
    "cash_bail_cases": 90,
    "ror_cases": 105,
    "avg_bail_amount": 38861.11111,
    "non_posting_rate": 0.666667,
    "cash_bail_pct_black": 0.478261,
    "cash_bail_cases_black": 11,
    "cash_bail_pct_white": 0.35,
    "bail_amount_black": 39545.45455,
    "bail_amount_white": 39188.31169,
    "bail_amount_diff": 357.142857,
    "is_outlier": true
  },
  {
    "name": "Northampton",
    "nominal_pct": 0.001972,
    "nonmonetary_pct": 0.000303,
    "cash_bail_pct": 0.507359,
    "ror_pct": 0.082992,
    "unsecured_pct": 0.407374,
    "total_cases": 6591,
    "cash_bail_cases": 3344,
    "ror_cases": 547,
    "avg_bail_amount": 30214.74342,
    "non_posting_rate": 0.550837,
    "cash_bail_pct_black": 0.600712,
    "cash_bail_cases_black": 844,
    "cash_bail_pct_white": 0.486885,
    "bail_amount_black": 42868.66114,
    "bail_amount_white": 26636.32491,
    "bail_amount_diff": 16232.33623,
    "is_outlier": false
  },
  {
    "name": "Northumberland",
    "nominal_pct": 0.00043,
    "nonmonetary_pct": 0.00086,
    "cash_bail_pct": 0.376774,
    "ror_pct": 0.117849,
    "unsecured_pct": 0.504086,
    "total_cases": 2325,
    "cash_bail_cases": 876,
    "ror_cases": 274,
    "avg_bail_amount": 44800.34932,
    "non_posting_rate": 0.584475,
    "cash_bail_pct_black": 0.590674,
    "cash_bail_cases_black": 114,
    "cash_bail_pct_white": 0.353759,
    "bail_amount_black": 72181.57895,
    "bail_amount_white": 42108.45124,
    "bail_amount_diff": 30073.12771,
    "is_outlier": false
  },
  {
    "name": "Perry",
    "nominal_pct": 0.015512,
    "nonmonetary_pct": 0.009307,
    "cash_bail_pct": 0.301965,
    "ror_pct": 0.427094,
    "unsecured_pct": 0.246122,
    "total_cases": 967,
    "cash_bail_cases": 292,
    "ror_cases": 413,
    "avg_bail_amount": 27077.84247,
    "non_posting_rate": 0.763699,
    "cash_bail_pct_black": 0.442857,
    "cash_bail_cases_black": 31,
    "cash_bail_pct_white": 0.286848,
    "bail_amount_black": 49388.06452,
    "bail_amount_white": 24192.49012,
    "bail_amount_diff": 25195.5744,
    "is_outlier": true
  },
  {
    "name": "Philadelphia",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.057413,
    "cash_bail_pct": 0.499238,
    "ror_pct": 0.343043,
    "unsecured_pct": 0.100306,
    "total_cases": 64951,
    "cash_bail_cases": 32426,
    "ror_cases": 22281,
    "avg_bail_amount": 62130.10856,
    "non_posting_rate": 0.514001,
    "cash_bail_pct_black": 0.558269,
    "cash_bail_cases_black": 20503,
    "cash_bail_pct_white": 0.431232,
    "bail_amount_black": 65123.11369,
    "bail_amount_white": 56370.81098,
    "bail_amount_diff": 8752.302711,
    "is_outlier": false
  },
  {
    "name": "Pike",
    "nominal_pct": 0.00104,
    "nonmonetary_pct": 0.317048,
    "cash_bail_pct": 0.33264,
    "ror_pct": 0.288981,
    "unsecured_pct": 0.060291,
    "total_cases": 962,
    "cash_bail_cases": 320,
    "ror_cases": 278,
    "avg_bail_amount": 34725.15938,
    "non_posting_rate": 0.640625,
    "cash_bail_pct_black": 0.385965,
    "cash_bail_cases_black": 44,
    "cash_bail_pct_white": 0.330855,
    "bail_amount_black": 53193.18182,
    "bail_amount_white": 32148.13109,
    "bail_amount_diff": 21045.05073,
    "is_outlier": true
  },
  {
    "name": "Potter",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.021359,
    "cash_bail_pct": 0.225243,
    "ror_pct": 0.159223,
    "unsecured_pct": 0.594175,
    "total_cases": 515,
    "cash_bail_cases": 116,
    "ror_cases": 82,
    "avg_bail_amount": 23887.93103,
    "non_posting_rate": 0.698276,
    "cash_bail_pct_black": 0.8,
    "cash_bail_cases_black": 4,
    "cash_bail_pct_white": 0.2249,
    "bail_amount_black": 33562.5,
    "bail_amount_white": 23535.71429,
    "bail_amount_diff": 10026.78571,
    "is_outlier": true
  },
  {
    "name": "Schuylkill",
    "nominal_pct": 0.00147,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.399328,
    "ror_pct": 0.112744,
    "unsecured_pct": 0.486458,
    "total_cases": 4763,
    "cash_bail_cases": 1902,
    "ror_cases": 537,
    "avg_bail_amount": 25202.97056,
    "non_posting_rate": 0.602524,
    "cash_bail_pct_black": 0.487535,
    "cash_bail_cases_black": 176,
    "cash_bail_pct_white": 0.394481,
    "bail_amount_black": 37605.11364,
    "bail_amount_white": 24236.65491,
    "bail_amount_diff": 13368.45873,
    "is_outlier": false
  },
  {
    "name": "Snyder",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.027748,
    "cash_bail_pct": 0.36286,
    "ror_pct": 0.03842,
    "unsecured_pct": 0.570971,
    "total_cases": 937,
    "cash_bail_cases": 340,
    "ror_cases": 36,
    "avg_bail_amount": 31695,
    "non_posting_rate": 0.444118,
    "cash_bail_pct_black": 0.521739,
    "cash_bail_cases_black": 36,
    "cash_bail_pct_white": 0.350348,
    "bail_amount_black": 33048.61111,
    "bail_amount_white": 31631.78808,
    "bail_amount_diff": 1416.823032,
    "is_outlier": true
  },
  {
    "name": "Somerset",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.486546,
    "cash_bail_pct": 0.249863,
    "ror_pct": 0.024712,
    "unsecured_pct": 0.23888,
    "total_cases": 1821,
    "cash_bail_cases": 455,
    "ror_cases": 45,
    "avg_bail_amount": 45684.61539,
    "non_posting_rate": 0.56044,
    "cash_bail_pct_black": 0.705882,
    "cash_bail_cases_black": 60,
    "cash_bail_pct_white": 0.231132,
    "bail_amount_black": 84933.33333,
    "bail_amount_white": 38187.5,
    "bail_amount_diff": 46745.83333,
    "is_outlier": false
  },
  {
    "name": "Sullivan",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.365385,
    "ror_pct": 0.019231,
    "unsecured_pct": 0.615385,
    "total_cases": 104,
    "cash_bail_cases": 38,
    "ror_cases": 2,
    "avg_bail_amount": 18328.94737,
    "non_posting_rate": 0.684211,
    "cash_bail_pct_black": 0.625,
    "cash_bail_cases_black": 5,
    "cash_bail_pct_white": 0.326087,
    "bail_amount_black": 8000,
    "bail_amount_white": 20516.66667,
    "bail_amount_diff": -12516.66667,
    "is_outlier": true
  },
  {
    "name": "Susquehanna",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.009485,
    "cash_bail_pct": 0.394309,
    "ror_pct": 0.261518,
    "unsecured_pct": 0.334688,
    "total_cases": 738,
    "cash_bail_cases": 291,
    "ror_cases": 193,
    "avg_bail_amount": 29464.60481,
    "non_posting_rate": 0.735395,
    "cash_bail_pct_black": 0.65,
    "cash_bail_cases_black": 13,
    "cash_bail_pct_white": 0.388652,
    "bail_amount_black": 43346.15385,
    "bail_amount_white": 29491.60584,
    "bail_amount_diff": 13854.54801,
    "is_outlier": true
  },
  {
    "name": "Tioga",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.313167,
    "ror_pct": 0.000000,
    "unsecured_pct": 0.686833,
    "total_cases": 843,
    "cash_bail_cases": 264,
    "ror_cases": "0",
    "avg_bail_amount": 34378.78788,
    "non_posting_rate": 0.787879,
    "cash_bail_pct_black": 0.535714,
    "cash_bail_cases_black": 15,
    "cash_bail_pct_white": 0.304455,
    "bail_amount_black": 49300,
    "bail_amount_white": 33552.84553,
    "bail_amount_diff": 15747.15447,
    "is_outlier": true
  },
  {
    "name": "Union",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.145588,
    "cash_bail_pct": 0.255882,
    "ror_pct": 0.488235,
    "unsecured_pct": 0.110294,
    "total_cases": 680,
    "cash_bail_cases": 174,
    "ror_cases": 332,
    "avg_bail_amount": 31385.05747,
    "non_posting_rate": 0.735632,
    "cash_bail_pct_black": 0.381579,
    "cash_bail_cases_black": 29,
    "cash_bail_pct_white": 0.235094,
    "bail_amount_black": 45637.93103,
    "bail_amount_white": 28018.11594,
    "bail_amount_diff": 17619.81509,
    "is_outlier": true
  },
  {
    "name": "Venango",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.384401,
    "ror_pct": 0.001393,
    "unsecured_pct": 0.614206,
    "total_cases": 1436,
    "cash_bail_cases": 552,
    "ror_cases": 2,
    "avg_bail_amount": 41589.67391,
    "non_posting_rate": 0.737319,
    "cash_bail_pct_black": 0.635659,
    "cash_bail_cases_black": 82,
    "cash_bail_pct_white": 0.359568,
    "bail_amount_black": 53475.60976,
    "bail_amount_white": 39360.51502,
    "bail_amount_diff": 14115.09474,
    "is_outlier": false
  },
  {
    "name": "Warren",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.025455,
    "cash_bail_pct": 0.404848,
    "ror_pct": 0.413333,
    "unsecured_pct": 0.156364,
    "total_cases": 825,
    "cash_bail_cases": 334,
    "ror_cases": 341,
    "avg_bail_amount": 31258.98204,
    "non_posting_rate": 0.757485,
    "cash_bail_pct_black": 0.684211,
    "cash_bail_cases_black": 13,
    "cash_bail_pct_white": 0.398983,
    "bail_amount_black": 49769.23077,
    "bail_amount_white": 30089.17198,
    "bail_amount_diff": 19680.05879,
    "is_outlier": true
  },
  {
    "name": "Washington",
    "nominal_pct": 0.000162,
    "nonmonetary_pct": 0.010351,
    "cash_bail_pct": 0.395924,
    "ror_pct": 0.260877,
    "unsecured_pct": 0.332686,
    "total_cases": 6183,
    "cash_bail_cases": 2448,
    "ror_cases": 1613,
    "avg_bail_amount": 30160.78391,
    "non_posting_rate": 0.635621,
    "cash_bail_pct_black": 0.567729,
    "cash_bail_cases_black": 570,
    "cash_bail_pct_white": 0.365188,
    "bail_amount_black": 46258.07018,
    "bail_amount_white": 23939.11435,
    "bail_amount_diff": 22318.95583,
    "is_outlier": false
  },
  {
    "name": "Wayne",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.376344,
    "ror_pct": 0.342742,
    "unsecured_pct": 0.280914,
    "total_cases": 744,
    "cash_bail_cases": 280,
    "ror_cases": 255,
    "avg_bail_amount": 34030.71429,
    "non_posting_rate": 0.467857,
    "cash_bail_pct_black": 0.6,
    "cash_bail_cases_black": 21,
    "cash_bail_pct_white": 0.36099,
    "bail_amount_black": 28619.04762,
    "bail_amount_white": 36399.59677,
    "bail_amount_diff": -7780.549155,
    "is_outlier": true
  },
  {
    "name": "Westmoreland",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.045757,
    "cash_bail_pct": 0.31714,
    "ror_pct": 0.327603,
    "unsecured_pct": 0.3095,
    "total_cases": 12042,
    "cash_bail_cases": 3819,
    "ror_cases": 3945,
    "avg_bail_amount": 23548.32216,
    "non_posting_rate": 0.710919,
    "cash_bail_pct_black": 0.495816,
    "cash_bail_cases_black": 948,
    "cash_bail_pct_white": 0.287781,
    "bail_amount_black": 38192.51213,
    "bail_amount_white": 18989.29884,
    "bail_amount_diff": 19203.21329,
    "is_outlier": false
  },
  {
    "name": "Wyoming",
    "nominal_pct": 0.000000,
    "nonmonetary_pct": 0.000000,
    "cash_bail_pct": 0.355005,
    "ror_pct": 0.002064,
    "unsecured_pct": 0.642931,
    "total_cases": 969,
    "cash_bail_cases": 344,
    "ror_cases": 2,
    "avg_bail_amount": 28720.13081,
    "non_posting_rate": 0.694767,
    "cash_bail_pct_black": 0.434783,
    "cash_bail_cases_black": 10,
    "cash_bail_pct_white": 0.353579,
    "bail_amount_black": 39000,
    "bail_amount_white": 28822.77607,
    "bail_amount_diff": 10177.22393,
    "is_outlier": true
  },
  {
    "name": "York",
    "nominal_pct": 0.003357,
    "nonmonetary_pct": 0.055543,
    "cash_bail_pct": 0.460769,
    "ror_pct": 0.333479,
    "unsecured_pct": 0.146851,
    "total_cases": 13701,
    "cash_bail_cases": 6313,
    "ror_cases": 4569,
    "avg_bail_amount": 26958.81841,
    "non_posting_rate": 0.592428,
    "cash_bail_pct_black": 0.568894,
    "cash_bail_cases_black": 1924,
    "cash_bail_pct_white": 0.427047,
    "bail_amount_black": 37078.00813,
    "bail_amount_white": 23258.83229,
    "bail_amount_diff": 13819.17584,
    "is_outlier": false
  }
];

// TODO: all data below should be derived from STATEWIDE_DATA and COUNTY_DATA
export const BAIL_RACE_RATE_DATA = [
  {
    "data": [
      "Adams",
      44.3,
      30.2,
      {
        "type": "line",
        "values": [
          44.3,
          30.2
        ]
      },
      "+14.1%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Allegheny",
      52.5,
      35,
      {
        "type": "line",
        "values": [
          52.5,
          35
        ]
      },
      "+17.5%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Armstrong",
      62.3,
      40.1,
      {
        "type": "line",
        "values": [
          62.3,
          40.1
        ]
      },
      "+22.2%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Beaver",
      65.3,
      46.1,
      {
        "type": "line",
        "values": [
          65.3,
          46.1
        ]
      },
      "+19.2%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Bedford",
      55.8,
      36,
      {
        "type": "line",
        "values": [
          55.8,
          36
        ]
      },
      "+19.8%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Berks",
      58.5,
      50.1,
      {
        "type": "line",
        "values": [
          58.5,
          50.1
        ]
      },
      "+8.4%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Blair",
      53.8,
      29.1,
      {
        "type": "line",
        "values": [
          53.8,
          29.1
        ]
      },
      "+24.7%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Bradford",
      61.5,
      45.6,
      {
        "type": "line",
        "values": [
          61.5,
          45.6
        ]
      },
      "+16.0%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Bucks",
      45.6,
      32.7,
      {
        "type": "line",
        "values": [
          45.6,
          32.7
        ]
      },
      "+12.9%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Butler",
      59.4,
      33.1,
      {
        "type": "line",
        "values": [
          59.4,
          33.1
        ]
      },
      "+26.3%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Cambria",
      66.4,
      39.8,
      {
        "type": "line",
        "values": [
          66.4,
          39.8
        ]
      },
      "+26.5%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Cameron",
      100,
      26.2,
      {
        "type": "line",
        "values": [
          100,
          26.2
        ]
      },
      "+73.8%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Carbon",
      47.5,
      32,
      {
        "type": "line",
        "values": [
          47.5,
          32
        ]
      },
      "+15.5%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Centre",
      49,
      22.8,
      {
        "type": "line",
        "values": [
          49,
          22.8
        ]
      },
      "+26.2%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Chester",
      49,
      34.3,
      {
        "type": "line",
        "values": [
          49,
          34.3
        ]
      },
      "+14.7%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Clarion",
      39.7,
      40.4,
      {
        "type": "line",
        "values": [
          39.7,
          40.4
        ]
      },
      "-0.7%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Clearfield",
      65.7,
      36.2,
      {
        "type": "line",
        "values": [
          65.7,
          36.2
        ]
      },
      "+29.5%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Clinton",
      39.8,
      33.1,
      {
        "type": "line",
        "values": [
          39.8,
          33.1
        ]
      },
      "+6.7%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Columbia",
      42.9,
      41.2,
      {
        "type": "line",
        "values": [
          42.9,
          41.2
        ]
      },
      "+1.7%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Crawford",
      55.1,
      34.1,
      {
        "type": "line",
        "values": [
          55.1,
          34.1
        ]
      },
      "+21.0%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Cumberland",
      55.1,
      37.6,
      {
        "type": "line",
        "values": [
          55.1,
          37.6
        ]
      },
      "+17.6%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Dauphin",
      53.7,
      37.9,
      {
        "type": "line",
        "values": [
          53.7,
          37.9
        ]
      },
      "+15.8%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Delaware",
      64.2,
      48.6,
      {
        "type": "line",
        "values": [
          64.2,
          48.6
        ]
      },
      "+15.6%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Elk",
      29.4,
      28.7,
      {
        "type": "line",
        "values": [
          29.4,
          28.7
        ]
      },
      "+0.7%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Erie",
      67.8,
      39.4,
      {
        "type": "line",
        "values": [
          67.8,
          39.4
        ]
      },
      "+28.4%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Fayette",
      54.2,
      43,
      {
        "type": "line",
        "values": [
          54.2,
          43
        ]
      },
      "+11.2%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Forest",
      88.9,
      31.3,
      {
        "type": "line",
        "values": [
          88.9,
          31.3
        ]
      },
      "+57.6%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Franklin",
      49.5,
      35.1,
      {
        "type": "line",
        "values": [
          49.5,
          35.1
        ]
      },
      "+14.4%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Fulton",
      28.6,
      29.1,
      {
        "type": "line",
        "values": [
          28.6,
          29.1
        ]
      },
      "-0.5%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Greene",
      58.3,
      39.7,
      {
        "type": "line",
        "values": [
          58.3,
          39.7
        ]
      },
      "+18.6%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Huntingdon",
      64.8,
      37,
      {
        "type": "line",
        "values": [
          64.8,
          37
        ]
      },
      "+27.9%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Indiana",
      49.4,
      39.3,
      {
        "type": "line",
        "values": [
          49.4,
          39.3
        ]
      },
      "+10.0%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Jefferson",
      69.7,
      38.4,
      {
        "type": "line",
        "values": [
          69.7,
          38.4
        ]
      },
      "+31.3%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Juniata",
      43.8,
      36.6,
      {
        "type": "line",
        "values": [
          43.8,
          36.6
        ]
      },
      "+7.2%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Lackawanna",
      66.7,
      49.1,
      {
        "type": "line",
        "values": [
          66.7,
          49.1
        ]
      },
      "+17.6%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lancaster",
      55.3,
      43.4,
      {
        "type": "line",
        "values": [
          55.3,
          43.4
        ]
      },
      "+11.9%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lawrence",
      68.8,
      45.2,
      {
        "type": "line",
        "values": [
          68.8,
          45.2
        ]
      },
      "+23.6%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lebanon",
      51.1,
      37.1,
      {
        "type": "line",
        "values": [
          51.1,
          37.1
        ]
      },
      "+14.0%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lehigh",
      62.5,
      54.6,
      {
        "type": "line",
        "values": [
          62.5,
          54.6
        ]
      },
      "+7.9%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Luzerne",
      57.8,
      36.9,
      {
        "type": "line",
        "values": [
          57.8,
          36.9
        ]
      },
      "+20.9%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lycoming",
      55.9,
      27.7,
      {
        "type": "line",
        "values": [
          55.9,
          27.7
        ]
      },
      "+28.2%"
    ],
    "outlier": false
  },
  {
    "data": [
      "McKean",
      60.6,
      41.3,
      {
        "type": "line",
        "values": [
          60.6,
          41.3
        ]
      },
      "+19.3%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Mercer",
      45.6,
      32.6,
      {
        "type": "line",
        "values": [
          45.6,
          32.6
        ]
      },
      "+13.0%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Mifflin",
      70.2,
      47,
      {
        "type": "line",
        "values": [
          70.2,
          47
        ]
      },
      "+23.3%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Monroe",
      36.2,
      33.2,
      {
        "type": "line",
        "values": [
          36.2,
          33.2
        ]
      },
      "+3.0%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Montgomery",
      48.7,
      31.9,
      {
        "type": "line",
        "values": [
          48.7,
          31.9
        ]
      },
      "+16.8%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Montour",
      47.8,
      35,
      {
        "type": "line",
        "values": [
          47.8,
          35
        ]
      },
      "+12.8%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Northampton",
      60.1,
      48.7,
      {
        "type": "line",
        "values": [
          60.1,
          48.7
        ]
      },
      "+11.4%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Northumberland",
      59.1,
      35.4,
      {
        "type": "line",
        "values": [
          59.1,
          35.4
        ]
      },
      "+23.7%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Perry",
      44.3,
      28.7,
      {
        "type": "line",
        "values": [
          44.3,
          28.7
        ]
      },
      "+15.6%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Philadelphia",
      55.8,
      43.1,
      {
        "type": "line",
        "values": [
          55.8,
          43.1
        ]
      },
      "+12.7%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Pike",
      38.6,
      33.1,
      {
        "type": "line",
        "values": [
          38.6,
          33.1
        ]
      },
      "+5.5%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Potter",
      80,
      22.5,
      {
        "type": "line",
        "values": [
          80,
          22.5
        ]
      },
      "+57.5%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Schuylkill",
      48.8,
      39.4,
      {
        "type": "line",
        "values": [
          48.8,
          39.4
        ]
      },
      "+9.3%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Snyder",
      52.2,
      35,
      {
        "type": "line",
        "values": [
          52.2,
          35
        ]
      },
      "+17.1%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Somerset",
      70.6,
      23.1,
      {
        "type": "line",
        "values": [
          70.6,
          23.1
        ]
      },
      "+47.5%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Sullivan",
      62.5,
      32.6,
      {
        "type": "line",
        "values": [
          62.5,
          32.6
        ]
      },
      "+29.9%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Susquehanna",
      65,
      38.9,
      {
        "type": "line",
        "values": [
          65,
          38.9
        ]
      },
      "+26.1%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Tioga",
      53.6,
      30.4,
      {
        "type": "line",
        "values": [
          53.6,
          30.4
        ]
      },
      "+23.1%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Union",
      38.2,
      23.5,
      {
        "type": "line",
        "values": [
          38.2,
          23.5
        ]
      },
      "+14.6%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Venango",
      63.6,
      36,
      {
        "type": "line",
        "values": [
          63.6,
          36
        ]
      },
      "+27.6%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Warren",
      68.4,
      39.9,
      {
        "type": "line",
        "values": [
          68.4,
          39.9
        ]
      },
      "+28.5%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Washington",
      56.8,
      36.5,
      {
        "type": "line",
        "values": [
          56.8,
          36.5
        ]
      },
      "+20.3%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Wayne",
      60,
      36.1,
      {
        "type": "line",
        "values": [
          60,
          36.1
        ]
      },
      "+23.9%"
    ],
    "outlier": true
  },
  {
    "data": [
      "Westmoreland",
      49.6,
      28.8,
      {
        "type": "line",
        "values": [
          49.6,
          28.8
        ]
      },
      "+20.8%"
    ],
    "outlier": false
  },
  {
    "data": [
      "Wyoming",
      43.5,
      35.4,
      {
        "type": "line",
        "values": [
          43.5,
          35.4
        ]
      },
      "+8.1%"
    ],
    "outlier": true
  },
  {
    "data": [
      "York",
      56.9,
      42.7,
      {
        "type": "line",
        "values": [
          56.9,
          42.7
        ]
      },
      "+14.2%"
    ],
    "outlier": false
  }
];
export const BAIL_RACE_AMOUNT_DATA = [
  {
    "data": [
      "Adams",
      "$39.3K",
      "$29.1K",
      {
        "type": "line",
        "values": [
          39303,
          29095
        ]
      },
      "+$10.2K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Allegheny",
      "$18.8K",
      "$13.9K",
      {
        "type": "line",
        "values": [
          18845,
          13922
        ]
      },
      "+$4.9K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Armstrong",
      "$19.4K",
      "$14.7K",
      {
        "type": "line",
        "values": [
          19380,
          14657
        ]
      },
      "+$4.7K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Beaver",
      "$32.0K",
      "$16.0K",
      {
        "type": "line",
        "values": [
          32044,
          15970
        ]
      },
      "+$16.1K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Bedford",
      "$82.1K",
      "$51.6K",
      {
        "type": "line",
        "values": [
          82146,
          51606
        ]
      },
      "+$30.5K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Berks",
      "$41.5K",
      "$35.4K",
      {
        "type": "line",
        "values": [
          41515,
          35373
        ]
      },
      "+$6.1K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Blair",
      "$50.9K",
      "$30.8K",
      {
        "type": "line",
        "values": [
          50874,
          30765
        ]
      },
      "+$20.1K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Bradford",
      "$68.1K",
      "$34.3K",
      {
        "type": "line",
        "values": [
          68109,
          34295
        ]
      },
      "+$33.8K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Bucks",
      "$87.4K",
      "$73.9K",
      {
        "type": "line",
        "values": [
          87412,
          73919
        ]
      },
      "+$13.5K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Butler",
      "$43.7K",
      "$21.8K",
      {
        "type": "line",
        "values": [
          43726,
          21801
        ]
      },
      "+$21.9K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Cambria",
      "$58.4K",
      "$32.6K",
      {
        "type": "line",
        "values": [
          58433,
          32649
        ]
      },
      "+$25.8K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Cameron",
      "$42.2K",
      "$27.9K",
      {
        "type": "line",
        "values": [
          42175,
          27852
        ]
      },
      "+$14.3K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Carbon",
      "$44.0K",
      "$31.1K",
      {
        "type": "line",
        "values": [
          43984,
          31084
        ]
      },
      "+$12.9K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Centre",
      "$56.8K",
      "$46.9K",
      {
        "type": "line",
        "values": [
          56771,
          46869
        ]
      },
      "+$9.9K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Chester",
      "$37.4K",
      "$31.4K",
      {
        "type": "line",
        "values": [
          37417,
          31421
        ]
      },
      "+$6.0K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Clarion",
      "$14.1K",
      "$24.0K",
      {
        "type": "line",
        "values": [
          14104,
          24034
        ]
      },
      "-$9.9K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Clearfield",
      "$59.5K",
      "$27.2K",
      {
        "type": "line",
        "values": [
          59500,
          27241
        ]
      },
      "+$32.3K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Clinton",
      "$30.6K",
      "$28.1K",
      {
        "type": "line",
        "values": [
          30579,
          28093
        ]
      },
      "+$2.5K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Columbia",
      "$60.9K",
      "$34.3K",
      {
        "type": "line",
        "values": [
          60938,
          34291
        ]
      },
      "+$26.6K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Crawford",
      "$29.8K",
      "$26.3K",
      {
        "type": "line",
        "values": [
          29782,
          26269
        ]
      },
      "+$3.5K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Cumberland",
      "$35.4K",
      "$25.4K",
      {
        "type": "line",
        "values": [
          35424,
          25383
        ]
      },
      "+$10.0K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Dauphin",
      "$45.9K",
      "$40.0K",
      {
        "type": "line",
        "values": [
          45890,
          40000
        ]
      },
      "+$5.9K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Delaware",
      "$52.7K",
      "$35.6K",
      {
        "type": "line",
        "values": [
          52748,
          35606
        ]
      },
      "+$17.1K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Elk",
      "$17.5K",
      "$29.5K",
      {
        "type": "line",
        "values": [
          17460,
          29516
        ]
      },
      "-$12.1K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Erie",
      "$41.0K",
      "$26.8K",
      {
        "type": "line",
        "values": [
          41009,
          26793
        ]
      },
      "+$14.2K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Fayette",
      "$29.7K",
      "$20.2K",
      {
        "type": "line",
        "values": [
          29696,
          20177
        ]
      },
      "+$9.5K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Forest",
      "$27.4K",
      "$27.1K",
      {
        "type": "line",
        "values": [
          27375,
          27087
        ]
      },
      "+$0.3K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Franklin",
      "$65.1K",
      "$64.3K",
      {
        "type": "line",
        "values": [
          65076,
          64310
        ]
      },
      "+$0.8K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Fulton",
      "$38.0K",
      "$69.3K",
      {
        "type": "line",
        "values": [
          38000,
          69271
        ]
      },
      "-$31.3K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Greene",
      "$21.0K",
      "$18.3K",
      {
        "type": "line",
        "values": [
          21024,
          18310
        ]
      },
      "+$2.7K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Huntingdon",
      "$24.3K",
      "$21.8K",
      {
        "type": "line",
        "values": [
          24255,
          21800
        ]
      },
      "+$2.5K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Indiana",
      "$28.7K",
      "$15.4K",
      {
        "type": "line",
        "values": [
          28699,
          15396
        ]
      },
      "+$13.3K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Jefferson",
      "$79.6K",
      "$51.4K",
      {
        "type": "line",
        "values": [
          79565,
          51413
        ]
      },
      "+$28.2K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Juniata",
      "$39.1K",
      "$26.8K",
      {
        "type": "line",
        "values": [
          39071,
          26784
        ]
      },
      "+$12.3K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Lackawanna",
      "$43.9K",
      "$29.3K",
      {
        "type": "line",
        "values": [
          43937,
          29252
        ]
      },
      "+$14.7K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lancaster",
      "$66.0K",
      "$55.2K",
      {
        "type": "line",
        "values": [
          66013,
          55177
        ]
      },
      "+$10.8K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lawrence",
      "$31.0K",
      "$16.5K",
      {
        "type": "line",
        "values": [
          30966,
          16482
        ]
      },
      "+$14.5K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lebanon",
      "$67.5K",
      "$33.6K",
      {
        "type": "line",
        "values": [
          67515,
          33646
        ]
      },
      "+$33.9K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lehigh",
      "$27.3K",
      "$22.2K",
      {
        "type": "line",
        "values": [
          27318,
          22188
        ]
      },
      "+$5.1K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Luzerne",
      "$52.2K",
      "$36.2K",
      {
        "type": "line",
        "values": [
          52198,
          36195
        ]
      },
      "+$16.0K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lycoming",
      "$85.7K",
      "$43.3K",
      {
        "type": "line",
        "values": [
          85748,
          43320
        ]
      },
      "+$42.4K"
    ],
    "outlier": false
  },
  {
    "data": [
      "McKean",
      "$35.9K",
      "$24.7K",
      {
        "type": "line",
        "values": [
          35930,
          24743
        ]
      },
      "+$11.2K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Mercer",
      "$33.5K",
      "$25.7K",
      {
        "type": "line",
        "values": [
          33482,
          25742
        ]
      },
      "+$7.7K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Mifflin",
      "$114.5K",
      "$43.2K",
      {
        "type": "line",
        "values": [
          114475,
          43166
        ]
      },
      "+$71.3K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Monroe",
      "$38.3K",
      "$27.1K",
      {
        "type": "line",
        "values": [
          38311,
          27100
        ]
      },
      "+$11.2K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Montgomery",
      "$36.9K",
      "$30.9K",
      {
        "type": "line",
        "values": [
          36939,
          30935
        ]
      },
      "+$6.0K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Montour",
      "$39.5K",
      "$39.2K",
      {
        "type": "line",
        "values": [
          39545,
          39188
        ]
      },
      "+$0.4K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Northampton",
      "$42.9K",
      "$26.6K",
      {
        "type": "line",
        "values": [
          42869,
          26636
        ]
      },
      "+$16.2K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Northumberland",
      "$72.2K",
      "$42.1K",
      {
        "type": "line",
        "values": [
          72182,
          42108
        ]
      },
      "+$30.1K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Perry",
      "$49.4K",
      "$24.2K",
      {
        "type": "line",
        "values": [
          49388,
          24192
        ]
      },
      "+$25.2K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Philadelphia",
      "$65.1K",
      "$56.4K",
      {
        "type": "line",
        "values": [
          65123,
          56371
        ]
      },
      "+$8.8K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Pike",
      "$53.2K",
      "$32.1K",
      {
        "type": "line",
        "values": [
          53193,
          32148
        ]
      },
      "+$21.0K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Potter",
      "$33.6K",
      "$23.5K",
      {
        "type": "line",
        "values": [
          33563,
          23536
        ]
      },
      "+$10.0K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Schuylkill",
      "$37.6K",
      "$24.2K",
      {
        "type": "line",
        "values": [
          37605,
          24237
        ]
      },
      "+$13.4K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Snyder",
      "$33.0K",
      "$31.6K",
      {
        "type": "line",
        "values": [
          33049,
          31632
        ]
      },
      "+$1.4K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Somerset",
      "$84.9K",
      "$38.2K",
      {
        "type": "line",
        "values": [
          84933,
          38188
        ]
      },
      "+$46.7K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Sullivan",
      "$8.0K",
      "$20.5K",
      {
        "type": "line",
        "values": [
          8000,
          20517
        ]
      },
      "-$12.5K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Susquehanna",
      "$43.3K",
      "$29.5K",
      {
        "type": "line",
        "values": [
          43346,
          29492
        ]
      },
      "+$13.9K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Tioga",
      "$49.3K",
      "$33.6K",
      {
        "type": "line",
        "values": [
          49300,
          33553
        ]
      },
      "+$15.7K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Union",
      "$45.6K",
      "$28.0K",
      {
        "type": "line",
        "values": [
          45638,
          28018
        ]
      },
      "+$17.6K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Venango",
      "$53.5K",
      "$39.4K",
      {
        "type": "line",
        "values": [
          53476,
          39361
        ]
      },
      "+$14.1K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Warren",
      "$49.8K",
      "$30.1K",
      {
        "type": "line",
        "values": [
          49769,
          30089
        ]
      },
      "+$19.7K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Washington",
      "$46.3K",
      "$23.9K",
      {
        "type": "line",
        "values": [
          46258,
          23939
        ]
      },
      "+$22.3K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Wayne",
      "$28.6K",
      "$36.4K",
      {
        "type": "line",
        "values": [
          28619,
          36400
        ]
      },
      "-$7.8K"
    ],
    "outlier": true
  },
  {
    "data": [
      "Westmoreland",
      "$38.2K",
      "$19.0K",
      {
        "type": "line",
        "values": [
          38193,
          18989
        ]
      },
      "+$19.2K"
    ],
    "outlier": false
  },
  {
    "data": [
      "Wyoming",
      "$39.0K",
      "$28.8K",
      {
        "type": "line",
        "values": [
          39000,
          28823
        ]
      },
      "+$10.2K"
    ],
    "outlier": true
  },
  {
    "data": [
      "York",
      "$37.1K",
      "$23.3K",
      {
        "type": "line",
        "values": [
          37078,
          23259
        ]
      },
      "+$13.8K"
    ],
    "outlier": false
  }
];

export const PA_AVG_BLACK_BAIL_RATE = 55.9;
export const PA_AVG_WHITE_BAIL_RATE = 36.5;
export const PA_AVG_RACE_BAIL_RATE_DIFF = "+19.4%"
export const PA_BLACK_CASES = 45452;
export const PA_WHITE_CASES = 31965;
export const PA_AVG_BLACK_BAIL_AMT = "$45.5K";
export const PA_AVG_WHITE_BAIL_AMT = "$32.0K";
export const PA_AVG_RACE_BAIL_AMT_DIFF = "13.5K";

export const RACE_SCATTER_PLOT = {
  "Adams": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 44.3,
      "white": 30.2
    },
    "y": {
      "black": "$39,303",
      "white": "$29,095"
    }
  },
  "Allegheny": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 52.5,
      "white": 35
    },
    "y": {
      "black": "$18,845",
      "white": "$13,922"
    }
  },
  "Armstrong": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 62.3,
      "white": 40.1
    },
    "y": {
      "black": "$19,380",
      "white": "$14,657"
    }
  },
  "Beaver": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 65.3,
      "white": 46.1
    },
    "y": {
      "black": "$32,044",
      "white": "$15,970"
    }
  },
  "Bedford": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 55.8,
      "white": 36
    },
    "y": {
      "black": "$82,146",
      "white": "$51,606"
    }
  },
  "Berks": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 58.5,
      "white": 50.1
    },
    "y": {
      "black": "$41,515",
      "white": "$35,373"
    }
  },
  "Blair": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 53.8,
      "white": 29.1
    },
    "y": {
      "black": "$50,874",
      "white": "$30,765"
    }
  },
  "Bradford": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 61.5,
      "white": 45.6
    },
    "y": {
      "black": "$68,109",
      "white": "$34,295"
    }
  },
  "Bucks": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 45.6,
      "white": 32.7
    },
    "y": {
      "black": "$87,412",
      "white": "$73,919"
    }
  },
  "Butler": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 59.4,
      "white": 33.1
    },
    "y": {
      "black": "$43,726",
      "white": "$21,801"
    }
  },
  "Cambria": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 66.4,
      "white": 39.8
    },
    "y": {
      "black": "$58,433",
      "white": "$32,649"
    }
  },
  "Cameron": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 100,
      "white": 26.2
    },
    "y": {
      "black": "$42,175",
      "white": "$27,852"
    }
  },
  "Carbon": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 47.5,
      "white": 32
    },
    "y": {
      "black": "$43,984",
      "white": "$31,084"
    }
  },
  "Centre": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 49,
      "white": 22.8
    },
    "y": {
      "black": "$56,771",
      "white": "$46,869"
    }
  },
  "Chester": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 49,
      "white": 34.3
    },
    "y": {
      "black": "$37,417",
      "white": "$31,421"
    }
  },
  "Clarion": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 39.7,
      "white": 40.4
    },
    "y": {
      "black": "$14,104",
      "white": "$24,034"
    }
  },
  "Clearfield": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 65.7,
      "white": 36.2
    },
    "y": {
      "black": "$59,500",
      "white": "$27,241"
    }
  },
  "Clinton": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 39.8,
      "white": 33.1
    },
    "y": {
      "black": "$30,579",
      "white": "$28,093"
    }
  },
  "Columbia": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 42.9,
      "white": 41.2
    },
    "y": {
      "black": "$60,938",
      "white": "$34,291"
    }
  },
  "Crawford": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 55.1,
      "white": 34.1
    },
    "y": {
      "black": "$29,782",
      "white": "$26,269"
    }
  },
  "Cumberland": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 55.1,
      "white": 37.6
    },
    "y": {
      "black": "$35,424",
      "white": "$25,383"
    }
  },
  "Dauphin": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 53.7,
      "white": 37.9
    },
    "y": {
      "black": "$45,890",
      "white": "$40,000"
    }
  },
  "Delaware": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 64.2,
      "white": 48.6
    },
    "y": {
      "black": "$52,748",
      "white": "$35,606"
    }
  },
  "Elk": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 29.4,
      "white": 28.7
    },
    "y": {
      "black": "$17,460",
      "white": "$29,516"
    }
  },
  "Erie": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 67.8,
      "white": 39.4
    },
    "y": {
      "black": "$41,009",
      "white": "$26,793"
    }
  },
  "Fayette": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 54.2,
      "white": 43
    },
    "y": {
      "black": "$29,696",
      "white": "$20,177"
    }
  },
  "Forest": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 88.9,
      "white": 31.3
    },
    "y": {
      "black": "$27,375",
      "white": "$27,087"
    }
  },
  "Franklin": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 49.5,
      "white": 35.1
    },
    "y": {
      "black": "$65,076",
      "white": "$64,310"
    }
  },
  "Fulton": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 28.6,
      "white": 29.1
    },
    "y": {
      "black": "$38,000",
      "white": "$69,271"
    }
  },
  "Greene": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 58.3,
      "white": 39.7
    },
    "y": {
      "black": "$21,024",
      "white": "$18,310"
    }
  },
  "Huntingdon": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 64.8,
      "white": 37
    },
    "y": {
      "black": "$24,255",
      "white": "$21,800"
    }
  },
  "Indiana": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 49.4,
      "white": 39.3
    },
    "y": {
      "black": "$28,699",
      "white": "$15,396"
    }
  },
  "Jefferson": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 69.7,
      "white": 38.4
    },
    "y": {
      "black": "$79,565",
      "white": "$51,413"
    }
  },
  "Juniata": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 43.8,
      "white": 36.6
    },
    "y": {
      "black": "$39,071",
      "white": "$26,784"
    }
  },
  "Lackawanna": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 66.7,
      "white": 49.1
    },
    "y": {
      "black": "$43,937",
      "white": "$29,252"
    }
  },
  "Lancaster": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 55.3,
      "white": 43.4
    },
    "y": {
      "black": "$66,013",
      "white": "$55,177"
    }
  },
  "Lawrence": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 68.8,
      "white": 45.2
    },
    "y": {
      "black": "$30,966",
      "white": "$16,482"
    }
  },
  "Lebanon": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 51.1,
      "white": 37.1
    },
    "y": {
      "black": "$67,515",
      "white": "$33,646"
    }
  },
  "Lehigh": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 62.5,
      "white": 54.6
    },
    "y": {
      "black": "$27,318",
      "white": "$22,188"
    }
  },
  "Luzerne": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 57.8,
      "white": 36.9
    },
    "y": {
      "black": "$52,198",
      "white": "$36,195"
    }
  },
  "Lycoming": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 55.9,
      "white": 27.7
    },
    "y": {
      "black": "$85,748",
      "white": "$43,320"
    }
  },
  "McKean": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 60.6,
      "white": 41.3
    },
    "y": {
      "black": "$35,930",
      "white": "$24,743"
    }
  },
  "Mercer": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 45.6,
      "white": 32.6
    },
    "y": {
      "black": "$33,482",
      "white": "$25,742"
    }
  },
  "Mifflin": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 70.2,
      "white": 47
    },
    "y": {
      "black": "$114,475",
      "white": "$43,166"
    }
  },
  "Monroe": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 36.2,
      "white": 33.2
    },
    "y": {
      "black": "$38,311",
      "white": "$27,100"
    }
  },
  "Montgomery": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 48.7,
      "white": 31.9
    },
    "y": {
      "black": "$36,939",
      "white": "$30,935"
    }
  },
  "Montour": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 47.8,
      "white": 35
    },
    "y": {
      "black": "$39,545",
      "white": "$39,188"
    }
  },
  "Northampton": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 60.1,
      "white": 48.7
    },
    "y": {
      "black": "$42,869",
      "white": "$26,636"
    }
  },
  "Northumberland": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 59.1,
      "white": 35.4
    },
    "y": {
      "black": "$72,182",
      "white": "$42,108"
    }
  },
  "Perry": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 44.3,
      "white": 28.7
    },
    "y": {
      "black": "$49,388",
      "white": "$24,192"
    }
  },
  "Philadelphia": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 55.8,
      "white": 43.1
    },
    "y": {
      "black": "$65,123",
      "white": "$56,371"
    }
  },
  "Pike": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 38.6,
      "white": 33.1
    },
    "y": {
      "black": "$53,193",
      "white": "$32,148"
    }
  },
  "Potter": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 80,
      "white": 22.5
    },
    "y": {
      "black": "$33,563",
      "white": "$23,536"
    }
  },
  "Schuylkill": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 48.8,
      "white": 39.4
    },
    "y": {
      "black": "$37,605",
      "white": "$24,237"
    }
  },
  "Snyder": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 52.2,
      "white": 35
    },
    "y": {
      "black": "$33,049",
      "white": "$31,632"
    }
  },
  "Somerset": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 70.6,
      "white": 23.1
    },
    "y": {
      "black": "$84,933",
      "white": "$38,188"
    }
  },
  "Sullivan": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 62.5,
      "white": 32.6
    },
    "y": {
      "black": "$8,000",
      "white": "$20,517"
    }
  },
  "Susquehanna": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 65,
      "white": 38.9
    },
    "y": {
      "black": "$43,346",
      "white": "$29,492"
    }
  },
  "Tioga": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 53.6,
      "white": 30.4
    },
    "y": {
      "black": "$49,300",
      "white": "$33,553"
    }
  },
  "Union": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 38.2,
      "white": 23.5
    },
    "y": {
      "black": "$45,638",
      "white": "$28,018"
    }
  },
  "Venango": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 63.6,
      "white": 36
    },
    "y": {
      "black": "$53,476",
      "white": "$39,361"
    }
  },
  "Warren": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 68.4,
      "white": 39.9
    },
    "y": {
      "black": "$49,769",
      "white": "$30,089"
    }
  },
  "Washington": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 56.8,
      "white": 36.5
    },
    "y": {
      "black": "$46,258",
      "white": "$23,939"
    }
  },
  "Wayne": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 60,
      "white": 36.1
    },
    "y": {
      "black": "$28,619",
      "white": "$36,400"
    }
  },
  "Westmoreland": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 49.6,
      "white": 28.8
    },
    "y": {
      "black": "$38,193",
      "white": "$18,989"
    }
  },
  "Wyoming": {
    "showName": false,
    "outlier": true,
    "x": {
      "black": 43.5,
      "white": 35.4
    },
    "y": {
      "black": "$39,000",
      "white": "$28,823"
    }
  },
  "York": {
    "showName": false,
    "outlier": false,
    "x": {
      "black": 56.9,
      "white": 42.7
    },
    "y": {
      "black": "$37,078",
      "white": "$23,259"
    }
  },
  "State Average": {
    "showName": true,
    "outlier": false,
    "x": {
      "black": PA_AVG_BLACK_BAIL_RATE,
      "white": PA_AVG_WHITE_BAIL_RATE
    },
    "y": {
      "black": "$45,452",
      "white": "$31,965"
    }
  }
};

// TODO: except for these two
export const MDJ_DATA = [
  {
    "data": [
      "",
      "Adams",
      31.3,
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
            "value": 28.4,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 14.91,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 25.4,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Little, Tony J.",
          25.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Little, Tony J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Harvey, Matthew Robert",
          35.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 44.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 17.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          34.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 26.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          28.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 28.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Beauchat, Mark D."
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
      "Allegheny",
      42.6,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 42.6,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 2.7,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 29.29,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 25.4,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.03,
            "name": "Nominal"
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
          "Cramer, Jesse J.",
          69.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 69.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 22.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 8.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Schricker, Scott H.",
          23.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 7.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 68.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Torkowsky, Thomas R.",
          57.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 7.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Torkowsky, Thomas R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hoots, Kim Marie",
          64.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 64.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 10.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 12.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Hoots, Kim Marie"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dzvonick, Robert Paul",
          27.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 10.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 61.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Welsh, Regis C.",
          79.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 79.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 11.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 8.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Miller, Thomas Jr.",
          42.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 11.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Wagner, William",
          42.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 16.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Saveikis, Anthony",
          38.9,
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
                "value": 1.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 17.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 43.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Saveikis, Anthony"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Larotonda, Blaise P.",
          42.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 17.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 40.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Bengel, Carolyn S.",
          51.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 17.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Kaiser, Ralph E.",
          25.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 18.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 55.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Kaiser, Ralph E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Barton, David J.",
          32.3,
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
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 19.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 48.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Herbst, Jeffrey L.",
          21.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 21.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 20.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 58.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Eichler, Roxanne Sakoian",
          24.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 5.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 22.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Costa, Ron Sr.",
          54.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 54.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 23.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 22.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Stephens, Craig C.",
          47.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 24.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 19.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Motznik, James A.",
          49.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 24.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Manning, Jeffrey A.",
          24.7,
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
                "value": 5.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 26.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 43.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Manning, Jeffrey A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McGraw-Desmet, Maureen",
          30.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 26.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 42.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Mills, Beth S.",
          41.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 26.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 31.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Tibbs, Edward A.",
          65.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 65.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 27.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 7.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Opiela, Richard G.",
          29.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 24.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 27.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Opiela, Richard G."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ricciardi, Eugene",
          48.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 27.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 23.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Ricciardi, Eugene"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Armour, John W.",
          63.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 63.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 29.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 6.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Barner, Robert L.",
          62.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 62.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 29.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 8.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Sosovicka, David J.",
          47.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 30.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 21.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "DeLuca, Anthony L.",
          34.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 31.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "DeLuca, Anthony L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hanley, James Joseph Jr.",
          33.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 31.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Hanley, James Joseph Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Martini, Randy C.",
          49.1,
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
                "value": 0.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 32.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Martini, Randy C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Butler, Daniel E.",
          45.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 32.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 22.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Cooper, Kevin E.",
          36.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 34.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 27.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Zucco, Linda Inez",
          25.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 34.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Zucco, Linda Inez"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hromyak, Leonard J.",
          50.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 38.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 10.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Swan, Tom",
          25.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 39.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Rushing, Derwin",
          33.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 40.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Ravenstahl, Robert Jr.",
          30.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 40.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 28.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Ravenstahl, Robert Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zyra, Gary M.",
          48.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 41.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 9.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Zyra, Gary M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "King, Richard G.",
          31.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 43.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 22.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Martin, Armand",
          37.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 44.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 17.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Smith, Tara",
          34.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 5.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 45.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 15.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Lang, Elissa Marie",
          23.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 46.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 30.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Lang, Elissa Marie"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Shaffer, Peter H.",
          35.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 49.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 15.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Swearingen-Batch, Carla M.",
          27.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 57.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 15.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Caulfield, Thomas P.",
          25.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 62.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 12.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Caulfield, Thomas P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ford, Robert L.",
          34.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 63.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Cercone, Mary A.",
          23.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 66.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 10.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Brletic, Thomas S.",
          71.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 71.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 14.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.1,
                "name": "Nominal"
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
          "Olasz, Richard D. Jr.",
          27.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 51.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 19.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.1,
                "name": "Nominal"
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
          "Joyce, Dennis Robert",
          38.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 48.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 12.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
              }
            ],
            "name": "Joyce, Dennis Robert"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ceoffe, Anthony M.",
          32.3,
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
                "value": 3.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 36.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 27.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Petite, Oscar Jerome Jr.",
          34.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 36.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 28.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
              }
            ],
            "name": "Petite, Oscar Jerome Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Riazzi, Eugene F. Jr.",
          37.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 34.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 27.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Murray, Mary P.",
          19.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 19.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 35.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 44.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.3,
                "name": "Nominal"
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
          "Arnoni, Ronald A.",
          37.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 18.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 39.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.5,
                "name": "Nominal"
              }
            ],
            "name": "Arnoni, Ronald A."
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
      "Armstrong",
      41.5,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 41.5,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 12.7,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 3.11,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 42.7,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          61.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 61.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Andring, James"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Owen, James H.",
          40.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          36.5,
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
                "value": 1.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 54.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
      "Beaver",
      50.8,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 50.8,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 13.0,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 2.03,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 34.1,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.02,
            "name": "Nominal"
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
          67.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 67.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 5.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          62.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 62.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 22.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Schafer, Joseph",
          43.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 17.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Howe, Edward",
          55.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Nicholson, Dale F.",
          49.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Nicholson, Dale F."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Finn, Timothy",
          32.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 24.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Finn, Timothy"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Loughner, C. Douglas.",
          53.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 3.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Conroy, Eileen M.",
          29.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 64.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Conroy, Eileen M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Armour, John W.",
          55.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 35.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Swihart, Janet",
          53.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 31.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.1,
                "name": "Nominal"
              }
            ],
            "name": "Swihart, Janet"
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
      37.4,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.4,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 60.7,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 1.9,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
          }
        ],
        "name": "Bedford"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Bingham, H. Cyril Jr.",
          45.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 55.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Osman, Tonya M.",
          32.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 66.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Osman, Tonya M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Calhoun, Kathy S.",
          34.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Calhoun, Kathy S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Baker, Brian K.",
          37.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 59.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Baker, Brian K."
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
      50.9,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 50.9,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 33.1,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.88,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 15.1,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.03,
            "name": "Nominal"
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
          "Glass, David E.",
          56.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 56.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Patton, Dean R.",
          45.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 54.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Frederick, Victor M. IV",
          36.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 63.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          35.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          33.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 67.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Hadzick, Paul J.",
          82.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 82.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 17.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          67.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 67.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Kowalski, Phyllis J.",
          55.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Leonardziak, Michael J.",
          49.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Leonardziak, Michael J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Xavios, Thomas H.",
          54.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 54.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 44.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Kennedy, Stuart D.",
          62.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 62.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 21.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 16.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Yoch, David L.",
          43.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 24.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Scott, Kyley L.",
          52.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 21.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Bentz, Nicholas M. Jr.",
          37.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 27.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 35.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Bagenstose, Kim L.",
          31.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Young, Ann L.",
          37.9,
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
                "value": 15.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Dougherty, Timothy M.",
          29.9,
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
                "value": 6.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 63.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Dougherty, Timothy M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Gauby, Thomas M. Sr.",
          42.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 31.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 26.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Fegley, Sandra L.",
          32.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.1,
                "name": "Nominal"
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
          "Hall, William N. Jr.",
          95.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 95.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 4.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Book, Andrea",
          43.8,
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
                "value": 38.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.3,
                "name": "Nominal"
              }
            ],
            "name": "Book, Andrea"
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
      "Blair",
      30.8,
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
            "value": 68.7,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.07,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.4,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          39.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Ormsby, Craig E.",
          32.3,
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
                "value": 67.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          29.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 70.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Jackson, Steven D.",
          17.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 17.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 82.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Jackson, Steven D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Miller, Fred B.",
          42.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Auker, Jeffrey P.",
          27.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 70.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Auker, Jeffrey P."
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
      45.9,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 45.9,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 13.5,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 28.99,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 11.6,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
          }
        ],
        "name": "Bradford"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Wheaton, Fred M.",
          44.1,
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
                "value": 47.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 7.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Wheaton, Fred M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wilcox, Jonathan",
          36.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 11.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Wilcox, Jonathan"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Shaw, Michael",
          60.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 35.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Shaw, Michael"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Clark, Timothy M.",
          41.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 54.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Clark, Timothy M."
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
      34.9,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 34.9,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 49.0,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.24,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 15.9,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.01,
            "name": "Nominal"
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
          "Petrucci, Michael W.",
          42.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Kelly, John J. Jr.",
          33.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 66.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Douple, Mark D.",
          41.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 58.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Burns, Michael J.",
          38.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 48.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 12.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Waltman, John I.",
          48.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 35.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 16.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Armitage, Regina",
          31.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 24.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Schnell, Robert A. Jr.",
          40.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 24.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Schnell, Robert A. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wagner, Robert L. Jr.",
          46.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 18.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 35.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Wagner, Robert L. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Snow, Maggie",
          32.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Daly, Philip J.",
          27.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 42.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Roth, C. Robert",
          30.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 21.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 48.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Roth, C. Robert"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Deatelhauser, Kenneth E.",
          35.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 51.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Falcone, Joseph P.",
          34.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 63.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Gallagher, Michael W.",
          33.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 65.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Gambardella, Gary",
          32.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 34.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Vislosky, Jan",
          33.2,
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
                "value": 66.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Seaman, Jean",
          30.8,
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
                "value": 18.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Baum, Charles W.",
          31.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 68.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Benz, William J.",
          18.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 18.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 81.4,
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
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Finello, Daniel J. Jr.",
          38.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Peranteau, Frank W. Sr.",
          44.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 51.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          45.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 6.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 44.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Baranoski, Daniel",
          33.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 26.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Durkin, John J.",
          35.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 63.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.8,
                "name": "Nominal"
              }
            ],
            "name": "Durkin, John J."
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
      35.5,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 35.5,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 6.3,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 8.61,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 49.0,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.55,
            "name": "Nominal"
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
          "O'Donnell, William S.",
          30.8,
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
                "value": 8.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 60.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Kovach, David T.",
          45.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 9.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Seibel, Wayne D.",
          21.9,
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
                "value": 12.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 19.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
              }
            ],
            "name": "Seibel, Wayne D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "O'Donnell, Kevin P.",
          25.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 71.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.3,
                "name": "Nominal"
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
          "Haggerty, Sue",
          32.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.4,
                "name": "Nominal"
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
          "Stoughton, Lewis E.",
          35.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 4.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 15.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 44.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.6,
                "name": "Nominal"
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
          "Fullerton, William T.",
          44.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 10.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 1.7,
                "name": "Nominal"
              }
            ],
            "name": "Fullerton, William T."
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
      "Cambria",
      45.0,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 45.0,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 34.2,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.05,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 20.7,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Varner, Rick W.",
          53.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 45.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Price, Kevin J.",
          40.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Musulin, Michael",
          55.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 24.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Barron, John W.",
          36.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          35.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Zungali, Michael"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Creany, Fred",
          50.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 9.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 40.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Prebish, John Jr.",
          38.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 41.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 19.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Zanghi, Mary Ann",
          55.3,
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
                "value": 19.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Zanghi, Mary Ann"
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
      "Cameron",
      22.1,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 22.1,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 77.9,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.0,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          21.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 21.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 78.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Brown, Barry D."
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
      32.9,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 32.9,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 52.9,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 14.2,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Homanko, Joseph D. Sr.",
          35.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 6.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Kissner, William J.",
          27.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 15.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Kosciolek, Casimir T.",
          38.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 45.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 15.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Schrantz, Eric M.",
          32.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 50.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 16.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Lewis, Edward M.",
          20.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 20.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 22.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Lewis, Edward M."
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
      "Centre",
      27.3,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 27.3,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 11.1,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.03,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 61.6,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Jordan, Thomas N.",
          41.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Gillette-Walker, Kelley",
          44.5,
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
                "value": 8.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Prestia, Carmine W. Jr.",
          20.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 20.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 64.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          18.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 18.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 68.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          6.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 6.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 3.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 90.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          0.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 0.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 98.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Nileski, Charity L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sinclair, Allen W.",
          27.1,
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
                "value": 12.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 60.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Sinclair, Allen W."
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
      38.3,
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
            "value": 39.8,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.02,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 20.8,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 1.05,
            "name": "Nominal"
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
          "Brown, Leonard J.",
          25.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 44.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          24.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 33.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 42.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Michaels, Theodore Peter Jr.",
          35.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 20.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Hines, Gregory V.",
          60.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 33.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 5.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.4,
                "name": "Nominal"
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
          "Gill, Nancy",
          42.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 9.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.4,
                "name": "Nominal"
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
          43.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 35.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 21.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.4,
                "name": "Nominal"
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
          "Vito, Marian T.",
          46.2,
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
                "value": 32.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 20.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.5,
                "name": "Nominal"
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
          "Bailey, John R.",
          38.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.5,
                "name": "Nominal"
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
          "Koon, Grover E.",
          51.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 40.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 7.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.6,
                "name": "Nominal"
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
          "Massey, Scott A.",
          43.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 17.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.8,
                "name": "Nominal"
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
          "Knapp, Gwenn S.",
          21.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 21.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 31.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.9,
                "name": "Nominal"
              }
            ],
            "name": "Knapp, Gwenn S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cabry, Michael J. III",
          39.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 20.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 1.0,
                "name": "Nominal"
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
          "Kraut, William D.",
          32.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 41.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 24.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 1.1,
                "name": "Nominal"
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
          "Sondergaard, Analisa",
          32.3,
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
                "value": 37.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 28.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 1.8,
                "name": "Nominal"
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
          "Tartaglio, Thomas W.",
          38.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 36.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 22.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 1.8,
                "name": "Nominal"
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
          36.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 1.9,
                "name": "Nominal"
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
          35.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 36.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 1.9,
                "name": "Nominal"
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
          "Valocchi, Jeffrey J.",
          31.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 48.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 2.0,
                "name": "Nominal"
              }
            ],
            "name": "Valocchi, Jeffrey J."
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
      "Clarion",
      39.4,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 39.4,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 34.1,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.08,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 26.3,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
          }
        ],
        "name": "Clarion"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Miller, Jeffrey C.",
          44.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Miller, Jeffrey C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Long Turk, Amy L.",
          28.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Long Turk, Amy L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Schill, Timothy P.",
          42.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 18.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Schill, Timothy P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Quinn, Duane L.",
          37.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Quinn, Duane L."
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
      37.0,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.0,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 62.9,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.1,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
          }
        ],
        "name": "Clearfield"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Ireland, Richard Allen",
          42.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Ireland, Richard Allen"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hawkins, James L.",
          39.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Hawkins, James L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Ford, Patrick N.",
          35.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Ford, Patrick N."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nevling, Jerome M.",
          28.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 70.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Nevling, Jerome M."
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
      "Clinton",
      33.3,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 33.3,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 53.5,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.17,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 13.0,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.08,
            "name": "Nominal"
          }
        ],
        "name": "Clinton"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Maggs, John W.",
          57.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Maggs, John W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mills, Frank P.",
          12.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 12.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 65.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 22.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Mills, Frank P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Sanders, Joseph L.",
          65.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 65.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.3,
                "name": "Nominal"
              }
            ],
            "name": "Sanders, Joseph L."
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
      "Columbia",
      40.9,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 40.9,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 37.6,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.13,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 21.4,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Lawton, Russell L.",
          27.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 72.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Lawton, Russell L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Long, Craig W.",
          43.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 20.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 35.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Long, Craig W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Knecht, Richard W.",
          45.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Brewer, Doug D.",
          50.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Brewer, Doug D."
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
      35.6,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 35.6,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 12.9,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 8.44,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 43.0,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Marwood, Rita J.",
          27.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 20.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 52.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Marwood, Rita J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nicols, Amy L.",
          37.9,
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
                "value": 16.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 45.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Nicols, Amy L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pendolino, Samuel V.",
          39.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 9.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Zilhaver, Lincoln S.",
          35.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 4.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 21.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Zilhaver, Lincoln S."
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
      "Cumberland",
      41.1,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 41.1,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 19.2,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.43,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 39.2,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.1,
            "name": "Nominal"
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
          53.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Correal, Paula P.",
          44.1,
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
                "value": 16.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Correal, Paula P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Martin, Mark",
          37.9,
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
                "value": 22.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Martin, Mark"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fegley, Paul M",
          42.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Fegley, Paul M"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Adams, H. Anthony",
          25.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 58.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Adams, H. Anthony"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Day, Susan K.",
          42.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 11.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 45.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Silcox, Kathryn H.",
          45.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 27.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Birbeck, Jonathan R.",
          42.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 6.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 48.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Cohick, Vivian",
          38.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 42.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Cohick, Vivian"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Clement, Charles A. Jr.",
          45.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 42.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.5,
                "name": "Nominal"
              }
            ],
            "name": "Clement, Charles A. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dougherty, Richard S. Jr.",
          42.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 44.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.7,
                "name": "Nominal"
              }
            ],
            "name": "Dougherty, Richard S. Jr."
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
      44.2,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 44.2,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 35.7,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.08,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 19.0,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.06,
            "name": "Nominal"
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
          "Pianka, Barbara",
          59.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 40.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Lindsey, Joseph S.",
          34.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 65.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          32.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 67.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Semic, Steven M.",
          84.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 84.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Lenker, James A.",
          42.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Zozos, Paul T.",
          49.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Shugars, Raymond F.",
          90.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 90.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "O'Leary, David",
          34.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Lenker, Kenneth A.",
          39.6,
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
                "value": 25.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Margerum, Rebecca J.",
          35.2,
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
                "value": 28.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Teyral, Joann L.",
          15.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 15.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 48.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Teyral, Joann L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Judy, David H.",
          40.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 40.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Wenner, William C.",
          43.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 11.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 45.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Pelino, Dominic",
          23.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 15.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Pelino, Dominic"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Witmer, Lowell A.",
          48.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Zozos, George A.",
          66.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 66.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Johnson, Gregory D.",
          30.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 56.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.3,
                "name": "Nominal"
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
          "McKnight, Sonya M.",
          39.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.5,
                "name": "Nominal"
              }
            ],
            "name": "McKnight, Sonya M."
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
      "Delaware",
      55.9,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 55.9,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 43.4,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.01,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.1,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.6,
            "name": "Nominal"
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
          "Tenaglia, Leonard V.",
          73.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 73.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 26.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Gallagher, Vincent D. Jr.",
          71.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 71.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          70.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 70.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Loftus, Greg J.",
          68.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 68.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 31.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          62.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 62.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Lippincott, Nicholas S.",
          60.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 39.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Tozer, Peter P.",
          60.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 39.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Griffin, David",
          51.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 48.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          51.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Krull, Deborah A.",
          48.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 51.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Mattox, Christopher R.",
          58.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 58.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 41.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Lacianca, Elisa C.",
          41.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Lippart, Jack D.",
          42.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.1,
                "name": "Nominal"
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
          "Vann, Dawn L.",
          52.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Williams, W Keith II",
          57.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Sandone, Steven A.",
          70.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 70.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Roberts, Wendy B.",
          28.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 71.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.3,
                "name": "Nominal"
              }
            ],
            "name": "Roberts, Wendy B."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Turner, Phillip S.",
          60.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 39.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.3,
                "name": "Nominal"
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
          "Merkins, James",
          61.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 61.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.4,
                "name": "Nominal"
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
          "D'Agostino, Robert M.",
          29.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 70.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.4,
                "name": "Nominal"
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
          "Hunter, Leon",
          53.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.4,
                "name": "Nominal"
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
          "Davis, Wilden H.",
          75.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 75.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.4,
                "name": "Nominal"
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
          "Holefelder, Diane M.",
          51.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.6,
                "name": "Nominal"
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
          "Strohl, Walter A.",
          51.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.6,
                "name": "Nominal"
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
          "Puppio, Andrea B.",
          57.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.7,
                "name": "Nominal"
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
          56.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 56.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.7,
                "name": "Nominal"
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
          "Micozzie-Aguirre, Kelly A.",
          49.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.7,
                "name": "Nominal"
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
          "Seaton, Spencer B. Jr.",
          73.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 73.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.7,
                "name": "Nominal"
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
          "Nistico, Charles",
          44.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 54.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 1.6,
                "name": "Nominal"
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
          44.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 53.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 2.6,
                "name": "Nominal"
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
          "Lang, David H.",
          34.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 4.8,
                "name": "Nominal"
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
          35.2,
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
                "value": 53.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 10.7,
                "name": "Nominal"
              }
            ],
            "name": "McCray, C. Walter III"
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
      "Elk",
      28.6,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 28.6,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 71.4,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.0,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          26.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 73.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Martin, James L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Jacob, Mark S.",
          25.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 74.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Jacob, Mark S."
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
      47.1,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 47.1,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 18.8,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.68,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 33.4,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Mackendrick, Chris K.",
          39.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "DiPaolo, Dominick D.",
          97.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 97.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "DiPaolo, Dominick D."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Manzi, Paul",
          38.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 59.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Hammer, Scott B.",
          47.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Krahe, Mark R.",
          25.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 58.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          21.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 21.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 18.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 60.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Nichols, Brenda A.",
          17.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 17.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 66.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Nichols, Brenda A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Carney, Thomas",
          89.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 89.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Stuck-Lewis, Denise",
          34.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 54.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Strohmeyer, Susan D.",
          30.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 57.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Bizzarro, Paul A.",
          51.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Urbaniak, Paul G.",
          63.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 63.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 5.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 28.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Mack, Suzanne C.",
          61.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 61.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 11.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 23.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Mack, Suzanne C."
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
      44.9,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 44.9,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 55.0,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.1,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          52.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Haggerty, Ronald J. Sr.",
          47.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 53.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          46.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 53.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          45.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 54.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          41.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 58.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          37.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Kasunic, Richard II"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dennis, Wendy D.",
          47.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Dennis, Wendy D."
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
      35.1,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 35.1,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 52.3,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 12.6,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          32.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 54.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 13.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Miller, Daniel L."
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
      "Franklin",
      37.3,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.3,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 11.6,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.61,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 50.4,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.02,
            "name": "Nominal"
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
          "Plum, David L.",
          46.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 17.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Rock, Kelly L.",
          35.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 11.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 52.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Cunningham, Duane K.",
          54.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 54.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Williams, Todd R.",
          29.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 54.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Eyer, Jody C.",
          40.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Pentz, Larry G.",
          25.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 66.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Pentz, Larry G."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Manns, Glenn Kenneth",
          39.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 51.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.1,
                "name": "Nominal"
              }
            ],
            "name": "Manns, Glenn Kenneth"
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
      "Fulton",
      28.3,
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
            "value": 14.8,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 5.25,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 51.8,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
          }
        ],
        "name": "Fulton"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Mellott, Wendy",
          23.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 68.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Mellott, Wendy"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Horne, Devin C.",
          32.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Horne, Devin C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Heming, Tamela M.",
          31.3,
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
                "value": 25.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 17.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Heming, Tamela M."
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
      39.4,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 39.4,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 35.9,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.25,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 24.3,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.13,
            "name": "Nominal"
          }
        ],
        "name": "Greene"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Bates, D Glenn",
          32.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 67.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Bates, D Glenn"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Watson, Lee",
          52.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 18.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 28.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Watson, Lee"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cramer, Jesse J.",
          33.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 21.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 44.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.4,
                "name": "Nominal"
              }
            ],
            "name": "Cramer, Jesse J."
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
      "Huntingdon",
      38.6,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.6,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 31.4,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 30.0,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Jamison, Mary",
          37.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          27.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 34.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Wilt, Richard S.",
          46.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 9.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 44.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Wilt, Richard S."
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
      "Indiana",
      40.7,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 40.7,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 36.1,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 23.2,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Thachik, George M.",
          39.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Rega, Jennifer J.",
          40.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 13.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Haberl, Guy B.",
          40.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Steffee, Susanne V.",
          41.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Steffee, Susanne V."
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
      "Jefferson",
      38.7,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.7,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 61.1,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.09,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.1,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
          }
        ],
        "name": "Jefferson"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Inzana, David B.",
          43.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Inzana, David B."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Chambers, Douglas R.",
          37.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Chambers, Douglas R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bazylak, Gregory M.",
          34.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 65.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Bazylak, Gregory M."
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
      34.2,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 34.2,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 38.5,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 7.79,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 19.5,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Lyter, Barbara M.",
          31.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 68.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Lyter, Barbara M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Leister, Jacqueline T.",
          30.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 16.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Leister, Jacqueline T."
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
      52.6,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 52.6,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 38.1,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 7.42,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 1.8,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.07,
            "name": "Nominal"
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
          "Turlip-Murphy, Laura",
          46.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 50.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Farrell, Alyce Hailstone",
          50.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Ware, Paul J.",
          55.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 35.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 7.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Giglio, Theodore J.",
          68.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 68.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 9.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Gallagher, Terrence V.",
          38.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 48.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Gallagher, Terrence V."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pesota, John P.",
          53.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 28.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 14.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "McGraw, Sean P.",
          56.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 56.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.1,
                "name": "Nominal"
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
          "Keeler, Paul",
          51.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 40.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.1,
                "name": "Nominal"
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
          "Corbett, Joanne Price",
          57.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 9.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.3,
                "name": "Nominal"
              }
            ],
            "name": "Corbett, Joanne Price"
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
      "Lancaster",
      45.1,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 45.1,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 40.1,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.1,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 14.6,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.09,
            "name": "Nominal"
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
          "Willwerth, Jene",
          64.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 64.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 35.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Willwerth, Jene"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mylin, Stuart J.",
          50.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Chudzik, Brian E.",
          47.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Albert, Scott E.",
          42.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Benner, William E. Jr.",
          56.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 56.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Jimenez, Janice",
          63.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 63.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 31.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 5.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Russell, Tony S.",
          54.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 54.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 39.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 5.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Commins, B. Denise",
          40.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 6.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Commins, B. Denise"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Hartman, Rodney H.",
          58.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 58.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 33.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 7.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Sheller, Raymond S.",
          59.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 8.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Bixler, Miles K.",
          43.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 40.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 15.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Miller, David P.",
          45.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 36.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 17.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Mongiovi Sponaugle, Mary",
          43.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 21.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 35.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Mongiovi Sponaugle, Mary"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Herman, Robert A. Jr.",
          9.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 9.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 24.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 66.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Hamill, Nancy G.",
          62.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 62.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Duncan, Jayne F.",
          29.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 66.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Reinaker, Dennis E.",
          6.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 6.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Reinaker, Dennis E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Tobin, Edward A.",
          49.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 41.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 6.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Roth, Bruce A.",
          62.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 62.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 36.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Witkonis, Adam J.",
          50.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 11.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.4,
                "name": "Nominal"
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
          "Keller, Joshua R.",
          41.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 19.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.5,
                "name": "Nominal"
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
          "Winters, John C.",
          55.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.8,
                "name": "Nominal"
              }
            ],
            "name": "Winters, John C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Reuter, William G.",
          38.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 59.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 2.8,
                "name": "Nominal"
              }
            ],
            "name": "Reuter, William G."
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
      50.7,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 50.7,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 2.4,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 24.68,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 22.1,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.05,
            "name": "Nominal"
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
          "Rishel, David B.",
          42.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 21.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "McGrath, Scott",
          47.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 21.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 22.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Cartwright, Jerry G. Jr.",
          27.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 28.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 42.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Cartwright, Jerry G. Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Nicholson, Jennifer L.",
          48.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 33.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Amodie, Melissa Ann",
          66.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 66.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 20.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 11.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.1,
                "name": "Nominal"
              }
            ],
            "name": "Amodie, Melissa Ann"
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
      37.8,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.8,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 61.9,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.3,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          44.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 55.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          41.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 58.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          41.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 58.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Verna, Anthony J.",
          35.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          35.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Ditzler, John W.",
          29.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 68.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
      "Lehigh",
      56.5,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 56.5,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 35.0,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 8.4,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.17,
            "name": "Nominal"
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
          69.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 69.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Pochron, Michael Joseph",
          65.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 65.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 34.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Maura, Wayne",
          65.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 65.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 34.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Balliet, Carl L.",
          60.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 60.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 39.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Balliet, Carl L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Engler, Patricia M.",
          59.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 40.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          58.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 58.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 41.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          56.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 56.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Halal, Robert C.",
          55.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 44.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          51.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 48.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Crawford, Charles H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Beck, Rod",
          53.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 21.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Hammond, Jacob E.",
          49.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 22.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 27.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.1,
                "name": "Nominal"
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
          "Santiago, Rashid",
          61.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 61.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 5.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.1,
                "name": "Nominal"
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
          59.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 39.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Faulkner, Michael J.",
          40.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 58.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Trexler, Daniel C.",
          61.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 61.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.3,
                "name": "Nominal"
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
          "D'Amore, Michael D.",
          43.8,
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
                "value": 19.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 35.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 1.3,
                "name": "Nominal"
              }
            ],
            "name": "D'Amore, Michael D."
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
      40.9,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 40.9,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 27.3,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.13,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 30.7,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.03,
            "name": "Nominal"
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
          "Roberts, Paul J.",
          43.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Sharkey, Thomas",
          16.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 16.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 9.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 73.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Sharkey, Thomas"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Tupper, Brian James",
          28.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 56.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Barilla, David A.",
          44.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 23.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Dixon, James M.",
          47.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 39.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 12.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Zola, Joseph D.",
          40.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Halesey, Joseph A.",
          53.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 21.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 24.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Kravitz, Alexandra Kokura",
          41.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 28.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          38.3,
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
                "value": 45.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 15.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          37.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 31.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Malast, Diana",
          28.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 45.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Malast, Diana"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "O'Donnell, Daniel",
          46.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 30.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Dotzel, Michael G.",
          29.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 5.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 52.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Hasay, John E.",
          52.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 11.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 7.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Malloy, Thomas F. Sr.",
          31.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 34.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.1,
                "name": "Nominal"
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
          "Spagnuolo, Joseph D. Jr.",
          44.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 33.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 21.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Whittaker, Donald L.",
          61.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 61.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 30.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
              }
            ],
            "name": "Whittaker, Donald L."
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
      "Lycoming",
      34.4,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 34.4,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 65.3,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.3,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          42.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 57.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          37.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          36.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 63.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Whiteman, Gary A.",
          28.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 71.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Whiteman, Gary A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kemp, Jon Edward",
          29.5,
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
                "value": 70.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Frey, Christian David",
          33.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 65.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Frey, Christian David"
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
      41.9,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 41.9,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 53.0,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.09,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 5.0,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
          }
        ],
        "name": "McKean"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Engman, David Richard",
          45.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 51.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Engman, David Richard"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Luther, Richard W.",
          39.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 55.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 5.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Luther, Richard W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cercone, Dominic Jr.",
          43.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 7.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          40.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Todd, William K."
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
      "Mercer",
      35.7,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 35.7,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 40.7,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 12.09,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 11.5,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Fagley, William L.",
          18.8,
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
                "value": 81.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Fagley, William L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Arthur, Brian R.",
          44.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 54.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "McEwen, D. Neil",
          41.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          35.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 48.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 16.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Songer, Dennis M.",
          43.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 15.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Antos, Ronald E.",
          26.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 28.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 19.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Antos, Ronald E."
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
      48.1,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 48.1,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 51.2,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.29,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.4,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.07,
            "name": "Nominal"
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
          "Reed, Jonathan W.",
          49.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Reed, Jonathan W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Smith, Kent A.",
          38.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 61.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Smith, Kent A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Miller, Jack E.",
          54.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 54.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 44.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
              }
            ],
            "name": "Miller, Jack E."
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
      "Monroe",
      33.6,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 33.6,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 48.4,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.45,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 17.6,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.02,
            "name": "Nominal"
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
          "Muth, Michael R.",
          39.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Claypool, Richard",
          29.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 70.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Mancuso, Colleen",
          36.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 63.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Anzini, Kristina",
          38.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 38.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 61.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Fluegel, Anthony D.",
          45.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 23.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Higgins, C. Daniel",
          24.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 43.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Higgins, C. Daniel"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Riley, Phillip R.",
          37.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Olsen, Thomas E.",
          27.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 72.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Krawitz, Jolana",
          34.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 9.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 52.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Germano, Brian",
          27.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 68.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
              }
            ],
            "name": "Germano, Brian"
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
      37.5,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.5,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 46.7,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.49,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 15.3,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "McHugh Casey, Elizabeth A.",
          44.5,
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
                "value": 55.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Nesbitt, Harry J. III",
          40.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 59.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Saylor, Maurice H.",
          39.6,
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
                "value": 60.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Kelly Rebar, Cathleen",
          37.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Casillo, Ester J.",
          35.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "McGill, Katherine E.",
          35.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Eisner Zucker, Karen",
          30.7,
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
                "value": 69.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Schireson, Henry J.",
          29.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 71.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Augustine, Albert J.",
          37.2,
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
                "value": 62.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Hummel Fried, Catherine M.",
          29.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 70.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Kropp, Edward C. Sr.",
          44.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 55.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Leo, Paul N.",
          34.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 65.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Maruszczak, William I.",
          28.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 71.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Cerski, Christopher",
          46.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Zaffarano, Patricia Ann",
          36.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Palladino, Scott T.",
          51.4,
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
                "value": 45.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Lawrence, Francis J. Jr.",
          62.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 62.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 20.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Hudak Duffy, Andrea",
          29.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 24.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Hunsicker, Margaret A.",
          46.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 28.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Bernhardt, Francis J. III",
          37.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 31.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 30.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          36.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Gallagher, James",
          36.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Gadzicki, Walter F. Jr.",
          33.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Kessler, John D.",
          27.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 34.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Lukens, Deborah",
          37.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 22.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 40.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Friedenberg, Jay S.",
          24.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 24.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Levine, Edward",
          29.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 22.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Scott, Gregory L.",
          61.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 61.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 33.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Quinn, Michael P.",
          35.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 63.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Price, Juanita A.",
          39.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 22.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Price, Juanita A."
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
      "Montour",
      35.4,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 35.4,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 22.4,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.79,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 41.3,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          21.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 21.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 54.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Shrawder, Marvin K."
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
      "Northampton",
      50.7,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 50.7,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 40.7,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.03,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 8.3,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.2,
            "name": "Nominal"
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
          "Capobianco, John C.",
          52.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 47.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Capobianco, John C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Narlesky, James J.",
          47.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Barner, Joseph K.",
          30.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 69.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Broscius, Patricia C.",
          39.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Hawke, Robert A.",
          57.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Manwaring, Roy A. II",
          48.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 46.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Manwaring, Roy A. II"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Corpora, Daniel G.",
          59.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 35.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Tidd, David W.",
          39.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 22.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Tidd, David W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Romig-Gainer, Elizabeth A.",
          23.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 17.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 58.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Romig-Gainer, Elizabeth A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Matos Gonzalez, Nancy",
          65.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 65.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 5.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
              }
            ],
            "name": "Matos Gonzalez, Nancy"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Zito, Alicia Rose",
          56.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 56.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 42.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.3,
                "name": "Nominal"
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
          "Yetter, Richard H. III",
          57.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 57.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 35.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 6.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.3,
                "name": "Nominal"
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
          "Taschner, Jacqueline M.",
          53.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 27.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.4,
                "name": "Nominal"
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
          "Grifo, Antonia",
          58.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 58.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 15.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.4,
                "name": "Nominal"
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
          "Schlegel, Douglas",
          50.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.9,
                "name": "Nominal"
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
          "Rapp, Anthony G. Jr.",
          33.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 1.3,
                "name": "Nominal"
              }
            ],
            "name": "Rapp, Anthony G. Jr."
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
      "Northumberland",
      37.7,
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
            "value": 50.4,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.09,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 11.8,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.04,
            "name": "Nominal"
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
          "Cashman, Richard P.",
          35.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 64.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Cashman, Richard P."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Diehl, Michael I.",
          40.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Gembic, John",
          42.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Apfelbaum, Benjamin",
          28.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 32.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 38.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
      "Perry",
      30.2,
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
            "value": 24.6,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.93,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 42.7,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 1.55,
            "name": "Nominal"
          }
        ],
        "name": "Perry"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Frownfelter, Elizabeth R.",
          46.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 46.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 46.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Frownfelter, Elizabeth R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "McGuire, Daniel R.",
          45.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 3.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "McGuire, Daniel R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Schechterly, Michael E.",
          17.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 17.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 37.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 40.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 2.6,
                "name": "Nominal"
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
      "Philadelphia",
      49.9,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 49.9,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 10.0,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 5.74,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 34.3,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Hayden, Charles",
          7.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 7.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 90.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Hayden, Charles"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Washington, Craig M.",
          2.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 2.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 94.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 2.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Washington, Craig M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Shuter, David C.",
          19.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 19.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 76.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Shuter, David C."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Jimenez, Nazario Jr.",
          35.2,
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
                "value": 60.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Jimenez, Nazario Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Pew, Wendy L.",
          19.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 19.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 76.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Pew, Wendy L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Dugan, Patrick F.",
          16.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 16.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 79.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Dugan, Patrick F."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "DeLeon, James M.",
          11.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 11.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 84.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "DeLeon, James M."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Meehan, William Austin Jr.",
          16.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 16.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 77.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 5.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Meehan, William Austin Jr."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Kosinski, Gerard A.",
          16.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 16.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 77.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 6.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Kosinski, Gerard A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Robbins, Harvey W.",
          16.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 16.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 79.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Robbins, Harvey W."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Stack, Patrick",
          51.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 48.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Rebstock, Francis J.",
          53.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 5.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 40.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          51.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 30.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          51.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 51.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 9.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 5.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "E-Filing Judge",
          59.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 59.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 18.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "E-Filing Judge"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bedford, Sheila M.",
          49.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 3.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 12.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 34.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          47.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 13.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 37.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Devlin, Kevin R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Emergency Arraignment Court Magistrate",
          49.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 49.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 1.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 15.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Emergency Arraignment Court Magistrate"
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
      "Pike",
      33.3,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 33.3,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 6.0,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 31.7,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 28.9,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.1,
            "name": "Nominal"
          }
        ],
        "name": "Pike"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Cooper, Alan B.",
          27.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 26.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 35.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Cooper, Alan B."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Menditto, Paul D. Sr.",
          29.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 9.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 39.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 21.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Muir, Shannon L.",
          32.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 0.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 54.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 12.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Fischer, Deborah",
          40.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 49.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.4,
                "name": "Nominal"
              }
            ],
            "name": "Fischer, Deborah"
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
      "Potter",
      22.5,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 22.5,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 59.4,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 2.14,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 15.9,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          27.1,
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
                "value": 72.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "McCleaft, Kari A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Weiss, Delores G.",
          22.8,
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
                "value": 61.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 16.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Weiss, Delores G."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Easton, Annette L.",
          19.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 19.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 5.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Easton, Annette L."
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
      39.9,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 39.9,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 48.6,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 11.3,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.15,
            "name": "Nominal"
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
          47.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Rossi, David J."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Reiley, James",
          41.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 58.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Ferrier, James R.",
          31.3,
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
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Kilker, Anthony J.",
          37.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Plachko, David A.",
          47.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 51.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          43.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Bayer, Stephen J.",
          34.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 49.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.9,
                "name": "Nominal"
              }
            ],
            "name": "Bayer, Stephen J."
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
      36.3,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 36.3,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 57.1,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 2.77,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 3.8,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
          }
        ],
        "name": "Snyder"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Reed, John H.",
          36.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 60.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          35.2,
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
                "value": 52.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 6.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 6.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Hackenberg, Lori R."
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
      25.0,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 25.0,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 23.9,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 48.65,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 2.5,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          36.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 27.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 34.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 1.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Stevanus, Sandra L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Johnson, Kenneth W.",
          22.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 22.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 28.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 49.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Bell, Douglas McCall",
          20.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 20.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 19.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 49.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 10.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Bell, Douglas McCall"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Seger, William E.",
          23.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 23.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 50.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Seger, William E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mankamyer, Susan",
          25.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 55.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Mankamyer, Susan"
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
      36.5,
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
            "value": 61.5,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 1.9,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
      "Susquehanna",
      39.4,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 39.4,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 33.5,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.95,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 26.2,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          52.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 52.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 38.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 9.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Hollister, Jeffrey L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Cordner, Jodi L.",
          34.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 25.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Cordner, Jodi L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Brainard, Suzanne M.",
          29.9,
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
                "value": 38.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 28.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Brainard, Suzanne M."
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
      "Tioga",
      31.3,
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
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.0,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
          }
        ],
        "name": "Tioga"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Edgcomb, James R.",
          37.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 62.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Edgcomb, James R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Carlson, James E.",
          29.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 70.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Carlson, James E."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Repard, Robert L.",
          24.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 75.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Repard, Robert L."
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
      "Union",
      25.6,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 25.6,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 11.0,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 14.56,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 48.8,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
          }
        ],
        "name": "Union"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Armbruster, Leo S.",
          15.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 15.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 5.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 75.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Armbruster, Leo S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Mensch, Jeffrey L.",
          26.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 26.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 18.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 34.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 21.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Mensch, Jeffrey L."
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
      38.4,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 38.4,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 61.4,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.1,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Kirtland, Matthew T.",
          28.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 71.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Kirtland, Matthew T."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Fish, Andrew F.",
          43.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 56.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          41.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 58.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Lowrey, Patrick E."
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
      40.5,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 40.5,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 15.6,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 2.55,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 41.3,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          45.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 21.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Carlson, Glenn S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Woodin, Todd A.",
          33.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 33.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 16.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 49.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Woodin, Todd A."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bauer, Laura",
          35.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 6.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 49.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Bauer, Laura"
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
      39.6,
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
            "value": 33.3,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 1.04,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 26.1,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.02,
            "name": "Nominal"
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
          "Kanalis, Joshua P.",
          30.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 69.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Ward, Ethan T.",
          50.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 49.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Hopkins, Larry W.",
          53.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 45.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "McDonald, Traci L.",
          27.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 52.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 20.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "McDonald, Traci L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Wilson, Mark",
          53.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 53.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 22.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          50.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Ellis, James C.",
          31.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 12.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 56.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Thompson, Curtis",
          34.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 65.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Weller, Jay",
          29.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 3.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 64.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Mark, David W.",
          40.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Redlinger, Robert W.",
          43.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 39.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 16.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.1,
                "name": "Nominal"
              }
            ],
            "name": "Redlinger, Robert W."
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
      "Wayne",
      37.6,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 37.6,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 28.1,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 34.3,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
          }
        ],
        "name": "Wayne"
      }
    ],
    "outlier": true,
    "collapseData": [
      {
        "data": [
          "",
          "Carney, Bonnie L.",
          39.6,
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
                "value": 49.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 11.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Carney, Bonnie L."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Myers, Linus H.",
          34.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.7,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 41.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Myers, Linus H."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Edwards, Ronald",
          39.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 39.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 8.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 53.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Edwards, Ronald"
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
      31.7,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 31.7,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 31.0,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 4.58,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 32.8,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Kistler, Helen M.",
          30.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 30.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 68.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "DeMarchis, Joseph R.",
          45.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 51.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 3.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Weimer, Douglas Reid",
          26.3,
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
                "value": 69.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 4.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Weimer, Douglas Reid"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Thiel, Denise S.",
          30.7,
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
                "value": 27.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 42.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Thiel, Denise S."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Bilik, Mark",
          37.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 37.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 49.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Mahady, Michael",
          25.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 25.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 67.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Pallone, Frank J. Jr.",
          45.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 24.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Peck, Yackopec Cheryl J.",
          28.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 71.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Albert, James",
          29.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 50.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.1,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 19.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Buczak, Jason",
          29.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 27.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 43.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Eckels, Roger",
          34.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 29.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 36.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Bompiani, L. Anthony",
          24.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 24.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 26.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 49.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          18.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 18.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 50.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 30.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Conway, Charles R.",
          15.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 15.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 26.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 57.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Conway, Charles R."
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Falcon, James N.",
          27.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 27.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 44.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Moore, Charles D.",
          31.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 3.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 4.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 60.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Christner, Charles M.",
          32.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 32.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 17.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 39.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Dalfonso, Joseph A.",
          35.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 13.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 22.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Mansour, Mark Stephen",
          34.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 34.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 24.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Mansour, Mark Stephen"
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
      "Wyoming",
      35.5,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 35.5,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 64.3,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 0.0,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 0.2,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.0,
            "name": "Nominal"
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
          "Plummer, David K",
          28.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 28.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 71.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Plummer, David K"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Smith, Carl W. Jr.",
          44.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 44.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 54.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Smith, Carl W. Jr."
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
      46.1,
      {
        "type": "dist",
        "values": [
          {
            "className": "cash-bar",
            "value": 46.1,
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": 14.7,
            "name": "Unsecured"
          },
          {
            "className": "nonmonetary-bar",
            "value": 5.55,
            "name": "Nonmonetary"
          },
          {
            "className": "ror-bar",
            "value": 33.3,
            "name": "ROR"
          },
          {
            "className": "nominal-bar",
            "value": 0.34,
            "name": "Nominal"
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
          82.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 82.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 17.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Groom, Walter",
          55.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 43.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Dubs, Dwayne A.",
          36.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 36.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 14.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 49.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Reilly, Thomas J.",
          40.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 40.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 28.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 29.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Edie, Nancy Lee",
          18.6,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 18.6,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 77.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
              }
            ],
            "name": "Edie, Nancy Lee"
          }
        ],
        "outlier": false
      },
      {
        "data": [
          "",
          "Albright, Keith L.",
          41.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 30.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 26.1,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Clancy, Jennifer J.P.",
          54.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 54.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 20.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 23.2,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Eckenrode, Robert A.",
          35.1,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 35.1,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 11.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.3,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Eshbach, David C.",
          55.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 55.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 10.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 11.9,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 22.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Laird, Scott",
          43.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 43.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.1,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 13.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 35.9,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.0,
                "name": "Nominal"
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
          "Bloss, Barry L.",
          47.7,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 47.7,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 5.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 14.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.1,
                "name": "Nominal"
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
          "Manifold, Laura S.",
          42.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.8,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 5.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 35.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Miner, James S.",
          45.2,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 45.2,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 6.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.8,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 47.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Toluba, Joel N.",
          42.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 42.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.3,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.3,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Williams, Linda L.",
          48.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 48.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 2.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 15.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 32.7,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          50.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.4,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 9.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 25.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.2,
                "name": "Nominal"
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
          "Oberdorf, Jeffrey L.",
          29.0,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 29.0,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 23.9,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 2.5,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 44.4,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.3,
                "name": "Nominal"
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
          "Gross, Scott J.",
          41.4,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.4,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 17.5,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 5.7,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 35.0,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.3,
                "name": "Nominal"
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
          "Morgan, James H.",
          50.9,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 50.9,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 1.6,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 31.8,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.4,
                "name": "Nominal"
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
          "Martin, Richard E. II",
          77.5,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 77.5,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 21.6,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 0.0,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 0.5,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 0.5,
                "name": "Nominal"
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
          "Thomas, Richard T.",
          41.3,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 41.3,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 15.0,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 8.4,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 33.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 1.6,
                "name": "Nominal"
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
          "Fishel, John H.",
          31.8,
          {
            "type": "dist",
            "values": [
              {
                "className": "cash-bar",
                "value": 31.8,
                "name": "Cash bail"
              },
              {
                "className": "unsecured-bar",
                "value": 7.2,
                "name": "Unsecured"
              },
              {
                "className": "nonmonetary-bar",
                "value": 7.2,
                "name": "Nonmonetary"
              },
              {
                "className": "ror-bar",
                "value": 50.6,
                "name": "ROR"
              },
              {
                "className": "nominal-bar",
                "value": 3.3,
                "name": "Nominal"
              }
            ],
            "name": "Fishel, John H."
          }
        ],
        "outlier": false
      }
    ],
    "isCollapsed": true
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
