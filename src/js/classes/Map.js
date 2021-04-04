import * as d3 from "d3";
import { feature } from "topojson";
import { COUNTY_MAP_DATA } from "../data.js";
import { configureTooltip } from "./Tooltip";

const DEFAULT_MAP_WIDTH = 600;
const DEFAULT_MAP_HEIGHT = 400;

const COUNTY_NAME_ATTRIBUTE = "data-county-name";
const BUCKET_ATTRIBUTE = "data-bucket";

class ColorScaleLegend {
  constructor(id, colorDomain, labels, color, averages, onMouseOver, onMouseOut, title = "", offsetY = 35) {
    this.colorDomain = colorDomain;
    this.labels = labels;
    this.color = color;
    this.averages = averages;
    this.title = title;
    this.onMouseOver = onMouseOver;
    this.onMouseOut = onMouseOut;

    this.sectionWidth = 50;
    this.sectionHeight = 10;
    this.offsetX = 7;
    this.offsetY = offsetY;
    this.labelOffsetX = this.offsetX - 9;
    this.labelOffsetY = this.offsetY + 28;
    this.legendWidth = this.sectionWidth * this.colorDomain.length;

    const svgWidth = this.legendWidth + 30;
    const svgHeight = this.sectionHeight + this.labelOffsetY + 10;
    this.svg = d3.select(`#${id} .color-scale-legend`).append("svg")
      .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
  }

  highlightBars(buckets) {
    // darken all legend bars
    this.svg.selectAll(".legend-bar").style("opacity", "0.2");
    // darken all legend labels
    this.svg.selectAll(".legend-text").style("opacity", "0.4");
    // highlight desired legend bars
    buckets.forEach(bucket => {
      this.svg.selectAll(`.legend-bar[${BUCKET_ATTRIBUTE}="${bucket}"]`).style("opacity", "1");
      this.svg.selectAll(`.legend-text[${BUCKET_ATTRIBUTE}*="${bucket}"]`).style("opacity", "1");
    });
  }

  resetHighlight() {
    this.svg.selectAll(".legend-bar").style("opacity", "1");
    this.svg.selectAll(".legend-text").style("opacity", "1");
  }

  render() {
    const legend = this.svg.selectAll("g")
      .data(this.labels.slice(0, this.labels.length - 1))
      .enter().append("g")
      .attr("data-label", d => d);
    // Add colored bars
    legend.append("rect")
      .attr("class", "legend-bar")
      .attr("x", (_, i) => this.offsetX + i*this.sectionWidth)
      .attr("y", this.offsetY)
      .attr("width", this.sectionWidth)
      .attr("height", this.sectionHeight)
      .attr(BUCKET_ATTRIBUTE, (_, i) => this.labels[i + 1])
      .style("fill", d => this.color(d))
      .on("mouseover", event => {
        this.onMouseOver(event);
      })
      .on("mouseout", () => {
        this.onMouseOut();
      });
    // Add labels
    const legendTextClassName = "legend-text";
    const smallLabelOffset = i => this.labels[i].toString().length < 2 ? 2 : 0;
    legend.append("text")
      .attr("x", (_, i) => this.labelOffsetX + i*this.sectionWidth + smallLabelOffset(i))
      .attr("y", this.labelOffsetY)
      .attr("class", legendTextClassName)
      .attr(BUCKET_ATTRIBUTE, d => {
        const color = this.color(d);
        const [start, end] = this.color.invertExtent(color);
        return `${start}-${end}`;
      })
      .text((_, i) => `${this.labels[i]}`);
    // Set up legend max label
    this.svg.select(`g[data-label="${this.labels[this.labels.length - 2]}"]`)
      .append("text")
      .attr("x", this.labelOffsetX  + (this.labels.length-1)*this.sectionWidth)
      .attr("y", this.labelOffsetY)
      .attr("class", legendTextClassName)
      .attr(BUCKET_ATTRIBUTE, this.labels[this.labels.length - 1])
      .text(this.labels[this.labels.length - 1] + "%");
    // Set up average label
    const maxValue = this.colorDomain[this.colorDomain.length - 1];
    this.averages.forEach(avg => {
      const avgOffsetX = this.offsetX + this.legendWidth * avg.value / maxValue;
      const legendLineClassName ="legend-avg-line";
      this.svg.append("line")
        .attr("x1", avgOffsetX)
        .attr("x2", avgOffsetX)
        .attr("y1", this.offsetY + 10)
        .attr("y2", this.offsetY - 5)
        .attr("class", legendLineClassName);
      this.svg.append("text")
        .attr("x", avgOffsetX - 13)
        .attr("y", this.offsetY - 25)
        .attr("class", legendTextClassName)
        .text(avg.label);
      this.svg.append("text")
        .attr("x", avgOffsetX - 15)
        .attr("y", this.offsetY - 10)
        .attr("class", legendTextClassName)
        .text(`${avg.value}%`);
      // Add title, if any
      this.svg.append("text")
        .attr("x", this.legendWidth/2 - 45)
        .attr("y", this.offsetY + 45)
        .attr("class", legendTextClassName)
        .text(this.title);
    });
  }
}

