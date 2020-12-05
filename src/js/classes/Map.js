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
const LEGEND_SECTION_WIDTH = 35;
const LEGEND_SECTION_HEIGHT = 10;
const LEGEND_OFFSET_X = 300;
const LEGEND_OFFSET_Y = 55;
const LEGEND_LABEL_OFFSET_X = LEGEND_OFFSET_X - 4;
const LEGEND_LABEL_OFFSET_Y = LEGEND_OFFSET_Y + 22;

class Map {
  constructor() {
    this.svg = d3.select("body").append("svg")
      .attr("width", MAP_WIDTH)
      .attr("height", MAP_HEIGHT);
  }

  renderPA(features, path) {
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

    this.renderPA(features, path);
  }
}

export class BailRateMap extends Map {
  constructor(data) {
    super();
    this.data = data;
    this.colorDomain = [10, 20, 30, 40, 50, 60];
    this.labels = [0, 10, 20, 30, 40, 50, 60];
    this.color = d3.scaleThreshold().domain(this.colorDomain).range([
      "#182935", "#215f5d", "#1b9b88", "#0fc59b", "0fda92", "00ed89"
    ]);
    this.render();
  }

  onMouseOver(event) {
    d3.select(event.srcElement).style("stroke-width", "2px");
    this.highlightBar(event);
  }

  onMouseOut(event) {
    d3.select(event.srcElement).style("stroke-width", "0.5px");
    this.resetHighlight();
  }

  highlightBar(event) {
    const bucket = Number(event.srcElement.getAttribute("data-bucket"));
    // darken other legend bars
    this.svg.selectAll(`rect:not([data-bucket="${bucket}"])`).style("opacity", "0.2");
    // darken other legend labels, except for the start & end of highlighted bar
    this.svg.selectAll(`text:not([data-bucket*="${bucket}"])`).style("opacity", "0.4");
  }

  highlightMap(event) {
    const bucket = event.srcElement.getAttribute("data-bucket");
    this.svg.selectAll(`path:not([data-bucket="${bucket}"])`).style("opacity", "0.2");
  }

  resetHighlight() {
    this.svg.selectAll("rect").style("opacity", "1");
    this.svg.selectAll("text").style("opacity", "1");
    this.svg.selectAll("path").style("opacity", "1");
  }

  renderLegend() {
    const legend = this.svg.selectAll("g")
      .data(this.labels)
      .enter().append("g")
      .attr("class", "legend")
      .attr("data-label", d => d);
    legend.append("rect")
      .attr("x", (_, i) => LEGEND_OFFSET_X + (i-1)*LEGEND_SECTION_WIDTH) // i is 1-indexed
      .attr("y", LEGEND_OFFSET_Y)
      .attr("width", LEGEND_SECTION_WIDTH)
      .attr("height", LEGEND_SECTION_HEIGHT)
      .attr("data-bucket", d => d)
      .style("fill", d => this.color(d - 0.01))
      .on("mouseover", event => {
        this.highlightBar(event);
        this.highlightMap(event);
      })
      .on("mouseout", () => {
        this.resetHighlight();
      });
    legend.append("text")
      .attr("x", (_, i) => LEGEND_LABEL_OFFSET_X + (i-1)*LEGEND_SECTION_WIDTH)
      .attr("y", LEGEND_LABEL_OFFSET_Y)
      .attr("class", "legend-text")
      .attr("data-bucket", d => {
        const color = this.color(d - 0.01);
        const [start, end] = this.color.invertExtent(color);
        return `${start}-${end}`;
      })
      .text((_, i) => `${this.labels[i-1]}`);
    // set up legend max label
    this.svg.select(`g[data-label="${this.labels[this.labels.length - 1]}"]`)
      .append("text")
      .attr("x", LEGEND_LABEL_OFFSET_X  + (this.labels.length-1)*LEGEND_SECTION_WIDTH)
      .attr("y", LEGEND_LABEL_OFFSET_Y)
      .attr("class", "legend-text")
      .attr("data-bucket", this.labels[this.labels.length - 1])
      .text(this.labels[this.labels.length - 1]);
  }

  renderPA(features, path) {
    this.data.forEach(row => {
      const countyName = row.data[0];
      const cashBailRate = row.data[2];
      const feature = features.find(f => f.properties["NAME"] === countyName);
      feature.properties.color = this.color(cashBailRate);
      feature.properties.bucket = this.color.invertExtent(feature.properties.color)[1];
    });
    const paths = super.renderPA(features, path);
    paths.style("fill", feature => feature.properties.color)
      .attr("data-bucket", feature => feature.properties.bucket);

    this.renderLegend();
  }
}