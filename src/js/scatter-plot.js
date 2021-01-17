import { ScatterPlot } from "./classes/Graph.js";
import { RACE_SCATTER_PLOT, BAIL_CASES_SCATTER_PLOT } from "./data.js";

/* PLOT CREATION FUNCTIONS */
const createRaceScatterPlot = () => {
  const xAxis = {
    name: "Cash Bail Rate",
    min: 20,
    max: 100,
    numTicks: 8,
    convert: num => `${num}%`
  };
  const yAxis = {
    name: "Bail Amount",
    min: 0,
    max: 80000,
    numTicks: 8,
    convert: num => num === 0 ? "0" : `${num / 1000}K`
  };
  const toText = {
    xHeader: "% Cash Bail",
    yHeader: "Avg. Bail Amount",
    x: value => `${value.toFixed(1)}%`,
    y: value => value
  };

  const container = document.getElementById("race-scatter-plot");
  return new ScatterPlot(RACE_SCATTER_PLOT, xAxis, yAxis, toText, null, container);
};

const createCasesScatterPlot = () => {
  const xAxis = {
    name: "Cash Bail Rate",
    min: 20,
    max: 60,
    numTicks: 8,
    convert: num => `${num}%`
  };
  const yAxis = {
    name: "Bail Amount",
    min: 0,
    max: 70,
    numTicks: 7,
    convert: num => num === 0 ? "0" : `${num}K`
  };
  const toText = {
    xHeader: "% Cash Bail",
    yHeader: "Avg. Bail Amount",
    x: value => `${value.toFixed(1)}%`,
    y: value => value
  };
  const radiusScale = {
    min: 4,
    max: 60,
    minValue: 100,
    maxValue: 30000
  };

  const container = document.getElementById("cases-scatter-plot");
  return new ScatterPlot(BAIL_CASES_SCATTER_PLOT, xAxis, yAxis, toText, radiusScale, container);
};

/* RENDER PAGE */
createRaceScatterPlot();
createCasesScatterPlot();
