import { COUNTY_DATA, MDJ_DATA } from "./raw-data.js";

// restructure county data for tables and maps
export const BAIL_RATE_DATA = COUNTY_DATA.map((countyData) => ({
  data: [
    countyData["name"],
    {
      type: "bar",
      values: [countyData["cash_bail_pct"]]
    },
    countyData["cash_bail_pct"],
    countyData["cash_bail_cases"],
    countyData["total_cases"]
  ]
}));

export const ROR_RATE_DATA = COUNTY_DATA.map((countyData) => ({
  data: [
    countyData["name"],
    {
      type: "bar",
      values: [countyData["ror_pct"]]
    },
    countyData["ror_pct"],
    countyData["ror_cases"],
    countyData["total_cases"]
  ]
}));

export const BAIL_POSTING_DATA = COUNTY_DATA.map((countyData) => ({
  data: [
    countyData["name"],
    countyData["avg_bail_amount"],
    countyData["non_posting_rate"],
    countyData["total_cases"]
  ]
}));

export const COUNTY_BAIL_TYPE_DATA = COUNTY_DATA.map((countyData) => ({
  data: [
    countyData["name"],
    {
      type: "dist",
      values: [
        {
          className: "cash-bar",
          value: countyData["cash_bail_pct"],
          name: "Cash Bail"
        },
        {
          className: "unsecured-bar",
          value: countyData["unsecured_pct"],
          name: "Unsecured"
        },
        {
          className: "ror-bar",
          value: countyData["ror_pct"],
          name: "ROR"
        },
        {
          className: "nonmonetary-bar",
          value: countyData["nonmonetary_pct"],
          name: "Nonmonetary"
        },
        {
          className: "nominal-bar",
          value: countyData["nominal_pct"],
          name: "Nominal"
        }
      ],
    }
  ],
}));

export const BAIL_RATE_MAP_DATA = COUNTY_DATA.map((countyData) => ({
  name: countyData["name"],
  rorRate: countyData["ror_pct"],
  cashBailRate: countyData["cash_bail_pct"],
  cashBailRateBlack: countyData["cash_bail_pct_black"],
  cashBailRateWhite: countyData["cash_bail_pct_white"],
  outlier: countyData["is_outlier"]
}));

export const BAIL_RACE_RATE_DATA = COUNTY_DATA.map((countyData) => ({
  data: [
    countyData["name"],
    countyData["cash_bail_cases_black"],
    countyData["cash_bail_pct_black"],
    countyData["cash_bail_cases_white"],
    countyData["cash_bail_pct_white"],
    {
      type: "line",
      values: [
        countyData["cash_bail_pct_black"],
        countyData["cash_bail_pct_white"]
      ]
    },
    countyData["cash_bail_pct_black"] - countyData["cash_bail_pct_white"]
  ],
  outlier: countyData["is_outlier"]
}));

export const BAIL_RACE_AMOUNT_DATA = COUNTY_DATA.map((countyData) => ({
  data: [
    countyData["name"],
    countyData["cash_bail_cases_black"],
    countyData["bail_amount_black"],
    countyData["cash_bail_cases_white"],
    countyData["bail_amount_white"],
    {
      type: "line",
      values: [
        countyData["bail_amount_black"],
        countyData["bail_amount_white"]
      ]
    },
    countyData["bail_amount_black"] - countyData["bail_amount_white"]
  ],
  outlier: countyData["is_outlier"]
}));


export const COUNTY_INFO = COUNTY_DATA.reduce((acc, data) => ({
  ...acc, [data["name"]]: data
}), {});

export const MDJ_BAIL_TYPE_DATA = Object.entries(MDJ_DATA).map(([county, judges]) => ({
  data: [
    "",
    county,
    COUNTY_INFO[county]["total_cases"],
    COUNTY_INFO[county]["cash_bail_pct"],
    {
      type: "dist",
      values: [
        {
          "className": "cash-bar",
          "value": COUNTY_INFO[county]["cash_bail_pct"],
          "name": "Cash bail"
        },
        {
          "className": "unsecured-bar",
          "value": COUNTY_INFO[county]["unsecured_pct"],
          "name": "Unsecured"
        },
        {
          "className": "ror-bar",
          "value": COUNTY_INFO[county]["ror_pct"],
          "name": "ROR"
        },
        {
          "className": "nonmonetary-bar",
          "value": COUNTY_INFO[county]["nonmonetary_pct"],
          "name": "Nonmonetary"
        },
        {
          "className": "nominal-bar",
          "value": COUNTY_INFO[county]["nominal_pct"],
          "name": "Nominal"
        }
      ],
      name: county
    }
  ],
  outlier: COUNTY_INFO[county]["is_outlier"],
  collapseData: judges.map((judge) => ({
    data: [
      "",
      judge["name"],
      judge["total_cases"],
      judge["cash_bail_pct"],
      {
        type: "dist",
        values: [
          {
            "className": "cash-bar",
            "value": judge["cash_bail_pct"],
            "name": "Cash bail"
          },
          {
            "className": "unsecured-bar",
            "value": judge["unsecured_pct"],
            "name": "Unsecured"
          },
          {
            "className": "ror-bar",
            "value": judge["ror_pct"],
            "name": "ROR"
          },
          {
            "className": "nonmonetary-bar",
            "value": judge["nonmonetary_pct"],
            "name": "Nonmonetary"
          },
          {
            "className": "nominal-bar",
            "value": judge["nominal_pct"],
            "name": "Nominal"
          }
        ],
        name: judge["name"]
      }
    ],
    outlier: false
  })),
  isCollapsed: true
}));
