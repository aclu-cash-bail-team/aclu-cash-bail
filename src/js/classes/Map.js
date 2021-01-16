import * as d3 from "d3";
import { feature } from "topojson";
import { COUNTY_MAP_DATA } from "../data.js";

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

const PHILADELPHIA_X = 643;
const PHILADELPHIA_Y = 359;
const HARRISBURG_X = 477;
const HARRISBURG_Y = 319;
const PITTSBURGH_X = 170;
const PITTSBURGH_Y = 310;
const CITY_LABEL_OFFSET_Y = 15;

class Map {
  constructor(width, height) {
    this.svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height);
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

  onMouseOver(event) {
    this.showTooltip(event);
  }

  onMouseOut() {
    this.hideTooltip();
  }

  showTooltip(event) {
    this.tooltip.style("opacity", 1);
    this.tooltip
      .style("left", `${event.pageX - 100}px`)
      .style("top", `${event.pageY - 70}px`);
  }

  hideTooltip() {
    this.tooltip.style("opacity", 0);
  }

  render() {
    const projection = d3.geoMercator();
    const path = d3.geoPath().projection(projection);

    const countyTopoJson = JSON.parse(JSON.stringify(COUNTY_MAP_DATA));
    countyTopoJson.transform = MAP_TRANSFORM;
    const features = feature(countyTopoJson, countyTopoJson.objects["cb_2015_pennsylvania_county_20m"]).features;

    this.tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);


    this.renderPA(features, path);
  }
}

export class BailRateMap extends Map {
  constructor(data, average) {
    super(800, 500);
    this.data = data;
    this.average = average;
    this.colorDomain = [10, 20, 30, 40, 50, 60];
    this.labels = [0, 10, 20, 30, 40, 50, 60];
    this.color = d3.scaleThreshold().domain(this.colorDomain).range([
      "#182935", "#215f5d", "#1b9b88", "#0fc59b", "#0fda92", "#00ed89"
    ]);

    this.legendSectionWidth = 35;
    this.legendSectionHeight = 10;
    this.legendOffsetX = 300;
    this.legendOffsetY = 55;
    this.legendLabelOffsetX = this.legendOffsetX - 4;
    this.legendLabelOffsetY = this.legendOffsetY + 22;

    this.render();
  }

  onMouseOver(event) {
    super.onMouseOver(event);
    d3.select(event.srcElement).style("stroke-width", "2px");
    this.highlightBar(event);
  }

  onMouseOut(event) {
    super.onMouseOut();
    d3.select(event.srcElement).style("stroke-width", "0.5px");
    this.resetHighlight();
  }

  showTooltip(event) {
    super.showTooltip(event);
    const countyElement = event.srcElement;
    const countyName = countyElement.getAttribute("data-county-name");
    const countyRate = countyElement.getAttribute("data-rate");
    this.tooltip
      .style("left", `${event.pageX - 100}px`)
      .style("top", `${event.pageY - 70}px`)
      .html(`
        <h3 class="tooltip-name">${countyName}</h3>
        <table>
          <tbody>
            <tr>
              <td>Cash Bail Rate</td>
              <td style="text-align: right; font-weight: 700;">${`${Math.round(countyRate * 100) / 100}%`}</td>
            </tr>
          </tbody>
        </table>
      `);
  }


  highlightBar(event) {
    const bucket = Number(event.srcElement.getAttribute("data-bucket"));
    // darken other legend bars
    this.svg.selectAll(`rect:not([data-bucket="${bucket}"])`).style("opacity", "0.2");
    // darken other legend labels, except for the start & end of highlighted bar
    this.svg.selectAll(`.legend-text:not([data-bucket*="${bucket}"])`).style("opacity", "0.4");
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
      .attr("x", (_, i) => this.legendOffsetX + (i-1)*this.legendSectionWidth) // i is 1-indexed
      .attr("y", this.legendOffsetY)
      .attr("width", this.legendSectionWidth)
      .attr("height", this.legendSectionHeight)
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
      .attr("x", (_, i) => this.legendLabelOffsetX + (i-1)*this.legendSectionWidth)
      .attr("y", this.legendLabelOffsetY)
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
      .attr("x", this.legendLabelOffsetX  + (this.labels.length-1)*this.legendSectionWidth)
      .attr("y", this.legendLabelOffsetY)
      .attr("class", "legend-text")
      .attr("data-bucket", this.labels[this.labels.length - 1])
      .text(this.labels[this.labels.length - 1]);
    // set up average label
    const legendWidth = this.legendSectionWidth * this.colorDomain.length;
    const maxValue = this.colorDomain[this.colorDomain.length - 1];
    const avgOffsetX = this.legendOffsetX + legendWidth * this.average / maxValue;
    this.svg.append("line")
      .attr("x1", avgOffsetX)
      .attr("x2", avgOffsetX)
      .attr("y1", this.legendOffsetY + 10)
      .attr("y2", this.legendOffsetY - 5)
      .attr("class", "legend-avg-line");
    this.svg.append("text")
      .attr("x", avgOffsetX - 20)
      .attr("y", this.legendOffsetY - 10)
      .attr("class", "legend-avg-label")
      .text(`Avg: ${this.average}%`);
  }