class SpikeLegend {
  constructor(id, title, values, getSpike) {
    this.title = title;
    this.values = values;
    this.getSpike = getSpike;

    this.spikeOffsetY = 110;
    this.spikeOffsetX = 40;
    this.spikeSpacingX = 30;

    const svgWidth = 140;
    const svgHeight = this.spikeOffsetY + 25;
    this.svg = d3.select(`#${id} .spike-legend`).append("svg")
      .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
  }

  render() {
    this.svg.append("g")
      .selectAll("path")
      .data(this.values).enter()
      .append("path")
      .attr("d", this.getSpike)
      .attr("transform", (_, i) => {
        return `translate(${i * this.spikeSpacingX + this.spikeOffsetX}, ${this.spikeOffsetY})`;
      })
      .attr("fill", "#404040")
      .attr("stroke", "#1a1a1a")
      .attr("opacity", 1);
    // Add spike labels
    this.svg.append("g")
      .selectAll("path")
      .data(this.values)
      .join("text")
      .attr("x", (_, i) => i * this.spikeSpacingX + this.spikeOffsetX/2)
      .attr("y", (_, i) => (this.values.length - i - 1) * 30 + 15)
      .attr("class", "legend-text")
      .text(d => d);
    // Add title
    this.svg.append("text")
      .attr("x", 10)
      .attr("y", this.spikeOffsetY + 20)
      .attr("class", "legend-text")
      .text(this.title);
  }
}

class Map {
  constructor(selector, tooltipSchema = {}) {
    this.svg = d3.select(selector)
      .append("svg")
      .attr("viewBox", `0 0 ${DEFAULT_MAP_WIDTH} ${DEFAULT_MAP_HEIGHT}`);

    this.projection = d3.geoMercator().scale(5500).center([-75.75, 40.5]);

    this.renderTooltip = configureTooltip({...tooltipSchema, trigger: "manual", placement: "top"});
  }

  renderCity(name, coords, labelCoords) {
    this.svg.append("circle")
      .attr("transform", `translate(${this.projection(coords)})`)
      .attr("r", 4)
      .attr("fill", "white");
    this.svg.append("text")
      .attr("transform", `translate(${this.projection(labelCoords)})`)
      .attr("class", "city-label")
      .text(name);
  }

  renderCities() {
    this.renderCity("Philadelphia", [-75.4, 39.9], [-75.75, 40]);
    this.renderCity("Harrisburg", [-76.9, 40.3], [-77.15, 40.375]);
    this.renderCity("Pittsburgh", [-80, 40.44], [-80.25, 40.3]);
  }

  renderPA(features, path) {
    return this.svg.append("g")
      .attr("class", "county")
      .selectAll("path")
      .data(features)
      .enter().append("path")
      .attr("d", path)
      .attr("class", "county-path")
      .attr(COUNTY_NAME_ATTRIBUTE, feature => feature.properties["NAME"])
      .on("mouseenter focus", this.onMouseEnter.bind(this))
      .on("mouseout", this.onMouseOut.bind(this));
  }

  onMouseEnter(event) {
    this.showTooltip(event.target, {});
  }

  onMouseOut() {
    this.hideTooltip();
  }

  showTooltip(element, data) {
    this.tooltip = this.renderTooltip(element, [data], data["name"]);
    this.tooltip.show();
  }

  hideTooltip() {
    if(this.tooltip) {
      this.tooltip.hide();
      this.tooltip.destroy();
    }
  }

  render() {
    const path = d3.geoPath().projection(this.projection);

    const countyTopoJson = JSON.parse(JSON.stringify(COUNTY_MAP_DATA));
    const features = feature(countyTopoJson, countyTopoJson.objects["pa_counties"]).features;

    this.renderPA(features, path);
  }
}

