import * as d3 from "d3";
import {
  SMALL_BROWSER_WIDTH,
  LARGE_PHONE_WIDTH,
  SMALL_PHONE_WIDTH,
  REGULAR_WIDTH,
  SMALL_BROWSER,
  LARGE_PHONE,
  SMALL_PHONE
} from "./constants.js";

export const toMoney = (value, precision = 1, showUnit = true) => {
  const unit = showUnit ? "$" : "";
  return value === 0 ? "0" : `${unit}${(value / 1000).toFixed(precision)}K`;
};
export const toPercent = (value, precision = 1, showUnit = true) => {
  return `${(value * 100).toFixed(precision)}${showUnit ? "%" : ""}`;
};
export const toNumberString = (value, options = {}) =>
  value.toLocaleString("en", options);

export const getSizing = (windowWidth) => {
  if (windowWidth <= SMALL_PHONE_WIDTH) return SMALL_PHONE;
  if (windowWidth <= LARGE_PHONE_WIDTH) return LARGE_PHONE;
  if (windowWidth <= SMALL_BROWSER_WIDTH) return SMALL_BROWSER;
  return REGULAR_WIDTH;
};

export const getColorThreshold = (labels, colors) => {
  if (colors.length != labels.length - 1) {
    throw "Invalid number of colors for color threshold";
  }

  return d3.scaleThreshold()
  .domain(labels)
  .range(["#FFF"].concat(colors)); // #FFF will never be displayed
};