  renderCities() {
    // Philadelphia
    this.svg.append("circle")
      .attr("cx", PHILADELPHIA_X)
      .attr("cy", PHILADELPHIA_Y)
      .attr("r", 4)
      .attr("fill", "white");
    this.svg.append("text")
      .attr("x", PHILADELPHIA_X - 43)
      .attr("y", PHILADELPHIA_Y - CITY_LABEL_OFFSET_Y)
      .attr("class", "city-label")
      .text("Philadelphia");

    // Harrisburg
    this.svg.append("circle")
      .attr("cx", HARRISBURG_X)
      .attr("cy", HARRISBURG_Y)
      .attr("r", 4)
      .attr("fill", "white");
    this.svg.append("text")
      .attr("x", HARRISBURG_X - 29)
      .attr("y", HARRISBURG_Y - CITY_LABEL_OFFSET_Y)
      .attr("class", "city-label")
      .text("Harrisburg");

    // Pittsburgh
    this.svg.append("circle")
      .attr("cx", PITTSBURGH_X)
      .attr("cy", PITTSBURGH_Y)
      .attr("r", 4)
      .attr("fill", "white");
    this.svg.append("text")
      .attr("x", PITTSBURGH_X - 27)
      .attr("y", PITTSBURGH_Y - CITY_LABEL_OFFSET_Y)
      .attr("class", "city-label")
      .text("Pittsburgh");

  }

  renderPA(features, path) {
    this.data.forEach(row => {
      const countyName = row.data[0];
      const cashBailRate = row.data[2];
      const feature = features.find(f => f.properties["NAME"] === countyName);
      feature.properties.rate = cashBailRate;
      feature.properties.color = this.color(cashBailRate);
      feature.properties.bucket = this.color.invertExtent(feature.properties.color)[1];
    });
    const paths = super.renderPA(features, path);
    paths.style("fill", feature => feature.properties.color)
      .attr("data-bucket", feature => feature.properties.bucket)
      .attr("data-county-name", feature => feature.properties["NAME"])
      .attr("data-rate", feature => feature.properties.rate);

    this.renderLegend();

    this.renderCities();
  }
}

export class BailRaceMap extends Map {
  constructor(data, dataIdx, race, parent) {
    super(800, 500);
    this.data = data;
    this.dataIdx = dataIdx;
    this.race = race;
    this.parent = parent;
    this.colorDomain = [20, 40, 60, 80, 100];
    this.labels = [0, 20, 40, 60, 80, 100];
    this.color = d3.scaleThreshold().domain(this.colorDomain).range([
      "#CC2FFF", "#B08CF0", "#7AC7DF", "#5DDAB5", "#00ED89"
    ]);

    this.LEGEND_SECTION_WIDTH = 75;
    this.LEGEND_SECTION_HEIGHT = 10;
    this.LEGEND_OFFSET_X = 400;
    this.LEGEND_OFFSET_Y = 55;
    this.LEGEND_LABEL_OFFSET_X = this.LEGEND_OFFSET_X - 4;
    this.LEGEND_LABEL_OFFSET_Y = this.LEGEND_OFFSET_Y + 22;

    this.render();
  }

  // Called by parent
  _onMouseOver(countyName, x, y) {
    const element = document.querySelector(`path[data-county-name="${countyName}"][data-race="${this.race}"]`);
    this.svg.selectAll(`path[data-county-name="${countyName}"]`).style("stroke-width", "2px");
    this.showTooltip(countyName, element.getAttribute("data-rate"), x, y);
  }
  _onMouseOut(countyName) {
    super.onMouseOut();
    this.svg.selectAll(`path[data-county-name="${countyName}"]`).style("stroke-width", "0.5px");
  }

