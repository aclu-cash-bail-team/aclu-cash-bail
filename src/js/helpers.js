export const toMoney = (value, precision = 1, showUnit = true) => {
  const unit = showUnit ? "$" : "";
  return value === 0 ? "0" : `${unit}${(value / 1000).toFixed(precision)}K`;
};
export const toPercent = (value, precision = 1, showUnit = true) => {
  return `${(value * 100).toFixed(precision)}${showUnit ? "%" : ""}`;
};
export const toNumberString = (value, _) => value.toLocaleString();