export class BailRateMap extends Map {
  constructor(id, data, average) {
    super(`#${id} .map`, {rows: [
      { rowHeader: "Cash Bail Rate", dataKey: "x", render: value => `${value.toFixed(1)}%`},
    ]});
    this.id = id;
    this.data = data;

    const colorDomain = [10, 20, 30, 40, 50, 60];
    this.color = d3.scaleThreshold().domain(colorDomain).range([
      "#182935", "#215f5d", "#1b9b88", "#0fc59b", "#0fda92", "#00ed89"
    ]);

    const onLegendMouseOver = (event) => {
      this.highlightBar(event.target);
      this.highlightMap(event.target);
    };
    const onLegendMouseOut = () => this.resetHighlight();
    onLegendMouseOver.bind(this);
    onLegendMouseOut.bind(this);

    this.legend = new ColorScaleLegend(id,
      colorDomain,
      [0, 10, 20, 30, 40, 50, 60],
      this.color,
      [{
        value: average,
        label: "Avg"
      }],
      onLegendMouseOver,
      onLegendMouseOut
    );

    this.render();
  }

  onMouseEnter(event) {
    super.onMouseEnter(event);
    d3.select(event.target).style("stroke-width", "2px");
    this.highlightBar(event.target);
  }

  onMouseOut(event) {
    super.onMouseOut();
    d3.select(event.target).style("stroke-width", "1px");
    this.resetHighlight();
  }

  showTooltip(element) {
    const countyName = element.getAttribute(COUNTY_NAME_ATTRIBUTE);
    const countyRate = Number(element.getAttribute("data-rate"));
    super.showTooltip(element, {name: countyName, x: countyRate});
  }

  highlightBar(element) {
    const bucket = Number(element.getAttribute(BUCKET_ATTRIBUTE));
    this.legend.highlightBars([bucket]);
  }

  highlightMap(element) {
    const bucket = element.getAttribute(BUCKET_ATTRIBUTE);
    this.svg.selectAll(`path:not([${BUCKET_ATTRIBUTE}="${bucket}"])`).style("opacity", "0.2");
  }

  resetHighlight() {
    this.legend.resetHighlight();
    this.svg.selectAll("path").style("opacity", "1");
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
      .attr(BUCKET_ATTRIBUTE, feature => feature.properties.bucket)
      .attr("data-rate", feature => feature.properties.rate);

    this.legend.render();

    this.renderCities();
  }
}

class BailRaceMap extends Map {
  constructor(selector, data, color, dataIdx, race, parent) {
    super(selector, {rows: [
      { rowHeader: "Cash Bail Rate", dataKey: "x", render: value => `${value.toFixed(1)}%`},
    ]});
    this.data = data;
    this.dataIdx = dataIdx;
    this.race = race;
    this.parent = parent;
    this.color = color;
    this.countyNameToBucket = {};
  }

  // Called by parent
  _onMouseEnter(countyName) {
    const element = document.querySelector(`path[${COUNTY_NAME_ATTRIBUTE}="${countyName}"][data-race="${this.race}"]`);
    const countyRate = Number(element.getAttribute("data-rate"));
    this.svg.selectAll(`path[${COUNTY_NAME_ATTRIBUTE}="${countyName}"]`).style("stroke-width", "2px");
    super.showTooltip(element, {name: countyName, x: countyRate});
  }
  _onMouseOut(countyName) {
    super.onMouseOut();
    this.svg.selectAll(`path[${COUNTY_NAME_ATTRIBUTE}="${countyName}"]`).style("stroke-width", "1px");
  }

  highlightMap(bucket) {
    this.svg.selectAll(`path:not([${BUCKET_ATTRIBUTE}="${bucket}"])`).style("opacity", "0.2");
  }

  resetHighlight() {
    this.svg.selectAll("rect").style("opacity", "1");
    this.svg.selectAll("text").style("opacity", "1");
    this.svg.selectAll("path").style("opacity", "1");
  }

  onMouseEnter(event) {
    this.parent.onChildMouseEnter(event);
  }

  onMouseOut(event) {
    this.parent.onChildMouseOut(event);
  }

  getBucket(countyName) {
    return Number(this.countyNameToBucket[countyName]);
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
      this.countyNameToBucket[countyName] = feature.properties.bucket;
    });
    const paths = super.renderPA(features, path);
    paths.style("fill", feature => feature.properties.color)
      .attr(BUCKET_ATTRIBUTE, feature => feature.properties.bucket)
      .attr("data-rate", feature => feature.properties.rate)
      .attr("data-race", () => this.race);

    this.renderCities();
  }
}

