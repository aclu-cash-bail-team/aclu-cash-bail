import * as d3 from "d3";
import { feature } from "topojson";
import { COUNTY_MAP_DATA } from "../data.js";

// These values were manually configured to render the map centered and scaled
const MAP_WIDTH = 800;
const MAP_HEIGHT = 500;
const MAP_SCALE_FACTOR = 40;
const MAP_TRANSFORM = {
  "scale":[
    0.0016 * MAP_SCALE_FACTOR,
    0.0013 * MAP_SCALE_FACTOR
  ],
  "translate":[
    -135,
    -50
  ]
};

export class Map {
  constructor() {
    this.svg = d3.select("body").append("svg")
      .attr("width", MAP_WIDTH)
      .attr("height", MAP_HEIGHT);
  }

  renderMap(features, path) {
    return this.svg.append("g")
      .attr("class", "county")
      .selectAll("path")
      .data(features)
      .enter().append("path")
      .attr("d", path)
      .on("mouseover", this.onMouseOver.bind(this))
      .on("mouseout", this.onMouseOut.bind(this));
  }

  onMouseOver() {}
  onMouseOut() {}

  render() {
    const projection = d3.geoMercator();
    const path = d3.geoPath().projection(projection);

    const countyTopoJson = JSON.parse(JSON.stringify(COUNTY_MAP_DATA));
    countyTopoJson.transform = MAP_TRANSFORM;
    const features = feature(countyTopoJson, countyTopoJson.objects["cb_2015_pennsylvania_county_20m"]).features;

    this.renderMap(features, path);
  }
}