  showTooltip(countyName, countyRate, x, y) {
    // Requires subclass to know about superclass, making superclass harder to change
    // TODO: See if this can be done better
    super.showTooltip({
      pageX: x,
      pageY: y
    });
    this.tooltip
      .style("left", `${x - 100}px`)
      .style("top", `${y - 70}px`)
      .html(`
        <h3 class="tooltip-name">${countyName}</h3>
        <table>
          <tbody>
            <tr>
              <td>Cash Bail Race</td>
              <td style="text-align: right; font-weight: 700;">${`${Math.round(countyRate * 100) / 100}%`}</td>
            </tr>
          </tbody>
        </table>
      `);
  }

  highlightMap(bucket) {
    this.svg.selectAll(`path:not([data-bucket="${bucket}"])`).style("opacity", "0.2");
  }

  resetHighlight() {
    this.svg.selectAll("rect").style("opacity", "1");
    this.svg.selectAll("text").style("opacity", "1");
    this.svg.selectAll("path").style("opacity", "1");
  }

  onMouseOver(event) {
    this.parent.onMouseOver(event, this.race);
    this.parent.highlightBar(event);
  }

  onMouseOut(event) {
    this.parent.onMouseOut(event);
    this.parent.resetHighlight(event);
  }

  renderCities() {
    // Philadelphia
    this.svg.append("circle")
      .attr("cx", PHILADELPHIA_X)
      .attr("cy", PHILADELPHIA_Y)
      .attr("r", 4)
      .attr("fill", "white");
    this.svg.append("text")
      .attr("x", PHILADELPHIA_X - 43)
      .attr("y", PHILADELPHIA_Y - CITY_LABEL_OFFSET_Y)
      .attr("class", "city-label")
      .text("Philadelphia");

    // Harrisburg
    this.svg.append("circle")
      .attr("cx", HARRISBURG_X)
      .attr("cy", HARRISBURG_Y)
      .attr("r", 4)
      .attr("fill", "white");
    this.svg.append("text")
      .attr("x", HARRISBURG_X - 29)
      .attr("y", HARRISBURG_Y - CITY_LABEL_OFFSET_Y)
      .attr("class", "city-label")
      .text("Harrisburg");

    // Pittsburgh
    this.svg.append("circle")
      .attr("cx", PITTSBURGH_X)
      .attr("cy", PITTSBURGH_Y)
      .attr("r", 4)
      .attr("fill", "white");
    this.svg.append("text")
      .attr("x", PITTSBURGH_X - 27)
      .attr("y", PITTSBURGH_Y - CITY_LABEL_OFFSET_Y)
      .attr("class", "city-label")
      .text("Pittsburgh");

  }

  renderPA(features, path) {
    this.data.forEach(row => {
      const countyName = row.data[0];
      const cashBailRate = row.data[this.dataIdx];
      const feature = features.find(f => f.properties["NAME"] === countyName);
      feature.properties.rate = cashBailRate;
      feature.properties.color = this.color(cashBailRate);
      if (row.outlier) {
        feature.properties.color = "#303030";
      }
      feature.properties.bucket = this.color.invertExtent(feature.properties.color)[1];
    });
    const paths = super.renderPA(features, path);
    paths.style("fill", feature => feature.properties.color)
      .attr("data-bucket", feature => feature.properties.bucket)
      .attr("data-county-name", feature => feature.properties["NAME"])
      .attr("data-rate", feature => feature.properties.rate)
      .attr("data-race", () => this.race);

    this.renderCities();
  }
}


export class RaceMapContainer {
  registerBlack(map) {
    this.black = map;
  }

  registerWhite(map) {
    this.white = map;
  }

  onMouseOver(event, race) {
    const countyName = event.srcElement.getAttribute("data-county-name");
    if (race == "black") {
      this.black._onMouseOver(countyName, event.pageX, event.pageY);
      this.white._onMouseOver(countyName, event.pageX + 800, event.pageY);
    } else if (race == "white") {
      this.black._onMouseOver(countyName, event.pageX - 800, event.pageY)
      this.white._onMouseOver(countyName, event.pageX, event.pageY);
    }
  }

  onMouseOut(event) {
    const countyName = event.srcElement.getAttribute("data-county-name");
    this.black._onMouseOut(countyName);
    this.white._onMouseOut(countyName);
  }


