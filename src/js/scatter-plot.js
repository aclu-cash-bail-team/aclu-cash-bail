import { ScatterPlot } from "./classes/Graph.js";
import { RACE_SCATTER_PLOT } from "./data.js";

/* PLOT CREATION FUNCTIONS */
const createRaceScatterPlot = () => {
  const xAxis = {
    name: "Cash Bail Rate",
    min: 0,
    max: 100
  };
  const yAxis = {
    name: "Bail Amount",
    min: 0,
    max: 80000
  };

  const container = document.getElementById("race-scatter-plot");
  return new ScatterPlot(RACE_SCATTER_PLOT, xAxis, yAxis, container);
};

/* RENDER PAGE */
createRaceScatterPlot();
