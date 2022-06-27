export const toMoney = (value, precision = 1) => {
  return value === 0 ? "0" : `$${(value / 1000).toFixed(precision)}K`
};
export const toPercent = (value, precision = 1, showUnit = true) => {
  return `${(value * 100).toFixed(precision)}${showUnit ? "%" : ""}`
};
export const toNumberString = (value, _) => value.toLocaleString();