  highlightBar(event) {
    // const bucket = Number(event.srcElement.getAttribute("data-bucket"));
    // // darken other legend bars
    // this.svg.selectAll(`rect:not([data-bucket="${bucket}"])`).style("opacity", "0.2");
    // // darken other legend labels, except for the start & end of highlighted bar
    // this.svg.selectAll(`.legend-text:not([data-bucket*="${bucket}"])`).style("opacity", "0.4");
  }

  // highlightMap(event) {
  //   const bucket = event.srcElement.getAttribute("data-bucket");
  //   this.svg.selectAll(`path:not([data-bucket="${bucket}"])`).style("opacity", "0.2");
  // }

  resetHighlight() {
    this.black.resetHighlight();
    this.white.resetHighlight();
  }

  renderLegend() {
  //   const legend = this.svg.selectAll("g")
  //     .data(this.labels)
  //     .enter().append("g")
  //     .attr("class", "legend")
  //     .attr("data-label", d => d);
  //   legend.append("rect")
  //     .attr("x", (_, i) => this.LEGEND_OFFSET_X + (i-1)*this.LEGEND_SECTION_WIDTH) // i is 1-indexed
  //     .attr("y", this.LEGEND_OFFSET_Y)
  //     .attr("width", this.LEGEND_SECTION_WIDTH)
  //     .attr("height", this.LEGEND_SECTION_HEIGHT)
  //     .attr("data-bucket", d => d)
  //     .style("fill", d => this.color(d - 0.01))
  //     .on("mouseover", event => {
  //       this.highlightBar(event);
  //       this.highlightMap(event);
  //     })
  //     .on("mouseout", () => {
  //       this.resetHighlight();
  //     });
  //   legend.append("text")
  //     .attr("x", (_, i) => this.LEGEND_LABEL_OFFSET_X + (i-1)*this.LEGEND_SECTION_WIDTH)
  //     .attr("y", this.LEGEND_LABEL_OFFSET_Y)
  //     .attr("class", "legend-text")
  //     .attr("data-bucket", d => {
  //       const color = this.color(d - 0.01);
  //       const [start, end] = this.color.invertExtent(color);
  //       return `${start}-${end}`;
  //     })
  //     .text((_, i) => `${this.labels[i-1]}`);
  //   // set up legend max label
  //   this.svg.select(`g[data-label="${this.labels[this.labels.length - 1]}"]`)
  //     .append("text")
  //     .attr("x", this.LEGEND_LABEL_OFFSET_X  + (this.labels.length-1)*this.LEGEND_SECTION_WIDTH)
  //     .attr("y", this.LEGEND_LABEL_OFFSET_Y)
  //     .attr("class", "legend-text")
  //     .attr("data-bucket", this.labels[this.labels.length - 1])
  //     .text(this.labels[this.labels.length - 1]);
  //   // set up average label
  //   const legendWidth = this.LEGEND_SECTION_WIDTH * this.colorDomain.length;
  //   const maxValue = this.colorDomain[this.colorDomain.length - 1];
  //   const blackAvgOffsetX = this.LEGEND_OFFSET_X + legendWidth * this.blackAverage / maxValue;
  //   const whiteAvgOffsetX = this.LEGEND_OFFSET_X + legendWidth * this.whiteAverage / maxValue;
  //   this.svg.append("line")
  //     .attr("x1", blackAvgOffsetX)
  //     .attr("x2", blackAvgOffsetX)
  //     .attr("y1", this.LEGEND_OFFSET_Y + 10)
  //     .attr("y2", this.LEGEND_OFFSET_Y - 5)
  //     .attr("class", "legend-avg-line");
  //   this.svg.append("text")
  //     .attr("x", blackAvgOffsetX - 20)
  //     .attr("y", this.LEGEND_OFFSET_Y - 10)
  //     .attr("class", "legend-avg-label")
  //     .text(`Black: ${this.blackAverage}%`);
  //   this.svg.append("line")
  //     .attr("x1", whiteAvgOffsetX)
  //     .attr("x2", whiteAvgOffsetX)
  //     .attr("y1", this.LEGEND_OFFSET_Y + 10)
  //     .attr("y2", this.LEGEND_OFFSET_Y - 5)
  //     .attr("class", "legend-avg-line");
  //   this.svg.append("text")
  //     .attr("x", whiteAvgOffsetX - 20)
  //     .attr("y", this.LEGEND_OFFSET_Y - 10)
  //     .attr("class", "legend-avg-label")
  //     .text(`White: ${this.whiteAverage}%`);
  }

}