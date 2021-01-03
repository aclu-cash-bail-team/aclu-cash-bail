import { ScatterPlot } from "./classes/Graph.js";
import { RACE_SCATTER_PLOT } from "./data.js";

/* PLOT CREATION FUNCTIONS */
const createRaceScatterPlot = () => {
  const xAxis = {
    name: "Cash Bail Rate",
    min: 20,
    max: 100,
    numTicks: 8,
    convert: num => `${num}%`,
    unit: "%"
  };
  const yAxis = {
    name: "Bail Amount",
    min: 0,
    max: 80000,
    numTicks: 8,
    convert: num => num === 0 ? "0" : `${num / 1000}K`
  };

  const container = document.getElementById("race-scatter-plot");
  return new ScatterPlot(RACE_SCATTER_PLOT, xAxis, yAxis, container);
};

/* RENDER PAGE */
createRaceScatterPlot();