export class RaceMapContainer {
  constructor(id, data, whiteAverage, blackAverage) {
    const colorDomain = [20, 40, 60, 80, 100];
    const color = d3.scaleThreshold().domain(colorDomain).range([
      "#CC2FFF", "#B08CF0", "#7AC7DF", "#5DDAB5", "#00ED89"
    ]);

    this.black = new BailRaceMap(`#${id} #black.map`, data, color, 2, "black", this);
    this.white = new BailRaceMap(`#${id} #white.map`, data, color, 3, "white", this);

    const onLegendMouseOver = (event) => {
      this.highlightBarFromLegend(event.target);
      this.highlightMap(event.target);
    };
    const onLegendMouseOut = () => this.resetHighlight();
    onLegendMouseOver.bind(this);
    onLegendMouseOut.bind(this);

    this.legend = new ColorScaleLegend(id,
      colorDomain,
      [0, 20, 40, 60, 80, 100],
      color,
      [{
        value: whiteAverage,
        label: "White"
      },
      {
        value: blackAverage,
        label: "Black"
      }
      ],
      onLegendMouseOver,
      onLegendMouseOut
    );

    this.render();
  }

  onChildMouseEnter(event) {
    const countyName = event.target.getAttribute(COUNTY_NAME_ATTRIBUTE);
    this.black._onMouseEnter(countyName);
    this.white._onMouseEnter(countyName);
    this.highlightBarFromMap(event.target);
  }

  onChildMouseOut(event) {
    const countyName = event.target.getAttribute(COUNTY_NAME_ATTRIBUTE);
    this.black._onMouseOut(countyName);
    this.white._onMouseOut(countyName);
    this.resetHighlight();
  }

  highlightBarFromLegend(element) {
    const bucket = element.getAttribute(BUCKET_ATTRIBUTE);
    this.legend.highlightBars([bucket]);
  }

  highlightBarFromMap(element) {
    const countyName = element.getAttribute(COUNTY_NAME_ATTRIBUTE);
    const buckets = [this.black.getBucket(countyName), this.white.getBucket(countyName)];
    this.legend.highlightBars(buckets);
  }

  highlightMap(element) {
    const bucket = element.getAttribute(BUCKET_ATTRIBUTE);
    this.black.highlightMap(bucket);
    this.white.highlightMap(bucket);
  }

  resetHighlight() {
    this.black.resetHighlight();
    this.white.resetHighlight();
    this.legend.resetHighlight();
  }

  render() {
    this.legend.render();
    this.black.render();
    this.white.render();
  }
}

