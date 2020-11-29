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

class Map {
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

export class BailRateMap extends Map {
  constructor(data) {
    super();
    this.data = data;
    this.colorDomain = [10, 20, 30, 40, 50, 60];
    this.color = d3.scaleThreshold().domain(this.colorDomain).range([
      "#182935", "#215f5d", "#1b9b88", "#0fc59b", "0fda92", "00ed89"
    ]);
    this.render();
  }

  onMouseOver(event) {
    d3.select(event.srcElement).style("stroke-width", "2px");
  }

  onMouseOut(event) {
    d3.select(event.srcElement).style("stroke-width", "0.5px");
  }

  renderMap(features, path) {
    this.data.forEach(row => {
      const countyName = row.data[0];
      const cashBailRate = row.data[2];
      const feature = features.find(f => f.properties["NAME"] === countyName);
      feature.properties.color = this.color(cashBailRate);
    });
    const paths = super.renderMap(features, path);
    paths.style("fill", feature => feature.properties.color);
  }
}