export class BailPostingMap extends Map {
  constructor(id, data, average, upperBound) {
    super(`#${id} .map`, {rows: [
      { rowHeader: "Cash Bail Rate", dataKey: "x", render: value => `${value.toFixed(1)}%`},
      { rowHeader: "Avg. Bail Amount", dataKey: "y", render: value => value.toLocaleString("en", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}
    ]});
    this.data = data;

    const colorDomain = [20, 40, 60, 80, 100];
    this.color = d3.scaleThreshold().domain(colorDomain).range([
      "#CC2FFF", "#B08CF0", "#7AC7DF", "#5DDAB5", "#00ED89"
    ]);

    this.spikeScale = d3.scaleLinear([0, upperBound], [0, 100]);

    const onLegendMouseOver = (event) => {
      this.highlightBar(event.target);
      this.highlightMap(event.target);
    };
    const onLegendMouseOut = () => this.resetHighlight();
    onLegendMouseOver.bind(this);
    onLegendMouseOut.bind(this);

    this.legend = new ColorScaleLegend(id,
      colorDomain,
      [0, 20, 40, 60, 80, 100],
      this.color,
      [{
        value: average,
        label: "Avg"
      }],
      onLegendMouseOver,
      onLegendMouseOut,
      "Non-Posting Rate",
      85
    );

    const spike = this.spikeShape.bind(this);
    this.spikeLegend = new SpikeLegend(id, "Average Bail Amount", ["$20K", "$40K", "$60K"], spike);
    this.spikeLegend.render();

    this.render();
  }

  onMouseEnter(event) {
    super.onMouseEnter(event);
    if (event.target.classList.contains("county-path")) {
      d3.select(event.target).style("fill", "#181818");
    }
    this.highlightBar(event.target);
  }

  onMouseOut(event) {
    super.onMouseOut();
    if (event.target.classList.contains("county-path")) {
      d3.select(event.target).style("fill", "#1a1a1a");
    }
    this.resetHighlight();
  }

  showTooltip(element) {
    const countyName = element.getAttribute(COUNTY_NAME_ATTRIBUTE);
    const countyRate = Number(element.getAttribute("data-rate"));
    const countyAmount = element.getAttribute("data-bail-amount");
    super.showTooltip(element, {name: countyName, x: countyRate, y: countyAmount});
  }

  highlightBar(element) {
    const bucket = Number(element.getAttribute(BUCKET_ATTRIBUTE));
    this.legend.highlightBars([bucket]);
  }

  highlightMap(element) {
    const bucket = element.getAttribute(BUCKET_ATTRIBUTE);
    this.svg.selectAll("path").style("opacity", "0.2");
    this.svg.selectAll(`path.spike[${BUCKET_ATTRIBUTE}="${bucket}"`).style("opacity", "1");
  }

  resetHighlight() {
    this.legend.resetHighlight();
    this.svg.selectAll("path").style("opacity", "1");
  }

  spikeShape(bailAmount) {
    const length = this.spikeScale(Number(bailAmount.replace(/[^\d.-]/g, "")));
    const width = 5;
    return `M${-width / 2},0L0,${-length}L${width / 2},0`;
  }

  renderPA(features, path) {
    this.data.forEach(row => {
      const countyName = row.data[0];
      const bailAmount = row.data[1];
      const nonPostingRate = row.data[2];
      const feature = features.find(f => f.properties["NAME"] === countyName);
      feature.properties.rate = nonPostingRate;
      feature.properties.amount = bailAmount;
      feature.properties.color = this.color(nonPostingRate);
      feature.properties.bucket = this.color.invertExtent(feature.properties.color)[1];
      feature.properties.position = path.centroid(feature);
    });

    const paths = super.renderPA(features, path);
    paths.style("fill", "#1a1a1a")
      .attr("data-rate", feature => feature.properties.rate)
      .attr("data-bail-amount", feature => feature.properties.amount)
      .attr(BUCKET_ATTRIBUTE, feature => feature.properties.bucket);

    // Render spikes
    this.svg.append("g")
      .selectAll("path")
      .data(features
        .sort((a, b) => d3.ascending(a.properties.position[1], b.properties.position[1])
            || d3.ascending(a.properties.position[0], b.properties.position[0])))
      .join("path")
      .attr("transform", feature => {
        return `translate(${feature.properties.position})`;
      })
      .attr("d", feature => this.spikeShape(feature.properties.amount))
      .attr("fill", feature => feature.properties.color)
      .attr("stroke", feature => feature.properties.color)
      .attr("class", "spike")
      .attr("data-rate", feature => feature.properties.rate)
      .attr("data-bail-amount", feature => feature.properties.amount)
      .on("mouseenter focus", this.onMouseEnter.bind(this))
      .on("mouseout", this.onMouseOut.bind(this))
      .attr(BUCKET_ATTRIBUTE, feature => feature.properties.bucket)
      .attr(COUNTY_NAME_ATTRIBUTE, feature => feature.properties["NAME"]);

    this.legend.render();

    this.renderCities();
  }
}

export class SwitchableMap {
  constructor(leftMap, rightMap, container) {
    this.leftMap = leftMap;
    this.rightMap = rightMap;
    this.container = container;

    // set up switch buttons
    this.rightSwitch = container
      .getElementsByClassName("switch-container")[0]
      .getElementsByClassName("right")[0];
    this.rightSwitch.addEventListener("click", this.showRightTable.bind(this));

    this.leftSwitch = container
      .getElementsByClassName("switch-container")[0]
      .getElementsByClassName("left")[0];
    this.leftSwitch.addEventListener("click", this.showLeftTable.bind(this));

    // show left table by default
    this.showLeftTable();
  }

  showLeftTable() {
    const leftContainer = document.getElementById(this.leftMap.id);
    const rightContainer = document.getElementById(this.rightMap.id);
    leftContainer.style.display = "block";
    rightContainer.style.display = "none";
    this.leftSwitch.classList.add("showing");
    this.rightSwitch.classList.remove("showing");
  }

  showRightTable() {
    const leftContainer = document.getElementById(this.leftMap.id);
    const rightContainer = document.getElementById(this.rightMap.id);
    leftContainer.style.display = "none";
    rightContainer.style.display = "block";
    this.leftSwitch.classList.remove("showing");
    this.rightSwitch.classList.add("showing");
  }
}
